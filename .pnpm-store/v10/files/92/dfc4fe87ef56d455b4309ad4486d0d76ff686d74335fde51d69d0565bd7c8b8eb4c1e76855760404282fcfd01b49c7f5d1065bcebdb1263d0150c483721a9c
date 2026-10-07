// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { IsConstructor } from '../../types/constructor.mjs';
import { Tuple } from '../../types/tuple.mjs';
import { ConstructorParametersDeferred } from '../../action/constructor_parameters.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { InstantiateElements } from '../instantiate.mjs';
function ConstructorParametersOperation(type) {
    const parameters = IsConstructor(type) ? type['parameters'] : [];
    const instantiatedParameters = InstantiateElements({}, { callstack: [] }, parameters);
    const result = Tuple(instantiatedParameters);
    return result;
}
export function ConstructorParametersAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(ConstructorParametersOperation(type), {}, options)
        : ConstructorParametersDeferred(type, options);
    return result;
}
export function ConstructorParametersInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return ConstructorParametersAction(instantiatedType, options);
}
