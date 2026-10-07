/**
 * @fileoverview Checks for unreachable code due to return, throws, break, and continue.
 * @author Joel Feenstra
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * @typedef {Object} ConstructorInfo
 * @property {ConstructorInfo | null} upper Info about the constructor that encloses this constructor.
 * @property {boolean} hasSuperCall The flag about having `super()` expressions.
 */

/**
 * Checks whether or not a given variable declarator has the initializer.
 * @param {ASTNode} node A VariableDeclarator node to check.
 * @returns {boolean} `true` if the node has the initializer.
 */
function isInitialized(node) {
	return Boolean(node.init);
}

/**
 * Checks all segments in a set and returns true if all are unreachable.
 * @param {Set<CodePathSegment>} segments The segments to check.
 * @returns {boolean} True if all segments are unreachable; false otherwise.
 */
function areAllSegmentsUnreachable(segments) {
	for (const segment of segments) {
		if (segment.reachable) {
			return false;
		}
	}

	return true;
}

/**
 * The class to distinguish consecutive unreachable statements.
 */
class ConsecutiveRange {
	constructor(sourceCode) {
		this.sourceCode = sourceCode;
		this.startNode = null;
		this.endNode = null;
	}

	/**
	 * The location object of this range.
	 * @type {Object}
	 */
	get location() {
		return {
			start: this.startNode.loc.start,
			end: this.endNode.loc.end,
		};
	}

	/**
	 * `true` if this range is empty.
	 * @type {boolean}
	 */
	get isEmpty() {
		return !(this.startNode && this.endNode);
	}

	/**
	 * Checks whether the given node is inside of this range.
	 * @param {ASTNode|Token} node The node to check.
	 * @returns {boolean} `true` if the node is inside of this range.
	 */
	contains(node) {
		return (
			node.range[0] >= this.startNode.range[0] &&
			node.range[1] <= this.endNode.range[1]
		);
	}

	/**
	 * Checks whether the given node is consecutive to this range.
	 * @param {ASTNode} node The node to check.
	 * @returns {boolean} `true` if the node is consecutive to this range.
	 */
	isConsecutive(node) {
		return this.contains(this.sourceCode.getTokenBefore(node));
	}

	/**
	 * Merges the given node to this range.
	 * @param {ASTNode} node The node to merge.
	 * @returns {void}
	 */
	merge(node) {
		this.endNode = node;
	}

	/**
	 * Resets this range by the given node or null.
	 * @param {ASTNode|null} node The node to reset, or null.
	 * @returns {void}
	 */
	reset(node) {
		this.startNode = this.endNode = node;
	}
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
				"Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-unreachable",
		},

		schema: [],

		messages: {
			unreachableCode: "Unreachable code.",
		},
	},

	create(context) {
		/** @type {ConstructorInfo | null} */
		let constructorInfo = null;

		/** @type {ConsecutiveRange} */
		const range = new ConsecutiveRange(context.sourceCode);

		/** @type {Array<Set<CodePathSegment>>} */
		const codePathSegments = [];

		/** @type {Set<CodePathSegment>} */
		let currentCodePathSegments = new Set();

		/**
		 * Reports a given node if it's unreachable.
		 * @param {ASTNode} node A statement node to report.
		 * @returns {void}
		 */
		function reportIfUnreachable(node) {
			let nextNode = null;

			if (
				node &&
				(node.type === "PropertyDefinition" ||
					areAllSegmentsUnreachable(currentCodePathSegments))
			) {
				// Store this statement to distinguish consecutive statements.
				if (range.isEmpty) {
					range.reset(node);
					return;
				}

				// Skip if this statement is inside of the current range.
				if (range.contains(node)) {
					return;
				}

				// Merge if this statement is consecutive to the current range.
				if (range.isConsecutive(node)) {
					range.merge(node);
					return;
				}

				nextNode = node;
			}

			/*
			 * Report the current range since this statement is reachable or is
			 * not consecutive to the current range.
			 */
			if (!range.isEmpty) {
				context.report({
					messageId: "unreachableCode",
					loc: range.location,
					node: range.startNode,
				});
			}

			// Update the current range.
			range.reset(nextNode);
		}

		return {
			// Manages the current code path.
			onCodePathStart() {
				codePathSegments.push(currentCodePathSegments);
				currentCodePathSegments = new Set();
			},

			onCodePathEnd() {
				currentCodePathSegments = codePathSegments.pop();
			},

			onUnreachableCodePathSegmentStart(segment) {
				currentCodePathSegments.add(segment);
			},

			onUnreachableCodePathSegmentEnd(segment) {
				currentCodePathSegments.delete(segment);
			},

			onCodePathSegmentEnd(segment) {
				currentCodePathSegments.delete(segment);
			},

			onCodePathSegmentStart(segment) {
				currentCodePathSegments.add(segment);
			},

			// Registers for all statement nodes (excludes FunctionDeclaration).
			BlockStatement: reportIfUnreachable,
			BreakStatement: reportIfUnreachable,
			ClassDeclaration: reportIfUnreachable,
			ContinueStatement: reportIfUnreachable,
			DebuggerStatement: reportIfUnreachable,
			DoWhileStatement: reportIfUnreachable,
			ExpressionStatement: reportIfUnreachable,
			ForInStatement: reportIfUnreachable,
			ForOfStatement: reportIfUnreachable,
			ForStatement: reportIfUnreachable,
			IfStatement: reportIfUnreachable,
			ImportDeclaration: reportIfUnreachable,
			LabeledStatement: reportIfUnreachable,
			ReturnStatement: reportIfUnreachable,
			SwitchStatement: reportIfUnreachable,
			ThrowStatement: reportIfUnreachable,
			TryStatement: reportIfUnreachable,

			VariableDeclaration(node) {
				if (
					node.kind !== "var" ||
					node.declarations.some(isInitialized)
				) {
					reportIfUnreachable(node);
				}
			},

			WhileStatement: reportIfUnreachable,
			WithStatement: reportIfUnreachable,
			ExportNamedDeclaration: reportIfUnreachable,
			ExportDefaultDeclaration: reportIfUnreachable,
			ExportAllDeclaration: reportIfUnreachable,

			"Program:exit"() {
				reportIfUnreachable();
			},

			/*
			 * Instance fields defined in a subclass are never created if the constructor of the subclass
			 * doesn't call `super()`, so their definitions are unreachable code.
			 */
			"MethodDefinition[kind='constructor']"() {
				constructorInfo = {
					upper: constructorInfo,
					hasSuperCall: false,
				};
			},
			"MethodDefinition[kind='constructor']:exit"(node) {
				const { hasSuperCall } = constructorInfo;

				constructorInfo = constructorInfo.upper;

				// skip typescript constructors without the body
				if (!node.value.body) {
					return;
				}

				const classDefinition = node.parent.parent;

				if (classDefinition.superClass && !hasSuperCall) {
					for (const element of classDefinition.body.body) {
						if (
							element.type === "PropertyDefinition" &&
							!element.static
						) {
							reportIfUnreachable(element);
						}
					}
				}
			},
			"CallExpression > Super.callee"() {
				if (constructorInfo) {
					constructorInfo.hasSuperCall = true;
				}
			},
		};
	},
};
