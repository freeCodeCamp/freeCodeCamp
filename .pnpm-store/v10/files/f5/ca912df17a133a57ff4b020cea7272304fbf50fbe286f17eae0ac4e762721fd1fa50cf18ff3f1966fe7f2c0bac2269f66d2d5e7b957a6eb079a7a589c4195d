/**
 * @fileoverview Rule to preserve caught errors when re-throwing exceptions
 * @author Amnish Singh Arora
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Types
//------------------------------------------------------------------------------

/** @typedef {import("estree").Node} ASTNode */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/*
 * This is an indicator of an error cause node, that is too complicated to be detected and fixed.
 * Eg, when error options is an `Identifier` or a `SpreadElement`.
 */
const UNKNOWN_CAUSE = Symbol("unknown_cause");

const BUILT_IN_ERROR_TYPES = new Set([
	"Error",
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError",
	"AggregateError",
]);

/**
 * Finds and returns information about the `cause` property of an error being thrown.
 * @param {ASTNode} throwStatement `ThrowStatement` to be checked.
 * @returns {{ value: ASTNode; multipleDefinitions: boolean; } | UNKNOWN_CAUSE | null}
 * Information about the `cause` of the error being thrown, such as the value node and
 * whether there are multiple definitions of `cause`. `null` if there is no `cause`.
 */
function getErrorCause(throwStatement) {
	const throwExpression = throwStatement.argument;
	/*
	 * Determine which argument index holds the options object
	 * `AggregateError` is a special case as it accepts the `options` object as third argument.
	 */
	const optionsIndex =
		throwExpression.callee.name === "AggregateError" ? 2 : 1;

	/*
	 * Make sure there is no `SpreadElement` at or before the `optionsIndex`
	 * as this messes up the effective order of arguments and makes it complicated
	 * to track where the actual error options need to be at
	 */
	const spreadExpressionIndex = throwExpression.arguments.findIndex(
		arg => arg.type === "SpreadElement",
	);
	if (spreadExpressionIndex >= 0 && spreadExpressionIndex <= optionsIndex) {
		return UNKNOWN_CAUSE;
	}

	const errorOptions = throwExpression.arguments[optionsIndex];

	if (errorOptions) {
		if (errorOptions.type === "ObjectExpression") {
			if (
				errorOptions.properties.some(
					prop => prop.type === "SpreadElement",
				)
			) {
				/*
				 * If there is a spread element as part of error options, it is too complicated
				 * to verify if the cause is used properly and auto-fix.
				 */
				return UNKNOWN_CAUSE;
			}

			const causeProperties = errorOptions.properties.filter(
				prop => astUtils.getStaticPropertyName(prop) === "cause",
			);

			const causeProperty = causeProperties.at(-1);
			return causeProperty
				? {
						value: causeProperty.value,
						multipleDefinitions: causeProperties.length > 1,
					}
				: null;
		}

		// Error options exist, but too complicated to be analyzed/fixed
		return UNKNOWN_CAUSE;
	}

	return null;
}

/**
 * Finds and returns the `CatchClause` node, that the `node` is part of.
 * @param {ASTNode} node The AST node to be evaluated.
 * @returns {ASTNode | null } The closest parent `CatchClause` node, `null` if the `node` is not in a catch block.
 */
function findParentCatch(node) {
	let currentNode = node;

	while (currentNode && currentNode.type !== "CatchClause") {
		if (
			[
				"FunctionDeclaration",
				"FunctionExpression",
				"ArrowFunctionExpression",
				"StaticBlock",
			].includes(currentNode.type)
		) {
			/*
			 * Make sure the ThrowStatement is not made inside a function definition or a static block inside a high level catch.
			 * In such cases, the caught error is not directly related to the Throw.
			 *
			 * For example,
			 * try {
			 * } catch (error) {
			 * 	foo = {
			 * 		bar() {
			 *	 	throw new Error();
			 * 	  }
			 * };
			 * }
			 */
			return null;
		}
		currentNode = currentNode.parent;
	}

	return currentNode;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				requireCatchParameter: false,
			},
		],

		docs: {
			description:
				"Disallow losing originally caught error when re-throwing custom errors",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/preserve-caught-error", // URL to the documentation page for this rule
		},
		/*
		 * TODO: We should allow passing `customErrorTypes` option once something like `typescript-eslint`'s
		 * 		`TypeOrValueSpecifier` is implemented in core Eslint.
		 *      See:
		 * 		1. https://typescript-eslint.io/packages/type-utils/type-or-value-specifier/
		 *      2. https://github.com/eslint/eslint/pull/19913#discussion_r2192608593
		 *      3. https://github.com/eslint/eslint/discussions/16540
		 */
		schema: [
			{
				type: "object",
				properties: {
					requireCatchParameter: {
						type: "boolean",
						description:
							"Requires the catch blocks to always have the caught error parameter so it is not discarded.",
					},
				},
				additionalProperties: false,
			},
		],
		messages: {
			missingCause:
				"There is no `cause` attached to the symptom error being thrown.",
			incorrectCause:
				"The symptom error is being thrown with an incorrect `cause`.",
			includeCause:
				"Include the original caught error as the `cause` of the symptom error.",
			missingCatchErrorParam:
				"The caught error is not accessible because the catch clause lacks the error parameter. Start referencing the caught error using the catch parameter.",
			partiallyLostError:
				"Re-throws cannot preserve the caught error as a part of it is being lost due to destructuring.",
			caughtErrorShadowed:
				"The caught error is being attached as `cause`, but is shadowed by a closer scoped redeclaration.",
		},
		hasSuggestions: true,
	},

	create(context) {
		const sourceCode = context.sourceCode;
		const [{ requireCatchParameter }] = context.options;

		//----------------------------------------------------------------------
		// Helpers
		//----------------------------------------------------------------------

		/**
		 * Checks if a `ThrowStatement` is constructing and throwing a new `Error` object.
		 *
		 * Covers all the error types on `globalThis` that support `cause` property:
		 * https://github.com/microsoft/TypeScript/blob/main/src/lib/es2022.error.d.ts
		 * @param {ASTNode} throwStatement The `ThrowStatement` that needs to be checked.
		 * @returns {boolean} `true` if a new "Error" is being thrown, else `false`.
		 */
		function isThrowingNewError(throwStatement) {
			return (
				(throwStatement.argument.type === "NewExpression" ||
					throwStatement.argument.type === "CallExpression") &&
				throwStatement.argument.callee.type === "Identifier" &&
				BUILT_IN_ERROR_TYPES.has(throwStatement.argument.callee.name) &&
				/*
				 * Make sure the thrown Error is instance is one of the built-in global error types.
				 * Custom imports could shadow this, which would lead to false positives.
				 * e.g. import { Error } from "./my-custom-error.js";
				 *      throw Error("Failed to perform error prone operations");
				 */
				sourceCode.isGlobalReference(throwStatement.argument.callee)
			);
		}

		/**
		 * Inserts `cause: <caughtErrorName>` into an inline options object expression.
		 * @param {RuleFixer} fixer The fixer object.
		 * @param {ASTNode} optionsNode The options object node.
		 * @param {string} caughtErrorName The name of the caught error (e.g., "err").
		 * @returns {Fix} The fix object.
		 */
		function insertCauseIntoOptions(fixer, optionsNode, caughtErrorName) {
			const properties = optionsNode.properties;

			if (properties.length === 0) {
				// Insert inside empty braces: `{}` → `{ cause: err }`
				return fixer.insertTextAfter(
					sourceCode.getFirstToken(optionsNode),
					`cause: ${caughtErrorName}`,
				);
			}

			const lastProp = properties.at(-1);
			return fixer.insertTextAfter(
				lastProp,
				`, cause: ${caughtErrorName}`,
			);
		}

		//----------------------------------------------------------------------
		// Public
		//----------------------------------------------------------------------
		return {
			ThrowStatement(node) {
				// Check if the throw is inside a catch block
				const parentCatch = findParentCatch(node);
				const throwStatement = node;

				// Check if a new error is being thrown in a catch block
				if (parentCatch && isThrowingNewError(throwStatement)) {
					if (
						parentCatch.param &&
						parentCatch.param.type !== "Identifier"
					) {
						/*
						 * When a part of the caught error is being lost at the parameter level, commonly due to destructuring.
						 * e.g. catch({ message, ...rest })
						 */
						context.report({
							messageId: "partiallyLostError",
							node: parentCatch,
						});
						return;
					}

					const caughtError =
						parentCatch.param?.type === "Identifier"
							? parentCatch.param
							: null;

					// Check if there are throw statements and caught error is being ignored
					if (!caughtError) {
						if (requireCatchParameter) {
							context.report({
								node: throwStatement,
								messageId: "missingCatchErrorParam",
							});
							return;
						}
						return;
					}

					// Check if there is a cause attached to the new error
					const errorCauseInfo = getErrorCause(throwStatement);

					if (errorCauseInfo === UNKNOWN_CAUSE) {
						// Error options exist, but too complicated to be analyzed/fixed
						return;
					}

					if (errorCauseInfo === null) {
						// If there is no `cause` attached to the error being thrown.
						context.report({
							messageId: "missingCause",
							node: throwStatement,
							suggest: [
								{
									messageId: "includeCause",
									fix(fixer) {
										const throwExpression =
											throwStatement.argument;
										const args = throwExpression.arguments;
										const errorType =
											throwExpression.callee.name;

										// AggregateError: errors, message, options
										if (errorType === "AggregateError") {
											const errorsArg = args[0];
											const messageArg = args[1];
											const optionsArg = args[2];

											if (!errorsArg) {
												// Case: `throw new AggregateError()` → insert all arguments
												const lastToken =
													sourceCode.getLastToken(
														throwExpression,
													);
												const lastCalleeToken =
													sourceCode.getLastToken(
														throwExpression.callee,
													);
												const parenToken =
													sourceCode.getFirstTokenBetween(
														lastCalleeToken,
														lastToken,
														astUtils.isOpeningParenToken,
													);

												if (parenToken) {
													return fixer.insertTextAfter(
														parenToken,
														`[], "", { cause: ${caughtError.name} }`,
													);
												}
												return fixer.insertTextAfter(
													throwExpression.callee,
													`([], "", { cause: ${caughtError.name} })`,
												);
											}

											if (!messageArg) {
												// Case: `throw new AggregateError([])` → insert message and options
												return fixer.insertTextAfter(
													errorsArg,
													`, "", { cause: ${caughtError.name} }`,
												);
											}

											if (!optionsArg) {
												// Case: `throw new AggregateError([], "")` → insert error options only
												return fixer.insertTextAfter(
													messageArg,
													`, { cause: ${caughtError.name} }`,
												);
											}

											if (
												optionsArg.type ===
												"ObjectExpression"
											) {
												return insertCauseIntoOptions(
													fixer,
													optionsArg,
													caughtError.name,
												);
											}

											// Complex dynamic options — skip
											return null;
										}

										// Normal Error types
										const messageArg = args[0];
										const optionsArg = args[1];

										if (!messageArg) {
											// Case: `throw new Error()` → insert both message and options
											const lastToken =
												sourceCode.getLastToken(
													throwExpression,
												);
											const lastCalleeToken =
												sourceCode.getLastToken(
													throwExpression.callee,
												);
											const parenToken =
												sourceCode.getFirstTokenBetween(
													lastCalleeToken,
													lastToken,
													astUtils.isOpeningParenToken,
												);

											if (parenToken) {
												return fixer.insertTextAfter(
													parenToken,
													`"", { cause: ${caughtError.name} }`,
												);
											}
											return fixer.insertTextAfter(
												throwExpression.callee,
												`("", { cause: ${caughtError.name} })`,
											);
										}
										if (!optionsArg) {
											// Case: `throw new Error("Some message")` → insert only options
											return fixer.insertTextAfter(
												messageArg,
												`, { cause: ${caughtError.name} }`,
											);
										}

										if (
											optionsArg.type ===
											"ObjectExpression"
										) {
											return insertCauseIntoOptions(
												fixer,
												optionsArg,
												caughtError.name,
											);
										}

										return null; // Identifier or spread — do not fix
									},
								},
							],
						});

						// We don't need to check further
						return;
					}

					const { value: thrownErrorCause } = errorCauseInfo;

					// If there is an attached cause, verify that it matches the caught error
					if (
						!(
							thrownErrorCause.type === "Identifier" &&
							thrownErrorCause.name === caughtError.name
						)
					) {
						const suggest = errorCauseInfo.multipleDefinitions
							? null // If there are multiple `cause` definitions, a suggestion could be confusing.
							: [
									{
										messageId: "includeCause",
										fix(fixer) {
											/*
											 * In case `cause` is attached using object property shorthand or as a method or accessor.
											 * e.g. throw Error("fail", { cause });
											 *      throw Error("fail", { cause() { doSomething(); } });
											 *      throw Error("fail", { get cause() { return error; } });
											 */
											if (
												thrownErrorCause.parent
													.method ||
												thrownErrorCause.parent
													.shorthand ||
												thrownErrorCause.parent.kind !==
													"init"
											) {
												return fixer.replaceText(
													thrownErrorCause.parent,
													`cause: ${caughtError.name}`,
												);
											}

											return fixer.replaceText(
												thrownErrorCause,
												caughtError.name,
											);
										},
									},
								];
						context.report({
							messageId: "incorrectCause",
							node: thrownErrorCause,
							suggest,
						});
						return;
					}

					/*
					 * If the attached cause matches the identifier name of the caught error,
					 * make sure it is not being shadowed by a closer scoped redeclaration.
					 *
					 * e.g. try {
					 *      doSomething();
					 * 	  } catch (error) {
					 * 	     if (whatever) {
					 * 	       const error = anotherError;
					 * 	       throw new Error("Something went wrong");
					 * 	     }
					 *   }
					 */
					let scope = sourceCode.getScope(throwStatement);
					do {
						const variable = scope.set.get(caughtError.name);
						if (variable) {
							break;
						}
						scope = scope.upper;
					} while (scope);

					if (scope?.block !== parentCatch) {
						// Caught error is being shadowed
						context.report({
							messageId: "caughtErrorShadowed",
							node: throwStatement,
						});
					}
				}
			},
		};
	},
};
