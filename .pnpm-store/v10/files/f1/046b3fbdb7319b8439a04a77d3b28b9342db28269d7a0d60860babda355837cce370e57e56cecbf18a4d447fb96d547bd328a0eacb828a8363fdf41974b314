/** @import { Node as PostcssNode } from 'postcss' */
import { isAtRule } from './typeGuards.mjs';

/**
 * Adjust the text in EditInfo to include a semicolon when needed.
 *
 * @param {PostcssNode} node
 * @param {{range: [number, number], text: string}} fixData
 * @returns {{range: [number, number], text: string}}
 */
export default function addSemicolonForEditInfo(node, fixData) {
	const { parent } = node;

	if (!parent) return fixData;

	if (node.type === 'decl') {
		if (parent.raws.semicolon || parent.last !== node) {
			return {
				...fixData,
				text: `${fixData.text};`,
			};
		}
	}

	if (isAtRule(node)) {
		if (!node.nodes && (parent.raws.semicolon || parent.last !== node)) {
			return {
				...fixData,
				text: `${fixData.text};`,
			};
		}
	}

	return fixData;
}
