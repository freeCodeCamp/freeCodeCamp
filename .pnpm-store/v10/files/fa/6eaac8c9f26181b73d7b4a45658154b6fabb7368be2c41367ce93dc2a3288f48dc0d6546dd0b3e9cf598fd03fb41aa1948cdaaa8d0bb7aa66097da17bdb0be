// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { IsFunction } from '../../types/function.mjs';
import { Never } from '../../types/never.mjs';
import { ReturnTypeDeferred } from '../../action/return_type.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
function ReturnTypeOperation(type) {
    return (IsFunction(type)
        ? type['returnType']
        : Never());
}
export function ReturnTypeAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(ReturnTypeOperation(type), {}, options)
        : ReturnTypeDeferred(type, options);
    return result;
}
export function ReturnTypeInstantiate(context, state, type, options = {}) {
    const instantiatedType = InstantiateType(context, state, type);
    return ReturnTypeAction(instantiatedType, options);
}
