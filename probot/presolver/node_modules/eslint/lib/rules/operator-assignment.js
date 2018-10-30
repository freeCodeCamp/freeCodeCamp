/**
 * @fileoverview Rule to replace assignment expressions with operator assignment
 * @author Brandon Mills
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether an operator is commutative and has an operator assignment
 * shorthand form.
 * @param   {string}  operator Operator to check.
 * @returns {boolean}          True if the operator is commutative and has a
 *     shorthand form.
 */
function isCommutativeOperatorWithShorthand(operator) {
    return ["*", "&", "^", "|"].indexOf(operator) >= 0;
}

/**
 * Checks whether an operator is not commuatative and has an operator assignment
 * shorthand form.
 * @param   {string}  operator Operator to check.
 * @returns {boolean}          True if the operator is not commuatative and has
 *     a shorthand form.
 */
function isNonCommutativeOperatorWithShorthand(operator) {
    return ["+", "-", "/", "%", "<<", ">>", ">>>", "**"].indexOf(operator) >= 0;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

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

        case "MemberExpression":

            /*
             * x[0] = x[0]
             * x[y] = x[y]
             * x.y = x.y
             */
            return same(a.object, b.object) && same(a.property, b.property);

        default:
            return false;
    }
}

/**
* Determines if the left side of a node can be safely fixed (i.e. if it activates the same getters/setters and)
* toString calls regardless of whether assignment shorthand is used)
* @param {ASTNode} node The node on the left side of the expression
* @returns {boolean} `true` if the node can be fixed
*/
function canBeFixed(node) {
    return node.type === "Identifier" ||
        node.type === "MemberExpression" && node.object.type === "Identifier" && (!node.computed || node.property.type === "Literal");
}

module.exports = {
    meta: {
        docs: {
            description: "require or disallow assignment operator shorthand where possible",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                enum: ["always", "never"]
            }
        ],

        fixable: "code"
    },

    create(context) {

        const sourceCode = context.getSourceCode();

        /**
        * Returns the operator token of an AssignmentExpression or BinaryExpression
        * @param {ASTNode} node An AssignmentExpression or BinaryExpression node
        * @returns {Token} The operator token in the node
        */
        function getOperatorToken(node) {
            return sourceCode.getFirstTokenBetween(node.left, node.right, token => token.value === node.operator);
        }

        /**
         * Ensures that an assignment uses the shorthand form where possible.
         * @param   {ASTNode} node An AssignmentExpression node.
         * @returns {void}
         */
        function verify(node) {
            if (node.operator !== "=" || node.right.type !== "BinaryExpression") {
                return;
            }

            const left = node.left;
            const expr = node.right;
            const operator = expr.operator;

            if (isCommutativeOperatorWithShorthand(operator) || isNonCommutativeOperatorWithShorthand(operator)) {
                if (same(left, expr.left)) {
                    context.report({
                        node,
                        message: "Assignment can be replaced with operator assignment.",
                        fix(fixer) {
                            if (canBeFixed(left)) {
                                const equalsToken = getOperatorToken(node);
                                const operatorToken = getOperatorToken(expr);
                                const leftText = sourceCode.getText().slice(node.range[0], equalsToken.range[0]);
                                const rightText = sourceCode.getText().slice(operatorToken.range[1], node.right.range[1]);

                                return fixer.replaceText(node, `${leftText}${expr.operator}=${rightText}`);
                            }
                            return null;
                        }
                    });
                } else if (same(left, expr.right) && isCommutativeOperatorWithShorthand(operator)) {

                    /*
                     * This case can't be fixed safely.
                     * If `a` and `b` both have custom valueOf() behavior, then fixing `a = b * a` to `a *= b` would
                     * change the execution order of the valueOf() functions.
                     */
                    context.report({
                        node,
                        message: "Assignment can be replaced with operator assignment."
                    });
                }
            }
        }

        /**
         * Warns if an assignment expression uses operator assignment shorthand.
         * @param   {ASTNode} node An AssignmentExpression node.
         * @returns {void}
         */
        function prohibit(node) {
            if (node.operator !== "=") {
                context.report({
                    node,
                    message: "Unexpected operator assignment shorthand.",
                    fix(fixer) {
                        if (canBeFixed(node.left)) {
                            const operatorToken = getOperatorToken(node);
                            const leftText = sourceCode.getText().slice(node.range[0], operatorToken.range[0]);
                            const newOperator = node.operator.slice(0, -1);
                            let rightText;

                            // If this change would modify precedence (e.g. `foo *= bar + 1` => `foo = foo * (bar + 1)`), parenthesize the right side.
                            if (
                                astUtils.getPrecedence(node.right) <= astUtils.getPrecedence({ type: "BinaryExpression", operator: newOperator }) &&
                                !astUtils.isParenthesised(sourceCode, node.right)
                            ) {
                                rightText = `${sourceCode.text.slice(operatorToken.range[1], node.right.range[0])}(${sourceCode.getText(node.right)})`;
                            } else {
                                rightText = sourceCode.text.slice(operatorToken.range[1], node.range[1]);
                            }

                            return fixer.replaceText(node, `${leftText}= ${leftText}${newOperator}${rightText}`);
                        }
                        return null;
                    }
                });
            }
        }

        return {
            AssignmentExpression: context.options[0] !== "never" ? verify : prohibit
        };

    }
};
