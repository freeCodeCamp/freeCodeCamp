'use strict';
const cryptoRandomString = require('crypto-random-string');

module.exports = () => cryptoRandomString(32);
