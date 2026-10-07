'use strict';
const fs = require('fs');
const stream = require('stream');
const zlib = require('zlib');
const {promisify} = require('util');
const duplexer = require('duplexer');

const getOptions = options => ({level: 9, ...options});
const gzip = promisify(zlib.gzip);

module.exports = async (input, options) => {
	if (!input) {
		return 0;
	}

	const data = await gzip(input, getOptions(options));
	return data.length;
};

module.exports.sync = (input, options) => zlib.gzipSync(input, getOptions(options)).length;

module.exports.stream = options => {
	const input = new stream.PassThrough();
	const output = new stream.PassThrough();
	const wrapper = duplexer(input, output);

	let gzipSize = 0;
	const gzip = zlib.createGzip(getOptions(options))
		.on('data', buf => {
			gzipSize += buf.length;
		})
		.on('error', () => {
			wrapper.gzipSize = 0;
		})
		.on('end', () => {
			wrapper.gzipSize = gzipSize;
			wrapper.emit('gzip-size', gzipSize);
			output.end();
		});

	input.pipe(gzip);
	input.pipe(output, {end: false});

	return wrapper;
};

module.exports.file = (path, options) => {
	return new Promise((resolve, reject) => {
		const stream = fs.createReadStream(path);
		stream.on('error', reject);

		const gzipStream = stream.pipe(module.exports.stream(options));
		gzipStream.on('error', reject);
		gzipStream.on('gzip-size', resolve);
	});
};

module.exports.fileSync = (path, options) => module.exports.sync(fs.readFileSync(path), options);
