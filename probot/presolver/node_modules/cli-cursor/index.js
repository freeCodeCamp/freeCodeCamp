'use strict';
var restoreCursor = require('restore-cursor');
var hidden = false;

exports.show = function () {
	hidden = false;
	process.stdout.write('\u001b[?25h');
};

exports.hide = function () {
	restoreCursor();
	hidden = true;
	process.stdout.write('\u001b[?25l');
};

exports.toggle = function (force) {
	if (force !== undefined) {
		hidden = force;
	}

	if (hidden) {
		exports.show();
	} else {
		exports.hide();
	}
};
