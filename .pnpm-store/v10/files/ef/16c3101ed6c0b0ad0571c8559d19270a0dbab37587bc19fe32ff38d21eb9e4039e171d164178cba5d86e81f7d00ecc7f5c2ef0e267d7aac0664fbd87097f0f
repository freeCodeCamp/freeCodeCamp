import {
    isDigit,
    WhiteSpace,
    Comment,
    Ident,
    Number,
    Dimension
} from '../../tokenizer/index.js';

const PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
const HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
const N = 0x006E;           // U+006E LATIN SMALL LETTER N (n)
const DISALLOW_SIGN = true;
const ALLOW_SIGN = false;

function checkInteger(offset, disallowSign) {
    let pos = this.tokenStart + offset;
    const code = this.charCodeAt(pos);

    if (code === PLUSSIGN || code === HYPHENMINUS) {
        if (disallowSign) {
            this.error('Number sign is not allowed');
        }
        pos++;
    }

    for (; pos < this.tokenEnd; pos++) {
        if (!isDigit(this.charCodeAt(pos))) {
            this.error('Integer is expected', pos);
        }
    }
}

function checkTokenIsInteger(disallowSign) {
    return checkInteger.call(this, 0, disallowSign);
}

function expectCharCode(offset, code) {
    if (!this.cmpChar(this.tokenStart + offset, code)) {
        let msg = '';

        switch (code) {
            case N:
                msg = 'N is expected';
                break;
            case HYPHENMINUS:
                msg = 'HyphenMinus is expected';
                break;
        }

        this.error(msg, this.tokenStart + offset);
    }
}

// ... <signed-integer>
// ... ['+' | '-'] <signless-integer>
function consumeB() {
    let offset = 0;
    let sign = 0;
    let type = this.tokenType;

    while (type === WhiteSpace || type === Comment) {
        type = this.lookupType(++offset);
    }

    if (type !== Number) {
        if (this.isDelim(PLUSSIGN, offset) ||
            this.isDelim(HYPHENMINUS, offset)) {
            sign = this.isDelim(PLUSSIGN, offset) ? PLUSSIGN : HYPHENMINUS;

            do {
                type = this.lookupType(++offset);
            } while (type === WhiteSpace || type === Comment);

            if (type !== Number) {
                this.skip(offset);
                checkTokenIsInteger.call(this, DISALLOW_SIGN);
            }
        } else {
            return null;
        }
    }

    if (offset > 0) {
        this.skip(offset);
    }

    if (sign === 0) {
        type = this.charCodeAt(this.tokenStart);
        if (type !== PLUSSIGN && type !== HYPHENMINUS) {
            this.error('Number sign is expected');
        }
    }

    checkTokenIsInteger.call(this, sign !== 0);
    return sign === HYPHENMINUS ? '-' + this.consume(Number) : this.consume(Number);
}

// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
export const name = 'AnPlusB';
export const structure = {
    a: [String, null],
    b: [String, null]
};

export function parse() {
    /* eslint-disable brace-style*/
    const start = this.tokenStart;
    let a = null;
    let b = null;

    // <integer>
    if (this.tokenType === Number) {
        checkTokenIsInteger.call(this, ALLOW_SIGN);
        b = this.consume(Number);
    }

    // -n
    // -n <signed-integer>
    // -n ['+' | '-'] <signless-integer>
    // -n- <signless-integer>
    // <dashndashdigit-ident>
    else if (this.tokenType === Ident && this.cmpChar(this.tokenStart, HYPHENMINUS)) {
        a = '-1';

        expectCharCode.call(this, 1, N);

        switch (this.tokenEnd - this.tokenStart) {
            // -n
            // -n <signed-integer>
            // -n ['+' | '-'] <signless-integer>
            case 2:
                this.next();
                b = consumeB.call(this);
                break;

            // -n- <signless-integer>
            case 3:
                expectCharCode.call(this, 2, HYPHENMINUS);

                this.next();
                this.skipSC();

                checkTokenIsInteger.call(this, DISALLOW_SIGN);

                b = '-' + this.consume(Number);
                break;

            // <dashndashdigit-ident>
            default:
                expectCharCode.call(this, 2, HYPHENMINUS);
                checkInteger.call(this, 3, DISALLOW_SIGN);
                this.next();

                b = this.substrToCursor(start + 2);
        }
    }

    // '+'? n
    // '+'? n <signed-integer>
    // '+'? n ['+' | '-'] <signless-integer>
    // '+'? n- <signless-integer>
    // '+'? <ndashdigit-ident>
    else if (this.tokenType === Ident || (this.isDelim(PLUSSIGN) && this.lookupType(1) === Ident)) {
        let sign = 0;
        a = '1';

        // just ignore a plus
        if (this.isDelim(PLUSSIGN)) {
            sign = 1;
            this.next();
        }

        expectCharCode.call(this, 0, N);

        switch (this.tokenEnd - this.tokenStart) {
            // '+'? n
            // '+'? n <signed-integer>
            // '+'? n ['+' | '-'] <signless-integer>
            case 1:
                this.next();
                b = consumeB.call(this);
                break;

            // '+'? n- <signless-integer>
            case 2:
                expectCharCode.call(this, 1, HYPHENMINUS);

                this.next();
                this.skipSC();

                checkTokenIsInteger.call(this, DISALLOW_SIGN);

                b = '-' + this.consume(Number);
                break;

            // '+'? <ndashdigit-ident>
            default:
                expectCharCode.call(this, 1, HYPHENMINUS);
                checkInteger.call(this, 2, DISALLOW_SIGN);
                this.next();

                b = this.substrToCursor(start + sign + 1);
        }
    }

    // <ndashdigit-dimension>
    // <ndash-dimension> <signless-integer>
    // <n-dimension>
    // <n-dimension> <signed-integer>
    // <n-dimension> ['+' | '-'] <signless-integer>
    else if (this.tokenType === Dimension) {
        const code = this.charCodeAt(this.tokenStart);
        const sign = code === PLUSSIGN || code === HYPHENMINUS;
        let i = this.tokenStart + sign;

        for (; i < this.tokenEnd; i++) {
            if (!isDigit(this.charCodeAt(i))) {
                break;
            }
        }

        if (i === this.tokenStart + sign) {
            this.error('Integer is expected', this.tokenStart + sign);
        }

        expectCharCode.call(this, i - this.tokenStart, N);
        a = this.substring(start, i);

        // <n-dimension>
        // <n-dimension> <signed-integer>
        // <n-dimension> ['+' | '-'] <signless-integer>
        if (i + 1 === this.tokenEnd) {
            this.next();
            b = consumeB.call(this);
        } else {
            expectCharCode.call(this, i - this.tokenStart + 1, HYPHENMINUS);

            // <ndash-dimension> <signless-integer>
            if (i + 2 === this.tokenEnd) {
                this.next();
                this.skipSC();
                checkTokenIsInteger.call(this, DISALLOW_SIGN);
                b = '-' + this.consume(Number);
            }
            // <ndashdigit-dimension>
            else {
                checkInteger.call(this, i - this.tokenStart + 2, DISALLOW_SIGN);
                this.next();
                b = this.substrToCursor(i + 1);
            }
        }
    } else {
        this.error();
    }

    if (a !== null && a.charCodeAt(0) === PLUSSIGN) {
        a = a.substr(1);
    }

    if (b !== null && b.charCodeAt(0) === PLUSSIGN) {
        b = b.substr(1);
    }

    return {
        type: 'AnPlusB',
        loc: this.getLocation(start, this.tokenStart),
        a,
        b
    };
}

export function generate(node) {
    if (node.a) {
        const a =
            node.a === '+1' && 'n' ||
            node.a ===  '1' && 'n' ||
            node.a === '-1' && '-n' ||
            node.a + 'n';

        if (node.b) {
            const b = node.b[0] === '-' || node.b[0] === '+'
                ? node.b
                : '+' + node.b;
            this.tokenize(a + b);
        } else {
            this.tokenize(a);
        }
    } else {
        this.tokenize(node.b);
    }
}
