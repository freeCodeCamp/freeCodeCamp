import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atKeywords } from '../../reference/atKeywords.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'at-rule-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (atRule) => `Unexpected unknown at-rule "${atRule}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/at-rule-no-unknown',
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

		if (!validOptions) {
			return;
		}

		const languageAtRules = result.stylelint.config?.languageOptions?.syntax?.atRules || {};
		const configuredAtRuleNames = new Set(Object.keys(languageAtRules));

		root.walkAtRules((atRule) => {
			if (!isStandardSyntaxAtRule(atRule)) {
				return;
			}

			const name = atRule.name;

			if (configuredAtRuleNames.has(name)) {
				return;
			}

			// Return early if at-rule is to be ignored
			if (optionsMatches(secondaryOptions, 'ignoreAtRules', atRule.name)) {
				return;
			}

			if (vendor.prefix(name) || atKeywords.has(name.toLowerCase())) {
				return;
			}

			const atName = `@${name}`;

			report({
				message: messages.rejected,
				messageArgs: [atName],
				node: atRule,
				ruleName,
				result,
				word: atName,
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
