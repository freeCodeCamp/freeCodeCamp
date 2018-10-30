/**
 * @fileoverview Rule to disallow a duplicate case label.
 * @author Dieter Oberkofler
 * @author Burak Yigit Kaya
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow duplicate case labels",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        return {
            SwitchStatement(node) {
                const mapping = {};

                node.cases.forEach(switchCase => {
                    const key = sourceCode.getText(switchCase.test);

                    if (mapping[key]) {
                        context.report({ node: switchCase, message: "Duplicate case label." });
                    } else {
                        mapping[key] = switchCase;
                    }
                });
            }
        };
    }
};
