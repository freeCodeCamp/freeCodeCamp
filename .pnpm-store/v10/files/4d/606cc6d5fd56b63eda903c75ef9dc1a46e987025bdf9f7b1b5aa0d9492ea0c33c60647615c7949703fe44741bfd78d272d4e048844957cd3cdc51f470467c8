// deno-lint-ignore-file no-explicit-any
// deno-fmt-ignore-file
import { Metrics } from './metrics.mjs';
import { Clone } from './clone.mjs';
/** Discards multiple property keys from the given object value */
export function Discard(value, propertyKeys) {
    Metrics.discard += 1;
    const result = {};
    const descriptors = Object.getOwnPropertyDescriptors(Clone(value));
    const keysToDiscard = new Set(propertyKeys);
    for (const key of Object.keys(descriptors)) {
        if (keysToDiscard.has(key))
            continue;
        Object.defineProperty(result, key, descriptors[key]);
    }
    return result;
}
