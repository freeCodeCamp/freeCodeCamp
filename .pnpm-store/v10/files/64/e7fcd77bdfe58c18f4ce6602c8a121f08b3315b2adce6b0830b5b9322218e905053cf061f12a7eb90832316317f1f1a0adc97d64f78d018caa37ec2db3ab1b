// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains an '~refine` keyword
 * @specification None
 */
export function IsRefine(value) {
    return Guard.HasPropertyKey(value, '~refine')
        && Guard.IsArray(value["~refine"])
        && Guard.Every(value['~refine'], 0, value => Guard.IsObject(value)
            && Guard.HasPropertyKey(value, 'check')
            && Guard.HasPropertyKey(value, 'error')
            && Guard.IsFunction(value.check)
            && Guard.IsFunction(value.error));
}
