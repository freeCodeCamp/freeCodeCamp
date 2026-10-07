/**
 * Remove empty lines before a node. Mutates the node.
 *
 * @template {import('postcss').Node} T
 * @param {T} node
 * @param {string} newline
 * @returns {T}
 */
export default function removeEmptyLinesBefore(node, newline) {
	node.raws.before = node.raws.before ? node.raws.before.replace(/(\r?\n\s*\n)+/g, newline) : '';

	return node;
}
