// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { Object } from '../../types/object.mjs';
import { EvaluateIntersect } from '../evaluate/evaluate.mjs';
import { InterfaceDeferred } from '../../action/index.mjs';
import { CanInstantiate } from '../instantiate.mjs';
import { InstantiateProperties } from '../instantiate.mjs';
import { InstantiateTypes } from '../instantiate.mjs';
function InterfaceOperation(heritage, properties) {
    const result = EvaluateIntersect([...heritage, Object(properties)]);
    return result;
}
export function InterfaceAction(heritage, properties, options) {
    const result = CanInstantiate(heritage)
        ? Memory.Update(InterfaceOperation(heritage, properties), {}, options)
        : InterfaceDeferred(heritage, properties, options);
    return result;
}
export function InterfaceInstantiate(context, state, heritage, properties, options) {
    const instantiatedHeritage = InstantiateTypes(context, state, heritage);
    const instantiatedProperties = InstantiateProperties(context, state, properties);
    return InterfaceAction(instantiatedHeritage, instantiatedProperties, options);
}
