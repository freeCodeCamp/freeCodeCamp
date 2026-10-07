'use strict';
const getValue = require('./getValue.js');

/** @type {(...rules: import('postcss').Declaration[]) => string} */
module.exports = (...rules) => rules.map(getValue).join(' ');
