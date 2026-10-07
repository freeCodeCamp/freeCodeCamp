/**
 * Returns true if the value is a regular expression string pattern
 * @specification
 * @source ajv-formats
 */
export function IsRegex(value) {
    if (value.length === 0) {
        return false;
    }
    try {
        new RegExp(value);
        return true;
    }
    catch {
        return false;
    }
}
