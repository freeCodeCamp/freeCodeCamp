'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'MediaQueryList';
const structure = {
    children: [[
        'MediaQuery'
    ]]
};

function parse() {
    const children = this.createList();

    this.skipSC();

    while (!this.eof) {
        children.push(this.MediaQuery());

        if (this.tokenType !== types.Comma) {
            break;
        }

        this.next();
    }

    return {
        type: 'MediaQueryList',
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
