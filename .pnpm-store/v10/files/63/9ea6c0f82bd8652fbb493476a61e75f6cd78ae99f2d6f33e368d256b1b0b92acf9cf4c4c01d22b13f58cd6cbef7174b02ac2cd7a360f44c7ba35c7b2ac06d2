import { all as knownProperties } from 'known-css-properties';

import { isAtRule, isRule } from '../../utils/typeGuards.mjs';
import { isBoolean, isRegExp, isString } from '../../utils/validateTypes.mjs';
import findNodeUpToRoot from '../../utils/findNodeUpToRoot.mjs';
import isCustomProperty from '../../utils/isCustomProperty.mjs';
import isDescriptorDeclaration from '../../utils/isDescriptorDeclaration.mjs';
import isStandardSyntaxDeclaration from '../../utils/isStandardSyntaxDeclaration.mjs';
import isStandardSyntaxProperty from '../../utils/isStandardSyntaxProperty.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'property-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (property) => `Unexpected unknown property "${property}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/property-no-unknown',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	const allValidProperties = new Set(knownProperties);

	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{ actual: primary },
			{
				actual: secondaryOptions,
				possible: {
					ignoreProperties: [isString, isRegExp],
					checkPrefixed: [isBoolean],
					ignoreSelectors: [isString, isRegExp],
					ignoreAtRules: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const shouldCheckPrefixed = secondaryOptions && secondaryOptions.checkPrefixed;

		const languageProperties = result.stylelint.config?.languageOptions?.syntax?.properties || {};
		const configuredPropertyNames = new Set(Object.keys(languageProperties));

		root.walkDecls(checkStatement);

		/**
		 * @param {import('postcss').Declaration} decl
		 */
		function checkStatement(decl) {
			const prop = decl.prop;

			if (!isStandardSyntaxDeclaration(decl)) {
				return;
			}

			if (isDescriptorDeclaration(decl)) {
				return;
			}

			if (!isStandardSyntaxProperty(prop)) {
				return;
			}

			if (isCustomProperty(prop)) {
				return;
			}

			if (!shouldCheckPrefixed && vendor.prefix(prop)) {
				return;
			}

			if (configuredPropertyNames.has(prop)) {
				return;
			}

			if (optionsMatches(secondaryOptions, 'ignoreProperties', prop)) {
				return;
			}

			const parent = decl.parent;

			if (
				parent &&
				isRule(parent) &&
				optionsMatches(secondaryOptions, 'ignoreSelectors', parent.selector)
			) {
				return;
			}

			/** @type {(node: import('postcss').Node) => boolean} */
			const isIgnoredAtRule = (node) =>
				isAtRule(node) && optionsMatches(secondaryOptions, 'ignoreAtRules', node.name);

			if (findNodeUpToRoot(decl, isIgnoredAtRule)) {
				return;
			}

			if (allValidProperties.has(prop.toLowerCase())) {
				return;
			}

			report({
				message: messages.rejected,
				messageArgs: [prop],
				node: decl,
				result,
				ruleName,
				word: prop,
			});
		}
	};
};

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
