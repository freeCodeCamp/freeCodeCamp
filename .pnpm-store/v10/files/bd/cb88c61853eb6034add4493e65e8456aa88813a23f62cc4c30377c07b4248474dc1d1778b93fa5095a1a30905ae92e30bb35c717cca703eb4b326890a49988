// deno-fmt-ignore-file
// deno-lint-ignore-file
import { RecordPattern, RecordValue } from '../../type/index.mjs';
import { IsAdditionalProperties, IsDefault } from '../../schema/types/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
export function FromRecord(context, type, value) {
    if (!Guard.IsObject(value))
        return value;
    // PatternProperties
    const [recordKey, recordValue] = [new RegExp(RecordPattern(type)), RecordValue(type)];
    for (const key of Guard.Keys(value)) {
        if (!(recordKey.test(key) && IsDefault(recordValue)))
            continue;
        value[key] = FromType(context, recordValue, value[key]);
    }
    // AdditionalProperties
    if (!IsAdditionalProperties(type))
        return value;
    for (const key of Guard.Keys(value)) {
        if (recordKey.test(key))
            continue;
        value[key] = FromType(context, type.additionalProperties, value[key]);
    }
    return value;
}
