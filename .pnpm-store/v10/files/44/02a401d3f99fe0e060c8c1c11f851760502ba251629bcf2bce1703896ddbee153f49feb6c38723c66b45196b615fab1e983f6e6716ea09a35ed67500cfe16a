import {
	atRulePagePseudoClasses,
	levelOneAndTwoPseudoElements,
	pseudoClasses,
	pseudoElements,
	webkitScrollbarPseudoClasses,
	webkitScrollbarPseudoElements,
} from '../../reference/selectors.mjs';
import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleParamIndex } from '../../utils/nodeFieldIndices.mjs';
import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import { isAtRule } from '../../utils/typeGuards.mjs';
import isCustomSelector from '../../utils/isCustomSelector.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import isStandardSyntaxSelector from '../../utils/isStandardSyntaxSelector.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'selector-pseudo-class-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (selector) => `Unexpected unknown pseudo-class selector "${selector}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown',
};

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
					ignorePseudoClasses: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		/**
		 * @param {string} selector
		 * @param {import('postcss').ChildNode} node
		 */
		function check(selector, node) {
			parseSelector(selector, result, node)?.walkPseudos((pseudoNode) => {
				const value = pseudoNode.value;

				if (!isStandardSyntaxSelector(value)) {
					return;
				}

				if (isCustomSelector(value)) {
					return;
				}

				if (value.startsWith('::')) {
					return;
				}

				const name = value.replace(/^:*/, '').toLowerCase();

				if (levelOneAndTwoPseudoElements.has(name)) {
					return;
				}

				if (optionsMatches(secondaryOptions, 'ignorePseudoClasses', pseudoNode.value.slice(1))) {
					return;
				}

				const hasVendorPrefix = vendor.prefix(name);
				let index = null;

				if (isAtRule(node) && node.name === 'page') {
					if (atRulePagePseudoClasses.has(name)) {
						return;
					}

					index = atRuleParamIndex(node) + pseudoNode.sourceIndex;
				} else if (pseudoElements.has(name) && !hasVendorPrefix) {
					index = pseudoNode.sourceIndex;
				} else {
					if (hasVendorPrefix || pseudoClasses.has(name)) {
						return;
					}

					/** @type {import('postcss-selector-parser').Base} */
					let prevPseudoElement = pseudoNode;

					do {
						prevPseudoElement = /** @type {import('postcss-selector-parser').Base} */ (
							prevPseudoElement.prev()
						);

						if (prevPseudoElement && prevPseudoElement.value.slice(0, 2) === '::') {
							break;
						}
					} while (prevPseudoElement);

					if (prevPseudoElement) {
						const prevPseudoElementValue = prevPseudoElement.value.toLowerCase().slice(2);

						if (
							webkitScrollbarPseudoElements.has(prevPseudoElementValue) &&
							webkitScrollbarPseudoClasses.has(name)
						) {
							return;
						}
					}

					index = pseudoNode.sourceIndex;
				}

				const endIndex = index + pseudoNode.value.length;

				report({
					message: messages.rejected,
					messageArgs: [value],
					node,
					index,
					endIndex,
					ruleName,
					result,
				});
			});
		}

		root.walk((node) => {
			let selector = null;

			if (node.type === 'rule') {
				if (!isStandardSyntaxRule(node)) {
					return;
				}

				selector = getRuleSelector(node);
			} else if (isAtRule(node) && node.name === 'page' && node.params) {
				if (!isStandardSyntaxAtRule(node)) {
					return;
				}

				selector = getAtRuleParams(node);
			}

			// Return if selector empty, it is meaning node type is not a rule or a at-rule

			if (!selector) {
				return;
			}

			// Return early before parse if no pseudos for performance

			if (!selector.includes(':')) {
				return;
			}

			check(selector, node);
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
