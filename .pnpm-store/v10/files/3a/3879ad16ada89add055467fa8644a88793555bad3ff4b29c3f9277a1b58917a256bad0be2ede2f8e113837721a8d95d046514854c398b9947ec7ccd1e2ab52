import {
    Ident,
    LeftParenthesis,
    RightParenthesis
} from '../../tokenizer/index.js';

export const name = 'Scope';
export const structure = {
    root: ['SelectorList', 'Raw', null],
    limit: ['SelectorList', 'Raw', null]
};

export function parse() {
    let root = null;
    let limit = null;

    this.skipSC();

    const startOffset = this.tokenStart;
    if (this.tokenType === LeftParenthesis) {
        this.next();
        this.skipSC();
        root = this.parseWithFallback(
            this.SelectorList,
            () => this.Raw(false, true)
        );
        this.skipSC();
        this.eat(RightParenthesis);
    }

    if (this.lookupNonWSType(0) === Ident) {
        this.skipSC();
        this.eatIdent('to');
        this.skipSC();
        this.eat(LeftParenthesis);
        this.skipSC();
        limit = this.parseWithFallback(
            this.SelectorList,
            () => this.Raw(false, true)
        );
        this.skipSC();
        this.eat(RightParenthesis);
    }

    return {
        type: 'Scope',
        loc: this.getLocation(startOffset, this.tokenStart),
        root,
        limit
    };
}

export function generate(node) {
    if (node.root) {
        this.token(LeftParenthesis, '(');
        this.node(node.root);
        this.token(RightParenthesis, ')');
    }

    if (node.limit) {
        this.token(Ident, 'to');
        this.token(LeftParenthesis, '(');
        this.node(node.limit);
        this.token(RightParenthesis, ')');
    }
}
