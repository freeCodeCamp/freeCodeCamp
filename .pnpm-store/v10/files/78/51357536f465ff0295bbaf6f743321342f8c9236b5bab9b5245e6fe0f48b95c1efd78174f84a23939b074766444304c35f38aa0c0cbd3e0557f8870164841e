'use strict';

const types = require('../../tokenizer/types.cjs');

const SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)
const LESSTHANSIGN = 0x003C;    // U+003C LESS-THAN SIGN (<)
const EQUALSSIGN = 0x003D;      // U+003D EQUALS SIGN (=)
const GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)

const name = 'FeatureRange';
const structure = {
    kind: String,
    left: ['Identifier', 'Number', 'Dimension', 'Ratio', 'Function'],
    leftComparison: String,
    middle: ['Identifier', 'Number', 'Dimension', 'Ratio', 'Function'],
    rightComparison: [String, null],
    right: ['Identifier', 'Number', 'Dimension', 'Ratio', 'Function', null]
};

function readTerm() {
    this.skipSC();

    switch (this.tokenType) {
        case types.Number:
            if (this.isDelim(SOLIDUS, this.lookupOffsetNonSC(1))) {
                return this.Ratio();
            } else {
                return this.Number();
            }

        case types.Dimension:
            return this.Dimension();

        case types.Ident:
            return this.Identifier();

        case types.Function:
            return this.parseWithFallback(
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

        default:
            this.error('Number, dimension, ratio or identifier is expected');
    }
}

function readComparison(expectColon) {
    this.skipSC();

    if (this.isDelim(LESSTHANSIGN) ||
        this.isDelim(GREATERTHANSIGN)) {
        const value = this.source[this.tokenStart];

        this.next();

        if (this.isDelim(EQUALSSIGN)) {
            this.next();
            return value + '=';
        }

        return value;
    }

    if (this.isDelim(EQUALSSIGN)) {
        return '=';
    }

    this.error(`Expected ${expectColon ? '":", ' : ''}"<", ">", "=" or ")"`);
}

function parse(kind = 'unknown') {
    const start = this.tokenStart;

    this.skipSC();
    this.eat(types.LeftParenthesis);

    const left = readTerm.call(this);
    const leftComparison = readComparison.call(this, left.type === 'Identifier');
    const middle = readTerm.call(this);
    let rightComparison = null;
    let right = null;

    if (this.lookupNonWSType(0) !== types.RightParenthesis) {
        rightComparison = readComparison.call(this);
        right = readTerm.call(this);
    }

    this.skipSC();
    this.eat(types.RightParenthesis);

    return {
        type: 'FeatureRange',
        loc: this.getLocation(start, this.tokenStart),
        kind,
        left,
        leftComparison,
        middle,
        rightComparison,
        right
    };
}

function generate(node) {
    this.token(types.LeftParenthesis, '(');
    this.node(node.left);
    this.tokenize(node.leftComparison);
    this.node(node.middle);

    if (node.right) {
        this.tokenize(node.rightComparison);
        this.node(node.right);
    }

    this.token(types.RightParenthesis, ')');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
