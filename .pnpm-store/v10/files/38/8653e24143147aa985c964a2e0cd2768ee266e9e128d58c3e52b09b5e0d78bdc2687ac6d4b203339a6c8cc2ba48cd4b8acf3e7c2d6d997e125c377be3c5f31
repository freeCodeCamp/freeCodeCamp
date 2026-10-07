// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
export function FromArray(context, type, value) {
    if (!Guard.IsArray(value))
        return value;
    for (let i = 0; i < value.length; i++) {
        value[i] = FromType(context, type.items, value[i]);
    }
    return value;
}
