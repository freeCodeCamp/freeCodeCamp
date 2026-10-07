// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsCodec } from '../../type/index.mjs';
// ------------------------------------------------------------------
// Decode
// ------------------------------------------------------------------
function Decode(_context, type, value) {
    return type['~codec'].decode(value);
}
// ------------------------------------------------------------------
// Encode
// ------------------------------------------------------------------
function Encode(_context, type, value) {
    return type['~codec'].encode(value);
}
// ------------------------------------------------------------------
// Callback
// ------------------------------------------------------------------
export function Callback(direction, context, type, value) {
    if (!IsCodec(type))
        return value;
    return Guard.IsEqual(direction, 'Decode')
        ? Decode(context, type, value)
        : Encode(context, type, value);
}
