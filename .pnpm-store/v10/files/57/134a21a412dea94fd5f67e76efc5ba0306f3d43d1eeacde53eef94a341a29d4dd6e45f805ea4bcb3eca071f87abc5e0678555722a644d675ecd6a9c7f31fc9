'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'Identifier';
const structure = {
    name: String
};

function parse() {
    return {
        type: 'Identifier',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        name: this.consume(types.Ident)
    };
}

function generate(node) {
    this.token(types.Ident, node.name);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
