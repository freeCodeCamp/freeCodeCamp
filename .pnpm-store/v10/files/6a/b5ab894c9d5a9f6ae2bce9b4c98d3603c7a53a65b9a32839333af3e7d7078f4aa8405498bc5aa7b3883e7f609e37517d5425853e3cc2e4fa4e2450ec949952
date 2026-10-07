// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Clone } from '../clone/index.mjs';
// ------------------------------------------------------------------
// FromDefault
// ------------------------------------------------------------------
export function FromDefault(type, value) {
    // we only use defaults when values are undefined, exit early
    if (!Guard.IsUndefined(value))
        return value;
    return Guard.IsFunction(type.default) ? type.default() : Clone(type.default);
}
