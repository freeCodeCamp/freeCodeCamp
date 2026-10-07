import { ParseErrorMessage, ParseErrorWithToken, tokenize } from '@csstools/css-tokenizer';

import { atRuleParamIndex, declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import isStandardSyntaxSelector from '../../utils/isStandardSyntaxSelector.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'string-no-newline';
const reNewLine = /\r?\n/;

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected newline in string',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/string-no-newline',
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
					ignore: ['at-rule-preludes', 'declaration-values'],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		root.walk((node) => {
			switch (node.type) {
				case 'atrule':
					if (optionsMatches(secondaryOptions, 'ignore', 'at-rule-preludes')) break;

					check(node, node.params, atRuleParamIndex);
					break;
				case 'decl':
					if (optionsMatches(secondaryOptions, 'ignore', 'declaration-values')) break;

					check(node, node.value, declarationValueIndex);
					break;
				case 'rule':
					checkRule(node);
					break;
			}
		});

		/**
		 * @param {import('postcss').Rule} ruleNode
		 * @returns {void}
		 */
		function checkRule(ruleNode) {
			// Get out quickly if there are no new line
			if (!reNewLine.test(ruleNode.selector)) {
				return;
			}

			if (!isStandardSyntaxSelector(ruleNode.selector)) {
				return;
			}

			check(ruleNode, ruleNode.selector, () => 0);
		}

		/**
		 * @template {import('postcss').AtRule | import('postcss').Rule | import('postcss').Declaration} T
		 * @param {T} node
		 * @param {string} value
		 * @param {(node: T) => number} getIndex
		 * @returns {void}
		 */
		function check(node, value, getIndex) {
			// Get out quickly if there are no new line
			if (!reNewLine.test(value)) {
				return;
			}

			tokenize(
				{ css: value },
				{
					onParseError: (err) => {
						if (!(err instanceof ParseErrorWithToken)) return;

						if (err.message !== ParseErrorMessage.UnexpectedNewLineInString) return;

						const [, , start, end] = err.token;

						const nodeIndex = getIndex(node);

						report({
							message: messages.rejected,
							messageArgs: [],
							node,
							index: nodeIndex + start,
							endIndex: nodeIndex + end + 1,
							result,
							ruleName,
						});
					},
				},
			);
		}
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
