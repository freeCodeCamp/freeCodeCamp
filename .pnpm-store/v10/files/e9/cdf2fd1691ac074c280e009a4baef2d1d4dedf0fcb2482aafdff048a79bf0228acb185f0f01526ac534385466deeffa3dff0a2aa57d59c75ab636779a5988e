var tokenizer = require('../tokenizer');
var isIdentifierStart = tokenizer.isIdentifierStart;
var isHexDigit = tokenizer.isHexDigit;
var isDigit = tokenizer.isDigit;
var cmpStr = tokenizer.cmpStr;
var consumeNumber = tokenizer.consumeNumber;
var TYPE = tokenizer.TYPE;
var anPlusB = require('./generic-an-plus-b');
var urange = require('./generic-urange');

var cssWideKeywords = ['unset', 'initial', 'inherit'];
var calcFunctionNames = ['calc(', '-moz-calc(', '-webkit-calc('];

// https://www.w3.org/TR/css-values-3/#lengths
var LENGTH = {
    // absolute length units
    'px': true,
    'mm': true,
    'cm': true,
    'in': true,
    'pt': true,
    'pc': true,
    'q': true,

    // relative length units
    'em': true,
    'ex': true,
    'ch': true,
    'rem': true,

    // viewport-percentage lengths
    'vh': true,
    'vw': true,
    'vmin': true,
    'vmax': true,
    'vm': true
};

var ANGLE = {
    'deg': true,
    'grad': true,
    'rad': true,
    'turn': true
};

var TIME = {
    's': true,
    'ms': true
};

var FREQUENCY = {
    'hz': true,
    'khz': true
};

// https://www.w3.org/TR/css-values-3/#resolution (https://drafts.csswg.org/css-values/#resolution)
var RESOLUTION = {
    'dpi': true,
    'dpcm': true,
    'dppx': true,
    'x': true      // https://github.com/w3c/csswg-drafts/issues/461
};

// https://drafts.csswg.org/css-grid/#fr-unit
var FLEX = {
    'fr': true
};

// https://www.w3.org/TR/css3-speech/#mixing-props-voice-volume
var DECIBEL = {
    'db': true
};

// https://www.w3.org/TR/css3-speech/#voice-props-voice-pitch
var SEMITONES = {
    'st': true
};

// safe char code getter
function charCode(str, index) {
    return index < str.length ? str.charCodeAt(index) : 0;
}

function eqStr(actual, expected) {
    return cmpStr(actual, 0, actual.length, expected);
}

function eqStrAny(actual, expected) {
    for (var i = 0; i < expected.length; i++) {
        if (eqStr(actual, expected[i])) {
            return true;
        }
    }

    return false;
}

// IE postfix hack, i.e. 123\0 or 123px\9
function isPostfixIeHack(str, offset) {
    if (offset !== str.length - 2) {
        return false;
    }

    return (
        str.charCodeAt(offset) === 0x005C &&  // U+005C REVERSE SOLIDUS (\)
        isDigit(str.charCodeAt(offset + 1))
    );
}

function outOfRange(opts, value, numEnd) {
    if (opts && opts.type === 'Range') {
        var num = Number(
            numEnd !== undefined && numEnd !== value.length
                ? value.substr(0, numEnd)
                : value
        );

        if (isNaN(num)) {
            return true;
        }

        if (opts.min !== null && num < opts.min) {
            return true;
        }

        if (opts.max !== null && num > opts.max) {
            return true;
        }
    }

    return false;
}

function consumeFunction(token, getNextToken) {
    var startIdx = token.index;
    var length = 0;

    // balanced token consuming
    do {
        length++;

        if (token.balance <= startIdx) {
            break;
        }
    } while (token = getNextToken(length));

    return length;
}

// TODO: implement
// can be used wherever <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> values are allowed
// https://drafts.csswg.org/css-values/#calc-notation
function calc(next) {
    return function(token, getNextToken, opts) {
        if (token === null) {
            return 0;
        }

        if (token.type === TYPE.Function && eqStrAny(token.value, calcFunctionNames)) {
            return consumeFunction(token, getNextToken);
        }

        return next(token, getNextToken, opts);
    };
}

function tokenType(expectedTokenType) {
    return function(token) {
        if (token === null || token.type !== expectedTokenType) {
            return 0;
        }

        return 1;
    };
}

function func(name) {
    name = name + '(';

    return function(token, getNextToken) {
        if (token !== null && eqStr(token.value, name)) {
            return consumeFunction(token, getNextToken);
        }

        return 0;
    };
}

// =========================
// Complex types
//

// https://drafts.csswg.org/css-values-4/#custom-idents
// 4.2. Author-defined Identifiers: the <custom-ident> type
// Some properties accept arbitrary author-defined identifiers as a component value.
// This generic data type is denoted by <custom-ident>, and represents any valid CSS identifier
// that would not be misinterpreted as a pre-defined keyword in that property’s value definition.
//
// See also: https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident
function customIdent(token) {
    if (token === null || token.type !== TYPE.Ident) {
        return 0;
    }

    var name = token.value.toLowerCase();

    // The CSS-wide keywords are not valid <custom-ident>s
    if (eqStrAny(name, cssWideKeywords)) {
        return 0;
    }

    // The default keyword is reserved and is also not a valid <custom-ident>
    if (eqStr(name, 'default')) {
        return 0;
    }

    // TODO: ignore property specific keywords (as described https://developer.mozilla.org/en-US/docs/Web/CSS/custom-ident)
    // Specifications using <custom-ident> must specify clearly what other keywords
    // are excluded from <custom-ident>, if any—for example by saying that any pre-defined keywords
    // in that property’s value definition are excluded. Excluded keywords are excluded
    // in all ASCII case permutations.

    return 1;
}

// https://drafts.csswg.org/css-variables/#typedef-custom-property-name
// A custom property is any property whose name starts with two dashes (U+002D HYPHEN-MINUS), like --foo.
// The <custom-property-name> production corresponds to this: it’s defined as any valid identifier
// that starts with two dashes, except -- itself, which is reserved for future use by CSS.
// NOTE: Current implementation treat `--` as a valid name since most (all?) major browsers treat it as valid.
function customPropertyName(token) {
    // ... defined as any valid identifier
    if (token === null || token.type !== TYPE.Ident) {
        return 0;
    }

    // ... that starts with two dashes (U+002D HYPHEN-MINUS)
    if (charCode(token.value, 0) !== 0x002D || charCode(token.value, 1) !== 0x002D) {
        return 0;
    }

    return 1;
}

// https://drafts.csswg.org/css-color-4/#hex-notation
// The syntax of a <hex-color> is a <hash-token> token whose value consists of 3, 4, 6, or 8 hexadecimal digits.
// In other words, a hex color is written as a hash character, "#", followed by some number of digits 0-9 or
// letters a-f (the case of the letters doesn’t matter - #00ff00 is identical to #00FF00).
function hexColor(token) {
    if (token === null || token.type !== TYPE.Hash) {
        return 0;
    }

    var length = token.value.length;

    // valid values (length): #rgb (4), #rgba (5), #rrggbb (7), #rrggbbaa (9)
    if (length !== 4 && length !== 5 && length !== 7 && length !== 9) {
        return 0;
    }

    for (var i = 1; i < length; i++) {
        if (!isHexDigit(token.value.charCodeAt(i))) {
            return 0;
        }
    }

    return 1;
}

function idSelector(token) {
    if (token === null || token.type !== TYPE.Hash) {
        return 0;
    }

    if (!isIdentifierStart(charCode(token.value, 1), charCode(token.value, 2), charCode(token.value, 3))) {
        return 0;
    }

    return 1;
}

// https://drafts.csswg.org/css-syntax/#any-value
// It represents the entirety of what a valid declaration can have as its value.
function declarationValue(token, getNextToken) {
    if (!token) {
        return 0;
    }

    var length = 0;
    var level = 0;
    var startIdx = token.index;

    // The <declaration-value> production matches any sequence of one or more tokens,
    // so long as the sequence ...
    scan:
    do {
        switch (token.type) {
            // ... does not contain <bad-string-token>, <bad-url-token>,
            case TYPE.BadString:
            case TYPE.BadUrl:
                break scan;

            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case TYPE.RightCurlyBracket:
            case TYPE.RightParenthesis:
            case TYPE.RightSquareBracket:
                if (token.balance > token.index || token.balance < startIdx) {
                    break scan;
                }

                level--;
                break;

            // ... or top-level <semicolon-token> tokens
            case TYPE.Semicolon:
                if (level === 0) {
                    break scan;
                }

                break;

            // ... or <delim-token> tokens with a value of "!"
            case TYPE.Delim:
                if (token.value === '!' && level === 0) {
                    break scan;
                }

                break;

            case TYPE.Function:
            case TYPE.LeftParenthesis:
            case TYPE.LeftSquareBracket:
            case TYPE.LeftCurlyBracket:
                level++;
                break;
        }

        length++;

        // until balance closing
        if (token.balance <= startIdx) {
            break;
        }
    } while (token = getNextToken(length));

    return length;
}

// https://drafts.csswg.org/css-syntax/#any-value
// The <any-value> production is identical to <declaration-value>, but also
// allows top-level <semicolon-token> tokens and <delim-token> tokens
// with a value of "!". It represents the entirety of what valid CSS can be in any context.
function anyValue(token, getNextToken) {
    if (!token) {
        return 0;
    }

    var startIdx = token.index;
    var length = 0;

    // The <any-value> production matches any sequence of one or more tokens,
    // so long as the sequence ...
    scan:
    do {
        switch (token.type) {
            // ... does not contain <bad-string-token>, <bad-url-token>,
            case TYPE.BadString:
            case TYPE.BadUrl:
                break scan;

            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case TYPE.RightCurlyBracket:
            case TYPE.RightParenthesis:
            case TYPE.RightSquareBracket:
                if (token.balance > token.index || token.balance < startIdx) {
                    break scan;
                }

                break;
        }

        length++;

        // until balance closing
        if (token.balance <= startIdx) {
            break;
        }
    } while (token = getNextToken(length));

    return length;
}

// =========================
// Dimensions
//

function dimension(type) {
    return function(token, getNextToken, opts) {
        if (token === null || token.type !== TYPE.Dimension) {
            return 0;
        }

        var numberEnd = consumeNumber(token.value, 0);

        // check unit
        if (type !== null) {
            // check for IE postfix hack, i.e. 123px\0 or 123px\9
            var reverseSolidusOffset = token.value.indexOf('\\', numberEnd);
            var unit = reverseSolidusOffset === -1 || !isPostfixIeHack(token.value, reverseSolidusOffset)
                ? token.value.substr(numberEnd)
                : token.value.substring(numberEnd, reverseSolidusOffset);

            if (type.hasOwnProperty(unit.toLowerCase()) === false) {
                return 0;
            }
        }

        // check range if specified
        if (outOfRange(opts, token.value, numberEnd)) {
            return 0;
        }

        return 1;
    };
}

// =========================
// Percentage
//

// §5.5. Percentages: the <percentage> type
// https://drafts.csswg.org/css-values-4/#percentages
function percentage(token, getNextToken, opts) {
    // ... corresponds to the <percentage-token> production
    if (token === null || token.type !== TYPE.Percentage) {
        return 0;
    }

    // check range if specified
    if (outOfRange(opts, token.value, token.value.length - 1)) {
        return 0;
    }

    return 1;
}

// =========================
// Numeric
//

// https://drafts.csswg.org/css-values-4/#numbers
// The value <zero> represents a literal number with the value 0. Expressions that merely
// evaluate to a <number> with the value 0 (for example, calc(0)) do not match <zero>;
// only literal <number-token>s do.
function zero(next) {
    if (typeof next !== 'function') {
        next = function() {
            return 0;
        };
    }

    return function(token, getNextToken, opts) {
        if (token !== null && token.type === TYPE.Number) {
            if (Number(token.value) === 0) {
                return 1;
            }
        }

        return next(token, getNextToken, opts);
    };
}

// § 5.3. Real Numbers: the <number> type
// https://drafts.csswg.org/css-values-4/#numbers
// Number values are denoted by <number>, and represent real numbers, possibly with a fractional component.
// ... It corresponds to the <number-token> production
function number(token, getNextToken, opts) {
    if (token === null) {
        return 0;
    }

    var numberEnd = consumeNumber(token.value, 0);
    var isNumber = numberEnd === token.value.length;
    if (!isNumber && !isPostfixIeHack(token.value, numberEnd)) {
        return 0;
    }

    // check range if specified
    if (outOfRange(opts, token.value, numberEnd)) {
        return 0;
    }

    return 1;
}

// §5.2. Integers: the <integer> type
// https://drafts.csswg.org/css-values-4/#integers
function integer(token, getNextToken, opts) {
    // ... corresponds to a subset of the <number-token> production
    if (token === null || token.type !== TYPE.Number) {
        return 0;
    }

    // The first digit of an integer may be immediately preceded by `-` or `+` to indicate the integer’s sign.
    var i = token.value.charCodeAt(0) === 0x002B ||       // U+002B PLUS SIGN (+)
            token.value.charCodeAt(0) === 0x002D ? 1 : 0; // U+002D HYPHEN-MINUS (-)

    // When written literally, an integer is one or more decimal digits 0 through 9 ...
    for (; i < token.value.length; i++) {
        if (!isDigit(token.value.charCodeAt(i))) {
            return 0;
        }
    }

    // check range if specified
    if (outOfRange(opts, token.value, i)) {
        return 0;
    }

    return 1;
}

module.exports = {
    // token types
    'ident-token': tokenType(TYPE.Ident),
    'function-token': tokenType(TYPE.Function),
    'at-keyword-token': tokenType(TYPE.AtKeyword),
    'hash-token': tokenType(TYPE.Hash),
    'string-token': tokenType(TYPE.String),
    'bad-string-token': tokenType(TYPE.BadString),
    'url-token': tokenType(TYPE.Url),
    'bad-url-token': tokenType(TYPE.BadUrl),
    'delim-token': tokenType(TYPE.Delim),
    'number-token': tokenType(TYPE.Number),
    'percentage-token': tokenType(TYPE.Percentage),
    'dimension-token': tokenType(TYPE.Dimension),
    'whitespace-token': tokenType(TYPE.WhiteSpace),
    'CDO-token': tokenType(TYPE.CDO),
    'CDC-token': tokenType(TYPE.CDC),
    'colon-token': tokenType(TYPE.Colon),
    'semicolon-token': tokenType(TYPE.Semicolon),
    'comma-token': tokenType(TYPE.Comma),
    '[-token': tokenType(TYPE.LeftSquareBracket),
    ']-token': tokenType(TYPE.RightSquareBracket),
    '(-token': tokenType(TYPE.LeftParenthesis),
    ')-token': tokenType(TYPE.RightParenthesis),
    '{-token': tokenType(TYPE.LeftCurlyBracket),
    '}-token': tokenType(TYPE.RightCurlyBracket),

    // token type aliases
    'string': tokenType(TYPE.String),
    'ident': tokenType(TYPE.Ident),

    // complex types
    'custom-ident': customIdent,
    'custom-property-name': customPropertyName,
    'hex-color': hexColor,
    'id-selector': idSelector, // element( <id-selector> )
    'an-plus-b': anPlusB,
    'urange': urange,
    'declaration-value': declarationValue,
    'any-value': anyValue,

    // dimensions
    'dimension': calc(dimension(null)),
    'angle': calc(dimension(ANGLE)),
    'decibel': calc(dimension(DECIBEL)),
    'frequency': calc(dimension(FREQUENCY)),
    'flex': calc(dimension(FLEX)),
    'length': calc(zero(dimension(LENGTH))),
    'resolution': calc(dimension(RESOLUTION)),
    'semitones': calc(dimension(SEMITONES)),
    'time': calc(dimension(TIME)),

    // percentage
    'percentage': calc(percentage),

    // numeric
    'zero': zero(),
    'number': calc(number),
    'integer': calc(integer),

    // old IE stuff
    '-ms-legacy-expression': func('expression')
};
