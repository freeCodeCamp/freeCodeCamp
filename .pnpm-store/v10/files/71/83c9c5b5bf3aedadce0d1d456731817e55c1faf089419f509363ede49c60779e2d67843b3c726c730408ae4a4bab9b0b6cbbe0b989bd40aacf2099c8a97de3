// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
export function FromArray(context, type, value) {
    if (!Guard.IsArray(value))
        return value;
    return value.map((value) => FromType(context, type.items, value));
}
