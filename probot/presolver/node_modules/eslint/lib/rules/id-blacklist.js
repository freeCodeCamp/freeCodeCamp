/**
 * @fileoverview Rule that warns when identifier names that are
 * blacklisted in the configuration are used.
 * @author Keith Cirkel (http://keithcirkel.co.uk)
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow specified identifiers",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: {
            type: "array",
            items: {
                type: "string"
            },
            uniqueItems: true
        }
    },

    create(context) {


        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        const blacklist = context.options;


        /**
         * Checks if a string matches the provided pattern
         * @param {string} name The string to check.
         * @returns {boolean} if the string is a match
         * @private
         */
        function isInvalid(name) {
            return blacklist.indexOf(name) !== -1;
        }

        /**
         * Verifies if we should report an error or not based on the effective
         * parent node and the identifier name.
         * @param {ASTNode} effectiveParent The effective parent node of the node to be reported
         * @param {string} name The identifier name of the identifier node
         * @returns {boolean} whether an error should be reported or not
         */
        function shouldReport(effectiveParent, name) {
            return effectiveParent.type !== "CallExpression" &&
                effectiveParent.type !== "NewExpression" &&
                isInvalid(name);
        }

        /**
         * Reports an AST node as a rule violation.
         * @param {ASTNode} node The node to report.
         * @returns {void}
         * @private
         */
        function report(node) {
            context.report({ node, message: "Identifier '{{name}}' is blacklisted.", data: {
                name: node.name
            } });
        }

        return {

            Identifier(node) {
                const name = node.name,
                    effectiveParent = (node.parent.type === "MemberExpression") ? node.parent.parent : node.parent;

                // MemberExpressions get special rules
                if (node.parent.type === "MemberExpression") {

                    // Always check object names
                    if (node.parent.object.type === "Identifier" &&
                        node.parent.object.name === node.name) {
                        if (isInvalid(name)) {
                            report(node);
                        }

                        // Report AssignmentExpressions only if they are the left side of the assignment
                    } else if (effectiveParent.type === "AssignmentExpression" &&
                        (effectiveParent.right.type !== "MemberExpression" ||
                        effectiveParent.left.type === "MemberExpression" &&
                        effectiveParent.left.property.name === node.name)) {
                        if (isInvalid(name)) {
                            report(node);
                        }
                    }

                // Properties have their own rules
                } else if (node.parent.type === "Property") {

                    if (shouldReport(effectiveParent, name)) {
                        report(node);
                    }

                // Report anything that is a match and not a CallExpression
                } else if (shouldReport(effectiveParent, name)) {
                    report(node);
                }
            }

        };

    }
};
