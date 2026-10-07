import { SEVERITY_ERROR } from './constants.mjs';
import reportCommentProblem from './utils/reportCommentProblem.mjs';

/**
 * Returns a report describing which `results` (if any) contain disabled ranges
 * for rules that disallow disables via `reportDisables: true`.
 *
 * @param {import('stylelint').PostcssResult} postcssResult
 * @returns {void}
 */
export default function reportDisables(postcssResult) {
	const rangeData = postcssResult.stylelint.disabledRanges;
	const configRules = postcssResult.stylelint.config?.rules;

	if (!configRules) return;

	// If no rules actually disallow disables, don't bother looking for ranges
	// that correspond to disabled rules.
	if (!Object.values(configRules).some((rule) => reportDisablesForRule(rule))) {
		return;
	}

	for (const [rule, ranges] of Object.entries(rangeData)) {
		for (const range of ranges) {
			if (!configRules[rule]) continue;

			if (!reportDisablesForRule(configRules[rule])) continue;

			reportCommentProblem({
				rule: 'reportDisables',
				message: `Rule "${rule}" may not be disabled`,
				severity: SEVERITY_ERROR,
				node: range.node,
				postcssResult,
			});
		}
	}
}

/**
 * @param {import('stylelint').ConfigRuleSettings<any, object>} options
 * @returns {boolean}
 */
function reportDisablesForRule(options) {
	if (!options || !options[1]) return false;

	return Boolean(options[1].reportDisables);
}
