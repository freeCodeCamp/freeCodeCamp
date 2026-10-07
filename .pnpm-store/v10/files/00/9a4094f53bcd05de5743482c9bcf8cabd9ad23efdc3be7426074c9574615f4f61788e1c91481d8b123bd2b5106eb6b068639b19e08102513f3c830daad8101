// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
export function IsGuardInterface(value) {
    return Guard.IsObject(value)
        && Guard.HasPropertyKey(value, 'check')
        && Guard.HasPropertyKey(value, 'errors')
        && Guard.IsFunction(value.check)
        && Guard.IsFunction(value.errors);
}
export function IsGuard(value) {
    return Guard.HasPropertyKey(value, '~guard')
        && IsGuardInterface(value['~guard']);
}
