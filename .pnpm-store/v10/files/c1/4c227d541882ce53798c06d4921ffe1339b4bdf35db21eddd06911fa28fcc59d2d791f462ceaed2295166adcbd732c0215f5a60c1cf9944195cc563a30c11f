/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The base class for all Puppeteer-specific errors
 *
 * @public
 */
export class PuppeteerError extends Error {
    /**
     * @internal
     */
    constructor(message, options) {
        super(message, options);
        this.name = this.constructor.name;
    }
    /**
     * @internal
     */
    get [Symbol.toStringTag]() {
        return this.constructor.name;
    }
}
/**
 * TimeoutError is emitted whenever certain operations are terminated due to
 * timeout.
 *
 * @remarks
 * Example operations are {@link Page.waitForSelector | page.waitForSelector} or
 * {@link PuppeteerNode.launch | puppeteer.launch}.
 *
 * @public
 */
export class TimeoutError extends PuppeteerError {
}
/**
 * TouchError is thrown when an attempt is made to move or end a touch that does
 * not exist.
 * @public
 */
export class TouchError extends PuppeteerError {
}
/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */
export class ProtocolError extends PuppeteerError {
    #code;
    #originalMessage = '';
    set code(code) {
        this.#code = code;
    }
    /**
     * @readonly
     * @public
     */
    get code() {
        return this.#code;
    }
    set originalMessage(originalMessage) {
        this.#originalMessage = originalMessage;
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
        return this.#originalMessage;
    }
}
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
export class UnsupportedOperation extends PuppeteerError {
}
/**
 * @internal
 */
export class TargetCloseError extends ProtocolError {
}
/**
 * Thrown if underlying protocol connection has been closed.
 *
 * @public
 */
export class ConnectionClosedError extends ProtocolError {
}
//# sourceMappingURL=Errors.js.map