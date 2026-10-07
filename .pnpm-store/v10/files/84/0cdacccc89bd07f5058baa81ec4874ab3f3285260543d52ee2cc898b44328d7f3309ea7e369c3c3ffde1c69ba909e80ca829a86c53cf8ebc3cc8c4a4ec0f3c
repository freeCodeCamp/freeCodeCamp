import {
	isMediaFeature,
	isMediaFeatureValue,
	isMediaQueryInvalid,
} from '@csstools/media-query-list-parser';
import { sourceIndices } from '@csstools/css-parser-algorithms';

import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import parseMediaQuery from '../../utils/parseMediaQuery.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithArrayProps from '../../utils/validateObjectWithArrayProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'media-feature-name-value-allowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (name, value) => `Unexpected value "${value}" for name "${name}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [validateObjectWithArrayProps(isString, isRegExp)],
		});

		if (!validOptions) {
			return;
		}

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			parseMediaQuery(atRule).forEach((mediaQuery) => {
				if (isMediaQueryInvalid(mediaQuery)) return;

				const initialState = {
					mediaFeatureName: '',
					unprefixedMediaFeatureName: '',
				};

				mediaQuery.walk(({ node, state }) => {
					if (!state) return;

					if (isMediaFeature(node)) {
						state.mediaFeatureName = node.getName();
						state.unprefixedMediaFeatureName = vendor.unprefixed(node.getName());

						return;
					}

					if (!isMediaFeatureValue(node)) return;

					const { mediaFeatureName, unprefixedMediaFeatureName } = state;

					if (!mediaFeatureName || !unprefixedMediaFeatureName) return;

					const componentValues = [node.value].flat();
					const value = componentValues.map((x) => x.toString()).join('');

					const allowedValuesKey = Object.keys(primary).find((featureName) =>
						matchesStringOrRegExp(unprefixedMediaFeatureName, featureName),
					);

					if (allowedValuesKey == null) {
						return;
					}

					if (optionsMatches(primary, allowedValuesKey, value)) {
						return;
					}

					const atRuleIndex = atRuleParamIndex(atRule);
					const [startIndex, endIndex] = sourceIndices(componentValues);

					report({
						index: atRuleIndex + startIndex,
						endIndex: atRuleIndex + endIndex + 1,
						message: messages.rejected,
						messageArgs: [mediaFeatureName, value],
						node: atRule,
						ruleName,
						result,
					});
				}, initialState);
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
