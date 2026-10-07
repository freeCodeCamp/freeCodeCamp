var isCustomProperty = require('../../utils/names').isCustomProperty;
var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('./Raw').mode;

var IDENT = TYPE.Ident;
var HASH = TYPE.Hash;
var COLON = TYPE.Colon;
var SEMICOLON = TYPE.Semicolon;
var DELIM = TYPE.Delim;
var WHITESPACE = TYPE.WhiteSpace;
var EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)
var NUMBERSIGN = 0x0023;      // U+0023 NUMBER SIGN (#)
var DOLLARSIGN = 0x0024;      // U+0024 DOLLAR SIGN ($)
var AMPERSAND = 0x0026;       // U+0026 ANPERSAND (&)
var ASTERISK = 0x002A;        // U+002A ASTERISK (*)
var PLUSSIGN = 0x002B;        // U+002B PLUS SIGN (+)
var SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)

function consumeValueRaw(startToken) {
    return this.Raw(startToken, rawMode.exclamationMarkOrSemicolon, true);
}

function consumeCustomPropertyRaw(startToken) {
    return this.Raw(startToken, rawMode.exclamationMarkOrSemicolon, false);
}

function consumeValue() {
    var startValueToken = this.scanner.tokenIndex;
    var value = this.Value();

    if (value.type !== 'Raw' &&
        this.scanner.eof === false &&
        this.scanner.tokenType !== SEMICOLON &&
        this.scanner.isDelim(EXCLAMATIONMARK) === false &&
        this.scanner.isBalanceEdge(startValueToken) === false) {
        this.error();
    }

    return value;
}

module.exports = {
    name: 'Declaration',
    structure: {
        important: [Boolean, String],
        property: String,
        value: ['Value', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var startToken = this.scanner.tokenIndex;
        var property = readProperty.call(this);
        var customProperty = isCustomProperty(property);
        var parseValue = customProperty ? this.parseCustomProperty : this.parseValue;
        var consumeRaw = customProperty ? consumeCustomPropertyRaw : consumeValueRaw;
        var important = false;
        var value;

        this.scanner.skipSC();
        this.eat(COLON);

        const valueStart = this.scanner.tokenIndex;

        if (!customProperty) {
            this.scanner.skipSC();
        }

        if (parseValue) {
            value = this.parseWithFallback(consumeValue, consumeRaw);
        } else {
            value = consumeRaw.call(this, this.scanner.tokenIndex);
        }

        if (customProperty && value.type === 'Value' && value.children.isEmpty()) {
            for (let offset = valueStart - this.scanner.tokenIndex; offset <= 0; offset++) {
                if (this.scanner.lookupType(offset) === WHITESPACE) {
                    value.children.appendData({
                        type: 'WhiteSpace',
                        loc: null,
                        value: ' '
                    });
                    break;
                }
            }
        }

        if (this.scanner.isDelim(EXCLAMATIONMARK)) {
            important = getImportant.call(this);
            this.scanner.skipSC();
        }

        // Do not include semicolon to range per spec
        // https://drafts.csswg.org/css-syntax/#declaration-diagram

        if (this.scanner.eof === false &&
            this.scanner.tokenType !== SEMICOLON &&
            this.scanner.isBalanceEdge(startToken) === false) {
            this.error();
        }

        return {
            type: 'Declaration',
            loc: this.getLocation(start, this.scanner.tokenStart),
            important: important,
            property: property,
            value: value
        };
    },
    generate: function(node) {
        this.chunk(node.property);
        this.chunk(':');
        this.node(node.value);

        if (node.important) {
            this.chunk(node.important === true ? '!important' : '!' + node.important);
        }
    },
    walkContext: 'declaration'
};

function readProperty() {
    var start = this.scanner.tokenStart;
    var prefix = 0;

    // hacks
    if (this.scanner.tokenType === DELIM) {
        switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
            case ASTERISK:
            case DOLLARSIGN:
            case PLUSSIGN:
            case NUMBERSIGN:
            case AMPERSAND:
                this.scanner.next();
                break;

            // TODO: not sure we should support this hack
            case SOLIDUS:
                this.scanner.next();
                if (this.scanner.isDelim(SOLIDUS)) {
                    this.scanner.next();
                }
                break;
        }
    }

    if (prefix) {
        this.scanner.skip(prefix);
    }

    if (this.scanner.tokenType === HASH) {
        this.eat(HASH);
    } else {
        this.eat(IDENT);
    }

    return this.scanner.substrToCursor(start);
}

// ! ws* important
function getImportant() {
    this.eat(DELIM);
    this.scanner.skipSC();

    var important = this.consume(IDENT);

    // store original value in case it differ from `important`
    // for better original source restoring and hacks like `!ie` support
    return important === 'important' ? true : important;
}
