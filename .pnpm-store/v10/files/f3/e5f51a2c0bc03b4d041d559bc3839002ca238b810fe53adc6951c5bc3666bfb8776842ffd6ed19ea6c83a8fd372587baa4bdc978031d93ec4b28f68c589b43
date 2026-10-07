import isAutoprefixable from '../../utils/isAutoprefixable.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'at-rule-no-vendor-prefix';

const messages = ruleMessages(ruleName, {
	rejected: (atRule) => `Unexpected vendor-prefixed at-rule "${atRule}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix',
	fixable: true,
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkAtRules((atRule) => {
			if (!isStandardSyntaxAtRule(atRule)) {
				return;
			}

			const name = atRule.name;

			if (!name.startsWith('-')) {
				return;
			}

			if (!isAutoprefixable.atRuleName(name)) {
				return;
			}

			const fix = () => {
				atRule.name = isAutoprefixable.unprefix(atRule.name);
			};

			const atName = `@${name}`;

			report({
				message: messages.rejected,
				messageArgs: [atName],
				node: atRule,
				word: atName,
				result,
				ruleName,
				fix: {
					apply: fix,
					node: atRule,
				},
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
