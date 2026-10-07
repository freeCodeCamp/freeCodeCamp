import { NumberType, TokenType, tokenize } from '@csstools/css-tokenizer';
import {
	isFunctionNode,
	isTokenNode,
	parseListOfComponentValues,
	walk,
} from '@csstools/css-parser-algorithms';
import { isMediaFeature, parseFromTokens } from '@csstools/media-query-list-parser';

import { atRuleParamIndex, declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import hasDimension from '../../utils/hasDimension.mjs';
import isUnicodeRangeDescriptor from '../../utils/isUnicodeRangeDescriptor.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithArrayProps from '../../utils/validateObjectWithArrayProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'unit-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (unit) => `Unexpected unit "${unit}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/unit-disallowed-list',
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
					ignoreMediaFeatureNames: [validateObjectWithArrayProps(isString, isRegExp)],
				},
			},
		);

		if (!validOptions) {
			return;
		}

		const primaryValues = [primary].flat();

		/**
		 * Ignore wrong units within `url` function
		 * Ignore units within function that match `ignoreFunctions` option
		 *
		 * @param {import('@csstools/css-parser-algorithms').ComponentValue} componentValue
		 * @returns {boolean}
		 */
		function componentValueIsIgnored(componentValue) {
			if (!isFunctionNode(componentValue)) {
				return false;
			}

			const name = componentValue.getName().toLowerCase();

			return name === 'url' || optionsMatches(secondaryOptions, 'ignoreFunctions', name);
		}

		/**
		 * @template {import('postcss').AtRule | import('postcss').Declaration} T
		 * @param {T} node
		 * @param {(node: T) => number} getIndex
		 * @param {import('@csstools/css-parser-algorithms').ComponentValue} componentValue
		 * @param {string} input
		 * @param {Record<string, unknown> | undefined} options
		 * @returns {void}
		 */
		function check(node, getIndex, componentValue, input, options) {
			if (!isTokenNode(componentValue)) return;

			if (componentValue.value[0] !== TokenType.Dimension) return;

			const [, , , endIndex, { unit }] = componentValue.value;

			const lowerCaseUnit = unit.toLowerCase();

			if (!primaryValues.includes(lowerCaseUnit)) {
				return;
			}

			// The unit has an ignore option for the specific input
			if (options && optionsMatches(options, lowerCaseUnit, input)) return;

			const startIndex = getIndex(node) + (endIndex + 1) - unit.length;

			report({
				index: startIndex,
				endIndex: startIndex + unit.length,
				message: messages.rejected,
				messageArgs: [unit],
				node,
				result,
				ruleName,
			});
		}

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			const params = getAtRuleParams(atRule);

			if (!hasDimension(params)) return;

			parseFromTokens(tokenizeWithoutPercentages(params)).forEach((mediaQuery) => {
				/** @type {{ mediaFeatureName: string | undefined }} */
				const initialState = {
					mediaFeatureName: undefined,
				};

				mediaQuery.walk(({ node, state }) => {
					if (!state) return;

					if (isMediaFeature(node)) {
						state.mediaFeatureName = node.getName().toLowerCase();
					}

					if (!state.mediaFeatureName) return;

					if (!isTokenNode(node)) return;

					check(
						atRule,
						atRuleParamIndex,
						node,
						state.mediaFeatureName,
						secondaryOptions?.ignoreMediaFeatureNames,
					);
				}, initialState);
			});
		});

		root.walkDecls((decl) => {
			if (isUnicodeRangeDescriptor(decl)) return;

			const value = getDeclarationValue(decl);

			if (!hasDimension(value)) return;

			const initialState = {
				ignored: false,
			};

			walk(
				parseListOfComponentValues(tokenizeWithoutPercentages(value)),
				({ node, state }) => {
					if (!state) return;

					if (state.ignored) return;

					if (isTokenNode(node)) {
						check(decl, declarationValueIndex, node, decl.prop, secondaryOptions?.ignoreProperties);

						return;
					}

					if (componentValueIsIgnored(node)) {
						state.ignored = true;
					}
				},
				initialState,
			);
		});
	};
};

/**
 * In the CSS syntax percentages are a different token type than dimensions.
 * For CSS authors however this distinction doesn't make sense, so we convert
 * percentage tokens to dimension tokens with a unit of "%".
 *
 * Percentage tokens also aren't valid in media queries.
 * Converting percentage tokens to dimension tokens simplifies any code checking for units.
 *
 * @param {string} css
 * @returns {Array<import('@csstools/css-tokenizer').CSSToken>}
 */
function tokenizeWithoutPercentages(css) {
	return tokenize({ css }).map((x) => {
		if (x[0] !== TokenType.Percentage) return x;

		return [
			TokenType.Dimension,
			x[1],
			x[2],
			x[3],
			{ value: x[4].value, unit: '%', type: NumberType.Number },
		];
	});
}

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
