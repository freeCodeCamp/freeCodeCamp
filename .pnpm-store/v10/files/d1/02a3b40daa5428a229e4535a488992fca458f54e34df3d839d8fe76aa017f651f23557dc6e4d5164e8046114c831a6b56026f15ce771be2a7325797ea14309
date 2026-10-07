'use strict';

var tape = require('tape');
var crypto = require('pbkdf2/browser');

var vectors = require('hash-test-vectors/pbkdf2');

tape('pbkdf2', function (t) {
	vectors.forEach(function (input) {
		// skip inputs that will take way too long
		if (input.iterations > 10000) { return; }

		var key = crypto.pbkdf2Sync(input.password, input.salt, input.iterations, input.length);

		if (key.toString('hex') !== input.sha1) {
			console.log(input);
		}

		t.equal(key.toString('hex'), input.sha1);
	});

	t.end();
});
