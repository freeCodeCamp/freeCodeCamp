import { Guard } from '../../guard/index.mjs';
// Internal mutable state
const settings = {
    immutableTypes: false,
    maxErrors: 8,
    useAcceleration: true,
    exactOptionalPropertyTypes: false,
    enumerableKind: false,
    correctiveParse: false
};
/** Resets system settings to defaults */
export function Reset() {
    settings.immutableTypes = false;
    settings.maxErrors = 8;
    settings.useAcceleration = true;
    settings.exactOptionalPropertyTypes = false;
    settings.enumerableKind = false;
    settings.correctiveParse = false;
}
/** Sets system settings */
export function Set(options) {
    for (const key of Guard.Keys(options)) {
        const value = options[key];
        if (value !== undefined) {
            Object.defineProperty(settings, key, { value });
        }
    }
}
/** Gets current system settings */
export function Get() {
    return settings;
}
