import { find, fork, parse, string } from 'css-tree';
import { createRequire } from 'node:module';

import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import { atRuleRegexes } from '../../utils/regexes.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import { isDeclaration } from '../../utils/typeGuards.mjs';

import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import isCustomProperty from '../../utils/isCustomProperty.mjs';
import isDescriptorDeclaration from '../../utils/isDescriptorDeclaration.mjs';
import isStandardSyntaxDeclaration from '../../utils/isStandardSyntaxDeclaration.mjs';
import isStandardSyntaxProperty from '../../utils/isStandardSyntaxProperty.mjs';
import isStandardSyntaxValue from '../../utils/isStandardSyntaxValue.mjs';
import matchesStringOrRegExp from '../../utils/matchesStringOrRegExp.mjs';
import mergeSyntaxDefinitions from '../../utils/mergeSyntaxDefinitions.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import validateObjectWithArrayProps from '../../utils/validateObjectWithArrayProps.mjs';
import validateObjectWithProps from '../../utils/validateObjectWithProps.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

/** @todo leverage import attributes once support for Node.js v18.19 is dropped */
const require = createRequire(import.meta.url);
const syntaxPatches = require('@csstools/css-syntax-patches-for-csstree/dist/index.json').next;

const ruleName = 'declaration-property-value-no-unknown';

const messages = ruleMessages(ruleName, {
	rejected: (property, value) => `Unexpected unknown value "${value}" for property "${property}"`,
	rejectedParseError: (property, value) =>
		`Cannot parse property value "${value}" for property "${property}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown',
};

const SYNTAX_DESCRIPTOR = /^syntax$/i;

/** @typedef {import('stylelint').CoreRules[ruleName]} Rule */
/** @typedef {Parameters<Rule>[1]} SecondaryOptions */

/** @type {Rule} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{ actual: primary },
			{
				actual: secondaryOptions,
				possible: {
					ignoreProperties: [validateObjectWithArrayProps(isString, isRegExp)],
					propertiesSyntax: [validateObjectWithProps(isString)],
					typesSyntax: [validateObjectWithProps(isString)],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const ignoreProperties = Array.from(Object.entries(secondaryOptions?.ignoreProperties ?? {}));

		/** @type {(name: string, propValue: string) => boolean} */
		const isPropIgnored = (name, value) => {
			const [, valuePattern] =
				ignoreProperties.find(([namePattern]) => matchesStringOrRegExp(name, namePattern)) || [];

			return Boolean(valuePattern && matchesStringOrRegExp(value, valuePattern));
		};

		const propertiesSyntax = { ...secondaryOptions?.propertiesSyntax };
		const typesSyntax = { ...secondaryOptions?.typesSyntax };

		/** @type {Map<string, string>} */
		const typedCustomPropertyNames = new Map();

		root.walkAtRules(atRuleRegexes.propertyName, (atRule) => {
			const propName = atRule.params.trim();

			if (!propName || !atRule.nodes || !isCustomProperty(propName)) return;

			for (const node of atRule.nodes) {
				if (isDeclaration(node) && SYNTAX_DESCRIPTOR.test(node.prop)) {
					const value = node.value.trim();
					const unquoted = string.decode(value);

					// Only string values are valid.
					// We can not check the syntax of this property.
					if (unquoted === value) continue;

					// Any value is allowed in this custom property.
					// We don't need to check this property.
					if (unquoted === '*') continue;

					// https://github.com/csstree/csstree/pull/256
					// We can circumvent this issue by prefixing the property name,
					// making it a vendor-prefixed property instead of a custom property.
					// No one should be using `-stylelint--` as a property prefix.
					//
					// When this is resolved `typedCustomPropertyNames` can become a `Set<string>`
					// and the prefix can be removed.
					const prefixedPropName = `-stylelint${propName}`;

					typedCustomPropertyNames.set(propName, prefixedPropName);
					propertiesSyntax[prefixedPropName] = unquoted;
				}
			}
		});

		const languageOptions = result.stylelint.config?.languageOptions;
		const forkedLexer = fork(
			mergeSyntaxDefinitions(
				syntaxPatches,
				{ ...languageOptions?.syntax, atrules: languageOptions?.syntax?.atRules },
				{ properties: propertiesSyntax, types: typesSyntax },
			),
		).lexer;

		root.walkDecls((decl) => {
			const { prop } = decl;
			const value = getDeclarationValue(decl);

			// csstree/csstree#243
			// NOTE: CSSTree's `fork()` doesn't support `-moz-initial`, but it may be possible in the future.
			if (/^-moz-initial$/i.test(value)) return;

			if (!isStandardSyntaxDeclaration(decl)) return;

			if (isDescriptorDeclaration(decl)) return;

			if (!isStandardSyntaxProperty(prop)) return;

			if (!isStandardSyntaxValue(value)) return;

			if (isCustomProperty(prop) && !typedCustomPropertyNames.has(prop)) return;

			if (isPropIgnored(prop, value)) return;

			/** @type {import('css-tree').CssNode} */
			let cssTreeValueNode;

			try {
				cssTreeValueNode = parse(value, { context: 'value', positions: true });

				if (containsUnsupportedFunction(cssTreeValueNode)) return;
			} catch {
				// Ignore parse errors for `attr()`, `if()` and custom functions
				// See: https://github.com/stylelint/stylelint/issues/8779
				if (/(?:^|[^\w-])(?:attr|if|--[\w-]+)\(/i.test(value)) return;

				const index = declarationValueIndex(decl);
				const endIndex = index + value.length;

				report({
					message: messages.rejectedParseError,
					messageArgs: [prop, value],
					node: decl,
					index,
					endIndex,
					result,
					ruleName,
				});

				return;
			}

			const { error } = forkedLexer.matchProperty(
				typedCustomPropertyNames.get(prop) ?? prop,
				cssTreeValueNode,
			);

			if (!error) return;

			if (!('mismatchLength' in error)) return;

			const { name, rawMessage, loc } = error;

			if (name !== 'SyntaxMatchError') return;

			if (rawMessage !== 'Mismatch') return;

			const valueIndex = declarationValueIndex(decl);
			const mismatchValue = value.slice(loc.start.offset, loc.end.offset);

			const functionNode = find(
				cssTreeValueNode,
				(node) =>
					node.type === 'Function' &&
					node.loc !== undefined &&
					loc.start.offset >= node.loc.start.offset &&
					loc.end.offset <= node.loc.end.offset,
			);

			if (functionNode?.loc) {
				const valueFunction = value.slice(
					functionNode.loc.start.offset,
					functionNode.loc.end.offset,
				);

				const index = valueIndex + functionNode.loc.start.offset;
				const endIndex = index + valueFunction.length;

				report({
					message: messages.rejected,
					messageArgs: [prop, valueFunction],
					node: decl,
					index,
					endIndex,
					result,
					ruleName,
				});

				return;
			}

			report({
				message: messages.rejected,
				messageArgs: [prop, mismatchValue],
				node: decl,
				index: valueIndex + loc.start.offset,
				endIndex: valueIndex + loc.end.offset,
				result,
				ruleName,
			});
		});
	};
};

/**
 * @see csstree/csstree#164 min, max, clamp
 * @see csstree/csstree#245 env
 * @param {import('css-tree').CssNode} cssTreeNode
 * @returns {boolean}
 */
function containsUnsupportedFunction(cssTreeNode) {
	return Boolean(
		find(
			cssTreeNode,
			(node) => node.type === 'Function' && ['clamp', 'min', 'max', 'env'].includes(node.name),
		),
	);
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
