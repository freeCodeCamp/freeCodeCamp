import { Hash } from '../../tokenizer/index.js';

// '#' ident
export const xxx = 'XXX';
export const name = 'Hash';
export const structure = {
    value: String
};
export function parse() {
    const start = this.tokenStart;

    this.eat(Hash);

    return {
        type: 'Hash',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start + 1)
    };
}
export function generate(node) {
    this.token(Hash, '#' + node.value);
}

