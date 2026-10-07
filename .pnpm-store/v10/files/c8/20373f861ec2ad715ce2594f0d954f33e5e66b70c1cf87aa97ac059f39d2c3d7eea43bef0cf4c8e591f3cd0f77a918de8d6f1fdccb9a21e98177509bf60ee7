import {
    isDigit,
    cmpChar,
    Delim,
    WhiteSpace,
    Comment,
    Ident,
    Number as NumberToken,
    Dimension
} from '../tokenizer/index.js';

const PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
const N = 0x006E;           // U+006E LATIN SMALL LETTER N (n)
const DISALLOW_SIGN = true;
const ALLOW_SIGN = false;

function isDelim(token, code) {
    return token !== null && token.type === Delim && token.value.charCodeAt(0) === code;
}

function skipSC(token, offset, getNextToken) {
    while (token !== null && (token.type === WhiteSpace || token.type === Comment)) {
        token = getNextToken(++offset);
    }

    return offset;
}

function checkInteger(token, valueOffset, disallowSign, offset) {
    if (!token) {
        return 0;
    }

    const code = token.value.charCodeAt(valueOffset);

    if (code === PLUSSIGN || code === HYPHENMINUS) {
        if (disallowSign) {
            // Number sign is not allowed
            return 0;
        }
        valueOffset++;
    }

    for (; valueOffset < token.value.length; valueOffset++) {
        if (!isDigit(token.value.charCodeAt(valueOffset))) {
            // Integer is expected
            return 0;
        }
    }

    return offset + 1;
}

// ... <signed-integer>
// ... ['+' | '-'] <signless-integer>
function consumeB(token, offset_, getNextToken) {
    let sign = false;
    let offset = skipSC(token, offset_, getNextToken);

    token = getNextToken(offset);

    if (token === null) {
        return offset_;
    }

    if (token.type !== NumberToken) {
        if (isDelim(token, PLUSSIGN) || isDelim(token, HYPHENMINUS)) {
            sign = true;
            offset = skipSC(getNextToken(++offset), offset, getNextToken);
            token = getNextToken(offset);

            if (token === null || token.type !== NumberToken) {
                return 0;
            }
        } else {
            return offset_;
        }
    }

    if (!sign) {
        const code = token.value.charCodeAt(0);
        if (code !== PLUSSIGN && code !== HYPHENMINUS) {
            // Number sign is expected
            return 0;
        }
    }

    return checkInteger(token, sign ? 0 : 1, sign, offset);
}

// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
export default function anPlusB(token, getNextToken) {
    /* eslint-disable brace-style*/
    let offset = 0;

    if (!token) {
        return 0;
    }

    // <integer>
    if (token.type === NumberToken) {
        return checkInteger(token, 0, ALLOW_SIGN, offset); // b
    }

    // -n
    // -n <signed-integer>
    // -n ['+' | '-'] <signless-integer>
    // -n- <signless-integer>
    // <dashndashdigit-ident>
    else if (token.type === Ident && token.value.charCodeAt(0) === HYPHENMINUS) {
        // expect 1st char is N
        if (!cmpChar(token.value, 1, N)) {
            return 0;
        }

        switch (token.value.length) {
            // -n
            // -n <signed-integer>
            // -n ['+' | '-'] <signless-integer>
            case 2:
                return consumeB(getNextToken(++offset), offset, getNextToken);

            // -n- <signless-integer>
            case 3:
                if (token.value.charCodeAt(2) !== HYPHENMINUS) {
                    return 0;
                }

                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);

                return checkInteger(token, 0, DISALLOW_SIGN, offset);

            // <dashndashdigit-ident>
            default:
                if (token.value.charCodeAt(2) !== HYPHENMINUS) {
                    return 0;
                }

                return checkInteger(token, 3, DISALLOW_SIGN, offset);
        }
    }

    // '+'? n
    // '+'? n <signed-integer>
    // '+'? n ['+' | '-'] <signless-integer>
    // '+'? n- <signless-integer>
    // '+'? <ndashdigit-ident>
    else if (token.type === Ident || (isDelim(token, PLUSSIGN) && getNextToken(offset + 1).type === Ident)) {
        // just ignore a plus
        if (token.type !== Ident) {
            token = getNextToken(++offset);
        }

        if (token === null || !cmpChar(token.value, 0, N)) {
            return 0;
        }

        switch (token.value.length) {
            // '+'? n
            // '+'? n <signed-integer>
            // '+'? n ['+' | '-'] <signless-integer>
            case 1:
                return consumeB(getNextToken(++offset), offset, getNextToken);

            // '+'? n- <signless-integer>
            case 2:
                if (token.value.charCodeAt(1) !== HYPHENMINUS) {
                    return 0;
                }

                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);

                return checkInteger(token, 0, DISALLOW_SIGN, offset);

            // '+'? <ndashdigit-ident>
            default:
                if (token.value.charCodeAt(1) !== HYPHENMINUS) {
                    return 0;
                }

                return checkInteger(token, 2, DISALLOW_SIGN, offset);
        }
    }

    // <ndashdigit-dimension>
    // <ndash-dimension> <signless-integer>
    // <n-dimension>
    // <n-dimension> <signed-integer>
    // <n-dimension> ['+' | '-'] <signless-integer>
    else if (token.type === Dimension) {
        let code = token.value.charCodeAt(0);
        let sign = code === PLUSSIGN || code === HYPHENMINUS ? 1 : 0;
        let i = sign;

        for (; i < token.value.length; i++) {
            if (!isDigit(token.value.charCodeAt(i))) {
                break;
            }
        }

        if (i === sign) {
            // Integer is expected
            return 0;
        }

        if (!cmpChar(token.value, i, N)) {
            return 0;
        }

        // <n-dimension>
        // <n-dimension> <signed-integer>
        // <n-dimension> ['+' | '-'] <signless-integer>
        if (i + 1 === token.value.length) {
            return consumeB(getNextToken(++offset), offset, getNextToken);
        } else {
            if (token.value.charCodeAt(i + 1) !== HYPHENMINUS) {
                return 0;
            }

            // <ndash-dimension> <signless-integer>
            if (i + 2 === token.value.length) {
                offset = skipSC(getNextToken(++offset), offset, getNextToken);
                token = getNextToken(offset);

                return checkInteger(token, 0, DISALLOW_SIGN, offset);
            }
            // <ndashdigit-dimension>
            else {
                return checkInteger(token, i + 2, DISALLOW_SIGN, offset);
            }
        }
    }

    return 0;
};
