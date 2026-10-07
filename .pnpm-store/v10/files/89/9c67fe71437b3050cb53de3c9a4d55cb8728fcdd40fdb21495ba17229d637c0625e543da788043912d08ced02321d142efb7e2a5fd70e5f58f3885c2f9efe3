// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { PickDeferred } from '../../action/pick.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { FromType } from './from_type.mjs';
export function PickAction(type, indexer, options) {
    const result = CanInstantiate([type, indexer])
        ? Memory.Update(FromType(type, indexer), {}, options)
        : PickDeferred(type, indexer, options);
    return result;
}
export function PickInstantiate(context, state, type, indexer, options) {
    const instantiatedType = InstantiateType(context, state, type);
    const instantiatedIndexer = InstantiateType(context, state, indexer);
    return PickAction(instantiatedType, instantiatedIndexer, options);
}
