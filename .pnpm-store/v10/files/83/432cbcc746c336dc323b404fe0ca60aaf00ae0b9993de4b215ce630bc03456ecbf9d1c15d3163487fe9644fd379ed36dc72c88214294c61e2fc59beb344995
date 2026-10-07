import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import isStandardSyntaxSelector from '../../utils/isStandardSyntaxSelector.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import { pseudoElements } from '../../reference/selectors.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'selector-pseudo-element-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (selector) => `Unexpected unknown pseudo-element selector "${selector}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{ actual: primary },
			{
				actual: secondaryOptions,
				possible: {
					ignorePseudoElements: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		root.walkRules((ruleNode) => {
			// Return early before parse if no pseudos for performance

			if (!ruleNode.selector.includes(':')) {
				return;
			}

			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			parseSelector(getRuleSelector(ruleNode), result, ruleNode)?.walkPseudos((pseudoNode) => {
				const value = pseudoNode.value;

				if (!isStandardSyntaxSelector(value)) {
					return;
				}

				// Ignore pseudo-classes
				if (value.slice(0, 2) !== '::') {
					return;
				}

				if (optionsMatches(secondaryOptions, 'ignorePseudoElements', pseudoNode.value.slice(2))) {
					return;
				}

				const name = value.slice(2);

				if (vendor.prefix(name) || pseudoElements.has(name.toLowerCase())) {
					return;
				}

				const index = pseudoNode.sourceIndex;
				const endIndex = index + value.length;

				report({
					message: messages.rejected,
					messageArgs: [value],
					node: ruleNode,
					index,
					endIndex,
					ruleName,
					result,
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
