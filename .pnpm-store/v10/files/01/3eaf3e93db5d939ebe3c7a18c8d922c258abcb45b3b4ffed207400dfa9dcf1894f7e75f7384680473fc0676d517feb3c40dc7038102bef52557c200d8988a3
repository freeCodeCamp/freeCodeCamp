import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import fixEmptyLinesBefore from '../../utils/fixEmptyLinesBefore.mjs';
import getPreviousNonSharedLineCommentNode from '../../utils/getPreviousNonSharedLineCommentNode.mjs';
import hasEmptyLine from '../../utils/hasEmptyLine.mjs';
import isAfterComment from '../../utils/isAfterComment.mjs';
import { isAtRule } from '../../utils/typeGuards.mjs';
import isBlocklessAtRuleAfterBlocklessAtRule from '../../utils/isBlocklessAtRuleAfterBlocklessAtRule.mjs';
import isBlocklessAtRuleAfterSameNameBlocklessAtRule from '../../utils/isBlocklessAtRuleAfterSameNameBlocklessAtRule.mjs';
import isFirstNested from '../../utils/isFirstNested.mjs';
import isFirstNodeOfRoot from '../../utils/isFirstNodeOfRoot.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'at-rule-empty-line-before';

const messages = ruleMessages(ruleName, {
	expected: 'Expected empty line before at-rule',
	rejected: 'Unexpected empty line before at-rule',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/at-rule-empty-line-before',
	fixable: true,
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions, context) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: ['always', 'never'],
			},
			{
				actual: secondaryOptions,
				possible: {
					except: [
						'after-same-name',
						'inside-block',
						'blockless-after-same-name-blockless',
						'blockless-after-blockless',
						'first-nested',
					],
					ignore: [
						'after-comment',
						'first-nested',
						'inside-block',
						'blockless-after-same-name-blockless',
						'blockless-after-blockless',
					],
					ignoreAtRules: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		/** @type {'always' | 'never'} */
		const expectation = primary;

		root.walkAtRules((atRule) => {
			const isNested = atRule.parent && atRule.parent.type !== 'root';

			// Ignore the first node
			if (isFirstNodeOfRoot(atRule)) {
				return;
			}

			if (!isStandardSyntaxAtRule(atRule)) {
				return;
			}

			// Return early if at-rule is to be ignored
			if (optionsMatches(secondaryOptions, 'ignoreAtRules', atRule.name)) {
				return;
			}

			// Optionally ignore the expectation if the node is blockless
			if (
				optionsMatches(secondaryOptions, 'ignore', 'blockless-after-blockless') &&
				isBlocklessAtRuleAfterBlocklessAtRule(atRule)
			) {
				return;
			}

			// Optionally ignore the node if it is the first nested
			if (optionsMatches(secondaryOptions, 'ignore', 'first-nested') && isFirstNested(atRule)) {
				return;
			}

			// Optionally ignore the expectation if the node is blockless
			// and following another blockless at-rule with the same name
			if (
				optionsMatches(secondaryOptions, 'ignore', 'blockless-after-same-name-blockless') &&
				isBlocklessAtRuleAfterSameNameBlocklessAtRule(atRule)
			) {
				return;
			}

			// Optionally ignore the expectation if the node is inside a block
			if (optionsMatches(secondaryOptions, 'ignore', 'inside-block') && isNested) {
				return;
			}

			// Optionally ignore the expectation if a comment precedes this node
			if (optionsMatches(secondaryOptions, 'ignore', 'after-comment') && isAfterComment(atRule)) {
				return;
			}

			const hasEmptyLineBefore = hasEmptyLine(atRule.raws.before);
			let expectEmptyLineBefore = expectation === 'always';

			// Optionally reverse the expectation if any exceptions apply
			if (
				(optionsMatches(secondaryOptions, 'except', 'after-same-name') &&
					isAtRuleAfterSameNameAtRule(atRule)) ||
				(optionsMatches(secondaryOptions, 'except', 'inside-block') && isNested) ||
				(optionsMatches(secondaryOptions, 'except', 'first-nested') && isFirstNested(atRule)) ||
				(optionsMatches(secondaryOptions, 'except', 'blockless-after-blockless') &&
					isBlocklessAtRuleAfterBlocklessAtRule(atRule)) ||
				(optionsMatches(secondaryOptions, 'except', 'blockless-after-same-name-blockless') &&
					isBlocklessAtRuleAfterSameNameBlocklessAtRule(atRule))
			) {
				expectEmptyLineBefore = !expectEmptyLineBefore;
			}

			// Return if the expectation is met
			if (expectEmptyLineBefore === hasEmptyLineBefore) {
				return;
			}

			const message = expectEmptyLineBefore ? messages.expected : messages.rejected;
			const action = expectEmptyLineBefore ? 'add' : 'remove';

			// Fix
			const fix = () =>
				fixEmptyLinesBefore({
					node: atRule,
					newline: context.newline,
					action,
				});

			report({
				message,
				messageArgs: [],
				node: atRule,
				result,
				ruleName,
				fix: {
					apply: fix,
					node: atRule.parent,
				},
			});
		});
	};
};

/**
 * @param {import('postcss').AtRule} atRule
 */
function isAtRuleAfterSameNameAtRule(atRule) {
	const previousNode = getPreviousNonSharedLineCommentNode(atRule);

	return previousNode && isAtRule(previousNode) && previousNode.name === atRule.name;
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
