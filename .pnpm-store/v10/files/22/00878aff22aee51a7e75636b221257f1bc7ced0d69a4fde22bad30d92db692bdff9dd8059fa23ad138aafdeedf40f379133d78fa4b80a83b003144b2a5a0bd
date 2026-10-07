// deno-fmt-ignore-file
import { Unreachable } from '../../system/unreachable/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { RecordPattern, RecordValue } from '../../type/index.mjs';
import { FromType } from './from_type.mjs';
import { Callback } from './callback.mjs';
// ------------------------------------------------------------------
// Decode
// ------------------------------------------------------------------
function Decode(direction, context, type, value) {
    // deno-coverage-ignore-start - unreachable | checked
    if (!Guard.IsObjectNotArray(value))
        return Unreachable();
    // deno-coverage-ignore-stop
    const regexp = new RegExp(RecordPattern(type));
    for (const key of Guard.Keys(value)) {
        // deno-coverage-ignore-start - unreachable | checked
        if (!regexp.test(key))
            Unreachable();
        // deno-coverage-ignore-stop
        value[key] = FromType(direction, context, RecordValue(type), value[key]);
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
    const regexp = new RegExp(RecordPattern(type));
    for (const key of Guard.Keys(exterior)) {
        if (!regexp.test(key))
            continue;
        exterior[key] = FromType(direction, context, RecordValue(type), exterior[key]);
    }
    return exterior;
}
export function FromRecord(direction, context, type, value) {
    return Guard.IsEqual(direction, 'Decode')
        ? Decode(direction, context, type, value)
        : Encode(direction, context, type, value);
}
