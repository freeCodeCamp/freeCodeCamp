const { dirname, resolve } = require('path');
const { readdir, stat } = require('fs');
const { promisify } = require('util');

const toStats = promisify(stat);
const toRead = promisify(readdir);

module.exports = async function (start, callback) {
	let dir = resolve('.', start);
	let tmp, stats = await toStats(dir);

	if (!stats.isDirectory()) {
		dir = dirname(dir);
	}

	while (true) {
		tmp = await callback(dir, await toRead(dir));
		if (tmp) return resolve(dir, tmp);
		dir = dirname(tmp = dir);
		if (tmp === dir) break;
	}
}
