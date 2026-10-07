// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from '../types/schema.mjs';
import { Deferred } from '../types/deferred.mjs';
import { InterfaceAction } from '../engine/interface/instantiate.mjs';
/** Creates a deferred Interface action. */
export function InterfaceDeferred(heritage, properties, options = {}) {
    return Deferred('Interface', [heritage, properties], options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if this value is a deferred Interface action. */
export function IsInterfaceDeferred(value) {
    return IsSchema(value)
        && Guard.HasPropertyKey(value, 'action')
        && Guard.IsEqual(value.action, 'Interface');
}
/** Creates an Interface using the given heritage and properties. */
export function Interface(heritage, properties, options = {}) {
    return InterfaceAction(heritage, properties, options);
}
