// deno-fmt-ignore-file
import { Settings } from '../settings/index.mjs';
import { Metrics } from './metrics.mjs';
import { Clone } from './clone.mjs';
/**
 * Updates a value with new properties while preserving property enumerability. Use this function to modify
 * existing types without altering their configuration.
 */
export function Update(current, hidden, enumerable) {
    Metrics.update += 1;
    const settings = Settings.Get();
    const result = Clone(current);
    // hidden
    for (const key of Object.keys(hidden)) {
        Object.defineProperty(result, key, {
            configurable: true,
            writable: true,
            enumerable: settings.enumerableKind,
            value: hidden[key]
        });
    }
    // enumerable
    for (const key of Object.keys(enumerable)) {
        Object.defineProperty(result, key, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: enumerable[key]
        });
    }
    return result;
}
