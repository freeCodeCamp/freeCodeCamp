import selectorParser from 'postcss-selector-parser';
const { isCombinator, isPseudo, isRoot, isSelector } = selectorParser;

import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import flattenNestedSelectorsForRule from '../../utils/flattenNestedSelectorsForRule.mjs';
import getStrippedSelectorSource from '../../utils/getStrippedSelectorSource.mjs';
import isContextFunctionalPseudoClass from '../../utils/isContextFunctionalPseudoClass.mjs';
import isNonNegativeInteger from '../../utils/isNonNegativeInteger.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import pluralize from '../../utils/pluralize.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-max-compound-selectors';

const messages = ruleMessages(ruleName, {
	expected: (selector, /** @type {number} */ max) =>
		`Expected "${selector}" to have no more than ${max} compound ${pluralize('selector', max)}`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-max-compound-selectors',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: isNonNegativeInteger,
			},
			{
				actual: secondaryOptions,
				possible: {
					ignoreSelectors: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		/**
		 * @param {import('postcss-selector-parser').Node} selectorNode
		 * @returns {boolean}
		 */
		function isSelectorIgnored(selectorNode) {
			const selector = isPseudo(selectorNode) ? selectorNode.value : selectorNode.toString();

			return optionsMatches(secondaryOptions, 'ignoreSelectors', selector);
		}

		/**
		 * @param {import('postcss-selector-parser').Selector} resolvedSelectorNode
		 * @param {import('postcss-selector-parser').Selector} selectorNode
		 * @param {import('postcss').Rule} ruleNode
		 */
		function checkSelector(resolvedSelectorNode, selectorNode, ruleNode) {
			/** @type {import('postcss-selector-parser').Node[]} */
			const filteredChildNodes = [];

			resolvedSelectorNode.each((childNode) => {
				if (!isSelectorIgnored(childNode)) {
					filteredChildNodes.push(childNode);
				}
			});

			if (isRoot(selectorNode) || isPseudo(selectorNode)) return;

			// Normalize selector nodes and count combinators
			const combinatorCount = filteredChildNodes.reduce((count, node, i, nodes) => {
				// Not count a node except a combinator
				if (!isCombinator(node)) return count;

				// Not count a combinator at the edge
				if (i === 0 || i === nodes.length - 1) return count;

				// Not count a consecutive combinator
				if (isCombinator(nodes[i + 1])) return count;

				return count + 1;
			}, 0);

			const compoundCount = combinatorCount + 1;

			if (compoundCount > primary) {
				const { index, endIndex, selector: selectorStr } = getStrippedSelectorSource(selectorNode);

				report({
					ruleName,
					result,
					node: ruleNode,
					message: messages.expected,
					messageArgs: [selectorStr, primary],
					index,
					endIndex,
				});
			}
		}

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) return;

			flattenNestedSelectorsForRule(ruleNode, result).forEach(({ selector, resolvedSelectors }) => {
				resolvedSelectors.walk((childSelector) => {
					if (!isSelector(childSelector)) return;

					if (
						isRoot(childSelector.parent) ||
						isContextFunctionalPseudoClass(childSelector.parent)
					) {
						checkSelector(childSelector, selector, ruleNode);
					}
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
