import valueParser from 'postcss-value-parser';

import {
	fontWeightNonNumericKeywords,
	fontWeightRelativeKeywords,
} from '../../reference/keywords.mjs';
import { assertString } from '../../utils/validateTypes.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import isNumbery from '../../utils/isNumbery.mjs';
import isStandardSyntaxValue from '../../utils/isStandardSyntaxValue.mjs';
import isVariable from '../../utils/isVariable.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import setDeclarationValue from '../../utils/setDeclarationValue.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'font-weight-notation';

const messages = ruleMessages(ruleName, {
	expected: (type) => `Expected ${type} font-weight notation`,
	expectedWithActual: (actual, expected) => `Expected "${actual}" to be "${expected}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/font-weight-notation',
	fixable: true,
};

const NORMAL_KEYWORD = 'normal';

const NAMED_TO_NUMERIC = new Map([
	['normal', '400'],
	['bold', '700'],
]);
const NUMERIC_TO_NAMED = new Map([
	['400', 'normal'],
	['700', 'bold'],
]);

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: ['numeric', 'named-where-possible'],
			},
			{
				actual: secondaryOptions,
				possible: {
					ignore: ['relative'],
				},
				optional: true,
			},
		);

		if (!validOptions) {
			return;
		}

		const ignoreRelative = optionsMatches(secondaryOptions, 'ignore', 'relative');

		root.walkDecls(/^font(-weight)?$/i, (decl) => {
			const isFontShorthandProp = decl.prop.toLowerCase() === 'font';
			const parsedValue = valueParser(getDeclarationValue(decl));
			const valueNodes = parsedValue.nodes;
			const hasNumericFontWeight = valueNodes.some((node, index, nodes) => {
				return isNumbery(node.value) && !isDivNode(nodes[index - 1]);
			});

			for (const [index, valueNode] of valueNodes.entries()) {
				if (!isPossibleFontWeightNode(valueNode, index, valueNodes)) continue;

				const { value } = valueNode;

				if (isFontShorthandProp) {
					if (value.toLowerCase() === NORMAL_KEYWORD && hasNumericFontWeight) {
						continue; // Not `normal` for font-weight
					}

					if (checkWeight(decl, valueNode, parsedValue)) {
						break; // Stop traverse if font-weight is processed
					}
				}

				checkWeight(decl, valueNode, parsedValue);
			}
		});

		/** @import { Node, ParsedValue } from 'postcss-value-parser' */

		/**
		 * @param {import('postcss').Declaration} decl
		 * @param {Node} weightValueNode
		 * @param {ParsedValue} parsedValue
		 * @returns {true | undefined}
		 */
		function checkWeight(decl, weightValueNode, parsedValue) {
			const weightValue = weightValueNode.value;

			if (!isStandardSyntaxValue(weightValue)) {
				return;
			}

			if (isVariable(weightValue)) {
				return;
			}

			const lowerWeightValue = weightValue.toLowerCase();

			if (ignoreRelative && fontWeightRelativeKeywords.has(lowerWeightValue)) {
				return;
			}

			const fixer = (/** @type {string} */ value) => () => {
				weightValueNode.value = value;
				setDeclarationValue(decl, parsedValue.toString());
			};

			if (primary === 'numeric') {
				if (!isNumbery(lowerWeightValue) && fontWeightNonNumericKeywords.has(lowerWeightValue)) {
					const numericValue = NAMED_TO_NUMERIC.get(lowerWeightValue);

					if (numericValue) {
						complain(
							messages.expectedWithActual,
							[weightValue, numericValue],
							weightValueNode,
							fixer(numericValue),
						);
					} else {
						complain(messages.expected, ['numeric'], weightValueNode, undefined);
					}

					return true;
				}
			} else if (primary === 'named-where-possible') {
				if (isNumbery(lowerWeightValue) && NUMERIC_TO_NAMED.has(lowerWeightValue)) {
					const namedValue = NUMERIC_TO_NAMED.get(lowerWeightValue);

					// microsoft/TypeScript#13086
					assertString(namedValue);

					const fix = fixer(namedValue);

					complain(messages.expectedWithActual, [weightValue, namedValue], weightValueNode, fix);

					return true;
				}
			}

			/**
			 * @param {typeof messages[keyof messages]} message
			 * @param {Array<string>} messageArgs
			 * @param {import('postcss-value-parser').Node} valueNode
			 * @param {(() => void) | undefined} fix
			 */
			function complain(message, messageArgs, valueNode, fix) {
				const index = declarationValueIndex(decl) + valueNode.sourceIndex;
				const endIndex = index + valueNode.value.length;

				report({
					ruleName,
					result,
					message,
					messageArgs,
					node: decl,
					index,
					endIndex,
					fix: {
						apply: fix,
						node: decl,
					},
				});
			}
		}
	};
};

/**
 * @param {Node | undefined} node
 * @returns {boolean}
 */
function isDivNode(node) {
	return node !== undefined && node.type === 'div';
}

/**
 * @param {Node} node
 * @param {number} index
 * @param {Node[]} nodes
 * @returns {boolean}
 */
function isPossibleFontWeightNode(node, index, nodes) {
	if (node.type !== 'word') return false;

	// Exclude `<font-size>/<line-height>` format like `16px/3`.
	if (isDivNode(nodes[index - 1])) return false;

	if (isDivNode(nodes[index + 1])) return false;

	return true;
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
