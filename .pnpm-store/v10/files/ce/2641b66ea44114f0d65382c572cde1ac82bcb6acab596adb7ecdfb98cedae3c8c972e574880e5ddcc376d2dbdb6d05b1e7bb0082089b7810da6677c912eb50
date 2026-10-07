/**
 * @fileoverview A rule to control the style of variable initializations.
 * @author Colin Ihrig
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given node is a for loop.
 * @param {ASTNode} block A node to check.
 * @returns {boolean} `true` when the node is a for loop.
 */
function isForLoop(block) {
    return block.type === "ForInStatement" ||
    block.type === "ForOfStatement" ||
    block.type === "ForStatement";
}

/**
 * Checks whether or not a given declarator node has its initializer.
 * @param {ASTNode} node A declarator node to check.
 * @returns {boolean} `true` when the node has its initializer.
 */
function isInitialized(node) {
    const declaration = node.parent;
    const block = declaration.parent;

    if (isForLoop(block)) {
        if (block.type === "ForStatement") {
            return block.init === declaration;
        }
        return block.left === declaration;
    }
    return Boolean(node.init);
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "require or disallow initialization in variable declarations",
            category: "Variables",
            recommended: false,
            url: "https://eslint.org/docs/rules/init-declarations"
        },

        schema: {
            anyOf: [
                {
                    type: "array",
                    items: [
                        {
                            enum: ["always"]
                        }
                    ],
                    minItems: 0,
                    maxItems: 1
                },
                {
                    type: "array",
                    items: [
                        {
                            enum: ["never"]
                        },
                        {
                            type: "object",
                            properties: {
                                ignoreForLoopInit: {
                                    type: "boolean"
                                }
                            },
                            additionalProperties: false
                        }
                    ],
                    minItems: 0,
                    maxItems: 2
                }
            ]
        },
        messages: {
            initialized: "Variable '{{idName}}' should be initialized on declaration.",
            notInitialized: "Variable '{{idName}}' should not be initialized on declaration."
        }
    },

    create(context) {

        const MODE_ALWAYS = "always",
            MODE_NEVER = "never";

        const mode = context.options[0] || MODE_ALWAYS;
        const params = context.options[1] || {};

        //--------------------------------------------------------------------------
        // Public API
        //--------------------------------------------------------------------------

        return {
            "VariableDeclaration:exit"(node) {

                const kind = node.kind,
                    declarations = node.declarations;

                for (let i = 0; i < declarations.length; ++i) {
                    const declaration = declarations[i],
                        id = declaration.id,
                        initialized = isInitialized(declaration),
                        isIgnoredForLoop = params.ignoreForLoopInit && isForLoop(node.parent);
                    let messageId = "";

                    if (mode === MODE_ALWAYS && !initialized) {
                        messageId = "initialized";
                    } else if (mode === MODE_NEVER && kind !== "const" && initialized && !isIgnoredForLoop) {
                        messageId = "notInitialized";
                    }

                    if (id.type === "Identifier" && messageId) {
                        context.report({
                            node: declaration,
                            messageId,
                            data: {
                                idName: id.name
                            }
                        });
                    }
                }
            }
        };
    }
};
