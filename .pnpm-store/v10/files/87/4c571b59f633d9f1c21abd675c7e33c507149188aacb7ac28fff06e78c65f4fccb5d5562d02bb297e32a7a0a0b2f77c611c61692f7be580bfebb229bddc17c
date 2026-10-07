import { isAtRule, isRoot, isRule } from '../../utils/typeGuards.mjs';
import blockString from '../../utils/blockString.mjs';
import fixEmptyLinesBefore from '../../utils/fixEmptyLinesBefore.mjs';
import hasEmptyLine from '../../utils/hasEmptyLine.mjs';
import isAfterComment from '../../utils/isAfterComment.mjs';
import isAfterStandardPropertyDeclaration from '../../utils/isAfterStandardPropertyDeclaration.mjs';
import isCustomProperty from '../../utils/isCustomProperty.mjs';
import isFirstNested from '../../utils/isFirstNested.mjs';
import isFirstNodeOfRoot from '../../utils/isFirstNodeOfRoot.mjs';
import isSingleLineString from '../../utils/isSingleLineString.mjs';
import isStandardSyntaxDeclaration from '../../utils/isStandardSyntaxDeclaration.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'declaration-empty-line-before';

const messages = ruleMessages(ruleName, {
	expected: 'Expected empty line before declaration',
	rejected: 'Unexpected empty line before declaration',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/declaration-empty-line-before',
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
					except: ['first-nested', 'after-comment', 'after-declaration'],
					ignore: [
						'after-comment',
						'after-declaration',
						'first-nested',
						'inside-single-line-block',
					],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		root.walkDecls((decl) => {
			const prop = decl.prop;
			const parent = decl.parent;

			if (parent == null) {
				return;
			}

			// Ignore the first node
			if (isFirstNodeOfRoot(decl)) {
				return;
			}

			if (!isAtRule(parent) && !isRule(parent) && !isRoot(parent)) {
				return;
			}

			if (!isStandardSyntaxDeclaration(decl)) {
				return;
			}

			if (isCustomProperty(prop)) {
				return;
			}

			// Optionally ignore the node if a comment precedes it
			if (optionsMatches(secondaryOptions, 'ignore', 'after-comment') && isAfterComment(decl)) {
				return;
			}

			// Optionally ignore the node if a declaration precedes it
			if (
				optionsMatches(secondaryOptions, 'ignore', 'after-declaration') &&
				isAfterStandardPropertyDeclaration(decl)
			) {
				return;
			}

			// Optionally ignore the node if it is the first nested
			if (optionsMatches(secondaryOptions, 'ignore', 'first-nested') && isFirstNested(decl)) {
				return;
			}

			// Optionally ignore nodes inside single-line blocks
			if (
				optionsMatches(secondaryOptions, 'ignore', 'inside-single-line-block') &&
				isSingleLineString(blockString(parent))
			) {
				return;
			}

			let expectEmptyLineBefore = primary === 'always';

			// Optionally reverse the expectation if any exceptions apply
			if (
				(optionsMatches(secondaryOptions, 'except', 'first-nested') && isFirstNested(decl)) ||
				(optionsMatches(secondaryOptions, 'except', 'after-comment') && isAfterComment(decl)) ||
				(optionsMatches(secondaryOptions, 'except', 'after-declaration') &&
					isAfterStandardPropertyDeclaration(decl))
			) {
				expectEmptyLineBefore = !expectEmptyLineBefore;
			}

			// Check for at least one empty line
			const hasEmptyLineBefore = hasEmptyLine(decl.raws.before);

			// Return if the expectation is met
			if (expectEmptyLineBefore === hasEmptyLineBefore) {
				return;
			}

			const message = expectEmptyLineBefore ? messages.expected : messages.rejected;
			const action = expectEmptyLineBefore ? 'add' : 'remove';

			// Fix
			const fix = () =>
				fixEmptyLinesBefore({
					node: decl,
					newline: context.newline,
					action,
				});

			report({
				message,
				messageArgs: [],
				node: decl,
				result,
				ruleName,
				fix: {
					apply: fix,
					node: decl.parent,
				},
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
