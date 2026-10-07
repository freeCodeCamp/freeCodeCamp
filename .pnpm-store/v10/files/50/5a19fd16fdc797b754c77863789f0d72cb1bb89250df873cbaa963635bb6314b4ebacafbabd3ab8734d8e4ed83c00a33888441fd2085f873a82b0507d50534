import { Comma } from '../../tokenizer/index.js';

export const name = 'MediaQueryList';
export const structure = {
    children: [[
        'MediaQuery'
    ]]
};

export function parse() {
    const children = this.createList();

    this.skipSC();

    while (!this.eof) {
        children.push(this.MediaQuery());

        if (this.tokenType !== Comma) {
            break;
        }

        this.next();
    }

    return {
        type: 'MediaQueryList',
        loc: this.getLocationFromList(children),
        children
    };
}

export function generate(node) {
    this.children(node, () => this.token(Comma, ','));
}
