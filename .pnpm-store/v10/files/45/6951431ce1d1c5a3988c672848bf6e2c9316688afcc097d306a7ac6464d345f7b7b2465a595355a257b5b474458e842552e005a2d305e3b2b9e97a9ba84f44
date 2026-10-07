'use strict';

var isCoreModule = require('is-core-module');
var data = require('./core.json');

var core = {};
for (var mod in data) { // eslint-disable-line no-restricted-syntax
    if (Object.prototype.hasOwnProperty.call(data, mod)) {
        core[mod] = isCoreModule(mod);
    }
}
module.exports = core;
