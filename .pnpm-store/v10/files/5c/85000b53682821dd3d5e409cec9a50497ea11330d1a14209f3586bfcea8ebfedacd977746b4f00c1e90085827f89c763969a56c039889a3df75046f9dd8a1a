// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromArray } from './from_array.mjs';
import { FromObject } from './from_object.mjs';
import { FromUnknown } from './from_unknown.mjs';
export function FromValue(root, path, current, next) {
    if (Guard.IsArray(next))
        return FromArray(root, path, current, next);
    if (Guard.IsObject(next))
        return FromObject(root, path, current, next);
    return FromUnknown(root, path, current, next);
}
