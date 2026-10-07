export const name = 'Selector';
export const structure = {
    children: [[
        'TypeSelector',
        'IdSelector',
        'ClassSelector',
        'AttributeSelector',
        'PseudoClassSelector',
        'PseudoElementSelector',
        'Combinator'
    ]]
};

export function parse() {
    const children = this.readSequence(this.scope.Selector);

    // nothing were consumed
    if (this.getFirstListNode(children) === null) {
        this.error('Selector is expected');
    }

    return {
        type: 'Selector',
        loc: this.getLocationFromList(children),
        children
    };
}

export function generate(node) {
    this.children(node);
}
