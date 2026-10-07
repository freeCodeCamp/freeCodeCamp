import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';

import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import getLexer from '../../utils/getLexer.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'at-rule-prelude-no-invalid';

const messages = ruleMessages(ruleName, {
	rejected: (atRule, prelude) => `Unexpected invalid prelude "${prelude}" for at-rule "${atRule}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/at-rule-prelude-no-invalid',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions, context) => {
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

		root.walkAtRules((atRule) => {
			if (!isStandardSyntaxAtRule(atRule)) return;

			const { name, params } = atRule;

			if (optionsMatches(secondaryOptions, 'ignoreAtRules', name)) return;

			const lexer = getLexer(context);
			const { error } = lexer.matchAtrulePrelude(name, params);

			if (!error) return;

			if (error.name !== 'SyntaxMatchError') return;

			const atName = `@${name}`;

			const index = atRuleParamIndex(atRule);
			const endIndex = index + params.length;

			report({
				message: messages.rejected,
				messageArgs: [atName, params],
				node: atRule,
				index,
				endIndex,
				ruleName,
				result,
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
