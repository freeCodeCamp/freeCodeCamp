/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

module.exports = {
	/**
	 * @type {Record<string, string>}
	 */
	versions: {},
	// eslint-disable-next-line jsdoc/reject-function-type
	/** @param {Function} fn function */
	nextTick(fn) {
		// eslint-disable-next-line prefer-rest-params
		const args = Array.prototype.slice.call(arguments, 1);
		Promise.resolve().then(() => {
			// eslint-disable-next-line prefer-spread
			fn.apply(null, args);
		});
	},
};
