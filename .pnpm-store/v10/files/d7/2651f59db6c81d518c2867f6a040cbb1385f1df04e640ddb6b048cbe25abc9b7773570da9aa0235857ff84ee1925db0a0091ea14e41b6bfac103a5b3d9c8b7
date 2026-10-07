const JsonPointerUriFragment = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
/**
 * Returns true if the value is a json pointer uri fragment
 * @specification
 * @source ajv-formats
 */
export function IsJsonPointerUriFragment(value) {
    return JsonPointerUriFragment.test(value);
}
