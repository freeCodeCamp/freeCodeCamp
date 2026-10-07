/**
 * @fileoverview Rule to enforce declarations in program or function body root.
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const validParent = new Set(["Program", "ExportNamedDeclaration", "ExportDefaultDeclaration"]);
const validBlockStatementParent = new Set(["FunctionDeclaration", "FunctionExpression", "ArrowFunctionExpression"]);

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow variable or `function` declarations in nested blocks",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-inner-declarations"
        },

        schema: [
            {
                enum: ["functions", "both"]
            }
        ],

        messages: {
            moveDeclToRoot: "Move {{type}} declaration to {{body}} root."
        }
    },

    create(context) {

        /**
         * Ensure that a given node is at a program or function body's root.
         * @param {ASTNode} node Declaration node to check.
         * @returns {void}
         */
        function check(node) {
            const parent = node.parent;

            if (
                parent.type === "BlockStatement" && validBlockStatementParent.has(parent.parent.type)
            ) {
                return;
            }

            if (validParent.has(parent.type)) {
                return;
            }

            const upperFunction = astUtils.getUpperFunction(parent);

            context.report({
                node,
                messageId: "moveDeclToRoot",
                data: {
                    type: (node.type === "FunctionDeclaration" ? "function" : "variable"),
                    body: (upperFunction === null ? "program" : "function body")
                }
            });
        }


        return {

            FunctionDeclaration: check,
            VariableDeclaration(node) {
                if (context.options[0] === "both" && node.kind === "var") {
                    check(node);
                }
            }

        };

    }
};
