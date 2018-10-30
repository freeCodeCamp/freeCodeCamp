'use strict';
var onetime = require('onetime');
var exitHook = require('exit-hook');

module.exports = onetime(function () {
	exitHook(function () {
		process.stdout.write('\u001b[?25h');
	});
});
