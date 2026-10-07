var TYPE = require('../../tokenizer').TYPE;

var HASH = TYPE.Hash;

// <hash-token>
module.exports = {
    name: 'IdSelector',
    structure: {
        name: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        // TODO: check value is an ident
        this.eat(HASH);

        return {
            type: 'IdSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: this.scanner.substrToCursor(start + 1)
        };
    },
    generate: function(node) {
        this.chunk('#');
        this.chunk(node.name);
    }
};
