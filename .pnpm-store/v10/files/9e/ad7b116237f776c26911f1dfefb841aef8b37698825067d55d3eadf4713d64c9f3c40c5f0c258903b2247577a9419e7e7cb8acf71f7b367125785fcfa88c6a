// deno-fmt-ignore-file
import { Unreachable } from '../../system/unreachable/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { Callback } from './callback.mjs';
import { IsOptionalUndefined } from '../shared/optional_undefined.mjs';
// ------------------------------------------------------------------
// Decode
// ------------------------------------------------------------------
function Decode(direction, context, type, value) {
    // deno-coverage-ignore-start - unreachable | checked
    if (!Guard.IsObjectNotArray(value))
        return Unreachable();
    // deno-coverage-ignore-stop
    for (const key of Guard.Keys(type.properties)) {
        // Ignore for non-present or optional-undefined
        if (!Guard.HasPropertyKey(value, key) || IsOptionalUndefined(type.properties[key], key, value))
            continue;
        value[key] = FromType(direction, context, type.properties[key], value[key]);
    }
    return Callback(direction, context, type, value);
}
// ------------------------------------------------------------------
// Encode
// ------------------------------------------------------------------
function Encode(direction, context, type, value) {
    const exterior = Callback(direction, context, type, value);
    if (!Guard.IsObjectNotArray(exterior))
        return exterior;
    for (const key of Guard.Keys(type.properties)) {
        // Ignore for non-present or optional-undefined
        if (!Guard.HasPropertyKey(exterior, key) || IsOptionalUndefined(type.properties[key], key, exterior))
            continue;
        exterior[key] = FromType(direction, context, type.properties[key], exterior[key]);
    }
    return exterior;
}
// ------------------------------------------------------------------
// FromObject
// ------------------------------------------------------------------
export function FromObject(direction, context, type, value) {
    return Guard.IsEqual(direction, 'Decode')
        ? Decode(direction, context, type, value)
        : Encode(direction, context, type, value);
}
