"use strict";

const { stringifyValueForError } = require("./shared");

module.exports = function ({ ruleId, value }) {
	return `
Configuration for rule "${ruleId}" is invalid. Each rule must have a severity ("off", 0, "warn", 1, "error", or 2) and may be followed by additional options for the rule.

You passed '${stringifyValueForError(value, 4)}', which doesn't contain a valid severity.

If you're attempting to configure rule options, perhaps you meant:

    "${ruleId}": ["error", ${stringifyValueForError(value, 8)}]

See https://eslint.org/docs/latest/use/configure/rules#using-configuration-files for configuring rules.
`.trimStart();
};
