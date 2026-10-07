var constants = require('../tokenizer/const');
var TYPE = constants.TYPE;
var NAME = constants.NAME;

var utils = require('../tokenizer/utils');
var cmpStr = utils.cmpStr;

var EOF = TYPE.EOF;
var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;

var OFFSET_MASK = 0x00FFFFFF;
var TYPE_SHIFT = 24;

var TokenStream = function() {
    this.offsetAndType = null;
    this.balance = null;

    this.reset();
};

TokenStream.prototype = {
    reset: function() {
        this.eof = false;
        this.tokenIndex = -1;
        this.tokenType = 0;
        this.tokenStart = this.firstCharOffset;
        this.tokenEnd = this.firstCharOffset;
    },

    lookupType: function(offset) {
        offset += this.tokenIndex;

        if (offset < this.tokenCount) {
            return this.offsetAndType[offset] >> TYPE_SHIFT;
        }

        return EOF;
    },
    lookupOffset: function(offset) {
        offset += this.tokenIndex;

        if (offset < this.tokenCount) {
            return this.offsetAndType[offset - 1] & OFFSET_MASK;
        }

        return this.source.length;
    },
    lookupValue: function(offset, referenceStr) {
        offset += this.tokenIndex;

        if (offset < this.tokenCount) {
            return cmpStr(
                this.source,
                this.offsetAndType[offset - 1] & OFFSET_MASK,
                this.offsetAndType[offset] & OFFSET_MASK,
                referenceStr
            );
        }

        return false;
    },
    getTokenStart: function(tokenIndex) {
        if (tokenIndex === this.tokenIndex) {
            return this.tokenStart;
        }

        if (tokenIndex > 0) {
            return tokenIndex < this.tokenCount
                ? this.offsetAndType[tokenIndex - 1] & OFFSET_MASK
                : this.offsetAndType[this.tokenCount] & OFFSET_MASK;
        }

        return this.firstCharOffset;
    },

    // TODO: -> skipUntilBalanced
    getRawLength: function(startToken, mode) {
        var cursor = startToken;
        var balanceEnd;
        var offset = this.offsetAndType[Math.max(cursor - 1, 0)] & OFFSET_MASK;
        var type;

        loop:
        for (; cursor < this.tokenCount; cursor++) {
            balanceEnd = this.balance[cursor];

            // stop scanning on balance edge that points to offset before start token
            if (balanceEnd < startToken) {
                break loop;
            }

            type = this.offsetAndType[cursor] >> TYPE_SHIFT;

            // check token is stop type
            switch (mode(type, this.source, offset)) {
                case 1:
                    break loop;

                case 2:
                    cursor++;
                    break loop;

                default:
                    // fast forward to the end of balanced block
                    if (this.balance[balanceEnd] === cursor) {
                        cursor = balanceEnd;
                    }

                    offset = this.offsetAndType[cursor] & OFFSET_MASK;
            }
        }

        return cursor - this.tokenIndex;
    },
    isBalanceEdge: function(pos) {
        return this.balance[this.tokenIndex] < pos;
    },
    isDelim: function(code, offset) {
        if (offset) {
            return (
                this.lookupType(offset) === TYPE.Delim &&
                this.source.charCodeAt(this.lookupOffset(offset)) === code
            );
        }

        return (
            this.tokenType === TYPE.Delim &&
            this.source.charCodeAt(this.tokenStart) === code
        );
    },

    getTokenValue: function() {
        return this.source.substring(this.tokenStart, this.tokenEnd);
    },
    getTokenLength: function() {
        return this.tokenEnd - this.tokenStart;
    },
    substrToCursor: function(start) {
        return this.source.substring(start, this.tokenStart);
    },

    skipWS: function() {
        for (var i = this.tokenIndex, skipTokenCount = 0; i < this.tokenCount; i++, skipTokenCount++) {
            if ((this.offsetAndType[i] >> TYPE_SHIFT) !== WHITESPACE) {
                break;
            }
        }

        if (skipTokenCount > 0) {
            this.skip(skipTokenCount);
        }
    },
    skipSC: function() {
        while (this.tokenType === WHITESPACE || this.tokenType === COMMENT) {
            this.next();
        }
    },
    skip: function(tokenCount) {
        var next = this.tokenIndex + tokenCount;

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
    },
    next: function() {
        var next = this.tokenIndex + 1;

        if (next < this.tokenCount) {
            this.tokenIndex = next;
            this.tokenStart = this.tokenEnd;
            next = this.offsetAndType[next];
            this.tokenType = next >> TYPE_SHIFT;
            this.tokenEnd = next & OFFSET_MASK;
        } else {
            this.tokenIndex = this.tokenCount;
            this.eof = true;
            this.tokenType = EOF;
            this.tokenStart = this.tokenEnd = this.source.length;
        }
    },

    forEachToken(fn) {
        for (var i = 0, offset = this.firstCharOffset; i < this.tokenCount; i++) {
            var start = offset;
            var item = this.offsetAndType[i];
            var end = item & OFFSET_MASK;
            var type = item >> TYPE_SHIFT;

            offset = end;

            fn(type, start, end, i);
        }
    },

    dump() {
        var tokens = new Array(this.tokenCount);

        this.forEachToken((type, start, end, index) => {
            tokens[index] = {
                idx: index,
                type: NAME[type],
                chunk: this.source.substring(start, end),
                balance: this.balance[index]
            };
        });

        return tokens;
    }
};

module.exports = TokenStream;
