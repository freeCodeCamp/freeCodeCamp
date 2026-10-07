import valueParser from 'postcss-value-parser';

import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import isCustomProperty from '../../utils/isCustomProperty.mjs';
import isStandardSyntaxFunction from '../../utils/isStandardSyntaxFunction.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateOptions from '../../utils/validateOptions.mjs';
import vendor from '../../utils/vendor.mjs';

const ruleName = 'function-allowed-list';

const messages = ruleMessages(ruleName, {
	rejected: (name) => `Unexpected function "${name}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/function-allowed-list',
};

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: [isString, isRegExp],
			},
			{
				actual: secondaryOptions,
				possible: {
					exceptWithoutPropertyFallback: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const exceptWithoutPropertyFallback = secondaryOptions?.exceptWithoutPropertyFallback ?? [];

		root.walkDecls((decl) => {
			valueParser(decl.value).walk((node) => {
				if (node.type !== 'function') {
					return;
				}

				if (!isStandardSyntaxFunction(node)) {
					return;
				}

				const unprefixedName = vendor.unprefixed(node.value);

				if (matchesStringOrRegExp(unprefixedName, primary)) {
					// Check if function requires fallback
					if (!matchesStringOrRegExp(unprefixedName, exceptWithoutPropertyFallback)) {
						return;
					}

					if (hasPrevPropertyDeclaration(decl)) return;
				}

				const index = declarationValueIndex(decl) + node.sourceIndex;
				const endIndex = index + node.value.length;

				report({
					message: messages.rejected,
					messageArgs: [node.value],
					node: decl,
					index,
					endIndex,
					result,
					ruleName,
				});
			});
		});
	};
};

/**
 * @param {import('postcss').Declaration} decl
 * @returns {boolean}
 */
function hasPrevPropertyDeclaration(decl) {
	const prop = decl.prop.toLowerCase();

	if (isCustomProperty(prop)) return false;

	let prev = decl.prev();

	while (prev) {
		if (prev.type === 'decl' && prev.prop.toLowerCase() === prop) {
			return true;
		}

		prev = prev.prev();
	}

	return false;
}

rule.primaryOptionArray = true;

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
