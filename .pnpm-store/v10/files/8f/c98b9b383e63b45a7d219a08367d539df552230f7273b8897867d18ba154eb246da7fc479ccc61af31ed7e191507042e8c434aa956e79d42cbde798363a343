'use strict';

const adoptBuffer = require('./adopt-buffer.cjs');
const utils = require('./utils.cjs');
const names = require('./names.cjs');
const types = require('./types.cjs');

const OFFSET_MASK = 0x00FFFFFF;
const TYPE_SHIFT = 24;
const BLOCK_OPEN_TOKEN = 1;
const BLOCK_CLOSE_TOKEN = 2;
const balancePair = new Uint8Array(32); // 32b of memory ought to be enough for anyone (any number of tokens)
balancePair[types.Function] = types.RightParenthesis;
balancePair[types.LeftParenthesis] = types.RightParenthesis;
balancePair[types.LeftSquareBracket] = types.RightSquareBracket;
balancePair[types.LeftCurlyBracket] = types.RightCurlyBracket;

const blockTokens = new Uint8Array(32);
blockTokens[types.Function] = BLOCK_OPEN_TOKEN;
blockTokens[types.LeftParenthesis] = BLOCK_OPEN_TOKEN;
blockTokens[types.LeftSquareBracket] = BLOCK_OPEN_TOKEN;
blockTokens[types.LeftCurlyBracket] = BLOCK_OPEN_TOKEN;
blockTokens[types.RightParenthesis] = BLOCK_CLOSE_TOKEN;
blockTokens[types.RightSquareBracket] = BLOCK_CLOSE_TOKEN;
blockTokens[types.RightCurlyBracket] = BLOCK_CLOSE_TOKEN;

function boundIndex(index, min, max) {
    return index < min ? min : index > max ? max : index;
}

class TokenStream {
    constructor(source, tokenize) {
        this.setSource(source, tokenize);
    }
    reset() {
        this.eof = false;
        this.tokenIndex = -1;
        this.tokenType = 0;
        this.tokenStart = this.firstCharOffset;
        this.tokenEnd = this.firstCharOffset;
    }
    setSource(source = '', tokenize = () => {}) {
        source = String(source || '');

        const sourceLength = source.length;
        const offsetAndType = adoptBuffer.adoptBuffer(this.offsetAndType, source.length + 1); // +1 because of eof-token
        const balance = adoptBuffer.adoptBuffer(this.balance, source.length + 1);
        let tokenCount = 0;
        let firstCharOffset = -1;
        let balanceCloseType = 0;
        let balanceStart = source.length;

        // capture buffers
        this.offsetAndType = null;
        this.balance = null;
        balance.fill(0);

        tokenize(source, (type, start, end) => {
            const index = tokenCount++;

            // type & offset
            offsetAndType[index] = (type << TYPE_SHIFT) | end;

            if (firstCharOffset === -1) {
                firstCharOffset = start;
            }

            // balance
            balance[index] = balanceStart;

            if (type === balanceCloseType) {
                const prevBalanceStart = balance[balanceStart];

                // set reference to balance end for a block opener
                balance[balanceStart] = index;

                // pop state
                balanceStart = prevBalanceStart;
                balanceCloseType = balancePair[offsetAndType[prevBalanceStart] >> TYPE_SHIFT];
            } else if (this.isBlockOpenerTokenType(type)) { // check for FunctionToken, <(-token>, <[-token> and <{-token>
                // push state
                balanceStart = index;
                balanceCloseType = balancePair[type];
            }
        });

        // finalize buffers
        offsetAndType[tokenCount] = (types.EOF << TYPE_SHIFT) | sourceLength; // <EOF-token>
        balance[tokenCount] = tokenCount; // prevents false positive balance match with any token

        // reverse references from balance start to end
        // tokens
        //   token:   a ( [ b c ] d e ) {
        //   index:   0 1 2 3 4 5 6 7 8 9
        // before
        //   balance: 0 8 5 2 2 2 1 1 1 0
        //            - > > < < < < < < -
        // after
        //   balance: 9 8 5 5 5 2 8 8 1 9
        //            > > > > > < > > < >
        for (let i = 0; i < tokenCount; i++) {
            const balanceStart = balance[i];

            if (balanceStart <= i) {
                const balanceEnd = balance[balanceStart];

                if (balanceEnd !== i) {
                    balance[i] = balanceEnd;
                }
            } else if (balanceStart > tokenCount) {
                balance[i] = tokenCount;
            }
        }

        // balance[0] = tokenCount;

        this.source = source;
        this.firstCharOffset = firstCharOffset === -1 ? 0 : firstCharOffset;
        this.tokenCount = tokenCount;
        this.offsetAndType = offsetAndType;
        this.balance = balance;

        this.reset();
        this.next();
    }

    lookupType(offset) {
        offset += this.tokenIndex;

        if (offset < this.tokenCount) {
            return this.offsetAndType[offset] >> TYPE_SHIFT;
        }

        return types.EOF;
    }
    lookupTypeNonSC(idx) {
        for (let offset = this.tokenIndex; offset < this.tokenCount; offset++) {
            const tokenType = this.offsetAndType[offset] >> TYPE_SHIFT;

            if (tokenType !== types.WhiteSpace && tokenType !== types.Comment) {
                if (idx-- === 0) {
                    return tokenType;
                }
            }
        }

        return types.EOF;
    }
    lookupOffset(offset) {
        offset += this.tokenIndex;

        if (offset < this.tokenCount) {
            return this.offsetAndType[offset - 1] & OFFSET_MASK;
        }

        return this.source.length;
    }
    lookupOffsetNonSC(idx) {
        for (let offset = this.tokenIndex; offset < this.tokenCount; offset++) {
            const tokenType = this.offsetAndType[offset] >> TYPE_SHIFT;

            if (tokenType !== types.WhiteSpace && tokenType !== types.Comment) {
                if (idx-- === 0) {
                    return offset - this.tokenIndex;
                }
            }
        }

        return types.EOF;
    }
    lookupValue(offset, referenceStr) {
        offset += this.tokenIndex;

        if (offset < this.tokenCount) {
            return utils.cmpStr(
                this.source,
                this.offsetAndType[offset - 1] & OFFSET_MASK,
                this.offsetAndType[offset] & OFFSET_MASK,
                referenceStr
            );
        }

        return false;
    }
    getTokenStart(tokenIndex) {
        if (tokenIndex === this.tokenIndex) {
            return this.tokenStart;
        }

        if (tokenIndex > 0) {
            return tokenIndex < this.tokenCount
                ? this.offsetAndType[tokenIndex - 1] & OFFSET_MASK
                : this.offsetAndType[this.tokenCount] & OFFSET_MASK;
        }

        return this.firstCharOffset;
    }
    getTokenEnd(tokenIndex) {
        if (tokenIndex === this.tokenIndex) {
            return this.tokenEnd;
        }

        return this.offsetAndType[boundIndex(tokenIndex, 0, this.tokenCount)] & OFFSET_MASK;
    }
    getTokenType(tokenIndex) {
        if (tokenIndex === this.tokenIndex) {
            return this.tokenType;
        }

        return this.offsetAndType[boundIndex(tokenIndex, 0, this.tokenCount)] >> TYPE_SHIFT;
    }
    substrToCursor(start) {
        return this.source.substring(start, this.tokenStart);
    }

    isBlockOpenerTokenType(tokenType) {
        return blockTokens[tokenType] === BLOCK_OPEN_TOKEN;
    }
    isBlockCloserTokenType(tokenType) {
        return blockTokens[tokenType] === BLOCK_CLOSE_TOKEN;
    }
    getBlockTokenPairIndex(tokenIndex) {
        const type = this.getTokenType(tokenIndex);

        if (blockTokens[type] === 1) {
            // block open token
            const pairIndex = this.balance[tokenIndex];
            const closeType = this.getTokenType(pairIndex);

            return balancePair[type] === closeType ? pairIndex : -1;
        } else if (blockTokens[type] === 2) {
            // block close token
            const pairIndex = this.balance[tokenIndex];
            const openType = this.getTokenType(pairIndex);

            return balancePair[openType] === type ? pairIndex : -1;
        }

        return -1;
    }
    isBalanceEdge(tokenIndex) {
        return this.balance[this.tokenIndex] < tokenIndex;
    }

    isDelim(code, offset) {
        if (offset) {
            return (
                this.lookupType(offset) === types.Delim &&
                this.source.charCodeAt(this.lookupOffset(offset)) === code
            );
        }

        return (
            this.tokenType === types.Delim &&
            this.source.charCodeAt(this.tokenStart) === code
        );
    }

    skip(tokenCount) {
        let next = this.tokenIndex + tokenCount;

        if (next < this.tokenCount) {
            this.tokenIndex = next;
            this.tokenStart = this.offsetAndType[next - 1] & OFFSET_MASK;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_SHIFT;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.tokenIndex = this.tokenCount;
            this.next();
        }
    }
    next() {
        let next = this.tokenIndex + 1;

        if (next < this.tokenCount) {
            this.tokenIndex = next;
            this.tokenStart = this.tokenEnd;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_SHIFT;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.eof = true;
            this.tokenIndex = this.tokenCount;
            this.tokenType = types.EOF;
            this.tokenStart = this.tokenEnd = this.source.length;
        }
    }
    skipSC() {
        while (this.tokenType === types.WhiteSpace || this.tokenType === types.Comment) {
            this.next();
        }
    }
    skipUntilBalanced(startToken, stopConsume) {
        let cursor = startToken;
        let balanceEnd = 0;
        let offset = 0;

        loop:
        for (; cursor < this.tokenCount; cursor++) {
            balanceEnd = this.balance[cursor];

            // stop scanning on balance edge that points to offset before start token
            if (balanceEnd < startToken) {
                break loop;
            }

            offset = cursor > 0 ? this.offsetAndType[cursor - 1] & OFFSET_MASK : this.firstCharOffset;

            // check stop condition
            switch (stopConsume(this.source.charCodeAt(offset))) {
                case 1: // just stop
                    break loop;

                case 2: // stop & included
                    cursor++;
                    break loop;

                default:
                    // fast forward to the end of balanced block for an open block tokens
                    if (this.isBlockOpenerTokenType(this.offsetAndType[cursor] >> TYPE_SHIFT)) {
                        cursor = balanceEnd;
                    }
            }
        }

        this.skip(cursor - this.tokenIndex);
    }

    forEachToken(fn) {
        for (let i = 0, offset = this.firstCharOffset; i < this.tokenCount; i++) {
            const start = offset;
            const item = this.offsetAndType[i];
            const end = item & OFFSET_MASK;
            const type = item >> TYPE_SHIFT;

            offset = end;

            fn(type, start, end, i);
        }
    }
    dump() {
        const tokens = new Array(this.tokenCount);

        this.forEachToken((type, start, end, index) => {
            tokens[index] = {
                idx: index,
                type: names[type],
                chunk: this.source.substring(start, end),
                balance: this.balance[index]
            };
        });

        return tokens;
    }
}

exports.TokenStream = TokenStream;
