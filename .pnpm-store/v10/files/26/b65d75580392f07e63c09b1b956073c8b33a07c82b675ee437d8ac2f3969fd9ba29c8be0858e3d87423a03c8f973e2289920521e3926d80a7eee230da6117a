'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'Function';
const walkContext = 'function';
const structure = {
    name: String,
    children: [[]]
};

// <function-token> <sequence> )
function parse(readSequence, recognizer) {
    const start = this.tokenStart;
    const name = this.consumeFunctionName();
    const nameLowerCase = name.toLowerCase();
    let children;

    children = recognizer.hasOwnProperty(nameLowerCase)
        ? recognizer[nameLowerCase].call(this, recognizer)
        : readSequence.call(this, recognizer);

    if (!this.eof) {
        this.eat(types.RightParenthesis);
    }

    return {
        type: 'Function',
        loc: this.getLocation(start, this.tokenStart),
        name,
        children
    };
}

function generate(node) {
    this.token(types.Function, node.name + '(');
    this.children(node);
    this.token(types.RightParenthesis, ')');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
