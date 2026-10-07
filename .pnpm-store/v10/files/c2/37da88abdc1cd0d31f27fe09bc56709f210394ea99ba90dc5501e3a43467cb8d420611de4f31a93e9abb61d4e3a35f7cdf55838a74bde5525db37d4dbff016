// deno-fmt-ignore-file
import { IsArray } from '../../types/array.mjs';
import { Never } from '../../types/never.mjs';
import { IsObject } from '../../types/object.mjs';
import { IsTuple } from '../../types/tuple.mjs';
import { FromArray } from './from_array.mjs';
import { FromObject } from './from_object.mjs';
import { FromTuple } from './from_tuple.mjs';
export function FromType(type, indexer) {
    return (IsArray(type) ? FromArray(type.items, indexer) :
        IsObject(type) ? FromObject(type.properties, indexer) :
            IsTuple(type) ? FromTuple(type.items, indexer) :
                Never());
}
