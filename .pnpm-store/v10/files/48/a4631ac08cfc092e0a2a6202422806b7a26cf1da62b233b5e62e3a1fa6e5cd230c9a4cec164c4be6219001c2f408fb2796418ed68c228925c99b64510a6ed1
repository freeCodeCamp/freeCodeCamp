import valueParser from 'postcss-value-parser';

import { assert, isRegExp, isString } from '../../utils/validateTypes.mjs';
import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import isStandardSyntaxValue from '../../utils/isStandardSyntaxValue.mjs';
import { isValueWord } from '../../utils/typeGuards.mjs';
import optionsMatches from '../../utils/optionsMatches.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import setDeclarationValue from '../../utils/setDeclarationValue.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

const ruleName = 'alpha-value-notation';

const messages = ruleMessages(ruleName, {
	expected: (unfixed, fixed) => `Expected "${unfixed}" to be "${fixed}"`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/alpha-value-notation',
	fixable: true,
};

const ALPHA_PROPS =
	/^(?:opacity|shape-image-threshold|fill-opacity|flood-opacity|stop-opacity|stroke-opacity)$/i;
const ALPHA_FUNCTION = /(?:color|hsla?|rgba?|hwb|lab|lch|oklab|oklch)\(/i;
const ALPHA_FUNCTION_NAME = /^(?:color|hsla?|rgba?|hwb|lab|lch|oklab|oklch)$/i;
const DIGIT = /\d/;

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary, secondaryOptions) => {
	return (root, result) => {
		const validOptions = validateOptions(
			result,
			ruleName,
			{
				actual: primary,
				possible: ['number', 'percentage'],
			},
			{
				actual: secondaryOptions,
				possible: {
					exceptProperties: [isString, isRegExp],
				},
				optional: true,
			},
		);

		if (!validOptions) return;

		const optionFuncs = Object.freeze({
			number: {
				expFunc: isNumber,
				fixFunc: asNumber,
			},
			percentage: {
				expFunc: isPercentage,
				fixFunc: asPercentage,
			},
		});

		root.walkDecls((decl) => {
			const declarationValue = getDeclarationValue(decl);
			const isAlphaProp = ALPHA_PROPS.test(decl.prop);
			const isAlpha = isAlphaProp || ALPHA_FUNCTION.test(declarationValue);

			if (!isAlpha || !DIGIT.test(declarationValue)) return;

			const parsedValue = valueParser(declarationValue);

			parsedValue.walk((node) => {
				const inVal = isAlphaProp && DIGIT.test(node.value);
				const inFn = node.type === 'function' && ALPHA_FUNCTION_NAME.test(node.value);
				const alpha = inVal ? findAlphaInValue(node) : inFn ? findAlphaInFunction(node) : undefined;

				if (!alpha) return;

				const { value } = alpha;

				if (!isStandardSyntaxValue(value)) return;

				if (!isNumber(value) && !isPercentage(value)) return;

				/** @type {'number' | 'percentage'} */
				let expectation = primary;

				if (optionsMatches(secondaryOptions, 'exceptProperties', decl.prop)) {
					if (expectation === 'number') {
						expectation = 'percentage';
					} else if (expectation === 'percentage') {
						expectation = 'number';
					}
				}

				if (optionFuncs[expectation].expFunc(value)) return;

				const fixed = optionFuncs[expectation].fixFunc(value);
				const unfixed = value;
				const index = declarationValueIndex(decl) + alpha.sourceIndex;
				const endIndex = index + alpha.value.length;
				const fix = () => {
					alpha.value = fixed;
					setDeclarationValue(decl, parsedValue.toString());
				};

				report({
					message: messages.expected,
					messageArgs: [unfixed, fixed],
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
 * @param {string} value
 * @returns {string}
 */
function asPercentage(value) {
	const number = Number(value);

	return `${Number((number * 100).toPrecision(3))}%`;
}

/**
 * @param {string} value
 * @returns {string}
 */
function asNumber(value) {
	const dimension = valueParser.unit(value);

	assert(dimension);

	const number = Number(dimension.number);

	return Number((number / 100).toPrecision(3)).toString();
}

/**
 * @template {import('postcss-value-parser').Node} T
 * @param {T} node
 * @returns {T | undefined}
 */
function findAlphaInValue(node) {
	return node.type === 'word' || node.type === 'function' ? node : undefined;
}

/**
 * @param {import('postcss-value-parser').FunctionNode} node
 * @returns {import('postcss-value-parser').Node | undefined}
 */
function findAlphaInFunction(node) {
	const legacySyntax = node.nodes.some(({ type, value }) => type === 'div' && value === ',');

	if (legacySyntax) {
		const args = node.nodes.filter(({ type }) => type === 'word' || type === 'function');

		if (args.length === 4) return args[3];

		return undefined;
	}

	const slashNodeIndex = node.nodes.findIndex(({ type, value }) => type === 'div' && value === '/');

	if (slashNodeIndex !== -1) {
		const nodesAfterSlash = node.nodes.slice(slashNodeIndex + 1, node.nodes.length);

		return nodesAfterSlash.find(isValueWord);
	}

	return undefined;
}

/**
 * @param {string} value
 * @returns {boolean}
 */
function isPercentage(value) {
	const dimension = valueParser.unit(value);

	return dimension && dimension.unit === '%';
}

/**
 * @param {string} value
 * @returns {boolean}
 */
function isNumber(value) {
	const dimension = valueParser.unit(value);

	return dimension && dimension.unit === '';
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
