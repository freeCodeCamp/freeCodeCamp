/**
 * @fileoverview Rule to disallow unnecessary computed property keys in object literals
 * @author Burak Yigit Kaya
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("../ast-utils");
const esUtils = require("esutils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const MESSAGE_UNNECESSARY_COMPUTED = "Unnecessarily computed property [{{property}}] found.";

module.exports = {
    meta: {
        docs: {
            description: "disallow unnecessary computed property keys in object literals",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: [],

        fixable: "code"
    },
    create(context) {
        const sourceCode = context.getSourceCode();

        return {
            Property(node) {
                if (!node.computed) {
                    return;
                }

                const key = node.key,
                    nodeType = typeof key.value;

                if (key.type === "Literal" && (nodeType === "string" || nodeType === "number") && key.value !== "__proto__") {
                    context.report({
                        node,
                        message: MESSAGE_UNNECESSARY_COMPUTED,
                        data: { property: sourceCode.getText(key) },
                        fix(fixer) {
                            const leftSquareBracket = sourceCode.getFirstToken(node, astUtils.isOpeningBracketToken);
                            const rightSquareBracket = sourceCode.getFirstTokenBetween(node.key, node.value, astUtils.isClosingBracketToken);
                            const tokensBetween = sourceCode.getTokensBetween(leftSquareBracket, rightSquareBracket, 1);

                            if (tokensBetween.slice(0, -1).some((token, index) => sourceCode.getText().slice(token.range[1], tokensBetween[index + 1].range[0]).trim())) {

                                // If there are comments between the brackets and the property name, don't do a fix.
                                return null;
                            }

                            const tokenBeforeLeftBracket = sourceCode.getTokenBefore(leftSquareBracket);

                            // Insert a space before the key to avoid changing identifiers, e.g. ({ get[2]() {} }) to ({ get2() {} })
                            const needsSpaceBeforeKey = tokenBeforeLeftBracket.range[1] === leftSquareBracket.range[0] &&
                                esUtils.code.isIdentifierPartES6(tokenBeforeLeftBracket.value.slice(-1).charCodeAt(0)) &&
                                esUtils.code.isIdentifierPartES6(key.raw.charCodeAt(0));

                            const replacementKey = (needsSpaceBeforeKey ? " " : "") + key.raw;

                            return fixer.replaceTextRange([leftSquareBracket.range[0], rightSquareBracket.range[1]], replacementKey);
                        }
                    });
                }
            }
        };
    }
};
