import { Compression, getAddress, arch, fs, path as pathModule, lmdbError, EventEmitter, MsgpackrEncoder, Env, Dbi, tmpdir, os, nativeAddon } from './native.js';
import { CachingStore, setGetLastVersion } from './caching.js';
import { addReadMethods, makeReusableBuffer } from './read.js';
import { addWriteMethods } from './write.js';
import { applyKeyHandling } from './keys.js';
let moduleRequire = typeof require == 'function' && require;
export function setRequire(require) {
	moduleRequire = require;
}

setGetLastVersion(getLastVersion);
let keyBytes, keyBytesView;
const buffers = [];
const { onExit, getEnvsPointer, setEnvsPointer, getEnvFlags, setJSFlags } = nativeAddon;
if (globalThis.__lmdb_envs__)
	setEnvsPointer(globalThis.__lmdb_envs__);
else
	globalThis.__lmdb_envs__ = getEnvsPointer();

// this is hard coded as an upper limit because it is important assumption of the fixed buffers in writing instructions
// this corresponds to the max key size for 8KB pages
const MAX_KEY_SIZE = 4026;
const DEFAULT_COMMIT_DELAY = 0;

export const allDbs = new Map();
let defaultCompression;
let lastSize;
let hasRegisteredOnExit;
export function open(path, options) {
	if (!keyBytes) // TODO: Consolidate get buffer and key buffer (don't think we need both)
		allocateFixedBuffer();
	if (typeof path == 'object' && !options) {
		options = path;
		path = options.path;
	}
	options = options || {};
	let userOptions = options;
	if (!path) {
		options = Object.assign({
			deleteOnClose: true,
			noSync: true,
		}, options);
		path = tmpdir() + '/' + Math.floor(Math.random() * 2821109907455).toString(36) + '.mdb'
	} else if (!options)
		options = {};
	let extension = pathModule.extname(path);
	let name = pathModule.basename(path, extension);
	let is32Bit = arch().endsWith('32');
	let remapChunks = options.remapChunks || (options.mapSize ?
		(is32Bit && options.mapSize > 0x100000000) : // larger than fits in address space, must use dynamic maps
		is32Bit); // without a known map size, we default to being able to handle large data correctly/well*/
	options = Object.assign({
		path,
		noSubdir: Boolean(extension),
		isRoot: true,
		maxDbs: 12,
		remapChunks,
		keyBytes,
		pageSize: 4096,
		overlappingSync: (options.noSync || options.readOnly) ? false : (os != 'win32'),
		// default map size limit of 4 exabytes when using remapChunks, since it is not preallocated and we can
		// make it super huge.
		mapSize: remapChunks ? 0x10000000000000 :
			0x20000, // Otherwise we start small with 128KB
	}, options);
	if (options.asyncTransactionOrder == 'strict') {
		options.strictAsyncOrder = true;
	}

	if (!exists(options.noSubdir ? pathModule.dirname(path) : path))
		fs.mkdirSync(options.noSubdir ? pathModule.dirname(path) : path, { recursive: true }
		);
	function makeCompression(compressionOptions) {
		if (compressionOptions instanceof Compression)
			return compressionOptions;
		let useDefault = typeof compressionOptions != 'object';
		if (useDefault && defaultCompression)
			return defaultCompression;
		compressionOptions = Object.assign({
			threshold: 1000,
			dictionary: fs.readFileSync(new URL('./dict/dict.txt', import.meta.url.replace(/dist[\\\/]index.cjs$/, ''))),
			getValueBytes: makeReusableBuffer(0),
		}, compressionOptions);
		let compression = Object.assign(new Compression(compressionOptions), compressionOptions);
		if (useDefault)
			defaultCompression = compression;
		return compression;
	}

	if (options.compression)
		options.compression = makeCompression(options.compression);
	let flags =
		(options.overlappingSync ? 0x1000 : 0) |
		(options.noSubdir ? 0x4000 : 0) |
		(options.noSync ? 0x10000 : 0) |
		(options.readOnly ? 0x20000 : 0) |
		(options.noMetaSync ? 0x40000 : 0) |
		(options.useWritemap ? 0x80000 : 0) |
		(options.mapAsync ? 0x100000 : 0) |
		(options.noReadAhead ? 0x800000 : 0) |
		(options.noMemInit ? 0x1000000 : 0) |
		(options.usePreviousSnapshot ? 0x2000000 : 0) |
		(options.remapChunks ? 0x4000000 : 0);

	let env = new Env();
	let jsFlags = (options.overlappingSync ? 0x1000 : 0) |
		(options.separateFlushed ? 1 : 0) |
		(options.deleteOnClose ? 2 : 0)
	let rc = env.open(options, flags, jsFlags);
   if (rc)
		lmdbError(rc);
	let maxKeySize = env.getMaxKeySize();
	maxKeySize = Math.min(maxKeySize, MAX_KEY_SIZE);
	flags = getEnvFlags(env.address); // re-retrieve them, they are not necessarily the same if we are connecting to an existing env
	if (flags & 0x1000) {
		if (userOptions.noSync) {
			env.close();
			throw new Error('Can not set noSync on a database that was opened with overlappingSync');
		}
	} else if (options.overlappingSync) {
		if (userOptions.overlappingSync) {
			env.close();
			throw new Error('Can not enable overlappingSync on a database that was opened without this flag');
		}
		options.overlappingSync = false;
		jsFlags = jsFlags & 0xff; // clear overlapping sync
		setJSFlags(env.address, jsFlags);
	}

	env.readerCheck(); // clear out any stale entries
	let stores = [];
	if ((options.overlappingSync || options.deleteOnClose) && !hasRegisteredOnExit && process.on) {
		hasRegisteredOnExit = true;
		process.on('exit', onExit);
	}

	class LMDBStore extends EventEmitter {
		constructor(dbName, dbOptions) {
			super();
			if (dbName === undefined)
				throw new Error('Database name must be supplied in name property (may be null for root database)');

			if (options.compression && dbOptions.compression !== false && typeof dbOptions.compression != 'object')
				dbOptions.compression = options.compression; // use the parent compression if available
			else if (dbOptions.compression)
				dbOptions.compression = makeCompression(dbOptions.compression);

			if (dbOptions.dupSort && (dbOptions.useVersions || dbOptions.cache)) {
				throw new Error('The dupSort flag can not be combined with versions or caching');
			}
			let keyIsBuffer = dbOptions.keyIsBuffer
			if (dbOptions.keyEncoding == 'uint32') {
				dbOptions.keyIsUint32 = true;
			} else if (dbOptions.keyEncoder) {
				if (dbOptions.keyEncoder.enableNullTermination) {
					dbOptions.keyEncoder.enableNullTermination()
				} else
					keyIsBuffer = true;
			} else if (dbOptions.keyEncoding == 'binary') {
				keyIsBuffer = true;
			}
			let flags = (dbOptions.reverseKey ? 0x02 : 0) |
				(dbOptions.dupSort ? 0x04 : 0) |
				(dbOptions.dupFixed ? 0x10 : 0) |
				(dbOptions.integerDup ? 0x20 : 0) |
				(dbOptions.reverseDup ? 0x40 : 0) |
				(!options.readOnly && dbOptions.create !== false ? 0x40000 : 0) |
				(dbOptions.useVersions ? 0x1000 : 0);
			let keyType = (dbOptions.keyIsUint32 || dbOptions.keyEncoding == 'uint32') ? 2 : keyIsBuffer ? 3 : 0;
			if (keyType == 2)
				flags |= 0x08; // integer key

			if (options.readOnly) {
				// in read-only mode we use a read-only txn to open the database
				// TODO: LMDB is actually not entire thread-safe when it comes to opening databases with
				// read-only transactions since there is a race condition on setting the update dbis that
				// occurs outside the lock
				// make sure we are using a fresh read txn, so we don't want to share with a cursor txn
				this.resetReadTxn();
				this.ensureReadTxn();
				this.db = new Dbi(env, flags, dbName, keyType, dbOptions.compression);
			} else {
				this.transactionSync(() => {
					this.db = new Dbi(env, flags, dbName, keyType, dbOptions.compression);
				}, options.overlappingSync ? 0x10002 : 2); // no flush-sync, but synchronously commit
			}
			this._commitReadTxn(); // current read transaction becomes invalid after opening another db
			if (!this.db || this.db.dbi == 0xffffffff) {// not found
				throw new Error('Database not found')
			}
			this.dbAddress = this.db.address
			this.db.name = dbName || null;
			this.name = dbName;
			this.status = 'open';
			this.env = env;
			this.reads = 0;
			this.writes = 0;
			this.transactions = 0;
			this.averageTransactionTime = 5;
			if (dbOptions.syncBatchThreshold)
				console.warn('syncBatchThreshold is no longer supported');
			if (dbOptions.immediateBatchThreshold)
				console.warn('immediateBatchThreshold is no longer supported');
			this.commitDelay = DEFAULT_COMMIT_DELAY;
			Object.assign(this, { // these are the options that are inherited
				path: options.path,
				encoding: options.encoding,
				strictAsyncOrder: options.strictAsyncOrder,
			}, dbOptions);
			let Encoder;
			if (this.encoder && this.encoder.Encoder) {
				Encoder = this.encoder.Encoder;
				this.encoder = null; // don't copy everything from the module
			}
			if (!Encoder && !(this.encoder && this.encoder.encode) && (!this.encoding || this.encoding == 'msgpack' || this.encoding == 'cbor')) {
				Encoder = (this.encoding == 'cbor' ? moduleRequire('cbor-x').Encoder : MsgpackrEncoder);
			}
			if (Encoder) {
				this.encoder = new Encoder(Object.assign(
					assignConstrainedProperties(['copyBuffers', 'getStructures', 'saveStructures', 'useFloat32', 'useRecords', 'structuredClone', 'variableMapSize', 'useTimestamp32', 'largeBigIntToFloat', 'encodeUndefinedAsNil', 'int64AsNumber', 'onInvalidDate', 'mapsAsObjects', 'useTag259ForMaps', 'pack', 'maxSharedStructures', 'shouldShareStructure'],
					this.sharedStructuresKey ? this.setupSharedStructures() : {
						copyBuffers: true, // need to copy any embedded buffers that are found since we use unsafe buffers
					}, options, dbOptions), this.encoder));
			}
			if (this.encoding == 'json') {
				this.encoder = {
					encode: JSON.stringify,
				};
			} else if (this.encoder) {
				this.decoder = this.encoder;
				this.decoderCopies = !this.encoder.needsStableBuffer
			}
			this.maxKeySize = maxKeySize;
			applyKeyHandling(this);
			allDbs.set(dbName ? name + '-' + dbName : name, this);
			stores.push(this);
		}
		openDB(dbName, dbOptions) {
			if (this.dupSort && this.name == null)
				throw new Error('Can not open named databases if the main database is dupSort')
			if (typeof dbName == 'object' && !dbOptions) {
				dbOptions = dbName;
				dbName = dbOptions.name;
			} else
				dbOptions = dbOptions || {};
			try {
				return dbOptions.cache ?
					new (CachingStore(LMDBStore, env))(dbName, dbOptions) :
					new LMDBStore(dbName, dbOptions);
			} catch(error) {
				if (error.message == 'Database not found')
					return; // return undefined to indicate db not found
				if (error.message.indexOf('MDB_DBS_FULL') > -1) {
					error.message += ' (increase your maxDbs option)';
				}
				throw error;
			}
		}
		open(dbOptions, callback) {
			let db = this.openDB(dbOptions);
			if (callback)
				callback(null, db);
			return db;
		}
		backup(path) {
			return new Promise((resolve, reject) => env.copy(path, false, (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			}));
		}
		isOperational() {
			return this.status == 'open';
		}
		sync(callback) {
			return env.sync(callback || function(error) {
				if (error) {
					console.error(error);
				}
			});
		}
		deleteDB() {
			console.warn('deleteDB() is deprecated, use drop or dropSync instead');
			return this.dropSync();
		}
		dropSync() {
			this.transactionSync(() =>
				this.db.drop({
					justFreePages: false
				}), options.overlappingSync ? 0x10002 : 2);
		}
		clear(callback) {
			if (typeof callback == 'function')
				return this.clearAsync(callback);
			console.warn('clear() is deprecated, use clearAsync or clearSync instead');
			this.clearSync();
		}
		clearSync() {
			if (this.encoder) {
				if (this.encoder.clearSharedData)
					this.encoder.clearSharedData()
				else if (this.encoder.structures)
					this.encoder.structures = []
			}
			this.transactionSync(() =>
				this.db.drop({
					justFreePages: true
				}), options.overlappingSync ? 0x10002 : 2);
		}
		readerCheck() {
			return env.readerCheck();
		}
		readerList() {
			return env.readerList().join('');
		}
		setupSharedStructures() {
			const getStructures = () => {
				let lastVersion; // because we are doing a read here, we may need to save and restore the lastVersion from the last read
				if (this.useVersions)
					lastVersion = getLastVersion();
				let buffer = this.getBinary(this.sharedStructuresKey);
				if (this.useVersions)
					setLastVersion(lastVersion);
				return buffer && this.decoder.decode(buffer);
			};
			return {
				saveStructures: (structures, isCompatible) => {
					return this.transactionSync(() => {
						let existingStructuresBuffer = this.getBinary(this.sharedStructuresKey);
						let existingStructures = existingStructuresBuffer && this.decoder.decode(existingStructuresBuffer);
						if (typeof isCompatible == 'function' ?
								!isCompatible(existingStructures) :
								(existingStructures && existingStructures.length != isCompatible))
							return false; // it changed, we need to indicate that we couldn't update
						this.put(this.sharedStructuresKey, structures);
					},  options.overlappingSync ? 0x10000 : 0);
				},
				getStructures,
				copyBuffers: true, // need to copy any embedded buffers that are found since we use unsafe buffers
			};
		}
	}
	// if caching class overrides putSync, don't want to double call the caching code
	const putSync = LMDBStore.prototype.putSync;
	const removeSync = LMDBStore.prototype.removeSync;
	addReadMethods(LMDBStore, { env, maxKeySize, keyBytes, keyBytesView, getLastVersion });
	if (!options.readOnly)
		addWriteMethods(LMDBStore, { env, maxKeySize, fixedBuffer: keyBytes,
			resetReadTxn: LMDBStore.prototype.resetReadTxn, ...options });
	LMDBStore.prototype.supports = {
		permanence: true,
		bufferKeys: true,
		promises: true,
		snapshots: true,
		clear: true,
		status: true,
		deferredOpen: true,
		openCallback: true,	
	};
	let Class = options.cache ? CachingStore(LMDBStore, env) : LMDBStore;
	return options.asClass ? Class : new Class(options.name || null, options);
}
export function openAsClass(path, options) {
	if (typeof path == 'object' && !options) {
		options = path;
		path = options.path;
	}
	options = options || {};
	options.asClass = true;
	return open(path, options);
}

export function getLastVersion() {
	return keyBytesView.getFloat64(16, true);
}

export function setLastVersion(version) {
	return keyBytesView.setFloat64(16, version, true);
}

const KEY_BUFFER_SIZE = 4096;
function allocateFixedBuffer() {
	keyBytes = typeof Buffer != 'undefined' ? Buffer.allocUnsafeSlow(KEY_BUFFER_SIZE) : new Uint8Array(KEY_BUFFER_SIZE);
	const keyBuffer = keyBytes.buffer;
	keyBytesView = keyBytes.dataView || (keyBytes.dataView = new DataView(keyBytes.buffer, 0, KEY_BUFFER_SIZE)); // max key size is actually 4026
	keyBytes.uint32 = new Uint32Array(keyBuffer, 0, KEY_BUFFER_SIZE >> 2);
	keyBytes.float64 = new Float64Array(keyBuffer, 0, KEY_BUFFER_SIZE >> 3);
	keyBytes.uint32.address = keyBytes.address = keyBuffer.address = getAddress(keyBytes);
}

function exists(path) {
	if (fs.existsSync)
		return fs.existsSync(path);
	try {
		return fs.statSync(path);
	} catch (error) {
		return false
	}
}

function assignConstrainedProperties(allowedProperties, target) {
	for (let i = 2; i < arguments.length; i++) {
		let source = arguments[i];
		for (let key in source) {
			if (allowedProperties.includes(key))
				target[key] = source[key];
		}
	}
	return target;
}
