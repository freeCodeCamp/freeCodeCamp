/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { CDPSession, CDPSessionEvent, } from '../api/CDPSession.js';
import { CallbackRegistry } from '../common/CallbackRegistry.js';
import { TargetCloseError } from '../common/Errors.js';
import { assert } from '../util/assert.js';
import { createProtocolErrorMessage } from '../util/ErrorLike.js';
/**
 * @internal
 */
export class CdpCDPSession extends CDPSession {
    #sessionId;
    #targetType;
    #callbacks;
    #connection;
    #parentSessionId;
    #target;
    #rawErrors = false;
    #detached = false;
    /**
     * @internal
     */
    constructor(connection, targetType, sessionId, parentSessionId, rawErrors) {
        super();
        this.#connection = connection;
        this.#targetType = targetType;
        this.#callbacks = new CallbackRegistry(connection._idGenerator);
        this.#sessionId = sessionId;
        this.#parentSessionId = parentSessionId;
        this.#rawErrors = rawErrors;
    }
    /**
     * Sets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    setTarget(target) {
        this.#target = target;
    }
    /**
     * Gets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    target() {
        assert(this.#target, 'Target must exist');
        return this.#target;
    }
    connection() {
        return this.#connection;
    }
    get detached() {
        return this.#connection._closed || this.#detached;
    }
    parentSession() {
        if (!this.#parentSessionId) {
            // In some cases, e.g., DevTools pages there is no parent session. In this
            // case, we treat the current session as the parent session.
            return this;
        }
        const parent = this.#connection?.session(this.#parentSessionId);
        return parent ?? undefined;
    }
    send(method, params, options) {
        if (this.detached) {
            return Promise.reject(new TargetCloseError(`Protocol error (${method}): Session closed. Most likely the ${this.#targetType} has been closed.`));
        }
        return this.#connection
            ._rawSend(this.#callbacks, method, params, this.#sessionId, options)
            .catch(error => {
            if (error instanceof Error &&
                error.message.includes('Session with given id not found')) {
                this.onClosed();
                throw new TargetCloseError(`Protocol error (${method}): Session with given id not found.`);
            }
            throw error;
        });
    }
    /**
     * @internal
     */
    onMessage(object) {
        if (object.id) {
            if (object.error) {
                if (this.#rawErrors) {
                    this.#callbacks.rejectRaw(object.id, object.error);
                }
                else {
                    this.#callbacks.reject(object.id, createProtocolErrorMessage(object), object.error.message);
                }
            }
            else {
                this.#callbacks.resolve(object.id, object.result);
            }
        }
        else {
            assert(!object.id);
            this.emit(object.method, object.params);
        }
    }
    /**
     * Detaches the cdpSession from the target. Once detached, the cdpSession object
     * won't emit any events and can't be used to send messages.
     */
    async detach() {
        if (this.detached) {
            throw new Error(`Session already detached. Most likely the ${this.#targetType} has been closed.`);
        }
        await this.#connection.send('Target.detachFromTarget', {
            sessionId: this.#sessionId,
        });
        this.#detached = true;
    }
    /**
     * @internal
     */
    onClosed() {
        this.#callbacks.clear();
        this.#detached = true;
        this.emit(CDPSessionEvent.Disconnected, undefined);
    }
    /**
     * Returns the session's id.
     */
    id() {
        return this.#sessionId;
    }
    /**
     * @internal
     */
    hasCallback(id) {
        return this.#callbacks.has(id);
    }
    /**
     * @internal
     */
    getPendingProtocolErrors() {
        return this.#callbacks.getPendingProtocolErrors();
    }
}
//# sourceMappingURL=CdpSession.js.map