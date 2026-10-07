import { Settings } from '../settings/index.mjs';
import { Guard } from '../../guard/index.mjs';
let supported = undefined;
// ------------------------------------------------------------------
// TryEvaluate
// ------------------------------------------------------------------
function TryEvaluate() {
    try {
        Evaluate('null')();
        return true;
    } // deno-coverage-ignore-start - unreachable in test-suite
    catch {
        return false;
    }
    // deno-coverage-ignore-stop
}
// ------------------------------------------------------------------
// CanEvaluate
// ------------------------------------------------------------------
/** Returns true if the environment supports dynamic JavaScript evaluation */
export function CanEvaluate() {
    if (Guard.IsUndefined(supported))
        supported = TryEvaluate();
    return supported && Settings.Get().useAcceleration;
}
// ------------------------------------------------------------------
// Evaluate
// ------------------------------------------------------------------
/**
 * Evaluates code in the current environment. This function will throw if the
 * environment Content-Security-Policy does not support `unsafe-eval`. Use the
 * Environment.CanEvaluate() to determine if the environment supports Evaluate
 * before calling this function.
 */
export function Evaluate(...args) {
    return new (globalThis.Function)(...args);
}
