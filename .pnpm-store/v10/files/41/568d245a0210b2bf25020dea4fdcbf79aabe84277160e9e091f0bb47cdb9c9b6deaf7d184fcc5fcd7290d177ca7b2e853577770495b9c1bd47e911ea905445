import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import containsString from '../../utils/containsString.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'comment-word-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (pattern) => `Unexpected word matching pattern "${pattern}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/comment-word-disallowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isString, isRegExp],
		});

		if (!validOptions) {
			return;
		}

		root.walkComments((comment) => {
			const text = comment.text;
			const rawComment = comment.toString();
			const firstFourChars = rawComment.slice(0, 4);

			// Return early if sourcemap
			if (firstFourChars === '/*# ') {
				return;
			}

			const matchesWord = matchesStringOrRegExp(text, primary) || containsString(text, primary);

			if (!matchesWord) {
				return;
			}

			report({
				message: messages.rejected,
				messageArgs: [matchesWord.pattern],
				node: comment,
				word: matchesWord.substring,
				result,
				ruleName,
			});
		});
	};
};

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
