// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { RepairError } from './error.mjs';
export function FromRef(context, type, value) {
    return Guard.HasPropertyKey(context, type.$ref)
        ? FromType(context, context[type.$ref], value)
        : (() => { throw new RepairError(context, type, value, 'Unable to de-reference target type'); })();
}
