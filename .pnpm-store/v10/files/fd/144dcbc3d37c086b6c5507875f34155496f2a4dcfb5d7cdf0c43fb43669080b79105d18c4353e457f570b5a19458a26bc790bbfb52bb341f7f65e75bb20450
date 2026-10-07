// deno-fmt-ignore-file
import { IsSchema, RecordPattern, RecordValue } from '../../type/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { Check } from '../check/index.mjs';
import { GetAdditionalProperties } from './additional.mjs';
// ------------------------------------------------------------------
// FromRecord
// ------------------------------------------------------------------
export function FromRecord(context, type, value) {
    if (!Guard.IsObject(value))
        return value;
    const additionalProperties = GetAdditionalProperties(type);
    const [recordPattern, recordValue] = [new RegExp(RecordPattern(type)), RecordValue(type)];
    for (const key of Guard.Keys(value)) {
        if (recordPattern.test(key)) {
            value[key] = FromType(context, recordValue, value[key]);
            continue;
        }
        const unknownCheck = 
        // 1. additionalProperties: true
        (Guard.IsBoolean(additionalProperties) && Guard.IsEqual(additionalProperties, true))
            // 2. additionalProperties: TSchema
            || IsSchema(additionalProperties) && Check(context, additionalProperties, value[key]);
        if (unknownCheck) {
            value[key] = FromType(context, additionalProperties, value[key]);
            continue;
        }
        delete value[key];
    }
    return value;
}
