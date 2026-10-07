/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

module.exports.deprecate = (fn, msg) => {
	let once = true;
	return function deprecate() {
		if (once) {
			// eslint-disable-next-line no-console
			console.warn(`DeprecationWarning: ${msg}`);
			once = false;
		}
		// eslint-disable-next-line prefer-rest-params
		return fn.apply(this, arguments);
	};
};
