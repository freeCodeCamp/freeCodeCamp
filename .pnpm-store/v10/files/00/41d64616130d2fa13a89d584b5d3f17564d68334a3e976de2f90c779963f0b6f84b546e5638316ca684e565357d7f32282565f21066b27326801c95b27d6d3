// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
export function FromTuple(context, type, value) {
    if (!Guard.IsArray(value))
        return value;
    for (let index = 0; index < Math.min(type.items.length, value.length); index++) {
        value[index] = FromType(context, type.items[index], value[index]);
    }
    return value;
}
