// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Object } from '../../types/object.mjs';
import { ToIndexableKeys } from '../indexable/to_indexable_keys.mjs';
import { ToIndexable } from '../indexable/to_indexable.mjs';
function FromKeys(properties, keys) {
    const result = Guard.Keys(properties).reduce((result, key) => {
        return keys.includes(key) ? result : { ...result, [key]: properties[key] };
    }, {});
    return result;
}
export function FromType(type, indexer) {
    const indexable = ToIndexable(type);
    const indexableKeys = ToIndexableKeys(indexer);
    const omitted = FromKeys(indexable, indexableKeys);
    const result = Object(omitted);
    return result;
}
