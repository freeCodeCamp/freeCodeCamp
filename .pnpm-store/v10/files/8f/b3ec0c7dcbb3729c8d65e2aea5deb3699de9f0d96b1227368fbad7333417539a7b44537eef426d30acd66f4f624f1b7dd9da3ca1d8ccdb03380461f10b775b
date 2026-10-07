'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'Scope';
const structure = {
    root: ['SelectorList', 'Raw', null],
    limit: ['SelectorList', 'Raw', null]
};

function parse() {
    let root = null;
    let limit = null;

    this.skipSC();

    const startOffset = this.tokenStart;
    if (this.tokenType === types.LeftParenthesis) {
        this.next();
        this.skipSC();
        root = this.parseWithFallback(
            this.SelectorList,
            () => this.Raw(false, true)
        );
        this.skipSC();
        this.eat(types.RightParenthesis);
    }

    if (this.lookupNonWSType(0) === types.Ident) {
        this.skipSC();
        this.eatIdent('to');
        this.skipSC();
        this.eat(types.LeftParenthesis);
        this.skipSC();
        limit = this.parseWithFallback(
            this.SelectorList,
            () => this.Raw(false, true)
        );
        this.skipSC();
        this.eat(types.RightParenthesis);
    }

    return {
        type: 'Scope',
        loc: this.getLocation(startOffset, this.tokenStart),
        root,
        limit
    };
}

function generate(node) {
    if (node.root) {
        this.token(types.LeftParenthesis, '(');
        this.node(node.root);
        this.token(types.RightParenthesis, ')');
    }

    if (node.limit) {
        this.token(types.Ident, 'to');
        this.token(types.LeftParenthesis, '(');
        this.node(node.limit);
        this.token(types.RightParenthesis, ')');
    }
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
