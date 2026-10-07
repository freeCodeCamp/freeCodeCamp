import { TokenType, tokenize } from '@csstools/css-tokenizer';
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
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import isStandardSyntaxDeclaration from '../../utils/isStandardSyntaxDeclaration.mjs';
import isStandardSyntaxValue from '../../utils/isStandardSyntaxValue.mjs';
import isUnicodeRangeDescriptor from '../../utils/isUnicodeRangeDescriptor.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import { units as refUnits } from '../../reference/units.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const units = new Set(refUnits); // a copy that is safe to mutate

// `x` as a resolution unit is very often a typo for `px`.
// By removing it from the set of known units, we can catch those typos.
// Intentional `x` units are supported by manually checking these in specific functions or properties.
units.delete('x');

const ruleName = 'unit-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (unit) => `Unexpected unknown unit "${unit}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/unit-no-unknown',
};

const RESOLUTION_MEDIA_FEATURE_NAME = /^(?:min-|max-)?resolution$/i;

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{ actual: primary },
			{
				actual: secondaryOptions,
				possible: {
					ignoreUnits: [isString, isRegExp],
					ignoreFunctions: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		/**
		 * @param {string} value
		 */
		const tokenizeIfValueMightContainUnknownUnits = (value) => {
			if (!hasDimension(value)) return;

			const tokens = tokenize({ css: value });
			const hasUnknownUnits = tokens.some((token) => {
				return token[0] === TokenType.Dimension && !units.has(token[4].unit.toLowerCase());
			});

			if (!hasUnknownUnits) return;

			return tokens;
		};

		/**
		 * @template {import('postcss').AtRule | import('postcss').Declaration} T
		 * @param {T} node
		 * @param {(node: T) => number} getIndex
		 * @param {import('@csstools/css-parser-algorithms').FunctionNode | import('@csstools/css-parser-algorithms').TokenNode} componentValue
		 * @param {{ ignored: boolean, allowX: boolean }} state
		 */
		const check = (node, getIndex, componentValue, state) => {
			if (isFunctionNode(componentValue)) {
				const name = componentValue.getName();
				const nameLowerCase = name.toLowerCase();

				if (nameLowerCase === 'url' || optionsMatches(secondaryOptions, 'ignoreFunctions', name)) {
					state.ignored = true;

					return;
				}

				if (vendor.unprefixed(nameLowerCase) === 'image-set') {
					state.allowX = true;

					return;
				}

				return;
			}

			const [tokenType, , , endIndex, tokenValue] = componentValue.value;

			if (tokenType !== TokenType.Dimension) return;

			if (optionsMatches(secondaryOptions, 'ignoreUnits', tokenValue.unit)) return;

			const unit = tokenValue.unit.toLowerCase();

			if (unit === 'x' && state.allowX) return;

			if (units.has(unit) && unit !== 'x') return;

			const startIndex = getIndex(node) + (endIndex + 1) - unit.length;

			report({
				message: messages.rejected,
				messageArgs: [tokenValue.unit],
				node,
				index: startIndex,
				endIndex: startIndex + unit.length,
				result,
				ruleName,
			});
		};

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			if (!isStandardSyntaxAtRule(atRule)) return;

			const params = getAtRuleParams(atRule);

			const tokens = tokenizeIfValueMightContainUnknownUnits(params);

			if (!tokens) return;

			parseFromTokens(tokens).forEach((mediaQuery) => {
				const initialState = {
					ignored: false,
					allowX: false,
				};

				mediaQuery.walk(({ node, state }) => {
					if (!state) return;

					if (state.ignored) return;

					if (isMediaFeature(node)) {
						const name = node.getName();

						if (RESOLUTION_MEDIA_FEATURE_NAME.test(name)) {
							state.allowX = true;
						}
					} else if (isFunctionNode(node) || isTokenNode(node)) {
						check(atRule, atRuleParamIndex, node, state);
					}
				}, initialState);
			});
		});

		root.walkDecls((decl) => {
			if (!isStandardSyntaxDeclaration(decl)) return;

			if (isUnicodeRangeDescriptor(decl)) return;

			const value = getDeclarationValue(decl);

			if (!isStandardSyntaxValue(value)) return;

			const tokens = tokenizeIfValueMightContainUnknownUnits(value);

			if (!tokens) return;

			const isImageResolutionProp = decl.prop.toLowerCase() === 'image-resolution';

			const initialState = {
				ignored: false,
				allowX: isImageResolutionProp,
			};

			walk(
				parseListOfComponentValues(tokens),
				({ node, state }) => {
					if (!state) return;

					if (state.ignored) return;

					if (isFunctionNode(node) || isTokenNode(node)) {
						check(decl, declarationValueIndex, node, state);
					}
				},
				initialState,
			);
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
