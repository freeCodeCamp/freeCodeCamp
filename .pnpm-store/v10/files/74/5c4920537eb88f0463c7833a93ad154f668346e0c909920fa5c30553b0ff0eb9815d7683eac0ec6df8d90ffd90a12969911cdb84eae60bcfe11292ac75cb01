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
export declare class PuppeteerError extends Error {
    /**
     * @internal
     */
    constructor(message?: string, options?: ErrorOptions);
    /**
     * @internal
     */
    get [Symbol.toStringTag](): string;
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
export declare class TimeoutError extends PuppeteerError {
}
/**
 * TouchError is thrown when an attempt is made to move or end a touch that does
 * not exist.
 * @public
 */
export declare class TouchError extends PuppeteerError {
}
/**
 * ProtocolError is emitted whenever there is an error from the protocol.
 *
 * @public
 */
export declare class ProtocolError extends PuppeteerError {
    #private;
    set code(code: number | undefined);
    /**
     * @readonly
     * @public
     */
    get code(): number | undefined;
    set originalMessage(originalMessage: string);
    /**
     * @readonly
     * @public
     */
    get originalMessage(): string;
}
/**
 * Puppeteer will throw this error if a method is not
 * supported by the currently used protocol
 *
 * @public
 */
export declare class UnsupportedOperation extends PuppeteerError {
}
/**
 * @internal
 */
export declare class TargetCloseError extends ProtocolError {
}
/**
 * Thrown if underlying protocol connection has been closed.
 *
 * @public
 */
export declare class ConnectionClosedError extends ProtocolError {
}
//# sourceMappingURL=Errors.d.ts.map