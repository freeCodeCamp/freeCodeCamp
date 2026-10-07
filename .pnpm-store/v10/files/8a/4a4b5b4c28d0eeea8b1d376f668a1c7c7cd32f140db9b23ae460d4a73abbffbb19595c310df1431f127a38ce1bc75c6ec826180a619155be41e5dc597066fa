'use strict';

const types = require('../../tokenizer/types.cjs');

const NUMBERSIGN = 0x0023;  // U+0023 NUMBER SIGN (#)
const ASTERISK = 0x002A;    // U+002A ASTERISK (*)
const PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
const SOLIDUS = 0x002F;     // U+002F SOLIDUS (/)
const U = 0x0075;           // U+0075 LATIN SMALL LETTER U (u)

function defaultRecognizer(context) {
    switch (this.tokenType) {
        case types.Hash:
            return this.Hash();

        case types.Comma:
            return this.Operator();

        case types.LeftParenthesis:
            return this.Parentheses(this.readSequence, context.recognizer);

        case types.LeftSquareBracket:
            return this.Brackets(this.readSequence, context.recognizer);

        case types.String:
            return this.String();

        case types.Dimension:
            return this.Dimension();

        case types.Percentage:
            return this.Percentage();

        case types.Number:
            return this.Number();

        case types.Function:
            return this.cmpStr(this.tokenStart, this.tokenEnd, 'url(')
                ? this.Url()
                : this.Function(this.readSequence, context.recognizer);

        case types.Url:
            return this.Url();

        case types.Ident:
            // check for unicode range, it should start with u+ or U+
            if (this.cmpChar(this.tokenStart, U) &&
                this.cmpChar(this.tokenStart + 1, PLUSSIGN)) {
                return this.UnicodeRange();
            } else {
                return this.Identifier();
            }

        case types.Delim: {
            const code = this.charCodeAt(this.tokenStart);

            if (code === SOLIDUS ||
                code === ASTERISK ||
                code === PLUSSIGN ||
                code === HYPHENMINUS) {
                return this.Operator(); // TODO: replace with Delim
            }

            // TODO: produce a node with Delim node type

            if (code === NUMBERSIGN) {
                this.error('Hex or identifier is expected', this.tokenStart + 1);
            }

            break;
        }
    }
}

module.exports = defaultRecognizer;
