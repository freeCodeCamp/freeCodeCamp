import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import isKeyframeRule from '../../utils/isKeyframeRule.mjs';
import isStandardSyntaxRule from '../../utils/isStandardSyntaxRule.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithArrayProps from '../../utils/validateObjectWithArrayProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'rule-selector-property-disallowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (selector, property) => `Unexpected property "${property}" for selector "${selector}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: [validateObjectWithArrayProps(isString, isRegExp)],
			},
			{
				actual: secondaryOptions,
				possible: {
					ignore: ['keyframe-selectors'],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const ignoreKeyframeSelectors = optionsMatches(
			secondaryOptions,
			'ignore',
			'keyframe-selectors',
		);

		const selectors = Object.keys(primary);

		root.walkRules((ruleNode) => {
			if (!isStandardSyntaxRule(ruleNode)) {
				return;
			}

			if (ignoreKeyframeSelectors && isKeyframeRule(ruleNode)) {
				return;
			}

			const selectorKey = selectors.find((selector) =>
				matchesStringOrRegExp(ruleNode.selector, selector),
			);

			if (!selectorKey) {
				return;
			}

			const disallowedProperties = primary[selectorKey];

			if (!disallowedProperties) {
				return;
			}

			ruleNode.walkDecls((decl) => {
				if (!declarationIsAChildOfRule(decl, ruleNode)) return;

				const { prop } = decl;

				if (matchesStringOrRegExp(prop, disallowedProperties)) {
					report({
						message: messages.rejected,
						messageArgs: [ruleNode.selector, prop],
						node: decl,
						result,
						ruleName,
						word: prop,
					});
				}
			});
		});
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;

/**
 * Check that a given declaration is a child of this rule and not a nested rule
 *
 * @param {import('postcss').Declaration} decl
 * @param {import('postcss').Rule} ruleNode
 */
function declarationIsAChildOfRule(decl, ruleNode) {
	/** @type {import('postcss').Container['parent']} */
	let parent = decl.parent;

	while (parent) {
		if (parent === ruleNode) return true;

		if (parent.type === 'rule') return false;

		parent = parent.parent;
	}

	return false;
}
