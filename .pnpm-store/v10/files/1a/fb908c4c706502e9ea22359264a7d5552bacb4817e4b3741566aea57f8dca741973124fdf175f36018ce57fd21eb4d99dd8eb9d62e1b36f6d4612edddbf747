import valueParser from 'postcss-value-parser';

import { atRuleParamIndex, declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import { isValueFunction as isFunction, isValueWord as isWord } from '../../utils/typeGuards.mjs';
import { isRegExp, isString } from '../../utils/validateTypes.mjs';
import getAtRuleParams from '../../utils/getAtRuleParams.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import isCustomProperty from '../../utils/isCustomProperty.mjs';
import isMathFunction from '../../utils/isMathFunction.mjs';
import isStandardSyntaxAtRule from '../../utils/isStandardSyntaxAtRule.mjs';
import isStandardSyntaxDeclaration from '../../utils/isStandardSyntaxDeclaration.mjs';
import { lengthUnits } from '../../reference/units.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import setAtRuleParams from '../../utils/setAtRuleParams.mjs';
import setDeclarationValue from '../../utils/setDeclarationValue.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'length-zero-no-unit';

const messages = ruleMessages(ruleName, {
	rejected: 'Unexpected unit',
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/length-zero-no-unit',
	fixable: true,
};

/** @import { AtRule, Declaration } from 'postcss' */
/** @import { ParsedValue, Node } from 'postcss-value-parser' */

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
			},
			{
				actual: secondaryOptions,
				possible: {
					ignore: ['custom-properties'],
					ignoreFunctions: [isString, isRegExp],
					ignorePreludeOfAtRules: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) return;

		/**
		 * @param {AtRule | Declaration} node
		 * @param {number} nodeIndex
		 * @param {Node} valueNode
		 * @param {ParsedValue} parsedValue
		 */
		function check(node, nodeIndex, valueNode, parsedValue) {
			const { value, sourceIndex } = valueNode;

			if (isMathFunction(valueNode)) return false;

			if (isFunction(valueNode) && optionsMatches(secondaryOptions, 'ignoreFunctions', value))
				return false;

			if (!isWord(valueNode)) return;

			const dimension = valueParser.unit(value);
			const decompositionFailed = dimension === false;

			if (decompositionFailed) return;

			const { number, unit } = dimension;

			if (!isZero(number)) return;

			if (isNumber(unit)) return;

			if (!isLength(unit)) return;

			if (isFraction(unit)) return;

			const fix = () => {
				valueNode.value = number.startsWith('.') ? number.slice(1) : number;

				switch (node.type) {
					case 'atrule':
						setAtRuleParams(node, parsedValue.toString());
						break;
					case 'decl':
						setDeclarationValue(node, parsedValue.toString());
						break;
				}
			};

			const index = nodeIndex + sourceIndex + number.length;
			const endIndex = index + unit.length;

			report({
				index,
				endIndex,
				message: messages.rejected,
				messageArgs: [],
				node,
				result,
				ruleName,
				fix: {
					apply: fix,
					node,
				},
			});
		}

		/** @param {AtRule} node */
		function checkAtRule(node) {
			if (!isStandardSyntaxAtRule(node)) return;

			if (optionsMatches(secondaryOptions, 'ignorePreludeOfAtRules', node.name)) return;

			const index = atRuleParamIndex(node);
			const parsedValue = valueParser(getAtRuleParams(node));

			parsedValue.walk((valueNode) => check(node, index, valueNode, parsedValue));
		}

		/** @param {Declaration} node */
		function checkDecl(node) {
			const { prop } = node;

			if (!isStandardSyntaxDeclaration(node)) return;

			if (isLineHeight(prop)) return;

			if (isFlex(prop)) return;

			if (optionsMatches(secondaryOptions, 'ignore', 'custom-properties') && isCustomProperty(prop))
				return;

			const index = declarationValueIndex(node);
			const parsedValue = valueParser(getDeclarationValue(node));

			parsedValue.walk((valueNode, valueNodeIndex, valueNodes) => {
				if (isLineHeightValue(node, valueNodes, valueNodeIndex)) return;

				return check(node, index, valueNode, parsedValue);
			});
		}

		root.walkAtRules(checkAtRule);
		root.walkDecls(checkDecl);
	};
};

/**
 * @param {Declaration} decl
 * @param {Node[]} nodes
 * @param {number} index
 */
function isLineHeightValue({ prop }, nodes, index) {
	const lastNode = nodes[index - 1];

	return (
		prop.toLowerCase() === 'font' && lastNode && lastNode.type === 'div' && lastNode.value === '/'
	);
}

/**
 * @param {string} prop
 */
function isLineHeight(prop) {
	return prop.toLowerCase() === 'line-height';
}

/**
 * @param {string} prop
 */
function isFlex(prop) {
	return prop.toLowerCase() === 'flex';
}

/**
 * @param {string} unit
 */
function isLength(unit) {
	return lengthUnits.has(unit.toLowerCase());
}

/**
 * @param {string} unit
 */
function isFraction(unit) {
	return unit.toLowerCase() === 'fr';
}

/**
 * @param {string} number
 */
function isZero(number) {
	return Number.parseFloat(number) === 0;
}

/**
 * @param {string} unit
 */
function isNumber(unit) {
	return unit === '';
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
