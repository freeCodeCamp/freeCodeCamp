import eachNodeUpToRoot, { STOP } from './eachNodeUpToRoot.mjs';

/** @import { Node } from 'postcss' */

/**
 * Finds the node satisfying the specified predicate up to the root node.
 *
 * @param {Node} node
 * @param {(node: Node) => boolean} predicate
 * @returns {Node | undefined}
 */
export default function findNodeUpToRoot(node, predicate) {
	/** @type {Node | undefined} */
	let found;

	eachNodeUpToRoot(node, (current) => {
		if (predicate(current)) {
			found = current;

			return STOP;
		}
	});

	return found;
}
