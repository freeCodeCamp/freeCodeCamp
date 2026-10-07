var TYPE = require('../../tokenizer').TYPE;

var IDENT = TYPE.Ident;
var FUNCTION = TYPE.Function;
var COLON = TYPE.Colon;
var RIGHTPARENTHESIS = TYPE.RightParenthesis;

// :: [ <ident> | <function-token> <any-value>? ) ]
module.exports = {
    name: 'PseudoElementSelector',
    structure: {
        name: String,
        children: [['Raw'], null]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = null;
        var name;
        var nameLowerCase;

        this.eat(COLON);
        this.eat(COLON);

        if (this.scanner.tokenType === FUNCTION) {
            name = this.consumeFunctionName();
            nameLowerCase = name.toLowerCase();

            if (this.pseudo.hasOwnProperty(nameLowerCase)) {
                this.scanner.skipSC();
                children = this.pseudo[nameLowerCase].call(this);
                this.scanner.skipSC();
            } else {
                children = this.createList();
                children.push(
                    this.Raw(this.scanner.tokenIndex, null, false)
                );
            }

            this.eat(RIGHTPARENTHESIS);
        } else {
            name = this.consume(IDENT);
        }

        return {
            type: 'PseudoElementSelector',
            loc: this.getLocation(start, this.scanner.tokenStart),
            name: name,
            children: children
        };
    },
    generate: function(node) {
        this.chunk('::');
        this.chunk(node.name);

        if (node.children !== null) {
            this.chunk('(');
            this.children(node);
            this.chunk(')');
        }
    },
    walkContext: 'function'
};
