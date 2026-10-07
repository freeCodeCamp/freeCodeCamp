// deno-fmt-ignore-file
import { ExtendsLeft } from './extends_left.mjs';
// ----------------------------------------------------------------------------
// ExtendsIntersect
//
// This function evaluates the intersection and continues. This is different
// to IntersectRight which MUST enumerate each type to derive Inferred. Left 
// side types do not infer so it should be ok to do this.
//
// ----------------------------------------------------------------------------
import { EvaluateIntersect } from '../engine/evaluate/index.mjs';
export function ExtendsIntersect(inferred, left, right) {
    const evaluated = EvaluateIntersect(left);
    return ExtendsLeft(inferred, evaluated, right);
}
