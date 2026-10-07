/**
 * @fileoverview Rule to flag declared but unused variables
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * A simple name for the types of variables that this rule supports
 * @typedef {'array-destructure'|'catch-clause'|'parameter'|'variable'} VariableType
 */

/**
 * Bag of data used for formatting the `unusedVar` lint message.
 * @typedef {Object} UnusedVarMessageData
 * @property {string} varName The name of the unused var.
 * @property {'defined'|'assigned a value'} action Description of the vars state.
 * @property {string} additional Any additional info to be appended at the end.
 */

/**
 * Bag of data used for formatting the `usedIgnoredVar` lint message.
 * @typedef {Object} UsedIgnoredVarMessageData
 * @property {string} varName The name of the unused var.
 * @property {string} additional Any additional info to be appended at the end.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description: "Disallow unused variables",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-unused-vars",
		},

		hasSuggestions: true,

		schema: [
			{
				oneOf: [
					{
						enum: ["all", "local"],
					},
					{
						type: "object",
						properties: {
							vars: {
								enum: ["all", "local"],
							},
							varsIgnorePattern: {
								type: "string",
							},
							args: {
								enum: ["all", "after-used", "none"],
							},
							ignoreRestSiblings: {
								type: "boolean",
							},
							argsIgnorePattern: {
								type: "string",
							},
							caughtErrors: {
								enum: ["all", "none"],
							},
							caughtErrorsIgnorePattern: {
								type: "string",
							},
							destructuredArrayIgnorePattern: {
								type: "string",
							},
							ignoreClassWithStaticInitBlock: {
								type: "boolean",
							},
							ignoreUsingDeclarations: {
								type: "boolean",
							},
							reportUsedIgnorePattern: {
								type: "boolean",
							},
						},
						additionalProperties: false,
					},
				],
			},
		],

		messages: {
			unusedVar:
				"'{{varName}}' is {{action}} but never used{{additional}}.",
			usedIgnoredVar:
				"'{{varName}}' is marked as ignored but is used{{additional}}.",
			removeVar: "Remove unused variable '{{varName}}'.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		const REST_PROPERTY_TYPE =
			/^(?:RestElement|(?:Experimental)?RestProperty)$/u;

		const config = {
			vars: "all",
			args: "after-used",
			ignoreRestSiblings: false,
			caughtErrors: "all",
			ignoreClassWithStaticInitBlock: false,
			ignoreUsingDeclarations: false,
			reportUsedIgnorePattern: false,
		};

		const firstOption = context.options[0];

		if (firstOption) {
			if (typeof firstOption === "string") {
				config.vars = firstOption;
			} else {
				config.vars = firstOption.vars || config.vars;
				config.args = firstOption.args || config.args;
				config.ignoreRestSiblings =
					firstOption.ignoreRestSiblings || config.ignoreRestSiblings;
				config.caughtErrors =
					firstOption.caughtErrors || config.caughtErrors;
				config.ignoreClassWithStaticInitBlock =
					firstOption.ignoreClassWithStaticInitBlock ||
					config.ignoreClassWithStaticInitBlock;
				config.ignoreUsingDeclarations =
					firstOption.ignoreUsingDeclarations ||
					config.ignoreUsingDeclarations;
				config.reportUsedIgnorePattern =
					firstOption.reportUsedIgnorePattern ||
					config.reportUsedIgnorePattern;

				if (firstOption.varsIgnorePattern) {
					config.varsIgnorePattern = new RegExp(
						firstOption.varsIgnorePattern,
						"u",
					);
				}

				if (firstOption.argsIgnorePattern) {
					config.argsIgnorePattern = new RegExp(
						firstOption.argsIgnorePattern,
						"u",
					);
				}

				if (firstOption.caughtErrorsIgnorePattern) {
					config.caughtErrorsIgnorePattern = new RegExp(
						firstOption.caughtErrorsIgnorePattern,
						"u",
					);
				}

				if (firstOption.destructuredArrayIgnorePattern) {
					config.destructuredArrayIgnorePattern = new RegExp(
						firstOption.destructuredArrayIgnorePattern,
						"u",
					);
				}
			}
		}

		/**
		 * Determines what variable type a def is.
		 * @param  {Object} def the declaration to check
		 * @returns {VariableType} a simple name for the types of variables that this rule supports
		 */
		function defToVariableType(def) {
			/*
			 * This `destructuredArrayIgnorePattern` error report works differently from the catch
			 * clause and parameter error reports. _Both_ the `varsIgnorePattern` and the
			 * `destructuredArrayIgnorePattern` will be checked for array destructuring. However,
			 * for the purposes of the report, the currently defined behavior is to only inform the
			 * user of the `destructuredArrayIgnorePattern` if it's present (regardless of the fact
			 * that the `varsIgnorePattern` would also apply). If it's not present, the user will be
			 * informed of the `varsIgnorePattern`, assuming that's present.
			 */
			if (
				config.destructuredArrayIgnorePattern &&
				def.name.parent.type === "ArrayPattern"
			) {
				return "array-destructure";
			}

			switch (def.type) {
				case "CatchClause":
					return "catch-clause";
				case "Parameter":
					return "parameter";

				default:
					return "variable";
			}
		}

		/**
		 * Gets a given variable's description and configured ignore pattern
		 * based on the provided variableType
		 * @param {VariableType} variableType a simple name for the types of variables that this rule supports
		 * @throws {Error} (Unreachable)
		 * @returns {[string | undefined, string | undefined]} the given variable's description and
		 * ignore pattern
		 */
		function getVariableDescription(variableType) {
			let pattern;
			let variableDescription;

			switch (variableType) {
				case "array-destructure":
					pattern = config.destructuredArrayIgnorePattern;
					variableDescription = "elements of array destructuring";
					break;

				case "catch-clause":
					pattern = config.caughtErrorsIgnorePattern;
					variableDescription = "caught errors";
					break;

				case "parameter":
					pattern = config.argsIgnorePattern;
					variableDescription = "args";
					break;

				case "variable":
					pattern = config.varsIgnorePattern;
					variableDescription = "vars";
					break;

				default:
					throw new Error(
						`Unexpected variable type: ${variableType}`,
					);
			}

			if (pattern) {
				pattern = pattern.toString();
			}

			return [variableDescription, pattern];
		}

		/**
		 * Generates the message data about the variable being defined and unused,
		 * including the ignore pattern if configured.
		 * @param {Variable} unusedVar eslint-scope variable object.
		 * @returns {UnusedVarMessageData} The message data to be used with this unused variable.
		 */
		function getDefinedMessageData(unusedVar) {
			const def = unusedVar.defs && unusedVar.defs[0];
			let additionalMessageData = "";

			if (def) {
				const [variableDescription, pattern] = getVariableDescription(
					defToVariableType(def),
				);

				if (pattern && variableDescription) {
					additionalMessageData = `. Allowed unused ${variableDescription} must match ${pattern}`;
				}
			}

			return {
				varName: unusedVar.name,
				action: "defined",
				additional: additionalMessageData,
			};
		}

		/**
		 * Generate the warning message about the variable being
		 * assigned and unused, including the ignore pattern if configured.
		 * @param {Variable} unusedVar eslint-scope variable object.
		 * @returns {UnusedVarMessageData} The message data to be used with this unused variable.
		 */
		function getAssignedMessageData(unusedVar) {
			const def = unusedVar.defs && unusedVar.defs[0];
			let additionalMessageData = "";

			if (def) {
				const [variableDescription, pattern] = getVariableDescription(
					defToVariableType(def),
				);

				if (pattern && variableDescription) {
					additionalMessageData = `. Allowed unused ${variableDescription} must match ${pattern}`;
				}
			}

			return {
				varName: unusedVar.name,
				action: "assigned a value",
				additional: additionalMessageData,
			};
		}

		/**
		 * Generate the warning message about a variable being used even though
		 * it is marked as being ignored.
		 * @param {Variable} variable eslint-scope variable object
		 * @param {VariableType} variableType a simple name for the types of variables that this rule supports
		 * @returns {UsedIgnoredVarMessageData} The message data to be used with
		 * this used ignored variable.
		 */
		function getUsedIgnoredMessageData(variable, variableType) {
			const [variableDescription, pattern] =
				getVariableDescription(variableType);

			let additionalMessageData = "";

			if (pattern && variableDescription) {
				additionalMessageData = `. Used ${variableDescription} must not match ${pattern}`;
			}

			return {
				varName: variable.name,
				additional: additionalMessageData,
			};
		}

		//--------------------------------------------------------------------------
		// Helpers
		//--------------------------------------------------------------------------

		const STATEMENT_TYPE = /(?:Statement|Declaration)$/u;

		/**
		 * Determines if a given variable is being exported from a module.
		 * @param {Variable} variable eslint-scope variable object.
		 * @returns {boolean} True if the variable is exported, false if not.
		 * @private
		 */
		function isExported(variable) {
			const definition = variable.defs[0];

			if (definition) {
				let node = definition.node;

				if (node.type === "VariableDeclarator") {
					node = node.parent;
				} else if (definition.type === "Parameter") {
					return false;
				}

				return node.parent.type.indexOf("Export") === 0;
			}
			return false;
		}

		/**
		 * Determines if a given variable uses the explicit resource management protocol.
		 * @param {Variable} variable eslint-scope variable object.
		 * @returns {boolean} True if the variable is declared with "using" or "await using"
		 * @private
		 */
		function usesExplicitResourceManagement(variable) {
			const [definition] = variable.defs;

			return (
				definition?.type === "Variable" &&
				(definition.parent.kind === "using" ||
					definition.parent.kind === "await using")
			);
		}

		/**
		 * Checks whether a node is a sibling of the rest property or not.
		 * @param {ASTNode} node a node to check
		 * @returns {boolean} True if the node is a sibling of the rest property, otherwise false.
		 */
		function hasRestSibling(node) {
			return (
				node.type === "Property" &&
				node.parent.type === "ObjectPattern" &&
				REST_PROPERTY_TYPE.test(node.parent.properties.at(-1).type)
			);
		}

		/**
		 * Determines if a variable has a sibling rest property
		 * @param {Variable} variable eslint-scope variable object.
		 * @returns {boolean} True if the variable has a sibling rest property, false if not.
		 * @private
		 */
		function hasRestSpreadSibling(variable) {
			if (config.ignoreRestSiblings) {
				const hasRestSiblingDefinition = variable.defs.some(def =>
					hasRestSibling(def.name.parent),
				);
				const hasRestSiblingReference = variable.references.some(ref =>
					hasRestSibling(ref.identifier.parent),
				);

				return hasRestSiblingDefinition || hasRestSiblingReference;
			}

			return false;
		}

		/**
		 * Determines if a reference is a read operation.
		 * @param {Reference} ref An eslint-scope Reference
		 * @returns {boolean} whether the given reference represents a read operation
		 * @private
		 */
		function isReadRef(ref) {
			return ref.isRead();
		}

		/**
		 * Determine if an identifier is referencing an enclosing function name.
		 * @param {Reference} ref The reference to check.
		 * @param {ASTNode[]} nodes The candidate function nodes.
		 * @returns {boolean} True if it's a self-reference, false if not.
		 * @private
		 */
		function isSelfReference(ref, nodes) {
			let scope = ref.from;

			while (scope) {
				if (nodes.includes(scope.block)) {
					return true;
				}

				scope = scope.upper;
			}

			return false;
		}

		/**
		 * Gets a list of function definitions for a specified variable.
		 * @param {Variable} variable eslint-scope variable object.
		 * @returns {ASTNode[]} Function nodes.
		 * @private
		 */
		function getFunctionDefinitions(variable) {
			const functionDefinitions = [];

			variable.defs.forEach(def => {
				const { type, node } = def;

				// FunctionDeclarations
				if (type === "FunctionName") {
					functionDefinitions.push(node);
				}

				// FunctionExpressions
				if (
					type === "Variable" &&
					node.init &&
					(node.init.type === "FunctionExpression" ||
						node.init.type === "ArrowFunctionExpression")
				) {
					functionDefinitions.push(node.init);
				}
			});
			return functionDefinitions;
		}

		/**
		 * Checks the position of given nodes.
		 * @param {ASTNode} inner A node which is expected as inside.
		 * @param {ASTNode} outer A node which is expected as outside.
		 * @returns {boolean} `true` if the `inner` node exists in the `outer` node.
		 * @private
		 */
		function isInside(inner, outer) {
			return (
				inner.range[0] >= outer.range[0] &&
				inner.range[1] <= outer.range[1]
			);
		}

		/**
		 * Checks whether a given node is unused expression or not.
		 * @param {ASTNode} node The node itself
		 * @returns {boolean} The node is an unused expression.
		 * @private
		 */
		function isUnusedExpression(node) {
			const parent = node.parent;

			if (parent.type === "ExpressionStatement") {
				return true;
			}

			if (parent.type === "SequenceExpression") {
				const isLastExpression = parent.expressions.at(-1) === node;

				if (!isLastExpression) {
					return true;
				}
				return isUnusedExpression(parent);
			}

			return false;
		}

		/**
		 * If a given reference is left-hand side of an assignment, this gets
		 * the right-hand side node of the assignment.
		 *
		 * In the following cases, this returns null.
		 *
		 * - The reference is not the LHS of an assignment expression.
		 * - The reference is inside of a loop.
		 * - The reference is inside of a function scope which is different from
		 *   the declaration.
		 * @param {eslint-scope.Reference} ref A reference to check.
		 * @param {ASTNode} prevRhsNode The previous RHS node.
		 * @returns {ASTNode|null} The RHS node or null.
		 * @private
		 */
		function getRhsNode(ref, prevRhsNode) {
			const id = ref.identifier;
			const parent = id.parent;
			const refScope = ref.from.variableScope;
			const varScope = ref.resolved.scope.variableScope;
			const canBeUsedLater =
				refScope !== varScope || astUtils.isInLoop(id);

			/*
			 * Inherits the previous node if this reference is in the node.
			 * This is for `a = a + a`-like code.
			 */
			if (prevRhsNode && isInside(id, prevRhsNode)) {
				return prevRhsNode;
			}

			if (
				parent.type === "AssignmentExpression" &&
				isUnusedExpression(parent) &&
				id === parent.left &&
				!canBeUsedLater
			) {
				return parent.right;
			}
			return null;
		}

		/**
		 * Checks whether a given function node is stored to somewhere or not.
		 * If the function node is stored, the function can be used later.
		 * @param {ASTNode} funcNode A function node to check.
		 * @param {ASTNode} rhsNode The RHS node of the previous assignment.
		 * @returns {boolean} `true` if under the following conditions:
		 *      - the funcNode is assigned to a variable.
		 *      - the funcNode is bound as an argument of a function call.
		 *      - the function is bound to a property and the object satisfies above conditions.
		 * @private
		 */
		function isStorableFunction(funcNode, rhsNode) {
			let node = funcNode;
			let parent = funcNode.parent;

			while (parent && isInside(parent, rhsNode)) {
				switch (parent.type) {
					case "SequenceExpression":
						if (parent.expressions.at(-1) !== node) {
							return false;
						}
						break;

					case "CallExpression":
					case "NewExpression":
						return parent.callee !== node;

					case "AssignmentExpression":
					case "TaggedTemplateExpression":
					case "YieldExpression":
						return true;

					default:
						if (STATEMENT_TYPE.test(parent.type)) {
							/*
							 * If it encountered statements, this is a complex pattern.
							 * Since analyzing complex patterns is hard, this returns `true` to avoid false positive.
							 */
							return true;
						}
				}

				node = parent;
				parent = parent.parent;
			}

			return false;
		}

		/**
		 * Checks whether a given Identifier node exists inside of a function node which can be used later.
		 *
		 * "can be used later" means:
		 * - the function is assigned to a variable.
		 * - the function is bound to a property and the object can be used later.
		 * - the function is bound as an argument of a function call.
		 *
		 * If a reference exists in a function which can be used later, the reference is read when the function is called.
		 * @param {ASTNode} id An Identifier node to check.
		 * @param {ASTNode} rhsNode The RHS node of the previous assignment.
		 * @returns {boolean} `true` if the `id` node exists inside of a function node which can be used later.
		 * @private
		 */
		function isInsideOfStorableFunction(id, rhsNode) {
			const funcNode = astUtils.getUpperFunction(id);

			return (
				funcNode &&
				isInside(funcNode, rhsNode) &&
				isStorableFunction(funcNode, rhsNode)
			);
		}

		/**
		 * Checks whether a given reference is a read to update itself or not.
		 * @param {eslint-scope.Reference} ref A reference to check.
		 * @param {ASTNode} rhsNode The RHS node of the previous assignment.
		 * @returns {boolean} The reference is a read to update itself.
		 * @private
		 */
		function isReadForItself(ref, rhsNode) {
			const id = ref.identifier;
			const parent = id.parent;

			return (
				ref.isRead() &&
				// self update. e.g. `a += 1`, `a++`
				((parent.type === "AssignmentExpression" &&
					parent.left === id &&
					isUnusedExpression(parent) &&
					!astUtils.isLogicalAssignmentOperator(parent.operator)) ||
					(parent.type === "UpdateExpression" &&
						isUnusedExpression(parent)) ||
					// in RHS of an assignment for itself. e.g. `a = a + 1`
					(rhsNode &&
						isInside(id, rhsNode) &&
						!isInsideOfStorableFunction(id, rhsNode)))
			);
		}

		/**
		 * Determine if an identifier is used either in for-in or for-of loops.
		 * @param {Reference} ref The reference to check.
		 * @returns {boolean} whether reference is used in the for-in loops
		 * @private
		 */
		function isForInOfRef(ref) {
			let target = ref.identifier.parent;

			// "for (var ...) { return; }"
			if (target.type === "VariableDeclarator") {
				target = target.parent.parent;
			}

			if (
				target.type !== "ForInStatement" &&
				target.type !== "ForOfStatement"
			) {
				return false;
			}

			// "for (...) { return; }"
			if (target.body.type === "BlockStatement") {
				target = target.body.body[0];

				// "for (...) return;"
			} else {
				target = target.body;
			}

			// For empty loop body
			if (!target) {
				return false;
			}

			return target.type === "ReturnStatement";
		}

		/**
		 * Determines if the variable is used.
		 * @param {Variable} variable The variable to check.
		 * @returns {boolean} True if the variable is used
		 * @private
		 */
		function isUsedVariable(variable) {
			if (variable.eslintUsed) {
				return true;
			}

			const functionNodes = getFunctionDefinitions(variable);
			const isFunctionDefinition = functionNodes.length > 0;

			let rhsNode = null;

			return variable.references.some(ref => {
				if (isForInOfRef(ref)) {
					return true;
				}

				const forItself = isReadForItself(ref, rhsNode);

				rhsNode = getRhsNode(ref, rhsNode);

				return (
					isReadRef(ref) &&
					!forItself &&
					!(
						isFunctionDefinition &&
						isSelfReference(ref, functionNodes)
					)
				);
			});
		}

		/**
		 * Checks whether the given variable is after the last used parameter.
		 * @param {eslint-scope.Variable} variable The variable to check.
		 * @returns {boolean} `true` if the variable is defined after the last
		 * used parameter.
		 */
		function isAfterLastUsedArg(variable) {
			const def = variable.defs[0];
			const params = sourceCode.getDeclaredVariables(def.node);
			const posteriorParams = params.slice(params.indexOf(variable) + 1);

			// If any used parameters occur after this parameter, do not report.
			return !posteriorParams.some(
				v => v.references.length > 0 || v.eslintUsed,
			);
		}

		/**
		 * Gets an array of variables without read references.
		 * @param {Scope} scope an eslint-scope Scope object.
		 * @param {Variable[]} unusedVars an array that saving result.
		 * @returns {Variable[]} unused variables of the scope and descendant scopes.
		 * @private
		 */
		function collectUnusedVariables(scope, unusedVars) {
			const variables = scope.variables;
			const childScopes = scope.childScopes;
			let i, l;

			if (scope.type !== "global" || config.vars === "all") {
				for (i = 0, l = variables.length; i < l; ++i) {
					const variable = variables[i];

					// skip a variable of class itself name in the class scope
					if (
						scope.type === "class" &&
						scope.block.id === variable.identifiers[0]
					) {
						continue;
					}

					// skip function expression names
					if (scope.functionExpressionScope) {
						continue;
					}

					// skip variables marked with markVariableAsUsed()
					if (
						!config.reportUsedIgnorePattern &&
						variable.eslintUsed
					) {
						continue;
					}

					// skip implicit "arguments" variable
					if (
						scope.type === "function" &&
						variable.name === "arguments" &&
						variable.identifiers.length === 0
					) {
						continue;
					}

					// explicit global variables don't have definitions.
					const def = variable.defs[0];

					if (def) {
						const type = def.type;
						const refUsedInArrayPatterns = variable.references.some(
							ref =>
								ref.identifier.parent.type === "ArrayPattern",
						);

						// skip elements of array destructuring patterns
						if (
							(def.name.parent.type === "ArrayPattern" ||
								refUsedInArrayPatterns) &&
							config.destructuredArrayIgnorePattern &&
							config.destructuredArrayIgnorePattern.test(
								def.name.name,
							)
						) {
							if (
								config.reportUsedIgnorePattern &&
								isUsedVariable(variable)
							) {
								context.report({
									node: def.name,
									messageId: "usedIgnoredVar",
									data: getUsedIgnoredMessageData(
										variable,
										"array-destructure",
									),
								});
							}

							continue;
						}

						if (type === "ClassName") {
							const hasStaticBlock = def.node.body.body.some(
								node => node.type === "StaticBlock",
							);

							if (
								config.ignoreClassWithStaticInitBlock &&
								hasStaticBlock
							) {
								continue;
							}
						}

						// skip catch variables
						if (type === "CatchClause") {
							if (config.caughtErrors === "none") {
								continue;
							}

							// skip ignored parameters
							if (
								config.caughtErrorsIgnorePattern &&
								config.caughtErrorsIgnorePattern.test(
									def.name.name,
								)
							) {
								if (
									config.reportUsedIgnorePattern &&
									isUsedVariable(variable)
								) {
									context.report({
										node: def.name,
										messageId: "usedIgnoredVar",
										data: getUsedIgnoredMessageData(
											variable,
											"catch-clause",
										),
									});
								}

								continue;
							}
						} else if (type === "Parameter") {
							// skip any setter argument
							if (
								(def.node.parent.type === "Property" ||
									def.node.parent.type ===
										"MethodDefinition") &&
								def.node.parent.kind === "set"
							) {
								continue;
							}

							// if "args" option is "none", skip any parameter
							if (config.args === "none") {
								continue;
							}

							// skip ignored parameters
							if (
								config.argsIgnorePattern &&
								config.argsIgnorePattern.test(def.name.name)
							) {
								if (
									config.reportUsedIgnorePattern &&
									isUsedVariable(variable)
								) {
									context.report({
										node: def.name,
										messageId: "usedIgnoredVar",
										data: getUsedIgnoredMessageData(
											variable,
											"parameter",
										),
									});
								}

								continue;
							}

							// if "args" option is "after-used", skip used variables
							if (
								config.args === "after-used" &&
								astUtils.isFunction(def.name.parent) &&
								!isAfterLastUsedArg(variable)
							) {
								continue;
							}
						} else {
							// skip ignored variables
							if (
								config.varsIgnorePattern &&
								config.varsIgnorePattern.test(def.name.name)
							) {
								if (
									config.reportUsedIgnorePattern &&
									isUsedVariable(variable)
								) {
									context.report({
										node: def.name,
										messageId: "usedIgnoredVar",
										data: getUsedIgnoredMessageData(
											variable,
											"variable",
										),
									});
								}

								continue;
							}
						}
					}

					if (
						!isUsedVariable(variable) &&
						!isExported(variable) &&
						!(
							config.ignoreUsingDeclarations &&
							usesExplicitResourceManagement(variable)
						) &&
						!hasRestSpreadSibling(variable)
					) {
						unusedVars.push(variable);
					}
				}
			}

			for (i = 0, l = childScopes.length; i < l; ++i) {
				collectUnusedVariables(childScopes[i], unusedVars);
			}

			return unusedVars;
		}

		/**
		 * fixes unused variables
		 * @param {Object} fixer fixer object
		 * @param {Object} unusedVar unused variable to fix
		 * @returns {Object} fixer object
		 */
		function handleFixes(fixer, unusedVar) {
			const id = unusedVar.identifiers[0];
			const parent = id.parent;
			const parentType = parent.type;
			const tokenBefore = sourceCode.getTokenBefore(id);
			const tokenAfter = sourceCode.getTokenAfter(id);
			const isFunction = astUtils.isFunction;
			const isLoop = astUtils.isLoop;
			const allWriteReferences = unusedVar.references.filter(ref =>
				ref.isWrite(),
			);

			/**
			 * get range from token before of a given node
			 * @param {ASTNode} node node of identifier
			 * @param {number} skips number of token to skip
			 * @returns {number} start range of token before the identifier
			 */
			function getPreviousTokenStart(node, skips) {
				return sourceCode.getTokenBefore(node, skips).range[0];
			}

			/**
			 * get range to token after of a given node
			 * @param {ASTNode} node node of identifier
			 * @param {number} skips number of token to skip
			 * @returns {number} end range of token after the identifier
			 */
			function getNextTokenEnd(node, skips) {
				return sourceCode.getTokenAfter(node, skips).range[1];
			}

			/**
			 * get the value of token before of a given node
			 * @param {ASTNode} node node of identifier
			 * @returns {string} value of token before the identifier
			 */
			function getTokenBeforeValue(node) {
				return sourceCode.getTokenBefore(node).value;
			}

			/**
			 * get the value of token after of a given node
			 * @param {ASTNode} node node of identifier
			 * @returns {string} value of token after the identifier
			 */
			function getTokenAfterValue(node) {
				return sourceCode.getTokenAfter(node).value;
			}

			/**
			 * Check if an array has a single element with null as other element.
			 * @param {ASTNode} node ArrayPattern node
			 * @returns {boolean} true if array has single element with other null elements
			 */
			function hasSingleElement(node) {
				return node.elements.filter(e => e !== null).length === 1;
			}

			/**
			 * check whether import specifier has an import of particular type
			 * @param {ASTNode} node ImportDeclaration node
			 * @param {string} type type of import to check
			 * @returns {boolean} true if import specifier has import of specified type
			 */
			function hasImportOfCertainType(node, type) {
				return node.specifiers.some(e => e.type === type);
			}

			/**
			 * Check whether declaration is safe to remove or not
			 * @param {ASTNode} nextToken next token of unused variable
			 * @param {ASTNode} prevToken previous token of unused variable
			 * @returns {boolean} true if declaration is not safe to remove
			 */
			function isDeclarationNotSafeToRemove(nextToken, prevToken) {
				return (
					nextToken.type === "String" ||
					(prevToken &&
						!astUtils.isSemicolonToken(prevToken) &&
						!astUtils.isOpeningBraceToken(prevToken))
				);
			}

			/**
			 * give fixes for unused variables in function parameters
			 * @param {ASTNode} node node to check
			 * @returns {Object} fixer object
			 */
			function fixFunctionParameters(node) {
				const parentNode = node.parent;

				if (isFunction(parentNode)) {
					// remove unused function parameter if there is only a single parameter
					if (parentNode.params.length === 1) {
						return fixer.removeRange(node.range);
					}

					// remove first unused function parameter when there are multiple parameters
					if (
						getTokenBeforeValue(node) === "(" &&
						getTokenAfterValue(node) === ","
					) {
						return fixer.removeRange([
							node.range[0],
							getNextTokenEnd(node),
						]);
					}

					// remove unused function parameters except first one when there are multiple parameters
					return fixer.removeRange([
						getPreviousTokenStart(node),
						node.range[1],
					]);
				}

				return null;
			}

			/**
			 * fix unused variable declarations and function parameters
			 * @param {ASTNode} node parent node to identifier
			 * @returns {Object} fixer object
			 */
			function fixVariables(node) {
				const parentNode = node.parent;

				// remove unused declared variables such as var a = b; or var a = b, c;
				if (parentNode.type === "VariableDeclarator") {
					// skip variable in for (const [ foo ] of bar);
					if (isLoop(parentNode.parent.parent)) {
						return null;
					}

					/*
					 * remove unused declared variable with single declaration such as 'var a = b;'
					 * remove complete declaration when there is an unused variable in 'const { a } = foo;', same for arrays.
					 */
					if (parentNode.parent.declarations.length === 1) {
						// if next token is a string it could become a directive if node is removed -> no suggestion.
						const nextToken = sourceCode.getTokenAfter(
							parentNode.parent,
						);

						// if previous token exists and is not ";" or "{" not sure about ASI rules -> no suggestion.
						const prevToken = sourceCode.getTokenBefore(
							parentNode.parent,
						);

						if (
							nextToken &&
							isDeclarationNotSafeToRemove(nextToken, prevToken)
						) {
							return null;
						}

						return fixer.removeRange(parentNode.parent.range);
					}

					/*
					 * remove unused declared variable with multiple declaration except first one such as 'var a = b, c = d;'
					 * fix 'let bar = "hello", { a } = foo;' to 'let bar = "hello";' if 'a' is unused, same for arrays.
					 */
					if (getTokenBeforeValue(parentNode) === ",") {
						return fixer.removeRange([
							getPreviousTokenStart(parentNode),
							parentNode.range[1],
						]);
					}

					/*
					 * remove first unused declared variable when there are multiple declarations
					 * fix 'let { a } = foo, bar = "hello";' to 'let  bar = "hello";' if 'a' is unused, same for arrays.
					 */
					return fixer.removeRange([
						parentNode.range[0],
						getNextTokenEnd(parentNode),
					]);
				}

				// fixes [{a: {k}}], [{a: [k]}]
				if (getTokenBeforeValue(node) === ":") {
					if (parentNode.parent.type === "ObjectPattern") {
						// eslint-disable-next-line no-use-before-define -- due to interdependency of functions
						return fixObjectWithValueSeparator(node);
					}
				}

				// fix unused function parameters
				return fixFunctionParameters(node);
			}

			/**
			 * fix nested object like { a: { b } }
			 * @param {ASTNode} node parent node to check
			 * @returns {Object} fixer object
			 */
			function fixNestedObjectVariable(node) {
				const parentNode = node.parent;

				// fix for { a: { b: { c: { d } } } }
				if (
					parentNode.parent.parent.parent.type === "ObjectPattern" &&
					parentNode.parent.properties.length === 1
				) {
					return fixNestedObjectVariable(parentNode.parent);
				}

				// fix for { a: { b } }
				if (parentNode.parent.type === "ObjectPattern") {
					// fix for unused variables in destructured object with single property in variable declaration and function parameter
					if (parentNode.parent.properties.length === 1) {
						return fixVariables(parentNode.parent);
					}

					// fix for first unused property when there are multiple properties such as '{ a: { b }, c }'
					if (getTokenBeforeValue(parentNode) === "{") {
						return fixer.removeRange([
							parentNode.range[0],
							getNextTokenEnd(parentNode),
						]);
					}

					// fix for unused property except first one when there are multiple properties such as '{ k, a: { b } }'
					return fixer.removeRange([
						getPreviousTokenStart(parentNode),
						parentNode.range[1],
					]);
				}

				return null;
			}

			/**
			 * fix unused variables in array and nested array
			 * @param {ASTNode} node parent node to check
			 * @returns {Object} fixer object
			 */
			function fixNestedArrayVariable(node) {
				const parentNode = node.parent;

				// fix for nested arrays [[ a ]]
				if (
					parentNode.parent.type === "ArrayPattern" &&
					hasSingleElement(parentNode)
				) {
					return fixNestedArrayVariable(parentNode);
				}

				if (hasSingleElement(parentNode)) {
					// fixes { a: [{ b }] } or { a: [[ b ]] }
					if (getTokenBeforeValue(parentNode) === ":") {
						return fixVariables(parentNode);
					}

					// fixes [a, ...[[ b ]]] or [a, ...[{ b }]]
					if (parentNode.parent.type === "RestElement") {
						// eslint-disable-next-line no-use-before-define -- due to interdependency of functions
						return fixRestInPattern(parentNode.parent);
					}

					// fix unused variables in destructured array in variable declaration or function parameter
					return fixVariables(parentNode);
				}

				// remove last unused array element
				if (
					getTokenBeforeValue(node) === "," &&
					getTokenAfterValue(node) === "]"
				) {
					return fixer.removeRange([
						getPreviousTokenStart(node),
						node.range[1],
					]);
				}

				// remove unused array element
				return fixer.removeRange(node.range);
			}

			/**
			 * fix cases like {a: {k}} or {a: [k]}
			 * @param {ASTNode} node parent node to check
			 * @returns {Object} fixer object
			 */
			function fixObjectWithValueSeparator(node) {
				const parentNode = node.parent.parent;

				// fix cases like [{a : { b }}] or [{a : [ b ]}]
				if (
					parentNode.parent.type === "ArrayPattern" &&
					parentNode.properties.length === 1
				) {
					return fixNestedArrayVariable(parentNode);
				}

				// fix cases like {a: {k}} or {a: [k]}
				return fixNestedObjectVariable(node);
			}

			/**
			 * fix ...[[a]] or ...[{a}] like patterns
			 * @param {ASTNode} node parent node to check
			 * @returns {Object} fixer object
			 */
			function fixRestInPattern(node) {
				const parentNode = node.parent;

				// fix ...[[a]] or ...[{a}] in function parameters
				if (isFunction(parentNode)) {
					if (parentNode.params.length === 1) {
						return fixer.removeRange(node.range);
					}

					return fixer.removeRange([
						getPreviousTokenStart(node),
						node.range[1],
					]);
				}

				// fix rest in nested array pattern like [[a, ...[b]]]
				if (parentNode.type === "ArrayPattern") {
					// fix [[...[b]]]
					if (hasSingleElement(parentNode)) {
						if (parentNode.parent.type === "ArrayPattern") {
							return fixNestedArrayVariable(parentNode);
						}

						// fix 'const [...[b]] = foo; and function foo([...[b]]) {}
						return fixVariables(parentNode);
					}

					// fix [[a, ...[b]]]
					return fixer.removeRange([
						getPreviousTokenStart(node),
						node.range[1],
					]);
				}

				return null;
			}

			// skip fix when variable has references that would be left behind
			if (
				allWriteReferences.some(
					ref => ref.identifier.range[0] !== id.range[0],
				)
			) {
				return null;
			}

			// remove declared variables such as var a; or var a, b;
			if (parentType === "VariableDeclarator") {
				if (parent.parent.declarations.length === 1) {
					// prevent fix of variable in forOf and forIn loops.
					if (
						isLoop(parent.parent.parent) &&
						parent.parent.parent.body !== parent.parent
					) {
						return null;
					}

					// removes only variable not semicolon in 'if (foo()) var bar;' or in 'loops' or in 'with' statement.
					if (
						parent.parent.parent.type === "IfStatement" ||
						isLoop(parent.parent.parent) ||
						(parent.parent.parent.type === "WithStatement" &&
							parent.parent.parent.body === parent.parent)
					) {
						return fixer.replaceText(parent.parent, ";");
					}

					// if next token is a string it could become a directive if node is removed -> no suggestion.
					const nextToken = sourceCode.getTokenAfter(parent.parent);

					// if previous token exists and is not ";" or "{" not sure about ASI rules -> no suggestion.
					const prevToken = sourceCode.getTokenBefore(parent.parent);

					if (
						nextToken &&
						isDeclarationNotSafeToRemove(nextToken, prevToken)
					) {
						return null;
					}

					// remove unused declared variable with single declaration like 'var a = b;'
					return fixer.removeRange(parent.parent.range);
				}

				// remove unused declared variable with multiple declaration except first one like 'var a = b, c = d;'
				if (tokenBefore.value === ",") {
					return fixer.removeRange([
						tokenBefore.range[0],
						parent.range[1],
					]);
				}

				// remove first unused declared variable when there are multiple declarations
				return fixer.removeRange([
					parent.range[0],
					getNextTokenEnd(parent),
				]);
			}

			// remove variables in object patterns
			if (parent.parent.type === "ObjectPattern") {
				if (parent.parent.properties.length === 1) {
					// fix [a, ...{b}]
					if (parent.parent.parent.type === "RestElement") {
						return fixRestInPattern(parent.parent.parent);
					}

					// fix [{ a }]
					if (parent.parent.parent.type === "ArrayPattern") {
						return fixNestedArrayVariable(parent.parent);
					}

					/*
					 * var {a} = foo;
					 * function a({a}) {}
					 * fix const { a: { b } } = foo;
					 */
					return fixVariables(parent.parent);
				}

				// fix const { a:b } = foo;
				if (tokenBefore.value === ":") {
					// remove first unused variable in const { a:b } = foo;
					if (
						getTokenBeforeValue(parent) === "{" &&
						getTokenAfterValue(parent) === ","
					) {
						return fixer.removeRange([
							parent.range[0],
							getNextTokenEnd(parent),
						]);
					}

					// remove unused variables in const { a: b, c: d } = foo; except first one
					return fixer.removeRange([
						getPreviousTokenStart(parent),
						id.range[1],
					]);
				}
			}

			// remove unused variables inside an array
			if (parentType === "ArrayPattern") {
				if (hasSingleElement(parent)) {
					// fix [a, ...[b]]
					if (parent.parent.type === "RestElement") {
						return fixRestInPattern(parent.parent);
					}

					// fix [ [a] ]
					if (parent.parent.type === "ArrayPattern") {
						return fixNestedArrayVariable(parent);
					}

					/*
					 * fix var [a] = foo;
					 * fix function foo([a]) {}
					 * fix const { a: [b] } = foo;
					 */
					return fixVariables(parent);
				}

				// if "a" is unused in [a, b ,c] fixes to [, b, c]
				if (tokenBefore.value === "," && tokenAfter.value === ",") {
					return fixer.removeRange(id.range);
				}
			}

			// remove unused rest elements
			if (parentType === "RestElement") {
				// fix [a, ...rest]
				if (parent.parent.type === "ArrayPattern") {
					if (hasSingleElement(parent.parent)) {
						// fix [[...rest]] when there is only rest element
						if (parent.parent.parent.type === "ArrayPattern") {
							return fixNestedArrayVariable(parent.parent);
						}

						// fix 'const [...rest] = foo;' and 'function foo([...rest]) {}'
						return fixVariables(parent.parent);
					}

					// fix [a, ...rest]
					return fixer.removeRange([
						getPreviousTokenStart(id, 1),
						id.range[1],
					]);
				}

				// fix { a, ...rest}
				if (parent.parent.type === "ObjectPattern") {
					// fix 'const {...rest} = foo;' and 'function foo({...rest}) {}'
					if (parent.parent.properties.length === 1) {
						return fixVariables(parent.parent);
					}

					// fix { a, ...rest} when there are multiple properties
					return fixer.removeRange([
						getPreviousTokenStart(id, 1),
						id.range[1],
					]);
				}

				// fix function foo(...rest) {}
				if (isFunction(parent.parent)) {
					// remove unused rest in function parameter if there is only single parameter
					if (parent.parent.params.length === 1) {
						return fixer.removeRange(parent.range);
					}

					// remove unused rest in function parameter if there multiple parameter
					return fixer.removeRange([
						getPreviousTokenStart(parent),
						parent.range[1],
					]);
				}
			}

			if (parentType === "AssignmentPattern") {
				// fix [a = aDefault]
				if (parent.parent.type === "ArrayPattern") {
					return fixNestedArrayVariable(parent);
				}

				// fix {a = aDefault}
				if (parent.parent.parent.type === "ObjectPattern") {
					if (parent.parent.parent.properties.length === 1) {
						// fixes [{a = aDefault}]
						if (
							parent.parent.parent.parent.type === "ArrayPattern"
						) {
							return fixNestedArrayVariable(parent.parent.parent);
						}

						// fix 'const {a = aDefault} = foo;' and 'function foo({a = aDefault}) {}'
						return fixVariables(parent.parent.parent);
					}

					// fix unused 'a' in {a = aDefault} if it is the first property
					if (
						getTokenBeforeValue(parent.parent) === "{" &&
						getTokenAfterValue(parent.parent) === ","
					) {
						return fixer.removeRange([
							parent.parent.range[0],
							getNextTokenEnd(parent.parent),
						]);
					}

					// fix unused 'b' in {a, b = aDefault} if it is not the first property
					return fixer.removeRange([
						getPreviousTokenStart(parent.parent),
						parent.parent.range[1],
					]);
				}

				// fix unused assignment patterns in function parameters
				if (isFunction(parent.parent)) {
					return fixFunctionParameters(parent);
				}
			}

			// remove unused functions
			if (parentType === "FunctionDeclaration" && parent.id === id) {
				return fixer.removeRange(parent.range);
			}

			// remove unused default import
			if (parentType === "ImportDefaultSpecifier") {
				// remove unused default import when there are not other imports
				if (
					!hasImportOfCertainType(parent.parent, "ImportSpecifier") &&
					!hasImportOfCertainType(
						parent.parent,
						"ImportNamespaceSpecifier",
					)
				) {
					return fixer.removeRange([
						parent.range[0],
						parent.parent.source.range[0],
					]);
				}

				// remove unused default import when there are other imports also
				return fixer.removeRange([id.range[0], tokenAfter.range[1]]);
			}

			if (parentType === "ImportSpecifier") {
				// remove unused imports when there is a single import
				if (
					parent.parent.specifiers.filter(
						e => e.type === "ImportSpecifier",
					).length === 1
				) {
					// remove unused import when there is no default import
					if (
						!hasImportOfCertainType(
							parent.parent,
							"ImportDefaultSpecifier",
						)
					) {
						return fixer.removeRange(parent.parent.range);
					}

					// fixes "import foo from 'module';" to "import 'module';"
					return fixer.removeRange([
						getPreviousTokenStart(parent, 1),
						tokenAfter.range[1],
					]);
				}

				if (getTokenBeforeValue(parent) === "{") {
					return fixer.removeRange([
						parent.range[0],
						getNextTokenEnd(parent),
					]);
				}

				return fixer.removeRange([
					getPreviousTokenStart(parent),
					parent.range[1],
				]);
			}

			if (parentType === "ImportNamespaceSpecifier") {
				if (
					hasImportOfCertainType(
						parent.parent,
						"ImportDefaultSpecifier",
					)
				) {
					return fixer.removeRange([
						getPreviousTokenStart(parent),
						parent.range[1],
					]);
				}

				// fixes "import * as foo from 'module';" to "import 'module';"
				return fixer.removeRange([
					parent.range[0],
					parent.parent.source.range[0],
				]);
			}

			// skip error in catch(error) variable
			if (parentType === "CatchClause") {
				return null;
			}

			// remove unused declared classes
			if (parentType === "ClassDeclaration") {
				return fixer.removeRange(parent.range);
			}

			// remove unused variable that is in a sequence [a,b] fixes to [a]
			if (tokenBefore?.value === ",") {
				return fixer.removeRange([tokenBefore.range[0], id.range[1]]);
			}

			// remove unused variable that is in a sequence inside function arguments and object pattern
			if (tokenAfter.value === ",") {
				// fix function foo(a, b) {}
				if (tokenBefore.value === "(") {
					return fixer.removeRange([
						id.range[0],
						tokenAfter.range[1],
					]);
				}

				// fix const {a, b} = foo;
				if (tokenBefore.value === "{") {
					return fixer.removeRange([
						id.range[0],
						tokenAfter.range[1],
					]);
				}
			}

			if (
				parentType === "ArrowFunctionExpression" &&
				parent.params.length === 1 &&
				tokenAfter?.value !== ")"
			) {
				return fixer.replaceText(id, "()");
			}

			return fixer.removeRange(id.range);
		}

		//--------------------------------------------------------------------------
		// Public
		//--------------------------------------------------------------------------

		return {
			"Program:exit"(programNode) {
				const unusedVars = collectUnusedVariables(
					sourceCode.getScope(programNode),
					[],
				);

				for (let i = 0, l = unusedVars.length; i < l; ++i) {
					const unusedVar = unusedVars[i];

					// Report the first declaration.
					if (unusedVar.defs.length > 0) {
						// report last write reference, https://github.com/eslint/eslint/issues/14324
						const writeReferences = unusedVar.references.filter(
							ref =>
								ref.isWrite() &&
								ref.from.variableScope ===
									unusedVar.scope.variableScope,
						);

						let referenceToReport;

						if (writeReferences.length > 0) {
							referenceToReport = writeReferences.at(-1);
						}

						context.report({
							node: referenceToReport
								? referenceToReport.identifier
								: unusedVar.identifiers[0],
							messageId: "unusedVar",
							data: unusedVar.references.some(ref =>
								ref.isWrite(),
							)
								? getAssignedMessageData(unusedVar)
								: getDefinedMessageData(unusedVar),
							suggest: [
								{
									messageId: "removeVar",
									data: {
										varName: unusedVar.name,
									},
									fix(fixer) {
										return handleFixes(fixer, unusedVar);
									},
								},
							],
						});

						// If there are no regular declaration, report the first `/*globals*/` comment directive.
					} else if (unusedVar.eslintExplicitGlobalComments) {
						const directiveComment =
							unusedVar.eslintExplicitGlobalComments[0];

						context.report({
							node: programNode,
							loc: astUtils.getNameLocationInGlobalDirectiveComment(
								sourceCode,
								directiveComment,
								unusedVar.name,
							),
							messageId: "unusedVar",
							data: getDefinedMessageData(unusedVar),
						});
					}
				}
			},
		};
	},
};
