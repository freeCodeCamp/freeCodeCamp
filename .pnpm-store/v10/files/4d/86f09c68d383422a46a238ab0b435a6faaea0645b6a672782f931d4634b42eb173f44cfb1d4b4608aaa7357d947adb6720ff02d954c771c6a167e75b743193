// deno-fmt-ignore-file
import { Check } from '../check/index.mjs';
import { Clone } from '../clone/index.mjs';
import { FromType } from './from_type.mjs';
import { UnionPrioritySort } from '../shared/union_priority_sort.mjs';
export function FromUnion(context, type, value) {
    for (const schema of UnionPrioritySort(type.anyOf)) {
        const clean = FromType(context, schema, Clone(value));
        if (Check(context, schema, clean))
            return clean;
    }
    return value;
}
