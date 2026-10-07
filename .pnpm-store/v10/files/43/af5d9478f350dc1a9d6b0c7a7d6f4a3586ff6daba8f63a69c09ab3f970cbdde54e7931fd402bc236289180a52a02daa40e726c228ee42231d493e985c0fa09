import isValidHex from './isValidHex.mjs';

/**
 * @param {import('postcss-value-parser').Node} node
 * @returns {boolean}
 */
export default function isHexColor({ type, value }) {
	return type === 'word' && isValidHex(value);
}
