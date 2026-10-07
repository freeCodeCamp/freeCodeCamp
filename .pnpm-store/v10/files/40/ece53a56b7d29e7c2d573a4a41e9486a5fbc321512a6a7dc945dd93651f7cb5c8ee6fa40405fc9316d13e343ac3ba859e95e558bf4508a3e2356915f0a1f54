/**
 * The `node:v8` module exposes APIs that are specific to the version of [V8](https://developers.google.com/v8/) built into the Node.js binary. It can be accessed using:
 *
 * ```js
 * import v8 from 'node:v8';
 * ```
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/v8.js)
 */
declare module "v8" {
    import { NonSharedBuffer } from "node:buffer";
    import { Readable } from "node:stream";
    interface HeapSpaceInfo {
        space_name: string;
        space_size: number;
        space_used_size: number;
        space_available_size: number;
        physical_space_size: number;
    }
    // ** Signifies if the --zap_code_space option is enabled or not.  1 == enabled, 0 == disabled. */
    type DoesZapCodeSpaceFlag = 0 | 1;
    interface HeapInfo {
        total_heap_size: number;
        total_heap_size_executable: number;
        total_physical_size: number;
        total_available_size: number;
        used_heap_size: number;
        heap_size_limit: number;
        malloced_memory: number;
        peak_malloced_memory: number;
        does_zap_garbage: DoesZapCodeSpaceFlag;
        number_of_native_contexts: number;
        number_of_detached_contexts: number;
        total_global_handles_size: number;
        used_global_handles_size: number;
        external_memory: number;
    }
    interface HeapCodeStatistics {
        code_and_metadata_size: number;
        bytecode_and_metadata_size: number;
        external_script_source_size: number;
    }
    interface HeapSnapshotOptions {
        /**
         * If true, expose internals in the heap snapshot.
         * @default false
         */
        exposeInternals?: boolean | undefined;
        /**
         * If true, expose numeric values in artificial fields.
         * @default false
         */
        exposeNumericValues?: boolean | undefined;
    }
    /**
     * Returns an integer representing a version tag derived from the V8 version,
     * command-line flags, and detected CPU features. This is useful for determining
     * whether a `vm.Script` `cachedData` buffer is compatible with this instance
     * of V8.
     *
     * ```js
     * console.log(v8.cachedDataVersionTag()); // 3947234607
     * // The value returned by v8.cachedDataVersionTag() is derived from the V8
     * // version, command-line flags, and detected CPU features. Test that the value
     * // does indeed update when flags are toggled.
     * v8.setFlagsFromString('--allow_natives_syntax');
     * console.log(v8.cachedDataVersionTag()); // 183726201
     * ```
     * @since v8.0.0
     */
    function cachedDataVersionTag(): number;
    /**
     * Returns an object with the following properties:
     *
     * `does_zap_garbage` is a 0/1 boolean, which signifies whether the `--zap_code_space` option is enabled or not. This makes V8 overwrite heap
     * garbage with a bit pattern. The RSS footprint (resident set size) gets bigger
     * because it continuously touches all heap pages and that makes them less likely
     * to get swapped out by the operating system.
     *
     * `number_of_native_contexts` The value of native\_context is the number of the
     * top-level contexts currently active. Increase of this number over time indicates
     * a memory leak.
     *
     * `number_of_detached_contexts` The value of detached\_context is the number
     * of contexts that were detached and not yet garbage collected. This number
     * being non-zero indicates a potential memory leak.
     *
     * `total_global_handles_size` The value of total\_global\_handles\_size is the
     * total memory size of V8 global handles.
     *
     * `used_global_handles_size` The value of used\_global\_handles\_size is the
     * used memory size of V8 global handles.
     *
     * `external_memory` The value of external\_memory is the memory size of array
     * buffers and external strings.
     *
     * ```js
     * {
     *   total_heap_size: 7326976,
     *   total_heap_size_executable: 4194304,
     *   total_physical_size: 7326976,
     *   total_available_size: 1152656,
     *   used_heap_size: 3476208,
     *   heap_size_limit: 1535115264,
     *   malloced_memory: 16384,
     *   peak_malloced_memory: 1127496,
     *   does_zap_garbage: 0,
     *   number_of_native_contexts: 1,
     *   number_of_detached_contexts: 0,
     *   total_global_handles_size: 8192,
     *   used_global_handles_size: 3296,
     *   external_memory: 318824
     * }
     * ```
     * @since v1.0.0
     */
    function getHeapStatistics(): HeapInfo;
    /**
     * It returns an object with a structure similar to the
     * [`cppgc::HeapStatistics`](https://v8docs.nodesource.com/node-22.4/d7/d51/heap-statistics_8h_source.html)
     * object. See the [V8 documentation](https://v8docs.nodesource.com/node-22.4/df/d2f/structcppgc_1_1_heap_statistics.html)
     * for more information about the properties of the object.
     *
     * ```js
     * // Detailed
     * ({
     *   committed_size_bytes: 131072,
     *   resident_size_bytes: 131072,
     *   used_size_bytes: 152,
     *   space_statistics: [
     *     {
     *       name: 'NormalPageSpace0',
     *       committed_size_bytes: 0,
     *       resident_size_bytes: 0,
     *       used_size_bytes: 0,
     *       page_stats: [{}],
     *       free_list_stats: {},
     *     },
     *     {
     *       name: 'NormalPageSpace1',
     *       committed_size_bytes: 131072,
     *       resident_size_bytes: 131072,
     *       used_size_bytes: 152,
     *       page_stats: [{}],
     *       free_list_stats: {},
     *     },
     *     {
     *       name: 'NormalPageSpace2',
     *       committed_size_bytes: 0,
     *       resident_size_bytes: 0,
     *       used_size_bytes: 0,
     *       page_stats: [{}],
     *       free_list_stats: {},
     *     },
     *     {
     *       name: 'NormalPageSpace3',
     *       committed_size_bytes: 0,
     *       resident_size_bytes: 0,
     *       used_size_bytes: 0,
     *       page_stats: [{}],
     *       free_list_stats: {},
     *     },
     *     {
     *       name: 'LargePageSpace',
     *       committed_size_bytes: 0,
     *       resident_size_bytes: 0,
     *       used_size_bytes: 0,
     *       page_stats: [{}],
     *       free_list_stats: {},
     *     },
     *   ],
     *   type_names: [],
     *   detail_level: 'detailed',
     * });
     * ```
     *
     * ```js
     * // Brief
     * ({
     *   committed_size_bytes: 131072,
     *   resident_size_bytes: 131072,
     *   used_size_bytes: 128864,
     *   space_statistics: [],
     *   type_names: [],
     *   detail_level: 'brief',
     * });
     * ```
     * @since v22.15.0
     * @param detailLevel **Default:** `'detailed'`. Specifies the level of detail in the returned statistics.
     * Accepted values are:
     * * `'brief'`:  Brief statistics contain only the top-level
     * allocated and used
     * memory statistics for the entire heap.
     * * `'detailed'`: Detailed statistics also contain a break
     * down per space and page, as well as freelist statistics
     * and object type histograms.
     */
    function getCppHeapStatistics(detailLevel?: "brief" | "detailed"): object;
    /**
     * Returns statistics about the V8 heap spaces, i.e. the segments which make up
     * the V8 heap. Neither the ordering of heap spaces, nor the availability of a
     * heap space can be guaranteed as the statistics are provided via the
     * V8 [`GetHeapSpaceStatistics`](https://v8docs.nodesource.com/node-13.2/d5/dda/classv8_1_1_isolate.html#ac673576f24fdc7a33378f8f57e1d13a4) function and may change from one V8 version to the
     * next.
     *
     * The value returned is an array of objects containing the following properties:
     *
     * ```json
     * [
     *   {
     *     "space_name": "new_space",
     *     "space_size": 2063872,
     *     "space_used_size": 951112,
     *     "space_available_size": 80824,
     *     "physical_space_size": 2063872
     *   },
     *   {
     *     "space_name": "old_space",
     *     "space_size": 3090560,
     *     "space_used_size": 2493792,
     *     "space_available_size": 0,
     *     "physical_space_size": 3090560
     *   },
     *   {
     *     "space_name": "code_space",
     *     "space_size": 1260160,
     *     "space_used_size": 644256,
     *     "space_available_size": 960,
     *     "physical_space_size": 1260160
     *   },
     *   {
     *     "space_name": "map_space",
     *     "space_size": 1094160,
     *     "space_used_size": 201608,
     *     "space_available_size": 0,
     *     "physical_space_size": 1094160
     *   },
     *   {
     *     "space_name": "large_object_space",
     *     "space_size": 0,
     *     "space_used_size": 0,
     *     "space_available_size": 1490980608,
     *     "physical_space_size": 0
     *   }
     * ]
     * ```
     * @since v6.0.0
     */
    function getHeapSpaceStatistics(): HeapSpaceInfo[];
    /**
     * The `v8.setFlagsFromString()` method can be used to programmatically set
     * V8 command-line flags. This method should be used with care. Changing settings
     * after the VM has started may result in unpredictable behavior, including
     * crashes and data loss; or it may simply do nothing.
     *
     * The V8 options available for a version of Node.js may be determined by running `node --v8-options`.
     *
     * Usage:
     *
     * ```js
     * // Print GC events to stdout for one minute.
     * import v8 from 'node:v8';
     * v8.setFlagsFromString('--trace_gc');
     * setTimeout(() => { v8.setFlagsFromString('--notrace_gc'); }, 60e3);
     * ```
     * @since v1.0.0
     */
    function setFlagsFromString(flags: string): void;
    /**
     * This is similar to the [`queryObjects()` console API](https://developer.chrome.com/docs/devtools/console/utilities#queryObjects-function)
     * provided by the Chromium DevTools console. It can be used to search for objects that have the matching constructor on its prototype chain
     * in the heap after a full garbage collection, which can be useful for memory leak regression tests. To avoid surprising results, users should
     * avoid using this API on constructors whose implementation they don't control, or on constructors that can be invoked by other parties in the
     * application.
     *
     * To avoid accidental leaks, this API does not return raw references to the objects found. By default, it returns the count of the objects
     * found. If `options.format` is `'summary'`, it returns an array containing brief string representations for each object. The visibility provided
     * in this API is similar to what the heap snapshot provides, while users can save the cost of serialization and parsing and directly filter the
     * target objects during the search.
     *
     * Only objects created in the current execution context are included in the results.
     *
     * ```js
     * import { queryObjects } from 'node:v8';
     * class A { foo = 'bar'; }
     * console.log(queryObjects(A)); // 0
     * const a = new A();
     * console.log(queryObjects(A)); // 1
     * // [ "A { foo: 'bar' }" ]
     * console.log(queryObjects(A, { format: 'summary' }));
     *
     * class B extends A { bar = 'qux'; }
     * const b = new B();
     * console.log(queryObjects(B)); // 1
     * // [ "B { foo: 'bar', bar: 'qux' }" ]
     * console.log(queryObjects(B, { format: 'summary' }));
     *
     * // Note that, when there are child classes inheriting from a constructor,
     * // the constructor also shows up in the prototype chain of the child
     * // classes's prototoype, so the child classes's prototoype would also be
     * // included in the result.
     * console.log(queryObjects(A));  // 3
     * // [ "B { foo: 'bar', bar: 'qux' }", 'A {}', "A { foo: 'bar' }" ]
     * console.log(queryObjects(A, { format: 'summary' }));
     * ```
     * @param ctor The constructor that can be used to search on the prototype chain in order to filter target objects in the heap.
     * @since v20.13.0
     * @experimental
     */
    function queryObjects(ctor: Function): number | string[];
    function queryObjects(ctor: Function, options: { format: "count" }): number;
    function queryObjects(ctor: Function, options: { format: "summary" }): string[];
    /**
     * Generates a snapshot of the current V8 heap and returns a Readable
     * Stream that may be used to read the JSON serialized representation.
     * This JSON stream format is intended to be used with tools such as
     * Chrome DevTools. The JSON schema is undocumented and specific to the
     * V8 engine. Therefore, the schema may change from one version of V8 to the next.
     *
     * Creating a heap snapshot requires memory about twice the size of the heap at
     * the time the snapshot is created. This results in the risk of OOM killers
     * terminating the process.
     *
     * Generating a snapshot is a synchronous operation which blocks the event loop
     * for a duration depending on the heap size.
     *
     * ```js
     * // Print heap snapshot to the console
     * import v8 from 'node:v8';
     * const stream = v8.getHeapSnapshot();
     * stream.pipe(process.stdout);
     * ```
     * @since v11.13.0
     * @return A Readable containing the V8 heap snapshot.
     */
    function getHeapSnapshot(options?: HeapSnapshotOptions): Readable;
    /**
     * Generates a snapshot of the current V8 heap and writes it to a JSON
     * file. This file is intended to be used with tools such as Chrome
     * DevTools. The JSON schema is undocumented and specific to the V8
     * engine, and may change from one version of V8 to the next.
     *
     * A heap snapshot is specific to a single V8 isolate. When using `worker threads`, a heap snapshot generated from the main thread will
     * not contain any information about the workers, and vice versa.
     *
     * Creating a heap snapshot requires memory about twice the size of the heap at
     * the time the snapshot is created. This results in the risk of OOM killers
     * terminating the process.
     *
     * Generating a snapshot is a synchronous operation which blocks the event loop
     * for a duration depending on the heap size.
     *
     * ```js
     * import { writeHeapSnapshot } from 'node:v8';
     * import {
     *   Worker,
     *   isMainThread,
     *   parentPort,
     * } from 'node:worker_threads';
     *
     * if (isMainThread) {
     *   const worker = new Worker(__filename);
     *
     *   worker.once('message', (filename) => {
     *     console.log(`worker heapdump: ${filename}`);
     *     // Now get a heapdump for the main thread.
     *     console.log(`main thread heapdump: ${writeHeapSnapshot()}`);
     *   });
     *
     *   // Tell the worker to create a heapdump.
     *   worker.postMessage('heapdump');
     * } else {
     *   parentPort.once('message', (message) => {
     *     if (message === 'heapdump') {
     *       // Generate a heapdump for the worker
     *       // and return the filename to the parent.
     *       parentPort.postMessage(writeHeapSnapshot());
     *     }
     *   });
     * }
     * ```
     * @since v11.13.0
     * @param filename The file path where the V8 heap snapshot is to be saved. If not specified, a file name with the pattern `'Heap-${yyyymmdd}-${hhmmss}-${pid}-${thread_id}.heapsnapshot'` will be
     * generated, where `{pid}` will be the PID of the Node.js process, `{thread_id}` will be `0` when `writeHeapSnapshot()` is called from the main Node.js thread or the id of a
     * worker thread.
     * @return The filename where the snapshot was saved.
     */
    function writeHeapSnapshot(filename?: string, options?: HeapSnapshotOptions): string;
    /**
     * Get statistics about code and its metadata in the heap, see
     * V8 [`GetHeapCodeAndMetadataStatistics`](https://v8docs.nodesource.com/node-13.2/d5/dda/classv8_1_1_isolate.html#a6079122af17612ef54ef3348ce170866) API. Returns an object with the
     * following properties:
     *
     * ```js
     * {
     *   code_and_metadata_size: 212208,
     *   bytecode_and_metadata_size: 161368,
     *   external_script_source_size: 1410794,
     *   cpu_profiler_metadata_size: 0,
     * }
     * ```
     * @since v12.8.0
     */
    function getHeapCodeStatistics(): HeapCodeStatistics;
    /**
     * @since v24.12.0
     */
    interface SyncCPUProfileHandle {
        /**
         * Stopping collecting the profile and return the profile data.
         * @since v24.12.0
         */
        stop(): string;
        /**
         * Stopping collecting the profile and the profile will be discarded.
         * @since v24.12.0
         */
        [Symbol.dispose](): void;
    }
    /**
     * @since v24.8.0
     */
    interface CPUProfileHandle {
        /**
         * Stopping collecting the profile, then return a Promise that fulfills with an error or the
         * profile data.
         * @since v24.8.0
         */
        stop(): Promise<string>;
        /**
         * Stopping collecting the profile and the profile will be discarded.
         * @since v24.8.0
         */
        [Symbol.asyncDispose](): Promise<void>;
    }
    /**
     * @since v24.9.0
     */
    interface HeapProfileHandle {
        /**
         * Stopping collecting the profile, then return a Promise that fulfills with an error or the
         * profile data.
         * @since v24.9.0
         */
        stop(): Promise<string>;
        /**
         * Stopping collecting the profile and the profile will be discarded.
         * @since v24.9.0
         */
        [Symbol.asyncDispose](): Promise<void>;
    }
    /**
     * V8 only supports `Latin-1/ISO-8859-1` and `UTF16` as the underlying representation of a string.
     * If the `content` uses `Latin-1/ISO-8859-1` as the underlying representation, this function will return true;
     * otherwise, it returns false.
     *
     * If this method returns false, that does not mean that the string contains some characters not in `Latin-1/ISO-8859-1`.
     * Sometimes a `Latin-1` string may also be represented as `UTF16`.
     *
     * ```js
     * const { isStringOneByteRepresentation } = require('node:v8');
     *
     * const Encoding = {
     *   latin1: 1,
     *   utf16le: 2,
     * };
     * const buffer = Buffer.alloc(100);
     * function writeString(input) {
     *   if (isStringOneByteRepresentation(input)) {
     *     buffer.writeUint8(Encoding.latin1);
     *     buffer.writeUint32LE(input.length, 1);
     *     buffer.write(input, 5, 'latin1');
     *   } else {
     *     buffer.writeUint8(Encoding.utf16le);
     *     buffer.writeUint32LE(input.length * 2, 1);
     *     buffer.write(input, 5, 'utf16le');
     *   }
     * }
     * writeString('hello');
     * writeString('你好');
     * ```
     * @since v23.10.0, v22.15.0
     */
    function isStringOneByteRepresentation(content: string): boolean;
    /**
     * Starting a CPU profile then return a `SyncCPUProfileHandle` object. This API supports `using` syntax.
     *
     * ```js
     * const handle = v8.startCpuProfile();
     * const profile = handle.stop();
     * console.log(profile);
     * ```
     * @since v24.12.0
     */
    function startCpuProfile(): SyncCPUProfileHandle;
    /**
     * @since v8.0.0
     */
    class Serializer {
        /**
         * Writes out a header, which includes the serialization format version.
         */
        writeHeader(): void;
        /**
         * Serializes a JavaScript value and adds the serialized representation to the
         * internal buffer.
         *
         * This throws an error if `value` cannot be serialized.
         */
        writeValue(val: any): boolean;
        /**
         * Returns the stored internal buffer. This serializer should not be used once
         * the buffer is released. Calling this method results in undefined behavior
         * if a previous write has failed.
         */
        releaseBuffer(): NonSharedBuffer;
        /**
         * Marks an `ArrayBuffer` as having its contents transferred out of band.
         * Pass the corresponding `ArrayBuffer` in the deserializing context to `deserializer.transferArrayBuffer()`.
         * @param id A 32-bit unsigned integer.
         * @param arrayBuffer An `ArrayBuffer` instance.
         */
        transferArrayBuffer(id: number, arrayBuffer: ArrayBuffer): void;
        /**
         * Write a raw 32-bit unsigned integer.
         * For use inside of a custom `serializer._writeHostObject()`.
         */
        writeUint32(value: number): void;
        /**
         * Write a raw 64-bit unsigned integer, split into high and low 32-bit parts.
         * For use inside of a custom `serializer._writeHostObject()`.
         */
        writeUint64(hi: number, lo: number): void;
        /**
         * Write a JS `number` value.
         * For use inside of a custom `serializer._writeHostObject()`.
         */
        writeDouble(value: number): void;
        /**
         * Write raw bytes into the serializer's internal buffer. The deserializer
         * will require a way to compute the length of the buffer.
         * For use inside of a custom `serializer._writeHostObject()`.
         */
        writeRawBytes(buffer: NodeJS.ArrayBufferView): void;
    }
    /**
     * A subclass of `Serializer` that serializes `TypedArray`(in particular `Buffer`) and `DataView` objects as host objects, and only
     * stores the part of their underlying `ArrayBuffer`s that they are referring to.
     * @since v8.0.0
     */
    class DefaultSerializer extends Serializer {}
    /**
     * @since v8.0.0
     */
    class Deserializer {
        constructor(data: NodeJS.TypedArray);
        /**
         * Reads and validates a header (including the format version).
         * May, for example, reject an invalid or unsupported wire format. In that case,
         * an `Error` is thrown.
         */
        readHeader(): boolean;
        /**
         * Deserializes a JavaScript value from the buffer and returns it.
         */
        readValue(): any;
        /**
         * Marks an `ArrayBuffer` as having its contents transferred out of band.
         * Pass the corresponding `ArrayBuffer` in the serializing context to `serializer.transferArrayBuffer()` (or return the `id` from `serializer._getSharedArrayBufferId()` in the case of
         * `SharedArrayBuffer`s).
         * @param id A 32-bit unsigned integer.
         * @param arrayBuffer An `ArrayBuffer` instance.
         */
        transferArrayBuffer(id: number, arrayBuffer: ArrayBuffer): void;
        /**
         * Reads the underlying wire format version. Likely mostly to be useful to
         * legacy code reading old wire format versions. May not be called before `.readHeader()`.
         */
        getWireFormatVersion(): number;
        /**
         * Read a raw 32-bit unsigned integer and return it.
         * For use inside of a custom `deserializer._readHostObject()`.
         */
        readUint32(): number;
        /**
         * Read a raw 64-bit unsigned integer and return it as an array `[hi, lo]` with two 32-bit unsigned integer entries.
         * For use inside of a custom `deserializer._readHostObject()`.
         */
        readUint64(): [number, number];
        /**
         * Read a JS `number` value.
         * For use inside of a custom `deserializer._readHostObject()`.
         */
        readDouble(): number;
        /**
         * Read raw bytes from the deserializer's internal buffer. The `length` parameter
         * must correspond to the length of the buffer that was passed to `serializer.writeRawBytes()`.
         * For use inside of a custom `deserializer._readHostObject()`.
         */
        readRawBytes(length: number): Buffer;
    }
    /**
     * A subclass of `Deserializer` corresponding to the format written by `DefaultSerializer`.
     * @since v8.0.0
     */
    class DefaultDeserializer extends Deserializer {}
    /**
     * Uses a `DefaultSerializer` to serialize `value` into a buffer.
     *
     * `ERR_BUFFER_TOO_LARGE` will be thrown when trying to
     * serialize a huge object which requires buffer
     * larger than `buffer.constants.MAX_LENGTH`.
     * @since v8.0.0
     */
    function serialize(value: any): NonSharedBuffer;
    /**
     * Uses a `DefaultDeserializer` with default options to read a JS value
     * from a buffer.
     * @since v8.0.0
     * @param buffer A buffer returned by {@link serialize}.
     */
    function deserialize(buffer: NodeJS.ArrayBufferView): any;
    /**
     * The `v8.takeCoverage()` method allows the user to write the coverage started by `NODE_V8_COVERAGE` to disk on demand. This method can be invoked multiple
     * times during the lifetime of the process. Each time the execution counter will
     * be reset and a new coverage report will be written to the directory specified
     * by `NODE_V8_COVERAGE`.
     *
     * When the process is about to exit, one last coverage will still be written to
     * disk unless {@link stopCoverage} is invoked before the process exits.
     * @since v15.1.0, v14.18.0, v12.22.0
     */
    function takeCoverage(): void;
    /**
     * The `v8.stopCoverage()` method allows the user to stop the coverage collection
     * started by `NODE_V8_COVERAGE`, so that V8 can release the execution count
     * records and optimize code. This can be used in conjunction with {@link takeCoverage} if the user wants to collect the coverage on demand.
     * @since v15.1.0, v14.18.0, v12.22.0
     */
    function stopCoverage(): void;
    /**
     * The API is a no-op if `--heapsnapshot-near-heap-limit` is already set from the command line or the API is called more than once.
     * `limit` must be a positive integer. See [`--heapsnapshot-near-heap-limit`](https://nodejs.org/docs/latest-v24.x/api/cli.html#--heapsnapshot-near-heap-limitmax_count) for more information.
     * @since v18.10.0, v16.18.0
     */
    function setHeapSnapshotNearHeapLimit(limit: number): void;
    /**
     * This API collects GC data in current thread.
     * @since v19.6.0, v18.15.0
     */
    class GCProfiler {
        /**
         * Start collecting GC data.
         * @since v19.6.0, v18.15.0
         */
        start(): void;
        /**
         * Stop collecting GC data and return an object. The content of object
         * is as follows.
         *
         * ```json
         * {
         *   "version": 1,
         *   "startTime": 1674059033862,
         *   "statistics": [
         *     {
         *       "gcType": "Scavenge",
         *       "beforeGC": {
         *         "heapStatistics": {
         *           "totalHeapSize": 5005312,
         *           "totalHeapSizeExecutable": 524288,
         *           "totalPhysicalSize": 5226496,
         *           "totalAvailableSize": 4341325216,
         *           "totalGlobalHandlesSize": 8192,
         *           "usedGlobalHandlesSize": 2112,
         *           "usedHeapSize": 4883840,
         *           "heapSizeLimit": 4345298944,
         *           "mallocedMemory": 254128,
         *           "externalMemory": 225138,
         *           "peakMallocedMemory": 181760
         *         },
         *         "heapSpaceStatistics": [
         *           {
         *             "spaceName": "read_only_space",
         *             "spaceSize": 0,
         *             "spaceUsedSize": 0,
         *             "spaceAvailableSize": 0,
         *             "physicalSpaceSize": 0
         *           }
         *         ]
         *       },
         *       "cost": 1574.14,
         *       "afterGC": {
         *         "heapStatistics": {
         *           "totalHeapSize": 6053888,
         *           "totalHeapSizeExecutable": 524288,
         *           "totalPhysicalSize": 5500928,
         *           "totalAvailableSize": 4341101384,
         *           "totalGlobalHandlesSize": 8192,
         *           "usedGlobalHandlesSize": 2112,
         *           "usedHeapSize": 4059096,
         *           "heapSizeLimit": 4345298944,
         *           "mallocedMemory": 254128,
         *           "externalMemory": 225138,
         *           "peakMallocedMemory": 181760
         *         },
         *         "heapSpaceStatistics": [
         *           {
         *             "spaceName": "read_only_space",
         *             "spaceSize": 0,
         *             "spaceUsedSize": 0,
         *             "spaceAvailableSize": 0,
         *             "physicalSpaceSize": 0
         *           }
         *         ]
         *       }
         *     }
         *   ],
         *   "endTime": 1674059036865
         * }
         * ```
         *
         * Here's an example.
         *
         * ```js
         * import { GCProfiler } from 'node:v8';
         * const profiler = new GCProfiler();
         * profiler.start();
         * setTimeout(() => {
         *   console.log(profiler.stop());
         * }, 1000);
         * ```
         * @since v19.6.0, v18.15.0
         */
        stop(): GCProfilerResult;
    }
    interface GCProfilerResult {
        version: number;
        startTime: number;
        endTime: number;
        statistics: Array<{
            gcType: string;
            cost: number;
            beforeGC: {
                heapStatistics: HeapStatistics;
                heapSpaceStatistics: HeapSpaceStatistics[];
            };
            afterGC: {
                heapStatistics: HeapStatistics;
                heapSpaceStatistics: HeapSpaceStatistics[];
            };
        }>;
    }
    interface HeapStatistics {
        totalHeapSize: number;
        totalHeapSizeExecutable: number;
        totalPhysicalSize: number;
        totalAvailableSize: number;
        totalGlobalHandlesSize: number;
        usedGlobalHandlesSize: number;
        usedHeapSize: number;
        heapSizeLimit: number;
        mallocedMemory: number;
        externalMemory: number;
        peakMallocedMemory: number;
    }
    interface HeapSpaceStatistics {
        spaceName: string;
        spaceSize: number;
        spaceUsedSize: number;
        spaceAvailableSize: number;
        physicalSpaceSize: number;
    }
    /**
     * Called when a promise is constructed. This does not mean that corresponding before/after events will occur, only that the possibility exists. This will
     * happen if a promise is created without ever getting a continuation.
     * @since v17.1.0, v16.14.0
     * @param promise The promise being created.
     * @param parent The promise continued from, if applicable.
     */
    interface Init {
        (promise: Promise<unknown>, parent: Promise<unknown>): void;
    }
    /**
     * Called before a promise continuation executes. This can be in the form of `then()`, `catch()`, or `finally()` handlers or an await resuming.
     *
     * The before callback will be called 0 to N times. The before callback will typically be called 0 times if no continuation was ever made for the promise.
     * The before callback may be called many times in the case where many continuations have been made from the same promise.
     * @since v17.1.0, v16.14.0
     */
    interface Before {
        (promise: Promise<unknown>): void;
    }
    /**
     * Called immediately after a promise continuation executes. This may be after a `then()`, `catch()`, or `finally()` handler or before an await after another await.
     * @since v17.1.0, v16.14.0
     */
    interface After {
        (promise: Promise<unknown>): void;
    }
    /**
     * Called when the promise receives a resolution or rejection value. This may occur synchronously in the case of {@link Promise.resolve()} or
     * {@link Promise.reject()}.
     * @since v17.1.0, v16.14.0
     */
    interface Settled {
        (promise: Promise<unknown>): void;
    }
    /**
     * Key events in the lifetime of a promise have been categorized into four areas: creation of a promise, before/after a continuation handler is called or
     * around an await, and when the promise resolves or rejects.
     *
     * Because promises are asynchronous resources whose lifecycle is tracked via the promise hooks mechanism, the `init()`, `before()`, `after()`, and
     * `settled()` callbacks must not be async functions as they create more promises which would produce an infinite loop.
     * @since v17.1.0, v16.14.0
     */
    interface HookCallbacks {
        init?: Init;
        before?: Before;
        after?: After;
        settled?: Settled;
    }
    interface PromiseHooks {
        /**
         * The `init` hook must be a plain function. Providing an async function will throw as it would produce an infinite microtask loop.
         * @since v17.1.0, v16.14.0
         * @param init The {@link Init | `init` callback} to call when a promise is created.
         * @return Call to stop the hook.
         */
        onInit: (init: Init) => Function;
        /**
         * The `settled` hook must be a plain function. Providing an async function will throw as it would produce an infinite microtask loop.
         * @since v17.1.0, v16.14.0
         * @param settled The {@link Settled | `settled` callback} to call when a promise is created.
         * @return Call to stop the hook.
         */
        onSettled: (settled: Settled) => Function;
        /**
         * The `before` hook must be a plain function. Providing an async function will throw as it would produce an infinite microtask loop.
         * @since v17.1.0, v16.14.0
         * @param before The {@link Before | `before` callback} to call before a promise continuation executes.
         * @return Call to stop the hook.
         */
        onBefore: (before: Before) => Function;
        /**
         * The `after` hook must be a plain function. Providing an async function will throw as it would produce an infinite microtask loop.
         * @since v17.1.0, v16.14.0
         * @param after The {@link After | `after` callback} to call after a promise continuation executes.
         * @return Call to stop the hook.
         */
        onAfter: (after: After) => Function;
        /**
         * Registers functions to be called for different lifetime events of each promise.
         * The callbacks `init()`/`before()`/`after()`/`settled()` are called for the respective events during a promise's lifetime.
         * All callbacks are optional. For example, if only promise creation needs to be tracked, then only the init callback needs to be passed.
         * The hook callbacks must be plain functions. Providing async functions will throw as it would produce an infinite microtask loop.
         * @since v17.1.0, v16.14.0
         * @param callbacks The {@link HookCallbacks | Hook Callbacks} to register
         * @return Used for disabling hooks
         */
        createHook: (callbacks: HookCallbacks) => Function;
    }
    /**
     * The `promiseHooks` interface can be used to track promise lifecycle events.
     * @since v17.1.0, v16.14.0
     */
    const promiseHooks: PromiseHooks;
    type StartupSnapshotCallbackFn = (args: any) => any;
    /**
     * The `v8.startupSnapshot` interface can be used to add serialization and deserialization hooks for custom startup snapshots.
     *
     * ```bash
     * $ node --snapshot-blob snapshot.blob --build-snapshot entry.js
     * # This launches a process with the snapshot
     * $ node --snapshot-blob snapshot.blob
     * ```
     *
     * In the example above, `entry.js` can use methods from the `v8.startupSnapshot` interface to specify how to save information for custom objects
     * in the snapshot during serialization and how the information can be used to synchronize these objects during deserialization of the snapshot.
     * For example, if the `entry.js` contains the following script:
     *
     * ```js
     * 'use strict';
     *
     * import fs from 'node:fs';
     * import zlib from 'node:zlib';
     * import path from 'node:path';
     * import assert from 'node:assert';
     *
     * import v8 from 'node:v8';
     *
     * class BookShelf {
     *   storage = new Map();
     *
     *   // Reading a series of files from directory and store them into storage.
     *   constructor(directory, books) {
     *     for (const book of books) {
     *       this.storage.set(book, fs.readFileSync(path.join(directory, book)));
     *     }
     *   }
     *
     *   static compressAll(shelf) {
     *     for (const [ book, content ] of shelf.storage) {
     *       shelf.storage.set(book, zlib.gzipSync(content));
     *     }
     *   }
     *
     *   static decompressAll(shelf) {
     *     for (const [ book, content ] of shelf.storage) {
     *       shelf.storage.set(book, zlib.gunzipSync(content));
     *     }
     *   }
     * }
     *
     * // __dirname here is where the snapshot script is placed
     * // during snapshot building time.
     * const shelf = new BookShelf(__dirname, [
     *   'book1.en_US.txt',
     *   'book1.es_ES.txt',
     *   'book2.zh_CN.txt',
     * ]);
     *
     * assert(v8.startupSnapshot.isBuildingSnapshot());
     * // On snapshot serialization, compress the books to reduce size.
     * v8.startupSnapshot.addSerializeCallback(BookShelf.compressAll, shelf);
     * // On snapshot deserialization, decompress the books.
     * v8.startupSnapshot.addDeserializeCallback(BookShelf.decompressAll, shelf);
     * v8.startupSnapshot.setDeserializeMainFunction((shelf) => {
     *   // process.env and process.argv are refreshed during snapshot
     *   // deserialization.
     *   const lang = process.env.BOOK_LANG || 'en_US';
     *   const book = process.argv[1];
     *   const name = `${book}.${lang}.txt`;
     *   console.log(shelf.storage.get(name));
     * }, shelf);
     * ```
     *
     * The resulted binary will get print the data deserialized from the snapshot during start up, using the refreshed `process.env` and `process.argv` of the launched process:
     *
     * ```bash
     * $ BOOK_LANG=es_ES node --snapshot-blob snapshot.blob book1
     * # Prints content of book1.es_ES.txt deserialized from the snapshot.
     * ```
     *
     * Currently the application deserialized from a user-land snapshot cannot be snapshotted again, so these APIs are only available to applications that are not deserialized from a user-land snapshot.
     *
     * @since v18.6.0, v16.17.0
     */
    namespace startupSnapshot {
        /**
         * Add a callback that will be called when the Node.js instance is about to get serialized into a snapshot and exit.
         * This can be used to release resources that should not or cannot be serialized or to convert user data into a form more suitable for serialization.
         * @since v18.6.0, v16.17.0
         */
        function addSerializeCallback(callback: StartupSnapshotCallbackFn, data?: any): void;
        /**
         * Add a callback that will be called when the Node.js instance is deserialized from a snapshot.
         * The `callback` and the `data` (if provided) will be serialized into the snapshot, they can be used to re-initialize the state of the application or
         * to re-acquire resources that the application needs when the application is restarted from the snapshot.
         * @since v18.6.0, v16.17.0
         */
        function addDeserializeCallback(callback: StartupSnapshotCallbackFn, data?: any): void;
        /**
         * This sets the entry point of the Node.js application when it is deserialized from a snapshot. This can be called only once in the snapshot building script.
         * If called, the deserialized application no longer needs an additional entry point script to start up and will simply invoke the callback along with the deserialized
         * data (if provided), otherwise an entry point script still needs to be provided to the deserialized application.
         * @since v18.6.0, v16.17.0
         */
        function setDeserializeMainFunction(callback: StartupSnapshotCallbackFn, data?: any): void;
        /**
         * Returns true if the Node.js instance is run to build a snapshot.
         * @since v18.6.0, v16.17.0
         */
        function isBuildingSnapshot(): boolean;
    }
}
declare module "node:v8" {
    export * from "v8";
}
