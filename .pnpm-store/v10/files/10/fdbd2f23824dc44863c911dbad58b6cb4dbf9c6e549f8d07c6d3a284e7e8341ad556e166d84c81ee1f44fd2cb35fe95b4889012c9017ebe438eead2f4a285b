// re-export existsSync?
import { accessSync, constants } from "node:fs";
/**
* Does the current process have {@link mode} access?
* By default, checks if the path is visible to the proccess.
*
* @param mode A `fs.constants` value; default `F_OK`
*/
export function ok(path, mode) {
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
export function writable(path) {
	return ok(path, constants.W_OK);
}
/**
* Can the current process read this path?
*/
export function readable(path) {
	return ok(path, constants.R_OK);
}
/**
* Can the current process execute this path?
*/
export function executable(path) {
	return ok(path, constants.X_OK);
}
