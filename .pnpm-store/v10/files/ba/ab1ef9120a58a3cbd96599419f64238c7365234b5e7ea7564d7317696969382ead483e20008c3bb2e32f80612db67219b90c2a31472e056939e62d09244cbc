'use strict';

const types = require('../../tokenizer/types.cjs');

const AMPERSAND = 0x0026;       // U+0026 AMPERSAND (&)

function consumeRaw() {
    return this.Raw(null, true);
}
function consumeRule() {
    return this.parseWithFallback(this.Rule, consumeRaw);
}
function consumeRawDeclaration() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
}
function consumeDeclaration() {
    if (this.tokenType === types.Semicolon) {
        return consumeRawDeclaration.call(this, this.tokenIndex);
    }

    const node = this.parseWithFallback(this.Declaration, consumeRawDeclaration);

    if (this.tokenType === types.Semicolon) {
        this.next();
    }

    return node;
}

const name = 'Block';
const walkContext = 'block';
const structure = {
    children: [[
        'Atrule',
        'Rule',
        'Declaration'
    ]]
};

function parse(isStyleBlock) {
    const consumer = isStyleBlock ? consumeDeclaration : consumeRule;
    const start = this.tokenStart;
    let children = this.createList();

    this.eat(types.LeftCurlyBracket);

    scan:
    while (!this.eof) {
        switch (this.tokenType) {
            case types.RightCurlyBracket:
                break scan;

            case types.WhiteSpace:
            case types.Comment:
                this.next();
                break;

            case types.AtKeyword:
                children.push(this.parseWithFallback(this.Atrule.bind(this, isStyleBlock), consumeRaw));
                break;

            default:
                if (isStyleBlock && this.isDelim(AMPERSAND))  {
                    children.push(consumeRule.call(this));
                } else {
                    children.push(consumer.call(this));
                }
        }
    }

    if (!this.eof) {
        this.eat(types.RightCurlyBracket);
    }

    return {
        type: 'Block',
        loc: this.getLocation(start, this.tokenStart),
        children
    };
}

function generate(node) {
    this.token(types.LeftCurlyBracket, '{');
    this.children(node, prev => {
        if (prev.type === 'Declaration') {
            this.token(types.Semicolon, ';');
        }
    });
    this.token(types.RightCurlyBracket, '}');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
