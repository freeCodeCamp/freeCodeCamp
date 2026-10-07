import { Node } from 'postcss';

import { isDocument } from './typeGuards.mjs';

/**
 * @param {Node} node
 * @returns {boolean}
 */
export default function isInDocument(node) {
	let current = node;

	while (current) {
		if (isDocument(current)) return true;

		// Check for unofficial 'document' property from parsers like postcss-html
		if ('document' in current && current.document instanceof Node && isDocument(current.document))
			return true;

		if (!current.parent) break;

		current = current.parent;
	}

	return false;
}
