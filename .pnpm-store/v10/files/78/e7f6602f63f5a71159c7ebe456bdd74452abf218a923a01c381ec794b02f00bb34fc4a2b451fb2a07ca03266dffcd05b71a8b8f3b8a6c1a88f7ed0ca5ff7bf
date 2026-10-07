"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.getCodePoint = exports.xmlReplacer = void 0;
exports.encodeXML = encodeXML;
exports.xmlReplacer = /["$&'<>\u0080-\uFFFF]/g;
const xmlCodeMap = new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"],
]);
// For compatibility with node < 4, we wrap `codePointAt`
exports.getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt == null
    ? (c, index) => (c.charCodeAt(index) & 64512) === 55296
        ? (c.charCodeAt(index) - 55296) * 1024 +
            c.charCodeAt(index + 1) -
            56320 +
            65536
        : c.charCodeAt(index)
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        (input, index) => input.codePointAt(index);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
function encodeXML(input) {
    let returnValue = "";
    let lastIndex = 0;
    let match;
    while ((match = exports.xmlReplacer.exec(input)) !== null) {
        const { index } = match;
        const char = input.charCodeAt(index);
        const next = xmlCodeMap.get(char);
        if (next === undefined) {
            returnValue += `${input.substring(lastIndex, index)}&#x${(0, exports.getCodePoint)(input, index).toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIndex = exports.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
        }
        else {
            returnValue += input.substring(lastIndex, index) + next;
            lastIndex = index + 1;
        }
    }
    return returnValue + input.substr(lastIndex);
}
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
exports.escape = encodeXML;
/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */
function getEscaper(regex, map) {
    return function escape(data) {
        let match;
        let lastIndex = 0;
        let result = "";
        while ((match = regex.exec(data))) {
            if (lastIndex !== match.index) {
                result += data.substring(lastIndex, match.index);
            }
            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0));
            // Every match will be of length 1
            lastIndex = match.index + 1;
        }
        return result + data.substring(lastIndex);
    };
}
/**
 * Encodes all characters not valid in XML documents using XML entities.
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
exports.escapeUTF8 = getEscaper(/["&'<>]/g, xmlCodeMap);
/**
 * Encodes all characters that have to be escaped in HTML attributes,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
exports.escapeAttribute = 
/* #__PURE__ */ getEscaper(/["&\u00A0]/g, new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"],
]));
/**
 * Encodes all characters that have to be escaped in HTML text,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
exports.escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"],
]));
//# sourceMappingURL=escape.js.map