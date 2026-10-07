import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'comment-pattern';

const messages = ruleMessages(ruleName, {
	expected: (pattern) => `Expected comment to match pattern "${pattern}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/comment-pattern',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isRegExp, isString],
		});

		if (!validOptions) {
			return;
		}

		const normalizedPattern = isString(primary) ? new RegExp(primary) : primary;

		root.walkComments((comment) => {
			const text = comment.text;

			if (normalizedPattern.test(text)) {
				return;
			}

			report({
				message: messages.expected,
				messageArgs: [primary],
				node: comment,
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
