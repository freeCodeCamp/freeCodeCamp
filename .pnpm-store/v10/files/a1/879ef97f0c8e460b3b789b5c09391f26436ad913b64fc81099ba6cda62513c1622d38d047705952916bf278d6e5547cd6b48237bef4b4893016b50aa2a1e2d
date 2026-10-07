import { WhiteSpace } from '../../tokenizer/index.js';

const SPACE = Object.freeze({
    type: 'WhiteSpace',
    loc: null,
    value: ' '
});

export const name = 'WhiteSpace';
export const structure = {
    value: String
};

export function parse() {
    this.eat(WhiteSpace);
    return SPACE;

    // return {
    //     type: 'WhiteSpace',
    //     loc: this.getLocation(this.tokenStart, this.tokenEnd),
    //     value: this.consume(WHITESPACE)
    // };
}

export function generate(node) {
    this.token(WhiteSpace, node.value);
}
