import * as core from "../core/index.js";
import type { ZodType } from "./schemas.js";
export type { 
/** @deprecated Use `z.output<T>` instead. */
output as TypeOf, 
/** @deprecated Use `z.output<T>` instead. */
output as Infer, 
/** @deprecated Use `z.core.$$ZodFirstPartyTypes` instead */
$ZodTypes as ZodFirstPartySchemaTypes, } from "../core/index.js";
/** @deprecated Use the raw string literal codes instead, e.g. "invalid_type". */
export declare const ZodIssueCode: {
    readonly invalid_type: "invalid_type";
    readonly too_big: "too_big";
    readonly too_small: "too_small";
    readonly invalid_format: "invalid_format";
    readonly not_multiple_of: "not_multiple_of";
    readonly unrecognized_keys: "unrecognized_keys";
    readonly invalid_union: "invalid_union";
    readonly invalid_key: "invalid_key";
    readonly invalid_element: "invalid_element";
    readonly invalid_value: "invalid_value";
    readonly custom: "custom";
};
/** @deprecated Use `z.$ZodFlattenedError` */
export type inferFlattenedErrors<T extends core.$ZodType, U = string> = core.$ZodFlattenedError<core.output<T>, U>;
/** @deprecated Use `z.$ZodFormattedError` */
export type inferFormattedError<T extends core.$ZodType<any, any>, U = string> = core.$ZodFormattedError<core.output<T>, U>;
/** Use `z.$brand` instead */
export type BRAND<T extends string | number | symbol = string | number | symbol> = {
    [core.$brand]: {
        [k in T]: true;
    };
};
export { $brand, config } from "../core/index.js";
/** @deprecated Use `z.config(params)` instead. */
export declare function setErrorMap(map: core.$ZodErrorMap): void;
/** @deprecated Use `z.config()` instead. */
export declare function getErrorMap(): core.$ZodErrorMap<core.$ZodIssue> | undefined;
export type { 
/** @deprecated Use z.ZodType (without generics) instead. */
ZodType as ZodTypeAny, 
/** @deprecated Use `z.ZodType` */
ZodType as ZodSchema, 
/** @deprecated Use `z.ZodType` */
ZodType as Schema, };
export type ZodRawShape = core.$ZodShape;
