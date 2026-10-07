/**
 * @fileoverview Rule to enforce requiring named capture groups in regular expression.
 * @author Pig Fang <https://github.com/g-plane>
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const {
    CALL,
    CONSTRUCT,
    ReferenceTracker,
    getStringIfConstant
} = require("eslint-utils");
const regexpp = require("regexpp");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const parser = new regexpp.RegExpParser();

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce using named capture group in regular expression",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/prefer-named-capture-group"
        },

        schema: [],

        messages: {
            required: "Capture group '{{group}}' should be converted to a named or non-capturing group."
        }
    },

    create(context) {

        /**
         * Function to check regular expression.
         * @param {string} pattern The regular expression pattern to be check.
         * @param {ASTNode} node AST node which contains regular expression.
         * @param {boolean} uFlag Flag indicates whether unicode mode is enabled or not.
         * @returns {void}
         */
        function checkRegex(pattern, node, uFlag) {
            let ast;

            try {
                ast = parser.parsePattern(pattern, 0, pattern.length, uFlag);
            } catch {

                // ignore regex syntax errors
                return;
            }

            regexpp.visitRegExpAST(ast, {
                onCapturingGroupEnter(group) {
                    if (!group.name) {
                        context.report({
                            node,
                            messageId: "required",
                            data: {
                                group: group.raw
                            }
                        });
                    }
                }
            });
        }

        return {
            Literal(node) {
                if (node.regex) {
                    checkRegex(node.regex.pattern, node, node.regex.flags.includes("u"));
                }
            },
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
                    const regex = getStringIfConstant(node.arguments[0]);
                    const flags = getStringIfConstant(node.arguments[1]);

                    if (regex) {
                        checkRegex(regex, node, flags && flags.includes("u"));
                    }
                }
            }
        };
    }
};
