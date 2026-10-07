// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { InstantiateType } from '../instantiate.mjs';
import { EvaluateType } from './evaluate.mjs';
export function EvaluateAction(type, options) {
    const result = Memory.Update(EvaluateType(type), {}, options);
    return result;
}
export function EvaluateInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return EvaluateAction(instantiatedType, options);
}
