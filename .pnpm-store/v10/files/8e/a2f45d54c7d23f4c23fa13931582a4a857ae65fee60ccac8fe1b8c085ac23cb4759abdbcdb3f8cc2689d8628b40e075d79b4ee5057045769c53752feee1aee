import { namedColorsKeywords } from '../reference/keywords.mjs';

const HAS_NAMED_COLOR = new RegExp(`\\b(?:${[...namedColorsKeywords.values()].join('|')})\\b`, 'i');

/**
 * Check if a value contains any standard CSS named color
 *
 * `transparent` and `currentcolor` are not named colors
 *
 * @param {string} value
 * @returns {boolean}
 */
export default function hasNamedColor(value) {
	return HAS_NAMED_COLOR.test(value);
}
