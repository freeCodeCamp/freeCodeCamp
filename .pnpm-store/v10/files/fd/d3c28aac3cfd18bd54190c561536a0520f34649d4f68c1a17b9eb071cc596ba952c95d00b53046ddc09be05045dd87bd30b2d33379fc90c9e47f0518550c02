import {
	MediaFeatureName,
	MediaFeatureRangeNameValue,
	isMediaFeature,
	isMediaFeaturePlain,
	isMediaFeatureRange,
	isMediaFeatureRangeNameValue,
	isMediaFeatureRangeValueName,
	isMediaQueryInvalid,
} from '@csstools/media-query-list-parser';
import { TokenNode, sourceIndices } from '@csstools/css-parser-algorithms';
import { TokenType } from '@csstools/css-tokenizer';

import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import parseMediaQuery from '../../utils/parseMediaQuery.mjs';
import { rangeTypeMediaFeatureNames } from '../../reference/mediaFeatures.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'media-feature-range-notation';

const messages = ruleMessages(ruleName, {
	expected: (primary) => `Expected "${primary}" media feature range notation`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/media-feature-range-notation',
	fixable: true,
};

/** @import {TokenDelim} from '@csstools/css-tokenizer' */

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: ['prefix', 'context'],
			},
			{
				actual: secondaryOptions,
				possible: {
					except: ['exact-value'],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const exceptExactValue = optionsMatches(secondaryOptions, 'except', 'exact-value');

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			const mediaQueryList = parseMediaQuery(atRule);

			mediaQueryList.forEach((mediaQuery) => {
				if (isMediaQueryInvalid(mediaQuery)) return;

				mediaQuery.walk(({ node, parent }) => {
					// Only look at plain and range notation media features
					if (!isMediaFeatureRange(node) && !isMediaFeaturePlain(node)) return;

					const featureName = node.getName();
					const unprefixedMediaFeature = featureName.replace(/^(?:min|max)-/i, '');

					if (!rangeTypeMediaFeatureNames.has(unprefixedMediaFeature)) return;

					let expected = primary;

					if (exceptExactValue) {
						const isMediaFeatureRangeWithExactOperator =
							(isMediaFeatureRangeNameValue(node) || isMediaFeatureRangeValueName(node)) &&
							node.operator.length === 1 &&
							node.operator[0][1] === '=';

						const isMediaFeaturePlainUnprefixed =
							isMediaFeaturePlain(node) && featureName.length === unprefixedMediaFeature.length;

						if (isMediaFeatureRangeWithExactOperator || isMediaFeaturePlainUnprefixed) {
							expected = primary === 'prefix' ? 'context' : 'prefix';
						}
					}

					// Expected plain notation and received plain notation
					if (expected === 'prefix' && isMediaFeaturePlain(node)) return;

					// Expected range notation and received range notation
					if (expected === 'context' && isMediaFeatureRange(node)) return;

					/**
					 * @param {object} entry
					 * @param {import('@csstools/media-query-list-parser').MediaFeaturePlain} entry.node
					 * @param {import('@csstools/media-query-list-parser').MediaFeature} entry.parent
					 */
					const contextFixer = (entry) => () => {
						/** @type {[TokenDelim]|[TokenDelim, TokenDelim]} */
						let operator;

						if (/^min-/i.test(featureName)) {
							operator = [
								[TokenType.Delim, '>', -1, -1, { value: '>' }],
								[TokenType.Delim, '=', -1, -1, { value: '=' }],
							];
						} else if (/^max-/i.test(featureName)) {
							operator = [
								[TokenType.Delim, '<', -1, -1, { value: '<' }],
								[TokenType.Delim, '=', -1, -1, { value: '=' }],
							];
						} else {
							operator = [[TokenType.Delim, '=', -1, -1, { value: '=' }]];
						}

						entry.parent.feature = new MediaFeatureRangeNameValue(
							new MediaFeatureName(
								new TokenNode([
									TokenType.Ident,
									unprefixedMediaFeature,
									-1,
									-1,
									{ value: unprefixedMediaFeature },
								]),
								entry.node.name.before,
								entry.node.name.after.length > 0
									? entry.node.name.after
									: [[TokenType.Whitespace, ' ', -1, -1, undefined]],
							),
							operator,
							entry.node.value,
						);

						const expectedMediaQueryList = mediaQueryList.map((mq) => mq.toString()).join(',');

						if (expectedMediaQueryList === atRule.params) return;

						atRule.params = expectedMediaQueryList;
					};

					const hasFix =
						expected === 'context' && isMediaFeaturePlain(node) && isMediaFeature(parent);
					const fix = hasFix ? contextFixer({ node, parent }) : undefined;
					const [startIndex, endIndex] = sourceIndices(node);
					const atRuleIndex = atRuleParamIndex(atRule);

					report({
						message: messages.expected,
						messageArgs: [expected],
						node: atRule,
						index: atRuleIndex + startIndex - 1,
						endIndex: atRuleIndex + endIndex + 1 + 1,
						result,
						ruleName,
						fix: {
							apply: fix,
							node: atRule,
						},
					});
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
