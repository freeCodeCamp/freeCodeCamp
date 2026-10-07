// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Callback } from './callback.mjs';
import { FromType } from './from_type.mjs';
import { Clone } from '../clone/index.mjs';
import { Check } from '../check/index.mjs';
import { UnionPrioritySort } from '../shared/union_priority_sort.mjs';
// ------------------------------------------------------------------
// Decode
// ------------------------------------------------------------------
function Decode(direction, context, type, value) {
    for (const schema of UnionPrioritySort(type.anyOf, 1)) {
        if (!Check(context, schema, value))
            continue;
        const variant = FromType(direction, context, schema, value);
        return Callback(direction, context, type, variant);
    }
    return value;
}
// ------------------------------------------------------------------
// Encode
// ------------------------------------------------------------------
function Encode(direction, context, type, value) {
    const exterior = Callback(direction, context, type, value);
    for (const schema of UnionPrioritySort(type.anyOf, -1)) {
        const variant = FromType(direction, context, schema, Clone(exterior));
        if (!Check(context, schema, variant))
            continue;
        return variant;
    }
    return exterior;
}
// ------------------------------------------------------------------
// FromUnion
// ------------------------------------------------------------------
export function FromUnion(direction, context, type, value) {
    return Guard.IsEqual(direction, 'Decode')
        ? Decode(direction, context, type, value)
        : Encode(direction, context, type, value);
}
