'use strict';

const string = require('../../utils/string.cjs');
const types = require('../../tokenizer/types.cjs');

const name = 'String';
const structure = {
    value: String
};

function parse() {
    return {
        type: 'String',
        loc: this.getLocation(this.tokenStart, this.tokenEnd),
        value: string.decode(this.consume(types.String))
    };
}

function generate(node) {
    this.token(types.String, string.encode(node.value));
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
