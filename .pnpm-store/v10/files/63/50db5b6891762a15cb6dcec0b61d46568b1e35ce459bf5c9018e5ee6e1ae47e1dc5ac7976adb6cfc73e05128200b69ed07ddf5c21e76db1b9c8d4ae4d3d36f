// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { Callback } from './callback.mjs';
import { Clone } from '../clone/index.mjs';
import { Clean } from '../clean/index.mjs';
// ------------------------------------------------------------------
// MergeInteriors
//
// Merges all interior operand results into a single object. Each
// subsequent operand's properties override those of prior operands.
//
// ------------------------------------------------------------------
function MergeInteriors(interiors) {
    return interiors.reduce((results, interior) => ({ ...results, ...interior }), {});
}
// ------------------------------------------------------------------
// NonMatchingInterior
//
// Used when Intersect operands do not all produce Objects. Returns
// the first interior result that differs from the original value,
// indicating a Codec has transformed the data. If no operand
// produced a change, defaults to the first interior result.
//
// ------------------------------------------------------------------
function NonMatchingInterior(value, interiors) {
    for (const interior of interiors)
        if (!Guard.IsDeepEqual(value, interior))
            return interior;
    return value; // value-unchanged
}
// ------------------------------------------------------------------
// Decode
// ------------------------------------------------------------------
function Decode(direction, context, type, value) {
    if (Guard.IsEqual(type.allOf.length, 0))
        return Callback(direction, context, type, value);
    const interiors = type.allOf.map((schema) => FromType(direction, context, schema, Clean(schema, Clone(value))));
    const structural = interiors.every((result) => Guard.IsObject(result));
    const exterior = structural ? MergeInteriors(interiors) : NonMatchingInterior(value, interiors);
    return Callback(direction, context, type, exterior);
}
// ------------------------------------------------------------------
// Encode
// ------------------------------------------------------------------
function Encode(direction, context, type, value) {
    if (Guard.IsEqual(type.allOf.length, 0))
        return Callback(direction, context, type, value);
    const exterior = Callback(direction, context, type, value);
    const interiors = type.allOf.map((schema) => FromType(direction, context, schema, Clean(schema, Clone(exterior))));
    const structural = interiors.every((result) => Guard.IsObject(result));
    if (structural)
        return MergeInteriors(interiors);
    return NonMatchingInterior(exterior, interiors);
}
export function FromIntersect(direction, context, type, value) {
    return Guard.IsEqual(direction, 'Decode') ? Decode(direction, context, type, value) : Encode(direction, context, type, value);
}
