import { RULE_NAME_ALL } from './constants.mjs';

import optionsMatches from './utils/optionsMatches.mjs';
import reportCommentProblem from './utils/reportCommentProblem.mjs';
import validateDisableSettings from './validateDisableSettings.mjs';

/** @typedef {import('postcss').Node} Node */

/** @param {import('stylelint').PostcssResult} postcssResult */
export default function reportUnscopedDisables(postcssResult) {
	const [enabled, options] = validateDisableSettings(postcssResult, 'reportUnscopedDisables');

	if (!options) return;

	const isDisabled = !enabled && !options.except.length;

	if (isDisabled) return;

	const stylelint = postcssResult.stylelint;
	const unscopedComments = stylelint.disabledRanges[RULE_NAME_ALL];

	if (!unscopedComments) return;

	/** @param {Node} node */
	const report = (node) => {
		reportCommentProblem({
			rule: '--report-unscoped-disables',
			message: `Configuration comment must be scoped`,
			severity: options.severity,
			node,
			postcssResult,
		});
	};

	const hasExceptions = options.except.length;

	if (hasExceptions && !enabled) {
		const configRules = stylelint.config?.rules;

		if (!configRules) return;

		const warnings = stylelint.disabledWarnings;

		if (!warnings) return;

		/** @type {Set<Node>} */
		const alreadyReported = new Set();

		for (const { line, rule } of warnings) {
			const isException = optionsMatches(options, 'except', rule);

			if (!isException) continue;

			for (const { start, end, node } of unscopedComments) {
				if (alreadyReported.has(node)) continue;

				if (start <= line && (end === undefined || end >= line)) {
					report(node);
					alreadyReported.add(node);
				}
			}
		}
	} else if (enabled) {
		for (const { node } of unscopedComments) report(node);
	}
}
