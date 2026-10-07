/**
 * @fileoverview Rule to flag when initializing to undefined
 * @author Ilya Volodin
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow initializing variables to `undefined`",
            category: "Variables",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-undef-init"
        },

        schema: [],
        fixable: "code",

        messages: {
            unnecessaryUndefinedInit: "It's not necessary to initialize '{{name}}' to undefined."
        }
    },

    create(context) {

        const sourceCode = context.getSourceCode();

        return {

            VariableDeclarator(node) {
                const name = sourceCode.getText(node.id),
                    init = node.init && node.init.name,
                    scope = context.getScope(),
                    undefinedVar = astUtils.getVariableByName(scope, "undefined"),
                    shadowed = undefinedVar && undefinedVar.defs.length > 0,
                    lastToken = sourceCode.getLastToken(node);

                if (init === "undefined" && node.parent.kind !== "const" && !shadowed) {
                    context.report({
                        node,
                        messageId: "unnecessaryUndefinedInit",
                        data: { name },
                        fix(fixer) {
                            if (node.parent.kind === "var") {
                                return null;
                            }

                            if (node.id.type === "ArrayPattern" || node.id.type === "ObjectPattern") {

                                // Don't fix destructuring assignment to `undefined`.
                                return null;
                            }

                            if (sourceCode.commentsExistBetween(node.id, lastToken)) {
                                return null;
                            }

                            return fixer.removeRange([node.id.range[1], node.range[1]]);
                        }
                    });
                }
            }
        };

    }
};
