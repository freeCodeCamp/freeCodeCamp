'use strict';

module.exports = require('./is-implemented')() ? Set : require('./polyfill');
