import beforeBlockString from '../../utils/beforeBlockString.mjs';
import hasBlock from '../../utils/hasBlock.mjs';
import { isComment } from '../../utils/typeGuards.mjs';
import { isConfigurationComment } from '../../utils/configurationComment.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'block-no-empty';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected empty block',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/block-no-empty',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions, context) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: [true],
			},
			{
				actual: secondaryOptions,
				possible: {
					ignore: ['comments'],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const ignoreComments = optionsMatches(secondaryOptions, 'ignore', 'comments');

		// Check both kinds of statements: rules and at-rules
		root.walkRules(check);
		root.walkAtRules(check);

		/** @typedef {import('postcss').Rule | import('postcss').AtRule} Statement */

		/**
		 * @param {Statement} statement
		 */
		function check(statement) {
			if (!hasBlock(statement)) {
				return;
			}

			if (hasNotableChild(statement)) {
				return;
			}

			if (hasNonWhitespace(statement)) {
				return;
			}

			let index = beforeBlockString(statement, { noRawBefore: true }).length;

			// For empty blocks when using SugarSS parser
			if (statement.raws.between === undefined) {
				index--;
			}

			report({
				message: messages.rejected,
				messageArgs: [],
				node: statement,
				start: statement.positionBy({ index }),
				end: statement.rangeBy({}).end,
				result,
				ruleName,
			});
		}

		/**
		 * @param {Statement} statement
		 * @returns {boolean}
		 */
		function hasNotableChild(statement) {
			return (statement.nodes ?? []).some((child) => {
				if (isComment(child)) {
					if (ignoreComments) return false;

					if (isConfigurationComment(child, context.configurationComment)) return false;
				}

				return true;
			});
		}

		/**
		 * @param {Statement} statement
		 * @returns {boolean}
		 */
		function hasNonWhitespace(statement) {
			const { after } = statement.raws;

			return typeof after === 'string' && /\S/.test(after);
		}
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
