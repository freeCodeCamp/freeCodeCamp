/**
 * @fileoverview A rule to suggest using template literals instead of string concatenation.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given node is a concatenation.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if the node is a concatenation.
 */
function isConcatenation(node) {
    return node.type === "BinaryExpression" && node.operator === "+";
}

/**
 * Gets the top binary expression node for concatenation in parents of a given node.
 * @param {ASTNode} node A node to get.
 * @returns {ASTNode} the top binary expression node in parents of a given node.
 */
function getTopConcatBinaryExpression(node) {
    let currentNode = node;

    while (isConcatenation(currentNode.parent)) {
        currentNode = currentNode.parent;
    }
    return currentNode;
}

/**
 * Checks whether or not a node contains a string literal with an octal or non-octal decimal escape sequence
 * @param {ASTNode} node A node to check
 * @returns {boolean} `true` if at least one string literal within the node contains
 * an octal or non-octal decimal escape sequence
 */
function hasOctalOrNonOctalDecimalEscapeSequence(node) {
    if (isConcatenation(node)) {
        return (
            hasOctalOrNonOctalDecimalEscapeSequence(node.left) ||
            hasOctalOrNonOctalDecimalEscapeSequence(node.right)
        );
    }

    // No need to check TemplateLiterals – would throw parsing error
    if (node.type === "Literal" && typeof node.value === "string") {
        return astUtils.hasOctalOrNonOctalDecimalEscapeSequence(node.raw);
    }

    return false;
}

/**
 * Checks whether or not a given binary expression has string literals.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if the node has string literals.
 */
function hasStringLiteral(node) {
    if (isConcatenation(node)) {

        // `left` is deeper than `right` normally.
        return hasStringLiteral(node.right) || hasStringLiteral(node.left);
    }
    return astUtils.isStringLiteral(node);
}

/**
 * Checks whether or not a given binary expression has non string literals.
 * @param {ASTNode} node A node to check.
 * @returns {boolean} `true` if the node has non string literals.
 */
function hasNonStringLiteral(node) {
    if (isConcatenation(node)) {

        // `left` is deeper than `right` normally.
        return hasNonStringLiteral(node.right) || hasNonStringLiteral(node.left);
    }
    return !astUtils.isStringLiteral(node);
}

/**
 * Determines whether a given node will start with a template curly expression (`${}`) when being converted to a template literal.
 * @param {ASTNode} node The node that will be fixed to a template literal
 * @returns {boolean} `true` if the node will start with a template curly.
 */
function startsWithTemplateCurly(node) {
    if (node.type === "BinaryExpression") {
        return startsWithTemplateCurly(node.left);
    }
    if (node.type === "TemplateLiteral") {
        return node.expressions.length && node.quasis.length && node.quasis[0].range[0] === node.quasis[0].range[1];
    }
    return node.type !== "Literal" || typeof node.value !== "string";
}

/**
 * Determines whether a given node end with a template curly expression (`${}`) when being converted to a template literal.
 * @param {ASTNode} node The node that will be fixed to a template literal
 * @returns {boolean} `true` if the node will end with a template curly.
 */
function endsWithTemplateCurly(node) {
    if (node.type === "BinaryExpression") {
        return startsWithTemplateCurly(node.right);
    }
    if (node.type === "TemplateLiteral") {
        return node.expressions.length && node.quasis.length && node.quasis[node.quasis.length - 1].range[0] === node.quasis[node.quasis.length - 1].range[1];
    }
    return node.type !== "Literal" || typeof node.value !== "string";
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "require template literals instead of string concatenation",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://eslint.org/docs/rules/prefer-template"
        },

        schema: [],
        fixable: "code",

        messages: {
            unexpectedStringConcatenation: "Unexpected string concatenation."
        }
    },

    create(context) {
        const sourceCode = context.getSourceCode();
        let done = Object.create(null);

        /**
         * Gets the non-token text between two nodes, ignoring any other tokens that appear between the two tokens.
         * @param {ASTNode} node1 The first node
         * @param {ASTNode} node2 The second node
         * @returns {string} The text between the nodes, excluding other tokens
         */
        function getTextBetween(node1, node2) {
            const allTokens = [node1].concat(sourceCode.getTokensBetween(node1, node2)).concat(node2);
            const sourceText = sourceCode.getText();

            return allTokens.slice(0, -1).reduce((accumulator, token, index) => accumulator + sourceText.slice(token.range[1], allTokens[index + 1].range[0]), "");
        }

        /**
         * Returns a template literal form of the given node.
         * @param {ASTNode} currentNode A node that should be converted to a template literal
         * @param {string} textBeforeNode Text that should appear before the node
         * @param {string} textAfterNode Text that should appear after the node
         * @returns {string} A string form of this node, represented as a template literal
         */
        function getTemplateLiteral(currentNode, textBeforeNode, textAfterNode) {
            if (currentNode.type === "Literal" && typeof currentNode.value === "string") {

                /*
                 * If the current node is a string literal, escape any instances of ${ or ` to prevent them from being interpreted
                 * as a template placeholder. However, if the code already contains a backslash before the ${ or `
                 * for some reason, don't add another backslash, because that would change the meaning of the code (it would cause
                 * an actual backslash character to appear before the dollar sign).
                 */
                return `\`${currentNode.raw.slice(1, -1).replace(/\\*(\$\{|`)/gu, matched => {
                    if (matched.lastIndexOf("\\") % 2) {
                        return `\\${matched}`;
                    }
                    return matched;

                // Unescape any quotes that appear in the original Literal that no longer need to be escaped.
                }).replace(new RegExp(`\\\\${currentNode.raw[0]}`, "gu"), currentNode.raw[0])}\``;
            }

            if (currentNode.type === "TemplateLiteral") {
                return sourceCode.getText(currentNode);
            }

            if (isConcatenation(currentNode) && hasStringLiteral(currentNode) && hasNonStringLiteral(currentNode)) {
                const plusSign = sourceCode.getFirstTokenBetween(currentNode.left, currentNode.right, token => token.value === "+");
                const textBeforePlus = getTextBetween(currentNode.left, plusSign);
                const textAfterPlus = getTextBetween(plusSign, currentNode.right);
                const leftEndsWithCurly = endsWithTemplateCurly(currentNode.left);
                const rightStartsWithCurly = startsWithTemplateCurly(currentNode.right);

                if (leftEndsWithCurly) {

                    // If the left side of the expression ends with a template curly, add the extra text to the end of the curly bracket.
                    // `foo${bar}` /* comment */ + 'baz' --> `foo${bar /* comment */  }${baz}`
                    return getTemplateLiteral(currentNode.left, textBeforeNode, textBeforePlus + textAfterPlus).slice(0, -1) +
                        getTemplateLiteral(currentNode.right, null, textAfterNode).slice(1);
                }
                if (rightStartsWithCurly) {

                    // Otherwise, if the right side of the expression starts with a template curly, add the text there.
                    // 'foo' /* comment */ + `${bar}baz` --> `foo${ /* comment */  bar}baz`
                    return getTemplateLiteral(currentNode.left, textBeforeNode, null).slice(0, -1) +
                        getTemplateLiteral(currentNode.right, textBeforePlus + textAfterPlus, textAfterNode).slice(1);
                }

                /*
                 * Otherwise, these nodes should not be combined into a template curly, since there is nowhere to put
                 * the text between them.
                 */
                return `${getTemplateLiteral(currentNode.left, textBeforeNode, null)}${textBeforePlus}+${textAfterPlus}${getTemplateLiteral(currentNode.right, textAfterNode, null)}`;
            }

            return `\`\${${textBeforeNode || ""}${sourceCode.getText(currentNode)}${textAfterNode || ""}}\``;
        }

        /**
         * Returns a fixer object that converts a non-string binary expression to a template literal
         * @param {SourceCodeFixer} fixer The fixer object
         * @param {ASTNode} node A node that should be converted to a template literal
         * @returns {Object} A fix for this binary expression
         */
        function fixNonStringBinaryExpression(fixer, node) {
            const topBinaryExpr = getTopConcatBinaryExpression(node.parent);

            if (hasOctalOrNonOctalDecimalEscapeSequence(topBinaryExpr)) {
                return null;
            }

            return fixer.replaceText(topBinaryExpr, getTemplateLiteral(topBinaryExpr, null, null));
        }

        /**
         * Reports if a given node is string concatenation with non string literals.
         * @param {ASTNode} node A node to check.
         * @returns {void}
         */
        function checkForStringConcat(node) {
            if (!astUtils.isStringLiteral(node) || !isConcatenation(node.parent)) {
                return;
            }

            const topBinaryExpr = getTopConcatBinaryExpression(node.parent);

            // Checks whether or not this node had been checked already.
            if (done[topBinaryExpr.range[0]]) {
                return;
            }
            done[topBinaryExpr.range[0]] = true;

            if (hasNonStringLiteral(topBinaryExpr)) {
                context.report({
                    node: topBinaryExpr,
                    messageId: "unexpectedStringConcatenation",
                    fix: fixer => fixNonStringBinaryExpression(fixer, node)
                });
            }
        }

        return {
            Program() {
                done = Object.create(null);
            },

            Literal: checkForStringConcat,
            TemplateLiteral: checkForStringConcat
        };
    }
};
