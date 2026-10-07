'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'CDC';
const structure = [];

function parse() {
    const start = this.tokenStart;

    this.eat(types.CDC); // -->

    return {
        type: 'CDC',
        loc: this.getLocation(start, this.tokenStart)
    };
}

function generate() {
    this.token(types.CDC, '-->');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
