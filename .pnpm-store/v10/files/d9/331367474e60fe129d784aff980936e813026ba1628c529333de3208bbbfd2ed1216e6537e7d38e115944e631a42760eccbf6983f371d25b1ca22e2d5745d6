// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { ExcludeDeferred } from '../../action/exclude.mjs';
import { ExcludeOperation } from './operation.mjs';
export function ExcludeAction(left, right, options) {
    const result = CanInstantiate([left, right])
        ? Memory.Update(ExcludeOperation(left, right), {}, options)
        : ExcludeDeferred(left, right, options);
    return result;
}
export function ExcludeInstantiate(context, state, left, right, options) {
    const instantiatedLeft = InstantiateType(context, state, left);
    const instantiatedRight = InstantiateType(context, state, right);
    return ExcludeAction(instantiatedLeft, instantiatedRight, options);
}
