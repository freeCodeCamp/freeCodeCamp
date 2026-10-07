"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onData = onData;
const utils_1 = require("../../utils");
/**
 * onData is adapted from Node.js' events.on helper
 * https://nodejs.org/api/events.html#eventsonemitter-eventname-options
 *
 * Returns an AsyncIterator that iterates each 'data' event emitted from emitter.
 * It will reject upon an error event.
 */
function onData(emitter, { timeoutContext, signal }) {
    signal?.throwIfAborted();
    // Setup pending events and pending promise lists
    /**
     * When the caller has not yet called .next(), we store the
     * value from the event in this list. Next time they call .next()
     * we pull the first value out of this list and resolve a promise with it.
     */
    const unconsumedEvents = new utils_1.List();
    /**
     * When there has not yet been an event, a new promise will be created
     * and implicitly stored in this list. When an event occurs we take the first
     * promise in this list and resolve it.
     */
    const unconsumedPromises = new utils_1.List();
    /**
     * Stored an error created by an error event.
     * This error will turn into a rejection for the subsequent .next() call
     */
    let error = null;
    /** Set to true only after event listeners have been removed. */
    let finished = false;
    const iterator = {
        next() {
            // First, we consume all unread events
            const value = unconsumedEvents.shift();
            if (value != null) {
                return Promise.resolve({ value, done: false });
            }
            // Then we error, if an error happened
            // This happens one time if at all, because after 'error'
            // we stop listening
            if (error != null) {
                const p = Promise.reject(error);
                // Only the first element errors
                error = null;
                return p;
            }
            // If the iterator is finished, resolve to done
            if (finished)
                return closeHandler();
            // Wait until an event happens
            const { promise, resolve, reject } = (0, utils_1.promiseWithResolvers)();
            unconsumedPromises.push({ resolve, reject });
            return promise;
        },
        return() {
            return closeHandler();
        },
        throw(err) {
            errorHandler(err);
            return Promise.resolve({ value: undefined, done: true });
        },
        [Symbol.asyncIterator]() {
            return this;
        },
        // Note this should currently not be used, but is required by the AsyncGenerator interface.
        async [Symbol.asyncDispose]() {
            await closeHandler();
        }
    };
    // Adding event handlers
    emitter.on('data', eventHandler);
    emitter.on('error', errorHandler);
    const abortListener = (0, utils_1.addAbortListener)(signal, function () {
        errorHandler(this.reason);
    });
    const timeoutForSocketRead = timeoutContext?.timeoutForSocketRead;
    timeoutForSocketRead?.throwIfExpired();
    timeoutForSocketRead?.then(undefined, errorHandler);
    return iterator;
    function eventHandler(value) {
        const promise = unconsumedPromises.shift();
        if (promise != null)
            promise.resolve({ value, done: false });
        else
            unconsumedEvents.push(value);
    }
    function errorHandler(err) {
        const promise = unconsumedPromises.shift();
        if (promise != null)
            promise.reject(err);
        else
            error = err;
        void closeHandler();
    }
    function closeHandler() {
        // Adding event handlers
        emitter.off('data', eventHandler);
        emitter.off('error', errorHandler);
        abortListener?.[utils_1.kDispose]();
        finished = true;
        timeoutForSocketRead?.clear();
        const doneResult = { value: undefined, done: finished };
        for (const promise of unconsumedPromises) {
            promise.resolve(doneResult);
        }
        return Promise.resolve(doneResult);
    }
}
//# sourceMappingURL=on_data.js.map