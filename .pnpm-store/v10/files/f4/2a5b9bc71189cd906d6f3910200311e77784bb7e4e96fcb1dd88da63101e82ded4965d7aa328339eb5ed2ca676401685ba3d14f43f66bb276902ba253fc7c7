import { Dimension } from '../../tokenizer/index.js';

export const name = 'Dimension';
export const structure = {
    value: String,
    unit: String
};

export function parse() {
    const start = this.tokenStart;
    const value = this.consumeNumber(Dimension);

    return {
        type: 'Dimension',
        loc: this.getLocation(start, this.tokenStart),
        value,
        unit: this.substring(start + value.length, this.tokenStart)
    };
}

export function generate(node) {
    this.token(Dimension, node.value + node.unit);
}
