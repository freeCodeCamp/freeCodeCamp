'use strict';
const ansiRegex = require('ansi-regex');

module.exports = input => typeof input === 'string' ? input.replace(ansiRegex(), '') : input;
