import parser from 'postcss-selector-parser';
import svgTags from 'svg-tags';

import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import { htmlTypeSelectors } from '../../reference/selectors.mjs';
import isCustomElement from '../../utils/isCustomElement.mjs';
import isKeyframeSelector from '../../utils/isKeyframeSelector.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import isStandardSyntaxTypeSelector from '../../utils/isStandardSyntaxTypeSelector.mjs';
import mathMLTags from '../../utils/mathMLTags.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-type-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (selector) => `Unexpected unknown type selector "${selector}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-type-no-unknown',
};

const STARTS_A_TAG_NAME_REGEX = /(?:[^.#[:a-z-]|^)[a-z]/i;
const IGNORED_PSEUDO_ELEMENTS = new Set([
	'::highlight',
	'::view-transition-group',
	'::view-transition-image-pair',
	'::view-transition-new',
	'::view-transition-old',
]);

const IGNORED_PSEUDO_CLASSES = new Set([
	':active-view-transition-type',
	':dir',
	':-moz-locale-dir',
	':state',
	':lang',
]);

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
					ignore: ['custom-elements', 'default-namespace'],
					ignoreNamespaces: [isString, isRegExp],
					ignoreTypes: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		root.walkRules((ruleNode) => {
			if (!STARTS_A_TAG_NAME_REGEX.test(ruleNode.selector)) return;

			if (!isStandardSyntaxRule(ruleNode)) return;

			if (ruleNode.selectors.some(isKeyframeSelector)) {
				return;
			}

			parseSelector(getRuleSelector(ruleNode), result, ruleNode)?.walkTags((tagNode) => {
				if (!isStandardSyntaxTypeSelector(tagNode)) return;

				if (
					optionsMatches(secondaryOptions, 'ignore', 'custom-elements') &&
					isCustomElement(tagNode.value)
				) {
					return;
				}

				if (
					optionsMatches(secondaryOptions, 'ignore', 'default-namespace') &&
					!(typeof tagNode.namespace === 'string')
				) {
					return;
				}

				if (optionsMatches(secondaryOptions, 'ignoreNamespaces', tagNode.namespace)) return;

				if (optionsMatches(secondaryOptions, 'ignoreTypes', tagNode.value)) return;

				if (isArgumentOfIgnoredPseudoElement(tagNode) || isArgumentOfIgnoredPseudoClass(tagNode)) {
					return;
				}

				const tagName = tagNode.value;
				const tagNameLowerCase = tagName.toLowerCase();
				// SVG tags are case-sensitive
				const svgTypeSelectors = [...svgTags, 'hatch', 'hatchpath', 'hatchPath'];

				if (
					htmlTypeSelectors.has(tagNameLowerCase) ||
					svgTypeSelectors.includes(tagName) ||
					mathMLTags.includes(tagNameLowerCase)
				) {
					return;
				}

				const index = tagNode.sourceIndex;
				const endIndex = index + tagName.length;

				report({
					message: messages.rejected,
					messageArgs: [tagName],
					node: ruleNode,
					index,
					endIndex,
					ruleName,
					result,
				});
			});
		});
	};
};

/** @param {import('postcss-selector-parser').Tag} tag */
function isArgumentOfIgnoredPseudoElement(tag) {
	const node = tag.parent?.parent;

	return parser.isPseudoElement(node) && IGNORED_PSEUDO_ELEMENTS.has(node.value);
}

/** @param {import('postcss-selector-parser').Tag} tag */
function isArgumentOfIgnoredPseudoClass(tag) {
	const node = tag.parent?.parent;

	return parser.isPseudoClass(node) && IGNORED_PSEUDO_CLASSES.has(node.value);
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
