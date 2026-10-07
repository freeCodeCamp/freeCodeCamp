import { isBoolean, isRegExp, isString } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import getStrippedSelectorSource from '../../utils/getStrippedSelectorSource.mjs';
import isKeyframeRule from '../../utils/isKeyframeRule.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (selector) => `Unexpected selector "${selector}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-disallowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: [isString, isRegExp],
			},
			{
				actual: secondaryOptions,
				possible: {
					ignore: ['inside-block', 'keyframe-selectors'],
					splitList: [isBoolean],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const ignoreInsideBlock = optionsMatches(secondaryOptions, 'ignore', 'inside-block');
		const ignoreKeyframeSelectors = optionsMatches(
			secondaryOptions,
			'ignore',
			'keyframe-selectors',
		);

		const splitList = secondaryOptions && secondaryOptions.splitList;

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			if (ignoreKeyframeSelectors && isKeyframeRule(ruleNode)) {
				return;
			}

			if (ignoreInsideBlock) {
				const { parent } = ruleNode;
				const isInsideBlock = parent && parent.type !== 'root';

				if (isInsideBlock) {
					return;
				}
			}

			/**
			 * @param {string} selectorStr
			 * @param {number} index
			 * @param {number} endIndex
			 */
			function check(selectorStr, index, endIndex) {
				if (matchesStringOrRegExp(selectorStr, primary)) {
					report({
						result,
						ruleName,
						message: messages.rejected,
						messageArgs: [selectorStr],
						node: ruleNode,
						index,
						endIndex,
					});
				}
			}

			const selectors = getRuleSelector(ruleNode);

			if (!splitList) {
				check(selectors, 0, selectors.length);

				return;
			}

			parseSelector(selectors, result, ruleNode)?.each((selector) => {
				const { selector: selectorStr, index, endIndex } = getStrippedSelectorSource(selector);

				check(selectorStr, index, endIndex);
			});
		});
	};
};

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
