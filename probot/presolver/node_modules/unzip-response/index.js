'use strict';
const PassThrough = require('stream').PassThrough;
const zlib = require('zlib');

module.exports = res => {
	// TODO: use Array#includes when targeting Node.js 6
	if (['gzip', 'deflate'].indexOf(res.headers['content-encoding']) === -1) {
		return res;
	}

	const unzip = zlib.createUnzip();
	const stream = new PassThrough();

	stream.httpVersion = res.httpVersion;
	stream.headers = res.headers;
	stream.rawHeaders = res.rawHeaders;
	stream.trailers = res.trailers;
	stream.rawTrailers = res.rawTrailers;
	stream.setTimeout = res.setTimeout.bind(res);
	stream.statusCode = res.statusCode;
	stream.statusMessage = res.statusMessage;
	stream.socket = res.socket;

	unzip.on('error', err => {
		if (err.code === 'Z_BUF_ERROR') {
			stream.end();
			return;
		}

		stream.emit('error', err);
	});

	res.pipe(unzip).pipe(stream);

	return stream;
};
