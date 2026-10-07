import { Comma } from '../../tokenizer/index.js';

export const name = 'LayerList';
export const structure = {
    children: [[
        'Layer'
    ]]
};

export function parse() {
    const children = this.createList();

    this.skipSC();

    while (!this.eof) {
        children.push(this.Layer());

        if (this.lookupTypeNonSC(0) !== Comma) {
            break;
        }

        this.skipSC();
        this.next();
        this.skipSC();
    }

    return {
        type: 'LayerList',
        loc: this.getLocationFromList(children),
        children
    };
}

export function generate(node) {
    this.children(node, () => this.token(Comma, ','));
}
