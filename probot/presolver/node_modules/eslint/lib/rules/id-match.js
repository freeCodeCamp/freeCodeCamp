/**
 * @fileoverview Rule to flag non-matching identifiers
 * @author Matthieu Larcher
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require identifiers to match a specified regular expression",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                type: "string"
            },
            {
                type: "object",
                properties: {
                    properties: {
                        type: "boolean"
                    }
                }
            }
        ]
    },

    create(context) {

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        const pattern = context.options[0] || "^.+$",
            regexp = new RegExp(pattern);

        const options = context.options[1] || {},
            properties = !!options.properties,
            onlyDeclarations = !!options.onlyDeclarations;

        /**
         * Checks if a string matches the provided pattern
         * @param {string} name The string to check.
         * @returns {boolean} if the string is a match
         * @private
         */
        function isInvalid(name) {
            return !regexp.test(name);
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
            context.report({ node, message: "Identifier '{{name}}' does not match the pattern '{{pattern}}'.", data: {
                name: node.name,
                pattern
            } });
        }

        return {

            Identifier(node) {
                const name = node.name,
                    parent = node.parent,
                    effectiveParent = (parent.type === "MemberExpression") ? parent.parent : parent;

                if (parent.type === "MemberExpression") {

                    if (!properties) {
                        return;
                    }

                    // Always check object names
                    if (parent.object.type === "Identifier" &&
                        parent.object.name === name) {
                        if (isInvalid(name)) {
                            report(node);
                        }

                    // Report AssignmentExpressions only if they are the left side of the assignment
                    } else if (effectiveParent.type === "AssignmentExpression" &&
                        (effectiveParent.right.type !== "MemberExpression" ||
                        effectiveParent.left.type === "MemberExpression" &&
                        effectiveParent.left.property.name === name)) {
                        if (isInvalid(name)) {
                            report(node);
                        }
                    }

                } else if (parent.type === "Property") {

                    if (!properties || parent.key.name !== name) {
                        return;
                    }

                    if (shouldReport(effectiveParent, name)) {
                        report(node);
                    }

                } else {
                    const isDeclaration = effectiveParent.type === "FunctionDeclaration" || effectiveParent.type === "VariableDeclarator";

                    if (onlyDeclarations && !isDeclaration) {
                        return;
                    }

                    if (shouldReport(effectiveParent, name)) {
                        report(node);
                    }
                }
            }

        };

    }
};
