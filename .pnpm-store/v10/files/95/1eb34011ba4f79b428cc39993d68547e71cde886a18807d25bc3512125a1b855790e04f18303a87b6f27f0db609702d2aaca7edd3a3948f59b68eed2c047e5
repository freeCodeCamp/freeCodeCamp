"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useState = useState;
const node_async_hooks_1 = require("node:async_hooks");
const hook_engine_ts_1 = require("./hook-engine.js");
function useState(defaultValue) {
    return (0, hook_engine_ts_1.withPointer)((pointer) => {
        const setState = node_async_hooks_1.AsyncResource.bind(function setState(newValue) {
            // Noop if the value is still the same.
            if (pointer.get() !== newValue) {
                pointer.set(newValue);
                // Trigger re-render
                (0, hook_engine_ts_1.handleChange)();
            }
        });
        if (pointer.initialized) {
            return [pointer.get(), setState];
        }
        const value = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        pointer.set(value);
        return [value, setState];
    });
}
