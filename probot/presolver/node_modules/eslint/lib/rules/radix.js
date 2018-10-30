/**
 * @fileoverview Rule to flag use of parseInt without a radix argument
 * @author James Allardice
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const MODE_ALWAYS = "always",
    MODE_AS_NEEDED = "as-needed";

/**
 * Checks whether a given variable is shadowed or not.
 *
 * @param {escope.Variable} variable - A variable to check.
 * @returns {boolean} `true` if the variable is shadowed.
 */
function isShadowed(variable) {
    return variable.defs.length >= 1;
}

/**
 * Checks whether a given node is a MemberExpression of `parseInt` method or not.
 *
 * @param {ASTNode} node - A node to check.
 * @returns {boolean} `true` if the node is a MemberExpression of `parseInt`
 *      method.
 */
function isParseIntMethod(node) {
    return (
        node.type === "MemberExpression" &&
        !node.computed &&
        node.property.type === "Identifier" &&
        node.property.name === "parseInt"
    );
}

/**
 * Checks whether a given node is a valid value of radix or not.
 *
 * The following values are invalid.
 *
 * - A literal except numbers.
 * - undefined.
 *
 * @param {ASTNode} radix - A node of radix to check.
 * @returns {boolean} `true` if the node is valid.
 */
function isValidRadix(radix) {
    return !(
        (radix.type === "Literal" && typeof radix.value !== "number") ||
        (radix.type === "Identifier" && radix.name === "undefined")
    );
}

/**
 * Checks whether a given node is a default value of radix or not.
 *
 * @param {ASTNode} radix - A node of radix to check.
 * @returns {boolean} `true` if the node is the literal node of `10`.
 */
function isDefaultRadix(radix) {
    return radix.type === "Literal" && radix.value === 10;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce the consistent use of the radix argument when using `parseInt()`",
            category: "Best Practices",
            recommended: false
        },

        schema: [
            {
                enum: ["always", "as-needed"]
            }
        ]
    },

    create(context) {
        const mode = context.options[0] || MODE_ALWAYS;

        /**
         * Checks the arguments of a given CallExpression node and reports it if it
         * offends this rule.
         *
         * @param {ASTNode} node - A CallExpression node to check.
         * @returns {void}
         */
        function checkArguments(node) {
            const args = node.arguments;

            switch (args.length) {
                case 0:
                    context.report({
                        node,
                        message: "Missing parameters."
                    });
                    break;

                case 1:
                    if (mode === MODE_ALWAYS) {
                        context.report({
                            node,
                            message: "Missing radix parameter."
                        });
                    }
                    break;

                default:
                    if (mode === MODE_AS_NEEDED && isDefaultRadix(args[1])) {
                        context.report({
                            node,
                            message: "Redundant radix parameter."
                        });
                    } else if (!isValidRadix(args[1])) {
                        context.report({
                            node,
                            message: "Invalid radix parameter."
                        });
                    }
                    break;
            }
        }

        return {
            "Program:exit"() {
                const scope = context.getScope();
                let variable;

                // Check `parseInt()`
                variable = astUtils.getVariableByName(scope, "parseInt");
                if (!isShadowed(variable)) {
                    variable.references.forEach(reference => {
                        const node = reference.identifier;

                        if (astUtils.isCallee(node)) {
                            checkArguments(node.parent);
                        }
                    });
                }

                // Check `Number.parseInt()`
                variable = astUtils.getVariableByName(scope, "Number");
                if (!isShadowed(variable)) {
                    variable.references.forEach(reference => {
                        const node = reference.identifier.parent;

                        if (isParseIntMethod(node) && astUtils.isCallee(node)) {
                            checkArguments(node.parent);
                        }
                    });
                }
            }
        };
    }
};
