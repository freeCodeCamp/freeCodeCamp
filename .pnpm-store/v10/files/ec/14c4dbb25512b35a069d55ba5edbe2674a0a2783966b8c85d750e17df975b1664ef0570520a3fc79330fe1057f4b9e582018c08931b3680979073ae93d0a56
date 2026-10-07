/**
 * @fileoverview Rule to flag use of parseInt without a radix argument
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

const MODE_ALWAYS = "always",
    MODE_AS_NEEDED = "as-needed";

const validRadixValues = new Set(Array.from({ length: 37 - 2 }, (_, index) => index + 2));

/**
 * Checks whether a given variable is shadowed or not.
 * @param {eslint-scope.Variable} variable A variable to check.
 * @returns {boolean} `true` if the variable is shadowed.
 */
function isShadowed(variable) {
    return variable.defs.length >= 1;
}

/**
 * Checks whether a given node is a MemberExpression of `parseInt` method or not.
 * @param {ASTNode} node A node to check.
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
 * - A literal except integers between 2 and 36.
 * - undefined.
 * @param {ASTNode} radix A node of radix to check.
 * @returns {boolean} `true` if the node is valid.
 */
function isValidRadix(radix) {
    return !(
        (radix.type === "Literal" && !validRadixValues.has(radix.value)) ||
        (radix.type === "Identifier" && radix.name === "undefined")
    );
}

/**
 * Checks whether a given node is a default value of radix or not.
 * @param {ASTNode} radix A node of radix to check.
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
        type: "suggestion",

        docs: {
            description: "enforce the consistent use of the radix argument when using `parseInt()`",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/radix",
            suggestion: true
        },

        schema: [
            {
                enum: ["always", "as-needed"]
            }
        ],

        messages: {
            missingParameters: "Missing parameters.",
            redundantRadix: "Redundant radix parameter.",
            missingRadix: "Missing radix parameter.",
            invalidRadix: "Invalid radix parameter, must be an integer between 2 and 36.",
            addRadixParameter10: "Add radix parameter `10` for parsing decimal numbers."
        }
    },

    create(context) {
        const mode = context.options[0] || MODE_ALWAYS;

        /**
         * Checks the arguments of a given CallExpression node and reports it if it
         * offends this rule.
         * @param {ASTNode} node A CallExpression node to check.
         * @returns {void}
         */
        function checkArguments(node) {
            const args = node.arguments;

            switch (args.length) {
                case 0:
                    context.report({
                        node,
                        messageId: "missingParameters"
                    });
                    break;

                case 1:
                    if (mode === MODE_ALWAYS) {
                        context.report({
                            node,
                            messageId: "missingRadix",
                            suggest: [
                                {
                                    messageId: "addRadixParameter10",
                                    fix(fixer) {
                                        const sourceCode = context.getSourceCode();
                                        const tokens = sourceCode.getTokens(node);
                                        const lastToken = tokens[tokens.length - 1]; // Parenthesis.
                                        const secondToLastToken = tokens[tokens.length - 2]; // May or may not be a comma.
                                        const hasTrailingComma = secondToLastToken.type === "Punctuator" && secondToLastToken.value === ",";

                                        return fixer.insertTextBefore(lastToken, hasTrailingComma ? " 10," : ", 10");
                                    }
                                }
                            ]
                        });
                    }
                    break;

                default:
                    if (mode === MODE_AS_NEEDED && isDefaultRadix(args[1])) {
                        context.report({
                            node,
                            messageId: "redundantRadix"
                        });
                    } else if (!isValidRadix(args[1])) {
                        context.report({
                            node,
                            messageId: "invalidRadix"
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
                if (variable && !isShadowed(variable)) {
                    variable.references.forEach(reference => {
                        const node = reference.identifier;

                        if (astUtils.isCallee(node)) {
                            checkArguments(node.parent);
                        }
                    });
                }

                // Check `Number.parseInt()`
                variable = astUtils.getVariableByName(scope, "Number");
                if (variable && !isShadowed(variable)) {
                    variable.references.forEach(reference => {
                        const node = reference.identifier.parent;
                        const maybeCallee = node.parent.type === "ChainExpression"
                            ? node.parent
                            : node;

                        if (isParseIntMethod(node) && astUtils.isCallee(maybeCallee)) {
                            checkArguments(maybeCallee.parent);
                        }
                    });
                }
            }
        };
    }
};
