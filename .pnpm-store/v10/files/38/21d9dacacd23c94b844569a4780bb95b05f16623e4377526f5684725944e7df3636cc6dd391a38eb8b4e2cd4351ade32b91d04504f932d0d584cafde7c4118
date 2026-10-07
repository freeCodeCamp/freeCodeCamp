/**
 * @fileoverview Require spaces around infix operators
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "require spacing around infix operators",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/space-infix-ops"
        },

        fixable: "whitespace",

        schema: [
            {
                type: "object",
                properties: {
                    int32Hint: {
                        type: "boolean",
                        default: false
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            missingSpace: "Operator '{{operator}}' must be spaced."
        }
    },

    create(context) {
        const int32Hint = context.options[0] ? context.options[0].int32Hint === true : false;
        const sourceCode = context.getSourceCode();

        /**
         * Returns the first token which violates the rule
         * @param {ASTNode} left The left node of the main node
         * @param {ASTNode} right The right node of the main node
         * @param {string} op The operator of the main node
         * @returns {Object} The violator token or null
         * @private
         */
        function getFirstNonSpacedToken(left, right, op) {
            const operator = sourceCode.getFirstTokenBetween(left, right, token => token.value === op);
            const prev = sourceCode.getTokenBefore(operator);
            const next = sourceCode.getTokenAfter(operator);

            if (!sourceCode.isSpaceBetweenTokens(prev, operator) || !sourceCode.isSpaceBetweenTokens(operator, next)) {
                return operator;
            }

            return null;
        }

        /**
         * Reports an AST node as a rule violation
         * @param {ASTNode} mainNode The node to report
         * @param {Object} culpritToken The token which has a problem
         * @returns {void}
         * @private
         */
        function report(mainNode, culpritToken) {
            context.report({
                node: mainNode,
                loc: culpritToken.loc,
                messageId: "missingSpace",
                data: {
                    operator: culpritToken.value
                },
                fix(fixer) {
                    const previousToken = sourceCode.getTokenBefore(culpritToken);
                    const afterToken = sourceCode.getTokenAfter(culpritToken);
                    let fixString = "";

                    if (culpritToken.range[0] - previousToken.range[1] === 0) {
                        fixString = " ";
                    }

                    fixString += culpritToken.value;

                    if (afterToken.range[0] - culpritToken.range[1] === 0) {
                        fixString += " ";
                    }

                    return fixer.replaceText(culpritToken, fixString);
                }
            });
        }

        /**
         * Check if the node is binary then report
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkBinary(node) {
            const leftNode = (node.left.typeAnnotation) ? node.left.typeAnnotation : node.left;
            const rightNode = node.right;

            // search for = in AssignmentPattern nodes
            const operator = node.operator || "=";

            const nonSpacedNode = getFirstNonSpacedToken(leftNode, rightNode, operator);

            if (nonSpacedNode) {
                if (!(int32Hint && sourceCode.getText(node).endsWith("|0"))) {
                    report(node, nonSpacedNode);
                }
            }
        }

        /**
         * Check if the node is conditional
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkConditional(node) {
            const nonSpacedConsequentNode = getFirstNonSpacedToken(node.test, node.consequent, "?");
            const nonSpacedAlternateNode = getFirstNonSpacedToken(node.consequent, node.alternate, ":");

            if (nonSpacedConsequentNode) {
                report(node, nonSpacedConsequentNode);
            }

            if (nonSpacedAlternateNode) {
                report(node, nonSpacedAlternateNode);
            }
        }

        /**
         * Check if the node is a variable
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkVar(node) {
            const leftNode = (node.id.typeAnnotation) ? node.id.typeAnnotation : node.id;
            const rightNode = node.init;

            if (rightNode) {
                const nonSpacedNode = getFirstNonSpacedToken(leftNode, rightNode, "=");

                if (nonSpacedNode) {
                    report(node, nonSpacedNode);
                }
            }
        }

        return {
            AssignmentExpression: checkBinary,
            AssignmentPattern: checkBinary,
            BinaryExpression: checkBinary,
            LogicalExpression: checkBinary,
            ConditionalExpression: checkConditional,
            VariableDeclarator: checkVar
        };

    }
};
