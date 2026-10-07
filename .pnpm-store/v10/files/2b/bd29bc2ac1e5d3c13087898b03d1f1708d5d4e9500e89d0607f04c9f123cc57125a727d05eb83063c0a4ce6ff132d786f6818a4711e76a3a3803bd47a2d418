import { WhiteSpace } from '../../tokenizer/index.js';

function getOffsetExcludeWS() {
    if (this.tokenIndex > 0) {
        if (this.lookupType(-1) === WhiteSpace) {
            return this.tokenIndex > 1
                ? this.getTokenStart(this.tokenIndex - 1)
                : this.firstCharOffset;
        }
    }

    return this.tokenStart;
}

export const name = 'Raw';
export const structure = {
    value: String
};

export function parse(consumeUntil, excludeWhiteSpace) {
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

export function generate(node) {
    this.tokenize(node.value);
}
