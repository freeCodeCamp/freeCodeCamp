import { Comma } from '../../tokenizer/index.js';

export const name = 'SelectorList';
export const walkContext = 'selector';
export const structure = {
    children: [[
        'Selector',
        'Raw'
    ]]
};

export function parse() {
    const children = this.createList();

    while (!this.eof) {
        children.push(this.Selector());

        if (this.tokenType === Comma) {
            this.next();
            continue;
        }

        break;
    }

    return {
        type: 'SelectorList',
        loc: this.getLocationFromList(children),
        children
    };
}

export function generate(node) {
    this.children(node, () => this.token(Comma, ','));
}
