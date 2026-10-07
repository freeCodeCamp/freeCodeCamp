import {
	TokenNode,
	WhitespaceNode,
	isFunctionNode,
	isSimpleBlockNode,
	isTokenNode,
	isWhiteSpaceOrCommentNode,
	isWhitespaceNode,
	parseListOfComponentValues,
	stringify,
	walk,
} from '@csstools/css-parser-algorithms';
import {
	TokenType,
	isTokenComma,
	isTokenDelim,
	isTokenDimension,
	isTokenIdent,
	isTokenNumeric,
	isTokenOpenCurly,
	isTokenOpenParen,
	isTokenSemicolon,
	mutateIdent,
	mutateUnit,
	tokenize,
} from '@csstools/css-tokenizer';

import { declarationValueIndex } from '../../utils/nodeFieldIndices.mjs';
import getDeclarationValue from '../../utils/getDeclarationValue.mjs';
import { mathFunctions } from '../../reference/functions.mjs';
import report from '../../utils/report.mjs';
import ruleMessages from '../../utils/ruleMessages.mjs';
import setDeclarationValue from '../../utils/setDeclarationValue.mjs';
import validateOptions from '../../utils/validateOptions.mjs';

import { assert } from '../../utils/validateTypes.mjs';

const ruleName = 'function-calc-no-unspaced-operator';

const messages = ruleMessages(ruleName, {
	expectedBefore: (operator) => `Expected single space before "${operator}" operator`,
	expectedAfter: (operator) => `Expected single space after "${operator}" operator`,
});

const meta = {
	url: 'https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator',
	fixable: true,
};

const OPERATORS = new Set(['+', '-']);
const OPERATOR_REGEX = /[+-]/;

const MATH_FUNCS_REGEX_SOURCE = [...mathFunctions].join('|');
const FUNC_NAMES_REGEX = new RegExp(`^(?:${MATH_FUNCS_REGEX_SOURCE})$`, 'i');
const FUNC_CALLS_REGEX = new RegExp(`(?:${MATH_FUNCS_REGEX_SOURCE})\\(`, 'i');

const NEWLINE_REGEX = /\n|\r\n/;

/** @import { CommentNode, ComponentValue, ContainerNode } from '@csstools/css-parser-algorithms' */

/** @type {import('stylelint').CoreRules[ruleName]} */
const rule = (primary) => {
	return (root, result) => {
		const validOptions = validateOptions(result, ruleName, { actual: primary });

		if (!validOptions) return;

		/**
		 * @param {messages[keyof messages]} message
		 * @param {import('postcss').Node} node
		 * @param {number} index
		 * @param {string} operator
		 * @param {() => void} fix
		 */
		function complain(message, node, index, operator, fix) {
			const endIndex = index + operator.length;
			const messageArgs = [operator];

			report({
				message,
				messageArgs,
				node,
				index,
				endIndex,
				result,
				ruleName,
				fix: { apply: fix, node },
			});
		}

		root.walkDecls((decl) => {
			const value = getDeclarationValue(decl);

			if (!OPERATOR_REGEX.test(value)) return;

			if (!FUNC_CALLS_REGEX.test(value)) return;

			const nodes = tokenizeDeclarationValue(value);

			if (nodes.length === 0) return;

			const valueIndex = declarationValueIndex(decl);
			const fixDeclarationValue = () => setDeclarationValue(decl, stringify([nodes]));

			/**
			 * @param {ContainerNode} node
			 * @param {Operation} operation
			 * @param {'before' | 'after'} position
			 */
			function checkCompleteOperation(node, operation, position) {
				if (operation[position].some(isWhitespaceNode)) return;

				const messageKey = position === 'before' ? 'expectedBefore' : 'expectedAfter';

				complain(
					messages[messageKey],
					decl,
					valueIndex + operation.operatorCharPosition,
					operation.operatorChar,
					() => {
						operation.insertWhitespace(node, position);
						fixDeclarationValue();
					},
				);
			}

			/**
			 * @param {ContainerNode} node
			 * @param {Operation} operation
			 */
			function checkOperationWithoutOperator(node, operation) {
				if (isTokenNode(operation.firstOperand)) {
					const token = operation.firstOperand.value;

					/**
					 * @param {string | undefined} operatorChar
					 * @param {() => void} mutator
					 * @returns {boolean}
					 */
					const complainToFirstOperand = (operatorChar, mutator) => {
						if (!(operatorChar && OPERATOR_REGEX.test(operatorChar))) return false;

						const [, , , endPos] = token;

						operation.completeMissingOperator(operatorChar, endPos, 'append');

						complain(
							messages.expectedBefore,
							decl,
							valueIndex + operation.operatorCharPosition,
							operation.operatorChar,
							() => {
								operation.insertOperatorAfterFirstOperand(node);
								mutator();
								fixDeclarationValue();
							},
						);

						return true;
					};

					if (isTokenDimension(token)) {
						// E.g. '2px+' → ['2px', '+']
						const [, , , , { unit }] = token;
						const operatorChar = unit.at(-1);
						const newUnit = unit.slice(0, -1);

						if (complainToFirstOperand(operatorChar, () => mutateUnit(token, newUnit))) {
							return;
						}
					}

					if (isTokenIdent(token)) {
						// E.g. 'id+' → ['id', '+']
						const [, , , , { value: tokenValue }] = token;
						const operatorChar = tokenValue.at(-1);
						const newTokenValue = tokenValue.slice(0, -1);

						if (complainToFirstOperand(operatorChar, () => mutateIdent(token, newTokenValue))) {
							return;
						}
					}
				}

				if (isTokenNode(operation.secondOperand) && isTokenNumeric(operation.secondOperand.value)) {
					const token = operation.secondOperand.value;
					const [, , startPos, , { signCharacter: operatorChar }] = token;

					if (operatorChar && OPERATOR_REGEX.test(operatorChar)) {
						operation.completeMissingOperator(operatorChar, startPos, 'prepend');

						complain(
							messages.expectedAfter,
							decl,
							valueIndex + operation.operatorCharPosition,
							operation.operatorChar,
							() => {
								operation.insertOperatorBeforeSecondOperand(node);

								// Remove an operator character from the second operand token
								token[4].signCharacter = undefined;
								token[1] = token[1].slice(1);

								fixDeclarationValue();
							},
						);
					}
				}
			}

			/**
			 * @param {Operation} operation
			 * @param {'before' | 'after'} position
			 */
			function checkOperandWhitespace(operation, position) {
				operation[position].forEach((whitespaceNode) => {
					if (!isWhitespaceNode(whitespaceNode)) return;

					const whitespace = whitespaceNode.toString();

					if (whitespace === ' ') return;

					const indexOfFirstNewLine = whitespace.search(NEWLINE_REGEX);

					if (indexOfFirstNewLine === 0) return;

					const message = position === 'before' ? messages.expectedBefore : messages.expectedAfter;

					complain(
						message,
						decl,
						valueIndex + operation.operatorCharPosition,
						operation.operatorChar,
						() => {
							whitespaceNode.value = newWhitespaceNode(
								indexOfFirstNewLine === -1 ? ' ' : whitespace.slice(indexOfFirstNewLine),
							).value;
							fixDeclarationValue();
						},
					);
				});
			}

			walk(
				nodes,
				({ node, state }) => {
					if (!state) return;

					// Step 2
					// Make sure that we are in a math context.
					// Once in a math context we remain in one until we encounter a non-math function.
					// Simple blocks with parentheses are the same as `calc()`
					if (isFunctionNode(node)) {
						state.inMathFunction = FUNC_NAMES_REGEX.test(node.getName().toLowerCase());
					} else if (!isSimpleBlockNode(node) || !isTokenOpenParen(node.startToken)) {
						state.inMathFunction = false;

						return;
					}

					if (!state.inMathFunction) return;

					let cursor = 0;
					/** @type {Operation | undefined} */
					let operation = undefined;

					while (cursor !== -1 && cursor < node.value.length) {
						// Step 3
						// Parse into operations
						// Each operation consumes as much whitespace before and after
						// Each parse call tries to consume as much as possible up to the next comma or semicolon
						// Operations consist of
						// - first operand
						// - operator
						// - second operand
						// - whitespace before and after
						[operation, cursor] = parseOperation(node, cursor);

						if (!operation) {
							cursor++;
							continue;
						}

						// Step 4
						// If there is no operator, try to find one
						if (!operation.operator) {
							checkOperationWithoutOperator(node, operation);
						}

						// Step 5
						// If the operation is complete, ensure there is whitespace around the operator
						// The operation might have started without an operator and might have been repaired by Step 4
						if (operation.operator) {
							checkCompleteOperation(node, operation, 'before');
							checkCompleteOperation(node, operation, 'after');

							// Step 6
							// Normalize the whitespace around the operands
							checkOperandWhitespace(operation, 'before');
							checkOperandWhitespace(operation, 'after');
						}

						cursor = node.value.indexOf(operation.secondOperand);
					}
				},
				{
					inMathFunction: false,
				},
			);
		});
	};
};

/**
 * @param {string} value
 * @returns {Array<ComponentValue>}
 */
function tokenizeDeclarationValue(value) {
	const tokens = tokenize({ css: value });

	// Step 1
	// Step 1.1
	// Re-tokenize dimensions with units containing dashes.
	// These might be typo's.
	// For example: `10px-20px` has a unit of `px-20px`
	tokens.forEach((token, i) => {
		if (!isTokenDimension(token)) return;

		const { unit } = token[4];

		if (unit.startsWith('--')) return;

		const indexOfDash = unit.indexOf('-');

		if (indexOfDash === -1) return;

		const remainder = unit.slice(indexOfDash);

		if (remainder.length === 1) return;

		mutateUnit(token, unit.slice(0, indexOfDash));
		token[3] = token[2] + token[1].length;

		const remainderTokens = tokenize({ css: remainder }).slice(0, -1); // Trim EOF token

		remainderTokens.forEach((remainderToken) => {
			remainderToken[2] += token[3];
			remainderToken[3] += token[3];
		});

		tokens.splice(i + 1, 0, ...remainderTokens);
	});

	// Step 1.2
	// Re-tokenize scss interpolation blocks
	// Grouping `#` and `{` into a single token allows us to parse these as simple blocks with curly braces.
	// For example: `#{$foo}`
	tokens.forEach((currentToken, i) => {
		if (!isTokenDelim(currentToken) || currentToken[4].value !== '#') return;

		const nextToken = tokens[i + 1];

		if (!isTokenOpenCurly(nextToken)) return;

		const nextNextToken = tokens[i + 2];

		if (!isTokenDelim(nextNextToken) || nextNextToken[4].value !== '$') return;

		// Set the string representation of the open curly to `#{`
		nextToken[1] = '#{';
		// Remove the `#` token
		tokens.splice(i, 1);
	});

	return parseListOfComponentValues(tokens);
}

/** @see https://drafts.csswg.org/css-values/#typedef-calc-value */
const OPERAND_TOKEN_TYPES = new Set([
	TokenType.Number,
	TokenType.Dimension,
	TokenType.Percentage,
	TokenType.Ident,
]);

/**
 * @param {ComponentValue | undefined} node
 * @returns {boolean}
 */
function isOperandNode(node) {
	if (isSimpleBlockNode(node)) return true;

	if (isFunctionNode(node)) {
		const name = node.getName().toLowerCase();

		if (mathFunctions.has(name) || name === 'var') return true;

		return false;
	}

	if (!isTokenNode(node)) return false;

	return OPERAND_TOKEN_TYPES.has(node.value[0]);
}

/**
 * @param {string} whitespace
 */
function newWhitespaceNode(whitespace = ' ') {
	return new WhitespaceNode([[TokenType.Whitespace, whitespace, -1, -1, undefined]]);
}

class Operation {
	/**
	 * @param {ComponentValue} firstOperand
	 * @param {Array<WhitespaceNode | CommentNode>} before
	 * @param {ComponentValue} secondOperand
	 * @param {Array<WhitespaceNode | CommentNode>} after
	 * @param {TokenNode | undefined} operator
	 */
	constructor(firstOperand, before, secondOperand, after, operator) {
		/** @type {typeof firstOperand} */
		this.firstOperand = firstOperand;
		/** @type {typeof before} */
		this.before = before;
		/** @type {typeof secondOperand} */
		this.secondOperand = secondOperand;
		/** @type {typeof after} */
		this.after = after;
		/** @type {typeof operator} */
		this.operator = operator;
	}

	get #operatorToken() {
		assert(isTokenDelim(this.operator?.value));

		return this.operator.value;
	}

	/** @returns {string} */
	get operatorChar() {
		return this.#operatorToken[4].value;
	}

	/** @returns {number} */
	get operatorCharPosition() {
		return this.#operatorToken[2];
	}

	/**
	 * @param {ContainerNode} node
	 * @param {'before' | 'after'} position
	 */
	insertWhitespace(node, position) {
		assert(this.operator);
		node.value.splice(
			node.value.indexOf(this.operator) + (position === 'before' ? 0 : 1),
			0,
			newWhitespaceNode(),
		);
	}

	/**
	 * @param {ContainerNode} node
	 */
	insertOperatorAfterFirstOperand(node) {
		assert(this.operator);
		node.value.splice(node.value.indexOf(this.firstOperand) + 1, 0, ...this.before, this.operator);
	}

	/**
	 * @param {ContainerNode} node
	 */
	insertOperatorBeforeSecondOperand(node) {
		assert(this.operator);
		node.value.splice(node.value.indexOf(this.secondOperand), 0, this.operator, ...this.after);
	}

	/**
	 * @param {string} operatorChar
	 * @param {number} operatorCharPosition
	 * @param {'append' | 'prepend'} type
	 */
	completeMissingOperator(operatorChar, operatorCharPosition, type) {
		this.operator = new TokenNode([
			TokenType.Delim,
			operatorChar,
			operatorCharPosition,
			operatorCharPosition + operatorChar.length,
			{ value: operatorChar },
		]);

		if (type === 'append') {
			this.after = this.before;
			this.before = [newWhitespaceNode()];
		} else {
			this.after = [newWhitespaceNode()];
		}
	}
}

/**
 * @param {ContainerNode} container
 * @param {number} cursor
 * @returns {[Operation | undefined, number]}
 */
function parseOperation(container, cursor) {
	let firstOperand = undefined;
	let secondOperand = undefined;
	const before = [];
	const after = [];
	let operator = undefined;

	let currentNode = container.value[cursor];

	// Consume as much whitespace and comments as possible
	while (isWhiteSpaceOrCommentNode(currentNode)) {
		currentNode = container.value[++cursor];
	}

	// If the current node is an operand, consume it
	if (isOperandNode(currentNode)) {
		firstOperand = currentNode;

		currentNode = container.value[++cursor];
	}

	// Consume as much whitespace and comments as possible
	// Assign to `before`
	while (isWhiteSpaceOrCommentNode(currentNode)) {
		before.push(currentNode);

		currentNode = container.value[++cursor];
	}

	// If the current node is an operator, consume it
	if (
		isTokenNode(currentNode) &&
		isTokenDelim(currentNode.value) &&
		OPERATORS.has(currentNode.value[4].value)
	) {
		operator = currentNode;

		currentNode = container.value[++cursor];
	}

	// Consume as much whitespace and comments as possible
	// Assign to `after`
	while (isWhiteSpaceOrCommentNode(currentNode)) {
		after.push(currentNode);

		currentNode = container.value[++cursor];
	}

	// If the current node is an operand, consume it
	if (isOperandNode(currentNode)) {
		secondOperand = currentNode;

		currentNode = container.value[++cursor];
	}

	// Consume as much whitespace and comments as possible
	while (isWhiteSpaceOrCommentNode(currentNode)) {
		currentNode = container.value[++cursor];
	}

	// If we have not consumed any operands, we are not in an operation
	// Do error recovery by consuming until the next comma or semicolon
	// If no comma or semicolon is found, consume until the end of the container
	if (!firstOperand || !secondOperand) {
		while (currentNode) {
			if (
				isTokenNode(currentNode) &&
				(isTokenComma(currentNode.value) || isTokenSemicolon(currentNode.value))
			) {
				return [undefined, cursor];
			}

			currentNode = container.value[++cursor];
		}

		return [undefined, container.value.length];
	}

	return [new Operation(firstOperand, before, secondOperand, after, operator), cursor];
}

rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;
export default rule;
