// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { IsSchema } from '../../types/schema.mjs';
import { IsLiteral } from '../../types/literal.mjs';
import { IsNumber } from '../../types/number.mjs';
import { IsInteger } from '../../types/integer.mjs';
import { Object } from '../../types/object.mjs';
import { IsString } from '../../types/string.mjs';
import { StringKey } from '../../types/record.mjs';
import { Flatten } from '../evaluate/flatten.mjs';
import { CreateRecord } from './record_create.mjs';
function StringOrNumberCheck(types) {
    return types.some(type => IsString(type) || IsNumber(type) || IsInteger(type));
}
function TryBuildRecord(types, value) {
    return (Guard.IsEqual(StringOrNumberCheck(types), true)
        ? CreateRecord(StringKey, value)
        : undefined);
}
function CreateProperties(types, value) {
    return types.reduce((result, left) => {
        return IsLiteral(left) && (Guard.IsString(left.const) || Guard.IsNumber(left.const))
            ? { ...result, [left.const]: value }
            : result;
    }, {});
}
function CreateObject(types, value) {
    const properties = CreateProperties(types, value);
    const result = Object(properties);
    return result;
}
export function FromUnionKey(types, value) {
    const flattened = Flatten(types);
    const record = TryBuildRecord(flattened, value);
    return (IsSchema(record) // maybe IsRecord?
        ? record
        : CreateObject(flattened, value));
}
