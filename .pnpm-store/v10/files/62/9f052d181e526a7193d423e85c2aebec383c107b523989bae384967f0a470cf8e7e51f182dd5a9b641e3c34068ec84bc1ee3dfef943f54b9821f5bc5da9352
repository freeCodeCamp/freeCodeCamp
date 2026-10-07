// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { IsPromise } from '../../types/promise.mjs';
import { AwaitedDeferred } from '../../action/awaited.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
function AwaitedOperation(type) {
    return (IsPromise(type)
        ? AwaitedOperation(type.item)
        : type);
}
export function AwaitedAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(AwaitedOperation(type), {}, options)
        : AwaitedDeferred(type, options);
    return result;
}
export function AwaitedInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return AwaitedAction(instantiatedType, options);
}
