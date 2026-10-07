var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var IDENT = TYPE.Ident;
var FUNCTION = TYPE.Function;
var COLON = TYPE.Colon;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;

function consumeRaw() {
    return this.createSingleNodeList(
        this.Raw(this.scanner.tokenIndex, null, false)
    );
}

function parentheses() {
    this.scanner.skipSC();

    if (this.scanner.tokenType === IDENT &&
        this.lookupNonWSType(1) === COLON) {
        return this.createSingleNodeList(
            this.Declaration()
        );
    }

    return readSequence.call(this);
}

function readSequence() {
    var children = this.createList();
    var space = null;
    var child;

    this.scanner.skipSC();

    scan:
    while (!this.scanner.eof) {
        switch (this.scanner.tokenType) {
            case WHITESPACE:
                space = this.WhiteSpace();
                continue;

            case COMMENT:
                this.scanner.next();
                continue;

            case FUNCTION:
                child = this.Function(consumeRaw, this.scope.AtrulePrelude);
                break;

            case IDENT:
                child = this.Identifier();
                break;

            case LEFTPARENTHESIS:
                child = this.Parentheses(parentheses, this.scope.AtrulePrelude);
                break;

            default:
                break scan;
        }

        if (space !== null) {
            children.push(space);
            space = null;
        }

        children.push(child);
    }

    return children;
}

module.exports = {
    parse: {
        prelude: function() {
            var children = readSequence.call(this);

            if (this.getFirstListNode(children) === null) {
                this.error('Condition is expected');
            }

            return children;
        },
        block: function() {
            return this.Block(false);
        }
    }
};
