Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let fs = require("fs");
let path = require("path");
let url = require("url");
let fdir = require("fdir");
let picomatch = require("picomatch");
picomatch = __toESM(picomatch);
//#region src/utils.ts
const isReadonlyArray = Array.isArray;
const BACKSLASHES = /\\/g;
const isWin = process.platform === "win32";
const ONLY_PARENT_DIRECTORIES = /^(\/?\.\.)+$/;
function getPartialMatcher(patterns, options = {}) {
	const patternsCount = patterns.length;
	const patternsParts = Array(patternsCount);
	const matchers = Array(patternsCount);
	let i, j;
	for (i = 0; i < patternsCount; i++) {
		const parts = splitPattern(patterns[i]);
		patternsParts[i] = parts;
		const partsCount = parts.length;
		const partMatchers = Array(partsCount);
		for (j = 0; j < partsCount; j++) partMatchers[j] = (0, picomatch.default)(parts[j], options);
		matchers[i] = partMatchers;
	}
	return (input) => {
		const inputParts = input.split("/");
		if (inputParts[0] === ".." && ONLY_PARENT_DIRECTORIES.test(input)) return true;
		for (i = 0; i < patternsCount; i++) {
			const patternParts = patternsParts[i];
			const matcher = matchers[i];
			const inputPatternCount = inputParts.length;
			const minParts = Math.min(inputPatternCount, patternParts.length);
			j = 0;
			while (j < minParts) {
				const part = patternParts[j];
				if (part.includes("/")) return true;
				if (!matcher[j](inputParts[j])) break;
				if (!options.noglobstar && part === "**") return true;
				j++;
			}
			if (j === inputPatternCount) return true;
		}
		return false;
	};
}
/* node:coverage ignore next 2 */
const WIN32_ROOT_DIR = /^[A-Z]:\/$/i;
const isRoot = isWin ? (p) => WIN32_ROOT_DIR.test(p) : (p) => p === "/";
function buildFormat(cwd, root, absolute) {
	if (cwd === root || root.startsWith(`${cwd}/`)) {
		if (absolute) {
			const start = cwd.length + +!isRoot(cwd);
			return (p, isDir) => p.slice(start, isDir ? -1 : void 0) || ".";
		}
		const prefix = root.slice(cwd.length + 1);
		if (prefix) return (p, isDir) => {
			if (p === ".") return prefix;
			const result = `${prefix}/${p}`;
			return isDir ? result.slice(0, -1) : result;
		};
		return (p, isDir) => isDir && p !== "." ? p.slice(0, -1) : p;
	}
	if (absolute) return (p) => path.posix.relative(cwd, p) || ".";
	return (p) => path.posix.relative(cwd, `${root}/${p}`) || ".";
}
function buildRelative(cwd, root) {
	if (root.startsWith(`${cwd}/`)) {
		const prefix = root.slice(cwd.length + 1);
		return (p) => `${prefix}/${p}`;
	}
	return (p) => {
		const result = path.posix.relative(cwd, `${root}/${p}`);
		return p[p.length - 1] === "/" && result !== "" ? `${result}/` : result || ".";
	};
}
const splitPatternOptions = { parts: true };
function splitPattern(path$1) {
	var _result$parts;
	const result = picomatch.default.scan(path$1, splitPatternOptions);
	return ((_result$parts = result.parts) === null || _result$parts === void 0 ? void 0 : _result$parts.length) ? result.parts : [path$1];
}
const ESCAPED_WIN32_BACKSLASHES = /\\(?![()[\]{}!+@])/g;
function convertPosixPathToPattern(path$2) {
	return escapePosixPath(path$2);
}
function convertWin32PathToPattern(path$3) {
	return escapeWin32Path(path$3).replace(ESCAPED_WIN32_BACKSLASHES, "/");
}
/**
* Converts a path to a pattern depending on the platform.
* Identical to {@link escapePath} on POSIX systems.
* @see {@link https://superchupu.dev/tinyglobby/documentation#convertPathToPattern}
*/
/* node:coverage ignore next 3 */
const convertPathToPattern = isWin ? convertWin32PathToPattern : convertPosixPathToPattern;
const POSIX_UNESCAPED_GLOB_SYMBOLS = /(?<!\\)([()[\]{}*?|]|^!|[!+@](?=\()|\\(?![()[\]{}!*+?@|]))/g;
const WIN32_UNESCAPED_GLOB_SYMBOLS = /(?<!\\)([()[\]{}]|^!|[!+@](?=\())/g;
const escapePosixPath = (path$4) => path$4.replace(POSIX_UNESCAPED_GLOB_SYMBOLS, "\\$&");
const escapeWin32Path = (path$5) => path$5.replace(WIN32_UNESCAPED_GLOB_SYMBOLS, "\\$&");
/**
* Escapes a path's special characters depending on the platform.
* @see {@link https://superchupu.dev/tinyglobby/documentation#escapePath}
*/
/* node:coverage ignore next */
const escapePath = isWin ? escapeWin32Path : escapePosixPath;
/**
* Checks if a pattern has dynamic parts.
*
* Has a few minor differences with [`fast-glob`](https://github.com/mrmlnc/fast-glob) for better accuracy:
*
* - Doesn't necessarily return `false` on patterns that include `\`.
* - Returns `true` if the pattern includes parentheses, regardless of them representing one single pattern or not.
* - Returns `true` for unfinished glob extensions i.e. `(h`, `+(h`.
* - Returns `true` for unfinished brace expansions as long as they include `,` or `..`.
*
* @see {@link https://superchupu.dev/tinyglobby/documentation#isDynamicPattern}
*/
function isDynamicPattern(pattern, options) {
	if ((options === null || options === void 0 ? void 0 : options.caseSensitiveMatch) === false) return true;
	const scan = picomatch.default.scan(pattern);
	return scan.isGlob || scan.negated;
}
function log(...tasks) {
	console.log(`[tinyglobby ${(/* @__PURE__ */ new Date()).toLocaleTimeString("es")}]`, ...tasks);
}
function ensureStringArray(value) {
	return typeof value === "string" ? [value] : value !== null && value !== void 0 ? value : [];
}
//#endregion
//#region src/patterns.ts
const PARENT_DIRECTORY = /^(\/?\.\.)+/;
const ESCAPING_BACKSLASHES = /\\(?=[()[\]{}!*+?@|])/g;
function normalizePattern(pattern, opts, props, isIgnore) {
	var _PARENT_DIRECTORY$exe;
	const cwd = opts.cwd;
	let result = pattern;
	if (pattern[pattern.length - 1] === "/") result = pattern.slice(0, -1);
	if (result[result.length - 1] !== "*" && opts.expandDirectories) result += "/**";
	const escapedCwd = escapePath(cwd);
	result = (0, path.isAbsolute)(result.replace(ESCAPING_BACKSLASHES, "")) ? path.posix.relative(escapedCwd, result) : path.posix.normalize(result);
	const parentDir = (_PARENT_DIRECTORY$exe = PARENT_DIRECTORY.exec(result)) === null || _PARENT_DIRECTORY$exe === void 0 ? void 0 : _PARENT_DIRECTORY$exe[0];
	const parts = splitPattern(result);
	if (parentDir) {
		const n = (parentDir.length + 1) / 3;
		let i = 0;
		const cwdParts = escapedCwd.split("/");
		while (i < n && parts[i + n] === cwdParts[cwdParts.length + i - n]) {
			result = result.slice(0, (n - i - 1) * 3) + result.slice((n - i) * 3 + parts[i + n].length + 1) || ".";
			i++;
		}
		const potentialRoot = path.posix.join(cwd, parentDir.slice(i * 3));
		if (potentialRoot[0] !== "." && props.root.length > potentialRoot.length) {
			props.root = potentialRoot;
			props.depthOffset = -n + i;
		}
	}
	if (!isIgnore && props.depthOffset >= 0) {
		var _props$commonPath;
		(_props$commonPath = props.commonPath) !== null && _props$commonPath !== void 0 || (props.commonPath = parts);
		const newCommonPath = [];
		const length = Math.min(props.commonPath.length, parts.length);
		for (let i = 0; i < length; i++) {
			const part = parts[i];
			if (part === "**" && !parts[i + 1]) {
				newCommonPath.pop();
				break;
			}
			if (i === parts.length - 1 || part !== props.commonPath[i] || isDynamicPattern(part)) break;
			newCommonPath.push(part);
		}
		props.depthOffset = newCommonPath.length;
		props.commonPath = newCommonPath;
		props.root = newCommonPath.length > 0 ? path.posix.join(cwd, ...newCommonPath) : cwd;
	}
	return result;
}
function processPatterns(options, patterns, props) {
	const matchPatterns = [];
	const ignorePatterns = [];
	for (const pattern of options.ignore) {
		if (!pattern) continue;
		if (pattern[0] !== "!" || pattern[1] === "(") ignorePatterns.push(normalizePattern(pattern, options, props, true));
	}
	for (const pattern of patterns) {
		if (!pattern) continue;
		if (pattern[0] !== "!" || pattern[1] === "(") matchPatterns.push(normalizePattern(pattern, options, props, false));
		else if (pattern[1] !== "!" || pattern[2] === "(") ignorePatterns.push(normalizePattern(pattern.slice(1), options, props, true));
	}
	return {
		match: matchPatterns,
		ignore: ignorePatterns
	};
}
//#endregion
//#region src/crawler.ts
function buildCrawler(options, patterns) {
	const cwd = options.cwd;
	const props = {
		root: cwd,
		depthOffset: 0
	};
	const processed = processPatterns(options, patterns, props);
	if (options.debug) log("internal processing patterns:", processed);
	const { absolute, caseSensitiveMatch, debug, dot, followSymbolicLinks, onlyDirectories } = options;
	const root = props.root.replace(BACKSLASHES, "");
	const matchOptions = {
		dot,
		nobrace: options.braceExpansion === false,
		nocase: !caseSensitiveMatch,
		noextglob: options.extglob === false,
		noglobstar: options.globstar === false,
		posix: true
	};
	const matcher = (0, picomatch.default)(processed.match, matchOptions);
	const ignore = (0, picomatch.default)(processed.ignore, matchOptions);
	const partialMatcher = getPartialMatcher(processed.match, matchOptions);
	const format = buildFormat(cwd, root, absolute);
	const excludeFormatter = absolute ? format : buildFormat(cwd, root, true);
	const excludePredicate = (_, p) => {
		const relativePath = excludeFormatter(p, true);
		return relativePath !== "." && !partialMatcher(relativePath) || ignore(relativePath);
	};
	let maxDepth;
	if (options.deep !== void 0) maxDepth = Math.round(options.deep - props.depthOffset);
	const crawler = new fdir.fdir({
		filters: [debug ? (p, isDirectory) => {
			const path = format(p, isDirectory);
			const matches = matcher(path) && !ignore(path);
			if (matches) log(`matched ${path}`);
			return matches;
		} : (p, isDirectory) => {
			const path = format(p, isDirectory);
			return matcher(path) && !ignore(path);
		}],
		exclude: debug ? (_, p) => {
			const skipped = excludePredicate(_, p);
			log(`${skipped ? "skipped" : "crawling"} ${p}`);
			return skipped;
		} : excludePredicate,
		fs: options.fs,
		pathSeparator: "/",
		relativePaths: !absolute,
		resolvePaths: absolute,
		includeBasePath: absolute,
		resolveSymlinks: followSymbolicLinks,
		excludeSymlinks: !followSymbolicLinks,
		excludeFiles: onlyDirectories,
		includeDirs: onlyDirectories || !options.onlyFiles,
		maxDepth,
		signal: options.signal
	}).crawl(root);
	if (options.debug) log("internal properties:", {
		...props,
		root
	});
	return [crawler, cwd !== root && !absolute && buildRelative(cwd, root)];
}
//#endregion
//#region src/index.ts
function formatPaths(paths, mapper) {
	if (mapper) for (let i = paths.length - 1; i >= 0; i--) paths[i] = mapper(paths[i]);
	return paths;
}
const defaultOptions = {
	caseSensitiveMatch: true,
	cwd: process.cwd(),
	debug: !!process.env.TINYGLOBBY_DEBUG,
	expandDirectories: true,
	followSymbolicLinks: true,
	onlyFiles: true
};
function getOptions(options) {
	const opts = {
		...defaultOptions,
		...options
	};
	opts.cwd = (opts.cwd instanceof URL ? (0, url.fileURLToPath)(opts.cwd) : (0, path.resolve)(opts.cwd)).replace(BACKSLASHES, "/");
	opts.ignore = ensureStringArray(opts.ignore);
	opts.fs && (opts.fs = {
		readdir: opts.fs.readdir || fs.readdir,
		readdirSync: opts.fs.readdirSync || fs.readdirSync,
		realpath: opts.fs.realpath || fs.realpath,
		realpathSync: opts.fs.realpathSync || fs.realpathSync,
		stat: opts.fs.stat || fs.stat,
		statSync: opts.fs.statSync || fs.statSync
	});
	if (opts.debug) log("globbing with options:", opts);
	return opts;
}
function getCrawler(globInput, inputOptions = {}) {
	var _ref;
	if (globInput && (inputOptions === null || inputOptions === void 0 ? void 0 : inputOptions.patterns)) throw new Error("Cannot pass patterns as both an argument and an option");
	const isModern = isReadonlyArray(globInput) || typeof globInput === "string";
	const patterns = ensureStringArray((_ref = isModern ? globInput : globInput.patterns) !== null && _ref !== void 0 ? _ref : "**/*");
	const options = getOptions(isModern ? inputOptions : globInput);
	return patterns.length > 0 ? buildCrawler(options, patterns) : [];
}
async function glob(globInput, options) {
	const [crawler, relative] = getCrawler(globInput, options);
	return crawler ? formatPaths(await crawler.withPromise(), relative) : [];
}
function globSync(globInput, options) {
	const [crawler, relative] = getCrawler(globInput, options);
	return crawler ? formatPaths(crawler.sync(), relative) : [];
}
//#endregion
exports.convertPathToPattern = convertPathToPattern;
exports.escapePath = escapePath;
exports.glob = glob;
exports.globSync = globSync;
exports.isDynamicPattern = isDynamicPattern;
