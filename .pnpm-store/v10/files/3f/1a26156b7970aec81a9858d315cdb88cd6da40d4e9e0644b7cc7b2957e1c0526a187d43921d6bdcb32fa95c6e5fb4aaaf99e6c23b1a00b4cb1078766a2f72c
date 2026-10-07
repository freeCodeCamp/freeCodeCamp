'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'Number';
const structure = {
    value: String
};

function parse() {
    return {
        type: 'Number',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: this.consume(types.Number)
    };
}

function generate(node) {
    this.token(types.Number, node.value);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
