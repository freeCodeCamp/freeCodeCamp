'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'LayerList';
const structure = {
    children: [[
        'Layer'
    ]]
};

function parse() {
    const children = this.createList();

    this.skipSC();

    while (!this.eof) {
        children.push(this.Layer());

        if (this.lookupTypeNonSC(0) !== types.Comma) {
            break;
        }

        this.skipSC();
        this.next();
        this.skipSC();
    }

    return {
        type: 'LayerList',
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
