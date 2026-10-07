import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Deferred action. */
export function Deferred(action, parameters, options) {
    return Memory.Create({ '~kind': 'Deferred' }, { action, parameters, options }, {});
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TDeferred. */
export function IsDeferred(value) {
    return IsKind(value, 'Deferred');
}
