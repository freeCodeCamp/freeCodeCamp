// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
import { CallInstantiate } from '../engine/call/instantiate.mjs';
export function CallConstruct(target, arguments_) {
    return Memory.Create({ ['~kind']: 'Call' }, { target, arguments: arguments_ }, {});
}
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Call type. */
export function Call(target, arguments_) {
    return CallInstantiate({}, { callstack: [] }, target, arguments_);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given type is a TCall. */
export function IsCall(value) {
    return IsKind(value, 'Call');
}
