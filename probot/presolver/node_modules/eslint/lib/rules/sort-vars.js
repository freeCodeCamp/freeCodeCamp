/**
 * @fileoverview Rule to require sorting of variables within a single Variable Declaration block
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require variables within the same declaration block to be sorted",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                type: "object",
                properties: {
                    ignoreCase: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        const configuration = context.options[0] || {},
            ignoreCase = configuration.ignoreCase || false;

        return {
            VariableDeclaration(node) {
                const idDeclarations = node.declarations.filter(decl => decl.id.type === "Identifier");

                idDeclarations.slice(1).reduce((memo, decl) => {
                    let lastVariableName = memo.id.name,
                        currenVariableName = decl.id.name;

                    if (ignoreCase) {
                        lastVariableName = lastVariableName.toLowerCase();
                        currenVariableName = currenVariableName.toLowerCase();
                    }

                    if (currenVariableName < lastVariableName) {
                        context.report({ node: decl, message: "Variables within the same declaration block should be sorted alphabetically." });
                        return memo;
                    }
                    return decl;

                }, idDeclarations[0]);
            }
        };
    }
};
