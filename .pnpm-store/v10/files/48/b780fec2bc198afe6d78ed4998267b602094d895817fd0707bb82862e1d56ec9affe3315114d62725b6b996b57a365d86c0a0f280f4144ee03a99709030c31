// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { EvaluateAction } from '../engine/evaluate/instantiate.mjs';
/** Creates a deferred Evaluate action. */
export function EvaluateDeferred(type, options = {}) {
    return Deferred('Evaluate', [type], options);
}
/** Applies an Evaluate action to a type. */
export function Evaluate(type, options = {}) {
    return EvaluateAction(type, options);
}
