import valueParser from 'postcss-value-parser';

import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import isStandardSyntaxValue from '../../utils/isStandardSyntaxValue.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'annotation-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (annotation) => `Unexpected unknown annotation "${annotation}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/annotation-no-unknown',
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
					ignoreAnnotations: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		root.walkDecls(checkStatement);

		/**
		 * @param {import('postcss').Declaration} decl
		 */
		function checkStatement(decl) {
			if (!isStandardSyntaxValue(decl.value)) return;

			if (decl.important) return;

			if (!decl.value.includes('!')) return;

			const parsedValue = valueParser(getDeclarationValue(decl));

			parsedValue.walk((node) => {
				if (!isAnnotation(node)) return;

				const value = node.value;
				const tokenValue = value.slice(1);

				if (optionsMatches(secondaryOptions, 'ignoreAnnotations', tokenValue)) {
					return;
				}

				report({
					message: messages.rejected,
					messageArgs: [value],
					node: decl,
					result,
					ruleName,
					word: value,
				});
			});
		}

		/**
		 * @param {valueParser.Node} node
		 */
		function isAnnotation(node) {
			return node.type === 'word' && node.value.startsWith('!');
		}
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
