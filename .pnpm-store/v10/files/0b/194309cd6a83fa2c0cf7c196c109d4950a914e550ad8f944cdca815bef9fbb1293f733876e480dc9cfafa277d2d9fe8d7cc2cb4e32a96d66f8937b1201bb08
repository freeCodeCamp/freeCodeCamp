import { RULE_NAME_ALL } from './constants.mjs';

import optionsMatches from './utils/optionsMatches.mjs';
import putIfAbsent from './utils/putIfAbsent.mjs';
import reportCommentProblem from './utils/reportCommentProblem.mjs';
import validateDisableSettings from './validateDisableSettings.mjs';

/**
 * @param {import('stylelint').PostcssResult} postcssResult
 * @returns {void}
 */
export default function needlessDisables(postcssResult) {
	const [enabled, options] = validateDisableSettings(postcssResult, 'reportNeedlessDisables');

	if (!options) return;

	const {
		disabledRanges,
		disabledRanges: { [RULE_NAME_ALL]: disabledRangesAll = [] },
		disabledWarnings = [],
	} = postcssResult.stylelint;

	// A map from `stylelint-disable` comments to the set of rules that
	// are usefully disabled by each comment. We track this
	// comment-by-comment rather than range-by-range because ranges that
	// disable *all* rules are duplicated for each rule they apply to in
	// practice.
	/** @type {Map<import('postcss').Node, Set<string>>}} */
	const usefulDisables = new Map();

	for (const warning of disabledWarnings) {
		const rule = warning.rule;
		const ruleRanges = disabledRanges[rule];

		if (ruleRanges) {
			for (const range of ruleRanges) {
				if (isWarningInRange(warning, range)) {
					putIfAbsent(usefulDisables, range.node, () => new Set()).add(rule);
				}
			}
		}

		for (const range of disabledRangesAll) {
			if (isWarningInRange(warning, range)) {
				putIfAbsent(usefulDisables, range.node, () => new Set()).add(rule);
			}
		}
	}

	const allRangeNodes = new Set(disabledRangesAll.map((range) => range.node));

	for (const [rule, ranges] of Object.entries(disabledRanges)) {
		for (const range of ranges) {
			const node = range.node;

			if (rule !== RULE_NAME_ALL && allRangeNodes.has(node)) continue;

			if (enabled === optionsMatches(options, 'except', rule)) continue;

			const useful = usefulDisables.get(node) || new Set();

			// Only emit a warning if this range's comment isn't useful for this rule.
			// For the special rule "all", only emit a warning if it's not useful for
			// *any* rules, because it covers all of them.
			if (rule === RULE_NAME_ALL ? useful.size !== 0 : useful.has(rule)) continue;

			reportCommentProblem({
				rule: '--report-needless-disables',
				message: `Needless disable for "${rule}"`,
				severity: options.severity,
				node,
				postcssResult,
			});
		}
	}
}

/**
 * @param {import('stylelint').DisabledWarning} warning
 * @param {import('stylelint').DisabledRange} range
 * @returns {boolean}
 */
function isWarningInRange(warning, range) {
	const line = warning.line;

	// Need to check if range.end exist, because line number type cannot be compared to undefined
	return (
		range.start <= line &&
		((range.end !== undefined && range.end >= line) || range.end === undefined)
	);
}
