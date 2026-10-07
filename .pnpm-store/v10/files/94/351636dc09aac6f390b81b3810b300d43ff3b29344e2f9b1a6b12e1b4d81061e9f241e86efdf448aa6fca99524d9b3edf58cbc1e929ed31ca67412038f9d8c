var cmpChar = require('../../tokenizer').cmpChar;
var isDigit = require('../../tokenizer').isDigit;
var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var IDENT = TYPE.Ident;
var NUMBER = TYPE.Number;
var DIMENSION = TYPE.Dimension;
var PLUSSIGN = 0x002B;    // U+002B PLUS SIGN (+)
var HYPHENMINUS = 0x002D; // U+002D HYPHEN-MINUS (-)
var N = 0x006E;           // U+006E LATIN SMALL LETTER N (n)
var DISALLOW_SIGN = true;
var ALLOW_SIGN = false;

function checkInteger(offset, disallowSign) {
    var pos = this.scanner.tokenStart + offset;
    var code = this.scanner.source.charCodeAt(pos);

    if (code === PLUSSIGN || code === HYPHENMINUS) {
        if (disallowSign) {
            this.error('Number sign is not allowed');
        }
        pos++;
    }

    for (; pos < this.scanner.tokenEnd; pos++) {
        if (!isDigit(this.scanner.source.charCodeAt(pos))) {
            this.error('Integer is expected', pos);
        }
    }
}

function checkTokenIsInteger(disallowSign) {
    return checkInteger.call(this, 0, disallowSign);
}

function expectCharCode(offset, code) {
    if (!cmpChar(this.scanner.source, this.scanner.tokenStart + offset, code)) {
        var msg = '';

        switch (code) {
            case N:
                msg = 'N is expected';
                break;
            case HYPHENMINUS:
                msg = 'HyphenMinus is expected';
                break;
        }

        this.error(msg, this.scanner.tokenStart + offset);
    }
}

// ... <signed-integer>
// ... ['+' | '-'] <signless-integer>
function consumeB() {
    var offset = 0;
    var sign = 0;
    var type = this.scanner.tokenType;

    while (type === WHITESPACE || type === COMMENT) {
        type = this.scanner.lookupType(++offset);
    }

    if (type !== NUMBER) {
        if (this.scanner.isDelim(PLUSSIGN, offset) ||
            this.scanner.isDelim(HYPHENMINUS, offset)) {
            sign = this.scanner.isDelim(PLUSSIGN, offset) ? PLUSSIGN : HYPHENMINUS;

            do {
                type = this.scanner.lookupType(++offset);
            } while (type === WHITESPACE || type === COMMENT);

            if (type !== NUMBER) {
                this.scanner.skip(offset);
                checkTokenIsInteger.call(this, DISALLOW_SIGN);
            }
        } else {
            return null;
        }
    }

    if (offset > 0) {
        this.scanner.skip(offset);
    }

    if (sign === 0) {
        type = this.scanner.source.charCodeAt(this.scanner.tokenStart);
        if (type !== PLUSSIGN && type !== HYPHENMINUS) {
            this.error('Number sign is expected');
        }
    }

    checkTokenIsInteger.call(this, sign !== 0);
    return sign === HYPHENMINUS ? '-' + this.consume(NUMBER) : this.consume(NUMBER);
}

// An+B microsyntax https://www.w3.org/TR/css-syntax-3/#anb
module.exports = {
    name: 'AnPlusB',
    structure: {
        a: [String, null],
        b: [String, null]
    },
    parse: function() {
        /* eslint-disable brace-style*/
        var start = this.scanner.tokenStart;
        var a = null;
        var b = null;

        // <integer>
        if (this.scanner.tokenType === NUMBER) {
            checkTokenIsInteger.call(this, ALLOW_SIGN);
            b = this.consume(NUMBER);
        }

        // -n
        // -n <signed-integer>
        // -n ['+' | '-'] <signless-integer>
        // -n- <signless-integer>
        // <dashndashdigit-ident>
        else if (this.scanner.tokenType === IDENT && cmpChar(this.scanner.source, this.scanner.tokenStart, HYPHENMINUS)) {
            a = '-1';

            expectCharCode.call(this, 1, N);

            switch (this.scanner.getTokenLength()) {
                // -n
                // -n <signed-integer>
                // -n ['+' | '-'] <signless-integer>
                case 2:
                    this.scanner.next();
                    b = consumeB.call(this);
                    break;

                // -n- <signless-integer>
                case 3:
                    expectCharCode.call(this, 2, HYPHENMINUS);

                    this.scanner.next();
                    this.scanner.skipSC();

                    checkTokenIsInteger.call(this, DISALLOW_SIGN);

                    b = '-' + this.consume(NUMBER);
                    break;

                // <dashndashdigit-ident>
                default:
                    expectCharCode.call(this, 2, HYPHENMINUS);
                    checkInteger.call(this, 3, DISALLOW_SIGN);
                    this.scanner.next();

                    b = this.scanner.substrToCursor(start + 2);
            }
        }

        // '+'? n
        // '+'? n <signed-integer>
        // '+'? n ['+' | '-'] <signless-integer>
        // '+'? n- <signless-integer>
        // '+'? <ndashdigit-ident>
        else if (this.scanner.tokenType === IDENT || (this.scanner.isDelim(PLUSSIGN) && this.scanner.lookupType(1) === IDENT)) {
            var sign = 0;
            a = '1';

            // just ignore a plus
            if (this.scanner.isDelim(PLUSSIGN)) {
                sign = 1;
                this.scanner.next();
            }

            expectCharCode.call(this, 0, N);

            switch (this.scanner.getTokenLength()) {
                // '+'? n
                // '+'? n <signed-integer>
                // '+'? n ['+' | '-'] <signless-integer>
                case 1:
                    this.scanner.next();
                    b = consumeB.call(this);
                    break;

                // '+'? n- <signless-integer>
                case 2:
                    expectCharCode.call(this, 1, HYPHENMINUS);

                    this.scanner.next();
                    this.scanner.skipSC();

                    checkTokenIsInteger.call(this, DISALLOW_SIGN);

                    b = '-' + this.consume(NUMBER);
                    break;

                // '+'? <ndashdigit-ident>
                default:
                    expectCharCode.call(this, 1, HYPHENMINUS);
                    checkInteger.call(this, 2, DISALLOW_SIGN);
                    this.scanner.next();

                    b = this.scanner.substrToCursor(start + sign + 1);
            }
        }

        // <ndashdigit-dimension>
        // <ndash-dimension> <signless-integer>
        // <n-dimension>
        // <n-dimension> <signed-integer>
        // <n-dimension> ['+' | '-'] <signless-integer>
        else if (this.scanner.tokenType === DIMENSION) {
            var code = this.scanner.source.charCodeAt(this.scanner.tokenStart);
            var sign = code === PLUSSIGN || code === HYPHENMINUS;

            for (var i = this.scanner.tokenStart + sign; i < this.scanner.tokenEnd; i++) {
                if (!isDigit(this.scanner.source.charCodeAt(i))) {
                    break;
                }
            }

            if (i === this.scanner.tokenStart + sign) {
                this.error('Integer is expected', this.scanner.tokenStart + sign);
            }

            expectCharCode.call(this, i - this.scanner.tokenStart, N);
            a = this.scanner.source.substring(start, i);

            // <n-dimension>
            // <n-dimension> <signed-integer>
            // <n-dimension> ['+' | '-'] <signless-integer>
            if (i + 1 === this.scanner.tokenEnd) {
                this.scanner.next();
                b = consumeB.call(this);
            } else {
                expectCharCode.call(this, i - this.scanner.tokenStart + 1, HYPHENMINUS);

                // <ndash-dimension> <signless-integer>
                if (i + 2 === this.scanner.tokenEnd) {
                    this.scanner.next();
                    this.scanner.skipSC();
                    checkTokenIsInteger.call(this, DISALLOW_SIGN);
                    b = '-' + this.consume(NUMBER);
                }
                // <ndashdigit-dimension>
                else {
                    checkInteger.call(this, i - this.scanner.tokenStart + 2, DISALLOW_SIGN);
                    this.scanner.next();
                    b = this.scanner.substrToCursor(i + 1);
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
            loc: this.getLocation(start, this.scanner.tokenStart),
            a: a,
            b: b
        };
    },
    generate: function(node) {
        var a = node.a !== null && node.a !== undefined;
        var b = node.b !== null && node.b !== undefined;

        if (a) {
            this.chunk(
                node.a === '+1' ? '+n' : // eslint-disable-line operator-linebreak, indent
                node.a ===  '1' ?  'n' : // eslint-disable-line operator-linebreak, indent
                node.a === '-1' ? '-n' : // eslint-disable-line operator-linebreak, indent
                node.a + 'n'             // eslint-disable-line operator-linebreak, indent
            );

            if (b) {
                b = String(node.b);
                if (b.charAt(0) === '-' || b.charAt(0) === '+') {
                    this.chunk(b.charAt(0));
                    this.chunk(b.substr(1));
                } else {
                    this.chunk('+');
                    this.chunk(b);
                }
            }
        } else {
            this.chunk(String(node.b));
        }
    }
};
