'use strict';

const types = require('../../tokenizer/types.cjs');

const SOLIDUS = 0x002F;  // U+002F SOLIDUS (/)

// Media Queries Level 3 defines terms of <ratio> as a positive (not zero or negative)
// integers (see https://drafts.csswg.org/mediaqueries-3/#values)
// However, Media Queries Level 4 removes any definition of values
// (see https://drafts.csswg.org/mediaqueries-4/#values) and refers to
// CSS Values and Units for detail. In CSS Values and Units Level 4 a <ratio>
// definition was added (see https://drafts.csswg.org/css-values-4/#ratios) which
// defines ratio as "<number [0,∞]> [ / <number [0,∞]> ]?" and based on it
// any constrains on terms were removed. Parser also doesn't test numbers
// in any way to make possible for linting and fixing them by the tools using CSSTree.
// An additional syntax examination may be applied by a lexer.
function consumeTerm() {
    this.skipSC();

    switch (this.tokenType) {
        case types.Number:
            return this.Number();

        case types.Function:
            return this.Function(this.readSequence, this.scope.Value);

        default:
            this.error('Number of function is expected');
    }
}

const name = 'Ratio';
const structure = {
    left: ['Number', 'Function'],
    right: ['Number', 'Function', null]
};

// <number [0,∞]> [ / <number [0,∞]> ]?
function parse() {
    const start = this.tokenStart;
    const left = consumeTerm.call(this);
    let right = null;

    this.skipSC();
    if (this.isDelim(SOLIDUS)) {
        this.eatDelim(SOLIDUS);
        right = consumeTerm.call(this);
    }

    return {
        type: 'Ratio',
        loc: this.getLocation(start, this.tokenStart),
        left,
        right
    };
}

function generate(node) {
    this.node(node.left);
    this.token(types.Delim, '/');
    if (node.right) {
        this.node(node.right);
    } else {
        this.node(types.Number, 1);
    }
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
