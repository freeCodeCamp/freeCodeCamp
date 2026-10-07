// deno-lint-ignore-file
// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Kind
// ------------------------------------------------------------------
export function IsKind(value, kind) {
    return Guard.IsObject(value) && Guard.HasPropertyKey(value, '~kind') && Guard.IsEqual(value["~kind"], kind);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
export function IsSchema(value) {
    return Guard.IsObject(value);
}
