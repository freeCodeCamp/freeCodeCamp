/**
 * @fileoverview Rule to flag use of an object property of the global object (Math and JSON) as a function
 * @author James Allardice
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const {
	CALL,
	CONSTRUCT,
	ReferenceTracker,
} = require("@eslint-community/eslint-utils");
const getPropertyName = require("./utils/ast-utils").getStaticPropertyName;

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const nonCallableGlobals = ["Atomics", "JSON", "Math", "Reflect", "Intl"];

/**
 * Returns the name of the node to report
 * @param {ASTNode} node A node to report
 * @returns {string} name to report
 */
function getReportNodeName(node) {
	if (node.type === "ChainExpression") {
		return getReportNodeName(node.expression);
	}
	if (node.type === "MemberExpression") {
		return getPropertyName(node);
	}
	return node.name;
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
				"Disallow calling global object properties as functions",
			recommended: true,
			url: "https://eslint.org/docs/latest/rules/no-obj-calls",
		},

		schema: [],

		messages: {
			unexpectedCall: "'{{name}}' is not a function.",
			unexpectedRefCall:
				"'{{name}}' is reference to '{{ref}}', which is not a function.",
		},
	},

	create(context) {
		const sourceCode = context.sourceCode;

		return {
			Program(node) {
				const scope = sourceCode.getScope(node);
				const tracker = new ReferenceTracker(scope);
				const traceMap = {};

				for (const g of nonCallableGlobals) {
					traceMap[g] = {
						[CALL]: true,
						[CONSTRUCT]: true,
					};
				}

				for (const {
					node: refNode,
					path,
				} of tracker.iterateGlobalReferences(traceMap)) {
					const name = getReportNodeName(refNode.callee);
					const ref = path[0];
					const messageId =
						name === ref ? "unexpectedCall" : "unexpectedRefCall";

					context.report({
						node: refNode,
						messageId,
						data: { name, ref },
					});
				}
			},
		};
	},
};
