declare module "node:worker_threads" {
    import {
        EventEmitter,
        InternalEventEmitter,
        InternalEventTargetEventProperties,
        NodeEventTarget,
    } from "node:events";
    import { FileHandle } from "node:fs/promises";
    import { Performance } from "node:perf_hooks";
    import { Readable, Writable } from "node:stream";
    import { ReadableStream, TransformStream, WritableStream } from "node:stream/web";
    import { URL } from "node:url";
    import { CPUProfileHandle, HeapInfo, HeapProfileHandle } from "node:v8";
    import { Context } from "node:vm";
    import { MessageEvent } from "undici-types";
    const isInternalThread: boolean;
    const isMainThread: boolean;
    const parentPort: null | MessagePort;
    const resourceLimits: ResourceLimits;
    const SHARE_ENV: unique symbol;
    const threadId: number;
    const threadName: string | null;
    const workerData: any;
    interface WorkerPerformance extends Pick<Performance, "eventLoopUtilization"> {}
    /** @deprecated Use `import { Transferable } from "node:worker_threads"` instead. */
    // TODO: remove in a future major @types/node version.
    type TransferListItem = Transferable;
    interface WorkerOptions {
        /**
         * List of arguments which would be stringified and appended to
         * `process.argv` in the worker. This is mostly similar to the `workerData`
         * but the values will be available on the global `process.argv` as if they
         * were passed as CLI options to the script.
         */
        argv?: any[] | undefined;
        env?: NodeJS.Dict<string> | typeof SHARE_ENV | undefined;
        eval?: boolean | undefined;
        workerData?: any;
        stdin?: boolean | undefined;
        stdout?: boolean | undefined;
        stderr?: boolean | undefined;
        execArgv?: string[] | undefined;
        resourceLimits?: ResourceLimits | undefined;
        /**
         * Additional data to send in the first worker message.
         */
        transferList?: Transferable[] | undefined;
        /**
         * @default true
         */
        trackUnmanagedFds?: boolean | undefined;
        /**
         * An optional `name` to be appended to the worker title
         * for debugging/identification purposes, making the final title as
         * `[worker ${id}] ${name}`.
         */
        name?: string | undefined;
    }
    interface ResourceLimits {
        /**
         * The maximum size of a heap space for recently created objects.
         */
        maxYoungGenerationSizeMb?: number | undefined;
        /**
         * The maximum size of the main heap in MB.
         */
        maxOldGenerationSizeMb?: number | undefined;
        /**
         * The size of a pre-allocated memory range used for generated code.
         */
        codeRangeSizeMb?: number | undefined;
        /**
         * The default maximum stack size for the thread. Small values may lead to unusable Worker instances.
         * @default 4
         */
        stackSizeMb?: number | undefined;
    }
    interface WorkerEventMap {
        "error": [err: unknown];
        "exit": [exitCode: number];
        "message": [value: any];
        "messageerror": [error: Error];
        "online": [];
    }
    /**
     * The `Worker` class represents an independent JavaScript execution thread.
     * Most Node.js APIs are available inside of it.
     *
     * Notable differences inside a Worker environment are:
     *
     * * The `process.stdin`, `process.stdout`, and `process.stderr` streams may be redirected by the parent thread.
     * * The `import { isMainThread } from 'node:worker_threads'` variable is set to `false`.
     * * The `import { parentPort } from 'node:worker_threads'` message port is available.
     * * `process.exit()` does not stop the whole program, just the single thread,
     * and `process.abort()` is not available.
     * * `process.chdir()` and `process` methods that set group or user ids
     * are not available.
     * * `process.env` is a copy of the parent thread's environment variables,
     * unless otherwise specified. Changes to one copy are not visible in other
     * threads, and are not visible to native add-ons (unless `worker.SHARE_ENV` is passed as the `env` option to the `Worker` constructor). On Windows, unlike the main thread, a copy of the
     * environment variables operates in a case-sensitive manner.
     * * `process.title` cannot be modified.
     * * Signals are not delivered through `process.on('...')`.
     * * Execution may stop at any point as a result of `worker.terminate()` being invoked.
     * * IPC channels from parent processes are not accessible.
     * * The `trace_events` module is not supported.
     * * Native add-ons can only be loaded from multiple threads if they fulfill `certain conditions`.
     *
     * Creating `Worker` instances inside of other `Worker`s is possible.
     *
     * Like [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) and the `node:cluster module`, two-way communication
     * can be achieved through inter-thread message passing. Internally, a `Worker` has
     * a built-in pair of `MessagePort` s that are already associated with each
     * other when the `Worker` is created. While the `MessagePort` object on the parent
     * side is not directly exposed, its functionalities are exposed through `worker.postMessage()` and the `worker.on('message')` event
     * on the `Worker` object for the parent thread.
     *
     * To create custom messaging channels (which is encouraged over using the default
     * global channel because it facilitates separation of concerns), users can create
     * a `MessageChannel` object on either thread and pass one of the`MessagePort`s on that `MessageChannel` to the other thread through a
     * pre-existing channel, such as the global one.
     *
     * See `port.postMessage()` for more information on how messages are passed,
     * and what kind of JavaScript values can be successfully transported through
     * the thread barrier.
     *
     * ```js
     * import assert from 'node:assert';
     * import {
     *   Worker, MessageChannel, MessagePort, isMainThread, parentPort,
     * } from 'node:worker_threads';
     * if (isMainThread) {
     *   const worker = new Worker(__filename);
     *   const subChannel = new MessageChannel();
     *   worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1]);
     *   subChannel.port2.on('message', (value) => {
     *     console.log('received:', value);
     *   });
     * } else {
     *   parentPort.once('message', (value) => {
     *     assert(value.hereIsYourPort instanceof MessagePort);
     *     value.hereIsYourPort.postMessage('the worker is sending this');
     *     value.hereIsYourPort.close();
     *   });
     * }
     * ```
     * @since v10.5.0
     */
    class Worker implements EventEmitter {
        /**
         * If `stdin: true` was passed to the `Worker` constructor, this is a
         * writable stream. The data written to this stream will be made available in
         * the worker thread as `process.stdin`.
         * @since v10.5.0
         */
        readonly stdin: Writable | null;
        /**
         * This is a readable stream which contains data written to `process.stdout` inside the worker thread. If `stdout: true` was not passed to the `Worker` constructor, then data is piped to the
         * parent thread's `process.stdout` stream.
         * @since v10.5.0
         */
        readonly stdout: Readable;
        /**
         * This is a readable stream which contains data written to `process.stderr` inside the worker thread. If `stderr: true` was not passed to the `Worker` constructor, then data is piped to the
         * parent thread's `process.stderr` stream.
         * @since v10.5.0
         */
        readonly stderr: Readable;
        /**
         * An integer identifier for the referenced thread. Inside the worker thread,
         * it is available as `import { threadId } from 'node:worker_threads'`.
         * This value is unique for each `Worker` instance inside a single process.
         * @since v10.5.0
         */
        readonly threadId: number;
        /**
         * A string identifier for the referenced thread or null if the thread is not running.
         * Inside the worker thread, it is available as `require('node:worker_threads').threadName`.
         * @since v24.6.0
         */
        readonly threadName: string | null;
        /**
         * Provides the set of JS engine resource constraints for this Worker thread.
         * If the `resourceLimits` option was passed to the `Worker` constructor,
         * this matches its values.
         *
         * If the worker has stopped, the return value is an empty object.
         * @since v13.2.0, v12.16.0
         */
        readonly resourceLimits?: ResourceLimits | undefined;
        /**
         * An object that can be used to query performance information from a worker
         * instance. Similar to `perf_hooks.performance`.
         * @since v15.1.0, v14.17.0, v12.22.0
         */
        readonly performance: WorkerPerformance;
        /**
         * @param filename  The path to the Worker’s main script or module.
         *                  Must be either an absolute path or a relative path (i.e. relative to the current working directory) starting with ./ or ../,
         *                  or a WHATWG URL object using file: protocol. If options.eval is true, this is a string containing JavaScript code rather than a path.
         */
        constructor(filename: string | URL, options?: WorkerOptions);
        /**
         * Send a message to the worker that is received via `require('node:worker_threads').parentPort.on('message')`.
         * See `port.postMessage()` for more details.
         * @since v10.5.0
         */
        postMessage(value: any, transferList?: readonly Transferable[]): void;
        /**
         * Opposite of `unref()`, calling `ref()` on a previously `unref()`ed worker does _not_ let the program exit if it's the only active handle left (the default
         * behavior). If the worker is `ref()`ed, calling `ref()` again has
         * no effect.
         * @since v10.5.0
         */
        ref(): void;
        /**
         * Calling `unref()` on a worker allows the thread to exit if this is the only
         * active handle in the event system. If the worker is already `unref()`ed calling `unref()` again has no effect.
         * @since v10.5.0
         */
        unref(): void;
        /**
         * Stop all JavaScript execution in the worker thread as soon as possible.
         * Returns a Promise for the exit code that is fulfilled when the `'exit' event` is emitted.
         * @since v10.5.0
         */
        terminate(): Promise<number>;
        /**
         * This method returns a `Promise` that will resolve to an object identical to `process.threadCpuUsage()`,
         * or reject with an `ERR_WORKER_NOT_RUNNING` error if the worker is no longer running.
         * This methods allows the statistics to be observed from outside the actual thread.
         * @since v24.6.0
         */
        cpuUsage(prev?: NodeJS.CpuUsage): Promise<NodeJS.CpuUsage>;
        /**
         * Returns a readable stream for a V8 snapshot of the current state of the Worker.
         * See `v8.getHeapSnapshot()` for more details.
         *
         * If the Worker thread is no longer running, which may occur before the `'exit' event` is emitted, the returned `Promise` is rejected
         * immediately with an `ERR_WORKER_NOT_RUNNING` error.
         * @since v13.9.0, v12.17.0
         * @return A promise for a Readable Stream containing a V8 heap snapshot
         */
        getHeapSnapshot(): Promise<Readable>;
        /**
         * This method returns a `Promise` that will resolve to an object identical to `v8.getHeapStatistics()`,
         * or reject with an `ERR_WORKER_NOT_RUNNING` error if the worker is no longer running.
         * This methods allows the statistics to be observed from outside the actual thread.
         * @since v24.0.0
         */
        getHeapStatistics(): Promise<HeapInfo>;
        /**
         * Starting a CPU profile then return a Promise that fulfills with an error
         * or an `CPUProfileHandle` object. This API supports `await using` syntax.
         *
         * ```js
         * const { Worker } = require('node:worker_threads');
         *
         * const worker = new Worker(`
         *   const { parentPort } = require('worker_threads');
         *   parentPort.on('message', () => {});
         *   `, { eval: true });
         *
         * worker.on('online', async () => {
         *   const handle = await worker.startCpuProfile();
         *   const profile = await handle.stop();
         *   console.log(profile);
         *   worker.terminate();
         * });
         * ```
         *
         * `await using` example.
         *
         * ```js
         * const { Worker } = require('node:worker_threads');
         *
         * const w = new Worker(`
         *   const { parentPort } = require('node:worker_threads');
         *   parentPort.on('message', () => {});
         *   `, { eval: true });
         *
         * w.on('online', async () => {
         *   // Stop profile automatically when return and profile will be discarded
         *   await using handle = await w.startCpuProfile();
         * });
         * ```
         * @since v24.8.0
         */
        startCpuProfile(): Promise<CPUProfileHandle>;
        /**
         * Starting a Heap profile then return a Promise that fulfills with an error
         * or an `HeapProfileHandle` object. This API supports `await using` syntax.
         *
         * ```js
         * const { Worker } = require('node:worker_threads');
         *
         * const worker = new Worker(`
         *   const { parentPort } = require('worker_threads');
         *   parentPort.on('message', () => {});
         *   `, { eval: true });
         *
         * worker.on('online', async () => {
         *   const handle = await worker.startHeapProfile();
         *   const profile = await handle.stop();
         *   console.log(profile);
         *   worker.terminate();
         * });
         * ```
         *
         * `await using` example.
         *
         * ```js
         * const { Worker } = require('node:worker_threads');
         *
         * const w = new Worker(`
         *   const { parentPort } = require('node:worker_threads');
         *   parentPort.on('message', () => {});
         *   `, { eval: true });
         *
         * w.on('online', async () => {
         *   // Stop profile automatically when return and profile will be discarded
         *   await using handle = await w.startHeapProfile();
         * });
         * ```
         */
        startHeapProfile(): Promise<HeapProfileHandle>;
        /**
         * Calls `worker.terminate()` when the dispose scope is exited.
         *
         * ```js
         * async function example() {
         *   await using worker = new Worker('for (;;) {}', { eval: true });
         *   // Worker is automatically terminate when the scope is exited.
         * }
         * ```
         * @since v24.2.0
         */
        [Symbol.asyncDispose](): Promise<void>;
    }
    interface Worker extends InternalEventEmitter<WorkerEventMap> {}
    /**
     * Mark an object as not transferable. If `object` occurs in the transfer list of
     * a [`port.postMessage()`](https://nodejs.org/docs/latest-v25.x/api/worker_threads.html#portpostmessagevalue-transferlist) call, an error is thrown. This is a no-op if
     * `object` is a primitive value.
     *
     * In particular, this makes sense for objects that can be cloned, rather than
     * transferred, and which are used by other objects on the sending side.
     * For example, Node.js marks the `ArrayBuffer`s it uses for its
     * [`Buffer` pool](https://nodejs.org/docs/latest-v25.x/api/buffer.html#static-method-bufferallocunsafesize) with this.
     * `ArrayBuffer.prototype.transfer()` is disallowed on such array buffer
     * instances.
     *
     * This operation cannot be undone.
     *
     * ```js
     * import { MessageChannel, markAsUntransferable } from 'node:worker_threads';
     *
     * const pooledBuffer = new ArrayBuffer(8);
     * const typedArray1 = new Uint8Array(pooledBuffer);
     * const typedArray2 = new Float64Array(pooledBuffer);
     *
     * markAsUntransferable(pooledBuffer);
     *
     * const { port1 } = new MessageChannel();
     * try {
     *   // This will throw an error, because pooledBuffer is not transferable.
     *   port1.postMessage(typedArray1, [ typedArray1.buffer ]);
     * } catch (error) {
     *   // error.name === 'DataCloneError'
     * }
     *
     * // The following line prints the contents of typedArray1 -- it still owns
     * // its memory and has not been transferred. Without
     * // `markAsUntransferable()`, this would print an empty Uint8Array and the
     * // postMessage call would have succeeded.
     * // typedArray2 is intact as well.
     * console.log(typedArray1);
     * console.log(typedArray2);
     * ```
     *
     * There is no equivalent to this API in browsers.
     * @since v14.5.0, v12.19.0
     */
    function markAsUntransferable(object: object): void;
    /**
     * Check if an object is marked as not transferable with
     * {@link markAsUntransferable}.
     * @since v21.0.0
     */
    function isMarkedAsUntransferable(object: object): boolean;
    /**
     * Mark an object as not cloneable. If `object` is used as `message` in
     * a `port.postMessage()` call, an error is thrown. This is a no-op if `object` is a
     * primitive value.
     *
     * This has no effect on `ArrayBuffer`, or any `Buffer` like objects.
     *
     * This operation cannot be undone.
     *
     * ```js
     * const { markAsUncloneable } = require('node:worker_threads');
     *
     * const anyObject = { foo: 'bar' };
     * markAsUncloneable(anyObject);
     * const { port1 } = new MessageChannel();
     * try {
     *   // This will throw an error, because anyObject is not cloneable.
     *   port1.postMessage(anyObject)
     * } catch (error) {
     *   // error.name === 'DataCloneError'
     * }
     * ```
     *
     * There is no equivalent to this API in browsers.
     * @since v22.10.0
     */
    function markAsUncloneable(object: object): void;
    /**
     * Transfer a `MessagePort` to a different `vm` Context. The original `port` object is rendered unusable, and the returned `MessagePort` instance
     * takes its place.
     *
     * The returned `MessagePort` is an object in the target context and
     * inherits from its global `Object` class. Objects passed to the [`port.onmessage()`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessage) listener are also created in the
     * target context
     * and inherit from its global `Object` class.
     *
     * However, the created `MessagePort` no longer inherits from [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), and only
     * [`port.onmessage()`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessage) can be used to receive
     * events using it.
     * @since v11.13.0
     * @param port The message port to transfer.
     * @param contextifiedSandbox A `contextified` object as returned by the `vm.createContext()` method.
     */
    function moveMessagePortToContext(port: MessagePort, contextifiedSandbox: Context): MessagePort;
    /**
     * Receive a single message from a given `MessagePort`. If no message is available,`undefined` is returned, otherwise an object with a single `message` property
     * that contains the message payload, corresponding to the oldest message in the `MessagePort`'s queue.
     *
     * ```js
     * import { MessageChannel, receiveMessageOnPort } from 'node:worker_threads';
     * const { port1, port2 } = new MessageChannel();
     * port1.postMessage({ hello: 'world' });
     *
     * console.log(receiveMessageOnPort(port2));
     * // Prints: { message: { hello: 'world' } }
     * console.log(receiveMessageOnPort(port2));
     * // Prints: undefined
     * ```
     *
     * When this function is used, no `'message'` event is emitted and the `onmessage` listener is not invoked.
     * @since v12.3.0
     */
    function receiveMessageOnPort(port: MessagePort):
        | {
            message: any;
        }
        | undefined;
    type Serializable = string | object | number | boolean | bigint;
    /**
     * Within a worker thread, `worker.getEnvironmentData()` returns a clone
     * of data passed to the spawning thread's `worker.setEnvironmentData()`.
     * Every new `Worker` receives its own copy of the environment data
     * automatically.
     *
     * ```js
     * import {
     *   Worker,
     *   isMainThread,
     *   setEnvironmentData,
     *   getEnvironmentData,
     * } from 'node:worker_threads';
     *
     * if (isMainThread) {
     *   setEnvironmentData('Hello', 'World!');
     *   const worker = new Worker(__filename);
     * } else {
     *   console.log(getEnvironmentData('Hello'));  // Prints 'World!'.
     * }
     * ```
     * @since v15.12.0, v14.18.0
     * @param key Any arbitrary, cloneable JavaScript value that can be used as a {Map} key.
     */
    function getEnvironmentData(key: Serializable): Serializable;
    /**
     * The `worker.setEnvironmentData()` API sets the content of `worker.getEnvironmentData()` in the current thread and all new `Worker` instances spawned from the current context.
     * @since v15.12.0, v14.18.0
     * @param key Any arbitrary, cloneable JavaScript value that can be used as a {Map} key.
     * @param value Any arbitrary, cloneable JavaScript value that will be cloned and passed automatically to all new `Worker` instances. If `value` is passed as `undefined`, any previously set value
     * for the `key` will be deleted.
     */
    function setEnvironmentData(key: Serializable, value?: Serializable): void;
    /**
     * Sends a value to another worker, identified by its thread ID.
     * @param threadId The target thread ID. If the thread ID is invalid, a `ERR_WORKER_MESSAGING_FAILED` error will be thrown.
     * If the target thread ID is the current thread ID, a `ERR_WORKER_MESSAGING_SAME_THREAD` error will be thrown.
     * @param value The value to send.
     * @param transferList If one or more `MessagePort`-like objects are passed in value, a `transferList` is required for those items
     * or `ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST` is thrown. See `port.postMessage()` for more information.
     * @param timeout Time to wait for the message to be delivered in milliseconds. By default it's `undefined`, which means wait forever.
     * If the operation times out, a `ERR_WORKER_MESSAGING_TIMEOUT` error is thrown.
     * @since v22.5.0
     */
    function postMessageToThread(threadId: number, value: any, timeout?: number): Promise<void>;
    function postMessageToThread(
        threadId: number,
        value: any,
        transferList: readonly Transferable[],
        timeout?: number,
    ): Promise<void>;
    // #region web types
    type LockMode = "exclusive" | "shared";
    type Transferable =
        | ArrayBuffer
        | MessagePort
        | AbortSignal
        | FileHandle
        | ReadableStream
        | WritableStream
        | TransformStream;
    interface LockGrantedCallback<T> {
        (lock: Lock | null): T;
    }
    interface LockInfo {
        clientId: string;
        mode: LockMode;
        name: string;
    }
    interface LockManagerSnapshot {
        held: LockInfo[];
        pending: LockInfo[];
    }
    interface LockOptions {
        ifAvailable?: boolean;
        mode?: LockMode;
        signal?: AbortSignal;
        steal?: boolean;
    }
    interface StructuredSerializeOptions {
        transfer?: Transferable[];
    }
    interface BroadcastChannelEventMap {
        "message": MessageEvent;
        "messageerror": MessageEvent;
    }
    interface BroadcastChannel
        extends EventTarget, InternalEventTargetEventProperties<BroadcastChannelEventMap>, NodeJS.RefCounted
    {
        readonly name: string;
        close(): void;
        postMessage(message: any): void;
        addEventListener<K extends keyof BroadcastChannelEventMap>(
            type: K,
            listener: (ev: BroadcastChannelEventMap[K]) => void,
            options?: AddEventListenerOptions | boolean,
        ): void;
        addEventListener(
            type: string,
            listener: EventListener | EventListenerObject,
            options?: AddEventListenerOptions | boolean,
        ): void;
        removeEventListener<K extends keyof BroadcastChannelEventMap>(
            type: K,
            listener: (ev: BroadcastChannelEventMap[K]) => void,
            options?: EventListenerOptions | boolean,
        ): void;
        removeEventListener(
            type: string,
            listener: EventListener | EventListenerObject,
            options?: EventListenerOptions | boolean,
        ): void;
    }
    var BroadcastChannel: {
        prototype: BroadcastChannel;
        new(name: string): BroadcastChannel;
    };
    interface Lock {
        readonly mode: LockMode;
        readonly name: string;
    }
    // var Lock: {
    //     prototype: Lock;
    //     new(): Lock;
    // };
    interface LockManager {
        query(): Promise<LockManagerSnapshot>;
        request<T>(name: string, callback: LockGrantedCallback<T>): Promise<Awaited<T>>;
        request<T>(name: string, options: LockOptions, callback: LockGrantedCallback<T>): Promise<Awaited<T>>;
    }
    // var LockManager: {
    //     prototype: LockManager;
    //     new(): LockManager;
    // };
    interface MessageChannel {
        readonly port1: MessagePort;
        readonly port2: MessagePort;
    }
    var MessageChannel: {
        prototype: MessageChannel;
        new(): MessageChannel;
    };
    interface MessagePortEventMap {
        "close": Event;
        "message": MessageEvent;
        "messageerror": MessageEvent;
    }
    interface MessagePort extends NodeEventTarget, InternalEventTargetEventProperties<MessagePortEventMap> {
        close(): void;
        postMessage(message: any, transfer: Transferable[]): void;
        postMessage(message: any, options?: StructuredSerializeOptions): void;
        start(): void;
        hasRef(): boolean;
        ref(): void;
        unref(): void;
        addEventListener<K extends keyof MessagePortEventMap>(
            type: K,
            listener: (ev: MessagePortEventMap[K]) => void,
            options?: AddEventListenerOptions | boolean,
        ): void;
        addEventListener(
            type: string,
            listener: EventListener | EventListenerObject,
            options?: AddEventListenerOptions | boolean,
        ): void;
        removeEventListener<K extends keyof MessagePortEventMap>(
            type: K,
            listener: (ev: MessagePortEventMap[K]) => void,
            options?: EventListenerOptions | boolean,
        ): void;
        removeEventListener(
            type: string,
            listener: EventListener | EventListenerObject,
            options?: EventListenerOptions | boolean,
        ): void;
        // #region NodeEventTarget
        addListener(event: "close", listener: (ev: Event) => void): this;
        addListener(event: "message", listener: (value: any) => void): this;
        addListener(event: "messageerror", listener: (error: Error) => void): this;
        addListener(event: string, listener: (arg: any) => void): this;
        emit(event: "close", ev: Event): boolean;
        emit(event: "message", value: any): boolean;
        emit(event: "messageerror", error: Error): boolean;
        emit(event: string, arg: any): boolean;
        off(event: "close", listener: (ev: Event) => void, options?: EventListenerOptions): this;
        off(event: "message", listener: (value: any) => void, options?: EventListenerOptions): this;
        off(event: "messageerror", listener: (error: Error) => void, options?: EventListenerOptions): this;
        off(event: string, listener: (arg: any) => void, options?: EventListenerOptions): this;
        on(event: "close", listener: (ev: Event) => void): this;
        on(event: "message", listener: (value: any) => void): this;
        on(event: "messageerror", listener: (error: Error) => void): this;
        on(event: string, listener: (arg: any) => void): this;
        once(event: "close", listener: (ev: Event) => void): this;
        once(event: "message", listener: (value: any) => void): this;
        once(event: "messageerror", listener: (error: Error) => void): this;
        once(event: string, listener: (arg: any) => void): this;
        removeListener(event: "close", listener: (ev: Event) => void, options?: EventListenerOptions): this;
        removeListener(event: "message", listener: (value: any) => void, options?: EventListenerOptions): this;
        removeListener(event: "messageerror", listener: (error: Error) => void, options?: EventListenerOptions): this;
        removeListener(event: string, listener: (arg: any) => void, options?: EventListenerOptions): this;
        // #endregion
    }
    var MessagePort: {
        prototype: MessagePort;
        new(): MessagePort;
    };
    var locks: LockManager;
    export import structuredClone = globalThis.structuredClone;
    // #endregion
}
declare module "worker_threads" {
    export * from "node:worker_threads";
}
