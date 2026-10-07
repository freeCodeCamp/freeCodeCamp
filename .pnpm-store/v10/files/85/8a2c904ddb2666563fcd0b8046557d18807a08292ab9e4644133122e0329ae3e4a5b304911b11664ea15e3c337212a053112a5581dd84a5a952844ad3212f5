import {
    Ident,
    Number,
    Dimension,
    Function as FunctionToken,
    LeftParenthesis,
    RightParenthesis
} from '../../tokenizer/index.js';

const SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)
const LESSTHANSIGN = 0x003C;    // U+003C LESS-THAN SIGN (<)
const EQUALSSIGN = 0x003D;      // U+003D EQUALS SIGN (=)
const GREATERTHANSIGN = 0x003E; // U+003E GREATER-THAN SIGN (>)

export const name = 'FeatureRange';
export const structure = {
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
        case Number:
            if (this.isDelim(SOLIDUS, this.lookupOffsetNonSC(1))) {
                return this.Ratio();
            } else {
                return this.Number();
            }

        case Dimension:
            return this.Dimension();

        case Ident:
            return this.Identifier();

        case FunctionToken:
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

export function parse(kind = 'unknown') {
    const start = this.tokenStart;

    this.skipSC();
    this.eat(LeftParenthesis);

    const left = readTerm.call(this);
    const leftComparison = readComparison.call(this, left.type === 'Identifier');
    const middle = readTerm.call(this);
    let rightComparison = null;
    let right = null;

    if (this.lookupNonWSType(0) !== RightParenthesis) {
        rightComparison = readComparison.call(this);
        right = readTerm.call(this);
    }

    this.skipSC();
    this.eat(RightParenthesis);

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

export function generate(node) {
    this.token(LeftParenthesis, '(');
    this.node(node.left);
    this.tokenize(node.leftComparison);
    this.node(node.middle);

    if (node.right) {
        this.tokenize(node.rightComparison);
        this.node(node.right);
    }

    this.token(RightParenthesis, ')');
}
