// deno-fmt-ignore-file
import * as T from '../../type/index.mjs';
import { FromArray } from './from_array.mjs';
import { FromBase } from './from_base.mjs';
import { FromCyclic } from './from_cyclic.mjs';
import { FromIntersect } from './from_intersect.mjs';
import { FromObject } from './from_object.mjs';
import { FromRecord } from './from_record.mjs';
import { FromRef } from './from_ref.mjs';
import { FromTuple } from './from_tuple.mjs';
import { FromUnion } from './from_union.mjs';
export function FromType(context, type, value) {
    return (T.IsArray(type) ? FromArray(context, type, value) :
        T.IsBase(type) ? FromBase(context, type, value) :
            T.IsCyclic(type) ? FromCyclic(context, type, value) :
                T.IsIntersect(type) ? FromIntersect(context, type, value) :
                    T.IsObject(type) ? FromObject(context, type, value) :
                        T.IsRecord(type) ? FromRecord(context, type, value) :
                            T.IsRef(type) ? FromRef(context, type, value) :
                                T.IsTuple(type) ? FromTuple(context, type, value) :
                                    T.IsUnion(type) ? FromUnion(context, type, value) :
                                        value);
}
