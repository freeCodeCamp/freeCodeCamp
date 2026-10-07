// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { ReadonlyObjectDeferred } from '../../action/readonly_object.mjs';
import { FromType } from './from_type.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
export function ReadonlyObjectAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(FromType(type), {}, options)
        : ReadonlyObjectDeferred(type);
    return result;
}
export function ReadonlyObjectInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return ReadonlyObjectAction(instantiatedType, options);
}
