'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'Brackets';
const structure = {
    children: [[]]
};

function parse(readSequence, recognizer) {
    const start = this.tokenStart;
    let children = null;

    this.eat(types.LeftSquareBracket);

    children = readSequence.call(this, recognizer);

    if (!this.eof) {
        this.eat(types.RightSquareBracket);
    }

    return {
        type: 'Brackets',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}

function generate(node) {
    this.token(types.Delim, '[');
    this.children(node);
    this.token(types.Delim, ']');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
