import { Ident } from '../../tokenizer/index.js';

export const name = 'Identifier';
export const structure = {
    name: String
};

export function parse() {
    return {
        type: 'Identifier',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        name: this.consume(Ident)
    };
}

export function generate(node) {
    this.token(Ident, node.name);
}
