var isDigit = require('../../tokenizer').isDigit;
var TYPE = require('../../tokenizer').TYPE;

var NUMBER = TYPE.Number;
var DELIM = TYPE.Delim;
var SOLIDUS = 0x002F;  // U+002F SOLIDUS (/)
var FULLSTOP = 0x002E; // U+002E FULL STOP (.)

// Terms of <ratio> should be a positive numbers (not zero or negative)
// (see https://drafts.csswg.org/mediaqueries-3/#values)
// However, -o-min-device-pixel-ratio takes fractional values as a ratio's term
// and this is using by various sites. Therefore we relax checking on parse
// to test a term is unsigned number without an exponent part.
// Additional checking may be applied on lexer validation.
function consumeNumber() {
    this.scanner.skipWS();

    var value = this.consume(NUMBER);

    for (var i = 0; i < value.length; i++) {
        var code = value.charCodeAt(i);
        if (!isDigit(code) && code !== FULLSTOP) {
            this.error('Unsigned number is expected', this.scanner.tokenStart - value.length + i);
        }
    }

    if (Number(value) === 0) {
        this.error('Zero number is not allowed', this.scanner.tokenStart - value.length);
    }

    return value;
}

// <positive-integer> S* '/' S* <positive-integer>
module.exports = {
    name: 'Ratio',
    structure: {
        left: String,
        right: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var left = consumeNumber.call(this);
        var right;

        this.scanner.skipWS();

        if (!this.scanner.isDelim(SOLIDUS)) {
            this.error('Solidus is expected');
        }
        this.eat(DELIM);
        right = consumeNumber.call(this);

        return {
            type: 'Ratio',
            loc: this.getLocation(start, this.scanner.tokenStart),
            left: left,
            right: right
        };
    },
    generate: function(node) {
        this.chunk(node.left);
        this.chunk('/');
        this.chunk(node.right);
    }
};
