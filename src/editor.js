import { dispatch as dispatchFn } from '@wordpress/data';

const dispatch = dispatchFn('core/edit-post');

/**
 * Toggle Inserter
 *
 * @param {Object} state
 *
 * @return {void}
 */
const toggleInserter = (state) => dispatch.setIsInserterOpened(state);

/**
 * Toggle List View
 *
 * @param {Object} state
 *
 * @return {void}
 */
const toggleListView = (state) => dispatch.setIsListViewOpened(state);

/**
 * Toggle Sidebar
 *
 * @param {Object} state
 *
 * @return {void}
 */
const toggleSidebar = (state) => {
	const { openGeneralSidebar, closeGeneralSidebar } = dispatch;

	if (state) {
		openGeneralSidebar('edit-post/block');
	} else {
		closeGeneralSidebar();
	}
};

export { toggleInserter, toggleListView, toggleSidebar };
