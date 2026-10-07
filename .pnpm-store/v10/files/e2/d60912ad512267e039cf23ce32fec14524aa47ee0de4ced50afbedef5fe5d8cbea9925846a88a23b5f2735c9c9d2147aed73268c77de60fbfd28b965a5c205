import { RULE_NAME_ALL } from './constants.mjs';

import optionsMatches from './utils/optionsMatches.mjs';
import reportCommentProblem from './utils/reportCommentProblem.mjs';
import validateDisableSettings from './validateDisableSettings.mjs';

/**
 * @param {import('stylelint').PostcssResult} postcssResult
 * @returns {void}
 */
export default function invalidScopeDisables(postcssResult) {
	const [enabled, options] = validateDisableSettings(postcssResult, 'reportInvalidScopeDisables');

	if (!options) return;

	const configRules = postcssResult.stylelint.config?.rules;

	if (!configRules) return;

	const usedRules = new Set(Object.keys(configRules));

	usedRules.add(RULE_NAME_ALL);

	for (const [rule, ruleRanges] of Object.entries(postcssResult.stylelint.disabledRanges)) {
		if (usedRules.has(rule)) continue;

		if (enabled === optionsMatches(options, 'except', rule)) continue;

		for (const range of ruleRanges) {
			if (!range.strictStart && !range.strictEnd) continue;

			reportCommentProblem({
				rule: '--report-invalid-scope-disables',
				message: `Rule "${rule}" isn't enabled`,
				severity: options.severity,
				node: range.node,
				postcssResult,
			});
		}
	}
}
