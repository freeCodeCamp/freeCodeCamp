/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/escape.js
 */ // Used to map characters to HTML entities.
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/unescape.js
 */ // Used to map HTML entities to characters.
var htmlCharacters = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
};
// Used to match HTML entities and HTML characters.
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);
/**
 * Converts the HTML entities "&", "<", ">", '"', and "'" in `string` to their
 * characters.
 */ function unescape(value) {
    return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function(character) {
        return htmlCharacters[character];
    }) : value;
}

export { unescape };
