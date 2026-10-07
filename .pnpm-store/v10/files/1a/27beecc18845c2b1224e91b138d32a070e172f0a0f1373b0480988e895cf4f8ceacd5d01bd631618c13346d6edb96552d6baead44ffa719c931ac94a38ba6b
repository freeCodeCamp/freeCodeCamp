import fs from 'node:fs';
import { j as join, d as dirname } from './chunk-pathe.M-eThtNZ.js';

const packageCache = new Map();
function findNearestPackageData(basedir) {
	const originalBasedir = basedir;
	while (basedir) {
		const cached = getCachedData(packageCache, basedir, originalBasedir);
		if (cached) {
			return cached;
		}
		const pkgPath = join(basedir, "package.json");
		if (tryStatSync(pkgPath)?.isFile()) {
			const pkgData = JSON.parse(stripBomTag(fs.readFileSync(pkgPath, "utf8")));
			if (packageCache) {
				setCacheData(packageCache, pkgData, basedir, originalBasedir);
			}
			return pkgData;
		}
		const nextBasedir = dirname(basedir);
		if (nextBasedir === basedir) {
			break;
		}
		basedir = nextBasedir;
	}
	return {};
}
function stripBomTag(content) {
	if (content.charCodeAt(0) === 65279) {
		return content.slice(1);
	}
	return content;
}
function tryStatSync(file) {
	try {
		// The "throwIfNoEntry" is a performance optimization for cases where the file does not exist
		return fs.statSync(file, { throwIfNoEntry: false });
	} catch {}
}
function getCachedData(cache, basedir, originalBasedir) {
	const pkgData = cache.get(getFnpdCacheKey(basedir));
	if (pkgData) {
		traverseBetweenDirs(originalBasedir, basedir, (dir) => {
			cache.set(getFnpdCacheKey(dir), pkgData);
		});
		return pkgData;
	}
}
function setCacheData(cache, data, basedir, originalBasedir) {
	cache.set(getFnpdCacheKey(basedir), data);
	traverseBetweenDirs(originalBasedir, basedir, (dir) => {
		cache.set(getFnpdCacheKey(dir), data);
	});
}
function getFnpdCacheKey(basedir) {
	return `fnpd_${basedir}`;
}
/**
* Traverse between `longerDir` (inclusive) and `shorterDir` (exclusive) and call `cb` for each dir.
* @param longerDir Longer dir path, e.g. `/User/foo/bar/baz`
* @param shorterDir Shorter dir path, e.g. `/User/foo`
*/
function traverseBetweenDirs(longerDir, shorterDir, cb) {
	while (longerDir !== shorterDir) {
		cb(longerDir);
		longerDir = dirname(longerDir);
	}
}

export { findNearestPackageData, getCachedData, setCacheData };
