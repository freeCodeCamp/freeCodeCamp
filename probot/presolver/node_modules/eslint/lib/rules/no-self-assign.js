/**
 * @fileoverview Rule to disallow assignments where both sides are exactly the same
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SPACES = /\s+/g;

/**
 * Checks whether the property of 2 given member expression nodes are the same
 * property or not.
 *
 * @param {ASTNode} left - A member expression node to check.
 * @param {ASTNode} right - Another member expression node to check.
 * @returns {boolean} `true` if the member expressions have the same property.
 */
function isSameProperty(left, right) {
    if (left.property.type === "Identifier" &&
        left.property.type === right.property.type &&
        left.property.name === right.property.name &&
        left.computed === right.computed
    ) {
        return true;
    }

    const lname = astUtils.getStaticPropertyName(left);
    const rname = astUtils.getStaticPropertyName(right);

    return lname !== null && lname === rname;
}

/**
 * Checks whether 2 given member expression nodes are the reference to the same
 * property or not.
 *
 * @param {ASTNode} left - A member expression node to check.
 * @param {ASTNode} right - Another member expression node to check.
 * @returns {boolean} `true` if the member expressions are the reference to the
 *  same property or not.
 */
function isSameMember(left, right) {
    if (!isSameProperty(left, right)) {
        return false;
    }

    const lobj = left.object;
    const robj = right.object;

    if (lobj.type !== robj.type) {
        return false;
    }
    if (lobj.type === "MemberExpression") {
        return isSameMember(lobj, robj);
    }
    return lobj.type === "Identifier" && lobj.name === robj.name;
}

/**
 * Traverses 2 Pattern nodes in parallel, then reports self-assignments.
 *
 * @param {ASTNode|null} left - A left node to traverse. This is a Pattern or
 *      a Property.
 * @param {ASTNode|null} right - A right node to traverse. This is a Pattern or
 *      a Property.
 * @param {boolean} props - The flag to check member expressions as well.
 * @param {Function} report - A callback function to report.
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
            const rightElement = right.elements[i];

            eachSelfAssignment(left.elements[i], rightElement, props, report);

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

        // Gets the index of the last spread property.
        // It's possible to overwrite properties followed by it.
        let startJ = 0;

        for (let i = right.properties.length - 1; i >= 0; --i) {
            if (right.properties[i].type === "ExperimentalSpreadProperty") {
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
        !left.computed &&
        !right.computed &&
        right.kind === "init" &&
        !right.method &&
        left.key.name === right.key.name
    ) {
        eachSelfAssignment(left.value, right.value, props, report);
    } else if (
        props &&
        left.type === "MemberExpression" &&
        right.type === "MemberExpression" &&
        isSameMember(left, right)
    ) {
        report(right);
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow assignments where both sides are exactly the same",
            category: "Best Practices",
            recommended: true
        },

        schema: [
            {
                type: "object",
                properties: {
                    props: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        const options = context.options[0];
        const props = Boolean(options && options.props);

        /**
         * Reports a given node as self assignments.
         *
         * @param {ASTNode} node - A node to report. This is an Identifier node.
         * @returns {void}
         */
        function report(node) {
            context.report({
                node,
                message: "'{{name}}' is assigned to itself.",
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
