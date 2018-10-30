/**
 * @fileoverview Rule to disallow if as the only statmenet in an else block
 * @author Brandon Mills
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow `if` statements as the only statement in `else` blocks",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [],

        fixable: "code"
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        return {
            IfStatement(node) {
                const ancestors = context.getAncestors(),
                    parent = ancestors.pop(),
                    grandparent = ancestors.pop();

                if (parent && parent.type === "BlockStatement" &&
                        parent.body.length === 1 && grandparent &&
                        grandparent.type === "IfStatement" &&
                        parent === grandparent.alternate) {
                    context.report({
                        node,
                        message: "Unexpected if as the only statement in an else block.",
                        fix(fixer) {
                            const openingElseCurly = sourceCode.getFirstToken(parent);
                            const closingElseCurly = sourceCode.getLastToken(parent);
                            const elseKeyword = sourceCode.getTokenBefore(openingElseCurly);
                            const tokenAfterElseBlock = sourceCode.getTokenAfter(closingElseCurly);
                            const lastIfToken = sourceCode.getLastToken(node.consequent);
                            const sourceText = sourceCode.getText();

                            if (sourceText.slice(openingElseCurly.range[1], node.range[0]).trim() || sourceText.slice(node.range[1], closingElseCurly.range[0]).trim()) {

                                // Don't fix if there are any non-whitespace characters interfering (e.g. comments)
                                return null;
                            }

                            if (
                                node.consequent.type !== "BlockStatement" && lastIfToken.value !== ";" && tokenAfterElseBlock &&
                                (
                                    node.consequent.loc.end.line === tokenAfterElseBlock.loc.start.line ||
                                    /^[([/+`-]/.test(tokenAfterElseBlock.value) ||
                                    lastIfToken.value === "++" ||
                                    lastIfToken.value === "--"
                                )
                            ) {

                                /*
                                 * If the `if` statement has no block, and is not followed by a semicolon, make sure that fixing
                                 * the issue would not change semantics due to ASI. If this would happen, don't do a fix.
                                 */
                                return null;
                            }

                            return fixer.replaceTextRange(
                                [openingElseCurly.range[0], closingElseCurly.range[1]],
                                (elseKeyword.range[1] === openingElseCurly.range[0] ? " " : "") + sourceCode.getText(node)
                            );
                        }
                    });
                }
            }
        };

    }
};
