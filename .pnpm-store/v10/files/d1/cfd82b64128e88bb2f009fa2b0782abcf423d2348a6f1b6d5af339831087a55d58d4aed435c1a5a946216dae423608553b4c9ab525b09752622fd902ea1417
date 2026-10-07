'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'CDO';
const structure = [];

function parse() {
    const start = this.tokenStart;

    this.eat(types.CDO); // <!--

    return {
        type: 'CDO',
        loc: this.getLocation(start, this.tokenStart)
    };
}

function generate() {
    this.token(types.CDO, '<!--');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
