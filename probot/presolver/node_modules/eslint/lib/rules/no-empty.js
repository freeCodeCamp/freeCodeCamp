/**
 * @fileoverview Rule to flag use of an empty block statement
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow empty block statements",
            category: "Possible Errors",
            recommended: true
        },

        schema: [
            {
                type: "object",
                properties: {
                    allowEmptyCatch: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {
        const options = context.options[0] || {},
            allowEmptyCatch = options.allowEmptyCatch || false;

        const sourceCode = context.getSourceCode();

        return {
            BlockStatement(node) {

                // if the body is not empty, we can just return immediately
                if (node.body.length !== 0) {
                    return;
                }

                // a function is generally allowed to be empty
                if (astUtils.isFunction(node.parent)) {
                    return;
                }

                if (allowEmptyCatch && node.parent.type === "CatchClause") {
                    return;
                }

                // any other block is only allowed to be empty, if it contains a comment
                if (sourceCode.getComments(node).trailing.length > 0) {
                    return;
                }

                context.report({ node, message: "Empty block statement." });
            },

            SwitchStatement(node) {

                if (typeof node.cases === "undefined" || node.cases.length === 0) {
                    context.report({ node, message: "Empty switch statement." });
                }
            }
        };

    }
};
