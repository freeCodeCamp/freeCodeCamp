"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeHTML = encodeHTML;
exports.encodeNonAsciiHTML = encodeNonAsciiHTML;
const encode_html_js_1 = require("./generated/encode-html.js");
const escape_js_1 = require("./escape.js");
const htmlReplacer = /[\t\n\f!-,./:-@[-`{-}\u0080-\uFFFF]/g;
/**
 * Encodes all characters in the input using HTML entities. This includes
 * characters that are valid ASCII characters in HTML documents, such as `#`.
 *
 * To get a more compact output, consider using the `encodeNonAsciiHTML`
 * function, which will only encode characters that are not valid in HTML
 * documents, as well as non-ASCII characters.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
function encodeHTML(input) {
    return encodeHTMLTrieRe(htmlReplacer, input);
}
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities. This function will not encode characters that
 * are valid in HTML documents, such as `#`.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
function encodeNonAsciiHTML(input) {
    return encodeHTMLTrieRe(escape_js_1.xmlReplacer, input);
}
function encodeHTMLTrieRe(regExp, input) {
    let returnValue = "";
    let lastIndex = 0;
    let match;
    while ((match = regExp.exec(input)) !== null) {
        const { index } = match;
        returnValue += input.substring(lastIndex, index);
        const char = input.charCodeAt(index);
        let next = encode_html_js_1.htmlTrie.get(char);
        if (typeof next === "object") {
            // We are in a branch. Try to match the next char.
            if (index + 1 < input.length) {
                const nextChar = input.charCodeAt(index + 1);
                const value = typeof next.n === "number"
                    ? next.n === nextChar
                        ? next.o
                        : undefined
                    : next.n.get(nextChar);
                if (value !== undefined) {
                    returnValue += value;
                    lastIndex = regExp.lastIndex += 1;
                    continue;
                }
            }
            next = next.v;
        }
        // We might have a tree node without a value; skip and use a numeric entity.
        if (next === undefined) {
            const cp = (0, escape_js_1.getCodePoint)(input, index);
            returnValue += `&#x${cp.toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIndex = regExp.lastIndex += Number(cp !== char);
        }
        else {
            returnValue += next;
            lastIndex = index + 1;
        }
    }
    return returnValue + input.substr(lastIndex);
}
//# sourceMappingURL=encode.js.map