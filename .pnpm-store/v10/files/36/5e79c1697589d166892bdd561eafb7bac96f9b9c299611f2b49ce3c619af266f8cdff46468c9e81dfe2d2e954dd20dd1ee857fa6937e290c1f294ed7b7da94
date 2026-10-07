import { isAtRule, isRoot } from '../../utils/typeGuards.mjs';
import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'rule-nesting-at-rule-required-list';

const messages = ruleMessages(ruleName, {
	expected: (...atRulePatterns) => {
		const patterns = atRulePatterns.map((pattern) => `"${pattern}"`).join(', ');

		return `Expected rule to be nested in an at-rule matching pattern(s): ${patterns}`;
	},
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/rule-nesting-at-rule-required-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		// Validate that the primary option is a string, regex, or array of strings/regexes
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [isString, isRegExp],
		});

		if (!validOptions) return;

		const requiredAtRules = [primary].flat();

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) return;

			// Skip if rule already has a required at-rule ancestor
			if (hasRequiredAtRuleAncestor(ruleNode, requiredAtRules)) return;

			report({
				message: messages.expected,
				messageArgs: requiredAtRules,
				node: ruleNode,
				result,
				ruleName,
			});
		});
	};
};

/**
 * Check if rule has a required at-rule ancestor
 * Traverses up the PostCSS AST tree from the rule to find
 * if any parent node is an at-rule that matches the required patterns
 * @param {import('postcss').Rule} ruleNode - The CSS rule to check
 * @param {Array<string | RegExp>} requiredAtRules - Patterns to match at-rule names against
 * @returns {boolean} True if rule has required at-rule ancestor, false otherwise
 */
function hasRequiredAtRuleAncestor(ruleNode, requiredAtRules) {
	let current = ruleNode.parent;

	while (current) {
		// Check if current node is an at-rule (e.g., @layer, @scope, @supports)
		if (isAtRule(current)) {
			const atRuleName = current.name;

			// Check if at-rule name matches any of the required patterns
			if (matchesStringOrRegExp(atRuleName, requiredAtRules)) return true;
		}

		if (isRoot(current)) break;

		current = current.parent;
	}

	return false;
}

rule.primaryOptionArray = true;
rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
