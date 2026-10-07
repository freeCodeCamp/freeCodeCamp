// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { ExtractDeferred } from '../../action/extract.mjs';
import { ExtractOperation } from './operation.mjs';
export function ExtractAction(left, right, options) {
    const result = CanInstantiate([left, right])
        ? Memory.Update(ExtractOperation(left, right), {}, options)
        : ExtractDeferred(left, right, options);
    return result;
}
export function ExtractInstantiate(context, state, left, right, options) {
    const instantiatedLeft = InstantiateType(context, state, left);
    const instantiatedRight = InstantiateType(context, state, right);
    return ExtractAction(instantiatedLeft, instantiatedRight, options);
}
