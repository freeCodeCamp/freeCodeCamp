'use strict';
const stripAnsi = require('strip-ansi');
const astralRegex = require('astral-regex');

module.exports = input => stripAnsi(input).replace(astralRegex(), ' ').length;
