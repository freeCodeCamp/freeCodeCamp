'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'AtrulePrelude';
const walkContext = 'atrulePrelude';
const structure = {
    children: [[]]
};

function parse(name) {
    let children = null;

    if (name !== null) {
        name = name.toLowerCase();
    }

    this.skipSC();

    if (hasOwnProperty.call(this.atrule, name) &&
        typeof this.atrule[name].prelude === 'function') {
        // custom consumer
        children = this.atrule[name].prelude.call(this);
    } else {
        // default consumer
        children = this.readSequence(this.scope.AtrulePrelude);
    }

    this.skipSC();

    if (this.eof !== true &&
        this.tokenType !== types.LeftCurlyBracket &&
        this.tokenType !== types.Semicolon) {
        this.error('Semicolon or block is expected');
    }

    return {
        type: 'AtrulePrelude',
        loc: this.getLocationFromList(children),
        children
    };
}

function generate(node) {
    this.children(node);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
