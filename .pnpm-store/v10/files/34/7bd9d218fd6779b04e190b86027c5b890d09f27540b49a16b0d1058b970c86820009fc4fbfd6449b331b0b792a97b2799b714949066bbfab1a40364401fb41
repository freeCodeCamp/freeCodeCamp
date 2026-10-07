/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const EventEmitter = require("events");
const { basename, extname } = require("path");
const {
	// eslint-disable-next-line n/no-unsupported-features/node-builtins
	createBrotliDecompress,
	createGunzip,
	createInflate
} = require("zlib");
const NormalModule = require("../NormalModule");
const createHash = require("../util/createHash");
const { dirname, join, mkdirp } = require("../util/fs");
const memoize = require("../util/memoize");

/** @typedef {import("http").IncomingMessage} IncomingMessage */
/** @typedef {import("http").OutgoingHttpHeaders} OutgoingHttpHeaders */
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

const MAX_REDIRECTS = 5;

/** @typedef {(url: URL, requestOptions: RequestOptions, callback: (incomingMessage: IncomingMessage) => void) => EventEmitter} Fetch */

/**
 * Defines the events map type used by this module.
 * @typedef {object} EventsMap
 * @property {[Error]} error
 */

/**
 * Returns fn.
 * @param {typeof import("http") | typeof import("https")} request request
 * @param {string | URL | undefined} proxy proxy
 * @returns {Fetch} fn
 */
const proxyFetch = (request, proxy) => (url, options, callback) => {
	/** @type {EventEmitter<EventsMap>} */
	const eventEmitter = new EventEmitter();

	/**
	 * Processes the provided socket.
	 * @param {Socket=} socket socket
	 * @returns {void}
	 */
	const doRequest = (socket) => {
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
				} else {
					eventEmitter.emit(
						"error",
						new Error(
							`Failed to connect to proxy server "${proxy}": ${res.statusCode} ${res.statusMessage}`
						)
					);
				}
			})
			.on("error", (err) => {
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

/**
 * Returns safe path.
 * @param {string} str path
 * @returns {string} safe path
 */
const toSafePath = (str) =>
	str.replace(/^[^a-z0-9]+|[^a-z0-9]+$/gi, "").replace(/[^a-z0-9._-]+/gi, "_");

/**
 * Returns integrity.
 * @param {Buffer} content content
 * @returns {string} integrity
 */
const computeIntegrity = (content) => {
	const hash = createHash("sha512");
	hash.update(content);
	const integrity = `sha512-${hash.digest("base64")}`;
	return integrity;
};

/**
 * Returns true, if integrity matches.
 * @param {Buffer} content content
 * @param {string} integrity integrity
 * @returns {boolean} true, if integrity matches
 */
const verifyIntegrity = (content, integrity) => {
	if (integrity === "ignore") return true;
	return computeIntegrity(content) === integrity;
};

/**
 * Parses key value pairs.
 * @param {string} str input
 * @returns {Record<string, string>} parsed
 */
const parseKeyValuePairs = (str) => {
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
 * Parses cache control.
 * @param {string | undefined} cacheControl Cache-Control header
 * @param {number} requestTime timestamp of request
 * @returns {{ storeCache: boolean, storeLock: boolean, validUntil: number }} Logic for storing in cache and lockfile cache
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
 * Defines the lockfile entry type used by this module.
 * @typedef {object} LockfileEntry
 * @property {string} resolved
 * @property {string} integrity
 * @property {string} contentType
 */

/**
 * Are lockfile entries equal.
 * @param {LockfileEntry} a first lockfile entry
 * @param {LockfileEntry} b second lockfile entry
 * @returns {boolean} true when equal, otherwise false
 */
const areLockfileEntriesEqual = (a, b) =>
	a.resolved === b.resolved &&
	a.integrity === b.integrity &&
	a.contentType === b.contentType;

/**
 * Returns , integrity: ${string}, contentType: ${string}`} stringified entry.
 * @param {LockfileEntry} entry lockfile entry
 * @returns {`resolved: ${string}, integrity: ${string}, contentType: ${string}`} stringified entry
 */
const entryToString = (entry) =>
	`resolved: ${entry.resolved}, integrity: ${entry.integrity}, contentType: ${entry.contentType}`;

/**
 * Sanitize URL for inclusion in error messages
 * @param {string} href URL string to sanitize
 * @returns {string} sanitized URL text for logs/errors
 */
const sanitizeUrlForError = (href) => {
	try {
		const u = new URL(href);
		return `${u.protocol}//${u.host}`;
	} catch (_err) {
		return String(href)
			.slice(0, 200)
			.replace(/[\r\n]/g, "");
	}
};

class Lockfile {
	constructor() {
		/** @type {number} */
		this.version = 1;
		/** @type {Map<string, LockfileEntry | "ignore" | "no-cache">} */
		this.entries = new Map();
	}

	/**
	 * Parses the provided source and updates the parser state.
	 * @param {string} content content of the lockfile
	 * @returns {Lockfile} lockfile
	 */
	static parse(content) {
		// TODO handle merge conflicts
		const data = JSON.parse(content);
		if (data.version !== 1) {
			throw new Error(`Unsupported lockfile version ${data.version}`);
		}
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
	 * Returns a string representation.
	 * @returns {string} stringified lockfile
	 */
	toString() {
		let str = "{\n";
		const entries = [...this.entries].sort(([a], [b]) => (a < b ? -1 : 1));
		for (const [key, entry] of entries) {
			if (typeof entry === "string") {
				str += `  ${JSON.stringify(key)}: ${JSON.stringify(entry)},\n`;
			} else {
				str += `  ${JSON.stringify(key)}: { `;
				if (entry.resolved !== key) {
					str += `"resolved": ${JSON.stringify(entry.resolved)}, `;
				}
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
 * Defines the fn without key callback type used by this module.
 * @template R
 * @typedef {(err: Error | null, result?: R) => void}  FnWithoutKeyCallback
 */

/**
 * Defines the fn without key type used by this module.
 * @template R
 * @typedef {(callback: FnWithoutKeyCallback<R>) => void} FnWithoutKey
 */

/**
 * Caches d without key.
 * @template R
 * @param {FnWithoutKey<R>} fn function
 * @returns {FnWithoutKey<R>} cached function
 */
const cachedWithoutKey = (fn) => {
	let inFlight = false;
	/** @type {Error | undefined} */
	let cachedError;
	/** @type {R | undefined} */
	let cachedResult;
	/** @type {FnWithoutKeyCallback<R>[] | undefined} */
	let cachedCallbacks;
	return (callback) => {
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
 * Defines the fn with key callback type used by this module.
 * @template R
 * @typedef {(err: Error | null, result?: R) => void} FnWithKeyCallback
 */

/**
 * Defines the fn with key type used by this module.
 * @template T
 * @template R
 * @typedef {(item: T, callback: FnWithKeyCallback<R>) => void} FnWithKey
 */

/**
 * Returns } cached function.
 * @template T
 * @template R
 * @param {FnWithKey<T, R>} fn function
 * @param {FnWithKey<T, R>=} forceFn function for the second try
 * @returns {FnWithKey<T, R> & { force: FnWithKey<T, R> }} cached function
 */
const cachedWithKey = (fn, forceFn = fn) => {
	/**
	 * Defines the cache entry type used by this module.
	 * @template R
	 * @typedef {{ result?: R, error?: Error, callbacks?: FnWithKeyCallback<R>[], force?: true }} CacheEntry
	 */
	/** @type {Map<T, CacheEntry<R>>} */
	const cache = new Map();
	/**
	 * Processes the provided arg.
	 * @param {T} arg arg
	 * @param {FnWithKeyCallback<R>} callback callback
	 * @returns {void}
	 */
	const resultFn = (arg, callback) => {
		const cacheEntry = cache.get(arg);
		if (cacheEntry !== undefined) {
			if (cacheEntry.result !== undefined) {
				return callback(null, cacheEntry.result);
			}
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
	 * Processes the provided arg.
	 * @param {T} arg arg
	 * @param {FnWithKeyCallback<R>} callback callback
	 * @returns {void}
	 */
	resultFn.force = (arg, callback) => {
		const cacheEntry = cache.get(arg);
		if (cacheEntry !== undefined && cacheEntry.force) {
			if (cacheEntry.result !== undefined) {
				return callback(null, cacheEntry.result);
			}
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
 * Defines the lockfile cache type used by this module.
 * @typedef {object} LockfileCache
 * @property {Lockfile} lockfile lockfile
 * @property {Snapshot} snapshot snapshot
 */

/**
 * Defines the resolve content result type used by this module.
 * @typedef {object} ResolveContentResult
 * @property {LockfileEntry} entry lockfile entry
 * @property {Buffer} content content
 * @property {boolean} storeLock need store lockfile
 */

/** @typedef {{ storeCache: boolean, storeLock: boolean, validUntil: number, etag: string | undefined, fresh: boolean }} FetchResultMeta */
/** @typedef {FetchResultMeta & { location: string }} RedirectFetchResult */
/** @typedef {FetchResultMeta & { entry: LockfileEntry, content: Buffer }} ContentFetchResult */
/** @typedef {RedirectFetchResult | ContentFetchResult} FetchResult */

/** @typedef {(uri: string) => boolean} AllowedUriFn */

const PLUGIN_NAME = "HttpUriPlugin";

class HttpUriPlugin {
	/**
	 * Creates an instance of HttpUriPlugin.
	 * @param {HttpUriPluginOptions} options options
	 */
	constructor(options) {
		/** @type {HttpUriPluginOptions} */
		this.options = options;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.validate.tap(PLUGIN_NAME, () => {
			compiler.validate(
				() => require("../../schemas/plugins/schemes/HttpUriPlugin.json"),
				this.options,
				{
					name: "Http Uri Plugin",
					baseDataPath: "options"
				},
				(options) =>
					require("../../schemas/plugins/schemes/HttpUriPlugin.check")(options)
			);
		});

		const proxy =
			this.options.proxy || process.env.http_proxy || process.env.HTTP_PROXY;
		/**
		 * @type {{ scheme: "http" | "https", fetch: Fetch }[]}
		 */
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
			PLUGIN_NAME,
			(compilation, { normalModuleFactory }) => {
				const intermediateFs =
					/** @type {IntermediateFileSystem} */
					(compiler.intermediateFileSystem);
				const fs = compilation.inputFileSystem;
				const cache = compilation.getCache(`webpack.${PLUGIN_NAME}`);
				const logger = compilation.getLogger(`webpack.${PLUGIN_NAME}`);
				/** @type {string} */
				const lockfileLocation =
					this.options.lockfileLocation ||
					join(
						intermediateFs,
						compiler.context,
						compiler.name
							? `${toSafePath(compiler.name)}.webpack.lock`
							: "webpack.lock"
					);
				/** @type {string | false} */
				const cacheLocation =
					this.options.cacheLocation !== undefined
						? this.options.cacheLocation
						: `${lockfileLocation}.data`;
				const upgrade = this.options.upgrade || false;
				const frozen = this.options.frozen || false;
				const hashFunction = "sha512";
				const hashDigest = "hex";
				const hashDigestLength = 20;
				const allowedUris = this.options.allowedUris;

				let warnedAboutEol = false;

				/** @type {Map<string, string>} */
				const cacheKeyCache = new Map();
				/**
				 * Returns the key.
				 * @param {string} url the url
				 * @returns {string} the key
				 */
				const getCacheKey = (url) => {
					const cachedResult = cacheKeyCache.get(url);
					if (cachedResult !== undefined) return cachedResult;
					const result = _getCacheKey(url);
					cacheKeyCache.set(url, result);
					return result;
				};

				/**
				 * Returns the key.
				 * @param {string} url the url
				 * @returns {string} the key
				 */
				const _getCacheKey = (url) => {
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
					 * Handles the callback logic for this hook.
					 * @param {(err: Error | null, lockfile?: Lockfile) => void} callback callback
					 * @returns {void}
					 */
					(callback) => {
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
											? Lockfile.parse(buffer.toString("utf8"))
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
				 * Stores the provided lockfile.
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
				 * Stores the provided lockfile.
				 * @param {Lockfile} lockfile lockfile
				 * @param {string} url url
				 * @param {ResolveContentResult} result result
				 * @param {(err: Error | null, result?: ResolveContentResult) => void} callback callback
				 * @returns {void}
				 */
				const storeResult = (lockfile, url, result, callback) => {
					if (result.storeLock) {
						storeLockEntry(lockfile, url, result.entry);
						if (!cacheLocation || !result.content) {
							return callback(null, result);
						}
						const key = getCacheKey(result.entry.resolved);
						const filePath = join(intermediateFs, cacheLocation, key);
						mkdirp(intermediateFs, dirname(intermediateFs, filePath), (err) => {
							if (err) return callback(err);
							intermediateFs.writeFile(filePath, result.content, (err) => {
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
					 * Validate redirect location.
					 * @param {string} location Location header value (relative or absolute)
					 * @param {string} base current absolute URL
					 * @returns {string} absolute, validated redirect target
					 */
					const validateRedirectLocation = (location, base) => {
						/** @type {URL} */
						let nextUrl;
						try {
							nextUrl = new URL(location, base);
						} catch (err) {
							throw new Error(
								`Invalid redirect URL: ${sanitizeUrlForError(location)}`,
								{ cause: err }
							);
						}
						if (nextUrl.protocol !== "http:" && nextUrl.protocol !== "https:") {
							throw new Error(
								`Redirected URL uses disallowed protocol: ${sanitizeUrlForError(nextUrl.href)}`
							);
						}
						if (!isAllowed(nextUrl.href)) {
							throw new Error(
								`${nextUrl.href} doesn't match the allowedUris policy after redirect. These URIs are allowed:\n${allowedUris
									.map((uri) => ` - ${uri}`)
									.join("\n")}`
							);
						}
						return nextUrl.href;
					};
					/**
					 * Processes the provided url.
					 * @param {string} url URL
					 * @param {string | null} integrity integrity
					 * @param {(err: Error | null, resolveContentResult?: ResolveContentResult) => void} callback callback
					 * @param {number=} redirectCount number of followed redirects
					 */
					const resolveContent = (
						url,
						integrity,
						callback,
						redirectCount = 0
					) => {
						/**
						 * Processes the provided err.
						 * @param {Error | null} err error
						 * @param {FetchResult=} _result fetch result
						 * @returns {void}
						 */
						const handleResult = (err, _result) => {
							if (err) return callback(err);

							const result = /** @type {FetchResult} */ (_result);

							if ("location" in result) {
								// Validate redirect target before following
								/** @type {string} */
								let absolute;
								try {
									absolute = validateRedirectLocation(result.location, url);
								} catch (err_) {
									return callback(/** @type {Error} */ (err_));
								}
								if (redirectCount >= MAX_REDIRECTS) {
									return callback(new Error("Too many redirects"));
								}
								return resolveContent(
									absolute,
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
									},
									redirectCount + 1
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
					 * Processes the provided url.
					 * @param {string} url URL
					 * @param {FetchResult | RedirectFetchResult | undefined} cachedResult result from cache
					 * @param {(err: Error | null, fetchResult?: FetchResult) => void} callback callback
					 * @returns {void}
					 */
					const fetchContentRaw = (url, cachedResult, callback) => {
						const requestTime = Date.now();
						/** @type {OutgoingHttpHeaders} */
						const headers = {
							"accept-encoding": "gzip, deflate, br",
							"user-agent": "webpack"
						};

						if (cachedResult && cachedResult.etag) {
							headers["if-none-match"] = cachedResult.etag;
						}

						fetch(new URL(url), { headers }, (res) => {
							const etag = res.headers.etag;
							const location = res.headers.location;
							const cacheControl = res.headers["cache-control"];
							const { storeLock, storeCache, validUntil } = parseCacheControl(
								cacheControl,
								requestTime
							);
							/**
							 * Processes the provided partial result.
							 * @param {Partial<Pick<FetchResultMeta, "fresh">> & (Pick<RedirectFetchResult, "location"> | Pick<ContentFetchResult, "content" | "entry">)} partialResult result
							 * @returns {void}
							 */
							const finishWith = (partialResult) => {
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
									(err) => {
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
								/** @type {string} */
								let absolute;
								try {
									absolute = validateRedirectLocation(location, url);
								} catch (err) {
									logger.log(
										`GET ${url} [${res.statusCode}] -> ${String(location)} (rejected: ${/** @type {Error} */ (err).message})`
									);
									return callback(/** @type {Error} */ (err));
								}
								const result = { location: absolute };
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

							stream.on(
								"data",
								/**
								 * Handles the callback logic for this hook.
								 * @param {Buffer} chunk chunk
								 */
								(chunk) => {
									bufferArr.push(chunk);
								}
							);

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
											}\n${content.toString("utf8")}`
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
						}).on("error", (err) => {
							logger.log(`GET ${url} (error)`);
							err.message += `\nwhile fetching ${url}`;
							callback(err);
						});
					};

					const fetchContent = cachedWithKey(
						/**
						 * Handles the callback logic for this hook.
						 * @param {string} url URL
						 * @param {(err: Error | null, result?: FetchResult) => void} callback callback
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
					 * Checks whether this http uri plugin is allowed.
					 * @param {string} uri uri
					 * @returns {boolean} true when allowed, otherwise false
					 */
					const isAllowed = (uri) => {
						/** @type {URL} */
						let parsedUri;
						try {
							// Parse the URI to prevent userinfo bypass attacks
							// (e.g., http://allowed@malicious/path where @malicious is the actual host)
							parsedUri = new URL(uri);
						} catch (_err) {
							return false;
						}
						for (const allowed of allowedUris) {
							if (typeof allowed === "string") {
								/** @type {URL} */
								let parsedAllowed;
								try {
									parsedAllowed = new URL(allowed);
								} catch (_err) {
									continue;
								}
								if (parsedUri.href.startsWith(parsedAllowed.href)) {
									return true;
								}
							} else if (typeof allowed === "function") {
								if (allowed(parsedUri.href)) return true;
							} else if (allowed.test(parsedUri.href)) {
								return true;
							}
						}
						return false;
					};

					/** @typedef {{ entry: LockfileEntry, content: Buffer }} Info */

					const getInfo = cachedWithKey(
						/**
						 * Processes the provided url.
						 * @param {string} url the url
						 * @param {(err: Error | null, info?: Info) => void} callback callback
						 * @returns {void}
						 */
						// eslint-disable-next-line no-loop-func
						(url, callback) => {
							if (!isAllowed(url)) {
								return callback(
									new Error(
										`${url} doesn't match the allowedUris policy. These URIs are allowed:\n${allowedUris
											.map((uri) => ` - ${uri}`)
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
										if (!result.storeLock || entryTag === "ignore") {
											return callback(null, result);
										}
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
								 * Processes the provided locked content.
								 * @param {Buffer=} lockedContent locked content
								 */
								const doFetch = (lockedContent) => {
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
										 * Continue with cached content.
										 * @param {Buffer | undefined} _result result
										 * @returns {void}
										 */
										const continueWithCachedContent = (_result) => {
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
													content.toString("utf8").replace(/\r\n/g, "\n")
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
														(err) => {
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
					 * Respond with url module.
					 * @param {URL} url url
					 * @param {ResourceDataWithData} resourceData resource data
					 * @param {(err: Error | null, result: true | void) => void} callback callback
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
						.tapAsync(PLUGIN_NAME, (resourceData, resolveData, callback) => {
							respondWithUrlModule(
								new URL(resourceData.resource),
								resourceData,
								callback
							);
						});
					normalModuleFactory.hooks.resolveInScheme
						.for(scheme)
						.tapAsync(PLUGIN_NAME, (resourceData, data, callback) => {
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
						.tapAsync(PLUGIN_NAME, (resource, module, callback) =>
							getInfo(resource, (err, _result) => {
								if (err) return callback(err);
								const result = /** @type {Info} */ (_result);
								if (module) {
									/** @type {BuildInfo} */
									(module.buildInfo).resourceIntegrity = result.entry.integrity;
								}
								callback(null, result.content);
							})
						);
					hooks.needBuild.tapAsync(PLUGIN_NAME, (module, context, callback) => {
						if (module.resource && module.resource.startsWith(`${scheme}://`)) {
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
					});
				}
				compilation.hooks.finishModules.tapAsync(
					PLUGIN_NAME,
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
									? Lockfile.parse(buffer.toString("utf8"))
									: new Lockfile();
								for (const [key, value] of /** @type {LockfileUpdates} */ (
									lockfileUpdates
								)) {
									lockfile.entries.set(key, value);
								}
								intermediateFs.writeFile(
									tempFile,
									lockfile.toString(),
									(err) => {
										if (err) {
											writeDone();
											return (
												/** @type {NonNullable<IntermediateFileSystem["unlink"]>} */
												(intermediateFs.unlink)(tempFile, () => callback(err))
											);
										}
										intermediateFs.rename(tempFile, lockfileLocation, (err) => {
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
									}
								);
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
