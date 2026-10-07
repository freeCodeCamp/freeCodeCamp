var walk = require('css-tree').walk;
var handlers = {
    Atrule: require('./Atrule'),
    Comment: require('./Comment'),
    Declaration: require('./Declaration'),
    Raw: require('./Raw'),
    Rule: require('./Rule'),
    TypeSelector: require('./TypeSelector'),
    WhiteSpace: require('./WhiteSpace')
};

module.exports = function(ast, options) {
    walk(ast, {
        leave: function(node, item, list) {
            if (handlers.hasOwnProperty(node.type)) {
                handlers[node.type].call(this, node, item, list, options);
            }
        }
    });
};
