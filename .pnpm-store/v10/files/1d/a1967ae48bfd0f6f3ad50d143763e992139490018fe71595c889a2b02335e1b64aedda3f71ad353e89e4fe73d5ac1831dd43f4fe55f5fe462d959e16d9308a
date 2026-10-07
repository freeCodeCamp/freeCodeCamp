'use strict';

const types = require('../../tokenizer/types.cjs');

const AMPERSAND = 0x0026;       // U+0026 AMPERSAND (&)

function consumeRaw() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
}

const name = 'DeclarationList';
const structure = {
    children: [[
        'Declaration',
        'Atrule',
        'Rule'
    ]]
};

function parse() {
    const children = this.createList();

    while (!this.eof) {
        switch (this.tokenType) {
            case types.WhiteSpace:
            case types.Comment:
            case types.Semicolon:
                this.next();
                break;

            case types.AtKeyword:
                children.push(this.parseWithFallback(this.Atrule.bind(this, true), consumeRaw));
                break;

            default:
                if (this.isDelim(AMPERSAND))  {
                    children.push(this.parseWithFallback(this.Rule, consumeRaw));
                } else {
                    children.push(this.parseWithFallback(this.Declaration, consumeRaw));
                }
        }
    }

    return {
        type: 'DeclarationList',
        loc: this.getLocationFromList(children),
        children
    };
}

function generate(node) {
    this.children(node, prev => {
        if (prev.type === 'Declaration') {
            this.token(types.Semicolon, ';');
        }
    });
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
