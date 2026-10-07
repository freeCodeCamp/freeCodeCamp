/**
 * Contains helpers for working with vendor prefixes.
 *
 * Copied from https://github.com/postcss/postcss/commit/777c55b5d2a10605313a4972888f4f32005f5ac2
 *
 * @namespace vendor
 */
export default {
	/**
	 * Returns the vendor prefix extracted from an input string.
	 *
	 * @param {string} prop String with or without vendor prefix.
	 *
	 * @returns {string} vendor prefix or empty string
	 *
	 * @example
	 * vendor.prefix('-moz-tab-size') //=> '-moz-'
	 * vendor.prefix('tab-size')      //=> ''
	 */
	prefix(prop) {
		const match = prop.match(/^(-\w+-)/);

		if (match) {
			return match[0] || '';
		}

		return '';
	},

	/**
	 * Returns the input string stripped of its vendor prefix.
	 *
	 * @param {string} prop String with or without vendor prefix.
	 *
	 * @returns {string} String name without vendor prefixes.
	 *
	 * @example
	 * vendor.unprefixed('-moz-tab-size') //=> 'tab-size'
	 */
	unprefixed(prop) {
		return prop.replace(/^-\w+-/, '');
	},
};
