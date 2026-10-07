const { createRequire } = require("node:module");
const { isAbsolute, join, resolve } = require("node:path");
const { fileURLToPath } = require("node:url");
/**
* Resolve an absolute path from {@link root}, but only
* if {@link input} isn't already absolute.
*
* @param input The path to resolve.
* @param root The base path; default = process.cwd()
* @returns The resolved absolute path.
*/
function absolute(input, root) {
	return isAbsolute(input) ? input : resolve(root || ".", input);
}
function from(root, ident, silent) {
	try {
		// NOTE: dirs need a trailing "/" OR filename. With "/" route,
		// Node adds "noop.js" as main file, so just do "noop.js" anyway.
		let r = root instanceof URL || root.startsWith("file://") ? join(fileURLToPath(root), "noop.js") : join(absolute(root), "noop.js");
		return createRequire(r).resolve(ident);
	} catch (err) {
		if (!silent) throw err;
	}
}
function cwd(ident, silent) {
	return from(resolve(), ident, silent);
}

exports.absolute = absolute;
exports.from = from;
exports.cwd = cwd;