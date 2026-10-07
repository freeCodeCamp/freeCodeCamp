/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const SAFE_IDENTIFIER = /^[_a-z$][_a-z$0-9]*$/i;
const RESERVED_IDENTIFIER = new Set([
	"break",
	"case",
	"catch",
	"class",
	"const",
	"continue",
	"debugger",
	"default",
	"delete",
	"do",
	"else",
	"export",
	"extends",
	"finally",
	"for",
	"function",
	"if",
	"import",
	"in",
	"instanceof",
	"new",
	"return",
	"super",
	"switch",
	"this",
	"throw",
	"try",
	"typeof",
	"var",
	"void",
	"while",
	"with",
	"enum",
	// strict mode
	"implements",
	"interface",
	"let",
	"package",
	"private",
	"protected",
	"public",
	"static",
	"yield",
	// module code
	"await",
	// skip future reserved keywords defined under ES1 till ES3
	// additional
	"null",
	"true",
	"false"
]);

/**
 * @summary Returns a valid JS property name for the given property.
 * Certain strings like "default", "null", and names with whitespace are not
 * valid JS property names, so they are returned as strings.
 * @param {string} prop property name to analyze
 * @returns {string} valid JS property name
 */
const propertyName = (prop) => {
	if (SAFE_IDENTIFIER.test(prop) && !RESERVED_IDENTIFIER.has(prop)) {
		return prop;
	}
	return JSON.stringify(prop);
};

/**
 * Returns chain of property accesses.
 * @param {ArrayLike<string>} properties properties
 * @param {number} start start index
 * @returns {string} chain of property accesses
 */
const propertyAccess = (properties, start = 0) => {
	let str = "";
	for (let i = start; i < properties.length; i++) {
		const p = properties[i];
		if (`${Number(p)}` === p) {
			str += `[${p}]`;
		} else if (SAFE_IDENTIFIER.test(p) && !RESERVED_IDENTIFIER.has(p)) {
			str += `.${p}`;
		} else {
			str += `[${JSON.stringify(p)}]`;
		}
	}
	return str;
};

module.exports = {
	RESERVED_IDENTIFIER,
	SAFE_IDENTIFIER,
	propertyAccess,
	propertyName
};
