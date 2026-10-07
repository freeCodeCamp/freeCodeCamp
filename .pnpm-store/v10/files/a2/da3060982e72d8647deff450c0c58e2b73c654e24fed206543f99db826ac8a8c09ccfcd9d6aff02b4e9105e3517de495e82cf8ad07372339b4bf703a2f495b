var CDC = require('../../tokenizer').TYPE.CDC;

module.exports = {
    name: 'CDC',
    structure: [],
    parse: function() {
        var start = this.scanner.tokenStart;

        this.eat(CDC); // -->

        return {
            type: 'CDC',
            loc: this.getLocation(start, this.scanner.tokenStart)
        };
    },
    generate: function() {
        this.chunk('-->');
    }
};
