'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'PseudoClassSelector';
const walkContext = 'function';
const structure = {
    name: String,
    children: [['Raw'], null]
};

// : [ <ident> | <function-token> <any-value>? ) ]
function parse() {
    const start = this.tokenStart;
    let children = null;
    let name;
    let nameLowerCase;

    this.eat(types.Colon);

    if (this.tokenType === types.Function) {
        name = this.consumeFunctionName();
        nameLowerCase = name.toLowerCase();

        if (this.lookupNonWSType(0) == types.RightParenthesis) {
            children = this.createList();
        } else if (hasOwnProperty.call(this.pseudo, nameLowerCase)) {
            this.skipSC();
            children = this.pseudo[nameLowerCase].call(this);
            this.skipSC();
        } else {
            children = this.createList();
            children.push(
                this.Raw(null, false)
            );
        }

        this.eat(types.RightParenthesis);
    } else {
        name = this.consume(types.Ident);
    }

    return {
        type: 'PseudoClassSelector',
        loc: this.getLocation(start, this.tokenStart),
        name,
        children
    };
}

function generate(node) {
    this.token(types.Colon, ':');

    if (node.children === null) {
        this.token(types.Ident, node.name);
    } else {
        this.token(types.Function, node.name + '(');
        this.children(node);
        this.token(types.RightParenthesis, ')');
    }
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
exports.walkContext = walkContext;
