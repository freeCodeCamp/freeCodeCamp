import { isRoot } from './typeGuards.mjs';

/**
 * @param {import('postcss').Node} node
 * @returns {boolean}
 */
export default function isFirstNodeOfRoot(node) {
	if (isRoot(node)) return false;

	const parentNode = node.parent;

	if (!parentNode) {
		return false;
	}

	return isRoot(parentNode) && node === parentNode.first;
}
