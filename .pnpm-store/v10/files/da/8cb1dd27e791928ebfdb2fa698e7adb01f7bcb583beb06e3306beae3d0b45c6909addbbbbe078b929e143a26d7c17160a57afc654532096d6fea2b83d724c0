import {
    Delim,
    LeftSquareBracket,
    RightSquareBracket
} from '../../tokenizer/index.js';

export const name = 'Brackets';
export const structure = {
    children: [[]]
};

export function parse(readSequence, recognizer) {
    const start = this.tokenStart;
    let children = null;

    this.eat(LeftSquareBracket);

    children = readSequence.call(this, recognizer);

    if (!this.eof) {
        this.eat(RightSquareBracket);
    }

    return {
        type: 'Brackets',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}

export function generate(node) {
    this.token(Delim, '[');
    this.children(node);
    this.token(Delim, ']');
}
