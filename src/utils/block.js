import { select as selectFn, dispatch as dispatchFn } from '@wordpress/data';

const store = 'core/block-editor';
const select = selectFn(store);
const dispatch = dispatchFn(store);

/**
 * Move Block
 *
 * @param {string} id
 * @param {string} direction
 *
 * @return {void}
 */
const moveBlock = (id, direction = 'down') => {
	const { moveBlocksDown, moveBlocksUp } = dispatch;
	const { getBlockParents, getBlockOrder } = select;

	const down = direction === 'down';
	const fn = down ? moveBlocksDown : moveBlocksUp;
	const parents = getBlockParents(id);

	if (parents.length === 0) {
		fn([id]);
		return;
	}

	const parentId = parents[parents.length - 1];
	const order = getBlockOrder(parentId);
	const lastOrFirstId = down ? order[order.length - 1] : order[0];

	if (id !== lastOrFirstId) {
		fn([id], parentId);
	} else {
		moveBlock(parentId, direction);
	}
};

/**
 * Insert Block
 *
 * @param {string} id
 * @param {string} position
 *
 * @return {void}
 */
const insertBlock = (id, position = '') => {
	const { insertAfterBlock, insertBeforeBlock, insertBlock } = dispatch;

	if (position === 'after') {
		insertAfterBlock(id);
	}

	if (position === 'before') {
		insertBeforeBlock(id);
	}

	if (!['after', 'before'].includes(position)) {
		insertBlock(id, position);
	}
};

/**
 * Remove Block
 *
 * @param {string} id
 *
 * @return {void}
 */
const removeBlock = (id) => dispatch.removeBlock(id);

/**
 * Duplicate Block
 *
 * @param {string} id
 *
 * @return {void}
 */
const duplicateBlock = (id) => dispatch.duplicateBlocks([id]);

/**
 * Duplicate Parent Block
 *
 * @param {string} id
 *
 * @return {void}
 */
const duplicateParentBlock = (id) => {
	const { duplicateBlocks } = dispatch;
	const { getBlockParents } = select;

	const parents = getBlockParents(id);

	if (parents.length > 0) {
		const parentId = parents[parents.length - 1];
		duplicateBlocks([parentId], null);
	}
};

/**
 * Toggle Block Lock
 *
 * @param {string} id
 *
 * @return {void}
 */
const toggleBlockLock = (id) => {
	const { updateBlockAttributes } = dispatch;
	const { getBlockAttributes } = select;

	const attrs = getBlockAttributes(id);
	const setLock = { move: true, remove: true };
	const isUnlocked = attrs?.lock === undefined || attrs?.lock === null;
	const state = isUnlocked ? setLock : null;
	updateBlockAttributes(id, { lock: state });
};

/**
 * Toggle Block Mode
 *
 * @param {string} id
 *
 * @return {void}
 */
const toggleBlockMode = (id) => dispatch.toggleBlockMode(id);

export {
	moveBlock,
	removeBlock,
	insertBlock,
	duplicateBlock,
	duplicateParentBlock,
	toggleBlockLock,
	toggleBlockMode,
};
