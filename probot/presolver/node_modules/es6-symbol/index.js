'use strict';

module.exports = require('./is-implemented')() ? Symbol : require('./polyfill');
