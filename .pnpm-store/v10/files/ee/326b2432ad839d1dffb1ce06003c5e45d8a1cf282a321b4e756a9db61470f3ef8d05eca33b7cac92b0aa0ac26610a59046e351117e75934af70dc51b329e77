import { Ident, Delim } from '../../tokenizer/index.js';

const FULLSTOP = 0x002E; // U+002E FULL STOP (.)

export const name = 'Layer';
export const structure = {
    name: String
};

export function parse() {
    let tokenStart = this.tokenStart;
    let name = this.consume(Ident);

    while (this.isDelim(FULLSTOP)) {
        this.eat(Delim);
        name += '.' + this.consume(Ident);
    }

    return {
        type: 'Layer',
        loc: this.getLocation(tokenStart, this.tokenStart),
        name
    };
}

export function generate(node) {
    this.tokenize(node.name);
}
