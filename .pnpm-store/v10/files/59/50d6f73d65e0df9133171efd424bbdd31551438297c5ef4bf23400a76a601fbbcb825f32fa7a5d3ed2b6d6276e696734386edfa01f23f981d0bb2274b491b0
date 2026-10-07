"use strict";

/* eslint consistent-return: 0 -- no default case */

const messages = {
	env: `
A config object is using the "env" key, which is not supported in flat config system.

Flat config uses "languageOptions.globals" to define global variables for your files.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options

If you're not using "env" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

	extends: `
A config object is using the "extends" key, which is not supported in flat config system.

Instead of "extends", you can include config objects that you'd like to extend from directly in the flat config array.

If you're using "extends" in your config file, please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#predefined-and-shareable-configs

If you're not using "extends" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

	globals: `
A config object is using the "globals" key, which is not supported in flat config system.

Flat config uses "languageOptions.globals" to define global variables for your files.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options

If you're not using "globals" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

	ignorePatterns: `
A config object is using the "ignorePatterns" key, which is not supported in flat config system.

Flat config uses "ignores" to specify files to ignore.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files

If you're not using "ignorePatterns" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

	noInlineConfig: `
A config object is using the "noInlineConfig" key, which is not supported in flat config system.

Flat config uses "linterOptions.noInlineConfig" to specify files to ignore.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#linter-options
`,

	overrides: `
A config object is using the "overrides" key, which is not supported in flat config system.

Flat config is an array that acts like the eslintrc "overrides" array.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#glob-based-configs

If you're not using "overrides" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

	parser: `
A config object is using the "parser" key, which is not supported in flat config system.

Flat config uses "languageOptions.parser" to override the default parser.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#custom-parsers

If you're not using "parser" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

	parserOptions: `
A config object is using the "parserOptions" key, which is not supported in flat config system.

Flat config uses "languageOptions.parserOptions" to specify parser options.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options

If you're not using "parserOptions" directly (it may be coming from a plugin), please see the following:
https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
`,

	reportUnusedDisableDirectives: `
A config object is using the "reportUnusedDisableDirectives" key, which is not supported in flat config system.

Flat config uses "linterOptions.reportUnusedDisableDirectives" to specify files to ignore.

Please see the following page for information on how to convert your config object into the correct format:
https://eslint.org/docs/latest/use/configure/migration-guide#linter-options
`,

	root: `
A config object is using the "root" key, which is not supported in flat config system.

Flat configs always act as if they are the root config file, so this key can be safely removed.
`,
};

module.exports = function ({ key }) {
	return messages[key].trim();
};
