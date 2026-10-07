import selectorParser from 'postcss-selector-parser';
const { isRoot, isSelector } = selectorParser;

import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import flattenNestedSelectorsForRule from '../../utils/flattenNestedSelectorsForRule.mjs';
import getStrippedSelectorSource from '../../utils/getStrippedSelectorSource.mjs';
import isContextFunctionalPseudoClass from '../../utils/isContextFunctionalPseudoClass.mjs';
import isNonNegativeInteger from '../../utils/isNonNegativeInteger.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-max-attribute';

const messages = ruleMessages(ruleName, {
	expected: (selector, max) =>
		`Expected "${selector}" to have no more than ${max} attribute ${
			max === 1 ? 'selector' : 'selectors'
		}`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-max-attribute',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: isNonNegativeInteger,
			},
			{
				actual: secondaryOptions,
				possible: {
					ignoreAttributes: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		/**
		 * @param {import('postcss-selector-parser').Selector} resolvedSelectorNode
		 * @param {import('postcss-selector-parser').Selector} selectorNode
		 * @param {import('postcss').Rule} ruleNode
		 */
		function checkSelector(resolvedSelectorNode, selectorNode, ruleNode) {
			const count = resolvedSelectorNode.reduce((total, childNode) => {
				if (childNode.type !== 'attribute') {
					// Not an attribute node -> ignore
					return total;
				}

				if (optionsMatches(secondaryOptions, 'ignoreAttributes', childNode.attribute)) {
					// it's an attribute that is supposed to be ignored
					return total;
				}

				total += 1;

				return total;
			}, 0);

			if (count > primary) {
				const { index, endIndex, selector: selectorStr } = getStrippedSelectorSource(selectorNode);

				report({
					ruleName,
					result,
					node: ruleNode,
					message: messages.expected,
					messageArgs: [selectorStr, primary],
					index,
					endIndex,
				});
			}
		}

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) return;

			flattenNestedSelectorsForRule(ruleNode, result).forEach(({ selector, resolvedSelectors }) => {
				resolvedSelectors.walk((childSelector) => {
					if (!isSelector(childSelector)) return;

					if (
						isRoot(childSelector.parent) ||
						isContextFunctionalPseudoClass(childSelector.parent)
					) {
						checkSelector(childSelector, selector, ruleNode);
					}
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
