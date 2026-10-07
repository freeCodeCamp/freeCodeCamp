var isWhiteSpace = require('../../tokenizer').isWhiteSpace;
var cmpStr = require('../../tokenizer').cmpStr;
var TYPE = require('../../tokenizer').TYPE;

var FUNCTION = TYPE.Function;
var URL = TYPE.Url;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

// <url-token> | <function-token> <string> )
module.exports = {
    name: 'Url',
    structure: {
        value: ['String', 'Raw']
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var value;

        switch (this.scanner.tokenType) {
            case URL:
                var rawStart = start + 4;
                var rawEnd = this.scanner.tokenEnd - 1;

                while (rawStart < rawEnd && isWhiteSpace(this.scanner.source.charCodeAt(rawStart))) {
                    rawStart++;
                }

                while (rawStart < rawEnd && isWhiteSpace(this.scanner.source.charCodeAt(rawEnd - 1))) {
                    rawEnd--;
                }

                value = {
                    type: 'Raw',
                    loc: this.getLocation(rawStart, rawEnd),
                    value: this.scanner.source.substring(rawStart, rawEnd)
                };

                this.eat(URL);
                break;

            case FUNCTION:
                if (!cmpStr(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, 'url(')) {
                    this.error('Function name must be `url`');
                }

                this.eat(FUNCTION);
                this.scanner.skipSC();
                value = this.String();
                this.scanner.skipSC();
                this.eat(RIGHTPARENTHESIS);
                break;

            default:
                this.error('Url or Function is expected');
        }

        return {
            type: 'Url',
            loc: this.getLocation(start, this.scanner.tokenStart),
            value: value
        };
    },
    generate: function(node) {
        this.chunk('url');
        this.chunk('(');
        this.node(node.value);
        this.chunk(')');
    }
};
