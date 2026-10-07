var TYPE = require('../../tokenizer').TYPE;
var rawMode = require('../node/Raw').mode;

var COMMA = TYPE.Comma;
var WHITESPACE = TYPE.WhiteSpace;

// var( <ident> , <value>? )
module.exports = function() {
    var children = this.createList();

    this.scanner.skipSC();

    // NOTE: Don't check more than a first argument is an ident, rest checks are for lexer
    children.push(this.Identifier());

    this.scanner.skipSC();

    if (this.scanner.tokenType === COMMA) {
        children.push(this.Operator());

        const startIndex = this.scanner.tokenIndex;
        const value = this.parseCustomProperty
            ? this.Value(null)
            : this.Raw(this.scanner.tokenIndex, rawMode.exclamationMarkOrSemicolon, false);

        if (value.type === 'Value' && value.children.isEmpty()) {
            for (let offset = startIndex - this.scanner.tokenIndex; offset <= 0; offset++) {
                if (this.scanner.lookupType(offset) === WHITESPACE) {
                    value.children.appendData({
                        type: 'WhiteSpace',
                        loc: null,
                        value: ' '
                    });
                    break;
                }
            }
        }

        children.push(value);
    }

    return children;
};
