const { join } = require("node:path");
const { existsSync, statSync } = require("node:fs");
const walk = require("empathic/walk");
/**
* Find an item by name, walking parent directories until found.
*
* @param name The item name to find.
* @returns The absolute path to the item, if found.
*/
function up(name, options) {
	let dir, tmp;
	let start = options && options.cwd || "";
	for (dir of walk.up(start, options)) {
		tmp = join(dir, name);
		if (existsSync(tmp)) return tmp;
	}
}
/**
* Get the first path that matches any of the names provided.
*
* > [NOTE]
* > The order of {@link names} is respected.
*
* @param names The item names to find.
* @returns The absolute path of the first item found, if any.
*/
function any(names, options) {
	let dir, start = options && options.cwd || "";
	let j = 0, len = names.length, tmp;
	for (dir of walk.up(start, options)) {
		for (j = 0; j < len; j++) {
			tmp = join(dir, names[j]);
			if (existsSync(tmp)) return tmp;
		}
	}
}
/**
* Find a file by name, walking parent directories until found.
*
* > [NOTE]
* > This function only returns a value for file matches.
* > A directory match with the same name will be ignored.
*
* @param name The file name to find.
* @returns The absolute path to the file, if found.
*/
function file(name, options) {
	let dir, tmp;
	let start = options && options.cwd || "";
	for (dir of walk.up(start, options)) {
		try {
			tmp = join(dir, name);
			if (statSync(tmp).isFile()) return tmp;
		} catch {}
	}
}
/**
* Find a directory by name, walking parent directories until found.
*
* > [NOTE]
* > This function only returns a value for directory matches.
* > A file match with the same name will be ignored.
*
* @param name The directory name to find.
* @returns The absolute path to the file, if found.
*/
function dir(name, options) {
	let dir, tmp;
	let start = options && options.cwd || "";
	for (dir of walk.up(start, options)) {
		try {
			tmp = join(dir, name);
			if (statSync(tmp).isDirectory()) return tmp;
		} catch {}
	}
}

exports.up = up;
exports.any = any;
exports.file = file;
exports.dir = dir;