/**
 * @fileoverview Rule to disallow assignments where both sides are exactly the same
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SPACES = /\s+/gu;

/**
 * Traverses 2 Pattern nodes in parallel, then reports self-assignments.
 * @param {ASTNode|null} left A left node to traverse. This is a Pattern or
 *      a Property.
 * @param {ASTNode|null} right A right node to traverse. This is a Pattern or
 *      a Property.
 * @param {boolean} props The flag to check member expressions as well.
 * @param {Function} report A callback function to report.
 * @returns {void}
 */
function eachSelfAssignment(left, right, props, report) {
    if (!left || !right) {

        // do nothing
    } else if (
        left.type === "Identifier" &&
        right.type === "Identifier" &&
        left.name === right.name
    ) {
        report(right);
    } else if (
        left.type === "ArrayPattern" &&
        right.type === "ArrayExpression"
    ) {
        const end = Math.min(left.elements.length, right.elements.length);

        for (let i = 0; i < end; ++i) {
            const leftElement = left.elements[i];
            const rightElement = right.elements[i];

            // Avoid cases such as [...a] = [...a, 1]
            if (
                leftElement &&
                leftElement.type === "RestElement" &&
                i < right.elements.length - 1
            ) {
                break;
            }

            eachSelfAssignment(leftElement, rightElement, props, report);

            // After a spread element, those indices are unknown.
            if (rightElement && rightElement.type === "SpreadElement") {
                break;
            }
        }
    } else if (
        left.type === "RestElement" &&
        right.type === "SpreadElement"
    ) {
        eachSelfAssignment(left.argument, right.argument, props, report);
    } else if (
        left.type === "ObjectPattern" &&
        right.type === "ObjectExpression" &&
        right.properties.length >= 1
    ) {

        /*
         * Gets the index of the last spread property.
         * It's possible to overwrite properties followed by it.
         */
        let startJ = 0;

        for (let i = right.properties.length - 1; i >= 0; --i) {
            const propType = right.properties[i].type;

            if (propType === "SpreadElement" || propType === "ExperimentalSpreadProperty") {
                startJ = i + 1;
                break;
            }
        }

        for (let i = 0; i < left.properties.length; ++i) {
            for (let j = startJ; j < right.properties.length; ++j) {
                eachSelfAssignment(
                    left.properties[i],
                    right.properties[j],
                    props,
                    report
                );
            }
        }
    } else if (
        left.type === "Property" &&
        right.type === "Property" &&
        right.kind === "init" &&
        !right.method
    ) {
        const leftName = astUtils.getStaticPropertyName(left);

        if (leftName !== null && leftName === astUtils.getStaticPropertyName(right)) {
            eachSelfAssignment(left.value, right.value, props, report);
        }
    } else if (
        props &&
        astUtils.skipChainExpression(left).type === "MemberExpression" &&
        astUtils.skipChainExpression(right).type === "MemberExpression" &&
        astUtils.isSameReference(left, right)
    ) {
        report(right);
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow assignments where both sides are exactly the same",
            category: "Best Practices",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-self-assign"
        },

        schema: [
            {
                type: "object",
                properties: {
                    props: {
                        type: "boolean",
                        default: true
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            selfAssignment: "'{{name}}' is assigned to itself."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const [{ props = true } = {}] = context.options;

        /**
         * Reports a given node as self assignments.
         * @param {ASTNode} node A node to report. This is an Identifier node.
         * @returns {void}
         */
        function report(node) {
            context.report({
                node,
                messageId: "selfAssignment",
                data: {
                    name: sourceCode.getText(node).replace(SPACES, "")
                }
            });
        }

        return {
            AssignmentExpression(node) {
                if (node.operator === "=") {
                    eachSelfAssignment(node.left, node.right, props, report);
                }
            }
        };
    }
};
