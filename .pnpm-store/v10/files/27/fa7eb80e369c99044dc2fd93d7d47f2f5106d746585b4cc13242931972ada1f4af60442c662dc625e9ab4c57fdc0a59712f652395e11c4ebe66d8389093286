'use strict';

var fs = require('node:fs');
var node_module = require('node:module');
var node_url = require('node:url');
var pathe = require('pathe');

const isWindows = process.platform === "win32";
const drive = isWindows ? process.cwd()[0] : null;
const driveOpposite = drive ? drive === drive.toUpperCase() ? drive.toLowerCase() : drive.toUpperCase() : null;
const driveRegexp = drive ? new RegExp(`(?:^|/@fs/)${drive}(\:[\\/])`) : null;
const driveOppositeRegext = driveOpposite ? new RegExp(`(?:^|/@fs/)${driveOpposite}(\:[\\/])`) : null;
function slash(str) {
	return str.replace(/\\/g, "/");
}
const bareImportRE = /^(?![a-z]:)[\w@](?!.*:\/\/)/i;
function isBareImport(id) {
	return bareImportRE.test(id);
}
const VALID_ID_PREFIX = "/@id/";
function normalizeRequestId(id, base) {
	if (base && id.startsWith(withTrailingSlash(base))) id = `/${id.slice(base.length)}`;
	// keep drive the same as in process cwd. ideally, this should be resolved on Vite side
	// Vite always resolves drive letters to the upper case because of the use of `realpathSync`
	// https://github.com/vitejs/vite/blob/0ab20a3ee26eacf302415b3087732497d0a2f358/packages/vite/src/node/utils.ts#L635
	if (driveRegexp && !(driveRegexp === null || driveRegexp === void 0 ? void 0 : driveRegexp.test(id)) && (driveOppositeRegext === null || driveOppositeRegext === void 0 ? void 0 : driveOppositeRegext.test(id))) id = id.replace(driveOppositeRegext, `${drive}$1`);
	if (id.startsWith("file://")) {
		// preserve hash/query
		const { file, postfix } = splitFileAndPostfix(id);
		return node_url.fileURLToPath(file) + postfix;
	}
	return id.replace(/^\/@id\/__x00__/, "\0").replace(/^\/@id\//, "").replace(/^__vite-browser-external:/, "").replace(/\?v=\w+/, "?").replace(/&v=\w+/, "").replace(/\?t=\w+/, "?").replace(/&t=\w+/, "").replace(/\?import/, "?").replace(/&import/, "").replace(/\?&/, "?").replace(/\?+$/, "");
}
const postfixRE = /[?#].*$/;
function cleanUrl(url) {
	return url.replace(postfixRE, "");
}
function splitFileAndPostfix(path) {
	const file = cleanUrl(path);
	return {
		file,
		postfix: path.slice(file.length)
	};
}
const internalRequests = ["@vite/client", "@vite/env"];
const internalRequestRegexp = new RegExp(`^/?(?:${internalRequests.join("|")})$`);
function isInternalRequest(id) {
	return internalRequestRegexp.test(id);
}
// https://nodejs.org/api/modules.html#built-in-modules-with-mandatory-node-prefix
const prefixedBuiltins = new Set([
	"node:sea",
	"node:sqlite",
	"node:test",
	"node:test/reporters"
]);
const builtins = new Set([
	...node_module.builtinModules,
	"assert/strict",
	"diagnostics_channel",
	"dns/promises",
	"fs/promises",
	"path/posix",
	"path/win32",
	"readline/promises",
	"stream/consumers",
	"stream/promises",
	"stream/web",
	"timers/promises",
	"util/types",
	"wasi"
]);
function normalizeModuleId(id) {
	// unique id that is not available as "test"
	if (prefixedBuiltins.has(id)) return id;
	if (id.startsWith("file://")) return node_url.fileURLToPath(id);
	return id.replace(/\\/g, "/").replace(/^\/@fs\//, isWindows ? "" : "/").replace(/^node:/, "").replace(/^\/+/, "/");
}
function isPrimitive(v) {
	return v !== Object(v);
}
function toFilePath(id, root) {
	let { absolute, exists } = (() => {
		if (id.startsWith("/@fs/")) return {
			absolute: id.slice(4),
			exists: true
		};
		// check if /src/module.js -> <root>/src/module.js
		if (!id.startsWith(withTrailingSlash(root)) && id.startsWith("/")) {
			const resolved = pathe.resolve(root, id.slice(1));
			if (fs.existsSync(cleanUrl(resolved))) return {
				absolute: resolved,
				exists: true
			};
		} else if (id.startsWith(withTrailingSlash(root)) && fs.existsSync(cleanUrl(id))) return {
			absolute: id,
			exists: true
		};
		return {
			absolute: id,
			exists: false
		};
	})();
	if (absolute.startsWith("//")) absolute = absolute.slice(1);
	// disambiguate the `<UNIT>:/` on windows: see nodejs/node#31710
	return {
		path: isWindows && absolute.startsWith("/") ? slash(node_url.fileURLToPath(node_url.pathToFileURL(absolute.slice(1)).href)) : absolute,
		exists
	};
}
const NODE_BUILTIN_NAMESPACE = "node:";
function isNodeBuiltin(id) {
	if (prefixedBuiltins.has(id)) return true;
	return builtins.has(id.startsWith(NODE_BUILTIN_NAMESPACE) ? id.slice(NODE_BUILTIN_NAMESPACE.length) : id);
}
/**
* Convert `Arrayable<T>` to `Array<T>`
*
* @category Array
*/
function toArray(array) {
	if (array === null || array === void 0) array = [];
	if (Array.isArray(array)) return array;
	return [array];
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
		longerDir = pathe.dirname(longerDir);
	}
}
function withTrailingSlash(path) {
	if (path[path.length - 1] !== "/") return `${path}/`;
	return path;
}
function createImportMetaEnvProxy() {
	// packages/vitest/src/node/plugins/index.ts:146
	const booleanKeys = [
		"DEV",
		"PROD",
		"SSR"
	];
	return new Proxy(process.env, {
		get(_, key) {
			if (typeof key !== "string") return void 0;
			if (booleanKeys.includes(key)) return !!process.env[key];
			return process.env[key];
		},
		set(_, key, value) {
			if (typeof key !== "string") return true;
			if (booleanKeys.includes(key)) process.env[key] = value ? "1" : "";
			else process.env[key] = value;
			return true;
		}
	});
}
const packageCache = /* @__PURE__ */ new Map();
async function findNearestPackageData(basedir) {
	const originalBasedir = basedir;
	while (basedir) {
		var _await$fsp$stat$catch;
		const cached = getCachedData(packageCache, basedir, originalBasedir);
		if (cached) return cached;
		const pkgPath = pathe.join(basedir, "package.json");
		if ((_await$fsp$stat$catch = await fs.promises.stat(pkgPath).catch(() => {})) === null || _await$fsp$stat$catch === void 0 ? void 0 : _await$fsp$stat$catch.isFile()) {
			const pkgData = JSON.parse(await fs.promises.readFile(pkgPath, "utf8"));
			if (packageCache) setCacheData(packageCache, pkgData, basedir, originalBasedir);
			return pkgData;
		}
		const nextBasedir = pathe.dirname(basedir);
		if (nextBasedir === basedir) break;
		basedir = nextBasedir;
	}
	return {};
}

exports.VALID_ID_PREFIX = VALID_ID_PREFIX;
exports.cleanUrl = cleanUrl;
exports.createImportMetaEnvProxy = createImportMetaEnvProxy;
exports.findNearestPackageData = findNearestPackageData;
exports.getCachedData = getCachedData;
exports.isBareImport = isBareImport;
exports.isInternalRequest = isInternalRequest;
exports.isNodeBuiltin = isNodeBuiltin;
exports.isPrimitive = isPrimitive;
exports.isWindows = isWindows;
exports.normalizeModuleId = normalizeModuleId;
exports.normalizeRequestId = normalizeRequestId;
exports.setCacheData = setCacheData;
exports.slash = slash;
exports.toArray = toArray;
exports.toFilePath = toFilePath;
exports.withTrailingSlash = withTrailingSlash;
