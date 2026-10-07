import beforeBlockString from './beforeBlockString.mjs';
import hasBlock from './hasBlock.mjs';
import rawNodeString from './rawNodeString.mjs';

/**
 * Return a CSS statement's block -- the string that starts and `{` and ends with `}`.
 *
 * If the statement has no block (e.g. `@import url(foo.css);`), returns an empty string.
 *
 * @param {import('postcss').Container} statement
 * @returns {string}
 */
export default function blockString(statement) {
	if (!hasBlock(statement)) {
		return '';
	}

	return rawNodeString(statement).slice(beforeBlockString(statement).length);
}
