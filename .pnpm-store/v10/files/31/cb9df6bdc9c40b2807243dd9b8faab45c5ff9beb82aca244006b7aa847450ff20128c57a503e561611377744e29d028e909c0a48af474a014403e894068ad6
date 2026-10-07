// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { IsCyclic } from '../../types/cyclic.mjs';
import { IsIntersect } from '../../types/intersect.mjs';
import { IsUnion } from '../../types/union.mjs';
import { KeyOfDeferred } from '../../action/keyof.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { CollapseToObject } from '../object/index.mjs';
// ------------------------------------------------------------------
// Computed
// ------------------------------------------------------------------
import { FromType } from './from_type.mjs';
function NormalizeType(type) {
    const result = (IsCyclic(type) || IsIntersect(type) || IsUnion(type) ? CollapseToObject(type) : type);
    return result;
}
export function KeyOfAction(type, options) {
    return (CanInstantiate([type])
        ? Memory.Update(FromType(NormalizeType(type)), {}, options)
        : KeyOfDeferred(type, options));
}
export function KeyOfInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return KeyOfAction(instantiatedType, options);
}
