var tokenizer = require('../../tokenizer');
var TYPE = tokenizer.TYPE;

var WhiteSpace = TYPE.WhiteSpace;
var Semicolon = TYPE.Semicolon;
var LeftCurlyBracket = TYPE.LeftCurlyBracket;
var Delim = TYPE.Delim;
var EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)

function getOffsetExcludeWS() {
    if (this.scanner.tokenIndex > 0) {
        if (this.scanner.lookupType(-1) === WhiteSpace) {
            return this.scanner.tokenIndex > 1
                ? this.scanner.getTokenStart(this.scanner.tokenIndex - 1)
                : this.scanner.firstCharOffset;
        }
    }

    return this.scanner.tokenStart;
}

// 0, 0, false
function balanceEnd() {
    return 0;
}

// LEFTCURLYBRACKET, 0, false
function leftCurlyBracket(tokenType) {
    return tokenType === LeftCurlyBracket ? 1 : 0;
}

// LEFTCURLYBRACKET, SEMICOLON, false
function leftCurlyBracketOrSemicolon(tokenType) {
    return tokenType === LeftCurlyBracket || tokenType === Semicolon ? 1 : 0;
}

// EXCLAMATIONMARK, SEMICOLON, false
function exclamationMarkOrSemicolon(tokenType, source, offset) {
    if (tokenType === Delim && source.charCodeAt(offset) === EXCLAMATIONMARK) {
        return 1;
    }

    return tokenType === Semicolon ? 1 : 0;
}

// 0, SEMICOLON, true
function semicolonIncluded(tokenType) {
    return tokenType === Semicolon ? 2 : 0;
}

module.exports = {
    name: 'Raw',
    structure: {
        value: String
    },
    parse: function(startToken, mode, excludeWhiteSpace) {
        var startOffset = this.scanner.getTokenStart(startToken);
        var endOffset;

        this.scanner.skip(
            this.scanner.getRawLength(startToken, mode || balanceEnd)
        );

        if (excludeWhiteSpace && this.scanner.tokenStart > startOffset) {
            endOffset = getOffsetExcludeWS.call(this);
        } else {
            endOffset = this.scanner.tokenStart;
        }

        return {
            type: 'Raw',
            loc: this.getLocation(startOffset, endOffset),
            value: this.scanner.source.substring(startOffset, endOffset)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
    },

    mode: {
        default: balanceEnd,
        leftCurlyBracket: leftCurlyBracket,
        leftCurlyBracketOrSemicolon: leftCurlyBracketOrSemicolon,
        exclamationMarkOrSemicolon: exclamationMarkOrSemicolon,
        semicolonIncluded: semicolonIncluded
    }
};
