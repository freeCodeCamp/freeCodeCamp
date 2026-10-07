/**
 * @fileoverview Rule to check for implicit global variables, functions and classes.
 * @author Joshua Peek
 */

"use strict";

const ASSIGNMENT_NODES = new Set([
	"AssignmentExpression",
	"ForInStatement",
	"ForOfStatement",
]);

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
module.exports = {
	meta: {
		type: "suggestion",

		defaultOptions: [
			{
				lexicalBindings: false,
			},
		],

		docs: {
			description: "Disallow declarations in the global scope",
			recommended: false,
			url: "https://eslint.org/docs/latest/rules/no-implicit-globals",
		},

		schema: [
			{
				type: "object",
				properties: {
					lexicalBindings: {
						type: "boolean",
					},
				},
				additionalProperties: false,
			},
		],

		messages: {
			globalNonLexicalBinding:
				"Unexpected {{kind}} declaration in the global scope, wrap in an IIFE for a local variable, assign as global property for a global variable.",
			globalLexicalBinding:
				"Unexpected {{kind}} declaration in the global scope, wrap in a block or in an IIFE.",
			globalVariableLeak:
				"Global variable leak, declare the variable if it is intended to be local.",
			assignmentToReadonlyGlobal:
				"Unexpected assignment to read-only global variable.",
			redeclarationOfReadonlyGlobal:
				"Unexpected redeclaration of read-only global variable.",
		},
	},

	create(context) {
		const [{ lexicalBindings: checkLexicalBindings }] = context.options;
		const sourceCode = context.sourceCode;

		/**
		 * Reports the node.
		 * @param {ASTNode} node Node to report.
		 * @param {string} messageId Id of the message to report.
		 * @param {string|undefined} kind Declaration kind, can be 'var', 'const', 'let', function or class.
		 * @returns {void}
		 */
		function report(node, messageId, kind) {
			context.report({
				node,
				messageId,
				data: {
					kind,
				},
			});
		}

		return {
			Program(node) {
				const scope = sourceCode.getScope(node);

				scope.variables.forEach(variable => {
					// Only ESLint global variables have the `writable` key.
					const isReadonlyEslintGlobalVariable =
						variable.writeable === false;
					const isWritableEslintGlobalVariable =
						variable.writeable === true;

					if (isWritableEslintGlobalVariable) {
						// Everything is allowed with writable ESLint global variables.
						return;
					}

					// Variables exported by "exported" block comments
					if (variable.eslintExported) {
						return;
					}

					variable.defs.forEach(def => {
						const defNode = def.node;

						if (
							def.type === "FunctionName" ||
							(def.type === "Variable" &&
								def.parent.kind === "var")
						) {
							if (isReadonlyEslintGlobalVariable) {
								report(
									defNode,
									"redeclarationOfReadonlyGlobal",
								);
							} else {
								report(
									defNode,
									"globalNonLexicalBinding",
									def.type === "FunctionName"
										? "function"
										: `'${def.parent.kind}'`,
								);
							}
						}

						if (checkLexicalBindings) {
							if (
								def.type === "ClassName" ||
								(def.type === "Variable" &&
									(def.parent.kind === "let" ||
										def.parent.kind === "const"))
							) {
								if (isReadonlyEslintGlobalVariable) {
									report(
										defNode,
										"redeclarationOfReadonlyGlobal",
									);
								} else {
									report(
										defNode,
										"globalLexicalBinding",
										def.type === "ClassName"
											? "class"
											: `'${def.parent.kind}'`,
									);
								}
							}
						}
					});

					if (
						isReadonlyEslintGlobalVariable &&
						variable.defs.length === 0
					) {
						variable.references.forEach(reference => {
							if (reference.isWrite() && !reference.isRead()) {
								let assignmentParent =
									reference.identifier.parent;

								while (
									assignmentParent &&
									!ASSIGNMENT_NODES.has(assignmentParent.type)
								) {
									assignmentParent = assignmentParent.parent;
								}

								report(
									assignmentParent ?? reference.identifier,
									"assignmentToReadonlyGlobal",
								);
							}
						});
					}
				});

				// Undeclared assigned variables.
				scope.implicit.variables.forEach(variable => {
					// def.node is an AssignmentExpression, ForInStatement or ForOfStatement.
					variable.defs.forEach(def => {
						report(def.node, "globalVariableLeak");
					});
				});
			},
		};
	},
};
