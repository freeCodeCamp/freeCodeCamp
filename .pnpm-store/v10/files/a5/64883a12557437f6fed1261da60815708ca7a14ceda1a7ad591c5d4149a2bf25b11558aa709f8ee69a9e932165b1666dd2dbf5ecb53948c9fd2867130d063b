import { parse } from 'css-tree';

import {
	aNPlusBNotationPseudoClasses,
	aNPlusBOfSNotationPseudoClasses,
} from '../../reference/selectors.mjs';
import { assert } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import hasANPlusBNotationPseudoClasses from '../../utils/hasANPlusBNotationPseudoClasses.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-anb-no-unmatchable';

const messages = ruleMessages(ruleName, {
	rejected: (pseudoClass) => `Unexpected unmatchable An+B selector "${pseudoClass}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable',
};

function isUnmatchableNth(/** @type {import('css-tree').AnPlusB} */ nth) {
	const { a, b } = nth;

	if (a !== null && a !== '0' && a !== '-0') {
		return false;
	}

	if (b !== null && b !== '0' && b !== '-0') {
		return false;
	}

	return true;
}

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) {
			return;
		}

		root.walkRules((ruleNode) => {
			if (!hasANPlusBNotationPseudoClasses(ruleNode.selector)) return;

			if (!isStandardSyntaxRule(ruleNode)) return;

			const ruleSelector = getRuleSelector(ruleNode);
			let cssTreeSelectors;

			try {
				cssTreeSelectors = parse(ruleSelector, {
					context: 'selectorList',
					positions: true,
				});
			} catch {
				return;
			}

			if (cssTreeSelectors.type !== 'SelectorList') return;

			cssTreeSelectors.children.forEach((cssTreeSelector) => {
				checkSelector(cssTreeSelector);
			});

			function checkSelector(/** @type {import('css-tree').CssNode} */ selector) {
				if (selector.type !== 'Selector') {
					return;
				}

				selector.children.forEach((selectorChild) => {
					if (
						selectorChild.type !== 'PseudoClassSelector' ||
						(!aNPlusBNotationPseudoClasses.has(selectorChild.name) &&
							!aNPlusBOfSNotationPseudoClasses.has(selectorChild.name))
					) {
						return;
					}

					const pseudoClassSelector = selectorChild;

					if (pseudoClassSelector.children === null) {
						return;
					}

					pseudoClassSelector.children.forEach((child) => {
						if (child.type !== 'Nth' || child.nth.type !== 'AnPlusB') {
							return;
						}

						// `loc` is expected to be present when calling `parse()` with `{ positions: true }`
						assert(pseudoClassSelector.loc);

						const index = pseudoClassSelector.loc.start.offset;
						const endIndex = pseudoClassSelector.loc.end.offset;

						if (isUnmatchableNth(child.nth)) {
							report({
								message: messages.rejected,
								messageArgs: [ruleSelector.slice(index, endIndex)],
								node: ruleNode,
								index,
								endIndex,
								result,
								ruleName,
							});
						}
					});
				});
			}
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
