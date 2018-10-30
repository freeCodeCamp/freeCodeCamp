/**
 * @fileoverview Rule to disallow `parseInt()` in favor of binary, octal, and hexadecimal literals
 * @author Annie Zhang, Henry Zhu
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `parseInt()` in favor of binary, octal, and hexadecimal literals",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: [],

        fixable: "code"
    },

    create(context) {
        const radixMap = {
            2: "binary",
            8: "octal",
            16: "hexadecimal"
        };

        const prefixMap = {
            2: "0b",
            8: "0o",
            16: "0x"
        };

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {

            CallExpression(node) {

                // doesn't check parseInt() if it doesn't have a radix argument
                if (node.arguments.length !== 2) {
                    return;
                }

                // only error if the radix is 2, 8, or 16
                const radixName = radixMap[node.arguments[1].value];

                if (node.callee.type === "Identifier" &&
                    node.callee.name === "parseInt" &&
                    radixName &&
                    node.arguments[0].type === "Literal"
                ) {
                    context.report({
                        node,
                        message: "Use {{radixName}} literals instead of parseInt().",
                        data: {
                            radixName
                        },
                        fix(fixer) {
                            const newPrefix = prefixMap[node.arguments[1].value];

                            if (+(newPrefix + node.arguments[0].value) !== parseInt(node.arguments[0].value, node.arguments[1].value)) {

                                // If the newly-produced literal would be invalid, (e.g. 0b1234),
                                // or it would yield an incorrect parseInt result for some other reason, don't make a fix.
                                return null;
                            }
                            return fixer.replaceText(node, prefixMap[node.arguments[1].value] + node.arguments[0].value);
                        }
                    });
                }
            }
        };
    }
};
