/**
 * @fileoverview APIs that are not officially supported by ESLint.
 *      These APIs may change or be removed at any time. Use at your
 *      own risk.
 * @author Nicholas C. Zakas
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const { FileEnumerator } = require("./cli-engine/file-enumerator");
const { ESLint: FlatESLint, shouldUseFlatConfig } = require("./eslint/eslint");
const { LegacyESLint } = require("./eslint/legacy-eslint");
const builtinRules = require("./rules");

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

module.exports = {
	builtinRules,
	FlatESLint,
	shouldUseFlatConfig,
	FileEnumerator,
	LegacyESLint,
};
