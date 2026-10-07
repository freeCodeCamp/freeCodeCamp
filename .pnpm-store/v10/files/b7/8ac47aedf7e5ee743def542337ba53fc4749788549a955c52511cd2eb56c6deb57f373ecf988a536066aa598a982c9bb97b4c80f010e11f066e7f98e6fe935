// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsCodec } from '../../type/index.mjs';
import { IsArray } from '../../type/index.mjs';
import { IsCyclic } from '../../type/index.mjs';
import { IsIntersect } from '../../type/index.mjs';
import { IsObject } from '../../type/index.mjs';
import { IsRecord, RecordValue } from '../../type/index.mjs';
import { IsRef, Ref } from '../../type/index.mjs';
import { IsTuple } from '../../type/index.mjs';
import { IsUnion } from '../../type/index.mjs';
// ------------------------------------------------------------------
// Array
// ------------------------------------------------------------------
function FromArray(context, type) {
    return IsCodec(type) || FromType(context, type.items);
}
// ------------------------------------------------------------------
// Cyclic
// ------------------------------------------------------------------
function FromCyclic(context, type) {
    return IsCodec(type) || FromRef({ ...context, ...type.$defs }, Ref(type.$ref));
}
// ------------------------------------------------------------------
// Intersect
// ------------------------------------------------------------------
function FromIntersect(context, type) {
    return IsCodec(type) || type.allOf.some((type) => FromType(context, type));
}
// ------------------------------------------------------------------
// Object
// ------------------------------------------------------------------
function FromObject(context, type) {
    return IsCodec(type) || Guard.Keys(type.properties).some(key => {
        return FromType(context, type.properties[key]);
    });
}
// ------------------------------------------------------------------
// Record
// ------------------------------------------------------------------
function FromRecord(context, type) {
    return IsCodec(type) || FromType(context, RecordValue(type));
}
// ------------------------------------------------------------------
// Ref
// ------------------------------------------------------------------
function FromRef(context, type) {
    if (visited.has(type.$ref))
        return false;
    visited.add(type.$ref);
    return IsCodec(type) || (Guard.HasPropertyKey(context, type.$ref)
        && FromType(context, context[type.$ref]));
}
// ------------------------------------------------------------------
// Tuple
// ------------------------------------------------------------------
function FromTuple(context, type) {
    return IsCodec(type) || type.items.some(type => FromType(context, type));
}
// ------------------------------------------------------------------
// Union
// ------------------------------------------------------------------
function FromUnion(context, type) {
    return IsCodec(type) || type.anyOf.some(type => FromType(context, type));
}
// ------------------------------------------------------------------
// Type
// ------------------------------------------------------------------
function FromType(context, type) {
    return (IsArray(type) ? FromArray(context, type) :
        IsCyclic(type) ? FromCyclic(context, type) :
            IsIntersect(type) ? FromIntersect(context, type) :
                IsObject(type) ? FromObject(context, type) :
                    IsRecord(type) ? FromRecord(context, type) :
                        IsRef(type) ? FromRef(context, type) :
                            IsTuple(type) ? FromTuple(context, type) :
                                IsUnion(type) ? FromUnion(context, type) :
                                    IsCodec(type));
}
// ------------------------------------------------------------------
// Visited
// ------------------------------------------------------------------
const visited = new Set();
/** Returns true if this type contains a Codec */
export function HasCodec(...args) {
    const [context, type] = Arguments.Match(args, {
        2: (context, type) => [context, type],
        1: (type) => [{}, type]
    });
    visited.clear();
    return FromType(context, type);
}
