// deno-fmt-ignore-file
import { Evaluate, Instantiate, IsObject, Options } from '../../type/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
// ------------------------------------------------------------------
// EvaluateIntersection
// ------------------------------------------------------------------
function EvaluateIntersection(context, type) {
    // Note: reinterpret unevaluatedProperties as additionalProperties
    const additionalProperties = Guard.HasPropertyKey(type, 'unevaluatedProperties')
        ? { additionalProperties: type.unevaluatedProperties }
        : {};
    const instantiated = Instantiate(context, type);
    const evaluated = Evaluate(instantiated);
    return IsObject(evaluated)
        ? Options(evaluated, additionalProperties)
        : evaluated;
}
// ------------------------------------------------------------------
// FromIntersection
// ------------------------------------------------------------------
export function FromIntersect(context, type, value) {
    // Note: Evaluate and route back to FromType in evaluated form (likely an Object)
    const evaluated = EvaluateIntersection(context, type);
    return FromType(context, evaluated, value);
}
