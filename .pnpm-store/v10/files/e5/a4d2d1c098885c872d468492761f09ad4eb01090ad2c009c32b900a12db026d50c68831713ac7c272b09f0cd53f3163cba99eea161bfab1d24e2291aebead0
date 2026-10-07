import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import { deprecatedMediaTypesNames } from '../../reference/mediaTypes.mjs';
import { isMediaQueryWithType } from '@csstools/media-query-list-parser';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import { isTokenIdent } from '@csstools/css-tokenizer';
import optionsMatches from '../../utils/optionsMatches.mjs';
import parseMediaQuery from '../../utils/parseMediaQuery.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import { sourceIndices } from '@csstools/css-parser-algorithms';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'media-type-no-deprecated';

const messages = ruleMessages(ruleName, {
	rejected: (mediaType) => `Unexpected deprecated media type "${mediaType}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/media-type-no-deprecated',
};

const DEPRECATED_MEDIA_TYPES_PATTERN = new RegExp(
	`\\b(${[...deprecatedMediaTypesNames].join('|')})\\b`,
	'i',
);

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
					ignoreMediaTypes: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) return;

		root.walkAtRules(atRuleRegexes.mediaName, (atRule) => {
			if (!isStandardSyntaxAtRule(atRule)) return;

			if (!DEPRECATED_MEDIA_TYPES_PATTERN.test(atRule.params)) return;

			const mediaQueryList = parseMediaQuery(atRule);

			mediaQueryList.forEach((mediaQuery) => {
				if (!isMediaQueryWithType(mediaQuery)) return;

				const mediaType = mediaQuery.getMediaType();

				if (!deprecatedMediaTypesNames.has(mediaType.toLowerCase())) return;

				if (optionsMatches(secondaryOptions, 'ignoreMediaTypes', mediaType)) return;

				const atRuleIndex = atRuleParamIndex(atRule);
				const [index, endIndex] = sourceIndices({
					tokens: () => mediaQuery.mediaType.filter(isTokenIdent),
				});

				report({
					message: messages.rejected,
					messageArgs: [mediaType],
					node: atRule,
					index: atRuleIndex + index,
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
