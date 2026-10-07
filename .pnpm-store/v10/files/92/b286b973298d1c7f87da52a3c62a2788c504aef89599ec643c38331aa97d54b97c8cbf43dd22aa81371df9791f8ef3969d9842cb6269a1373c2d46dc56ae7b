import formatters from '../formatters/index.mjs';

/**
 * @param {string} separator
 * @param {string} [quote]
 * @returns {string}
 */
export default function getFormatterOptionsText(separator, quote = '') {
	return Object.keys(formatters)
		.map((name) => `${quote}${name}${quote}`)
		.join(separator);
}
