import { SEVERITY_ERROR, SEVERITY_WARNING } from '../constants.mjs';

/**
 * @param {{
 *   rule: string;
 *   message: string;
 *   severity: import('stylelint').Severity;
 *   node: import('postcss').Node;
 *   postcssResult: import('stylelint').PostcssResult;
 * }} args
 * @returns {void}
 */
export default function reportCommentProblem({ rule, message, severity, node, postcssResult }) {
	const { source } = node;

	// If the comment doesn't have a location, we can't report a useful error.
	// In practice we expect all comments to have locations, though.
	if (!source?.start) return;

	postcssResult.warn(message, {
		rule,
		severity,
		node,
		start: source.start,
		end: source.end,
	});

	switch (severity) {
		case SEVERITY_ERROR:
			postcssResult.stylelint.stylelintError = true;
			break;
		case SEVERITY_WARNING:
			postcssResult.stylelint.stylelintWarning = true;
			break;
		default:
			// no-op
			break;
	}
}
