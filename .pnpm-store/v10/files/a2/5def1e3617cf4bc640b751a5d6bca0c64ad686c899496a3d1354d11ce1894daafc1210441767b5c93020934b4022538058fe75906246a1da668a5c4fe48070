// deno-fmt-ignore-file
import { Unreachable } from '../../system/unreachable/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { Callback } from './callback.mjs';
// ------------------------------------------------------------------
// Decode
// ------------------------------------------------------------------
function Decode(direction, context, type, value) {
    // deno-coverage-ignore-start - unreachable | checked
    if (!Guard.IsArray(value))
        return Unreachable();
    // deno-coverage-ignore-stop
    for (let i = 0; i < Math.min(type.items.length, value.length); i++) {
        value[i] = FromType(direction, context, type.items[i], value[i]);
    }
    return Callback(direction, context, type, value);
}
// ------------------------------------------------------------------
// Encode
// ------------------------------------------------------------------
function Encode(direction, context, type, value) {
    const exterior = Callback(direction, context, type, value);
    if (!Guard.IsArray(exterior))
        return value;
    for (let i = 0; i < Math.min(type.items.length, exterior.length); i++) {
        exterior[i] = FromType(direction, context, type.items[i], exterior[i]);
    }
    return exterior;
}
export function FromTuple(direction, context, type, value) {
    return Guard.IsEqual(direction, 'Decode')
        ? Decode(direction, context, type, value)
        : Encode(direction, context, type, value);
}
