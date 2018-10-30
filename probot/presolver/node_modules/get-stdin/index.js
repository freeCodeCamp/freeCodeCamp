'use strict';
var stdin = process.stdin;

module.exports = function () {
	var ret = '';

	return new Promise(function (resolve) {
		if (stdin.isTTY) {
			resolve(ret);
			return;
		}

		stdin.setEncoding('utf8');

		stdin.on('readable', function () {
			var chunk;

			while ((chunk = stdin.read())) {
				ret += chunk;
			}
		});

		stdin.on('end', function () {
			resolve(ret);
		});
	});
};

module.exports.buffer = function () {
	var ret = [];
	var len = 0;

	return new Promise(function (resolve) {
		if (stdin.isTTY) {
			resolve(new Buffer(''));
			return;
		}

		stdin.on('readable', function () {
			var chunk;

			while ((chunk = stdin.read())) {
				ret.push(chunk);
				len += chunk.length;
			}
		});

		stdin.on('end', function () {
			resolve(Buffer.concat(ret, len));
		});
	});
};
