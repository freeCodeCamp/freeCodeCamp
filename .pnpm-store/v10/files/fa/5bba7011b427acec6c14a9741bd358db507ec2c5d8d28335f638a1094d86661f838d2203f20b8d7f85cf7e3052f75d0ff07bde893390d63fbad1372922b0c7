import { DEFAULT_SEVERITY, SEVERITY_ERROR } from '../constants.mjs';

/** @import {LintResult} from 'stylelint' */
/** @typedef {LintResult['parseErrors'][0]} ParseError */
/** @typedef {LintResult['warnings'][0]} Warning */
/** @typedef {Warning['severity']} Severity */

/**
 * Preprocess warnings in a given lint result.
 * Note that this function has a side-effect.
 *
 * @param {LintResult} result
 * @returns {LintResult}
 */
export default function preprocessWarnings(result) {
	for (const error of result.parseErrors || []) {
		result.warnings.push(parseErrorToWarning(error));
	}

	for (const warning of result.warnings) {
		warning.severity = normalizeSeverity(warning);
	}

	result.warnings.sort(byLocationOrder);

	return result;
}

/**
 * @param {ParseError} error
 * @returns {Warning}
 */
function parseErrorToWarning(error) {
	return {
		line: error.line,
		column: error.column,
		rule: error.stylelintType,
		severity: SEVERITY_ERROR,
		text: `${error.text} (${error.stylelintType})`,
	};
}

/**
 * @param {Warning} warning
 * @returns {Severity}
 */
function normalizeSeverity(warning) {
	// NOTE: Plugins may add a warning without severity, for example,
	// by directly using the PostCSS `Result#warn()` API.
	return warning.severity || DEFAULT_SEVERITY;
}

/**
 * @param {Warning} a
 * @param {Warning} b
 * @returns {number}
 */
function byLocationOrder(a, b) {
	// positionless first
	if (!a.line && b.line) return -1;

	// positionless first
	if (a.line && !b.line) return 1;

	if (a.line < b.line) return -1;

	if (a.line > b.line) return 1;

	if (a.column < b.column) return -1;

	if (a.column > b.column) return 1;

	return 0;
}
