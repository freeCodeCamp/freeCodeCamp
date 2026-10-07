import { compare, selectorSpecificity } from '@csstools/selector-specificity';

import { isAtRule, isDeclaration } from '../../utils/typeGuards.mjs';
import findAtRuleContext from '../../utils/findAtRuleContext.mjs';
import flattenNestedSelectorsForRule from '../../utils/flattenNestedSelectorsForRule.mjs';
import getStrippedSelectorSource from '../../utils/getStrippedSelectorSource.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import nodeContextLookup from '../../utils/nodeContextLookup.mjs';
import normalizeSelector from '../../utils/normalizeSelector.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import { pseudoElements } from '../../reference/selectors.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'no-descending-specificity';

const messages = ruleMessages(ruleName, {
	expected: (b, a, line) => {
		return `Expected selector "${b}" to come before selector "${a}", at line ${line}`;
	},
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/no-descending-specificity',
};

/** @typedef {{ selector: string, specificity: import('@csstools/selector-specificity').Specificity, line: number }} Entry */

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
			},
			{
				optional: true,
				actual: secondaryOptions,
				possible: {
					ignore: ['selectors-within-list'],
				},
			},
		);

		if (!validOptions) {
			return;
		}

		const ignoreSelectorsWithinList = optionsMatches(
			secondaryOptions,
			'ignore',
			'selectors-within-list',
		);

		const selectorContextLookup = nodeContextLookup();

		root.walkRules((ruleNode) => {
			// Ignore nested property `foo: {};`
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			// Ignores selectors within list of selectors
			if (ignoreSelectorsWithinList && ruleNode.selectors.length > 1) {
				return;
			}

			// Ignore rules that do not directly contain declarations
			if (!hasDeclaration(ruleNode)) {
				return;
			}

			/** @type {Map<string, Entry[]>} */
			const comparisonContext = selectorContextLookup.getContext(
				ruleNode,
				findAtRuleContext(ruleNode),
			);

			// Resolve any nested selectors before checking
			flattenNestedSelectorsForRule(ruleNode, result).forEach(({ selector, resolvedSelectors }) => {
				resolvedSelectors.each((resolvedSelector) => {
					checkSelector(resolvedSelector, selector, ruleNode, comparisonContext);
				});
			});
		});

		/**
		 * @param {import('postcss-selector-parser').Selector} resolvedSelectorNode
		 * @param {import('postcss-selector-parser').Selector} selectorNode
		 * @param {import('postcss').Rule} ruleNode
		 * @param {Map<string, Entry[]>} comparisonContext
		 */
		function checkSelector(resolvedSelectorNode, selectorNode, ruleNode, comparisonContext) {
			const referenceSelector = lastCompoundSelectorWithoutPseudoClasses(resolvedSelectorNode);

			if (!referenceSelector) return;

			const specificity = selectorSpecificity(resolvedSelectorNode);
			const entry = {
				selector: resolvedSelectorNode.toString().trim(),
				specificity,
				line: ruleNode.source?.start?.line ?? 1,
			};
			const priorComparableSelectors = comparisonContext.get(referenceSelector);

			if (!priorComparableSelectors) {
				comparisonContext.set(referenceSelector, [entry]);

				return;
			}

			for (const priorEntry of priorComparableSelectors) {
				if (compare(specificity, priorEntry.specificity) < 0) {
					const {
						index,
						endIndex,
						selector: selectorStr,
					} = getStrippedSelectorSource(selectorNode);

					report({
						ruleName,
						result,
						node: ruleNode,
						message: messages.expected,
						messageArgs: [selectorStr, priorEntry.selector, priorEntry.line],
						index,
						endIndex,
					});

					break;
				}
			}

			priorComparableSelectors.push(entry);
		}
	};
};

/**
 * @param {import('postcss-selector-parser').Selector} selectorNode
 * @returns {string | undefined}
 */
function lastCompoundSelectorWithoutPseudoClasses(selectorNode) {
	if (selectorNode.nodes.length === 0) return undefined;

	selectorNode = normalizeSelector(selectorNode.clone());

	const nodesByCombinator = selectorNode.split((node) => node.type === 'combinator');
	const nodesAfterLastCombinator = nodesByCombinator[nodesByCombinator.length - 1];

	if (!nodesAfterLastCombinator) return undefined;

	const nodesWithoutPseudoClasses = nodesAfterLastCombinator.filter((node) => {
		return (
			node.type !== 'pseudo' ||
			node.value.startsWith('::') ||
			pseudoElements.has(node.value.replaceAll(':', ''))
		);
	});

	if (nodesWithoutPseudoClasses.length === 0) return undefined;

	return nodesWithoutPseudoClasses.join('');
}

/**
 * Specificity only has an effect on declarations.
 * We only want to check rules that contain declarations either directly or in nested at-rules.
 *
 * @param {import('postcss').Container} node
 * @returns {boolean}
 */
function hasDeclaration(node) {
	if (!node.nodes) return false;

	return node.some((child) => {
		return isDeclaration(child) || (isAtRule(child) && hasDeclaration(child));
	});
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
