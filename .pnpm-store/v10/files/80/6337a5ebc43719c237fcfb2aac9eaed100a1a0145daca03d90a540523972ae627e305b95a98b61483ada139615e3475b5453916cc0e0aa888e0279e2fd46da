'use strict';

const types = require('../../tokenizer/types.cjs');

function consumeRaw() {
    return this.Raw(this.consumeUntilLeftCurlyBracketOrSemicolon, true);
}

function isDeclarationBlockAtrule() {
    for (let offset = 1, type; type = this.lookupType(offset); offset++) {
        if (type === types.RightCurlyBracket) {
            return true;
        }

        if (type === types.LeftCurlyBracket ||
            type === types.AtKeyword) {
            return false;
        }
    }

    return false;
}


const name = 'Atrule';
const walkContext = 'atrule';
const structure = {
    name: String,
    prelude: ['AtrulePrelude', 'Raw', null],
    block: ['Block', null]
};

function parse(isDeclaration = false) {
    const start = this.tokenStart;
    let name;
    let nameLowerCase;
    let prelude = null;
    let block = null;

    this.eat(types.AtKeyword);

    name = this.substrToCursor(start + 1);
    nameLowerCase = name.toLowerCase();
    this.skipSC();

    // parse prelude
    if (this.eof === false &&
        this.tokenType !== types.LeftCurlyBracket &&
        this.tokenType !== types.Semicolon) {
        if (this.parseAtrulePrelude) {
            prelude = this.parseWithFallback(this.AtrulePrelude.bind(this, name, isDeclaration), consumeRaw);
        } else {
            prelude = consumeRaw.call(this, this.tokenIndex);
        }

        this.skipSC();
    }

    switch (this.tokenType) {
        case types.Semicolon:
            this.next();
            break;

        case types.LeftCurlyBracket:
            if (hasOwnProperty.call(this.atrule, nameLowerCase) &&
                typeof this.atrule[nameLowerCase].block === 'function') {
                block = this.atrule[nameLowerCase].block.call(this, isDeclaration);
            } else {
                // TODO: should consume block content as Raw?
                block = this.Block(isDeclarationBlockAtrule.call(this));
            }

            break;
    }

    return {
        type: 'Atrule',
        loc: this.getLocation(start, this.tokenStart),
        name,
        prelude,
        block
    };
}

function generate(node) {
    this.token(types.AtKeyword, '@' + node.name);

    if (node.prelude !== null) {
        this.node(node.prelude);
    }

    if (node.block) {
        this.node(node.block);
    } else {
        this.token(types.Semicolon, ';');
    }
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
