import { compare, selectorSpecificity } from '@csstools/selector-specificity';

import { assertNumber, isRegExp, isString } from '../../utils/validateTypes.mjs';
import flattenNestedSelectorsForRule from '../../utils/flattenNestedSelectorsForRule.mjs';
import getStrippedSelectorSource from '../../utils/getStrippedSelectorSource.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-max-specificity';

const messages = ruleMessages(ruleName, {
	expected: (selector, max) => `Expected "${selector}" to have a specificity no more than "${max}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-max-specificity',
};

/** @typedef {import('@csstools/selector-specificity').Specificity} Specificity */

/**
 * Return a zero specificity. We need a new instance each time so that it can mutated.
 *
 * @returns {Specificity}
 */
const zeroSpecificity = () => ({ a: 0, b: 0, c: 0 });

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: [
					// Check that the max specificity is in the form "a,b,c"
					(spec) => isString(spec) && /^\d+,\d+,\d+$/.test(spec),
				],
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

		/** @type {(selector: string) => boolean} */
		const isSelectorIgnored = (selector) =>
			optionsMatches(secondaryOptions, 'ignoreSelectors', selector);

		/** @type {import('@csstools/selector-specificity').CustomSpecificityCallback | undefined} */
		const customSpecificity = secondaryOptions?.ignoreSelectors
			? (node) => {
					switch (node.type) {
						case 'attribute':
						case 'class':
						case 'id':
						case 'tag':
							if (!isSelectorIgnored(node.toString())) {
								return;
							}

							return zeroSpecificity();
						case 'pseudo': {
							if (!isSelectorIgnored(node.value.toLowerCase())) {
								return;
							}

							if (!node.nodes?.length) {
								return zeroSpecificity();
							}

							// We only ignore the current pseudo-class, not the specificity of the child nodes.
							// Calculate the diff between specificity with and without child nodes.
							const entireSpecificity = selectorSpecificity(node);

							const emptySpecificity = selectorSpecificity(node.clone({ nodes: [] }));

							return {
								a: entireSpecificity.a - emptySpecificity.a,
								b: entireSpecificity.b - emptySpecificity.b,
								c: entireSpecificity.c - emptySpecificity.c,
							};
						}
						default:
						// Other node types are not ignorable.
					}
				}
			: undefined;

		const [a, b, c] = primary.split(',').map((s) => Number.parseFloat(s));

		assertNumber(a);
		assertNumber(b);
		assertNumber(c);

		const maxSpecificity = { a, b, c };

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) return;

			flattenNestedSelectorsForRule(ruleNode, result).forEach(({ selector, resolvedSelectors }) => {
				resolvedSelectors.each((resolvedSelector) => {
					const specificity = selectorSpecificity(resolvedSelector, { customSpecificity });

					// Check if the selector specificity exceeds the allowed maximum
					if (compare(specificity, maxSpecificity) > 0) {
						const { index, endIndex, selector: selectorStr } = getStrippedSelectorSource(selector);

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
				});
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
