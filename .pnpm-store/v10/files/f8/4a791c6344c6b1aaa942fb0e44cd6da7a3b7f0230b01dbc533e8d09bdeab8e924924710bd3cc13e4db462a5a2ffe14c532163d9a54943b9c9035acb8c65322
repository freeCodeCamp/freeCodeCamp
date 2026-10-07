/** @import { Node as PostcssNode } from 'postcss' */

/**
 * Make a fix range as narrow as possible by trimming common prefixes and suffixes
 *
 * @param {PostcssNode} node
 * @param {{range: [number, number], text: string}} fixData
 * @returns {{range: [number, number], text: string}}
 */
export default function narrowFixRange(node, fixData) {
	if (!node.source) {
		return fixData;
	}

	let startOffset = fixData.range[0];
	let endOffset = fixData.range[1];

	const stringRepresentation = node.source.input.css.slice(startOffset, endOffset);

	let replacementStartOffset = 0;

	for (let i = 0; i < stringRepresentation.length; i++) {
		const a = stringRepresentation[i];
		const b = fixData.text[i];

		if (a !== b) break;

		startOffset++;
		replacementStartOffset++;
	}

	let replacementEndOffset = fixData.text.length;

	for (let i = 0; i < stringRepresentation.length; i++) {
		const ia = stringRepresentation.length - 1 - i;

		if (ia < replacementStartOffset) break;

		const a = stringRepresentation[ia];

		const ib = fixData.text.length - 1 - i;

		if (ib < replacementStartOffset) break;

		const b = fixData.text[ib];

		if (a !== b) break;

		endOffset--;
		replacementEndOffset--;
	}

	// Try to have a context size of at least 1
	if (startOffset === endOffset) {
		if (startOffset > fixData.range[0]) {
			startOffset--;
			replacementStartOffset--;
		} else if (endOffset < fixData.range[1]) {
			endOffset++;
			replacementEndOffset++;
		}
	}

	return {
		text: fixData.text.slice(replacementStartOffset, replacementEndOffset),
		range: [startOffset, endOffset],
	};
}
