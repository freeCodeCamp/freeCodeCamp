/**
 * @fileoverview Rule to disallow use of the `RegExp` constructor in favor of regular expression literals
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const { CALL, CONSTRUCT, ReferenceTracker, findVariable } = require("eslint-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines whether the given node is a string literal.
 * @param {ASTNode} node Node to check.
 * @returns {boolean} True if the node is a string literal.
 */
function isStringLiteral(node) {
    return node.type === "Literal" && typeof node.value === "string";
}

/**
 * Determines whether the given node is a regex literal.
 * @param {ASTNode} node Node to check.
 * @returns {boolean} True if the node is a regex literal.
 */
function isRegexLiteral(node) {
    return node.type === "Literal" && Object.prototype.hasOwnProperty.call(node, "regex");
}

/**
 * Determines whether the given node is a template literal without expressions.
 * @param {ASTNode} node Node to check.
 * @returns {boolean} True if the node is a template literal without expressions.
 */
function isStaticTemplateLiteral(node) {
    return node.type === "TemplateLiteral" && node.expressions.length === 0;
}


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow use of the `RegExp` constructor in favor of regular expression literals",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/prefer-regex-literals"
        },

        schema: [
            {
                type: "object",
                properties: {
                    disallowRedundantWrapping: {
                        type: "boolean",
                        default: false
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            unexpectedRegExp: "Use a regular expression literal instead of the 'RegExp' constructor.",
            unexpectedRedundantRegExp: "Regular expression literal is unnecessarily wrapped within a 'RegExp' constructor.",
            unexpectedRedundantRegExpWithFlags: "Use regular expression literal with flags instead of the 'RegExp' constructor."
        }
    },

    create(context) {
        const [{ disallowRedundantWrapping = false } = {}] = context.options;

        /**
         * Determines whether the given identifier node is a reference to a global variable.
         * @param {ASTNode} node `Identifier` node to check.
         * @returns {boolean} True if the identifier is a reference to a global variable.
         */
        function isGlobalReference(node) {
            const scope = context.getScope();
            const variable = findVariable(scope, node);

            return variable !== null && variable.scope.type === "global" && variable.defs.length === 0;
        }

        /**
         * Determines whether the given node is a String.raw`` tagged template expression
         * with a static template literal.
         * @param {ASTNode} node Node to check.
         * @returns {boolean} True if the node is String.raw`` with a static template.
         */
        function isStringRawTaggedStaticTemplateLiteral(node) {
            return node.type === "TaggedTemplateExpression" &&
                astUtils.isSpecificMemberAccess(node.tag, "String", "raw") &&
                isGlobalReference(astUtils.skipChainExpression(node.tag).object) &&
                isStaticTemplateLiteral(node.quasi);
        }

        /**
         * Determines whether the given node is considered to be a static string by the logic of this rule.
         * @param {ASTNode} node Node to check.
         * @returns {boolean} True if the node is a static string.
         */
        function isStaticString(node) {
            return isStringLiteral(node) ||
                isStaticTemplateLiteral(node) ||
                isStringRawTaggedStaticTemplateLiteral(node);
        }

        /**
         * Determines whether the relevant arguments of the given are all static string literals.
         * @param {ASTNode} node Node to check.
         * @returns {boolean} True if all arguments are static strings.
         */
        function hasOnlyStaticStringArguments(node) {
            const args = node.arguments;

            if ((args.length === 1 || args.length === 2) && args.every(isStaticString)) {
                return true;
            }

            return false;
        }

        /**
         * Determines whether the arguments of the given node indicate that a regex literal is unnecessarily wrapped.
         * @param {ASTNode} node Node to check.
         * @returns {boolean} True if the node already contains a regex literal argument.
         */
        function isUnnecessarilyWrappedRegexLiteral(node) {
            const args = node.arguments;

            if (args.length === 1 && isRegexLiteral(args[0])) {
                return true;
            }

            if (args.length === 2 && isRegexLiteral(args[0]) && isStaticString(args[1])) {
                return true;
            }

            return false;
        }

        return {
            Program() {
                const scope = context.getScope();
                const tracker = new ReferenceTracker(scope);
                const traceMap = {
                    RegExp: {
                        [CALL]: true,
                        [CONSTRUCT]: true
                    }
                };

                for (const { node } of tracker.iterateGlobalReferences(traceMap)) {
                    if (disallowRedundantWrapping && isUnnecessarilyWrappedRegexLiteral(node)) {
                        if (node.arguments.length === 2) {
                            context.report({ node, messageId: "unexpectedRedundantRegExpWithFlags" });
                        } else {
                            context.report({ node, messageId: "unexpectedRedundantRegExp" });
                        }
                    } else if (hasOnlyStaticStringArguments(node)) {
                        context.report({ node, messageId: "unexpectedRegExp" });
                    }
                }
            }
        };
    }
};
