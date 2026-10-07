import valueParser from 'postcss-value-parser';

import { atRuleParamIndex, declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import getDimension from '../../utils/getDimension.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithArrayProps from '../../utils/validateObjectWithArrayProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'unit-allowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (unit) => `Unexpected unit "${unit}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/unit-allowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: [isString],
			},
			{
				optional: true,
				actual: secondaryOptions,
				possible: {
					ignoreFunctions: [isString, isRegExp],
					ignoreProperties: [validateObjectWithArrayProps(isString, isRegExp)],
				},
			},
		);

		if (!validOptions) {
			return;
		}

		const primaryValues = [primary].flat();

		/**
		 * @template {import('postcss').AtRule | import('postcss').Declaration} T
		 * @param {T} node
		 * @param {string} value
		 * @param {(node: T) => number} getIndex
		 * @returns {void}
		 */
		function check(node, value, getIndex) {
			// make sure multiplication operations (*) are divided - not handled
			// by postcss-value-parser
			value = value.replaceAll('*', ',');
			valueParser(value).walk((valueNode) => {
				if (valueNode.type === 'function') {
					const valueLowerCase = valueNode.value.toLowerCase();

					// Ignore wrong units within `url` function
					if (valueLowerCase === 'url') {
						return false;
					}

					if (optionsMatches(secondaryOptions, 'ignoreFunctions', valueLowerCase)) {
						return false;
					}
				}

				const { number, unit } = getDimension(valueNode);

				if (!number || !unit || primaryValues.includes(unit.toLowerCase())) {
					return;
				}

				if (
					'prop' in node &&
					secondaryOptions &&
					optionsMatches(secondaryOptions.ignoreProperties, unit.toLowerCase(), node.prop)
				) {
					return;
				}

				const index = getIndex(node);

				report({
					index: index + valueNode.sourceIndex + number.length,
					endIndex: index + valueNode.sourceEndIndex,
					message: messages.rejected,
					messageArgs: [unit],
					node,
					result,
					ruleName,
				});
			});
		}

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) =>
			check(atRule, atRule.params, atRuleParamIndex),
		);
		root.walkDecls((decl) => check(decl, decl.value, declarationValueIndex));
	};
};

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
