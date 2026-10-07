// re-export existsSync?
const { accessSync, constants } = require("node:fs");
/**
* Does the current process have {@link mode} access?
* By default, checks if the path is visible to the proccess.
*
* @param mode A `fs.constants` value; default `F_OK`
*/
function ok(path, mode) {
	try {
		accessSync(path, mode);
		return true;
	} catch {
		return false;
	}
}
/**
* Can the current process write to this path?
*/
function writable(path) {
	return ok(path, constants.W_OK);
}
/**
* Can the current process read this path?
*/
function readable(path) {
	return ok(path, constants.R_OK);
}
/**
* Can the current process execute this path?
*/
function executable(path) {
	return ok(path, constants.X_OK);
}

exports.ok = ok;
exports.writable = writable;
exports.readable = readable;
exports.executable = executable;