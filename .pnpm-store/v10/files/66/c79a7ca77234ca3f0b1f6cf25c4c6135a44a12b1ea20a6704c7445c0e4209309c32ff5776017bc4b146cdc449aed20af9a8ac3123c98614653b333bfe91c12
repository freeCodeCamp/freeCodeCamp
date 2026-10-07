import createMapWithSet from '../../utils/createMapWithSet.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import { isString } from '../../utils/validateTypes.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithArrayProps from '../../utils/validateObjectWithArrayProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

// NOTE: We should have named this rule as `at-rule-descriptor-required-list` instead.
// See https://github.com/stylelint/stylelint/pull/8185
const ruleName = 'at-rule-property-required-list';

const messages = ruleMessages(ruleName, {
	expected: (atRule, property) =>
		`Expected property (or descriptor) "${property}" for at-rule "${atRule}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/at-rule-property-required-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, {
			actual: primary,
			possible: [validateObjectWithArrayProps(isString)],
		});

		if (!validOptions) {
			return;
		}

		const propLists = createMapWithSet(primary);

		/** @type {Set<string>} */
		const currentPropList = new Set();

		root.walkAtRules((atRule) => {
			if (!isStandardSyntaxAtRule(atRule)) {
				return;
			}

			const { name, nodes } = atRule;

			if (!nodes) return;

			const atRuleName = name.toLowerCase();
			const propList = propLists.get(atRuleName);

			if (!propList) {
				return;
			}

			currentPropList.clear();

			for (const node of nodes) {
				if (!node || node.type !== 'decl') continue;

				const propName = node.prop.toLowerCase();

				if (!propList.has(propName)) continue;

				currentPropList.add(propName);
			}

			if (currentPropList.size === propList.size) {
				return;
			}

			for (const requiredProp of propList) {
				if (currentPropList.has(requiredProp)) continue;

				const atName = `@${atRule.name}`;

				report({
					message: messages.expected,
					messageArgs: [atName, requiredProp],
					node: atRule,
					word: atName,
					result,
					ruleName,
				});
			}
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
