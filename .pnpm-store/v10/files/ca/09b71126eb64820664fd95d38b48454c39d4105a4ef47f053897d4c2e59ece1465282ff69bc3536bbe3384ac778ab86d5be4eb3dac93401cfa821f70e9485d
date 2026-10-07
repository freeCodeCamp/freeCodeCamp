// deno-fmt-ignore-file
import { IsAny } from '../../types/any.mjs';
import { IsArray } from '../../types/array.mjs';
import { Never } from '../../types/never.mjs';
import { IsObject } from '../../types/object.mjs';
import { IsRecord } from '../../types/record.mjs';
import { IsTuple } from '../../types/tuple.mjs';
// ------------------------------------------------------------------
// Computed
// ------------------------------------------------------------------
import { FromAny } from './from_any.mjs';
import { FromArray } from './from_array.mjs';
import { FromObject } from './from_object.mjs';
import { FromRecord } from './from_record.mjs';
import { FromTuple } from './from_tuple.mjs';
export function FromType(type) {
    return (IsAny(type) ? FromAny() :
        IsArray(type) ? FromArray(type.items) :
            IsObject(type) ? FromObject(type.properties) :
                IsRecord(type) ? FromRecord(type) :
                    IsTuple(type) ? FromTuple(type.items) :
                        Never());
}
