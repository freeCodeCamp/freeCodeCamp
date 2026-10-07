// deno-fmt-ignore-file
// deno-lint-ignore-file
import { IsDefault } from '../../schema/index.mjs';
import * as T from '../../type/index.mjs';
import { FromArray } from './from_array.mjs';
import { FromBase } from './from_base.mjs';
import { FromCyclic } from './from_cyclic.mjs';
import { FromDefault } from './from_default.mjs';
import { FromIntersect } from './from_intersect.mjs';
import { FromObject } from './from_object.mjs';
import { FromRecord } from './from_record.mjs';
import { FromRef } from './from_ref.mjs';
import { FromTuple } from './from_tuple.mjs';
import { FromUnion } from './from_union.mjs';
export function FromType(context, type, value) {
    const defaulted = IsDefault(type) ? FromDefault(type, value) : value;
    return (T.IsArray(type) ? FromArray(context, type, defaulted) :
        T.IsBase(type) ? FromBase(context, type, defaulted) :
            T.IsCyclic(type) ? FromCyclic(context, type, defaulted) :
                T.IsIntersect(type) ? FromIntersect(context, type, defaulted) :
                    T.IsObject(type) ? FromObject(context, type, defaulted) :
                        T.IsRecord(type) ? FromRecord(context, type, defaulted) :
                            T.IsRef(type) ? FromRef(context, type, defaulted) :
                                T.IsTuple(type) ? FromTuple(context, type, defaulted) :
                                    T.IsUnion(type) ? FromUnion(context, type, defaulted) :
                                        defaulted);
}
