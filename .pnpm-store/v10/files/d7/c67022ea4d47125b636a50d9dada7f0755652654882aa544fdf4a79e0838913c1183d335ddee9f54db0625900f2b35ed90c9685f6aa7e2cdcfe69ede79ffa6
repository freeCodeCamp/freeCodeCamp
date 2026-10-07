import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import findMediaFeatureNames from '../../utils/findMediaFeatureNames.mjs';
import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import isCustomMediaQuery from '../../utils/isCustomMediaQuery.mjs';
import { mediaFeatureNames } from '../../reference/mediaFeatures.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'media-feature-name-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (mediaFeatureName) => `Unexpected unknown media feature name "${mediaFeatureName}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/media-feature-name-no-unknown',
};

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
					ignoreMediaFeatureNames: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			findMediaFeatureNames(getAtRuleParams(atRule), (mediaFeatureNameToken) => {
				const [, , startIndex, endIndex, { value: featureName }] = mediaFeatureNameToken;

				if (isCustomMediaQuery(featureName)) {
					return;
				}

				if (optionsMatches(secondaryOptions, 'ignoreMediaFeatureNames', featureName)) {
					return;
				}

				if (vendor.prefix(featureName) || mediaFeatureNames.has(featureName.toLowerCase())) {
					return;
				}

				const atRuleIndex = atRuleParamIndex(atRule);

				report({
					message: messages.rejected,
					messageArgs: [featureName],
					node: atRule,
					index: atRuleIndex + startIndex,
					endIndex: atRuleIndex + endIndex + 1,
					ruleName,
					result,
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
