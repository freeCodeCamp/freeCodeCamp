// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Pointer } from '../pointer/index.mjs';
import { Clone } from '../clone/index.mjs';
import { FromValue } from './from_value.mjs';
export function FromObject(root, path, current, next) {
    if (!Guard.IsObjectNotArray(current)) {
        Pointer.Set(root, path, Clone(next));
    }
    else {
        const currentKeys = Guard.Keys(current);
        const nextKeys = Guard.Keys(next);
        for (const currentKey of currentKeys) {
            if (!nextKeys.includes(currentKey)) {
                delete current[currentKey];
            }
        }
        for (const nextKey of nextKeys) {
            if (!currentKeys.includes(nextKey)) {
                current[nextKey] = next[nextKey];
            }
        }
        for (const nextKey of nextKeys) {
            FromValue(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
        }
    }
}
