// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { OmitDeferred } from '../../action/omit.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { FromType } from './from_type.mjs';
export function OmitAction(type, indexer, options) {
    const result = CanInstantiate([type, indexer])
        ? Memory.Update(FromType(type, indexer), {}, options)
        : OmitDeferred(type, indexer, options);
    return result;
}
export function OmitInstantiate(context, state, type, indexer, options) {
    const instantiatedType = InstantiateType(context, state, type);
    const instantiatedIndexer = InstantiateType(context, state, indexer);
    return OmitAction(instantiatedType, instantiatedIndexer, options);
}
