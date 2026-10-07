/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Deferred } from '../util/Deferred.js';
import { rewriteError } from '../util/ErrorLike.js';
import { ProtocolError, TargetCloseError } from './Errors.js';
import { debugError } from './util.js';
/**
 * Manages callbacks and their IDs for the protocol request/response communication.
 *
 * @internal
 */
export class CallbackRegistry {
    #callbacks = new Map();
    #idGenerator;
    constructor(idGenerator) {
        this.#idGenerator = idGenerator;
    }
    has(id) {
        return this.#callbacks.has(id);
    }
    create(label, timeout, request) {
        const callback = new Callback(this.#idGenerator(), label, timeout);
        this.#callbacks.set(callback.id, callback);
        try {
            request(callback.id);
        }
        catch (error) {
            // We still throw sync errors synchronously and clean up the scheduled
            // callback.
            callback.promise.catch(debugError).finally(() => {
                this.#callbacks.delete(callback.id);
            });
            callback.reject(error);
            throw error;
        }
        // Must only have sync code up until here.
        return callback.promise.finally(() => {
            this.#callbacks.delete(callback.id);
        });
    }
    reject(id, message, originalMessage) {
        const callback = this.#callbacks.get(id);
        if (!callback) {
            return;
        }
        this._reject(callback, message, originalMessage);
    }
    rejectRaw(id, error) {
        const callback = this.#callbacks.get(id);
        if (!callback) {
            return;
        }
        callback.reject(error);
    }
    _reject(callback, errorMessage, originalMessage) {
        let error;
        let message;
        if (errorMessage instanceof ProtocolError) {
            error = errorMessage;
            error.cause = callback.error;
            message = errorMessage.message;
        }
        else {
            error = callback.error;
            message = errorMessage;
        }
        callback.reject(rewriteError(error, `Protocol error (${callback.label}): ${message}`, originalMessage));
    }
    resolve(id, value) {
        const callback = this.#callbacks.get(id);
        if (!callback) {
            return;
        }
        callback.resolve(value);
    }
    clear() {
        for (const callback of this.#callbacks.values()) {
            // TODO: probably we can accept error messages as params.
            this._reject(callback, new TargetCloseError('Target closed'));
        }
        this.#callbacks.clear();
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
        const result = [];
        for (const callback of this.#callbacks.values()) {
            result.push(new Error(`${callback.label} timed out. Trace: ${callback.error.stack}`));
        }
        return result;
    }
}
/**
 * @internal
 */
export class Callback {
    #id;
    #error = new ProtocolError();
    #deferred = Deferred.create();
    #timer;
    #label;
    constructor(id, label, timeout) {
        this.#id = id;
        this.#label = label;
        if (timeout) {
            this.#timer = setTimeout(() => {
                this.#deferred.reject(rewriteError(this.#error, `${label} timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.`));
            }, timeout);
        }
    }
    resolve(value) {
        clearTimeout(this.#timer);
        this.#deferred.resolve(value);
    }
    reject(error) {
        clearTimeout(this.#timer);
        this.#deferred.reject(error);
    }
    get id() {
        return this.#id;
    }
    get promise() {
        return this.#deferred.valueOrThrow();
    }
    get error() {
        return this.#error;
    }
    get label() {
        return this.#label;
    }
}
//# sourceMappingURL=CallbackRegistry.js.map