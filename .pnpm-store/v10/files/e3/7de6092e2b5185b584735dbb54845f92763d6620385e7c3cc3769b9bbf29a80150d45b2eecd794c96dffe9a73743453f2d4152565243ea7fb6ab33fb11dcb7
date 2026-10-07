var TYPE = require('../../tokenizer').TYPE;

var LEFTSQUAREBRACKET = TYPE.LeftSquareBracket;
var RIGHTSQUAREBRACKET = TYPE.RightSquareBracket;

module.exports = {
    name: 'Brackets',
    structure: {
        children: [[]]
    },
    parse: function(readSequence, recognizer) {
        var start = this.scanner.tokenStart;
        var children = null;

        this.eat(LEFTSQUAREBRACKET);

        children = readSequence.call(this, recognizer);

        if (!this.scanner.eof) {
            this.eat(RIGHTSQUAREBRACKET);
        }

        return {
            type: 'Brackets',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        this.chunk('[');
        this.children(node);
        this.chunk(']');
    }
};
