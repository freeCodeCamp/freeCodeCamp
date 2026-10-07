'use strict';

const types = require('../../tokenizer/types.cjs');

const AMPERSAND = 0x0026;       // U+0026 AMPERSAND (&)

const name = 'NestingSelector';
const structure = {
};

function parse() {
    const start = this.tokenStart;

    this.eatDelim(AMPERSAND);

    return {
        type: 'NestingSelector',
        loc: this.getLocation(start, this.tokenStart)
    };
}

function generate() {
    this.token(types.Delim, '&');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
