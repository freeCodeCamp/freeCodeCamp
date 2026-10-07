/**
 * @fileoverview Rule to flag dangling underscores in variable declarations.
 * @author Matt DuVall <http://www.mattduvall.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				allow: [],
				allowAfterSuper: false,
				allowAfterThis: false,
				allowAfterThisConstructor: false,
				allowFunctionParams: true,
				allowInArrayDestructuring: true,
				allowInObjectDestructuring: true,
				enforceInClassFields: false,
				enforceInMethodNames: false,
			},
		],

		docs: {
			description: "Disallow dangling underscores in identifiers",
			recommended: false,
			frozen: true,
			url: "https://eslint.org/docs/latest/rules/no-underscore-dangle",
		},

		schema: [
			{
				type: "object",
				properties: {
					allow: {
						type: "array",
						items: {
							type: "string",
						},
					},
					allowAfterThis: {
						type: "boolean",
					},
					allowAfterSuper: {
						type: "boolean",
					},
					allowAfterThisConstructor: {
						type: "boolean",
					},
					enforceInMethodNames: {
						type: "boolean",
					},
					allowFunctionParams: {
						type: "boolean",
					},
					enforceInClassFields: {
						type: "boolean",
					},
					allowInArrayDestructuring: {
						type: "boolean",
					},
					allowInObjectDestructuring: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpectedUnderscore:
				"Unexpected dangling '_' in '{{identifier}}'.",
		},
	},

	create(context) {
		const [
			{
				allow,
				allowAfterSuper,
				allowAfterThis,
				allowAfterThisConstructor,
				allowFunctionParams,
				allowInArrayDestructuring,
				allowInObjectDestructuring,
				enforceInClassFields,
				enforceInMethodNames,
			},
		] = context.options;
		const sourceCode = context.sourceCode;

		//-------------------------------------------------------------------------
		// Helpers
		//-------------------------------------------------------------------------

		/**
		 * Check if identifier is present inside the allowed option
		 * @param {string} identifier name of the node
		 * @returns {boolean} true if its is present
		 * @private
		 */
		function isAllowed(identifier) {
			return allow.includes(identifier);
		}

		/**
		 * Check if identifier has a dangling underscore
		 * @param {string} identifier name of the node
		 * @returns {boolean} true if its is present
		 * @private
		 */
		function hasDanglingUnderscore(identifier) {
			const len = identifier.length;

			return (
				identifier !== "_" &&
				(identifier[0] === "_" || identifier[len - 1] === "_")
			);
		}

		/**
		 * Check if identifier is a special case member expression
		 * @param {string} identifier name of the node
		 * @returns {boolean} true if its is a special case
		 * @private
		 */
		function isSpecialCaseIdentifierForMemberExpression(identifier) {
			return identifier === "__proto__";
		}

		/**
		 * Check if identifier is a special case variable expression
		 * @param {string} identifier name of the node
		 * @returns {boolean} true if its is a special case
		 * @private
		 */
		function isSpecialCaseIdentifierInVariableExpression(identifier) {
			// Checks for the underscore library usage here
			return identifier === "_";
		}

		/**
		 * Check if a node is a member reference of this.constructor
		 * @param {ASTNode} node node to evaluate
		 * @returns {boolean} true if it is a reference on this.constructor
		 * @private
		 */
		function isThisConstructorReference(node) {
			return (
				node.object.type === "MemberExpression" &&
				node.object.property.name === "constructor" &&
				node.object.object.type === "ThisExpression"
			);
		}

		/**
		 * Check if function parameter has a dangling underscore.
		 * @param {ASTNode} node function node to evaluate
		 * @returns {void}
		 * @private
		 */
		function checkForDanglingUnderscoreInFunctionParameters(node) {
			if (!allowFunctionParams) {
				node.params.forEach(param => {
					const { type } = param;
					let nodeToCheck;

					if (type === "RestElement") {
						nodeToCheck = param.argument;
					} else if (type === "AssignmentPattern") {
						nodeToCheck = param.left;
					} else {
						nodeToCheck = param;
					}

					if (nodeToCheck.type === "Identifier") {
						const identifier = nodeToCheck.name;

						if (
							hasDanglingUnderscore(identifier) &&
							!isAllowed(identifier)
						) {
							context.report({
								node: param,
								messageId: "unexpectedUnderscore",
								data: {
									identifier,
								},
							});
						}
					}
				});
			}
		}

		/**
		 * Check if function has a dangling underscore
		 * @param {ASTNode} node node to evaluate
		 * @returns {void}
		 * @private
		 */
		function checkForDanglingUnderscoreInFunction(node) {
			if (node.type === "FunctionDeclaration" && node.id) {
				const identifier = node.id.name;

				if (
					typeof identifier !== "undefined" &&
					hasDanglingUnderscore(identifier) &&
					!isAllowed(identifier)
				) {
					context.report({
						node,
						messageId: "unexpectedUnderscore",
						data: {
							identifier,
						},
					});
				}
			}
			checkForDanglingUnderscoreInFunctionParameters(node);
		}

		/**
		 * Check if variable expression has a dangling underscore
		 * @param {ASTNode} node node to evaluate
		 * @returns {void}
		 * @private
		 */
		function checkForDanglingUnderscoreInVariableExpression(node) {
			sourceCode.getDeclaredVariables(node).forEach(variable => {
				const definition = variable.defs.find(def => def.node === node);
				const identifierNode = definition.name;
				const identifier = identifierNode.name;
				let parent = identifierNode.parent;

				while (
					![
						"VariableDeclarator",
						"ArrayPattern",
						"ObjectPattern",
					].includes(parent.type)
				) {
					parent = parent.parent;
				}

				if (
					hasDanglingUnderscore(identifier) &&
					!isSpecialCaseIdentifierInVariableExpression(identifier) &&
					!isAllowed(identifier) &&
					!(
						allowInArrayDestructuring &&
						parent.type === "ArrayPattern"
					) &&
					!(
						allowInObjectDestructuring &&
						parent.type === "ObjectPattern"
					)
				) {
					context.report({
						node,
						messageId: "unexpectedUnderscore",
						data: {
							identifier,
						},
					});
				}
			});
		}

		/**
		 * Check if member expression has a dangling underscore
		 * @param {ASTNode} node node to evaluate
		 * @returns {void}
		 * @private
		 */
		function checkForDanglingUnderscoreInMemberExpression(node) {
			const identifier = node.property.name,
				isMemberOfThis = node.object.type === "ThisExpression",
				isMemberOfSuper = node.object.type === "Super",
				isMemberOfThisConstructor = isThisConstructorReference(node);

			if (
				typeof identifier !== "undefined" &&
				hasDanglingUnderscore(identifier) &&
				!(isMemberOfThis && allowAfterThis) &&
				!(isMemberOfSuper && allowAfterSuper) &&
				!(isMemberOfThisConstructor && allowAfterThisConstructor) &&
				!isSpecialCaseIdentifierForMemberExpression(identifier) &&
				!isAllowed(identifier)
			) {
				context.report({
					node,
					messageId: "unexpectedUnderscore",
					data: {
						identifier,
					},
				});
			}
		}

		/**
		 * Check if method declaration or method property has a dangling underscore
		 * @param {ASTNode} node node to evaluate
		 * @returns {void}
		 * @private
		 */
		function checkForDanglingUnderscoreInMethod(node) {
			const identifier = node.key.name;
			const isMethod =
				node.type === "MethodDefinition" ||
				(node.type === "Property" && node.method);

			if (
				typeof identifier !== "undefined" &&
				enforceInMethodNames &&
				isMethod &&
				hasDanglingUnderscore(identifier) &&
				!isAllowed(identifier)
			) {
				context.report({
					node,
					messageId: "unexpectedUnderscore",
					data: {
						identifier:
							node.key.type === "PrivateIdentifier"
								? `#${identifier}`
								: identifier,
					},
				});
			}
		}

		/**
		 * Check if a class field has a dangling underscore
		 * @param {ASTNode} node node to evaluate
		 * @returns {void}
		 * @private
		 */
		function checkForDanglingUnderscoreInClassField(node) {
			const identifier = node.key.name;

			if (
				typeof identifier !== "undefined" &&
				hasDanglingUnderscore(identifier) &&
				enforceInClassFields &&
				!isAllowed(identifier)
			) {
				context.report({
					node,
					messageId: "unexpectedUnderscore",
					data: {
						identifier:
							node.key.type === "PrivateIdentifier"
								? `#${identifier}`
								: identifier,
					},
				});
			}
		}

		//--------------------------------------------------------------------------
		// Public API
		//--------------------------------------------------------------------------

		return {
			FunctionDeclaration: checkForDanglingUnderscoreInFunction,
			VariableDeclarator: checkForDanglingUnderscoreInVariableExpression,
			MemberExpression: checkForDanglingUnderscoreInMemberExpression,
			MethodDefinition: checkForDanglingUnderscoreInMethod,
			PropertyDefinition: checkForDanglingUnderscoreInClassField,
			Property: checkForDanglingUnderscoreInMethod,
			FunctionExpression: checkForDanglingUnderscoreInFunction,
			ArrowFunctionExpression: checkForDanglingUnderscoreInFunction,
		};
	},
};
