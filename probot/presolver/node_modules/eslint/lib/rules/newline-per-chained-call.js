/**
 * @fileoverview Rule to ensure newline per method call when chaining calls
 * @author Rajendra Patil
 * @author Burak Yigit Kaya
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require a newline after each call in a method chain",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [{
            type: "object",
            properties: {
                ignoreChainWithDepth: {
                    type: "integer",
                    minimum: 1,
                    maximum: 10
                }
            },
            additionalProperties: false
        }]
    },

    create(context) {

        const options = context.options[0] || {},
            ignoreChainWithDepth = options.ignoreChainWithDepth || 2;

        const sourceCode = context.getSourceCode();

        /**
         * Gets the property text of a given MemberExpression node.
         * If the text is multiline, this returns only the first line.
         *
         * @param {ASTNode} node - A MemberExpression node to get.
         * @returns {string} The property text of the node.
         */
        function getPropertyText(node) {
            const prefix = node.computed ? "[" : ".";
            const lines = sourceCode.getText(node.property).split(astUtils.LINEBREAK_MATCHER);
            const suffix = node.computed && lines.length === 1 ? "]" : "";

            return prefix + lines[0] + suffix;
        }

        return {
            "CallExpression:exit"(node) {
                if (!node.callee || node.callee.type !== "MemberExpression") {
                    return;
                }

                const callee = node.callee;
                let parent = callee.object;
                let depth = 1;

                while (parent && parent.callee) {
                    depth += 1;
                    parent = parent.callee.object;
                }

                if (depth > ignoreChainWithDepth && callee.property.loc.start.line === callee.object.loc.end.line) {
                    context.report({
                        node: callee.property,
                        loc: callee.property.loc.start,
                        message: "Expected line break before `{{callee}}`.",
                        data: {
                            callee: getPropertyText(callee)
                        }
                    });
                }
            }
        };
    }
};
