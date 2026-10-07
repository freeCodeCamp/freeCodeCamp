var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('./Raw').mode;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var SEMICOLON = TYPE.Semicolon;
var ATKEYWORD = TYPE.AtKeyword;
var LEFTCURLYBRACKET = TYPE.LeftCurlyBracket;
var RIGHTCURLYBRACKET = TYPE.RightCurlyBracket;

function consumeRaw(startToken) {
    return this.Raw(startToken, null, true);
}
function consumeRule() {
    return this.parseWithFallback(this.Rule, consumeRaw);
}
function consumeRawDeclaration(startToken) {
    return this.Raw(startToken, rawMode.semicolonIncluded, true);
}
function consumeDeclaration() {
    if (this.scanner.tokenType === SEMICOLON) {
        return consumeRawDeclaration.call(this, this.scanner.tokenIndex);
    }

    var node = this.parseWithFallback(this.Declaration, consumeRawDeclaration);

    if (this.scanner.tokenType === SEMICOLON) {
        this.scanner.next();
    }

    return node;
}

module.exports = {
    name: 'Block',
    structure: {
        children: [[
            'Atrule',
            'Rule',
            'Declaration'
        ]]
    },
    parse: function(isDeclaration) {
        var consumer = isDeclaration ? consumeDeclaration : consumeRule;

        var start = this.scanner.tokenStart;
        var children = this.createList();

        this.eat(LEFTCURLYBRACKET);

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case RIGHTCURLYBRACKET:
                    break scan;

                case WHITESPACE:
                case COMMENT:
                    this.scanner.next();
                    break;

                case ATKEYWORD:
                    children.push(this.parseWithFallback(this.Atrule, consumeRaw));
                    break;

                default:
                    children.push(consumer.call(this));
            }
        }

        if (!this.scanner.eof) {
            this.eat(RIGHTCURLYBRACKET);
        }

        return {
            type: 'Block',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        this.chunk('{');
        this.children(node, function(prev) {
            if (prev.type === 'Declaration') {
                this.chunk(';');
            }
        });
        this.chunk('}');
    },
    walkContext: 'block'
};
