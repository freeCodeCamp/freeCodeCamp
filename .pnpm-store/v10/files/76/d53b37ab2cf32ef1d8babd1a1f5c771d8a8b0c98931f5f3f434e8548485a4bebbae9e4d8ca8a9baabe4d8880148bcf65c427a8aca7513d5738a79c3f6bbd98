/**
 * @fileoverview A rule to disallow unnecessary assignments`.
 * @author Yosuke Ota
 */

"use strict";

const { findVariable } = require("@eslint-community/eslint-utils");

//------------------------------------------------------------------------------
// Types
//------------------------------------------------------------------------------

/** @typedef {import("estree").Node} ASTNode */
/** @typedef {import("estree").Pattern} Pattern */
/** @typedef {import("estree").Identifier} Identifier */
/** @typedef {import("estree").VariableDeclarator} VariableDeclarator */
/** @typedef {import("estree").AssignmentExpression} AssignmentExpression */
/** @typedef {import("estree").UpdateExpression} UpdateExpression */
/** @typedef {import("estree").Expression} Expression */
/** @typedef {import("eslint-scope").Scope} Scope */
/** @typedef {import("eslint-scope").Variable} Variable */
/** @typedef {import("../linter/code-path-analysis/code-path")} CodePath */
/** @typedef {import("../linter/code-path-analysis/code-path-segment")} CodePathSegment */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Extract identifier from the given pattern node used on the left-hand side of the assignment.
 * @param {Pattern} pattern The pattern node to extract identifier
 * @returns {Iterable<Identifier>} The extracted identifier
 */
function* extractIdentifiersFromPattern(pattern) {
	switch (pattern.type) {
		case "Identifier":
			yield pattern;
			return;
		case "ObjectPattern":
			for (const property of pattern.properties) {
				yield* extractIdentifiersFromPattern(
					property.type === "Property" ? property.value : property,
				);
			}
			return;
		case "ArrayPattern":
			for (const element of pattern.elements) {
				if (!element) {
					continue;
				}
				yield* extractIdentifiersFromPattern(element);
			}
			return;
		case "RestElement":
			yield* extractIdentifiersFromPattern(pattern.argument);
			return;
		case "AssignmentPattern":
			yield* extractIdentifiersFromPattern(pattern.left);

		// no default
	}
}

/**
 * Checks whether the given identifier node is evaluated after the assignment identifier.
 * @param {AssignmentInfo} assignment The assignment info.
 * @param {Identifier} identifier The identifier to check.
 * @returns {boolean} `true` if the given identifier node is evaluated after the assignment identifier.
 */
function isIdentifierEvaluatedAfterAssignment(assignment, identifier) {
	if (identifier.range[0] < assignment.identifier.range[1]) {
		return false;
	}
	if (
		assignment.expression &&
		assignment.expression.range[0] <= identifier.range[0] &&
		identifier.range[1] <= assignment.expression.range[1]
	) {
		/*
		 * The identifier node is in an expression that is evaluated before the assignment.
		 * e.g. x = id;
		 *          ^^ identifier to check
		 *      ^      assignment identifier
		 */
		return false;
	}

	/*
	 * e.g.
	 *      x = 42; id;
	 *              ^^ identifier to check
	 *      ^          assignment identifier
	 *      let { x, y = id } = obj;
	 *                   ^^  identifier to check
	 *            ^          assignment identifier
	 */
	return true;
}

/**
 * Checks whether the given identifier node is used between the assigned identifier and the equal sign.
 *
 * e.g. let { x, y = x } = obj;
 *                   ^   identifier to check
 *            ^          assigned identifier
 * @param {AssignmentInfo} assignment The assignment info.
 * @param {Identifier} identifier The identifier to check.
 * @returns {boolean} `true` if the given identifier node is used between the assigned identifier and the equal sign.
 */
function isIdentifierUsedBetweenAssignedAndEqualSign(assignment, identifier) {
	if (!assignment.expression) {
		return false;
	}
	return (
		assignment.identifier.range[1] <= identifier.range[0] &&
		identifier.range[1] <= assignment.expression.range[0]
	);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description:
				"Disallow variable assignments when the value is not used",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-useless-assignment",
		},

		schema: [],

		messages: {
			unnecessaryAssignment:
				"This assigned value is not used in subsequent statements.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		/**
		 * @typedef {Object} ScopeStack
		 * @property {CodePath} codePath The code path of this scope stack.
		 * @property {Scope} scope The scope of this scope stack.
		 * @property {ScopeStack} upper The upper scope stack.
		 * @property {Record<string, ScopeStackSegmentInfo>} segments The map of ScopeStackSegmentInfo.
		 * @property {Set<CodePathSegment>} currentSegments The current CodePathSegments.
		 * @property {Map<Variable, AssignmentInfo[]>} assignments The map of list of AssignmentInfo for each variable.
		 * @property {Array} tryStatementBlocks The array of TryStatement block nodes in this scope stack.
		 */
		/**
		 * @typedef {Object} ScopeStackSegmentInfo
		 * @property {CodePathSegment} segment The code path segment.
		 * @property {Identifier|null} first The first identifier that appears within the segment.
		 * @property {Identifier|null} last The last identifier that appears within the segment.
		 * `first` and `last` are used to determine whether an identifier exists within the segment position range.
		 * Since it is used as a range of segments, we should originally hold all nodes, not just identifiers,
		 * but since the only nodes to be judged are identifiers, it is sufficient to have a range of identifiers.
		 */
		/**
		 * @typedef {Object} AssignmentInfo
		 * @property {Variable} variable The variable that is assigned.
		 * @property {Identifier} identifier The identifier that is assigned.
		 * @property {VariableDeclarator|AssignmentExpression|UpdateExpression} node The node where the variable was updated.
		 * @property {Expression|null} expression The expression that is evaluated before the assignment.
		 * @property {CodePathSegment[]} segments The code path segments where the assignment was made.
		 */

		/** @type {ScopeStack} */
		let scopeStack = null;

		/** @type {Set<Scope>} */
		const codePathStartScopes = new Set();

		/**
		 * Gets the scope of code path start from given scope
		 * @param {Scope} scope The initial scope
		 * @returns {Scope} The scope of code path start
		 * @throws {Error} Unexpected error
		 */
		function getCodePathStartScope(scope) {
			let target = scope;

			while (target) {
				if (codePathStartScopes.has(target)) {
					return target;
				}
				target = target.upper;
			}

			// Should be unreachable
			return null;
		}

		/**
		 * Verify the given scope stack.
		 * @param {ScopeStack} target The scope stack to verify.
		 * @returns {void}
		 */
		function verify(target) {
			/**
			 * Checks whether the given identifier is used in the segment.
			 * @param {CodePathSegment} segment The code path segment.
			 * @param {Identifier} identifier The identifier to check.
			 * @returns {boolean} `true` if the identifier is used in the segment.
			 */
			function isIdentifierUsedInSegment(segment, identifier) {
				const segmentInfo = target.segments[segment.id];

				return (
					segmentInfo.first &&
					segmentInfo.last &&
					segmentInfo.first.range[0] <= identifier.range[0] &&
					identifier.range[1] <= segmentInfo.last.range[1]
				);
			}

			/**
			 * Verifies whether the given assignment info is an used assignment.
			 * Report if it is an unused assignment.
			 * @param {AssignmentInfo} targetAssignment The assignment info to verify.
			 * @param {AssignmentInfo[]} allAssignments The list of all assignment info for variables.
			 * @returns {void}
			 */
			function verifyAssignmentIsUsed(targetAssignment, allAssignments) {
				// Skip assignment if it is in a try block.
				const isAssignmentInTryBlock = target.tryStatementBlocks.some(
					tryBlock =>
						tryBlock.range[0] <=
							targetAssignment.identifier.range[0] &&
						targetAssignment.identifier.range[1] <=
							tryBlock.range[1],
				);

				if (isAssignmentInTryBlock) {
					return;
				}

				/**
				 * @typedef {Object} SubsequentSegmentData
				 * @property {CodePathSegment} segment The code path segment
				 * @property {AssignmentInfo} [assignment] The first occurrence of the assignment within the segment.
				 * There is no need to check if the variable is used after this assignment,
				 * as the value it was assigned will be used.
				 */

				/**
				 * Information used in `getSubsequentSegments()`.
				 * To avoid unnecessary iterations, cache information that has already been iterated over,
				 * and if additional iterations are needed, start iterating from the retained position.
				 */
				const subsequentSegmentData = {
					/**
					 * Cache of subsequent segment information list that have already been iterated.
					 * @type {SubsequentSegmentData[]}
					 */
					results: [],

					/**
					 * Subsequent segments that have already been iterated on. Used to avoid infinite loops.
					 * @type {Set<CodePathSegment>}
					 */
					subsequentSegments: new Set(),

					/**
					 * Unexplored code path segment.
					 * If additional iterations are needed, consume this information and iterate.
					 * @type {CodePathSegment[]}
					 */
					queueSegments: targetAssignment.segments.flatMap(
						segment => segment.nextSegments,
					),
				};

				/**
				 * Gets the subsequent segments from the segment of
				 * the assignment currently being validated (targetAssignment).
				 * @returns {Iterable<SubsequentSegmentData>} the subsequent segments
				 */
				function* getSubsequentSegments() {
					yield* subsequentSegmentData.results;

					while (subsequentSegmentData.queueSegments.length > 0) {
						const nextSegment =
							subsequentSegmentData.queueSegments.shift();

						if (
							subsequentSegmentData.subsequentSegments.has(
								nextSegment,
							)
						) {
							continue;
						}
						subsequentSegmentData.subsequentSegments.add(
							nextSegment,
						);

						const assignmentInSegment = allAssignments.find(
							otherAssignment =>
								otherAssignment.segments.includes(
									nextSegment,
								) &&
								!isIdentifierUsedBetweenAssignedAndEqualSign(
									otherAssignment,
									targetAssignment.identifier,
								),
						);

						if (!assignmentInSegment) {
							/*
							 * Stores the next segment to explore.
							 * If `assignmentInSegment` exists,
							 * we are guarding it because we don't need to explore the next segment.
							 */
							subsequentSegmentData.queueSegments.push(
								...nextSegment.nextSegments,
							);
						}

						/** @type {SubsequentSegmentData} */
						const result = {
							segment: nextSegment,
							assignment: assignmentInSegment,
						};

						subsequentSegmentData.results.push(result);
						yield result;
					}
				}

				if (
					targetAssignment.variable.references.some(
						ref => ref.identifier.type !== "Identifier",
					)
				) {
					/**
					 * Skip checking for a variable that has at least one non-identifier reference.
					 * It's generated by plugins and cannot be handled reliably in the core rule.
					 */
					return;
				}

				const readReferences =
					targetAssignment.variable.references.filter(reference =>
						reference.isRead(),
					);

				if (!readReferences.length) {
					/*
					 * It is not just an unnecessary assignment, but an unnecessary (unused) variable
					 * and thus should not be reported by this rule because it is reported by `no-unused-vars`.
					 */
					return;
				}

				/**
				 * Other assignment on the current segment and after current assignment.
				 */
				const otherAssignmentAfterTargetAssignment =
					allAssignments.find(assignment => {
						if (
							assignment === targetAssignment ||
							(assignment.segments.length &&
								assignment.segments.every(
									segment =>
										!targetAssignment.segments.includes(
											segment,
										),
								))
						) {
							return false;
						}
						if (
							isIdentifierEvaluatedAfterAssignment(
								targetAssignment,
								assignment.identifier,
							)
						) {
							return true;
						}
						if (
							assignment.expression &&
							assignment.expression.range[0] <=
								targetAssignment.identifier.range[0] &&
							targetAssignment.identifier.range[1] <=
								assignment.expression.range[1]
						) {
							/*
							 * The target assignment is in an expression that is evaluated before the assignment.
							 * e.g. x=(x=1);
							 *         ^^^ targetAssignment
							 *      ^^^^^^^ assignment
							 */
							return true;
						}

						return false;
					});

				for (const reference of readReferences) {
					/*
					 * If the scope of the reference is outside the current code path scope,
					 * we cannot track whether this assignment is not used.
					 * For example, it can also be called asynchronously.
					 */
					if (
						target.scope !== getCodePathStartScope(reference.from)
					) {
						return;
					}

					// Checks if it is used in the same segment as the target assignment.
					if (
						isIdentifierEvaluatedAfterAssignment(
							targetAssignment,
							reference.identifier,
						) &&
						(isIdentifierUsedBetweenAssignedAndEqualSign(
							targetAssignment,
							reference.identifier,
						) ||
							targetAssignment.segments.some(segment =>
								isIdentifierUsedInSegment(
									segment,
									reference.identifier,
								),
							))
					) {
						if (
							otherAssignmentAfterTargetAssignment &&
							isIdentifierEvaluatedAfterAssignment(
								otherAssignmentAfterTargetAssignment,
								reference.identifier,
							)
						) {
							// There was another assignment before the reference. Therefore, it has not been used yet.
							continue;
						}

						// Uses in statements after the written identifier.
						return;
					}

					if (otherAssignmentAfterTargetAssignment) {
						/*
						 * The assignment was followed by another assignment in the same segment.
						 * Therefore, there is no need to check the next segment.
						 */
						continue;
					}

					// Check subsequent segments.
					for (const subsequentSegment of getSubsequentSegments()) {
						if (
							isIdentifierUsedInSegment(
								subsequentSegment.segment,
								reference.identifier,
							)
						) {
							if (
								subsequentSegment.assignment &&
								isIdentifierEvaluatedAfterAssignment(
									subsequentSegment.assignment,
									reference.identifier,
								)
							) {
								// There was another assignment before the reference. Therefore, it has not been used yet.
								continue;
							}

							// It is used
							return;
						}
					}
				}
				context.report({
					node: targetAssignment.identifier,
					messageId: "unnecessaryAssignment",
				});
			}

			// Verify that each assignment in the code path is used.
			for (const assignments of target.assignments.values()) {
				assignments.sort(
					(a, b) => a.identifier.range[0] - b.identifier.range[0],
				);
				for (const assignment of assignments) {
					verifyAssignmentIsUsed(assignment, assignments);
				}
			}
		}

		return {
			onCodePathStart(codePath, node) {
				const scope = sourceCode.getScope(node);

				scopeStack = {
					upper: scopeStack,
					codePath,
					scope,
					segments: Object.create(null),
					currentSegments: new Set(),
					assignments: new Map(),
					tryStatementBlocks: [],
				};
				codePathStartScopes.add(scopeStack.scope);
			},
			onCodePathEnd() {
				verify(scopeStack);

				scopeStack = scopeStack.upper;
			},
			onCodePathSegmentStart(segment) {
				const segmentInfo = { segment, first: null, last: null };

				scopeStack.segments[segment.id] = segmentInfo;
				scopeStack.currentSegments.add(segment);
			},
			onCodePathSegmentEnd(segment) {
				scopeStack.currentSegments.delete(segment);
			},
			TryStatement(node) {
				scopeStack.tryStatementBlocks.push(node.block);
			},
			Identifier(node) {
				for (const segment of scopeStack.currentSegments) {
					const segmentInfo = scopeStack.segments[segment.id];

					if (!segmentInfo.first) {
						segmentInfo.first = node;
					}
					segmentInfo.last = node;
				}
			},
			":matches(VariableDeclarator[init!=null], AssignmentExpression, UpdateExpression):exit"(
				node,
			) {
				if (scopeStack.currentSegments.size === 0) {
					// Ignore unreachable segments
					return;
				}

				const assignments = scopeStack.assignments;

				let pattern;
				let expression = null;

				if (node.type === "VariableDeclarator") {
					pattern = node.id;
					expression = node.init;
				} else if (node.type === "AssignmentExpression") {
					pattern = node.left;
					expression = node.right;
				} else {
					// UpdateExpression
					pattern = node.argument;
				}

				for (const identifier of extractIdentifiersFromPattern(
					pattern,
				)) {
					const scope = sourceCode.getScope(identifier);

					/** @type {Variable} */
					const variable = findVariable(scope, identifier);

					if (!variable) {
						continue;
					}

					// We don't know where global variables are used.
					if (
						variable.scope.type === "global" &&
						variable.defs.length === 0
					) {
						continue;
					}

					/*
					 * If the scope of the variable is outside the current code path scope,
					 * we cannot track whether this assignment is not used.
					 */
					if (
						scopeStack.scope !==
						getCodePathStartScope(variable.scope)
					) {
						continue;
					}

					// Variables marked by `markVariableAsUsed()` or
					// exported by "exported" block comment.
					if (variable.eslintUsed) {
						continue;
					}

					// Variables exported by ESM export syntax
					if (variable.scope.type === "module") {
						if (
							variable.defs.some(
								def =>
									(def.type === "Variable" &&
										def.parent.parent.type ===
											"ExportNamedDeclaration") ||
									(def.type === "FunctionName" &&
										(def.node.parent.type ===
											"ExportNamedDeclaration" ||
											def.node.parent.type ===
												"ExportDefaultDeclaration")) ||
									(def.type === "ClassName" &&
										(def.node.parent.type ===
											"ExportNamedDeclaration" ||
											def.node.parent.type ===
												"ExportDefaultDeclaration")),
							)
						) {
							continue;
						}
						if (
							variable.references.some(
								reference =>
									reference.identifier.parent.type ===
									"ExportSpecifier",
							)
						) {
							// It have `export { ... }` reference.
							continue;
						}
					}

					let list = assignments.get(variable);

					if (!list) {
						list = [];
						assignments.set(variable, list);
					}
					list.push({
						variable,
						identifier,
						node,
						expression,
						segments: [...scopeStack.currentSegments],
					});
				}
			},
		};
	},
};
