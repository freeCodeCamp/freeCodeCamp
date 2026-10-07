// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Object } from '../../types/object.mjs';
export function FromLiteralKey(key, value) {
    return (Guard.IsString(key) || Guard.IsNumber(key) ? Object({ [key]: value }) :
        Guard.IsEqual(key, false) ? Object({ false: value }) :
            Guard.IsEqual(key, true) ? Object({ true: value }) :
                Object({}));
}
