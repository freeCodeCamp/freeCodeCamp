#! /usr/bin/env node

'use strict';

var createHash = require('./browserify');
var argv = process.argv.slice(2);

function pipe(algorithm, s) {
	var start = Date.now();
	var hash = createHash(algorithm || 'sha1');

	s.on('data', function (data) {
		hash.update(data);
	});

	s.on('end', function () {
		if (process.env.DEBUG) {
			console.log(hash.digest('hex'), Date.now() - start);
		} else {
			console.log(hash.digest('hex'));
		}
	});
}

function usage() {
	console.error('sha.js [algorithm=sha1] [filename] # hash filename with algorithm');
	console.error('input | sha.js [algorithm=sha1]    # hash stdin with algorithm');
	console.error('sha.js --help                      # display this message');
}

if (!process.stdin.isTTY) {
	pipe(argv[0], process.stdin);
} else if (argv.length) {
	if ((/--help|-h/).test(argv[0])) {
		usage();
	} else {
		var filename = argv.pop();
		var algorithm = argv.pop();
		// eslint-disable-next-line global-require
		pipe(algorithm, require('fs').createReadStream(filename));
	}
} else {
	usage();
}
