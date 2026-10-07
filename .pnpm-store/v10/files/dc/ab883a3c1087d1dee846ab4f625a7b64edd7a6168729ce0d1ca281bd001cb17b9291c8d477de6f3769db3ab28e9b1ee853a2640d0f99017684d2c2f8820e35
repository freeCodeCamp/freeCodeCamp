import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-attribute-name-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (name) => `Unexpected name "${name}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isString, isRegExp],
		});

		if (!validOptions) {
			return;
		}

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			if (!ruleNode.selector.includes('[')) {
				return;
			}

			parseSelector(getRuleSelector(ruleNode), result, ruleNode)?.walkAttributes(
				(attributeNode) => {
					const attributeName = attributeNode.qualifiedAttribute;

					if (!matchesStringOrRegExp(attributeName, primary)) {
						return;
					}

					const index = attributeNode.sourceIndex + attributeNode.offsetOf('attribute');
					const endIndex = index + attributeName.length;

					report({
						message: messages.rejected,
						messageArgs: [attributeName],
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
