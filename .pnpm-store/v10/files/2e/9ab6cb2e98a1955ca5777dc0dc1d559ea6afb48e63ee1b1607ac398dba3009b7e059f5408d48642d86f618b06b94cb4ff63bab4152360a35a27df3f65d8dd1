// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Clone } from '../clone/index.mjs';
import { Pointer } from '../pointer/index.mjs';
import { FromValue } from './from_value.mjs';
export function FromArray(root, path, current, next) {
    if (!Guard.IsArray(current)) {
        Pointer.Set(root, path, Clone(next));
    }
    else {
        for (let index = 0; index < next.length; index++) {
            FromValue(root, `${path}/${index}`, current[index], next[index]);
        }
        current.splice(next.length);
    }
}
