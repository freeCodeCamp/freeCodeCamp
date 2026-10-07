'use strict';

const charCodeDefinitions = require('../tokenizer/char-code-definitions.cjs');
const utils = require('../tokenizer/utils.cjs');

const REVERSE_SOLIDUS = 0x005c; // U+005C REVERSE SOLIDUS (\)

function decode(str) {
    const end = str.length - 1;
    let decoded = '';

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        if (code === REVERSE_SOLIDUS) {
            // special case at the ending
            if (i === end) {
                // if the next input code point is EOF, do nothing
                break;
            }

            code = str.charCodeAt(++i);

            // consume escaped
            if (charCodeDefinitions.isValidEscape(REVERSE_SOLIDUS, code)) {
                const escapeStart = i - 1;
                const escapeEnd = utils.consumeEscaped(str, escapeStart);

                i = escapeEnd - 1;
                decoded += utils.decodeEscaped(str.substring(escapeStart + 1, escapeEnd));
            } else {
                // \r\n
                if (code === 0x000d && str.charCodeAt(i + 1) === 0x000a) {
                    i++;
                }
            }
        } else {
            decoded += str[i];
        }
    }

    return decoded;
}

// https://drafts.csswg.org/cssom/#serialize-an-identifier
// § 2.1. Common Serializing Idioms
function encode(str) {
    let encoded = '';

    // If the character is the first character and is a "-" (U+002D),
    // and there is no second character, then the escaped character.
    // Note: That's means a single dash string "-" return as escaped dash,
    // so move the condition out of the main loop
    if (str.length === 1 && str.charCodeAt(0) === 0x002D) {
        return '\\-';
    }

    // To serialize an identifier means to create a string represented
    // by the concatenation of, for each character of the identifier:
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER (U+FFFD).
        if (code === 0x0000) {
            encoded += '\uFFFD';
            continue;
        }

        if (
            // If the character is in the range [\1-\1f] (U+0001 to U+001F) or is U+007F ...
            // Note: Do not compare with 0x0001 since 0x0000 is precessed before
            code <= 0x001F || code === 0x007F ||
            // [or] ... is in the range [0-9] (U+0030 to U+0039),
            (code >= 0x0030 && code <= 0x0039 && (
                // If the character is the first character ...
                i === 0 ||
                // If the character is the second character ... and the first character is a "-" (U+002D)
                i === 1 && str.charCodeAt(0) === 0x002D
            ))
        ) {
            // ... then the character escaped as code point.
            encoded += '\\' + code.toString(16) + ' ';
            continue;
        }

        // If the character is not handled by one of the above rules and is greater
        // than or equal to U+0080, is "-" (U+002D) or "_" (U+005F), or is in one
        // of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to U+005A),
        // or \[a-z] (U+0061 to U+007A), then the character itself.
        if (charCodeDefinitions.isName(code)) {
            encoded += str.charAt(i);
        } else {
            // Otherwise, the escaped character.
            encoded += '\\' + str.charAt(i);
        }
    }

    return encoded;
}

exports.decode = decode;
exports.encode = encode;
