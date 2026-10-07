/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const EventEmitter = require("events");
const { extname, basename } = require("path");
const { URL } = require("url");
const { createGunzip, createBrotliDecompress, createInflate } = require("zlib");
const NormalModule = require("../NormalModule");
const createSchemaValidation = require("../util/create-schema-validation");
const createHash = require("../util/createHash");
const { mkdirp, dirname, join } = require("../util/fs");
const memoize = require("../util/memoize");

/** @typedef {import("http").IncomingMessage} IncomingMessage */
/** @typedef {import("http").RequestOptions} RequestOptions */
/** @typedef {import("net").Socket} Socket */
/** @typedef {import("stream").Readable} Readable */
/** @typedef {import("../../declarations/plugins/schemes/HttpUriPlugin").HttpUriPluginOptions} HttpUriPluginOptions */
/** @typedef {import("../Compiler")} Compiler */
/** @typedef {import("../FileSystemInfo").Snapshot} Snapshot */
/** @typedef {import("../Module").BuildInfo} BuildInfo */
/** @typedef {import("../NormalModuleFactory").ResourceDataWithData} ResourceDataWithData */
/** @typedef {import("../util/fs").IntermediateFileSystem} IntermediateFileSystem */

const getHttp = memoize(() => require("http"));
const getHttps = memoize(() => require("https"));

/**
 * @param {typeof import("http") | typeof import("https")} request request
 * @param {string | { toString: () => string } | undefined} proxy proxy
 * @returns {function(URL, RequestOptions, function(IncomingMessage): void): EventEmitter} fn
 */
const proxyFetch = (request, proxy) => (url, options, callback) => {
	const eventEmitter = new EventEmitter();

	/**
	 * @param {Socket=} socket socket
	 * @returns {void}
	 */
	const doRequest = socket => {
		request
			.get(url, { ...options, ...(socket && { socket }) }, callback)
			.on("error", eventEmitter.emit.bind(eventEmitter, "error"));
	};

	if (proxy) {
		const { hostname: host, port } = new URL(proxy);

		getHttp()
			.request({
				host, // IP address of proxy server
				port, // port of proxy server
				method: "CONNECT",
				path: url.host
			})
			.on("connect", (res, socket) => {
				if (res.statusCode === 200) {
					// connected to proxy server
					doRequest(socket);
				}
			})
			.on("error", err => {
				eventEmitter.emit(
					"error",
					new Error(
						`Failed to connect to proxy server "${proxy}": ${err.message}`
					)
				);
			})
			.end();
	} else {
		doRequest();
	}

	return eventEmitter;
};

/** @typedef {() => void} InProgressWriteItem */
/** @type {InProgressWriteItem[] | undefined} */
let inProgressWrite;

const validate = createSchemaValidation(
	require("../../schemas/plugins/schemes/HttpUriPlugin.check.js"),
	() => require("../../schemas/plugins/schemes/HttpUriPlugin.json"),
	{
		name: "Http Uri Plugin",
		baseDataPath: "options"
	}
);

/**
 * @param {string} str path
 * @returns {string} safe path
 */
const toSafePath = str =>
	str
		.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
		.replace(/[^a-zA-Z0-9._-]+/g, "_");

/**
 * @param {Buffer} content content
 * @returns {string} integrity
 */
const computeIntegrity = content => {
	const hash = createHash("sha512");
	hash.update(content);
	const integrity = `sha512-${hash.digest("base64")}`;
	return integrity;
};

/**
 * @param {Buffer} content content
 * @param {string} integrity integrity
 * @returns {boolean} true, if integrity matches
 */
const verifyIntegrity = (content, integrity) => {
	if (integrity === "ignore") return true;
	return computeIntegrity(content) === integrity;
};

/**
 * @param {string} str input
 * @returns {Record<string, string>} parsed
 */
const parseKeyValuePairs = str => {
	/** @type {Record<string, string>} */
	const result = {};
	for (const item of str.split(",")) {
		const i = item.indexOf("=");
		if (i >= 0) {
			const key = item.slice(0, i).trim();
			const value = item.slice(i + 1).trim();
			result[key] = value;
		} else {
			const key = item.trim();
			if (!key) continue;
			result[key] = key;
		}
	}
	return result;
};

/**
 * @param {string | undefined} cacheControl Cache-Control header
 * @param {number} requestTime timestamp of request
 * @returns {{storeCache: boolean, storeLock: boolean, validUntil: number}} Logic for storing in cache and lockfile cache
 */
const parseCacheControl = (cacheControl, requestTime) => {
	// When false resource is not stored in cache
	let storeCache = true;
	// When false resource is not stored in lockfile cache
	let storeLock = true;
	// Resource is only revalidated, after that timestamp and when upgrade is chosen
	let validUntil = 0;
	if (cacheControl) {
		const parsed = parseKeyValuePairs(cacheControl);
		if (parsed["no-cache"]) storeCache = storeLock = false;
		if (parsed["max-age"] && !Number.isNaN(Number(parsed["max-age"]))) {
			validUntil = requestTime + Number(parsed["max-age"]) * 1000;
		}
		if (parsed["must-revalidate"]) validUntil = 0;
	}
	return {
		storeLock,
		storeCache,
		validUntil
	};
};

/**
 * @typedef {object} LockfileEntry
 * @property {string} resolved
 * @property {string} integrity
 * @property {string} contentType
 */

/**
 * @param {LockfileEntry} a first lockfile entry
 * @param {LockfileEntry} b second lockfile entry
 * @returns {boolean} true when equal, otherwise false
 */
const areLockfileEntriesEqual = (a, b) =>
	a.resolved === b.resolved &&
	a.integrity === b.integrity &&
	a.contentType === b.contentType;

/**
 * @param {LockfileEntry} entry lockfile entry
 * @returns {`resolved: ${string}, integrity: ${string}, contentType: ${*}`} stringified entry
 */
const entryToString = entry =>
	`resolved: ${entry.resolved}, integrity: ${entry.integrity}, contentType: ${entry.contentType}`;

class Lockfile {
	constructor() {
		this.version = 1;
		/** @type {Map<string, LockfileEntry | "ignore" | "no-cache">} */
		this.entries = new Map();
	}

	/**
	 * @param {string} content content of the lockfile
	 * @returns {Lockfile} lockfile
	 */
	static parse(content) {
		// TODO handle merge conflicts
		const data = JSON.parse(content);
		if (data.version !== 1)
			throw new Error(`Unsupported lockfile version ${data.version}`);
		const lockfile = new Lockfile();
		for (const key of Object.keys(data)) {
			if (key === "version") continue;
			const entry = data[key];
			lockfile.entries.set(
				key,
				typeof entry === "string"
					? entry
					: {
							resolved: key,
							...entry
						}
			);
		}
		return lockfile;
	}

	/**
	 * @returns {string} stringified lockfile
	 */
	toString() {
		let str = "{\n";
		const entries = Array.from(this.entries).sort(([a], [b]) =>
			a < b ? -1 : 1
		);
		for (const [key, entry] of entries) {
			if (typeof entry === "string") {
				str += `  ${JSON.stringify(key)}: ${JSON.stringify(entry)},\n`;
			} else {
				str += `  ${JSON.stringify(key)}: { `;
				if (entry.resolved !== key)
					str += `"resolved": ${JSON.stringify(entry.resolved)}, `;
				str += `"integrity": ${JSON.stringify(
					entry.integrity
				)}, "contentType": ${JSON.stringify(entry.contentType)} },\n`;
			}
		}
		str += `  "version": ${this.version}\n}\n`;
		return str;
	}
}

/**
 * @template R
 * @param {function(function(Error | null, R=): void): void} fn function
 * @returns {function(function(Error | null, R=): void): void} cached function
 */
const cachedWithoutKey = fn => {
	let inFlight = false;
	/** @type {Error | undefined} */
	let cachedError;
	/** @type {R | undefined} */
	let cachedResult;
	/** @type {(function(Error| null, R=): void)[] | undefined} */
	let cachedCallbacks;
	return callback => {
		if (inFlight) {
			if (cachedResult !== undefined) return callback(null, cachedResult);
			if (cachedError !== undefined) return callback(cachedError);
			if (cachedCallbacks === undefined) cachedCallbacks = [callback];
			else cachedCallbacks.push(callback);
			return;
		}
		inFlight = true;
		fn((err, result) => {
			if (err) cachedError = err;
			else cachedResult = result;
			const callbacks = cachedCallbacks;
			cachedCallbacks = undefined;
			callback(err, result);
			if (callbacks !== undefined) for (const cb of callbacks) cb(err, result);
		});
	};
};

/**
 * @template T
 * @template R
 * @param {function(T, function(Error | null, R=): void): void} fn function
 * @param {function(T, function(Error | null, R=): void): void=} forceFn function for the second try
 * @returns {(function(T, function(Error | null, R=): void): void) & { force: function(T, function(Error | null, R=): void): void }} cached function
 */
const cachedWithKey = (fn, forceFn = fn) => {
	/**
	 * @template R
	 * @typedef {{ result?: R, error?: Error, callbacks?: (function(Error | null, R=): void)[], force?: true }} CacheEntry
	 */
	/** @type {Map<T, CacheEntry<R>>} */
	const cache = new Map();
	/**
	 * @param {T} arg arg
	 * @param {function(Error | null, R=): void} callback callback
	 * @returns {void}
	 */
	const resultFn = (arg, callback) => {
		const cacheEntry = cache.get(arg);
		if (cacheEntry !== undefined) {
			if (cacheEntry.result !== undefined)
				return callback(null, cacheEntry.result);
			if (cacheEntry.error !== undefined) return callback(cacheEntry.error);
			if (cacheEntry.callbacks === undefined) cacheEntry.callbacks = [callback];
			else cacheEntry.callbacks.push(callback);
			return;
		}
		/** @type {CacheEntry<R>} */
		const newCacheEntry = {
			result: undefined,
			error: undefined,
			callbacks: undefined
		};
		cache.set(arg, newCacheEntry);
		fn(arg, (err, result) => {
			if (err) newCacheEntry.error = err;
			else newCacheEntry.result = result;
			const callbacks = newCacheEntry.callbacks;
			newCacheEntry.callbacks = undefined;
			callback(err, result);
			if (callbacks !== undefined) for (const cb of callbacks) cb(err, result);
		});
	};
	/**
	 * @param {T} arg arg
	 * @param {function(Error | null, R=): void} callback callback
	 * @returns {void}
	 */
	resultFn.force = (arg, callback) => {
		const cacheEntry = cache.get(arg);
		if (cacheEntry !== undefined && cacheEntry.force) {
			if (cacheEntry.result !== undefined)
				return callback(null, cacheEntry.result);
			if (cacheEntry.error !== undefined) return callback(cacheEntry.error);
			if (cacheEntry.callbacks === undefined) cacheEntry.callbacks = [callback];
			else cacheEntry.callbacks.push(callback);
			return;
		}
		/** @type {CacheEntry<R>} */
		const newCacheEntry = {
			result: undefined,
			error: undefined,
			callbacks: undefined,
			force: true
		};
		cache.set(arg, newCacheEntry);
		forceFn(arg, (err, result) => {
			if (err) newCacheEntry.error = err;
			else newCacheEntry.result = result;
			const callbacks = newCacheEntry.callbacks;
			newCacheEntry.callbacks = undefined;
			callback(err, result);
			if (callbacks !== undefined) for (const cb of callbacks) cb(err, result);
		});
	};
	return resultFn;
};

/**
 * @typedef {object} LockfileCache
 * @property {Lockfile} lockfile lockfile
 * @property {Snapshot} snapshot snapshot
 */

/**
 * @typedef {object} ResolveContentResult
 * @property {LockfileEntry} entry lockfile entry
 * @property {Buffer} content content
 * @property {boolean} storeLock need store lockfile
 */

/** @typedef {{ storeCache: boolean, storeLock: boolean, validUntil: number, etag: string | undefined, fresh: boolean }} FetchResultMeta */
/** @typedef {FetchResultMeta & { location: string }} RedirectFetchResult */
/** @typedef {FetchResultMeta & { entry: LockfileEntry, content: Buffer }} ContentFetchResult */
/** @typedef {RedirectFetchResult | ContentFetchResult} FetchResult */

class HttpUriPlugin {
	/**
	 * @param {HttpUriPluginOptions} options options
	 */
	constructor(options) {
		validate(options);
		this._lockfileLocation = options.lockfileLocation;
		this._cacheLocation = options.cacheLocation;
		this._upgrade = options.upgrade;
		this._frozen = options.frozen;
		this._allowedUris = options.allowedUris;
		this._proxy = options.proxy;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		const proxy =
			this._proxy || process.env.http_proxy || process.env.HTTP_PROXY;
		const schemes = [
			{
				scheme: "http",
				fetch: proxyFetch(getHttp(), proxy)
			},
			{
				scheme: "https",
				fetch: proxyFetch(getHttps(), proxy)
			}
		];
		/** @type {LockfileCache} */
		let lockfileCache;
		compiler.hooks.compilation.tap(
			"HttpUriPlugin",
			(compilation, { normalModuleFactory }) => {
				const intermediateFs =
					/** @type {IntermediateFileSystem} */
					(compiler.intermediateFileSystem);
				const fs = compilation.inputFileSystem;
				const cache = compilation.getCache("webpack.HttpUriPlugin");
				const logger = compilation.getLogger("webpack.HttpUriPlugin");
				/** @type {string} */
				const lockfileLocation =
					this._lockfileLocation ||
					join(
						intermediateFs,
						compiler.context,
						compiler.name
							? `${toSafePath(compiler.name)}.webpack.lock`
							: "webpack.lock"
					);
				/** @type {string | false} */
				const cacheLocation =
					this._cacheLocation !== undefined
						? this._cacheLocation
						: `${lockfileLocation}.data`;
				const upgrade = this._upgrade || false;
				const frozen = this._frozen || false;
				const hashFunction = "sha512";
				const hashDigest = "hex";
				const hashDigestLength = 20;
				const allowedUris = this._allowedUris;

				let warnedAboutEol = false;

				/** @type {Map<string, string>} */
				const cacheKeyCache = new Map();
				/**
				 * @param {string} url the url
				 * @returns {string} the key
				 */
				const getCacheKey = url => {
					const cachedResult = cacheKeyCache.get(url);
					if (cachedResult !== undefined) return cachedResult;
					const result = _getCacheKey(url);
					cacheKeyCache.set(url, result);
					return result;
				};

				/**
				 * @param {string} url the url
				 * @returns {string} the key
				 */
				const _getCacheKey = url => {
					const parsedUrl = new URL(url);
					const folder = toSafePath(parsedUrl.origin);
					const name = toSafePath(parsedUrl.pathname);
					const query = toSafePath(parsedUrl.search);
					let ext = extname(name);
					if (ext.length > 20) ext = "";
					const basename = ext ? name.slice(0, -ext.length) : name;
					const hash = createHash(hashFunction);
					hash.update(url);
					const digest = hash.digest(hashDigest).slice(0, hashDigestLength);
					return `${folder.slice(-50)}/${`${basename}${
						query ? `_${query}` : ""
					}`.slice(0, 150)}_${digest}${ext}`;
				};

				const getLockfile = cachedWithoutKey(
					/**
					 * @param {function(Error | null, Lockfile=): void} callback callback
					 * @returns {void}
					 */
					callback => {
						const readLockfile = () => {
							intermediateFs.readFile(lockfileLocation, (err, buffer) => {
								if (err && err.code !== "ENOENT") {
									compilation.missingDependencies.add(lockfileLocation);
									return callback(err);
								}
								compilation.fileDependencies.add(lockfileLocation);
								compilation.fileSystemInfo.createSnapshot(
									compiler.fsStartTime,
									buffer ? [lockfileLocation] : [],
									[],
									buffer ? [] : [lockfileLocation],
									{ timestamp: true },
									(err, s) => {
										if (err) return callback(err);
										const lockfile = buffer
											? Lockfile.parse(buffer.toString("utf-8"))
											: new Lockfile();
										lockfileCache = {
											lockfile,
											snapshot: /** @type {Snapshot} */ (s)
										};
										callback(null, lockfile);
									}
								);
							});
						};
						if (lockfileCache) {
							compilation.fileSystemInfo.checkSnapshotValid(
								lockfileCache.snapshot,
								(err, valid) => {
									if (err) return callback(err);
									if (!valid) return readLockfile();
									callback(null, lockfileCache.lockfile);
								}
							);
						} else {
							readLockfile();
						}
					}
				);

				/** @typedef {Map<string, LockfileEntry | "ignore" | "no-cache">} LockfileUpdates */

				/** @type {LockfileUpdates | undefined} */
				let lockfileUpdates;

				/**
				 * @param {Lockfile} lockfile lockfile instance
				 * @param {string} url url to store
				 * @param {LockfileEntry | "ignore" | "no-cache"} entry lockfile entry
				 */
				const storeLockEntry = (lockfile, url, entry) => {
					const oldEntry = lockfile.entries.get(url);
					if (lockfileUpdates === undefined) lockfileUpdates = new Map();
					lockfileUpdates.set(url, entry);
					lockfile.entries.set(url, entry);
					if (!oldEntry) {
						logger.log(`${url} added to lockfile`);
					} else if (typeof oldEntry === "string") {
						if (typeof entry === "string") {
							logger.log(`${url} updated in lockfile: ${oldEntry} -> ${entry}`);
						} else {
							logger.log(
								`${url} updated in lockfile: ${oldEntry} -> ${entry.resolved}`
							);
						}
					} else if (typeof entry === "string") {
						logger.log(
							`${url} updated in lockfile: ${oldEntry.resolved} -> ${entry}`
						);
					} else if (oldEntry.resolved !== entry.resolved) {
						logger.log(
							`${url} updated in lockfile: ${oldEntry.resolved} -> ${entry.resolved}`
						);
					} else if (oldEntry.integrity !== entry.integrity) {
						logger.log(`${url} updated in lockfile: content changed`);
					} else if (oldEntry.contentType !== entry.contentType) {
						logger.log(
							`${url} updated in lockfile: ${oldEntry.contentType} -> ${entry.contentType}`
						);
					} else {
						logger.log(`${url} updated in lockfile`);
					}
				};

				/**
				 * @param {Lockfile} lockfile lockfile
				 * @param {string} url url
				 * @param {ResolveContentResult} result result
				 * @param {function(Error | null, ResolveContentResult=): void} callback callback
				 * @returns {void}
				 */
				const storeResult = (lockfile, url, result, callback) => {
					if (result.storeLock) {
						storeLockEntry(lockfile, url, result.entry);
						if (!cacheLocation || !result.content)
							return callback(null, result);
						const key = getCacheKey(result.entry.resolved);
						const filePath = join(intermediateFs, cacheLocation, key);
						mkdirp(intermediateFs, dirname(intermediateFs, filePath), err => {
							if (err) return callback(err);
							intermediateFs.writeFile(filePath, result.content, err => {
								if (err) return callback(err);
								callback(null, result);
							});
						});
					} else {
						storeLockEntry(lockfile, url, "no-cache");
						callback(null, result);
					}
				};

				for (const { scheme, fetch } of schemes) {
					/**
					 * @param {string} url URL
					 * @param {string | null} integrity integrity
					 * @param {function(Error | null, ResolveContentResult=): void} callback callback
					 */
					const resolveContent = (url, integrity, callback) => {
						/**
						 * @param {Error | null} err error
						 * @param {TODO} result result result
						 * @returns {void}
						 */
						const handleResult = (err, result) => {
							if (err) return callback(err);
							if ("location" in result) {
								return resolveContent(
									result.location,
									integrity,
									(err, innerResult) => {
										if (err) return callback(err);
										const { entry, content, storeLock } =
											/** @type {ResolveContentResult} */ (innerResult);
										callback(null, {
											entry,
											content,
											storeLock: storeLock && result.storeLock
										});
									}
								);
							}
							if (
								!result.fresh &&
								integrity &&
								result.entry.integrity !== integrity &&
								!verifyIntegrity(result.content, integrity)
							) {
								return fetchContent.force(url, handleResult);
							}
							return callback(null, {
								entry: result.entry,
								content: result.content,
								storeLock: result.storeLock
							});
						};
						fetchContent(url, handleResult);
					};

					/**
					 * @param {string} url URL
					 * @param {FetchResult | RedirectFetchResult | undefined} cachedResult result from cache
					 * @param {function(Error | null, FetchResult=): void} callback callback
					 * @returns {void}
					 */
					const fetchContentRaw = (url, cachedResult, callback) => {
						const requestTime = Date.now();
						fetch(
							new URL(url),
							{
								headers: {
									"accept-encoding": "gzip, deflate, br",
									"user-agent": "webpack",
									"if-none-match": /** @type {TODO} */ (
										cachedResult ? cachedResult.etag || null : null
									)
								}
							},
							res => {
								const etag = res.headers.etag;
								const location = res.headers.location;
								const cacheControl = res.headers["cache-control"];
								const { storeLock, storeCache, validUntil } = parseCacheControl(
									cacheControl,
									requestTime
								);
								/**
								 * @param {Partial<Pick<FetchResultMeta, "fresh">> & (Pick<RedirectFetchResult, "location"> | Pick<ContentFetchResult, "content" | "entry">)} partialResult result
								 * @returns {void}
								 */
								const finishWith = partialResult => {
									if ("location" in partialResult) {
										logger.debug(
											`GET ${url} [${res.statusCode}] -> ${partialResult.location}`
										);
									} else {
										logger.debug(
											`GET ${url} [${res.statusCode}] ${Math.ceil(
												partialResult.content.length / 1024
											)} kB${!storeLock ? " no-cache" : ""}`
										);
									}
									const result = {
										...partialResult,
										fresh: true,
										storeLock,
										storeCache,
										validUntil,
										etag
									};
									if (!storeCache) {
										logger.log(
											`${url} can't be stored in cache, due to Cache-Control header: ${cacheControl}`
										);
										return callback(null, result);
									}
									cache.store(
										url,
										null,
										{
											...result,
											fresh: false
										},
										err => {
											if (err) {
												logger.warn(
													`${url} can't be stored in cache: ${err.message}`
												);
												logger.debug(err.stack);
											}
											callback(null, result);
										}
									);
								};
								if (res.statusCode === 304) {
									const result = /** @type {FetchResult} */ (cachedResult);
									if (
										result.validUntil < validUntil ||
										result.storeLock !== storeLock ||
										result.storeCache !== storeCache ||
										result.etag !== etag
									) {
										return finishWith(result);
									}
									logger.debug(`GET ${url} [${res.statusCode}] (unchanged)`);
									return callback(null, { ...result, fresh: true });
								}
								if (
									location &&
									res.statusCode &&
									res.statusCode >= 301 &&
									res.statusCode <= 308
								) {
									const result = {
										location: new URL(location, url).href
									};
									if (
										!cachedResult ||
										!("location" in cachedResult) ||
										cachedResult.location !== result.location ||
										cachedResult.validUntil < validUntil ||
										cachedResult.storeLock !== storeLock ||
										cachedResult.storeCache !== storeCache ||
										cachedResult.etag !== etag
									) {
										return finishWith(result);
									}
									logger.debug(`GET ${url} [${res.statusCode}] (unchanged)`);
									return callback(null, {
										...result,
										fresh: true,
										storeLock,
										storeCache,
										validUntil,
										etag
									});
								}
								const contentType = res.headers["content-type"] || "";
								/** @type {Buffer[]} */
								const bufferArr = [];

								const contentEncoding = res.headers["content-encoding"];
								/** @type {Readable} */
								let stream = res;
								if (contentEncoding === "gzip") {
									stream = stream.pipe(createGunzip());
								} else if (contentEncoding === "br") {
									stream = stream.pipe(createBrotliDecompress());
								} else if (contentEncoding === "deflate") {
									stream = stream.pipe(createInflate());
								}

								stream.on("data", chunk => {
									bufferArr.push(chunk);
								});

								stream.on("end", () => {
									if (!res.complete) {
										logger.log(`GET ${url} [${res.statusCode}] (terminated)`);
										return callback(new Error(`${url} request was terminated`));
									}

									const content = Buffer.concat(bufferArr);

									if (res.statusCode !== 200) {
										logger.log(`GET ${url} [${res.statusCode}]`);
										return callback(
											new Error(
												`${url} request status code = ${
													res.statusCode
												}\n${content.toString("utf-8")}`
											)
										);
									}

									const integrity = computeIntegrity(content);
									const entry = { resolved: url, integrity, contentType };

									finishWith({
										entry,
										content
									});
								});
							}
						).on("error", err => {
							logger.log(`GET ${url} (error)`);
							err.message += `\nwhile fetching ${url}`;
							callback(err);
						});
					};

					const fetchContent = cachedWithKey(
						/**
						 * @param {string} url URL
						 * @param {function(Error | null, { validUntil: number, etag?: string, entry: LockfileEntry, content: Buffer, fresh: boolean } | { validUntil: number, etag?: string, location: string, fresh: boolean }=): void} callback callback
						 * @returns {void}
						 */
						(url, callback) => {
							cache.get(url, null, (err, cachedResult) => {
								if (err) return callback(err);
								if (cachedResult) {
									const isValid = cachedResult.validUntil >= Date.now();
									if (isValid) return callback(null, cachedResult);
								}
								fetchContentRaw(url, cachedResult, callback);
							});
						},
						(url, callback) => fetchContentRaw(url, undefined, callback)
					);

					/**
					 * @param {string} uri uri
					 * @returns {boolean} true when allowed, otherwise false
					 */
					const isAllowed = uri => {
						for (const allowed of allowedUris) {
							if (typeof allowed === "string") {
								if (uri.startsWith(allowed)) return true;
							} else if (typeof allowed === "function") {
								if (allowed(uri)) return true;
							} else if (allowed.test(uri)) {
								return true;
							}
						}
						return false;
					};

					/** @typedef {{ entry: LockfileEntry, content: Buffer }} Info */

					const getInfo = cachedWithKey(
						/**
						 * @param {string} url the url
						 * @param {function(Error | null, Info=): void} callback callback
						 * @returns {void}
						 */
						// eslint-disable-next-line no-loop-func
						(url, callback) => {
							if (!isAllowed(url)) {
								return callback(
									new Error(
										`${url} doesn't match the allowedUris policy. These URIs are allowed:\n${allowedUris
											.map(uri => ` - ${uri}`)
											.join("\n")}`
									)
								);
							}
							getLockfile((err, _lockfile) => {
								if (err) return callback(err);
								const lockfile = /** @type {Lockfile} */ (_lockfile);
								const entryOrString = lockfile.entries.get(url);
								if (!entryOrString) {
									if (frozen) {
										return callback(
											new Error(
												`${url} has no lockfile entry and lockfile is frozen`
											)
										);
									}
									resolveContent(url, null, (err, result) => {
										if (err) return callback(err);
										storeResult(
											/** @type {Lockfile} */
											(lockfile),
											url,
											/** @type {ResolveContentResult} */
											(result),
											callback
										);
									});
									return;
								}
								if (typeof entryOrString === "string") {
									const entryTag = entryOrString;
									resolveContent(url, null, (err, _result) => {
										if (err) return callback(err);
										const result =
											/** @type {ResolveContentResult} */
											(_result);
										if (!result.storeLock || entryTag === "ignore")
											return callback(null, result);
										if (frozen) {
											return callback(
												new Error(
													`${url} used to have ${entryTag} lockfile entry and has content now, but lockfile is frozen`
												)
											);
										}
										if (!upgrade) {
											return callback(
												new Error(
													`${url} used to have ${entryTag} lockfile entry and has content now.
This should be reflected in the lockfile, so this lockfile entry must be upgraded, but upgrading is not enabled.
Remove this line from the lockfile to force upgrading.`
												)
											);
										}
										storeResult(lockfile, url, result, callback);
									});
									return;
								}
								let entry = entryOrString;
								/**
								 * @param {Buffer=} lockedContent locked content
								 */
								const doFetch = lockedContent => {
									resolveContent(url, entry.integrity, (err, _result) => {
										if (err) {
											if (lockedContent) {
												logger.warn(
													`Upgrade request to ${url} failed: ${err.message}`
												);
												logger.debug(err.stack);
												return callback(null, {
													entry,
													content: lockedContent
												});
											}
											return callback(err);
										}
										const result =
											/** @type {ResolveContentResult} */
											(_result);
										if (!result.storeLock) {
											// When the lockfile entry should be no-cache
											// we need to update the lockfile
											if (frozen) {
												return callback(
													new Error(
														`${url} has a lockfile entry and is no-cache now, but lockfile is frozen\nLockfile: ${entryToString(
															entry
														)}`
													)
												);
											}
											storeResult(lockfile, url, result, callback);
											return;
										}
										if (!areLockfileEntriesEqual(result.entry, entry)) {
											// When the lockfile entry is outdated
											// we need to update the lockfile
											if (frozen) {
												return callback(
													new Error(
														`${url} has an outdated lockfile entry, but lockfile is frozen\nLockfile: ${entryToString(
															entry
														)}\nExpected: ${entryToString(result.entry)}`
													)
												);
											}
											storeResult(lockfile, url, result, callback);
											return;
										}
										if (!lockedContent && cacheLocation) {
											// When the lockfile cache content is missing
											// we need to update the lockfile
											if (frozen) {
												return callback(
													new Error(
														`${url} is missing content in the lockfile cache, but lockfile is frozen\nLockfile: ${entryToString(
															entry
														)}`
													)
												);
											}
											storeResult(lockfile, url, result, callback);
											return;
										}
										return callback(null, result);
									});
								};
								if (cacheLocation) {
									// When there is a lockfile cache
									// we read the content from there
									const key = getCacheKey(entry.resolved);
									const filePath = join(intermediateFs, cacheLocation, key);
									fs.readFile(filePath, (err, result) => {
										if (err) {
											if (err.code === "ENOENT") return doFetch();
											return callback(err);
										}
										const content = /** @type {Buffer} */ (result);
										/**
										 * @param {Buffer | undefined} _result result
										 * @returns {void}
										 */
										const continueWithCachedContent = _result => {
											if (!upgrade) {
												// When not in upgrade mode, we accept the result from the lockfile cache
												return callback(null, { entry, content });
											}
											return doFetch(content);
										};
										if (!verifyIntegrity(content, entry.integrity)) {
											/** @type {Buffer | undefined} */
											let contentWithChangedEol;
											let isEolChanged = false;
											try {
												contentWithChangedEol = Buffer.from(
													content.toString("utf-8").replace(/\r\n/g, "\n")
												);
												isEolChanged = verifyIntegrity(
													contentWithChangedEol,
													entry.integrity
												);
											} catch (_err) {
												// ignore
											}
											if (isEolChanged) {
												if (!warnedAboutEol) {
													const explainer = `Incorrect end of line sequence was detected in the lockfile cache.
The lockfile cache is protected by integrity checks, so any external modification will lead to a corrupted lockfile cache.
When using git make sure to configure .gitattributes correctly for the lockfile cache:
  **/*webpack.lock.data/** -text
This will avoid that the end of line sequence is changed by git on Windows.`;
													if (frozen) {
														logger.error(explainer);
													} else {
														logger.warn(explainer);
														logger.info(
															"Lockfile cache will be automatically fixed now, but when lockfile is frozen this would result in an error."
														);
													}
													warnedAboutEol = true;
												}
												if (!frozen) {
													// "fix" the end of line sequence of the lockfile content
													logger.log(
														`${filePath} fixed end of line sequence (\\r\\n instead of \\n).`
													);
													intermediateFs.writeFile(
														filePath,
														/** @type {Buffer} */
														(contentWithChangedEol),
														err => {
															if (err) return callback(err);
															continueWithCachedContent(
																/** @type {Buffer} */
																(contentWithChangedEol)
															);
														}
													);
													return;
												}
											}
											if (frozen) {
												return callback(
													new Error(
														`${
															entry.resolved
														} integrity mismatch, expected content with integrity ${
															entry.integrity
														} but got ${computeIntegrity(content)}.
Lockfile corrupted (${
															isEolChanged
																? "end of line sequence was unexpectedly changed"
																: "incorrectly merged? changed by other tools?"
														}).
Run build with un-frozen lockfile to automatically fix lockfile.`
													)
												);
											}
											// "fix" the lockfile entry to the correct integrity
											// the content has priority over the integrity value
											entry = {
												...entry,
												integrity: computeIntegrity(content)
											};
											storeLockEntry(lockfile, url, entry);
										}
										continueWithCachedContent(result);
									});
								} else {
									doFetch();
								}
							});
						}
					);

					/**
					 * @param {URL} url url
					 * @param {ResourceDataWithData} resourceData resource data
					 * @param {function(Error | null, true | void): void} callback callback
					 */
					const respondWithUrlModule = (url, resourceData, callback) => {
						getInfo(url.href, (err, _result) => {
							if (err) return callback(err);
							const result = /** @type {Info} */ (_result);
							resourceData.resource = url.href;
							resourceData.path = url.origin + url.pathname;
							resourceData.query = url.search;
							resourceData.fragment = url.hash;
							resourceData.context = new URL(
								".",
								result.entry.resolved
							).href.slice(0, -1);
							resourceData.data.mimetype = result.entry.contentType;
							callback(null, true);
						});
					};
					normalModuleFactory.hooks.resolveForScheme
						.for(scheme)
						.tapAsync(
							"HttpUriPlugin",
							(resourceData, resolveData, callback) => {
								respondWithUrlModule(
									new URL(resourceData.resource),
									resourceData,
									callback
								);
							}
						);
					normalModuleFactory.hooks.resolveInScheme
						.for(scheme)
						.tapAsync("HttpUriPlugin", (resourceData, data, callback) => {
							// Only handle relative urls (./xxx, ../xxx, /xxx, //xxx)
							if (
								data.dependencyType !== "url" &&
								!/^\.{0,2}\//.test(resourceData.resource)
							) {
								return callback();
							}
							respondWithUrlModule(
								new URL(resourceData.resource, `${data.context}/`),
								resourceData,
								callback
							);
						});
					const hooks = NormalModule.getCompilationHooks(compilation);
					hooks.readResourceForScheme
						.for(scheme)
						.tapAsync("HttpUriPlugin", (resource, module, callback) =>
							getInfo(resource, (err, _result) => {
								if (err) return callback(err);
								const result = /** @type {Info} */ (_result);
								/** @type {BuildInfo} */
								(module.buildInfo).resourceIntegrity = result.entry.integrity;
								callback(null, result.content);
							})
						);
					hooks.needBuild.tapAsync(
						"HttpUriPlugin",
						(module, context, callback) => {
							if (
								module.resource &&
								module.resource.startsWith(`${scheme}://`)
							) {
								getInfo(module.resource, (err, _result) => {
									if (err) return callback(err);
									const result = /** @type {Info} */ (_result);
									if (
										result.entry.integrity !==
										/** @type {BuildInfo} */
										(module.buildInfo).resourceIntegrity
									) {
										return callback(null, true);
									}
									callback();
								});
							} else {
								return callback();
							}
						}
					);
				}
				compilation.hooks.finishModules.tapAsync(
					"HttpUriPlugin",
					(modules, callback) => {
						if (!lockfileUpdates) return callback();
						const ext = extname(lockfileLocation);
						const tempFile = join(
							intermediateFs,
							dirname(intermediateFs, lockfileLocation),
							`.${basename(lockfileLocation, ext)}.${
								(Math.random() * 10000) | 0
							}${ext}`
						);

						const writeDone = () => {
							const nextOperation =
								/** @type {InProgressWriteItem[]} */
								(inProgressWrite).shift();
							if (nextOperation) {
								nextOperation();
							} else {
								inProgressWrite = undefined;
							}
						};
						const runWrite = () => {
							intermediateFs.readFile(lockfileLocation, (err, buffer) => {
								if (err && err.code !== "ENOENT") {
									writeDone();
									return callback(err);
								}
								const lockfile = buffer
									? Lockfile.parse(buffer.toString("utf-8"))
									: new Lockfile();
								for (const [key, value] of /** @type {LockfileUpdates} */ (
									lockfileUpdates
								)) {
									lockfile.entries.set(key, value);
								}
								intermediateFs.writeFile(tempFile, lockfile.toString(), err => {
									if (err) {
										writeDone();
										return (
											/** @type {NonNullable<IntermediateFileSystem["unlink"]>} */
											(intermediateFs.unlink)(tempFile, () => callback(err))
										);
									}
									intermediateFs.rename(tempFile, lockfileLocation, err => {
										if (err) {
											writeDone();
											return (
												/** @type {NonNullable<IntermediateFileSystem["unlink"]>} */
												(intermediateFs.unlink)(tempFile, () => callback(err))
											);
										}
										writeDone();
										callback();
									});
								});
							});
						};
						if (inProgressWrite) {
							inProgressWrite.push(runWrite);
						} else {
							inProgressWrite = [];
							runWrite();
						}
					}
				);
			}
		);
	}
}

module.exports = HttpUriPlugin;
