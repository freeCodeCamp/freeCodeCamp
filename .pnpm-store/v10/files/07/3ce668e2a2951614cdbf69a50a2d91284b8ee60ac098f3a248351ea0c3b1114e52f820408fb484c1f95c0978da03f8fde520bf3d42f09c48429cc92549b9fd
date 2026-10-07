import { Settings } from '../../system/settings/index.mjs';
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// IsExactOptional
// ------------------------------------------------------------------
export function IsExactOptional(required, key) {
    return required.includes(key) || Settings.Get().exactOptionalPropertyTypes;
}
// ------------------------------------------------------------------
// ExactOptionalBuild
// ------------------------------------------------------------------
export function InexactOptionalBuild(value, key) {
    return E.IsUndefined(E.Member(value, key));
}
// ------------------------------------------------------------------
// ExactOptionalCheck
// ------------------------------------------------------------------
export function InexactOptionalCheck(value, key) {
    return G.IsUndefined(value[key]);
}
