/**
 * @fileoverview Rule to flag when regex literals are not wrapped in parens
 * @author Matt DuVall <http://www.mattduvall.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "layout",

        docs: {
            description: "require parenthesis around regex literals",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/wrap-regex"
        },

        schema: [],
        fixable: "code",

        messages: {
            requireParens: "Wrap the regexp literal in parens to disambiguate the slash."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        return {

            Literal(node) {
                const token = sourceCode.getFirstToken(node),
                    nodeType = token.type;

                if (nodeType === "RegularExpression") {
                    const beforeToken = sourceCode.getTokenBefore(node);
                    const afterToken = sourceCode.getTokenAfter(node);
                    const ancestors = context.getAncestors();
                    const grandparent = ancestors[ancestors.length - 1];

                    if (grandparent.type === "MemberExpression" && grandparent.object === node &&
                        !(beforeToken && beforeToken.value === "(" && afterToken && afterToken.value === ")")) {
                        context.report({
                            node,
                            messageId: "requireParens",
                            fix: fixer => fixer.replaceText(node, `(${sourceCode.getText(node)})`)
                        });
                    }
                }
            }
        };

    }
};
