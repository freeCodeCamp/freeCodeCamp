import { counterResetKeywords } from '../reference/keywords.mjs';

/**
 * Check value is a custom ident
 *
 * @param {string} value
 */
export default function isCounterResetCustomIdentValue(value) {
	const valueLowerCase = value.toLowerCase();

	if (
		counterResetKeywords.has(valueLowerCase) ||
		Number.isFinite(Number.parseInt(valueLowerCase, 10))
	) {
		return false;
	}

	return true;
}
