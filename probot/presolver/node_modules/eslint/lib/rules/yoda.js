/**
 * @fileoverview Rule to require or disallow yoda comparisons
 * @author Nicholas C. Zakas
 */
"use strict";

//--------------------------------------------------------------------------
// Requirements
//--------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//--------------------------------------------------------------------------
// Helpers
//--------------------------------------------------------------------------

/**
 * Determines whether an operator is a comparison operator.
 * @param {string} operator The operator to check.
 * @returns {boolean} Whether or not it is a comparison operator.
 */
function isComparisonOperator(operator) {
    return (/^(==|===|!=|!==|<|>|<=|>=)$/).test(operator);
}

/**
 * Determines whether an operator is an equality operator.
 * @param {string} operator The operator to check.
 * @returns {boolean} Whether or not it is an equality operator.
 */
function isEqualityOperator(operator) {
    return (/^(==|===)$/).test(operator);
}

/**
 * Determines whether an operator is one used in a range test.
 * Allowed operators are `<` and `<=`.
 * @param {string} operator The operator to check.
 * @returns {boolean} Whether the operator is used in range tests.
 */
function isRangeTestOperator(operator) {
    return ["<", "<="].indexOf(operator) >= 0;
}

/**
 * Determines whether a non-Literal node is a negative number that should be
 * treated as if it were a single Literal node.
 * @param {ASTNode} node Node to test.
 * @returns {boolean} True if the node is a negative number that looks like a
 *                    real literal and should be treated as such.
 */
function looksLikeLiteral(node) {
    return (node.type === "UnaryExpression" &&
        node.operator === "-" &&
        node.prefix &&
        node.argument.type === "Literal" &&
        typeof node.argument.value === "number");
}

/**
 * Attempts to derive a Literal node from nodes that are treated like literals.
 * @param {ASTNode} node Node to normalize.
 * @param {number} [defaultValue] The default value to be returned if the node
 *                                is not a Literal.
 * @returns {ASTNode} One of the following options.
 *  1. The original node if the node is already a Literal
 *  2. A normalized Literal node with the negative number as the value if the
 *     node represents a negative number literal.
 *  3. The Literal node which has the `defaultValue` argument if it exists.
 *  4. Otherwise `null`.
 */
function getNormalizedLiteral(node, defaultValue) {
    if (node.type === "Literal") {
        return node;
    }

    if (looksLikeLiteral(node)) {
        return {
            type: "Literal",
            value: -node.argument.value,
            raw: `-${node.argument.value}`
        };
    }

    if (defaultValue) {
        return {
            type: "Literal",
            value: defaultValue,
            raw: String(defaultValue)
        };
    }

    return null;
}

/**
 * Checks whether two expressions reference the same value. For example:
 *     a = a
 *     a.b = a.b
 *     a[0] = a[0]
 *     a['b'] = a['b']
 * @param   {ASTNode} a Left side of the comparison.
 * @param   {ASTNode} b Right side of the comparison.
 * @returns {boolean}   True if both sides match and reference the same value.
 */
function same(a, b) {
    if (a.type !== b.type) {
        return false;
    }

    switch (a.type) {
        case "Identifier":
            return a.name === b.name;

        case "Literal":
            return a.value === b.value;

        case "MemberExpression": {
            const nameA = astUtils.getStaticPropertyName(a);

            // x.y = x["y"]
            if (nameA) {
                return (
                    same(a.object, b.object) &&
                    nameA === astUtils.getStaticPropertyName(b)
                );
            }

            // x[0] = x[0]
            // x[y] = x[y]
            // x.y = x.y
            return (
                a.computed === b.computed &&
                same(a.object, b.object) &&
                same(a.property, b.property)
            );
        }

        case "ThisExpression":
            return true;

        default:
            return false;
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require or disallow \"Yoda\" conditions",
            category: "Best Practices",
            recommended: false
        },

        schema: [
            {
                enum: ["always", "never"]
            },
            {
                type: "object",
                properties: {
                    exceptRange: {
                        type: "boolean"
                    },
                    onlyEquality: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ],

        fixable: "code"
    },

    create(context) {

        // Default to "never" (!always) if no option
        const always = (context.options[0] === "always");
        const exceptRange = (context.options[1] && context.options[1].exceptRange);
        const onlyEquality = (context.options[1] && context.options[1].onlyEquality);

        const sourceCode = context.getSourceCode();

        /**
         * Determines whether node represents a range test.
         * A range test is a "between" test like `(0 <= x && x < 1)` or an "outside"
         * test like `(x < 0 || 1 <= x)`. It must be wrapped in parentheses, and
         * both operators must be `<` or `<=`. Finally, the literal on the left side
         * must be less than or equal to the literal on the right side so that the
         * test makes any sense.
         * @param {ASTNode} node LogicalExpression node to test.
         * @returns {boolean} Whether node is a range test.
         */
        function isRangeTest(node) {
            const left = node.left,
                right = node.right;

            /**
             * Determines whether node is of the form `0 <= x && x < 1`.
             * @returns {boolean} Whether node is a "between" range test.
             */
            function isBetweenTest() {
                let leftLiteral, rightLiteral;

                return (node.operator === "&&" &&
                    (leftLiteral = getNormalizedLiteral(left.left)) &&
                    (rightLiteral = getNormalizedLiteral(right.right, Number.POSITIVE_INFINITY)) &&
                    leftLiteral.value <= rightLiteral.value &&
                    same(left.right, right.left));
            }

            /**
             * Determines whether node is of the form `x < 0 || 1 <= x`.
             * @returns {boolean} Whether node is an "outside" range test.
             */
            function isOutsideTest() {
                let leftLiteral, rightLiteral;

                return (node.operator === "||" &&
                    (leftLiteral = getNormalizedLiteral(left.right, Number.NEGATIVE_INFINITY)) &&
                    (rightLiteral = getNormalizedLiteral(right.left)) &&
                    leftLiteral.value <= rightLiteral.value &&
                    same(left.left, right.right));
            }

            /**
             * Determines whether node is wrapped in parentheses.
             * @returns {boolean} Whether node is preceded immediately by an open
             *                    paren token and followed immediately by a close
             *                    paren token.
             */
            function isParenWrapped() {
                return astUtils.isParenthesised(sourceCode, node);
            }

            return (node.type === "LogicalExpression" &&
                left.type === "BinaryExpression" &&
                right.type === "BinaryExpression" &&
                isRangeTestOperator(left.operator) &&
                isRangeTestOperator(right.operator) &&
                (isBetweenTest() || isOutsideTest()) &&
                isParenWrapped());
        }

        const OPERATOR_FLIP_MAP = {
            "===": "===",
            "!==": "!==",
            "==": "==",
            "!=": "!=",
            "<": ">",
            ">": "<",
            "<=": ">=",
            ">=": "<="
        };

        /**
        * Returns a string representation of a BinaryExpression node with its sides/operator flipped around.
        * @param {ASTNode} node The BinaryExpression node
        * @returns {string} A string representation of the node with the sides and operator flipped
        */
        function getFlippedString(node) {
            const operatorToken = sourceCode.getFirstTokenBetween(node.left, node.right, token => token.value === node.operator);
            const textBeforeOperator = sourceCode.getText().slice(sourceCode.getTokenBefore(operatorToken).range[1], operatorToken.range[0]);
            const textAfterOperator = sourceCode.getText().slice(operatorToken.range[1], sourceCode.getTokenAfter(operatorToken).range[0]);
            const leftText = sourceCode.getText().slice(node.range[0], sourceCode.getTokenBefore(operatorToken).range[1]);
            const rightText = sourceCode.getText().slice(sourceCode.getTokenAfter(operatorToken).range[0], node.range[1]);

            return rightText + textBeforeOperator + OPERATOR_FLIP_MAP[operatorToken.value] + textAfterOperator + leftText;
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            BinaryExpression(node) {
                const expectedLiteral = always ? node.left : node.right;
                const expectedNonLiteral = always ? node.right : node.left;

                // If `expectedLiteral` is not a literal, and `expectedNonLiteral` is a literal, raise an error.
                if (
                    (expectedNonLiteral.type === "Literal" || looksLikeLiteral(expectedNonLiteral)) &&
                    !(expectedLiteral.type === "Literal" || looksLikeLiteral(expectedLiteral)) &&
                    !(!isEqualityOperator(node.operator) && onlyEquality) &&
                    isComparisonOperator(node.operator) &&
                    !(exceptRange && isRangeTest(context.getAncestors().pop()))
                ) {
                    context.report({
                        node,
                        message: "Expected literal to be on the {{expectedSide}} side of {{operator}}.",
                        data: {
                            operator: node.operator,
                            expectedSide: always ? "left" : "right"
                        },
                        fix: fixer => fixer.replaceText(node, getFlippedString(node))
                    });
                }

            }
        };

    }
};
