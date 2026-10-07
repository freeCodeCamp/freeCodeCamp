// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { StringKey } from '../../types/record.mjs';
import { CreateRecord } from './record_create.mjs';
export function FromStringKey(key, value) {
    // special case: override for string with raw pattern. We do not observe inference for the
    // raw string patterns, but as a pattern (assuming non-never) is in the set of string, we
    // allow overriding. Callers will need to narrow to the pattern manually. TB legacy.
    return (Guard.HasPropertyKey(key, 'pattern') && (Guard.IsString(key.pattern) || key.pattern instanceof RegExp)
        ? CreateRecord(key.pattern.toString(), value)
        : CreateRecord(StringKey, value));
}
