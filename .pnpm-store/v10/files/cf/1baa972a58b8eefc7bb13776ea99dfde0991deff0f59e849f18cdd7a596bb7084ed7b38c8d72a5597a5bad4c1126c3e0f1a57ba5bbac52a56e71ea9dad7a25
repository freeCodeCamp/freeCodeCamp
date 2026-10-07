// deno-lint-ignore-file ban-types
import { Guard } from '../guard/index.mjs';
export function IsValidationError(value) {
    return Guard.IsObject(value) &&
        Guard.HasPropertyKey(value, 'keyword') &&
        Guard.HasPropertyKey(value, 'schemaPath') &&
        Guard.HasPropertyKey(value, 'instancePath') &&
        Guard.HasPropertyKey(value, 'params') &&
        Guard.IsString(value.keyword) &&
        Guard.IsString(value.schemaPath) &&
        Guard.IsString(value.instancePath) &&
        Guard.IsObject(value.params);
}
export function IsLocalizedValidationError(value) {
    return IsValidationError(value) &&
        Guard.HasPropertyKey(value, 'message') &&
        Guard.IsString(value.message);
}
