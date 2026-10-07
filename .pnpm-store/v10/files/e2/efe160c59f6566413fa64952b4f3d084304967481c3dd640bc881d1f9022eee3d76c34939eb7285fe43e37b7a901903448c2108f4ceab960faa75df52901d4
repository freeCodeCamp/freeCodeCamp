import { isRoot } from './typeGuards.mjs';

/** @import { Node } from 'postcss' */

export const STOP = 'STOP';

/**
 * Iterates over each node up to the root node.
 *
 * @param {Node} node
 * @param {(node: Node) => void | STOP} callback
 * @returns {void}
 */
export default function eachNodeUpToRoot(node, callback) {
	let currentNode = node.parent;

	while (currentNode && !isRoot(currentNode)) {
		if (callback(currentNode) === STOP) break;

		currentNode = currentNode.parent;
	}
}
