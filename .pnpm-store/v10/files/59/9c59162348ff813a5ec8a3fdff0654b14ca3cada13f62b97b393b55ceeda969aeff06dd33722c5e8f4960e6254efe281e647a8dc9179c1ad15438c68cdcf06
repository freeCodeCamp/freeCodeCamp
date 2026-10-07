import getRuleSelector from '../../utils/getRuleSelector.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import { isString } from '../../utils/validateTypes.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-attribute-operator-allowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (operator) => `Unexpected operator "${operator}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list',
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

		const primaryValues = new Set([primary].flat());

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			const { selector } = ruleNode;

			if (!selector.includes('[') || !selector.includes('=')) {
				return;
			}

			parseSelector(getRuleSelector(ruleNode), result, ruleNode)?.walkAttributes(
				(attributeNode) => {
					const { operator } = attributeNode;

					if (!operator || primaryValues.has(operator)) {
						return;
					}

					const index = attributeNode.sourceIndex + attributeNode.offsetOf('operator');
					const endIndex = index + operator.length;

					report({
						message: messages.rejected,
						messageArgs: [operator],
						node: ruleNode,
						index,
						endIndex,
						result,
						ruleName,
					});
				},
			);
		});
	};
};

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
