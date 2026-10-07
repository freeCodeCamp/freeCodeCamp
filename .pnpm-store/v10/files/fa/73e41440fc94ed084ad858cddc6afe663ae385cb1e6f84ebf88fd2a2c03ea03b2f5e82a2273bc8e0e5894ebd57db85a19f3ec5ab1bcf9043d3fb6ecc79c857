import postcss from 'postcss';

import { assert, isRegExp, isString } from '../../utils/validateTypes.mjs';
import { fontFamilyKeywords, systemFontKeywords } from '../../reference/keywords.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import findFontFamily from '../../utils/findFontFamily.mjs';
import { isAtRule } from '../../utils/typeGuards.mjs';
import isStandardSyntaxValue from '../../utils/isStandardSyntaxValue.mjs';
import isVariable from '../../utils/isVariable.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'font-family-no-missing-generic-family-keyword';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected missing generic font family',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword',
};

/**
 * @param {import('postcss-value-parser').Node} node
 * @returns {boolean}
 */
const isFamilyNameKeyword = (node) =>
	!('quote' in node) && fontFamilyKeywords.has(node.value.toLowerCase());

/**
 * @param {string} value
 * @returns {boolean}
 */
const isLastFontFamilyVariable = (value) => {
	const lastValue = postcss.list.comma(value).pop();

	return lastValue != null && (isVariable(lastValue) || !isStandardSyntaxValue(lastValue));
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{ actual: primary },
			{
				actual: secondaryOptions,
				possible: {
					ignoreFontFamilies: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const ignoredAtRules = new Set(['font-face', 'font-palette-values']);

		root.walkDecls(/^font(-family)?$/i, (decl) => {
			const parent = decl.parent;

			if (parent && isAtRule(parent) && ignoredAtRules.has(parent.name.toLowerCase())) {
				return;
			}

			if (decl.prop === 'font' && systemFontKeywords.has(decl.value.toLowerCase())) {
				return;
			}

			if (isLastFontFamilyVariable(decl.value)) {
				return;
			}

			const fontFamilies = findFontFamily(decl.value);

			if (fontFamilies.length === 0) {
				return;
			}

			if (fontFamilies.some((node) => isFamilyNameKeyword(node))) {
				return;
			}

			if (
				fontFamilies.some((node) =>
					optionsMatches(secondaryOptions, 'ignoreFontFamilies', node.value),
				)
			) {
				return;
			}

			const lastFontFamily = fontFamilies[fontFamilies.length - 1];

			assert(lastFontFamily);

			const valueIndex = declarationValueIndex(decl);
			const index = valueIndex + lastFontFamily.sourceIndex;
			const endIndex = valueIndex + lastFontFamily.sourceEndIndex;

			report({
				result,
				ruleName,
				message: messages.rejected,
				messageArgs: [],
				node: decl,
				index,
				endIndex,
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
