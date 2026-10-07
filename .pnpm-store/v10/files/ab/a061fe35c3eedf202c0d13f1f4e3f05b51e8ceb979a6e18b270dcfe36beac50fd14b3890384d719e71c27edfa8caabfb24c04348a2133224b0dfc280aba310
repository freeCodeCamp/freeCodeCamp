import { join, resolve } from 'path';
import { readdir, stat } from 'fs';
import { promisify } from 'util';

const toStats = promisify(stat);
const toRead = promisify(readdir);

export async function totalist(dir, callback, pre='') {
	dir = resolve('.', dir);
	await toRead(dir).then(arr => {
		return Promise.all(
			arr.map(str => {
				let abs = join(dir, str);
				return toStats(abs).then(stats => {
					return stats.isDirectory()
						? totalist(abs, callback, join(pre, str))
						: callback(join(pre, str), abs, stats)
				});
			})
		);
	});
}
