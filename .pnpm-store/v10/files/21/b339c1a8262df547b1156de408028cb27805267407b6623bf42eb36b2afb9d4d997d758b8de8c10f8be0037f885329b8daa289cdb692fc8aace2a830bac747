import { String as StringToken } from '../../tokenizer/index.js';
import { decode, encode } from '../../utils/string.js';

export const name = 'String';
export const structure = {
    value: String
};

export function parse() {
    return {
        type: 'String',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: decode(this.consume(StringToken))
    };
}

export function generate(node) {
    this.token(StringToken, encode(node.value));
}
