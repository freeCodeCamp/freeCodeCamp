'use strict';

const name = 'Selector';
const structure = {
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

function parse() {
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

function generate(node) {
    this.children(node);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
