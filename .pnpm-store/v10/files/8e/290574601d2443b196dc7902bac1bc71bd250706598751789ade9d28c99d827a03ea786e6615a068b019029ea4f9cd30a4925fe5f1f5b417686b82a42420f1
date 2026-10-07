function merge() {
    var dest = {};

    for (var i = 0; i < arguments.length; i++) {
        var src = arguments[i];
        for (var key in src) {
            dest[key] = src[key];
        }
    }

    return dest;
}

module.exports = require('./create').create(
    merge(
        require('./config/lexer'),
        require('./config/parser'),
        require('./config/walker')
    )
);
module.exports.version = require('../../package.json').version;
