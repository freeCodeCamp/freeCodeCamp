// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
export function IsTypeScriptEnumLike(value) {
    return Guard.IsObjectNotArray(value);
}
export function TypeScriptEnumToEnumValues(type) {
    const keys = Guard.Keys(type).filter((key) => isNaN(key));
    return keys.reduce((result, key) => [...result, type[key]], []);
}
