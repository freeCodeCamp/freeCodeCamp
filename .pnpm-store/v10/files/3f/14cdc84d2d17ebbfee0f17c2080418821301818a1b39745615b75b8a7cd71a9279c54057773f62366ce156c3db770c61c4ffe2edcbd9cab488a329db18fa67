'use strict';

const types = require('../../tokenizer/types.cjs');

const SOLIDUS = 0x002F;  // U+002F SOLIDUS (/)

const name = 'Feature';
const structure = {
    kind: String,
    name: String,
    value: ['Identifier', 'Number', 'Dimension', 'Ratio', 'Function', null]
};

function parse(kind) {
    const start = this.tokenStart;
    let name;
    let value = null;

    this.eat(types.LeftParenthesis);
    this.skipSC();

    name = this.consume(types.Ident);
    this.skipSC();

    if (this.tokenType !== types.RightParenthesis) {
        this.eat(types.Colon);
        this.skipSC();

        switch (this.tokenType) {
            case types.Number:
                if (this.lookupNonWSType(1) === types.Delim) {
                    value = this.Ratio();
                } else {
                    value = this.Number();
                }

                break;

            case types.Dimension:
                value = this.Dimension();
                break;

            case types.Ident:
                value = this.Identifier();
                break;

            case types.Function:
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
        this.eat(types.RightParenthesis);
    }

    return {
        type: 'Feature',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        name,
        value
    };
}

function generate(node) {
    this.token(types.LeftParenthesis, '(');
    this.token(types.Ident, node.name);

    if (node.value !== null) {
        this.token(types.Colon, ':');
        this.node(node.value);
    }

    this.token(types.RightParenthesis, ')');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
