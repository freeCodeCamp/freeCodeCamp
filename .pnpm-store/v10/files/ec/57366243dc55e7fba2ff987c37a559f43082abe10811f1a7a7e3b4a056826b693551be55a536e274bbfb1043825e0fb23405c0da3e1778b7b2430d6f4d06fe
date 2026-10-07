// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { IsCyclic } from '../../types/cyclic.mjs';
import { IsIntersect } from '../../types/intersect.mjs';
import { IsUnion } from '../../types/union.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { IndexDeferred } from '../../action/indexed.mjs';
import { CollapseToObject } from '../object/index.mjs';
import { FromType } from './from_type.mjs';
function NormalizeType(type) {
    const result = (IsCyclic(type) || IsIntersect(type) || IsUnion(type) ? CollapseToObject(type) :
        type);
    return result;
}
export function IndexAction(type, indexer, options) {
    const result = CanInstantiate([type, indexer])
        ? Memory.Update(FromType(NormalizeType(type), indexer), {}, options)
        : IndexDeferred(type, indexer, options);
    return result;
}
export function IndexInstantiate(context, state, type, indexer, options) {
    const instantiatedType = InstantiateType(context, state, type);
    const instantiatedIndexer = InstantiateType(context, state, indexer);
    return IndexAction(instantiatedType, instantiatedIndexer, options);
}
