/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const memoize = require("./memoize");

/** @typedef {import("schema-utils/declarations/validate").ValidationErrorConfiguration} ValidationErrorConfiguration */
/** @typedef {import("./fs").JsonObject} JsonObject */

const getValidate = memoize(() => require("schema-utils").validate);

/**
 * @template {object | object[]} T
 * @param {(function(T): boolean) | undefined} check check
 * @param {() => JsonObject} getSchema get schema fn
 * @param {ValidationErrorConfiguration} options options
 * @returns {function(T=): void} validate
 */
const createSchemaValidation = (check, getSchema, options) => {
	getSchema = memoize(getSchema);
	return value => {
		if (check && !check(/** @type {T} */ (value))) {
			getValidate()(
				getSchema(),
				/** @type {object | object[]} */
				(value),
				options
			);
			require("util").deprecate(
				() => {},
				"webpack bug: Pre-compiled schema reports error while real schema is happy. This has performance drawbacks.",
				"DEP_WEBPACK_PRE_COMPILED_SCHEMA_INVALID"
			)();
		}
	};
};

module.exports = createSchemaValidation;
