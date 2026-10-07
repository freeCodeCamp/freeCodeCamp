declare module "node:stream/web" {
    import { TextDecoderCommon, TextDecoderOptions, TextEncoderCommon } from "node:util";
    type CompressionFormat = "brotli" | "deflate" | "deflate-raw" | "gzip";
    type ReadableStreamController<T> = ReadableStreamDefaultController<T> | ReadableByteStreamController;
    type ReadableStreamReader<T> = ReadableStreamDefaultReader<T> | ReadableStreamBYOBReader;
    type ReadableStreamReaderMode = "byob";
    type ReadableStreamReadResult<T> = ReadableStreamReadValueResult<T> | ReadableStreamReadDoneResult<T>;
    type ReadableStreamType = "bytes";
    interface GenericTransformStream {
        readonly readable: ReadableStream;
        readonly writable: WritableStream;
    }
    interface QueuingStrategy<T = any> {
        highWaterMark?: number;
        size?: QueuingStrategySize<T>;
    }
    interface QueuingStrategyInit {
        highWaterMark: number;
    }
    interface QueuingStrategySize<T = any> {
        (chunk: T): number;
    }
    interface ReadableStreamBYOBReaderReadOptions {
        min?: number;
    }
    interface ReadableStreamGenericReader {
        readonly closed: Promise<void>;
        cancel(reason?: any): Promise<void>;
    }
    interface ReadableStreamGetReaderOptions {
        mode?: ReadableStreamReaderMode;
    }
    interface ReadableStreamIteratorOptions {
        preventCancel?: boolean;
    }
    interface ReadableStreamReadDoneResult<T> {
        done: true;
        value: T | undefined;
    }
    interface ReadableStreamReadValueResult<T> {
        done: false;
        value: T;
    }
    interface ReadableWritablePair<R = any, W = any> {
        readable: ReadableStream<R>;
        writable: WritableStream<W>;
    }
    interface StreamPipeOptions {
        preventAbort?: boolean;
        preventCancel?: boolean;
        preventClose?: boolean;
        signal?: AbortSignal;
    }
    interface Transformer<I = any, O = any> {
        flush?: TransformerFlushCallback<O>;
        readableType?: undefined;
        start?: TransformerStartCallback<O>;
        transform?: TransformerTransformCallback<I, O>;
        writableType?: undefined;
    }
    interface TransformerFlushCallback<O> {
        (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
    }
    interface TransformerStartCallback<O> {
        (controller: TransformStreamDefaultController<O>): any;
    }
    interface TransformerTransformCallback<I, O> {
        (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
    }
    interface UnderlyingByteSource {
        autoAllocateChunkSize?: number;
        cancel?: UnderlyingSourceCancelCallback;
        pull?: (controller: ReadableByteStreamController) => void | PromiseLike<void>;
        start?: (controller: ReadableByteStreamController) => any;
        type: "bytes";
    }
    interface UnderlyingDefaultSource<R = any> {
        cancel?: UnderlyingSourceCancelCallback;
        pull?: (controller: ReadableStreamDefaultController<R>) => void | PromiseLike<void>;
        start?: (controller: ReadableStreamDefaultController<R>) => any;
        type?: undefined;
    }
    interface UnderlyingSink<W = any> {
        abort?: UnderlyingSinkAbortCallback;
        close?: UnderlyingSinkCloseCallback;
        start?: UnderlyingSinkStartCallback;
        type?: undefined;
        write?: UnderlyingSinkWriteCallback<W>;
    }
    interface UnderlyingSinkAbortCallback {
        (reason?: any): void | PromiseLike<void>;
    }
    interface UnderlyingSinkCloseCallback {
        (): void | PromiseLike<void>;
    }
    interface UnderlyingSinkStartCallback {
        (controller: WritableStreamDefaultController): any;
    }
    interface UnderlyingSinkWriteCallback<W> {
        (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
    }
    interface UnderlyingSource<R = any> {
        autoAllocateChunkSize?: number;
        cancel?: UnderlyingSourceCancelCallback;
        pull?: UnderlyingSourcePullCallback<R>;
        start?: UnderlyingSourceStartCallback<R>;
        type?: ReadableStreamType;
    }
    interface UnderlyingSourceCancelCallback {
        (reason?: any): void | PromiseLike<void>;
    }
    interface UnderlyingSourcePullCallback<R> {
        (controller: ReadableStreamController<R>): void | PromiseLike<void>;
    }
    interface UnderlyingSourceStartCallback<R> {
        (controller: ReadableStreamController<R>): any;
    }
    interface ByteLengthQueuingStrategy extends QueuingStrategy<NodeJS.ArrayBufferView> {
        readonly highWaterMark: number;
        readonly size: QueuingStrategySize<NodeJS.ArrayBufferView>;
    }
    var ByteLengthQueuingStrategy: {
        prototype: ByteLengthQueuingStrategy;
        new(init: QueuingStrategyInit): ByteLengthQueuingStrategy;
    };
    interface CompressionStream extends GenericTransformStream {
        readonly readable: ReadableStream<NodeJS.NonSharedUint8Array>;
        readonly writable: WritableStream<NodeJS.BufferSource>;
    }
    var CompressionStream: {
        prototype: CompressionStream;
        new(format: CompressionFormat): CompressionStream;
    };
    interface CountQueuingStrategy extends QueuingStrategy {
        readonly highWaterMark: number;
        readonly size: QueuingStrategySize;
    }
    var CountQueuingStrategy: {
        prototype: CountQueuingStrategy;
        new(init: QueuingStrategyInit): CountQueuingStrategy;
    };
    interface DecompressionStream extends GenericTransformStream {
        readonly readable: ReadableStream<NodeJS.NonSharedUint8Array>;
        readonly writable: WritableStream<NodeJS.BufferSource>;
    }
    var DecompressionStream: {
        prototype: DecompressionStream;
        new(format: CompressionFormat): DecompressionStream;
    };
    interface ReadableByteStreamController {
        readonly byobRequest: ReadableStreamBYOBRequest | null;
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk: NodeJS.NonSharedArrayBufferView): void;
        error(e?: any): void;
    }
    var ReadableByteStreamController: {
        prototype: ReadableByteStreamController;
        new(): ReadableByteStreamController;
    };
    interface ReadableStream<R = any> {
        readonly locked: boolean;
        cancel(reason?: any): Promise<void>;
        getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
        getReader(): ReadableStreamDefaultReader<R>;
        getReader(options?: ReadableStreamGetReaderOptions): ReadableStreamReader<R>;
        pipeThrough<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
        pipeTo(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
        tee(): [ReadableStream<R>, ReadableStream<R>];
        [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): ReadableStreamAsyncIterator<R>;
        values(options?: ReadableStreamIteratorOptions): ReadableStreamAsyncIterator<R>;
    }
    var ReadableStream: {
        prototype: ReadableStream;
        new(
            underlyingSource: UnderlyingByteSource,
            strategy?: { highWaterMark?: number },
        ): ReadableStream<NodeJS.NonSharedUint8Array>;
        new<R = any>(underlyingSource: UnderlyingDefaultSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
        new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
        from<R = any>(iterable: Iterable<R> | AsyncIterable<R>): ReadableStream<R>;
    };
    interface ReadableStreamAsyncIterator<T> extends NodeJS.AsyncIterator<T, NodeJS.BuiltinIteratorReturn, unknown> {
        [Symbol.asyncIterator](): ReadableStreamAsyncIterator<T>;
    }
    interface ReadableStreamBYOBReader extends ReadableStreamGenericReader {
        read<T extends NodeJS.NonSharedArrayBufferView>(
            view: T,
            options?: ReadableStreamBYOBReaderReadOptions,
        ): Promise<ReadableStreamReadResult<T>>;
        releaseLock(): void;
    }
    var ReadableStreamBYOBReader: {
        prototype: ReadableStreamBYOBReader;
        new(stream: ReadableStream<NodeJS.NonSharedUint8Array>): ReadableStreamBYOBReader;
    };
    interface ReadableStreamBYOBRequest {
        readonly view: NodeJS.NonSharedArrayBufferView | null;
        respond(bytesWritten: number): void;
        respondWithNewView(view: NodeJS.NonSharedArrayBufferView): void;
    }
    var ReadableStreamBYOBRequest: {
        prototype: ReadableStreamBYOBRequest;
        new(): ReadableStreamBYOBRequest;
    };
    interface ReadableStreamDefaultController<R = any> {
        readonly desiredSize: number | null;
        close(): void;
        enqueue(chunk: R): void;
        error(e?: any): void;
    }
    var ReadableStreamDefaultController: {
        prototype: ReadableStreamDefaultController;
        new(): ReadableStreamDefaultController;
    };
    interface ReadableStreamDefaultReader<R = any> extends ReadableStreamGenericReader {
        read(): Promise<ReadableStreamReadResult<R>>;
        releaseLock(): void;
    }
    var ReadableStreamDefaultReader: {
        prototype: ReadableStreamDefaultReader;
        new<R = any>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
    };
    interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
        readonly readable: ReadableStream<string>;
        readonly writable: WritableStream<NodeJS.BufferSource>;
    }
    var TextDecoderStream: {
        prototype: TextDecoderStream;
        new(label?: string, options?: TextDecoderOptions): TextDecoderStream;
    };
    interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
        readonly readable: ReadableStream<NodeJS.NonSharedUint8Array>;
        readonly writable: WritableStream<string>;
    }
    var TextEncoderStream: {
        prototype: TextEncoderStream;
        new(): TextEncoderStream;
    };
    interface TransformStream<I = any, O = any> {
        readonly readable: ReadableStream<O>;
        readonly writable: WritableStream<I>;
    }
    var TransformStream: {
        prototype: TransformStream;
        new<I = any, O = any>(
            transformer?: Transformer<I, O>,
            writableStrategy?: QueuingStrategy<I>,
            readableStrategy?: QueuingStrategy<O>,
        ): TransformStream<I, O>;
    };
    interface TransformStreamDefaultController<O = any> {
        readonly desiredSize: number | null;
        enqueue(chunk: O): void;
        error(reason?: any): void;
        terminate(): void;
    }
    var TransformStreamDefaultController: {
        prototype: TransformStreamDefaultController;
        new(): TransformStreamDefaultController;
    };
    interface WritableStream<W = any> {
        readonly locked: boolean;
        abort(reason?: any): Promise<void>;
        close(): Promise<void>;
        getWriter(): WritableStreamDefaultWriter<W>;
    }
    var WritableStream: {
        prototype: WritableStream;
        new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
    };
    interface WritableStreamDefaultController {
        readonly signal: AbortSignal;
        error(e?: any): void;
    }
    var WritableStreamDefaultController: {
        prototype: WritableStreamDefaultController;
        new(): WritableStreamDefaultController;
    };
    interface WritableStreamDefaultWriter<W = any> {
        readonly closed: Promise<void>;
        readonly desiredSize: number | null;
        readonly ready: Promise<void>;
        abort(reason?: any): Promise<void>;
        close(): Promise<void>;
        releaseLock(): void;
        write(chunk: W): Promise<void>;
    }
    var WritableStreamDefaultWriter: {
        prototype: WritableStreamDefaultWriter;
        new<W = any>(stream: WritableStream<W>): WritableStreamDefaultWriter<W>;
    };
}
declare module "stream/web" {
    export * from "node:stream/web";
}
