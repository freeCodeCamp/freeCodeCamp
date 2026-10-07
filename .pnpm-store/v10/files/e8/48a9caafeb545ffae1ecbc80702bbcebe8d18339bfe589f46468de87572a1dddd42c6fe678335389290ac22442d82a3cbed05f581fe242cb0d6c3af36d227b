// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { MappedDeferred } from '../../action/mapped.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { MappedOperation } from './mapped_operation.mjs';
export function MappedAction(context, state, identifier, type, as, property, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(MappedOperation(context, state, identifier, type, as, property), {}, options)
        : MappedDeferred(identifier, type, as, property, options);
    return result;
}
export function MappedInstantiate(context, state, identifier, type, as, property, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return MappedAction(context, state, identifier, instantiatedType, as, property, options);
}
