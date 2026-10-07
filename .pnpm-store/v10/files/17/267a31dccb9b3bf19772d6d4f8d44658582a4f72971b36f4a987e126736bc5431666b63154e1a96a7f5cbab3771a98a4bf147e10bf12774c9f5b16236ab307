'use strict';

const types = require('../../tokenizer/types.cjs');

const ASTERISK = 0x002A;     // U+002A ASTERISK (*)
const VERTICALLINE = 0x007C; // U+007C VERTICAL LINE (|)

function eatIdentifierOrAsterisk() {
    if (this.tokenType !== types.Ident &&
        this.isDelim(ASTERISK) === false) {
        this.error('Identifier or asterisk is expected');
    }

    this.next();
}

const name = 'TypeSelector';
const structure = {
    name: String
};

// ident
// ident|ident
// ident|*
// *
// *|ident
// *|*
// |ident
// |*
function parse() {
    const start = this.tokenStart;

    if (this.isDelim(VERTICALLINE)) {
        this.next();
        eatIdentifierOrAsterisk.call(this);
    } else {
        eatIdentifierOrAsterisk.call(this);

        if (this.isDelim(VERTICALLINE)) {
            this.next();
            eatIdentifierOrAsterisk.call(this);
        }
    }

    return {
        type: 'TypeSelector',
        loc: this.getLocation(start, this.tokenStart),
        name: this.substrToCursor(start)
    };
}

function generate(node) {
    this.tokenize(node.name);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
