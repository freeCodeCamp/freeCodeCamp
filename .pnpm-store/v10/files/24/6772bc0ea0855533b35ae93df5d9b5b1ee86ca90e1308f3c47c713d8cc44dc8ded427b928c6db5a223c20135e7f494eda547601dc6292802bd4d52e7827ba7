import { isAtRule, isRule } from './typeGuards.mjs';

/**
 * @param {import('postcss').Container} statement
 * @param {{ noRawBefore: boolean }} options
 * @returns {string}
 */
export default function beforeBlockString(statement, { noRawBefore } = { noRawBefore: false }) {
	let result = '';

	const before = statement.raws.before || '';

	if (!noRawBefore) {
		result += before;
	}

	if (isRule(statement)) {
		result += statement.selector;
	} else if (isAtRule(statement)) {
		result += `@${statement.name}${statement.raws.afterName || ''}${statement.params}`;
	} else {
		return '';
	}

	result += statement.raws.between || '';

	return result;
}
