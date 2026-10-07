import valueParser from 'postcss-value-parser';

import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import isStandardSyntaxColorFunction from '../../utils/isStandardSyntaxColorFunction.mjs';
import { isValueFunction } from '../../utils/typeGuards.mjs';
import isVarFunction from '../../utils/isVarFunction.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import setDeclarationValue from '../../utils/setDeclarationValue.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'color-function-notation';

const messages = ruleMessages(ruleName, {
	expected: (primary) => `Expected ${primary} color-function notation`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/color-function-notation',
	fixable: true,
};

const LEGACY_FUNCTION_NAME = /^(?:rgba|hsla)$/i;
const LEGACY_NOTATION_FUNCTION = /\b(?:rgba?|hsla?)\(/i;
const LEGACY_NOTATION_FUNCTION_NAME = /^(?:rgba?|hsla?)$/i;

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: ['modern', 'legacy'],
			},
			{
				actual: secondaryOptions,
				possible: {
					ignore: ['with-var-inside'],
				},
				optional: true,
			},
		);

		if (!validOptions) return;

		const ignoreWithVarInside = optionsMatches(secondaryOptions, 'ignore', 'with-var-inside');

		root.walkDecls((decl) => {
			if (!LEGACY_NOTATION_FUNCTION.test(decl.value)) return;

			if (primary === 'modern' && !decl.value.includes(',')) return;

			const parsedValue = valueParser(getDeclarationValue(decl));

			parsedValue.walk((node) => {
				if (!isValueFunction(node)) return;

				if (!isStandardSyntaxColorFunction(node)) return;

				const { value, sourceIndex, sourceEndIndex, nodes } = node;

				if (ignoreWithVarInside && containsVariable(nodes)) return;

				if (!LEGACY_NOTATION_FUNCTION_NAME.test(value)) return;

				const hasEnoughArguments = nodes.length >= 5;

				if (!hasEnoughArguments) return;

				if (primary === 'modern' && !isLikelyLegacy(nodes)) return;

				if (primary === 'legacy' && isLikelyLegacy(nodes)) return;

				const modernFixer = () => {
					let commaCount = 0;

					// Convert punctuation
					node.nodes = nodes.map((childNode) => {
						if (isComma(childNode)) {
							// Non-alpha commas to space and alpha commas to slashes
							if (commaCount < 2) {
								// @ts-expect-error -- TS2322: Type '"space"' is not assignable to type '"div"'.
								childNode.type = 'space';
								childNode.value = atLeastOneSpace(childNode.after);
								commaCount++;
							} else {
								childNode.value = '/';
								childNode.before = atLeastOneSpace(childNode.before);
								childNode.after = atLeastOneSpace(childNode.after);
							}
						}

						return childNode;
					});

					// Remove trailing 'a' from legacy function name
					if (LEGACY_FUNCTION_NAME.test(value)) {
						node.value = value.slice(0, -1);
					}

					setDeclarationValue(decl, parsedValue.toString());
				};

				const index = declarationValueIndex(decl) + sourceIndex;
				const endIndex = index + (sourceEndIndex - sourceIndex);
				const fix = primary === 'modern' ? modernFixer : undefined;

				report({
					message: messages.expected,
					messageArgs: [primary],
					node: decl,
					index,
					endIndex,
					result,
					ruleName,
					fix: {
						apply: fix,
						node: decl,
					},
				});
			});
		});
	};
};

/**
 * @param {string} whitespace
 */
function atLeastOneSpace(whitespace) {
	return whitespace !== '' ? whitespace : ' ';
}

/**
 * @param {import('postcss-value-parser').Node[]} nodes
 */
function containsVariable(nodes) {
	return nodes.some((node) => isVarFunction(node));
}

/**
 * @param {import('postcss-value-parser').Node} node
 * @returns {node is import('postcss-value-parser').DivNode}
 */
function isComma(node) {
	return node.type === 'div' && node.value === ',';
}

/** @param {import('postcss-value-parser').Node[]} nodes */
function isLikelyLegacy(nodes) {
	let commas = 0;

	for (const node of nodes) {
		if (isComma(node)) commas++;
		else if (node.value === '/') return false;
	}

	return commas && (commas === 2 || commas === 3);
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
