import { dirname, resolve } from 'path';
import { readdirSync, statSync } from 'fs';

export default function (start, callback) {
	let dir = resolve('.', start);
	let tmp, stats = statSync(dir);

	if (!stats.isDirectory()) {
		dir = dirname(dir);
	}

	while (true) {
		tmp = callback(dir, readdirSync(dir));
		if (tmp) return resolve(dir, tmp);
		dir = dirname(tmp = dir);
		if (tmp === dir) break;
	}
}
