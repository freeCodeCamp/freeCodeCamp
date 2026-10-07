/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
 */
export class ConsoleMessage {
    #type;
    #text;
    #args;
    #stackTraceLocations;
    #frame;
    #rawStackTrace;
    #targetId;
    /**
     * @internal
     */
    constructor(type, text, args, stackTraceLocations, frame, rawStackTrace, targetId) {
        this.#type = type;
        this.#text = text;
        this.#args = args;
        this.#stackTraceLocations = stackTraceLocations;
        this.#frame = frame;
        this.#rawStackTrace = rawStackTrace;
        this.#targetId = targetId;
    }
    /**
     * The type of the console message.
     */
    type() {
        return this.#type;
    }
    /**
     * The text of the console message.
     */
    text() {
        return this.#text;
    }
    /**
     * An array of arguments passed to the console.
     */
    args() {
        return this.#args;
    }
    /**
     * The location of the console message.
     */
    location() {
        return (this.#stackTraceLocations[0] ??
            (this.#frame ? { url: this.#frame.url() } : {}));
    }
    /**
     * The array of locations on the stack of the console message.
     */
    stackTrace() {
        return this.#stackTraceLocations;
    }
    /**
     * The underlying protocol stack trace if available.
     *
     * @internal
     */
    _rawStackTrace() {
        return this.#rawStackTrace;
    }
    /**
     * The targetId from which this console message originated.
     *
     * @internal
     */
    _targetId() {
        return this.#targetId;
    }
}
//# sourceMappingURL=ConsoleMessage.js.map