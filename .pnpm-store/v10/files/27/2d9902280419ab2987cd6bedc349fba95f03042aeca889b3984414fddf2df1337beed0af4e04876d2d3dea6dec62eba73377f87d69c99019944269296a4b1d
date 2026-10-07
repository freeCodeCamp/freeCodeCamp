'use strict';

const types = require('../../tokenizer/types.cjs');

const ASTERISK = 0x002A;        // U+002A ASTERISK (*)
const SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)


const name = 'Comment';
const structure = {
    value: String
};

function parse() {
    const start = this.tokenStart;
    let end = this.tokenEnd;

    this.eat(types.Comment);

    if ((end - start + 2) >= 2 &&
        this.charCodeAt(end - 2) === ASTERISK &&
        this.charCodeAt(end - 1) === SOLIDUS) {
        end -= 2;
    }

    return {
        type: 'Comment',
        loc: this.getLocation(start, this.tokenStart),
        value: this.substring(start + 2, end)
    };
}

function generate(node) {
    this.token(types.Comment, '/*' + node.value + '*/');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
