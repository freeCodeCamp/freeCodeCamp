/**
 * @fileoverview Common utils for AST.
 * @author Gyandeep Singh
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { KEYS: eslintVisitorKeys } = require("eslint-visitor-keys");
const esutils = require("esutils");
const espree = require("espree");
const escapeRegExp = require("escape-string-regexp");
const {
	breakableTypePattern,
	createGlobalLinebreakMatcher,
	lineBreakPattern,
	shebangPattern,
} = require("../../shared/ast-utils");
const globals = require("../../../conf/globals");
const { LATEST_ECMA_VERSION } = require("../../../conf/ecma-version");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const anyFunctionPattern =
	/^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression)$/u;
const anyLoopPattern = /^(?:DoWhile|For|ForIn|ForOf|While)Statement$/u;
const arrayMethodWithThisArgPattern =
	/^(?:every|filter|find(?:Last)?(?:Index)?|flatMap|forEach|map|some)$/u;
const arrayOrTypedArrayPattern = /Array$/u;
const bindOrCallOrApplyPattern = /^(?:bind|call|apply)$/u;
const thisTagPattern = /^[\s*]*@this/mu;

const COMMENTS_IGNORE_PATTERN =
	/^\s*(?:eslint|jshint\s+|jslint\s+|istanbul\s+|globals?\s+|exported\s+|jscs)/u;
const ESLINT_DIRECTIVE_PATTERN = /^(?:eslint[- ]|(?:globals?|exported) )/u;
const LINEBREAKS = new Set(["\r\n", "\r", "\n", "\u2028", "\u2029"]);

// A set of node types that can contain a list of statements
const STATEMENT_LIST_PARENTS = new Set([
	"Program",
	"BlockStatement",
	"StaticBlock",
	"SwitchCase",
]);
const LEXICAL_DECLARATION_KINDS = new Set([
	"let",
	"const",
	"using",
	"await using",
]);

const DECIMAL_INTEGER_PATTERN = /^(?:0|0[0-7]*[89]\d*|[1-9](?:_?\d)*)$/u;

// Tests the presence of at least one LegacyOctalEscapeSequence or NonOctalDecimalEscapeSequence in a raw string
const OCTAL_OR_NON_OCTAL_DECIMAL_ESCAPE_PATTERN =
	/^(?:[^\\]|\\.)*\\(?:[1-9]|0\d)/su;

const LOGICAL_ASSIGNMENT_OPERATORS = new Set(["&&=", "||=", "??="]);

/**
 * All builtin global variables defined in the latest ECMAScript specification.
 * @type {Record<string,boolean>} Key is the name of the variable. Value is `true` if the variable is considered writable, `false` otherwise.
 */
const ECMASCRIPT_GLOBALS = globals[`es${LATEST_ECMA_VERSION}`];

/**
 * Checks reference if is non initializer and writable.
 * @param {Reference} reference A reference to check.
 * @param {number} index The index of the reference in the references.
 * @param {Reference[]} references The array that the reference belongs to.
 * @returns {boolean} Success/Failure
 * @private
 */
function isModifyingReference(reference, index, references) {
	const identifier = reference.identifier;

	/*
	 * Destructuring assignments can have multiple default value, so
	 * possibly there are multiple writeable references for the same
	 * identifier.
	 */
	const modifyingDifferentIdentifier =
		index === 0 || references[index - 1].identifier !== identifier;

	return (
		identifier &&
		reference.init === false &&
		reference.isWrite() &&
		modifyingDifferentIdentifier
	);
}

/**
 * Checks whether the given string starts with uppercase or not.
 * @param {string} s The string to check.
 * @returns {boolean} `true` if the string starts with uppercase.
 */
function startsWithUpperCase(s) {
	return s[0] !== s[0].toLocaleLowerCase();
}

/**
 * Checks whether or not a node is a constructor.
 * @param {ASTNode} node A function node to check.
 * @returns {boolean} Whether or not a node is a constructor.
 */
function isES5Constructor(node) {
	return node.id && startsWithUpperCase(node.id.name);
}

/**
 * Finds a function node from ancestors of a node.
 * @param {ASTNode} node A start node to find.
 * @returns {Node|null} A found function node.
 */
function getUpperFunction(node) {
	for (
		let currentNode = node;
		currentNode;
		currentNode = currentNode.parent
	) {
		if (anyFunctionPattern.test(currentNode.type)) {
			return currentNode;
		}
	}
	return null;
}

/**
 * Checks whether a given node is a function node or not.
 * The following types are function nodes:
 *
 * - ArrowFunctionExpression
 * - FunctionDeclaration
 * - FunctionExpression
 * @param {ASTNode|null} node A node to check.
 * @returns {boolean} `true` if the node is a function node.
 */
function isFunction(node) {
	return Boolean(node && anyFunctionPattern.test(node.type));
}

/**
 * Checks whether a given node is a loop node or not.
 * The following types are loop nodes:
 *
 * - DoWhileStatement
 * - ForInStatement
 * - ForOfStatement
 * - ForStatement
 * - WhileStatement
 * @param {ASTNode|null} node A node to check.
 * @returns {boolean} `true` if the node is a loop node.
 */
function isLoop(node) {
	return Boolean(node && anyLoopPattern.test(node.type));
}

/**
 * Checks whether the given node is in a loop or not.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is in a loop.
 */
function isInLoop(node) {
	for (
		let currentNode = node;
		currentNode && !isFunction(currentNode);
		currentNode = currentNode.parent
	) {
		if (isLoop(currentNode)) {
			return true;
		}
	}

	return false;
}

/**
 * Determines whether the given node is a `null` literal.
 * @param {ASTNode} node The node to check
 * @returns {boolean} `true` if the node is a `null` literal
 */
function isNullLiteral(node) {
	/*
	 * Checking `node.value === null` does not guarantee that a literal is a null literal.
	 * When parsing values that cannot be represented in the current environment (e.g. unicode
	 * regexes in Node 4), `node.value` is set to `null` because it wouldn't be possible to
	 * set `node.value` to a unicode regex. To make sure a literal is actually `null`, check
	 * `node.regex` instead. Also see: https://github.com/eslint/eslint/issues/8020
	 */
	return (
		node.type === "Literal" &&
		node.value === null &&
		!node.regex &&
		!node.bigint
	);
}

/**
 * Checks whether or not a node is `null` or `undefined`.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is a `null` or `undefined`.
 * @public
 */
function isNullOrUndefined(node) {
	return (
		isNullLiteral(node) ||
		(node.type === "Identifier" && node.name === "undefined") ||
		(node.type === "UnaryExpression" && node.operator === "void")
	);
}

/**
 * Checks whether or not a node is callee.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is callee.
 */
function isCallee(node) {
	return node.parent.type === "CallExpression" && node.parent.callee === node;
}

/**
 * Returns the result of the string conversion applied to the evaluated value of the given expression node,
 * if it can be determined statically.
 *
 * This function returns a `string` value for all `Literal` nodes and simple `TemplateLiteral` nodes only.
 * In all other cases, this function returns `null`.
 * @param {ASTNode} node Expression node.
 * @returns {string|null} String value if it can be determined. Otherwise, `null`.
 */
function getStaticStringValue(node) {
	switch (node.type) {
		case "Literal":
			if (node.value === null) {
				if (isNullLiteral(node)) {
					return String(node.value); // "null"
				}
				if (node.regex) {
					return `/${node.regex.pattern}/${node.regex.flags}`;
				}
				if (node.bigint) {
					return node.bigint;
				}

				// Otherwise, this is an unknown literal. The function will return null.
			} else {
				return String(node.value);
			}
			break;
		case "TemplateLiteral":
			if (node.expressions.length === 0 && node.quasis.length === 1) {
				return node.quasis[0].value.cooked;
			}
			break;

		// no default
	}

	return null;
}

/**
 * Gets the property name of a given node.
 * The node can be a MemberExpression, a Property, or a MethodDefinition.
 *
 * If the name is dynamic, this returns `null`.
 *
 * For examples:
 *
 *     a.b           // => "b"
 *     a["b"]        // => "b"
 *     a['b']        // => "b"
 *     a[`b`]        // => "b"
 *     a[100]        // => "100"
 *     a[b]          // => null
 *     a["a" + "b"]  // => null
 *     a[tag`b`]     // => null
 *     a[`${b}`]     // => null
 *
 *     let a = {b: 1}            // => "b"
 *     let a = {["b"]: 1}        // => "b"
 *     let a = {['b']: 1}        // => "b"
 *     let a = {[`b`]: 1}        // => "b"
 *     let a = {[100]: 1}        // => "100"
 *     let a = {[b]: 1}          // => null
 *     let a = {["a" + "b"]: 1}  // => null
 *     let a = {[tag`b`]: 1}     // => null
 *     let a = {[`${b}`]: 1}     // => null
 * @param {ASTNode} node The node to get.
 * @returns {string|null} The property name if static. Otherwise, null.
 */
function getStaticPropertyName(node) {
	let prop;

	switch (node && node.type) {
		case "ChainExpression":
			return getStaticPropertyName(node.expression);

		case "Property":
		case "PropertyDefinition":
		case "MethodDefinition":
		case "TSPropertySignature":
		case "TSMethodSignature":
			prop = node.key;
			break;

		case "MemberExpression":
			prop = node.property;
			break;

		// no default
	}

	if (prop) {
		if (prop.type === "Identifier" && !node.computed) {
			return prop.name;
		}

		return getStaticStringValue(prop);
	}

	return null;
}

/**
 * Retrieve `ChainExpression#expression` value if the given node a `ChainExpression` node. Otherwise, pass through it.
 * @param {ASTNode} node The node to address.
 * @returns {ASTNode} The `ChainExpression#expression` value if the node is a `ChainExpression` node. Otherwise, the node.
 */
function skipChainExpression(node) {
	return node && node.type === "ChainExpression" ? node.expression : node;
}

/**
 * Check if the `actual` is an expected value.
 * @param {string} actual The string value to check.
 * @param {string | RegExp} expected The expected string value or pattern.
 * @returns {boolean} `true` if the `actual` is an expected value.
 */
function checkText(actual, expected) {
	return typeof expected === "string"
		? actual === expected
		: expected.test(actual);
}

/**
 * Check if a given node is an Identifier node with a given name.
 * @param {ASTNode} node The node to check.
 * @param {string | RegExp} name The expected name or the expected pattern of the object name.
 * @returns {boolean} `true` if the node is an Identifier node with the name.
 */
function isSpecificId(node, name) {
	return node.type === "Identifier" && checkText(node.name, name);
}

/**
 * Check if a given node is member access with a given object name and property name pair.
 * This is regardless of optional or not.
 * @param {ASTNode} node The node to check.
 * @param {string | RegExp | null} objectName The expected name or the expected pattern of the object name. If this is nullish, this method doesn't check object.
 * @param {string | RegExp | null} propertyName The expected name or the expected pattern of the property name. If this is nullish, this method doesn't check property.
 * @returns {boolean} `true` if the node is member access with the object name and property name pair.
 * The node is a `MemberExpression` or `ChainExpression`.
 */
function isSpecificMemberAccess(node, objectName, propertyName) {
	const checkNode = skipChainExpression(node);

	if (checkNode.type !== "MemberExpression") {
		return false;
	}

	if (objectName && !isSpecificId(checkNode.object, objectName)) {
		return false;
	}

	if (propertyName) {
		const actualPropertyName = getStaticPropertyName(checkNode);

		if (
			typeof actualPropertyName !== "string" ||
			!checkText(actualPropertyName, propertyName)
		) {
			return false;
		}
	}

	return true;
}

/**
 * Check if two literal nodes are the same value.
 * @param {ASTNode} left The Literal node to compare.
 * @param {ASTNode} right The other Literal node to compare.
 * @returns {boolean} `true` if the two literal nodes are the same value.
 */
function equalLiteralValue(left, right) {
	// RegExp literal.
	if (left.regex || right.regex) {
		return Boolean(
			left.regex &&
				right.regex &&
				left.regex.pattern === right.regex.pattern &&
				left.regex.flags === right.regex.flags,
		);
	}

	// BigInt literal.
	if (left.bigint || right.bigint) {
		return left.bigint === right.bigint;
	}

	return left.value === right.value;
}

/**
 * Check if two expressions reference the same value. For example:
 *     a = a
 *     a.b = a.b
 *     a[0] = a[0]
 *     a['b'] = a['b']
 * @param {ASTNode} left The left side of the comparison.
 * @param {ASTNode} right The right side of the comparison.
 * @param {boolean} [disableStaticComputedKey] Don't address `a.b` and `a["b"]` are the same if `true`. For backward compatibility.
 * @returns {boolean} `true` if both sides match and reference the same value.
 */
function isSameReference(left, right, disableStaticComputedKey = false) {
	if (left.type !== right.type) {
		// Handle `a.b` and `a?.b` are samely.
		if (left.type === "ChainExpression") {
			return isSameReference(
				left.expression,
				right,
				disableStaticComputedKey,
			);
		}
		if (right.type === "ChainExpression") {
			return isSameReference(
				left,
				right.expression,
				disableStaticComputedKey,
			);
		}

		return false;
	}

	switch (left.type) {
		case "Super":
		case "ThisExpression":
			return true;

		case "Identifier":
		case "PrivateIdentifier":
			return left.name === right.name;
		case "Literal":
			return equalLiteralValue(left, right);

		case "ChainExpression":
			return isSameReference(
				left.expression,
				right.expression,
				disableStaticComputedKey,
			);

		case "MemberExpression": {
			if (!disableStaticComputedKey) {
				const nameA = getStaticPropertyName(left);

				// x.y = x["y"]
				if (nameA !== null) {
					return (
						isSameReference(
							left.object,
							right.object,
							disableStaticComputedKey,
						) && nameA === getStaticPropertyName(right)
					);
				}
			}

			/*
			 * x[0] = x[0]
			 * x[y] = x[y]
			 * x.y = x.y
			 */
			return (
				left.computed === right.computed &&
				isSameReference(
					left.object,
					right.object,
					disableStaticComputedKey,
				) &&
				isSameReference(
					left.property,
					right.property,
					disableStaticComputedKey,
				)
			);
		}

		default:
			return false;
	}
}

/**
 * Checks whether or not a node is `Reflect.apply`.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is a `Reflect.apply`.
 */
function isReflectApply(node) {
	return isSpecificMemberAccess(node, "Reflect", "apply");
}

/**
 * Checks whether or not a node is `Array.from`.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is a `Array.from`.
 */
function isArrayFromMethod(node) {
	return isSpecificMemberAccess(node, arrayOrTypedArrayPattern, "from");
}

/**
 * Checks whether or not a node is a method which expects a function as a first argument, and `thisArg` as a second argument.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} Whether or not the node is a method which expects a function as a first argument, and `thisArg` as a second argument.
 */
function isMethodWhichHasThisArg(node) {
	return isSpecificMemberAccess(node, null, arrayMethodWithThisArgPattern);
}

/**
 * Creates the negate function of the given function.
 * @param {Function} f The function to negate.
 * @returns {Function} Negated function.
 */
function negate(f) {
	return token => !f(token);
}

/**
 * Checks whether or not a node has a `@this` tag in its comments.
 * @param {ASTNode} node A node to check.
 * @param {SourceCode} sourceCode A SourceCode instance to get comments.
 * @returns {boolean} Whether or not the node has a `@this` tag in its comments.
 */
function hasJSDocThisTag(node, sourceCode) {
	const jsdocComment = sourceCode.getJSDocComment(node);

	if (jsdocComment && thisTagPattern.test(jsdocComment.value)) {
		return true;
	}

	// Checks `@this` in its leading comments for callbacks,
	// because callbacks don't have its JSDoc comment.
	// e.g.
	//     sinon.test(/* @this sinon.Sandbox */function() { this.spy(); });
	return sourceCode
		.getCommentsBefore(node)
		.some(comment => thisTagPattern.test(comment.value));
}

/**
 * Determines if a node is surrounded by parentheses.
 * @param {SourceCode} sourceCode The ESLint source code object
 * @param {ASTNode} node The node to be checked.
 * @returns {boolean} True if the node is parenthesised.
 * @private
 */
function isParenthesised(sourceCode, node) {
	const previousToken = sourceCode.getTokenBefore(node),
		nextToken = sourceCode.getTokenAfter(node);

	return (
		Boolean(previousToken && nextToken) &&
		previousToken.value === "(" &&
		previousToken.range[1] <= node.range[0] &&
		nextToken.value === ")" &&
		nextToken.range[0] >= node.range[1]
	);
}

/**
 * Checks if the given token is a `=` token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a `=` token.
 */
function isEqToken(token) {
	return token.value === "=" && token.type === "Punctuator";
}

/**
 * Checks if the given token is an arrow token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is an arrow token.
 */
function isArrowToken(token) {
	return token.value === "=>" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a comma token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a comma token.
 */
function isCommaToken(token) {
	return token.value === "," && token.type === "Punctuator";
}

/**
 * Checks if the given token is a dot token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a dot token.
 */
function isDotToken(token) {
	return token.value === "." && token.type === "Punctuator";
}

/**
 * Checks if the given token is a `?.` token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a `?.` token.
 */
function isQuestionDotToken(token) {
	return token.value === "?." && token.type === "Punctuator";
}

/**
 * Checks if the given token is a semicolon token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a semicolon token.
 */
function isSemicolonToken(token) {
	return token.value === ";" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a colon token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a colon token.
 */
function isColonToken(token) {
	return token.value === ":" && token.type === "Punctuator";
}

/**
 * Checks if the given token is an opening parenthesis token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is an opening parenthesis token.
 */
function isOpeningParenToken(token) {
	return token.value === "(" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a closing parenthesis token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a closing parenthesis token.
 */
function isClosingParenToken(token) {
	return token.value === ")" && token.type === "Punctuator";
}

/**
 * Checks if the given token is an opening square bracket token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is an opening square bracket token.
 */
function isOpeningBracketToken(token) {
	return token.value === "[" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a closing square bracket token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a closing square bracket token.
 */
function isClosingBracketToken(token) {
	return token.value === "]" && token.type === "Punctuator";
}

/**
 * Checks if the given token is an opening brace token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is an opening brace token.
 */
function isOpeningBraceToken(token) {
	return token.value === "{" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a closing brace token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a closing brace token.
 */
function isClosingBraceToken(token) {
	return token.value === "}" && token.type === "Punctuator";
}

/**
 * Checks if the given token is a comment token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a comment token.
 */
function isCommentToken(token) {
	return (
		token.type === "Line" ||
		token.type === "Block" ||
		token.type === "Shebang"
	);
}

/**
 * Checks if the given token is a keyword token or not.
 * @param {Token} token The token to check.
 * @returns {boolean} `true` if the token is a keyword token.
 */
function isKeywordToken(token) {
	return token.type === "Keyword";
}

/**
 * Gets the `(` token of the given function node.
 * @param {ASTNode} node The function node to get.
 * @param {SourceCode} sourceCode The source code object to get tokens.
 * @returns {Token} `(` token.
 */
function getOpeningParenOfParams(node, sourceCode) {
	// If the node is an arrow function and doesn't have parens, this returns the identifier of the first param.
	if (node.type === "ArrowFunctionExpression" && node.params.length === 1) {
		const argToken = sourceCode.getFirstToken(node.params[0]);
		const maybeParenToken = sourceCode.getTokenBefore(argToken);

		return isOpeningParenToken(maybeParenToken)
			? maybeParenToken
			: argToken;
	}

	// Otherwise, returns paren.
	return node.id
		? sourceCode.getTokenAfter(node.id, isOpeningParenToken)
		: sourceCode.getFirstToken(node, isOpeningParenToken);
}

/**
 * Checks whether or not the tokens of two given nodes are same.
 * @param {ASTNode} left A node 1 to compare.
 * @param {ASTNode} right A node 2 to compare.
 * @param {SourceCode} sourceCode The ESLint source code object.
 * @returns {boolean} the source code for the given node.
 */
function equalTokens(left, right, sourceCode) {
	const tokensL = sourceCode.getTokens(left);
	const tokensR = sourceCode.getTokens(right);

	if (tokensL.length !== tokensR.length) {
		return false;
	}
	for (let i = 0; i < tokensL.length; ++i) {
		if (
			tokensL[i].type !== tokensR[i].type ||
			tokensL[i].value !== tokensR[i].value
		) {
			return false;
		}
	}

	return true;
}

/**
 * Check if the given node is a true logical expression or not.
 *
 * The three binary expressions logical-or (`||`), logical-and (`&&`), and
 * coalesce (`??`) are known as `ShortCircuitExpression`.
 * But ESTree represents those by `LogicalExpression` node.
 *
 * This function rejects coalesce expressions of `LogicalExpression` node.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is `&&` or `||`.
 * @see https://tc39.es/ecma262/#prod-ShortCircuitExpression
 */
function isLogicalExpression(node) {
	return (
		node.type === "LogicalExpression" &&
		(node.operator === "&&" || node.operator === "||")
	);
}

/**
 * Check if the given node is a nullish coalescing expression or not.
 *
 * The three binary expressions logical-or (`||`), logical-and (`&&`), and
 * coalesce (`??`) are known as `ShortCircuitExpression`.
 * But ESTree represents those by `LogicalExpression` node.
 *
 * This function finds only coalesce expressions of `LogicalExpression` node.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is `??`.
 */
function isCoalesceExpression(node) {
	return node.type === "LogicalExpression" && node.operator === "??";
}

/**
 * Check if given two nodes are the pair of a logical expression and a coalesce expression.
 * @param {ASTNode} left A node to check.
 * @param {ASTNode} right Another node to check.
 * @returns {boolean} `true` if the two nodes are the pair of a logical expression and a coalesce expression.
 */
function isMixedLogicalAndCoalesceExpressions(left, right) {
	return (
		(isLogicalExpression(left) && isCoalesceExpression(right)) ||
		(isCoalesceExpression(left) && isLogicalExpression(right))
	);
}

/**
 * Checks if the given operator is a logical assignment operator.
 * @param {string} operator The operator to check.
 * @returns {boolean} `true` if the operator is a logical assignment operator.
 */
function isLogicalAssignmentOperator(operator) {
	return LOGICAL_ASSIGNMENT_OPERATORS.has(operator);
}

/**
 * Get the colon token of the given SwitchCase node.
 * @param {ASTNode} node The SwitchCase node to get.
 * @param {SourceCode} sourceCode The source code object to get tokens.
 * @returns {Token} The colon token of the node.
 */
function getSwitchCaseColonToken(node, sourceCode) {
	if (node.test) {
		return sourceCode.getTokenAfter(node.test, isColonToken);
	}
	return sourceCode.getFirstToken(node, 1);
}

/**
 * Gets ESM module export name represented by the given node.
 * @param {ASTNode} node `Identifier` or string `Literal` node in a position
 * that represents a module export name:
 *   - `ImportSpecifier#imported`
 *   - `ExportSpecifier#local` (if it is a re-export from another module)
 *   - `ExportSpecifier#exported`
 *   - `ExportAllDeclaration#exported`
 * @returns {string} The module export name.
 */
function getModuleExportName(node) {
	if (node.type === "Identifier") {
		return node.name;
	}

	// string literal
	return node.value;
}

/**
 * Returns literal's value converted to the Boolean type
 * @param {ASTNode} node any `Literal` node
 * @returns {boolean | null} `true` when node is truthy, `false` when node is falsy,
 *  `null` when it cannot be determined.
 */
function getBooleanValue(node) {
	if (node.value === null) {
		/*
		 * it might be a null literal or bigint/regex literal in unsupported environments .
		 * https://github.com/estree/estree/blob/14df8a024956ea289bd55b9c2226a1d5b8a473ee/es5.md#regexpliteral
		 * https://github.com/estree/estree/blob/14df8a024956ea289bd55b9c2226a1d5b8a473ee/es2020.md#bigintliteral
		 */

		if (node.raw === "null") {
			return false;
		}

		// regex is always truthy
		if (typeof node.regex === "object") {
			return true;
		}

		return null;
	}

	return !!node.value;
}

/**
 * Checks if a branch node of LogicalExpression short circuits the whole condition
 * @param {ASTNode} node The branch of main condition which needs to be checked
 * @param {string} operator The operator of the main LogicalExpression.
 * @returns {boolean} true when condition short circuits whole condition
 */
function isLogicalIdentity(node, operator) {
	switch (node.type) {
		case "Literal":
			return (
				(operator === "||" && getBooleanValue(node) === true) ||
				(operator === "&&" && getBooleanValue(node) === false)
			);

		case "UnaryExpression":
			return operator === "&&" && node.operator === "void";

		case "LogicalExpression":
			/*
			 * handles `a && false || b`
			 * `false` is an identity element of `&&` but not `||`
			 */
			return (
				operator === node.operator &&
				(isLogicalIdentity(node.left, operator) ||
					isLogicalIdentity(node.right, operator))
			);

		case "AssignmentExpression":
			return (
				["||=", "&&="].includes(node.operator) &&
				operator === node.operator.slice(0, -1) &&
				isLogicalIdentity(node.right, operator)
			);

		// no default
	}
	return false;
}

/**
 * Checks if an identifier is a reference to a global variable.
 * @param {Scope} scope The scope in which the identifier is referenced.
 * @param {ASTNode} node An identifier node to check.
 * @returns {boolean} `true` if the identifier is a reference to a global variable.
 */
function isReferenceToGlobalVariable(scope, node) {
	const reference = scope.references.find(ref => ref.identifier === node);

	return Boolean(
		reference &&
			reference.resolved &&
			reference.resolved.scope.type === "global" &&
			reference.resolved.defs.length === 0,
	);
}

/**
 * Checks if a  node has a constant truthiness value.
 * @param {Scope} scope Scope in which the node appears.
 * @param {ASTNode} node The AST node to check.
 * @param {boolean} inBooleanPosition `true` if checking the test of a
 * condition. `false` in all other cases. When `false`, checks if -- for
 * both string and number -- if coerced to that type, the value will
 * be constant.
 * @returns {boolean} true when node's truthiness is constant
 * @private
 */
function isConstant(scope, node, inBooleanPosition) {
	// node.elements can return null values in the case of sparse arrays ex. [,]
	if (!node) {
		return true;
	}
	switch (node.type) {
		case "Literal":
		case "ArrowFunctionExpression":
		case "FunctionExpression":
			return true;
		case "ClassExpression":
		case "ObjectExpression":
			/**
			 * In theory objects like:
			 *
			 * `{toString: () => a}`
			 * `{valueOf: () => a}`
			 *
			 * Or a classes like:
			 *
			 * `class { static toString() { return a } }`
			 * `class { static valueOf() { return a } }`
			 *
			 * Are not constant verifiably when `inBooleanPosition` is
			 * false, but it's an edge case we've opted not to handle.
			 */
			return true;
		case "TemplateLiteral":
			return (
				(inBooleanPosition &&
					node.quasis.some(quasi => quasi.value.cooked.length)) ||
				node.expressions.every(exp => isConstant(scope, exp, false))
			);

		case "ArrayExpression": {
			if (!inBooleanPosition) {
				return node.elements.every(element =>
					isConstant(scope, element, false),
				);
			}
			return true;
		}

		case "UnaryExpression":
			if (
				node.operator === "void" ||
				(node.operator === "typeof" && inBooleanPosition)
			) {
				return true;
			}

			if (node.operator === "!") {
				return isConstant(scope, node.argument, true);
			}

			return isConstant(scope, node.argument, false);

		case "BinaryExpression":
			return (
				isConstant(scope, node.left, false) &&
				isConstant(scope, node.right, false) &&
				node.operator !== "in"
			);

		case "LogicalExpression": {
			const isLeftConstant = isConstant(
				scope,
				node.left,
				inBooleanPosition,
			);
			const isRightConstant = isConstant(
				scope,
				node.right,
				inBooleanPosition,
			);
			const isLeftShortCircuit =
				isLeftConstant && isLogicalIdentity(node.left, node.operator);
			const isRightShortCircuit =
				inBooleanPosition &&
				isRightConstant &&
				isLogicalIdentity(node.right, node.operator);

			return (
				(isLeftConstant && isRightConstant) ||
				isLeftShortCircuit ||
				isRightShortCircuit
			);
		}
		case "NewExpression":
			return inBooleanPosition;
		case "AssignmentExpression":
			if (node.operator === "=") {
				return isConstant(scope, node.right, inBooleanPosition);
			}

			if (["||=", "&&="].includes(node.operator) && inBooleanPosition) {
				return isLogicalIdentity(
					node.right,
					node.operator.slice(0, -1),
				);
			}

			return false;

		case "SequenceExpression":
			return isConstant(
				scope,
				node.expressions.at(-1),
				inBooleanPosition,
			);
		case "SpreadElement":
			return isConstant(scope, node.argument, inBooleanPosition);
		case "CallExpression":
			if (
				node.callee.type === "Identifier" &&
				node.callee.name === "Boolean"
			) {
				if (
					node.arguments.length === 0 ||
					isConstant(scope, node.arguments[0], true)
				) {
					return isReferenceToGlobalVariable(scope, node.callee);
				}
			}
			return false;
		case "Identifier":
			return (
				node.name === "undefined" &&
				isReferenceToGlobalVariable(scope, node)
			);

		// no default
	}
	return false;
}

/**
 * Checks whether a node is an ExpressionStatement at the top level of a file, function body, or TypeScript module block.
 * A top-level ExpressionStatement node is a directive if it contains a single unparenthesized
 * string literal and if it occurs either as the first sibling or immediately after another
 * directive.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} Whether or not the node is an ExpressionStatement at the top level of a
 * file, function body, or TypeScript module block.
 */
function isTopLevelExpressionStatement(node) {
	if (node.type !== "ExpressionStatement") {
		return false;
	}
	const parent = node.parent;

	return (
		parent.type === "Program" ||
		parent.type === "TSModuleBlock" ||
		(parent.type === "BlockStatement" && isFunction(parent.parent))
	);
}

/**
 * Check whether the given node is a part of a directive prologue or not.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is a part of directive prologue.
 */
function isDirective(node) {
	return (
		node.type === "ExpressionStatement" &&
		typeof node.directive === "string"
	);
}

/**
 * Tests if a node appears at the beginning of an ancestor ExpressionStatement node.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} Whether the node appears at the beginning of an ancestor ExpressionStatement node.
 */
function isStartOfExpressionStatement(node) {
	const start = node.range[0];
	let ancestor = node;

	while ((ancestor = ancestor.parent) && ancestor.range[0] === start) {
		if (ancestor.type === "ExpressionStatement") {
			return true;
		}
	}
	return false;
}

/**
 * Determines whether an opening parenthesis `(`, bracket `[` or backtick ``` ` ``` needs to be preceded by a semicolon.
 * This opening parenthesis or bracket should be at the start of an `ExpressionStatement`, a `MethodDefinition` or at
 * the start of the body of an `ArrowFunctionExpression`.
 * @type {(sourceCode: SourceCode, node: ASTNode) => boolean}
 * @param {SourceCode} sourceCode The source code object.
 * @param {ASTNode} node A node at the position where an opening parenthesis or bracket will be inserted.
 * @returns {boolean} Whether a semicolon is required before the opening parenthesis or bracket.
 */
let needsPrecedingSemicolon;

{
	const BREAK_OR_CONTINUE = new Set(["BreakStatement", "ContinueStatement"]);

	// Declaration types that cannot be continued by a punctuator when ending with a string Literal that is a direct child.
	const DECLARATIONS = new Set([
		"ExportAllDeclaration",
		"ExportNamedDeclaration",
		"ImportDeclaration",
	]);

	const IDENTIFIER_OR_KEYWORD = new Set(["Identifier", "Keyword"]);

	// Keywords that can immediately precede an ExpressionStatement node, mapped to the their node types.
	const NODE_TYPES_BY_KEYWORD = {
		__proto__: null,
		break: "BreakStatement",
		continue: "ContinueStatement",
		debugger: "DebuggerStatement",
		do: "DoWhileStatement",
		else: "IfStatement",
		return: "ReturnStatement",
		yield: "YieldExpression",
	};

	/*
	 * Before an opening parenthesis, postfix `++` and `--` always trigger ASI;
	 * the tokens `:`, `;`, `{` and `=>` don't expect a semicolon, as that would count as an empty statement.
	 */
	const PUNCTUATORS = new Set([":", ";", "{", "=>", "++", "--"]);

	/*
	 * Statements that can contain an `ExpressionStatement` after a closing parenthesis.
	 * DoWhileStatement is an exception in that it always triggers ASI after the closing parenthesis.
	 */
	const STATEMENTS = new Set([
		"DoWhileStatement",
		"ForInStatement",
		"ForOfStatement",
		"ForStatement",
		"IfStatement",
		"WhileStatement",
		"WithStatement",
	]);

	const TS_TYPE_NODE_TYPES = new Set([
		"TSAsExpression",
		"TSSatisfiesExpression",
		"TSTypeAliasDeclaration",
		"TSTypeAnnotation",
	]);

	/**
	 * Determines whether a specified node is inside a TypeScript type context.
	 * @param {ASTNode} node The node to check.
	 * @returns {boolean} Whether the node is inside a TypeScript type context.
	 */
	function isInType(node) {
		for (let currNode = node; ; ) {
			const { parent } = currNode;
			if (!parent) {
				break;
			}
			if (
				TS_TYPE_NODE_TYPES.has(parent.type) &&
				currNode === parent.typeAnnotation
			) {
				return true;
			}
			currNode = parent;
		}
		return false;
	}

	needsPrecedingSemicolon = function (sourceCode, node) {
		const prevToken = sourceCode.getTokenBefore(node);

		if (
			!prevToken ||
			(prevToken.type === "Punctuator" &&
				PUNCTUATORS.has(prevToken.value))
		) {
			return false;
		}

		const prevNode = sourceCode.getNodeByRangeIndex(prevToken.range[0]);

		if (
			prevNode.type === "TSDeclareFunction" ||
			prevNode.parent.type === "TSImportEqualsDeclaration" ||
			prevNode.parent.parent?.type === "TSImportEqualsDeclaration" ||
			TS_TYPE_NODE_TYPES.has(prevNode.type) ||
			isInType(prevNode)
		) {
			return false;
		}

		if (isClosingParenToken(prevToken)) {
			return !STATEMENTS.has(prevNode.type);
		}

		if (isClosingBraceToken(prevToken)) {
			return (
				(prevNode.type === "BlockStatement" &&
					prevNode.parent.type === "FunctionExpression" &&
					prevNode.parent.parent.type !== "MethodDefinition") ||
				(prevNode.type === "ClassBody" &&
					prevNode.parent.type === "ClassExpression") ||
				prevNode.type === "ObjectExpression"
			);
		}

		if (IDENTIFIER_OR_KEYWORD.has(prevToken.type)) {
			if (
				prevNode.parent.type === "VariableDeclarator" &&
				!prevNode.parent.init
			) {
				return false;
			}
			if (BREAK_OR_CONTINUE.has(prevNode.parent.type)) {
				return false;
			}

			const keyword = prevToken.value;
			const nodeType = NODE_TYPES_BY_KEYWORD[keyword];

			return prevNode.type !== nodeType;
		}

		if (prevToken.type === "String") {
			return !DECLARATIONS.has(prevNode.parent.type);
		}

		return true;
	};
}

/**
 * Checks if a node is used as an import attribute key, either in a static or dynamic import.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} Whether the node is used as an import attribute key.
 */
function isImportAttributeKey(node) {
	const { parent } = node;

	// static import/re-export
	if (parent.type === "ImportAttribute" && parent.key === node) {
		return true;
	}

	// dynamic import
	if (
		parent.type === "Property" &&
		!parent.computed &&
		(parent.key === node ||
			(parent.value === node && parent.shorthand && !parent.method)) &&
		parent.parent.type === "ObjectExpression"
	) {
		const objectExpression = parent.parent;
		const objectExpressionParent = objectExpression.parent;

		if (
			objectExpressionParent.type === "ImportExpression" &&
			objectExpressionParent.options === objectExpression
		) {
			return true;
		}

		// nested key
		if (
			objectExpressionParent.type === "Property" &&
			objectExpressionParent.value === objectExpression
		) {
			return isImportAttributeKey(objectExpressionParent.key);
		}
	}

	return false;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = {
	COMMENTS_IGNORE_PATTERN,
	LINEBREAKS,
	LINEBREAK_MATCHER: lineBreakPattern,
	SHEBANG_MATCHER: shebangPattern,
	STATEMENT_LIST_PARENTS,
	ECMASCRIPT_GLOBALS,

	/**
	 * Determines whether two adjacent tokens are on the same line.
	 * @param {Object} left The left token object.
	 * @param {Object} right The right token object.
	 * @returns {boolean} Whether or not the tokens are on the same line.
	 * @public
	 */
	isTokenOnSameLine(left, right) {
		return left.loc.end.line === right.loc.start.line;
	},

	isNullOrUndefined,
	isCallee,
	isES5Constructor,
	getUpperFunction,
	isFunction,
	isLoop,
	isInLoop,
	isArrayFromMethod,
	isParenthesised,
	createGlobalLinebreakMatcher,
	equalTokens,

	isArrowToken,
	isClosingBraceToken,
	isClosingBracketToken,
	isClosingParenToken,
	isColonToken,
	isCommaToken,
	isCommentToken,
	isDotToken,
	isQuestionDotToken,
	isKeywordToken,
	isNotClosingBraceToken: negate(isClosingBraceToken),
	isNotClosingBracketToken: negate(isClosingBracketToken),
	isNotClosingParenToken: negate(isClosingParenToken),
	isNotColonToken: negate(isColonToken),
	isNotCommaToken: negate(isCommaToken),
	isNotDotToken: negate(isDotToken),
	isNotQuestionDotToken: negate(isQuestionDotToken),
	isNotOpeningBraceToken: negate(isOpeningBraceToken),
	isNotOpeningBracketToken: negate(isOpeningBracketToken),
	isNotOpeningParenToken: negate(isOpeningParenToken),
	isNotSemicolonToken: negate(isSemicolonToken),
	isOpeningBraceToken,
	isOpeningBracketToken,
	isOpeningParenToken,
	isSemicolonToken,
	isEqToken,

	/**
	 * Checks whether or not a given node is a string literal.
	 * @param {ASTNode} node A node to check.
	 * @returns {boolean} `true` if the node is a string literal.
	 */
	isStringLiteral(node) {
		return (
			(node.type === "Literal" && typeof node.value === "string") ||
			node.type === "TemplateLiteral"
		);
	},

	/**
	 * Checks whether a given node is a breakable statement or not.
	 * The node is breakable if the node is one of the following type:
	 *
	 * - DoWhileStatement
	 * - ForInStatement
	 * - ForOfStatement
	 * - ForStatement
	 * - SwitchStatement
	 * - WhileStatement
	 * @param {ASTNode} node A node to check.
	 * @returns {boolean} `true` if the node is breakable.
	 */
	isBreakableStatement(node) {
		return breakableTypePattern.test(node.type);
	},

	/**
	 * Gets references which are non initializer and writable.
	 * @param {Reference[]} references An array of references.
	 * @returns {Reference[]} An array of only references which are non initializer and writable.
	 * @public
	 */
	getModifyingReferences(references) {
		return references.filter(isModifyingReference);
	},

	/**
	 * Validate that a string passed in is surrounded by the specified character
	 * @param {string} val The text to check.
	 * @param {string} character The character to see if it's surrounded by.
	 * @returns {boolean} True if the text is surrounded by the character, false if not.
	 * @private
	 */
	isSurroundedBy(val, character) {
		return val[0] === character && val.at(-1) === character;
	},

	/**
	 * Returns whether the provided node is an ESLint directive comment or not
	 * @param {Line|Block} node The comment token to be checked
	 * @returns {boolean} `true` if the node is an ESLint directive comment
	 */
	isDirectiveComment(node) {
		const comment = node.value.trim();

		return (
			(node.type === "Line" && comment.startsWith("eslint-")) ||
			(node.type === "Block" && ESLINT_DIRECTIVE_PATTERN.test(comment))
		);
	},

	/**
	 * Gets the trailing statement of a given node.
	 *
	 *     if (code)
	 *         consequent;
	 *
	 * When taking this `IfStatement`, returns `consequent;` statement.
	 * @param {ASTNode} A node to get.
	 * @returns {ASTNode|null} The trailing statement's node.
	 */
	getTrailingStatement: esutils.ast.trailingStatement,

	/**
	 * Finds the variable by a given name in a given scope and its upper scopes.
	 * @param {eslint-scope.Scope} initScope A scope to start find.
	 * @param {string} name A variable name to find.
	 * @returns {eslint-scope.Variable|null} A found variable or `null`.
	 */
	getVariableByName(initScope, name) {
		let scope = initScope;

		while (scope) {
			const variable = scope.set.get(name);

			if (variable) {
				return variable;
			}

			scope = scope.upper;
		}

		return null;
	},

	/**
	 * Checks whether or not a given function node is the default `this` binding.
	 *
	 * First, this checks the node:
	 *
	 * - The given node is not in `PropertyDefinition#value` position.
	 * - The given node is not `StaticBlock`.
	 * - The function name does not start with uppercase. It's a convention to capitalize the names
	 *   of constructor functions. This check is not performed if `capIsConstructor` is set to `false`.
	 * - The function does not have a JSDoc comment that has a @this tag.
	 *
	 * Next, this checks the location of the node.
	 * If the location is below, this judges `this` is valid.
	 *
	 * - The location is not on an object literal.
	 * - The location is not assigned to a variable which starts with an uppercase letter. Applies to anonymous
	 *   functions only, as the name of the variable is considered to be the name of the function in this case.
	 *   This check is not performed if `capIsConstructor` is set to `false`.
	 * - The location is not on an ES2015 class.
	 * - Its `bind`/`call`/`apply` method is not called directly.
	 * - The function is not a callback of array methods (such as `.forEach()`) if `thisArg` is given.
	 * @param {ASTNode} node A function node to check. It also can be an implicit function, like `StaticBlock`
	 * or any expression that is `PropertyDefinition#value` node.
	 * @param {SourceCode} sourceCode A SourceCode instance to get comments.
	 * @param {boolean} [capIsConstructor = true] `false` disables the assumption that functions which name starts
	 * with an uppercase or are assigned to a variable which name starts with an uppercase are constructors.
	 * @returns {boolean} The function node is the default `this` binding.
	 */
	isDefaultThisBinding(node, sourceCode, { capIsConstructor = true } = {}) {
		/*
		 * Class field initializers are implicit functions, but ESTree doesn't have the AST node of field initializers.
		 * Therefore, A expression node at `PropertyDefinition#value` is a function.
		 * In this case, `this` is always not default binding.
		 */
		if (
			node.parent.type === "PropertyDefinition" &&
			node.parent.value === node
		) {
			return false;
		}

		// Class static blocks are implicit functions. In this case, `this` is always not default binding.
		if (node.type === "StaticBlock") {
			return false;
		}

		// Check if the function has a parameter named `this`.
		if (
			(node.type === "FunctionDeclaration" ||
				node.type === "FunctionExpression") &&
			node.params.some(
				param => param.type === "Identifier" && param.name === "this",
			)
		) {
			return false;
		}

		if (
			(capIsConstructor && isES5Constructor(node)) ||
			hasJSDocThisTag(node, sourceCode)
		) {
			return false;
		}
		const isAnonymous = node.id === null;
		let currentNode = node;

		while (currentNode) {
			const parent = currentNode.parent;

			switch (parent.type) {
				/*
				 * Looks up the destination.
				 * e.g., obj.foo = nativeFoo || function foo() { ... };
				 */
				case "LogicalExpression":
				case "ConditionalExpression":
				case "ChainExpression":
					currentNode = parent;
					break;

				/*
				 * If the upper function is IIFE, checks the destination of the return value.
				 * e.g.
				 *   obj.foo = (function() {
				 *     // setup...
				 *     return function foo() { ... };
				 *   })();
				 *   obj.foo = (() =>
				 *     function foo() { ... }
				 *   )();
				 */
				case "ReturnStatement": {
					const func = getUpperFunction(parent);

					if (func === null || !isCallee(func)) {
						return true;
					}
					currentNode = func.parent;
					break;
				}
				case "ArrowFunctionExpression":
					if (currentNode !== parent.body || !isCallee(parent)) {
						return true;
					}
					currentNode = parent.parent;
					break;

				/*
				 * e.g.
				 *   var obj = { foo() { ... } };
				 *   var obj = { foo: function() { ... } };
				 *   class A { constructor() { ... } }
				 *   class A { foo() { ... } }
				 *   class A { get foo() { ... } }
				 *   class A { set foo() { ... } }
				 *   class A { static foo() { ... } }
				 *   class A { foo = function() { ... } }
				 */
				case "Property":
				case "PropertyDefinition":
				case "MethodDefinition":
					return parent.value !== currentNode;

				/*
				 * e.g.
				 *   obj.foo = function foo() { ... };
				 *   Foo = function() { ... };
				 *   [obj.foo = function foo() { ... }] = a;
				 *   [Foo = function() { ... }] = a;
				 */
				case "AssignmentExpression":
				case "AssignmentPattern":
					if (parent.left.type === "MemberExpression") {
						return false;
					}
					if (
						capIsConstructor &&
						isAnonymous &&
						parent.left.type === "Identifier" &&
						startsWithUpperCase(parent.left.name)
					) {
						return false;
					}
					return true;

				/*
				 * e.g.
				 *   var Foo = function() { ... };
				 */
				case "VariableDeclarator":
					return !(
						capIsConstructor &&
						isAnonymous &&
						parent.init === currentNode &&
						parent.id.type === "Identifier" &&
						startsWithUpperCase(parent.id.name)
					);

				/*
				 * e.g.
				 *   var foo = function foo() { ... }.bind(obj);
				 *   (function foo() { ... }).call(obj);
				 *   (function foo() { ... }).apply(obj, []);
				 */
				case "MemberExpression":
					if (
						parent.object === currentNode &&
						isSpecificMemberAccess(
							parent,
							null,
							bindOrCallOrApplyPattern,
						)
					) {
						const maybeCalleeNode =
							parent.parent.type === "ChainExpression"
								? parent.parent
								: parent;

						return !(
							isCallee(maybeCalleeNode) &&
							maybeCalleeNode.parent.arguments.length >= 1 &&
							!isNullOrUndefined(
								maybeCalleeNode.parent.arguments[0],
							)
						);
					}
					return true;

				/*
				 * e.g.
				 *   Reflect.apply(function() {}, obj, []);
				 *   Array.from([], function() {}, obj);
				 *   list.forEach(function() {}, obj);
				 */
				case "CallExpression":
					if (isReflectApply(parent.callee)) {
						return (
							parent.arguments.length !== 3 ||
							parent.arguments[0] !== currentNode ||
							isNullOrUndefined(parent.arguments[1])
						);
					}
					if (isArrayFromMethod(parent.callee)) {
						return (
							parent.arguments.length !== 3 ||
							parent.arguments[1] !== currentNode ||
							isNullOrUndefined(parent.arguments[2])
						);
					}
					if (isMethodWhichHasThisArg(parent.callee)) {
						return (
							parent.arguments.length !== 2 ||
							parent.arguments[0] !== currentNode ||
							isNullOrUndefined(parent.arguments[1])
						);
					}
					return true;

				// Otherwise `this` is default.
				default:
					return true;
			}
		}

		/* c8 ignore next */
		return true;
	},

	/**
	 * Get the precedence level based on the node type
	 * @param {ASTNode} node node to evaluate
	 * @returns {number} precedence level
	 * @private
	 */
	getPrecedence(node) {
		switch (node.type) {
			case "SequenceExpression":
				return 0;

			case "AssignmentExpression":
			case "ArrowFunctionExpression":
			case "YieldExpression":
				return 1;

			case "ConditionalExpression":
				return 3;

			case "LogicalExpression":
				switch (node.operator) {
					case "||":
					case "??":
						return 4;
					case "&&":
						return 5;

					// no default
				}

			/* falls through */

			case "BinaryExpression":
				switch (node.operator) {
					case "|":
						return 6;
					case "^":
						return 7;
					case "&":
						return 8;
					case "==":
					case "!=":
					case "===":
					case "!==":
						return 9;
					case "<":
					case "<=":
					case ">":
					case ">=":
					case "in":
					case "instanceof":
						return 10;
					case "<<":
					case ">>":
					case ">>>":
						return 11;
					case "+":
					case "-":
						return 12;
					case "*":
					case "/":
					case "%":
						return 13;
					case "**":
						return 15;

					// no default
				}

			/* falls through */

			case "UnaryExpression":
			case "AwaitExpression":
				return 16;

			case "UpdateExpression":
				return 17;

			case "CallExpression":
			case "ChainExpression":
			case "ImportExpression":
				return 18;

			case "NewExpression":
				return 19;

			default:
				if (node.type in eslintVisitorKeys) {
					return 20;
				}

				/*
				 * if the node is not a standard node that we know about, then assume it has the lowest precedence
				 * this will mean that rules will wrap unknown nodes in parentheses where applicable instead of
				 * unwrapping them and potentially changing the meaning of the code or introducing a syntax error.
				 */
				return -1;
		}
	},

	/**
	 * Checks whether the given node is an empty block node or not.
	 * @param {ASTNode|null} node The node to check.
	 * @returns {boolean} `true` if the node is an empty block.
	 */
	isEmptyBlock(node) {
		return Boolean(
			node && node.type === "BlockStatement" && node.body.length === 0,
		);
	},

	/**
	 * Checks whether the given node is an empty function node or not.
	 * @param {ASTNode|null} node The node to check.
	 * @returns {boolean} `true` if the node is an empty function.
	 */
	isEmptyFunction(node) {
		return isFunction(node) && module.exports.isEmptyBlock(node.body);
	},

	/**
	 * Get directives from directive prologue of a Program or Function node.
	 * @param {ASTNode} node The node to check.
	 * @returns {ASTNode[]} The directives found in the directive prologue.
	 */
	getDirectivePrologue(node) {
		const directives = [];

		// Directive prologues only occur at the top of files or functions.
		if (
			node.type === "Program" ||
			node.type === "FunctionDeclaration" ||
			node.type === "FunctionExpression" ||
			/*
			 * Do not check arrow functions with implicit return.
			 * `() => "use strict";` returns the string `"use strict"`.
			 */
			(node.type === "ArrowFunctionExpression" &&
				node.body.type === "BlockStatement")
		) {
			const statements =
				node.type === "Program" ? node.body : node.body.body;

			for (const statement of statements) {
				if (
					statement.type === "ExpressionStatement" &&
					statement.expression.type === "Literal"
				) {
					directives.push(statement);
				} else {
					break;
				}
			}
		}

		return directives;
	},

	/**
	 * Determines whether this node is a decimal integer literal. If a node is a decimal integer literal, a dot added
	 * after the node will be parsed as a decimal point, rather than a property-access dot.
	 * @param {ASTNode} node The node to check.
	 * @returns {boolean} `true` if this node is a decimal integer.
	 * @example
	 *
	 * 0         // true
	 * 5         // true
	 * 50        // true
	 * 5_000     // true
	 * 1_234_56  // true
	 * 08        // true
	 * 0192      // true
	 * 5.        // false
	 * .5        // false
	 * 5.0       // false
	 * 5.00_00   // false
	 * 05        // false
	 * 0x5       // false
	 * 0b101     // false
	 * 0b11_01   // false
	 * 0o5       // false
	 * 5e0       // false
	 * 5e1_000   // false
	 * 5n        // false
	 * 1_000n    // false
	 * "5"       // false
	 *
	 */
	isDecimalInteger(node) {
		return (
			node.type === "Literal" &&
			typeof node.value === "number" &&
			DECIMAL_INTEGER_PATTERN.test(node.raw)
		);
	},

	/**
	 * Determines whether this token is a decimal integer numeric token.
	 * This is similar to isDecimalInteger(), but for tokens.
	 * @param {Token} token The token to check.
	 * @returns {boolean} `true` if this token is a decimal integer.
	 */
	isDecimalIntegerNumericToken(token) {
		return (
			token.type === "Numeric" &&
			DECIMAL_INTEGER_PATTERN.test(token.value)
		);
	},

	/**
	 * Gets the name and kind of the given function node.
	 *
	 * - `function foo() {}`  .................... `function 'foo'`
	 * - `(function foo() {})`  .................. `function 'foo'`
	 * - `(function() {})`  ...................... `function`
	 * - `function* foo() {}`  ................... `generator function 'foo'`
	 * - `(function* foo() {})`  ................. `generator function 'foo'`
	 * - `(function*() {})`  ..................... `generator function`
	 * - `() => {}`  ............................. `arrow function`
	 * - `async () => {}`  ....................... `async arrow function`
	 * - `({ foo: function foo() {} })`  ......... `method 'foo'`
	 * - `({ foo: function() {} })`  ............. `method 'foo'`
	 * - `({ ['foo']: function() {} })`  ......... `method 'foo'`
	 * - `({ [foo]: function() {} })`  ........... `method`
	 * - `({ foo() {} })`  ....................... `method 'foo'`
	 * - `({ foo: function* foo() {} })`  ........ `generator method 'foo'`
	 * - `({ foo: function*() {} })`  ............ `generator method 'foo'`
	 * - `({ ['foo']: function*() {} })`  ........ `generator method 'foo'`
	 * - `({ [foo]: function*() {} })`  .......... `generator method`
	 * - `({ *foo() {} })`  ...................... `generator method 'foo'`
	 * - `({ foo: async function foo() {} })`  ... `async method 'foo'`
	 * - `({ foo: async function() {} })`  ....... `async method 'foo'`
	 * - `({ ['foo']: async function() {} })`  ... `async method 'foo'`
	 * - `({ [foo]: async function() {} })`  ..... `async method`
	 * - `({ async foo() {} })`  ................. `async method 'foo'`
	 * - `({ get foo() {} })`  ................... `getter 'foo'`
	 * - `({ set foo(a) {} })`  .................. `setter 'foo'`
	 * - `class A { constructor() {} }`  ......... `constructor`
	 * - `class A { foo() {} }`  ................. `method 'foo'`
	 * - `class A { *foo() {} }`  ................ `generator method 'foo'`
	 * - `class A { async foo() {} }`  ........... `async method 'foo'`
	 * - `class A { ['foo']() {} }`  ............. `method 'foo'`
	 * - `class A { *['foo']() {} }`  ............ `generator method 'foo'`
	 * - `class A { async ['foo']() {} }`  ....... `async method 'foo'`
	 * - `class A { [foo]() {} }`  ............... `method`
	 * - `class A { *[foo]() {} }`  .............. `generator method`
	 * - `class A { async [foo]() {} }`  ......... `async method`
	 * - `class A { get foo() {} }`  ............. `getter 'foo'`
	 * - `class A { set foo(a) {} }`  ............ `setter 'foo'`
	 * - `class A { static foo() {} }`  .......... `static method 'foo'`
	 * - `class A { static *foo() {} }`  ......... `static generator method 'foo'`
	 * - `class A { static async foo() {} }`  .... `static async method 'foo'`
	 * - `class A { static get foo() {} }`  ...... `static getter 'foo'`
	 * - `class A { static set foo(a) {} }`  ..... `static setter 'foo'`
	 * - `class A { foo = () => {}; }`  .......... `method 'foo'`
	 * - `class A { foo = function() {}; }`  ..... `method 'foo'`
	 * - `class A { foo = function bar() {}; }`  . `method 'foo'`
	 * - `class A { static foo = () => {}; }`  ... `static method 'foo'`
	 * - `class A { '#foo' = () => {}; }`  ....... `method '#foo'`
	 * - `class A { #foo = () => {}; }`  ......... `private method #foo`
	 * - `class A { static #foo = () => {}; }`  .. `static private method #foo`
	 * - `class A { '#foo'() {} }`  .............. `method '#foo'`
	 * - `class A { #foo() {} }`  ................ `private method #foo`
	 * - `class A { static #foo() {} }`  ......... `static private method #foo`
	 * @param {ASTNode} node The function node to get.
	 * @returns {string} The name and kind of the function node.
	 */
	getFunctionNameWithKind(node) {
		const parent = node.parent;
		const tokens = [];

		if (
			parent.type === "MethodDefinition" ||
			parent.type === "PropertyDefinition" ||
			node.type === "TSPropertySignature" ||
			node.type === "TSMethodSignature"
		) {
			// The proposal uses `static` word consistently before visibility words: https://github.com/tc39/proposal-static-class-features
			if (parent.static) {
				tokens.push("static");
			}
			if (!parent.computed && parent.key?.type === "PrivateIdentifier") {
				tokens.push("private");
			}
		}
		if (node.async) {
			tokens.push("async");
		}
		if (node.generator) {
			tokens.push("generator");
		}

		if (parent.type === "Property" || parent.type === "MethodDefinition") {
			if (parent.kind === "constructor") {
				return "constructor";
			}
			if (parent.kind === "get") {
				tokens.push("getter");
			} else if (parent.kind === "set") {
				tokens.push("setter");
			} else {
				tokens.push("method");
			}
		} else if (node.type === "TSMethodSignature") {
			if (node.kind === "get") {
				tokens.push("getter");
			} else if (node.kind === "set") {
				tokens.push("setter");
			} else {
				tokens.push("method");
			}
		} else if (parent.type === "PropertyDefinition") {
			tokens.push("method");
		} else {
			if (node.type === "ArrowFunctionExpression") {
				tokens.push("arrow");
			}
			tokens.push("function");
		}

		if (
			parent.type === "Property" ||
			parent.type === "MethodDefinition" ||
			parent.type === "PropertyDefinition"
		) {
			if (!parent.computed && parent.key.type === "PrivateIdentifier") {
				tokens.push(`#${parent.key.name}`);
			} else {
				const name = getStaticPropertyName(parent);

				if (name !== null) {
					tokens.push(`'${name}'`);
				} else if (node.id) {
					tokens.push(`'${node.id.name}'`);
				}
			}
		} else if (node.type === "TSMethodSignature") {
			tokens.push(`'${getStaticPropertyName(node)}'`);
		} else if (node.id) {
			tokens.push(`'${node.id.name}'`);
		}

		return tokens.join(" ");
	},

	/**
	 * Gets the location of the given function node for reporting.
	 *
	 * - `function foo() {}`
	 *    ^^^^^^^^^^^^
	 * - `(function foo() {})`
	 *     ^^^^^^^^^^^^
	 * - `(function() {})`
	 *     ^^^^^^^^
	 * - `function* foo() {}`
	 *    ^^^^^^^^^^^^^
	 * - `(function* foo() {})`
	 *     ^^^^^^^^^^^^^
	 * - `(function*() {})`
	 *     ^^^^^^^^^
	 * - `() => {}`
	 *       ^^
	 * - `async () => {}`
	 *             ^^
	 * - `({ foo: function foo() {} })`
	 *       ^^^^^^^^^^^^^^^^^
	 * - `({ foo: function() {} })`
	 *       ^^^^^^^^^^^^^
	 * - `({ ['foo']: function() {} })`
	 *       ^^^^^^^^^^^^^^^^^
	 * - `({ [foo]: function() {} })`
	 *       ^^^^^^^^^^^^^^^
	 * - `({ foo() {} })`
	 *       ^^^
	 * - `({ foo: function* foo() {} })`
	 *       ^^^^^^^^^^^^^^^^^^
	 * - `({ foo: function*() {} })`
	 *       ^^^^^^^^^^^^^^
	 * - `({ ['foo']: function*() {} })`
	 *       ^^^^^^^^^^^^^^^^^^
	 * - `({ [foo]: function*() {} })`
	 *       ^^^^^^^^^^^^^^^^
	 * - `({ *foo() {} })`
	 *       ^^^^
	 * - `({ foo: async function foo() {} })`
	 *       ^^^^^^^^^^^^^^^^^^^^^^^
	 * - `({ foo: async function() {} })`
	 *       ^^^^^^^^^^^^^^^^^^^
	 * - `({ ['foo']: async function() {} })`
	 *       ^^^^^^^^^^^^^^^^^^^^^^^
	 * - `({ [foo]: async function() {} })`
	 *       ^^^^^^^^^^^^^^^^^^^^^
	 * - `({ async foo() {} })`
	 *       ^^^^^^^^^
	 * - `({ get foo() {} })`
	 *       ^^^^^^^
	 * - `({ set foo(a) {} })`
	 *       ^^^^^^^
	 * - `class A { constructor() {} }`
	 *              ^^^^^^^^^^^
	 * - `class A { foo() {} }`
	 *              ^^^
	 * - `class A { *foo() {} }`
	 *              ^^^^
	 * - `class A { async foo() {} }`
	 *              ^^^^^^^^^
	 * - `class A { ['foo']() {} }`
	 *              ^^^^^^^
	 * - `class A { *['foo']() {} }`
	 *              ^^^^^^^^
	 * - `class A { async ['foo']() {} }`
	 *              ^^^^^^^^^^^^^
	 * - `class A { [foo]() {} }`
	 *              ^^^^^
	 * - `class A { *[foo]() {} }`
	 *              ^^^^^^
	 * - `class A { async [foo]() {} }`
	 *              ^^^^^^^^^^^
	 * - `class A { get foo() {} }`
	 *              ^^^^^^^
	 * - `class A { set foo(a) {} }`
	 *              ^^^^^^^
	 * - `class A { static foo() {} }`
	 *              ^^^^^^^^^^
	 * - `class A { static *foo() {} }`
	 *              ^^^^^^^^^^^
	 * - `class A { static async foo() {} }`
	 *              ^^^^^^^^^^^^^^^^
	 * - `class A { static get foo() {} }`
	 *              ^^^^^^^^^^^^^^
	 * - `class A { static set foo(a) {} }`
	 *              ^^^^^^^^^^^^^^
	 * - `class A { foo = function() {} }`
	 *              ^^^^^^^^^^^^^^
	 * - `class A { static foo = function() {} }`
	 *              ^^^^^^^^^^^^^^^^^^^^^
	 * - `class A { foo = (a, b) => {} }`
	 *              ^^^^^^
	 * @param {ASTNode} node The function node to get.
	 * @param {SourceCode} sourceCode The source code object to get tokens.
	 * @returns {string} The location of the function node for reporting.
	 */
	getFunctionHeadLoc(node, sourceCode) {
		const parent = node.parent;
		let start;
		let end;

		if (
			parent.type === "Property" ||
			parent.type === "MethodDefinition" ||
			parent.type === "PropertyDefinition" ||
			parent.type === "TSPropertySignature" ||
			parent.type === "TSMethodSignature"
		) {
			start = parent.loc.start;
			end = getOpeningParenOfParams(node, sourceCode).loc.start;
		} else if (node.type === "ArrowFunctionExpression") {
			const arrowToken = sourceCode.getTokenBefore(
				node.body,
				isArrowToken,
			);

			start = arrowToken.loc.start;
			end = arrowToken.loc.end;
		} else {
			start = node.loc.start;
			end = getOpeningParenOfParams(node, sourceCode).loc.start;
		}

		return {
			start: Object.assign({}, start),
			end: Object.assign({}, end),
		};
	},

	/**
	 * Gets next location when the result is not out of bound, otherwise returns null.
	 *
	 * Assumptions:
	 *
	 * - The given location represents a valid location in the given source code.
	 * - Columns are 0-based.
	 * - Lines are 1-based.
	 * - Column immediately after the last character in a line (not incl. linebreaks) is considered to be a valid location.
	 * - If the source code ends with a linebreak, `sourceCode.lines` array will have an extra element (empty string) at the end.
	 *   The start (column 0) of that extra line is considered to be a valid location.
	 *
	 * Examples of successive locations (line, column):
	 *
	 * code: foo
	 * locations: (1, 0) -> (1, 1) -> (1, 2) -> (1, 3) -> null
	 *
	 * code: foo<LF>
	 * locations: (1, 0) -> (1, 1) -> (1, 2) -> (1, 3) -> (2, 0) -> null
	 *
	 * code: foo<CR><LF>
	 * locations: (1, 0) -> (1, 1) -> (1, 2) -> (1, 3) -> (2, 0) -> null
	 *
	 * code: a<LF>b
	 * locations: (1, 0) -> (1, 1) -> (2, 0) -> (2, 1) -> null
	 *
	 * code: a<LF>b<LF>
	 * locations: (1, 0) -> (1, 1) -> (2, 0) -> (2, 1) -> (3, 0) -> null
	 *
	 * code: a<CR><LF>b<CR><LF>
	 * locations: (1, 0) -> (1, 1) -> (2, 0) -> (2, 1) -> (3, 0) -> null
	 *
	 * code: a<LF><LF>
	 * locations: (1, 0) -> (1, 1) -> (2, 0) -> (3, 0) -> null
	 *
	 * code: <LF>
	 * locations: (1, 0) -> (2, 0) -> null
	 *
	 * code:
	 * locations: (1, 0) -> null
	 * @param {SourceCode} sourceCode The sourceCode
	 * @param {{line: number, column: number}} location The location
	 * @returns {{line: number, column: number} | null} Next location
	 */
	getNextLocation(sourceCode, { line, column }) {
		if (column < sourceCode.lines[line - 1].length) {
			return {
				line,
				column: column + 1,
			};
		}

		if (line < sourceCode.lines.length) {
			return {
				line: line + 1,
				column: 0,
			};
		}

		return null;
	},

	/**
	 * Gets the parenthesized text of a node. This is similar to sourceCode.getText(node), but it also includes any parentheses
	 * surrounding the node.
	 * @param {SourceCode} sourceCode The source code object
	 * @param {ASTNode} node An expression node
	 * @returns {string} The text representing the node, with all surrounding parentheses included
	 */
	getParenthesisedText(sourceCode, node) {
		let leftToken = sourceCode.getFirstToken(node);
		let rightToken = sourceCode.getLastToken(node);

		while (
			sourceCode.getTokenBefore(leftToken) &&
			sourceCode.getTokenBefore(leftToken).type === "Punctuator" &&
			sourceCode.getTokenBefore(leftToken).value === "(" &&
			sourceCode.getTokenAfter(rightToken) &&
			sourceCode.getTokenAfter(rightToken).type === "Punctuator" &&
			sourceCode.getTokenAfter(rightToken).value === ")"
		) {
			leftToken = sourceCode.getTokenBefore(leftToken);
			rightToken = sourceCode.getTokenAfter(rightToken);
		}

		return sourceCode
			.getText()
			.slice(leftToken.range[0], rightToken.range[1]);
	},

	/**
	 * Determine if a node has a possibility to be an Error object
	 * @param {ASTNode} node ASTNode to check
	 * @returns {boolean} True if there is a chance it contains an Error obj
	 */
	couldBeError(node) {
		switch (node.type) {
			case "Identifier":
			case "CallExpression":
			case "NewExpression":
			case "MemberExpression":
			case "TaggedTemplateExpression":
			case "YieldExpression":
			case "AwaitExpression":
			case "ChainExpression":
				return true; // possibly an error object.

			case "AssignmentExpression":
				if (["=", "&&="].includes(node.operator)) {
					return module.exports.couldBeError(node.right);
				}

				if (["||=", "??="].includes(node.operator)) {
					return (
						module.exports.couldBeError(node.left) ||
						module.exports.couldBeError(node.right)
					);
				}

				/**
				 * All other assignment operators are mathematical assignment operators (arithmetic or bitwise).
				 * An assignment expression with a mathematical operator can either evaluate to a primitive value,
				 * or throw, depending on the operands. Thus, it cannot evaluate to an `Error` object.
				 */
				return false;

			case "SequenceExpression": {
				const exprs = node.expressions;

				return (
					exprs.length !== 0 &&
					module.exports.couldBeError(exprs.at(-1))
				);
			}

			case "LogicalExpression":
				/*
				 * If the && operator short-circuits, the left side was falsy and therefore not an error, and if it
				 * doesn't short-circuit, it takes the value from the right side, so the right side must always be
				 * a plausible error. A future improvement could verify that the left side could be truthy by
				 * excluding falsy literals.
				 */
				if (node.operator === "&&") {
					return module.exports.couldBeError(node.right);
				}

				return (
					module.exports.couldBeError(node.left) ||
					module.exports.couldBeError(node.right)
				);

			case "ConditionalExpression":
				return (
					module.exports.couldBeError(node.consequent) ||
					module.exports.couldBeError(node.alternate)
				);

			default:
				return false;
		}
	},

	/**
	 * Check if a given node is a numeric literal or not.
	 * @param {ASTNode} node The node to check.
	 * @returns {boolean} `true` if the node is a number or bigint literal.
	 */
	isNumericLiteral(node) {
		return (
			node.type === "Literal" &&
			(typeof node.value === "number" || Boolean(node.bigint))
		);
	},

	/**
	 * Determines whether two tokens can safely be placed next to each other without merging into a single token
	 * @param {Token|string} leftValue The left token. If this is a string, it will be tokenized and the last token will be used.
	 * @param {Token|string} rightValue The right token. If this is a string, it will be tokenized and the first token will be used.
	 * @returns {boolean} If the tokens cannot be safely placed next to each other, returns `false`. If the tokens can be placed
	 * next to each other, behavior is undefined (although it should return `true` in most cases).
	 */
	canTokensBeAdjacent(leftValue, rightValue) {
		const espreeOptions = {
			ecmaVersion: espree.latestEcmaVersion,
			comment: true,
			range: true,
		};

		let leftToken;

		if (typeof leftValue === "string") {
			let tokens;

			try {
				tokens = espree.tokenize(leftValue, espreeOptions);
			} catch {
				return false;
			}

			const comments = tokens.comments;

			leftToken = tokens.at(-1);
			if (comments.length) {
				const lastComment = comments.at(-1);

				if (!leftToken || lastComment.range[0] > leftToken.range[0]) {
					leftToken = lastComment;
				}
			}
		} else {
			leftToken = leftValue;
		}

		/*
		 * If a hashbang comment was passed as a token object from SourceCode,
		 * its type will be "Shebang" because of the way ESLint itself handles hashbangs.
		 * If a hashbang comment was passed in a string and then tokenized in this function,
		 * its type will be "Hashbang" because of the way Espree tokenizes hashbangs.
		 */
		if (leftToken.type === "Shebang" || leftToken.type === "Hashbang") {
			return false;
		}

		let rightToken;

		if (typeof rightValue === "string") {
			let tokens;

			try {
				tokens = espree.tokenize(rightValue, espreeOptions);
			} catch {
				return false;
			}

			const comments = tokens.comments;

			rightToken = tokens[0];
			if (comments.length) {
				const firstComment = comments[0];

				if (
					!rightToken ||
					firstComment.range[0] < rightToken.range[0]
				) {
					rightToken = firstComment;
				}
			}
		} else {
			rightToken = rightValue;
		}

		if (
			leftToken.type === "Punctuator" ||
			rightToken.type === "Punctuator"
		) {
			if (
				leftToken.type === "Punctuator" &&
				rightToken.type === "Punctuator"
			) {
				const PLUS_TOKENS = new Set(["+", "++"]);
				const MINUS_TOKENS = new Set(["-", "--"]);

				return !(
					(PLUS_TOKENS.has(leftToken.value) &&
						PLUS_TOKENS.has(rightToken.value)) ||
					(MINUS_TOKENS.has(leftToken.value) &&
						MINUS_TOKENS.has(rightToken.value))
				);
			}
			if (leftToken.type === "Punctuator" && leftToken.value === "/") {
				return !["Block", "Line", "RegularExpression"].includes(
					rightToken.type,
				);
			}
			return true;
		}

		if (
			leftToken.type === "String" ||
			rightToken.type === "String" ||
			leftToken.type === "Template" ||
			rightToken.type === "Template"
		) {
			return true;
		}

		if (
			leftToken.type !== "Numeric" &&
			rightToken.type === "Numeric" &&
			rightToken.value.startsWith(".")
		) {
			return true;
		}

		if (
			leftToken.type === "Block" ||
			rightToken.type === "Block" ||
			rightToken.type === "Line"
		) {
			return true;
		}

		if (rightToken.type === "PrivateIdentifier") {
			return true;
		}

		return false;
	},

	/**
	 * Get the `loc` object of a given name in a `/*globals` directive comment.
	 * @param {SourceCode} sourceCode The source code to convert index to loc.
	 * @param {Comment} comment The `/*globals` directive comment which include the name.
	 * @param {string} name The name to find.
	 * @returns {SourceLocation} The `loc` object.
	 */
	getNameLocationInGlobalDirectiveComment(sourceCode, comment, name) {
		const namePattern = new RegExp(
			`[\\s,]${escapeRegExp(name)}(?:$|[\\s,:])`,
			"gu",
		);

		// To ignore the first text "global".
		namePattern.lastIndex = comment.value.indexOf("global") + 6;

		// Search a given variable name.
		const match = namePattern.exec(comment.value);

		// Convert the index to loc.
		const start = sourceCode.getLocFromIndex(
			comment.range[0] + "/*".length + (match ? match.index + 1 : 0),
		);
		const end = {
			line: start.line,
			column: start.column + (match ? name.length : 1),
		};

		return { start, end };
	},

	/**
	 * Determines whether the given raw string contains an octal escape sequence
	 * or a non-octal decimal escape sequence ("\8", "\9").
	 *
	 * "\1", "\2" ... "\7", "\8", "\9"
	 * "\00", "\01" ... "\07", "\08", "\09"
	 *
	 * "\0", when not followed by a digit, is not an octal escape sequence.
	 * @param {string} rawString A string in its raw representation.
	 * @returns {boolean} `true` if the string contains at least one octal escape sequence
	 * or at least one non-octal decimal escape sequence.
	 */
	hasOctalOrNonOctalDecimalEscapeSequence(rawString) {
		return OCTAL_OR_NON_OCTAL_DECIMAL_ESCAPE_PATTERN.test(rawString);
	},

	/**
	 * Determines whether the given node is a template literal without expressions.
	 * @param {ASTNode} node Node to check.
	 * @returns {boolean} True if the node is a template literal without expressions.
	 */
	isStaticTemplateLiteral(node) {
		return node.type === "TemplateLiteral" && node.expressions.length === 0;
	},

	/**
	 * Determines whether the existing curly braces around the single statement are necessary to preserve the semantics of the code.
	 * The braces, which make the given block body, are necessary in either of the following situations:
	 *
	 * 1. The statement is a lexical declaration.
	 * 2. Without the braces, an `if` within the statement would become associated with an `else` after the closing brace:
	 *
	 *     if (a) {
	 *         if (b)
	 *             foo();
	 *     }
	 *     else
	 *         bar();
	 *
	 *     if (a)
	 *         while (b)
	 *             while (c) {
	 *                 while (d)
	 *                     if (e)
	 *                         while(f)
	 *                             foo();
	 *            }
	 *     else
	 *         bar();
	 * @param {ASTNode} node `BlockStatement` body with exactly one statement directly inside. The statement can have its own nested statements.
	 * @param {SourceCode} sourceCode The source code
	 * @returns {boolean} `true` if the braces are necessary - removing them (replacing the given `BlockStatement` body with its single statement content)
	 * would change the semantics of the code or produce a syntax error.
	 */
	areBracesNecessary(node, sourceCode) {
		/**
		 * Determines if the given node is a lexical declaration (let, const, using, await using, function, or class)
		 * @param {ASTNode} nodeToCheck The node to check
		 * @returns {boolean} True if the node is a lexical declaration
		 * @private
		 */
		function isLexicalDeclaration(nodeToCheck) {
			if (nodeToCheck.type === "VariableDeclaration") {
				return LEXICAL_DECLARATION_KINDS.has(nodeToCheck.kind);
			}

			return (
				nodeToCheck.type === "FunctionDeclaration" ||
				nodeToCheck.type === "ClassDeclaration"
			);
		}

		/**
		 * Checks if the given token is an `else` token or not.
		 * @param {Token} token The token to check.
		 * @returns {boolean} `true` if the token is an `else` token.
		 */
		function isElseKeywordToken(token) {
			return token.value === "else" && token.type === "Keyword";
		}

		/**
		 * Determines whether the given node has an `else` keyword token as the first token after.
		 * @param {ASTNode} nodeToCheck The node to check.
		 * @returns {boolean} `true` if the node is followed by an `else` keyword token.
		 */
		function isFollowedByElseKeyword(nodeToCheck) {
			const nextToken = sourceCode.getTokenAfter(nodeToCheck);

			return Boolean(nextToken) && isElseKeywordToken(nextToken);
		}

		/**
		 * Determines whether the code represented by the given node contains an `if` statement
		 * that would become associated with an `else` keyword directly appended to that code.
		 *
		 * Examples where it returns `true`:
		 *
		 *    if (a)
		 *        foo();
		 *
		 *    if (a) {
		 *        foo();
		 *    }
		 *
		 *    if (a)
		 *        foo();
		 *    else if (b)
		 *        bar();
		 *
		 *    while (a)
		 *        if (b)
		 *            if(c)
		 *                foo();
		 *            else
		 *                bar();
		 *
		 * Examples where it returns `false`:
		 *
		 *    if (a)
		 *        foo();
		 *    else
		 *        bar();
		 *
		 *    while (a) {
		 *        if (b)
		 *            if(c)
		 *                foo();
		 *            else
		 *                bar();
		 *    }
		 *
		 *    while (a)
		 *        if (b) {
		 *            if(c)
		 *                foo();
		 *        }
		 *        else
		 *            bar();
		 * @param {ASTNode} nodeToCheck Node representing the code to check.
		 * @returns {boolean} `true` if an `if` statement within the code would become associated with an `else` appended to that code.
		 */
		function hasUnsafeIf(nodeToCheck) {
			switch (nodeToCheck.type) {
				case "IfStatement":
					if (!nodeToCheck.alternate) {
						return true;
					}
					return hasUnsafeIf(nodeToCheck.alternate);
				case "ForStatement":
				case "ForInStatement":
				case "ForOfStatement":
				case "LabeledStatement":
				case "WithStatement":
				case "WhileStatement":
					return hasUnsafeIf(nodeToCheck.body);
				default:
					return false;
			}
		}

		const statement = node.body[0];

		return (
			isLexicalDeclaration(statement) ||
			(hasUnsafeIf(statement) && isFollowedByElseKeyword(node))
		);
	},

	isReferenceToGlobalVariable,
	isLogicalExpression,
	isCoalesceExpression,
	isMixedLogicalAndCoalesceExpressions,
	isNullLiteral,
	getStaticStringValue,
	getStaticPropertyName,
	skipChainExpression,
	isSpecificId,
	isSpecificMemberAccess,
	equalLiteralValue,
	isSameReference,
	isLogicalAssignmentOperator,
	getSwitchCaseColonToken,
	getModuleExportName,
	isConstant,
	isTopLevelExpressionStatement,
	isDirective,
	isStartOfExpressionStatement,
	needsPrecedingSemicolon,
	isImportAttributeKey,
	getOpeningParenOfParams,
};
