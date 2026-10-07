var resolveName = require('css-tree').property;
var handlers = {
    'font': require('./property/font'),
    'font-weight': require('./property/font-weight'),
    'background': require('./property/background'),
    'border': require('./property/border'),
    'outline': require('./property/border')
};

module.exports = function compressValue(node) {
    if (!this.declaration) {
        return;
    }

    var property = resolveName(this.declaration.property);

    if (handlers.hasOwnProperty(property.basename)) {
        handlers[property.basename](node);
    }
};
