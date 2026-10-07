/**
 * @fileoverview Shared flags for ESLint.
 */

"use strict";

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * @typedef {Object} InactiveFlagData
 * @property {string} description Flag description
 * @property {string | null} [replacedBy] Can be either:
 *   - An active flag (string) that enables the same feature.
 *   - `null` if the feature is now enabled by default.
 *   - Omitted if the feature has been abandoned.
 */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * The set of flags that change ESLint behavior with a description.
 * @type {Map<string, string>}
 */
const activeFlags = new Map([
	["test_only", "Used only for testing."],
	["test_only_2", "Used only for testing."],
	[
		"v10_config_lookup_from_file",
		"Look up `eslint.config.js` from the file being linted.",
	],
	[
		"unstable_native_nodejs_ts_config",
		"Use native Node.js to load TypeScript configuration.",
	],
]);

/**
 * The set of flags that used to be active.
 * @type {Map<string, InactiveFlagData>}
 */
const inactiveFlags = new Map([
	[
		"test_only_replaced",
		{
			description:
				"Used only for testing flags that have been replaced by other flags.",
			replacedBy: "test_only",
		},
	],
	[
		"test_only_enabled_by_default",
		{
			description:
				"Used only for testing flags whose features have been enabled by default.",
			replacedBy: null,
		},
	],
	[
		"test_only_abandoned",
		{
			description:
				"Used only for testing flags whose features have been abandoned.",
		},
	],
	[
		"unstable_ts_config",
		{
			description: "Enable TypeScript configuration files.",
			replacedBy: null,
		},
	],
	[
		"unstable_config_lookup_from_file",
		{
			description:
				"Look up `eslint.config.js` from the file being linted.",
			replacedBy: "v10_config_lookup_from_file",
		},
	],
]);

/**
 * Creates a message that describes the reason the flag is inactive.
 * @param {InactiveFlagData} inactiveFlagData Data for the inactive flag.
 * @returns {string} Message describing the reason the flag is inactive.
 */
function getInactivityReasonMessage({ replacedBy }) {
	if (typeof replacedBy === "undefined") {
		return "This feature has been abandoned.";
	}

	if (typeof replacedBy === "string") {
		return `This flag has been renamed '${replacedBy}' to reflect its stabilization. Please use '${replacedBy}' instead.`;
	}

	// null
	return "This feature is now enabled by default.";
}

module.exports = {
	activeFlags,
	inactiveFlags,
	getInactivityReasonMessage,
};
