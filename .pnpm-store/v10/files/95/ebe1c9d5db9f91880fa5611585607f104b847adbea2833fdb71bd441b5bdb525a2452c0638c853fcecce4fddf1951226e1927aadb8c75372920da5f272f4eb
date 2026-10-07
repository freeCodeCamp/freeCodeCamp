import {
    Semicolon,
    LeftCurlyBracket
} from '../../tokenizer/index.js';

export const name = 'AtrulePrelude';
export const walkContext = 'atrulePrelude';
export const structure = {
    children: [[]]
};

export function parse(name) {
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
        this.tokenType !== LeftCurlyBracket &&
        this.tokenType !== Semicolon) {
        this.error('Semicolon or block is expected');
    }

    return {
        type: 'AtrulePrelude',
        loc: this.getLocationFromList(children),
        children
    };
}

export function generate(node) {
    this.children(node);
}
