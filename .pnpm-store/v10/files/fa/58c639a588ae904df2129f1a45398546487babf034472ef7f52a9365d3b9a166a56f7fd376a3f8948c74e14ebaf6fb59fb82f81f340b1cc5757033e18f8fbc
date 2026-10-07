// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Cyclic } from '../../types/cyclic.mjs';
import { Object } from '../../types/object.mjs';
import { CyclicDependencies } from '../cyclic/dependencies.mjs';
import { IsInterfaceDeferred } from '../../action/index.mjs';
import { InstantiateProperties } from '../instantiate.mjs';
import { InstantiateTypes } from '../instantiate.mjs';
import { EvaluateIntersect } from '../evaluate/evaluate.mjs';
function CyclicInterface(context, heritage, properties) {
    const instantiatedHeritage = InstantiateTypes(context, { callstack: [] }, heritage);
    const instantiatedProperties = InstantiateProperties({}, { callstack: [] }, properties);
    const evaluatedInterface = EvaluateIntersect([...instantiatedHeritage, Object(instantiatedProperties)]);
    return evaluatedInterface;
}
function CyclicDefinitions(context, dependencies) {
    const keys = Guard.Keys(context).filter(key => dependencies.includes(key));
    return keys.reduce((result, key) => {
        const type = context[key];
        const instantiatedType = IsInterfaceDeferred(type) ? CyclicInterface(context, type.parameters[0], type.parameters[1]) : type;
        return { ...result, [key]: instantiatedType };
    }, {});
}
export function InstantiateCyclic(context, ref, type) {
    const dependencies = CyclicDependencies(context, ref, type);
    const definitions = CyclicDefinitions(context, dependencies);
    const result = Cyclic(definitions, ref);
    return result;
}
