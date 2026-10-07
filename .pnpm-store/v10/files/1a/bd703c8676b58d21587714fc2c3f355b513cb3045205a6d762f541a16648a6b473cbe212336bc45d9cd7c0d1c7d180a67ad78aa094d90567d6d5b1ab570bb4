import { cssWideKeywords } from './generic-const.js';
import anPlusB from './generic-an-plus-b.js';
import urange from './generic-urange.js';
import {
    isIdentifierStart,
    isHexDigit,
    isDigit,
    cmpStr,
    consumeNumber,

    Ident,
    Function as FunctionToken,
    AtKeyword,
    Hash,
    String as StringToken,
    BadString,
    Url,
    BadUrl,
    Delim,
    Number as NumberToken,
    Percentage,
    Dimension,
    WhiteSpace,
    CDO,
    CDC,
    Colon,
    Semicolon,
    Comma,
    LeftSquareBracket,
    RightSquareBracket,
    LeftParenthesis,
    RightParenthesis,
    LeftCurlyBracket,
    RightCurlyBracket
} from '../tokenizer/index.js';

// CSS mathematical functions categorized by return type behavior
// See: https://www.w3.org/TR/css-values-4/#math

// Calculation functions that return different types depending on input
const calcFunctionNames = [
    'calc(',
    '-moz-calc(',
    '-webkit-calc('
];

// Comparison functions that return different types depending on input
const comparisonFunctionNames = [
    'min(',
    'max(',
    'clamp('
];

// Functions that return a stepped value, i.e. a value that is rounded to the nearest step
const steppedValueFunctionNames = [
    'round(',
    'mod(',
    'rem('
];

// Trigonometrical functions that return a <number>
const trigNumberFunctionNames = [
    'sin(',
    'cos(',
    'tan('
];

// Trigonometrical functions that return a <angle>
const trigAngleFunctionNames = [
    'asin(',
    'acos(',
    'atan(',
    'atan2('
];

// Other functions that return a <number>
const otherNumberFunctionNames = [
    'pow(',
    'sqrt(',
    'log(',
    'exp(',
    'sign('
];

// Exponential functions that return a <number> or <dimension> or <percentage>
const expNumberDimensionPercentageFunctionNames = [
    'hypot('
];

// Return the same type as the input
const signFunctionNames = [
    'abs('
];

const numberFunctionNames = [
    ...calcFunctionNames,
    ...comparisonFunctionNames,
    ...steppedValueFunctionNames,
    ...trigNumberFunctionNames,
    ...otherNumberFunctionNames,
    ...expNumberDimensionPercentageFunctionNames,
    ...signFunctionNames
];

const percentageFunctionNames = [
    ...calcFunctionNames,
    ...comparisonFunctionNames,
    ...steppedValueFunctionNames,
    ...expNumberDimensionPercentageFunctionNames,
    ...signFunctionNames
];

const dimensionFunctionNames = [
    ...calcFunctionNames,
    ...comparisonFunctionNames,
    ...steppedValueFunctionNames,
    ...trigAngleFunctionNames,
    ...expNumberDimensionPercentageFunctionNames,
    ...signFunctionNames
];

const balancePair = new Map([
    [FunctionToken, RightParenthesis],
    [LeftParenthesis, RightParenthesis],
    [LeftSquareBracket, RightSquareBracket],
    [LeftCurlyBracket, RightCurlyBracket]
]);

// safe char code getter
function charCodeAt(str, index) {
    return index < str.length ? str.charCodeAt(index) : 0;
}

function eqStr(actual, expected) {
    return cmpStr(actual, 0, actual.length, expected);
}

function eqStrAny(actual, expected) {
    for (let i = 0; i < expected.length; i++) {
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
        charCodeAt(str, offset) === 0x005C &&  // U+005C REVERSE SOLIDUS (\)
        isDigit(charCodeAt(str, offset + 1))
    );
}

function outOfRange(opts, value, numEnd) {
    if (opts && opts.type === 'Range') {
        const num = Number(
            numEnd !== undefined && numEnd !== value.length
                ? value.substr(0, numEnd)
                : value
        );

        if (isNaN(num)) {
            return true;
        }

        // FIXME: when opts.min is a string it's a dimension, skip a range validation
        // for now since it requires a type covertation which is not implmented yet
        if (opts.min !== null && num < opts.min && typeof opts.min !== 'string') {
            return true;
        }

        // FIXME: when opts.max is a string it's a dimension, skip a range validation
        // for now since it requires a type covertation which is not implmented yet
        if (opts.max !== null && num > opts.max && typeof opts.max !== 'string') {
            return true;
        }
    }

    return false;
}

function consumeFunction(token, getNextToken) {
    let balanceCloseType = 0;
    let balanceStash = [];
    let length = 0;

    // balanced token consuming
    scan:
    do {
        switch (token.type) {
            case RightCurlyBracket:
            case RightParenthesis:
            case RightSquareBracket:
                if (token.type !== balanceCloseType) {
                    break scan;
                }

                balanceCloseType = balanceStash.pop();

                if (balanceStash.length === 0) {
                    length++;
                    break scan;
                }

                break;

            case FunctionToken:
            case LeftParenthesis:
            case LeftSquareBracket:
            case LeftCurlyBracket:
                balanceStash.push(balanceCloseType);
                balanceCloseType = balancePair.get(token.type);
                break;
        }

        length++;
    } while (token = getNextToken(length));

    return length;
}


// TODO: implement
// can be used wherever <length>, <frequency>, <angle>, <time>, <percentage>, <number>, or <integer> values are allowed
// https://drafts.csswg.org/css-values/#calc-notation
function math(next, functionNames) {
    return function(token, getNextToken, opts) {
        if (token === null) {
            return 0;
        }

        if (token.type === FunctionToken && eqStrAny(token.value, functionNames)) {
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
    if (token === null || token.type !== Ident) {
        return 0;
    }

    const name = token.value.toLowerCase();

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

// https://drafts.csswg.org/css-values-4/#dashed-idents
// The <dashed-ident> production is a <custom-ident>, with all the case-sensitivity that implies,
// with the additional restriction that it must start with two dashes (U+002D HYPHEN-MINUS).
function dashedIdent(token) {
    if (token === null || token.type !== Ident) {
        return 0;
    }

    // ... must start with two dashes (U+002D HYPHEN-MINUS)
    if (charCodeAt(token.value, 0) !== 0x002D || charCodeAt(token.value, 1) !== 0x002D) {
        return 0;
    }

    return 1;
}

// https://drafts.csswg.org/css-variables/#typedef-custom-property-name
// A custom property is any property whose name starts with two dashes (U+002D HYPHEN-MINUS), like --foo.
// The <custom-property-name> production corresponds to this: it’s defined as any <dashed-ident>
// (a valid identifier that starts with two dashes), except -- itself, which is reserved for future use by CSS.
function customPropertyName(token) {
    // ... it’s defined as any <dashed-ident>
    if (!dashedIdent(token)) {
        return 0;
    }

    // ... except -- itself, which is reserved for future use by CSS
    if (token.value === '--') {
        return 0;
    }

    return 1;
}

// https://drafts.csswg.org/css-color-4/#hex-notation
// The syntax of a <hex-color> is a <hash-token> token whose value consists of 3, 4, 6, or 8 hexadecimal digits.
// In other words, a hex color is written as a hash character, "#", followed by some number of digits 0-9 or
// letters a-f (the case of the letters doesn’t matter - #00ff00 is identical to #00FF00).
function hexColor(token) {
    if (token === null || token.type !== Hash) {
        return 0;
    }

    const length = token.value.length;

    // valid values (length): #rgb (4), #rgba (5), #rrggbb (7), #rrggbbaa (9)
    if (length !== 4 && length !== 5 && length !== 7 && length !== 9) {
        return 0;
    }

    for (let i = 1; i < length; i++) {
        if (!isHexDigit(charCodeAt(token.value, i))) {
            return 0;
        }
    }

    return 1;
}

function idSelector(token) {
    if (token === null || token.type !== Hash) {
        return 0;
    }

    if (!isIdentifierStart(charCodeAt(token.value, 1), charCodeAt(token.value, 2), charCodeAt(token.value, 3))) {
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

    let balanceCloseType = 0;
    let balanceStash = [];
    let length = 0;

    // The <declaration-value> production matches any sequence of one or more tokens,
    // so long as the sequence does not contain ...
    scan:
    do {
        switch (token.type) {
            // ... <bad-string-token>, <bad-url-token>,
            case BadString:
            case BadUrl:
                break scan;

            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case RightCurlyBracket:
            case RightParenthesis:
            case RightSquareBracket:
                if (token.type !== balanceCloseType) {
                    break scan;
                }

                balanceCloseType = balanceStash.pop();
                break;

            // ... or top-level <semicolon-token> tokens
            case Semicolon:
                if (balanceCloseType === 0) {
                    break scan;
                }

                break;

            // ... or <delim-token> tokens with a value of "!"
            case Delim:
                if (balanceCloseType === 0 && token.value === '!') {
                    break scan;
                }

                break;

            case FunctionToken:
            case LeftParenthesis:
            case LeftSquareBracket:
            case LeftCurlyBracket:
                balanceStash.push(balanceCloseType);
                balanceCloseType = balancePair.get(token.type);
                break;
        }

        length++;
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

    let balanceCloseType = 0;
    let balanceStash = [];
    let length = 0;

    // The <any-value> production matches any sequence of one or more tokens,
    // so long as the sequence ...
    scan:
    do {
        switch (token.type) {
            // ... does not contain <bad-string-token>, <bad-url-token>,
            case BadString:
            case BadUrl:
                break scan;

            // ... unmatched <)-token>, <]-token>, or <}-token>,
            case RightCurlyBracket:
            case RightParenthesis:
            case RightSquareBracket:
                if (token.type !== balanceCloseType) {
                    break scan;
                }

                balanceCloseType = balanceStash.pop();
                break;

            case FunctionToken:
            case LeftParenthesis:
            case LeftSquareBracket:
            case LeftCurlyBracket:
                balanceStash.push(balanceCloseType);
                balanceCloseType = balancePair.get(token.type);
                break;
        }

        length++;
    } while (token = getNextToken(length));

    return length;
}

// =========================
// Dimensions
//

function dimension(type) {
    if (type) {
        type = new Set(type);
    }

    return function(token, getNextToken, opts) {
        if (token === null || token.type !== Dimension) {
            return 0;
        }

        const numberEnd = consumeNumber(token.value, 0);

        // check unit
        if (type !== null) {
            // check for IE postfix hack, i.e. 123px\0 or 123px\9
            const reverseSolidusOffset = token.value.indexOf('\\', numberEnd);
            const unit = reverseSolidusOffset === -1 || !isPostfixIeHack(token.value, reverseSolidusOffset)
                ? token.value.substr(numberEnd)
                : token.value.substring(numberEnd, reverseSolidusOffset);

            if (type.has(unit.toLowerCase()) === false) {
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
    if (token === null || token.type !== Percentage) {
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
        if (token !== null && token.type === NumberToken) {
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

    const numberEnd = consumeNumber(token.value, 0);
    const isNumber = numberEnd === token.value.length;
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
    if (token === null || token.type !== NumberToken) {
        return 0;
    }

    // The first digit of an integer may be immediately preceded by `-` or `+` to indicate the integer’s sign.
    let i = charCodeAt(token.value, 0) === 0x002B ||       // U+002B PLUS SIGN (+)
            charCodeAt(token.value, 0) === 0x002D ? 1 : 0; // U+002D HYPHEN-MINUS (-)

    // When written literally, an integer is one or more decimal digits 0 through 9 ...
    for (; i < token.value.length; i++) {
        if (!isDigit(charCodeAt(token.value, i))) {
            return 0;
        }
    }

    // check range if specified
    if (outOfRange(opts, token.value, i)) {
        return 0;
    }

    return 1;
}

// token types
export const tokenTypes = {
    'ident-token': tokenType(Ident),
    'function-token': tokenType(FunctionToken),
    'at-keyword-token': tokenType(AtKeyword),
    'hash-token': tokenType(Hash),
    'string-token': tokenType(StringToken),
    'bad-string-token': tokenType(BadString),
    'url-token': tokenType(Url),
    'bad-url-token': tokenType(BadUrl),
    'delim-token': tokenType(Delim),
    'number-token': tokenType(NumberToken),
    'percentage-token': tokenType(Percentage),
    'dimension-token': tokenType(Dimension),
    'whitespace-token': tokenType(WhiteSpace),
    'CDO-token': tokenType(CDO),
    'CDC-token': tokenType(CDC),
    'colon-token': tokenType(Colon),
    'semicolon-token': tokenType(Semicolon),
    'comma-token': tokenType(Comma),
    '[-token': tokenType(LeftSquareBracket),
    ']-token': tokenType(RightSquareBracket),
    '(-token': tokenType(LeftParenthesis),
    ')-token': tokenType(RightParenthesis),
    '{-token': tokenType(LeftCurlyBracket),
    '}-token': tokenType(RightCurlyBracket)
};

// token production types
export const productionTypes = {
    // token type aliases
    'string': tokenType(StringToken),
    'ident': tokenType(Ident),

    // percentage
    'percentage': math(percentage, percentageFunctionNames),

    // numeric
    'zero': zero(),
    'number': math(number, numberFunctionNames),
    'integer': math(integer, numberFunctionNames),

    // complex types
    'custom-ident': customIdent,
    'dashed-ident': dashedIdent,
    'custom-property-name': customPropertyName,
    'hex-color': hexColor,
    'id-selector': idSelector, // element( <id-selector> )
    'an-plus-b': anPlusB,
    'urange': urange,
    'declaration-value': declarationValue,
    'any-value': anyValue
};

export const unitGroups = [
    'length',
    'angle',
    'time',
    'frequency',
    'resolution',
    'flex',
    'decibel',
    'semitones'
];

// dimensions types depend on units set
export function createDemensionTypes(units) {
    const {
        angle,
        decibel,
        frequency,
        flex,
        length,
        resolution,
        semitones,
        time
    } = units || {};

    return {
        'dimension': math(dimension(null), dimensionFunctionNames),
        'angle': math(dimension(angle), dimensionFunctionNames),
        'decibel': math(dimension(decibel), dimensionFunctionNames),
        'frequency': math(dimension(frequency), dimensionFunctionNames),
        'flex': math(dimension(flex), dimensionFunctionNames),
        'length': math(zero(dimension(length)), dimensionFunctionNames),
        'resolution': math(dimension(resolution), dimensionFunctionNames),
        'semitones': math(dimension(semitones), dimensionFunctionNames),
        'time': math(dimension(time), dimensionFunctionNames)
    };
}

// The <attr-unit> production matches any identifier that is an ASCII case-insensitive
// match for the name of a CSS dimension unit, such as px, or the <delim-token> %.
function createAttrUnit(units) {
    const unitSet = new Set();

    for (const group of unitGroups) {
        if (Array.isArray(units[group])) {
            for (const unit of units[group]) {
                unitSet.add(unit.toLowerCase());
            }
        }
    }

    return function attrUnit(token) {
        if (token === null) {
            return 0;
        }

        if (token.type === Delim && token.value === '%') {
            return 1;
        }

        if (token.type === Ident && unitSet.has(token.value.toLowerCase())) {
            return 1;
        }

        return 0;
    };
}

export function createGenericTypes(units) {
    return {
        ...tokenTypes,
        ...productionTypes,
        ...createDemensionTypes(units),
        'attr-unit': createAttrUnit(units)
    };
};
