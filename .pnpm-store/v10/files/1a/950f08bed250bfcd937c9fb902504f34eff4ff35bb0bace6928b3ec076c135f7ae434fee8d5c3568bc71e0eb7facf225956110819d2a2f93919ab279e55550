import parser from 'postcss-selector-parser';

/** @import { Container, Node, Root, Selector } from 'postcss-selector-parser' */

/**
 * Normalize a selector so that it can be more easily compared to other selectors.
 *
 * @template {Root | Selector} T
 * @param {T} node
 * @returns {T}
 */
export default function normalizeSelector(node) {
	normalizeSelectorNodeWhitespaceAndComments(node);

	node.walk(normalizeSelectorNodeWhitespaceAndComments);

	normalizeSelectorNodesOrder(node);

	return node;
}

/**
 * @param {Node} node
 */
function normalizeSelectorNodeWhitespaceAndComments(node) {
	if (parser.isComment(node)) {
		node.remove();

		return;
	}

	node.rawSpaceBefore = '';
	node.rawSpaceAfter = '';

	node.spaces.before = '';
	node.spaces.after = '';

	if (parser.isAttribute(node)) {
		delete node.spaces.insensitive;
		delete node.spaces.operator;
		delete node.spaces.attribute;
		delete node.spaces.value;

		delete node.raws.spaces;
	}
}

/**
 * @param {Node} node
 */
function normalizeSelectorNodesOrder(node) {
	if (!parser.isContainer(node)) return;

	// Need to sort inside out, not outside in.
	// As the parents needs to sorted with their children already in the right order.
	node.each(normalizeSelectorNodesOrder);

	if (parser.isRoot(node) || parser.isPseudoClass(node) || parser.isPseudoElement(node)) {
		const nodes = node.nodes.map((childNode) => {
			// Make sure to only stringify the node once.
			return { node: childNode, string: childNode.toString() };
		});

		nodes.sort((a, b) => a.string.localeCompare(b.string));

		const uniqueNodes = new Set();
		const nodesIndices = new Map();

		nodes.forEach((x, i) => {
			if (uniqueNodes.has(x.string)) return;

			uniqueNodes.add(x.string);
			nodesIndices.set(x.node, i);
		});

		node.nodes = node.nodes
			.filter((childNode) => {
				return nodesIndices.has(childNode);
			})
			.sort((a, b) => {
				return nodesIndices.get(a) - nodesIndices.get(b);
			});
	}
}
