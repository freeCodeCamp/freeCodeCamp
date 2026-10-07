import getAtRuleParams from './getAtRuleParams.mjs';
import getRuleSelector from './getRuleSelector.mjs';

import { isObject, isString } from './validateTypes.mjs';

/** @import {AtRule, Declaration, Rule} from 'postcss' */

/**
 * @param {AtRule} atRule
 * @returns {number}
 */
export function atRuleParamIndex(atRule) {
	const index = atRuleAfterNameIndex(atRule);

	return index + (atRule.raws.afterName?.length ?? 0);
}

/**
 * @param {AtRule} atRule
 * @returns {number}
 */
export function atRuleAfterIndex(atRule) {
	// subtract 1 for `}`

	const endOffset = atRule.source?.end?.offset;

	if (!endOffset) return atRule.toString().length - 1;

	const afterLength = atRule.raws?.after?.length;

	if (!afterLength) return endOffset - 1;

	return endOffset - (afterLength + 1);
}

/**
 * @param {AtRule} atRule
 * @returns {number}
 */
export function atRuleAfterNameIndex(atRule) {
	// Initial 1 is for the `@`
	return 1 + atRule.name.length;
}

/**
 * @param {AtRule} atRule
 * @returns {number}
 */
export function atRuleBetweenIndex(atRule) {
	return atRuleParamIndex(atRule) + getAtRuleParams(atRule).length;
}

/**
 * @param {Declaration} decl
 * @returns {number}
 */
export function declarationBetweenIndex(decl) {
	const { prop } = decl.raws;
	const propIsObject = isObject(prop);

	return countChars([
		propIsObject && 'prefix' in prop && prop.prefix,
		(propIsObject && 'raw' in prop && prop.raw) || decl.prop,
		propIsObject && 'suffix' in prop && prop.suffix,
	]);
}

/**
 * Get the index of a declaration's value
 *
 * @param {Declaration} decl
 * @returns {number}
 */
export function declarationValueIndex(decl) {
	const { between, value } = decl.raws;

	return (
		declarationBetweenIndex(decl) +
		countChars([between || ':', value && 'prefix' in value && value.prefix])
	);
}

/**
 * @param {Rule} rule
 * @returns {number}
 */
export function ruleBetweenIndex(rule) {
	return getRuleSelector(rule).length;
}

/**
 * @param {Rule} rule
 * @returns {number}
 */
export function ruleAfterIndex(rule) {
	// subtract 1 for `}`

	const endOffset = rule.source?.end?.offset;

	if (!endOffset) return rule.toString().length - 1;

	const afterLength = rule.raws?.after?.length;

	if (!afterLength) return endOffset - 1;

	return endOffset - (afterLength + 1);
}

/**
 * @param {unknown[]} values
 * @returns {number}
 */
function countChars(values) {
	return values.reduce((/** @type {number} */ count, value) => {
		if (isString(value)) return count + value.length;

		return count;
	}, 0);
}
