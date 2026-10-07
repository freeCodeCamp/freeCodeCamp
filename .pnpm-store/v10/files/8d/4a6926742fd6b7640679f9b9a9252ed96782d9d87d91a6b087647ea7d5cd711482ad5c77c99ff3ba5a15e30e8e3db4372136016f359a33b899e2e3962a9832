import { counterIncrementKeywords } from '../reference/keywords.mjs';

/**
 * Check value is a custom ident
 *
 * @param {string} value
 */
export default function isCounterIncrementCustomIdentValue(value) {
	const valueLowerCase = value.toLowerCase();

	if (
		counterIncrementKeywords.has(valueLowerCase) ||
		Number.isFinite(Number.parseInt(valueLowerCase, 10))
	) {
		return false;
	}

	return true;
}
