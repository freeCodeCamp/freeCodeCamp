import {
    AtKeyword,
    Semicolon,
    LeftCurlyBracket,
    RightCurlyBracket
} from '../../tokenizer/index.js';

function consumeRaw() {
    return this.Raw(this.consumeUntilLeftCurlyBracketOrSemicolon, true);
}

function isDeclarationBlockAtrule() {
    for (let offset = 1, type; type = this.lookupType(offset); offset++) {
        if (type === RightCurlyBracket) {
            return true;
        }

        if (type === LeftCurlyBracket ||
            type === AtKeyword) {
            return false;
        }
    }

    return false;
}


export const name = 'Atrule';
export const walkContext = 'atrule';
export const structure = {
    name: String,
    prelude: ['AtrulePrelude', 'Raw', null],
    block: ['Block', null]
};

export function parse(isDeclaration = false) {
    const start = this.tokenStart;
    let name;
    let nameLowerCase;
    let prelude = null;
    let block = null;

    this.eat(AtKeyword);

    name = this.substrToCursor(start + 1);
    nameLowerCase = name.toLowerCase();
    this.skipSC();

    // parse prelude
    if (this.eof === false &&
        this.tokenType !== LeftCurlyBracket &&
        this.tokenType !== Semicolon) {
        if (this.parseAtrulePrelude) {
            prelude = this.parseWithFallback(this.AtrulePrelude.bind(this, name, isDeclaration), consumeRaw);
        } else {
            prelude = consumeRaw.call(this, this.tokenIndex);
        }

        this.skipSC();
    }

    switch (this.tokenType) {
        case Semicolon:
            this.next();
            break;

        case LeftCurlyBracket:
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

export function generate(node) {
    this.token(AtKeyword, '@' + node.name);

    if (node.prelude !== null) {
        this.node(node.prelude);
    }

    if (node.block) {
        this.node(node.block);
    } else {
        this.token(Semicolon, ';');
    }
}
