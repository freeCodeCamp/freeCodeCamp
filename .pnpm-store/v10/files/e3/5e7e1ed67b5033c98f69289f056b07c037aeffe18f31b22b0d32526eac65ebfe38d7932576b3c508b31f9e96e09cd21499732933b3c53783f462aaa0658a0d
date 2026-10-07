module.exports = {
    name: 'Nth',
    structure: {
        nth: ['AnPlusB', 'Identifier'],
        selector: ['SelectorList', null]
    },
    parse: function(allowOfClause) {
        this.scanner.skipSC();

        var start = this.scanner.tokenStart;
        var end = start;
        var selector = null;
        var query;

        if (this.scanner.lookupValue(0, 'odd') || this.scanner.lookupValue(0, 'even')) {
            query = this.Identifier();
        } else {
            query = this.AnPlusB();
        }

        this.scanner.skipSC();

        if (allowOfClause && this.scanner.lookupValue(0, 'of')) {
            this.scanner.next();

            selector = this.SelectorList();

            if (this.needPositions) {
                end = this.getLastListNode(selector.children).loc.end.offset;
            }
        } else {
            if (this.needPositions) {
                end = query.loc.end.offset;
            }
        }

        return {
            type: 'Nth',
            loc: this.getLocation(start, end),
            nth: query,
            selector: selector
        };
    },
    generate: function(node) {
        this.node(node.nth);
        if (node.selector !== null) {
            this.chunk(' of ');
            this.node(node.selector);
        }
    }
};
