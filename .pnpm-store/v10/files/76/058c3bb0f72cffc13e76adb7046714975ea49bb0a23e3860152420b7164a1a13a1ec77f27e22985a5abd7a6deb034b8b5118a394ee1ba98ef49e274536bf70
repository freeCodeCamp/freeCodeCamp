import { AsyncResource } from 'node:async_hooks';
import { withPointer, handleChange } from "./hook-engine.js";
function isFactory(value) {
    return typeof value === 'function';
}
export function useState(defaultValue) {
    return withPointer((pointer) => {
        const setState = AsyncResource.bind(function setState(newValue) {
            // Noop if the value is still the same.
            if (pointer.get() !== newValue) {
                pointer.set(newValue);
                // Trigger re-render
                handleChange();
            }
        });
        if (pointer.initialized) {
            return [pointer.get(), setState];
        }
        const value = isFactory(defaultValue) ? defaultValue() : defaultValue;
        pointer.set(value);
        return [value, setState];
    });
}
