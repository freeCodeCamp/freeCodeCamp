const RelativeJsonPointer = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
/**
 * Returns true if the value is a relative json pointer
 * @specification
 * @source ajv-formats
 */
export function IsRelativeJsonPointer(value) {
    return RelativeJsonPointer.test(value);
}
