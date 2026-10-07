/**
 * @fileoverview Enforce a maximum number of classes per file
 * @author James Garbutt <https://github.com/43081j>
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce a maximum number of classes per file",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/max-classes-per-file"
        },

        schema: [
            {
                type: "integer",
                minimum: 1
            }
        ],

        messages: {
            maximumExceeded: "File has too many classes ({{ classCount }}). Maximum allowed is {{ max }}."
        }
    },
    create(context) {

        const maxClasses = context.options[0] || 1;

        let classCount = 0;

        return {
            Program() {
                classCount = 0;
            },
            "Program:exit"(node) {
                if (classCount > maxClasses) {
                    context.report({
                        node,
                        messageId: "maximumExceeded",
                        data: {
                            classCount,
                            max: maxClasses
                        }
                    });
                }
            },
            "ClassDeclaration, ClassExpression"() {
                classCount++;
            }
        };
    }
};
