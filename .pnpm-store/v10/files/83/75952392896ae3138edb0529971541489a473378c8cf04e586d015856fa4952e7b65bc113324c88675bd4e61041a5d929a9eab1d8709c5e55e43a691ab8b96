import selectorParser from 'postcss-selector-parser';
const { isRoot, isSelector } = selectorParser;

import flattenNestedSelectorsForRule from '../../utils/flattenNestedSelectorsForRule.mjs';
import getStrippedSelectorSource from '../../utils/getStrippedSelectorSource.mjs';
import isContextFunctionalPseudoClass from '../../utils/isContextFunctionalPseudoClass.mjs';
import isNonNegativeInteger from '../../utils/isNonNegativeInteger.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-max-class';

const messages = ruleMessages(ruleName, {
	expected: (selector, max) =>
		`Expected "${selector}" to have no more than ${max} ${max === 1 ? 'class' : 'classes'}`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-max-class',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: isNonNegativeInteger,
		});

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
				if (childNode.type === 'class') total += 1;

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
