import isStandardSyntaxComment from '../../utils/isStandardSyntaxComment.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'comment-no-empty';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected empty comment',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/comment-no-empty',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkComments((comment) => {
			// To ignore non-standard comments
			if (!isStandardSyntaxComment(comment)) {
				return;
			}

			// To ignore comments that are not empty
			if (comment.text && comment.text.length !== 0) {
				return;
			}

			report({
				message: messages.rejected,
				messageArgs: [],
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
