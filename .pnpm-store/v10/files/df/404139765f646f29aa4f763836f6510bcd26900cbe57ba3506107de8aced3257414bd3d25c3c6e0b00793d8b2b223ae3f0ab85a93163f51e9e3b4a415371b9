/**
 * @fileoverview Rule to enforce concise object methods and properties.
 * @author Jamund Ferguson
 */

"use strict";

const OPTIONS = {
	always: "always",
	never: "never",
	methods: "methods",
	properties: "properties",
	consistent: "consistent",
	consistentAsNeeded: "consistent-as-needed",
};

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const astUtils = require("./utils/ast-utils");

//--------------------------------------------------------------------------
// Helpers
//--------------------------------------------------------------------------
const CTOR_PREFIX_REGEX = /[^_$0-9]/u;
const JSDOC_COMMENT_REGEX = /^\s*\*/u;

/**
 * Determines if the first character of the name is a capital letter.
 * @param {string} name The name of the node to evaluate.
 * @returns {boolean} True if the first character of the property name is a capital letter, false if not.
 * @private
 */
function isConstructor(name) {
	const match = CTOR_PREFIX_REGEX.exec(name);

	// Not a constructor if name has no characters apart from '_', '$' and digits e.g. '_', '$$', '_8'
	if (!match) {
		return false;
	}

	const firstChar = name.charAt(match.index);

	return firstChar === firstChar.toUpperCase();
}

/**
 * Determines if the property can have a shorthand form.
 * @param {ASTNode} property Property AST node
 * @returns {boolean} True if the property can have a shorthand form
 * @private
 */
function canHaveShorthand(property) {
	return (
		property.kind !== "set" &&
		property.kind !== "get" &&
		property.type !== "SpreadElement" &&
		property.type !== "SpreadProperty" &&
		property.type !== "ExperimentalSpreadProperty"
	);
}

/**
 * Checks whether a node is a string literal.
 * @param {ASTNode} node Any AST node.
 * @returns {boolean} `true` if it is a string literal.
 */
function isStringLiteral(node) {
	return node.type === "Literal" && typeof node.value === "string";
}

/**
 * Determines if the property is a shorthand or not.
 * @param {ASTNode} property Property AST node
 * @returns {boolean} True if the property is considered shorthand, false if not.
 * @private
 */
function isShorthand(property) {
	// property.method is true when `{a(){}}`.
	return property.shorthand || property.method;
}

/**
 * Determines if the property's key and method or value are named equally.
 * @param {ASTNode} property Property AST node
 * @returns {boolean} True if the key and value are named equally, false if not.
 * @private
 */
function isRedundant(property) {
	const value = property.value;

	if (value.type === "FunctionExpression") {
		return !value.id; // Only anonymous should be shorthand method.
	}
	if (value.type === "Identifier") {
		return astUtils.getStaticPropertyName(property) === value.name;
	}

	return false;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		docs: {
			description:
				"Require or disallow method and property shorthand syntax for object literals",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/object-shorthand",
		},

		fixable: "code",

		schema: {
			anyOf: [
				{
					type: "array",
					items: [
						{
							enum: [
								"always",
								"methods",
								"properties",
								"never",
								"consistent",
								"consistent-as-needed",
							],
						},
					],
					minItems: 0,
					maxItems: 1,
				},
				{
					type: "array",
					items: [
						{
							enum: ["always", "methods", "properties"],
						},
						{
							type: "object",
							properties: {
								avoidQuotes: {
									type: "boolean",
								},
							},
							additionalProperties: false,
						},
					],
					minItems: 0,
					maxItems: 2,
				},
				{
					type: "array",
					items: [
						{
							enum: ["always", "methods"],
						},
						{
							type: "object",
							properties: {
								ignoreConstructors: {
									type: "boolean",
								},
								methodsIgnorePattern: {
									type: "string",
								},
								avoidQuotes: {
									type: "boolean",
								},
								avoidExplicitReturnArrows: {
									type: "boolean",
								},
							},
							additionalProperties: false,
						},
					],
					minItems: 0,
					maxItems: 2,
				},
			],
		},

		messages: {
			expectedAllPropertiesShorthanded:
				"Expected shorthand for all properties.",
			expectedLiteralMethodLongform:
				"Expected longform method syntax for string literal keys.",
			expectedPropertyShorthand: "Expected property shorthand.",
			expectedPropertyLongform: "Expected longform property syntax.",
			expectedMethodShorthand: "Expected method shorthand.",
			expectedMethodLongform: "Expected longform method syntax.",
			unexpectedMix:
				"Unexpected mix of shorthand and non-shorthand properties.",
		},
	},

	create(context) {
		const APPLY = context.options[0] || OPTIONS.always;
		const APPLY_TO_METHODS =
			APPLY === OPTIONS.methods || APPLY === OPTIONS.always;
		const APPLY_TO_PROPS =
			APPLY === OPTIONS.properties || APPLY === OPTIONS.always;
		const APPLY_NEVER = APPLY === OPTIONS.never;
		const APPLY_CONSISTENT = APPLY === OPTIONS.consistent;
		const APPLY_CONSISTENT_AS_NEEDED = APPLY === OPTIONS.consistentAsNeeded;

		const PARAMS = context.options[1] || {};
		const IGNORE_CONSTRUCTORS = PARAMS.ignoreConstructors;
		const METHODS_IGNORE_PATTERN = PARAMS.methodsIgnorePattern
			? new RegExp(PARAMS.methodsIgnorePattern, "u")
			: null;
		const AVOID_QUOTES = PARAMS.avoidQuotes;
		const AVOID_EXPLICIT_RETURN_ARROWS = !!PARAMS.avoidExplicitReturnArrows;
		const sourceCode = context.sourceCode;

		/**
		 * Ensures that an object's properties are consistently shorthand, or not shorthand at all.
		 * @param {ASTNode} node Property AST node
		 * @param {boolean} checkRedundancy Whether to check longform redundancy
		 * @returns {void}
		 */
		function checkConsistency(node, checkRedundancy) {
			// We are excluding getters/setters and spread properties as they are considered neither longform nor shorthand.
			const properties = node.properties.filter(canHaveShorthand);

			// Do we still have properties left after filtering the getters and setters?
			if (properties.length > 0) {
				const shorthandProperties = properties.filter(isShorthand);

				/*
				 * If we do not have an equal number of longform properties as
				 * shorthand properties, we are using the annotations inconsistently
				 */
				if (shorthandProperties.length !== properties.length) {
					// We have at least 1 shorthand property
					if (shorthandProperties.length > 0) {
						context.report({ node, messageId: "unexpectedMix" });
					} else if (checkRedundancy) {
						/*
						 * If all properties of the object contain a method or value with a name matching it's key,
						 * all the keys are redundant.
						 */
						const canAlwaysUseShorthand =
							properties.every(isRedundant);

						if (canAlwaysUseShorthand) {
							context.report({
								node,
								messageId: "expectedAllPropertiesShorthanded",
							});
						}
					}
				}
			}
		}

		/**
		 * Fixes a FunctionExpression node by making it into a shorthand property.
		 * @param {SourceCodeFixer} fixer The fixer object
		 * @param {ASTNode} node A `Property` node that has a `FunctionExpression` or `ArrowFunctionExpression` as its value
		 * @returns {Object} A fix for this node
		 */
		function makeFunctionShorthand(fixer, node) {
			const firstKeyToken = node.computed
				? sourceCode.getFirstToken(node, astUtils.isOpeningBracketToken)
				: sourceCode.getFirstToken(node.key);
			const lastKeyToken = node.computed
				? sourceCode.getFirstTokenBetween(
						node.key,
						node.value,
						astUtils.isClosingBracketToken,
					)
				: sourceCode.getLastToken(node.key);
			const keyText = sourceCode.text.slice(
				firstKeyToken.range[0],
				lastKeyToken.range[1],
			);
			let keyPrefix = "";

			// key: /* */ () => {}
			if (sourceCode.commentsExistBetween(lastKeyToken, node.value)) {
				return null;
			}

			if (node.value.async) {
				keyPrefix += "async ";
			}
			if (node.value.generator) {
				keyPrefix += "*";
			}

			const fixRange = [firstKeyToken.range[0], node.range[1]];
			const methodPrefix = keyPrefix + keyText;

			if (node.value.type === "FunctionExpression") {
				const functionToken = sourceCode
					.getTokens(node.value)
					.find(
						token =>
							token.type === "Keyword" &&
							token.value === "function",
					);
				const tokenBeforeParams = node.value.generator
					? sourceCode.getTokenAfter(functionToken)
					: functionToken;

				return fixer.replaceTextRange(
					fixRange,
					methodPrefix +
						sourceCode.text.slice(
							tokenBeforeParams.range[1],
							node.value.range[1],
						),
				);
			}

			const arrowToken = sourceCode.getTokenBefore(
				node.value.body,
				astUtils.isArrowToken,
			);
			const fnBody = sourceCode.text.slice(
				arrowToken.range[1],
				node.value.range[1],
			);

			// First token should not be `async`
			const firstValueToken = sourceCode.getFirstToken(node.value, {
				skip: node.value.async ? 1 : 0,
			});

			const sliceStart = firstValueToken.range[0];
			const sliceEnd = sourceCode.getTokenBefore(arrowToken).range[1];
			const shouldAddParens =
				node.value.params.length === 1 &&
				node.value.params[0].range[0] === sliceStart;

			const oldParamText = sourceCode.text.slice(sliceStart, sliceEnd);
			const newParamText = shouldAddParens
				? `(${oldParamText})`
				: oldParamText;

			return fixer.replaceTextRange(
				fixRange,
				methodPrefix + newParamText + fnBody,
			);
		}

		/**
		 * Fixes a FunctionExpression node by making it into a longform property.
		 * @param {SourceCodeFixer} fixer The fixer object
		 * @param {ASTNode} node A `Property` node that has a `FunctionExpression` as its value
		 * @returns {Object} A fix for this node
		 */
		function makeFunctionLongform(fixer, node) {
			const firstKeyToken = node.computed
				? sourceCode.getTokens(node).find(token => token.value === "[")
				: sourceCode.getFirstToken(node.key);
			const lastKeyToken = node.computed
				? sourceCode
						.getTokensBetween(node.key, node.value)
						.find(token => token.value === "]")
				: sourceCode.getLastToken(node.key);
			const keyText = sourceCode.text.slice(
				firstKeyToken.range[0],
				lastKeyToken.range[1],
			);
			let functionHeader = "function";

			if (node.value.async) {
				functionHeader = `async ${functionHeader}`;
			}
			if (node.value.generator) {
				functionHeader = `${functionHeader}*`;
			}

			return fixer.replaceTextRange(
				[node.range[0], lastKeyToken.range[1]],
				`${keyText}: ${functionHeader}`,
			);
		}

		/*
		 * To determine whether a given arrow function has a lexical identifier (`this`, `arguments`, `super`, or `new.target`),
		 * create a stack of functions that define these identifiers (i.e. all functions except arrow functions) as the AST is
		 * traversed. Whenever a new function is encountered, create a new entry on the stack (corresponding to a different lexical
		 * scope of `this`), and whenever a function is exited, pop that entry off the stack. When an arrow function is entered,
		 * keep a reference to it on the current stack entry, and remove that reference when the arrow function is exited.
		 * When a lexical identifier is encountered, mark all the arrow functions on the current stack entry by adding them
		 * to an `arrowsWithLexicalIdentifiers` set. Any arrow function in that set will not be reported by this rule,
		 * because converting it into a method would change the value of one of the lexical identifiers.
		 */
		const lexicalScopeStack = [];
		const arrowsWithLexicalIdentifiers = new WeakSet();
		const argumentsIdentifiers = new WeakSet();

		/**
		 * Enters a function. This creates a new lexical identifier scope, so a new Set of arrow functions is pushed onto the stack.
		 * Also, this marks all `arguments` identifiers so that they can be detected later.
		 * @param {ASTNode} node The node representing the function.
		 * @returns {void}
		 */
		function enterFunction(node) {
			lexicalScopeStack.unshift(new Set());
			sourceCode
				.getScope(node)
				.variables.filter(variable => variable.name === "arguments")
				.forEach(variable => {
					variable.references
						.map(ref => ref.identifier)
						.forEach(identifier =>
							argumentsIdentifiers.add(identifier),
						);
				});
		}

		/**
		 * Exits a function. This pops the current set of arrow functions off the lexical scope stack.
		 * @returns {void}
		 */
		function exitFunction() {
			lexicalScopeStack.shift();
		}

		/**
		 * Marks the current function as having a lexical keyword. This implies that all arrow functions
		 * in the current lexical scope contain a reference to this lexical keyword.
		 * @returns {void}
		 */
		function reportLexicalIdentifier() {
			lexicalScopeStack[0].forEach(arrowFunction =>
				arrowsWithLexicalIdentifiers.add(arrowFunction),
			);
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			Program: enterFunction,
			FunctionDeclaration: enterFunction,
			FunctionExpression: enterFunction,
			"Program:exit": exitFunction,
			"FunctionDeclaration:exit": exitFunction,
			"FunctionExpression:exit": exitFunction,

			ArrowFunctionExpression(node) {
				lexicalScopeStack[0].add(node);
			},
			"ArrowFunctionExpression:exit"(node) {
				lexicalScopeStack[0].delete(node);
			},

			ThisExpression: reportLexicalIdentifier,
			Super: reportLexicalIdentifier,
			MetaProperty(node) {
				if (
					node.meta.name === "new" &&
					node.property.name === "target"
				) {
					reportLexicalIdentifier();
				}
			},
			Identifier(node) {
				if (argumentsIdentifiers.has(node)) {
					reportLexicalIdentifier();
				}
			},

			ObjectExpression(node) {
				if (APPLY_CONSISTENT) {
					checkConsistency(node, false);
				} else if (APPLY_CONSISTENT_AS_NEEDED) {
					checkConsistency(node, true);
				}
			},

			"Property:exit"(node) {
				const isConciseProperty = node.method || node.shorthand;

				// Ignore destructuring assignment
				if (node.parent.type === "ObjectPattern") {
					return;
				}

				// getters and setters are ignored
				if (node.kind === "get" || node.kind === "set") {
					return;
				}

				// only computed methods can fail the following checks
				if (
					node.computed &&
					node.value.type !== "FunctionExpression" &&
					node.value.type !== "ArrowFunctionExpression"
				) {
					return;
				}

				//--------------------------------------------------------------
				// Checks for property/method shorthand.
				if (isConciseProperty) {
					if (
						node.method &&
						(APPLY_NEVER ||
							(AVOID_QUOTES && isStringLiteral(node.key)))
					) {
						const messageId = APPLY_NEVER
							? "expectedMethodLongform"
							: "expectedLiteralMethodLongform";

						// { x() {} } should be written as { x: function() {} }
						context.report({
							node,
							messageId,
							fix: fixer => makeFunctionLongform(fixer, node),
						});
					} else if (APPLY_NEVER) {
						// { x } should be written as { x: x }
						context.report({
							node,
							messageId: "expectedPropertyLongform",
							fix: fixer =>
								fixer.insertTextAfter(
									node.key,
									`: ${node.key.name}`,
								),
						});
					}
				} else if (
					APPLY_TO_METHODS &&
					!node.value.id &&
					(node.value.type === "FunctionExpression" ||
						node.value.type === "ArrowFunctionExpression")
				) {
					if (
						IGNORE_CONSTRUCTORS &&
						node.key.type === "Identifier" &&
						isConstructor(node.key.name)
					) {
						return;
					}

					if (METHODS_IGNORE_PATTERN) {
						const propertyName =
							astUtils.getStaticPropertyName(node);

						if (
							propertyName !== null &&
							METHODS_IGNORE_PATTERN.test(propertyName)
						) {
							return;
						}
					}

					if (AVOID_QUOTES && isStringLiteral(node.key)) {
						return;
					}

					// {[x]: function(){}} should be written as {[x]() {}}
					if (
						node.value.type === "FunctionExpression" ||
						(node.value.type === "ArrowFunctionExpression" &&
							node.value.body.type === "BlockStatement" &&
							AVOID_EXPLICIT_RETURN_ARROWS &&
							!arrowsWithLexicalIdentifiers.has(node.value))
					) {
						context.report({
							node,
							messageId: "expectedMethodShorthand",
							fix: fixer => makeFunctionShorthand(fixer, node),
						});
					}
				} else if (
					node.value.type === "Identifier" &&
					node.key.name === node.value.name &&
					APPLY_TO_PROPS
				) {
					// Skip if there are JSDoc comments inside the property (e.g., JSDoc type annotations)
					const comments = sourceCode.getCommentsInside(node);
					if (
						comments.some(
							comment =>
								comment.type === "Block" &&
								JSDOC_COMMENT_REGEX.test(comment.value) &&
								comment.value.includes("@type"),
						)
					) {
						return;
					}

					// {x: x} should be written as {x}
					context.report({
						node,
						messageId: "expectedPropertyShorthand",
						fix(fixer) {
							// x: /* */ x
							// x: (/* */ x)
							if (sourceCode.getCommentsInside(node).length > 0) {
								return null;
							}

							return fixer.replaceText(node, node.value.name);
						},
					});
				} else if (
					node.value.type === "Identifier" &&
					node.key.type === "Literal" &&
					node.key.value === node.value.name &&
					APPLY_TO_PROPS
				) {
					if (AVOID_QUOTES) {
						return;
					}

					const comments = sourceCode.getCommentsInside(node);
					if (
						comments.some(
							comment =>
								comment.type === "Block" &&
								comment.value.startsWith("*") &&
								comment.value.includes("@type"),
						)
					) {
						return;
					}

					// {"x": x} should be written as {x}
					context.report({
						node,
						messageId: "expectedPropertyShorthand",
						fix(fixer) {
							// "x": /* */ x
							// "x": (/* */ x)
							if (sourceCode.getCommentsInside(node).length > 0) {
								return null;
							}

							return fixer.replaceText(node, node.value.name);
						},
					});
				}
			},
		};
	},
};
