var consumeNumber = require('../../tokenizer/utils').consumeNumber;
var TYPE = require('../../tokenizer').TYPE;

var DIMENSION = TYPE.Dimension;

module.exports = {
    name: 'Dimension',
    structure: {
        value: String,
        unit: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var numberEnd = consumeNumber(this.scanner.source, start);

        this.eat(DIMENSION);

        return {
            type: 'Dimension',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.source.substring(start, numberEnd),
            unit: this.scanner.source.substring(numberEnd, this.scanner.tokenStart)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
        this.chunk(node.unit);
    }
};
