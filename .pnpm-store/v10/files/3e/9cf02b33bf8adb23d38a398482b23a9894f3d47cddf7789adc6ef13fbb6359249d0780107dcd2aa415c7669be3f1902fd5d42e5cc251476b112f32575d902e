import isStandardSyntaxComment from '../../utils/isStandardSyntaxComment.mjs';
import isWhitespace from '../../utils/isWhitespace.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'comment-whitespace-inside';

const messages = ruleMessages(ruleName, {
	expectedOpening: 'Expected whitespace after "/*"',
	rejectedOpening: 'Unexpected whitespace after "/*"',
	expectedClosing: 'Expected whitespace before "*/"',
	rejectedClosing: 'Unexpected whitespace before "*/"',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/comment-whitespace-inside',
	fixable: true,
};

/**
 * @param {import('postcss').Comment} comment
 */
function addWhitespaceBefore(comment) {
	if (comment.text.startsWith('*')) {
		comment.text = comment.text.replace(/^(\*+)/, `$1 `);
	} else {
		comment.raws.left = ' ';
	}
}

/**
 * @param {import('postcss').Comment} comment
 */
function addWhitespaceAfter(comment) {
	if (comment.text[comment.text.length - 1] === '*') {
		comment.text = comment.text.replace(/(\*+)$/, ` $1`);
	} else {
		comment.raws.right = ' ';
	}
}

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: ['always', 'never'],
		});

		if (!validOptions) {
			return;
		}

		root.walkComments((comment) => {
			if (!isStandardSyntaxComment(comment)) {
				return;
			}

			const rawComment = comment.toString();
			const firstFourChars = rawComment.slice(0, 4);

			// Return early if sourcemap or copyright comment
			if (/^\/\*[#!]\s/.test(firstFourChars)) {
				return;
			}

			const leftMatches = rawComment.match(/(^\/\*+)(\s*)/);

			if (leftMatches == null || leftMatches[1] == null) {
				throw new Error(`Invalid comment: "${rawComment}"`);
			}

			const rightMatches = rawComment.match(/(\s*)(\*+\/)$/);

			if (rightMatches == null || rightMatches[2] == null) {
				throw new Error(`Invalid comment: "${rawComment}"`);
			}

			const opener = leftMatches[1];
			const leftWord = leftMatches[2] ?? '';
			const leftSpace = leftWord.charAt(0);
			const rightWord = rightMatches[1] ?? '';
			const rightSpace = rightWord.charAt(0);
			const closer = rightMatches[2];

			if (primary === 'never' && leftSpace !== '') {
				const index = opener.length;
				const endIndex = index + leftWord.length;

				complain(messages.rejectedOpening, index, endIndex);
			}

			if (primary === 'always' && !isWhitespace(leftSpace)) {
				complain(messages.expectedOpening, opener.length);
			}

			if (primary === 'never' && rightSpace !== '') {
				const endIndex = rawComment.length - closer.length;
				const index = endIndex - rightWord.length;

				complain(messages.rejectedClosing, index, endIndex);
			}

			if (primary === 'always' && !isWhitespace(rightSpace)) {
				complain(messages.expectedClosing, rawComment.length - closer.length - 1);
			}

			/**
			 * @param {string} message
			 * @param {number} index
			 * @param {number} endIndex
			 */
			function complain(message, index, endIndex = index) {
				const fix = () => {
					if (primary === 'never') {
						comment.raws.left = '';
						comment.raws.right = '';
						comment.text = comment.text.replace(/^(\*+)(\s+)?/, '$1').replace(/(\s+)?(\*+)$/, '$2');
					} else {
						const mutate =
							message === messages.expectedClosing ? addWhitespaceAfter : addWhitespaceBefore;

						mutate(comment);
					}
				};

				report({
					message,
					messageArgs: [],
					index,
					endIndex,
					result,
					ruleName,
					node: comment,
					fix: {
						apply: fix,
						node: comment,
					},
				});
			}
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
