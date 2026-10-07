// Zod 3 compat layer
import * as core from "../core/index.js";
/** @deprecated Use the raw string literal codes instead, e.g. "invalid_type". */
export const ZodIssueCode = {
    invalid_type: "invalid_type",
    too_big: "too_big",
    too_small: "too_small",
    invalid_format: "invalid_format",
    not_multiple_of: "not_multiple_of",
    unrecognized_keys: "unrecognized_keys",
    invalid_union: "invalid_union",
    invalid_key: "invalid_key",
    invalid_element: "invalid_element",
    invalid_value: "invalid_value",
    custom: "custom",
};
export { $brand, config } from "../core/index.js";
/** @deprecated Use `z.config(params)` instead. */
export function setErrorMap(map) {
    core.config({
        customError: map,
    });
}
/** @deprecated Use `z.config()` instead. */
export function getErrorMap() {
    return core.config().customError;
}
