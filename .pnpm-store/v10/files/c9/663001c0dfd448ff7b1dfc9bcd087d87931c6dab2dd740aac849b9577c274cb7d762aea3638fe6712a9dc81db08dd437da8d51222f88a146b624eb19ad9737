'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'SupportsDeclaration';
const structure = {
    declaration: 'Declaration'
};

function parse() {
    const start = this.tokenStart;

    this.eat(types.LeftParenthesis);
    this.skipSC();

    const declaration = this.Declaration();

    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }

    return {
        type: 'SupportsDeclaration',
        loc: this.getLocation(start, this.tokenStart),
        declaration
    };
}

function generate(node) {
    this.token(types.LeftParenthesis, '(');
    this.node(node.declaration);
    this.token(types.RightParenthesis, ')');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
