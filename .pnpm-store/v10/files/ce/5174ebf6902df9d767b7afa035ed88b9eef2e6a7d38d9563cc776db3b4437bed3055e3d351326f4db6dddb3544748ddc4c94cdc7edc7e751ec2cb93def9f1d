'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'Dimension';
const structure = {
    value: String,
    unit: String
};

function parse() {
    const start = this.tokenStart;
    const value = this.consumeNumber(types.Dimension);

    return {
        type: 'Dimension',
        loc: this.getLocation(start, this.tokenStart),
        value,
        unit: this.substring(start + value.length, this.tokenStart)
    };
}

function generate(node) {
    this.token(types.Dimension, node.value + node.unit);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
