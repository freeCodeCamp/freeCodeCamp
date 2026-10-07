import { env } from "node:process";
import { dirname, join } from "node:path";
import { existsSync, mkdirSync } from "node:fs";
import { writable } from "empathic/access";
import * as find from "empathic/find";
/**
* Find the closest "package.json" file while walking parent directories.
* @returns The absolute path to a "package.json", if found.
*/
export function up(options) {
	return find.up("package.json", options);
}
/**
* Construct a path to a `node_modules/.cache/<name>` directory.
*
* This may return `undefined` if:
*   1. no "package.json" could be found
*   2. the nearest "node_modules" directory is not writable
*   3. the "node_modules" parent directory is not writable
*
* > [NOTE]
* > You may define a `CACHE_DIR` environment variable, which will be
* > used (as defined) instead of traversing the filesystem for the
* > closest "package.json" and inferring a "node_modules" location.
*
* @see find-cache-dir for more information.
*
* @param name The name of your module/cache.
* @returns The absolute path of the cache directory, if found.
*/
export function cache(name, options) {
	options = options || {};
	let dir = env.CACHE_DIR;
	if (!dir || /^(1|0|true|false)$/.test(dir)) {
		let pkg = up(options);
		if (dir = pkg && dirname(pkg)) {
			let mods = join(dir, "node_modules");
			let exists = existsSync(mods);
			// exit cuz exists but not writable
			// or cuz missing but parent not writable
			if (!writable(exists ? mods : dir)) return;
			dir = join(mods, ".cache");
		}
	}
	if (dir) {
		dir = join(dir, name);
		if (options.create && !existsSync(dir)) {
			mkdirSync(dir, { recursive: true });
		}
		return dir;
	}
}
