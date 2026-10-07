/**
 * The utility consumer functions provide common options for consuming
 * streams.
 * @since v16.7.0
 */
declare module "stream/consumers" {
    import { Blob as NodeBlob, NonSharedBuffer } from "node:buffer";
    import { ReadableStream as WebReadableStream } from "node:stream/web";
    /**
     * @since v16.7.0
     * @returns Fulfills with an `ArrayBuffer` containing the full contents of the stream.
     */
    function arrayBuffer(stream: WebReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<ArrayBuffer>;
    /**
     * @since v16.7.0
     * @returns Fulfills with a `Blob` containing the full contents of the stream.
     */
    function blob(stream: WebReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<NodeBlob>;
    /**
     * @since v16.7.0
     * @returns Fulfills with a `Buffer` containing the full contents of the stream.
     */
    function buffer(stream: WebReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<NonSharedBuffer>;
    /**
     * @since v16.7.0
     * @returns Fulfills with the contents of the stream parsed as a
     * UTF-8 encoded string that is then passed through `JSON.parse()`.
     */
    function json(stream: WebReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<unknown>;
    /**
     * @since v16.7.0
     * @returns Fulfills with the contents of the stream parsed as a UTF-8 encoded string.
     */
    function text(stream: WebReadableStream | NodeJS.ReadableStream | AsyncIterable<any>): Promise<string>;
}
declare module "node:stream/consumers" {
    export * from "stream/consumers";
}
