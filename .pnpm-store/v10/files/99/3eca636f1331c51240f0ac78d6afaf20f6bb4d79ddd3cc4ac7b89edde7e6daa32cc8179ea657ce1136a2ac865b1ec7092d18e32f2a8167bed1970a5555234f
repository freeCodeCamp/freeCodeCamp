'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'SelectorList';
const walkContext = 'selector';
const structure = {
    children: [[
        'Selector',
        'Raw'
    ]]
};

function parse() {
    const children = this.createList();

    while (!this.eof) {
        children.push(this.Selector());

        if (this.tokenType === types.Comma) {
            this.next();
            continue;
        }

        break;
    }

    return {
        type: 'SelectorList',
        loc: this.getLocationFromList(children),
        children
    };
}

function generate(node) {
    this.children(node, () => this.token(types.Comma, ','));
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
