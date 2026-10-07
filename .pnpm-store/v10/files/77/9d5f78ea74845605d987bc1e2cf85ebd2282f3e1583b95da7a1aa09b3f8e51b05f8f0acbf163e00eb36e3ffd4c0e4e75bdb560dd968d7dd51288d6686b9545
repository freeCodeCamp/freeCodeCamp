var TYPE = require('../../tokenizer').TYPE;

var WHITESPACE = TYPE.WhiteSpace;
var COMMENT = TYPE.Comment;
var ATKEYWORD = TYPE.AtKeyword;
var CDO = TYPE.CDO;
var CDC = TYPE.CDC;
var EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)

function consumeRaw(startToken) {
    return this.Raw(startToken, null, false);
}

module.exports = {
    name: 'StyleSheet',
    structure: {
        children: [[
            'Comment',
            'CDO',
            'CDC',
            'Atrule',
            'Rule',
            'Raw'
        ]]
    },
    parse: function() {
        var start = this.scanner.tokenStart;
        var children = this.createList();
        var child;

        scan:
        while (!this.scanner.eof) {
            switch (this.scanner.tokenType) {
                case WHITESPACE:
                    this.scanner.next();
                    continue;

                case COMMENT:
                    // ignore comments except exclamation comments (i.e. /*! .. */) on top level
                    if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== EXCLAMATIONMARK) {
                        this.scanner.next();
                        continue;
                    }

                    child = this.Comment();
                    break;

                case CDO: // <!--
                    child = this.CDO();
                    break;

                case CDC: // -->
                    child = this.CDC();
                    break;

                // CSS Syntax Module Level 3
                // §2.2 Error handling
                // At the "top level" of a stylesheet, an <at-keyword-token> starts an at-rule.
                case ATKEYWORD:
                    child = this.parseWithFallback(this.Atrule, consumeRaw);
                    break;

                // Anything else starts a qualified rule ...
                default:
                    child = this.parseWithFallback(this.Rule, consumeRaw);
            }

            children.push(child);
        }

        return {
            type: 'StyleSheet',
            loc: this.getLocation(start, this.scanner.tokenStart),
            children: children
        };
    },
    generate: function(node) {
        this.children(node);
    },
    walkContext: 'stylesheet'
};
