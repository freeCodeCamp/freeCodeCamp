import { dirname, resolve } from 'path';
import { readdir, stat } from 'fs';
import { promisify } from 'util';

const toStats = promisify(stat);
const toRead = promisify(readdir);

export default async function (start, callback) {
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
