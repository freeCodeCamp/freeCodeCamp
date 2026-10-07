/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const { AsyncSeriesBailHook, AsyncSeriesHook, SyncHook } = require("tapable");
const createInnerContext = require("./createInnerContext");
const { parseIdentifier } = require("./util/identifier");
const {
	PathType,
	cachedJoin: join,
	getType,
	normalize,
} = require("./util/path");

/** @typedef {import("./ResolverFactory").ResolveOptions} ResolveOptions */

/**
 * @typedef {object} KnownContext
 * @property {string[]=} environments environments
 */

// eslint-disable-next-line jsdoc/reject-any-type
/** @typedef {KnownContext & Record<any, any>} Context */

/** @typedef {import("./AliasUtils").AliasOption} AliasOption */
/** @typedef {Error & { details?: string }} ErrorWithDetail */

/** @typedef {(err: ErrorWithDetail | null, res?: string | false, req?: ResolveRequest) => void} ResolveCallback */

/**
 * @typedef {object} PossibleFileSystemError
 * @property {string=} code code
 * @property {number=} errno number
 * @property {string=} path path
 * @property {string=} syscall syscall
 */

/**
 * @template T
 * @callback FileSystemCallback
 * @param {PossibleFileSystemError & Error | null} err
 * @param {T=} result
 */

/**
 * @typedef {string | Buffer | URL} PathLike
 */

/**
 * @typedef {PathLike | number} PathOrFileDescriptor
 */

/**
 * @typedef {object} ObjectEncodingOptions
 * @property {BufferEncoding | null | undefined=} encoding encoding
 */

/**
 * @typedef {ObjectEncodingOptions | BufferEncoding | undefined | null} EncodingOption
 */

/** @typedef {(err: NodeJS.ErrnoException | null, result?: string) => void} StringCallback */
/** @typedef {(err: NodeJS.ErrnoException | null, result?: Buffer) => void} BufferCallback */
/** @typedef {(err: NodeJS.ErrnoException | null, result?: (string | Buffer)) => void} StringOrBufferCallback */
/** @typedef {(err: NodeJS.ErrnoException | null, result?: IStats) => void} StatsCallback */
/** @typedef {(err: NodeJS.ErrnoException | null, result?: IBigIntStats) => void} BigIntStatsCallback */
/** @typedef {(err: NodeJS.ErrnoException | null, result?: (IStats | IBigIntStats)) => void} StatsOrBigIntStatsCallback */
/** @typedef {(err: NodeJS.ErrnoException | Error | null, result?: JsonObject) => void} ReadJsonCallback */

/**
 * @template T
 * @typedef {object} IStatsBase
 * @property {() => boolean} isFile is file
 * @property {() => boolean} isDirectory is directory
 * @property {() => boolean} isBlockDevice is block device
 * @property {() => boolean} isCharacterDevice is character device
 * @property {() => boolean} isSymbolicLink is symbolic link
 * @property {() => boolean} isFIFO is FIFO
 * @property {() => boolean} isSocket is socket
 * @property {T} dev dev
 * @property {T} ino ino
 * @property {T} mode mode
 * @property {T} nlink nlink
 * @property {T} uid uid
 * @property {T} gid gid
 * @property {T} rdev rdev
 * @property {T} size size
 * @property {T} blksize blksize
 * @property {T} blocks blocks
 * @property {T} atimeMs atime ms
 * @property {T} mtimeMs mtime ms
 * @property {T} ctimeMs ctime ms
 * @property {T} birthtimeMs birthtime ms
 * @property {Date} atime atime
 * @property {Date} mtime mtime
 * @property {Date} ctime ctime
 * @property {Date} birthtime birthtime
 */

/**
 * @typedef {IStatsBase<number>} IStats
 */

/**
 * @typedef {IStatsBase<bigint> & { atimeNs: bigint, mtimeNs: bigint, ctimeNs: bigint, birthtimeNs: bigint }} IBigIntStats
 */

/**
 * @template {string | Buffer} [T=string]
 * @typedef {object} Dirent
 * @property {() => boolean} isFile true when is file, otherwise false
 * @property {() => boolean} isDirectory true when is directory, otherwise false
 * @property {() => boolean} isBlockDevice true when is block device, otherwise false
 * @property {() => boolean} isCharacterDevice true when is character device, otherwise false
 * @property {() => boolean} isSymbolicLink true when is symbolic link, otherwise false
 * @property {() => boolean} isFIFO true when is FIFO, otherwise false
 * @property {() => boolean} isSocket true when is socket, otherwise false
 * @property {T} name name
 * @property {string} parentPath path
 * @property {string=} path path
 */

/**
 * @typedef {object} StatOptions
 * @property {(boolean | undefined)=} bigint need bigint values
 */

/**
 * @typedef {object} StatSyncOptions
 * @property {(boolean | undefined)=} bigint need bigint values
 * @property {(boolean | undefined)=} throwIfNoEntry throw if no entry
 */

/**
 * @typedef {{
 * (path: PathOrFileDescriptor, options: ({ encoding?: null | undefined, flag?: string | undefined } & import("events").Abortable) | undefined | null, callback: BufferCallback): void,
 * (path: PathOrFileDescriptor, options: ({ encoding: BufferEncoding, flag?: string | undefined } & import("events").Abortable) | BufferEncoding, callback: StringCallback): void,
 * (path: PathOrFileDescriptor, options: (ObjectEncodingOptions & { flag?: string | undefined } & import("events").Abortable) | BufferEncoding | undefined | null, callback: StringOrBufferCallback): void,
 * (path: PathOrFileDescriptor, callback: BufferCallback): void,
 * }} ReadFile
 */

/**
 * @typedef {"buffer" | { encoding: "buffer" }} BufferEncodingOption
 */

/**
 * @typedef {{
 * (path: PathOrFileDescriptor, options?: { encoding?: null | undefined, flag?: string | undefined } | null): Buffer,
 * (path: PathOrFileDescriptor, options: { encoding: BufferEncoding, flag?: string | undefined } | BufferEncoding): string,
 * (path: PathOrFileDescriptor, options?: (ObjectEncodingOptions & { flag?: string | undefined }) | BufferEncoding | null): string | Buffer,
 * }} ReadFileSync
 */

/**
 * @typedef {{
 * (path: PathLike, options: { encoding: BufferEncoding | null, withFileTypes?: false | undefined, recursive?: boolean | undefined } | BufferEncoding | undefined | null, callback: (err: NodeJS.ErrnoException | null, files?: string[]) => void): void,
 * (path: PathLike, options: { encoding: "buffer", withFileTypes?: false | undefined, recursive?: boolean | undefined } | "buffer", callback: (err: NodeJS.ErrnoException | null, files?: Buffer[]) => void): void,
 * (path: PathLike, options: (ObjectEncodingOptions & { withFileTypes?: false | undefined, recursive?: boolean | undefined }) | BufferEncoding | undefined | null, callback: (err: NodeJS.ErrnoException | null, files?: string[] | Buffer[]) => void): void,
 * (path: PathLike, callback: (err: NodeJS.ErrnoException | null, files?: string[]) => void): void,
 * (path: PathLike, options: ObjectEncodingOptions & { withFileTypes: true, recursive?: boolean | undefined }, callback: (err: NodeJS.ErrnoException | null, files?: Dirent<string>[]) => void): void,
 * (path: PathLike, options: { encoding: "buffer", withFileTypes: true, recursive?: boolean | undefined }, callback: (err: NodeJS.ErrnoException | null, files: Dirent<Buffer>[]) => void): void,
 * }} Readdir
 */

/**
 * @typedef {{
 * (path: PathLike, options?: { encoding: BufferEncoding | null, withFileTypes?: false | undefined, recursive?: boolean | undefined } | BufferEncoding | null): string[],
 * (path: PathLike, options: { encoding: "buffer", withFileTypes?: false | undefined, recursive?: boolean | undefined } | "buffer"): Buffer[],
 * (path: PathLike, options?: (ObjectEncodingOptions & { withFileTypes?: false | undefined, recursive?: boolean | undefined }) | BufferEncoding | null): string[] | Buffer[],
 * (path: PathLike, options: ObjectEncodingOptions & { withFileTypes: true, recursive?: boolean | undefined }): Dirent[],
 * (path: PathLike, options: { encoding: "buffer", withFileTypes: true, recursive?: boolean | undefined }): Dirent<Buffer>[],
 * }} ReaddirSync
 */

/**
 * @typedef {(pathOrFileDescription: PathOrFileDescriptor, callback: ReadJsonCallback) => void} ReadJson
 */

/**
 * @typedef {(pathOrFileDescription: PathOrFileDescriptor) => JsonObject} ReadJsonSync
 */

/**
 * @typedef {{
 * (path: PathLike, options: EncodingOption, callback: StringCallback): void,
 * (path: PathLike, options: BufferEncodingOption, callback: BufferCallback): void,
 * (path: PathLike, options: EncodingOption, callback: StringOrBufferCallback): void,
 * (path: PathLike, callback: StringCallback): void,
 * }} Readlink
 */

/**
 * @typedef {{
 * (path: PathLike, options?: EncodingOption): string,
 * (path: PathLike, options: BufferEncodingOption): Buffer,
 * (path: PathLike, options?: EncodingOption): string | Buffer,
 * }} ReadlinkSync
 */

/**
 * @typedef {{
 * (path: PathLike, callback: StatsCallback): void,
 * (path: PathLike, options: (StatOptions & { bigint?: false | undefined }) | undefined, callback: StatsCallback): void,
 * (path: PathLike, options: StatOptions & { bigint: true }, callback: BigIntStatsCallback): void,
 * (path: PathLike, options: StatOptions | undefined, callback: StatsOrBigIntStatsCallback): void,
 * }} LStat
 */

/**
 * @typedef {{
 * (path: PathLike, options?: undefined): IStats,
 * (path: PathLike, options?: StatSyncOptions & { bigint?: false | undefined, throwIfNoEntry: false }): IStats | undefined,
 * (path: PathLike, options: StatSyncOptions & { bigint: true, throwIfNoEntry: false }): IBigIntStats | undefined,
 * (path: PathLike, options?: StatSyncOptions & { bigint?: false | undefined }): IStats,
 * (path: PathLike, options: StatSyncOptions & { bigint: true }): IBigIntStats,
 * (path: PathLike, options: StatSyncOptions & { bigint: boolean, throwIfNoEntry?: false | undefined }): IStats | IBigIntStats,
 * (path: PathLike, options?: StatSyncOptions): IStats | IBigIntStats | undefined,
 * }} LStatSync
 */

/**
 * @typedef {{
 * (path: PathLike, callback: StatsCallback): void,
 * (path: PathLike, options: (StatOptions & { bigint?: false | undefined }) | undefined, callback: StatsCallback): void,
 * (path: PathLike, options: StatOptions & { bigint: true }, callback: BigIntStatsCallback): void,
 * (path: PathLike, options: StatOptions | undefined, callback: StatsOrBigIntStatsCallback): void,
 * }} Stat
 */

/**
 * @typedef {{
 * (path: PathLike, options?: undefined): IStats,
 * (path: PathLike, options?: StatSyncOptions & { bigint?: false | undefined, throwIfNoEntry: false }): IStats | undefined,
 * (path: PathLike, options: StatSyncOptions & { bigint: true, throwIfNoEntry: false }): IBigIntStats | undefined,
 * (path: PathLike, options?: StatSyncOptions & { bigint?: false | undefined }): IStats,
 * (path: PathLike, options: StatSyncOptions & { bigint: true }): IBigIntStats,
 * (path: PathLike, options: StatSyncOptions & { bigint: boolean, throwIfNoEntry?: false | undefined }): IStats | IBigIntStats,
 * (path: PathLike, options?: StatSyncOptions): IStats | IBigIntStats | undefined,
 * }} StatSync
 */

/**
 * @typedef {{
 * (path: PathLike, options: EncodingOption, callback: StringCallback): void,
 * (path: PathLike, options: BufferEncodingOption, callback: BufferCallback): void,
 * (path: PathLike, options: EncodingOption, callback: StringOrBufferCallback): void,
 * (path: PathLike, callback: StringCallback): void,
 * }} RealPath
 */

/**
 * @typedef {{
 * (path: PathLike, options?: EncodingOption): string,
 * (path: PathLike, options: BufferEncodingOption): Buffer,
 * (path: PathLike, options?: EncodingOption): string | Buffer,
 * }} RealPathSync
 */

/**
 * @typedef {object} FileSystem
 * @property {ReadFile} readFile read file method
 * @property {Readdir} readdir readdir method
 * @property {ReadJson=} readJson read json method
 * @property {Readlink} readlink read link method
 * @property {LStat=} lstat lstat method
 * @property {Stat} stat stat method
 * @property {RealPath=} realpath realpath method
 */

/**
 * @typedef {object} SyncFileSystem
 * @property {ReadFileSync} readFileSync read file sync method
 * @property {ReaddirSync} readdirSync read dir sync method
 * @property {ReadJsonSync=} readJsonSync read json sync method
 * @property {ReadlinkSync} readlinkSync read link sync method
 * @property {LStatSync=} lstatSync lstat sync method
 * @property {StatSync} statSync stat sync method
 * @property {RealPathSync=} realpathSync real path sync method
 */

/**
 * @typedef {object} ParsedIdentifier
 * @property {string} request request
 * @property {string} query query
 * @property {string} fragment fragment
 * @property {boolean} directory is directory
 * @property {boolean} module is module
 * @property {boolean} file is file
 * @property {boolean} internal is internal
 */

/** @typedef {string | number | boolean | null} JsonPrimitive */
/** @typedef {JsonValue[]} JsonArray */
/** @typedef {JsonPrimitive | JsonObject | JsonArray} JsonValue */
/** @typedef {{ [Key in string]?: JsonValue | undefined }} JsonObject */

/**
 * @typedef {object} TsconfigPathsMap
 * @property {TsconfigPathsData} main main tsconfig paths data
 * @property {string} mainContext main tsconfig base URL (absolute path)
 * @property {{ [baseUrl: string]: TsconfigPathsData }} refs referenced tsconfig paths data mapped by baseUrl
 * @property {{ [context: string]: TsconfigPathsData }} allContexts all contexts (main + refs) for quick lookup
 * @property {Set<string>} fileDependencies file dependencies
 */

/**
 * @typedef {object} TsconfigPathsData
 * @property {AliasOption[]} alias tsconfig file data
 * @property {string[]} modules tsconfig file data
 */

/**
 * @typedef {object} BaseResolveRequest
 * @property {string | false} path path
 * @property {Context=} context content
 * @property {string=} descriptionFilePath description file path
 * @property {string=} descriptionFileRoot description file root
 * @property {JsonObject=} descriptionFileData description file data
 * @property {TsconfigPathsMap | null | undefined=} tsconfigPathsMap tsconfig paths map
 * @property {string=} relativePath relative path
 * @property {boolean=} ignoreSymlinks true when need to ignore symlinks, otherwise false
 * @property {boolean=} fullySpecified true when full specified, otherwise false
 * @property {string=} __innerRequest inner request for internal usage
 * @property {string=} __innerRequest_request inner request for internal usage
 * @property {string=} __innerRequest_relativePath inner relative path for internal usage
 */

/** @typedef {BaseResolveRequest & Partial<ParsedIdentifier>} ResolveRequest */

/**
 * String with special formatting
 * @typedef {string} StackEntry
 */

/**
 * @template T
 * @typedef {{ add: (item: T) => void }} WriteOnlySet
 */

/** @typedef {(request: ResolveRequest) => void} ResolveContextYield */

/**
 * Resolve context
 * @typedef {object} ResolveContext
 * @property {WriteOnlySet<string>=} contextDependencies directories that was found on file system
 * @property {WriteOnlySet<string>=} fileDependencies files that was found on file system
 * @property {WriteOnlySet<string>=} missingDependencies dependencies that was not found on file system
 * @property {Set<StackEntry>=} stack set of hooks' calls. For instance, `resolve → parsedResolve → describedResolve`,
 * @property {((str: string) => void)=} log log function
 * @property {ResolveContextYield=} yield yield result, if provided plugins can return several results
 */

/** @typedef {AsyncSeriesBailHook<[ResolveRequest, ResolveContext], ResolveRequest | null>} ResolveStepHook */

/**
 * @typedef {object} KnownHooks
 * @property {SyncHook<[ResolveStepHook, ResolveRequest], void>} resolveStep resolve step hook
 * @property {SyncHook<[ResolveRequest, Error]>} noResolve no resolve hook
 * @property {ResolveStepHook} resolve resolve hook
 * @property {AsyncSeriesHook<[ResolveRequest, ResolveContext]>} result result hook
 */

/**
 * @typedef {{ [key: string]: ResolveStepHook }} EnsuredHooks
 */

/**
 * @param {string} str input string
 * @returns {string} in camel case
 */
function toCamelCase(str) {
	return str.replace(/-([a-z])/g, (str) => str.slice(1).toUpperCase());
}

class Resolver {
	/**
	 * @param {ResolveStepHook} hook hook
	 * @param {ResolveRequest} request request
	 * @returns {StackEntry} stack entry
	 */
	static createStackEntry(hook, request) {
		return `${hook.name}: (${request.path}) ${request.request || ""}${
			request.query || ""
		}${request.fragment || ""}${request.directory ? " directory" : ""}${
			request.module ? " module" : ""
		}`;
	}

	/**
	 * @param {FileSystem} fileSystem a filesystem
	 * @param {ResolveOptions} options options
	 */
	constructor(fileSystem, options) {
		this.fileSystem = fileSystem;
		this.options = options;
		/** @type {KnownHooks} */
		this.hooks = {
			resolveStep: new SyncHook(["hook", "request"], "resolveStep"),
			noResolve: new SyncHook(["request", "error"], "noResolve"),
			resolve: new AsyncSeriesBailHook(
				["request", "resolveContext"],
				"resolve",
			),
			result: new AsyncSeriesHook(["result", "resolveContext"], "result"),
		};
	}

	/**
	 * @param {string | ResolveStepHook} name hook name or hook itself
	 * @returns {ResolveStepHook} the hook
	 */
	ensureHook(name) {
		if (typeof name !== "string") {
			return name;
		}
		name = toCamelCase(name);
		if (name.startsWith("before")) {
			return /** @type {ResolveStepHook} */ (
				this.ensureHook(name[6].toLowerCase() + name.slice(7)).withOptions({
					stage: -10,
				})
			);
		}
		if (name.startsWith("after")) {
			return /** @type {ResolveStepHook} */ (
				this.ensureHook(name[5].toLowerCase() + name.slice(6)).withOptions({
					stage: 10,
				})
			);
		}
		/** @type {ResolveStepHook} */
		const hook = /** @type {KnownHooks & EnsuredHooks} */ (this.hooks)[name];
		if (!hook) {
			/** @type {KnownHooks & EnsuredHooks} */
			(this.hooks)[name] = new AsyncSeriesBailHook(
				["request", "resolveContext"],
				name,
			);

			return /** @type {KnownHooks & EnsuredHooks} */ (this.hooks)[name];
		}
		return hook;
	}

	/**
	 * @param {string | ResolveStepHook} name hook name or hook itself
	 * @returns {ResolveStepHook} the hook
	 */
	getHook(name) {
		if (typeof name !== "string") {
			return name;
		}
		name = toCamelCase(name);
		if (name.startsWith("before")) {
			return /** @type {ResolveStepHook} */ (
				this.getHook(name[6].toLowerCase() + name.slice(7)).withOptions({
					stage: -10,
				})
			);
		}
		if (name.startsWith("after")) {
			return /** @type {ResolveStepHook} */ (
				this.getHook(name[5].toLowerCase() + name.slice(6)).withOptions({
					stage: 10,
				})
			);
		}
		/** @type {ResolveStepHook} */
		const hook = /** @type {KnownHooks & EnsuredHooks} */ (this.hooks)[name];
		if (!hook) {
			throw new Error(`Hook ${name} doesn't exist`);
		}
		return hook;
	}

	/**
	 * @param {Context} context context information object
	 * @param {string} path context path
	 * @param {string} request request string
	 * @returns {string | false} result
	 */
	resolveSync(context, path, request) {
		/** @type {Error | null | undefined} */
		let err;
		/** @type {string | false | undefined} */
		let result;
		let sync = false;
		this.resolve(context, path, request, {}, (_err, r) => {
			err = _err;
			result = r;
			sync = true;
		});
		if (!sync) {
			throw new Error(
				"Cannot 'resolveSync' because the fileSystem is not sync. Use 'resolve'!",
			);
		}
		if (err) throw err;
		if (result === undefined) throw new Error("No result");
		return result;
	}

	/**
	 * @param {Context} context context information object
	 * @param {string} path context path
	 * @param {string} request request string
	 * @param {ResolveContext} resolveContext resolve context
	 * @param {ResolveCallback} callback callback function
	 * @returns {void}
	 */
	resolve(context, path, request, resolveContext, callback) {
		if (!context || typeof context !== "object") {
			return callback(new Error("context argument is not an object"));
		}
		if (typeof path !== "string") {
			return callback(new Error("path argument is not a string"));
		}
		if (typeof request !== "string") {
			return callback(new Error("request argument is not a string"));
		}
		if (!resolveContext) {
			return callback(new Error("resolveContext argument is not set"));
		}

		/** @type {ResolveRequest} */
		const obj = {
			context,
			path,
			request,
		};

		/** @type {ResolveContextYield | undefined} */
		let yield_;
		let yieldCalled = false;
		/** @type {ResolveContextYield | undefined} */
		let finishYield;
		if (typeof resolveContext.yield === "function") {
			const old = resolveContext.yield;
			/**
			 * @param {ResolveRequest} obj object
			 */
			yield_ = (obj) => {
				old(obj);
				yieldCalled = true;
			};
			/**
			 * @param {ResolveRequest} result result
			 * @returns {void}
			 */
			finishYield = (result) => {
				if (result) {
					/** @type {ResolveContextYield} */ (yield_)(result);
				}
				callback(null);
			};
		}

		const message = `resolve '${request}' in '${path}'`;

		/**
		 * @param {ResolveRequest} result result
		 * @returns {void}
		 */
		const finishResolved = (result) =>
			callback(
				null,
				result.path === false
					? false
					: `${result.path.replace(/#/g, "\0#")}${
							result.query ? result.query.replace(/#/g, "\0#") : ""
						}${result.fragment || ""}`,
				result,
			);

		/**
		 * @param {string[]} log logs
		 * @returns {void}
		 */
		const finishWithoutResolve = (log) => {
			/**
			 * @type {ErrorWithDetail}
			 */
			const error = new Error(`Can't ${message}`);
			error.details = log.join("\n");
			this.hooks.noResolve.call(obj, error);
			return callback(error);
		};

		if (resolveContext.log) {
			// We need log anyway to capture it in case of an error
			const parentLog = resolveContext.log;
			/** @type {string[]} */
			const log = [];
			return this.doResolve(
				this.hooks.resolve,
				obj,
				message,
				{
					log: (msg) => {
						parentLog(msg);
						log.push(msg);
					},
					yield: yield_,
					fileDependencies: resolveContext.fileDependencies,
					contextDependencies: resolveContext.contextDependencies,
					missingDependencies: resolveContext.missingDependencies,
					stack: resolveContext.stack,
				},
				(err, result) => {
					if (err) return callback(err);

					if (yieldCalled || (result && yield_)) {
						return /** @type {ResolveContextYield} */ (finishYield)(
							/** @type {ResolveRequest} */ (result),
						);
					}

					if (result) return finishResolved(result);

					return finishWithoutResolve(log);
				},
			);
		}
		// Try to resolve assuming there is no error
		// We don't log stuff in this case
		return this.doResolve(
			this.hooks.resolve,
			obj,
			message,
			{
				log: undefined,
				yield: yield_,
				fileDependencies: resolveContext.fileDependencies,
				contextDependencies: resolveContext.contextDependencies,
				missingDependencies: resolveContext.missingDependencies,
				stack: resolveContext.stack,
			},
			(err, result) => {
				if (err) return callback(err);

				if (yieldCalled || (result && yield_)) {
					return /** @type {ResolveContextYield} */ (finishYield)(
						/** @type {ResolveRequest} */ (result),
					);
				}

				if (result) return finishResolved(result);

				// log is missing for the error details
				// so we redo the resolving for the log info
				// this is more expensive to the success case
				// is assumed by default
				/** @type {string[]} */
				const log = [];

				return this.doResolve(
					this.hooks.resolve,
					obj,
					message,
					{
						log: (msg) => log.push(msg),
						yield: yield_,
						stack: resolveContext.stack,
					},
					(err, result) => {
						if (err) return callback(err);

						// In a case that there is a race condition and yield will be called
						if (yieldCalled || (result && yield_)) {
							return /** @type {ResolveContextYield} */ (finishYield)(
								/** @type {ResolveRequest} */ (result),
							);
						}

						return finishWithoutResolve(log);
					},
				);
			},
		);
	}

	/**
	 * @param {ResolveStepHook} hook hook
	 * @param {ResolveRequest} request request
	 * @param {null | string} message string
	 * @param {ResolveContext} resolveContext resolver context
	 * @param {(err?: null | Error, result?: ResolveRequest) => void} callback callback
	 * @returns {void}
	 */
	doResolve(hook, request, message, resolveContext, callback) {
		const stackEntry = Resolver.createStackEntry(hook, request);

		/** @type {Set<string> | undefined} */
		let newStack;
		if (resolveContext.stack) {
			newStack = new Set(resolveContext.stack);
			if (resolveContext.stack.has(stackEntry)) {
				/**
				 * Prevent recursion
				 * @type {Error & { recursion?: boolean }}
				 */
				const recursionError = new Error(
					`Recursion in resolving\nStack:\n  ${[...newStack].join("\n  ")}`,
				);
				recursionError.recursion = true;
				if (resolveContext.log) {
					resolveContext.log("abort resolving because of recursion");
				}
				return callback(recursionError);
			}
			newStack.add(stackEntry);
		} else {
			// creating a set with new Set([item])
			// allocates a new array that has to be garbage collected
			// this is an EXTREMELY hot path, so let's avoid it
			newStack = new Set();
			newStack.add(stackEntry);
		}
		this.hooks.resolveStep.call(hook, request);

		if (hook.isUsed()) {
			const innerContext = createInnerContext(
				{
					log: resolveContext.log,
					yield: resolveContext.yield,
					fileDependencies: resolveContext.fileDependencies,
					contextDependencies: resolveContext.contextDependencies,
					missingDependencies: resolveContext.missingDependencies,
					stack: newStack,
				},
				message,
			);
			return hook.callAsync(request, innerContext, (err, result) => {
				if (err) return callback(err);
				if (result) return callback(null, result);
				callback();
			});
		}
		callback();
	}

	/**
	 * @param {string} identifier identifier
	 * @returns {ParsedIdentifier} parsed identifier
	 */
	parse(identifier) {
		const part = {
			request: "",
			query: "",
			fragment: "",
			module: false,
			directory: false,
			file: false,
			internal: false,
		};

		const parsedIdentifier = parseIdentifier(identifier);

		if (!parsedIdentifier) return part;

		[part.request, part.query, part.fragment] = parsedIdentifier;

		if (part.request.length > 0) {
			part.internal = this.isPrivate(identifier);
			part.module = this.isModule(part.request);
			part.directory = this.isDirectory(part.request);
			if (part.directory) {
				part.request = part.request.slice(0, -1);
			}
		}

		return part;
	}

	/**
	 * @param {string} path path
	 * @returns {boolean} true, if the path is a module
	 */
	isModule(path) {
		return getType(path) === PathType.Normal;
	}

	/**
	 * @param {string} path path
	 * @returns {boolean} true, if the path is private
	 */
	isPrivate(path) {
		return getType(path) === PathType.Internal;
	}

	/**
	 * @param {string} path a path
	 * @returns {boolean} true, if the path is a directory path
	 */
	isDirectory(path) {
		return path.endsWith("/");
	}

	/**
	 * @param {string} path path
	 * @param {string} request request
	 * @returns {string} joined path
	 */
	join(path, request) {
		return join(path, request);
	}

	/**
	 * @param {string} path path
	 * @returns {string} normalized path
	 */
	normalize(path) {
		return normalize(path);
	}
}

module.exports = Resolver;
