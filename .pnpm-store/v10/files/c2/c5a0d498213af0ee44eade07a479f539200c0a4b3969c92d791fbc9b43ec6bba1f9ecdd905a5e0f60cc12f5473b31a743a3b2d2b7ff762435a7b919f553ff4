import resolveNestedSelector from 'postcss-resolve-nested-selector';

import { isBoolean, isRegExp, isString } from '../../utils/validateTypes.mjs';
import getRuleSelector from '../../utils/getRuleSelector.mjs';
import isKeyframeSelector from '../../utils/isKeyframeSelector.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import isStandardSyntaxSelector from '../../utils/isStandardSyntaxSelector.mjs';
import parseSelector from '../../utils/parseSelector.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'selector-class-pattern';

const messages = ruleMessages(ruleName, {
	expected: (selector, pattern) => `Expected "${selector}" to match pattern "${pattern}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/selector-class-pattern',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: [isRegExp, isString],
			},
			{
				actual: secondaryOptions,
				possible: {
					resolveNestedSelectors: [isBoolean],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const shouldResolveNestedSelectors = Boolean(
			secondaryOptions && secondaryOptions.resolveNestedSelectors,
		);

		const normalizedPattern = isString(primary) ? new RegExp(primary) : primary;

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			if (ruleNode.selectors.some(isKeyframeSelector)) {
				return;
			}

			// Only bother resolving selectors that have an interpolating &
			if (shouldResolveNestedSelectors && hasInterpolatingAmpersand(ruleNode.selector)) {
				for (const nestedSelector of resolveNestedSelector(getRuleSelector(ruleNode), ruleNode)) {
					if (!isStandardSyntaxSelector(nestedSelector)) {
						continue;
					}

					const selectorRoot = parseSelector(nestedSelector, result, ruleNode);

					if (selectorRoot) checkSelector(selectorRoot, ruleNode);
				}
			} else {
				const selectorRoot = parseSelector(getRuleSelector(ruleNode), result, ruleNode);

				if (selectorRoot) checkSelector(selectorRoot, ruleNode);
			}
		});

		/**
		 * @param {import('postcss-selector-parser').Root} selectorNode
		 * @param {import('postcss').Rule} ruleNode
		 */
		function checkSelector(selectorNode, ruleNode) {
			selectorNode.walkClasses((classNode) => {
				const { value, sourceIndex: index } = classNode;

				if (normalizedPattern.test(value)) {
					return;
				}

				const selector = String(classNode).trim();

				// `selector` may be resolved. So, getting its raw value may be pretty hard.
				// It means `endIndex` may be inaccurate (though non-standard selectors).
				//
				// For example, given ".abc { &_x {} }".
				// Then, an expected raw `selector` is "&_x",
				// but, an actual `selector` is ".abc_x".
				// see #6234 and #7482
				const endIndex = index + selector.length;

				report({
					result,
					ruleName,
					message: messages.expected,
					messageArgs: [selector, primary],
					node: ruleNode,
					index,
					endIndex,
				});
			});
		}
	};
};

/**
 * An "interpolating ampersand" means an "&" used to interpolate
 * within another simple selector, rather than an "&" that
 * stands on its own as a simple selector.
 *
 * @param {string} selector
 * @returns {boolean}
 */
function hasInterpolatingAmpersand(selector) {
	for (const [i, char] of Array.from(selector).entries()) {
		if (char !== '&') {
			continue;
		}

		const prevChar = selector.charAt(i - 1);

		if (prevChar && !isCombinator(prevChar)) {
			return true;
		}

		const nextChar = selector.charAt(i + 1);

		if (nextChar && !isCombinator(nextChar)) {
			return true;
		}
	}

	return false;
}

/**
 * @param {string} x
 * @returns {boolean}
 */
function isCombinator(x) {
	return /[\s+>~]/.test(x);
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
