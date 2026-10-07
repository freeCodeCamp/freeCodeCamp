import { Percentage } from '../../tokenizer/index.js';

export const name = 'Percentage';
export const structure = {
    value: String
};

export function parse() {
    return {
        type: 'Percentage',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: this.consumeNumber(Percentage)
    };
}

export function generate(node) {
    this.token(Percentage, node.value + '%');
}
