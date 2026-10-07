/**
 * @fileoverview A rule to suggest using of const declaration for variables that are never reassigned after declared.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const FixTracker = require("./utils/fix-tracker");
const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const PATTERN_TYPE =
	/^(?:.+?Pattern|RestElement|SpreadProperty|ExperimentalRestProperty|Property)$/u;
const DECLARATION_HOST_TYPE =
	/^(?:Program|BlockStatement|StaticBlock|SwitchCase)$/u;
const DESTRUCTURING_HOST_TYPE =
	/^(?:VariableDeclarator|AssignmentExpression)$/u;

/**
 * Checks whether a given node is located at `ForStatement.init` or not.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if the node is located at `ForStatement.init`.
 */
function isInitOfForStatement(node) {
	return node.parent.type === "ForStatement" && node.parent.init === node;
}

/**
 * Checks whether a given Identifier node becomes a VariableDeclaration or not.
 * @param {ASTNode} identifier An Identifier node to check.
 * @returns {boolean} `true` if the node can become a VariableDeclaration.
 */
function canBecomeVariableDeclaration(identifier) {
	let node = identifier.parent;

	while (PATTERN_TYPE.test(node.type)) {
		node = node.parent;
	}

	return (
		node.type === "VariableDeclarator" ||
		(node.type === "AssignmentExpression" &&
			node.parent.type === "ExpressionStatement" &&
			DECLARATION_HOST_TYPE.test(node.parent.parent.type))
	);
}

/**
 * Checks if an property or element is from outer scope or function parameters
 * in destructing pattern.
 * @param {string} name A variable name to be checked.
 * @param {eslint-scope.Scope} initScope A scope to start find.
 * @returns {boolean} Indicates if the variable is from outer scope or function parameters.
 */
function isOuterVariableInDestructing(name, initScope) {
	if (
		initScope.through.some(
			ref => ref.resolved && ref.resolved.name === name,
		)
	) {
		return true;
	}

	const variable = astUtils.getVariableByName(initScope, name);

	if (variable !== null) {
		return variable.defs.some(def => def.type === "Parameter");
	}

	return false;
}

/**
 * Gets the VariableDeclarator/AssignmentExpression node that a given reference
 * belongs to.
 * This is used to detect a mix of reassigned and never reassigned in a
 * destructuring.
 * @param {eslint-scope.Reference} reference A reference to get.
 * @returns {ASTNode|null} A VariableDeclarator/AssignmentExpression node or
 *      null.
 */
function getDestructuringHost(reference) {
	if (!reference.isWrite()) {
		return null;
	}
	let node = reference.identifier.parent;

	while (PATTERN_TYPE.test(node.type)) {
		node = node.parent;
	}

	if (!DESTRUCTURING_HOST_TYPE.test(node.type)) {
		return null;
	}
	return node;
}

/**
 * Determines if a destructuring assignment node contains
 * any MemberExpression nodes. This is used to determine if a
 * variable that is only written once using destructuring can be
 * safely converted into a const declaration.
 * @param {ASTNode} node The ObjectPattern or ArrayPattern node to check.
 * @returns {boolean} True if the destructuring pattern contains
 *      a MemberExpression, false if not.
 */
function hasMemberExpressionAssignment(node) {
	switch (node.type) {
		case "ObjectPattern":
			return node.properties.some(prop => {
				if (prop) {
					/*
					 * Spread elements have an argument property while
					 * others have a value property. Because different
					 * parsers use different node types for spread elements,
					 * we just check if there is an argument property.
					 */
					return hasMemberExpressionAssignment(
						prop.argument || prop.value,
					);
				}

				return false;
			});

		case "ArrayPattern":
			return node.elements.some(element => {
				if (element) {
					return hasMemberExpressionAssignment(element);
				}

				return false;
			});

		case "AssignmentPattern":
			return hasMemberExpressionAssignment(node.left);

		case "MemberExpression":
			return true;

		// no default
	}

	return false;
}

/**
 * Gets an identifier node of a given variable.
 *
 * If the initialization exists or one or more reading references exist before
 * the first assignment, the identifier node is the node of the declaration.
 * Otherwise, the identifier node is the node of the first assignment.
 *
 * If the variable should not change to const, this function returns null.
 * - If the variable is reassigned.
 * - If the variable is never initialized nor assigned.
 * - If the variable is initialized in a different scope from the declaration.
 * - If the unique assignment of the variable cannot change to a declaration.
 *   e.g. `if (a) b = 1` / `return (b = 1)`
 * - If the variable is declared in the global scope and `eslintUsed` is `true`.
 *   `/*exported foo` directive comment makes such variables. This rule does not
 *   warn such variables because this rule cannot distinguish whether the
 *   exported variables are reassigned or not.
 * @param {eslint-scope.Variable} variable A variable to get.
 * @param {boolean} ignoreReadBeforeAssign
 *      The value of `ignoreReadBeforeAssign` option.
 * @returns {ASTNode|null}
 *      An Identifier node if the variable should change to const.
 *      Otherwise, null.
 */
function getIdentifierIfShouldBeConst(variable, ignoreReadBeforeAssign) {
	if (variable.eslintUsed && variable.scope.type === "global") {
		return null;
	}

	// Finds the unique WriteReference.
	let writer = null;
	let isReadBeforeInit = false;
	const references = variable.references;

	for (let i = 0; i < references.length; ++i) {
		const reference = references[i];

		if (reference.isWrite()) {
			const isReassigned =
				writer !== null && writer.identifier !== reference.identifier;

			if (isReassigned) {
				return null;
			}

			const destructuringHost = getDestructuringHost(reference);

			if (
				destructuringHost !== null &&
				destructuringHost.left !== void 0
			) {
				const leftNode = destructuringHost.left;
				let hasOuterVariables = false,
					hasNonIdentifiers = false;

				if (leftNode.type === "ObjectPattern") {
					const properties = leftNode.properties;

					hasOuterVariables = properties
						.filter(prop => prop.value)
						.map(prop => prop.value.name)
						.some(name =>
							isOuterVariableInDestructing(name, variable.scope),
						);

					hasNonIdentifiers = hasMemberExpressionAssignment(leftNode);
				} else if (leftNode.type === "ArrayPattern") {
					const elements = leftNode.elements;

					hasOuterVariables = elements
						.map(element => element && element.name)
						.some(name =>
							isOuterVariableInDestructing(name, variable.scope),
						);

					hasNonIdentifiers = hasMemberExpressionAssignment(leftNode);
				}

				if (hasOuterVariables || hasNonIdentifiers) {
					return null;
				}
			}

			writer = reference;
		} else if (reference.isRead() && writer === null) {
			if (ignoreReadBeforeAssign) {
				return null;
			}
			isReadBeforeInit = true;
		}
	}

	/*
	 * If the assignment is from a different scope, ignore it.
	 * If the assignment cannot change to a declaration, ignore it.
	 */
	const shouldBeConst =
		writer !== null &&
		writer.from === variable.scope &&
		canBecomeVariableDeclaration(writer.identifier);

	if (!shouldBeConst) {
		return null;
	}

	if (isReadBeforeInit) {
		return variable.defs[0].name;
	}

	return writer.identifier;
}

/**
 * Groups by the VariableDeclarator/AssignmentExpression node that each
 * reference of given variables belongs to.
 * This is used to detect a mix of reassigned and never reassigned in a
 * destructuring.
 * @param {eslint-scope.Variable[]} variables Variables to group by destructuring.
 * @param {boolean} ignoreReadBeforeAssign
 *      The value of `ignoreReadBeforeAssign` option.
 * @returns {Map<ASTNode, ASTNode[]>} Grouped identifier nodes.
 */
function groupByDestructuring(variables, ignoreReadBeforeAssign) {
	const identifierMap = new Map();

	for (let i = 0; i < variables.length; ++i) {
		const variable = variables[i];
		const references = variable.references;
		const identifier = getIdentifierIfShouldBeConst(
			variable,
			ignoreReadBeforeAssign,
		);
		let prevId = null;

		for (let j = 0; j < references.length; ++j) {
			const reference = references[j];
			const id = reference.identifier;

			/*
			 * Avoid counting a reference twice or more for default values of
			 * destructuring.
			 */
			if (id === prevId) {
				continue;
			}
			prevId = id;

			// Add the identifier node into the destructuring group.
			const group = getDestructuringHost(reference);

			if (group) {
				if (identifierMap.has(group)) {
					identifierMap.get(group).push(identifier);
				} else {
					identifierMap.set(group, [identifier]);
				}
			}
		}
	}

	return identifierMap;
}

/**
 * Finds the nearest parent of node with a given type.
 * @param {ASTNode} node The node to search from.
 * @param {string} type The type field of the parent node.
 * @param {Function} shouldStop A predicate that returns true if the traversal should stop, and false otherwise.
 * @returns {ASTNode} The closest ancestor with the specified type; null if no such ancestor exists.
 */
function findUp(node, type, shouldStop) {
	if (!node || shouldStop(node)) {
		return null;
	}
	if (node.type === type) {
		return node;
	}
	return findUp(node.parent, type, shouldStop);
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
				destructuring: "any",
				ignoreReadBeforeAssign: false,
			},
		],

		docs: {
			description:
				"Require `const` declarations for variables that are never reassigned after declared",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/prefer-const",
		},

		fixable: "code",

		schema: [
			{
				type: "object",
				properties: {
					destructuring: { enum: ["any", "all"] },
					ignoreReadBeforeAssign: { type: "boolean" },
				},
				additionalProperties: false,
			},
		],
		messages: {
			useConst: "'{{name}}' is never reassigned. Use 'const' instead.",
		},
	},

	create(context) {
		const [{ destructuring, ignoreReadBeforeAssign }] = context.options;
		const shouldMatchAnyDestructuredVariable = destructuring !== "all";
		const sourceCode = context.sourceCode;
		const variables = [];
		let reportCount = 0;
		let checkedId = null;
		let checkedName = "";

		/**
		 * Reports given identifier nodes if all of the nodes should be declared
		 * as const.
		 *
		 * The argument 'nodes' is an array of Identifier nodes.
		 * This node is the result of 'getIdentifierIfShouldBeConst()', so it's
		 * nullable. In simple declaration or assignment cases, the length of
		 * the array is 1. In destructuring cases, the length of the array can
		 * be 2 or more.
		 * @param {(eslint-scope.Reference|null)[]} nodes
		 *      References which are grouped by destructuring to report.
		 * @returns {void}
		 */
		function checkGroup(nodes) {
			const nodesToReport = nodes.filter(Boolean);

			if (
				nodes.length &&
				(shouldMatchAnyDestructuredVariable ||
					nodesToReport.length === nodes.length)
			) {
				const varDeclParent = findUp(
					nodes[0],
					"VariableDeclaration",
					parentNode => parentNode.type.endsWith("Statement"),
				);
				const isVarDecParentNull = varDeclParent === null;

				if (
					!isVarDecParentNull &&
					varDeclParent.declarations.length > 0
				) {
					const firstDeclaration = varDeclParent.declarations[0];

					if (firstDeclaration.init) {
						const firstDecParent = firstDeclaration.init.parent;

						/*
						 * First we check the declaration type and then depending on
						 * if the type is a "VariableDeclarator" or its an "ObjectPattern"
						 * we compare the name and id from the first identifier, if the names are different
						 * we assign the new name, id and reset the count of reportCount and nodeCount in
						 * order to check each block for the number of reported errors and base our fix
						 * based on comparing nodes.length and nodesToReport.length.
						 */

						if (firstDecParent.type === "VariableDeclarator") {
							if (firstDecParent.id.name !== checkedName) {
								checkedName = firstDecParent.id.name;
								reportCount = 0;
							}

							if (firstDecParent.id.type === "ObjectPattern") {
								if (firstDecParent.init.name !== checkedName) {
									checkedName = firstDecParent.init.name;
									reportCount = 0;
								}
							}

							if (firstDecParent.id !== checkedId) {
								checkedId = firstDecParent.id;
								reportCount = 0;
							}
						}
					}
				}

				let shouldFix =
					varDeclParent &&
					// Don't do a fix unless all variables in the declarations are initialized (or it's in a for-in or for-of loop)
					(varDeclParent.parent.type === "ForInStatement" ||
						varDeclParent.parent.type === "ForOfStatement" ||
						varDeclParent.declarations.every(
							declaration => declaration.init,
						)) &&
					/*
					 * If options.destructuring is "all", then this warning will not occur unless
					 * every assignment in the destructuring should be const. In that case, it's safe
					 * to apply the fix.
					 */
					nodesToReport.length === nodes.length;

				if (
					!isVarDecParentNull &&
					varDeclParent.declarations &&
					varDeclParent.declarations.length !== 1
				) {
					if (
						varDeclParent &&
						varDeclParent.declarations &&
						varDeclParent.declarations.length >= 1
					) {
						/*
						 * Add nodesToReport.length to a count, then comparing the count to the length
						 * of the declarations in the current block.
						 */

						reportCount += nodesToReport.length;

						let totalDeclarationsCount = 0;

						varDeclParent.declarations.forEach(declaration => {
							if (declaration.id.type === "ObjectPattern") {
								totalDeclarationsCount +=
									declaration.id.properties.length;
							} else if (declaration.id.type === "ArrayPattern") {
								totalDeclarationsCount +=
									declaration.id.elements.length;
							} else {
								totalDeclarationsCount += 1;
							}
						});

						shouldFix =
							shouldFix && reportCount === totalDeclarationsCount;
					}
				}

				nodesToReport.forEach(node => {
					context.report({
						node,
						messageId: "useConst",
						data: node,
						fix: shouldFix
							? fixer => {
									const letKeywordToken =
										sourceCode.getFirstToken(
											varDeclParent,
											t => t.value === varDeclParent.kind,
										);

									/**
									 * Extend the replacement range to the whole declaration,
									 * in order to prevent other fixes in the same pass
									 * https://github.com/eslint/eslint/issues/13899
									 */
									return new FixTracker(fixer, sourceCode)
										.retainRange(varDeclParent.range)
										.replaceTextRange(
											letKeywordToken.range,
											"const",
										);
								}
							: null,
					});
				});
			}
		}

		return {
			"Program:exit"() {
				groupByDestructuring(variables, ignoreReadBeforeAssign).forEach(
					checkGroup,
				);
			},

			VariableDeclaration(node) {
				if (node.kind === "let" && !isInitOfForStatement(node)) {
					variables.push(...sourceCode.getDeclaredVariables(node));
				}
			},
		};
	},
};
