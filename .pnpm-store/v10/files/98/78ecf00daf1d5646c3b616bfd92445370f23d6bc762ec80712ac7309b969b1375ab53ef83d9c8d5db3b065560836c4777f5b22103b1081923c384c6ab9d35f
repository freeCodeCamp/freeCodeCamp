import { atRuleRegexes } from '../../utils/regexes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import getStrippedSelectorSource from '../../utils/getStrippedSelectorSource.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'keyframe-block-no-duplicate-selectors';

const messages = ruleMessages(ruleName, {
	rejected: (selector) => `Unexpected duplicate "${selector}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkAtRules(atRuleRegexes.keyframesName, (atRuleKeyframes) => {
			const selectors = new Set();

			atRuleKeyframes.walkRules((keyframeRule) => {
				if (!isStandardSyntaxRule(keyframeRule)) {
					return;
				}

				parseSelector(getRuleSelector(keyframeRule), result, keyframeRule)?.each((selector) => {
					const { selector: selectorStr, index, endIndex } = getStrippedSelectorSource(selector);

					const normalizedSelector = selectorStr.toLowerCase();

					const isDuplicate = selectors.has(normalizedSelector);

					if (isDuplicate) {
						report({
							message: messages.rejected,
							messageArgs: [selectorStr],
							node: keyframeRule,
							result,
							ruleName,
							index,
							endIndex,
						});

						return;
					}

					selectors.add(normalizedSelector);
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
