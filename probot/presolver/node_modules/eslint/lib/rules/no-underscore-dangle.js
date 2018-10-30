/**
 * @fileoverview Rule to flag trailing underscores in variable declarations.
 * @author Matt DuVall <http://www.mattduvall.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow dangling underscores in identifiers",
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
                            type: "string"
                        }
                    },
                    allowAfterThis: {
                        type: "boolean"
                    },
                    allowAfterSuper: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        const options = context.options[0] || {};
        const ALLOWED_VARIABLES = options.allow ? options.allow : [];
        const allowAfterThis = typeof options.allowAfterThis !== "undefined" ? options.allowAfterThis : false;
        const allowAfterSuper = typeof options.allowAfterSuper !== "undefined" ? options.allowAfterSuper : false;

        //-------------------------------------------------------------------------
        // Helpers
        //-------------------------------------------------------------------------

        /**
         * Check if identifier is present inside the allowed option
         * @param {string} identifier name of the node
         * @returns {boolean} true if its is present
         * @private
         */
        function isAllowed(identifier) {
            return ALLOWED_VARIABLES.some(ident => ident === identifier);
        }

        /**
         * Check if identifier has a underscore at the end
         * @param {ASTNode} identifier node to evaluate
         * @returns {boolean} true if its is present
         * @private
         */
        function hasTrailingUnderscore(identifier) {
            const len = identifier.length;

            return identifier !== "_" && (identifier[0] === "_" || identifier[len - 1] === "_");
        }

        /**
         * Check if identifier is a special case member expression
         * @param {ASTNode} identifier node to evaluate
         * @returns {boolean} true if its is a special case
         * @private
         */
        function isSpecialCaseIdentifierForMemberExpression(identifier) {
            return identifier === "__proto__";
        }

        /**
         * Check if identifier is a special case variable expression
         * @param {ASTNode} identifier node to evaluate
         * @returns {boolean} true if its is a special case
         * @private
         */
        function isSpecialCaseIdentifierInVariableExpression(identifier) {

            // Checks for the underscore library usage here
            return identifier === "_";
        }

        /**
         * Check if function has a underscore at the end
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkForTrailingUnderscoreInFunctionDeclaration(node) {
            if (node.id) {
                const identifier = node.id.name;

                if (typeof identifier !== "undefined" && hasTrailingUnderscore(identifier) && !isAllowed(identifier)) {
                    context.report({
                        node,
                        message: "Unexpected dangling '_' in '{{identifier}}'.",
                        data: {
                            identifier
                        }
                    });
                }
            }
        }

        /**
         * Check if variable expression has a underscore at the end
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkForTrailingUnderscoreInVariableExpression(node) {
            const identifier = node.id.name;

            if (typeof identifier !== "undefined" && hasTrailingUnderscore(identifier) &&
                !isSpecialCaseIdentifierInVariableExpression(identifier) && !isAllowed(identifier)) {
                context.report({
                    node,
                    message: "Unexpected dangling '_' in '{{identifier}}'.",
                    data: {
                        identifier
                    }
                });
            }
        }

        /**
         * Check if member expression has a underscore at the end
         * @param {ASTNode} node node to evaluate
         * @returns {void}
         * @private
         */
        function checkForTrailingUnderscoreInMemberExpression(node) {
            const identifier = node.property.name,
                isMemberOfThis = node.object.type === "ThisExpression",
                isMemberOfSuper = node.object.type === "Super";

            if (typeof identifier !== "undefined" && hasTrailingUnderscore(identifier) &&
                !(isMemberOfThis && allowAfterThis) &&
                !(isMemberOfSuper && allowAfterSuper) &&
                !isSpecialCaseIdentifierForMemberExpression(identifier) && !isAllowed(identifier)) {
                context.report({
                    node,
                    message: "Unexpected dangling '_' in '{{identifier}}'.",
                    data: {
                        identifier
                    }
                });
            }
        }

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            FunctionDeclaration: checkForTrailingUnderscoreInFunctionDeclaration,
            VariableDeclarator: checkForTrailingUnderscoreInVariableExpression,
            MemberExpression: checkForTrailingUnderscoreInMemberExpression
        };

    }
};
