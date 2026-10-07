"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = void 0;
const MemoryLeakError_1 = require("./MemoryLeakError");
/**
 * Node.js-compatible implementation of `EventEmitter`.
 *
 * @example
 * const emitter = new Emitter<{ hello: [string] }>()
 * emitter.on('hello', (name) => console.log(name))
 * emitter.emit('hello', 'John')
 */
class Emitter {
    constructor() {
        this.events = new Map();
        this.maxListeners = Emitter.defaultMaxListeners;
        this.hasWarnedAboutPotentialMemoryLeak = false;
    }
    static listenerCount(emitter, eventName) {
        return emitter.listenerCount(eventName);
    }
    _emitInternalEvent(internalEventName, eventName, listener) {
        this.emit(internalEventName, 
        // Anything to make TypeScript happy.
        ...[eventName, listener]);
    }
    _getListeners(eventName) {
        return this.events.get(eventName) || [];
    }
    _removeListener(listeners, listener) {
        const index = listeners.indexOf(listener);
        if (index > -1) {
            listeners.splice(index, 1);
        }
        return [];
    }
    _wrapOnceListener(eventName, listener) {
        const onceListener = (...data) => {
            this.removeListener(eventName, onceListener);
            listener.apply(this, data);
        };
        return onceListener;
    }
    setMaxListeners(maxListeners) {
        this.maxListeners = maxListeners;
        return this;
    }
    /**
     * Returns the current max listener value for the `Emitter` which is
     * either set by `emitter.setMaxListeners(n)` or defaults to
     * `Emitter.defaultMaxListeners`.
     */
    getMaxListeners() {
        return this.maxListeners;
    }
    /**
     * Returns an array listing the events for which the emitter has registered listeners.
     * The values in the array will be strings or Symbols.
     */
    eventNames() {
        return Array.from(this.events.keys());
    }
    /**
     * Synchronously calls each of the listeners registered for the event named `eventName`,
     * in the order they were registered, passing the supplied arguments to each.
     * Returns `true` if the event has listeners, `false` otherwise.
     *
     * @example
     * const emitter = new Emitter<{ hello: [string] }>()
     * emitter.emit('hello', 'John')
     */
    emit(eventName, ...data) {
        const listeners = this._getListeners(eventName);
        listeners.forEach((listener) => {
            listener.apply(this, data);
        });
        return listeners.length > 0;
    }
    addListener(eventName, listener) {
        // Emit the `newListener` event before adding the listener.
        this._emitInternalEvent('newListener', eventName, listener);
        const nextListeners = this._getListeners(eventName).concat(listener);
        this.events.set(eventName, nextListeners);
        if (this.maxListeners > 0 &&
            this.listenerCount(eventName) > this.maxListeners &&
            !this.hasWarnedAboutPotentialMemoryLeak) {
            this.hasWarnedAboutPotentialMemoryLeak = true;
            const memoryLeakWarning = new MemoryLeakError_1.MemoryLeakError(this, eventName, this.listenerCount(eventName));
            console.warn(memoryLeakWarning);
        }
        return this;
    }
    on(eventName, listener) {
        return this.addListener(eventName, listener);
    }
    once(eventName, listener) {
        return this.addListener(eventName, this._wrapOnceListener(eventName, listener));
    }
    prependListener(eventName, listener) {
        const listeners = this._getListeners(eventName);
        if (listeners.length > 0) {
            const nextListeners = [listener].concat(listeners);
            this.events.set(eventName, nextListeners);
        }
        else {
            this.events.set(eventName, listeners.concat(listener));
        }
        return this;
    }
    prependOnceListener(eventName, listener) {
        return this.prependListener(eventName, this._wrapOnceListener(eventName, listener));
    }
    removeListener(eventName, listener) {
        const listeners = this._getListeners(eventName);
        if (listeners.length > 0) {
            this._removeListener(listeners, listener);
            this.events.set(eventName, listeners);
            // Emit the `removeListener` event after removing the listener.
            this._emitInternalEvent('removeListener', eventName, listener);
        }
        return this;
    }
    /**
     * Alias for `emitter.removeListener()`.
     *
     * @example
     * emitter.off('hello', listener)
     */
    off(eventName, listener) {
        return this.removeListener(eventName, listener);
    }
    removeAllListeners(eventName) {
        if (eventName) {
            this.events.delete(eventName);
        }
        else {
            this.events.clear();
        }
        return this;
    }
    /**
     * Returns a copy of the array of listeners for the event named `eventName`.
     */
    listeners(eventName) {
        return Array.from(this._getListeners(eventName));
    }
    /**
     * Returns the number of listeners listening to the event named `eventName`.
     */
    listenerCount(eventName) {
        return this._getListeners(eventName).length;
    }
    rawListeners(eventName) {
        return this.listeners(eventName);
    }
}
exports.Emitter = Emitter;
Emitter.defaultMaxListeners = 10;
