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
        docs: {
            description: "require parenthesis around regex literals",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [],

        fixable: "code"
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        return {

            Literal(node) {
                const token = sourceCode.getFirstToken(node),
                    nodeType = token.type;

                if (nodeType === "RegularExpression") {
                    const source = sourceCode.getTokenBefore(node);
                    const ancestors = context.getAncestors();
                    const grandparent = ancestors[ancestors.length - 1];

                    if (grandparent.type === "MemberExpression" && grandparent.object === node &&
                        (!source || source.value !== "(")) {
                        context.report({
                            node,
                            message: "Wrap the regexp literal in parens to disambiguate the slash.",
                            fix: fixer => fixer.replaceText(node, `(${sourceCode.getText(node)})`)
                        });
                    }
                }
            }
        };

    }
};
