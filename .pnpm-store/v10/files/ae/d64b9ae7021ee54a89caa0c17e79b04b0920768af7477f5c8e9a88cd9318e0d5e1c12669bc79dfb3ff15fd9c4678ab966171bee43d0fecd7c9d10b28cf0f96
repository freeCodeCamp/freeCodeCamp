/**
 * @fileoverview Common utils for regular expressions.
 * @author Josh Goldberg
 * @author Toru Nagashima
 */

"use strict";

const { RegExpValidator } = require("@eslint-community/regexpp");

const REGEXPP_LATEST_ECMA_VERSION = 2025;

/**
 * Checks if the given regular expression pattern would be valid with the `u` flag.
 * @param {number} ecmaVersion ECMAScript version to parse in.
 * @param {string} pattern The regular expression pattern to verify.
 * @param {"u"|"v"} flag The type of Unicode flag
 * @returns {boolean} `true` if the pattern would be valid with the `u` flag.
 * `false` if the pattern would be invalid with the `u` flag or the configured
 * ecmaVersion doesn't support the `u` flag.
 */
function isValidWithUnicodeFlag(ecmaVersion, pattern, flag = "u") {
	if (flag === "u" && ecmaVersion <= 5) {
		// ecmaVersion <= 5 doesn't support the 'u' flag
		return false;
	}
	if (flag === "v" && ecmaVersion <= 2023) {
		return false;
	}

	const validator = new RegExpValidator({
		ecmaVersion: Math.min(ecmaVersion, REGEXPP_LATEST_ECMA_VERSION),
	});

	try {
		validator.validatePattern(
			pattern,
			void 0,
			void 0,
			flag === "u"
				? {
						unicode: /* uFlag = */ true,
					}
				: {
						unicodeSets: true,
					},
		);
	} catch {
		return false;
	}

	return true;
}

module.exports = {
	isValidWithUnicodeFlag,
	REGEXPP_LATEST_ECMA_VERSION,
};
