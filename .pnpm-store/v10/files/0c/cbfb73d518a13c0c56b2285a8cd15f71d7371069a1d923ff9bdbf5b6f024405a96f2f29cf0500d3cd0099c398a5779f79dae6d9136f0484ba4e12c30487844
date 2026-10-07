import { Readable } from 'readable-stream';
/**
 * Converts a Web-API stream into Node stream.Readable class
 * Node stream readable: https://nodejs.org/api/stream.html#stream_readable_streams
 * Web API readable-stream: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
 * Node readable stream: https://nodejs.org/api/stream.html#stream_readable_streams
 */
export declare class ReadableWebToNodeStream extends Readable {
    bytesRead: number;
    released: boolean;
    /**
     * Default web API stream reader
     * https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader
     */
    private reader;
    private pendingRead;
    /**
     *
     * @param stream Readable​Stream: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
     */
    constructor(stream: ReadableStream);
    /**
     * Implementation of readable._read(size).
     * When readable._read() is called, if data is available from the resource,
     * the implementation should begin pushing that data into the read queue
     * https://nodejs.org/api/stream.html#stream_readable_read_size_1
     */
    _read(): Promise<void>;
    /**
     * If there is no unresolved read call to Web-API Readable​Stream immediately returns;
     * otherwise will wait until the read is resolved.
     */
    waitForReadToComplete(): Promise<void>;
    /**
     * Close wrapper
     */
    close(): Promise<void>;
    private syncAndRelease;
}
