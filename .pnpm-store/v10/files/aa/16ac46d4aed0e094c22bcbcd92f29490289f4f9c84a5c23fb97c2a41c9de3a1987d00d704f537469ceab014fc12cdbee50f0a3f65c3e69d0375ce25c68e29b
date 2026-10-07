import { SEVERITY_ERROR } from './constants.mjs';
import { emitDeprecationWarning } from './utils/emitWarning.mjs';

/** @import { Formatter, LinterOptions, LinterResult, LintResult } from 'stylelint' */

/**
 * @param {object} args
 * @param {LintResult[]} args.results
 * @param {LinterOptions['maxWarnings']} args.maxWarnings
 * @param {LinterOptions['quietDeprecationWarnings']} args.quietDeprecationWarnings
 * @param {Formatter} args.formatter
 * @param {string} args.cwd
 * @returns {LinterResult}
 */
export default function prepareReturnValue({
	results,
	maxWarnings,
	quietDeprecationWarnings,
	formatter,
	cwd,
}) {
	let errored = false;

	for (const result of results) {
		if (
			result.errored ||
			result.parseErrors.length > 0 ||
			result.warnings.some((warning) => warning.severity === SEVERITY_ERROR)
		) {
			errored = true;
			result.errored = true;
		}
	}

	/** @type {LinterResult} */
	const returnValue = {
		cwd,
		errored,
		results: [],
		report: '',

		/**
		 * @deprecated
		 * @todo Remove in the next major version.
		 */
		get output() {
			if (!quietDeprecationWarnings && !this._outputWarned) {
				emitDeprecationWarning(
					'`output` is deprecated.',
					'RESULT_OUTPUT_PROPERTY',
					'Use `report` or `code` instead.',
				);
				this._outputWarned = true;
			}

			return this._output ?? '';
		},

		reportedDisables: [],
		ruleMetadata: getRuleMetadata(results),
	};

	// TODO: Deprecated. Remove in the next major version.
	Object.defineProperty(returnValue, '_output', { value: '', writable: true });
	Object.defineProperty(returnValue, '_outputWarned', { value: false, writable: true });

	if (maxWarnings !== undefined) {
		const foundWarnings = results.reduce((count, file) => count + file.warnings.length, 0);

		if (foundWarnings > maxWarnings) {
			returnValue.maxWarningsExceeded = { maxWarnings, foundWarnings };
		}
	}

	returnValue.report = formatter(results, returnValue);
	returnValue._output = returnValue.report; // TODO: Deprecated. Remove in the next major version.
	returnValue.results = results;

	return returnValue;
}

/**
 * @param {LintResult[]} lintResults
 */
function getRuleMetadata(lintResults) {
	const [lintResult] = lintResults;

	if (lintResult === undefined) return {};

	if (lintResult._postcssResult === undefined) return {};

	return lintResult._postcssResult.stylelint.ruleMetadata;
}
