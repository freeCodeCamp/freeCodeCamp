"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadableWebToNodeStream = void 0;
const readable_stream_1 = require("readable-stream");
/**
 * Converts a Web-API stream into Node stream.Readable class
 * Node stream readable: https://nodejs.org/api/stream.html#stream_readable_streams
 * Web API readable-stream: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
 * Node readable stream: https://nodejs.org/api/stream.html#stream_readable_streams
 */
class ReadableWebToNodeStream extends readable_stream_1.Readable {
    /**
     *
     * @param stream Readable​Stream: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
     */
    constructor(stream) {
        super();
        this.bytesRead = 0;
        this.released = false;
        this.reader = stream.getReader();
    }
    /**
     * Implementation of readable._read(size).
     * When readable._read() is called, if data is available from the resource,
     * the implementation should begin pushing that data into the read queue
     * https://nodejs.org/api/stream.html#stream_readable_read_size_1
     */
    async _read() {
        // Should start pushing data into the queue
        // Read data from the underlying Web-API-readable-stream
        if (this.released) {
            this.push(null); // Signal EOF
            return;
        }
        this.pendingRead = this.reader.read();
        const data = await this.pendingRead;
        // clear the promise before pushing pushing new data to the queue and allow sequential calls to _read()
        delete this.pendingRead;
        if (data.done || this.released) {
            this.push(null); // Signal EOF
        }
        else {
            this.bytesRead += data.value.length;
            this.push(data.value); // Push new data to the queue
        }
    }
    /**
     * If there is no unresolved read call to Web-API Readable​Stream immediately returns;
     * otherwise will wait until the read is resolved.
     */
    async waitForReadToComplete() {
        if (this.pendingRead) {
            await this.pendingRead;
        }
    }
    /**
     * Close wrapper
     */
    async close() {
        await this.syncAndRelease();
    }
    async syncAndRelease() {
        this.released = true;
        await this.waitForReadToComplete();
        await this.reader.releaseLock();
    }
}
exports.ReadableWebToNodeStream = ReadableWebToNodeStream;
//# sourceMappingURL=index.js.map