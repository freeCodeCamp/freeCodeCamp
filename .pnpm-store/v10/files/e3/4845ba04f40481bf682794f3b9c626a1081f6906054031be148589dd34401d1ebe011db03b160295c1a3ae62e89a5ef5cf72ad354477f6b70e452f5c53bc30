// deno-lint-ignore-file no-explicit-any
// deno-fmt-ignore-file
import { Settings } from '../settings/index.mjs';
import { Metrics } from './metrics.mjs';
function MergeHidden(left, right) {
    for (const key of Object.keys(right)) {
        Object.defineProperty(left, key, {
            configurable: true,
            writable: true,
            enumerable: false,
            value: right[key]
        });
    }
    return left;
}
function Merge(left, right) {
    return { ...left, ...right };
}
/**
 * Creates an object with hidden, enumerable, and optional property sets. This function
 * ensures types are instantiated according to configuration rules for enumerable and
 * non-enumerable properties.
 */
export function Create(hidden, enumerable, options = {}) {
    Metrics.create += 1;
    const settings = Settings.Get();
    const withOptions = Merge(enumerable, options);
    const withHidden = settings.enumerableKind ? Merge(withOptions, hidden) : MergeHidden(withOptions, hidden);
    return settings.immutableTypes ? Object.freeze(withHidden) : withHidden;
}
