// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { PartialDeferred } from '../../action/partial.mjs';
import { FromType } from './from_type.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
export function PartialAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(FromType(type), {}, options)
        : PartialDeferred(type, options);
    return result;
}
export function PartialInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return PartialAction(instantiatedType, options);
}
