'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'Parentheses';
const structure = {
    children: [[]]
};

function parse(readSequence, recognizer) {
    const start = this.tokenStart;
    let children = null;

    this.eat(types.LeftParenthesis);

    children = readSequence.call(this, recognizer);

    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }

    return {
        type: 'Parentheses',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}

function generate(node) {
    this.token(types.LeftParenthesis, '(');
    this.children(node);
    this.token(types.RightParenthesis, ')');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
