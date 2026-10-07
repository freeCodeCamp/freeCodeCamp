import * as core from "./core.cjs";
import type * as errors from "./errors.cjs";
import type * as schemas from "./schemas.cjs";
import * as util from "./util.cjs";
export interface $ZodCheckDef {
    check: string;
    error?: errors.$ZodErrorMap<never> | undefined;
    /** If true, no later checks will be executed if this check fails. Default `false`. */
    abort?: boolean | undefined;
    /** If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`. */
    when?: ((payload: schemas.ParsePayload) => boolean) | undefined;
}
export interface $ZodCheckInternals<T> {
    def: $ZodCheckDef;
    /** The set of issues this check might throw. */
    issc?: errors.$ZodIssueBase;
    check(payload: schemas.ParsePayload<T>): util.MaybeAsync<void>;
    onattach: ((schema: schemas.$ZodType) => void)[];
}
export interface $ZodCheck<in T = never> {
    _zod: $ZodCheckInternals<T>;
}
export declare const $ZodCheck: core.$constructor<$ZodCheck<any>>;
export interface $ZodCheckLessThanDef extends $ZodCheckDef {
    check: "less_than";
    value: util.Numeric;
    inclusive: boolean;
}
export interface $ZodCheckLessThanInternals<T extends util.Numeric = util.Numeric> extends $ZodCheckInternals<T> {
    def: $ZodCheckLessThanDef;
    issc: errors.$ZodIssueTooBig<T>;
}
export interface $ZodCheckLessThan<T extends util.Numeric = util.Numeric> extends $ZodCheck<T> {
    _zod: $ZodCheckLessThanInternals<T>;
}
export declare const $ZodCheckLessThan: core.$constructor<$ZodCheckLessThan>;
export interface $ZodCheckGreaterThanDef extends $ZodCheckDef {
    check: "greater_than";
    value: util.Numeric;
    inclusive: boolean;
}
export interface $ZodCheckGreaterThanInternals<T extends util.Numeric = util.Numeric> extends $ZodCheckInternals<T> {
    def: $ZodCheckGreaterThanDef;
    issc: errors.$ZodIssueTooSmall<T>;
}
export interface $ZodCheckGreaterThan<T extends util.Numeric = util.Numeric> extends $ZodCheck<T> {
    _zod: $ZodCheckGreaterThanInternals<T>;
}
export declare const $ZodCheckGreaterThan: core.$constructor<$ZodCheckGreaterThan>;
export interface $ZodCheckMultipleOfDef<T extends number | bigint = number | bigint> extends $ZodCheckDef {
    check: "multiple_of";
    value: T;
}
export interface $ZodCheckMultipleOfInternals<T extends number | bigint = number | bigint> extends $ZodCheckInternals<T> {
    def: $ZodCheckMultipleOfDef<T>;
    issc: errors.$ZodIssueNotMultipleOf;
}
export interface $ZodCheckMultipleOf<T extends number | bigint = number | bigint> extends $ZodCheck<T> {
    _zod: $ZodCheckMultipleOfInternals<T>;
}
export declare const $ZodCheckMultipleOf: core.$constructor<$ZodCheckMultipleOf<number | bigint>>;
export type $ZodNumberFormats = "int32" | "uint32" | "float32" | "float64" | "safeint";
export interface $ZodCheckNumberFormatDef extends $ZodCheckDef {
    check: "number_format";
    format: $ZodNumberFormats;
}
export interface $ZodCheckNumberFormatInternals extends $ZodCheckInternals<number> {
    def: $ZodCheckNumberFormatDef;
    issc: errors.$ZodIssueInvalidType | errors.$ZodIssueTooBig<"number"> | errors.$ZodIssueTooSmall<"number">;
}
export interface $ZodCheckNumberFormat extends $ZodCheck<number> {
    _zod: $ZodCheckNumberFormatInternals;
}
export declare const $ZodCheckNumberFormat: core.$constructor<$ZodCheckNumberFormat>;
export type $ZodBigIntFormats = "int64" | "uint64";
export interface $ZodCheckBigIntFormatDef extends $ZodCheckDef {
    check: "bigint_format";
    format: $ZodBigIntFormats | undefined;
}
export interface $ZodCheckBigIntFormatInternals extends $ZodCheckInternals<bigint> {
    def: $ZodCheckBigIntFormatDef;
    issc: errors.$ZodIssueTooBig<"bigint"> | errors.$ZodIssueTooSmall<"bigint">;
}
export interface $ZodCheckBigIntFormat extends $ZodCheck<bigint> {
    _zod: $ZodCheckBigIntFormatInternals;
}
export declare const $ZodCheckBigIntFormat: core.$constructor<$ZodCheckBigIntFormat>;
export interface $ZodCheckMaxSizeDef extends $ZodCheckDef {
    check: "max_size";
    maximum: number;
}
export interface $ZodCheckMaxSizeInternals<T extends util.HasSize = util.HasSize> extends $ZodCheckInternals<T> {
    def: $ZodCheckMaxSizeDef;
    issc: errors.$ZodIssueTooBig<T>;
}
export interface $ZodCheckMaxSize<T extends util.HasSize = util.HasSize> extends $ZodCheck<T> {
    _zod: $ZodCheckMaxSizeInternals<T>;
}
export declare const $ZodCheckMaxSize: core.$constructor<$ZodCheckMaxSize>;
export interface $ZodCheckMinSizeDef extends $ZodCheckDef {
    check: "min_size";
    minimum: number;
}
export interface $ZodCheckMinSizeInternals<T extends util.HasSize = util.HasSize> extends $ZodCheckInternals<T> {
    def: $ZodCheckMinSizeDef;
    issc: errors.$ZodIssueTooSmall<T>;
}
export interface $ZodCheckMinSize<T extends util.HasSize = util.HasSize> extends $ZodCheck<T> {
    _zod: $ZodCheckMinSizeInternals<T>;
}
export declare const $ZodCheckMinSize: core.$constructor<$ZodCheckMinSize>;
export interface $ZodCheckSizeEqualsDef extends $ZodCheckDef {
    check: "size_equals";
    size: number;
}
export interface $ZodCheckSizeEqualsInternals<T extends util.HasSize = util.HasSize> extends $ZodCheckInternals<T> {
    def: $ZodCheckSizeEqualsDef;
    issc: errors.$ZodIssueTooBig<T> | errors.$ZodIssueTooSmall<T>;
}
export interface $ZodCheckSizeEquals<T extends util.HasSize = util.HasSize> extends $ZodCheck<T> {
    _zod: $ZodCheckSizeEqualsInternals<T>;
}
export declare const $ZodCheckSizeEquals: core.$constructor<$ZodCheckSizeEquals>;
export interface $ZodCheckMaxLengthDef extends $ZodCheckDef {
    check: "max_length";
    maximum: number;
}
export interface $ZodCheckMaxLengthInternals<T extends util.HasLength = util.HasLength> extends $ZodCheckInternals<T> {
    def: $ZodCheckMaxLengthDef;
    issc: errors.$ZodIssueTooBig<T>;
}
export interface $ZodCheckMaxLength<T extends util.HasLength = util.HasLength> extends $ZodCheck<T> {
    _zod: $ZodCheckMaxLengthInternals<T>;
}
export declare const $ZodCheckMaxLength: core.$constructor<$ZodCheckMaxLength>;
export interface $ZodCheckMinLengthDef extends $ZodCheckDef {
    check: "min_length";
    minimum: number;
}
export interface $ZodCheckMinLengthInternals<T extends util.HasLength = util.HasLength> extends $ZodCheckInternals<T> {
    def: $ZodCheckMinLengthDef;
    issc: errors.$ZodIssueTooSmall<T>;
}
export interface $ZodCheckMinLength<T extends util.HasLength = util.HasLength> extends $ZodCheck<T> {
    _zod: $ZodCheckMinLengthInternals<T>;
}
export declare const $ZodCheckMinLength: core.$constructor<$ZodCheckMinLength>;
export interface $ZodCheckLengthEqualsDef extends $ZodCheckDef {
    check: "length_equals";
    length: number;
}
export interface $ZodCheckLengthEqualsInternals<T extends util.HasLength = util.HasLength> extends $ZodCheckInternals<T> {
    def: $ZodCheckLengthEqualsDef;
    issc: errors.$ZodIssueTooBig<T> | errors.$ZodIssueTooSmall<T>;
}
export interface $ZodCheckLengthEquals<T extends util.HasLength = util.HasLength> extends $ZodCheck<T> {
    _zod: $ZodCheckLengthEqualsInternals<T>;
}
export declare const $ZodCheckLengthEquals: core.$constructor<$ZodCheckLengthEquals>;
export type $ZodStringFormats = "email" | "url" | "emoji" | "uuid" | "guid" | "nanoid" | "cuid" | "cuid2" | "ulid" | "xid" | "ksuid" | "datetime" | "date" | "time" | "duration" | "ipv4" | "ipv6" | "cidrv4" | "cidrv6" | "base64" | "base64url" | "json_string" | "e164" | "lowercase" | "uppercase" | "regex" | "jwt" | "starts_with" | "ends_with" | "includes";
export interface $ZodCheckStringFormatDef<Format extends string = string> extends $ZodCheckDef {
    check: "string_format";
    format: Format;
    pattern?: RegExp | undefined;
}
export interface $ZodCheckStringFormatInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckStringFormatDef;
    issc: errors.$ZodIssueInvalidStringFormat;
}
export interface $ZodCheckStringFormat extends $ZodCheck<string> {
    _zod: $ZodCheckStringFormatInternals;
}
export declare const $ZodCheckStringFormat: core.$constructor<$ZodCheckStringFormat>;
export interface $ZodCheckRegexDef extends $ZodCheckStringFormatDef {
    format: "regex";
    pattern: RegExp;
}
export interface $ZodCheckRegexInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckRegexDef;
    issc: errors.$ZodIssueInvalidStringFormat;
}
export interface $ZodCheckRegex extends $ZodCheck<string> {
    _zod: $ZodCheckRegexInternals;
}
export declare const $ZodCheckRegex: core.$constructor<$ZodCheckRegex>;
export interface $ZodCheckLowerCaseDef extends $ZodCheckStringFormatDef<"lowercase"> {
}
export interface $ZodCheckLowerCaseInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckLowerCaseDef;
    issc: errors.$ZodIssueInvalidStringFormat;
}
export interface $ZodCheckLowerCase extends $ZodCheck<string> {
    _zod: $ZodCheckLowerCaseInternals;
}
export declare const $ZodCheckLowerCase: core.$constructor<$ZodCheckLowerCase>;
export interface $ZodCheckUpperCaseDef extends $ZodCheckStringFormatDef<"uppercase"> {
}
export interface $ZodCheckUpperCaseInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckUpperCaseDef;
    issc: errors.$ZodIssueInvalidStringFormat;
}
export interface $ZodCheckUpperCase extends $ZodCheck<string> {
    _zod: $ZodCheckUpperCaseInternals;
}
export declare const $ZodCheckUpperCase: core.$constructor<$ZodCheckUpperCase>;
export interface $ZodCheckIncludesDef extends $ZodCheckStringFormatDef<"includes"> {
    includes: string;
    position?: number | undefined;
}
export interface $ZodCheckIncludesInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckIncludesDef;
    issc: errors.$ZodIssueInvalidStringFormat;
}
export interface $ZodCheckIncludes extends $ZodCheck<string> {
    _zod: $ZodCheckIncludesInternals;
}
export declare const $ZodCheckIncludes: core.$constructor<$ZodCheckIncludes>;
export interface $ZodCheckStartsWithDef extends $ZodCheckStringFormatDef<"starts_with"> {
    prefix: string;
}
export interface $ZodCheckStartsWithInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckStartsWithDef;
    issc: errors.$ZodIssueInvalidStringFormat;
}
export interface $ZodCheckStartsWith extends $ZodCheck<string> {
    _zod: $ZodCheckStartsWithInternals;
}
export declare const $ZodCheckStartsWith: core.$constructor<$ZodCheckStartsWith>;
export interface $ZodCheckEndsWithDef extends $ZodCheckStringFormatDef<"ends_with"> {
    suffix: string;
}
export interface $ZodCheckEndsWithInternals extends $ZodCheckInternals<string> {
    def: $ZodCheckEndsWithDef;
    issc: errors.$ZodIssueInvalidStringFormat;
}
export interface $ZodCheckEndsWith extends $ZodCheckInternals<string> {
    _zod: $ZodCheckEndsWithInternals;
}
export declare const $ZodCheckEndsWith: core.$constructor<$ZodCheckEndsWith>;
export interface $ZodCheckPropertyDef extends $ZodCheckDef {
    check: "property";
    property: string;
    schema: schemas.$ZodType;
}
export interface $ZodCheckPropertyInternals<T extends object = object> extends $ZodCheckInternals<T> {
    def: $ZodCheckPropertyDef;
    issc: errors.$ZodIssue;
}
export interface $ZodCheckProperty<T extends object = object> extends $ZodCheck<T> {
    _zod: $ZodCheckPropertyInternals<T>;
}
export declare const $ZodCheckProperty: core.$constructor<$ZodCheckProperty>;
export interface $ZodCheckMimeTypeDef extends $ZodCheckDef {
    check: "mime_type";
    mime: util.MimeTypes[];
}
export interface $ZodCheckMimeTypeInternals<T extends File = File> extends $ZodCheckInternals<T> {
    def: $ZodCheckMimeTypeDef;
    issc: errors.$ZodIssueInvalidValue;
}
export interface $ZodCheckMimeType<T extends File = File> extends $ZodCheck<T> {
    _zod: $ZodCheckMimeTypeInternals<T>;
}
export declare const $ZodCheckMimeType: core.$constructor<$ZodCheckMimeType>;
export interface $ZodCheckOverwriteDef<T = unknown> extends $ZodCheckDef {
    check: "overwrite";
    tx(value: T): T;
}
export interface $ZodCheckOverwriteInternals<T = unknown> extends $ZodCheckInternals<T> {
    def: $ZodCheckOverwriteDef<T>;
    issc: never;
}
export interface $ZodCheckOverwrite<T = unknown> extends $ZodCheck<T> {
    _zod: $ZodCheckOverwriteInternals<T>;
}
export declare const $ZodCheckOverwrite: core.$constructor<$ZodCheckOverwrite>;
export type $ZodChecks = $ZodCheckLessThan | $ZodCheckGreaterThan | $ZodCheckMultipleOf | $ZodCheckNumberFormat | $ZodCheckBigIntFormat | $ZodCheckMaxSize | $ZodCheckMinSize | $ZodCheckSizeEquals | $ZodCheckMaxLength | $ZodCheckMinLength | $ZodCheckLengthEquals | $ZodCheckStringFormat | $ZodCheckProperty | $ZodCheckMimeType | $ZodCheckOverwrite;
export type $ZodStringFormatChecks = $ZodCheckRegex | $ZodCheckLowerCase | $ZodCheckUpperCase | $ZodCheckIncludes | $ZodCheckStartsWith | $ZodCheckEndsWith | schemas.$ZodStringFormatTypes;
