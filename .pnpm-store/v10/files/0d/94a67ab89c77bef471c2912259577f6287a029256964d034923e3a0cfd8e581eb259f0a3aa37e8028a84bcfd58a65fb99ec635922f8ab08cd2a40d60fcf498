import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'selector-pseudo-class-allowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (selector) => `Unexpected pseudo-class "${selector}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list',
};

/** @import {AtRule, Rule} from 'postcss' */

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isString, isRegExp],
		});

		if (!validOptions) return;

		/**
		 * @param {string} selector
		 * @param {AtRule | Rule} node
		 * @param {number} [offset]
		 */
		function check(selector, node, offset = 0) {
			parseSelector(selector, result, node)?.walkPseudos(({ value, sourceIndex }) => {
				// Ignore pseudo-elements
				if (value.slice(0, 2) === '::') return;

				const name = value.slice(1);

				if (matchesStringOrRegExp(name, primary)) return;

				if (matchesStringOrRegExp(vendor.unprefixed(name), primary)) return;

				const index = offset + sourceIndex;

				report({
					message: messages.rejected,
					messageArgs: [value],
					node,
					result,
					ruleName,
					index,
					endIndex: index + value.length,
				});
			});
		}

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) return;

			const selector = getRuleSelector(ruleNode);

			if (!selector.includes(':')) return;

			check(selector, ruleNode);
		});

		root.walkAtRules('page', (atRuleNode) => {
			if (!isStandardSyntaxAtRule(atRuleNode)) return;

			const params = getAtRuleParams(atRuleNode);

			if (!params.includes(':')) return;

			check(params, atRuleNode, atRuleParamIndex(atRuleNode));
		});
	};
};

rule.primaryOptionArray = true;
rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
