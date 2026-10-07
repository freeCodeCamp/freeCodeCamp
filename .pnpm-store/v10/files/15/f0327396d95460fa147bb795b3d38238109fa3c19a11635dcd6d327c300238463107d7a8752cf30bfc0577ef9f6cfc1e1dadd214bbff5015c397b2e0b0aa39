let SOURCEMAPPING_URL = "sourceMa";
SOURCEMAPPING_URL += "ppingURL";
const isWindows = typeof process < "u" && process.platform === "win32";
function unwrapId(id) {
	return id.startsWith("/@id/") ? id.slice(5).replace("__x00__", "\0") : id;
}
const windowsSlashRE = /\\/g;
function slash(p) {
	return p.replace(windowsSlashRE, "/");
}
const postfixRE = /[?#].*$/;
function cleanUrl(url) {
	return url.replace(postfixRE, "");
}
function isPrimitive(value) {
	return !value || typeof value != "object" && typeof value != "function";
}
const AsyncFunction = async function() {}.constructor;
let asyncFunctionDeclarationPaddingLineCount;
function getAsyncFunctionDeclarationPaddingLineCount() {
	if (asyncFunctionDeclarationPaddingLineCount === void 0) {
		let body = "/*code*/", source = new AsyncFunction("a", "b", body).toString();
		asyncFunctionDeclarationPaddingLineCount = source.slice(0, source.indexOf(body)).split("\n").length - 1;
	}
	return asyncFunctionDeclarationPaddingLineCount;
}
function promiseWithResolvers() {
	let resolve$1, reject;
	return {
		promise: new Promise((_resolve, _reject) => {
			resolve$1 = _resolve, reject = _reject;
		}),
		resolve: resolve$1,
		reject
	};
}
const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
	return input && input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/, _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
	return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/";
}
const resolve = function(...arguments_) {
	arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
	let resolvedPath = "", resolvedAbsolute = !1;
	for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
		let path = index >= 0 ? arguments_[index] : cwd();
		!path || path.length === 0 || (resolvedPath = `${path}/${resolvedPath}`, resolvedAbsolute = isAbsolute(path));
	}
	return resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute), resolvedAbsolute && !isAbsolute(resolvedPath) ? `/${resolvedPath}` : resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
	let res = "", lastSegmentLength = 0, lastSlash = -1, dots = 0, char = null;
	for (let index = 0; index <= path.length; ++index) {
		if (index < path.length) char = path[index];
		else if (char === "/") break;
		else char = "/";
		if (char === "/") {
			if (!(lastSlash === index - 1 || dots === 1)) if (dots === 2) {
				if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
					if (res.length > 2) {
						let lastSlashIndex = res.lastIndexOf("/");
						lastSlashIndex === -1 ? (res = "", lastSegmentLength = 0) : (res = res.slice(0, lastSlashIndex), lastSegmentLength = res.length - 1 - res.lastIndexOf("/")), lastSlash = index, dots = 0;
						continue;
					} else if (res.length > 0) {
						res = "", lastSegmentLength = 0, lastSlash = index, dots = 0;
						continue;
					}
				}
				allowAboveRoot && (res += res.length > 0 ? "/.." : "..", lastSegmentLength = 2);
			} else res.length > 0 ? res += `/${path.slice(lastSlash + 1, index)}` : res = path.slice(lastSlash + 1, index), lastSegmentLength = index - lastSlash - 1;
			lastSlash = index, dots = 0;
		} else char === "." && dots !== -1 ? ++dots : dots = -1;
	}
	return res;
}
const isAbsolute = function(p) {
	return _IS_ABSOLUTE_RE.test(p);
}, dirname = function(p) {
	let segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
	return segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0]) && (segments[0] += "/"), segments.join("/") || (isAbsolute(p) ? "/" : ".");
}, decodeBase64 = typeof atob < "u" ? atob : (str) => Buffer.from(str, "base64").toString("utf-8"), percentRegEx = /%/g, backslashRegEx = /\\/g, newlineRegEx = /\n/g, carriageReturnRegEx = /\r/g, tabRegEx = /\t/g, questionRegex = /\?/g, hashRegex = /#/g;
function encodePathChars(filepath) {
	return filepath.indexOf("%") !== -1 && (filepath = filepath.replace(percentRegEx, "%25")), !isWindows && filepath.indexOf("\\") !== -1 && (filepath = filepath.replace(backslashRegEx, "%5C")), filepath.indexOf("\n") !== -1 && (filepath = filepath.replace(newlineRegEx, "%0A")), filepath.indexOf("\r") !== -1 && (filepath = filepath.replace(carriageReturnRegEx, "%0D")), filepath.indexOf("	") !== -1 && (filepath = filepath.replace(tabRegEx, "%09")), filepath;
}
const posixDirname = dirname, posixResolve = resolve;
function posixPathToFileHref(posixPath) {
	let resolved = posixResolve(posixPath), filePathLast = posixPath.charCodeAt(posixPath.length - 1);
	return (filePathLast === 47 || isWindows && filePathLast === 92) && resolved[resolved.length - 1] !== "/" && (resolved += "/"), resolved = encodePathChars(resolved), resolved.indexOf("?") !== -1 && (resolved = resolved.replace(questionRegex, "%3F")), resolved.indexOf("#") !== -1 && (resolved = resolved.replace(hashRegex, "%23")), new URL(`file://${resolved}`).href;
}
function toWindowsPath(path) {
	return path.replace(/\//g, "\\");
}
var comma = 44, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", intToChar = new Uint8Array(64), charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
	let c = chars.charCodeAt(i);
	intToChar[i] = c, charToInt[c] = i;
}
function decodeInteger(reader, relative) {
	let value = 0, shift = 0, integer = 0;
	do
		integer = charToInt[reader.next()], value |= (integer & 31) << shift, shift += 5;
	while (integer & 32);
	let shouldNegate = value & 1;
	return value >>>= 1, shouldNegate && (value = -2147483648 | -value), relative + value;
}
function hasMoreVlq(reader, max) {
	return reader.pos >= max ? !1 : reader.peek() !== comma;
}
var StringReader = class {
	constructor(buffer) {
		this.pos = 0, this.buffer = buffer;
	}
	next() {
		return this.buffer.charCodeAt(this.pos++);
	}
	peek() {
		return this.buffer.charCodeAt(this.pos);
	}
	indexOf(char) {
		let { buffer, pos } = this, idx = buffer.indexOf(char, pos);
		return idx === -1 ? buffer.length : idx;
	}
};
function decode(mappings) {
	let { length } = mappings, reader = new StringReader(mappings), decoded = [], genColumn = 0, sourcesIndex = 0, sourceLine = 0, sourceColumn = 0, namesIndex = 0;
	do {
		let semi = reader.indexOf(";"), line = [], sorted = !0, lastCol = 0;
		for (genColumn = 0; reader.pos < semi;) {
			let seg;
			genColumn = decodeInteger(reader, genColumn), genColumn < lastCol && (sorted = !1), lastCol = genColumn, hasMoreVlq(reader, semi) ? (sourcesIndex = decodeInteger(reader, sourcesIndex), sourceLine = decodeInteger(reader, sourceLine), sourceColumn = decodeInteger(reader, sourceColumn), hasMoreVlq(reader, semi) ? (namesIndex = decodeInteger(reader, namesIndex), seg = [
				genColumn,
				sourcesIndex,
				sourceLine,
				sourceColumn,
				namesIndex
			]) : seg = [
				genColumn,
				sourcesIndex,
				sourceLine,
				sourceColumn
			]) : seg = [genColumn], line.push(seg), reader.pos++;
		}
		sorted || sort(line), decoded.push(line), reader.pos = semi + 1;
	} while (reader.pos <= length);
	return decoded;
}
function sort(line) {
	line.sort(sortComparator);
}
function sortComparator(a, b) {
	return a[0] - b[0];
}
var COLUMN = 0, SOURCES_INDEX = 1, SOURCE_LINE = 2, SOURCE_COLUMN = 3, NAMES_INDEX = 4, found = !1;
function binarySearch(haystack, needle, low, high) {
	for (; low <= high;) {
		let mid = low + (high - low >> 1), cmp = haystack[mid][COLUMN] - needle;
		if (cmp === 0) return found = !0, mid;
		cmp < 0 ? low = mid + 1 : high = mid - 1;
	}
	return found = !1, low - 1;
}
function upperBound(haystack, needle, index) {
	for (let i = index + 1; i < haystack.length && haystack[i][COLUMN] === needle; index = i++);
	return index;
}
function lowerBound(haystack, needle, index) {
	for (let i = index - 1; i >= 0 && haystack[i][COLUMN] === needle; index = i--);
	return index;
}
function memoizedBinarySearch(haystack, needle, state, key) {
	let { lastKey, lastNeedle, lastIndex } = state, low = 0, high = haystack.length - 1;
	if (key === lastKey) {
		if (needle === lastNeedle) return found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle, lastIndex;
		needle >= lastNeedle ? low = lastIndex === -1 ? 0 : lastIndex : high = lastIndex;
	}
	return state.lastKey = key, state.lastNeedle = needle, state.lastIndex = binarySearch(haystack, needle, low, high);
}
var LINE_GTR_ZERO = "`line` must be greater than 0 (lines start at line 1)", COL_GTR_EQ_ZERO = "`column` must be greater than or equal to 0 (columns start at column 0)", LEAST_UPPER_BOUND = -1, GREATEST_LOWER_BOUND = 1;
function cast(map) {
	return map;
}
function decodedMappings(map) {
	var _a;
	return (_a = cast(map))._decoded || (_a._decoded = decode(cast(map)._encoded));
}
function originalPositionFor(map, needle) {
	let { line, column, bias } = needle;
	if (line--, line < 0) throw Error(LINE_GTR_ZERO);
	if (column < 0) throw Error(COL_GTR_EQ_ZERO);
	let decoded = decodedMappings(map);
	if (line >= decoded.length) return OMapping(null, null, null, null);
	let segments = decoded[line], index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
	if (index === -1) return OMapping(null, null, null, null);
	let segment = segments[index];
	if (segment.length === 1) return OMapping(null, null, null, null);
	let { names, resolvedSources } = map;
	return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
}
function OMapping(source, line, column, name) {
	return {
		source,
		line,
		column,
		name
	};
}
function traceSegmentInternal(segments, memo, line, column, bias) {
	let index = memoizedBinarySearch(segments, column, memo, line);
	return found ? index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index) : bias === LEAST_UPPER_BOUND && index++, index === -1 || index === segments.length ? -1 : index;
}
var DecodedMap = class {
	_encoded;
	_decoded;
	_decodedMemo;
	url;
	file;
	version;
	names = [];
	resolvedSources;
	constructor(map, from) {
		this.map = map;
		let { mappings, names, sources } = map;
		this.version = map.version, this.names = names || [], this._encoded = mappings || "", this._decodedMemo = memoizedState(), this.url = from, this.file = from;
		let originDir = posixDirname(from);
		this.resolvedSources = (sources || []).map((s) => posixResolve(originDir, s || ""));
	}
};
function memoizedState() {
	return {
		lastKey: -1,
		lastNeedle: -1,
		lastIndex: -1
	};
}
function getOriginalPosition(map, needle) {
	let result = originalPositionFor(map, needle);
	return result.column == null ? null : result;
}
const MODULE_RUNNER_SOURCEMAPPING_REGEXP = /* @__PURE__ */ RegExp(`//# ${SOURCEMAPPING_URL}=data:application/json;base64,(.+)`);
var EvaluatedModuleNode = class {
	importers = /* @__PURE__ */ new Set();
	imports = /* @__PURE__ */ new Set();
	evaluated = !1;
	meta;
	promise;
	exports;
	file;
	map;
	constructor(id, url) {
		this.id = id, this.url = url, this.file = cleanUrl(id);
	}
}, EvaluatedModules = class {
	idToModuleMap = /* @__PURE__ */ new Map();
	fileToModulesMap = /* @__PURE__ */ new Map();
	urlToIdModuleMap = /* @__PURE__ */ new Map();
	getModuleById(id) {
		return this.idToModuleMap.get(id);
	}
	getModulesByFile(file) {
		return this.fileToModulesMap.get(file);
	}
	getModuleByUrl(url) {
		return this.urlToIdModuleMap.get(unwrapId(url));
	}
	ensureModule(id, url) {
		if (id = normalizeModuleId(id), this.idToModuleMap.has(id)) {
			let moduleNode$1 = this.idToModuleMap.get(id);
			return this.urlToIdModuleMap.set(url, moduleNode$1), moduleNode$1;
		}
		let moduleNode = new EvaluatedModuleNode(id, url);
		this.idToModuleMap.set(id, moduleNode), this.urlToIdModuleMap.set(url, moduleNode);
		let fileModules = this.fileToModulesMap.get(moduleNode.file) || /* @__PURE__ */ new Set();
		return fileModules.add(moduleNode), this.fileToModulesMap.set(moduleNode.file, fileModules), moduleNode;
	}
	invalidateModule(node) {
		node.evaluated = !1, node.meta = void 0, node.map = void 0, node.promise = void 0, node.exports = void 0, node.imports.clear();
	}
	getModuleSourceMapById(id) {
		let mod = this.getModuleById(id);
		if (!mod) return null;
		if (mod.map) return mod.map;
		if (!mod.meta || !("code" in mod.meta)) return null;
		let pattern = `//# ${SOURCEMAPPING_URL}=data:application/json;base64,`, lastIndex = mod.meta.code.lastIndexOf(pattern);
		if (lastIndex === -1) return null;
		let mapString = MODULE_RUNNER_SOURCEMAPPING_REGEXP.exec(mod.meta.code.slice(lastIndex))?.[1];
		return mapString ? (mod.map = new DecodedMap(JSON.parse(decodeBase64(mapString)), mod.file), mod.map) : null;
	}
	clear() {
		this.idToModuleMap.clear(), this.fileToModulesMap.clear(), this.urlToIdModuleMap.clear();
	}
};
const prefixedBuiltins = new Set([
	"node:sea",
	"node:sqlite",
	"node:test",
	"node:test/reporters"
]);
function normalizeModuleId(file) {
	return prefixedBuiltins.has(file) ? file : slash(file).replace(/^\/@fs\//, isWindows ? "" : "/").replace(/^node:/, "").replace(/^\/+/, "/").replace(/^file:\/+/, isWindows ? "" : "/");
}
var HMRContext = class {
	newListeners;
	constructor(hmrClient, ownerPath) {
		this.hmrClient = hmrClient, this.ownerPath = ownerPath, hmrClient.dataMap.has(ownerPath) || hmrClient.dataMap.set(ownerPath, {});
		let mod = hmrClient.hotModulesMap.get(ownerPath);
		mod && (mod.callbacks = []);
		let staleListeners = hmrClient.ctxToListenersMap.get(ownerPath);
		if (staleListeners) for (let [event, staleFns] of staleListeners) {
			let listeners = hmrClient.customListenersMap.get(event);
			listeners && hmrClient.customListenersMap.set(event, listeners.filter((l) => !staleFns.includes(l)));
		}
		this.newListeners = /* @__PURE__ */ new Map(), hmrClient.ctxToListenersMap.set(ownerPath, this.newListeners);
	}
	get data() {
		return this.hmrClient.dataMap.get(this.ownerPath);
	}
	accept(deps, callback) {
		if (typeof deps == "function" || !deps) this.acceptDeps([this.ownerPath], ([mod]) => deps?.(mod));
		else if (typeof deps == "string") this.acceptDeps([deps], ([mod]) => callback?.(mod));
		else if (Array.isArray(deps)) this.acceptDeps(deps, callback);
		else throw Error("invalid hot.accept() usage.");
	}
	acceptExports(_, callback) {
		this.acceptDeps([this.ownerPath], ([mod]) => callback?.(mod));
	}
	dispose(cb) {
		this.hmrClient.disposeMap.set(this.ownerPath, cb);
	}
	prune(cb) {
		this.hmrClient.pruneMap.set(this.ownerPath, cb);
	}
	decline() {}
	invalidate(message) {
		let firstInvalidatedBy = this.hmrClient.currentFirstInvalidatedBy ?? this.ownerPath;
		this.hmrClient.notifyListeners("vite:invalidate", {
			path: this.ownerPath,
			message,
			firstInvalidatedBy
		}), this.send("vite:invalidate", {
			path: this.ownerPath,
			message,
			firstInvalidatedBy
		}), this.hmrClient.logger.debug(`invalidate ${this.ownerPath}${message ? `: ${message}` : ""}`);
	}
	on(event, cb) {
		let addToMap = (map) => {
			let existing = map.get(event) || [];
			existing.push(cb), map.set(event, existing);
		};
		addToMap(this.hmrClient.customListenersMap), addToMap(this.newListeners);
	}
	off(event, cb) {
		let removeFromMap = (map) => {
			let existing = map.get(event);
			if (existing === void 0) return;
			let pruned = existing.filter((l) => l !== cb);
			if (pruned.length === 0) {
				map.delete(event);
				return;
			}
			map.set(event, pruned);
		};
		removeFromMap(this.hmrClient.customListenersMap), removeFromMap(this.newListeners);
	}
	send(event, data) {
		this.hmrClient.send({
			type: "custom",
			event,
			data
		});
	}
	acceptDeps(deps, callback = () => {}) {
		let mod = this.hmrClient.hotModulesMap.get(this.ownerPath) || {
			id: this.ownerPath,
			callbacks: []
		};
		mod.callbacks.push({
			deps,
			fn: callback
		}), this.hmrClient.hotModulesMap.set(this.ownerPath, mod);
	}
}, HMRClient = class {
	hotModulesMap = /* @__PURE__ */ new Map();
	disposeMap = /* @__PURE__ */ new Map();
	pruneMap = /* @__PURE__ */ new Map();
	dataMap = /* @__PURE__ */ new Map();
	customListenersMap = /* @__PURE__ */ new Map();
	ctxToListenersMap = /* @__PURE__ */ new Map();
	currentFirstInvalidatedBy;
	constructor(logger, transport, importUpdatedModule) {
		this.logger = logger, this.transport = transport, this.importUpdatedModule = importUpdatedModule;
	}
	async notifyListeners(event, data) {
		let cbs = this.customListenersMap.get(event);
		cbs && await Promise.allSettled(cbs.map((cb) => cb(data)));
	}
	send(payload) {
		this.transport.send(payload).catch((err) => {
			this.logger.error(err);
		});
	}
	clear() {
		this.hotModulesMap.clear(), this.disposeMap.clear(), this.pruneMap.clear(), this.dataMap.clear(), this.customListenersMap.clear(), this.ctxToListenersMap.clear();
	}
	async prunePaths(paths) {
		await Promise.all(paths.map((path) => {
			let disposer = this.disposeMap.get(path);
			if (disposer) return disposer(this.dataMap.get(path));
		})), await Promise.all(paths.map((path) => {
			let fn = this.pruneMap.get(path);
			if (fn) return fn(this.dataMap.get(path));
		}));
	}
	warnFailedUpdate(err, path) {
		(!(err instanceof Error) || !err.message.includes("fetch")) && this.logger.error(err), this.logger.error(`Failed to reload ${path}. This could be due to syntax errors or importing non-existent modules. (see errors above)`);
	}
	updateQueue = [];
	pendingUpdateQueue = !1;
	async queueUpdate(payload) {
		if (this.updateQueue.push(this.fetchUpdate(payload)), !this.pendingUpdateQueue) {
			this.pendingUpdateQueue = !0, await Promise.resolve(), this.pendingUpdateQueue = !1;
			let loading = [...this.updateQueue];
			this.updateQueue = [], (await Promise.all(loading)).forEach((fn) => fn && fn());
		}
	}
	async fetchUpdate(update) {
		let { path, acceptedPath, firstInvalidatedBy } = update, mod = this.hotModulesMap.get(path);
		if (!mod) return;
		let fetchedModule, isSelfUpdate = path === acceptedPath, qualifiedCallbacks = mod.callbacks.filter(({ deps }) => deps.includes(acceptedPath));
		if (isSelfUpdate || qualifiedCallbacks.length > 0) {
			let disposer = this.disposeMap.get(acceptedPath);
			disposer && await disposer(this.dataMap.get(acceptedPath));
			try {
				fetchedModule = await this.importUpdatedModule(update);
			} catch (e) {
				this.warnFailedUpdate(e, acceptedPath);
			}
		}
		return () => {
			try {
				this.currentFirstInvalidatedBy = firstInvalidatedBy;
				for (let { deps, fn } of qualifiedCallbacks) fn(deps.map((dep) => dep === acceptedPath ? fetchedModule : void 0));
				let loggedPath = isSelfUpdate ? path : `${acceptedPath} via ${path}`;
				this.logger.debug(`hot updated: ${loggedPath}`);
			} finally {
				this.currentFirstInvalidatedBy = void 0;
			}
		};
	}
};
function analyzeImportedModDifference(mod, rawId, moduleType, metadata) {
	if (!metadata?.isDynamicImport && metadata?.importedNames?.length) {
		let missingBindings = metadata.importedNames.filter((s) => !(s in mod));
		if (missingBindings.length) {
			let lastBinding = missingBindings[missingBindings.length - 1];
			throw moduleType === "module" ? SyntaxError(`[vite] The requested module '${rawId}' does not provide an export named '${lastBinding}'`) : SyntaxError(`\
[vite] Named export '${lastBinding}' not found. The requested module '${rawId}' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '${rawId}';
const {${missingBindings.join(", ")}} = pkg;
`);
		}
	}
}
let nanoid = (size = 21) => {
	let id = "", i = size | 0;
	for (; i--;) id += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[Math.random() * 64 | 0];
	return id;
};
function reviveInvokeError(e) {
	let error = Error(e.message || "Unknown invoke error");
	return Object.assign(error, e, { runnerError: /* @__PURE__ */ Error("RunnerError") }), error;
}
const createInvokeableTransport = (transport) => {
	if (transport.invoke) return {
		...transport,
		async invoke(name, data) {
			let result = await transport.invoke({
				type: "custom",
				event: "vite:invoke",
				data: {
					id: "send",
					name,
					data
				}
			});
			if ("error" in result) throw reviveInvokeError(result.error);
			return result.result;
		}
	};
	if (!transport.send || !transport.connect) throw Error("transport must implement send and connect when invoke is not implemented");
	let rpcPromises = /* @__PURE__ */ new Map();
	return {
		...transport,
		connect({ onMessage, onDisconnection }) {
			return transport.connect({
				onMessage(payload) {
					if (payload.type === "custom" && payload.event === "vite:invoke") {
						let data = payload.data;
						if (data.id.startsWith("response:")) {
							let invokeId = data.id.slice(9), promise = rpcPromises.get(invokeId);
							if (!promise) return;
							promise.timeoutId && clearTimeout(promise.timeoutId), rpcPromises.delete(invokeId);
							let { error, result } = data.data;
							error ? promise.reject(error) : promise.resolve(result);
							return;
						}
					}
					onMessage(payload);
				},
				onDisconnection
			});
		},
		disconnect() {
			return rpcPromises.forEach((promise) => {
				promise.reject(/* @__PURE__ */ Error(`transport was disconnected, cannot call ${JSON.stringify(promise.name)}`));
			}), rpcPromises.clear(), transport.disconnect?.();
		},
		send(data) {
			return transport.send(data);
		},
		async invoke(name, data) {
			let promiseId = nanoid(), wrappedData = {
				type: "custom",
				event: "vite:invoke",
				data: {
					name,
					id: `send:${promiseId}`,
					data
				}
			}, sendPromise = transport.send(wrappedData), { promise, resolve: resolve$1, reject } = promiseWithResolvers(), timeout = transport.timeout ?? 6e4, timeoutId;
			timeout > 0 && (timeoutId = setTimeout(() => {
				rpcPromises.delete(promiseId), reject(/* @__PURE__ */ Error(`transport invoke timed out after ${timeout}ms (data: ${JSON.stringify(wrappedData)})`));
			}, timeout), timeoutId?.unref?.()), rpcPromises.set(promiseId, {
				resolve: resolve$1,
				reject,
				name,
				timeoutId
			}), sendPromise && sendPromise.catch((err) => {
				clearTimeout(timeoutId), rpcPromises.delete(promiseId), reject(err);
			});
			try {
				return await promise;
			} catch (err) {
				throw reviveInvokeError(err);
			}
		}
	};
}, normalizeModuleRunnerTransport = (transport) => {
	let invokeableTransport = createInvokeableTransport(transport), isConnected = !invokeableTransport.connect, connectingPromise;
	return {
		...transport,
		...invokeableTransport.connect ? { async connect(onMessage) {
			if (isConnected) return;
			if (connectingPromise) {
				await connectingPromise;
				return;
			}
			let maybePromise = invokeableTransport.connect({
				onMessage: onMessage ?? (() => {}),
				onDisconnection() {
					isConnected = !1;
				}
			});
			maybePromise && (connectingPromise = maybePromise, await connectingPromise, connectingPromise = void 0), isConnected = !0;
		} } : {},
		...invokeableTransport.disconnect ? { async disconnect() {
			isConnected && (connectingPromise && await connectingPromise, isConnected = !1, await invokeableTransport.disconnect());
		} } : {},
		async send(data) {
			if (invokeableTransport.send) {
				if (!isConnected) if (connectingPromise) await connectingPromise;
				else throw Error("send was called before connect");
				await invokeableTransport.send(data);
			}
		},
		async invoke(name, data) {
			if (!isConnected) if (connectingPromise) await connectingPromise;
			else throw Error("invoke was called before connect");
			return invokeableTransport.invoke(name, data);
		}
	};
}, createWebSocketModuleRunnerTransport = (options) => {
	let pingInterval = options.pingInterval ?? 3e4, ws, pingIntervalId;
	return {
		async connect({ onMessage, onDisconnection }) {
			let socket = options.createConnection();
			socket.addEventListener("message", async ({ data }) => {
				onMessage(JSON.parse(data));
			});
			let isOpened = socket.readyState === socket.OPEN;
			isOpened || await new Promise((resolve$1, reject) => {
				socket.addEventListener("open", () => {
					isOpened = !0, resolve$1();
				}, { once: !0 }), socket.addEventListener("close", async () => {
					if (!isOpened) {
						reject(/* @__PURE__ */ Error("WebSocket closed without opened."));
						return;
					}
					onMessage({
						type: "custom",
						event: "vite:ws:disconnect",
						data: { webSocket: socket }
					}), onDisconnection();
				});
			}), onMessage({
				type: "custom",
				event: "vite:ws:connect",
				data: { webSocket: socket }
			}), ws = socket, pingIntervalId = setInterval(() => {
				socket.readyState === socket.OPEN && socket.send(JSON.stringify({ type: "ping" }));
			}, pingInterval);
		},
		disconnect() {
			clearInterval(pingIntervalId), ws?.close();
		},
		send(data) {
			ws.send(JSON.stringify(data));
		}
	};
};
function createIsBuiltin(builtins) {
	let plainBuiltinsSet = new Set(builtins.filter((builtin) => typeof builtin == "string")), regexBuiltins = builtins.filter((builtin) => typeof builtin != "string");
	return (id) => plainBuiltinsSet.has(id) || regexBuiltins.some((regexp) => regexp.test(id));
}
const ssrModuleExportsKey = "__vite_ssr_exports__", ssrImportKey = "__vite_ssr_import__", ssrDynamicImportKey = "__vite_ssr_dynamic_import__", ssrExportAllKey = "__vite_ssr_exportAll__", ssrExportNameKey = "__vite_ssr_exportName__", ssrImportMetaKey = "__vite_ssr_import_meta__", noop = () => {}, silentConsole = {
	debug: noop,
	error: noop
}, hmrLogger = {
	debug: (...msg) => console.log("[vite]", ...msg),
	error: (error) => console.log("[vite]", error)
};
function createHMRHandler(handler) {
	let queue = new Queue();
	return (payload) => queue.enqueue(() => handler(payload));
}
var Queue = class {
	queue = [];
	pending = !1;
	enqueue(promise) {
		return new Promise((resolve$1, reject) => {
			this.queue.push({
				promise,
				resolve: resolve$1,
				reject
			}), this.dequeue();
		});
	}
	dequeue() {
		if (this.pending) return !1;
		let item = this.queue.shift();
		return item ? (this.pending = !0, item.promise().then(item.resolve).catch(item.reject).finally(() => {
			this.pending = !1, this.dequeue();
		}), !0) : !1;
	}
};
function createHMRHandlerForRunner(runner) {
	return createHMRHandler(async (payload) => {
		let hmrClient = runner.hmrClient;
		if (!(!hmrClient || runner.isClosed())) switch (payload.type) {
			case "connected":
				hmrClient.logger.debug("connected.");
				break;
			case "update":
				await hmrClient.notifyListeners("vite:beforeUpdate", payload), await Promise.all(payload.updates.map(async (update) => {
					if (update.type === "js-update") return update.acceptedPath = unwrapId(update.acceptedPath), update.path = unwrapId(update.path), hmrClient.queueUpdate(update);
					hmrClient.logger.error("css hmr is not supported in runner mode.");
				})), await hmrClient.notifyListeners("vite:afterUpdate", payload);
				break;
			case "custom":
				await hmrClient.notifyListeners(payload.event, payload.data);
				break;
			case "full-reload": {
				let { triggeredBy } = payload, clearEntrypointUrls = triggeredBy ? getModulesEntrypoints(runner, getModulesByFile(runner, slash(triggeredBy))) : findAllEntrypoints(runner);
				if (!clearEntrypointUrls.size) break;
				hmrClient.logger.debug("program reload"), await hmrClient.notifyListeners("vite:beforeFullReload", payload), runner.evaluatedModules.clear();
				for (let url of clearEntrypointUrls) try {
					await runner.import(url);
				} catch (err) {
					err.code !== "ERR_OUTDATED_OPTIMIZED_DEP" && hmrClient.logger.error(`An error happened during full reload\n${err.message}\n${err.stack}`);
				}
				break;
			}
			case "prune":
				await hmrClient.notifyListeners("vite:beforePrune", payload), await hmrClient.prunePaths(payload.paths);
				break;
			case "error": {
				await hmrClient.notifyListeners("vite:error", payload);
				let err = payload.err;
				hmrClient.logger.error(`Internal Server Error\n${err.message}\n${err.stack}`);
				break;
			}
			case "ping": break;
			default: return payload;
		}
	});
}
function getModulesByFile(runner, file) {
	let nodes = runner.evaluatedModules.getModulesByFile(file);
	return nodes ? [...nodes].map((node) => node.id) : [];
}
function getModulesEntrypoints(runner, modules, visited = /* @__PURE__ */ new Set(), entrypoints = /* @__PURE__ */ new Set()) {
	for (let moduleId of modules) {
		if (visited.has(moduleId)) continue;
		visited.add(moduleId);
		let module = runner.evaluatedModules.getModuleById(moduleId);
		if (module) {
			if (!module.importers.size) {
				entrypoints.add(module.url);
				continue;
			}
			for (let importer of module.importers) getModulesEntrypoints(runner, [importer], visited, entrypoints);
		}
	}
	return entrypoints;
}
function findAllEntrypoints(runner, entrypoints = /* @__PURE__ */ new Set()) {
	for (let mod of runner.evaluatedModules.idToModuleMap.values()) mod.importers.size || entrypoints.add(mod.url);
	return entrypoints;
}
const sourceMapCache = {}, fileContentsCache = {}, evaluatedModulesCache = /* @__PURE__ */ new Set(), retrieveFileHandlers = /* @__PURE__ */ new Set(), retrieveSourceMapHandlers = /* @__PURE__ */ new Set(), createExecHandlers = (handlers) => ((...args) => {
	for (let handler of handlers) {
		let result = handler(...args);
		if (result) return result;
	}
	return null;
}), retrieveFileFromHandlers = createExecHandlers(retrieveFileHandlers), retrieveSourceMapFromHandlers = createExecHandlers(retrieveSourceMapHandlers);
let overridden = !1;
const originalPrepare = Error.prepareStackTrace;
function resetInterceptor(runner, options) {
	evaluatedModulesCache.delete(runner.evaluatedModules), options.retrieveFile && retrieveFileHandlers.delete(options.retrieveFile), options.retrieveSourceMap && retrieveSourceMapHandlers.delete(options.retrieveSourceMap), evaluatedModulesCache.size === 0 && (Error.prepareStackTrace = originalPrepare, overridden = !1);
}
function interceptStackTrace(runner, options = {}) {
	return overridden ||= (Error.prepareStackTrace = prepareStackTrace, !0), evaluatedModulesCache.add(runner.evaluatedModules), options.retrieveFile && retrieveFileHandlers.add(options.retrieveFile), options.retrieveSourceMap && retrieveSourceMapHandlers.add(options.retrieveSourceMap), () => resetInterceptor(runner, options);
}
function supportRelativeURL(file, url) {
	if (!file) return url;
	let dir = posixDirname(slash(file)), match = /^\w+:\/\/[^/]*/.exec(dir), protocol = match ? match[0] : "", startPath = dir.slice(protocol.length);
	return protocol && /^\/\w:/.test(startPath) ? (protocol += "/", protocol + slash(posixResolve(startPath, url))) : protocol + posixResolve(startPath, url);
}
function getRunnerSourceMap(position) {
	for (let moduleGraph of evaluatedModulesCache) {
		let sourceMap = moduleGraph.getModuleSourceMapById(position.source);
		if (sourceMap) return {
			url: position.source,
			map: sourceMap,
			vite: !0
		};
	}
	return null;
}
function retrieveFile(path) {
	if (path in fileContentsCache) return fileContentsCache[path];
	let content = retrieveFileFromHandlers(path);
	return typeof content == "string" ? (fileContentsCache[path] = content, content) : null;
}
function retrieveSourceMapURL(source) {
	let fileData = retrieveFile(source);
	if (!fileData) return null;
	let re = /\/\/[@#]\s*sourceMappingURL=([^\s'"]+)\s*$|\/\*[@#]\s*sourceMappingURL=[^\s*'"]+\s*\*\/\s*$/gm, lastMatch, match;
	for (; match = re.exec(fileData);) lastMatch = match;
	return lastMatch ? lastMatch[1] : null;
}
const reSourceMap = /^data:application\/json[^,]+base64,/;
function retrieveSourceMap(source) {
	let urlAndMap = retrieveSourceMapFromHandlers(source);
	if (urlAndMap) return urlAndMap;
	let sourceMappingURL = retrieveSourceMapURL(source);
	if (!sourceMappingURL) return null;
	let sourceMapData;
	if (reSourceMap.test(sourceMappingURL)) {
		let rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(",") + 1);
		sourceMapData = Buffer.from(rawData, "base64").toString(), sourceMappingURL = source;
	} else sourceMappingURL = supportRelativeURL(source, sourceMappingURL), sourceMapData = retrieveFile(sourceMappingURL);
	return sourceMapData ? {
		url: sourceMappingURL,
		map: sourceMapData
	} : null;
}
function mapSourcePosition(position) {
	if (!position.source) return position;
	let sourceMap = getRunnerSourceMap(position);
	if (sourceMap ||= sourceMapCache[position.source], !sourceMap) {
		let urlAndMap = retrieveSourceMap(position.source);
		if (urlAndMap && urlAndMap.map) {
			let url = urlAndMap.url;
			sourceMap = sourceMapCache[position.source] = {
				url,
				map: new DecodedMap(typeof urlAndMap.map == "string" ? JSON.parse(urlAndMap.map) : urlAndMap.map, url)
			};
			let contents = sourceMap.map?.map.sourcesContent;
			sourceMap.map && contents && sourceMap.map.resolvedSources.forEach((source, i) => {
				let content = contents[i];
				if (content && source && url) {
					let contentUrl = supportRelativeURL(url, source);
					fileContentsCache[contentUrl] = content;
				}
			});
		} else sourceMap = sourceMapCache[position.source] = {
			url: null,
			map: null
		};
	}
	if (sourceMap.map && sourceMap.url) {
		let originalPosition = getOriginalPosition(sourceMap.map, position);
		if (originalPosition && originalPosition.source != null) return originalPosition.source = supportRelativeURL(sourceMap.url, originalPosition.source), sourceMap.vite && (originalPosition._vite = !0), originalPosition;
	}
	return position;
}
function mapEvalOrigin(origin) {
	let match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
	if (match) {
		let position = mapSourcePosition({
			name: null,
			source: match[2],
			line: +match[3],
			column: match[4] - 1
		});
		return `eval at ${match[1]} (${position.source}:${position.line}:${position.column + 1})`;
	}
	return match = /^eval at ([^(]+) \((.+)\)$/.exec(origin), match ? `eval at ${match[1]} (${mapEvalOrigin(match[2])})` : origin;
}
function CallSiteToString() {
	let fileName, fileLocation = "";
	if (this.isNative()) fileLocation = "native";
	else {
		fileName = this.getScriptNameOrSourceURL(), !fileName && this.isEval() && (fileLocation = this.getEvalOrigin(), fileLocation += ", "), fileName ? fileLocation += fileName : fileLocation += "<anonymous>";
		let lineNumber = this.getLineNumber();
		if (lineNumber != null) {
			fileLocation += `:${lineNumber}`;
			let columnNumber = this.getColumnNumber();
			columnNumber && (fileLocation += `:${columnNumber}`);
		}
	}
	let line = "", functionName = this.getFunctionName(), addSuffix = !0, isConstructor = this.isConstructor();
	if (this.isToplevel() || isConstructor) isConstructor ? line += `new ${functionName || "<anonymous>"}` : functionName ? line += functionName : (line += fileLocation, addSuffix = !1);
	else {
		let typeName = this.getTypeName();
		typeName === "[object Object]" && (typeName = "null");
		let methodName = this.getMethodName();
		functionName ? (typeName && functionName.indexOf(typeName) !== 0 && (line += `${typeName}.`), line += functionName, methodName && functionName.indexOf(`.${methodName}`) !== functionName.length - methodName.length - 1 && (line += ` [as ${methodName}]`)) : line += `${typeName}.${methodName || "<anonymous>"}`;
	}
	return addSuffix && (line += ` (${fileLocation})`), line;
}
function cloneCallSite(frame) {
	let object = {};
	return Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach((name) => {
		let key = name;
		object[key] = /^(?:is|get)/.test(name) ? function() {
			return frame[key].call(frame);
		} : frame[key];
	}), object.toString = CallSiteToString, object;
}
function wrapCallSite(frame, state) {
	if (state === void 0 && (state = {
		nextPosition: null,
		curPosition: null
	}), frame.isNative()) return state.curPosition = null, frame;
	let source = frame.getFileName() || frame.getScriptNameOrSourceURL();
	if (source) {
		let line = frame.getLineNumber(), column = frame.getColumnNumber() - 1;
		line === 1 && column > 62 && !frame.isEval() && (column -= 62);
		let position = mapSourcePosition({
			name: null,
			source,
			line,
			column
		});
		state.curPosition = position, frame = cloneCallSite(frame);
		let originalFunctionName = frame.getFunctionName;
		return frame.getFunctionName = function() {
			let name = (() => state.nextPosition == null ? originalFunctionName() : state.nextPosition.name || originalFunctionName())();
			return name === "eval" && "_vite" in position ? null : name;
		}, frame.getFileName = function() {
			return position.source ?? null;
		}, frame.getLineNumber = function() {
			return position.line;
		}, frame.getColumnNumber = function() {
			return position.column + 1;
		}, frame.getScriptNameOrSourceURL = function() {
			return position.source;
		}, frame;
	}
	let origin = frame.isEval() && frame.getEvalOrigin();
	return origin ? (origin = mapEvalOrigin(origin), frame = cloneCallSite(frame), frame.getEvalOrigin = function() {
		return origin || void 0;
	}, frame) : frame;
}
function prepareStackTrace(error, stack) {
	let errorString = `${error.name || "Error"}: ${error.message || ""}`, state = {
		nextPosition: null,
		curPosition: null
	}, processedStack = [];
	for (let i = stack.length - 1; i >= 0; i--) processedStack.push(`\n    at ${wrapCallSite(stack[i], state)}`), state.nextPosition = state.curPosition;
	return state.curPosition = state.nextPosition = null, errorString + processedStack.reverse().join("");
}
function enableSourceMapSupport(runner) {
	if (runner.options.sourcemapInterceptor === "node") {
		if (typeof process > "u") throw TypeError("Cannot use \"sourcemapInterceptor: 'node'\" because global \"process\" variable is not available.");
		if (typeof process.setSourceMapsEnabled != "function") throw TypeError("Cannot use \"sourcemapInterceptor: 'node'\" because \"process.setSourceMapsEnabled\" function is not available. Please use Node >= 16.6.0.");
		let isEnabledAlready = process.sourceMapsEnabled ?? !1;
		return process.setSourceMapsEnabled(!0), () => !isEnabledAlready && process.setSourceMapsEnabled(!1);
	}
	return interceptStackTrace(runner, typeof runner.options.sourcemapInterceptor == "object" ? runner.options.sourcemapInterceptor : void 0);
}
var ESModulesEvaluator = class {
	startOffset = getAsyncFunctionDeclarationPaddingLineCount();
	async runInlinedModule(context, code) {
		await new AsyncFunction(ssrModuleExportsKey, ssrImportMetaKey, ssrImportKey, ssrDynamicImportKey, ssrExportAllKey, ssrExportNameKey, "\"use strict\";" + code)(context[ssrModuleExportsKey], context[ssrImportMetaKey], context[ssrImportKey], context[ssrDynamicImportKey], context[ssrExportAllKey], context[ssrExportNameKey]), Object.seal(context[ssrModuleExportsKey]);
	}
	runExternalModule(filepath) {
		return import(filepath);
	}
};
const customizationHookNamespace = "vite-module-runner:import-meta-resolve/v1/", customizationHooksModule = `

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith(${JSON.stringify(customizationHookNamespace)})) {
    const data = specifier.slice(${JSON.stringify(customizationHookNamespace)}.length)
    const [parsedSpecifier, parsedImporter] = JSON.parse(data)
    specifier = parsedSpecifier
    context.parentURL = parsedImporter
  }
  return nextResolve(specifier, context)
}

`;
function customizationHookResolve(specifier, context, nextResolve) {
	if (specifier.startsWith(customizationHookNamespace)) {
		let data = specifier.slice(42), [parsedSpecifier, parsedImporter] = JSON.parse(data);
		specifier = parsedSpecifier, context.parentURL = parsedImporter;
	}
	return nextResolve(specifier, context);
}
async function createImportMetaResolver() {
	let module;
	try {
		module = (await import("node:module")).Module;
	} catch {
		return;
	}
	if (module) {
		if (module.registerHooks) return module.registerHooks({ resolve: customizationHookResolve }), importMetaResolveWithCustomHook;
		if (module.register) {
			try {
				let hookModuleContent = `data:text/javascript,${encodeURI(customizationHooksModule)}`;
				module.register(hookModuleContent);
			} catch (e) {
				if ("code" in e && e.code === "ERR_NETWORK_IMPORT_DISALLOWED") return;
				throw e;
			}
			return importMetaResolveWithCustomHook;
		}
	}
}
function importMetaResolveWithCustomHook(specifier, importer) {
	return import.meta.resolve(`${customizationHookNamespace}${JSON.stringify([specifier, importer])}`);
}
`${customizationHookNamespace}`;
const envProxy = new Proxy({}, { get(_, p) {
	throw Error(`[module runner] Dynamic access of "import.meta.env" is not supported. Please, use "import.meta.env.${String(p)}" instead.`);
} });
function createDefaultImportMeta(modulePath) {
	let href = posixPathToFileHref(modulePath), filename = modulePath, dirname$1 = posixDirname(modulePath);
	return {
		filename: isWindows ? toWindowsPath(filename) : filename,
		dirname: isWindows ? toWindowsPath(dirname$1) : dirname$1,
		url: href,
		env: envProxy,
		resolve(_id, _parent) {
			throw Error("[module runner] \"import.meta.resolve\" is not supported.");
		},
		glob() {
			throw Error("[module runner] \"import.meta.glob\" is statically replaced during file transformation. Make sure to reference it by the full name.");
		}
	};
}
let importMetaResolverCache;
async function createNodeImportMeta(modulePath) {
	let defaultMeta = createDefaultImportMeta(modulePath), href = defaultMeta.url;
	importMetaResolverCache ??= createImportMetaResolver();
	let importMetaResolver = await importMetaResolverCache;
	return {
		...defaultMeta,
		main: !1,
		resolve(id, parent) {
			return (importMetaResolver ?? defaultMeta.resolve)(id, parent ?? href);
		}
	};
}
var ModuleRunner = class {
	evaluatedModules;
	hmrClient;
	transport;
	resetSourceMapSupport;
	concurrentModuleNodePromises = /* @__PURE__ */ new Map();
	isBuiltin;
	builtinsPromise;
	closed = !1;
	constructor(options, evaluator = new ESModulesEvaluator(), debug) {
		if (this.options = options, this.evaluator = evaluator, this.debug = debug, this.evaluatedModules = options.evaluatedModules ?? new EvaluatedModules(), this.transport = normalizeModuleRunnerTransport(options.transport), options.hmr !== !1) {
			let optionsHmr = options.hmr ?? !0;
			if (this.hmrClient = new HMRClient(optionsHmr === !0 || optionsHmr.logger === void 0 ? hmrLogger : optionsHmr.logger === !1 ? silentConsole : optionsHmr.logger, this.transport, ({ acceptedPath }) => this.import(acceptedPath)), !this.transport.connect) throw Error("HMR is not supported by this runner transport, but `hmr` option was set to true");
			this.transport.connect(createHMRHandlerForRunner(this));
		} else this.transport.connect?.();
		options.sourcemapInterceptor !== !1 && (this.resetSourceMapSupport = enableSourceMapSupport(this));
	}
	async import(url) {
		let fetchedModule = await this.cachedModule(url);
		return await this.cachedRequest(url, fetchedModule);
	}
	clearCache() {
		this.evaluatedModules.clear(), this.hmrClient?.clear();
	}
	async close() {
		this.resetSourceMapSupport?.(), this.clearCache(), this.hmrClient = void 0, this.closed = !0, await this.transport.disconnect?.();
	}
	isClosed() {
		return this.closed;
	}
	processImport(exports, fetchResult, metadata) {
		if (!("externalize" in fetchResult)) return exports;
		let { url, type } = fetchResult;
		return type !== "module" && type !== "commonjs" || analyzeImportedModDifference(exports, url, type, metadata), exports;
	}
	isCircularModule(mod) {
		for (let importedFile of mod.imports) if (mod.importers.has(importedFile)) return !0;
		return !1;
	}
	isCircularImport(importers, moduleUrl, visited = /* @__PURE__ */ new Set()) {
		for (let importer of importers) {
			if (visited.has(importer)) continue;
			if (visited.add(importer), importer === moduleUrl) return !0;
			let mod = this.evaluatedModules.getModuleById(importer);
			if (mod && mod.importers.size && this.isCircularImport(mod.importers, moduleUrl, visited)) return !0;
		}
		return !1;
	}
	async cachedRequest(url, mod, callstack = [], metadata) {
		let meta = mod.meta, moduleId = meta.id, { importers } = mod, importee = callstack[callstack.length - 1];
		if (importee && importers.add(importee), (callstack.includes(moduleId) || this.isCircularModule(mod) || this.isCircularImport(importers, moduleId)) && mod.exports) return this.processImport(mod.exports, meta, metadata);
		let debugTimer;
		this.debug && (debugTimer = setTimeout(() => {
			this.debug(`[module runner] module ${moduleId} takes over 2s to load.\n${(() => `stack:\n${[...callstack, moduleId].reverse().map((p) => `  - ${p}`).join("\n")}`)()}`);
		}, 2e3));
		try {
			if (mod.promise) return this.processImport(await mod.promise, meta, metadata);
			let promise = this.directRequest(url, mod, callstack);
			return mod.promise = promise, mod.evaluated = !1, this.processImport(await promise, meta, metadata);
		} finally {
			mod.evaluated = !0, debugTimer && clearTimeout(debugTimer);
		}
	}
	async cachedModule(url, importer) {
		let cached = this.concurrentModuleNodePromises.get(url);
		if (cached) this.debug?.("[module runner] using cached module info for", url);
		else {
			let cachedModule = this.evaluatedModules.getModuleByUrl(url);
			cached = this.getModuleInformation(url, importer, cachedModule).finally(() => {
				this.concurrentModuleNodePromises.delete(url);
			}), this.concurrentModuleNodePromises.set(url, cached);
		}
		return cached;
	}
	ensureBuiltins() {
		if (!this.isBuiltin) return this.builtinsPromise ??= (async () => {
			try {
				this.debug?.("[module runner] fetching builtins from server");
				let builtins = (await this.transport.invoke("getBuiltins", [])).map((builtin) => typeof builtin == "object" && builtin && "type" in builtin ? builtin.type === "string" ? builtin.value : new RegExp(builtin.source, builtin.flags) : builtin);
				this.isBuiltin = createIsBuiltin(builtins), this.debug?.("[module runner] builtins loaded:", builtins);
			} finally {
				this.builtinsPromise = void 0;
			}
		})(), this.builtinsPromise;
	}
	async getModuleInformation(url, importer, cachedModule) {
		if (this.closed) throw Error("Vite module runner has been closed.");
		await this.ensureBuiltins(), this.debug?.("[module runner] fetching", url);
		let isCached = !!(typeof cachedModule == "object" && cachedModule.meta), fetchedModule = url.startsWith("data:") || this.isBuiltin?.(url) ? {
			externalize: url,
			type: "builtin"
		} : await this.transport.invoke("fetchModule", [
			url,
			importer,
			{
				cached: isCached,
				startOffset: this.evaluator.startOffset
			}
		]);
		if ("cache" in fetchedModule) {
			if (!cachedModule || !cachedModule.meta) throw Error(`Module "${url}" was mistakenly invalidated during fetch phase.`);
			return cachedModule;
		}
		let moduleId = "externalize" in fetchedModule ? fetchedModule.externalize : fetchedModule.id, moduleUrl = "url" in fetchedModule ? fetchedModule.url : url, module = this.evaluatedModules.ensureModule(moduleId, moduleUrl);
		return "invalidate" in fetchedModule && fetchedModule.invalidate && this.evaluatedModules.invalidateModule(module), fetchedModule.url = moduleUrl, fetchedModule.id = moduleId, module.meta = fetchedModule, module;
	}
	async directRequest(url, mod, _callstack) {
		let fetchResult = mod.meta, moduleId = fetchResult.id, callstack = [..._callstack, moduleId], request = async (dep, metadata) => {
			let importer = "file" in fetchResult && fetchResult.file || moduleId, depMod = await this.cachedModule(dep, importer);
			return depMod.importers.add(moduleId), mod.imports.add(depMod.id), this.cachedRequest(dep, depMod, callstack, metadata);
		}, dynamicRequest = async (dep) => (dep = String(dep), dep[0] === "." && (dep = posixResolve(posixDirname(url), dep)), request(dep, { isDynamicImport: !0 }));
		if ("externalize" in fetchResult) {
			let { externalize } = fetchResult;
			this.debug?.("[module runner] externalizing", externalize);
			let exports$1 = await this.evaluator.runExternalModule(externalize);
			return mod.exports = exports$1, exports$1;
		}
		let { code, file } = fetchResult;
		if (code == null) {
			let importer = callstack[callstack.length - 2];
			throw Error(`[module runner] Failed to load "${url}"${importer ? ` imported from ${importer}` : ""}`);
		}
		let createImportMeta = this.options.createImportMeta ?? createDefaultImportMeta, modulePath = cleanUrl(file || moduleId), href = posixPathToFileHref(modulePath), meta = await createImportMeta(modulePath), exports = Object.create(null);
		Object.defineProperty(exports, Symbol.toStringTag, {
			value: "Module",
			enumerable: !1,
			configurable: !1
		}), mod.exports = exports;
		let hotContext;
		this.hmrClient && Object.defineProperty(meta, "hot", {
			enumerable: !0,
			get: () => {
				if (!this.hmrClient) throw Error("[module runner] HMR client was closed.");
				return this.debug?.("[module runner] creating hmr context for", mod.url), hotContext ||= new HMRContext(this.hmrClient, mod.url), hotContext;
			},
			set: (value) => {
				hotContext = value;
			}
		});
		let context = {
			[ssrImportKey]: request,
			[ssrDynamicImportKey]: dynamicRequest,
			[ssrModuleExportsKey]: exports,
			[ssrExportAllKey]: (obj) => exportAll(exports, obj),
			[ssrExportNameKey]: (name, getter) => Object.defineProperty(exports, name, {
				enumerable: !0,
				configurable: !0,
				get: getter
			}),
			[ssrImportMetaKey]: meta
		};
		return this.debug?.("[module runner] executing", href), await this.evaluator.runInlinedModule(context, code, mod), exports;
	}
};
function exportAll(exports, sourceModule) {
	if (exports !== sourceModule && !(isPrimitive(sourceModule) || Array.isArray(sourceModule) || sourceModule instanceof Promise)) {
		for (let key in sourceModule) if (key !== "default" && key !== "__esModule" && !(key in exports)) try {
			Object.defineProperty(exports, key, {
				enumerable: !0,
				configurable: !0,
				get: () => sourceModule[key]
			});
		} catch {}
	}
}
export { ESModulesEvaluator, EvaluatedModules, ModuleRunner, createDefaultImportMeta, createNodeImportMeta, createWebSocketModuleRunnerTransport, normalizeModuleId, ssrDynamicImportKey, ssrExportAllKey, ssrExportNameKey, ssrImportKey, ssrImportMetaKey, ssrModuleExportsKey };
