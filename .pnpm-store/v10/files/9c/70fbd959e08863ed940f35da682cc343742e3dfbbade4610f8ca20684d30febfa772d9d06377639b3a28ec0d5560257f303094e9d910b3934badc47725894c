'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'Percentage';
const structure = {
    value: String
};

function parse() {
    return {
        type: 'Percentage',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: this.consumeNumber(types.Percentage)
    };
}

function generate(node) {
    this.token(types.Percentage, node.value + '%');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
