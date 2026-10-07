/**
 * @fileoverview A rule to verify `super()` callings in constructor.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given node is a constructor.
 * @param {ASTNode} node A node to check. This node type is one of
 *   `Program`, `FunctionDeclaration`, `FunctionExpression`, and
 *   `ArrowFunctionExpression`.
 * @returns {boolean} `true` if the node is a constructor.
 */
function isConstructorFunction(node) {
	return (
		node.type === "FunctionExpression" &&
		node.parent.type === "MethodDefinition" &&
		node.parent.kind === "constructor"
	);
}

/**
 * Checks whether a given node can be a constructor or not.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if the node can be a constructor.
 */
function isPossibleConstructor(node) {
	if (!node) {
		return false;
	}

	switch (node.type) {
		case "ClassExpression":
		case "FunctionExpression":
		case "ThisExpression":
		case "MemberExpression":
		case "CallExpression":
		case "NewExpression":
		case "ChainExpression":
		case "YieldExpression":
		case "TaggedTemplateExpression":
		case "MetaProperty":
			return true;

		case "Identifier":
			return node.name !== "undefined";

		case "AssignmentExpression":
			if (["=", "&&="].includes(node.operator)) {
				return isPossibleConstructor(node.right);
			}

			if (["||=", "??="].includes(node.operator)) {
				return (
					isPossibleConstructor(node.left) ||
					isPossibleConstructor(node.right)
				);
			}

			/**
			 * All other assignment operators are mathematical assignment operators (arithmetic or bitwise).
			 * An assignment expression with a mathematical operator can either evaluate to a primitive value,
			 * or throw, depending on the operands. Thus, it cannot evaluate to a constructor function.
			 */
			return false;

		case "LogicalExpression":
			/*
			 * If the && operator short-circuits, the left side was falsy and therefore not a constructor, and if
			 * it doesn't short-circuit, it takes the value from the right side, so the right side must always be a
			 * possible constructor. A future improvement could verify that the left side could be truthy by
			 * excluding falsy literals.
			 */
			if (node.operator === "&&") {
				return isPossibleConstructor(node.right);
			}

			return (
				isPossibleConstructor(node.left) ||
				isPossibleConstructor(node.right)
			);

		case "ConditionalExpression":
			return (
				isPossibleConstructor(node.alternate) ||
				isPossibleConstructor(node.consequent)
			);

		case "SequenceExpression": {
			const lastExpression = node.expressions.at(-1);

			return isPossibleConstructor(lastExpression);
		}

		default:
			return false;
	}
}

/**
 * A class to store information about a code path segment.
 */
class SegmentInfo {
	/**
	 * Indicates if super() is called in all code paths.
	 * @type {boolean}
	 */
	calledInEveryPaths = false;

	/**
	 * Indicates if super() is called in any code paths.
	 * @type {boolean}
	 */
	calledInSomePaths = false;

	/**
	 * The nodes which have been validated and don't need to be reconsidered.
	 * @type {ASTNode[]}
	 */
	validNodes = [];
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "problem",

		docs: {
			description: "Require `super()` calls in constructors",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/constructor-super",
		},

		schema: [],

		messages: {
			missingSome: "Lacked a call of 'super()' in some code paths.",
			missingAll: "Expected to call 'super()'.",

			duplicate: "Unexpected duplicate 'super()'.",
			badSuper:
				"Unexpected 'super()' because 'super' is not a constructor.",
		},
	},

	create(context) {
		/*
		 * {{hasExtends: boolean, scope: Scope, codePath: CodePath}[]}
		 * Information for each constructor.
		 * - upper:      Information of the upper constructor.
		 * - hasExtends: A flag which shows whether own class has a valid `extends`
		 *               part.
		 * - scope:      The scope of own class.
		 * - codePath:   The code path object of the constructor.
		 */
		let funcInfo = null;

		/**
		 * @type {Record<string, SegmentInfo>}
		 */
		const segInfoMap = Object.create(null);

		/**
		 * Gets the flag which shows `super()` is called in some paths.
		 * @param {CodePathSegment} segment A code path segment to get.
		 * @returns {boolean} The flag which shows `super()` is called in some paths
		 */
		function isCalledInSomePath(segment) {
			return (
				segment.reachable && segInfoMap[segment.id].calledInSomePaths
			);
		}

		/**
		 * Determines if a segment has been seen in the traversal.
		 * @param {CodePathSegment} segment A code path segment to check.
		 * @returns {boolean} `true` if the segment has been seen.
		 */
		function hasSegmentBeenSeen(segment) {
			return !!segInfoMap[segment.id];
		}

		/**
		 * Gets the flag which shows `super()` is called in all paths.
		 * @param {CodePathSegment} segment A code path segment to get.
		 * @returns {boolean} The flag which shows `super()` is called in all paths.
		 */
		function isCalledInEveryPath(segment) {
			return (
				segment.reachable && segInfoMap[segment.id].calledInEveryPaths
			);
		}

		return {
			/**
			 * Stacks a constructor information.
			 * @param {CodePath} codePath A code path which was started.
			 * @param {ASTNode} node The current node.
			 * @returns {void}
			 */
			onCodePathStart(codePath, node) {
				if (isConstructorFunction(node)) {
					// Class > ClassBody > MethodDefinition > FunctionExpression
					const classNode = node.parent.parent.parent;
					const superClass = classNode.superClass;

					funcInfo = {
						upper: funcInfo,
						isConstructor: true,
						hasExtends: Boolean(superClass),
						superIsConstructor: isPossibleConstructor(superClass),
						codePath,
						currentSegments: new Set(),
					};
				} else {
					funcInfo = {
						upper: funcInfo,
						isConstructor: false,
						hasExtends: false,
						superIsConstructor: false,
						codePath,
						currentSegments: new Set(),
					};
				}
			},

			/**
			 * Pops a constructor information.
			 * And reports if `super()` lacked.
			 * @param {CodePath} codePath A code path which was ended.
			 * @param {ASTNode} node The current node.
			 * @returns {void}
			 */
			onCodePathEnd(codePath, node) {
				const hasExtends = funcInfo.hasExtends;

				// Pop.
				funcInfo = funcInfo.upper;

				if (!hasExtends) {
					return;
				}

				// Reports if `super()` lacked.
				const returnedSegments = codePath.returnedSegments;
				const calledInEveryPaths =
					returnedSegments.every(isCalledInEveryPath);
				const calledInSomePaths =
					returnedSegments.some(isCalledInSomePath);

				if (!calledInEveryPaths) {
					context.report({
						messageId: calledInSomePaths
							? "missingSome"
							: "missingAll",
						node: node.parent,
					});
				}
			},

			/**
			 * Initialize information of a given code path segment.
			 * @param {CodePathSegment} segment A code path segment to initialize.
			 * @param {CodePathSegment} node Node that starts the segment.
			 * @returns {void}
			 */
			onCodePathSegmentStart(segment, node) {
				funcInfo.currentSegments.add(segment);

				if (!(funcInfo.isConstructor && funcInfo.hasExtends)) {
					return;
				}

				// Initialize info.
				const info = (segInfoMap[segment.id] = new SegmentInfo());

				const seenPrevSegments =
					segment.prevSegments.filter(hasSegmentBeenSeen);

				// When there are previous segments, aggregates these.
				if (seenPrevSegments.length > 0) {
					info.calledInSomePaths =
						seenPrevSegments.some(isCalledInSomePath);
					info.calledInEveryPaths =
						seenPrevSegments.every(isCalledInEveryPath);
				}

				/*
				 * ForStatement > *.update segments are a special case as they are created in advance,
				 * without seen previous segments. Since they logically don't affect `calledInEveryPaths`
				 * calculations, and they can never be a lone previous segment of another one, we'll set
				 * their `calledInEveryPaths` to `true` to effectively ignore them in those calculations.
				 * .
				 */
				if (
					node.parent &&
					node.parent.type === "ForStatement" &&
					node.parent.update === node
				) {
					info.calledInEveryPaths = true;
				}
			},

			onUnreachableCodePathSegmentStart(segment) {
				funcInfo.currentSegments.add(segment);
			},

			onUnreachableCodePathSegmentEnd(segment) {
				funcInfo.currentSegments.delete(segment);
			},

			onCodePathSegmentEnd(segment) {
				funcInfo.currentSegments.delete(segment);
			},

			/**
			 * Update information of the code path segment when a code path was
			 * looped.
			 * @param {CodePathSegment} fromSegment The code path segment of the
			 *      end of a loop.
			 * @param {CodePathSegment} toSegment A code path segment of the head
			 *      of a loop.
			 * @returns {void}
			 */
			onCodePathSegmentLoop(fromSegment, toSegment) {
				if (!(funcInfo.isConstructor && funcInfo.hasExtends)) {
					return;
				}

				funcInfo.codePath.traverseSegments(
					{ first: toSegment, last: fromSegment },
					(segment, controller) => {
						const info = segInfoMap[segment.id];

						// skip segments after the loop
						if (!info) {
							controller.skip();
							return;
						}

						const seenPrevSegments =
							segment.prevSegments.filter(hasSegmentBeenSeen);
						const calledInSomePreviousPaths =
							seenPrevSegments.some(isCalledInSomePath);
						const calledInEveryPreviousPaths =
							seenPrevSegments.every(isCalledInEveryPath);

						info.calledInSomePaths ||= calledInSomePreviousPaths;
						info.calledInEveryPaths ||= calledInEveryPreviousPaths;

						// If flags become true anew, reports the valid nodes.
						if (calledInSomePreviousPaths) {
							const nodes = info.validNodes;

							info.validNodes = [];

							for (let i = 0; i < nodes.length; ++i) {
								const node = nodes[i];

								context.report({
									messageId: "duplicate",
									node,
								});
							}
						}
					},
				);
			},

			/**
			 * Checks for a call of `super()`.
			 * @param {ASTNode} node A CallExpression node to check.
			 * @returns {void}
			 */
			"CallExpression:exit"(node) {
				if (!(funcInfo.isConstructor && funcInfo.hasExtends)) {
					return;
				}

				// Skips except `super()`.
				if (node.callee.type !== "Super") {
					return;
				}

				// Reports if needed.
				const segments = funcInfo.currentSegments;
				let duplicate = false;
				let info = null;

				for (const segment of segments) {
					if (segment.reachable) {
						info = segInfoMap[segment.id];

						duplicate = duplicate || info.calledInSomePaths;
						info.calledInSomePaths = info.calledInEveryPaths = true;
					}
				}

				if (info) {
					if (duplicate) {
						context.report({
							messageId: "duplicate",
							node,
						});
					} else if (!funcInfo.superIsConstructor) {
						context.report({
							messageId: "badSuper",
							node,
						});
					} else {
						info.validNodes.push(node);
					}
				}
			},

			/**
			 * Set the mark to the returned path as `super()` was called.
			 * @param {ASTNode} node A ReturnStatement node to check.
			 * @returns {void}
			 */
			ReturnStatement(node) {
				if (!(funcInfo.isConstructor && funcInfo.hasExtends)) {
					return;
				}

				// Skips if no argument.
				if (!node.argument) {
					return;
				}

				// Returning argument is a substitute of 'super()'.
				const segments = funcInfo.currentSegments;

				for (const segment of segments) {
					if (segment.reachable) {
						const info = segInfoMap[segment.id];

						info.calledInSomePaths = info.calledInEveryPaths = true;
					}
				}
			},
		};
	},
};
