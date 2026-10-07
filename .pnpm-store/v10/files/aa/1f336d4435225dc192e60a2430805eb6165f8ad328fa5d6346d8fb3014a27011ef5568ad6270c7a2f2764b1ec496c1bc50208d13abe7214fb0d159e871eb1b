import { EventEmitter } from '../common/EventEmitter.js';
import { debugError } from '../common/util.js';
import { assert } from '../util/assert.js';
import { DisposableStack } from '../util/disposable.js';
/**
 * @internal
 */
export class PipeTransport {
    #pipeWrite;
    #subscriptions = new DisposableStack();
    #isClosed = false;
    #pendingMessage = [];
    onclose;
    onmessage;
    constructor(pipeWrite, pipeRead) {
        this.#pipeWrite = pipeWrite;
        const pipeReadEmitter = this.#subscriptions.use(
        // NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new EventEmitter(pipeRead));
        pipeReadEmitter.on('data', buffer => {
            return this.#dispatch(buffer);
        });
        pipeReadEmitter.on('close', () => {
            if (this.onclose) {
                this.onclose.call(null);
            }
        });
        pipeReadEmitter.on('error', debugError);
        const pipeWriteEmitter = this.#subscriptions.use(
        // NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new EventEmitter(pipeWrite));
        pipeWriteEmitter.on('error', debugError);
    }
    send(message) {
        assert(!this.#isClosed, '`PipeTransport` is closed.');
        this.#pipeWrite.write(message);
        this.#pipeWrite.write('\0');
    }
    #dispatch(buffer) {
        assert(!this.#isClosed, '`PipeTransport` is closed.');
        this.#pendingMessage.push(buffer);
        if (buffer.indexOf('\0') === -1) {
            return;
        }
        const concatBuffer = Buffer.concat(this.#pendingMessage);
        let start = 0;
        let end = concatBuffer.indexOf('\0');
        while (end !== -1) {
            const message = concatBuffer.toString(undefined, start, end);
            setImmediate(() => {
                if (this.onmessage) {
                    this.onmessage.call(null, message);
                }
            });
            start = end + 1;
            end = concatBuffer.indexOf('\0', start);
        }
        if (start >= concatBuffer.length) {
            this.#pendingMessage = [];
        }
        else {
            this.#pendingMessage = [concatBuffer.subarray(start)];
        }
    }
    close() {
        this.#isClosed = true;
        this.#subscriptions.dispose();
    }
}
//# sourceMappingURL=PipeTransport.js.map