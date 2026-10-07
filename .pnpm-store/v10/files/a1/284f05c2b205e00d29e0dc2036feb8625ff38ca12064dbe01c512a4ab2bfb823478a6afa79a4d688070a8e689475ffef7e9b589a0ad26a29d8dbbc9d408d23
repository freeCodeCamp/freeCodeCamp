import * as checks from "./checks.js";
import type * as core from "./core.js";
import type * as errors from "./errors.js";
import * as schemas from "./schemas.js";
import * as util from "./util.js";
export type Params<T extends schemas.$ZodType | checks.$ZodCheck, IssueTypes extends errors.$ZodIssueBase, OmitKeys extends keyof T["_zod"]["def"] = never> = util.Flatten<Partial<util.EmptyToNever<Omit<T["_zod"]["def"], OmitKeys> & ([IssueTypes] extends [never] ? {} : {
    error?: string | errors.$ZodErrorMap<IssueTypes> | undefined;
    /** @deprecated This parameter is deprecated. Use `error` instead. */
    message?: string | undefined;
})>>>;
export type TypeParams<T extends schemas.$ZodType = schemas.$ZodType & {
    _isst: never;
}, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error"> = never> = Params<T, NonNullable<T["_zod"]["isst"]>, "type" | "checks" | "error" | AlsoOmit>;
export type CheckParams<T extends checks.$ZodCheck = checks.$ZodCheck, // & { _issc: never },
AlsoOmit extends Exclude<keyof T["_zod"]["def"], "check" | "error"> = never> = Params<T, NonNullable<T["_zod"]["issc"]>, "check" | "error" | AlsoOmit>;
export type StringFormatParams<T extends schemas.$ZodStringFormat = schemas.$ZodStringFormat, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "coerce" | "checks" | "error" | "check" | "format"> = never> = Params<T, NonNullable<T["_zod"]["isst"] | T["_zod"]["issc"]>, "type" | "coerce" | "checks" | "error" | "check" | "format" | AlsoOmit>;
export type CheckStringFormatParams<T extends schemas.$ZodStringFormat = schemas.$ZodStringFormat, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "coerce" | "checks" | "error" | "check" | "format"> = never> = Params<T, NonNullable<T["_zod"]["issc"]>, "type" | "coerce" | "checks" | "error" | "check" | "format" | AlsoOmit>;
export type CheckTypeParams<T extends schemas.$ZodType & checks.$ZodCheck = schemas.$ZodType & checks.$ZodCheck, AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error" | "check"> = never> = Params<T, NonNullable<T["_zod"]["isst"] | T["_zod"]["issc"]>, "type" | "checks" | "error" | "check" | AlsoOmit>;
export type $ZodStringParams = TypeParams<schemas.$ZodString<string>, "coerce">;
export declare function _string<T extends schemas.$ZodString>(Class: util.SchemaClass<T>, params?: string | $ZodStringParams): T;
export declare function _coercedString<T extends schemas.$ZodString>(Class: util.SchemaClass<T>, params?: string | $ZodStringParams): T;
export type $ZodStringFormatParams = CheckTypeParams<schemas.$ZodStringFormat, "format" | "coerce">;
export type $ZodCheckStringFormatParams = CheckParams<checks.$ZodCheckStringFormat, "format">;
export type $ZodEmailParams = StringFormatParams<schemas.$ZodEmail>;
export type $ZodCheckEmailParams = CheckStringFormatParams<schemas.$ZodEmail>;
export declare function _email<T extends schemas.$ZodEmail>(Class: util.SchemaClass<T>, params?: string | $ZodEmailParams | $ZodCheckEmailParams): T;
export type $ZodGUIDParams = StringFormatParams<schemas.$ZodGUID, "pattern">;
export type $ZodCheckGUIDParams = CheckStringFormatParams<schemas.$ZodGUID, "pattern">;
export declare function _guid<T extends schemas.$ZodGUID>(Class: util.SchemaClass<T>, params?: string | $ZodGUIDParams | $ZodCheckGUIDParams): T;
export type $ZodUUIDParams = StringFormatParams<schemas.$ZodUUID, "pattern">;
export type $ZodCheckUUIDParams = CheckStringFormatParams<schemas.$ZodUUID, "pattern">;
export declare function _uuid<T extends schemas.$ZodUUID>(Class: util.SchemaClass<T>, params?: string | $ZodUUIDParams | $ZodCheckUUIDParams): T;
export type $ZodUUIDv4Params = StringFormatParams<schemas.$ZodUUID, "pattern">;
export type $ZodCheckUUIDv4Params = CheckStringFormatParams<schemas.$ZodUUID, "pattern">;
export declare function _uuidv4<T extends schemas.$ZodUUID>(Class: util.SchemaClass<T>, params?: string | $ZodUUIDv4Params | $ZodCheckUUIDv4Params): T;
export type $ZodUUIDv6Params = StringFormatParams<schemas.$ZodUUID, "pattern">;
export type $ZodCheckUUIDv6Params = CheckStringFormatParams<schemas.$ZodUUID, "pattern">;
export declare function _uuidv6<T extends schemas.$ZodUUID>(Class: util.SchemaClass<T>, params?: string | $ZodUUIDv6Params | $ZodCheckUUIDv6Params): T;
export type $ZodUUIDv7Params = StringFormatParams<schemas.$ZodUUID, "pattern">;
export type $ZodCheckUUIDv7Params = CheckStringFormatParams<schemas.$ZodUUID, "pattern">;
export declare function _uuidv7<T extends schemas.$ZodUUID>(Class: util.SchemaClass<T>, params?: string | $ZodUUIDv7Params | $ZodCheckUUIDv7Params): T;
export type $ZodURLParams = StringFormatParams<schemas.$ZodURL>;
export type $ZodCheckURLParams = CheckStringFormatParams<schemas.$ZodURL>;
export declare function _url<T extends schemas.$ZodURL>(Class: util.SchemaClass<T>, params?: string | $ZodURLParams | $ZodCheckURLParams): T;
export type $ZodEmojiParams = StringFormatParams<schemas.$ZodEmoji>;
export type $ZodCheckEmojiParams = CheckStringFormatParams<schemas.$ZodEmoji>;
export declare function _emoji<T extends schemas.$ZodEmoji>(Class: util.SchemaClass<T>, params?: string | $ZodEmojiParams | $ZodCheckEmojiParams): T;
export type $ZodNanoIDParams = StringFormatParams<schemas.$ZodNanoID>;
export type $ZodCheckNanoIDParams = CheckStringFormatParams<schemas.$ZodNanoID>;
export declare function _nanoid<T extends schemas.$ZodNanoID>(Class: util.SchemaClass<T>, params?: string | $ZodNanoIDParams | $ZodCheckNanoIDParams): T;
export type $ZodCUIDParams = StringFormatParams<schemas.$ZodCUID>;
export type $ZodCheckCUIDParams = CheckStringFormatParams<schemas.$ZodCUID>;
export declare function _cuid<T extends schemas.$ZodCUID>(Class: util.SchemaClass<T>, params?: string | $ZodCUIDParams | $ZodCheckCUIDParams): T;
export type $ZodCUID2Params = StringFormatParams<schemas.$ZodCUID2>;
export type $ZodCheckCUID2Params = CheckStringFormatParams<schemas.$ZodCUID2>;
export declare function _cuid2<T extends schemas.$ZodCUID2>(Class: util.SchemaClass<T>, params?: string | $ZodCUID2Params | $ZodCheckCUID2Params): T;
export type $ZodULIDParams = StringFormatParams<schemas.$ZodULID>;
export type $ZodCheckULIDParams = CheckStringFormatParams<schemas.$ZodULID>;
export declare function _ulid<T extends schemas.$ZodULID>(Class: util.SchemaClass<T>, params?: string | $ZodULIDParams | $ZodCheckULIDParams): T;
export type $ZodXIDParams = StringFormatParams<schemas.$ZodXID>;
export type $ZodCheckXIDParams = CheckStringFormatParams<schemas.$ZodXID>;
export declare function _xid<T extends schemas.$ZodXID>(Class: util.SchemaClass<T>, params?: string | $ZodXIDParams | $ZodCheckXIDParams): T;
export type $ZodKSUIDParams = StringFormatParams<schemas.$ZodKSUID>;
export type $ZodCheckKSUIDParams = CheckStringFormatParams<schemas.$ZodKSUID>;
export declare function _ksuid<T extends schemas.$ZodKSUID>(Class: util.SchemaClass<T>, params?: string | $ZodKSUIDParams | $ZodCheckKSUIDParams): T;
export type $ZodIPv4Params = StringFormatParams<schemas.$ZodIPv4, "pattern">;
export type $ZodCheckIPv4Params = CheckStringFormatParams<schemas.$ZodIPv4, "pattern">;
export declare function _ipv4<T extends schemas.$ZodIPv4>(Class: util.SchemaClass<T>, params?: string | $ZodIPv4Params | $ZodCheckIPv4Params): T;
export type $ZodIPv6Params = StringFormatParams<schemas.$ZodIPv6, "pattern">;
export type $ZodCheckIPv6Params = CheckStringFormatParams<schemas.$ZodIPv6, "pattern">;
export declare function _ipv6<T extends schemas.$ZodIPv6>(Class: util.SchemaClass<T>, params?: string | $ZodIPv6Params | $ZodCheckIPv6Params): T;
export type $ZodCIDRv4Params = StringFormatParams<schemas.$ZodCIDRv4, "pattern">;
export type $ZodCheckCIDRv4Params = CheckStringFormatParams<schemas.$ZodCIDRv4, "pattern">;
export declare function _cidrv4<T extends schemas.$ZodCIDRv4>(Class: util.SchemaClass<T>, params?: string | $ZodCIDRv4Params | $ZodCheckCIDRv4Params): T;
export type $ZodCIDRv6Params = StringFormatParams<schemas.$ZodCIDRv6, "pattern">;
export type $ZodCheckCIDRv6Params = CheckStringFormatParams<schemas.$ZodCIDRv6, "pattern">;
export declare function _cidrv6<T extends schemas.$ZodCIDRv6>(Class: util.SchemaClass<T>, params?: string | $ZodCIDRv6Params | $ZodCheckCIDRv6Params): T;
export type $ZodBase64Params = StringFormatParams<schemas.$ZodBase64, "pattern">;
export type $ZodCheckBase64Params = CheckStringFormatParams<schemas.$ZodBase64, "pattern">;
export declare function _base64<T extends schemas.$ZodBase64>(Class: util.SchemaClass<T>, params?: string | $ZodBase64Params | $ZodCheckBase64Params): T;
export type $ZodBase64URLParams = StringFormatParams<schemas.$ZodBase64URL, "pattern">;
export type $ZodCheckBase64URLParams = CheckStringFormatParams<schemas.$ZodBase64URL, "pattern">;
export declare function _base64url<T extends schemas.$ZodBase64URL>(Class: util.SchemaClass<T>, params?: string | $ZodBase64URLParams | $ZodCheckBase64URLParams): T;
export type $ZodE164Params = StringFormatParams<schemas.$ZodE164>;
export type $ZodCheckE164Params = CheckStringFormatParams<schemas.$ZodE164>;
export declare function _e164<T extends schemas.$ZodE164>(Class: util.SchemaClass<T>, params?: string | $ZodE164Params | $ZodCheckE164Params): T;
export type $ZodJWTParams = StringFormatParams<schemas.$ZodJWT, "pattern">;
export type $ZodCheckJWTParams = CheckStringFormatParams<schemas.$ZodJWT, "pattern">;
export declare function _jwt<T extends schemas.$ZodJWT>(Class: util.SchemaClass<T>, params?: string | $ZodJWTParams | $ZodCheckJWTParams): T;
export declare const TimePrecision: {
    readonly Any: null;
    readonly Minute: -1;
    readonly Second: 0;
    readonly Millisecond: 3;
    readonly Microsecond: 6;
};
export type $ZodISODateTimeParams = StringFormatParams<schemas.$ZodISODateTime, "pattern">;
export type $ZodCheckISODateTimeParams = CheckStringFormatParams<schemas.$ZodISODateTime, "pattern">;
export declare function _isoDateTime<T extends schemas.$ZodISODateTime>(Class: util.SchemaClass<T>, params?: string | $ZodISODateTimeParams | $ZodCheckISODateTimeParams): T;
export type $ZodISODateParams = StringFormatParams<schemas.$ZodISODate, "pattern">;
export type $ZodCheckISODateParams = CheckStringFormatParams<schemas.$ZodISODate, "pattern">;
export declare function _isoDate<T extends schemas.$ZodISODate>(Class: util.SchemaClass<T>, params?: string | $ZodISODateParams | $ZodCheckISODateParams): T;
export type $ZodISOTimeParams = StringFormatParams<schemas.$ZodISOTime, "pattern">;
export type $ZodCheckISOTimeParams = CheckStringFormatParams<schemas.$ZodISOTime, "pattern">;
export declare function _isoTime<T extends schemas.$ZodISOTime>(Class: util.SchemaClass<T>, params?: string | $ZodISOTimeParams | $ZodCheckISOTimeParams): T;
export type $ZodISODurationParams = StringFormatParams<schemas.$ZodISODuration>;
export type $ZodCheckISODurationParams = CheckStringFormatParams<schemas.$ZodISODuration>;
export declare function _isoDuration<T extends schemas.$ZodISODuration>(Class: util.SchemaClass<T>, params?: string | $ZodISODurationParams | $ZodCheckISODurationParams): T;
export type $ZodNumberParams = TypeParams<schemas.$ZodNumber<number>, "coerce">;
export type $ZodNumberFormatParams = CheckTypeParams<schemas.$ZodNumberFormat, "format" | "coerce">;
export type $ZodCheckNumberFormatParams = CheckParams<checks.$ZodCheckNumberFormat, "format">;
export declare function _number<T extends schemas.$ZodNumber>(Class: util.SchemaClass<T>, params?: string | $ZodNumberParams): T;
export declare function _coercedNumber<T extends schemas.$ZodNumber>(Class: util.SchemaClass<T>, params?: string | $ZodNumberParams): T;
export declare function _int<T extends schemas.$ZodNumberFormat>(Class: util.SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
export declare function _float32<T extends schemas.$ZodNumberFormat>(Class: util.SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
export declare function _float64<T extends schemas.$ZodNumberFormat>(Class: util.SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
export declare function _int32<T extends schemas.$ZodNumberFormat>(Class: util.SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
export declare function _uint32<T extends schemas.$ZodNumberFormat>(Class: util.SchemaClass<T>, params?: string | $ZodCheckNumberFormatParams): T;
export type $ZodBooleanParams = TypeParams<schemas.$ZodBoolean<boolean>, "coerce">;
export declare function _boolean<T extends schemas.$ZodBoolean>(Class: util.SchemaClass<T>, params?: string | $ZodBooleanParams): T;
export declare function _coercedBoolean<T extends schemas.$ZodBoolean>(Class: util.SchemaClass<T>, params?: string | $ZodBooleanParams): T;
export type $ZodBigIntParams = TypeParams<schemas.$ZodBigInt<bigint>>;
export type $ZodBigIntFormatParams = CheckTypeParams<schemas.$ZodBigIntFormat, "format" | "coerce">;
export type $ZodCheckBigIntFormatParams = CheckParams<checks.$ZodCheckBigIntFormat, "format">;
export declare function _bigint<T extends schemas.$ZodBigInt>(Class: util.SchemaClass<T>, params?: string | $ZodBigIntParams): T;
export declare function _coercedBigint<T extends schemas.$ZodBigInt>(Class: util.SchemaClass<T>, params?: string | $ZodBigIntParams): T;
export declare function _int64<T extends schemas.$ZodBigIntFormat>(Class: util.SchemaClass<T>, params?: string | $ZodBigIntFormatParams): T;
export declare function _uint64<T extends schemas.$ZodBigIntFormat>(Class: util.SchemaClass<T>, params?: string | $ZodBigIntFormatParams): T;
export type $ZodSymbolParams = TypeParams<schemas.$ZodSymbol>;
export declare function _symbol<T extends schemas.$ZodSymbol>(Class: util.SchemaClass<T>, params?: string | $ZodSymbolParams): T;
export type $ZodUndefinedParams = TypeParams<schemas.$ZodUndefined>;
export declare function _undefined<T extends schemas.$ZodUndefined>(Class: util.SchemaClass<T>, params?: string | $ZodUndefinedParams): T;
export type $ZodNullParams = TypeParams<schemas.$ZodNull>;
export declare function _null<T extends schemas.$ZodNull>(Class: util.SchemaClass<T>, params?: string | $ZodNullParams): T;
export type $ZodAnyParams = TypeParams<schemas.$ZodAny>;
export declare function _any<T extends schemas.$ZodAny>(Class: util.SchemaClass<T>): T;
export type $ZodUnknownParams = TypeParams<schemas.$ZodUnknown>;
export declare function _unknown<T extends schemas.$ZodUnknown>(Class: util.SchemaClass<T>): T;
export type $ZodNeverParams = TypeParams<schemas.$ZodNever>;
export declare function _never<T extends schemas.$ZodNever>(Class: util.SchemaClass<T>, params?: string | $ZodNeverParams): T;
export type $ZodVoidParams = TypeParams<schemas.$ZodVoid>;
export declare function _void<T extends schemas.$ZodVoid>(Class: util.SchemaClass<T>, params?: string | $ZodVoidParams): T;
export type $ZodDateParams = TypeParams<schemas.$ZodDate, "coerce">;
export declare function _date<T extends schemas.$ZodDate>(Class: util.SchemaClass<T>, params?: string | $ZodDateParams): T;
export declare function _coercedDate<T extends schemas.$ZodDate>(Class: util.SchemaClass<T>, params?: string | $ZodDateParams): T;
export type $ZodNaNParams = TypeParams<schemas.$ZodNaN>;
export declare function _nan<T extends schemas.$ZodNaN>(Class: util.SchemaClass<T>, params?: string | $ZodNaNParams): T;
export type $ZodCheckLessThanParams = CheckParams<checks.$ZodCheckLessThan, "inclusive" | "value">;
export declare function _lt(value: util.Numeric, params?: string | $ZodCheckLessThanParams): checks.$ZodCheckLessThan<util.Numeric>;
export declare function _lte(value: util.Numeric, params?: string | $ZodCheckLessThanParams): checks.$ZodCheckLessThan<util.Numeric>;
export { 
/** @deprecated Use `z.lte()` instead. */
_lte as _max, };
export type $ZodCheckGreaterThanParams = CheckParams<checks.$ZodCheckGreaterThan, "inclusive" | "value">;
export declare function _gt(value: util.Numeric, params?: string | $ZodCheckGreaterThanParams): checks.$ZodCheckGreaterThan;
export declare function _gte(value: util.Numeric, params?: string | $ZodCheckGreaterThanParams): checks.$ZodCheckGreaterThan;
export { 
/** @deprecated Use `z.gte()` instead. */
_gte as _min, };
export declare function _positive(params?: string | $ZodCheckGreaterThanParams): checks.$ZodCheckGreaterThan;
export declare function _negative(params?: string | $ZodCheckLessThanParams): checks.$ZodCheckLessThan;
export declare function _nonpositive(params?: string | $ZodCheckLessThanParams): checks.$ZodCheckLessThan;
export declare function _nonnegative(params?: string | $ZodCheckGreaterThanParams): checks.$ZodCheckGreaterThan;
export type $ZodCheckMultipleOfParams = CheckParams<checks.$ZodCheckMultipleOf, "value">;
export declare function _multipleOf(value: number | bigint, params?: string | $ZodCheckMultipleOfParams): checks.$ZodCheckMultipleOf;
export type $ZodCheckMaxSizeParams = CheckParams<checks.$ZodCheckMaxSize, "maximum">;
export declare function _maxSize(maximum: number, params?: string | $ZodCheckMaxSizeParams): checks.$ZodCheckMaxSize<util.HasSize>;
export type $ZodCheckMinSizeParams = CheckParams<checks.$ZodCheckMinSize, "minimum">;
export declare function _minSize(minimum: number, params?: string | $ZodCheckMinSizeParams): checks.$ZodCheckMinSize<util.HasSize>;
export type $ZodCheckSizeEqualsParams = CheckParams<checks.$ZodCheckSizeEquals, "size">;
export declare function _size(size: number, params?: string | $ZodCheckSizeEqualsParams): checks.$ZodCheckSizeEquals<util.HasSize>;
export type $ZodCheckMaxLengthParams = CheckParams<checks.$ZodCheckMaxLength, "maximum">;
export declare function _maxLength(maximum: number, params?: string | $ZodCheckMaxLengthParams): checks.$ZodCheckMaxLength<util.HasLength>;
export type $ZodCheckMinLengthParams = CheckParams<checks.$ZodCheckMinLength, "minimum">;
export declare function _minLength(minimum: number, params?: string | $ZodCheckMinLengthParams): checks.$ZodCheckMinLength<util.HasLength>;
export type $ZodCheckLengthEqualsParams = CheckParams<checks.$ZodCheckLengthEquals, "length">;
export declare function _length(length: number, params?: string | $ZodCheckLengthEqualsParams): checks.$ZodCheckLengthEquals<util.HasLength>;
export type $ZodCheckRegexParams = CheckParams<checks.$ZodCheckRegex, "format" | "pattern">;
export declare function _regex(pattern: RegExp, params?: string | $ZodCheckRegexParams): checks.$ZodCheckRegex;
export type $ZodCheckLowerCaseParams = CheckParams<checks.$ZodCheckLowerCase, "format">;
export declare function _lowercase(params?: string | $ZodCheckLowerCaseParams): checks.$ZodCheckLowerCase;
export type $ZodCheckUpperCaseParams = CheckParams<checks.$ZodCheckUpperCase, "format">;
export declare function _uppercase(params?: string | $ZodCheckUpperCaseParams): checks.$ZodCheckUpperCase;
export type $ZodCheckIncludesParams = CheckParams<checks.$ZodCheckIncludes, "includes" | "format" | "pattern">;
export declare function _includes(includes: string, params?: string | $ZodCheckIncludesParams): checks.$ZodCheckIncludes;
export type $ZodCheckStartsWithParams = CheckParams<checks.$ZodCheckStartsWith, "prefix" | "format" | "pattern">;
export declare function _startsWith(prefix: string, params?: string | $ZodCheckStartsWithParams): checks.$ZodCheckStartsWith;
export type $ZodCheckEndsWithParams = CheckParams<checks.$ZodCheckEndsWith, "suffix" | "format" | "pattern">;
export declare function _endsWith(suffix: string, params?: string | $ZodCheckEndsWithParams): checks.$ZodCheckEndsWith;
export type $ZodCheckPropertyParams = CheckParams<checks.$ZodCheckProperty, "property" | "schema">;
export declare function _property<K extends string, T extends schemas.$ZodType>(property: K, schema: T, params?: string | $ZodCheckPropertyParams): checks.$ZodCheckProperty<{
    [k in K]: core.output<T>;
}>;
export type $ZodCheckMimeTypeParams = CheckParams<checks.$ZodCheckMimeType, "mime">;
export declare function _mime(types: util.MimeTypes[], params?: string | $ZodCheckMimeTypeParams): checks.$ZodCheckMimeType;
export declare function _overwrite<T>(tx: (input: T) => T): checks.$ZodCheckOverwrite<T>;
export declare function _normalize(form?: "NFC" | "NFD" | "NFKC" | "NFKD" | (string & {})): checks.$ZodCheckOverwrite<string>;
export declare function _trim(): checks.$ZodCheckOverwrite<string>;
export declare function _toLowerCase(): checks.$ZodCheckOverwrite<string>;
export declare function _toUpperCase(): checks.$ZodCheckOverwrite<string>;
export type $ZodArrayParams = TypeParams<schemas.$ZodArray, "element">;
export declare function _array<T extends schemas.$ZodType>(Class: util.SchemaClass<schemas.$ZodArray>, element: T, params?: string | $ZodArrayParams): schemas.$ZodArray<T>;
export type $ZodObjectParams = TypeParams<schemas.$ZodObject, "shape" | "catchall">;
export type $ZodUnionParams = TypeParams<schemas.$ZodUnion, "options">;
export declare function _union<const T extends readonly schemas.$ZodObject[]>(Class: util.SchemaClass<schemas.$ZodUnion>, options: T, params?: string | $ZodUnionParams): schemas.$ZodUnion<T>;
export interface $ZodTypeDiscriminableInternals extends schemas.$ZodTypeInternals {
    propValues: util.PropValues;
}
export interface $ZodTypeDiscriminable extends schemas.$ZodType {
    _zod: $ZodTypeDiscriminableInternals;
}
export type $ZodDiscriminatedUnionParams = TypeParams<schemas.$ZodDiscriminatedUnion, "options" | "discriminator">;
export declare function _discriminatedUnion<Types extends [$ZodTypeDiscriminable, ...$ZodTypeDiscriminable[]]>(Class: util.SchemaClass<schemas.$ZodDiscriminatedUnion>, discriminator: string, options: Types, params?: string | $ZodDiscriminatedUnionParams): schemas.$ZodDiscriminatedUnion<Types>;
export type $ZodIntersectionParams = TypeParams<schemas.$ZodIntersection, "left" | "right">;
export declare function _intersection<T extends schemas.$ZodObject, U extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodIntersection>, left: T, right: U): schemas.$ZodIntersection<T, U>;
export type $ZodTupleParams = TypeParams<schemas.$ZodTuple, "items" | "rest">;
export declare function _tuple<T extends readonly [schemas.$ZodType, ...schemas.$ZodType[]]>(Class: util.SchemaClass<schemas.$ZodTuple>, items: T, params?: string | $ZodTupleParams): schemas.$ZodTuple<T, null>;
export declare function _tuple<T extends readonly [schemas.$ZodType, ...schemas.$ZodType[]], Rest extends schemas.$ZodType>(Class: util.SchemaClass<schemas.$ZodTuple>, items: T, rest: Rest, params?: string | $ZodTupleParams): schemas.$ZodTuple<T, Rest>;
export type $ZodRecordParams = TypeParams<schemas.$ZodRecord, "keyType" | "valueType">;
export declare function _record<Key extends schemas.$ZodRecordKey, Value extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodRecord>, keyType: Key, valueType: Value, params?: string | $ZodRecordParams): schemas.$ZodRecord<Key, Value>;
export type $ZodMapParams = TypeParams<schemas.$ZodMap, "keyType" | "valueType">;
export declare function _map<Key extends schemas.$ZodObject, Value extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodMap>, keyType: Key, valueType: Value, params?: string | $ZodMapParams): schemas.$ZodMap<Key, Value>;
export type $ZodSetParams = TypeParams<schemas.$ZodSet, "valueType">;
export declare function _set<Value extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodSet>, valueType: Value, params?: string | $ZodSetParams): schemas.$ZodSet<Value>;
export type $ZodEnumParams = TypeParams<schemas.$ZodEnum, "entries">;
export declare function _enum<const T extends string[]>(Class: util.SchemaClass<schemas.$ZodEnum>, values: T, params?: string | $ZodEnumParams): schemas.$ZodEnum<util.ToEnum<T[number]>>;
export declare function _enum<T extends util.EnumLike>(Class: util.SchemaClass<schemas.$ZodEnum>, entries: T, params?: string | $ZodEnumParams): schemas.$ZodEnum<T>;
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
export declare function _nativeEnum<T extends util.EnumLike>(Class: util.SchemaClass<schemas.$ZodEnum>, entries: T, params?: string | $ZodEnumParams): schemas.$ZodEnum<T>;
export type $ZodLiteralParams = TypeParams<schemas.$ZodLiteral, "values">;
export declare function _literal<const T extends Array<util.Literal>>(Class: util.SchemaClass<schemas.$ZodLiteral>, value: T, params?: string | $ZodLiteralParams): schemas.$ZodLiteral<T[number]>;
export declare function _literal<const T extends util.Literal>(Class: util.SchemaClass<schemas.$ZodLiteral>, value: T, params?: string | $ZodLiteralParams): schemas.$ZodLiteral<T>;
export type $ZodFileParams = TypeParams<schemas.$ZodFile>;
export declare function _file(Class: util.SchemaClass<schemas.$ZodFile>, params?: string | $ZodFileParams): schemas.$ZodFile;
export type $ZodTransformParams = TypeParams<schemas.$ZodTransform, "transform">;
export declare function _transform<I = unknown, O = I>(Class: util.SchemaClass<schemas.$ZodTransform>, fn: (input: I, ctx?: schemas.ParsePayload) => O): schemas.$ZodTransform<Awaited<O>, I>;
export type $ZodOptionalParams = TypeParams<schemas.$ZodOptional, "innerType">;
export declare function _optional<T extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodOptional>, innerType: T): schemas.$ZodOptional<T>;
export type $ZodNullableParams = TypeParams<schemas.$ZodNullable, "innerType">;
export declare function _nullable<T extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodNullable>, innerType: T): schemas.$ZodNullable<T>;
export type $ZodDefaultParams = TypeParams<schemas.$ZodDefault, "innerType" | "defaultValue">;
export declare function _default<T extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodDefault>, innerType: T, defaultValue: util.NoUndefined<core.output<T>> | (() => util.NoUndefined<core.output<T>>)): schemas.$ZodDefault<T>;
export type $ZodNonOptionalParams = TypeParams<schemas.$ZodNonOptional, "innerType">;
export declare function _nonoptional<T extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodNonOptional>, innerType: T, params?: string | $ZodNonOptionalParams): schemas.$ZodNonOptional<T>;
export type $ZodSuccessParams = TypeParams<schemas.$ZodSuccess, "innerType">;
export declare function _success<T extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodSuccess>, innerType: T): schemas.$ZodSuccess<T>;
export type $ZodCatchParams = TypeParams<schemas.$ZodCatch, "innerType" | "catchValue">;
export declare function _catch<T extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodCatch>, innerType: T, catchValue: core.output<T> | ((ctx: schemas.$ZodCatchCtx) => core.output<T>)): schemas.$ZodCatch<T>;
export type $ZodPipeParams = TypeParams<schemas.$ZodPipe, "in" | "out">;
export declare function _pipe<const A extends schemas.$ZodType, B extends schemas.$ZodType<unknown, core.output<A>> = schemas.$ZodType<unknown, core.output<A>>>(Class: util.SchemaClass<schemas.$ZodPipe>, in_: A, out: B | schemas.$ZodType<unknown, core.output<A>>): schemas.$ZodPipe<A, B>;
export type $ZodReadonlyParams = TypeParams<schemas.$ZodReadonly, "innerType">;
export declare function _readonly<T extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodReadonly>, innerType: T): schemas.$ZodReadonly<T>;
export type $ZodTemplateLiteralParams = TypeParams<schemas.$ZodTemplateLiteral, "parts">;
export declare function _templateLiteral<const Parts extends schemas.$ZodTemplateLiteralPart[]>(Class: util.SchemaClass<schemas.$ZodTemplateLiteral>, parts: Parts, params?: string | $ZodTemplateLiteralParams): schemas.$ZodTemplateLiteral<schemas.$PartsToTemplateLiteral<Parts>>;
export type $ZodLazyParams = TypeParams<schemas.$ZodLazy, "getter">;
export declare function _lazy<T extends schemas.$ZodType>(Class: util.SchemaClass<schemas.$ZodLazy>, getter: () => T): schemas.$ZodLazy<T>;
export type $ZodPromiseParams = TypeParams<schemas.$ZodPromise, "innerType">;
export declare function _promise<T extends schemas.$ZodObject>(Class: util.SchemaClass<schemas.$ZodPromise>, innerType: T): schemas.$ZodPromise<T>;
export type $ZodCustomParams = CheckTypeParams<schemas.$ZodCustom, "fn">;
export declare function _custom<O = unknown, I = O>(Class: util.SchemaClass<schemas.$ZodCustom>, fn: (data: O) => unknown, _params: string | $ZodCustomParams | undefined): schemas.$ZodCustom<O, I>;
export declare function _refine<O = unknown, I = O>(Class: util.SchemaClass<schemas.$ZodCustom>, fn: (data: O) => unknown, _params: string | $ZodCustomParams | undefined): schemas.$ZodCustom<O, I>;
export interface $ZodStringBoolParams extends TypeParams {
    truthy?: string[];
    falsy?: string[];
    /**
     * Options: `"sensitive"`, `"insensitive"`
     *
     * @default `"insensitive"`
     */
    case?: "sensitive" | "insensitive" | undefined;
}
export declare function _stringbool(Classes: {
    Pipe?: typeof schemas.$ZodPipe;
    Boolean?: typeof schemas.$ZodBoolean;
    Transform?: typeof schemas.$ZodTransform;
    String?: typeof schemas.$ZodString;
}, _params?: string | $ZodStringBoolParams): schemas.$ZodPipe<schemas.$ZodPipe<schemas.$ZodString, schemas.$ZodTransform<boolean, string>>, schemas.$ZodBoolean<boolean>>;
export declare function _stringFormat<Format extends string>(Class: typeof schemas.$ZodCustomStringFormat, format: Format, fnOrRegex: ((arg: string) => util.MaybeAsync<unknown>) | RegExp, _params?: string | $ZodStringFormatParams): schemas.$ZodCustomStringFormat<Format>;
