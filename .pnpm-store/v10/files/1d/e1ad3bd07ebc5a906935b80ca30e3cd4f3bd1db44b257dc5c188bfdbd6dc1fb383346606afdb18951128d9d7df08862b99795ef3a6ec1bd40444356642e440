import { RULE_NAME_ALL } from './constants.mjs';

import optionsMatches from './utils/optionsMatches.mjs';
import reportCommentProblem from './utils/reportCommentProblem.mjs';
import validateDisableSettings from './validateDisableSettings.mjs';

/**
 * @param {import('stylelint').PostcssResult} postcssResult
 * @returns {void}
 */
export default function descriptionlessDisables(postcssResult) {
	const [enabled, options] = validateDisableSettings(
		postcssResult,
		'reportDescriptionlessDisables',
	);

	if (!options) return;

	/** @type {Set<import('postcss').Node>} */
	const alreadyReported = new Set();

	for (const [rule, ruleRanges] of Object.entries(postcssResult.stylelint.disabledRanges)) {
		for (const range of ruleRanges) {
			if (range.description) continue;

			const node = range.node;

			if (alreadyReported.has(node)) continue;

			if (enabled === optionsMatches(options, 'except', rule)) {
				// An 'all' rule will get copied for each individual rule. If the
				// configuration is `[false, {except: ['specific-rule']}]`, we
				// don't want to report the copies that match except, so we record
				// the comment as already reported.
				if (!enabled && rule === RULE_NAME_ALL) alreadyReported.add(node);

				continue;
			}

			alreadyReported.add(node);

			reportCommentProblem({
				rule: '--report-descriptionless-disables',
				message: `Disable for "${rule}" is missing a description`,
				severity: options.severity,
				node,
				postcssResult,
			});
		}
	}
}
