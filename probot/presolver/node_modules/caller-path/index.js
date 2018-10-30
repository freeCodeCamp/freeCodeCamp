'use strict';
var callsites = require('callsites');

module.exports = function () {
	return callsites()[2].getFileName();
};
