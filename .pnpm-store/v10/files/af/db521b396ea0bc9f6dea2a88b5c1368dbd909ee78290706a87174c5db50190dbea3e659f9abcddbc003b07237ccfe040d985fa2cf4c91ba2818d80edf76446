import isSharedLineComment from './isSharedLineComment.mjs';

/**
 * @param {import('postcss').Node} node
 * @returns {boolean}
 */
export default function isAfterComment(node) {
	const previousNode = node.prev();

	if (!previousNode || previousNode.type !== 'comment') {
		return false;
	}

	return !isSharedLineComment(previousNode);
}
