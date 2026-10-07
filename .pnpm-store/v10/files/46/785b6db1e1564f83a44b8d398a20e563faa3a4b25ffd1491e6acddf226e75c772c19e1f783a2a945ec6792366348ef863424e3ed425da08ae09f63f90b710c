// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
export function IsOk(value) {
    return Guard.IsObject(value) && Guard.HasPropertyKey(value, 'value');
}
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
export function Ok(value) {
    return { value };
}
export function Fail() {
    return undefined;
}
