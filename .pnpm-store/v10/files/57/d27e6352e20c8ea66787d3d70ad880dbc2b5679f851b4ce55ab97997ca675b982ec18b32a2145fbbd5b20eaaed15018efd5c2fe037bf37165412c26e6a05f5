'use strict';

/** @type {(value: unknown) => value is null | undefined | string | symbol | number | boolean | bigint} */
module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};
