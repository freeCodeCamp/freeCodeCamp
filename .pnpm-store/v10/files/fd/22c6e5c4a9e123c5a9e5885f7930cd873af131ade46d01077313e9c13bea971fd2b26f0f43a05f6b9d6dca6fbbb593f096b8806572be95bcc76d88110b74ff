// deno-fmt-ignore-file
import { InstantiateType } from '../instantiate.mjs';
import { CyclicCheck } from '../cyclic/check.mjs';
export function RefInstantiate(context, state, type, ref) {
    return (ref in context
        ? CyclicCheck([ref], context, context[ref])
            ? type
            : InstantiateType(context, state, context[ref])
        : type);
}
