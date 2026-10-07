/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @param {string} path path
 * @returns {{ paths: string[], segments: string[] }}} paths and segments
 */
module.exports = function getPaths(path) {
	if (path === "/") return { paths: ["/"], segments: [""] };
	const parts = path.split(/(.*?[\\/]+)/);
	const paths = [path];
	const segments = [parts[parts.length - 1]];
	let part = parts[parts.length - 1];
	path = path.slice(0, Math.max(0, path.length - part.length - 1));
	for (let i = parts.length - 2; i > 2; i -= 2) {
		paths.push(path);
		part = parts[i];
		path = path.slice(0, Math.max(0, path.length - part.length)) || "/";
		segments.push(part.slice(0, -1));
	}
	[, part] = parts;
	segments.push(part);
	paths.push(part);
	return {
		paths,
		segments,
	};
};

/**
 * @param {string} path path
 * @returns {string | null} basename or null
 */
module.exports.basename = function basename(path) {
	const i = path.lastIndexOf("/");
	const j = path.lastIndexOf("\\");
	const resolvedPath = i < 0 ? j : j < 0 ? i : i < j ? j : i;
	if (resolvedPath < 0) return null;
	const basename = path.slice(resolvedPath + 1);
	return basename;
};
