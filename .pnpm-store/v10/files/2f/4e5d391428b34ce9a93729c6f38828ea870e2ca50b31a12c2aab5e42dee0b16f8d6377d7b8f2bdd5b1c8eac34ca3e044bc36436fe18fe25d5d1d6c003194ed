'use strict';

const types = require('../../tokenizer/types.cjs');

const SPACE = Object.freeze({
    type: 'WhiteSpace',
    loc: null,
    value: ' '
});

const name = 'WhiteSpace';
const structure = {
    value: String
};

function parse() {
    this.eat(types.WhiteSpace);
    return SPACE;

    // return {
    //     type: 'WhiteSpace',
    //     loc: this.getLocation(this.tokenStart, this.tokenEnd),
    //     value: this.consume(WHITESPACE)
    // };
}

function generate(node) {
    this.token(types.WhiteSpace, node.value);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
