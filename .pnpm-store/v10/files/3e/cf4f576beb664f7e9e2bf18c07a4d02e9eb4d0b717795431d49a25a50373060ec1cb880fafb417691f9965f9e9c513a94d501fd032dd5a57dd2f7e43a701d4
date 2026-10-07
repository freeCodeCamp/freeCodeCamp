var sourceMap = require('./sourceMap');
var hasOwnProperty = Object.prototype.hasOwnProperty;

function processChildren(node, delimeter) {
    var list = node.children;
    var prev = null;

    if (typeof delimeter !== 'function') {
        list.forEach(this.node, this);
    } else {
        list.forEach(function(node) {
            if (prev !== null) {
                delimeter.call(this, prev);
            }

            this.node(node);
            prev = node;
        }, this);
    }
}

module.exports = function createGenerator(config) {
    function processNode(node) {
        if (hasOwnProperty.call(types, node.type)) {
            types[node.type].call(this, node);
        } else {
            throw new Error('Unknown node type: ' + node.type);
        }
    }

    var types = {};

    if (config.node) {
        for (var name in config.node) {
            types[name] = config.node[name].generate;
        }
    }

    return function(node, options) {
        var buffer = '';
        var handlers = {
            children: processChildren,
            node: processNode,
            chunk: function(chunk) {
                buffer += chunk;
            },
            result: function() {
                return buffer;
            }
        };

        if (options) {
            if (typeof options.decorator === 'function') {
                handlers = options.decorator(handlers);
            }

            if (options.sourceMap) {
                handlers = sourceMap(handlers);
            }
        }

        handlers.node(node);

        return handlers.result();
    };
};
