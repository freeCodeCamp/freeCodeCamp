import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import findMediaFeatureNames from '../../utils/findMediaFeatureNames.mjs';
import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import isCustomMediaQuery from '../../utils/isCustomMediaQuery.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'media-feature-name-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (name) => `Unexpected media feature name "${name}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isString, isRegExp],
		});

		if (!validOptions) {
			return;
		}

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			findMediaFeatureNames(getAtRuleParams(atRule), (mediaFeatureNameToken) => {
				const [, , startIndex, endIndex, { value: featureName }] = mediaFeatureNameToken;

				if (isCustomMediaQuery(featureName)) {
					return;
				}

				if (!matchesStringOrRegExp(featureName, primary)) {
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

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
