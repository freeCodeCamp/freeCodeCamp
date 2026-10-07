declare module "node:stream/promises" {
    import { Abortable } from "node:events";
    import {
        FinishedOptions as _FinishedOptions,
        PipelineDestination,
        PipelineSource,
        PipelineTransform,
    } from "node:stream";
    import { ReadableStream, WritableStream } from "node:stream/web";
    interface FinishedOptions extends _FinishedOptions {
        /**
         * If true, removes the listeners registered by this function before the promise is fulfilled.
         * @default false
         */
        cleanup?: boolean | undefined;
    }
    /**
     * ```js
     * import { finished } from 'node:stream/promises';
     * import { createReadStream } from 'node:fs';
     *
     * const rs = createReadStream('archive.tar');
     *
     * async function run() {
     *   await finished(rs);
     *   console.log('Stream is done reading.');
     * }
     *
     * run().catch(console.error);
     * rs.resume(); // Drain the stream.
     * ```
     *
     * The `finished` API also provides a [callback version](https://nodejs.org/docs/latest-v25.x/api/stream.html#streamfinishedstream-options-callback).
     *
     * `stream.finished()` leaves dangling event listeners (in particular
     * `'error'`, `'end'`, `'finish'` and `'close'`) after the returned promise is
     * resolved or rejected. The reason for this is so that unexpected `'error'`
     * events (due to incorrect stream implementations) do not cause unexpected
     * crashes. If this is unwanted behavior then `options.cleanup` should be set to
     * `true`:
     *
     * ```js
     * await finished(rs, { cleanup: true });
     * ```
     * @since v15.0.0
     * @returns Fulfills when the stream is no longer readable or writable.
     */
    function finished(
        stream: NodeJS.ReadableStream | NodeJS.WritableStream | ReadableStream | WritableStream,
        options?: FinishedOptions,
    ): Promise<void>;
    interface PipelineOptions extends Abortable {
        end?: boolean | undefined;
    }
    type PipelineResult<S extends PipelineDestination<any, any>> = S extends (...args: any[]) => PromiseLike<infer R>
        ? Promise<R>
        : Promise<void>;
    /**
     * ```js
     * import { pipeline } from 'node:stream/promises';
     * import { createReadStream, createWriteStream } from 'node:fs';
     * import { createGzip } from 'node:zlib';
     *
     * await pipeline(
     *   createReadStream('archive.tar'),
     *   createGzip(),
     *   createWriteStream('archive.tar.gz'),
     * );
     * console.log('Pipeline succeeded.');
     * ```
     *
     * To use an `AbortSignal`, pass it inside an options object, as the last argument.
     * When the signal is aborted, `destroy` will be called on the underlying pipeline,
     * with an `AbortError`.
     *
     * ```js
     * import { pipeline } from 'node:stream/promises';
     * import { createReadStream, createWriteStream } from 'node:fs';
     * import { createGzip } from 'node:zlib';
     *
     * const ac = new AbortController();
     * const { signal } = ac;
     * setImmediate(() => ac.abort());
     * try {
     *   await pipeline(
     *     createReadStream('archive.tar'),
     *     createGzip(),
     *     createWriteStream('archive.tar.gz'),
     *     { signal },
     *   );
     * } catch (err) {
     *   console.error(err); // AbortError
     * }
     * ```
     *
     * The `pipeline` API also supports async generators:
     *
     * ```js
     * import { pipeline } from 'node:stream/promises';
     * import { createReadStream, createWriteStream } from 'node:fs';
     *
     * await pipeline(
     *   createReadStream('lowercase.txt'),
     *   async function* (source, { signal }) {
     *     source.setEncoding('utf8');  // Work with strings rather than `Buffer`s.
     *     for await (const chunk of source) {
     *       yield await processChunk(chunk, { signal });
     *     }
     *   },
     *   createWriteStream('uppercase.txt'),
     * );
     * console.log('Pipeline succeeded.');
     * ```
     *
     * Remember to handle the `signal` argument passed into the async generator.
     * Especially in the case where the async generator is the source for the
     * pipeline (i.e. first argument) or the pipeline will never complete.
     *
     * ```js
     * import { pipeline } from 'node:stream/promises';
     * import fs from 'node:fs';
     * await pipeline(
     *   async function* ({ signal }) {
     *     await someLongRunningfn({ signal });
     *     yield 'asd';
     *   },
     *   fs.createWriteStream('uppercase.txt'),
     * );
     * console.log('Pipeline succeeded.');
     * ```
     *
     * The `pipeline` API provides [callback version](https://nodejs.org/docs/latest-v25.x/api/stream.html#streampipelinesource-transforms-destination-callback):
     * @since v15.0.0
     * @returns Fulfills when the pipeline is complete.
     */
    function pipeline<A extends PipelineSource<any>, B extends PipelineDestination<A, any>>(
        source: A,
        destination: B,
        options?: PipelineOptions,
    ): PipelineResult<B>;
    function pipeline<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        B extends PipelineDestination<T1, any>,
    >(
        source: A,
        transform1: T1,
        destination: B,
        options?: PipelineOptions,
    ): PipelineResult<B>;
    function pipeline<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        B extends PipelineDestination<T2, any>,
    >(
        source: A,
        transform1: T1,
        transform2: T2,
        destination: B,
        options?: PipelineOptions,
    ): PipelineResult<B>;
    function pipeline<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        T3 extends PipelineTransform<T2, any>,
        B extends PipelineDestination<T3, any>,
    >(
        source: A,
        transform1: T1,
        transform2: T2,
        transform3: T3,
        destination: B,
        options?: PipelineOptions,
    ): PipelineResult<B>;
    function pipeline<
        A extends PipelineSource<any>,
        T1 extends PipelineTransform<A, any>,
        T2 extends PipelineTransform<T1, any>,
        T3 extends PipelineTransform<T2, any>,
        T4 extends PipelineTransform<T3, any>,
        B extends PipelineDestination<T4, any>,
    >(
        source: A,
        transform1: T1,
        transform2: T2,
        transform3: T3,
        transform4: T4,
        destination: B,
        options?: PipelineOptions,
    ): PipelineResult<B>;
    function pipeline(
        streams: readonly [PipelineSource<any>, ...PipelineTransform<any, any>[], PipelineDestination<any, any>],
        options?: PipelineOptions,
    ): Promise<void>;
    function pipeline(
        ...streams: [PipelineSource<any>, ...PipelineTransform<any, any>[], PipelineDestination<any, any>]
    ): Promise<void>;
    function pipeline(
        ...streams: [
            PipelineSource<any>,
            ...PipelineTransform<any, any>[],
            PipelineDestination<any, any>,
            options: PipelineOptions,
        ]
    ): Promise<void>;
}
declare module "stream/promises" {
    export * from "node:stream/promises";
}
