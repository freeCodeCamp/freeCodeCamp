/**
 * @fileoverview Rule to warn when a function expression does not have a name.
 * @author Kyle T. Nunery
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

/**
 * Checks whether or not a given variable is a function name.
 * @param {escope.Variable} variable - A variable to check.
 * @returns {boolean} `true` if the variable is a function name.
 */
function isFunctionName(variable) {
    return variable && variable.defs[0].type === "FunctionName";
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require or disallow named `function` expressions",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                enum: ["always", "as-needed", "never"]
            }
        ]
    },

    create(context) {
        const never = context.options[0] === "never";
        const asNeeded = context.options[0] === "as-needed";

        /**
         * Determines whether the current FunctionExpression node is a get, set, or
         * shorthand method in an object literal or a class.
         * @param {ASTNode} node - A node to check.
         * @returns {boolean} True if the node is a get, set, or shorthand method.
         */
        function isObjectOrClassMethod(node) {
            const parent = node.parent;

            return (parent.type === "MethodDefinition" || (
                parent.type === "Property" && (
                    parent.method ||
                    parent.kind === "get" ||
                    parent.kind === "set"
                )
            ));
        }

        /**
         * Determines whether the current FunctionExpression node has a name that would be
         * inferred from context in a conforming ES6 environment.
         * @param {ASTNode} node - A node to check.
         * @returns {boolean} True if the node would have a name assigned automatically.
         */
        function hasInferredName(node) {
            const parent = node.parent;

            return isObjectOrClassMethod(node) ||
                (parent.type === "VariableDeclarator" && parent.id.type === "Identifier" && parent.init === node) ||
                (parent.type === "Property" && parent.value === node) ||
                (parent.type === "AssignmentExpression" && parent.left.type === "Identifier" && parent.right === node) ||
                (parent.type === "ExportDefaultDeclaration" && parent.declaration === node) ||
                (parent.type === "AssignmentPattern" && parent.right === node);
        }

        return {
            "FunctionExpression:exit"(node) {

                // Skip recursive functions.
                const nameVar = context.getDeclaredVariables(node)[0];

                if (isFunctionName(nameVar) && nameVar.references.length > 0) {
                    return;
                }

                const hasName = Boolean(node.id && node.id.name);
                const name = astUtils.getFunctionNameWithKind(node);

                if (never) {
                    if (hasName) {
                        context.report({
                            node,
                            message: "Unexpected named {{name}}.",
                            data: { name }
                        });
                    }
                } else {
                    if (!hasName && (asNeeded ? !hasInferredName(node) : !isObjectOrClassMethod(node))) {
                        context.report({
                            node,
                            message: "Unexpected unnamed {{name}}.",
                            data: { name }
                        });
                    }
                }
            }
        };
    }
};
