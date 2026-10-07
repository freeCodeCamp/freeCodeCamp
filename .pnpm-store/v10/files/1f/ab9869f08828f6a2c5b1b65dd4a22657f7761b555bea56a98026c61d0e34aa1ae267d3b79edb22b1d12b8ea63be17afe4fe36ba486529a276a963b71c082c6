// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
export function FromTuple(context, schema, value) {
    if (!Guard.IsArray(value))
        return value;
    const [items, max] = [schema.items, Math.max(schema.items.length, value.length)];
    for (let i = 0; i < max; i++) {
        if (i < items.length)
            value[i] = FromType(context, items[i], value[i]);
    }
    return value;
}
