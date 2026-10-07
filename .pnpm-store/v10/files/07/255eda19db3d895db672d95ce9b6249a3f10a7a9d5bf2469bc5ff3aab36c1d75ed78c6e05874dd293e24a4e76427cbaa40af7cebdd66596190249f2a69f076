/**
 * @fileoverview Look for useless escapes in strings and regexes
 * @author Onur Temizkan
 */

"use strict";

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Returns the union of two sets.
 * @param {Set} setA The first set
 * @param {Set} setB The second set
 * @returns {Set} The union of the two sets
 */
function union(setA, setB) {
    return new Set(function *() {
        yield* setA;
        yield* setB;
    }());
}

const VALID_STRING_ESCAPES = union(new Set("\\nrvtbfux"), astUtils.LINEBREAKS);
const REGEX_GENERAL_ESCAPES = new Set("\\bcdDfnpPrsStvwWxu0123456789]");
const REGEX_NON_CHARCLASS_ESCAPES = union(REGEX_GENERAL_ESCAPES, new Set("^/.$*+?[{}|()Bk"));

/**
 * Parses a regular expression into a list of characters with character class info.
 * @param {string} regExpText The raw text used to create the regular expression
 * @returns {Object[]} A list of characters, each with info on escaping and whether they're in a character class.
 * @example
 *
 * parseRegExp('a\\b[cd-]')
 *
 * returns:
 * [
 *   {text: 'a', index: 0, escaped: false, inCharClass: false, startsCharClass: false, endsCharClass: false},
 *   {text: 'b', index: 2, escaped: true, inCharClass: false, startsCharClass: false, endsCharClass: false},
 *   {text: 'c', index: 4, escaped: false, inCharClass: true, startsCharClass: true, endsCharClass: false},
 *   {text: 'd', index: 5, escaped: false, inCharClass: true, startsCharClass: false, endsCharClass: false},
 *   {text: '-', index: 6, escaped: false, inCharClass: true, startsCharClass: false, endsCharClass: false}
 * ]
 */
function parseRegExp(regExpText) {
    const charList = [];

    regExpText.split("").reduce((state, char, index) => {
        if (!state.escapeNextChar) {
            if (char === "\\") {
                return Object.assign(state, { escapeNextChar: true });
            }
            if (char === "[" && !state.inCharClass) {
                return Object.assign(state, { inCharClass: true, startingCharClass: true });
            }
            if (char === "]" && state.inCharClass) {
                if (charList.length && charList[charList.length - 1].inCharClass) {
                    charList[charList.length - 1].endsCharClass = true;
                }
                return Object.assign(state, { inCharClass: false, startingCharClass: false });
            }
        }
        charList.push({
            text: char,
            index,
            escaped: state.escapeNextChar,
            inCharClass: state.inCharClass,
            startsCharClass: state.startingCharClass,
            endsCharClass: false
        });
        return Object.assign(state, { escapeNextChar: false, startingCharClass: false });
    }, { escapeNextChar: false, inCharClass: false, startingCharClass: false });

    return charList;
}

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unnecessary escape characters",
            category: "Best Practices",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-useless-escape",
            suggestion: true
        },

        messages: {
            unnecessaryEscape: "Unnecessary escape character: \\{{character}}.",
            removeEscape: "Remove the `\\`. This maintains the current functionality.",
            escapeBackslash: "Replace the `\\` with `\\\\` to include the actual backslash character."
        },

        schema: []
    },

    create(context) {
        const sourceCode = context.getSourceCode();

        /**
         * Reports a node
         * @param {ASTNode} node The node to report
         * @param {number} startOffset The backslash's offset from the start of the node
         * @param {string} character The uselessly escaped character (not including the backslash)
         * @returns {void}
         */
        function report(node, startOffset, character) {
            const rangeStart = node.range[0] + startOffset;
            const range = [rangeStart, rangeStart + 1];
            const start = sourceCode.getLocFromIndex(rangeStart);

            context.report({
                node,
                loc: {
                    start,
                    end: { line: start.line, column: start.column + 1 }
                },
                messageId: "unnecessaryEscape",
                data: { character },
                suggest: [
                    {
                        messageId: "removeEscape",
                        fix(fixer) {
                            return fixer.removeRange(range);
                        }
                    },
                    {
                        messageId: "escapeBackslash",
                        fix(fixer) {
                            return fixer.insertTextBeforeRange(range, "\\");
                        }
                    }
                ]
            });
        }

        /**
         * Checks if the escape character in given string slice is unnecessary.
         * @private
         * @param {ASTNode} node node to validate.
         * @param {string} match string slice to validate.
         * @returns {void}
         */
        function validateString(node, match) {
            const isTemplateElement = node.type === "TemplateElement";
            const escapedChar = match[0][1];
            let isUnnecessaryEscape = !VALID_STRING_ESCAPES.has(escapedChar);
            let isQuoteEscape;

            if (isTemplateElement) {
                isQuoteEscape = escapedChar === "`";

                if (escapedChar === "$") {

                    // Warn if `\$` is not followed by `{`
                    isUnnecessaryEscape = match.input[match.index + 2] !== "{";
                } else if (escapedChar === "{") {

                    /*
                     * Warn if `\{` is not preceded by `$`. If preceded by `$`, escaping
                     * is necessary and the rule should not warn. If preceded by `/$`, the rule
                     * will warn for the `/$` instead, as it is the first unnecessarily escaped character.
                     */
                    isUnnecessaryEscape = match.input[match.index - 1] !== "$";
                }
            } else {
                isQuoteEscape = escapedChar === node.raw[0];
            }

            if (isUnnecessaryEscape && !isQuoteEscape) {
                report(node, match.index, match[0].slice(1));
            }
        }

        /**
         * Checks if a node has an escape.
         * @param {ASTNode} node node to check.
         * @returns {void}
         */
        function check(node) {
            const isTemplateElement = node.type === "TemplateElement";

            if (
                isTemplateElement &&
                node.parent &&
                node.parent.parent &&
                node.parent.parent.type === "TaggedTemplateExpression" &&
                node.parent === node.parent.parent.quasi
            ) {

                // Don't report tagged template literals, because the backslash character is accessible to the tag function.
                return;
            }

            if (typeof node.value === "string" || isTemplateElement) {

                /*
                 * JSXAttribute doesn't have any escape sequence: https://facebook.github.io/jsx/.
                 * In addition, backticks are not supported by JSX yet: https://github.com/facebook/jsx/issues/25.
                 */
                if (node.parent.type === "JSXAttribute" || node.parent.type === "JSXElement" || node.parent.type === "JSXFragment") {
                    return;
                }

                const value = isTemplateElement ? sourceCode.getText(node) : node.raw;
                const pattern = /\\[^\d]/gu;
                let match;

                while ((match = pattern.exec(value))) {
                    validateString(node, match);
                }
            } else if (node.regex) {
                parseRegExp(node.regex.pattern)

                    /*
                     * The '-' character is a special case, because it's only valid to escape it if it's in a character
                     * class, and is not at either edge of the character class. To account for this, don't consider '-'
                     * characters to be valid in general, and filter out '-' characters that appear in the middle of a
                     * character class.
                     */
                    .filter(charInfo => !(charInfo.text === "-" && charInfo.inCharClass && !charInfo.startsCharClass && !charInfo.endsCharClass))

                    /*
                     * The '^' character is also a special case; it must always be escaped outside of character classes, but
                     * it only needs to be escaped in character classes if it's at the beginning of the character class. To
                     * account for this, consider it to be a valid escape character outside of character classes, and filter
                     * out '^' characters that appear at the start of a character class.
                     */
                    .filter(charInfo => !(charInfo.text === "^" && charInfo.startsCharClass))

                    // Filter out characters that aren't escaped.
                    .filter(charInfo => charInfo.escaped)

                    // Filter out characters that are valid to escape, based on their position in the regular expression.
                    .filter(charInfo => !(charInfo.inCharClass ? REGEX_GENERAL_ESCAPES : REGEX_NON_CHARCLASS_ESCAPES).has(charInfo.text))

                    // Report all the remaining characters.
                    .forEach(charInfo => report(node, charInfo.index, charInfo.text));
            }

        }

        return {
            Literal: check,
            TemplateElement: check
        };
    }
};
