// deno-fmt-ignore-file
import { FromType } from './from_type.mjs';
import { Guard } from '../../guard/index.mjs';
export function FromRef(context, type, value) {
    return (Guard.HasPropertyKey(context, type.$ref)
        ? FromType(context, context[type.$ref], value)
        : value);
}
