/**
 * @fileoverview Validates newlines before and after dots
 * @author Greg Cochard
 */

"use strict";

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce consistent newlines before and after dots",
            category: "Best Practices",
            recommended: false
        },

        schema: [
            {
                enum: ["object", "property"]
            }
        ],

        fixable: "code"
    },

    create(context) {

        const config = context.options[0];

        // default to onObject if no preference is passed
        const onObject = config === "object" || !config;

        const sourceCode = context.getSourceCode();

        /**
         * Reports if the dot between object and property is on the correct loccation.
         * @param {ASTNode} obj The object owning the property.
         * @param {ASTNode} prop The property of the object.
         * @param {ASTNode} node The corresponding node of the token.
         * @returns {void}
         */
        function checkDotLocation(obj, prop, node) {
            const dot = sourceCode.getTokenBefore(prop);
            const textBeforeDot = sourceCode.getText().slice(obj.range[1], dot.range[0]);
            const textAfterDot = sourceCode.getText().slice(dot.range[1], prop.range[0]);

            if (dot.type === "Punctuator" && dot.value === ".") {
                if (onObject) {
                    if (!astUtils.isTokenOnSameLine(obj, dot)) {
                        const neededTextAfterObj = astUtils.isDecimalInteger(obj) ? " " : "";

                        context.report({
                            node,
                            loc: dot.loc.start,
                            message: "Expected dot to be on same line as object.",
                            fix: fixer => fixer.replaceTextRange([obj.range[1], prop.range[0]], `${neededTextAfterObj}.${textBeforeDot}${textAfterDot}`)
                        });
                    }
                } else if (!astUtils.isTokenOnSameLine(dot, prop)) {
                    context.report({
                        node,
                        loc: dot.loc.start,
                        message: "Expected dot to be on same line as property.",
                        fix: fixer => fixer.replaceTextRange([obj.range[1], prop.range[0]], `${textBeforeDot}${textAfterDot}.`)
                    });
                }
            }
        }

        /**
         * Checks the spacing of the dot within a member expression.
         * @param {ASTNode} node The node to check.
         * @returns {void}
         */
        function checkNode(node) {
            checkDotLocation(node.object, node.property, node);
        }

        return {
            MemberExpression: checkNode
        };
    }
};
