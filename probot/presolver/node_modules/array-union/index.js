'use strict';
var arrayUniq = require('array-uniq');

module.exports = function () {
	return arrayUniq([].concat.apply([], arguments));
};
