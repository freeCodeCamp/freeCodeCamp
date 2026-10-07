declare module "node:stream/consumers" {
    import { Blob, NonSharedBuffer } from "node:buffer";
    import { ReadableStream } from "node:stream/web";
    /**
     * ```js
     * import { arrayBuffer } from 'node:stream/consumers';
     * import { Readable } from 'node:stream';
     * import { TextEncoder } from 'node:util';
     *
     * const encoder = new TextEncoder();
     * const dataArray = encoder.encode('hello world from consumers!');
     *
     * const readable = Readable.from(dataArray);
     * const data = await arrayBuffer(readable);
     * console.log(`from readable: ${data.byteLength}`);
     * // Prints: from readable: 76
     * ```
     * @since v16.7.0
     * @returns Fulfills with an `ArrayBuffer` containing the full contents of the stream.
     */
    function arrayBuffer(stream: ReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<ArrayBuffer>;
    /**
     * ```js
     * import { blob } from 'node:stream/consumers';
     *
     * const dataBlob = new Blob(['hello world from consumers!']);
     *
     * const readable = dataBlob.stream();
     * const data = await blob(readable);
     * console.log(`from readable: ${data.size}`);
     * // Prints: from readable: 27
     * ```
     * @since v16.7.0
     * @returns Fulfills with a `Blob` containing the full contents of the stream.
     */
    function blob(stream: ReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<Blob>;
    /**
     * ```js
     * import { buffer } from 'node:stream/consumers';
     * import { Readable } from 'node:stream';
     * import { Buffer } from 'node:buffer';
     *
     * const dataBuffer = Buffer.from('hello world from consumers!');
     *
     * const readable = Readable.from(dataBuffer);
     * const data = await buffer(readable);
     * console.log(`from readable: ${data.length}`);
     * // Prints: from readable: 27
     * ```
     * @since v16.7.0
     * @returns Fulfills with a `Buffer` containing the full contents of the stream.
     */
    function buffer(stream: ReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<NonSharedBuffer>;
    /**
     * ```js
     * import { bytes } from 'node:stream/consumers';
     * import { Readable } from 'node:stream';
     * import { Buffer } from 'node:buffer';
     *
     * const dataBuffer = Buffer.from('hello world from consumers!');
     *
     * const readable = Readable.from(dataBuffer);
     * const data = await bytes(readable);
     * console.log(`from readable: ${data.length}`);
     * // Prints: from readable: 27
     * ```
     * @since v25.6.0
     * @returns Fulfills with a `Uint8Array` containing the full contents of the stream.
     */
    function bytes(
        stream: ReadableStream | NodeJS.ReadableStream | AsyncIterable<any>,
    ): Promise<NodeJS.NonSharedUint8Array>;
    /**
     * ```js
     * import { json } from 'node:stream/consumers';
     * import { Readable } from 'node:stream';
     *
     * const items = Array.from(
     *   {
     *     length: 100,
     *   },
     *   () => ({
     *     message: 'hello world from consumers!',
     *   }),
     * );
     *
     * const readable = Readable.from(JSON.stringify(items));
     * const data = await json(readable);
     * console.log(`from readable: ${data.length}`);
     * // Prints: from readable: 100
     * ```
     * @since v16.7.0
     * @returns Fulfills with the contents of the stream parsed as a
     * UTF-8 encoded string that is then passed through `JSON.parse()`.
     */
    function json(stream: ReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<unknown>;
    /**
     * ```js
     * import { text } from 'node:stream/consumers';
     * import { Readable } from 'node:stream';
     *
     * const readable = Readable.from('Hello world from consumers!');
     * const data = await text(readable);
     * console.log(`from readable: ${data.length}`);
     * // Prints: from readable: 27
     * ```
     * @since v16.7.0
     * @returns Fulfills with the contents of the stream parsed as a UTF-8 encoded string.
     */
    function text(stream: ReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<string>;
}
declare module "stream/consumers" {
    export * from "node:stream/consumers";
}
