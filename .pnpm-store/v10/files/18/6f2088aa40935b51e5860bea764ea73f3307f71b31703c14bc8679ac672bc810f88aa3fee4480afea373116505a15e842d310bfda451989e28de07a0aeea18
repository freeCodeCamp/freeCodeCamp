/**
 * @fileoverview Expose out ESLint and CLI to require.
 * @author Ian Christian Myers
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const { ESLint, shouldUseFlatConfig } = require("./eslint/eslint");
const { LegacyESLint } = require("./eslint/legacy-eslint");
const { Linter } = require("./linter");
const { RuleTester } = require("./rule-tester");
const { SourceCode } = require("./languages/js/source-code");

//-----------------------------------------------------------------------------
// Functions
//-----------------------------------------------------------------------------

/**
 * Loads the correct ESLint constructor given the options.
 * @param {Object} [options] The options object
 * @param {boolean} [options.useFlatConfig] Whether or not to use a flat config
 * @returns {Promise<ESLint|LegacyESLint>} The ESLint constructor
 */
async function loadESLint({ useFlatConfig } = {}) {
	/*
	 * Note: The v8.x version of this function also accepted a `cwd` option, but
	 * it is not used in this implementation so we silently ignore it.
	 */

	const shouldESLintUseFlatConfig =
		useFlatConfig ?? (await shouldUseFlatConfig());

	return shouldESLintUseFlatConfig ? ESLint : LegacyESLint;
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

module.exports = {
	Linter,
	loadESLint,
	ESLint,
	RuleTester,
	SourceCode,
};
