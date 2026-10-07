import getRuleSelector from '../../utils/getRuleSelector.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import isValidIdentifier from '../../utils/isValidIdentifier.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-attribute-quotes';

const messages = ruleMessages(ruleName, {
	expected: (value) => `Expected quotes around "${value}"`,
	rejected: (value) => `Unexpected quotes around "${value}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-attribute-quotes',
	fixable: true,
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: ['always', 'never'],
		});

		if (!validOptions) {
			return;
		}

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			const { selector } = ruleNode;

			if (!selector.includes('[') || !selector.includes('=')) {
				return;
			}

			const selectorTree = parseSelector(getRuleSelector(ruleNode), result, ruleNode);

			if (!selectorTree) return;

			/**
			 * @param {keyof messages} messageType
			 * @param {import('postcss-selector-parser').Attribute} attrNode
			 */
			const complain = (messageType, attrNode) => {
				const index = attrNode.sourceIndex + attrNode.offsetOf('value');
				const value = attrNode.value || '';
				const endIndex = index + (attrNode.raws.value ?? value).length;

				const fix = () => {
					const quoteMark = messageType === 'expected' ? '"' : null;

					attrNode.quoteMark = quoteMark;
					ruleNode.selector = selectorTree.toString();
				};

				report({
					message: messages[messageType],
					messageArgs: [value],
					index,
					endIndex,
					result,
					ruleName,
					node: ruleNode,
					fix: {
						apply: fix,
						node: ruleNode,
					},
				});
			};

			selectorTree.walkAttributes((attributeNode) => {
				const { operator, value, quoted } = attributeNode;

				if (!operator || !value) {
					return;
				}

				if (!quoted && primary === 'always') {
					complain('expected', attributeNode);
				}

				if (quoted && primary === 'never') {
					// some selectors require quotes to be valid;
					// we pass in the raw string value, which contains the escape characters
					// necessary to check if escaped characters are valid
					// see: https://github.com/stylelint/stylelint/issues/4300
					if (
						!attributeNode.raws.value ||
						!isValidIdentifier(attributeNode.raws.value.slice(1, -1))
					) {
						return;
					}

					complain('rejected', attributeNode);
				}
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
