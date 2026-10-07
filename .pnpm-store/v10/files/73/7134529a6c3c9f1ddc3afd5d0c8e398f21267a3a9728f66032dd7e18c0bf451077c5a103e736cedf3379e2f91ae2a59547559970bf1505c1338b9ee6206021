var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var ASTERISK = 0x002A;     // U+002A ASTERISK (*)
var VERTICALLINE = 0x007C; // U+007C VERTICAL LINE (|)

function eatIdentifierOrAsterisk() {
    if (this.scanner.tokenType !== IDENT &&
        this.scanner.isDelim(ASTERISK) === false) {
        this.error('Identifier or asterisk is expected');
    }

    this.scanner.next();
}

// ident
// ident|ident
// ident|*
// *
// *|ident
// *|*
// |ident
// |*
module.exports = {
    name: 'TypeSelector',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        if (this.scanner.isDelim(VERTICALLINE)) {
            this.scanner.next();
            eatIdentifierOrAsterisk.call(this);
        } else {
            eatIdentifierOrAsterisk.call(this);

            if (this.scanner.isDelim(VERTICALLINE)) {
                this.scanner.next();
                eatIdentifierOrAsterisk.call(this);
            }
        }

        return {
            type: 'TypeSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start)
        };
    },
    generate: function(node) {
        this.chunk(node.name);
    }
};
