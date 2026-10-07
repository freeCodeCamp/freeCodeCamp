import {
    WhiteSpace,
    Comment,
    Semicolon,
    AtKeyword
} from '../../tokenizer/index.js';

const AMPERSAND = 0x0026;       // U+0026 AMPERSAND (&)

function consumeRaw() {
    return this.Raw(this.consumeUntilSemicolonIncluded, true);
}

export const name = 'DeclarationList';
export const structure = {
    children: [[
        'Declaration',
        'Atrule',
        'Rule'
    ]]
};

export function parse() {
    const children = this.createList();

    scan:
    while (!this.eof) {
        switch (this.tokenType) {
            case WhiteSpace:
            case Comment:
            case Semicolon:
                this.next();
                break;

            case AtKeyword:
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

export function generate(node) {
    this.children(node, prev => {
        if (prev.type === 'Declaration') {
            this.token(Semicolon, ';');
        }
    });
}

