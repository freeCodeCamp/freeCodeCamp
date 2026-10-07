// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
export function FromRef(context, type, value) {
    return Guard.HasPropertyKey(context, type.$ref)
        ? FromType(context, context[type.$ref], value)
        : value;
}
