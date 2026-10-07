const HAS_TPL_INTERPOLATION = /\{.+?\}/s;

/**
 * Check whether a string has JS template literal interpolation or HTML-like template
 *
 * @param {string} string
 * @returns {boolean} If `true`, a string has template literal interpolation
 */
export default function hasTplInterpolation(string) {
	return HAS_TPL_INTERPOLATION.test(string);
}
