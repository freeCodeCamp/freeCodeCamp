/**
 * @fileoverview Rule to flag octal escape sequences in string literals.
 * @author Ian Christian Myers
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow octal escape sequences in string literals",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-octal-escape"
        },

        schema: [],

        messages: {
            octalEscapeSequence: "Don't use octal: '\\{{sequence}}'. Use '\\u....' instead."
        }
    },

    create(context) {

        return {

            Literal(node) {
                if (typeof node.value !== "string") {
                    return;
                }

                // \0 represents a valid NULL character if it isn't followed by a digit.
                const match = node.raw.match(
                    /^(?:[^\\]|\\.)*?\\([0-3][0-7]{1,2}|[4-7][0-7]|0(?=[89])|[1-7])/su
                );

                if (match) {
                    context.report({
                        node,
                        messageId: "octalEscapeSequence",
                        data: { sequence: match[1] }
                    });
                }
            }

        };

    }
};
