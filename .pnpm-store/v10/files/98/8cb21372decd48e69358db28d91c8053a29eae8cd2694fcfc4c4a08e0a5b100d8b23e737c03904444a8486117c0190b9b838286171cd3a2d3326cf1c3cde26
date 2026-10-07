// deno-fmt-ignore-file
import { IsPattern, IsFormat, IsDefault, IsMinLength } from '../../schema/types/index.mjs';
export function FromString(_context, type) {
    const needsDefault = (IsPattern(type) || IsFormat(type)) && !IsDefault(type);
    if (needsDefault)
        throw Error('Strings with format or pattern constraints must specify default');
    const minLength = IsMinLength(type) ? type.minLength : 0;
    return ''.padEnd(minLength);
}
