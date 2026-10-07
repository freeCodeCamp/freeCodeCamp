/**
 * @fileoverview Rule to flag when using javascript: urls
 * @author Ilya Volodin
 */
/* jshint scripturl: true */
/* eslint no-script-url: 0 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow `javascript:` urls",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-script-url"
        },

        schema: [],

        messages: {
            unexpectedScriptURL: "Script URL is a form of eval."
        }
    },

    create(context) {

        /**
         * Check whether a node's static value starts with "javascript:" or not.
         * And report an error for unexpected script URL.
         * @param {ASTNode} node node to check
         * @returns {void}
         */
        function check(node) {
            const value = astUtils.getStaticStringValue(node);

            if (typeof value === "string" && value.toLowerCase().indexOf("javascript:") === 0) {
                context.report({ node, messageId: "unexpectedScriptURL" });
            }
        }
        return {
            Literal(node) {
                if (node.value && typeof node.value === "string") {
                    check(node);
                }
            },
            TemplateLiteral(node) {
                if (!(node.parent && node.parent.type === "TaggedTemplateExpression")) {
                    check(node);
                }
            }
        };
    }
};
