// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
/** Returns true if this value is object like */
export function IsSchemaObject(value) {
    return Guard.IsObject(value) && !Guard.IsArray(value);
}
/** Returns true if this value is a boolean */
export function IsBooleanSchema(value) {
    return Guard.IsBoolean(value);
}
/** Returns true if this value is schema like */
export function IsSchema(value) {
    return IsSchemaObject(value) || IsBooleanSchema(value);
}
