// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { OptionsDeferred } from '../../action/options.mjs';
export function OptionsAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(type, {}, options)
        : OptionsDeferred(type, options);
    return result;
}
export function OptionsInstantiate(context, state, type, options) {
    const instaniatedType = InstantiateType(context, state, type);
    return OptionsAction(instaniatedType, options);
}
