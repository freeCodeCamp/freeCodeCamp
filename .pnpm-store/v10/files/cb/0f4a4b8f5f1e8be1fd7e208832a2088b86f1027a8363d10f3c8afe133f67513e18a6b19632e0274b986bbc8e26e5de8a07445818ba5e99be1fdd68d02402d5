// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { CreateError } from './error.mjs';
export function FromRef(context, type) {
    return Guard.HasPropertyKey(context, type.$ref)
        ? FromType(context, context[type.$ref])
        : (() => { throw new CreateError(type, 'Unable to deref Ref'); })();
}
