/**
 * @fileoverview A variant of EventEmitter which does not give listeners information about each other
 * @author Teddy Katz
 */

"use strict";

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * An event emitter
 * @typedef {Object} SafeEmitter
 * @property {function(eventName: string, listenerFunc: Function): void} on Adds a listener for a given event name
 * @property {function(eventName: string, arg1?: any, arg2?: any, arg3?: any)} emit Emits an event with a given name.
 * This calls all the listeners that were listening for that name, with `arg1`, `arg2`, and `arg3` as arguments.
 * @property {function(): string[]} eventNames Gets the list of event names that have registered listeners.
 */

/**
 * Creates an object which can listen for and emit events.
 * This is similar to the EventEmitter API in Node's standard library, but it has a few differences.
 * The goal is to allow multiple modules to attach arbitrary listeners to the same emitter, without
 * letting the modules know about each other at all.
 * 1. It has no special keys like `error` and `newListener`, which would allow modules to detect when
 * another module throws an error or registers a listener.
 * 2. It calls listener functions without any `this` value. (`EventEmitter` calls listeners with a
 * `this` value of the emitter instance, which would give listeners access to other listeners.)
 * @returns {SafeEmitter} An emitter
 */
module.exports = () => {
    const listeners = Object.create(null);

    return Object.freeze({
        on(eventName, listener) {
            if (eventName in listeners) {
                listeners[eventName].push(listener);
            } else {
                listeners[eventName] = [listener];
            }
        },
        emit(eventName, ...args) {
            if (eventName in listeners) {
                listeners[eventName].forEach(listener => listener(...args));
            }
        },
        eventNames() {
            return Object.keys(listeners);
        }
    });
};
