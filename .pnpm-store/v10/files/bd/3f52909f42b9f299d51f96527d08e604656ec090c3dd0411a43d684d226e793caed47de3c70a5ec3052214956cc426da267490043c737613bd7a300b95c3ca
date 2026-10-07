import { Number as NumberToken } from '../../tokenizer/index.js';

export const name = 'Number';
export const structure = {
    value: String
};

export function parse() {
    return {
        type: 'Number',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: this.consume(NumberToken)
    };
}

export function generate(node) {
    this.token(NumberToken, node.value);
}
