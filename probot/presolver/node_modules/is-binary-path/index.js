'use strict';
var path = require('path');
var binaryExtensions = require('binary-extensions');
var exts = Object.create(null);

binaryExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	return path.extname(filepath).slice(1).toLowerCase() in exts;
};
