'use strict';

const types = require('../../tokenizer/types.cjs');

const FULLSTOP = 0x002E; // U+002E FULL STOP (.)

// '.' ident
const name = 'ClassSelector';
const structure = {
    name: String
};

function parse() {
    this.eatDelim(FULLSTOP);

    return {
        type: 'ClassSelector',
        loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
        name: this.consume(types.Ident)
    };
}

function generate(node) {
    this.token(types.Delim, '.');
    this.token(types.Ident, node.name);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
