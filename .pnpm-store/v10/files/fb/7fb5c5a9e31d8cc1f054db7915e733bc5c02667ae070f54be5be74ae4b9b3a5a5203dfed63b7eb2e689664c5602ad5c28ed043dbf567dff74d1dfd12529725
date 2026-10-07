'use strict';

/** @type {NonNullable<import('./getInferredName')> | undefined} */
var getInferredName;
try {
	// eslint-disable-next-line no-new-func, no-extra-parens
	getInferredName = /** @type {NonNullable<import('./getInferredName')>} */ (Function('s', 'return { [s]() {} }[s].name;'));
} catch (e) {}

var inferred = function () {};

/** @type {import('./getInferredName')} */
module.exports = getInferredName && inferred.name === 'inferred' ? getInferredName : null;
