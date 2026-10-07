import checkAgainstRule from './utils/checkAgainstRule.mjs';
import createPlugin from './createPlugin.mjs';
import createStylelint from './createStylelint.mjs';
import formatters from './formatters/index.mjs';
import { longhandSubPropertiesOfShorthandProperties } from './reference/properties.mjs';
import postcssPlugin from './postcssPlugin.mjs';
import report from './utils/report.mjs';
import resolveConfig from './resolveConfig.mjs';
import ruleMessages from './utils/ruleMessages.mjs';
import rules from './rules/index.mjs';
import standalone from './standalone.mjs';
import validateOptions from './utils/validateOptions.mjs';

/** @type {import('stylelint').PublicApi} */
const stylelint = Object.assign(postcssPlugin, {
	lint: standalone,
	rules,
	formatters,
	createPlugin,
	resolveConfig,
	_createLinter: createStylelint,
	utils: {
		report,
		ruleMessages,
		validateOptions,
		checkAgainstRule,
	},
	reference: {
		longhandSubPropertiesOfShorthandProperties,
	},
});

export default stylelint;
