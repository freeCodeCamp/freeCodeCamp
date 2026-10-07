'use strict';
const ansiRegex = require('ansi-regex');

module.exports = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;
