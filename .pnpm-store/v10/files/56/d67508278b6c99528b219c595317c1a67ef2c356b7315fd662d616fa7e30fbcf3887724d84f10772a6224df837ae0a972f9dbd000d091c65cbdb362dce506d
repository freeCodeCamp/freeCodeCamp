'use strict';

const types = require('../tokenizer/types.cjs');

const PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)

// code:
// 0xxxxxxx x0000000 - char code (0x80 for non-ASCII) or delim value
// 00000000 0xxxxxx0 - token type (0 for delim, 1 for token)
// 00000000 0000000x - reserved for carriage emit flag (0 for no space, 1 for space)
const code = (type, value) => {
    if (type === types.Delim) {
        type = value;
    }

    if (typeof type === 'string') {
        type = Math.min(type.charCodeAt(0), 0x80) << 6; // replace non-ASCII with 0x80
    }

    return type << 1;
};

// https://www.w3.org/TR/css-syntax-3/#serialization
// The only requirement for serialization is that it must "round-trip" with parsing,
// that is, parsing the stylesheet must produce the same data structures as parsing,
// serializing, and parsing again, except for consecutive <whitespace-token>s,
// which may be collapsed into a single token.

const specPairs = [
    [types.Ident, types.Ident],
    [types.Ident, types.Function],
    [types.Ident, types.Url],
    [types.Ident, types.BadUrl],
    [types.Ident, '-'],
    [types.Ident, types.Number],
    [types.Ident, types.Percentage],
    [types.Ident, types.Dimension],
    [types.Ident, types.CDC],
    [types.Ident, types.LeftParenthesis],

    [types.AtKeyword, types.Ident],
    [types.AtKeyword, types.Function],
    [types.AtKeyword, types.Url],
    [types.AtKeyword, types.BadUrl],
    [types.AtKeyword, '-'],
    [types.AtKeyword, types.Number],
    [types.AtKeyword, types.Percentage],
    [types.AtKeyword, types.Dimension],
    [types.AtKeyword, types.CDC],

    [types.Hash, types.Ident],
    [types.Hash, types.Function],
    [types.Hash, types.Url],
    [types.Hash, types.BadUrl],
    [types.Hash, '-'],
    [types.Hash, types.Number],
    [types.Hash, types.Percentage],
    [types.Hash, types.Dimension],
    [types.Hash, types.CDC],

    [types.Dimension, types.Ident],
    [types.Dimension, types.Function],
    [types.Dimension, types.Url],
    [types.Dimension, types.BadUrl],
    [types.Dimension, '-'],
    [types.Dimension, types.Number],
    [types.Dimension, types.Percentage],
    [types.Dimension, types.Dimension],
    [types.Dimension, types.CDC],

    ['#', types.Ident],
    ['#', types.Function],
    ['#', types.Url],
    ['#', types.BadUrl],
    ['#', '-'],
    ['#', types.Number],
    ['#', types.Percentage],
    ['#', types.Dimension],
    ['#', types.CDC], // https://github.com/w3c/csswg-drafts/pull/6874

    ['-', types.Ident],
    ['-', types.Function],
    ['-', types.Url],
    ['-', types.BadUrl],
    ['-', '-'],
    ['-', types.Number],
    ['-', types.Percentage],
    ['-', types.Dimension],
    ['-', types.CDC], // https://github.com/w3c/csswg-drafts/pull/6874

    [types.Number, types.Ident],
    [types.Number, types.Function],
    [types.Number, types.Url],
    [types.Number, types.BadUrl],
    [types.Number, types.Number],
    [types.Number, types.Percentage],
    [types.Number, types.Dimension],
    [types.Number, '%'],
    [types.Number, types.CDC], // https://github.com/w3c/csswg-drafts/pull/6874

    ['@', types.Ident],
    ['@', types.Function],
    ['@', types.Url],
    ['@', types.BadUrl],
    ['@', '-'],
    ['@', types.CDC], // https://github.com/w3c/csswg-drafts/pull/6874

    ['.', types.Number],
    ['.', types.Percentage],
    ['.', types.Dimension],

    ['+', types.Number],
    ['+', types.Percentage],
    ['+', types.Dimension],

    ['/', '*']
];
// validate with scripts/generate-safe
const safePairs = specPairs.concat([
    [types.Ident, types.Hash],

    [types.Dimension, types.Hash],

    [types.Hash, types.Hash],

    [types.AtKeyword, types.LeftParenthesis],
    [types.AtKeyword, types.String],
    [types.AtKeyword, types.Colon],

    [types.Percentage, types.Percentage],
    [types.Percentage, types.Dimension],
    [types.Percentage, types.Function],
    [types.Percentage, '-'],

    [types.RightParenthesis, types.Ident],
    [types.RightParenthesis, types.Function],
    [types.RightParenthesis, types.Percentage],
    [types.RightParenthesis, types.Dimension],
    [types.RightParenthesis, types.Hash],
    [types.RightParenthesis, '-']
]);

function createMap(pairs) {
    const isWhiteSpaceRequired = new Set(
        pairs.map(([prev, next]) => (code(prev) << 16 | code(next)))
    );

    return function(prevCode, type, value) {
        const nextCode = code(type, value);
        const nextCharCode = value.charCodeAt(0);
        const emitWs =
            (nextCharCode === HYPHENMINUS &&
                type !== types.Ident &&
                type !== types.Function &&
                type !== types.CDC) ||
            (nextCharCode === PLUSSIGN)
                ? isWhiteSpaceRequired.has((prevCode & 0xFFFE) << 16 | nextCharCode << 7)
                : isWhiteSpaceRequired.has((prevCode & 0xFFFE) << 16 | nextCode);

        return nextCode | emitWs;
    };
}

const spec = createMap(specPairs);
const safe = createMap(safePairs);

exports.safe = safe;
exports.spec = spec;
