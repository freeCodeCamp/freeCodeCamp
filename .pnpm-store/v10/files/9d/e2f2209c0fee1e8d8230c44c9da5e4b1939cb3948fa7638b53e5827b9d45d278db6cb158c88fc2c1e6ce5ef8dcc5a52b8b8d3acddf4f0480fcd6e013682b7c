var tokenize = require('../tokenizer');
var TokenStream = require('../common/TokenStream');
var tokenStream = new TokenStream();
var astToTokens = {
    decorator: function(handlers) {
        var curNode = null;
        var prev = { len: 0, node: null };
        var nodes = [prev];
        var buffer = '';

        return {
            children: handlers.children,
            node: function(node) {
                var tmp = curNode;
                curNode = node;
                handlers.node.call(this, node);
                curNode = tmp;
            },
            chunk: function(chunk) {
                buffer += chunk;
                if (prev.node !== curNode) {
                    nodes.push({
                        len: chunk.length,
                        node: curNode
                    });
                } else {
                    prev.len += chunk.length;
                }
            },
            result: function() {
                return prepareTokens(buffer, nodes);
            }
        };
    }
};

function prepareTokens(str, nodes) {
    var tokens = [];
    var nodesOffset = 0;
    var nodesIndex = 0;
    var currentNode = nodes ? nodes[nodesIndex].node : null;

    tokenize(str, tokenStream);

    while (!tokenStream.eof) {
        if (nodes) {
            while (nodesIndex < nodes.length && nodesOffset + nodes[nodesIndex].len <= tokenStream.tokenStart) {
                nodesOffset += nodes[nodesIndex++].len;
                currentNode = nodes[nodesIndex].node;
            }
        }

        tokens.push({
            type: tokenStream.tokenType,
            value: tokenStream.getTokenValue(),
            index: tokenStream.tokenIndex, // TODO: remove it, temporary solution
            balance: tokenStream.balance[tokenStream.tokenIndex], // TODO: remove it, temporary solution
            node: currentNode
        });
        tokenStream.next();
        // console.log({ ...tokens[tokens.length - 1], node: undefined });
    }

    return tokens;
}

module.exports = function(value, syntax) {
    if (typeof value === 'string') {
        return prepareTokens(value, null);
    }

    return syntax.generate(value, astToTokens);
};
