import {
    LeftParenthesis,
    RightParenthesis
} from '../../tokenizer/index.js';

export const name = 'SupportsDeclaration';
export const structure = {
    declaration: 'Declaration'
};

export function parse() {
    const start = this.tokenStart;

    this.eat(LeftParenthesis);
    this.skipSC();

    const declaration = this.Declaration();

    if (!this.eof) {
        this.eat(RightParenthesis);
    }

    return {
        type: 'SupportsDeclaration',
        loc: this.getLocation(start, this.tokenStart),
        declaration
    };
}

export function generate(node) {
    this.token(LeftParenthesis, '(');
    this.node(node.declaration);
    this.token(RightParenthesis, ')');
}
