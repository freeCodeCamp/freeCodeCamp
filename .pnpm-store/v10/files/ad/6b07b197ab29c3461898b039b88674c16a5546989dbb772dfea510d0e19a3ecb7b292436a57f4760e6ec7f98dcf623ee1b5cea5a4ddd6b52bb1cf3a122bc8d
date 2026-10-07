import postcssValueParser from 'postcss-value-parser';

import { animationShorthandKeywords, basicKeywords } from '../reference/keywords.mjs';
import getDimension from './getDimension.mjs';
import isStandardSyntaxValue from './isStandardSyntaxValue.mjs';
import isVariable from './isVariable.mjs';

/** @typedef {import('postcss-value-parser').Node} Node */

/**
 * Get the animation name within an `animation` shorthand property value.
 *
 * @param {string} value
 *
 * @returns {Node[]}
 */
export default function findAnimationName(value) {
	/** @type {Node[]} */
	const animationNames = [];

	const valueNodes = postcssValueParser(value);
	const { nodes } = valueNodes;

	// Handle `inherit`, `initial` and etc
	if (nodes.length === 1 && nodes[0] && basicKeywords.has(nodes[0].value.toLowerCase())) {
		return [nodes[0]];
	}

	let shouldBeIgnored = false;

	valueNodes.walk((valueNode) => {
		if (shouldBeIgnored) return;

		if (valueNode.type === 'function') {
			return false;
		}

		if (valueNode.type !== 'word') {
			return;
		}

		const valueLowerCase = valueNode.value.toLowerCase();

		// Ignore non-standard syntax
		if (!isStandardSyntaxValue(valueLowerCase)) {
			// Cannot find animation name if shorthand has non-standard syntax value (#5532)
			shouldBeIgnored = true;
			animationNames.length = 0; // clears animationNames

			return;
		}

		// Ignore variables
		if (isVariable(valueLowerCase)) {
			return;
		}

		// Ignore keywords for other animation parts
		if (animationShorthandKeywords.has(valueLowerCase)) {
			return;
		}

		// Ignore numbers with units
		const { unit } = getDimension(valueNode);

		if (unit || unit === '') {
			return;
		}

		animationNames.push(valueNode);
	});

	return animationNames;
}
