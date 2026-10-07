import balancedMatch from 'balanced-match';
import valueParser from 'postcss-value-parser';

import { assert, isRegExp, isString } from './validateTypes.mjs';

/** @typedef {(expression: string, expressionIndex: number, funcNode: valueParser.FunctionNode, parsedValue: valueParser.ParsedValue) => void} Callback */

/**
 * Search a CSS string for functions by name.
 * For every match, invoke the callback, passing the function's
 * "argument(s) string" (whatever is inside the parentheses)
 * as an argument.
 *
 * Callback will be called once for every matching function found,
 * with the function's "argument(s) string" and its starting index
 * as the arguments.
 *
 * @param {string} source
 * @param {string | RegExp} functionName
 * @param {Callback} callback
 * @returns {valueParser.ParsedValue}
 */
export default function functionArgumentsSearch(source, functionName, callback) {
	const parsedValue = valueParser(source);

	return parsedValue.walk((node) => {
		if (node.type !== 'function') return;

		const { value } = node;

		if (isString(functionName) && value !== functionName) return;

		if (isRegExp(functionName) && !functionName.test(node.value)) return;

		const parensMatch = balancedMatch('(', ')', source.slice(node.sourceIndex));

		assert(parensMatch);

		const expression = parensMatch.body;
		const parenLength = 1; // == '('
		const expressionIndex = node.sourceIndex + value.length + parenLength;

		callback(expression, expressionIndex, node, parsedValue);
	});
}
