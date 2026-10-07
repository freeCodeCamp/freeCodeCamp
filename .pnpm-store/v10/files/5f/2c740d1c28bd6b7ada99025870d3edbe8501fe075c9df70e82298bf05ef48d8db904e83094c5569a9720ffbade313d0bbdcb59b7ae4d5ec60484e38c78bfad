// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { Guard } from '../../../guard/index.mjs';
import { Object } from '../../types/object.mjs';
import { ToIndexableKeys } from '../indexable/to_indexable_keys.mjs';
import { ToIndexable } from '../indexable/to_indexable.mjs';
function FromKeys(properties, keys) {
    const result = Guard.Keys(properties).reduce((result, key) => {
        return keys.includes(key) ? Memory.Assign(result, { [key]: properties[key] }) : result;
    }, {});
    return result;
}
export function FromType(type, indexer) {
    const indexable = ToIndexable(type);
    const keys = ToIndexableKeys(indexer);
    const applied = FromKeys(indexable, keys);
    const result = Object(applied);
    return result;
}
