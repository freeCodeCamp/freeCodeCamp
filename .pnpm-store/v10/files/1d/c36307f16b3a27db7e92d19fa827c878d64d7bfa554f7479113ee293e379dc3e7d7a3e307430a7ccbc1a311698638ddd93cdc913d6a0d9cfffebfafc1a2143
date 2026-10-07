// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
export function FromTuple(context, schema, value) {
    if (!Guard.IsArray(value))
        return value;
    const length = Math.min(value.length, schema.items.length);
    for (let index = 0; index < length; index++) {
        value[index] = FromType(context, schema.items[index], value[index]);
    }
    return Guard.IsGreaterThan(value.length, length)
        ? value.slice(0, length)
        : value;
}
