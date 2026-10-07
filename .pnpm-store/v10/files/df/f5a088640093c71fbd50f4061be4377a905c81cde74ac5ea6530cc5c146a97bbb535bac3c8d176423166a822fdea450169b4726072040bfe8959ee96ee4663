var WHITESPACE = require('../../tokenizer').TYPE.WhiteSpace;
var SPACE = Object.freeze({
    type: 'WhiteSpace',
    loc: null,
    value: ' '
});

module.exports = {
    name: 'WhiteSpace',
    structure: {
        value: String
    },
    parse: function() {
        this.eat(WHITESPACE);
        return SPACE;

        // return {
        //     type: 'WhiteSpace',
        //     loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
        //     value: this.consume(WHITESPACE)
        // };
    },
    generate: function(node) {
        this.chunk(node.value);
    }
};
