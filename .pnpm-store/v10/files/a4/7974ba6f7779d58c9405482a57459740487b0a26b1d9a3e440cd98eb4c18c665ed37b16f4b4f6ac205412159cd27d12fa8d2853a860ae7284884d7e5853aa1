import { isRoot } from '../../utils/typeGuards.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'block-no-redundant-nested-style-rules';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected redundant nested style rule',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/block-no-redundant-nested-style-rules',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [true],
		});

		if (!validOptions) return;

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) return;

			const { parent, selector } = ruleNode;

			if (selector !== '&') return;

			if (!parent) return;

			if (isRoot(parent)) return;

			report({
				message: messages.rejected,
				messageArgs: [],
				node: ruleNode,
				result,
				ruleName,
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
