var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var IDENT = TYPE.Ident;
var LEFTPARENTHESIS = TYPE.LeftParenthesis;

module.exports = {
    name: 'MediaQuery',
    structure: {
        children: [[
            'Identifier',
            'MediaFeature',
            'WhiteSpace'
        ]]
    },
    parse: function() {
        this.scanner.skipSC();

        var children = this.createList();
        var child = null;
        var space = null;

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case COMMENT:
                    this.scanner.next();
                    continue;

                case WHITESPACE:
                    space = this.WhiteSpace();
                    continue;

                case IDENT:
                    child = this.Identifier();
                    break;

                case LEFTPARENTHESIS:
                    child = this.MediaFeature();
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

        if (child === null) {
            this.error('Identifier or parenthesis is expected');
        }

        return {
            type: 'MediaQuery',
            loc: this.getLocationFromList(children),
            children: children
        };
    },
    generate: function(node) {
        this.children(node);
    }
};
