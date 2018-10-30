/**
 * @fileoverview Rule to flag when initializing to undefined
 * @author Ilya Volodin
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow initializing variables to `undefined`",
            category: "Variables",
            recommended: false
        },

        schema: [],

        fixable: "code"
    },

    create(context) {

        const sourceCode = context.getSourceCode();

        return {

            VariableDeclarator(node) {
                const name = sourceCode.getText(node.id),
                    init = node.init && node.init.name,
                    scope = context.getScope(),
                    undefinedVar = astUtils.getVariableByName(scope, "undefined"),
                    shadowed = undefinedVar && undefinedVar.defs.length > 0;

                if (init === "undefined" && node.parent.kind !== "const" && !shadowed) {
                    context.report({
                        node,
                        message: "It's not necessary to initialize '{{name}}' to undefined.",
                        data: { name },
                        fix(fixer) {
                            if (node.id.type === "ArrayPattern" || node.id.type === "ObjectPattern") {

                                // Don't fix destructuring assignment to `undefined`.
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
