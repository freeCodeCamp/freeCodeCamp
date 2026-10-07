/** @typedef {import('postcss').Node} Node */

/**
 * @param {Node | void} node
 */
function getNodeLine(node) {
	return node && node.source && node.source.start && node.source.start.line;
}

/**
 * @param {Node | void} node
 * @returns {Node | void}
 */
export default function getNextNonSharedLineCommentNode(node) {
	if (node === undefined) {
		return undefined;
	}

	/** @type {Node | void} */
	const nextNode = node.next();

	if (!nextNode || nextNode.type !== 'comment') {
		return nextNode;
	}

	if (
		getNodeLine(node) === getNodeLine(nextNode) ||
		getNodeLine(nextNode) === getNodeLine(nextNode.next())
	) {
		return getNextNonSharedLineCommentNode(nextNode);
	}

	return nextNode;
}
