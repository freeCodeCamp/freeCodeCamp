/**
 * The `node:http2` module provides an implementation of the [HTTP/2](https://tools.ietf.org/html/rfc7540) protocol.
 * It can be accessed using:
 *
 * ```js
 * import http2 from 'node:http2';
 * ```
 * @since v8.4.0
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/http2.js)
 */
declare module "http2" {
    import { NonSharedBuffer } from "node:buffer";
    import EventEmitter = require("node:events");
    import * as fs from "node:fs";
    import * as net from "node:net";
    import * as stream from "node:stream";
    import * as tls from "node:tls";
    import * as url from "node:url";
    import {
        IncomingHttpHeaders as Http1IncomingHttpHeaders,
        IncomingMessage,
        OutgoingHttpHeaders,
        ServerResponse,
    } from "node:http";
    export { OutgoingHttpHeaders } from "node:http";
    export interface IncomingHttpStatusHeader {
        ":status"?: number | undefined;
    }
    export interface IncomingHttpHeaders extends Http1IncomingHttpHeaders {
        ":path"?: string | undefined;
        ":method"?: string | undefined;
        ":authority"?: string | undefined;
        ":scheme"?: string | undefined;
    }
    // Http2Stream
    export interface StreamState {
        localWindowSize?: number | undefined;
        state?: number | undefined;
        localClose?: number | undefined;
        remoteClose?: number | undefined;
        /** @deprecated */
        sumDependencyWeight?: number | undefined;
        /** @deprecated */
        weight?: number | undefined;
    }
    export interface ServerStreamResponseOptions {
        endStream?: boolean | undefined;
        waitForTrailers?: boolean | undefined;
    }
    export interface StatOptions {
        offset: number;
        length: number;
    }
    export interface ServerStreamFileResponseOptions {
        statCheck?:
            | ((stats: fs.Stats, headers: OutgoingHttpHeaders, statOptions: StatOptions) => void)
            | undefined;
        waitForTrailers?: boolean | undefined;
        offset?: number | undefined;
        length?: number | undefined;
    }
    export interface ServerStreamFileResponseOptionsWithError extends ServerStreamFileResponseOptions {
        onError?: ((err: NodeJS.ErrnoException) => void) | undefined;
    }
    export interface Http2Stream extends stream.Duplex {
        /**
         * Set to `true` if the `Http2Stream` instance was aborted abnormally. When set,
         * the `'aborted'` event will have been emitted.
         * @since v8.4.0
         */
        readonly aborted: boolean;
        /**
         * This property shows the number of characters currently buffered to be written.
         * See `net.Socket.bufferSize` for details.
         * @since v11.2.0, v10.16.0
         */
        readonly bufferSize: number;
        /**
         * Set to `true` if the `Http2Stream` instance has been closed.
         * @since v9.4.0
         */
        readonly closed: boolean;
        /**
         * Set to `true` if the `Http2Stream` instance has been destroyed and is no longer
         * usable.
         * @since v8.4.0
         */
        readonly destroyed: boolean;
        /**
         * Set to `true` if the `END_STREAM` flag was set in the request or response
         * HEADERS frame received, indicating that no additional data should be received
         * and the readable side of the `Http2Stream` will be closed.
         * @since v10.11.0
         */
        readonly endAfterHeaders: boolean;
        /**
         * The numeric stream identifier of this `Http2Stream` instance. Set to `undefined` if the stream identifier has not yet been assigned.
         * @since v8.4.0
         */
        readonly id?: number | undefined;
        /**
         * Set to `true` if the `Http2Stream` instance has not yet been assigned a
         * numeric stream identifier.
         * @since v9.4.0
         */
        readonly pending: boolean;
        /**
         * Set to the `RST_STREAM` `error code` reported when the `Http2Stream` is
         * destroyed after either receiving an `RST_STREAM` frame from the connected peer,
         * calling `http2stream.close()`, or `http2stream.destroy()`. Will be `undefined` if the `Http2Stream` has not been closed.
         * @since v8.4.0
         */
        readonly rstCode: number;
        /**
         * An object containing the outbound headers sent for this `Http2Stream`.
         * @since v9.5.0
         */
        readonly sentHeaders: OutgoingHttpHeaders;
        /**
         * An array of objects containing the outbound informational (additional) headers
         * sent for this `Http2Stream`.
         * @since v9.5.0
         */
        readonly sentInfoHeaders?: OutgoingHttpHeaders[] | undefined;
        /**
         * An object containing the outbound trailers sent for this `HttpStream`.
         * @since v9.5.0
         */
        readonly sentTrailers?: OutgoingHttpHeaders | undefined;
        /**
         * A reference to the `Http2Session` instance that owns this `Http2Stream`. The
         * value will be `undefined` after the `Http2Stream` instance is destroyed.
         * @since v8.4.0
         */
        readonly session: Http2Session | undefined;
        /**
         * Provides miscellaneous information about the current state of the `Http2Stream`.
         *
         * A current state of this `Http2Stream`.
         * @since v8.4.0
         */
        readonly state: StreamState;
        /**
         * Closes the `Http2Stream` instance by sending an `RST_STREAM` frame to the
         * connected HTTP/2 peer.
         * @since v8.4.0
         * @param [code=http2.constants.NGHTTP2_NO_ERROR] Unsigned 32-bit integer identifying the error code.
         * @param callback An optional function registered to listen for the `'close'` event.
         */
        close(code?: number, callback?: () => void): void;
        /**
         * @deprecated Priority signaling is no longer supported in Node.js.
         */
        priority(options: unknown): void;
        /**
         * ```js
         * import http2 from 'node:http2';
         * const client = http2.connect('http://example.org:8000');
         * const { NGHTTP2_CANCEL } = http2.constants;
         * const req = client.request({ ':path': '/' });
         *
         * // Cancel the stream if there's no activity after 5 seconds
         * req.setTimeout(5000, () => req.close(NGHTTP2_CANCEL));
         * ```
         * @since v8.4.0
         */
        setTimeout(msecs: number, callback?: () => void): void;
        /**
         * Sends a trailing `HEADERS` frame to the connected HTTP/2 peer. This method
         * will cause the `Http2Stream` to be immediately closed and must only be
         * called after the `'wantTrailers'` event has been emitted. When sending a
         * request or sending a response, the `options.waitForTrailers` option must be set
         * in order to keep the `Http2Stream` open after the final `DATA` frame so that
         * trailers can be sent.
         *
         * ```js
         * import http2 from 'node:http2';
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   stream.respond(undefined, { waitForTrailers: true });
         *   stream.on('wantTrailers', () => {
         *     stream.sendTrailers({ xyz: 'abc' });
         *   });
         *   stream.end('Hello World');
         * });
         * ```
         *
         * The HTTP/1 specification forbids trailers from containing HTTP/2 pseudo-header
         * fields (e.g. `':method'`, `':path'`, etc).
         * @since v10.0.0
         */
        sendTrailers(headers: OutgoingHttpHeaders): void;
        addListener(event: "aborted", listener: () => void): this;
        addListener(event: "close", listener: () => void): this;
        addListener(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        addListener(event: "drain", listener: () => void): this;
        addListener(event: "end", listener: () => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: "finish", listener: () => void): this;
        addListener(event: "frameError", listener: (frameType: number, errorCode: number) => void): this;
        addListener(event: "pipe", listener: (src: stream.Readable) => void): this;
        addListener(event: "unpipe", listener: (src: stream.Readable) => void): this;
        addListener(event: "streamClosed", listener: (code: number) => void): this;
        addListener(event: "timeout", listener: () => void): this;
        addListener(event: "trailers", listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        addListener(event: "wantTrailers", listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: "aborted"): boolean;
        emit(event: "close"): boolean;
        emit(event: "data", chunk: NonSharedBuffer | string): boolean;
        emit(event: "drain"): boolean;
        emit(event: "end"): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: "finish"): boolean;
        emit(event: "frameError", frameType: number, errorCode: number): boolean;
        emit(event: "pipe", src: stream.Readable): boolean;
        emit(event: "unpipe", src: stream.Readable): boolean;
        emit(event: "streamClosed", code: number): boolean;
        emit(event: "timeout"): boolean;
        emit(event: "trailers", trailers: IncomingHttpHeaders, flags: number): boolean;
        emit(event: "wantTrailers"): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: "aborted", listener: () => void): this;
        on(event: "close", listener: () => void): this;
        on(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        on(event: "drain", listener: () => void): this;
        on(event: "end", listener: () => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: "finish", listener: () => void): this;
        on(event: "frameError", listener: (frameType: number, errorCode: number) => void): this;
        on(event: "pipe", listener: (src: stream.Readable) => void): this;
        on(event: "unpipe", listener: (src: stream.Readable) => void): this;
        on(event: "streamClosed", listener: (code: number) => void): this;
        on(event: "timeout", listener: () => void): this;
        on(event: "trailers", listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        on(event: "wantTrailers", listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: "aborted", listener: () => void): this;
        once(event: "close", listener: () => void): this;
        once(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        once(event: "drain", listener: () => void): this;
        once(event: "end", listener: () => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: "finish", listener: () => void): this;
        once(event: "frameError", listener: (frameType: number, errorCode: number) => void): this;
        once(event: "pipe", listener: (src: stream.Readable) => void): this;
        once(event: "unpipe", listener: (src: stream.Readable) => void): this;
        once(event: "streamClosed", listener: (code: number) => void): this;
        once(event: "timeout", listener: () => void): this;
        once(event: "trailers", listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        once(event: "wantTrailers", listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: "aborted", listener: () => void): this;
        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        prependListener(event: "drain", listener: () => void): this;
        prependListener(event: "end", listener: () => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: "finish", listener: () => void): this;
        prependListener(event: "frameError", listener: (frameType: number, errorCode: number) => void): this;
        prependListener(event: "pipe", listener: (src: stream.Readable) => void): this;
        prependListener(event: "unpipe", listener: (src: stream.Readable) => void): this;
        prependListener(event: "streamClosed", listener: (code: number) => void): this;
        prependListener(event: "timeout", listener: () => void): this;
        prependListener(event: "trailers", listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        prependListener(event: "wantTrailers", listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "aborted", listener: () => void): this;
        prependOnceListener(event: "close", listener: () => void): this;
        prependOnceListener(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        prependOnceListener(event: "drain", listener: () => void): this;
        prependOnceListener(event: "end", listener: () => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: "finish", listener: () => void): this;
        prependOnceListener(event: "frameError", listener: (frameType: number, errorCode: number) => void): this;
        prependOnceListener(event: "pipe", listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: "unpipe", listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: "streamClosed", listener: (code: number) => void): this;
        prependOnceListener(event: "timeout", listener: () => void): this;
        prependOnceListener(event: "trailers", listener: (trailers: IncomingHttpHeaders, flags: number) => void): this;
        prependOnceListener(event: "wantTrailers", listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface ClientHttp2Stream extends Http2Stream {
        addListener(event: "continue", listener: () => {}): this;
        addListener(
            event: "headers",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        addListener(event: "push", listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        addListener(
            event: "response",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: "continue"): boolean;
        emit(
            event: "headers",
            headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
            flags: number,
            rawHeaders: string[],
        ): boolean;
        emit(event: "push", headers: IncomingHttpHeaders, flags: number): boolean;
        emit(
            event: "response",
            headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
            flags: number,
            rawHeaders: string[],
        ): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: "continue", listener: () => {}): this;
        on(
            event: "headers",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        on(event: "push", listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        on(
            event: "response",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: "continue", listener: () => {}): this;
        once(
            event: "headers",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        once(event: "push", listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        once(
            event: "response",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: "continue", listener: () => {}): this;
        prependListener(
            event: "headers",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependListener(event: "push", listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        prependListener(
            event: "response",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "continue", listener: () => {}): this;
        prependOnceListener(
            event: "headers",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependOnceListener(event: "push", listener: (headers: IncomingHttpHeaders, flags: number) => void): this;
        prependOnceListener(
            event: "response",
            listener: (
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface ServerHttp2Stream extends Http2Stream {
        /**
         * True if headers were sent, false otherwise (read-only).
         * @since v8.4.0
         */
        readonly headersSent: boolean;
        /**
         * Read-only property mapped to the `SETTINGS_ENABLE_PUSH` flag of the remote
         * client's most recent `SETTINGS` frame. Will be `true` if the remote peer
         * accepts push streams, `false` otherwise. Settings are the same for every `Http2Stream` in the same `Http2Session`.
         * @since v8.4.0
         */
        readonly pushAllowed: boolean;
        /**
         * Sends an additional informational `HEADERS` frame to the connected HTTP/2 peer.
         * @since v8.4.0
         */
        additionalHeaders(headers: OutgoingHttpHeaders): void;
        /**
         * Initiates a push stream. The callback is invoked with the new `Http2Stream` instance created for the push stream passed as the second argument, or an `Error` passed as the first argument.
         *
         * ```js
         * import http2 from 'node:http2';
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   stream.respond({ ':status': 200 });
         *   stream.pushStream({ ':path': '/' }, (err, pushStream, headers) => {
         *     if (err) throw err;
         *     pushStream.respond({ ':status': 200 });
         *     pushStream.end('some pushed data');
         *   });
         *   stream.end('some data');
         * });
         * ```
         *
         * Setting the weight of a push stream is not allowed in the `HEADERS` frame. Pass
         * a `weight` value to `http2stream.priority` with the `silent` option set to `true` to enable server-side bandwidth balancing between concurrent streams.
         *
         * Calling `http2stream.pushStream()` from within a pushed stream is not permitted
         * and will throw an error.
         * @since v8.4.0
         * @param callback Callback that is called once the push stream has been initiated.
         */
        pushStream(
            headers: OutgoingHttpHeaders,
            callback?: (err: Error | null, pushStream: ServerHttp2Stream, headers: OutgoingHttpHeaders) => void,
        ): void;
        pushStream(
            headers: OutgoingHttpHeaders,
            options?: Pick<ClientSessionRequestOptions, "exclusive" | "parent">,
            callback?: (err: Error | null, pushStream: ServerHttp2Stream, headers: OutgoingHttpHeaders) => void,
        ): void;
        /**
         * ```js
         * import http2 from 'node:http2';
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   stream.respond({ ':status': 200 });
         *   stream.end('some data');
         * });
         * ```
         *
         * Initiates a response. When the `options.waitForTrailers` option is set, the `'wantTrailers'` event
         * will be emitted immediately after queuing the last chunk of payload data to be sent.
         * The `http2stream.sendTrailers()` method can then be used to send trailing header fields to the peer.
         *
         * When `options.waitForTrailers` is set, the `Http2Stream` will not automatically
         * close when the final `DATA` frame is transmitted. User code must call either `http2stream.sendTrailers()` or `http2stream.close()` to close the `Http2Stream`.
         *
         * ```js
         * import http2 from 'node:http2';
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   stream.respond({ ':status': 200 }, { waitForTrailers: true });
         *   stream.on('wantTrailers', () => {
         *     stream.sendTrailers({ ABC: 'some value to send' });
         *   });
         *   stream.end('some data');
         * });
         * ```
         * @since v8.4.0
         */
        respond(headers?: OutgoingHttpHeaders | readonly string[], options?: ServerStreamResponseOptions): void;
        /**
         * Initiates a response whose data is read from the given file descriptor. No
         * validation is performed on the given file descriptor. If an error occurs while
         * attempting to read data using the file descriptor, the `Http2Stream` will be
         * closed using an `RST_STREAM` frame using the standard `INTERNAL_ERROR` code.
         *
         * When used, the `Http2Stream` object's `Duplex` interface will be closed
         * automatically.
         *
         * ```js
         * import http2 from 'node:http2';
         * import fs from 'node:fs';
         *
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   const fd = fs.openSync('/some/file', 'r');
         *
         *   const stat = fs.fstatSync(fd);
         *   const headers = {
         *     'content-length': stat.size,
         *     'last-modified': stat.mtime.toUTCString(),
         *     'content-type': 'text/plain; charset=utf-8',
         *   };
         *   stream.respondWithFD(fd, headers);
         *   stream.on('close', () => fs.closeSync(fd));
         * });
         * ```
         *
         * The optional `options.statCheck` function may be specified to give user code
         * an opportunity to set additional content headers based on the `fs.Stat` details
         * of the given fd. If the `statCheck` function is provided, the `http2stream.respondWithFD()` method will
         * perform an `fs.fstat()` call to collect details on the provided file descriptor.
         *
         * The `offset` and `length` options may be used to limit the response to a
         * specific range subset. This can be used, for instance, to support HTTP Range
         * requests.
         *
         * The file descriptor or `FileHandle` is not closed when the stream is closed,
         * so it will need to be closed manually once it is no longer needed.
         * Using the same file descriptor concurrently for multiple streams
         * is not supported and may result in data loss. Re-using a file descriptor
         * after a stream has finished is supported.
         *
         * When the `options.waitForTrailers` option is set, the `'wantTrailers'` event
         * will be emitted immediately after queuing the last chunk of payload data to be
         * sent. The `http2stream.sendTrailers()` method can then be used to sent trailing
         * header fields to the peer.
         *
         * When `options.waitForTrailers` is set, the `Http2Stream` will not automatically
         * close when the final `DATA` frame is transmitted. User code _must_ call either `http2stream.sendTrailers()`
         * or `http2stream.close()` to close the `Http2Stream`.
         *
         * ```js
         * import http2 from 'node:http2';
         * import fs from 'node:fs';
         *
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   const fd = fs.openSync('/some/file', 'r');
         *
         *   const stat = fs.fstatSync(fd);
         *   const headers = {
         *     'content-length': stat.size,
         *     'last-modified': stat.mtime.toUTCString(),
         *     'content-type': 'text/plain; charset=utf-8',
         *   };
         *   stream.respondWithFD(fd, headers, { waitForTrailers: true });
         *   stream.on('wantTrailers', () => {
         *     stream.sendTrailers({ ABC: 'some value to send' });
         *   });
         *
         *   stream.on('close', () => fs.closeSync(fd));
         * });
         * ```
         * @since v8.4.0
         * @param fd A readable file descriptor.
         */
        respondWithFD(
            fd: number | fs.promises.FileHandle,
            headers?: OutgoingHttpHeaders,
            options?: ServerStreamFileResponseOptions,
        ): void;
        /**
         * Sends a regular file as the response. The `path` must specify a regular file
         * or an `'error'` event will be emitted on the `Http2Stream` object.
         *
         * When used, the `Http2Stream` object's `Duplex` interface will be closed
         * automatically.
         *
         * The optional `options.statCheck` function may be specified to give user code
         * an opportunity to set additional content headers based on the `fs.Stat` details
         * of the given file:
         *
         * If an error occurs while attempting to read the file data, the `Http2Stream` will be closed using an
         * `RST_STREAM` frame using the standard `INTERNAL_ERROR` code.
         * If the `onError` callback is defined, then it will be called. Otherwise, the stream will be destroyed.
         *
         * Example using a file path:
         *
         * ```js
         * import http2 from 'node:http2';
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   function statCheck(stat, headers) {
         *     headers['last-modified'] = stat.mtime.toUTCString();
         *   }
         *
         *   function onError(err) {
         *     // stream.respond() can throw if the stream has been destroyed by
         *     // the other side.
         *     try {
         *       if (err.code === 'ENOENT') {
         *         stream.respond({ ':status': 404 });
         *       } else {
         *         stream.respond({ ':status': 500 });
         *       }
         *     } catch (err) {
         *       // Perform actual error handling.
         *       console.error(err);
         *     }
         *     stream.end();
         *   }
         *
         *   stream.respondWithFile('/some/file',
         *                          { 'content-type': 'text/plain; charset=utf-8' },
         *                          { statCheck, onError });
         * });
         * ```
         *
         * The `options.statCheck` function may also be used to cancel the send operation
         * by returning `false`. For instance, a conditional request may check the stat
         * results to determine if the file has been modified to return an appropriate `304` response:
         *
         * ```js
         * import http2 from 'node:http2';
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   function statCheck(stat, headers) {
         *     // Check the stat here...
         *     stream.respond({ ':status': 304 });
         *     return false; // Cancel the send operation
         *   }
         *   stream.respondWithFile('/some/file',
         *                          { 'content-type': 'text/plain; charset=utf-8' },
         *                          { statCheck });
         * });
         * ```
         *
         * The `content-length` header field will be automatically set.
         *
         * The `offset` and `length` options may be used to limit the response to a
         * specific range subset. This can be used, for instance, to support HTTP Range
         * requests.
         *
         * The `options.onError` function may also be used to handle all the errors
         * that could happen before the delivery of the file is initiated. The
         * default behavior is to destroy the stream.
         *
         * When the `options.waitForTrailers` option is set, the `'wantTrailers'` event
         * will be emitted immediately after queuing the last chunk of payload data to be
         * sent. The `http2stream.sendTrailers()` method can then be used to sent trailing
         * header fields to the peer.
         *
         * When `options.waitForTrailers` is set, the `Http2Stream` will not automatically
         * close when the final `DATA` frame is transmitted. User code must call either`http2stream.sendTrailers()` or `http2stream.close()` to close the`Http2Stream`.
         *
         * ```js
         * import http2 from 'node:http2';
         * const server = http2.createServer();
         * server.on('stream', (stream) => {
         *   stream.respondWithFile('/some/file',
         *                          { 'content-type': 'text/plain; charset=utf-8' },
         *                          { waitForTrailers: true });
         *   stream.on('wantTrailers', () => {
         *     stream.sendTrailers({ ABC: 'some value to send' });
         *   });
         * });
         * ```
         * @since v8.4.0
         */
        respondWithFile(
            path: string,
            headers?: OutgoingHttpHeaders,
            options?: ServerStreamFileResponseOptionsWithError,
        ): void;
    }
    // Http2Session
    export interface Settings {
        headerTableSize?: number | undefined;
        enablePush?: boolean | undefined;
        initialWindowSize?: number | undefined;
        maxFrameSize?: number | undefined;
        maxConcurrentStreams?: number | undefined;
        maxHeaderListSize?: number | undefined;
        enableConnectProtocol?: boolean | undefined;
    }
    export interface ClientSessionRequestOptions {
        endStream?: boolean | undefined;
        exclusive?: boolean | undefined;
        parent?: number | undefined;
        waitForTrailers?: boolean | undefined;
        signal?: AbortSignal | undefined;
    }
    export interface SessionState {
        effectiveLocalWindowSize?: number | undefined;
        effectiveRecvDataLength?: number | undefined;
        nextStreamID?: number | undefined;
        localWindowSize?: number | undefined;
        lastProcStreamID?: number | undefined;
        remoteWindowSize?: number | undefined;
        outboundQueueSize?: number | undefined;
        deflateDynamicTableSize?: number | undefined;
        inflateDynamicTableSize?: number | undefined;
    }
    export interface Http2Session extends EventEmitter {
        /**
         * Value will be `undefined` if the `Http2Session` is not yet connected to a
         * socket, `h2c` if the `Http2Session` is not connected to a `TLSSocket`, or
         * will return the value of the connected `TLSSocket`'s own `alpnProtocol` property.
         * @since v9.4.0
         */
        readonly alpnProtocol?: string | undefined;
        /**
         * Will be `true` if this `Http2Session` instance has been closed, otherwise `false`.
         * @since v9.4.0
         */
        readonly closed: boolean;
        /**
         * Will be `true` if this `Http2Session` instance is still connecting, will be set
         * to `false` before emitting `connect` event and/or calling the `http2.connect` callback.
         * @since v10.0.0
         */
        readonly connecting: boolean;
        /**
         * Will be `true` if this `Http2Session` instance has been destroyed and must no
         * longer be used, otherwise `false`.
         * @since v8.4.0
         */
        readonly destroyed: boolean;
        /**
         * Value is `undefined` if the `Http2Session` session socket has not yet been
         * connected, `true` if the `Http2Session` is connected with a `TLSSocket`,
         * and `false` if the `Http2Session` is connected to any other kind of socket
         * or stream.
         * @since v9.4.0
         */
        readonly encrypted?: boolean | undefined;
        /**
         * A prototype-less object describing the current local settings of this `Http2Session`.
         * The local settings are local to _this_`Http2Session` instance.
         * @since v8.4.0
         */
        readonly localSettings: Settings;
        /**
         * If the `Http2Session` is connected to a `TLSSocket`, the `originSet` property
         * will return an `Array` of origins for which the `Http2Session` may be
         * considered authoritative.
         *
         * The `originSet` property is only available when using a secure TLS connection.
         * @since v9.4.0
         */
        readonly originSet?: string[] | undefined;
        /**
         * Indicates whether the `Http2Session` is currently waiting for acknowledgment of
         * a sent `SETTINGS` frame. Will be `true` after calling the `http2session.settings()` method.
         * Will be `false` once all sent `SETTINGS` frames have been acknowledged.
         * @since v8.4.0
         */
        readonly pendingSettingsAck: boolean;
        /**
         * A prototype-less object describing the current remote settings of this`Http2Session`.
         * The remote settings are set by the _connected_ HTTP/2 peer.
         * @since v8.4.0
         */
        readonly remoteSettings: Settings;
        /**
         * Returns a `Proxy` object that acts as a `net.Socket` (or `tls.TLSSocket`) but
         * limits available methods to ones safe to use with HTTP/2.
         *
         * `destroy`, `emit`, `end`, `pause`, `read`, `resume`, and `write` will throw
         * an error with code `ERR_HTTP2_NO_SOCKET_MANIPULATION`. See `Http2Session and Sockets` for more information.
         *
         * `setTimeout` method will be called on this `Http2Session`.
         *
         * All other interactions will be routed directly to the socket.
         * @since v8.4.0
         */
        readonly socket: net.Socket | tls.TLSSocket;
        /**
         * Provides miscellaneous information about the current state of the`Http2Session`.
         *
         * An object describing the current status of this `Http2Session`.
         * @since v8.4.0
         */
        readonly state: SessionState;
        /**
         * The `http2session.type` will be equal to `http2.constants.NGHTTP2_SESSION_SERVER` if this `Http2Session` instance is a
         * server, and `http2.constants.NGHTTP2_SESSION_CLIENT` if the instance is a
         * client.
         * @since v8.4.0
         */
        readonly type: number;
        /**
         * Gracefully closes the `Http2Session`, allowing any existing streams to
         * complete on their own and preventing new `Http2Stream` instances from being
         * created. Once closed, `http2session.destroy()`_might_ be called if there
         * are no open `Http2Stream` instances.
         *
         * If specified, the `callback` function is registered as a handler for the`'close'` event.
         * @since v9.4.0
         */
        close(callback?: () => void): void;
        /**
         * Immediately terminates the `Http2Session` and the associated `net.Socket` or `tls.TLSSocket`.
         *
         * Once destroyed, the `Http2Session` will emit the `'close'` event. If `error` is not undefined, an `'error'` event will be emitted immediately before the `'close'` event.
         *
         * If there are any remaining open `Http2Streams` associated with the `Http2Session`, those will also be destroyed.
         * @since v8.4.0
         * @param error An `Error` object if the `Http2Session` is being destroyed due to an error.
         * @param code The HTTP/2 error code to send in the final `GOAWAY` frame. If unspecified, and `error` is not undefined, the default is `INTERNAL_ERROR`, otherwise defaults to `NO_ERROR`.
         */
        destroy(error?: Error, code?: number): void;
        /**
         * Transmits a `GOAWAY` frame to the connected peer _without_ shutting down the`Http2Session`.
         * @since v9.4.0
         * @param code An HTTP/2 error code
         * @param lastStreamID The numeric ID of the last processed `Http2Stream`
         * @param opaqueData A `TypedArray` or `DataView` instance containing additional data to be carried within the `GOAWAY` frame.
         */
        goaway(code?: number, lastStreamID?: number, opaqueData?: NodeJS.ArrayBufferView): void;
        /**
         * Sends a `PING` frame to the connected HTTP/2 peer. A `callback` function must
         * be provided. The method will return `true` if the `PING` was sent, `false` otherwise.
         *
         * The maximum number of outstanding (unacknowledged) pings is determined by the `maxOutstandingPings` configuration option. The default maximum is 10.
         *
         * If provided, the `payload` must be a `Buffer`, `TypedArray`, or `DataView` containing 8 bytes of data that will be transmitted with the `PING` and
         * returned with the ping acknowledgment.
         *
         * The callback will be invoked with three arguments: an error argument that will
         * be `null` if the `PING` was successfully acknowledged, a `duration` argument
         * that reports the number of milliseconds elapsed since the ping was sent and the
         * acknowledgment was received, and a `Buffer` containing the 8-byte `PING` payload.
         *
         * ```js
         * session.ping(Buffer.from('abcdefgh'), (err, duration, payload) => {
         *   if (!err) {
         *     console.log(`Ping acknowledged in ${duration} milliseconds`);
         *     console.log(`With payload '${payload.toString()}'`);
         *   }
         * });
         * ```
         *
         * If the `payload` argument is not specified, the default payload will be the
         * 64-bit timestamp (little endian) marking the start of the `PING` duration.
         * @since v8.9.3
         * @param payload Optional ping payload.
         */
        ping(callback: (err: Error | null, duration: number, payload: NonSharedBuffer) => void): boolean;
        ping(
            payload: NodeJS.ArrayBufferView,
            callback: (err: Error | null, duration: number, payload: NonSharedBuffer) => void,
        ): boolean;
        /**
         * Calls `ref()` on this `Http2Session` instance's underlying `net.Socket`.
         * @since v9.4.0
         */
        ref(): void;
        /**
         * Sets the local endpoint's window size.
         * The `windowSize` is the total window size to set, not
         * the delta.
         *
         * ```js
         * import http2 from 'node:http2';
         *
         * const server = http2.createServer();
         * const expectedWindowSize = 2 ** 20;
         * server.on('connect', (session) => {
         *
         *   // Set local window size to be 2 ** 20
         *   session.setLocalWindowSize(expectedWindowSize);
         * });
         * ```
         * @since v15.3.0, v14.18.0
         */
        setLocalWindowSize(windowSize: number): void;
        /**
         * Used to set a callback function that is called when there is no activity on
         * the `Http2Session` after `msecs` milliseconds. The given `callback` is
         * registered as a listener on the `'timeout'` event.
         * @since v8.4.0
         */
        setTimeout(msecs: number, callback?: () => void): void;
        /**
         * Updates the current local settings for this `Http2Session` and sends a new `SETTINGS` frame to the connected HTTP/2 peer.
         *
         * Once called, the `http2session.pendingSettingsAck` property will be `true` while the session is waiting for the remote peer to acknowledge the new
         * settings.
         *
         * The new settings will not become effective until the `SETTINGS` acknowledgment
         * is received and the `'localSettings'` event is emitted. It is possible to send
         * multiple `SETTINGS` frames while acknowledgment is still pending.
         * @since v8.4.0
         * @param callback Callback that is called once the session is connected or right away if the session is already connected.
         */
        settings(
            settings: Settings,
            callback?: (err: Error | null, settings: Settings, duration: number) => void,
        ): void;
        /**
         * Calls `unref()` on this `Http2Session`instance's underlying `net.Socket`.
         * @since v9.4.0
         */
        unref(): void;
        addListener(event: "close", listener: () => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(
            event: "frameError",
            listener: (frameType: number, errorCode: number, streamID: number) => void,
        ): this;
        addListener(
            event: "goaway",
            listener: (errorCode: number, lastStreamID: number, opaqueData?: NonSharedBuffer) => void,
        ): this;
        addListener(event: "localSettings", listener: (settings: Settings) => void): this;
        addListener(event: "ping", listener: () => void): this;
        addListener(event: "remoteSettings", listener: (settings: Settings) => void): this;
        addListener(event: "timeout", listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: "close"): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: "frameError", frameType: number, errorCode: number, streamID: number): boolean;
        emit(event: "goaway", errorCode: number, lastStreamID: number, opaqueData?: NonSharedBuffer): boolean;
        emit(event: "localSettings", settings: Settings): boolean;
        emit(event: "ping"): boolean;
        emit(event: "remoteSettings", settings: Settings): boolean;
        emit(event: "timeout"): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: "close", listener: () => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: "frameError", listener: (frameType: number, errorCode: number, streamID: number) => void): this;
        on(
            event: "goaway",
            listener: (errorCode: number, lastStreamID: number, opaqueData?: NonSharedBuffer) => void,
        ): this;
        on(event: "localSettings", listener: (settings: Settings) => void): this;
        on(event: "ping", listener: () => void): this;
        on(event: "remoteSettings", listener: (settings: Settings) => void): this;
        on(event: "timeout", listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: "close", listener: () => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: "frameError", listener: (frameType: number, errorCode: number, streamID: number) => void): this;
        once(
            event: "goaway",
            listener: (errorCode: number, lastStreamID: number, opaqueData?: NonSharedBuffer) => void,
        ): this;
        once(event: "localSettings", listener: (settings: Settings) => void): this;
        once(event: "ping", listener: () => void): this;
        once(event: "remoteSettings", listener: (settings: Settings) => void): this;
        once(event: "timeout", listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(
            event: "frameError",
            listener: (frameType: number, errorCode: number, streamID: number) => void,
        ): this;
        prependListener(
            event: "goaway",
            listener: (errorCode: number, lastStreamID: number, opaqueData?: NonSharedBuffer) => void,
        ): this;
        prependListener(event: "localSettings", listener: (settings: Settings) => void): this;
        prependListener(event: "ping", listener: () => void): this;
        prependListener(event: "remoteSettings", listener: (settings: Settings) => void): this;
        prependListener(event: "timeout", listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "close", listener: () => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(
            event: "frameError",
            listener: (frameType: number, errorCode: number, streamID: number) => void,
        ): this;
        prependOnceListener(
            event: "goaway",
            listener: (errorCode: number, lastStreamID: number, opaqueData?: NonSharedBuffer) => void,
        ): this;
        prependOnceListener(event: "localSettings", listener: (settings: Settings) => void): this;
        prependOnceListener(event: "ping", listener: () => void): this;
        prependOnceListener(event: "remoteSettings", listener: (settings: Settings) => void): this;
        prependOnceListener(event: "timeout", listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface ClientHttp2Session extends Http2Session {
        /**
         * For HTTP/2 Client `Http2Session` instances only, the `http2session.request()` creates and returns an `Http2Stream` instance that can be used to send an
         * HTTP/2 request to the connected server.
         *
         * When a `ClientHttp2Session` is first created, the socket may not yet be
         * connected. if `clienthttp2session.request()` is called during this time, the
         * actual request will be deferred until the socket is ready to go.
         * If the `session` is closed before the actual request be executed, an `ERR_HTTP2_GOAWAY_SESSION` is thrown.
         *
         * This method is only available if `http2session.type` is equal to `http2.constants.NGHTTP2_SESSION_CLIENT`.
         *
         * ```js
         * import http2 from 'node:http2';
         * const clientSession = http2.connect('https://localhost:1234');
         * const {
         *   HTTP2_HEADER_PATH,
         *   HTTP2_HEADER_STATUS,
         * } = http2.constants;
         *
         * const req = clientSession.request({ [HTTP2_HEADER_PATH]: '/' });
         * req.on('response', (headers) => {
         *   console.log(headers[HTTP2_HEADER_STATUS]);
         *   req.on('data', (chunk) => { // ..  });
         *   req.on('end', () => { // ..  });
         * });
         * ```
         *
         * When the `options.waitForTrailers` option is set, the `'wantTrailers'` event
         * is emitted immediately after queuing the last chunk of payload data to be sent.
         * The `http2stream.sendTrailers()` method can then be called to send trailing
         * headers to the peer.
         *
         * When `options.waitForTrailers` is set, the `Http2Stream` will not automatically
         * close when the final `DATA` frame is transmitted. User code must call either`http2stream.sendTrailers()` or `http2stream.close()` to close the`Http2Stream`.
         *
         * When `options.signal` is set with an `AbortSignal` and then `abort` on the
         * corresponding `AbortController` is called, the request will emit an `'error'`event with an `AbortError` error.
         *
         * The `:method` and `:path` pseudo-headers are not specified within `headers`,
         * they respectively default to:
         *
         * * `:method` \= `'GET'`
         * * `:path` \= `/`
         * @since v8.4.0
         */
        request(
            headers?: OutgoingHttpHeaders | readonly string[],
            options?: ClientSessionRequestOptions,
        ): ClientHttp2Stream;
        addListener(event: "altsvc", listener: (alt: string, origin: string, stream: number) => void): this;
        addListener(event: "origin", listener: (origins: string[]) => void): this;
        addListener(
            event: "connect",
            listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void,
        ): this;
        addListener(
            event: "stream",
            listener: (
                stream: ClientHttp2Stream,
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: "altsvc", alt: string, origin: string, stream: number): boolean;
        emit(event: "origin", origins: readonly string[]): boolean;
        emit(event: "connect", session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket): boolean;
        emit(
            event: "stream",
            stream: ClientHttp2Stream,
            headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
            flags: number,
            rawHeaders: string[],
        ): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: "altsvc", listener: (alt: string, origin: string, stream: number) => void): this;
        on(event: "origin", listener: (origins: string[]) => void): this;
        on(event: "connect", listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void): this;
        on(
            event: "stream",
            listener: (
                stream: ClientHttp2Stream,
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: "altsvc", listener: (alt: string, origin: string, stream: number) => void): this;
        once(event: "origin", listener: (origins: string[]) => void): this;
        once(
            event: "connect",
            listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void,
        ): this;
        once(
            event: "stream",
            listener: (
                stream: ClientHttp2Stream,
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: "altsvc", listener: (alt: string, origin: string, stream: number) => void): this;
        prependListener(event: "origin", listener: (origins: string[]) => void): this;
        prependListener(
            event: "connect",
            listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void,
        ): this;
        prependListener(
            event: "stream",
            listener: (
                stream: ClientHttp2Stream,
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "altsvc", listener: (alt: string, origin: string, stream: number) => void): this;
        prependOnceListener(event: "origin", listener: (origins: string[]) => void): this;
        prependOnceListener(
            event: "connect",
            listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void,
        ): this;
        prependOnceListener(
            event: "stream",
            listener: (
                stream: ClientHttp2Stream,
                headers: IncomingHttpHeaders & IncomingHttpStatusHeader,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface AlternativeServiceOptions {
        origin: number | string | url.URL;
    }
    export interface ServerHttp2Session<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    > extends Http2Session {
        readonly server:
            | Http2Server<Http1Request, Http1Response, Http2Request, Http2Response>
            | Http2SecureServer<Http1Request, Http1Response, Http2Request, Http2Response>;
        /**
         * Submits an `ALTSVC` frame (as defined by [RFC 7838](https://tools.ietf.org/html/rfc7838)) to the connected client.
         *
         * ```js
         * import http2 from 'node:http2';
         *
         * const server = http2.createServer();
         * server.on('session', (session) => {
         *   // Set altsvc for origin https://example.org:80
         *   session.altsvc('h2=":8000"', 'https://example.org:80');
         * });
         *
         * server.on('stream', (stream) => {
         *   // Set altsvc for a specific stream
         *   stream.session.altsvc('h2=":8000"', stream.id);
         * });
         * ```
         *
         * Sending an `ALTSVC` frame with a specific stream ID indicates that the alternate
         * service is associated with the origin of the given `Http2Stream`.
         *
         * The `alt` and origin string _must_ contain only ASCII bytes and are
         * strictly interpreted as a sequence of ASCII bytes. The special value `'clear'`may be passed to clear any previously set alternative service for a given
         * domain.
         *
         * When a string is passed for the `originOrStream` argument, it will be parsed as
         * a URL and the origin will be derived. For instance, the origin for the
         * HTTP URL `'https://example.org/foo/bar'` is the ASCII string`'https://example.org'`. An error will be thrown if either the given string
         * cannot be parsed as a URL or if a valid origin cannot be derived.
         *
         * A `URL` object, or any object with an `origin` property, may be passed as`originOrStream`, in which case the value of the `origin` property will be
         * used. The value of the `origin` property _must_ be a properly serialized
         * ASCII origin.
         * @since v9.4.0
         * @param alt A description of the alternative service configuration as defined by `RFC 7838`.
         * @param originOrStream Either a URL string specifying the origin (or an `Object` with an `origin` property) or the numeric identifier of an active `Http2Stream` as given by the
         * `http2stream.id` property.
         */
        altsvc(alt: string, originOrStream: number | string | url.URL | AlternativeServiceOptions): void;
        /**
         * Submits an `ORIGIN` frame (as defined by [RFC 8336](https://tools.ietf.org/html/rfc8336)) to the connected client
         * to advertise the set of origins for which the server is capable of providing
         * authoritative responses.
         *
         * ```js
         * import http2 from 'node:http2';
         * const options = getSecureOptionsSomehow();
         * const server = http2.createSecureServer(options);
         * server.on('stream', (stream) => {
         *   stream.respond();
         *   stream.end('ok');
         * });
         * server.on('session', (session) => {
         *   session.origin('https://example.com', 'https://example.org');
         * });
         * ```
         *
         * When a string is passed as an `origin`, it will be parsed as a URL and the
         * origin will be derived. For instance, the origin for the HTTP URL `'https://example.org/foo/bar'` is the ASCII string` 'https://example.org'`. An error will be thrown if either the given
         * string
         * cannot be parsed as a URL or if a valid origin cannot be derived.
         *
         * A `URL` object, or any object with an `origin` property, may be passed as
         * an `origin`, in which case the value of the `origin` property will be
         * used. The value of the `origin` property _must_ be a properly serialized
         * ASCII origin.
         *
         * Alternatively, the `origins` option may be used when creating a new HTTP/2
         * server using the `http2.createSecureServer()` method:
         *
         * ```js
         * import http2 from 'node:http2';
         * const options = getSecureOptionsSomehow();
         * options.origins = ['https://example.com', 'https://example.org'];
         * const server = http2.createSecureServer(options);
         * server.on('stream', (stream) => {
         *   stream.respond();
         *   stream.end('ok');
         * });
         * ```
         * @since v10.12.0
         * @param origins One or more URL Strings passed as separate arguments.
         */
        origin(
            ...origins: Array<
                | string
                | url.URL
                | {
                    origin: string;
                }
            >
        ): void;
        addListener(
            event: "connect",
            listener: (
                session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>,
                socket: net.Socket | tls.TLSSocket,
            ) => void,
        ): this;
        addListener(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(
            event: "connect",
            session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>,
            socket: net.Socket | tls.TLSSocket,
        ): boolean;
        emit(
            event: "stream",
            stream: ServerHttp2Stream,
            headers: IncomingHttpHeaders,
            flags: number,
            rawHeaders: string[],
        ): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(
            event: "connect",
            listener: (
                session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>,
                socket: net.Socket | tls.TLSSocket,
            ) => void,
        ): this;
        on(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(
            event: "connect",
            listener: (
                session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>,
                socket: net.Socket | tls.TLSSocket,
            ) => void,
        ): this;
        once(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(
            event: "connect",
            listener: (
                session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>,
                socket: net.Socket | tls.TLSSocket,
            ) => void,
        ): this;
        prependListener(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(
            event: "connect",
            listener: (
                session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>,
                socket: net.Socket | tls.TLSSocket,
            ) => void,
        ): this;
        prependOnceListener(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    // Http2Server
    export interface SessionOptions {
        /**
         * Sets the maximum dynamic table size for deflating header fields.
         * @default 4Kib
         */
        maxDeflateDynamicTableSize?: number | undefined;
        /**
         * Sets the maximum number of settings entries per `SETTINGS` frame.
         * The minimum value allowed is `1`.
         * @default 32
         */
        maxSettings?: number | undefined;
        /**
         * Sets the maximum memory that the `Http2Session` is permitted to use.
         * The value is expressed in terms of number of megabytes, e.g. `1` equal 1 megabyte.
         * The minimum value allowed is `1`.
         * This is a credit based limit, existing `Http2Stream`s may cause this limit to be exceeded,
         * but new `Http2Stream` instances will be rejected while this limit is exceeded.
         * The current number of `Http2Stream` sessions, the current memory use of the header compression tables,
         * current data queued to be sent, and unacknowledged `PING` and `SETTINGS` frames are all counted towards the current limit.
         * @default 10
         */
        maxSessionMemory?: number | undefined;
        /**
         * Sets the maximum number of header entries.
         * This is similar to `server.maxHeadersCount` or `request.maxHeadersCount` in the `node:http` module.
         * The minimum value is `1`.
         * @default 128
         */
        maxHeaderListPairs?: number | undefined;
        /**
         * Sets the maximum number of outstanding, unacknowledged pings.
         * @default 10
         */
        maxOutstandingPings?: number | undefined;
        /**
         * Sets the maximum allowed size for a serialized, compressed block of headers.
         * Attempts to send headers that exceed this limit will result in
         * a `'frameError'` event being emitted and the stream being closed and destroyed.
         */
        maxSendHeaderBlockLength?: number | undefined;
        /**
         * Strategy used for determining the amount of padding to use for `HEADERS` and `DATA` frames.
         * @default http2.constants.PADDING_STRATEGY_NONE
         */
        paddingStrategy?: number | undefined;
        /**
         * Sets the maximum number of concurrent streams for the remote peer as if a `SETTINGS` frame had been received.
         * Will be overridden if the remote peer sets its own value for `maxConcurrentStreams`.
         * @default 100
         */
        peerMaxConcurrentStreams?: number | undefined;
        /**
         * The initial settings to send to the remote peer upon connection.
         */
        settings?: Settings | undefined;
        /**
         * The array of integer values determines the settings types,
         * which are included in the `CustomSettings`-property of the received remoteSettings.
         * Please see the `CustomSettings`-property of the `Http2Settings` object for more information, on the allowed setting types.
         */
        remoteCustomSettings?: number[] | undefined;
        /**
         * Specifies a timeout in milliseconds that
         * a server should wait when an [`'unknownProtocol'`][] is emitted. If the
         * socket has not been destroyed by that time the server will destroy it.
         * @default 100000
         */
        unknownProtocolTimeout?: number | undefined;
        /**
         * If `true`, it turns on strict leading
         * and trailing whitespace validation for HTTP/2 header field names and values
         * as per [RFC-9113](https://www.rfc-editor.org/rfc/rfc9113.html#section-8.2.1).
         * @since v24.2.0
         * @default true
         */
        strictFieldWhitespaceValidation?: boolean | undefined;
    }
    export interface ClientSessionOptions extends SessionOptions {
        /**
         * Sets the maximum number of reserved push streams the client will accept at any given time.
         * Once the current number of currently reserved push streams exceeds reaches this limit,
         * new push streams sent by the server will be automatically rejected.
         * The minimum allowed value is 0. The maximum allowed value is 2<sup>32</sup>-1.
         * A negative value sets this option to the maximum allowed value.
         * @default 200
         */
        maxReservedRemoteStreams?: number | undefined;
        /**
         * An optional callback that receives the `URL` instance passed to `connect` and the `options` object,
         * and returns any `Duplex` stream that is to be used as the connection for this session.
         */
        createConnection?: ((authority: url.URL, option: SessionOptions) => stream.Duplex) | undefined;
        /**
         * The protocol to connect with, if not set in the `authority`.
         * Value may be either `'http:'` or `'https:'`.
         * @default 'https:'
         */
        protocol?: "http:" | "https:" | undefined;
    }
    export interface ServerSessionOptions<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    > extends SessionOptions {
        streamResetBurst?: number | undefined;
        streamResetRate?: number | undefined;
        Http1IncomingMessage?: Http1Request | undefined;
        Http1ServerResponse?: Http1Response | undefined;
        Http2ServerRequest?: Http2Request | undefined;
        Http2ServerResponse?: Http2Response | undefined;
    }
    export interface SecureClientSessionOptions extends ClientSessionOptions, tls.ConnectionOptions {}
    export interface SecureServerSessionOptions<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    > extends ServerSessionOptions<Http1Request, Http1Response, Http2Request, Http2Response>, tls.TlsOptions {}
    export interface ServerOptions<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    > extends ServerSessionOptions<Http1Request, Http1Response, Http2Request, Http2Response> {}
    export interface SecureServerOptions<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    > extends SecureServerSessionOptions<Http1Request, Http1Response, Http2Request, Http2Response> {
        allowHTTP1?: boolean | undefined;
        origins?: string[] | undefined;
    }
    interface HTTP2ServerCommon {
        setTimeout(msec?: number, callback?: () => void): this;
        /**
         * Throws ERR_HTTP2_INVALID_SETTING_VALUE for invalid settings values.
         * Throws ERR_INVALID_ARG_TYPE for invalid settings argument.
         */
        updateSettings(settings: Settings): void;
    }
    export interface Http2Server<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    > extends net.Server, HTTP2ServerCommon {
        addListener(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        addListener(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        addListener(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        addListener(event: "sessionError", listener: (err: Error) => void): this;
        addListener(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        addListener(event: "timeout", listener: () => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(
            event: "checkContinue",
            request: InstanceType<Http2Request>,
            response: InstanceType<Http2Response>,
        ): boolean;
        emit(event: "request", request: InstanceType<Http2Request>, response: InstanceType<Http2Response>): boolean;
        emit(
            event: "session",
            session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>,
        ): boolean;
        emit(event: "sessionError", err: Error): boolean;
        emit(
            event: "stream",
            stream: ServerHttp2Stream,
            headers: IncomingHttpHeaders,
            flags: number,
            rawHeaders: string[],
        ): boolean;
        emit(event: "timeout"): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        on(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        on(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        on(event: "sessionError", listener: (err: Error) => void): this;
        on(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        on(event: "timeout", listener: () => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        once(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        once(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        once(event: "sessionError", listener: (err: Error) => void): this;
        once(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        once(event: "timeout", listener: () => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        prependListener(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        prependListener(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        prependListener(event: "sessionError", listener: (err: Error) => void): this;
        prependListener(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependListener(event: "timeout", listener: () => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        prependOnceListener(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        prependOnceListener(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        prependOnceListener(event: "sessionError", listener: (err: Error) => void): this;
        prependOnceListener(
            event: "stream",
            listener: (
                stream: ServerHttp2Stream,
                headers: IncomingHttpHeaders,
                flags: number,
                rawHeaders: string[],
            ) => void,
        ): this;
        prependOnceListener(event: "timeout", listener: () => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export interface Http2SecureServer<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    > extends tls.Server, HTTP2ServerCommon {
        addListener(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        addListener(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        addListener(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        addListener(event: "sessionError", listener: (err: Error) => void): this;
        addListener(
            event: "stream",
            listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void,
        ): this;
        addListener(event: "timeout", listener: () => void): this;
        addListener(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(
            event: "checkContinue",
            request: InstanceType<Http2Request>,
            response: InstanceType<Http2Response>,
        ): boolean;
        emit(event: "request", request: InstanceType<Http2Request>, response: InstanceType<Http2Response>): boolean;
        emit(
            event: "session",
            session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>,
        ): boolean;
        emit(event: "sessionError", err: Error): boolean;
        emit(event: "stream", stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number): boolean;
        emit(event: "timeout"): boolean;
        emit(event: "unknownProtocol", socket: tls.TLSSocket): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        on(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        on(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        on(event: "sessionError", listener: (err: Error) => void): this;
        on(
            event: "stream",
            listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void,
        ): this;
        on(event: "timeout", listener: () => void): this;
        on(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        once(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        once(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        once(event: "sessionError", listener: (err: Error) => void): this;
        once(
            event: "stream",
            listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void,
        ): this;
        once(event: "timeout", listener: () => void): this;
        once(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        prependListener(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        prependListener(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        prependListener(event: "sessionError", listener: (err: Error) => void): this;
        prependListener(
            event: "stream",
            listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void,
        ): this;
        prependListener(event: "timeout", listener: () => void): this;
        prependListener(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(
            event: "checkContinue",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        prependOnceListener(
            event: "request",
            listener: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
        ): this;
        prependOnceListener(
            event: "session",
            listener: (session: ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>) => void,
        ): this;
        prependOnceListener(event: "sessionError", listener: (err: Error) => void): this;
        prependOnceListener(
            event: "stream",
            listener: (stream: ServerHttp2Stream, headers: IncomingHttpHeaders, flags: number) => void,
        ): this;
        prependOnceListener(event: "timeout", listener: () => void): this;
        prependOnceListener(event: "unknownProtocol", listener: (socket: tls.TLSSocket) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    /**
     * A `Http2ServerRequest` object is created by {@link Server} or {@link SecureServer} and passed as the first argument to the `'request'` event. It may be used to access a request status,
     * headers, and
     * data.
     * @since v8.4.0
     */
    export class Http2ServerRequest extends stream.Readable {
        constructor(
            stream: ServerHttp2Stream,
            headers: IncomingHttpHeaders,
            options: stream.ReadableOptions,
            rawHeaders: readonly string[],
        );
        /**
         * The `request.aborted` property will be `true` if the request has
         * been aborted.
         * @since v10.1.0
         */
        readonly aborted: boolean;
        /**
         * The request authority pseudo header field. Because HTTP/2 allows requests
         * to set either `:authority` or `host`, this value is derived from `req.headers[':authority']` if present. Otherwise, it is derived from `req.headers['host']`.
         * @since v8.4.0
         */
        readonly authority: string;
        /**
         * See `request.socket`.
         * @since v8.4.0
         * @deprecated Since v13.0.0 - Use `socket`.
         */
        readonly connection: net.Socket | tls.TLSSocket;
        /**
         * The `request.complete` property will be `true` if the request has
         * been completed, aborted, or destroyed.
         * @since v12.10.0
         */
        readonly complete: boolean;
        /**
         * The request/response headers object.
         *
         * Key-value pairs of header names and values. Header names are lower-cased.
         *
         * ```js
         * // Prints something like:
         * //
         * // { 'user-agent': 'curl/7.22.0',
         * //   host: '127.0.0.1:8000',
         * //   accept: '*' }
         * console.log(request.headers);
         * ```
         *
         * See `HTTP/2 Headers Object`.
         *
         * In HTTP/2, the request path, host name, protocol, and method are represented as
         * special headers prefixed with the `:` character (e.g. `':path'`). These special
         * headers will be included in the `request.headers` object. Care must be taken not
         * to inadvertently modify these special headers or errors may occur. For instance,
         * removing all headers from the request will cause errors to occur:
         *
         * ```js
         * removeAllHeaders(request.headers);
         * assert(request.url);   // Fails because the :path header has been removed
         * ```
         * @since v8.4.0
         */
        readonly headers: IncomingHttpHeaders;
        /**
         * In case of server request, the HTTP version sent by the client. In the case of
         * client response, the HTTP version of the connected-to server. Returns `'2.0'`.
         *
         * Also `message.httpVersionMajor` is the first integer and `message.httpVersionMinor` is the second.
         * @since v8.4.0
         */
        readonly httpVersion: string;
        readonly httpVersionMinor: number;
        readonly httpVersionMajor: number;
        /**
         * The request method as a string. Read-only. Examples: `'GET'`, `'DELETE'`.
         * @since v8.4.0
         */
        readonly method: string;
        /**
         * The raw request/response headers list exactly as they were received.
         *
         * The keys and values are in the same list. It is _not_ a
         * list of tuples. So, the even-numbered offsets are key values, and the
         * odd-numbered offsets are the associated values.
         *
         * Header names are not lowercased, and duplicates are not merged.
         *
         * ```js
         * // Prints something like:
         * //
         * // [ 'user-agent',
         * //   'this is invalid because there can be only one',
         * //   'User-Agent',
         * //   'curl/7.22.0',
         * //   'Host',
         * //   '127.0.0.1:8000',
         * //   'ACCEPT',
         * //   '*' ]
         * console.log(request.rawHeaders);
         * ```
         * @since v8.4.0
         */
        readonly rawHeaders: string[];
        /**
         * The raw request/response trailer keys and values exactly as they were
         * received. Only populated at the `'end'` event.
         * @since v8.4.0
         */
        readonly rawTrailers: string[];
        /**
         * The request scheme pseudo header field indicating the scheme
         * portion of the target URL.
         * @since v8.4.0
         */
        readonly scheme: string;
        /**
         * Returns a `Proxy` object that acts as a `net.Socket` (or `tls.TLSSocket`) but
         * applies getters, setters, and methods based on HTTP/2 logic.
         *
         * `destroyed`, `readable`, and `writable` properties will be retrieved from and
         * set on `request.stream`.
         *
         * `destroy`, `emit`, `end`, `on` and `once` methods will be called on `request.stream`.
         *
         * `setTimeout` method will be called on `request.stream.session`.
         *
         * `pause`, `read`, `resume`, and `write` will throw an error with code `ERR_HTTP2_NO_SOCKET_MANIPULATION`. See `Http2Session and Sockets` for
         * more information.
         *
         * All other interactions will be routed directly to the socket. With TLS support,
         * use `request.socket.getPeerCertificate()` to obtain the client's
         * authentication details.
         * @since v8.4.0
         */
        readonly socket: net.Socket | tls.TLSSocket;
        /**
         * The `Http2Stream` object backing the request.
         * @since v8.4.0
         */
        readonly stream: ServerHttp2Stream;
        /**
         * The request/response trailers object. Only populated at the `'end'` event.
         * @since v8.4.0
         */
        readonly trailers: IncomingHttpHeaders;
        /**
         * Request URL string. This contains only the URL that is present in the actual
         * HTTP request. If the request is:
         *
         * ```http
         * GET /status?name=ryan HTTP/1.1
         * Accept: text/plain
         * ```
         *
         * Then `request.url` will be:
         *
         * ```js
         * '/status?name=ryan'
         * ```
         *
         * To parse the url into its parts, `new URL()` can be used:
         *
         * ```console
         * $ node
         * > new URL('/status?name=ryan', 'http://example.com')
         * URL {
         *   href: 'http://example.com/status?name=ryan',
         *   origin: 'http://example.com',
         *   protocol: 'http:',
         *   username: '',
         *   password: '',
         *   host: 'example.com',
         *   hostname: 'example.com',
         *   port: '',
         *   pathname: '/status',
         *   search: '?name=ryan',
         *   searchParams: URLSearchParams { 'name' => 'ryan' },
         *   hash: ''
         * }
         * ```
         * @since v8.4.0
         */
        url: string;
        /**
         * Sets the `Http2Stream`'s timeout value to `msecs`. If a callback is
         * provided, then it is added as a listener on the `'timeout'` event on
         * the response object.
         *
         * If no `'timeout'` listener is added to the request, the response, or
         * the server, then `Http2Stream`s are destroyed when they time out. If a
         * handler is assigned to the request, the response, or the server's `'timeout'`events, timed out sockets must be handled explicitly.
         * @since v8.4.0
         */
        setTimeout(msecs: number, callback?: () => void): void;
        read(size?: number): NonSharedBuffer | string | null;
        addListener(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
        addListener(event: "close", listener: () => void): this;
        addListener(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        addListener(event: "end", listener: () => void): this;
        addListener(event: "readable", listener: () => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: "aborted", hadError: boolean, code: number): boolean;
        emit(event: "close"): boolean;
        emit(event: "data", chunk: NonSharedBuffer | string): boolean;
        emit(event: "end"): boolean;
        emit(event: "readable"): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
        on(event: "close", listener: () => void): this;
        on(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        on(event: "end", listener: () => void): this;
        on(event: "readable", listener: () => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
        once(event: "close", listener: () => void): this;
        once(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        once(event: "end", listener: () => void): this;
        once(event: "readable", listener: () => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        prependListener(event: "end", listener: () => void): this;
        prependListener(event: "readable", listener: () => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "aborted", listener: (hadError: boolean, code: number) => void): this;
        prependOnceListener(event: "close", listener: () => void): this;
        prependOnceListener(event: "data", listener: (chunk: NonSharedBuffer | string) => void): this;
        prependOnceListener(event: "end", listener: () => void): this;
        prependOnceListener(event: "readable", listener: () => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    /**
     * This object is created internally by an HTTP server, not by the user. It is
     * passed as the second parameter to the `'request'` event.
     * @since v8.4.0
     */
    export class Http2ServerResponse<Request extends Http2ServerRequest = Http2ServerRequest> extends stream.Writable {
        constructor(stream: ServerHttp2Stream);
        /**
         * See `response.socket`.
         * @since v8.4.0
         * @deprecated Since v13.0.0 - Use `socket`.
         */
        readonly connection: net.Socket | tls.TLSSocket;
        /**
         * Append a single header value to the header object.
         *
         * If the value is an array, this is equivalent to calling this method multiple times.
         *
         * If there were no previous values for the header, this is equivalent to calling {@link setHeader}.
         *
         * Attempting to set a header field name or value that contains invalid characters will result in a
         * [TypeError](https://nodejs.org/docs/latest-v24.x/api/errors.html#class-typeerror) being thrown.
         *
         * ```js
         * // Returns headers including "set-cookie: a" and "set-cookie: b"
         * const server = http2.createServer((req, res) => {
         *   res.setHeader('set-cookie', 'a');
         *   res.appendHeader('set-cookie', 'b');
         *   res.writeHead(200);
         *   res.end('ok');
         * });
         * ```
         * @since v20.12.0
         */
        appendHeader(name: string, value: string | string[]): void;
        /**
         * Boolean value that indicates whether the response has completed. Starts
         * as `false`. After `response.end()` executes, the value will be `true`.
         * @since v8.4.0
         * @deprecated Since v13.4.0,v12.16.0 - Use `writableEnded`.
         */
        readonly finished: boolean;
        /**
         * True if headers were sent, false otherwise (read-only).
         * @since v8.4.0
         */
        readonly headersSent: boolean;
        /**
         * A reference to the original HTTP2 `request` object.
         * @since v15.7.0
         */
        readonly req: Request;
        /**
         * Returns a `Proxy` object that acts as a `net.Socket` (or `tls.TLSSocket`) but
         * applies getters, setters, and methods based on HTTP/2 logic.
         *
         * `destroyed`, `readable`, and `writable` properties will be retrieved from and
         * set on `response.stream`.
         *
         * `destroy`, `emit`, `end`, `on` and `once` methods will be called on `response.stream`.
         *
         * `setTimeout` method will be called on `response.stream.session`.
         *
         * `pause`, `read`, `resume`, and `write` will throw an error with code `ERR_HTTP2_NO_SOCKET_MANIPULATION`. See `Http2Session and Sockets` for
         * more information.
         *
         * All other interactions will be routed directly to the socket.
         *
         * ```js
         * import http2 from 'node:http2';
         * const server = http2.createServer((req, res) => {
         *   const ip = req.socket.remoteAddress;
         *   const port = req.socket.remotePort;
         *   res.end(`Your IP address is ${ip} and your source port is ${port}.`);
         * }).listen(3000);
         * ```
         * @since v8.4.0
         */
        readonly socket: net.Socket | tls.TLSSocket;
        /**
         * The `Http2Stream` object backing the response.
         * @since v8.4.0
         */
        readonly stream: ServerHttp2Stream;
        /**
         * When true, the Date header will be automatically generated and sent in
         * the response if it is not already present in the headers. Defaults to true.
         *
         * This should only be disabled for testing; HTTP requires the Date header
         * in responses.
         * @since v8.4.0
         */
        sendDate: boolean;
        /**
         * When using implicit headers (not calling `response.writeHead()` explicitly),
         * this property controls the status code that will be sent to the client when
         * the headers get flushed.
         *
         * ```js
         * response.statusCode = 404;
         * ```
         *
         * After response header was sent to the client, this property indicates the
         * status code which was sent out.
         * @since v8.4.0
         */
        statusCode: number;
        /**
         * Status message is not supported by HTTP/2 (RFC 7540 8.1.2.4). It returns
         * an empty string.
         * @since v8.4.0
         */
        statusMessage: "";
        /**
         * This method adds HTTP trailing headers (a header but at the end of the
         * message) to the response.
         *
         * Attempting to set a header field name or value that contains invalid characters
         * will result in a `TypeError` being thrown.
         * @since v8.4.0
         */
        addTrailers(trailers: OutgoingHttpHeaders): void;
        /**
         * This method signals to the server that all of the response headers and body
         * have been sent; that server should consider this message complete.
         * The method, `response.end()`, MUST be called on each response.
         *
         * If `data` is specified, it is equivalent to calling `response.write(data, encoding)` followed by `response.end(callback)`.
         *
         * If `callback` is specified, it will be called when the response stream
         * is finished.
         * @since v8.4.0
         */
        end(callback?: () => void): this;
        end(data: string | Uint8Array, callback?: () => void): this;
        end(data: string | Uint8Array, encoding: BufferEncoding, callback?: () => void): this;
        /**
         * Reads out a header that has already been queued but not sent to the client.
         * The name is case-insensitive.
         *
         * ```js
         * const contentType = response.getHeader('content-type');
         * ```
         * @since v8.4.0
         */
        getHeader(name: string): string;
        /**
         * Returns an array containing the unique names of the current outgoing headers.
         * All header names are lowercase.
         *
         * ```js
         * response.setHeader('Foo', 'bar');
         * response.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
         *
         * const headerNames = response.getHeaderNames();
         * // headerNames === ['foo', 'set-cookie']
         * ```
         * @since v8.4.0
         */
        getHeaderNames(): string[];
        /**
         * Returns a shallow copy of the current outgoing headers. Since a shallow copy
         * is used, array values may be mutated without additional calls to various
         * header-related http module methods. The keys of the returned object are the
         * header names and the values are the respective header values. All header names
         * are lowercase.
         *
         * The object returned by the `response.getHeaders()` method _does not_ prototypically inherit from the JavaScript `Object`. This means that typical `Object` methods such as `obj.toString()`,
         * `obj.hasOwnProperty()`, and others
         * are not defined and _will not work_.
         *
         * ```js
         * response.setHeader('Foo', 'bar');
         * response.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);
         *
         * const headers = response.getHeaders();
         * // headers === { foo: 'bar', 'set-cookie': ['foo=bar', 'bar=baz'] }
         * ```
         * @since v8.4.0
         */
        getHeaders(): OutgoingHttpHeaders;
        /**
         * Returns `true` if the header identified by `name` is currently set in the
         * outgoing headers. The header name matching is case-insensitive.
         *
         * ```js
         * const hasContentType = response.hasHeader('content-type');
         * ```
         * @since v8.4.0
         */
        hasHeader(name: string): boolean;
        /**
         * Removes a header that has been queued for implicit sending.
         *
         * ```js
         * response.removeHeader('Content-Encoding');
         * ```
         * @since v8.4.0
         */
        removeHeader(name: string): void;
        /**
         * Sets a single header value for implicit headers. If this header already exists
         * in the to-be-sent headers, its value will be replaced. Use an array of strings
         * here to send multiple headers with the same name.
         *
         * ```js
         * response.setHeader('Content-Type', 'text/html; charset=utf-8');
         * ```
         *
         * or
         *
         * ```js
         * response.setHeader('Set-Cookie', ['type=ninja', 'language=javascript']);
         * ```
         *
         * Attempting to set a header field name or value that contains invalid characters
         * will result in a `TypeError` being thrown.
         *
         * When headers have been set with `response.setHeader()`, they will be merged
         * with any headers passed to `response.writeHead()`, with the headers passed
         * to `response.writeHead()` given precedence.
         *
         * ```js
         * // Returns content-type = text/plain
         * const server = http2.createServer((req, res) => {
         *   res.setHeader('Content-Type', 'text/html; charset=utf-8');
         *   res.setHeader('X-Foo', 'bar');
         *   res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
         *   res.end('ok');
         * });
         * ```
         * @since v8.4.0
         */
        setHeader(name: string, value: number | string | readonly string[]): void;
        /**
         * Sets the `Http2Stream`'s timeout value to `msecs`. If a callback is
         * provided, then it is added as a listener on the `'timeout'` event on
         * the response object.
         *
         * If no `'timeout'` listener is added to the request, the response, or
         * the server, then `Http2Stream` s are destroyed when they time out. If a
         * handler is assigned to the request, the response, or the server's `'timeout'` events, timed out sockets must be handled explicitly.
         * @since v8.4.0
         */
        setTimeout(msecs: number, callback?: () => void): void;
        /**
         * If this method is called and `response.writeHead()` has not been called,
         * it will switch to implicit header mode and flush the implicit headers.
         *
         * This sends a chunk of the response body. This method may
         * be called multiple times to provide successive parts of the body.
         *
         * In the `node:http` module, the response body is omitted when the
         * request is a HEAD request. Similarly, the `204` and `304` responses _must not_ include a message body.
         *
         * `chunk` can be a string or a buffer. If `chunk` is a string,
         * the second parameter specifies how to encode it into a byte stream.
         * By default the `encoding` is `'utf8'`. `callback` will be called when this chunk
         * of data is flushed.
         *
         * This is the raw HTTP body and has nothing to do with higher-level multi-part
         * body encodings that may be used.
         *
         * The first time `response.write()` is called, it will send the buffered
         * header information and the first chunk of the body to the client. The second
         * time `response.write()` is called, Node.js assumes data will be streamed,
         * and sends the new data separately. That is, the response is buffered up to the
         * first chunk of the body.
         *
         * Returns `true` if the entire data was flushed successfully to the kernel
         * buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is free again.
         * @since v8.4.0
         */
        write(chunk: string | Uint8Array, callback?: (err: Error) => void): boolean;
        write(chunk: string | Uint8Array, encoding: BufferEncoding, callback?: (err: Error) => void): boolean;
        /**
         * Sends a status `100 Continue` to the client, indicating that the request body
         * should be sent. See the `'checkContinue'` event on `Http2Server` and `Http2SecureServer`.
         * @since v8.4.0
         */
        writeContinue(): void;
        /**
         * Sends a status `103 Early Hints` to the client with a Link header,
         * indicating that the user agent can preload/preconnect the linked resources.
         * The `hints` is an object containing the values of headers to be sent with
         * early hints message.
         *
         * **Example**
         *
         * ```js
         * const earlyHintsLink = '</styles.css>; rel=preload; as=style';
         * response.writeEarlyHints({
         *   'link': earlyHintsLink,
         * });
         *
         * const earlyHintsLinks = [
         *   '</styles.css>; rel=preload; as=style',
         *   '</scripts.js>; rel=preload; as=script',
         * ];
         * response.writeEarlyHints({
         *   'link': earlyHintsLinks,
         * });
         * ```
         * @since v18.11.0
         */
        writeEarlyHints(hints: Record<string, string | string[]>): void;
        /**
         * Sends a response header to the request. The status code is a 3-digit HTTP
         * status code, like `404`. The last argument, `headers`, are the response headers.
         *
         * Returns a reference to the `Http2ServerResponse`, so that calls can be chained.
         *
         * For compatibility with `HTTP/1`, a human-readable `statusMessage` may be
         * passed as the second argument. However, because the `statusMessage` has no
         * meaning within HTTP/2, the argument will have no effect and a process warning
         * will be emitted.
         *
         * ```js
         * const body = 'hello world';
         * response.writeHead(200, {
         *   'Content-Length': Buffer.byteLength(body),
         *   'Content-Type': 'text/plain; charset=utf-8',
         * });
         * ```
         *
         * `Content-Length` is given in bytes not characters. The`Buffer.byteLength()` API may be used to determine the number of bytes in a
         * given encoding. On outbound messages, Node.js does not check if Content-Length
         * and the length of the body being transmitted are equal or not. However, when
         * receiving messages, Node.js will automatically reject messages when the `Content-Length` does not match the actual payload size.
         *
         * This method may be called at most one time on a message before `response.end()` is called.
         *
         * If `response.write()` or `response.end()` are called before calling
         * this, the implicit/mutable headers will be calculated and call this function.
         *
         * When headers have been set with `response.setHeader()`, they will be merged
         * with any headers passed to `response.writeHead()`, with the headers passed
         * to `response.writeHead()` given precedence.
         *
         * ```js
         * // Returns content-type = text/plain
         * const server = http2.createServer((req, res) => {
         *   res.setHeader('Content-Type', 'text/html; charset=utf-8');
         *   res.setHeader('X-Foo', 'bar');
         *   res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
         *   res.end('ok');
         * });
         * ```
         *
         * Attempting to set a header field name or value that contains invalid characters
         * will result in a `TypeError` being thrown.
         * @since v8.4.0
         */
        writeHead(statusCode: number, headers?: OutgoingHttpHeaders | readonly string[]): this;
        writeHead(statusCode: number, statusMessage: string, headers?: OutgoingHttpHeaders | readonly string[]): this;
        /**
         * Call `http2stream.pushStream()` with the given headers, and wrap the
         * given `Http2Stream` on a newly created `Http2ServerResponse` as the callback
         * parameter if successful. When `Http2ServerRequest` is closed, the callback is
         * called with an error `ERR_HTTP2_INVALID_STREAM`.
         * @since v8.4.0
         * @param headers An object describing the headers
         * @param callback Called once `http2stream.pushStream()` is finished, or either when the attempt to create the pushed `Http2Stream` has failed or has been rejected, or the state of
         * `Http2ServerRequest` is closed prior to calling the `http2stream.pushStream()` method
         */
        createPushResponse(
            headers: OutgoingHttpHeaders,
            callback: (err: Error | null, res: Http2ServerResponse) => void,
        ): void;
        addListener(event: "close", listener: () => void): this;
        addListener(event: "drain", listener: () => void): this;
        addListener(event: "error", listener: (error: Error) => void): this;
        addListener(event: "finish", listener: () => void): this;
        addListener(event: "pipe", listener: (src: stream.Readable) => void): this;
        addListener(event: "unpipe", listener: (src: stream.Readable) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: "close"): boolean;
        emit(event: "drain"): boolean;
        emit(event: "error", error: Error): boolean;
        emit(event: "finish"): boolean;
        emit(event: "pipe", src: stream.Readable): boolean;
        emit(event: "unpipe", src: stream.Readable): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;
        on(event: "close", listener: () => void): this;
        on(event: "drain", listener: () => void): this;
        on(event: "error", listener: (error: Error) => void): this;
        on(event: "finish", listener: () => void): this;
        on(event: "pipe", listener: (src: stream.Readable) => void): this;
        on(event: "unpipe", listener: (src: stream.Readable) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: "close", listener: () => void): this;
        once(event: "drain", listener: () => void): this;
        once(event: "error", listener: (error: Error) => void): this;
        once(event: "finish", listener: () => void): this;
        once(event: "pipe", listener: (src: stream.Readable) => void): this;
        once(event: "unpipe", listener: (src: stream.Readable) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "drain", listener: () => void): this;
        prependListener(event: "error", listener: (error: Error) => void): this;
        prependListener(event: "finish", listener: () => void): this;
        prependListener(event: "pipe", listener: (src: stream.Readable) => void): this;
        prependListener(event: "unpipe", listener: (src: stream.Readable) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "close", listener: () => void): this;
        prependOnceListener(event: "drain", listener: () => void): this;
        prependOnceListener(event: "error", listener: (error: Error) => void): this;
        prependOnceListener(event: "finish", listener: () => void): this;
        prependOnceListener(event: "pipe", listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: "unpipe", listener: (src: stream.Readable) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
    export namespace constants {
        const NGHTTP2_SESSION_SERVER: number;
        const NGHTTP2_SESSION_CLIENT: number;
        const NGHTTP2_STREAM_STATE_IDLE: number;
        const NGHTTP2_STREAM_STATE_OPEN: number;
        const NGHTTP2_STREAM_STATE_RESERVED_LOCAL: number;
        const NGHTTP2_STREAM_STATE_RESERVED_REMOTE: number;
        const NGHTTP2_STREAM_STATE_HALF_CLOSED_LOCAL: number;
        const NGHTTP2_STREAM_STATE_HALF_CLOSED_REMOTE: number;
        const NGHTTP2_STREAM_STATE_CLOSED: number;
        const NGHTTP2_NO_ERROR: number;
        const NGHTTP2_PROTOCOL_ERROR: number;
        const NGHTTP2_INTERNAL_ERROR: number;
        const NGHTTP2_FLOW_CONTROL_ERROR: number;
        const NGHTTP2_SETTINGS_TIMEOUT: number;
        const NGHTTP2_STREAM_CLOSED: number;
        const NGHTTP2_FRAME_SIZE_ERROR: number;
        const NGHTTP2_REFUSED_STREAM: number;
        const NGHTTP2_CANCEL: number;
        const NGHTTP2_COMPRESSION_ERROR: number;
        const NGHTTP2_CONNECT_ERROR: number;
        const NGHTTP2_ENHANCE_YOUR_CALM: number;
        const NGHTTP2_INADEQUATE_SECURITY: number;
        const NGHTTP2_HTTP_1_1_REQUIRED: number;
        const NGHTTP2_ERR_FRAME_SIZE_ERROR: number;
        const NGHTTP2_FLAG_NONE: number;
        const NGHTTP2_FLAG_END_STREAM: number;
        const NGHTTP2_FLAG_END_HEADERS: number;
        const NGHTTP2_FLAG_ACK: number;
        const NGHTTP2_FLAG_PADDED: number;
        const NGHTTP2_FLAG_PRIORITY: number;
        const DEFAULT_SETTINGS_HEADER_TABLE_SIZE: number;
        const DEFAULT_SETTINGS_ENABLE_PUSH: number;
        const DEFAULT_SETTINGS_INITIAL_WINDOW_SIZE: number;
        const DEFAULT_SETTINGS_MAX_FRAME_SIZE: number;
        const MAX_MAX_FRAME_SIZE: number;
        const MIN_MAX_FRAME_SIZE: number;
        const MAX_INITIAL_WINDOW_SIZE: number;
        const NGHTTP2_DEFAULT_WEIGHT: number;
        const NGHTTP2_SETTINGS_HEADER_TABLE_SIZE: number;
        const NGHTTP2_SETTINGS_ENABLE_PUSH: number;
        const NGHTTP2_SETTINGS_MAX_CONCURRENT_STREAMS: number;
        const NGHTTP2_SETTINGS_INITIAL_WINDOW_SIZE: number;
        const NGHTTP2_SETTINGS_MAX_FRAME_SIZE: number;
        const NGHTTP2_SETTINGS_MAX_HEADER_LIST_SIZE: number;
        const PADDING_STRATEGY_NONE: number;
        const PADDING_STRATEGY_MAX: number;
        const PADDING_STRATEGY_CALLBACK: number;
        const HTTP2_HEADER_STATUS: string;
        const HTTP2_HEADER_METHOD: string;
        const HTTP2_HEADER_AUTHORITY: string;
        const HTTP2_HEADER_SCHEME: string;
        const HTTP2_HEADER_PATH: string;
        const HTTP2_HEADER_ACCEPT_CHARSET: string;
        const HTTP2_HEADER_ACCEPT_ENCODING: string;
        const HTTP2_HEADER_ACCEPT_LANGUAGE: string;
        const HTTP2_HEADER_ACCEPT_RANGES: string;
        const HTTP2_HEADER_ACCEPT: string;
        const HTTP2_HEADER_ACCESS_CONTROL_ALLOW_CREDENTIALS: string;
        const HTTP2_HEADER_ACCESS_CONTROL_ALLOW_HEADERS: string;
        const HTTP2_HEADER_ACCESS_CONTROL_ALLOW_METHODS: string;
        const HTTP2_HEADER_ACCESS_CONTROL_ALLOW_ORIGIN: string;
        const HTTP2_HEADER_ACCESS_CONTROL_EXPOSE_HEADERS: string;
        const HTTP2_HEADER_ACCESS_CONTROL_REQUEST_HEADERS: string;
        const HTTP2_HEADER_ACCESS_CONTROL_REQUEST_METHOD: string;
        const HTTP2_HEADER_AGE: string;
        const HTTP2_HEADER_ALLOW: string;
        const HTTP2_HEADER_AUTHORIZATION: string;
        const HTTP2_HEADER_CACHE_CONTROL: string;
        const HTTP2_HEADER_CONNECTION: string;
        const HTTP2_HEADER_CONTENT_DISPOSITION: string;
        const HTTP2_HEADER_CONTENT_ENCODING: string;
        const HTTP2_HEADER_CONTENT_LANGUAGE: string;
        const HTTP2_HEADER_CONTENT_LENGTH: string;
        const HTTP2_HEADER_CONTENT_LOCATION: string;
        const HTTP2_HEADER_CONTENT_MD5: string;
        const HTTP2_HEADER_CONTENT_RANGE: string;
        const HTTP2_HEADER_CONTENT_TYPE: string;
        const HTTP2_HEADER_COOKIE: string;
        const HTTP2_HEADER_DATE: string;
        const HTTP2_HEADER_ETAG: string;
        const HTTP2_HEADER_EXPECT: string;
        const HTTP2_HEADER_EXPIRES: string;
        const HTTP2_HEADER_FROM: string;
        const HTTP2_HEADER_HOST: string;
        const HTTP2_HEADER_IF_MATCH: string;
        const HTTP2_HEADER_IF_MODIFIED_SINCE: string;
        const HTTP2_HEADER_IF_NONE_MATCH: string;
        const HTTP2_HEADER_IF_RANGE: string;
        const HTTP2_HEADER_IF_UNMODIFIED_SINCE: string;
        const HTTP2_HEADER_LAST_MODIFIED: string;
        const HTTP2_HEADER_LINK: string;
        const HTTP2_HEADER_LOCATION: string;
        const HTTP2_HEADER_MAX_FORWARDS: string;
        const HTTP2_HEADER_PREFER: string;
        const HTTP2_HEADER_PROXY_AUTHENTICATE: string;
        const HTTP2_HEADER_PROXY_AUTHORIZATION: string;
        const HTTP2_HEADER_RANGE: string;
        const HTTP2_HEADER_REFERER: string;
        const HTTP2_HEADER_REFRESH: string;
        const HTTP2_HEADER_RETRY_AFTER: string;
        const HTTP2_HEADER_SERVER: string;
        const HTTP2_HEADER_SET_COOKIE: string;
        const HTTP2_HEADER_STRICT_TRANSPORT_SECURITY: string;
        const HTTP2_HEADER_TRANSFER_ENCODING: string;
        const HTTP2_HEADER_TE: string;
        const HTTP2_HEADER_UPGRADE: string;
        const HTTP2_HEADER_USER_AGENT: string;
        const HTTP2_HEADER_VARY: string;
        const HTTP2_HEADER_VIA: string;
        const HTTP2_HEADER_WWW_AUTHENTICATE: string;
        const HTTP2_HEADER_HTTP2_SETTINGS: string;
        const HTTP2_HEADER_KEEP_ALIVE: string;
        const HTTP2_HEADER_PROXY_CONNECTION: string;
        const HTTP2_METHOD_ACL: string;
        const HTTP2_METHOD_BASELINE_CONTROL: string;
        const HTTP2_METHOD_BIND: string;
        const HTTP2_METHOD_CHECKIN: string;
        const HTTP2_METHOD_CHECKOUT: string;
        const HTTP2_METHOD_CONNECT: string;
        const HTTP2_METHOD_COPY: string;
        const HTTP2_METHOD_DELETE: string;
        const HTTP2_METHOD_GET: string;
        const HTTP2_METHOD_HEAD: string;
        const HTTP2_METHOD_LABEL: string;
        const HTTP2_METHOD_LINK: string;
        const HTTP2_METHOD_LOCK: string;
        const HTTP2_METHOD_MERGE: string;
        const HTTP2_METHOD_MKACTIVITY: string;
        const HTTP2_METHOD_MKCALENDAR: string;
        const HTTP2_METHOD_MKCOL: string;
        const HTTP2_METHOD_MKREDIRECTREF: string;
        const HTTP2_METHOD_MKWORKSPACE: string;
        const HTTP2_METHOD_MOVE: string;
        const HTTP2_METHOD_OPTIONS: string;
        const HTTP2_METHOD_ORDERPATCH: string;
        const HTTP2_METHOD_PATCH: string;
        const HTTP2_METHOD_POST: string;
        const HTTP2_METHOD_PRI: string;
        const HTTP2_METHOD_PROPFIND: string;
        const HTTP2_METHOD_PROPPATCH: string;
        const HTTP2_METHOD_PUT: string;
        const HTTP2_METHOD_REBIND: string;
        const HTTP2_METHOD_REPORT: string;
        const HTTP2_METHOD_SEARCH: string;
        const HTTP2_METHOD_TRACE: string;
        const HTTP2_METHOD_UNBIND: string;
        const HTTP2_METHOD_UNCHECKOUT: string;
        const HTTP2_METHOD_UNLINK: string;
        const HTTP2_METHOD_UNLOCK: string;
        const HTTP2_METHOD_UPDATE: string;
        const HTTP2_METHOD_UPDATEREDIRECTREF: string;
        const HTTP2_METHOD_VERSION_CONTROL: string;
        const HTTP_STATUS_CONTINUE: number;
        const HTTP_STATUS_SWITCHING_PROTOCOLS: number;
        const HTTP_STATUS_PROCESSING: number;
        const HTTP_STATUS_OK: number;
        const HTTP_STATUS_CREATED: number;
        const HTTP_STATUS_ACCEPTED: number;
        const HTTP_STATUS_NON_AUTHORITATIVE_INFORMATION: number;
        const HTTP_STATUS_NO_CONTENT: number;
        const HTTP_STATUS_RESET_CONTENT: number;
        const HTTP_STATUS_PARTIAL_CONTENT: number;
        const HTTP_STATUS_MULTI_STATUS: number;
        const HTTP_STATUS_ALREADY_REPORTED: number;
        const HTTP_STATUS_IM_USED: number;
        const HTTP_STATUS_MULTIPLE_CHOICES: number;
        const HTTP_STATUS_MOVED_PERMANENTLY: number;
        const HTTP_STATUS_FOUND: number;
        const HTTP_STATUS_SEE_OTHER: number;
        const HTTP_STATUS_NOT_MODIFIED: number;
        const HTTP_STATUS_USE_PROXY: number;
        const HTTP_STATUS_TEMPORARY_REDIRECT: number;
        const HTTP_STATUS_PERMANENT_REDIRECT: number;
        const HTTP_STATUS_BAD_REQUEST: number;
        const HTTP_STATUS_UNAUTHORIZED: number;
        const HTTP_STATUS_PAYMENT_REQUIRED: number;
        const HTTP_STATUS_FORBIDDEN: number;
        const HTTP_STATUS_NOT_FOUND: number;
        const HTTP_STATUS_METHOD_NOT_ALLOWED: number;
        const HTTP_STATUS_NOT_ACCEPTABLE: number;
        const HTTP_STATUS_PROXY_AUTHENTICATION_REQUIRED: number;
        const HTTP_STATUS_REQUEST_TIMEOUT: number;
        const HTTP_STATUS_CONFLICT: number;
        const HTTP_STATUS_GONE: number;
        const HTTP_STATUS_LENGTH_REQUIRED: number;
        const HTTP_STATUS_PRECONDITION_FAILED: number;
        const HTTP_STATUS_PAYLOAD_TOO_LARGE: number;
        const HTTP_STATUS_URI_TOO_LONG: number;
        const HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE: number;
        const HTTP_STATUS_RANGE_NOT_SATISFIABLE: number;
        const HTTP_STATUS_EXPECTATION_FAILED: number;
        const HTTP_STATUS_TEAPOT: number;
        const HTTP_STATUS_MISDIRECTED_REQUEST: number;
        const HTTP_STATUS_UNPROCESSABLE_ENTITY: number;
        const HTTP_STATUS_LOCKED: number;
        const HTTP_STATUS_FAILED_DEPENDENCY: number;
        const HTTP_STATUS_UNORDERED_COLLECTION: number;
        const HTTP_STATUS_UPGRADE_REQUIRED: number;
        const HTTP_STATUS_PRECONDITION_REQUIRED: number;
        const HTTP_STATUS_TOO_MANY_REQUESTS: number;
        const HTTP_STATUS_REQUEST_HEADER_FIELDS_TOO_LARGE: number;
        const HTTP_STATUS_UNAVAILABLE_FOR_LEGAL_REASONS: number;
        const HTTP_STATUS_INTERNAL_SERVER_ERROR: number;
        const HTTP_STATUS_NOT_IMPLEMENTED: number;
        const HTTP_STATUS_BAD_GATEWAY: number;
        const HTTP_STATUS_SERVICE_UNAVAILABLE: number;
        const HTTP_STATUS_GATEWAY_TIMEOUT: number;
        const HTTP_STATUS_HTTP_VERSION_NOT_SUPPORTED: number;
        const HTTP_STATUS_VARIANT_ALSO_NEGOTIATES: number;
        const HTTP_STATUS_INSUFFICIENT_STORAGE: number;
        const HTTP_STATUS_LOOP_DETECTED: number;
        const HTTP_STATUS_BANDWIDTH_LIMIT_EXCEEDED: number;
        const HTTP_STATUS_NOT_EXTENDED: number;
        const HTTP_STATUS_NETWORK_AUTHENTICATION_REQUIRED: number;
    }
    /**
     * This symbol can be set as a property on the HTTP/2 headers object with
     * an array value in order to provide a list of headers considered sensitive.
     */
    export const sensitiveHeaders: symbol;
    /**
     * Returns an object containing the default settings for an `Http2Session` instance. This method returns a new object instance every time it is called
     * so instances returned may be safely modified for use.
     * @since v8.4.0
     */
    export function getDefaultSettings(): Settings;
    /**
     * Returns a `Buffer` instance containing serialized representation of the given
     * HTTP/2 settings as specified in the [HTTP/2](https://tools.ietf.org/html/rfc7540) specification. This is intended
     * for use with the `HTTP2-Settings` header field.
     *
     * ```js
     * import http2 from 'node:http2';
     *
     * const packed = http2.getPackedSettings({ enablePush: false });
     *
     * console.log(packed.toString('base64'));
     * // Prints: AAIAAAAA
     * ```
     * @since v8.4.0
     */
    export function getPackedSettings(settings: Settings): NonSharedBuffer;
    /**
     * Returns a `HTTP/2 Settings Object` containing the deserialized settings from
     * the given `Buffer` as generated by `http2.getPackedSettings()`.
     * @since v8.4.0
     * @param buf The packed settings.
     */
    export function getUnpackedSettings(buf: Uint8Array): Settings;
    /**
     * Returns a `net.Server` instance that creates and manages `Http2Session` instances.
     *
     * Since there are no browsers known that support [unencrypted HTTP/2](https://http2.github.io/faq/#does-http2-require-encryption), the use of {@link createSecureServer} is necessary when
     * communicating
     * with browser clients.
     *
     * ```js
     * import http2 from 'node:http2';
     *
     * // Create an unencrypted HTTP/2 server.
     * // Since there are no browsers known that support
     * // unencrypted HTTP/2, the use of `http2.createSecureServer()`
     * // is necessary when communicating with browser clients.
     * const server = http2.createServer();
     *
     * server.on('stream', (stream, headers) => {
     *   stream.respond({
     *     'content-type': 'text/html; charset=utf-8',
     *     ':status': 200,
     *   });
     *   stream.end('<h1>Hello World</h1>');
     * });
     *
     * server.listen(8000);
     * ```
     * @since v8.4.0
     * @param onRequestHandler See `Compatibility API`
     */
    export function createServer(
        onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void,
    ): Http2Server;
    export function createServer<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    >(
        options: ServerOptions<Http1Request, Http1Response, Http2Request, Http2Response>,
        onRequestHandler?: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
    ): Http2Server<Http1Request, Http1Response, Http2Request, Http2Response>;
    /**
     * Returns a `tls.Server` instance that creates and manages `Http2Session` instances.
     *
     * ```js
     * import http2 from 'node:http2';
     * import fs from 'node:fs';
     *
     * const options = {
     *   key: fs.readFileSync('server-key.pem'),
     *   cert: fs.readFileSync('server-cert.pem'),
     * };
     *
     * // Create a secure HTTP/2 server
     * const server = http2.createSecureServer(options);
     *
     * server.on('stream', (stream, headers) => {
     *   stream.respond({
     *     'content-type': 'text/html; charset=utf-8',
     *     ':status': 200,
     *   });
     *   stream.end('<h1>Hello World</h1>');
     * });
     *
     * server.listen(8443);
     * ```
     * @since v8.4.0
     * @param onRequestHandler See `Compatibility API`
     */
    export function createSecureServer(
        onRequestHandler?: (request: Http2ServerRequest, response: Http2ServerResponse) => void,
    ): Http2SecureServer;
    export function createSecureServer<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    >(
        options: SecureServerOptions<Http1Request, Http1Response, Http2Request, Http2Response>,
        onRequestHandler?: (request: InstanceType<Http2Request>, response: InstanceType<Http2Response>) => void,
    ): Http2SecureServer<Http1Request, Http1Response, Http2Request, Http2Response>;
    /**
     * Returns a `ClientHttp2Session` instance.
     *
     * ```js
     * import http2 from 'node:http2';
     * const client = http2.connect('https://localhost:1234');
     *
     * // Use the client
     *
     * client.close();
     * ```
     * @since v8.4.0
     * @param authority The remote HTTP/2 server to connect to. This must be in the form of a minimal, valid URL with the `http://` or `https://` prefix, host name, and IP port (if a non-default port
     * is used). Userinfo (user ID and password), path, querystring, and fragment details in the URL will be ignored.
     * @param listener Will be registered as a one-time listener of the {@link 'connect'} event.
     */
    export function connect(
        authority: string | url.URL,
        listener: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void,
    ): ClientHttp2Session;
    export function connect(
        authority: string | url.URL,
        options?: ClientSessionOptions | SecureClientSessionOptions,
        listener?: (session: ClientHttp2Session, socket: net.Socket | tls.TLSSocket) => void,
    ): ClientHttp2Session;
    /**
     * Create an HTTP/2 server session from an existing socket.
     * @param socket A Duplex Stream
     * @param options Any `{@link createServer}` options can be provided.
     * @since v20.12.0
     */
    export function performServerHandshake<
        Http1Request extends typeof IncomingMessage = typeof IncomingMessage,
        Http1Response extends typeof ServerResponse<InstanceType<Http1Request>> = typeof ServerResponse,
        Http2Request extends typeof Http2ServerRequest = typeof Http2ServerRequest,
        Http2Response extends typeof Http2ServerResponse<InstanceType<Http2Request>> = typeof Http2ServerResponse,
    >(
        socket: stream.Duplex,
        options?: ServerOptions<Http1Request, Http1Response, Http2Request, Http2Response>,
    ): ServerHttp2Session<Http1Request, Http1Response, Http2Request, Http2Response>;
}
declare module "node:http2" {
    export * from "http2";
}
