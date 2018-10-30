/**
 * @fileoverview Prefer destructuring from arrays and objects
 * @author Alex LaFroscia
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require destructuring from arrays and/or objects",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: [
            {
                type: "object",
                properties: {
                    array: {
                        type: "boolean"
                    },
                    object: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            },
            {
                type: "object",
                properties: {
                    enforceForRenamedProperties: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },
    create(context) {

        let checkArrays = true;
        let checkObjects = true;
        let enforceForRenamedProperties = false;
        const enabledTypes = context.options[0];
        const additionalOptions = context.options[1];

        if (enabledTypes) {
            if (typeof enabledTypes.array !== "undefined") {
                checkArrays = enabledTypes.array;
            }

            if (typeof enabledTypes.object !== "undefined") {
                checkObjects = enabledTypes.object;
            }
        }

        if (additionalOptions) {
            if (typeof additionalOptions.enforceForRenamedProperties !== "undefined") {
                enforceForRenamedProperties = additionalOptions.enforceForRenamedProperties;
            }
        }

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        /**
         * Determines if the given node node is accessing an array index
         *
         * This is used to differentiate array index access from object property
         * access.
         *
         * @param {ASTNode} node the node to evaluate
         * @returns {boolean} whether or not the node is an integer
         */
        function isArrayIndexAccess(node) {
            return Number.isInteger(node.property.value);
        }

        /**
         * Report that the given node should use destructuring
         *
         * @param {ASTNode} reportNode the node to report
         * @param {string} type the type of destructuring that should have been done
         * @returns {void}
         */
        function report(reportNode, type) {
            context.report({ node: reportNode, message: "Use {{type}} destructuring.", data: { type } });
        }

        /**
         * Check that the `prefer-destructuring` rules are followed based on the
         * given left- and right-hand side of the assignment.
         *
         * Pulled out into a separate method so that VariableDeclarators and
         * AssignmentExpressions can share the same verification logic.
         *
         * @param {ASTNode} leftNode the left-hand side of the assignment
         * @param {ASTNode} rightNode the right-hand side of the assignment
         * @param {ASTNode} reportNode the node to report the error on
         * @returns {void}
         */
        function performCheck(leftNode, rightNode, reportNode) {
            if (rightNode.type !== "MemberExpression") {
                return;
            }

            if (checkArrays && isArrayIndexAccess(rightNode)) {
                report(reportNode, "array");
                return;
            }

            if (checkObjects && enforceForRenamedProperties) {
                report(reportNode, "object");
                return;
            }

            if (checkObjects) {
                const property = rightNode.property;

                if ((property.type === "Literal" && leftNode.name === property.value) ||
                    (property.type === "Identifier" && leftNode.name === property.name)) {
                    report(reportNode, "object");
                }
            }
        }

        /**
         * Check if a given variable declarator is coming from an property access
         * that should be using destructuring instead
         *
         * @param {ASTNode} node the variable declarator to check
         * @returns {void}
         */
        function checkVariableDeclarator(node) {

            // Skip if variable is declared without assignment
            if (!node.init) {
                return;
            }

            // We only care about member expressions past this point
            if (node.init.type !== "MemberExpression") {
                return;
            }

            performCheck(node.id, node.init, node);
        }

        /**
         * Run the `prefer-destructuring` check on an AssignmentExpression
         *
         * @param {ASTNode} node the AssignmentExpression node
         * @returns {void}
         */
        function checkAssigmentExpression(node) {
            if (node.operator === "=") {
                performCheck(node.left, node.right, node);
            }
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            VariableDeclarator: checkVariableDeclarator,
            AssignmentExpression: checkAssigmentExpression
        };
    }
};
