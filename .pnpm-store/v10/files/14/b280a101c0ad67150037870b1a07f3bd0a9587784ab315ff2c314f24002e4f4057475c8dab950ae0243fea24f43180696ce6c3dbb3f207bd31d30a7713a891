import { WhiteSpace, Delim } from '../../tokenizer/index.js';

const PLUSSIGN = 0x002B;        // U+002B PLUS SIGN (+)
const SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)
const GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)
const TILDE = 0x007E;           // U+007E TILDE (~)

export const name = 'Combinator';
export const structure = {
    name: String
};

// + | > | ~ | /deep/
export function parse() {
    const start = this.tokenStart;
    let name;

    switch (this.tokenType) {
        case WhiteSpace:
            name = ' ';
            break;

        case Delim:
            switch (this.charCodeAt(this.tokenStart)) {
                case GREATERTHANSIGN:
                case PLUSSIGN:
                case TILDE:
                    this.next();
                    break;

                case SOLIDUS:
                    this.next();
                    this.eatIdent('deep');
                    this.eatDelim(SOLIDUS);
                    break;

                default:
                    this.error('Combinator is expected');
            }

            name = this.substrToCursor(start);
            break;
    }

    return {
        type: 'Combinator',
        loc: this.getLocation(start, this.tokenStart),
        name
    };
}

export function generate(node) {
    this.tokenize(node.name);
}
