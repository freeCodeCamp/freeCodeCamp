import { marginContextProperties, pageContextProperties } from '../../reference/properties.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import getLexer from '../../utils/getLexer.mjs';
import { isAtRule } from '../../utils/typeGuards.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import isStandardSyntaxDeclaration from '../../utils/isStandardSyntaxDeclaration.mjs';
import { pageMarginAtKeywords } from '../../reference/atKeywords.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'at-rule-descriptor-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (atRule, descriptor) =>
		`Unexpected unknown descriptor "${descriptor}" for at-rule "${atRule}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/at-rule-descriptor-no-unknown',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, _, context) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkAtRules(atRuleRegexes.unsupportedNestingNames, (atRule) => {
			if (!isStandardSyntaxAtRule(atRule)) return;

			atRule.walkDecls((decl) => {
				if (!isStandardSyntaxDeclaration(decl)) return;

				const { prop, value, parent } = decl;

				if (isPageContextPropertyInPageAtRule(atRule, prop)) return;

				if (
					parent &&
					isAtRule(parent) &&
					isMarginContextPropertyInMarginAtRule(atRule, prop, parent)
				)
					return;

				const lexer = getLexer(context);
				const { error } = lexer.matchAtruleDescriptor(atRule.name, prop, value);

				if (!error) return;

				if (error.name !== 'SyntaxReferenceError') return;

				if (!error.message.startsWith('Unknown at-rule descriptor')) return;

				const atName = `@${atRule.name}`;

				report({
					message: messages.rejected,
					messageArgs: [atName, prop],
					node: decl,
					index: 0,
					endIndex: prop.length,
					ruleName,
					result,
				});
			});
		});
	};
};

/**
 * @param {import('postcss').AtRule} atRule
 * @param {string} prop
 * @param {import('postcss').AtRule} parent
 */
function isMarginContextPropertyInMarginAtRule(atRule, prop, parent) {
	return (
		atRule.name.toLowerCase() === 'page' &&
		pageMarginAtKeywords.has(parent.name.toLowerCase()) &&
		marginContextProperties.has(prop)
	);
}

/**
 * @param {import('postcss').AtRule} atRule
 * @param {string} prop
 */
function isPageContextPropertyInPageAtRule(atRule, prop) {
	return atRule.name.toLowerCase() === 'page' && pageContextProperties.has(prop);
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
