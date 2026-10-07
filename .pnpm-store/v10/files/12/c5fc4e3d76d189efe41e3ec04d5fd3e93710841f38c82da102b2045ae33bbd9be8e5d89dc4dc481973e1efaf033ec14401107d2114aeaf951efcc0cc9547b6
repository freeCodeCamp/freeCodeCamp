// deno-fmt-ignore-file
import { IsAdditionalProperties } from '../../schema/types/index.mjs';
import { RecordValue, RecordPattern } from '../../type/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { Create } from '../create/index.mjs';
import { Check } from '../check/index.mjs';
import { FromType } from './from_type.mjs';
export function FromRecord(context, type, value) {
    if (Check(context, type, value))
        return value;
    if (Guard.IsNull(value) || !Guard.IsObject(value) || Guard.IsArray(value))
        return Create(context, type);
    const recordKey = new RegExp(RecordPattern(type));
    const recordValue = RecordValue(type);
    const evaluatedKeys = new Set();
    // PatternProperties
    const result = {};
    for (const [key, value_] of Guard.Entries(value)) {
        if (!recordKey.test(key))
            continue;
        result[key] = FromType(context, recordValue, value_);
        evaluatedKeys.add(key);
    }
    // AdditionalProperties
    if (IsAdditionalProperties(type)) {
        for (const key of Guard.Keys(value)) {
            if (evaluatedKeys.has(key))
                continue;
            result[key] = FromType(context, type.additionalProperties, value[key]);
        }
    }
    return result;
}
