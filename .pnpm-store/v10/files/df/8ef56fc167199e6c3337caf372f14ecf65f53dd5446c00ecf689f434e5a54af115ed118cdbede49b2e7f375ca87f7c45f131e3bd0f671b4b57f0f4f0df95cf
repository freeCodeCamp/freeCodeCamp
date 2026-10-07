var consumeNumber = require('../../tokenizer/utils').consumeNumber;
var TYPE = require('../../tokenizer').TYPE;

var PERCENTAGE = TYPE.Percentage;

module.exports = {
    name: 'Percentage',
    structure: {
        value: String
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var numberEnd = consumeNumber(this.scanner.source, start);

        this.eat(PERCENTAGE);

        return {
            type: 'Percentage',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: this.scanner.source.substring(start, numberEnd)
        };
    },
    generate: function(node) {
        this.chunk(node.value);
        this.chunk('%');
    }
};
