var TYPE = require('../../tokenizer').TYPE;

var DELIM = TYPE.Delim;
var IDENT = TYPE.Ident;
var DIMENSION = TYPE.Dimension;
var PERCENTAGE = TYPE.Percentage;
var NUMBER = TYPE.Number;
var HASH = TYPE.Hash;
var COLON = TYPE.Colon;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var NUMBERSIGN = 0x0023;      // U+0023 NUMBER SIGN (#)
var ASTERISK = 0x002A;        // U+002A ASTERISK (*)
var PLUSSIGN = 0x002B;        // U+002B PLUS SIGN (+)
var SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)
var FULLSTOP = 0x002E;        // U+002E FULL STOP (.)
var GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)
var VERTICALLINE = 0x007C;    // U+007C VERTICAL LINE (|)
var TILDE = 0x007E;           // U+007E TILDE (~)

function getNode(context) {
    switch (this.scanner.tokenType) {
        case LEFTSQUAREBRACKET:
            return this.AttributeSelector();

        case HASH:
            return this.IdSelector();

        case COLON:
            if (this.scanner.lookupType(1) === COLON) {
                return this.PseudoElementSelector();
            } else {
                return this.PseudoClassSelector();
            }

        case IDENT:
            return this.TypeSelector();

        case NUMBER:
        case PERCENTAGE:
            return this.Percentage();

        case DIMENSION:
            // throws when .123ident
            if (this.scanner.source.charCodeAt(this.scanner.tokenStart) === FULLSTOP) {
                this.error('Identifier is expected', this.scanner.tokenStart + 1);
            }
            break;

        case DELIM:
            var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);

            switch (code) {
                case PLUSSIGN:
                case GREATERTHANSIGN:
                case TILDE:
                    context.space = null;
                    context.ignoreWSAfter = true;
                    return this.Combinator();

                case SOLIDUS:  // /deep/
                    return this.Combinator();

                case FULLSTOP:
                    return this.ClassSelector();

                case ASTERISK:
                case VERTICALLINE:
                    return this.TypeSelector();

                case NUMBERSIGN:
                    return this.IdSelector();
            }

            break;
    }
};

module.exports = {
    getNode: getNode
};
