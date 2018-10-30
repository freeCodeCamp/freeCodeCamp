'use strict';

var cbs = [];
var called = false;

function exit(exit, signal) {
	if (called) {
		return;
	}

	called = true;

	cbs.forEach(function (el) {
		el();
	});

	if (exit === true) {
		process.exit(128 + signal);
	}
};

module.exports = function (cb) {
	cbs.push(cb);

	if (cbs.length === 1) {
		process.once('exit', exit);
		process.once('SIGINT', exit.bind(null, true, 2));
		process.once('SIGTERM', exit.bind(null, true, 15));
	}
};
