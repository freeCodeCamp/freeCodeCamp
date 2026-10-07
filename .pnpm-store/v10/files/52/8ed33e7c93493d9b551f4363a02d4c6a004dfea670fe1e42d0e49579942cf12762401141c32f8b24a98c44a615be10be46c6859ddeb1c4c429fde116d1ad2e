import {
    LeftParenthesis,
    RightParenthesis
} from '../../tokenizer/index.js';

export const name = 'Parentheses';
export const structure = {
    children: [[]]
};

export function parse(readSequence, recognizer) {
    const start = this.tokenStart;
    let children = null;

    this.eat(LeftParenthesis);

    children = readSequence.call(this, recognizer);

    if (!this.eof) {
        this.eat(RightParenthesis);
    }

    return {
        type: 'Parentheses',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}

export function generate(node) {
    this.token(LeftParenthesis, '(');
    this.children(node);
    this.token(RightParenthesis, ')');
}
