var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var STRING = TYPE.String;
var COLON = TYPE.Colon;
var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;
var DOLLARSIGN = 0x0024;       // U+0024 DOLLAR SIGN ($)
var ASTERISK = 0x002A;         // U+002A ASTERISK (*)
var EQUALSSIGN = 0x003D;       // U+003D EQUALS SIGN (=)
var CIRCUMFLEXACCENT = 0x005E; // U+005E (^)
var VERTICALLINE = 0x007C;     // U+007C VERTICAL LINE (|)
var TILDE = 0x007E;            // U+007E TILDE (~)

function getAttributeName() {
    if (this.scanner.eof) {
        this.error('Unexpected end of input');
    }

    var start = this.scanner.tokenStart;
    var expectIdent = false;
    var checkColon = true;

    if (this.scanner.isDelim(ASTERISK)) {
        expectIdent = true;
        checkColon = false;
        this.scanner.next();
    } else if (!this.scanner.isDelim(VERTICALLINE)) {
        this.eat(IDENT);
    }

    if (this.scanner.isDelim(VERTICALLINE)) {
        if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 1) !== EQUALSSIGN) {
            this.scanner.next();
            this.eat(IDENT);
        } else if (expectIdent) {
            this.error('Identifier is expected', this.scanner.tokenEnd);
        }
    } else if (expectIdent) {
        this.error('Vertical line is expected');
    }

    if (checkColon && this.scanner.tokenType === COLON) {
        this.scanner.next();
        this.eat(IDENT);
    }

    return {
        type: 'Identifier',
        loc: this.getLocation(start, this.scanner.tokenStart),
        name: this.scanner.substrToCursor(start)
    };
}

function getOperator() {
    var start = this.scanner.tokenStart;
    var code = this.scanner.source.charCodeAt(start);

    if (code !== EQUALSSIGN &&        // =
        code !== TILDE &&             // ~=
        code !== CIRCUMFLEXACCENT &&  // ^=
        code !== DOLLARSIGN &&        // $=
        code !== ASTERISK &&          // *=
        code !== VERTICALLINE         // |=
    ) {
        this.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected');
    }

    this.scanner.next();

    if (code !== EQUALSSIGN) {
        if (!this.scanner.isDelim(EQUALSSIGN)) {
            this.error('Equal sign is expected');
        }

        this.scanner.next();
    }

    return this.scanner.substrToCursor(start);
}

// '[' <wq-name> ']'
// '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'
module.exports = {
    name: 'AttributeSelector',
    structure: {
        name: 'Identifier',
        matcher: [String, null],
        value: ['String', 'Identifier', null],
        flags: [String, null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var name;
        var matcher = null;
        var value = null;
        var flags = null;

        this.eat(LEFTSQUAREBRACKET);
        this.scanner.skipSC();

        name = getAttributeName.call(this);
        this.scanner.skipSC();

        if (this.scanner.tokenType !== RIGHTSQUAREBRACKET) {
            // avoid case `[name i]`
            if (this.scanner.tokenType !== IDENT) {
                matcher = getOperator.call(this);

                this.scanner.skipSC();

                value = this.scanner.tokenType === STRING
                    ? this.String()
                    : this.Identifier();

                this.scanner.skipSC();
            }

            // attribute flags
            if (this.scanner.tokenType === IDENT) {
                flags = this.scanner.getTokenValue();
                this.scanner.next();

                this.scanner.skipSC();
            }
        }

        this.eat(RIGHTSQUAREBRACKET);

        return {
            type: 'AttributeSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            matcher: matcher,
            value: value,
            flags: flags
        };
    },
    generate: function(node) {
        var flagsPrefix = ' ';

        this.chunk('[');
        this.node(node.name);

        if (node.matcher !== null) {
            this.chunk(node.matcher);

            if (node.value !== null) {
                this.node(node.value);

                // space between string and flags is not required
                if (node.value.type === 'String') {
                    flagsPrefix = '';
                }
            }
        }

        if (node.flags !== null) {
            this.chunk(flagsPrefix);
            this.chunk(node.flags);
        }

        this.chunk(']');
    }
};
