import arrayEqual from './arrayEqual.mjs';
import { isPlainObject } from './validateTypes.mjs';

const IGNORED_OPTIONS = new Set(['severity', 'message', 'url', 'reportDisables', 'disableFix']);
const REPORT_OPTIONS = new Set([
	'reportDescriptionlessDisables',
	'reportInvalidScopeDisables',
	'reportNeedlessDisables',
	'reportUnscopedDisables',
]);

/** @typedef {import('stylelint').RuleOptions} RuleOptions */
/** @typedef {import('stylelint').RuleOptionsPossible} RuleOptionsPossible */

/**
 * @type {import('stylelint').Utils['validateOptions']}
 */
export default function validateOptions(result, ruleName, ...optionDescriptions) {
	const mustValidate = result.stylelint.config?.validate;

	if (!mustValidate) return true;

	let noErrors = true;

	for (const optionDescription of optionDescriptions) {
		validate(optionDescription, ruleName, complain);
	}

	/**
	 * @param {string} message
	 */
	function complain(message) {
		noErrors = false;
		result.warn(message, {
			stylelintType: 'invalidOption',
		});
		result.stylelint.stylelintError = true;
	}

	return noErrors;
}

/**
 * @param {RuleOptions} opts
 * @param {string} ruleName
 * @param {(message: string) => void} complain
 */
function validate({ possible, actual, optional }, ruleName, complain) {
	if (actual === false && !REPORT_OPTIONS.has(ruleName)) {
		return complain(
			`Invalid option value "false" for rule "${ruleName}". Are you trying to disable this rule? If so use "null" instead`,
		);
	}

	// `null` means to turn off a rule.
	if (actual === null || arrayEqual(actual, [null])) {
		return;
	}

	const nothingPossible =
		possible === undefined ||
		possible === null ||
		(Array.isArray(possible) && possible.length === 0) ||
		(isPlainObject(possible) && Object.keys(possible).length === 0);

	if (nothingPossible && actual === true) {
		return;
	}

	if (actual === undefined) {
		if (nothingPossible || optional) {
			return;
		}

		complain(`Expected option value for rule "${ruleName}"`);

		return;
	}

	if (nothingPossible) {
		if (optional) {
			complain(
				`Incorrect configuration for rule "${ruleName}". Rule should have "possible" values for options validation`,
			);

			return;
		}

		complain(`Unexpected option value ${stringify(actual)} for rule "${ruleName}"`);

		return;
	}

	if (typeof possible === 'function') {
		if (!possible(actual)) {
			complain(`Invalid option ${stringify(actual)} for rule "${ruleName}"`);
		}

		return;
	}

	// If `possible` is an array instead of an object ...
	if (Array.isArray(possible)) {
		for (const a of [actual].flat()) {
			if (isValid(possible, a)) {
				continue;
			}

			complain(`Invalid option value ${stringify(a)} for rule "${ruleName}"`);
		}

		return;
	}

	// If actual is NOT an object ...
	if (!isPlainObject(actual) || typeof actual !== 'object' || actual === null) {
		complain(
			`Invalid option value ${stringify(actual)} for rule "${ruleName}": should be an object`,
		);

		return;
	}

	for (const [optionName, optionValue] of Object.entries(actual)) {
		if (IGNORED_OPTIONS.has(optionName)) {
			continue;
		}

		const possibleValue = possible && possible[optionName];

		if (!possibleValue) {
			complain(`Invalid option name "${optionName}" for rule "${ruleName}"`);

			continue;
		}

		for (const a of [optionValue].flat()) {
			if (isValid(possibleValue, a)) {
				continue;
			}

			complain(`Invalid value ${stringify(a)} for option "${optionName}" of rule "${ruleName}"`);
		}
	}
}

/**
 * @param {RuleOptionsPossible | RuleOptionsPossible[]} possible
 * @param {unknown} actual
 * @returns {boolean}
 */
function isValid(possible, actual) {
	for (const possibility of [possible].flat()) {
		if (typeof possibility === 'function' && possibility(actual)) {
			return true;
		}

		if (actual === possibility) {
			return true;
		}
	}

	return false;
}

/**
 * @param {unknown} value
 * @returns {string}
 */
function stringify(value) {
	if (typeof value === 'string') {
		return `"${value}"`;
	}

	return `"${JSON.stringify(value)}"`;
}
