'use strict';

const types = require('../../tokenizer/types.cjs');
const charCodeDefinitions = require('../../tokenizer/char-code-definitions.cjs');

const PLUSSIGN = 0x002B;     // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D;  // U+002D HYPHEN-MINUS (-)
const QUESTIONMARK = 0x003F; // U+003F QUESTION MARK (?)

function eatHexSequence(offset, allowDash) {
    let len = 0;

    for (let pos = this.tokenStart + offset; pos < this.tokenEnd; pos++) {
        const code = this.charCodeAt(pos);

        if (code === HYPHENMINUS && allowDash && len !== 0) {
            eatHexSequence.call(this, offset + len + 1, false);
            return -1;
        }

        if (!charCodeDefinitions.isHexDigit(code)) {
            this.error(
                allowDash && len !== 0
                    ? 'Hyphen minus' + (len < 6 ? ' or hex digit' : '') + ' is expected'
                    : (len < 6 ? 'Hex digit is expected' : 'Unexpected input'),
                pos
            );
        }

        if (++len > 6) {
            this.error('Too many hex digits', pos);
        }    }

    this.next();
    return len;
}

function eatQuestionMarkSequence(max) {
    let count = 0;

    while (this.isDelim(QUESTIONMARK)) {
        if (++count > max) {
            this.error('Too many question marks');
        }

        this.next();
    }
}

function startsWith(code) {
    if (this.charCodeAt(this.tokenStart) !== code) {
        this.error((code === PLUSSIGN ? 'Plus sign' : 'Hyphen minus') + ' is expected');
    }
}

// https://drafts.csswg.org/css-syntax/#urange
// Informally, the <urange> production has three forms:
// U+0001
//      Defines a range consisting of a single code point, in this case the code point "1".
// U+0001-00ff
//      Defines a range of codepoints between the first and the second value, in this case
//      the range between "1" and "ff" (255 in decimal) inclusive.
// U+00??
//      Defines a range of codepoints where the "?" characters range over all hex digits,
//      in this case defining the same as the value U+0000-00ff.
// In each form, a maximum of 6 digits is allowed for each hexadecimal number (if you treat "?" as a hexadecimal digit).
//
// <urange> =
//   u '+' <ident-token> '?'* |
//   u <dimension-token> '?'* |
//   u <number-token> '?'* |
//   u <number-token> <dimension-token> |
//   u <number-token> <number-token> |
//   u '+' '?'+
function scanUnicodeRange() {
    let hexLength = 0;

    switch (this.tokenType) {
        case types.Number:
            // u <number-token> '?'*
            // u <number-token> <dimension-token>
            // u <number-token> <number-token>
            hexLength = eatHexSequence.call(this, 1, true);

            if (this.isDelim(QUESTIONMARK)) {
                eatQuestionMarkSequence.call(this, 6 - hexLength);
                break;
            }

            if (this.tokenType === types.Dimension ||
                this.tokenType === types.Number) {
                startsWith.call(this, HYPHENMINUS);
                eatHexSequence.call(this, 1, false);
                break;
            }

            break;

        case types.Dimension:
            // u <dimension-token> '?'*
            hexLength = eatHexSequence.call(this, 1, true);

            if (hexLength > 0) {
                eatQuestionMarkSequence.call(this, 6 - hexLength);
            }

            break;

        default:
            // u '+' <ident-token> '?'*
            // u '+' '?'+
            this.eatDelim(PLUSSIGN);

            if (this.tokenType === types.Ident) {
                hexLength = eatHexSequence.call(this, 0, true);
                if (hexLength > 0) {
                    eatQuestionMarkSequence.call(this, 6 - hexLength);
                }
                break;
            }

            if (this.isDelim(QUESTIONMARK)) {
                this.next();
                eatQuestionMarkSequence.call(this, 5);
                break;
            }

            this.error('Hex digit or question mark is expected');
    }
}

const name = 'UnicodeRange';
const structure = {
    value: String
};

function parse() {
    const start = this.tokenStart;

    // U or u
    this.eatIdent('u');
    scanUnicodeRange.call(this);

    return {
        type: 'UnicodeRange',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start)
    };
}

function generate(node) {
    this.tokenize(node.value);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
