'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var module$1 = require('module');
var pathModule = require('path');
var url = require('url');
var loadNAPI = require('node-gyp-build-optional-packages');
var v8 = require('v8');
var events = require('events');
var os$1 = require('os');
var fs$1 = require('fs');
var msgpackr = require('msgpackr');
var weakLruCache = require('weak-lru-cache');
var orderedBinary$1 = require('ordered-binary');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var pathModule__default = /*#__PURE__*/_interopDefaultLegacy(pathModule);
var loadNAPI__default = /*#__PURE__*/_interopDefaultLegacy(loadNAPI);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs$1);
var orderedBinary__namespace = /*#__PURE__*/_interopNamespace(orderedBinary$1);

let Env, Txn, Dbi, Compression, Cursor, getAddress; exports.clearKeptObjects = void 0; let setGlobalBuffer, arch, fs, os, tmpdir, lmdbError, path, EventEmitter, orderedBinary, MsgpackrEncoder, WeakLRUCache, getByBinary, detachBuffer, write, position, iterate, prefetch, resetTxn, getCurrentValue, getCurrentShared, getStringByBinary, getSharedByBinary, compress;

path = pathModule__default["default"];
let dirName = (typeof __dirname == 'string' ? __dirname : // for bun, which doesn't have fileURLToPath
	pathModule.dirname(url.fileURLToPath((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('index.cjs', document.baseURI).href))))).replace(/dist$/, ''); // for node, which doesn't have __dirname in ESM
let nativeAddon = loadNAPI__default["default"](dirName);

if (process.isBun) {
	const { linkSymbols, FFIType } = require('bun:ffi');
	let lmdbLib = linkSymbols({
		getByBinary: {
			args: [FFIType.f64, FFIType.u32],
			returns: FFIType.u32,
			ptr: nativeAddon.getByBinaryPtr
		},
		iterate: {
			args: [FFIType.f64],
			returns: FFIType.i32,
			ptr: nativeAddon.iteratePtr,
		},
		position: {
			args: [FFIType.f64, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.f64],
			returns: FFIType.i32,
			ptr: nativeAddon.positionPtr,
		},
		write: {
			args: [FFIType.f64, FFIType.f64],
			returns: FFIType.i32,
			ptr: nativeAddon.writePtr,
		},
		resetTxn: {
			args: [FFIType.f64],
			returns: FFIType.void,
			ptr: nativeAddon.resetTxnPtr,
		}
	});
	for (let key in lmdbLib.symbols) {
		nativeAddon[key] = lmdbLib.symbols[key].native;
	}
}
setNativeFunctions(nativeAddon);
	
function setNativeFunctions(externals) {
	Env = externals.Env;
	Txn = externals.Txn;
	Dbi = externals.Dbi;
	Compression = externals.Compression;
	getAddress = externals.getAddress;
	exports.clearKeptObjects = externals.clearKeptObjects || function() {};
	getByBinary = externals.getByBinary;
	detachBuffer  = externals.detachBuffer;
	setGlobalBuffer = externals.setGlobalBuffer;
	prefetch = externals.prefetch;
	iterate = externals.iterate;
	position = externals.position;
	resetTxn = externals.resetTxn;
	getCurrentValue = externals.getCurrentValue;
	getCurrentShared = externals.getCurrentShared;
	getStringByBinary = externals.getStringByBinary;
	getSharedByBinary = externals.getSharedByBinary;
	write = externals.write;
	compress = externals.compress;
	Cursor = externals.Cursor;
	lmdbError = externals.lmdbError;
	if (externals.tmpdir)
        tmpdir = externals.tmpdir;
}
function setExternals(externals) {
	arch = externals.arch;
	fs = externals.fs;
	EventEmitter = externals.EventEmitter;
	orderedBinary = externals.orderedBinary;
	MsgpackrEncoder = externals.MsgpackrEncoder;
	WeakLRUCache = externals.WeakLRUCache;
	tmpdir = externals.tmpdir;
   os = externals.os;
}

function when(promise, callback, errback) {
  if (promise && promise.then) {
    return errback ?
      promise.then(callback, errback) :
      promise.then(callback);
  }
  return callback(promise);
}

var backpressureArray;

const WAITING_OPERATION = 0x2000000;
const BACKPRESSURE_THRESHOLD = 100000;
const TXN_DELIMITER = 0x8000000;
const TXN_COMMITTED = 0x10000000;
const TXN_FLUSHED = 0x20000000;
const TXN_FAILED = 0x40000000;
const FAILED_CONDITION = 0x4000000;
const REUSE_BUFFER_MODE = 512;
const RESET_BUFFER_MODE = 1024;
const NO_RESOLVE = 16;
const HAS_TXN = 8;

const SYNC_PROMISE_SUCCESS = Promise.resolve(true);
const SYNC_PROMISE_FAIL = Promise.resolve(false);
SYNC_PROMISE_SUCCESS.isSync = true;
SYNC_PROMISE_FAIL.isSync = true;
const PROMISE_SUCCESS = Promise.resolve(true);
const ABORT = {};
const IF_EXISTS = 3.542694326329068e-103;
const CALLBACK_THREW = {};
const LocalSharedArrayBuffer = typeof Deno != 'undefined' ? ArrayBuffer : SharedArrayBuffer; // Deno can't handle SharedArrayBuffer as an FFI argument due to https://github.com/denoland/deno/issues/12678
const ByteArray = typeof Buffer != 'undefined' ? function(buffer) { return Buffer.from(buffer) } : Uint8Array;
const queueTask = typeof setImmediate != 'undefined' ? setImmediate : setTimeout; // TODO: Or queueMicrotask?
//let debugLog = []
const WRITE_BUFFER_SIZE = 0x10000;
function addWriteMethods(LMDBStore, { env, fixedBuffer, resetReadTxn, useWritemap, maxKeySize,
	eventTurnBatching, txnStartThreshold, batchStartThreshold, overlappingSync, commitDelay, separateFlushed, maxFlushDelay }) {
	//  stands for write instructions
	var dynamicBytes;
	function allocateInstructionBuffer() {
		// Must use a shared buffer on older node in order to use Atomics, and it is also more correct since we are 
		// indeed accessing and modifying it from another thread (in C). However, Deno can't handle it for
		// FFI so aliased above
		let buffer = new LocalSharedArrayBuffer(WRITE_BUFFER_SIZE);
		dynamicBytes = new ByteArray(buffer);
		let uint32 = dynamicBytes.uint32 = new Uint32Array(buffer, 0, WRITE_BUFFER_SIZE >> 2);
		uint32[0] = 0;
		dynamicBytes.float64 = new Float64Array(buffer, 0, WRITE_BUFFER_SIZE >> 3);
		buffer.address = getAddress(dynamicBytes);
		uint32.address = buffer.address + uint32.byteOffset;
		dynamicBytes.position = 0;
		return dynamicBytes;
	}
	var newBufferThreshold = (WRITE_BUFFER_SIZE - maxKeySize - 64) >> 3; // need to reserve more room if we do inline values
	var outstandingWriteCount = 0;
	var startAddress = 0;
	var writeTxn = null;
	var committed;
	var abortedNonChildTransactionWarn;
	var nextTxnCallbacks = [];
	var commitPromise, flushPromise, flushResolvers = [];
	commitDelay = commitDelay || 0;
	eventTurnBatching = eventTurnBatching === false ? false : true;
	var enqueuedCommit;
	var afterCommitCallbacks = [];
	var beforeCommitCallbacks = [];
	var enqueuedEventTurnBatch;
	var batchDepth = 0;
	var lastWritePromise;
	var writeBatchStart, outstandingBatchCount, lastSyncTxnFlush, lastFlushTimeout, lastFlushCallback;
	txnStartThreshold = txnStartThreshold || 5;
	batchStartThreshold = batchStartThreshold || 1000;
	maxFlushDelay = maxFlushDelay || 500;

	allocateInstructionBuffer();
	dynamicBytes.uint32[0] = TXN_DELIMITER | TXN_COMMITTED | TXN_FLUSHED;
	var txnResolution, lastQueuedResolution, nextResolution = {
		uint32: dynamicBytes.uint32, flagPosition: 0, flag: 0, valueBuffer: null, next: null, meta: null };
	var uncommittedResolution = {
		uint32: null, flagPosition: 0, flag: 0, valueBuffer: null, next: nextResolution, meta: null };
	var unwrittenResolution = nextResolution;
	var lastPromisedResolution = uncommittedResolution;
	function writeInstructions(flags, store, key, value, version, ifVersion) {
		let writeStatus;
		let targetBytes, position, encoder;
		let valueBuffer, valueSize, valueBufferStart;
		if (flags & 2) {
			// encode first in case we have to write a shared structure
			encoder = store.encoder;
			if (value && value['\x10binary-data\x02'])
				valueBuffer = value['\x10binary-data\x02'];
			else if (encoder) {
				if (encoder.copyBuffers) // use this as indicator for support buffer reuse for now
					valueBuffer = encoder.encode(value, REUSE_BUFFER_MODE | (writeTxn ? RESET_BUFFER_MODE : 0)); // in addition, if we are writing sync, after using, we can immediately reset the encoder's position to reuse that space, which can improve performance
				else { // various other encoders, including JSON.stringify, that might serialize to a string
					valueBuffer = encoder.encode(value);
					if (typeof valueBuffer == 'string')
						valueBuffer = Buffer.from(valueBuffer); // TODO: Would be nice to write strings inline in the instructions
				}
			} else if (typeof value == 'string') {
				valueBuffer = Buffer.from(value); // TODO: Would be nice to write strings inline in the instructions
			} else if (value instanceof Uint8Array)
				valueBuffer = value;
			else
				throw new Error('Invalid value to put in database ' + value + ' (' + (typeof value) +'), consider using encoder');
			valueBufferStart = valueBuffer.start;
			if (valueBufferStart > -1) // if we have buffers with start/end position
				valueSize = valueBuffer.end - valueBufferStart; // size
			else
				valueSize = valueBuffer.length;
			if (store.dupSort && valueSize > maxKeySize)
				throw new Error('The value is larger than the maximum size (' + maxKeySize + ') for a value in a dupSort database');
		} else
			valueSize = 0;
		if (writeTxn) {
			targetBytes = fixedBuffer;
			position = 0;
		} else {
			if (eventTurnBatching && !enqueuedEventTurnBatch && batchDepth == 0) {
				enqueuedEventTurnBatch = queueTask(() => {
					try {
						for (let i = 0, l = beforeCommitCallbacks.length; i < l; i++) {
							beforeCommitCallbacks[i]();
						}
					} catch(error) {
						console.error(error);
					}
					enqueuedEventTurnBatch = null;
					batchDepth--;
					finishBatch();
					if (writeBatchStart)
						writeBatchStart(); // TODO: When we support delay start of batch, optionally don't delay this
				});
				commitPromise = null; // reset the commit promise, can't know if it is really a new transaction prior to finishWrite being called
				flushPromise = null;
				writeBatchStart = writeInstructions(1, store);
				outstandingBatchCount = 0;
				batchDepth++;
			}
			targetBytes = dynamicBytes;
			position = targetBytes.position;
		}
		let uint32 = targetBytes.uint32, float64 = targetBytes.float64;
		let flagPosition = position << 1; // flagPosition is the 32-bit word starting position

		// don't increment position until we are sure we don't have any key writing errors
		if (!uint32) {
			throw new Error('Internal buffers have been corrupted');
		}
		uint32[flagPosition + 1] = store.db.dbi;
		if (flags & 4) {
			let keyStartPosition = (position << 3) + 12;
			let endPosition;
			try {
				endPosition = store.writeKey(key, targetBytes, keyStartPosition);
				if (!(keyStartPosition < endPosition) && (flags & 0xf) != 12)
					throw new Error('Invalid key or zero length key is not allowed in LMDB')
			} catch(error) {
				targetBytes.fill(0, keyStartPosition);
				if (error.name == 'RangeError')
					error = new Error('Key size is larger than the maximum key size (' + maxKeySize + ')');
				throw error;
			}
			let keySize = endPosition - keyStartPosition;
			if (keySize > maxKeySize) {
				targetBytes.fill(0, keyStartPosition); // restore zeros
				throw new Error('Key size is larger than the maximum key size (' + maxKeySize + ')');
			}
			uint32[flagPosition + 2] = keySize;
			position = (endPosition + 16) >> 3;
			if (flags & 2) {
				let mustCompress;
				if (valueBufferStart > -1) { // if we have buffers with start/end position
					// record pointer to value buffer
					float64[position] = (valueBuffer.address ||
						(valueBuffer.address = getAddress(valueBuffer))) + valueBufferStart;
					mustCompress = valueBuffer[valueBufferStart] >= 250; // this is the compression indicator, so we must compress
				} else {
					let valueArrayBuffer = valueBuffer.buffer;
					// record pointer to value buffer
					let address = (valueArrayBuffer.address ||
						(valueBuffer.length === 0 ? 0 : // externally allocated buffers of zero-length with the same non-null-pointer can crash node, #161
						(valueArrayBuffer.address = (getAddress(valueBuffer) - valueBuffer.byteOffset))))
							+ valueBuffer.byteOffset;
					if (address <= 0 && valueBuffer.length > 0)
						console.error('Supplied buffer had an invalid address', address);
					float64[position] = address;
					mustCompress = valueBuffer[0] >= 250; // this is the compression indicator, so we must compress
				}
				uint32[(position++ << 1) - 1] = valueSize;
				if (store.compression && (valueSize >= store.compression.threshold || mustCompress)) {
					flags |= 0x100000;
					float64[position] = store.compression.address;
					if (!writeTxn)
						compress(env.address, uint32.address + (position << 3), () => {
							// this is never actually called in NodeJS, just use to pin the buffer in memory until it is finished
							// and is a no-op in Deno
							if (!float64)
								throw new Error('No float64 available');
						});
					position++;
				}
			}
			if (ifVersion !== undefined) {
				if (ifVersion === null)
					flags |= 0x10; // if it does not exist, MDB_NOOVERWRITE
				else {
					flags |= 0x100;
					float64[position++] = ifVersion;
				}
			}
			if (version !== undefined) {
				flags |= 0x200;
				float64[position++] = version || 0;
			}
		} else
			position++;
		targetBytes.position = position;
		if (writeTxn) {
			uint32[0] = flags;
			write(env.address, uint32.address);
			return () => (uint32[0] & FAILED_CONDITION) ? SYNC_PROMISE_FAIL : SYNC_PROMISE_SUCCESS;
		}
		// if we ever use buffers that haven't been zero'ed, need to clear out the next slot like this:
		// uint32[position << 1] = 0 // clear out the next slot
		let nextUint32;
		if (position > newBufferThreshold) {
			// make new buffer and make pointer to it
			let lastPosition = position;
			targetBytes = allocateInstructionBuffer();
			position = targetBytes.position;
			float64[lastPosition + 1] = targetBytes.uint32.address + position;
			uint32[lastPosition << 1] = 3; // pointer instruction
			nextUint32 = targetBytes.uint32;
		} else
			nextUint32 = uint32;
		let resolution = nextResolution;
		// create the placeholder next resolution
		nextResolution = resolution.next = { // we try keep resolutions exactly the same object type
			uint32: nextUint32,
			flagPosition: position << 1,
			flag: 0, // TODO: eventually eliminate this, as we can probably signify HAS_TXN/NO_RESOLVE/FAILED_CONDITION in upper bits
			valueBuffer: fixedBuffer, // these are all just placeholders so that we have the right hidden class initially allocated
			next: null,
			meta: null,
		};
		let writtenBatchDepth = batchDepth;

		return (callback) => {
			if (writtenBatchDepth) {
				// if we are in a batch, the transaction can't close, so we do the faster,
				// but non-deterministic updates, knowing that the write thread can
				// just poll for the status change if we miss a status update
				writeStatus = uint32[flagPosition];
				uint32[flagPosition] = flags;
				//writeStatus = Atomics.or(uint32, flagPosition, flags)
				if (writeBatchStart && !writeStatus) {
					outstandingBatchCount += 1 + (valueSize >> 12);
					if (outstandingBatchCount > batchStartThreshold) {
						outstandingBatchCount = 0;
						writeBatchStart();
						writeBatchStart = null;
					}
				}
			} else // otherwise the transaction could end at any time and we need to know the
				// deterministically if it is ending, so we can reset the commit promise
				// so we use the slower atomic operation
				writeStatus = Atomics.or(uint32, flagPosition, flags);
	
			outstandingWriteCount++;
			if (writeStatus & TXN_DELIMITER) {
				commitPromise = null; // TODO: Don't reset these if this comes from the batch start operation on an event turn batch
				flushPromise = null;
				queueCommitResolution(resolution);
				if (!startAddress) {
					startAddress = uint32.address + (flagPosition << 2);
				}
			}
			if (!flushPromise && overlappingSync)
				flushPromise = new Promise(resolve => flushResolvers.push(resolve));
			if (writeStatus & WAITING_OPERATION) { // write thread is waiting
				write(env.address, 0);
			}
			if (outstandingWriteCount > BACKPRESSURE_THRESHOLD && !writeBatchStart) {
				if (!backpressureArray)
					backpressureArray = new Int32Array(new SharedArrayBuffer(4), 0, 1);
				Atomics.wait(backpressureArray, 0, 0, Math.round(outstandingWriteCount / BACKPRESSURE_THRESHOLD));
			}
			if (startAddress) {
				if (eventTurnBatching)
					startWriting(); // start writing immediately because this has already been batched/queued
				else if (!enqueuedCommit && txnStartThreshold) {
					enqueuedCommit = (commitDelay == 0 && typeof setImmediate != 'undefined') ? setImmediate(() => startWriting()) : setTimeout(() => startWriting(), commitDelay);
				} else if (outstandingWriteCount > txnStartThreshold)
					startWriting();
			}

			if ((outstandingWriteCount & 7) === 0)
				resolveWrites();
			
			if (store.cache) {
				resolution.meta = {
					key,
					store,
					valueSize: valueBuffer ? valueBuffer.length : 0,
				};
			}
			resolution.valueBuffer = valueBuffer;
			lastQueuedResolution = resolution;

			if (callback) {
				if (callback === IF_EXISTS)
					ifVersion = IF_EXISTS;
				else {
					let meta = resolution.meta || (resolution.meta = {});
					meta.reject = callback;
					meta.resolve = (value) => callback(null, value);
					return;
				}
			}
			if (ifVersion === undefined) {
				if (writtenBatchDepth > 1) {
					if (!resolution.flag && !store.cache)
						resolution.flag = NO_RESOLVE;
					return PROMISE_SUCCESS; // or return undefined?
				}
				if (commitPromise) {
					if (!resolution.flag)
						resolution.flag = NO_RESOLVE;
				} else {
					commitPromise = new Promise((resolve, reject) => {
						let meta = resolution.meta || (resolution.meta = {});
						meta.resolve = resolve;
						resolve.unconditional = true;
						meta.reject = reject;
					});
					if (separateFlushed)
						commitPromise.flushed = overlappingSync ? flushPromise : commitPromise;
				}
				return commitPromise;
			}
			lastWritePromise = new Promise((resolve, reject) => {
				let meta = resolution.meta || (resolution.meta = {});
				meta.resolve = resolve;
				meta.reject = reject;
			});
			if (separateFlushed)
				lastWritePromise.flushed = overlappingSync ? flushPromise : lastWritePromise;
			return lastWritePromise;
		};
	}
	let committedFlushResolvers, lastSync = Promise.resolve();
	function startWriting() {
		if (enqueuedCommit) {
			clearImmediate(enqueuedCommit);
			enqueuedCommit = null;
		}
		let resolvers = flushResolvers;
		flushResolvers = [];
		let start = Date.now();
		env.startWriting(startAddress, (status) => {
			if (dynamicBytes.uint32[dynamicBytes.position << 1] & TXN_DELIMITER)
				queueCommitResolution(nextResolution);

			resolveWrites(true);
			switch (status) {
				case 0:
					if (resolvers.length > 0) {
						let delay = Date.now() - start;
						scheduleFlush(resolvers, Math.min((flushPromise && flushPromise.hasCallbacks ? delay >> 1 : delay) + 1, maxFlushDelay));
					}
				case 1:
				break;
				case 2:
					executeTxnCallbacks();
				break;
				default:
				console.error(status);
				if (commitRejectPromise) {
					commitRejectPromise.reject(status);
					commitRejectPromise = null;
				}
			}
		});
		startAddress = 0;
	}
	function scheduleFlush(resolvers, delay) {
		if (committedFlushResolvers)
			committedFlushResolvers.push(...resolvers);
		else {
			committedFlushResolvers = resolvers;
			lastFlushTimeout = setTimeout(lastFlushCallback = () => {
				lastFlushTimeout = null;
				lastSync.then(() => {
					let resolvers = committedFlushResolvers || [];
					committedFlushResolvers = null;
					lastSync = new Promise((resolve) => {
						env.sync(() => {
							for (let i = 0; i < resolvers.length; i++)
								resolvers[i]();
							resolve();
						});
					});
				});
			}, delay || 0);
		}
	}
	function expediteFlush() {
		if (lastFlushTimeout) {
			clearTimeout(lastFlushTimeout);
			lastFlushCallback();
		}
	}

	function queueCommitResolution(resolution) {
		if (!(resolution.flag & HAS_TXN)) {
			resolution.flag = HAS_TXN;
			if (txnResolution) {
				txnResolution.nextTxn = resolution;
				//outstandingWriteCount = 0
			}
			else
				txnResolution = resolution;
		}
	}
	var TXN_DONE = TXN_COMMITTED | TXN_FAILED;
	function resolveWrites(async) {
		// clean up finished instructions
		let instructionStatus;
		while ((instructionStatus = unwrittenResolution.uint32[unwrittenResolution.flagPosition])
				& 0x1000000) {
			if (unwrittenResolution.callbacks) {
				nextTxnCallbacks.push(unwrittenResolution.callbacks);
				unwrittenResolution.callbacks = null;
			}
			outstandingWriteCount--;
			if (unwrittenResolution.flag !== HAS_TXN) {
				if (unwrittenResolution.flag === NO_RESOLVE && !unwrittenResolution.store) {
					// in this case we can completely remove from the linked list, clearing more memory
					lastPromisedResolution.next = unwrittenResolution = unwrittenResolution.next;
					continue;
				}
				unwrittenResolution.uint32 = null;
			}
			unwrittenResolution.valueBuffer = null;
			unwrittenResolution.flag = instructionStatus;
			lastPromisedResolution = unwrittenResolution;
			unwrittenResolution = unwrittenResolution.next;
		}
		while (txnResolution &&
			(instructionStatus = txnResolution.uint32[txnResolution.flagPosition] & TXN_DONE)) {
			if (instructionStatus & TXN_FAILED)
				rejectCommit();
			else
				resolveCommit(async);
		}
	}

	function resolveCommit(async) {
		afterCommit();
		if (async)
			resetReadTxn();
		else
			queueMicrotask(resetReadTxn); // TODO: only do this if there are actually committed writes?
		do {
			if (uncommittedResolution.meta && uncommittedResolution.meta.resolve) {
				let resolve = uncommittedResolution.meta.resolve;
				if (uncommittedResolution.flag & FAILED_CONDITION && !resolve.unconditional)
					resolve(false);
				else
					resolve(true);
			}
		} while((uncommittedResolution = uncommittedResolution.next) && uncommittedResolution != txnResolution)
		txnResolution = txnResolution.nextTxn;
	}
	var commitRejectPromise;
	function rejectCommit() {
		afterCommit();
		if (!commitRejectPromise) {
			let rejectFunction;
			commitRejectPromise = new Promise((resolve, reject) => rejectFunction = reject);
			commitRejectPromise.reject = rejectFunction;
		}
		do {
			if (uncommittedResolution.meta && uncommittedResolution.meta.reject) {
				uncommittedResolution.flag & 0xf;
				let error = new Error("Commit failed (see commitError for details)");
				error.commitError = commitRejectPromise;
				uncommittedResolution.meta.reject(error);
			}
		} while((uncommittedResolution = uncommittedResolution.next) && uncommittedResolution != txnResolution)
		txnResolution = txnResolution.nextTxn;
	}
	function atomicStatus(uint32, flagPosition, newStatus) {
		if (batchDepth) {
			// if we are in a batch, the transaction can't close, so we do the faster,
			// but non-deterministic updates, knowing that the write thread can
			// just poll for the status change if we miss a status update
			let writeStatus = uint32[flagPosition];
			uint32[flagPosition] = newStatus;
			return writeStatus;
			//return Atomics.or(uint32, flagPosition, newStatus)
		} else // otherwise the transaction could end at any time and we need to know the
			// deterministically if it is ending, so we can reset the commit promise
			// so we use the slower atomic operation
			return Atomics.or(uint32, flagPosition, newStatus);
	}
	function afterCommit() {
		for (let i = 0, l = afterCommitCallbacks.length; i < l; i++) {
			afterCommitCallbacks[i]({ next: uncommittedResolution, last: unwrittenResolution});
		}
	}
	async function executeTxnCallbacks() {
		env.writeTxn = writeTxn = { write: true };
		//this.emit('begin-transaction');
		let promises;
		let txnCallbacks;
		for (let i = 0, l = nextTxnCallbacks.length; i < l; i++) {
			txnCallbacks = nextTxnCallbacks[i];
			for (let i = 0, l = txnCallbacks.length; i < l; i++) {
				let userTxnCallback = txnCallbacks[i];
				let asChild = userTxnCallback.asChild;
				if (asChild) {
					if (promises) {
						// must complete any outstanding transactions before proceeding
						await Promise.all(promises);
						promises = null;
					}
					env.beginTxn(1); // abortable
					let parentTxn = writeTxn;
					env.writeTxn = writeTxn = { write: true };
					try {
						let result = userTxnCallback.callback();
						if (result && result.then) {
							await result;
						}
						if (result === ABORT)
							env.abortTxn();
						else
							env.commitTxn();
						clearWriteTxn(parentTxn);
						txnCallbacks[i] = result;
					} catch(error) {
						clearWriteTxn(parentTxn);
						env.abortTxn();
						txnError(error, i);
					}
				} else {
					try {
						let result = userTxnCallback();
						txnCallbacks[i] = result;
						if (result && result.then) {
							if (!promises)
								promises = [];
							promises.push(result.catch(() => {}));
						}
					} catch(error) {
						txnError(error, i);
					}
				}
			}
		}
		nextTxnCallbacks = [];
		if (promises) { // finish any outstanding commit functions
			await Promise.all(promises);
		}
		clearWriteTxn(null);
		function txnError(error, i) {
			(txnCallbacks.errors || (txnCallbacks.errors = []))[i] = error;
			txnCallbacks[i] = CALLBACK_THREW;
		}
	}
	function finishBatch() {
		dynamicBytes.uint32[(dynamicBytes.position + 1) << 1] = 0; // clear out the next slot
		let writeStatus = atomicStatus(dynamicBytes.uint32, (dynamicBytes.position++) << 1, 2); // atomically write the end block
		nextResolution.flagPosition += 2;
		if (writeStatus & WAITING_OPERATION) {
			write(env.address, 0);
		}
	}
	function clearWriteTxn(parentTxn) {
		// TODO: We might actually want to track cursors in a write txn and manually
		// close them.
		if (writeTxn.cursorCount > 0)
			writeTxn.isDone = true;
		env.writeTxn = writeTxn = parentTxn || null;
	}
	Object.assign(LMDBStore.prototype, {
		put(key, value, versionOrOptions, ifVersion) {
			let callback, flags = 15, type = typeof versionOrOptions;
			if (type == 'object') {
				if (versionOrOptions.noOverwrite)
					flags |= 0x10;
				if (versionOrOptions.noDupData)
					flags |= 0x20;
				if (versionOrOptions.append)
					flags |= 0x20000;
				if (versionOrOptions.ifVersion != undefined)
					ifVersion = versionsOrOptions.ifVersion;
				versionOrOptions = versionOrOptions.version;
				if (typeof ifVersion == 'function')
					callback = ifVersion;
			} else if (type == 'function') {
				callback = versionOrOptions;
			}
			return writeInstructions(flags, this, key, value, this.useVersions ? versionOrOptions || 0 : undefined, ifVersion)(callback);
		},
		remove(key, ifVersionOrValue, callback) {
			let flags = 13;
			let ifVersion, value;
			if (ifVersionOrValue !== undefined) {
				if (typeof ifVersionOrValue == 'function')
					callback = ifVersionOrValue;
				else if (ifVersionOrValue === IF_EXISTS && !callback)
					// we have a handler for IF_EXISTS in the callback handler for remove
					callback = ifVersionOrValue;
				else if (this.useVersions)
					ifVersion = ifVersionOrValue;
				else {
					flags = 14;
					value = ifVersionOrValue;
				}
			}
			return writeInstructions(flags, this, key, value, undefined, ifVersion)(callback);
		},
		del(key, options, callback) {
			return this.remove(key, options, callback);
		},
		ifNoExists(key, callback) {
			return this.ifVersion(key, null, callback);
		},

		ifVersion(key, version, callback) {
			if (!callback) {
				return new Batch((operations, callback) => {
					let promise = this.ifVersion(key, version, operations);
					if (callback)
						promise.then(callback);
					return promise;
				});
			}
			if (writeTxn) {
				if (version === undefined || this.doesExist(key, version)) {
					callback();
					return SYNC_PROMISE_SUCCESS;
				}
				return SYNC_PROMISE_FAIL;
			}
			let finishStartWrite = writeInstructions(key === undefined || version === undefined ? 1 : 4, this, key, undefined, undefined, version);
			let promise;
			batchDepth += 2;
			if (batchDepth > 2)
				promise = finishStartWrite();
			else {
				writeBatchStart = () => {
					promise = finishStartWrite();
				};
				outstandingBatchCount = 0;
			}
			try {
				if (typeof callback === 'function') {
					callback();
				} else {
					for (let i = 0, l = callback.length; i < l; i++) {
						let operation = callback[i];
						this[operation.type](operation.key, operation.value);
					}
				}
			} finally {
				if (!promise) {
					finishBatch();
					batchDepth -= 2;
					promise = finishStartWrite(); // finish write once all the operations have been written (and it hasn't been written prematurely)
					writeBatchStart = null;
				} else {
					batchDepth -= 2;
					finishBatch();
				}
			}
			return promise;
		},
		batch(callbackOrOperations) {
			return this.ifVersion(undefined, undefined, callbackOrOperations);
		},
		drop(callback) {
			return writeInstructions(1024 + 12, this, undefined, undefined, undefined, undefined)(callback);
		},
		clearAsync(callback) {
			if (this.encoder) {
				if (this.encoder.clearSharedData)
					this.encoder.clearSharedData();
				else if (this.encoder.structures)
					this.encoder.structures = [];
			}
			return writeInstructions(12, this, undefined, undefined, undefined, undefined)(callback);
		},
		_triggerError() {
			finishBatch();
		},

		putSync(key, value, versionOrOptions, ifVersion) {
			if (writeTxn)
				return this.put(key, value, versionOrOptions, ifVersion);
			else
				return this.transactionSync(() =>
					this.put(key, value, versionOrOptions, ifVersion) == SYNC_PROMISE_SUCCESS, overlappingSync? 0x10002 : 2); // non-abortable, async flush
		},
		removeSync(key, ifVersionOrValue) {
			if (writeTxn)
				return this.remove(key, ifVersionOrValue);
			else
				return this.transactionSync(() =>
					this.remove(key, ifVersionOrValue) == SYNC_PROMISE_SUCCESS, overlappingSync? 0x10002 : 2); // non-abortable, async flush
		},
		transaction(callback) {
			if (writeTxn) {
				// already nested in a transaction, just execute and return
				return callback();
			}
			return this.transactionAsync(callback);
		},
		childTransaction(callback) {
			if (useWritemap)
				throw new Error('Child transactions are not supported in writemap mode');
			if (writeTxn) {
				let parentTxn = writeTxn;
				env.writeTxn = writeTxn = { write: true };
				env.beginTxn(1); // abortable
				let callbackDone;
				try {
					return when(callback(), (result) => {
						callbackDone = true;
						if (result === ABORT)
							env.abortTxn();
						else
							env.commitTxn();
						clearWriteTxn(parentTxn);
						return result;
					}, (error) => {
						env.abortTxn();
						clearWriteTxn(parentTxn);
						throw error;
					});
				} catch(error) {
					if (!callbackDone)
						env.abortTxn();
					clearWriteTxn(parentTxn);
					throw error;
				}
			}
			return this.transactionAsync(callback, true);
		},
		transactionAsync(callback, asChild) {
			let txnIndex;
			let txnCallbacks;
			if (!nextResolution.callbacks) {
				txnCallbacks = [asChild ? { callback, asChild } : callback];
				nextResolution.callbacks = txnCallbacks;
				txnCallbacks.results = writeInstructions(8 | (this.strictAsyncOrder ? 0x100000 : 0), this)();
				txnIndex = 0;
			} else {
				txnCallbacks = lastQueuedResolution.callbacks;
				txnIndex = txnCallbacks.push(asChild ? { callback, asChild } : callback) - 1;
			}
			return txnCallbacks.results.then((results) => {
				let result = txnCallbacks[txnIndex];
				if (result === CALLBACK_THREW)
					throw txnCallbacks.errors[txnIndex];
				return result;
			});
		},
		transactionSync(callback, flags) {
			if (writeTxn) {
				if (!useWritemap && !this.isCaching) // can't use child transactions in write maps or caching stores
					// already nested in a transaction, execute as child transaction (if possible) and return
					return this.childTransaction(callback);
				let result = callback(); // else just run in current transaction
				if (result == ABORT && !abortedNonChildTransactionWarn) {
					console.warn('Can not abort a transaction inside another transaction with ' + (this.cache ? 'caching enabled' : 'useWritemap enabled'));
					abortedNonChildTransactionWarn = true;
				}
				return result;
			}
			let callbackDone;
			try {
				this.transactions++;
				env.beginTxn(flags == undefined ? 3 : flags);
				writeTxn = env.writeTxn = { write: true };
				this.emit('begin-transaction');
				return when(callback(), (result) => {
					try {
						callbackDone = true;
						if (result === ABORT)
							env.abortTxn();
						else {
							env.commitTxn();
							resetReadTxn();
							if ((flags & 0x10000) && overlappingSync) // if it is no-sync in overlapping-sync mode, need to schedule flush for it to be marked as persisted
								lastSyncTxnFlush = new Promise(resolve => scheduleFlush([resolve]));
						}
						return result;
					} finally {
						clearWriteTxn(null);
					}
				}, (error) => {
					try { env.abortTxn(); } catch(e) {}
					clearWriteTxn(null);
					throw error;
				});
			} catch(error) {
				if (!callbackDone)
					try { env.abortTxn(); } catch(e) {}
				clearWriteTxn(null);
				throw error;
			}
		},
		transactionSyncStart(callback) {
			return this.transactionSync(callback, 0);
		},
		// make the db a thenable/promise-like for when the last commit is committed
		committed: committed = {
			then(onfulfilled, onrejected) {
				if (commitPromise)
					return commitPromise.then(onfulfilled, onrejected);
				if (lastWritePromise) // always resolve to true
					return lastWritePromise.then(() => onfulfilled(true), onrejected);
				return SYNC_PROMISE_SUCCESS.then(onfulfilled, onrejected);
			}
		},
		flushed: {
			// make this a thenable for when the commit is flushed to disk
			then(onfulfilled, onrejected) {
				if (flushPromise)
					flushPromise.hasCallbacks = true;
				return Promise.all([flushPromise || committed, lastSyncTxnFlush]).then(onfulfilled, onrejected);
			}
		},
		_endWrites(resolvedPromise, resolvedSyncPromise) {
			this.put = this.remove = this.del = this.batch = this.removeSync = this.putSync = this.transactionAsync = this.drop = this.clearAsync = () => { throw new Error('Database is closed') };
			// wait for all txns to finish, checking again after the current txn is done
			let finalPromise = flushPromise || commitPromise || lastWritePromise;
			if (flushPromise)
				flushPromise.hasCallbacks = true;
			if (lastFlushTimeout)
				expediteFlush();
			let finalSyncPromise = lastSyncTxnFlush;
			if (finalPromise && resolvedPromise != finalPromise ||
					finalSyncPromise && resolvedSyncPromise != finalSyncPromise) {
				return Promise.all([finalPromise, finalSyncPromise]).then(() => this._endWrites(finalPromise, finalSyncPromise), () => this._endWrites(finalPromise, finalSyncPromise));
			}
			Object.defineProperty(env, 'sync', { value: null });
		},
		on(event, callback) {
			if (event == 'beforecommit') {
				eventTurnBatching = true;
				beforeCommitCallbacks.push(callback);
			} else if (event == 'aftercommit')
				afterCommitCallbacks.push(callback);
			else
				super.on(event, callback);
		}
	});
}

class Batch extends Array {
	constructor(callback) {
		super();
		this.callback = callback;
	}
	put(key, value) {
		this.push({ type: 'put', key, value });
	}
	del(key) {
		this.push({ type: 'del', key });
	}
	clear() {
		this.splice(0, this.length);
	}
	write(callback) {
		return this.callback(this, callback);
	}
}
function asBinary(buffer) {
	return {
		['\x10binary-data\x02']: buffer
	};
}

let getLastVersion$1;
const mapGet = Map.prototype.get;
const CachingStore = (Store, env) => {
	let childTxnChanges;
	return class extends Store {
	constructor(dbName, options) {
		super(dbName, options);
		if (!env.cacheCommitter) {
			env.cacheCommitter = true;
			this.on('aftercommit', ({ next, last }) => {
				do {
					let meta = next.meta;
					let store = meta && meta.store;
					if (store) {
						if (next.flag & FAILED_CONDITION)
							store.cache.delete(meta.key); // just delete it from the map
						else {
							let expirationPriority = meta.valueSize >> 10;
							let cache = store.cache;
							let entry = mapGet.call(cache, meta.key);
							if (entry)
								cache.used(entry, expirationPriority + 4); // this will enter it into the LRFU (with a little lower priority than a read)
						}
					}
				} while (next != last && (next = next.next))
			});
		}
		this.db.cachingDb = this;
		if (options.cache.clearKeptInterval)
			options.cache.clearKeptObjects = exports.clearKeptObjects;
		this.cache = new WeakLRUCache(options.cache);
	}
	get isCaching() {
		return true
	}
	get(id, cacheMode) {
		let value = this.cache.getValue(id);
		if (value !== undefined)
			return value;
		value = super.get(id);
		if (value && typeof value === 'object' && !cacheMode && typeof id !== 'object') {
			let entry = this.cache.setValue(id, value, this.lastSize >> 10);
			if (this.useVersions) {
				entry.version = getLastVersion$1();
			}
		}
		return value;
	}
	getEntry(id, cacheMode) {
		let entry = this.cache.get(id);
		if (entry)
			return entry;
		let value = super.get(id);
		if (value === undefined)
			return;
		if (value && typeof value === 'object' && !cacheMode && typeof id !== 'object') {
			entry = this.cache.setValue(id, value, this.lastSize >> 10);
		} else {
			entry = { value };
		}
		if (this.useVersions) {
			entry.version = getLastVersion$1();
		}
		return entry;
	}
	putEntry(id, entry, ifVersion) {
		let result = super.put(id, entry.value, entry.version, ifVersion);
		if (typeof id === 'object')
			return result;
		if (result && result.then)
			this.cache.setManually(id, entry); // set manually so we can keep it pinned in memory until it is committed
		else // sync operation, immediately add to cache
			this.cache.set(id, entry);
	}
	put(id, value, version, ifVersion) {
		let result = super.put(id, value, version, ifVersion);
		if (typeof id !== 'object') {
			if (value && value['\x10binary-data\x02']) {
				// don't cache binary data, since it will be decoded on get
				this.cache.delete(id);
				return result;
			}	
			// sync operation, immediately add to cache, otherwise keep it pinned in memory until it is committed
			let entry = this.cache.setValue(id, value, !result || result.isSync ? 0 : -1);
			if (childTxnChanges)
				childTxnChanges.add(id);
			if (version !== undefined)
				entry.version = typeof version === 'object' ? version.version : version;
		}
		return result;
	}
	putSync(id, value, version, ifVersion) {
		if (id !== 'object') {
			// sync operation, immediately add to cache, otherwise keep it pinned in memory until it is committed
			if (value && typeof value === 'object') {
				let entry = this.cache.setValue(id, value);
				if (childTxnChanges)
					childTxnChanges.add(id);
				if (version !== undefined) {
					entry.version = typeof version === 'object' ? version.version : version;
				}
			} else // it is possible that  a value used to exist here
				this.cache.delete(id);
		}
		return super.putSync(id, value, version, ifVersion);
	}
	remove(id, ifVersion) {
		this.cache.delete(id);
		return super.remove(id, ifVersion);
	}
	removeSync(id, ifVersion) {
		this.cache.delete(id);
		return super.removeSync(id, ifVersion);
	}
	clearAsync(callback) {
		this.cache.clear();
		return super.clearAsync(callback);
	}
	clearSync() {
		this.cache.clear();
		super.clearSync();
	}
	childTransaction(callback) {
		return super.childTransaction(() => {
			let cache = this.cache;
			let previousChanges = childTxnChanges;
			try {
				childTxnChanges = new Set();
				return when(callback(), (result) => {
					if (result === ABORT)
						return abort();
					childTxnChanges = previousChanges;
					return result;
				}, abort);
			} catch(error) {
				abort(error);
			}
			function abort(error) {
				// if the transaction was aborted, remove all affected entries from cache
				for (let id of childTxnChanges)
					cache.delete(id);
				childTxnChanges = previousChanges;
				if (error)
					throw error;
			}
		});
	}
	};
};
function setGetLastVersion(get) {
	getLastVersion$1 = get;
}

const SKIP = {};
if (!Symbol.asyncIterator) {
	Symbol.asyncIterator = Symbol.for('Symbol.asyncIterator');
}

class RangeIterable {
	constructor(sourceArray) {
		if (sourceArray) {
			this.iterate = sourceArray[Symbol.iterator].bind(sourceArray);
		}
	}
	map(func) {
		let source = this;
		let result = new RangeIterable();
		result.iterate = (async) => {
			let iterator = source[Symbol.iterator](async);
			return {
				next(resolvedResult) {
					let result;
					do {
						let iteratorResult;
						if (resolvedResult) {
							iteratorResult = resolvedResult;
							resolvedResult = null; // don't go in this branch on next iteration
						} else {
							iteratorResult = iterator.next();
							if (iteratorResult.then) {
								return iteratorResult.then(iteratorResult => this.next(iteratorResult));
							}
						}
						if (iteratorResult.done === true) {
							this.done = true;
							return iteratorResult;
						}
						result = func(iteratorResult.value);
						if (result && result.then) {
							return result.then(result =>
								result == SKIP ?
									this.next() :
									{
										value: result
									});
						}
					} while(result == SKIP)
					return {
						value: result
					};
				},
				return() {
					return iterator.return();
				},
				throw() {
					return iterator.throw();
				}
			};
		};
		return result;
	}
	[Symbol.asyncIterator]() {
		return this.iterator = this.iterate();
	}
	[Symbol.iterator]() {
		return this.iterator = this.iterate();
	}
	filter(func) {
		return this.map(element => func(element) ? element : SKIP);
	}

	forEach(callback) {
		let iterator = this.iterator = this.iterate();
		let result;
		while ((result = iterator.next()).done !== true) {
			callback(result.value);
		}
	}
	concat(secondIterable) {
		let concatIterable = new RangeIterable();
		concatIterable.iterate = (async) => {
			let iterator = this.iterator = this.iterate();
			let isFirst = true;
			let concatIterator = {
				next() {
					let result = iterator.next();
					if (isFirst && result.done) {
						isFirst = false;
						iterator = secondIterable[Symbol.iterator](async);
						return iterator.next();
					}
					return result;
				},
				return() {
					return iterator.return();
				},
				throw() {
					return iterator.throw();
				}
			};
			return concatIterator;
		};
		return concatIterable;
	}
	next() {
		if (!this.iterator)
			this.iterator = this.iterate();
		return this.iterator.next();
	}
	toJSON() {
		if (this.asArray && this.asArray.forEach) {
			return this.asArray;
		}
		throw new Error('Can not serialize async iteratables without first calling resolveJSON');
		//return Array.from(this)
	}
	get asArray() {
		if (this._asArray)
			return this._asArray;
		let promise = new Promise((resolve, reject) => {
			let iterator = this.iterate();
			let array = [];
			let iterable = this;
			function next(result) {
				while (result.done !== true) {
					if (result.then) {
						return result.then(next);
					} else {
						array.push(result.value);
					}
					result = iterator.next();
				}
				array.iterable = iterable;
				resolve(iterable._asArray = array);
			}
			next(iterator.next());
		});
		promise.iterable = this;
		return this._asArray || (this._asArray = promise);
	}
	resolveData() {
		return this.asArray;
	}
}

const writeUint32Key = (key, target, start) => {
	(target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length))).setUint32(start, key, true);
	return start + 4;
};
const readUint32Key = (target, start) => {
	return (target.dataView || (target.dataView = new DataView(target.buffer, 0, target.length))).getUint32(start, true);
};
const writeBufferKey = (key, target, start) => {
	target.set(key, start);
	return key.length + start;
};
const Uint8ArraySlice$1 = Uint8Array.prototype.slice;
const readBufferKey = (target, start, end) => {
	return Uint8ArraySlice$1.call(target, start, end);
};

function applyKeyHandling(store) {
 	if (store.encoding == 'ordered-binary') {
		store.encoder = store.decoder = {
			writeKey: orderedBinary.writeKey,
			readKey: orderedBinary.readKey,
		};
	}
	if (store.encoder && store.encoder.writeKey && !store.encoder.encode) {
		store.encoder.encode = function(value) {
			return saveKey(value, this.writeKey, false, store.maxKeySize);
		};
	}
	if (store.decoder && store.decoder.readKey && !store.decoder.decode) {
		store.decoder.decode = function(buffer) { return this.readKey(buffer, 0, buffer.length); };
		store.decoderCopies = true;
	}
	if (store.keyIsUint32 || store.keyEncoding == 'uint32') {
		store.writeKey = writeUint32Key;
		store.readKey = readUint32Key;
	} else if (store.keyIsBuffer || store.keyEncoding == 'binary') {
		store.writeKey = writeBufferKey;
		store.readKey = readBufferKey;
	} else if (store.keyEncoder) {
		store.writeKey = store.keyEncoder.writeKey;
		store.readKey = store.keyEncoder.readKey;
	} else {
		store.writeKey = orderedBinary.writeKey;
		store.readKey = orderedBinary.readKey;
	}
}

let saveBuffer, saveDataView = { setFloat64() {}, setUint32() {} }, saveDataAddress;
let savePosition = 8000;
let DYNAMIC_KEY_BUFFER_SIZE = 8192;
function allocateSaveBuffer() {
	saveBuffer = typeof Buffer != 'undefined' ? Buffer.alloc(DYNAMIC_KEY_BUFFER_SIZE) : new Uint8Array(DYNAMIC_KEY_BUFFER_SIZE);
	saveBuffer.buffer.address = getAddress(saveBuffer);
	saveDataAddress = saveBuffer.buffer.address;
	// TODO: Conditionally only do this for key sequences?
	saveDataView.setUint32(savePosition, 0xffffffff);
	saveDataView.setFloat64(savePosition + 4, saveDataAddress, true); // save a pointer from the old buffer to the new address for the sake of the prefetch sequences
	saveBuffer.dataView = saveDataView = new DataView(saveBuffer.buffer, saveBuffer.byteOffset, saveBuffer.byteLength);
	savePosition = 0;
}
function saveKey(key, writeKey, saveTo, maxKeySize) {
	if (savePosition > 7800) {
		allocateSaveBuffer();
	}
	let start = savePosition;
	try {
		savePosition = key === undefined ? start + 4 :
			writeKey(key, saveBuffer, start + 4);
	} catch (error) {
		saveBuffer.fill(0, start + 4); // restore zeros
		if (error.name == 'RangeError') {
			if (8180 - start < maxKeySize) {
				allocateSaveBuffer(); // try again:
				return saveKey(key, writeKey, saveTo, maxKeySize);
			}
			throw new Error('Key was too large, max key size is ' + maxKeySize);
		} else
			throw error;
	}
	let length = savePosition - start - 4;
	if (length > maxKeySize) {
		throw new Error('Key of size ' + length + ' was too large, max key size is ' + maxKeySize);
	}
	if (savePosition >= 8160) { // need to reserve enough room at the end for pointers
		savePosition = start; // reset position
		allocateSaveBuffer(); // try again:
		return saveKey(key, writeKey, saveTo, maxKeySize);
	}
	if (saveTo) {
		saveDataView.setUint32(start, length, true); // save the length
		saveTo.saveBuffer = saveBuffer;
		savePosition = (savePosition + 12) & 0xfffffc;
		return start + saveDataAddress;
	} else {
		saveBuffer.start = start + 4;
		saveBuffer.end = savePosition;
		savePosition = (savePosition + 7) & 0xfffff8; // full 64-bit word alignment since these are usually copied
		return saveBuffer;
	}
}

const ITERATOR_DONE = { done: true, value: undefined };
const Uint8ArraySlice = Uint8Array.prototype.slice;
const Uint8A = typeof Buffer != 'undefined' ? Buffer.allocUnsafeSlow : Uint8Array;
let getValueBytes = makeReusableBuffer(0);
const START_ADDRESS_POSITION = 4064;
const NEW_BUFFER_THRESHOLD = 0x8000;

function addReadMethods(LMDBStore, {
	maxKeySize, env, keyBytes, keyBytesView, getLastVersion
}) {
	let readTxn, readTxnRenewed, asSafeBuffer = false;
	let renewId = 1;
	Object.assign(LMDBStore.prototype, {
		getString(id) {
			(env.writeTxn || (readTxnRenewed ? readTxn : renewReadTxn(this)));
			let string = getStringByBinary(this.dbAddress, this.writeKey(id, keyBytes, 0));
			if (typeof string === 'number') { // indicates the buffer wasn't large enough
				this._allocateGetBuffer(string);
				// and then try again
				string = getStringByBinary(this.dbAddress, this.writeKey(id, keyBytes, 0));
			}
			if (string)
				this.lastSize = string.length;
			return string;
		},
		getBinaryFast(id) {
			(env.writeTxn || (readTxnRenewed ? readTxn : renewReadTxn(this)));
			let rc = this.lastSize = getByBinary(this.dbAddress, this.writeKey(id, keyBytes, 0));
			if (rc < 0) {
				if (rc == -30798) // MDB_NOTFOUND
					return; // undefined
				if (rc == -30781 /*MDB_BAD_VALSIZE*/ && this.writeKey(id, keyBytes, 0) == 0)
					throw new Error(id === undefined ?
					'A key is required for get, but is undefined' :
					'Zero length key is not allowed in LMDB');
				if (rc == -30000) // int32 overflow, read uint32
					rc = this.lastSize = keyBytesView.getUint32(0, true);
				else
					throw lmdbError(rc);
			}
			let compression = this.compression;
			let bytes = compression ? compression.getValueBytes : getValueBytes;
			if (rc > bytes.maxLength) {
				// this means the target buffer wasn't big enough, so the get failed to copy all the data from the database, need to either grow or use special buffer
				return this._returnLargeBuffer(
					() => getByBinary(this.dbAddress, this.writeKey(id, keyBytes, 0)),
					() => getSharedByBinary(this.dbAddress, this.writeKey(id, keyBytes, 0)));
			}
			bytes.length = this.lastSize;
			return bytes;
		},
		_returnLargeBuffer(getFast, getShared) {
			let bytes;
			let compression = this.compression;
			if (asSafeBuffer && this.lastSize > NEW_BUFFER_THRESHOLD) {
				// used by getBinary to indicate it should create a dedicated buffer to receive this
				let bytesToRestore;
				try {
					if (compression) {
						bytesToRestore = compression.getValueBytes;
						let dictionary = compression.dictionary || [];
						let dictLength = (dictionary.length >> 3) << 3;// make sure it is word-aligned
						bytes = makeReusableBuffer(this.lastSize);
						compression.setBuffer(bytes, this.lastSize, dictionary, dictLength);
						compression.getValueBytes = bytes;
					} else {
						bytesToRestore = getValueBytes;
						setGlobalBuffer(bytes = getValueBytes = makeReusableBuffer(this.lastSize));
					}
					getFast();
				} finally {
					if (compression) {
						let dictLength = (compression.dictionary.length >> 3) << 3;
						compression.setBuffer(bytesToRestore, bytesToRestore.maxLength, compression.dictionary, dictLength);
						compression.getValueBytes = bytesToRestore;
					} else {
						setGlobalBuffer(bytesToRestore);
						getValueBytes = bytesToRestore;
					}
				}
				return bytes;
			}
			if (this.lastSize > NEW_BUFFER_THRESHOLD && !compression) {
				// for large binary objects, cheaper to make a buffer that directly points at the shared LMDB memory to avoid copying a large amount of memory, but only for large data since there is significant overhead to instantiating the buffer
				if (globalThis.__lmdb_last_shared__ && detachBuffer) // we have to detach the last one, or else could crash due to two buffers pointing at same location
					detachBuffer(globalThis.__lmdb_last_shared__.buffer);
				return globalThis.__lmdb_last_shared__ = getShared();
			}
			// grow our shared/static buffer to accomodate the size of the data
			bytes = this._allocateGetBuffer(this.lastSize);
			// and try again
			getFast();
			bytes.length = this.lastSize;
			return bytes;
		},
		_allocateGetBuffer(lastSize) {
			let newLength = Math.min(Math.max(lastSize * 2, 0x1000), 0xfffffff8);
			let bytes;
			if (this.compression) {
				let dictionary = this.compression.dictionary || new Uint8A(0);
				let dictLength = (dictionary.length >> 3) << 3;// make sure it is word-aligned
				bytes = new Uint8A(newLength + dictLength);
				bytes.set(dictionary); // copy dictionary into start
				// the section after the dictionary is the target area for get values
				bytes = bytes.subarray(dictLength);
				this.compression.setBuffer(bytes, newLength, dictionary, dictLength);
				bytes.maxLength = newLength;
				Object.defineProperty(bytes, 'length', { value: newLength, writable: true, configurable: true });
				this.compression.getValueBytes = bytes;
			} else {
				bytes = makeReusableBuffer(newLength);
				setGlobalBuffer(getValueBytes = bytes);
			}
			bytes.isShared = true;
			return bytes;
		},
		getBinary(id) {
			try {
				asSafeBuffer = true;
				let fastBuffer = this.getBinaryFast(id);
				return fastBuffer && (fastBuffer.isShared ? Uint8ArraySlice.call(fastBuffer, 0, this.lastSize) : fastBuffer);
			} finally {
				asSafeBuffer = false;
			}
		},
		get(id) {
			if (this.decoderCopies) {
				// the decoder copies any data, so we can use the fast binary retrieval that overwrites the same buffer space
				let bytes = this.getBinaryFast(id);
				return bytes && this.decoder.decode(bytes);
			}
			if (this.encoding == 'binary')
				return this.getBinary(id);
			if (this.decoder) {
				// the decoder potentially uses the data from the buffer in the future and needs a stable buffer
				let bytes = this.getBinary(id);
				return bytes && this.decoder.decode(bytes);
			}

			let result = this.getString(id);
			if (result) {
				if (this.encoding == 'json')
					return JSON.parse(result);
			}
			return result;
		},
		getEntry(id) {
			let value = this.get(id);
			if (value !== undefined) {
				if (this.useVersions)
					return {
						value,
						version: getLastVersion(),
						//size: this.lastSize
					};
				else
					return {
						value,
						//size: this.lastSize
					};
			}
		},
		resetReadTxn() {
			resetReadTxn();
		},
		_commitReadTxn() {
			if (readTxn)
				readTxn.commit();
			readTxnRenewed = null;
			readTxn = null;
		},
		ensureReadTxn() {
			if (!env.writeTxn && !readTxnRenewed)
				renewReadTxn(this);
		},
		doesExist(key, versionOrValue) {
			if (!env.writeTxn)
				readTxnRenewed ? readTxn : renewReadTxn(this);
			if (versionOrValue == null) {
				// undefined means the entry exists, null is used specifically to check for the entry *not* existing
				return (this.getBinaryFast(key) === undefined) == (versionOrValue === null);
			}
			else if (this.useVersions) {
				this.getBinaryFast(key);
				return this.getBinaryFast(key) !== undefined && getLastVersion() === versionOrValue;
			}
			else {
				if (versionOrValue && versionOrValue['\x10binary-data\x02'])
					versionOrValue = versionOrValue['\x10binary-data\x02'];
				else if (this.encoder)
					versionOrValue = this.encoder.encode(versionOrValue);
				if (typeof versionOrValue == 'string')
					versionOrValue = Buffer.from(versionOrValue);
				return this.getValuesCount(key, { start: versionOrValue, exactMatch: true}) > 0;
			}
		},
		getValues(key, options) {
			let defaultOptions = {
				key,
				valuesForKey: true
			};
			if (options && options.snapshot === false)
				throw new Error('Can not disable snapshots for getValues');
			return this.getRange(options ? Object.assign(defaultOptions, options) : defaultOptions);
		},
		getKeys(options) {
			if (!options)
				options = {};
			options.values = false;
			return this.getRange(options);
		},
		getCount(options) {
			if (!options)
				options = {};
			options.onlyCount = true;
			return this.getRange(options).iterate();
		},
		getKeysCount(options) {
			if (!options)
				options = {};
			options.onlyCount = true;
			options.values = false;
			return this.getRange(options).iterate();
		},
		getValuesCount(key, options) {
			if (!options)
				options = {};
			options.key = key;
			options.valuesForKey = true;
			options.onlyCount = true;
			return this.getRange(options).iterate();
		},
		getRange(options) {
			let iterable = new RangeIterable();
			if (!options)
				options = {};
			let includeValues = options.values !== false;
			let includeVersions = options.versions;
			let valuesForKey = options.valuesForKey;
			let limit = options.limit;
			let db = this.db;
			let snapshot = options.snapshot;
			let compression = this.compression;
			iterable.iterate = () => {
				let currentKey = valuesForKey ? options.key : options.start;
				const reverse = options.reverse;
				let count = 0;
				let cursor, cursorRenewId, cursorAddress;
				let txn;
				let flags = (includeValues ? 0x100 : 0) | (reverse ? 0x400 : 0) |
					(valuesForKey ? 0x800 : 0) | (options.exactMatch ? 0x4000 : 0);
				let store = this;
				function resetCursor() {
					try {
						if (cursor)
							finishCursor();
						let writeTxn = env.writeTxn;
						if (writeTxn)
							snapshot = false;
						txn = writeTxn || (readTxnRenewed ? readTxn : renewReadTxn(store));
						cursor = !writeTxn && db.availableCursor;
						if (cursor) {
							db.availableCursor = null;
							flags |= 0x2000;
						} else {
							cursor = new Cursor(db);
						}
						cursorAddress = cursor.address;
						txn.cursorCount = (txn.cursorCount || 0) + 1; // track transaction so we always use the same one
						if (snapshot === false) {
							cursorRenewId = renewId; // use shared read transaction
							txn.renewingCursorCount = (txn.renewingCursorCount || 0) + 1; // need to know how many are renewing cursors
						}
					} catch(error) {
						if (cursor) {
							try {
								cursor.close();
							} catch(error) { }
						}
						throw error;
					}
				}
				resetCursor();
				if (options.onlyCount) {
					flags |= 0x1000;
					let count = position$1(options.offset);
					if (count < 0)
						lmdbError(count);
					finishCursor();
					return count;
				}
				function position$1(offset) {
					let keySize = currentKey === undefined ? 0 : store.writeKey(currentKey, keyBytes, 0);
					let endAddress;
					if (valuesForKey) {
						if (options.start === undefined && options.end === undefined)
							endAddress = 0;
						else {
							let startAddress;
							if (store.encoder.writeKey) {
								startAddress = saveKey(options.start, store.encoder.writeKey, iterable, maxKeySize);
								keyBytesView.setFloat64(START_ADDRESS_POSITION, startAddress, true);
								endAddress = saveKey(options.end, store.encoder.writeKey, iterable, maxKeySize);
							} else if ((!options.start || options.start instanceof Uint8Array) && (!options.end || options.end instanceof Uint8Array)) {
								startAddress = saveKey(options.start, orderedBinary.writeKey, iterable, maxKeySize);
								keyBytesView.setFloat64(START_ADDRESS_POSITION, startAddress, true);
								endAddress = saveKey(options.end, orderedBinary.writeKey, iterable, maxKeySize);
							} else {
								throw new Error('Only key-based encoding is supported for start/end values');
							}
						}
					} else
						endAddress = saveKey(options.end, store.writeKey, iterable, maxKeySize);
					return position(cursorAddress, flags, offset || 0, keySize, endAddress);
				}

				function finishCursor() {
					if (txn.isDone)
						return;
					if (cursorRenewId)
						txn.renewingCursorCount--;
					if (--txn.cursorCount <= 0 && txn.onlyCursor) {
						cursor.close();
						txn.abort(); // this is no longer main read txn, abort it now that we are done
						txn.isDone = true;
					} else {
						if (db.availableCursor || txn != readTxn) {
							cursor.close();
						} else { // try to reuse it
							db.availableCursor = cursor;
							db.cursorTxn = txn;
						}
					}
				}
				return {
					next() {
						let keySize, lastSize;
						if (cursorRenewId && (cursorRenewId != renewId || txn.isDone)) {
							resetCursor();
							keySize = position$1(0);
						}
						if (count === 0) { // && includeValues) // on first entry, get current value if we need to
							keySize = position$1(options.offset);
						} else
							keySize = iterate(cursorAddress);
						if (keySize <= 0 ||
								(count++ >= limit)) {
							if (count < 0)
								lmdbError(count);				
							finishCursor();
							return ITERATOR_DONE;
						}
						if (!valuesForKey || snapshot === false) {
							if (keySize > 20000) {
								if (keySize > 0x1000000)
									lmdbError(keySize - 0x100000000);
								throw new Error('Invalid key size ' + keySize.toString(16))
							}
							currentKey = store.readKey(keyBytes, 32, keySize + 32);
						}
						if (includeValues) {
							let value;
							lastSize = keyBytesView.getUint32(0, true);
							let bytes = compression ? compression.getValueBytes : getValueBytes;
							if (lastSize > bytes.maxLength) {
								store.lastSize = lastSize;
								asSafeBuffer = store.encoding == 'binary';
								try {
									bytes = store._returnLargeBuffer(
										() => getCurrentValue(cursorAddress),
										() => getCurrentShared(cursorAddress)
									);
								} finally {
									asSafeBuffer = false;
								}
							} else
								bytes.length = lastSize;
							if (store.decoder) {
								value = store.decoder.decode(bytes, lastSize);
							} else if (store.encoding == 'binary')
								value = bytes.isShared ? Uint8ArraySlice.call(bytes, 0, lastSize) : bytes;
							else {
								value = bytes.toString('utf8', 0, lastSize);
								if (store.encoding == 'json' && value)
									value = JSON.parse(value);
							}
							if (includeVersions)
								return {
									value: {
										key: currentKey,
										value,
										version: getLastVersion()
									}
								};
 							else if (valuesForKey)
								return {
									value
								};
							else
								return {
									value: {
										key: currentKey,
										value,
									}
								};
						} else if (includeVersions) {
							return {
								value: {
									key: currentKey,
									version: getLastVersion()
								}
							};
						} else {
							return {
								value: currentKey
							};
						}
					},
					return() {
						finishCursor();
						return ITERATOR_DONE;
					},
					throw() {
						finishCursor();
						return ITERATOR_DONE;
					}
				};
			};
			return iterable;
		},

		getMany(keys, callback) {
			// this is an asynchronous get for multiple keys. It actually works by prefetching asynchronously,
			// allowing a separate to absorb the potentially largest cost: hard page faults (and disk I/O).
			// And then we just do standard sync gets (to deserialized data) to fulfil the callback/promise
			// once the prefetch occurs
			let promise = callback ? undefined : new Promise(resolve => callback = (error, results) => resolve(results));
			this.prefetch(keys, () => {
				let results = new Array(keys.length);
				for (let i = 0, l = keys.length; i < l; i++) {
					results[i] = get.call(this, keys[i]);
				}
				callback(null, results);
			});
			return promise;
		},
		getSharedBufferForGet(id) {
			let txn = (env.writeTxn || (readTxnRenewed ? readTxn : renewReadTxn(this)));
			this.lastSize = this.keyIsCompatibility ? txn.getBinaryShared(id) : this.db.get(this.writeKey(id, keyBytes, 0));
			if (this.lastSize === -30798) { // not found code
				return; //undefined
			}
			return this.lastSize;
		},
		prefetch(keys, callback) {
			if (!keys)
				throw new Error('An array of keys must be provided');
			if (!keys.length) {
				if (callback) {
					callback(null);
					return;
				} else
					return Promise.resolve();
			}
			let buffers = [];
			let startPosition;
			let bufferHolder = {};
			let lastBuffer;
			for (let key of keys) {
				let position = saveKey(key, this.writeKey, bufferHolder, maxKeySize);
				if (!startPosition)
					startPosition = position;
				if (bufferHolder.saveBuffer != lastBuffer) {
					buffers.push(bufferHolder);
					lastBuffer = bufferHolder.saveBuffer;
					bufferHolder = { saveBuffer: lastBuffer };
				}
			}
			saveKey(undefined, this.writeKey, bufferHolder, maxKeySize);
			prefetch(this.dbAddress, startPosition, (error) => {
				if (error)
					console.error('Error with prefetch', buffers, bufferHolder); // partly exists to keep the buffers pinned in memory
				else
					callback(null);
			});
			if (!callback)
				return new Promise(resolve => callback = resolve);
		},
		close(callback) {
			this.status = 'closing';
			if (this.isRoot) {
				if (readTxn) {
					try {
						readTxn.abort();
					} catch(error) {}
				}
				readTxn = {
					renew() {
						throw new Error('Can not read from a closed database');
					}
				};
				readTxnRenewed = null;
			}
			let txnPromise = this._endWrites();
			const doClose = () => {
				this.db.close();
				if (this.isRoot) {
					env.close();
				}
				this.status = 'closed';
				if (callback)
					callback();
			};
			if (txnPromise)
				return txnPromise.then(doClose);
			else {
				doClose();
				return Promise.resolve();
			}
		},
		getStats() {
			readTxnRenewed ? readTxn : renewReadTxn(this);
			return this.db.stat();
		}
	});
	let get = LMDBStore.prototype.get;
	function renewReadTxn(store) {
		if (!readTxn) {
			let retries = 0;
			let waitArray;
			do {
				try {
					readTxn = new Txn(env, 0x20000);
					break;
				} catch (error) {
					if (error.message.includes('temporarily')) {
						if (!waitArray)
							waitArray = new Int32Array(new SharedArrayBuffer(4), 0, 1);
						Atomics.wait(waitArray, 0, 0, retries * 2);
					} else
						throw error;
				}
			} while (retries++ < 100);
		}
		// we actually don't renew here, we let the renew take place in the next 
		// lmdb native read/call so as to avoid an extra native call
		readTxnRenewed = setTimeout(resetReadTxn, 0);
		store.emit('begin-transaction');
		return readTxn;
	}
	function resetReadTxn(hardReset) {
		renewId++;
		if (readTxnRenewed) {
			readTxnRenewed = null;
			if (readTxn.cursorCount - (readTxn.renewingCursorCount || 0) > 0) {
				readTxn.onlyCursor = true;
				readTxn = null;
			} else
				resetTxn(readTxn.address);
		}
	}
}
function makeReusableBuffer(size) {
	let bytes = typeof Buffer != 'undefined' ? Buffer.alloc(size) : new Uint8Array(size);
	bytes.maxLength = size;
	Object.defineProperty(bytes, 'length', { value: size, writable: true, configurable: true });
	return bytes;
}

let moduleRequire = typeof require == 'function' && require;
function setRequire(require) {
	moduleRequire = require;
}

setGetLastVersion(getLastVersion);
let keyBytes, keyBytesView;
const { onExit, getEnvsPointer, setEnvsPointer, getEnvFlags, setJSFlags } = nativeAddon;
if (globalThis.__lmdb_envs__)
	setEnvsPointer(globalThis.__lmdb_envs__);
else
	globalThis.__lmdb_envs__ = getEnvsPointer();

// this is hard coded as an upper limit because it is important assumption of the fixed buffers in writing instructions
// this corresponds to the max key size for 8KB pages
const MAX_KEY_SIZE = 4026;
const DEFAULT_COMMIT_DELAY = 0;

const allDbs = new Map();
let defaultCompression;
let hasRegisteredOnExit;
function open(path$1, options) {
	if (!keyBytes) // TODO: Consolidate get buffer and key buffer (don't think we need both)
		allocateFixedBuffer();
	if (typeof path$1 == 'object' && !options) {
		options = path$1;
		path$1 = options.path;
	}
	options = options || {};
	let userOptions = options;
	if (!path$1) {
		options = Object.assign({
			deleteOnClose: true,
			noSync: true,
		}, options);
		path$1 = tmpdir() + '/' + Math.floor(Math.random() * 2821109907455).toString(36) + '.mdb';
	} else if (!options)
		options = {};
	let extension = path.extname(path$1);
	let name = path.basename(path$1, extension);
	let is32Bit = arch().endsWith('32');
	let remapChunks = options.remapChunks || (options.mapSize ?
		(is32Bit && options.mapSize > 0x100000000) : // larger than fits in address space, must use dynamic maps
		is32Bit); // without a known map size, we default to being able to handle large data correctly/well*/
	options = Object.assign({
		path: path$1,
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
		safeRestore: process.env.LMDB_RESTORE == 'safe',
	}, options);
	if (options.asyncTransactionOrder == 'strict') {
		options.strictAsyncOrder = true;
	}

	if (!exists(options.noSubdir ? path.dirname(path$1) : path$1))
		fs.mkdirSync(options.noSubdir ? path.dirname(path$1) : path$1, { recursive: true }
		);
	function makeCompression(compressionOptions) {
		if (compressionOptions instanceof Compression)
			return compressionOptions;
		let useDefault = typeof compressionOptions != 'object';
		if (useDefault && defaultCompression)
			return defaultCompression;
		compressionOptions = Object.assign({
			threshold: 1000,
			dictionary: fs.readFileSync(new URL('./dict/dict.txt', (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('index.cjs', document.baseURI).href)).replace(/dist[\\\/]index.cjs$/, ''))),
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
		(options.remapChunks ? 0x4000000 : 0) |
		(options.safeRestore ? 0x8000000 : 0);

	let env = new Env();
	let jsFlags = (options.overlappingSync ? 0x1000 : 0) |
		(options.separateFlushed ? 1 : 0) |
		(options.deleteOnClose ? 2 : 0);
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
			let keyIsBuffer = dbOptions.keyIsBuffer;
			if (dbOptions.keyEncoding == 'uint32') {
				dbOptions.keyIsUint32 = true;
			} else if (dbOptions.keyEncoder) {
				if (dbOptions.keyEncoder.enableNullTermination) {
					dbOptions.keyEncoder.enableNullTermination();
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
			this.dbAddress = this.db.address;
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
				this.decoderCopies = !this.encoder.needsStableBuffer;
			}
			this.maxKeySize = maxKeySize;
			applyKeyHandling(this);
			allDbs.set(dbName ? name + '-' + dbName : name, this);
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
					this.encoder.clearSharedData();
				else if (this.encoder.structures)
					this.encoder.structures = [];
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
	LMDBStore.prototype.putSync;
	LMDBStore.prototype.removeSync;
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
function openAsClass(path, options) {
	if (typeof path == 'object' && !options) {
		options = path;
		path = options.path;
	}
	options = options || {};
	options.asClass = true;
	return open(path, options);
}

function getLastVersion() {
	return keyBytesView.getFloat64(16, true);
}

function setLastVersion(version) {
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

function levelup(store) {
	return Object.assign(Object.create(store), {
		get(key, options, callback) {
			let result = store.get(key);
			if (typeof options == 'function')
				callback = options;
			if (callback) {
				if (result === undefined)
					callback(new NotFoundError());
				else
					callback(null, result);
			} else {
				if (result === undefined)
					return Promise.reject(new NotFoundError());
				else
					return Promise.resolve(result);
			}
		},
	});
}
class NotFoundError extends Error {
	constructor(message) {
		super(message);
		this.name = 'NotFoundError';
		this.notFound = true;
	}
}

orderedBinary__namespace.enableNullTermination();
setExternals({
	arch: os$1.arch, fs: fs__default["default"], tmpdir: os$1.tmpdir, MsgpackrEncoder: msgpackr.Encoder, WeakLRUCache: weakLruCache.WeakLRUCache, orderedBinary: orderedBinary__namespace,
	EventEmitter: events.EventEmitter, os: os$1.platform(), onExit(callback) {
		if (process.getMaxListeners() < process.listenerCount('exit') + 8)
			process.setMaxListeners(process.listenerCount('exit') + 8);
		process.on('exit', callback);
	},
});
let { noop } = nativeAddon;
const TransactionFlags = {
	ABORTABLE: 1,
	SYNCHRONOUS_COMMIT: 2,
	NO_SYNC_FLUSH: 0x10000,
};
var index = {
	open, openAsClass, getLastVersion, compareKey: orderedBinary$1.compareKeys, keyValueToBuffer: orderedBinary$1.toBufferKey, bufferToKeyValue: orderedBinary$1.fromBufferKey, ABORT, IF_EXISTS, asBinary, levelup, TransactionFlags
};

setRequire(module$1.createRequire((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('index.cjs', document.baseURI).href))));
exports.v8AccelerationEnabled = false;

let versions = process.versions;
let [ majorVersion, minorVersion ] = versions.node.split('.');

if (versions.v8 && +majorVersion == nativeAddon.version.nodeCompiledVersion) {
	let v8Funcs = {};
	let fastApiCalls = (majorVersion == 17 || majorVersion == 18 || majorVersion == 16 && minorVersion > 6) && !process.env.DISABLE_TURBO_CALLS;
	if (fastApiCalls)
		v8.setFlagsFromString('--turbo-fast-api-calls');
	nativeAddon.enableDirectV8(v8Funcs, fastApiCalls);
	Object.assign(nativeAddon, v8Funcs);
	exports.v8AccelerationEnabled = true;
} else if (majorVersion == 14) {
	// node v14 only has ABI compatibility with node v16 for zero-arg clearKeptObjects
	let v8Funcs = {};
	nativeAddon.enableDirectV8(v8Funcs, false);
	nativeAddon.clearKeptObjects = v8Funcs.clearKeptObjects;
}
setNativeFunctions(nativeAddon);

Object.defineProperty(exports, 'bufferToKeyValue', {
	enumerable: true,
	get: function () { return orderedBinary$1.fromBufferKey; }
});
Object.defineProperty(exports, 'compareKey', {
	enumerable: true,
	get: function () { return orderedBinary$1.compareKeys; }
});
Object.defineProperty(exports, 'compareKeys', {
	enumerable: true,
	get: function () { return orderedBinary$1.compareKeys; }
});
Object.defineProperty(exports, 'keyValueToBuffer', {
	enumerable: true,
	get: function () { return orderedBinary$1.toBufferKey; }
});
exports.ABORT = ABORT;
exports.IF_EXISTS = IF_EXISTS;
exports.TransactionFlags = TransactionFlags;
exports.allDbs = allDbs;
exports.asBinary = asBinary;
exports["default"] = index;
exports.getLastVersion = getLastVersion;
exports.levelup = levelup;
exports.noop = noop;
exports.open = open;
exports.openAsClass = openAsClass;
//# sourceMappingURL=index.cjs.map
