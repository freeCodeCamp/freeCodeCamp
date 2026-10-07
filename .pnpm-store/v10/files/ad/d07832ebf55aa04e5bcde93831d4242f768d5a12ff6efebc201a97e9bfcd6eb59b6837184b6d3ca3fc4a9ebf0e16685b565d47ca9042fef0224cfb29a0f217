import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-id-pattern';

const messages = ruleMessages(ruleName, {
	expected: (selector, pattern) => `Expected "${selector}" to match pattern "${pattern}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-id-pattern',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isRegExp, isString],
		});

		if (!validOptions) {
			return;
		}

		const normalizedPattern = isString(primary) ? new RegExp(primary) : primary;

		root.walkRules(/#/, (ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			parseSelector(getRuleSelector(ruleNode), result, ruleNode)?.walkIds((selectorNode) => {
				const { value, sourceIndex: index } = selectorNode;

				if (normalizedPattern.test(value)) {
					return;
				}

				const selector = selectorNode.toString().trim();
				const endIndex = index + selector.length;

				report({
					result,
					ruleName,
					message: messages.expected,
					messageArgs: [selector, primary],
					node: ruleNode,
					index,
					endIndex,
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
