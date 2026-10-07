import selectorParser from 'postcss-selector-parser';

import flattenNestedSelectorsForRule from '../../utils/flattenNestedSelectorsForRule.mjs';
import getStrippedSelectorSource from '../../utils/getStrippedSelectorSource.mjs';
import isKeyframeRule from '../../utils/isKeyframeRule.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import isStandardSyntaxTypeSelector from '../../utils/isStandardSyntaxTypeSelector.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-no-qualifying-type';

const messages = ruleMessages(ruleName, {
	rejected: (selector) => `Unexpected qualifying type selector "${selector}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-no-qualifying-type',
};

const HAS_ID_CLASS_ATTRIBUTE_PREFIXES = /[#.[]/;

/** @import { Tag, Node, Selector, Container } from 'postcss-selector-parser' */

/**
 * @param {Tag} node
 * @returns {Array<Node>}
 */
function getRightNodes(node) {
	/** @type {Array<Node>} */
	const result = [];

	/** @type {Node | undefined} */
	let rightNode = node;

	while ((rightNode = rightNode.next())) {
		if (selectorParser.isCombinator(rightNode) || selectorParser.isPseudoElement(rightNode)) {
			break;
		}

		result.push(rightNode);
	}

	while ((rightNode = result.at(-1))) {
		if (
			selectorParser.isIdentifier(rightNode) ||
			selectorParser.isClassName(rightNode) ||
			selectorParser.isAttribute(rightNode)
		) {
			break;
		}

		result.splice(-1, 1);
	}

	return result;
}

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: [true],
			},
			{
				actual: secondaryOptions,
				possible: {
					ignore: ['attribute', 'class', 'id'],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const ignoreId = optionsMatches(secondaryOptions, 'ignore', 'id');
		const ignoreClass = optionsMatches(secondaryOptions, 'ignore', 'class');
		const ignoreAttribute = optionsMatches(secondaryOptions, 'ignore', 'attribute');

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			if (isKeyframeRule(ruleNode)) {
				return;
			}

			if (!HAS_ID_CLASS_ATTRIBUTE_PREFIXES.test(ruleNode.selector)) {
				return;
			}

			/**
			 * @param {Container<string | undefined>} resolvedSelectorNode
			 * @param {Selector} selectorNode
			 * @param {boolean} nested
			 */
			function checkSelector(resolvedSelectorNode, selectorNode, nested) {
				resolvedSelectorNode.walkTags((tagNode) => {
					if (!isStandardSyntaxTypeSelector(tagNode)) return;

					const selectorParent = tagNode.parent;

					if (selectorParent && selectorParent.nodes.length === 1) {
						return;
					}

					const rightNodes = getRightNodes(tagNode);

					for (const rightNode of rightNodes) {
						if (
							(rightNode.type === 'id' && !ignoreId) ||
							(rightNode.type === 'class' && !ignoreClass) ||
							(rightNode.type === 'attribute' && !ignoreAttribute)
						) {
							let index = 0;
							let endIndex = 0;
							const selector = [tagNode, ...rightNodes].join('').trim();

							if (nested) {
								({ index, endIndex } = getStrippedSelectorSource(selectorNode));
							} else {
								index = tagNode.sourceIndex ?? 0;
								endIndex = index + selector.length;
							}

							report({
								ruleName,
								result,
								node: ruleNode,
								message: messages.rejected,
								messageArgs: [selector],
								index,
								endIndex,
							});

							break;
						}
					}
				});
			}

			flattenNestedSelectorsForRule(ruleNode, result).forEach(
				({ selector, resolvedSelectors, nested }) => {
					checkSelector(resolvedSelectors, selector, nested);
				},
			);
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
