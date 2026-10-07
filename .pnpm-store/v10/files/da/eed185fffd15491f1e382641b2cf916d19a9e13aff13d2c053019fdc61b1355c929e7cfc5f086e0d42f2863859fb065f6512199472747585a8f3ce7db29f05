// deno-fmt-ignore-file
import * as Type from '../../type/index.mjs';
import { FromArray } from './from_array.mjs';
import { FromCyclic } from './from_cyclic.mjs';
import { FromIntersect } from './from_intersect.mjs';
import { FromObject } from './from_object.mjs';
import { FromRecord } from './from_record.mjs';
import { FromRef } from './from_ref.mjs';
import { FromTuple } from './from_tuple.mjs';
import { FromUnion } from './from_union.mjs';
import { Callback } from './callback.mjs';
export function FromType(direction, context, type, value) {
    return (Type.IsArray(type) ? FromArray(direction, context, type, value) :
        Type.IsCyclic(type) ? FromCyclic(direction, context, type, value) :
            Type.IsIntersect(type) ? FromIntersect(direction, context, type, value) :
                Type.IsObject(type) ? FromObject(direction, context, type, value) :
                    Type.IsRecord(type) ? FromRecord(direction, context, type, value) :
                        Type.IsRef(type) ? FromRef(direction, context, type, value) :
                            Type.IsTuple(type) ? FromTuple(direction, context, type, value) :
                                Type.IsUnion(type) ? FromUnion(direction, context, type, value) :
                                    Callback(direction, context, type, value));
}
