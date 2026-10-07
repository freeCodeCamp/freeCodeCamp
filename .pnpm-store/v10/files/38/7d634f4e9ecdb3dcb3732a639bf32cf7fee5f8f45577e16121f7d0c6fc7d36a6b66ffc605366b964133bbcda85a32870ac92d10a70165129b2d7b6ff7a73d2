/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const path = require("path");

const CHAR_HASH = "#".charCodeAt(0);
const CHAR_SLASH = "/".charCodeAt(0);
const CHAR_BACKSLASH = "\\".charCodeAt(0);
const CHAR_A = "A".charCodeAt(0);
const CHAR_Z = "Z".charCodeAt(0);
const CHAR_LOWER_A = "a".charCodeAt(0);
const CHAR_LOWER_Z = "z".charCodeAt(0);
const CHAR_DOT = ".".charCodeAt(0);
const CHAR_COLON = ":".charCodeAt(0);

const posixNormalize = path.posix.normalize;
const winNormalize = path.win32.normalize;

/**
 * @enum {number}
 */
const PathType = Object.freeze({
	Empty: 0,
	Normal: 1,
	Relative: 2,
	AbsoluteWin: 3,
	AbsolutePosix: 4,
	Internal: 5,
});

const deprecatedInvalidSegmentRegEx =
	/(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))(\\|\/|$)/i;

const invalidSegmentRegEx =
	/(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))?(\\|\/|$)/i;

/**
 * @param {string} maybePath a path
 * @returns {PathType} type of path
 */
const getType = (maybePath) => {
	switch (maybePath.length) {
		case 0:
			return PathType.Empty;
		case 1: {
			const c0 = maybePath.charCodeAt(0);
			switch (c0) {
				case CHAR_DOT:
					return PathType.Relative;
				case CHAR_SLASH:
					return PathType.AbsolutePosix;
				case CHAR_HASH:
					return PathType.Internal;
			}
			return PathType.Normal;
		}
		case 2: {
			const c0 = maybePath.charCodeAt(0);
			switch (c0) {
				case CHAR_DOT: {
					const c1 = maybePath.charCodeAt(1);
					switch (c1) {
						case CHAR_DOT:
						case CHAR_SLASH:
							return PathType.Relative;
					}
					return PathType.Normal;
				}
				case CHAR_SLASH:
					return PathType.AbsolutePosix;
				case CHAR_HASH:
					return PathType.Internal;
			}
			const c1 = maybePath.charCodeAt(1);
			if (
				c1 === CHAR_COLON &&
				((c0 >= CHAR_A && c0 <= CHAR_Z) ||
					(c0 >= CHAR_LOWER_A && c0 <= CHAR_LOWER_Z))
			) {
				return PathType.AbsoluteWin;
			}
			return PathType.Normal;
		}
	}
	const c0 = maybePath.charCodeAt(0);
	switch (c0) {
		case CHAR_DOT: {
			const c1 = maybePath.charCodeAt(1);
			switch (c1) {
				case CHAR_SLASH:
					return PathType.Relative;
				case CHAR_DOT: {
					const c2 = maybePath.charCodeAt(2);
					if (c2 === CHAR_SLASH) return PathType.Relative;
					return PathType.Normal;
				}
			}
			return PathType.Normal;
		}
		case CHAR_SLASH:
			return PathType.AbsolutePosix;
		case CHAR_HASH:
			return PathType.Internal;
	}
	const c1 = maybePath.charCodeAt(1);
	if (c1 === CHAR_COLON) {
		const c2 = maybePath.charCodeAt(2);
		if (
			(c2 === CHAR_BACKSLASH || c2 === CHAR_SLASH) &&
			((c0 >= CHAR_A && c0 <= CHAR_Z) ||
				(c0 >= CHAR_LOWER_A && c0 <= CHAR_LOWER_Z))
		) {
			return PathType.AbsoluteWin;
		}
	}
	return PathType.Normal;
};

/**
 * @param {string} maybePath a path
 * @returns {string} the normalized path
 */
const normalize = (maybePath) => {
	switch (getType(maybePath)) {
		case PathType.Empty:
			return maybePath;
		case PathType.AbsoluteWin:
			return winNormalize(maybePath);
		case PathType.Relative: {
			const r = posixNormalize(maybePath);
			return getType(r) === PathType.Relative ? r : `./${r}`;
		}
	}
	return posixNormalize(maybePath);
};

/**
 * @param {string} rootPath the root path
 * @param {string | undefined} request the request path
 * @returns {string} the joined path
 */
const join = (rootPath, request) => {
	if (!request) return normalize(rootPath);
	const requestType = getType(request);
	switch (requestType) {
		case PathType.AbsolutePosix:
			return posixNormalize(request);
		case PathType.AbsoluteWin:
			return winNormalize(request);
	}
	switch (getType(rootPath)) {
		case PathType.Normal:
		case PathType.Relative:
		case PathType.AbsolutePosix:
			return posixNormalize(`${rootPath}/${request}`);
		case PathType.AbsoluteWin:
			return winNormalize(`${rootPath}\\${request}`);
	}
	switch (requestType) {
		case PathType.Empty:
			return rootPath;
		case PathType.Relative: {
			const r = posixNormalize(rootPath);
			return getType(r) === PathType.Relative ? r : `./${r}`;
		}
	}
	return posixNormalize(rootPath);
};

/**
 * @param {string} maybePath a path
 * @returns {string} the directory name
 */
const dirname = (maybePath) => {
	switch (getType(maybePath)) {
		case PathType.AbsoluteWin:
			return path.win32.dirname(maybePath);
	}
	return path.posix.dirname(maybePath);
};

/** @type {Map<string, Map<string, string | undefined>>} */
const joinCache = new Map();

/**
 * @param {string} rootPath the root path
 * @param {string} request the request path
 * @returns {string} the joined path
 */
const cachedJoin = (rootPath, request) => {
	/** @type {string | undefined} */
	let cacheEntry;
	let cache = joinCache.get(rootPath);
	if (cache === undefined) {
		joinCache.set(rootPath, (cache = new Map()));
	} else {
		cacheEntry = cache.get(request);
		if (cacheEntry !== undefined) return cacheEntry;
	}
	cacheEntry = join(rootPath, request);
	cache.set(request, cacheEntry);
	return cacheEntry;
};

/** @type {Map<string, string>} */
const dirnameCache = new Map();

/**
 * @param {string} maybePath a path
 * @returns {string} the directory name
 */
const cachedDirname = (maybePath) => {
	const cacheEntry = dirnameCache.get(maybePath);
	if (cacheEntry !== undefined) return cacheEntry;
	const result = dirname(maybePath);
	dirnameCache.set(maybePath, result);
	return result;
};

/**
 * Check if childPath is a subdirectory of parentPath
 * @param {string} parentPath parent directory path
 * @param {string} childPath child path to check
 * @returns {boolean} true if childPath is under parentPath
 */
const isSubPath = (parentPath, childPath) => {
	// Ensure parentPath ends with a separator to avoid false matches
	// e.g., "/app" shouldn't match "/app-other"
	const parentWithSlash =
		parentPath.endsWith("/") || parentPath.endsWith("\\")
			? parentPath
			: normalize(`${parentPath}/`);

	return childPath.startsWith(parentWithSlash);
};

module.exports.PathType = PathType;
module.exports.cachedDirname = cachedDirname;
module.exports.cachedJoin = cachedJoin;
module.exports.deprecatedInvalidSegmentRegEx = deprecatedInvalidSegmentRegEx;
module.exports.dirname = dirname;
module.exports.getType = getType;
module.exports.invalidSegmentRegEx = invalidSegmentRegEx;
module.exports.isSubPath = isSubPath;
module.exports.join = join;
module.exports.normalize = normalize;
