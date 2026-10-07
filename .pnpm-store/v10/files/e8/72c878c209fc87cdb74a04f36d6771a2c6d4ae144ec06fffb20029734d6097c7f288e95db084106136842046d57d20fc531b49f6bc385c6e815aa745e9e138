/**
 * @fileoverview Rule to check for implicit global variables, functions and classes.
 * @author Joshua Peek
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow declarations in the global scope",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-implicit-globals"
        },

        schema: [{
            type: "object",
            properties: {
                lexicalBindings: {
                    type: "boolean",
                    default: false
                }
            },
            additionalProperties: false
        }],

        messages: {
            globalNonLexicalBinding: "Unexpected {{kind}} declaration in the global scope, wrap in an IIFE for a local variable, assign as global property for a global variable.",
            globalLexicalBinding: "Unexpected {{kind}} declaration in the global scope, wrap in a block or in an IIFE.",
            globalVariableLeak: "Global variable leak, declare the variable if it is intended to be local.",
            assignmentToReadonlyGlobal: "Unexpected assignment to read-only global variable.",
            redeclarationOfReadonlyGlobal: "Unexpected redeclaration of read-only global variable."
        }
    },

    create(context) {

        const checkLexicalBindings = context.options[0] && context.options[0].lexicalBindings === true;

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
                    kind
                }
            });
        }

        return {
            Program() {
                const scope = context.getScope();

                scope.variables.forEach(variable => {

                    // Only ESLint global variables have the `writable` key.
                    const isReadonlyEslintGlobalVariable = variable.writeable === false;
                    const isWritableEslintGlobalVariable = variable.writeable === true;

                    if (isWritableEslintGlobalVariable) {

                        // Everything is allowed with writable ESLint global variables.
                        return;
                    }

                    variable.defs.forEach(def => {
                        const defNode = def.node;

                        if (def.type === "FunctionName" || (def.type === "Variable" && def.parent.kind === "var")) {
                            if (isReadonlyEslintGlobalVariable) {
                                report(defNode, "redeclarationOfReadonlyGlobal");
                            } else {
                                report(
                                    defNode,
                                    "globalNonLexicalBinding",
                                    def.type === "FunctionName" ? "function" : `'${def.parent.kind}'`
                                );
                            }
                        }

                        if (checkLexicalBindings) {
                            if (def.type === "ClassName" ||
                                    (def.type === "Variable" && (def.parent.kind === "let" || def.parent.kind === "const"))) {
                                if (isReadonlyEslintGlobalVariable) {
                                    report(defNode, "redeclarationOfReadonlyGlobal");
                                } else {
                                    report(
                                        defNode,
                                        "globalLexicalBinding",
                                        def.type === "ClassName" ? "class" : `'${def.parent.kind}'`
                                    );
                                }
                            }
                        }
                    });
                });

                // Undeclared assigned variables.
                scope.implicit.variables.forEach(variable => {
                    const scopeVariable = scope.set.get(variable.name);
                    let messageId;

                    if (scopeVariable) {

                        // ESLint global variable
                        if (scopeVariable.writeable) {
                            return;
                        }
                        messageId = "assignmentToReadonlyGlobal";

                    } else {

                        // Reference to an unknown variable, possible global leak.
                        messageId = "globalVariableLeak";
                    }

                    // def.node is an AssignmentExpression, ForInStatement or ForOfStatement.
                    variable.defs.forEach(def => {
                        report(def.node, messageId);
                    });
                });
            }
        };

    }
};
