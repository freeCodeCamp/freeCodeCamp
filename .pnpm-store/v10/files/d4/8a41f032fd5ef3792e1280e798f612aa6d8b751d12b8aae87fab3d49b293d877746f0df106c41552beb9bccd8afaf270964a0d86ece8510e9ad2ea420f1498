'use strict';

const types = require('../../tokenizer/types.cjs');

// '#' ident
const xxx = 'XXX';
const name = 'Hash';
const structure = {
    value: String
};
function parse() {
    const start = this.tokenStart;

    this.eat(types.Hash);

    return {
        type: 'Hash',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start + 1)
    };
}
function generate(node) {
    this.token(types.Hash, '#' + node.value);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.xxx = xxx;
