var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('./Raw').mode;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var SEMICOLON = TYPE.Semicolon;

function consumeRaw(startToken) {
    return this.Raw(startToken, rawMode.semicolonIncluded, true);
}

module.exports = {
    name: 'DeclarationList',
    structure: {
        children: [[
            'Declaration'
        ]]
    },
    parse: function() {
        var children = this.createList();

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case WHITESPACE:
                case COMMENT:
                case SEMICOLON:
                    this.scanner.next();
                    break;

                default:
                    children.push(this.parseWithFallback(this.Declaration, consumeRaw));
            }
        }

        return {
            type: 'DeclarationList',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        this.children(node, function(prev) {
            if (prev.type === 'Declaration') {
                this.chunk(';');
            }
        });
    }
};
