'use strict';

module.exports = require('./is-implemented')() ? Map : require('./polyfill');
