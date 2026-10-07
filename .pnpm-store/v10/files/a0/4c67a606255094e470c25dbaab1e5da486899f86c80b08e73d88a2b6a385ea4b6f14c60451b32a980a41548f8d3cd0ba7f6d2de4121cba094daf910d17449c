// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { IsFunction } from '../../types/function.mjs';
import { Tuple } from '../../types/tuple.mjs';
import { ParametersDeferred } from '../../action/parameters.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { InstantiateElements } from '../instantiate.mjs';
function ParametersOperation(type) {
    const parameters = IsFunction(type) ? type['parameters'] : [];
    const instantiatedParameters = InstantiateElements({}, { callstack: [] }, parameters);
    const result = Tuple(instantiatedParameters);
    return result;
}
export function ParametersAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(ParametersOperation(type), {}, options)
        : ParametersDeferred(type, options);
    return result;
}
export function ParametersInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return ParametersAction(instantiatedType, options);
}
