import { isBoolean, isRegExp, isString } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import getStrippedSelectorSource from '../../utils/getStrippedSelectorSource.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

/** @import { Rule } from 'postcss' */

const ruleName = 'selector-nested-pattern';

const messages = ruleMessages(ruleName, {
	expected: (selector, pattern) => `Expected "${selector}" to match pattern "${pattern}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-nested-pattern',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: [isRegExp, isString],
			},
			{
				actual: secondaryOptions,
				possible: {
					splitList: [isBoolean],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const normalizedPattern = isString(primary) ? new RegExp(primary) : primary;
		const splitList = secondaryOptions && secondaryOptions.splitList;

		root.walkRules((ruleNode) => {
			if (ruleNode.parent && ruleNode.parent.type !== 'rule') {
				return;
			}

			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			const selectors = getRuleSelector(ruleNode);

			if (splitList) {
				parseSelector(selectors, result, ruleNode)?.each((selector) => {
					const { index, endIndex, selector: selectorStr } = getStrippedSelectorSource(selector);

					check(ruleNode, selectorStr, index, endIndex);
				});
			} else {
				check(ruleNode, selectors, 0, selectors.length);
			}
		});

		/**
		 * @param {Rule} ruleNode
		 * @param {string} selectorStr
		 * @param {number} index
		 * @param {number} endIndex
		 */
		function check(ruleNode, selectorStr, index, endIndex) {
			if (normalizedPattern.test(selectorStr)) return;

			report({
				result,
				ruleName,
				message: messages.expected,
				messageArgs: [selectorStr, primary],
				node: ruleNode,
				index,
				endIndex,
			});
		}
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
