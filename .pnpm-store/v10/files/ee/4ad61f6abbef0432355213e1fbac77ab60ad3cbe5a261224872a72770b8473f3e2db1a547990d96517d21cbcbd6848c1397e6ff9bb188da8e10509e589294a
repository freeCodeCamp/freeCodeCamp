// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { IsConstructor } from '../../types/constructor.mjs';
import { Never } from '../../types/never.mjs';
import { InstanceTypeDeferred } from '../../action/instance_type.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
function InstanceTypeOperation(type) {
    return (IsConstructor(type)
        ? type['instanceType']
        : Never());
}
export function InstanceTypeAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(InstanceTypeOperation(type), {}, options)
        : InstanceTypeDeferred(type, options);
    return result;
}
export function InstanceTypeInstantiate(context, state, type, options = {}) {
    const instantiatedType = InstantiateType(context, state, type);
    return InstanceTypeAction(instantiatedType, options);
}
