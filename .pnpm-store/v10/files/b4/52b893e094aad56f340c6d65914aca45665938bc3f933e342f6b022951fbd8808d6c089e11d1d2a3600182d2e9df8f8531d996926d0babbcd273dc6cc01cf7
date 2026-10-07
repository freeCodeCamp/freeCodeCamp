/**
 * @fileoverview Rule to flag use of eval() statement
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const candidatesOfGlobalObject = Object.freeze([
	"global",
	"window",
	"globalThis",
]);

/**
 * Checks a given node is a MemberExpression node which has the specified name's
 * property.
 * @param {ASTNode} node A node to check.
 * @param {string} name A name to check.
 * @returns {boolean} `true` if the node is a MemberExpression node which has
 *      the specified name's property
 */
function isMember(node, name) {
	return astUtils.isSpecificMemberAccess(node, null, name);
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
				allowIndirect: false,
			},
		],

		docs: {
			description: "Disallow the use of `eval()`",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-eval",
		},

		schema: [
			{
				type: "object",
				properties: {
					allowIndirect: { type: "boolean" },
				},
				additionalProperties: false,
			},
		],

		messages: {
			unexpected: "eval can be harmful.",
		},
	},

	create(context) {
		const [{ allowIndirect }] = context.options;
		const sourceCode = context.sourceCode;
		let funcInfo = null;

		/**
		 * Pushes a `this` scope (non-arrow function, class static block, or class field initializer) information to the stack.
		 * Top-level scopes are handled separately.
		 *
		 * This is used in order to check whether or not `this` binding is a
		 * reference to the global object.
		 * @param {ASTNode} node A node of the scope.
		 *      For functions, this is one of FunctionDeclaration, FunctionExpression.
		 *      For class static blocks, this is StaticBlock.
		 *      For class field initializers, this can be any node that is PropertyDefinition#value.
		 * @returns {void}
		 */
		function enterThisScope(node) {
			const strict = sourceCode.getScope(node).isStrict;

			funcInfo = {
				upper: funcInfo,
				node,
				strict,
				isTopLevelOfScript: false,
				defaultThis: false,
				initialized: strict,
			};
		}

		/**
		 * Pops a variable scope from the stack.
		 * @returns {void}
		 */
		function exitThisScope() {
			funcInfo = funcInfo.upper;
		}

		/**
		 * Reports a given node.
		 *
		 * `node` is `Identifier` or `MemberExpression`.
		 * The parent of `node` might be `CallExpression`.
		 *
		 * The location of the report is always `eval` `Identifier` (or possibly
		 * `Literal`). The type of the report is `CallExpression` if the parent is
		 * `CallExpression`. Otherwise, it's the given node type.
		 * @param {ASTNode} node A node to report.
		 * @returns {void}
		 */
		function report(node) {
			const parent = node.parent;
			const locationNode =
				node.type === "MemberExpression" ? node.property : node;

			const reportNode =
				parent.type === "CallExpression" && parent.callee === node
					? parent
					: node;

			context.report({
				node: reportNode,
				loc: locationNode.loc,
				messageId: "unexpected",
			});
		}

		/**
		 * Reports accesses of `eval` via the global object.
		 * @param {eslint-scope.Scope} globalScope The global scope.
		 * @returns {void}
		 */
		function reportAccessingEvalViaGlobalObject(globalScope) {
			for (let i = 0; i < candidatesOfGlobalObject.length; ++i) {
				const name = candidatesOfGlobalObject[i];
				const variable = astUtils.getVariableByName(globalScope, name);

				if (!variable) {
					continue;
				}

				const references = variable.references;

				for (let j = 0; j < references.length; ++j) {
					const identifier = references[j].identifier;
					let node = identifier.parent;

					// To detect code like `window.window.eval`.
					while (isMember(node, name)) {
						node = node.parent;
					}

					// Reports.
					if (isMember(node, "eval")) {
						report(node);
					}
				}
			}
		}

		/**
		 * Reports all accesses of `eval` (excludes direct calls to eval).
		 * @param {eslint-scope.Scope} globalScope The global scope.
		 * @returns {void}
		 */
		function reportAccessingEval(globalScope) {
			const variable = astUtils.getVariableByName(globalScope, "eval");

			if (!variable) {
				return;
			}

			const references = variable.references;

			for (let i = 0; i < references.length; ++i) {
				const reference = references[i];
				const id = reference.identifier;

				if (id.name === "eval" && !astUtils.isCallee(id)) {
					// Is accessing to eval (excludes direct calls to eval)
					report(id);
				}
			}
		}

		if (allowIndirect) {
			// Checks only direct calls to eval. It's simple!
			return {
				"CallExpression:exit"(node) {
					const callee = node.callee;

					/*
					 * Optional call (`eval?.("code")`) is not direct eval.
					 * The direct eval is only step 6.a.vi of https://tc39.es/ecma262/#sec-function-calls-runtime-semantics-evaluation
					 * But the optional call is https://tc39.es/ecma262/#sec-optional-chaining-chain-evaluation
					 */
					if (
						!node.optional &&
						astUtils.isSpecificId(callee, "eval")
					) {
						report(callee);
					}
				},
			};
		}

		return {
			"CallExpression:exit"(node) {
				const callee = node.callee;

				if (astUtils.isSpecificId(callee, "eval")) {
					report(callee);
				}
			},

			Program(node) {
				const scope = sourceCode.getScope(node),
					features =
						context.languageOptions.parserOptions.ecmaFeatures ||
						{},
					strict =
						scope.isStrict ||
						node.sourceType === "module" ||
						(features.globalReturn &&
							scope.childScopes[0].isStrict),
					isTopLevelOfScript =
						node.sourceType !== "module" && !features.globalReturn;

				funcInfo = {
					upper: null,
					node,
					strict,
					isTopLevelOfScript,
					defaultThis: true,
					initialized: true,
				};
			},

			"Program:exit"(node) {
				const globalScope = sourceCode.getScope(node);

				exitThisScope();
				reportAccessingEval(globalScope);
				reportAccessingEvalViaGlobalObject(globalScope);
			},

			FunctionDeclaration: enterThisScope,
			"FunctionDeclaration:exit": exitThisScope,
			FunctionExpression: enterThisScope,
			"FunctionExpression:exit": exitThisScope,
			"PropertyDefinition > *.value": enterThisScope,
			"PropertyDefinition > *.value:exit": exitThisScope,
			StaticBlock: enterThisScope,
			"StaticBlock:exit": exitThisScope,

			ThisExpression(node) {
				if (!isMember(node.parent, "eval")) {
					return;
				}

				/*
				 * `this.eval` is found.
				 * Checks whether or not the value of `this` is the global object.
				 */
				if (!funcInfo.initialized) {
					funcInfo.initialized = true;
					funcInfo.defaultThis = astUtils.isDefaultThisBinding(
						funcInfo.node,
						sourceCode,
					);
				}

				// `this` at the top level of scripts always refers to the global object
				if (
					funcInfo.isTopLevelOfScript ||
					(!funcInfo.strict && funcInfo.defaultThis)
				) {
					// `this.eval` is possible built-in `eval`.
					report(node.parent);
				}
			},
		};
	},
};
