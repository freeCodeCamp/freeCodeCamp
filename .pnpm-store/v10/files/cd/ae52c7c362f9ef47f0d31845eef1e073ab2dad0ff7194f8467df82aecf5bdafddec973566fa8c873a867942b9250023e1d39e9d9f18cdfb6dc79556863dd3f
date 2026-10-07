import { isRegExp, isString } from '../../utils/validateTypes.mjs';
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

const ruleName = 'selector-pseudo-class-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (selector) => `Unexpected pseudo-class "${selector}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list',
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
		 * @param {number} offset
		 */
		function check(selector, node, offset = 0) {
			parseSelector(selector, result, node)?.walkPseudos(({ value, sourceIndex }) => {
				// Ignore pseudo-elements
				if (value.slice(0, 2) === '::') return;

				const name = value.slice(1);

				if (!matchesStringOrRegExp(vendor.unprefixed(name), primary)) return;

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

		root.walk((node) => {
			switch (node.type) {
				case 'atrule': {
					if (node.name !== 'page') return;

					if (!isStandardSyntaxAtRule(node)) return;

					const params = getAtRuleParams(node);

					if (!params.includes(':')) return;

					const offset = `@page${node.raws.afterName ?? ''}`.length;

					check(params, node, offset);
					break;
				}
				case 'rule': {
					if (!isStandardSyntaxRule(node)) return;

					const selector = getRuleSelector(node);

					if (!selector.includes(':')) return;

					check(selector, node);
					break;
				}
				default:
			}
		});
	};
};

rule.primaryOptionArray = true;
rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
