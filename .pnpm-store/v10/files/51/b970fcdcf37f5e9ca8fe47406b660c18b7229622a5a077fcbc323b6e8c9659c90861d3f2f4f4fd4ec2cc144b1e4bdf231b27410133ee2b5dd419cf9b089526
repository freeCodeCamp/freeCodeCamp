var cmpChar = require('../../tokenizer').cmpChar;
var cmpStr = require('../../tokenizer').cmpStr;
var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var STRING = TYPE.String;
var NUMBER = TYPE.Number;
var FUNCTION = TYPE.Function;
var URL = TYPE.Url;
var HASH = TYPE.Hash;
var DIMENSION = TYPE.Dimension;
var PERCENTAGE = TYPE.Percentage;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var COMMA = TYPE.Comma;
var DELIM = TYPE.Delim;
var NUMBERSIGN = 0x0023;  // U+0023 NUMBER SIGN (#)
var ASTERISK = 0x002A;    // U+002A ASTERISK (*)
var PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
var HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
var SOLIDUS = 0x002F;     // U+002F SOLIDUS (/)
var U = 0x0075;           // U+0075 LATIN SMALL LETTER U (u)

module.exports = function defaultRecognizer(context) {
    switch (this.scanner.tokenType) {
        case HASH:
            return this.Hash();

        case COMMA:
            context.space = null;
            context.ignoreWSAfter = true;
            return this.Operator();

        case LEFTPARENTHESIS:
            return this.Parentheses(this.readSequence, context.recognizer);

        case LEFTSQUAREBRACKET:
            return this.Brackets(this.readSequence, context.recognizer);

        case STRING:
            return this.String();

        case DIMENSION:
            return this.Dimension();

        case PERCENTAGE:
            return this.Percentage();

        case NUMBER:
            return this.Number();

        case FUNCTION:
            return cmpStr(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, 'url(')
                ? this.Url()
                : this.Function(this.readSequence, context.recognizer);

        case URL:
            return this.Url();

        case IDENT:
            // check for unicode range, it should start with u+ or U+
            if (cmpChar(this.scanner.source, this.scanner.tokenStart, U) &&
                cmpChar(this.scanner.source, this.scanner.tokenStart + 1, PLUSSIGN)) {
                return this.UnicodeRange();
            } else {
                return this.Identifier();
            }

        case DELIM:
            var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);

            if (code === SOLIDUS ||
                code === ASTERISK ||
                code === PLUSSIGN ||
                code === HYPHENMINUS) {
                return this.Operator(); // TODO: replace with Delim
            }

            // TODO: produce a node with Delim node type

            if (code === NUMBERSIGN) {
                this.error('Hex or identifier is expected', this.scanner.tokenStart + 1);
            }

            break;
    }
};
