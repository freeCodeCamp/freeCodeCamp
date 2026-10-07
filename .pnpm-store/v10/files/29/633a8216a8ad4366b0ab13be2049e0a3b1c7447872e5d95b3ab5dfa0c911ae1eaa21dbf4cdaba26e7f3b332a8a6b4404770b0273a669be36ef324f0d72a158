// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { Null } from '../../types/null.mjs';
import { Undefined } from '../../types/undefined.mjs';
import { Union } from '../../types/union.mjs';
import { ExcludeAction } from '../exclude/instantiate.mjs';
import { NonNullableDeferred } from '../../action/non_nullable.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
function NonNullableOperation(type) {
    const excluded = Union([Null(), Undefined()]);
    return ExcludeAction(type, excluded, {});
}
export function NonNullableAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(NonNullableOperation(type), {}, options)
        : NonNullableDeferred(type, options);
    return result;
}
export function NonNullableInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return NonNullableAction(instantiatedType, options);
}
