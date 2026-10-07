'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'Nth';
const structure = {
    nth: ['AnPlusB', 'Identifier'],
    selector: ['SelectorList', null]
};

function parse() {
    this.skipSC();

    const start = this.tokenStart;
    let end = start;
    let selector = null;
    let nth;

    if (this.lookupValue(0, 'odd') || this.lookupValue(0, 'even')) {
        nth = this.Identifier();
    } else {
        nth = this.AnPlusB();
    }

    end = this.tokenStart;
    this.skipSC();

    if (this.lookupValue(0, 'of')) {
        this.next();

        selector = this.SelectorList();
        end = this.tokenStart;
    }

    return {
        type: 'Nth',
        loc: this.getLocation(start, end),
        nth,
        selector
    };
}

function generate(node) {
    this.node(node.nth);
    if (node.selector !== null) {
        this.token(types.Ident, 'of');
        this.node(node.selector);
    }
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
