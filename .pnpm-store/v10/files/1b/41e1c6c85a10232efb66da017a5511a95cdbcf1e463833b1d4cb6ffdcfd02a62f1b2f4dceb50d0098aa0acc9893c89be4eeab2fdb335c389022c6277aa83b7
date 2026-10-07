'use strict';

const types = require('../../tokenizer/types.cjs');

function getOffsetExcludeWS() {
    if (this.tokenIndex > 0) {
        if (this.lookupType(-1) === types.WhiteSpace) {
            return this.tokenIndex > 1
                ? this.getTokenStart(this.tokenIndex - 1)
                : this.firstCharOffset;
        }
    }

    return this.tokenStart;
}

const name = 'Raw';
const structure = {
    value: String
};

function parse(consumeUntil, excludeWhiteSpace) {
    const startOffset = this.getTokenStart(this.tokenIndex);
    let endOffset;

    this.skipUntilBalanced(this.tokenIndex, consumeUntil || this.consumeUntilBalanceEnd);

    if (excludeWhiteSpace && this.tokenStart > startOffset) {
        endOffset = getOffsetExcludeWS.call(this);
    } else {
        endOffset = this.tokenStart;
    }

    return {
        type: 'Raw',
        loc: this.getLocation(startOffset, endOffset),
        value: this.substring(startOffset, endOffset)
    };
}

function generate(node) {
    this.tokenize(node.value);
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
