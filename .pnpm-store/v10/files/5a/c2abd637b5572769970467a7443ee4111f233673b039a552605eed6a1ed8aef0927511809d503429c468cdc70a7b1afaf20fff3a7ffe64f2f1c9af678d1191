import { createRequire } from "node:module";
import { isAbsolute, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
/**
* Resolve an absolute path from {@link root}, but only
* if {@link input} isn't already absolute.
*
* @param input The path to resolve.
* @param root The base path; default = process.cwd()
* @returns The resolved absolute path.
*/
export function absolute(input, root) {
	return isAbsolute(input) ? input : resolve(root || ".", input);
}
export function from(root, ident, silent) {
	try {
		// NOTE: dirs need a trailing "/" OR filename. With "/" route,
		// Node adds "noop.js" as main file, so just do "noop.js" anyway.
		let r = root instanceof URL || root.startsWith("file://") ? join(fileURLToPath(root), "noop.js") : join(absolute(root), "noop.js");
		return createRequire(r).resolve(ident);
	} catch (err) {
		if (!silent) throw err;
	}
}
export function cwd(ident, silent) {
	return from(resolve(), ident, silent);
}
