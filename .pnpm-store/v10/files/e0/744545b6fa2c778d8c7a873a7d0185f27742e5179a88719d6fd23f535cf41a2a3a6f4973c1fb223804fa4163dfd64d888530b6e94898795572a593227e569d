'use strict';

// '/' | '*' | ',' | ':' | '+' | '-'
const name = 'Operator';
const structure = {
    value: String
};

function parse() {
    const start = this.tokenStart;

    this.next();

    return {
        type: 'Operator',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substrToCursor(start)
    };
}

function generate(node) {
    this.tokenize(node.value);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
