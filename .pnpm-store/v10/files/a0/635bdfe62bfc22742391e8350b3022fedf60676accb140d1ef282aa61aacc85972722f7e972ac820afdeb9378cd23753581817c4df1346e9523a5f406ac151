import {
	isMediaFeaturePlain,
	isMediaFeatureRange,
	isMediaQueryInvalid,
} from '@csstools/media-query-list-parser';
import { TokenType } from '@csstools/css-tokenizer';
import { isTokenNode } from '@csstools/css-parser-algorithms';

import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import { isString } from '../../utils/validateTypes.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import parseMediaQuery from '../../utils/parseMediaQuery.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithArrayProps from '../../utils/validateObjectWithArrayProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'media-feature-name-unit-allowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (unit, name) => `Unexpected unit "${unit}" for name "${name}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [validateObjectWithArrayProps(isString)],
		});

		if (!validOptions) {
			return;
		}

		const primaryPairs = Object.entries(primary);
		const primaryUnitList = (/** @type {string} */ featureName) => {
			for (const [name, unit] of primaryPairs) {
				if (matchesStringOrRegExp(featureName, name)) return [unit].flat();
			}

			return undefined;
		};

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			const mediaQueryList = parseMediaQuery(atRule);

			mediaQueryList.forEach((mediaQuery) => {
				if (isMediaQueryInvalid(mediaQuery)) return;

				const initialState = {
					mediaFeatureName: '',
					/** @type {string[] | undefined} */
					unitList: undefined,
				};

				mediaQuery.walk(({ node, state }) => {
					if (!state) return;

					if (isMediaFeaturePlain(node) || isMediaFeatureRange(node)) {
						state.mediaFeatureName = node.getName();
						state.unitList = primaryUnitList(state.mediaFeatureName);

						return;
					}

					if (!isTokenNode(node)) return;

					const { mediaFeatureName, unitList } = state;

					if (!mediaFeatureName || !unitList) return;

					const [tokenType, , startIndex, endIndex, parsedValue] = node.value;

					if (tokenType !== TokenType.Dimension) {
						return;
					}

					if (unitList.includes(parsedValue.unit.toLowerCase())) {
						return;
					}

					const atRuleIndex = atRuleParamIndex(atRule);

					report({
						message: messages.rejected,
						messageArgs: [parsedValue.unit, mediaFeatureName],
						node: atRule,
						index: atRuleIndex + startIndex,
						endIndex: atRuleIndex + endIndex + 1,
						result,
						ruleName,
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
