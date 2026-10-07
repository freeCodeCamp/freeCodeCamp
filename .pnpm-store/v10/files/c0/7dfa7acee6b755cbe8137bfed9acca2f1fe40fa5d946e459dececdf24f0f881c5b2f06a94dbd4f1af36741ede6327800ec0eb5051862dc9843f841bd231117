"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCase = void 0;
var SMALL_WORDS = /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i;
var TOKENS = /[^\s:–—-]+|./g;
var WHITESPACE = /\s/;
var IS_MANUAL_CASE = /.(?=[A-Z]|\..)/;
var ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;
function titleCase(input) {
    var result = "";
    var m;
    // tslint:disable-next-line
    while ((m = TOKENS.exec(input)) !== null) {
        var token = m[0], index = m.index;
        if (
        // Ignore already capitalized words.
        !IS_MANUAL_CASE.test(token) &&
            // Ignore small words except at beginning or end.
            (!SMALL_WORDS.test(token) ||
                index === 0 ||
                index + token.length === input.length) &&
            // Ignore URLs.
            (input.charAt(index + token.length) !== ":" ||
                WHITESPACE.test(input.charAt(index + token.length + 1)))) {
            // Find and uppercase first word character, skips over *modifiers*.
            result += token.replace(ALPHANUMERIC_PATTERN, function (m) { return m.toUpperCase(); });
            continue;
        }
        result += token;
    }
    return result;
}
exports.titleCase = titleCase;
//# sourceMappingURL=index.js.map