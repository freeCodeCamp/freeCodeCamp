/**
 * @fileoverview Rule to enforce the use of `u` flag on RegExp.
 * @author Toru Nagashima
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

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce the use of `u` flag on RegExp",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/require-unicode-regexp"
        },

        messages: {
            requireUFlag: "Use the 'u' flag."
        },

        schema: []
    },

    create(context) {
        return {
            "Literal[regex]"(node) {
                const flags = node.regex.flags || "";

                if (!flags.includes("u")) {
                    context.report({ node, messageId: "requireUFlag" });
                }
            },

            Program() {
                const scope = context.getScope();
                const tracker = new ReferenceTracker(scope);
                const trackMap = {
                    RegExp: { [CALL]: true, [CONSTRUCT]: true }
                };

                for (const { node } of tracker.iterateGlobalReferences(trackMap)) {
                    const flagsNode = node.arguments[1];
                    const flags = getStringIfConstant(flagsNode, scope);

                    if (!flagsNode || (typeof flags === "string" && !flags.includes("u"))) {
                        context.report({ node, messageId: "requireUFlag" });
                    }
                }
            }
        };
    }
};
