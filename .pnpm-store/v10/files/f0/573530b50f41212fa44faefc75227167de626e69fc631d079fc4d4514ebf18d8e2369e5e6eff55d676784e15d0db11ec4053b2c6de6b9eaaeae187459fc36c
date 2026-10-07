import getRuleSelector from '../../utils/getRuleSelector.mjs';
import isStandardSyntaxCombinator from '../../utils/isStandardSyntaxCombinator.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import { isString } from '../../utils/validateTypes.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-combinator-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (combinator) => `Unexpected combinator "${combinator}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isString],
		});

		if (!validOptions) {
			return;
		}

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			parseSelector(getRuleSelector(ruleNode), result, ruleNode)?.walkCombinators(
				(combinatorNode) => {
					if (!isStandardSyntaxCombinator(combinatorNode)) {
						return;
					}

					const { value } = combinatorNode;
					const normalizedValue = normalizeCombinator(value);

					if (!primary.includes(normalizedValue)) {
						return;
					}

					const { sourceIndex: index, raws } = combinatorNode;
					const endIndex = index + ((raws && raws.value) || value).length;

					report({
						result,
						ruleName,
						message: messages.rejected,
						messageArgs: [normalizedValue],
						node: ruleNode,
						index,
						endIndex,
					});
				},
			);
		});
	};
};

/**
 * @param {string} value
 * @returns {string}
 */
function normalizeCombinator(value) {
	return value.replace(/\s+/g, ' ');
}

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
