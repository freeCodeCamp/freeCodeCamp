import * as checks from "./checks.js";
import type * as core from "./core.js";
import type * as errors from "./errors.js";
import * as schemas from "./schemas.js";
import * as util from "./util.js";

export type Params<
  T extends schemas.$ZodType | checks.$ZodCheck,
  IssueTypes extends errors.$ZodIssueBase,
  OmitKeys extends keyof T["_zod"]["def"] = never,
> = util.Flatten<
  Partial<
    util.EmptyToNever<
      Omit<T["_zod"]["def"], OmitKeys> &
        ([IssueTypes] extends [never]
          ? {} // unknown
          : {
              error?: string | errors.$ZodErrorMap<IssueTypes> | undefined;
              /** @deprecated This parameter is deprecated. Use `error` instead. */
              message?: string | undefined; // supported in Zod 3
            })
    >
  >
>;

export type TypeParams<
  T extends schemas.$ZodType = schemas.$ZodType & { _isst: never },
  AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error"> = never,
> = Params<T, NonNullable<T["_zod"]["isst"]>, "type" | "checks" | "error" | AlsoOmit>;

// strips types that are not exposed in the public factory
// incl. `error`, `check`
export type CheckParams<
  T extends checks.$ZodCheck = checks.$ZodCheck, // & { _issc: never },
  AlsoOmit extends Exclude<keyof T["_zod"]["def"], "check" | "error"> = never,
> = Params<T, NonNullable<T["_zod"]["issc"]>, "check" | "error" | AlsoOmit>;

// strips types that are not exposed in the public factory
// incl. `type`, `checks`, `error`, `check`, `format`
export type StringFormatParams<
  T extends schemas.$ZodStringFormat = schemas.$ZodStringFormat,
  AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "coerce" | "checks" | "error" | "check" | "format"> = never,
> = Params<
  T,
  NonNullable<T["_zod"]["isst"] | T["_zod"]["issc"]>,
  "type" | "coerce" | "checks" | "error" | "check" | "format" | AlsoOmit
>;

export type CheckStringFormatParams<
  T extends schemas.$ZodStringFormat = schemas.$ZodStringFormat,
  AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "coerce" | "checks" | "error" | "check" | "format"> = never,
> = Params<T, NonNullable<T["_zod"]["issc"]>, "type" | "coerce" | "checks" | "error" | "check" | "format" | AlsoOmit>;

export type CheckTypeParams<
  T extends schemas.$ZodType & checks.$ZodCheck = schemas.$ZodType & checks.$ZodCheck,
  AlsoOmit extends Exclude<keyof T["_zod"]["def"], "type" | "checks" | "error" | "check"> = never,
> = Params<T, NonNullable<T["_zod"]["isst"] | T["_zod"]["issc"]>, "type" | "checks" | "error" | "check" | AlsoOmit>;

// String
export type $ZodStringParams = TypeParams<schemas.$ZodString<string>, "coerce">;
export function _string<T extends schemas.$ZodString>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodStringParams
): T {
  return new Class({
    type: "string",
    ...util.normalizeParams(params),
  });
}

export function _coercedString<T extends schemas.$ZodString>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodStringParams
): T {
  return new Class({
    type: "string",
    coerce: true,
    ...util.normalizeParams(params),
  });
}

export type $ZodStringFormatParams = CheckTypeParams<schemas.$ZodStringFormat, "format" | "coerce">;
export type $ZodCheckStringFormatParams = CheckParams<checks.$ZodCheckStringFormat, "format">;
// custom format

// Email
export type $ZodEmailParams = StringFormatParams<schemas.$ZodEmail>;
export type $ZodCheckEmailParams = CheckStringFormatParams<schemas.$ZodEmail>;
export function _email<T extends schemas.$ZodEmail>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodEmailParams | $ZodCheckEmailParams
): T {
  return new Class({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// GUID
export type $ZodGUIDParams = StringFormatParams<schemas.$ZodGUID, "pattern">;
export type $ZodCheckGUIDParams = CheckStringFormatParams<schemas.$ZodGUID, "pattern">;
export function _guid<T extends schemas.$ZodGUID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodGUIDParams | $ZodCheckGUIDParams
): T {
  return new Class({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// UUID
export type $ZodUUIDParams = StringFormatParams<schemas.$ZodUUID, "pattern">;
export type $ZodCheckUUIDParams = CheckStringFormatParams<schemas.$ZodUUID, "pattern">;
export function _uuid<T extends schemas.$ZodUUID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodUUIDParams | $ZodCheckUUIDParams
): T {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// UUIDv4
export type $ZodUUIDv4Params = StringFormatParams<schemas.$ZodUUID, "pattern">;
export type $ZodCheckUUIDv4Params = CheckStringFormatParams<schemas.$ZodUUID, "pattern">;
export function _uuidv4<T extends schemas.$ZodUUID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodUUIDv4Params | $ZodCheckUUIDv4Params
): T {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...util.normalizeParams(params),
  });
}

// UUIDv6
export type $ZodUUIDv6Params = StringFormatParams<schemas.$ZodUUID, "pattern">;
export type $ZodCheckUUIDv6Params = CheckStringFormatParams<schemas.$ZodUUID, "pattern">;
export function _uuidv6<T extends schemas.$ZodUUID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodUUIDv6Params | $ZodCheckUUIDv6Params
): T {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...util.normalizeParams(params),
  });
}

// UUIDv7
export type $ZodUUIDv7Params = StringFormatParams<schemas.$ZodUUID, "pattern">;
export type $ZodCheckUUIDv7Params = CheckStringFormatParams<schemas.$ZodUUID, "pattern">;
export function _uuidv7<T extends schemas.$ZodUUID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodUUIDv7Params | $ZodCheckUUIDv7Params
): T {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...util.normalizeParams(params),
  });
}

// URL
export type $ZodURLParams = StringFormatParams<schemas.$ZodURL>;
export type $ZodCheckURLParams = CheckStringFormatParams<schemas.$ZodURL>;
export function _url<T extends schemas.$ZodURL>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodURLParams | $ZodCheckURLParams
): T {
  return new Class({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// Emoji
export type $ZodEmojiParams = StringFormatParams<schemas.$ZodEmoji>;
export type $ZodCheckEmojiParams = CheckStringFormatParams<schemas.$ZodEmoji>;
export function _emoji<T extends schemas.$ZodEmoji>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodEmojiParams | $ZodCheckEmojiParams
): T {
  return new Class({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// NanoID
export type $ZodNanoIDParams = StringFormatParams<schemas.$ZodNanoID>;
export type $ZodCheckNanoIDParams = CheckStringFormatParams<schemas.$ZodNanoID>;
export function _nanoid<T extends schemas.$ZodNanoID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodNanoIDParams | $ZodCheckNanoIDParams
): T {
  return new Class({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// CUID
export type $ZodCUIDParams = StringFormatParams<schemas.$ZodCUID>;
export type $ZodCheckCUIDParams = CheckStringFormatParams<schemas.$ZodCUID>;
export function _cuid<T extends schemas.$ZodCUID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodCUIDParams | $ZodCheckCUIDParams
): T {
  return new Class({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// CUID2
export type $ZodCUID2Params = StringFormatParams<schemas.$ZodCUID2>;
export type $ZodCheckCUID2Params = CheckStringFormatParams<schemas.$ZodCUID2>;
export function _cuid2<T extends schemas.$ZodCUID2>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodCUID2Params | $ZodCheckCUID2Params
): T {
  return new Class({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// ULID
export type $ZodULIDParams = StringFormatParams<schemas.$ZodULID>;
export type $ZodCheckULIDParams = CheckStringFormatParams<schemas.$ZodULID>;
export function _ulid<T extends schemas.$ZodULID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodULIDParams | $ZodCheckULIDParams
): T {
  return new Class({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// XID
export type $ZodXIDParams = StringFormatParams<schemas.$ZodXID>;
export type $ZodCheckXIDParams = CheckStringFormatParams<schemas.$ZodXID>;
export function _xid<T extends schemas.$ZodXID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodXIDParams | $ZodCheckXIDParams
): T {
  return new Class({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// KSUID
export type $ZodKSUIDParams = StringFormatParams<schemas.$ZodKSUID>;
export type $ZodCheckKSUIDParams = CheckStringFormatParams<schemas.$ZodKSUID>;
export function _ksuid<T extends schemas.$ZodKSUID>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodKSUIDParams | $ZodCheckKSUIDParams
): T {
  return new Class({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// IP
// export type $ZodIPParams = StringFormatParams<schemas.$ZodIP, "pattern">;
// export type $ZodCheckIPParams = CheckStringFormatParams<schemas.$ZodIP, "pattern">;
// export function _ip<T extends schemas.$ZodIP>(
//   Class: util.SchemaClass<T>,
//   params?: string | $ZodIPParams | $ZodCheckIPParams
// ): T {
//   return new Class({
//     type: "string",
//     format: "ip",
//     check: "string_format",
//     abort: false,
//     ...util.normalizeParams(params),
//   });
// }

// IPv4
export type $ZodIPv4Params = StringFormatParams<schemas.$ZodIPv4, "pattern">;
export type $ZodCheckIPv4Params = CheckStringFormatParams<schemas.$ZodIPv4, "pattern">;
export function _ipv4<T extends schemas.$ZodIPv4>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodIPv4Params | $ZodCheckIPv4Params
): T {
  return new Class({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// IPv6
export type $ZodIPv6Params = StringFormatParams<schemas.$ZodIPv6, "pattern">;
export type $ZodCheckIPv6Params = CheckStringFormatParams<schemas.$ZodIPv6, "pattern">;
export function _ipv6<T extends schemas.$ZodIPv6>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodIPv6Params | $ZodCheckIPv6Params
): T {
  return new Class({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// CIDRv4
export type $ZodCIDRv4Params = StringFormatParams<schemas.$ZodCIDRv4, "pattern">;
export type $ZodCheckCIDRv4Params = CheckStringFormatParams<schemas.$ZodCIDRv4, "pattern">;
export function _cidrv4<T extends schemas.$ZodCIDRv4>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodCIDRv4Params | $ZodCheckCIDRv4Params
): T {
  return new Class({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// CIDRv6
export type $ZodCIDRv6Params = StringFormatParams<schemas.$ZodCIDRv6, "pattern">;
export type $ZodCheckCIDRv6Params = CheckStringFormatParams<schemas.$ZodCIDRv6, "pattern">;
export function _cidrv6<T extends schemas.$ZodCIDRv6>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodCIDRv6Params | $ZodCheckCIDRv6Params
): T {
  return new Class({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// Base64
export type $ZodBase64Params = StringFormatParams<schemas.$ZodBase64, "pattern">;
export type $ZodCheckBase64Params = CheckStringFormatParams<schemas.$ZodBase64, "pattern">;
export function _base64<T extends schemas.$ZodBase64>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodBase64Params | $ZodCheckBase64Params
): T {
  return new Class({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// base64url
export type $ZodBase64URLParams = StringFormatParams<schemas.$ZodBase64URL, "pattern">;
export type $ZodCheckBase64URLParams = CheckStringFormatParams<schemas.$ZodBase64URL, "pattern">;
export function _base64url<T extends schemas.$ZodBase64URL>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodBase64URLParams | $ZodCheckBase64URLParams
): T {
  return new Class({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// E164
export type $ZodE164Params = StringFormatParams<schemas.$ZodE164>;
export type $ZodCheckE164Params = CheckStringFormatParams<schemas.$ZodE164>;
export function _e164<T extends schemas.$ZodE164>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodE164Params | $ZodCheckE164Params
): T {
  return new Class({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

// JWT
export type $ZodJWTParams = StringFormatParams<schemas.$ZodJWT, "pattern">;
export type $ZodCheckJWTParams = CheckStringFormatParams<schemas.$ZodJWT, "pattern">;
export function _jwt<T extends schemas.$ZodJWT>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodJWTParams | $ZodCheckJWTParams
): T {
  return new Class({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...util.normalizeParams(params),
  });
}

export const TimePrecision = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6,
} as const;
// ISODateTime
export type $ZodISODateTimeParams = StringFormatParams<schemas.$ZodISODateTime, "pattern">;
export type $ZodCheckISODateTimeParams = CheckStringFormatParams<schemas.$ZodISODateTime, "pattern">;
export function _isoDateTime<T extends schemas.$ZodISODateTime>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodISODateTimeParams | $ZodCheckISODateTimeParams
): T {
  return new Class({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...util.normalizeParams(params),
  });
}

// ISODate
export type $ZodISODateParams = StringFormatParams<schemas.$ZodISODate, "pattern">;
export type $ZodCheckISODateParams = CheckStringFormatParams<schemas.$ZodISODate, "pattern">;
export function _isoDate<T extends schemas.$ZodISODate>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodISODateParams | $ZodCheckISODateParams
): T {
  return new Class({
    type: "string",
    format: "date",
    check: "string_format",
    ...util.normalizeParams(params),
  });
}

// ISOTime
export type $ZodISOTimeParams = StringFormatParams<schemas.$ZodISOTime, "pattern">;
export type $ZodCheckISOTimeParams = CheckStringFormatParams<schemas.$ZodISOTime, "pattern">;
export function _isoTime<T extends schemas.$ZodISOTime>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodISOTimeParams | $ZodCheckISOTimeParams
): T {
  return new Class({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...util.normalizeParams(params),
  });
}

// ISODuration
export type $ZodISODurationParams = StringFormatParams<schemas.$ZodISODuration>;
export type $ZodCheckISODurationParams = CheckStringFormatParams<schemas.$ZodISODuration>;
export function _isoDuration<T extends schemas.$ZodISODuration>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodISODurationParams | $ZodCheckISODurationParams
): T {
  return new Class({
    type: "string",
    format: "duration",
    check: "string_format",
    ...util.normalizeParams(params),
  });
}

// Number
export type $ZodNumberParams = TypeParams<schemas.$ZodNumber<number>, "coerce">;
export type $ZodNumberFormatParams = CheckTypeParams<schemas.$ZodNumberFormat, "format" | "coerce">;
export type $ZodCheckNumberFormatParams = CheckParams<checks.$ZodCheckNumberFormat, "format">;
export function _number<T extends schemas.$ZodNumber>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodNumberParams
): T {
  return new Class({
    type: "number",
    checks: [],
    ...util.normalizeParams(params),
  });
}

export function _coercedNumber<T extends schemas.$ZodNumber>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodNumberParams
): T {
  return new Class({
    type: "number",
    coerce: true,
    checks: [],
    ...util.normalizeParams(params),
  });
}

export function _int<T extends schemas.$ZodNumberFormat>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodCheckNumberFormatParams
): T {
  return new Class({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...util.normalizeParams(params),
  });
}
export function _float32<T extends schemas.$ZodNumberFormat>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodCheckNumberFormatParams
): T {
  return new Class({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float32",
    ...util.normalizeParams(params),
  });
}
export function _float64<T extends schemas.$ZodNumberFormat>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodCheckNumberFormatParams
): T {
  return new Class({
    type: "number",
    check: "number_format",
    abort: false,
    format: "float64",
    ...util.normalizeParams(params),
  });
}
export function _int32<T extends schemas.$ZodNumberFormat>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodCheckNumberFormatParams
): T {
  return new Class({
    type: "number",
    check: "number_format",
    abort: false,
    format: "int32",
    ...util.normalizeParams(params),
  });
}
export function _uint32<T extends schemas.$ZodNumberFormat>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodCheckNumberFormatParams
): T {
  return new Class({
    type: "number",
    check: "number_format",
    abort: false,
    format: "uint32",
    ...util.normalizeParams(params),
  });
}

// Boolean
export type $ZodBooleanParams = TypeParams<schemas.$ZodBoolean<boolean>, "coerce">;
export function _boolean<T extends schemas.$ZodBoolean>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodBooleanParams
): T {
  return new Class({
    type: "boolean",
    ...util.normalizeParams(params),
  });
}
export function _coercedBoolean<T extends schemas.$ZodBoolean>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodBooleanParams
): T {
  return new Class({
    type: "boolean",
    coerce: true,
    ...util.normalizeParams(params),
  });
}

// BigInt
export type $ZodBigIntParams = TypeParams<schemas.$ZodBigInt<bigint>>;
export type $ZodBigIntFormatParams = CheckTypeParams<schemas.$ZodBigIntFormat, "format" | "coerce">;
export type $ZodCheckBigIntFormatParams = CheckParams<checks.$ZodCheckBigIntFormat, "format">;
export function _bigint<T extends schemas.$ZodBigInt>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodBigIntParams
): T {
  return new Class({
    type: "bigint",
    ...util.normalizeParams(params),
  });
}
export function _coercedBigint<T extends schemas.$ZodBigInt>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodBigIntParams
): T {
  return new Class({
    type: "bigint",
    coerce: true,
    ...util.normalizeParams(params),
  });
}

export function _int64<T extends schemas.$ZodBigIntFormat>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodBigIntFormatParams
): T {
  return new Class({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "int64",
    ...util.normalizeParams(params),
  });
}
export function _uint64<T extends schemas.$ZodBigIntFormat>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodBigIntFormatParams
): T {
  return new Class({
    type: "bigint",
    check: "bigint_format",
    abort: false,
    format: "uint64",
    ...util.normalizeParams(params),
  });
}

// Symbol
export type $ZodSymbolParams = TypeParams<schemas.$ZodSymbol>;
export function _symbol<T extends schemas.$ZodSymbol>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodSymbolParams
): T {
  return new Class({
    type: "symbol",
    ...util.normalizeParams(params),
  });
}

// Undefined
export type $ZodUndefinedParams = TypeParams<schemas.$ZodUndefined>;
export function _undefined<T extends schemas.$ZodUndefined>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodUndefinedParams
): T {
  return new Class({
    type: "undefined",
    ...util.normalizeParams(params),
  });
}

// Null
export type $ZodNullParams = TypeParams<schemas.$ZodNull>;
export function _null<T extends schemas.$ZodNull>(Class: util.SchemaClass<T>, params?: string | $ZodNullParams): T {
  return new Class({
    type: "null",
    ...util.normalizeParams(params),
  });
}

// Any
export type $ZodAnyParams = TypeParams<schemas.$ZodAny>;
export function _any<T extends schemas.$ZodAny>(Class: util.SchemaClass<T>): T {
  return new Class({
    type: "any",
  });
}

// Unknown
export type $ZodUnknownParams = TypeParams<schemas.$ZodUnknown>;
export function _unknown<T extends schemas.$ZodUnknown>(Class: util.SchemaClass<T>): T {
  return new Class({
    type: "unknown",
  });
}

// Never
export type $ZodNeverParams = TypeParams<schemas.$ZodNever>;
export function _never<T extends schemas.$ZodNever>(Class: util.SchemaClass<T>, params?: string | $ZodNeverParams): T {
  return new Class({
    type: "never",
    ...util.normalizeParams(params),
  });
}

// Void
export type $ZodVoidParams = TypeParams<schemas.$ZodVoid>;
export function _void<T extends schemas.$ZodVoid>(Class: util.SchemaClass<T>, params?: string | $ZodVoidParams): T {
  return new Class({
    type: "void",
    ...util.normalizeParams(params),
  });
}

// Date
export type $ZodDateParams = TypeParams<schemas.$ZodDate, "coerce">;
export function _date<T extends schemas.$ZodDate>(Class: util.SchemaClass<T>, params?: string | $ZodDateParams): T {
  return new Class({
    type: "date",
    ...util.normalizeParams(params),
  });
}
export function _coercedDate<T extends schemas.$ZodDate>(
  Class: util.SchemaClass<T>,
  params?: string | $ZodDateParams
): T {
  return new Class({
    type: "date",
    coerce: true,
    ...util.normalizeParams(params),
  });
}

// NaN
export type $ZodNaNParams = TypeParams<schemas.$ZodNaN>;
export function _nan<T extends schemas.$ZodNaN>(Class: util.SchemaClass<T>, params?: string | $ZodNaNParams): T {
  return new Class({
    type: "nan",
    ...util.normalizeParams(params),
  });
}

// export type $ZodCheckParams = CheckParams<checks.$ZodCheck, "abort">;

export type $ZodCheckLessThanParams = CheckParams<checks.$ZodCheckLessThan, "inclusive" | "value">;
export function _lt(
  value: util.Numeric,
  params?: string | $ZodCheckLessThanParams
): checks.$ZodCheckLessThan<util.Numeric> {
  return new checks.$ZodCheckLessThan({
    check: "less_than",
    ...util.normalizeParams(params),
    value,
    inclusive: false,
  });
}

export function _lte(
  value: util.Numeric,
  params?: string | $ZodCheckLessThanParams
): checks.$ZodCheckLessThan<util.Numeric> {
  return new checks.$ZodCheckLessThan({
    check: "less_than",

    ...util.normalizeParams(params),
    value,
    inclusive: true,
  });
}
export {
  /** @deprecated Use `z.lte()` instead. */
  _lte as _max,
};

// ZodCheckGreaterThan
export type $ZodCheckGreaterThanParams = CheckParams<checks.$ZodCheckGreaterThan, "inclusive" | "value">;
export function _gt(value: util.Numeric, params?: string | $ZodCheckGreaterThanParams): checks.$ZodCheckGreaterThan {
  return new checks.$ZodCheckGreaterThan({
    check: "greater_than",

    ...util.normalizeParams(params),
    value,
    inclusive: false,
  });
}

export function _gte(value: util.Numeric, params?: string | $ZodCheckGreaterThanParams): checks.$ZodCheckGreaterThan {
  return new checks.$ZodCheckGreaterThan({
    check: "greater_than",
    ...util.normalizeParams(params),
    value,
    inclusive: true,
  });
}

export {
  /** @deprecated Use `z.gte()` instead. */
  _gte as _min,
};

export function _positive(params?: string | $ZodCheckGreaterThanParams): checks.$ZodCheckGreaterThan {
  return _gt(0, params);
}

// negative
export function _negative(params?: string | $ZodCheckLessThanParams): checks.$ZodCheckLessThan {
  return _lt(0, params);
}

// nonpositive
export function _nonpositive(params?: string | $ZodCheckLessThanParams): checks.$ZodCheckLessThan {
  return _lte(0, params);
}

// nonnegative
export function _nonnegative(params?: string | $ZodCheckGreaterThanParams): checks.$ZodCheckGreaterThan {
  return _gte(0, params);
}

export type $ZodCheckMultipleOfParams = CheckParams<checks.$ZodCheckMultipleOf, "value">;
export function _multipleOf(
  value: number | bigint,
  params?: string | $ZodCheckMultipleOfParams
): checks.$ZodCheckMultipleOf {
  return new checks.$ZodCheckMultipleOf({
    check: "multiple_of",
    ...util.normalizeParams(params),
    value,
  });
}

export type $ZodCheckMaxSizeParams = CheckParams<checks.$ZodCheckMaxSize, "maximum">;
export function _maxSize(
  maximum: number,
  params?: string | $ZodCheckMaxSizeParams
): checks.$ZodCheckMaxSize<util.HasSize> {
  return new checks.$ZodCheckMaxSize({
    check: "max_size",
    ...util.normalizeParams(params),
    maximum,
  });
}

export type $ZodCheckMinSizeParams = CheckParams<checks.$ZodCheckMinSize, "minimum">;
export function _minSize(
  minimum: number,
  params?: string | $ZodCheckMinSizeParams
): checks.$ZodCheckMinSize<util.HasSize> {
  return new checks.$ZodCheckMinSize({
    check: "min_size",
    ...util.normalizeParams(params),
    minimum,
  });
}

export type $ZodCheckSizeEqualsParams = CheckParams<checks.$ZodCheckSizeEquals, "size">;
export function _size(
  size: number,
  params?: string | $ZodCheckSizeEqualsParams
): checks.$ZodCheckSizeEquals<util.HasSize> {
  return new checks.$ZodCheckSizeEquals({
    check: "size_equals",
    ...util.normalizeParams(params),
    size,
  });
}

export type $ZodCheckMaxLengthParams = CheckParams<checks.$ZodCheckMaxLength, "maximum">;
export function _maxLength(
  maximum: number,
  params?: string | $ZodCheckMaxLengthParams
): checks.$ZodCheckMaxLength<util.HasLength> {
  const ch = new checks.$ZodCheckMaxLength({
    check: "max_length",
    ...util.normalizeParams(params),
    maximum,
  });
  return ch;
}

export type $ZodCheckMinLengthParams = CheckParams<checks.$ZodCheckMinLength, "minimum">;
export function _minLength(
  minimum: number,
  params?: string | $ZodCheckMinLengthParams
): checks.$ZodCheckMinLength<util.HasLength> {
  return new checks.$ZodCheckMinLength({
    check: "min_length",
    ...util.normalizeParams(params),
    minimum,
  });
}

export type $ZodCheckLengthEqualsParams = CheckParams<checks.$ZodCheckLengthEquals, "length">;
export function _length(
  length: number,
  params?: string | $ZodCheckLengthEqualsParams
): checks.$ZodCheckLengthEquals<util.HasLength> {
  return new checks.$ZodCheckLengthEquals({
    check: "length_equals",
    ...util.normalizeParams(params),
    length,
  });
}

export type $ZodCheckRegexParams = CheckParams<checks.$ZodCheckRegex, "format" | "pattern">;
export function _regex(pattern: RegExp, params?: string | $ZodCheckRegexParams): checks.$ZodCheckRegex {
  return new checks.$ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...util.normalizeParams(params),
    pattern,
  });
}

export type $ZodCheckLowerCaseParams = CheckParams<checks.$ZodCheckLowerCase, "format">;
export function _lowercase(params?: string | $ZodCheckLowerCaseParams): checks.$ZodCheckLowerCase {
  return new checks.$ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...util.normalizeParams(params),
  });
}

export type $ZodCheckUpperCaseParams = CheckParams<checks.$ZodCheckUpperCase, "format">;

export function _uppercase(params?: string | $ZodCheckUpperCaseParams): checks.$ZodCheckUpperCase {
  return new checks.$ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...util.normalizeParams(params),
  });
}

export type $ZodCheckIncludesParams = CheckParams<checks.$ZodCheckIncludes, "includes" | "format" | "pattern">;
export function _includes(includes: string, params?: string | $ZodCheckIncludesParams): checks.$ZodCheckIncludes {
  return new checks.$ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...util.normalizeParams(params),
    includes,
  });
}
export type $ZodCheckStartsWithParams = CheckParams<checks.$ZodCheckStartsWith, "prefix" | "format" | "pattern">;
export function _startsWith(prefix: string, params?: string | $ZodCheckStartsWithParams): checks.$ZodCheckStartsWith {
  return new checks.$ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...util.normalizeParams(params),
    prefix,
  });
}

export type $ZodCheckEndsWithParams = CheckParams<checks.$ZodCheckEndsWith, "suffix" | "format" | "pattern">;

export function _endsWith(suffix: string, params?: string | $ZodCheckEndsWithParams): checks.$ZodCheckEndsWith {
  return new checks.$ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...util.normalizeParams(params),
    suffix,
  });
}

export type $ZodCheckPropertyParams = CheckParams<checks.$ZodCheckProperty, "property" | "schema">;
export function _property<K extends string, T extends schemas.$ZodType>(
  property: K,
  schema: T,
  params?: string | $ZodCheckPropertyParams
): checks.$ZodCheckProperty<{ [k in K]: core.output<T> }> {
  return new checks.$ZodCheckProperty({
    check: "property",
    property,
    schema,
    ...util.normalizeParams(params),
  });
}

export type $ZodCheckMimeTypeParams = CheckParams<checks.$ZodCheckMimeType, "mime">;
export function _mime(types: util.MimeTypes[], params?: string | $ZodCheckMimeTypeParams): checks.$ZodCheckMimeType {
  return new checks.$ZodCheckMimeType({
    check: "mime_type",
    mime: types,
    ...util.normalizeParams(params),
  });
}

export function _overwrite<T>(tx: (input: T) => T): checks.$ZodCheckOverwrite<T> {
  return new checks.$ZodCheckOverwrite({
    check: "overwrite",
    tx,
  }) as checks.$ZodCheckOverwrite<T>;
}
// normalize
export function _normalize(form?: "NFC" | "NFD" | "NFKC" | "NFKD" | (string & {})): checks.$ZodCheckOverwrite<string> {
  return _overwrite((input) => input.normalize(form));
}

// trim
export function _trim(): checks.$ZodCheckOverwrite<string> {
  return _overwrite((input) => input.trim());
}
// toLowerCase
export function _toLowerCase(): checks.$ZodCheckOverwrite<string> {
  return _overwrite((input) => input.toLowerCase());
}
// toUpperCase
export function _toUpperCase(): checks.$ZodCheckOverwrite<string> {
  return _overwrite((input) => input.toUpperCase());
}

///////  collections   ///////

// Array
export type $ZodArrayParams = TypeParams<schemas.$ZodArray, "element">;
export function _array<T extends schemas.$ZodType>(
  Class: util.SchemaClass<schemas.$ZodArray>,
  element: T,
  params?: string | $ZodArrayParams
): schemas.$ZodArray<T> {
  return new Class({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...util.normalizeParams(params),
  }) as any;
}

export type $ZodObjectParams = TypeParams<schemas.$ZodObject, "shape" | "catchall">;

// ZodUnion
export type $ZodUnionParams = TypeParams<schemas.$ZodUnion, "options">;
export function _union<const T extends readonly schemas.$ZodObject[]>(
  Class: util.SchemaClass<schemas.$ZodUnion>,
  options: T,
  params?: string | $ZodUnionParams
): schemas.$ZodUnion<T> {
  return new Class({
    type: "union",
    options,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodDiscriminatedUnion
export interface $ZodTypeDiscriminableInternals extends schemas.$ZodTypeInternals {
  propValues: util.PropValues;
}

export interface $ZodTypeDiscriminable extends schemas.$ZodType {
  _zod: $ZodTypeDiscriminableInternals;
}
export type $ZodDiscriminatedUnionParams = TypeParams<schemas.$ZodDiscriminatedUnion, "options" | "discriminator">;
export function _discriminatedUnion<Types extends [$ZodTypeDiscriminable, ...$ZodTypeDiscriminable[]]>(
  Class: util.SchemaClass<schemas.$ZodDiscriminatedUnion>,
  discriminator: string,
  options: Types,
  params?: string | $ZodDiscriminatedUnionParams
): schemas.$ZodDiscriminatedUnion<Types> {
  return new Class({
    type: "union",
    options,
    discriminator,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodIntersection
export type $ZodIntersectionParams = TypeParams<schemas.$ZodIntersection, "left" | "right">;
export function _intersection<T extends schemas.$ZodObject, U extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodIntersection>,
  left: T,
  right: U
): schemas.$ZodIntersection<T, U> {
  return new Class({
    type: "intersection",
    left,
    right,
  }) as any;
}

// ZodTuple
export type $ZodTupleParams = TypeParams<schemas.$ZodTuple, "items" | "rest">;
export function _tuple<T extends readonly [schemas.$ZodType, ...schemas.$ZodType[]]>(
  Class: util.SchemaClass<schemas.$ZodTuple>,
  items: T,
  params?: string | $ZodTupleParams
): schemas.$ZodTuple<T, null>;
export function _tuple<T extends readonly [schemas.$ZodType, ...schemas.$ZodType[]], Rest extends schemas.$ZodType>(
  Class: util.SchemaClass<schemas.$ZodTuple>,
  items: T,
  rest: Rest,
  params?: string | $ZodTupleParams
): schemas.$ZodTuple<T, Rest>;
// export function _tuple(
//   Class: util.SchemaClass<schemas.$ZodTuple>,
//   items: [],
//   params?: string | $ZodTupleParams
// ): schemas.$ZodTuple<[], null>;
export function _tuple(
  Class: util.SchemaClass<schemas.$ZodTuple>,
  items: schemas.$ZodType[],
  _paramsOrRest?: string | $ZodTupleParams | schemas.$ZodType,
  _params?: string | $ZodTupleParams
) {
  const hasRest = _paramsOrRest instanceof schemas.$ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new Class({
    type: "tuple",
    items,
    rest,
    ...util.normalizeParams(params),
  });
}

// ZodRecord
export type $ZodRecordParams = TypeParams<schemas.$ZodRecord, "keyType" | "valueType">;
export function _record<Key extends schemas.$ZodRecordKey, Value extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodRecord>,
  keyType: Key,
  valueType: Value,
  params?: string | $ZodRecordParams
): schemas.$ZodRecord<Key, Value> {
  return new Class({
    type: "record",
    keyType,
    valueType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodMap
export type $ZodMapParams = TypeParams<schemas.$ZodMap, "keyType" | "valueType">;
export function _map<Key extends schemas.$ZodObject, Value extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodMap>,
  keyType: Key,
  valueType: Value,
  params?: string | $ZodMapParams
): schemas.$ZodMap<Key, Value> {
  return new Class({
    type: "map",
    keyType,
    valueType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodSet
export type $ZodSetParams = TypeParams<schemas.$ZodSet, "valueType">;
export function _set<Value extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodSet>,
  valueType: Value,
  params?: string | $ZodSetParams
): schemas.$ZodSet<Value> {
  return new Class({
    type: "set",
    valueType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodEnum
export type $ZodEnumParams = TypeParams<schemas.$ZodEnum, "entries">;
export function _enum<const T extends string[]>(
  Class: util.SchemaClass<schemas.$ZodEnum>,
  values: T,
  params?: string | $ZodEnumParams
): schemas.$ZodEnum<util.ToEnum<T[number]>>;
export function _enum<T extends util.EnumLike>(
  Class: util.SchemaClass<schemas.$ZodEnum>,
  entries: T,
  params?: string | $ZodEnumParams
): schemas.$ZodEnum<T>;
export function _enum(Class: util.SchemaClass<schemas.$ZodEnum>, values: any, params?: string | $ZodEnumParams) {
  const entries: any = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  // if (Array.isArray(values)) {
  //   for (const value of values) {
  //     entries[value] = value;
  //   }
  // } else {
  //   Object.assign(entries, values);
  // }
  // const entries: util.EnumLike = {};
  // for (const val of values) {
  //   entries[val] = val;
  // }

  return new Class({
    type: "enum",
    entries,
    ...util.normalizeParams(params),
  }) as any;
}

/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
export function _nativeEnum<T extends util.EnumLike>(
  Class: util.SchemaClass<schemas.$ZodEnum>,
  entries: T,
  params?: string | $ZodEnumParams
): schemas.$ZodEnum<T> {
  return new Class({
    type: "enum",
    entries,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodLiteral
export type $ZodLiteralParams = TypeParams<schemas.$ZodLiteral, "values">;
export function _literal<const T extends Array<util.Literal>>(
  Class: util.SchemaClass<schemas.$ZodLiteral>,
  value: T,
  params?: string | $ZodLiteralParams
): schemas.$ZodLiteral<T[number]>;
export function _literal<const T extends util.Literal>(
  Class: util.SchemaClass<schemas.$ZodLiteral>,
  value: T,
  params?: string | $ZodLiteralParams
): schemas.$ZodLiteral<T>;
export function _literal(Class: util.SchemaClass<schemas.$ZodLiteral>, value: any, params: any) {
  return new Class({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util.normalizeParams(params),
  });
}

// ZodFile
export type $ZodFileParams = TypeParams<schemas.$ZodFile>;
export function _file(Class: util.SchemaClass<schemas.$ZodFile>, params?: string | $ZodFileParams): schemas.$ZodFile {
  return new Class({
    type: "file",
    ...util.normalizeParams(params),
  });
}

// ZodTransform
export type $ZodTransformParams = TypeParams<schemas.$ZodTransform, "transform">;
export function _transform<I = unknown, O = I>(
  Class: util.SchemaClass<schemas.$ZodTransform>,
  fn: (input: I, ctx?: schemas.ParsePayload) => O
): schemas.$ZodTransform<Awaited<O>, I> {
  return new Class({
    type: "transform",
    transform: fn as any,
  }) as any;
}

// ZodOptional
export type $ZodOptionalParams = TypeParams<schemas.$ZodOptional, "innerType">;
export function _optional<T extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodOptional>,
  innerType: T
): schemas.$ZodOptional<T> {
  return new Class({
    type: "optional",
    innerType,
  }) as any;
}

// ZodNullable
export type $ZodNullableParams = TypeParams<schemas.$ZodNullable, "innerType">;
export function _nullable<T extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodNullable>,
  innerType: T
): schemas.$ZodNullable<T> {
  return new Class({
    type: "nullable",
    innerType,
  }) as any;
}

// ZodDefault
export type $ZodDefaultParams = TypeParams<schemas.$ZodDefault, "innerType" | "defaultValue">;
export function _default<T extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodDefault>,
  innerType: T,
  defaultValue: util.NoUndefined<core.output<T>> | (() => util.NoUndefined<core.output<T>>)
): schemas.$ZodDefault<T> {
  return new Class({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? (defaultValue as Function)() : defaultValue;
    },
  }) as any;
}

// ZodNonOptional
export type $ZodNonOptionalParams = TypeParams<schemas.$ZodNonOptional, "innerType">;
export function _nonoptional<T extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodNonOptional>,
  innerType: T,
  params?: string | $ZodNonOptionalParams
): schemas.$ZodNonOptional<T> {
  return new Class({
    type: "nonoptional",
    innerType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodSuccess
export type $ZodSuccessParams = TypeParams<schemas.$ZodSuccess, "innerType">;
export function _success<T extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodSuccess>,
  innerType: T
): schemas.$ZodSuccess<T> {
  return new Class({
    type: "success",
    innerType,
  }) as any;
}

// ZodCatch
export type $ZodCatchParams = TypeParams<schemas.$ZodCatch, "innerType" | "catchValue">;
export function _catch<T extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodCatch>,
  innerType: T,
  catchValue: core.output<T> | ((ctx: schemas.$ZodCatchCtx) => core.output<T>)
): schemas.$ZodCatch<T> {
  return new Class({
    type: "catch",
    innerType,
    catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue) as any,
  }) as any;
}

// ZodPipe
export type $ZodPipeParams = TypeParams<schemas.$ZodPipe, "in" | "out">;
export function _pipe<
  const A extends schemas.$ZodType,
  B extends schemas.$ZodType<unknown, core.output<A>> = schemas.$ZodType<unknown, core.output<A>>,
>(
  Class: util.SchemaClass<schemas.$ZodPipe>,
  in_: A,
  out: B | schemas.$ZodType<unknown, core.output<A>>
): schemas.$ZodPipe<A, B> {
  return new Class({
    type: "pipe",
    in: in_,
    out,
  }) as any;
}

// ZodReadonly
export type $ZodReadonlyParams = TypeParams<schemas.$ZodReadonly, "innerType">;
export function _readonly<T extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodReadonly>,
  innerType: T
): schemas.$ZodReadonly<T> {
  return new Class({
    type: "readonly",
    innerType,
  }) as any;
}

// ZodTemplateLiteral
export type $ZodTemplateLiteralParams = TypeParams<schemas.$ZodTemplateLiteral, "parts">;
export function _templateLiteral<const Parts extends schemas.$ZodTemplateLiteralPart[]>(
  Class: util.SchemaClass<schemas.$ZodTemplateLiteral>,
  parts: Parts,
  params?: string | $ZodTemplateLiteralParams
): schemas.$ZodTemplateLiteral<schemas.$PartsToTemplateLiteral<Parts>> {
  return new Class({
    type: "template_literal",
    parts,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodLazy
export type $ZodLazyParams = TypeParams<schemas.$ZodLazy, "getter">;
export function _lazy<T extends schemas.$ZodType>(
  Class: util.SchemaClass<schemas.$ZodLazy>,
  getter: () => T
): schemas.$ZodLazy<T> {
  return new Class({
    type: "lazy",
    getter,
  }) as any;
}

// ZodPromise
export type $ZodPromiseParams = TypeParams<schemas.$ZodPromise, "innerType">;
export function _promise<T extends schemas.$ZodObject>(
  Class: util.SchemaClass<schemas.$ZodPromise>,
  innerType: T
): schemas.$ZodPromise<T> {
  return new Class({
    type: "promise",
    innerType,
  }) as any;
}

// ZodCustom
export type $ZodCustomParams = CheckTypeParams<schemas.$ZodCustom, "fn">;
export function _custom<O = unknown, I = O>(
  Class: util.SchemaClass<schemas.$ZodCustom>,
  fn: (data: O) => unknown,
  _params: string | $ZodCustomParams | undefined
): schemas.$ZodCustom<O, I> {
  const norm = util.normalizeParams(_params);
  norm.abort ??= true; // default to abort:false
  const schema = new Class({
    type: "custom",
    check: "custom",
    fn: fn as any,
    ...norm,
  });

  return schema as any;
}

// export function _refine<T>(
//   Class: util.SchemaClass<schemas.$ZodCustom>,
//   fn: (arg: NoInfer<T>) => util.MaybeAsync<unknown>,
//   _params: string | $ZodCustomParams = {}
// ): checks.$ZodCheck<T> {
//   return _custom(Class, fn, _params);
// }
// same as _custom but defaults to abort:false
export function _refine<O = unknown, I = O>(
  Class: util.SchemaClass<schemas.$ZodCustom>,
  fn: (data: O) => unknown,
  _params: string | $ZodCustomParams | undefined
): schemas.$ZodCustom<O, I> {
  const schema = new Class({
    type: "custom",
    check: "custom",
    fn: fn as any,
    ...util.normalizeParams(_params),
  });

  return schema as any;
}

// export type $ZodCustomParams = CheckTypeParams<schemas.$ZodCustom, "fn">

/////////    STRINGBOOL   /////////

// stringbool
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

export function _stringbool(
  Classes: {
    Pipe?: typeof schemas.$ZodPipe;
    Boolean?: typeof schemas.$ZodBoolean;
    Transform?: typeof schemas.$ZodTransform;
    String?: typeof schemas.$ZodString;
  },
  _params?: string | $ZodStringBoolParams
): schemas.$ZodPipe<
  schemas.$ZodPipe<schemas.$ZodString, schemas.$ZodTransform<boolean, string>>,
  schemas.$ZodBoolean<boolean>
> {
  const params = util.normalizeParams(_params);

  let truthyArray = params.truthy ?? ["true", "1", "yes", "on", "y", "enabled"];
  let falsyArray = params.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  if (params.case !== "sensitive") {
    truthyArray = truthyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
    falsyArray = falsyArray.map((v) => (typeof v === "string" ? v.toLowerCase() : v));
  }

  const truthySet = new Set(truthyArray);
  const falsySet = new Set(falsyArray);

  const _Pipe = Classes.Pipe ?? schemas.$ZodPipe;
  const _Boolean = Classes.Boolean ?? schemas.$ZodBoolean;
  const _String = Classes.String ?? schemas.$ZodString;
  const _Transform = Classes.Transform ?? schemas.$ZodTransform;

  const tx = new _Transform({
    type: "transform",
    transform: (input, payload: schemas.ParsePayload<unknown>) => {
      let data: string = input as string;
      if (params.case !== "sensitive") data = data.toLowerCase();
      if (truthySet.has(data)) {
        return true;
      } else if (falsySet.has(data)) {
        return false;
      } else {
        payload.issues.push({
          code: "invalid_value",
          expected: "stringbool",
          values: [...truthySet, ...falsySet],
          input: payload.value,
          inst: tx,
        });
        return {} as never;
      }
    },
    error: params.error,
  });
  // params.error;

  const innerPipe = new _Pipe({
    type: "pipe",
    in: new _String({ type: "string", error: params.error }),
    out: tx,
    error: params.error,
  });

  const outerPipe = new _Pipe({
    type: "pipe",
    in: innerPipe,
    out: new _Boolean({
      type: "boolean",
      error: params.error,
    }),
    error: params.error,
  });
  return outerPipe as any;
}

export function _stringFormat<Format extends string>(
  Class: typeof schemas.$ZodCustomStringFormat,
  format: Format,
  fnOrRegex: ((arg: string) => util.MaybeAsync<unknown>) | RegExp,
  _params: string | $ZodStringFormatParams = {}
): schemas.$ZodCustomStringFormat<Format> {
  const params = util.normalizeParams(_params);
  const def: schemas.$ZodCustomStringFormatDef = {
    ...util.normalizeParams(_params),
    check: "string_format",
    type: "string",
    format,
    fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
    ...params,
  };
  if (fnOrRegex instanceof RegExp) {
    def.pattern = fnOrRegex;
  }

  const inst = new Class(def);
  return inst as any;
}
