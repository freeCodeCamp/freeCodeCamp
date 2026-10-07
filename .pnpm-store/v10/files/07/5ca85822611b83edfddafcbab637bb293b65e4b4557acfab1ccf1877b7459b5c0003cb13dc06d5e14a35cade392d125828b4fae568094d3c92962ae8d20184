var TYPE = require('../../tokenizer').TYPE;

var HASH = TYPE.Hash;

// '#' ident
module.exports = {
    name: 'Hash',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;

        this.eat(HASH);

        return {
            type: 'Hash',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.substrToCursor(start + 1)
        };
    },
    generate: function(node) {
        this.chunk('#');
        this.chunk(node.value);
    }
};
