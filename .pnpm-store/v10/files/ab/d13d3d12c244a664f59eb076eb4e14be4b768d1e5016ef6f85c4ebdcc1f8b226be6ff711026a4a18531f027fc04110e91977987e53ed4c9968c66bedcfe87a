// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { FromType } from './from_type.mjs';
import { RequiredDeferred } from '../../action/required.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
export function RequiredAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(FromType(type), {}, options)
        : RequiredDeferred(type, options);
    return result;
}
export function RequiredInstantiate(context, state, type, options) {
    const instaniatedType = InstantiateType(context, state, type);
    return RequiredAction(instaniatedType, options);
}
