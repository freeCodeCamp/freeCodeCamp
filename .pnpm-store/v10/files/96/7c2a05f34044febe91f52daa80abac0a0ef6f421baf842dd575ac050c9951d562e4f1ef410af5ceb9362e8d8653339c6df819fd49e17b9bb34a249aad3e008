import { colorFunctions } from '../reference/functions.mjs';

const HAS_COLOR_FUNCTION = new RegExp(`\\b(?:${[...colorFunctions.values()].join('|')})\\(`, 'i');

/**
 * Check if a value contains any standard CSS color function
 *
 * @param {string} value
 * @returns {boolean}
 */
export default function hasColorFunction(value) {
	return HAS_COLOR_FUNCTION.test(value);
}
