/**
 * @fileoverview Rule to flag use of console object
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow the use of `console`",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-console"
        },

        schema: [
            {
                type: "object",
                properties: {
                    allow: {
                        type: "array",
                        items: {
                            type: "string"
                        },
                        minItems: 1,
                        uniqueItems: true
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            unexpected: "Unexpected console statement."
        }
    },

    create(context) {
        const options = context.options[0] || {};
        const allowed = options.allow || [];

        /**
         * Checks whether the given reference is 'console' or not.
         * @param {eslint-scope.Reference} reference The reference to check.
         * @returns {boolean} `true` if the reference is 'console'.
         */
        function isConsole(reference) {
            const id = reference.identifier;

            return id && id.name === "console";
        }

        /**
         * Checks whether the property name of the given MemberExpression node
         * is allowed by options or not.
         * @param {ASTNode} node The MemberExpression node to check.
         * @returns {boolean} `true` if the property name of the node is allowed.
         */
        function isAllowed(node) {
            const propertyName = astUtils.getStaticPropertyName(node);

            return propertyName && allowed.indexOf(propertyName) !== -1;
        }

        /**
         * Checks whether the given reference is a member access which is not
         * allowed by options or not.
         * @param {eslint-scope.Reference} reference The reference to check.
         * @returns {boolean} `true` if the reference is a member access which
         *      is not allowed by options.
         */
        function isMemberAccessExceptAllowed(reference) {
            const node = reference.identifier;
            const parent = node.parent;

            return (
                parent.type === "MemberExpression" &&
                parent.object === node &&
                !isAllowed(parent)
            );
        }

        /**
         * Reports the given reference as a violation.
         * @param {eslint-scope.Reference} reference The reference to report.
         * @returns {void}
         */
        function report(reference) {
            const node = reference.identifier.parent;

            context.report({
                node,
                loc: node.loc,
                messageId: "unexpected"
            });
        }

        return {
            "Program:exit"() {
                const scope = context.getScope();
                const consoleVar = astUtils.getVariableByName(scope, "console");
                const shadowed = consoleVar && consoleVar.defs.length > 0;

                /*
                 * 'scope.through' includes all references to undefined
                 * variables. If the variable 'console' is not defined, it uses
                 * 'scope.through'.
                 */
                const references = consoleVar
                    ? consoleVar.references
                    : scope.through.filter(isConsole);

                if (!shadowed) {
                    references
                        .filter(isMemberAccessExceptAllowed)
                        .forEach(report);
                }
            }
        };
    }
};
