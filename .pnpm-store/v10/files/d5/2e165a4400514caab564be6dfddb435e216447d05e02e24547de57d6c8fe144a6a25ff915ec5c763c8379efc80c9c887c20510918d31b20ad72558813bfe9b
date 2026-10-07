import { getAddress, write, compress } from './native.js';
import { when } from './util/when.js';
var backpressureArray;

const WAITING_OPERATION = 0x2000000;
const BACKPRESSURE_THRESHOLD = 100000;
const TXN_DELIMITER = 0x8000000;
const TXN_COMMITTED = 0x10000000;
const TXN_FLUSHED = 0x20000000;
const TXN_FAILED = 0x40000000;
export const FAILED_CONDITION = 0x4000000;
const REUSE_BUFFER_MODE = 512;
const RESET_BUFFER_MODE = 1024;
const NO_RESOLVE = 16;
const HAS_TXN = 8;

const SYNC_PROMISE_SUCCESS = Promise.resolve(true);
const SYNC_PROMISE_FAIL = Promise.resolve(false);
SYNC_PROMISE_SUCCESS.isSync = true;
SYNC_PROMISE_FAIL.isSync = true;
const PROMISE_SUCCESS = Promise.resolve(true);
export const ABORT = {};
export const IF_EXISTS = 3.542694326329068e-103;
const CALLBACK_THREW = {};
const LocalSharedArrayBuffer = typeof Deno != 'undefined' ? ArrayBuffer : SharedArrayBuffer; // Deno can't handle SharedArrayBuffer as an FFI argument due to https://github.com/denoland/deno/issues/12678
const ByteArray = typeof Buffer != 'undefined' ? function(buffer) { return Buffer.from(buffer) } : Uint8Array;
const queueTask = typeof setImmediate != 'undefined' ? setImmediate : setTimeout; // TODO: Or queueMicrotask?
//let debugLog = []
const WRITE_BUFFER_SIZE = 0x10000;
var log = [];
export function addWriteMethods(LMDBStore, { env, fixedBuffer, resetReadTxn, useWritemap, maxKeySize,
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
	let committedFlushResolvers, lastSync = Promise.resolve()
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
						let delay = Date.now() - start
						scheduleFlush(resolvers, Math.min((flushPromise && flushPromise.hasCallbacks ? delay >> 1 : delay) + 1, maxFlushDelay))
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
			committedFlushResolvers.push(...resolvers)
		else {
			committedFlushResolvers = resolvers
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
				let flag = uncommittedResolution.flag & 0xf;
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
					this.encoder.clearSharedData()
				else if (this.encoder.structures)
					this.encoder.structures = []
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
								lastSyncTxnFlush = new Promise(resolve => scheduleFlush([resolve]))
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
					flushPromise.hasCallbacks = true
				return Promise.all([flushPromise || committed, lastSyncTxnFlush]).then(onfulfilled, onrejected);
			}
		},
		_endWrites(resolvedPromise, resolvedSyncPromise) {
			this.put = this.remove = this.del = this.batch = this.removeSync = this.putSync = this.transactionAsync = this.drop = this.clearAsync = () => { throw new Error('Database is closed') };
			// wait for all txns to finish, checking again after the current txn is done
			let finalPromise = flushPromise || commitPromise || lastWritePromise;
			if (flushPromise)
				flushPromise.hasCallbacks = true
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
export function asBinary(buffer) {
	return {
		['\x10binary-data\x02']: buffer
	};
}
