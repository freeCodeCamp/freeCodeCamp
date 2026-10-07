/**
 * Get the source index of a selector, excluding leading whitespace.
 *
 * @param {import('postcss-selector-parser').Selector} node
 *
 * @returns {number}
 */
export default function getSelectorSourceIndex(node) {
	// The first child node sourceIndex is the same as the parent sourceIndex without leading whitespace
	// If the node doesn't have any children, use the node sourceIndex instead
	return node.first?.sourceIndex ?? node.sourceIndex;
}
