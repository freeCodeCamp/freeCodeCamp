'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'IdSelector';
const structure = {
    name: String
};

function parse() {
    const start = this.tokenStart;

    // TODO: check value is an ident
    this.eat(types.Hash);

    return {
        type: 'IdSelector',
        loc: this.getLocation(start, this.tokenStart),
        name: this.substrToCursor(start + 1)
    };
}

function generate(node) {
    // Using Delim instead of Hash is a hack to avoid for a whitespace between ident and id-selector
    // in safe mode (e.g. "a#id"), because IE11 doesn't allow a sequence <ident-token> <hash-token>
    // without a whitespace in values (e.g. "1px solid#000")
    this.token(types.Delim, '#' + node.name);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
