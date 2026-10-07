import { EventEmitter } from 'node:events';
import { StringDecoder } from 'node:string_decoder';
/**
 * Same as StringDecoder, but exposing the `lastNeed` flag on the type
 */
type SD = StringDecoder & {
    lastNeed: boolean;
};
export type { SD, Pipe, PipeProxyErrors };
/**
 * Return true if the argument is a Minipass stream, Node stream, or something
 * else that Minipass can interact with.
 */
export declare const isStream: (s: any) => s is Minipass<any, any, any> | NodeJS.ReadStream | NodeJS.WriteStream | (EventEmitter<any> & {
    end(): any;
    write(chunk: any, ...args: any[]): any;
}) | (EventEmitter<any> & {
    pause(): any;
    resume(): any;
    pipe(...destArgs: any[]): any;
}) | (NodeJS.ReadStream & {
    fd: number;
}) | (NodeJS.WriteStream & {
    fd: number;
});
/**
 * Return true if the argument is a valid {@link Minipass.Readable}
 */
export declare const isReadable: (s: any) => s is Minipass.Readable;
/**
 * Return true if the argument is a valid {@link Minipass.Writable}
 */
export declare const isWritable: (s: any) => s is Minipass.Readable;
declare const EOF: unique symbol;
declare const MAYBE_EMIT_END: unique symbol;
declare const EMITTED_END: unique symbol;
declare const EMITTING_END: unique symbol;
declare const EMITTED_ERROR: unique symbol;
declare const CLOSED: unique symbol;
declare const READ: unique symbol;
declare const FLUSH: unique symbol;
declare const FLUSHCHUNK: unique symbol;
declare const ENCODING: unique symbol;
declare const DECODER: unique symbol;
declare const FLOWING: unique symbol;
declare const PAUSED: unique symbol;
declare const RESUME: unique symbol;
declare const BUFFER: unique symbol;
declare const PIPES: unique symbol;
declare const BUFFERLENGTH: unique symbol;
declare const BUFFERPUSH: unique symbol;
declare const BUFFERSHIFT: unique symbol;
declare const OBJECTMODE: unique symbol;
declare const DESTROYED: unique symbol;
declare const ERROR: unique symbol;
declare const EMITDATA: unique symbol;
declare const EMITEND: unique symbol;
declare const EMITEND2: unique symbol;
declare const ASYNC: unique symbol;
declare const ABORT: unique symbol;
declare const ABORTED: unique symbol;
declare const SIGNAL: unique symbol;
declare const DATALISTENERS: unique symbol;
declare const DISCARDED: unique symbol;
/**
 * Options that may be passed to stream.pipe()
 */
export interface PipeOptions {
    /**
     * end the destination stream when the source stream ends
     */
    end?: boolean;
    /**
     * proxy errors from the source stream to the destination stream
     */
    proxyErrors?: boolean;
}
/**
 * Internal class representing a pipe to a destination stream.
 *
 * @internal
 */
declare class Pipe<T extends unknown> {
    src: Minipass<T>;
    dest: Minipass<any, T>;
    opts: PipeOptions;
    ondrain: () => any;
    constructor(src: Minipass<T>, dest: Minipass.Writable, opts: PipeOptions);
    unpipe(): void;
    proxyErrors(_er: any): void;
    end(): void;
}
/**
 * Internal class representing a pipe to a destination stream where
 * errors are proxied.
 *
 * @internal
 */
declare class PipeProxyErrors<T> extends Pipe<T> {
    unpipe(): void;
    constructor(src: Minipass<T>, dest: Minipass.Writable, opts: PipeOptions);
}
export declare namespace Minipass {
    /**
     * Encoding used to create a stream that outputs strings rather than
     * Buffer objects.
     */
    export type Encoding = BufferEncoding | 'buffer' | null;
    /**
     * Any stream that Minipass can pipe into
     */
    export type Writable = Minipass<any, any, any> | NodeJS.WriteStream | (NodeJS.WriteStream & {
        fd: number;
    }) | (EventEmitter & {
        end(): any;
        write(chunk: any, ...args: any[]): any;
    });
    /**
     * Any stream that can be read from
     */
    export type Readable = Minipass<any, any, any> | NodeJS.ReadStream | (NodeJS.ReadStream & {
        fd: number;
    }) | (EventEmitter & {
        pause(): any;
        resume(): any;
        pipe(...destArgs: any[]): any;
    });
    /**
     * Utility type that can be iterated sync or async
     */
    export type DualIterable<T> = Iterable<T> & AsyncIterable<T>;
    type EventArguments = Record<string | symbol, unknown[]>;
    /**
     * The listing of events that a Minipass class can emit.
     * Extend this when extending the Minipass class, and pass as
     * the third template argument.  The key is the name of the event,
     * and the value is the argument list.
     *
     * Any undeclared events will still be allowed, but the handler will get
     * arguments as `unknown[]`.
     */
    export interface Events<RType extends any = Buffer> extends EventArguments {
        readable: [];
        data: [chunk: RType];
        error: [er: unknown];
        abort: [reason: unknown];
        drain: [];
        resume: [];
        end: [];
        finish: [];
        prefinish: [];
        close: [];
        [DESTROYED]: [er?: unknown];
        [ERROR]: [er: unknown];
    }
    /**
     * String or buffer-like data that can be joined and sliced
     */
    export type ContiguousData = Buffer | ArrayBufferLike | ArrayBufferView | string;
    export type BufferOrString = Buffer | string;
    /**
     * Options passed to the Minipass constructor.
     */
    export type SharedOptions = {
        /**
         * Defer all data emission and other events until the end of the
         * current tick, similar to Node core streams
         */
        async?: boolean;
        /**
         * A signal which will abort the stream
         */
        signal?: AbortSignal;
        /**
         * Output string encoding. Set to `null` or `'buffer'` (or omit) to
         * emit Buffer objects rather than strings.
         *
         * Conflicts with `objectMode`
         */
        encoding?: BufferEncoding | null | 'buffer';
        /**
         * Output data exactly as it was written, supporting non-buffer/string
         * data (such as arbitrary objects, falsey values, etc.)
         *
         * Conflicts with `encoding`
         */
        objectMode?: boolean;
    };
    /**
     * Options for a string encoded output
     */
    export type EncodingOptions = SharedOptions & {
        encoding: BufferEncoding;
        objectMode?: false;
    };
    /**
     * Options for contiguous data buffer output
     */
    export type BufferOptions = SharedOptions & {
        encoding?: null | 'buffer';
        objectMode?: false;
    };
    /**
     * Options for objectMode arbitrary output
     */
    export type ObjectModeOptions = SharedOptions & {
        objectMode: true;
        encoding?: null;
    };
    /**
     * Utility type to determine allowed options based on read type
     */
    export type Options<T> = ObjectModeOptions | (T extends string ? EncodingOptions : T extends Buffer ? BufferOptions : SharedOptions);
    export {};
}
/**
 * Main export, the Minipass class
 *
 * `RType` is the type of data emitted, defaults to Buffer
 *
 * `WType` is the type of data to be written, if RType is buffer or string,
 * then any {@link Minipass.ContiguousData} is allowed.
 *
 * `Events` is the set of event handler signatures that this object
 * will emit, see {@link Minipass.Events}
 */
export declare class Minipass<RType extends unknown = Buffer, WType extends unknown = RType extends Minipass.BufferOrString ? Minipass.ContiguousData : RType, Events extends Minipass.Events<RType> = Minipass.Events<RType>> extends EventEmitter implements Minipass.DualIterable<RType> {
    [FLOWING]: boolean;
    [PAUSED]: boolean;
    [PIPES]: Pipe<RType>[];
    [BUFFER]: RType[];
    [OBJECTMODE]: boolean;
    [ENCODING]: BufferEncoding | null;
    [ASYNC]: boolean;
    [DECODER]: SD | null;
    [EOF]: boolean;
    [EMITTED_END]: boolean;
    [EMITTING_END]: boolean;
    [CLOSED]: boolean;
    [EMITTED_ERROR]: unknown;
    [BUFFERLENGTH]: number;
    [DESTROYED]: boolean;
    [SIGNAL]?: AbortSignal;
    [ABORTED]: boolean;
    [DATALISTENERS]: number;
    [DISCARDED]: boolean;
    /**
     * true if the stream can be written
     */
    writable: boolean;
    /**
     * true if the stream can be read
     */
    readable: boolean;
    /**
     * If `RType` is Buffer, then options do not need to be provided.
     * Otherwise, an options object must be provided to specify either
     * {@link Minipass.SharedOptions.objectMode} or
     * {@link Minipass.SharedOptions.encoding}, as appropriate.
     */
    constructor(...args: [Minipass.ObjectModeOptions] | (RType extends Buffer ? [] | [Minipass.Options<RType>] : [Minipass.Options<RType>]));
    /**
     * The amount of data stored in the buffer waiting to be read.
     *
     * For Buffer strings, this will be the total byte length.
     * For string encoding streams, this will be the string character length,
     * according to JavaScript's `string.length` logic.
     * For objectMode streams, this is a count of the items waiting to be
     * emitted.
     */
    get bufferLength(): number;
    /**
     * The `BufferEncoding` currently in use, or `null`
     */
    get encoding(): BufferEncoding | null;
    /**
     * @deprecated - This is a read only property
     */
    set encoding(_enc: BufferEncoding | null);
    /**
     * @deprecated - Encoding may only be set at instantiation time
     */
    setEncoding(_enc: Minipass.Encoding): void;
    /**
     * True if this is an objectMode stream
     */
    get objectMode(): boolean;
    /**
     * @deprecated - This is a read-only property
     */
    set objectMode(_om: boolean);
    /**
     * true if this is an async stream
     */
    get ['async'](): boolean;
    /**
     * Set to true to make this stream async.
     *
     * Once set, it cannot be unset, as this would potentially cause incorrect
     * behavior.  Ie, a sync stream can be made async, but an async stream
     * cannot be safely made sync.
     */
    set ['async'](a: boolean);
    [ABORT](): void;
    /**
     * True if the stream has been aborted.
     */
    get aborted(): boolean;
    /**
     * No-op setter. Stream aborted status is set via the AbortSignal provided
     * in the constructor options.
     */
    set aborted(_: boolean);
    /**
     * Write data into the stream
     *
     * If the chunk written is a string, and encoding is not specified, then
     * `utf8` will be assumed. If the stream encoding matches the encoding of
     * a written string, and the state of the string decoder allows it, then
     * the string will be passed through to either the output or the internal
     * buffer without any processing. Otherwise, it will be turned into a
     * Buffer object for processing into the desired encoding.
     *
     * If provided, `cb` function is called immediately before return for
     * sync streams, or on next tick for async streams, because for this
     * base class, a chunk is considered "processed" once it is accepted
     * and either emitted or buffered. That is, the callback does not indicate
     * that the chunk has been eventually emitted, though of course child
     * classes can override this function to do whatever processing is required
     * and call `super.write(...)` only once processing is completed.
     */
    write(chunk: WType, cb?: () => void): boolean;
    write(chunk: WType, encoding?: Minipass.Encoding, cb?: () => void): boolean;
    /**
     * Low-level explicit read method.
     *
     * In objectMode, the argument is ignored, and one item is returned if
     * available.
     *
     * `n` is the number of bytes (or in the case of encoding streams,
     * characters) to consume. If `n` is not provided, then the entire buffer
     * is returned, or `null` is returned if no data is available.
     *
     * If `n` is greater that the amount of data in the internal buffer,
     * then `null` is returned.
     */
    read(n?: number | null): RType | null;
    [READ](n: number | null, chunk: RType): RType;
    /**
     * End the stream, optionally providing a final write.
     *
     * See {@link Minipass#write} for argument descriptions
     */
    end(cb?: () => void): this;
    end(chunk: WType, cb?: () => void): this;
    end(chunk: WType, encoding?: Minipass.Encoding, cb?: () => void): this;
    [RESUME](): void;
    /**
     * Resume the stream if it is currently in a paused state
     *
     * If called when there are no pipe destinations or `data` event listeners,
     * this will place the stream in a "discarded" state, where all data will
     * be thrown away. The discarded state is removed if a pipe destination or
     * data handler is added, if pause() is called, or if any synchronous or
     * asynchronous iteration is started.
     */
    resume(): void;
    /**
     * Pause the stream
     */
    pause(): void;
    /**
     * true if the stream has been forcibly destroyed
     */
    get destroyed(): boolean;
    /**
     * true if the stream is currently in a flowing state, meaning that
     * any writes will be immediately emitted.
     */
    get flowing(): boolean;
    /**
     * true if the stream is currently in a paused state
     */
    get paused(): boolean;
    [BUFFERPUSH](chunk: RType): void;
    [BUFFERSHIFT](): RType;
    [FLUSH](noDrain?: boolean): void;
    [FLUSHCHUNK](chunk: RType): boolean;
    /**
     * Pipe all data emitted by this stream into the destination provided.
     *
     * Triggers the flow of data.
     */
    pipe<W extends Minipass.Writable>(dest: W, opts?: PipeOptions): W;
    /**
     * Fully unhook a piped destination stream.
     *
     * If the destination stream was the only consumer of this stream (ie,
     * there are no other piped destinations or `'data'` event listeners)
     * then the flow of data will stop until there is another consumer or
     * {@link Minipass#resume} is explicitly called.
     */
    unpipe<W extends Minipass.Writable>(dest: W): void;
    /**
     * Alias for {@link Minipass#on}
     */
    addListener<Event extends keyof Events>(ev: Event, handler: (...args: Events[Event]) => any): this;
    /**
     * Mostly identical to `EventEmitter.on`, with the following
     * behavior differences to prevent data loss and unnecessary hangs:
     *
     * - Adding a 'data' event handler will trigger the flow of data
     *
     * - Adding a 'readable' event handler when there is data waiting to be read
     *   will cause 'readable' to be emitted immediately.
     *
     * - Adding an 'endish' event handler ('end', 'finish', etc.) which has
     *   already passed will cause the event to be emitted immediately and all
     *   handlers removed.
     *
     * - Adding an 'error' event handler after an error has been emitted will
     *   cause the event to be re-emitted immediately with the error previously
     *   raised.
     */
    on<Event extends keyof Events>(ev: Event, handler: (...args: Events[Event]) => any): this;
    /**
     * Alias for {@link Minipass#off}
     */
    removeListener<Event extends keyof Events>(ev: Event, handler: (...args: Events[Event]) => any): this;
    /**
     * Mostly identical to `EventEmitter.off`
     *
     * If a 'data' event handler is removed, and it was the last consumer
     * (ie, there are no pipe destinations or other 'data' event listeners),
     * then the flow of data will stop until there is another consumer or
     * {@link Minipass#resume} is explicitly called.
     */
    off<Event extends keyof Events>(ev: Event, handler: (...args: Events[Event]) => any): this;
    /**
     * Mostly identical to `EventEmitter.removeAllListeners`
     *
     * If all 'data' event handlers are removed, and they were the last consumer
     * (ie, there are no pipe destinations), then the flow of data will stop
     * until there is another consumer or {@link Minipass#resume} is explicitly
     * called.
     */
    removeAllListeners<Event extends keyof Events>(ev?: Event): this;
    /**
     * true if the 'end' event has been emitted
     */
    get emittedEnd(): boolean;
    [MAYBE_EMIT_END](): void;
    /**
     * Mostly identical to `EventEmitter.emit`, with the following
     * behavior differences to prevent data loss and unnecessary hangs:
     *
     * If the stream has been destroyed, and the event is something other
     * than 'close' or 'error', then `false` is returned and no handlers
     * are called.
     *
     * If the event is 'end', and has already been emitted, then the event
     * is ignored. If the stream is in a paused or non-flowing state, then
     * the event will be deferred until data flow resumes. If the stream is
     * async, then handlers will be called on the next tick rather than
     * immediately.
     *
     * If the event is 'close', and 'end' has not yet been emitted, then
     * the event will be deferred until after 'end' is emitted.
     *
     * If the event is 'error', and an AbortSignal was provided for the stream,
     * and there are no listeners, then the event is ignored, matching the
     * behavior of node core streams in the presense of an AbortSignal.
     *
     * If the event is 'finish' or 'prefinish', then all listeners will be
     * removed after emitting the event, to prevent double-firing.
     */
    emit<Event extends keyof Events>(ev: Event, ...args: Events[Event]): boolean;
    [EMITDATA](data: RType): boolean;
    [EMITEND](): boolean;
    [EMITEND2](): boolean;
    /**
     * Return a Promise that resolves to an array of all emitted data once
     * the stream ends.
     */
    collect(): Promise<RType[] & {
        dataLength: number;
    }>;
    /**
     * Return a Promise that resolves to the concatenation of all emitted data
     * once the stream ends.
     *
     * Not allowed on objectMode streams.
     */
    concat(): Promise<RType>;
    /**
     * Return a void Promise that resolves once the stream ends.
     */
    promise(): Promise<void>;
    /**
     * Asynchronous `for await of` iteration.
     *
     * This will continue emitting all chunks until the stream terminates.
     */
    [Symbol.asyncIterator](): AsyncGenerator<RType, void, void>;
    /**
     * Synchronous `for of` iteration.
     *
     * The iteration will terminate when the internal buffer runs out, even
     * if the stream has not yet terminated.
     */
    [Symbol.iterator](): Generator<RType, void, void>;
    /**
     * Destroy a stream, preventing it from being used for any further purpose.
     *
     * If the stream has a `close()` method, then it will be called on
     * destruction.
     *
     * After destruction, any attempt to write data, read data, or emit most
     * events will be ignored.
     *
     * If an error argument is provided, then it will be emitted in an
     * 'error' event.
     */
    destroy(er?: unknown): this;
    /**
     * Alias for {@link isStream}
     *
     * Former export location, maintained for backwards compatibility.
     *
     * @deprecated
     */
    static get isStream(): (s: any) => s is Minipass<any, any, any> | NodeJS.ReadStream | NodeJS.WriteStream | (EventEmitter<any> & {
        end(): any;
        write(chunk: any, ...args: any[]): any;
    }) | (EventEmitter<any> & {
        pause(): any;
        resume(): any;
        pipe(...destArgs: any[]): any;
    }) | (NodeJS.ReadStream & {
        fd: number;
    }) | (NodeJS.WriteStream & {
        fd: number;
    });
}
//# sourceMappingURL=index.d.ts.map