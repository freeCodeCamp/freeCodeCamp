import { Ident } from '../../tokenizer/index.js';

const ASTERISK = 0x002A;     // U+002A ASTERISK (*)
const VERTICALLINE = 0x007C; // U+007C VERTICAL LINE (|)

function eatIdentifierOrAsterisk() {
    if (this.tokenType !== Ident &&
        this.isDelim(ASTERISK) === false) {
        this.error('Identifier or asterisk is expected');
    }

    this.next();
}

export const name = 'TypeSelector';
export const structure = {
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
export function parse() {
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

export function generate(node) {
    this.tokenize(node.name);
}
