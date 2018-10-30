var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';
