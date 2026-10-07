"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.isTraversal = void 0;
var types_1 = require("./types");
var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
var actionTypes = new Map([
    [126 /* Tilde */, types_1.AttributeAction.Element],
    [94 /* Circumflex */, types_1.AttributeAction.Start],
    [36 /* Dollar */, types_1.AttributeAction.End],
    [42 /* Asterisk */, types_1.AttributeAction.Any],
    [33 /* ExclamationMark */, types_1.AttributeAction.Not],
    [124 /* Pipe */, types_1.AttributeAction.Hyphen],
]);
// Pseudos, whose data property is parsed as well.
var unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context",
]);
/**
 * Checks whether a specific selector is a traversal.
 * This is useful eg. in swapping the order of elements that
 * are not traversals.
 *
 * @param selector Selector to check.
 */
function isTraversal(selector) {
    switch (selector.type) {
        case types_1.SelectorType.Adjacent:
        case types_1.SelectorType.Child:
        case types_1.SelectorType.Descendant:
        case types_1.SelectorType.Parent:
        case types_1.SelectorType.Sibling:
        case types_1.SelectorType.ColumnCombinator:
            return true;
        default:
            return false;
    }
}
exports.isTraversal = isTraversal;
var stripQuotesFromPseudos = new Set(["contains", "icontains"]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    var high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace
        ? escaped
        : high < 0
            ? // BMP codepoint
                String.fromCharCode(high + 0x10000)
            : // Supplemental Plane codepoint (surrogate pair)
                String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */ || c === 34 /* DoubleQuote */;
}
function isWhitespace(c) {
    return (c === 32 /* Space */ ||
        c === 9 /* Tab */ ||
        c === 10 /* NewLine */ ||
        c === 12 /* FormFeed */ ||
        c === 13 /* CarriageReturn */);
}
/**
 * Parses `selector`, optionally with the passed `options`.
 *
 * @param selector Selector to parse.
 * @param options Options for parsing.
 * @returns Returns a two-dimensional array.
 * The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
 * the second contains the relevant tokens for that selector.
 */
function parse(selector) {
    var subselects = [];
    var endIndex = parseSelector(subselects, "".concat(selector), 0);
    if (endIndex < selector.length) {
        throw new Error("Unmatched selector: ".concat(selector.slice(endIndex)));
    }
    return subselects;
}
exports.parse = parse;
function parseSelector(subselects, selector, selectorIndex) {
    var tokens = [];
    function getName(offset) {
        var match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error("Expected name, found ".concat(selector.slice(selectorIndex)));
        }
        var name = match[0];
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while (selectorIndex < selector.length &&
            isWhitespace(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        var start = selectorIndex;
        var counter = 1;
        for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
            if (selector.charCodeAt(selectorIndex) ===
                40 /* LeftParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter++;
            }
            else if (selector.charCodeAt(selectorIndex) ===
                41 /* RightParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter--;
            }
        }
        if (counter) {
            throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        var slashCount = 0;
        while (selector.charCodeAt(--pos) === 92 /* BackSlash */)
            slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 &&
            tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({ type: type });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: types_1.SelectorType.Attribute,
            name: name,
            action: action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks",
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */
    function finalizeSubselector() {
        if (tokens.length &&
            tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while (selectorIndex < selector.length) {
        var firstChar = selector.charCodeAt(selectorIndex);
        switch (firstChar) {
            // Whitespace
            case 32 /* Space */:
            case 9 /* Tab */:
            case 10 /* NewLine */:
            case 12 /* FormFeed */:
            case 13 /* CarriageReturn */: {
                if (tokens.length === 0 ||
                    tokens[0].type !== types_1.SelectorType.Descendant) {
                    ensureNotTraversal();
                    tokens.push({ type: types_1.SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
            }
            // Traversals
            case 62 /* GreaterThan */: {
                addTraversal(types_1.SelectorType.Child);
                stripWhitespace(1);
                break;
            }
            case 60 /* LessThan */: {
                addTraversal(types_1.SelectorType.Parent);
                stripWhitespace(1);
                break;
            }
            case 126 /* Tilde */: {
                addTraversal(types_1.SelectorType.Sibling);
                stripWhitespace(1);
                break;
            }
            case 43 /* Plus */: {
                addTraversal(types_1.SelectorType.Adjacent);
                stripWhitespace(1);
                break;
            }
            // Special attribute selectors: .class, #id
            case 46 /* Period */: {
                addSpecialAttribute("class", types_1.AttributeAction.Element);
                break;
            }
            case 35 /* Hash */: {
                addSpecialAttribute("id", types_1.AttributeAction.Equals);
                break;
            }
            case 91 /* LeftSquareBracket */: {
                stripWhitespace(1);
                // Determine attribute name and namespace
                var name_1 = void 0;
                var namespace = null;
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */) {
                    // Equivalent to no namespace
                    name_1 = getName(1);
                }
                else if (selector.startsWith("*|", selectorIndex)) {
                    namespace = "*";
                    name_1 = getName(2);
                }
                else {
                    name_1 = getName(0);
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                        selector.charCodeAt(selectorIndex + 1) !==
                            61 /* Equal */) {
                        namespace = name_1;
                        name_1 = getName(1);
                    }
                }
                stripWhitespace(0);
                // Determine comparison operation
                var action = types_1.AttributeAction.Exists;
                var possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                    action = possibleAction;
                    if (selector.charCodeAt(selectorIndex + 1) !==
                        61 /* Equal */) {
                        throw new Error("Expected `=`");
                    }
                    stripWhitespace(2);
                }
                else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */) {
                    action = types_1.AttributeAction.Equals;
                    stripWhitespace(1);
                }
                // Determine value
                var value = "";
                var ignoreCase = null;
                if (action !== "exists") {
                    if (isQuote(selector.charCodeAt(selectorIndex))) {
                        var quote = selector.charCodeAt(selectorIndex);
                        var sectionEnd = selectorIndex + 1;
                        while (sectionEnd < selector.length &&
                            (selector.charCodeAt(sectionEnd) !== quote ||
                                isEscaped(sectionEnd))) {
                            sectionEnd += 1;
                        }
                        if (selector.charCodeAt(sectionEnd) !== quote) {
                            throw new Error("Attribute value didn't end");
                        }
                        value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                        selectorIndex = sectionEnd + 1;
                    }
                    else {
                        var valueStart = selectorIndex;
                        while (selectorIndex < selector.length &&
                            ((!isWhitespace(selector.charCodeAt(selectorIndex)) &&
                                selector.charCodeAt(selectorIndex) !==
                                    93 /* RightSquareBracket */) ||
                                isEscaped(selectorIndex))) {
                            selectorIndex += 1;
                        }
                        value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                    }
                    stripWhitespace(0);
                    // See if we have a force ignore flag
                    var forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                    // If the forceIgnore flag is set (either `i` or `s`), use that value
                    if (forceIgnore === 115 /* LowerS */) {
                        ignoreCase = false;
                        stripWhitespace(1);
                    }
                    else if (forceIgnore === 105 /* LowerI */) {
                        ignoreCase = true;
                        stripWhitespace(1);
                    }
                }
                if (selector.charCodeAt(selectorIndex) !==
                    93 /* RightSquareBracket */) {
                    throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                var attributeSelector = {
                    type: types_1.SelectorType.Attribute,
                    name: name_1,
                    action: action,
                    value: value,
                    namespace: namespace,
                    ignoreCase: ignoreCase,
                };
                tokens.push(attributeSelector);
                break;
            }
            case 58 /* Colon */: {
                if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */) {
                    tokens.push({
                        type: types_1.SelectorType.PseudoElement,
                        name: getName(2).toLowerCase(),
                        data: selector.charCodeAt(selectorIndex) ===
                            40 /* LeftParenthesis */
                            ? readValueWithParenthesis()
                            : null,
                    });
                    continue;
                }
                var name_2 = getName(1).toLowerCase();
                var data = null;
                if (selector.charCodeAt(selectorIndex) ===
                    40 /* LeftParenthesis */) {
                    if (unpackPseudos.has(name_2)) {
                        if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                            throw new Error("Pseudo-selector ".concat(name_2, " cannot be quoted"));
                        }
                        data = [];
                        selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                        if (selector.charCodeAt(selectorIndex) !==
                            41 /* RightParenthesis */) {
                            throw new Error("Missing closing parenthesis in :".concat(name_2, " (").concat(selector, ")"));
                        }
                        selectorIndex += 1;
                    }
                    else {
                        data = readValueWithParenthesis();
                        if (stripQuotesFromPseudos.has(name_2)) {
                            var quot = data.charCodeAt(0);
                            if (quot === data.charCodeAt(data.length - 1) &&
                                isQuote(quot)) {
                                data = data.slice(1, -1);
                            }
                        }
                        data = unescapeCSS(data);
                    }
                }
                tokens.push({ type: types_1.SelectorType.Pseudo, name: name_2, data: data });
                break;
            }
            case 44 /* Comma */: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
            }
            default: {
                if (selector.startsWith("/*", selectorIndex)) {
                    var endIndex = selector.indexOf("*/", selectorIndex + 2);
                    if (endIndex < 0) {
                        throw new Error("Comment was not terminated");
                    }
                    selectorIndex = endIndex + 2;
                    // Remove leading whitespace
                    if (tokens.length === 0) {
                        stripWhitespace(0);
                    }
                    break;
                }
                var namespace = null;
                var name_3 = void 0;
                if (firstChar === 42 /* Asterisk */) {
                    selectorIndex += 1;
                    name_3 = "*";
                }
                else if (firstChar === 124 /* Pipe */) {
                    name_3 = "";
                    if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */) {
                        addTraversal(types_1.SelectorType.ColumnCombinator);
                        stripWhitespace(2);
                        break;
                    }
                }
                else if (reName.test(selector.slice(selectorIndex))) {
                    name_3 = getName(0);
                }
                else {
                    break loop;
                }
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                    selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */) {
                    namespace = name_3;
                    if (selector.charCodeAt(selectorIndex + 1) ===
                        42 /* Asterisk */) {
                        name_3 = "*";
                        selectorIndex += 2;
                    }
                    else {
                        name_3 = getName(1);
                    }
                }
                tokens.push(name_3 === "*"
                    ? { type: types_1.SelectorType.Universal, namespace: namespace }
                    : { type: types_1.SelectorType.Tag, name: name_3, namespace: namespace });
            }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}
