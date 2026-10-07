import {
    Delim,
    Ident,
    Dimension,
    Percentage,
    Number as NumberToken,
    Hash,
    Colon,
    LeftSquareBracket
} from '../../tokenizer/index.js';

const NUMBERSIGN = 0x0023;      // U+0023 NUMBER SIGN (#)
const AMPERSAND = 0x0026;       // U+0026 AMPERSAND (&)
const ASTERISK = 0x002A;        // U+002A ASTERISK (*)
const PLUSSIGN = 0x002B;        // U+002B PLUS SIGN (+)
const SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)
const FULLSTOP = 0x002E;        // U+002E FULL STOP (.)
const GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)
const VERTICALLINE = 0x007C;    // U+007C VERTICAL LINE (|)
const TILDE = 0x007E;           // U+007E TILDE (~)

function onWhiteSpace(next, children) {
    if (children.last !== null && children.last.type !== 'Combinator' &&
        next !== null && next.type !== 'Combinator') {
        children.push({  // FIXME: this.Combinator() should be used instead
            type: 'Combinator',
            loc: null,
            name: ' '
        });
    }
}

function getNode() {
    switch (this.tokenType) {
        case LeftSquareBracket:
            return this.AttributeSelector();

        case Hash:
            return this.IdSelector();

        case Colon:
            if (this.lookupType(1) === Colon) {
                return this.PseudoElementSelector();
            } else {
                return this.PseudoClassSelector();
            }

        case Ident:
            return this.TypeSelector();

        case NumberToken:
        case Percentage:
            return this.Percentage();

        case Dimension:
            // throws when .123ident
            if (this.charCodeAt(this.tokenStart) === FULLSTOP) {
                this.error('Identifier is expected', this.tokenStart + 1);
            }
            break;

        case Delim: {
            const code = this.charCodeAt(this.tokenStart);

            switch (code) {
                case PLUSSIGN:
                case GREATERTHANSIGN:
                case TILDE:
                case SOLIDUS:  // /deep/
                    return this.Combinator();

                case FULLSTOP:
                    return this.ClassSelector();

                case ASTERISK:
                case VERTICALLINE:
                    return this.TypeSelector();

                case NUMBERSIGN:
                    return this.IdSelector();

                case AMPERSAND:
                    return this.NestingSelector();
            }

            break;
        }
    }
};

export default {
    onWhiteSpace,
    getNode
};
