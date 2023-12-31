import { registerPlugin } from '@wordpress/plugins';
import { useSelect } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';
import { usePinch, useDrag } from '@use-gesture/react';
import { toggleInserter, toggleListView, toggleSidebar } from './editor';
import {
	moveBlock,
	removeBlock,
	insertBlock,
	duplicateBlock,
	duplicateParentBlock,
	toggleBlockLock,
	toggleBlockMode,
} from './block';
import { sensitivityPresets } from './config';

/**
 * Gutenberg Gestures
 *
 * @description render register plugin gutenberg fn.
 *
 * @return {void}
 */
const GutenbergGestures = () => {
	const query = useRef(null);
	const isBlockedRef = useRef(false);

	useEffect(() => {
		query.current = document.querySelector(
			'.interface-interface-skeleton__body'
		);
	}, []);

	/**
	 * If Then
	 *
	 * @description debounce fn to avoid triggering multiple fns.
	 *
	 * @param {boolean}  condition
	 * @param {Function} fn
	 * @param {number}   debounce
	 *
	 * @return {void}
	 */
	const ifThen = (condition, fn, debounce = 100) => {
		if (!condition || isBlockedRef.current) {
			return;
		}

		isBlockedRef.current = true;
		fn();
		setTimeout(() => (isBlockedRef.current = false), debounce);
	};

	/**
	 * Select
	 *
	 * @description get required editor state values.
	 *
	 * @return {Object}
	 */
	const { isListViewOpen, isInserterOpen, isSidebarOpen, blockId } =
		useSelect((selectFn) => {
			const select = selectFn('core/edit-post');

			return {
				isInserterOpen: select.isInserterOpened(),
				isListViewOpen: select.isListViewOpened(),
				isSidebarOpen: select.isEditorSidebarOpened(),
				blockId:
					selectFn('core/block-editor').getSelectedBlock()?.clientId,
			};
		}, []);

	/**
	 * On Pinch
	 *
	 * @description register on pinch actions.
	 *
	 * @param {Object} state
	 *
	 * @return {void}
	 */
	const onPinch = (state) => {
		const { intentional, direction } = state;
		const isDown = direction[0] < 0;

		if (!blockId || !intentional) {
			return;
		}

		ifThen(isDown, () => removeBlock(blockId), 1000);
		ifThen(!isDown, () => duplicateBlock(blockId), 1000);
	};

	/**
	 * On Drag
	 *
	 * @description register on drag actions.
	 *
	 * @param {Object} state
	 *
	 * @return {void}
	 */
	const onDrag = (state) => {
		const {
			currentTarget,
			dragging,
			elapsedTime,
			initial,
			intentional,
			metaKey,
			movement,
			shiftKey,
			target,
			type,
			velocity,
		} = state;

		if (type !== 'pointermove') {
			return;
		}

		if (target?.classList?.contains('components-resizable-box__handle')) {
			return;
		}

		if (!dragging || !intentional) {
			return;
		}

		/**
		 * State
		 */
		const [initialX] = initial;
		const [movementX, movementY] = movement;
		const [velocityX, velocityY] = velocity;

		/**
		 * Keys
		 */
		const keys = {
			fnOnly: metaKey && shiftKey === false,
			none: metaKey === false && shiftKey === false,
			both: metaKey && shiftKey,
		};

		/**
		 * Orientation
		 */
		const orientation = {
			left: initialX <= currentTarget.offsetWidth / 2,
			right: initialX > currentTarget.offsetWidth / 2,
		};

		/**
		 * Direction
		 */
		const direction = {
			up: movementY < -50,
			right: movementX > 50,
			down: movementY > 50,
			left: movementX < -50,
		};

		/**
		 * Sensitivity
		 *
		 * @description determine if drag event passes sensitivity reqs.
		 *
		 * @param {string} axis
		 * @param {Object} options
		 *
		 * @return {void}
		 */
		const sensitivity = (axis, options = sensitivityPresets.block) => {
			const { velocity, velocityOnBlock, timeout } = options;
			const useReduced = blockId && velocityOnBlock;
			const velocityThreshold = useReduced ? velocityOnBlock : velocity;
			const velocityDirection = axis === 'x' ? velocityX : velocityY;

			return (
				velocityDirection > velocityThreshold && elapsedTime < timeout
			);
		};

		const sensitivityX = sensitivity('x');
		const sensitivityY = sensitivity('y');
		const sensitivityEditorX = sensitivity('x', sensitivityPresets.editor);

		/**
		 * Guards
		 */
		const guards = {
			list: keys.none && orientation.left && sensitivityEditorX,
			sidebar: keys.none && orientation.right && sensitivityEditorX,
			move: keys.none && sensitivityY,
			insert: keys.fnOnly && sensitivityX,
			mode: keys.both && sensitivityX,
		};

		/**
		 * Editor/Inserter
		 */
		ifThen(
			!blockId &&
				keys.fnOnly &&
				orientation.left &&
				direction.right &&
				isInserterOpen === false &&
				sensitivityEditorX,
			() => toggleInserter(true),
			100
		);

		/**
		 * Editor/List View
		 */
		ifThen(
			guards.list && direction.right && isListViewOpen === false,
			() => toggleListView(true),
			100
		);

		ifThen(
			guards.list && direction.left && isListViewOpen === true,
			() => toggleListView(false),
			100
		);

		/**
		 * Editor/Sidebar
		 */
		ifThen(
			guards.sidebar && direction.left && isSidebarOpen === false,
			() => toggleSidebar(true),
			100
		);

		ifThen(
			guards.sidebar && direction.right && isSidebarOpen === true,
			() => toggleSidebar(false),
			100
		);

		/**
		 * Block
		 *
		 * @description return early if no block is selected.
		 */
		if (!blockId) {
			return;
		}

		/**
		 * Block/Move
		 */
		ifThen(
			guards.move && direction.up,
			() => moveBlock(blockId, 'up'),
			100
		);

		ifThen(
			guards.move && direction.down,
			() => moveBlock(blockId, 'down'),
			100
		);

		/**
		 * Block/Insert
		 */
		ifThen(
			guards.insert && direction.left,
			() => insertBlock(blockId, 'before'),
			100
		);

		ifThen(
			guards.insert && direction.right,
			() => insertBlock(blockId, 'after'),
			100
		);

		/**
		 * Block/Delete
		 */
		ifThen(keys.fnOnly && direction.up, () => removeBlock(blockId), 400);

		/**
		 * Block/Duplicate
		 */
		ifThen(
			keys.fnOnly && direction.down,
			() => duplicateBlock(blockId),
			200
		);

		ifThen(
			keys.both && direction.down,
			() => duplicateParentBlock(blockId),
			200
		);

		/**
		 * Block/Lock
		 */
		ifThen(
			guards.mode && direction.left,
			() => toggleBlockLock(blockId),
			100
		);

		/**
		 * Block/Mode
		 */
		ifThen(
			guards.mode && direction.right,
			() => toggleBlockMode(blockId),
			100
		);
	};

	/**
	 * Handlers
	 */
	usePinch((state) => onPinch(state), { target: query.current });
	useDrag((state) => onDrag(state), { target: query.current });
	document.addEventListener('gesturestart', (e) => e.preventDefault());
	document.addEventListener('gesturechange', (e) => e.preventDefault());

	return null;
};

registerPlugin('gutenberg-gestures', { render: GutenbergGestures });
