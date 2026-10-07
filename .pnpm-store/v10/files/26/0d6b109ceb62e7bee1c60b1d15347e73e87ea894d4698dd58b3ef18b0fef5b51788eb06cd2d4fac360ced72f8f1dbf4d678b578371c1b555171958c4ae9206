'use strict';

const charCodeDefinitions = require('../tokenizer/char-code-definitions.cjs');
const utils = require('../tokenizer/utils.cjs');

const REVERSE_SOLIDUS = 0x005c; // U+005C REVERSE SOLIDUS (\)
const QUOTATION_MARK = 0x0022;  // "
const APOSTROPHE = 0x0027;      // '

function decode(str) {
    const len = str.length;
    const firstChar = str.charCodeAt(0);
    const start = firstChar === QUOTATION_MARK || firstChar === APOSTROPHE ? 1 : 0;
    const end = start === 1 && len > 1 && str.charCodeAt(len - 1) === firstChar ? len - 2 : len - 1;
    let decoded = '';

    for (let i = start; i <= end; i++) {
        let code = str.charCodeAt(i);

        if (code === REVERSE_SOLIDUS) {
            // special case at the ending
            if (i === end) {
                // if the next input code point is EOF, do nothing
                // otherwise include last quote as escaped
                if (i !== len - 1) {
                    decoded = str.substr(i + 1);
                }
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

// https://drafts.csswg.org/cssom/#serialize-a-string
// § 2.1. Common Serializing Idioms
function encode(str, apostrophe) {
    const quote = apostrophe ? '\'' : '"';
    const quoteCode = apostrophe ? APOSTROPHE : QUOTATION_MARK;
    let encoded = '';
    let wsBeforeHexIsNeeded = false;

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER (U+FFFD).
        if (code === 0x0000) {
            encoded += '\uFFFD';
            continue;
        }

        // If the character is in the range [\1-\1f] (U+0001 to U+001F) or is U+007F,
        // the character escaped as code point.
        // Note: Do not compare with 0x0001 since 0x0000 is precessed before
        if (code <= 0x001f || code === 0x007F) {
            encoded += '\\' + code.toString(16);
            wsBeforeHexIsNeeded = true;
            continue;
        }

        // If the character is '"' (U+0022) or "\" (U+005C), the escaped character.
        if (code === quoteCode || code === REVERSE_SOLIDUS) {
            encoded += '\\' + str.charAt(i);
            wsBeforeHexIsNeeded = false;
        } else {
            if (wsBeforeHexIsNeeded && (charCodeDefinitions.isHexDigit(code) || charCodeDefinitions.isWhiteSpace(code))) {
                encoded += ' ';
            }

            // Otherwise, the character itself.
            encoded += str.charAt(i);
            wsBeforeHexIsNeeded = false;
        }
    }

    return quote + encoded + quote;
}

exports.decode = decode;
exports.encode = encode;
