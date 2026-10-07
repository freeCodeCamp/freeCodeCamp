import postcss from 'postcss';

import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { deprecatedAtKeywords } from '../../reference/atKeywords.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'at-rule-no-deprecated';

const messages = ruleMessages(ruleName, {
	rejected: (atRule) => `Unexpected deprecated at-rule "${atRule}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/at-rule-no-deprecated',
	fixable: true,
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
					ignoreAtRules: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) return;

		root.walkAtRules((atRule) => {
			if (!isStandardSyntaxAtRule(atRule)) return;

			const { name } = atRule;
			const normalizedName = name.toLowerCase();

			if (optionsMatches(secondaryOptions, 'ignoreAtRules', name)) return;

			if (!deprecatedAtKeywords.has(normalizedName)) return;

			const atNestFixer = () => {
				const styleRule = postcss.rule({
					selector: atRule.params,
					source: atRule.source,
				});

				styleRule.append(atRule.nodes);

				atRule.replaceWith(styleRule);
			};

			const fix = normalizedName === 'nest' ? atNestFixer : undefined;

			const atName = `@${name}`;

			report({
				message: messages.rejected,
				messageArgs: [atName],
				node: atRule,
				ruleName,
				result,
				index: 0,
				endIndex: atName.length,
				fix: {
					apply: fix,
					node: atRule.parent,
				},
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;

export default rule;
