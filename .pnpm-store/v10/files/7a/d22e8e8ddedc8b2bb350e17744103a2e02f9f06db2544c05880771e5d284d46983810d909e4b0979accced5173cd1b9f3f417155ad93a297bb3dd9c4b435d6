// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { RecordDeferred } from '../../types/record.mjs';
import { FromKey } from './from_key.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
export function RecordAction(key, value, options) {
    const result = CanInstantiate([key])
        ? Memory.Update(FromKey(key, value), {}, options)
        : RecordDeferred(key, value, options);
    return result;
}
export function RecordInstantiate(context, state, key, value, options) {
    const instantiatedKey = InstantiateType(context, state, key);
    const instantiatedValue = InstantiateType(context, state, value);
    return RecordAction(instantiatedKey, instantiatedValue, options);
}
