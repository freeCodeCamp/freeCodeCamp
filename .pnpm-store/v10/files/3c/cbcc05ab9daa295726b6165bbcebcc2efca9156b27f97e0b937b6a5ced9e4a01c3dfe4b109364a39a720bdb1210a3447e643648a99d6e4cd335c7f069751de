import { Delim, Ident } from '../../tokenizer/index.js';

const FULLSTOP = 0x002E; // U+002E FULL STOP (.)

// '.' ident
export const name = 'ClassSelector';
export const structure = {
    name: String
};

export function parse() {
    this.eatDelim(FULLSTOP);

    return {
        type: 'ClassSelector',
        loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
        name: this.consume(Ident)
    };
}

export function generate(node) {
    this.token(Delim, '.');
    this.token(Ident, node.name);
}
