/**
 * @fileoverview The schema to validate language options
 * @author Nicholas C. Zakas
 */

"use strict";

//-----------------------------------------------------------------------------
// Data
//-----------------------------------------------------------------------------

const globalVariablesValues = new Set([
	true,
	"true",
	"writable",
	"writeable",
	false,
	"false",
	"readonly",
	"readable",
	null,
	"off",
]);

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Check if a value is a non-null object.
 * @param {any} value The value to check.
 * @returns {boolean} `true` if the value is a non-null object.
 */
function isNonNullObject(value) {
	return typeof value === "object" && value !== null;
}

/**
 * Check if a value is a non-null non-array object.
 * @param {any} value The value to check.
 * @returns {boolean} `true` if the value is a non-null non-array object.
 */
function isNonArrayObject(value) {
	return isNonNullObject(value) && !Array.isArray(value);
}

/**
 * Check if a value is undefined.
 * @param {any} value The value to check.
 * @returns {boolean} `true` if the value is undefined.
 */
function isUndefined(value) {
	return typeof value === "undefined";
}

//-----------------------------------------------------------------------------
// Schemas
//-----------------------------------------------------------------------------

/**
 * Validates the ecmaVersion property.
 * @param {string|number} ecmaVersion The value to check.
 * @returns {void}
 * @throws {TypeError} If the value is invalid.
 */
function validateEcmaVersion(ecmaVersion) {
	if (isUndefined(ecmaVersion)) {
		throw new TypeError(
			'Key "ecmaVersion": Expected an "ecmaVersion" property.',
		);
	}

	if (typeof ecmaVersion !== "number" && ecmaVersion !== "latest") {
		throw new TypeError(
			'Key "ecmaVersion": Expected a number or "latest".',
		);
	}
}

/**
 * Validates the sourceType property.
 * @param {string} sourceType The value to check.
 * @returns {void}
 * @throws {TypeError} If the value is invalid.
 */
function validateSourceType(sourceType) {
	if (
		typeof sourceType !== "string" ||
		!/^(?:script|module|commonjs)$/u.test(sourceType)
	) {
		throw new TypeError(
			'Key "sourceType": Expected "script", "module", or "commonjs".',
		);
	}
}

/**
 * Validates the globals property.
 * @param {Object} globals The value to check.
 * @returns {void}
 * @throws {TypeError} If the value is invalid.
 */
function validateGlobals(globals) {
	if (!isNonArrayObject(globals)) {
		throw new TypeError('Key "globals": Expected an object.');
	}

	for (const key of Object.keys(globals)) {
		// avoid hairy edge case
		if (key === "__proto__") {
			continue;
		}

		if (key !== key.trim()) {
			throw new TypeError(
				`Key "globals": Global "${key}" has leading or trailing whitespace.`,
			);
		}

		if (!globalVariablesValues.has(globals[key])) {
			throw new TypeError(
				`Key "globals": Key "${key}": Expected "readonly", "writable", or "off".`,
			);
		}
	}
}

/**
 * Validates the parser property.
 * @param {Object} parser The value to check.
 * @returns {void}
 * @throws {TypeError} If the value is invalid.
 */
function validateParser(parser) {
	if (
		!parser ||
		typeof parser !== "object" ||
		(typeof parser.parse !== "function" &&
			typeof parser.parseForESLint !== "function")
	) {
		throw new TypeError(
			'Key "parser": Expected object with parse() or parseForESLint() method.',
		);
	}
}

/**
 * Validates the language options.
 * @param {Object} languageOptions The language options to validate.
 * @returns {void}
 * @throws {TypeError} If the language options are invalid.
 */
function validateLanguageOptions(languageOptions) {
	if (!isNonArrayObject(languageOptions)) {
		throw new TypeError("Expected an object.");
	}

	const {
		ecmaVersion,
		sourceType,
		globals,
		parser,
		parserOptions,
		...otherOptions
	} = languageOptions;

	if ("ecmaVersion" in languageOptions) {
		validateEcmaVersion(ecmaVersion);
	}

	if ("sourceType" in languageOptions) {
		validateSourceType(sourceType);
	}

	if ("globals" in languageOptions) {
		validateGlobals(globals);
	}

	if ("parser" in languageOptions) {
		validateParser(parser);
	}

	if ("parserOptions" in languageOptions) {
		if (!isNonArrayObject(parserOptions)) {
			throw new TypeError('Key "parserOptions": Expected an object.');
		}
	}

	const otherOptionKeys = Object.keys(otherOptions);

	if (otherOptionKeys.length > 0) {
		throw new TypeError(`Unexpected key "${otherOptionKeys[0]}" found.`);
	}
}

module.exports = { validateLanguageOptions };
