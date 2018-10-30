/**
 * @fileoverview Rule to flag bitwise identifiers
 * @author Nicholas C. Zakas
 */

"use strict";

//
// Set of bitwise operators.
//
const BITWISE_OPERATORS = [
    "^", "|", "&", "<<", ">>", ">>>",
    "^=", "|=", "&=", "<<=", ">>=", ">>>=",
    "~"
];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow bitwise operators",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                type: "object",
                properties: {
                    allow: {
                        type: "array",
                        items: {
                            enum: BITWISE_OPERATORS
                        },
                        uniqueItems: true
                    },
                    int32Hint: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {
        const options = context.options[0] || {};
        const allowed = options.allow || [];
        const int32Hint = options.int32Hint === true;

        /**
         * Reports an unexpected use of a bitwise operator.
         * @param   {ASTNode} node Node which contains the bitwise operator.
         * @returns {void}
         */
        function report(node) {
            context.report({ node, message: "Unexpected use of '{{operator}}'.", data: { operator: node.operator } });
        }

        /**
         * Checks if the given node has a bitwise operator.
         * @param   {ASTNode} node The node to check.
         * @returns {boolean} Whether or not the node has a bitwise operator.
         */
        function hasBitwiseOperator(node) {
            return BITWISE_OPERATORS.indexOf(node.operator) !== -1;
        }

        /**
         * Checks if exceptions were provided, e.g. `{ allow: ['~', '|'] }`.
         * @param   {ASTNode} node The node to check.
         * @returns {boolean} Whether or not the node has a bitwise operator.
         */
        function allowedOperator(node) {
            return allowed.indexOf(node.operator) !== -1;
        }

        /**
         * Checks if the given bitwise operator is used for integer typecasting, i.e. "|0"
         * @param   {ASTNode} node The node to check.
         * @returns {boolean} whether the node is used in integer typecasting.
         */
        function isInt32Hint(node) {
            return int32Hint && node.operator === "|" && node.right &&
              node.right.type === "Literal" && node.right.value === 0;
        }

        /**
         * Report if the given node contains a bitwise operator.
         * @param   {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkNodeForBitwiseOperator(node) {
            if (hasBitwiseOperator(node) && !allowedOperator(node) && !isInt32Hint(node)) {
                report(node);
            }
        }

        return {
            AssignmentExpression: checkNodeForBitwiseOperator,
            BinaryExpression: checkNodeForBitwiseOperator,
            UnaryExpression: checkNodeForBitwiseOperator
        };

    }
};
