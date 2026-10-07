import {
    Ident,
    Number,
    Dimension,
    Function as FunctionToken,
    LeftParenthesis,
    RightParenthesis,
    Colon,
    Delim
} from '../../tokenizer/index.js';

const SOLIDUS = 0x002F;  // U+002F SOLIDUS (/)

export const name = 'Feature';
export const structure = {
    kind: String,
    name: String,
    value: ['Identifier', 'Number', 'Dimension', 'Ratio', 'Function', null]
};

export function parse(kind) {
    const start = this.tokenStart;
    let name;
    let value = null;

    this.eat(LeftParenthesis);
    this.skipSC();

    name = this.consume(Ident);
    this.skipSC();

    if (this.tokenType !== RightParenthesis) {
        this.eat(Colon);
        this.skipSC();

        switch (this.tokenType) {
            case Number:
                if (this.lookupNonWSType(1) === Delim) {
                    value = this.Ratio();
                } else {
                    value = this.Number();
                }

                break;

            case Dimension:
                value = this.Dimension();
                break;

            case Ident:
                value = this.Identifier();
                break;

            case FunctionToken:
                value = this.parseWithFallback(
                    () => {
                        const res = this.Function(this.readSequence, this.scope.Value);

                        this.skipSC();

                        if (this.isDelim(SOLIDUS)) {
                            this.error();
                        }

                        return res;
                    },
                    () => {
                        return this.Ratio();
                    }
                );
                break;

            default:
                this.error('Number, dimension, ratio or identifier is expected');
        }

        this.skipSC();
    }

    if (!this.eof) {
        this.eat(RightParenthesis);
    }

    return {
        type: 'Feature',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        name,
        value
    };
}

export function generate(node) {
    this.token(LeftParenthesis, '(');
    this.token(Ident, node.name);

    if (node.value !== null) {
        this.token(Colon, ':');
        this.node(node.value);
    }

    this.token(RightParenthesis, ')');
}
