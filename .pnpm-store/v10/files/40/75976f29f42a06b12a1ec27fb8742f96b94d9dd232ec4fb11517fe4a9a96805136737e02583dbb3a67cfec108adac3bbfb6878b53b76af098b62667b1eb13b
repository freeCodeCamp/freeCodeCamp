/**
 * @fileoverview Rule to flag comparisons to the value NaN
 * @author James Allardice
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines if the given node is a NaN `Identifier` node.
 * @param {ASTNode|null} node The node to check.
 * @returns {boolean} `true` if the node is 'NaN' identifier.
 */
function isNaNIdentifier(node) {
    return Boolean(node) && (
        astUtils.isSpecificId(node, "NaN") ||
        astUtils.isSpecificMemberAccess(node, "Number", "NaN")
    );
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "require calls to `isNaN()` when checking for `NaN`",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/use-isnan"
        },

        schema: [
            {
                type: "object",
                properties: {
                    enforceForSwitchCase: {
                        type: "boolean",
                        default: true
                    },
                    enforceForIndexOf: {
                        type: "boolean",
                        default: false
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            comparisonWithNaN: "Use the isNaN function to compare with NaN.",
            switchNaN: "'switch(NaN)' can never match a case clause. Use Number.isNaN instead of the switch.",
            caseNaN: "'case NaN' can never match. Use Number.isNaN before the switch.",
            indexOfNaN: "Array prototype method '{{ methodName }}' cannot find NaN."
        }
    },

    create(context) {

        const enforceForSwitchCase = !context.options[0] || context.options[0].enforceForSwitchCase;
        const enforceForIndexOf = context.options[0] && context.options[0].enforceForIndexOf;

        /**
         * Checks the given `BinaryExpression` node for `foo === NaN` and other comparisons.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkBinaryExpression(node) {
            if (
                /^(?:[<>]|[!=]=)=?$/u.test(node.operator) &&
                (isNaNIdentifier(node.left) || isNaNIdentifier(node.right))
            ) {
                context.report({ node, messageId: "comparisonWithNaN" });
            }
        }

        /**
         * Checks the discriminant and all case clauses of the given `SwitchStatement` node for `switch(NaN)` and `case NaN:`
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkSwitchStatement(node) {
            if (isNaNIdentifier(node.discriminant)) {
                context.report({ node, messageId: "switchNaN" });
            }

            for (const switchCase of node.cases) {
                if (isNaNIdentifier(switchCase.test)) {
                    context.report({ node: switchCase, messageId: "caseNaN" });
                }
            }
        }

        /**
         * Checks the given `CallExpression` node for `.indexOf(NaN)` and `.lastIndexOf(NaN)`.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkCallExpression(node) {
            const callee = astUtils.skipChainExpression(node.callee);

            if (callee.type === "MemberExpression") {
                const methodName = astUtils.getStaticPropertyName(callee);

                if (
                    (methodName === "indexOf" || methodName === "lastIndexOf") &&
                    node.arguments.length === 1 &&
                    isNaNIdentifier(node.arguments[0])
                ) {
                    context.report({ node, messageId: "indexOfNaN", data: { methodName } });
                }
            }
        }

        const listeners = {
            BinaryExpression: checkBinaryExpression
        };

        if (enforceForSwitchCase) {
            listeners.SwitchStatement = checkSwitchStatement;
        }

        if (enforceForIndexOf) {
            listeners.CallExpression = checkCallExpression;
        }

        return listeners;
    }
};
