import * as core from "../core/index.js";
import { util } from "../core/index.js";
import * as parse from "./parse.js";

type SomeType = core.SomeType;

export interface ZodMiniType<
  out Output = unknown,
  out Input = unknown,
  out Internals extends core.$ZodTypeInternals<Output, Input> = core.$ZodTypeInternals<Output, Input>,
> extends core.$ZodType<Output, Input, Internals> {
  check(...checks: (core.CheckFn<core.output<this>> | core.$ZodCheck<core.output<this>>)[]): this;
  clone(def?: Internals["def"], params?: { parent: boolean }): this;
  register<R extends core.$ZodRegistry>(
    registry: R,
    ...meta: this extends R["_schema"]
      ? undefined extends R["_meta"]
        ? [core.$replace<R["_meta"], this>?]
        : [core.$replace<R["_meta"], this>]
      : ["Incompatible schema"]
  ): this;
  brand<T extends PropertyKey = PropertyKey>(
    value?: T
  ): PropertyKey extends T ? this : this & Record<"_zod", Record<"output", core.output<this> & core.$brand<T>>>;

  def: Internals["def"];

  parse(data: unknown, params?: core.ParseContext<core.$ZodIssue>): core.output<this>;
  safeParse(data: unknown, params?: core.ParseContext<core.$ZodIssue>): util.SafeParseResult<core.output<this>>;
  parseAsync(data: unknown, params?: core.ParseContext<core.$ZodIssue>): Promise<core.output<this>>;
  safeParseAsync(
    data: unknown,
    params?: core.ParseContext<core.$ZodIssue>
  ): Promise<util.SafeParseResult<core.output<this>>>;
}

interface _ZodMiniType<out Internals extends core.$ZodTypeInternals = core.$ZodTypeInternals>
  extends ZodMiniType<any, any, Internals> {}

export const ZodMiniType: core.$constructor<ZodMiniType> = /*@__PURE__*/ core.$constructor(
  "ZodMiniType",
  (inst, def) => {
    if (!inst._zod) throw new Error("Uninitialized schema in ZodMiniType.");

    core.$ZodType.init(inst, def);
    inst.def = def;
    inst.parse = (data, params) => parse.parse(inst, data, params, { callee: inst.parse });
    inst.safeParse = (data, params) => parse.safeParse(inst, data, params);
    inst.parseAsync = async (data, params) => parse.parseAsync(inst, data, params, { callee: inst.parseAsync });
    inst.safeParseAsync = async (data, params) => parse.safeParseAsync(inst, data, params);
    inst.check = (...checks) => {
      return inst.clone(
        {
          ...def,
          checks: [
            ...(def.checks ?? []),
            ...checks.map((ch) =>
              typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch
            ),
          ],
        }
        // { parent: true }
      );
    };
    inst.clone = (_def, params) => core.clone(inst, _def, params);
    inst.brand = () => inst as any;
    inst.register = ((reg: any, meta: any) => {
      reg.add(inst, meta);
      return inst;
    }) as any;
  }
);

export interface _ZodMiniString<T extends core.$ZodStringInternals<unknown> = core.$ZodStringInternals<unknown>>
  extends _ZodMiniType<T>,
    core.$ZodString<T["input"]> {
  _zod: T;
}

// ZodMiniString
export interface ZodMiniString<Input = unknown>
  extends _ZodMiniString<core.$ZodStringInternals<Input>>,
    core.$ZodString<Input> {}
export const ZodMiniString: core.$constructor<ZodMiniString> = /*@__PURE__*/ core.$constructor(
  "ZodMiniString",
  (inst, def) => {
    core.$ZodString.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function string(params?: string | core.$ZodStringParams): ZodMiniString<string> {
  return core._string(ZodMiniString, params) as any;
}

// ZodMiniStringFormat
export interface ZodMiniStringFormat<Format extends string = string>
  extends _ZodMiniString<core.$ZodStringFormatInternals<Format>>,
    core.$ZodStringFormat<Format> {
  // _zod: core.$ZodStringFormatInternals<Format>;
}
export const ZodMiniStringFormat: core.$constructor<ZodMiniStringFormat> = /*@__PURE__*/ core.$constructor(
  "ZodMiniStringFormat",
  (inst, def) => {
    core.$ZodStringFormat.init(inst, def);
    ZodMiniString.init(inst, def);
  }
);

// ZodMiniEmail
export interface ZodMiniEmail extends _ZodMiniString<core.$ZodEmailInternals> {}
export const ZodMiniEmail: core.$constructor<ZodMiniEmail> = /*@__PURE__*/ core.$constructor(
  "ZodMiniEmail",
  (inst, def) => {
    core.$ZodEmail.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function email(params?: string | core.$ZodEmailParams): ZodMiniEmail {
  return core._email(ZodMiniEmail, params);
}

// ZodMiniGUID
export interface ZodMiniGUID extends _ZodMiniString<core.$ZodGUIDInternals> {
  // _zod: core.$ZodGUIDInternals;
}
export const ZodMiniGUID: core.$constructor<ZodMiniGUID> = /*@__PURE__*/ core.$constructor(
  "ZodMiniGUID",
  (inst, def) => {
    core.$ZodGUID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function guid(params?: string | core.$ZodGUIDParams): ZodMiniGUID {
  return core._guid(ZodMiniGUID, params);
}

// ZodMiniUUID
export interface ZodMiniUUID extends _ZodMiniString<core.$ZodUUIDInternals> {
  // _zod: core.$ZodUUIDInternals;
}
export const ZodMiniUUID: core.$constructor<ZodMiniUUID> = /*@__PURE__*/ core.$constructor(
  "ZodMiniUUID",
  (inst, def) => {
    core.$ZodUUID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function uuid(params?: string | core.$ZodUUIDParams): ZodMiniUUID {
  return core._uuid(ZodMiniUUID, params);
}

export function uuidv4(params?: string | core.$ZodUUIDv4Params): ZodMiniUUID {
  return core._uuidv4(ZodMiniUUID, params);
}

// ZodMiniUUIDv6

export function uuidv6(params?: string | core.$ZodUUIDv6Params): ZodMiniUUID {
  return core._uuidv6(ZodMiniUUID, params);
}

// ZodMiniUUIDv7

export function uuidv7(params?: string | core.$ZodUUIDv7Params): ZodMiniUUID {
  return core._uuidv7(ZodMiniUUID, params);
}

// ZodMiniURL
export interface ZodMiniURL extends _ZodMiniString<core.$ZodURLInternals> {
  // _zod: core.$ZodURLInternals;
}
export const ZodMiniURL: core.$constructor<ZodMiniURL> = /*@__PURE__*/ core.$constructor("ZodMiniURL", (inst, def) => {
  core.$ZodURL.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});

export function url(params?: string | core.$ZodURLParams): ZodMiniURL {
  return core._url(ZodMiniURL, params);
}

// ZodMiniEmoji
export interface ZodMiniEmoji extends _ZodMiniString<core.$ZodEmojiInternals> {
  // _zod: core.$ZodEmojiInternals;
}
export const ZodMiniEmoji: core.$constructor<ZodMiniEmoji> = /*@__PURE__*/ core.$constructor(
  "ZodMiniEmoji",
  (inst, def) => {
    core.$ZodEmoji.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function emoji(params?: string | core.$ZodEmojiParams): ZodMiniEmoji {
  return core._emoji(ZodMiniEmoji, params);
}

// ZodMiniNanoID
export interface ZodMiniNanoID extends _ZodMiniString<core.$ZodNanoIDInternals> {
  // _zod: core.$ZodNanoIDInternals;
}
export const ZodMiniNanoID: core.$constructor<ZodMiniNanoID> = /*@__PURE__*/ core.$constructor(
  "ZodMiniNanoID",
  (inst, def) => {
    core.$ZodNanoID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function nanoid(params?: string | core.$ZodNanoIDParams): ZodMiniNanoID {
  return core._nanoid(ZodMiniNanoID, params);
}

// ZodMiniCUID
export interface ZodMiniCUID extends _ZodMiniString<core.$ZodCUIDInternals> {
  // _zod: core.$ZodCUIDInternals;
}
export const ZodMiniCUID: core.$constructor<ZodMiniCUID> = /*@__PURE__*/ core.$constructor(
  "ZodMiniCUID",
  (inst, def) => {
    core.$ZodCUID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function cuid(params?: string | core.$ZodCUIDParams): ZodMiniCUID {
  return core._cuid(ZodMiniCUID, params);
}

// ZodMiniCUID2
export interface ZodMiniCUID2 extends _ZodMiniString<core.$ZodCUID2Internals> {
  // _zod: core.$ZodCUID2Internals;
}
export const ZodMiniCUID2: core.$constructor<ZodMiniCUID2> = /*@__PURE__*/ core.$constructor(
  "ZodMiniCUID2",
  (inst, def) => {
    core.$ZodCUID2.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function cuid2(params?: string | core.$ZodCUID2Params): ZodMiniCUID2 {
  return core._cuid2(ZodMiniCUID2, params);
}

// ZodMiniULID
export interface ZodMiniULID extends _ZodMiniString<core.$ZodULIDInternals> {
  // _zod: core.$ZodULIDInternals;
}
export const ZodMiniULID: core.$constructor<ZodMiniULID> = /*@__PURE__*/ core.$constructor(
  "ZodMiniULID",
  (inst, def) => {
    core.$ZodULID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function ulid(params?: string | core.$ZodULIDParams): ZodMiniULID {
  return core._ulid(ZodMiniULID, params);
}

// ZodMiniXID
export interface ZodMiniXID extends _ZodMiniString<core.$ZodXIDInternals> {
  // _zod: core.$ZodXIDInternals;
}
export const ZodMiniXID: core.$constructor<ZodMiniXID> = /*@__PURE__*/ core.$constructor("ZodMiniXID", (inst, def) => {
  core.$ZodXID.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});

export function xid(params?: string | core.$ZodXIDParams): ZodMiniXID {
  return core._xid(ZodMiniXID, params);
}

// ZodMiniKSUID
export interface ZodMiniKSUID extends _ZodMiniString<core.$ZodKSUIDInternals> {
  // _zod: core.$ZodKSUIDInternals;
}
export const ZodMiniKSUID: core.$constructor<ZodMiniKSUID> = /*@__PURE__*/ core.$constructor(
  "ZodMiniKSUID",
  (inst, def) => {
    core.$ZodKSUID.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function ksuid(params?: string | core.$ZodKSUIDParams): ZodMiniKSUID {
  return core._ksuid(ZodMiniKSUID, params);
}

// ZodMiniIPv4
export interface ZodMiniIPv4 extends _ZodMiniString<core.$ZodIPv4Internals> {
  // _zod: core.$ZodIPv4Internals;
}
export const ZodMiniIPv4: core.$constructor<ZodMiniIPv4> = /*@__PURE__*/ core.$constructor(
  "ZodMiniIPv4",
  (inst, def) => {
    core.$ZodIPv4.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function ipv4(params?: string | core.$ZodIPv4Params): ZodMiniIPv4 {
  return core._ipv4(ZodMiniIPv4, params);
}

// ZodMiniIPv6
export interface ZodMiniIPv6 extends _ZodMiniString<core.$ZodIPv6Internals> {
  // _zod: core.$ZodIPv6Internals;
}
export const ZodMiniIPv6: core.$constructor<ZodMiniIPv6> = /*@__PURE__*/ core.$constructor(
  "ZodMiniIPv6",
  (inst, def) => {
    core.$ZodIPv6.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function ipv6(params?: string | core.$ZodIPv6Params): ZodMiniIPv6 {
  return core._ipv6(ZodMiniIPv6, params);
}

// ZodMiniCIDRv4
export interface ZodMiniCIDRv4 extends _ZodMiniString<core.$ZodCIDRv4Internals> {
  // _zod: core.$ZodCIDRv4Internals;
}
export const ZodMiniCIDRv4: core.$constructor<ZodMiniCIDRv4> = /*@__PURE__*/ core.$constructor(
  "ZodMiniCIDRv4",
  (inst, def) => {
    core.$ZodCIDRv4.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function cidrv4(params?: string | core.$ZodCIDRv4Params): ZodMiniCIDRv4 {
  return core._cidrv4(ZodMiniCIDRv4, params);
}

// ZodMiniCIDRv6
export interface ZodMiniCIDRv6 extends _ZodMiniString<core.$ZodCIDRv6Internals> {
  // _zod: core.$ZodCIDRv6Internals;
}
export const ZodMiniCIDRv6: core.$constructor<ZodMiniCIDRv6> = /*@__PURE__*/ core.$constructor(
  "ZodMiniCIDRv6",
  (inst, def) => {
    core.$ZodCIDRv6.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function cidrv6(params?: string | core.$ZodCIDRv6Params): ZodMiniCIDRv6 {
  return core._cidrv6(ZodMiniCIDRv6, params);
}

// ZodMiniBase64
export interface ZodMiniBase64 extends _ZodMiniString<core.$ZodBase64Internals> {
  // _zod: core.$ZodBase64Internals;
}
export const ZodMiniBase64: core.$constructor<ZodMiniBase64> = /*@__PURE__*/ core.$constructor(
  "ZodMiniBase64",
  (inst, def) => {
    core.$ZodBase64.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);
export function base64(params?: string | core.$ZodBase64Params): ZodMiniBase64 {
  return core._base64(ZodMiniBase64, params);
}

// ZodMiniBase64URL
export interface ZodMiniBase64URL extends _ZodMiniString<core.$ZodBase64URLInternals> {
  // _zod: core.$ZodBase64URLInternals;
}
export const ZodMiniBase64URL: core.$constructor<ZodMiniBase64URL> = /*@__PURE__*/ core.$constructor(
  "ZodMiniBase64URL",
  (inst, def) => {
    core.$ZodBase64URL.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);
export function base64url(params?: string | core.$ZodBase64URLParams): ZodMiniBase64URL {
  return core._base64url(ZodMiniBase64URL, params);
}

// ZodMiniE164
export interface ZodMiniE164 extends _ZodMiniString<core.$ZodE164Internals> {
  // _zod: core.$ZodE164Internals;
}
export const ZodMiniE164: core.$constructor<ZodMiniE164> = /*@__PURE__*/ core.$constructor(
  "ZodMiniE164",
  (inst, def) => {
    core.$ZodE164.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function e164(params?: string | core.$ZodE164Params): ZodMiniE164 {
  return core._e164(ZodMiniE164, params);
}

// ZodMiniJWT
export interface ZodMiniJWT extends _ZodMiniString<core.$ZodJWTInternals> {
  // _zod: core.$ZodJWTInternals;
}
export const ZodMiniJWT: core.$constructor<ZodMiniJWT> = /*@__PURE__*/ core.$constructor("ZodMiniJWT", (inst, def) => {
  core.$ZodJWT.init(inst, def);
  ZodMiniStringFormat.init(inst, def);
});

export function jwt(params?: string | core.$ZodJWTParams): ZodMiniJWT {
  return core._jwt(ZodMiniJWT, params);
}

// ZodMiniCustomStringFormat
export interface ZodMiniCustomStringFormat<Format extends string = string>
  extends ZodMiniStringFormat<Format>,
    core.$ZodCustomStringFormat<Format> {
  _zod: core.$ZodCustomStringFormatInternals<Format>;
}
export const ZodMiniCustomStringFormat: core.$constructor<ZodMiniCustomStringFormat> = /*@__PURE__*/ core.$constructor(
  "ZodMiniCustomStringFormat",
  (inst, def) => {
    core.$ZodCustomStringFormat.init(inst, def);
    ZodMiniStringFormat.init(inst, def);
  }
);

export function stringFormat<Format extends string>(
  format: Format,
  fnOrRegex: ((arg: string) => util.MaybeAsync<unknown>) | RegExp,
  _params: string | core.$ZodStringFormatParams = {}
): ZodMiniCustomStringFormat<Format> {
  return core._stringFormat(ZodMiniCustomStringFormat, format, fnOrRegex, _params) as any;
}

// ZodMiniNumber
interface _ZodMiniNumber<T extends core.$ZodNumberInternals<unknown> = core.$ZodNumberInternals<unknown>>
  extends _ZodMiniType<T>,
    core.$ZodNumber<T["input"]> {
  _zod: T;
}
export interface ZodMiniNumber<Input = unknown>
  extends _ZodMiniNumber<core.$ZodNumberInternals<Input>>,
    core.$ZodNumber<Input> {}
export const ZodMiniNumber: core.$constructor<ZodMiniNumber> = /*@__PURE__*/ core.$constructor(
  "ZodMiniNumber",
  (inst, def) => {
    core.$ZodNumber.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function number(params?: string | core.$ZodNumberParams): ZodMiniNumber<number> {
  return core._number(ZodMiniNumber, params) as any;
}

// ZodMiniNumberFormat
export interface ZodMiniNumberFormat extends _ZodMiniNumber<core.$ZodNumberFormatInternals>, core.$ZodNumberFormat {}
export const ZodMiniNumberFormat: core.$constructor<ZodMiniNumberFormat> = /*@__PURE__*/ core.$constructor(
  "ZodMiniNumberFormat",
  (inst, def) => {
    core.$ZodNumberFormat.init(inst, def);
    ZodMiniNumber.init(inst, def);
  }
);

// int

export function int(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat {
  return core._int(ZodMiniNumberFormat, params);
}

// float32

export function float32(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat {
  return core._float32(ZodMiniNumberFormat, params);
}

// float64

export function float64(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat {
  return core._float64(ZodMiniNumberFormat, params);
}

// int32

export function int32(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat {
  return core._int32(ZodMiniNumberFormat, params);
}

// uint32

export function uint32(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat {
  return core._uint32(ZodMiniNumberFormat, params);
}

// ZodMiniBoolean
export interface ZodMiniBoolean<T = unknown> extends _ZodMiniType<core.$ZodBooleanInternals<T>> {
  // _zod: core.$ZodBooleanInternals<T>;
}
export const ZodMiniBoolean: core.$constructor<ZodMiniBoolean> = /*@__PURE__*/ core.$constructor(
  "ZodMiniBoolean",
  (inst, def) => {
    core.$ZodBoolean.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function boolean(params?: string | core.$ZodBooleanParams): ZodMiniBoolean<boolean> {
  return core._boolean(ZodMiniBoolean, params) as any;
}

// ZodMiniBigInt
export interface ZodMiniBigInt<T = unknown> extends _ZodMiniType<core.$ZodBigIntInternals<T>>, core.$ZodBigInt<T> {
  // _zod: core.$ZodBigIntInternals<T>;
}
export const ZodMiniBigInt: core.$constructor<ZodMiniBigInt> = /*@__PURE__*/ core.$constructor(
  "ZodMiniBigInt",
  (inst, def) => {
    core.$ZodBigInt.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function bigint(params?: string | core.$ZodBigIntParams): ZodMiniBigInt<bigint> {
  return core._bigint(ZodMiniBigInt, params) as any;
}

// bigint formats

// ZodMiniBigIntFormat
export interface ZodMiniBigIntFormat extends _ZodMiniType<core.$ZodBigIntFormatInternals> {
  // _zod: core.$ZodBigIntFormatInternals;
}
export const ZodMiniBigIntFormat: core.$constructor<ZodMiniBigIntFormat> = /*@__PURE__*/ core.$constructor(
  "ZodMiniBigIntFormat",
  (inst, def) => {
    core.$ZodBigIntFormat.init(inst, def);
    ZodMiniBigInt.init(inst, def);
  }
);

// int64

export function int64(params?: string | core.$ZodBigIntFormatParams): ZodMiniBigIntFormat {
  return core._int64(ZodMiniBigIntFormat, params);
}

// uint64

export function uint64(params?: string | core.$ZodBigIntFormatParams): ZodMiniBigIntFormat {
  return core._uint64(ZodMiniBigIntFormat, params);
}

// ZodMiniSymbol
export interface ZodMiniSymbol extends _ZodMiniType<core.$ZodSymbolInternals> {
  // _zod: core.$ZodSymbolInternals;
}
export const ZodMiniSymbol: core.$constructor<ZodMiniSymbol> = /*@__PURE__*/ core.$constructor(
  "ZodMiniSymbol",
  (inst, def) => {
    core.$ZodSymbol.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function symbol(params?: string | core.$ZodSymbolParams): ZodMiniSymbol {
  return core._symbol(ZodMiniSymbol, params) as any;
}

// ZodMiniUndefined
export interface ZodMiniUndefined extends _ZodMiniType<core.$ZodUndefinedInternals> {
  // _zod: core.$ZodUndefinedInternals;
}
export const ZodMiniUndefined: core.$constructor<ZodMiniUndefined> = /*@__PURE__*/ core.$constructor(
  "ZodMiniUndefined",
  (inst, def) => {
    core.$ZodUndefined.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

function _undefined(params?: string | core.$ZodUndefinedParams): ZodMiniUndefined {
  return core._undefined(ZodMiniUndefined, params) as any;
}
export { _undefined as undefined };

// ZodMiniNull
export interface ZodMiniNull extends _ZodMiniType<core.$ZodNullInternals> {
  // _zod: core.$ZodNullInternals;
}
export const ZodMiniNull: core.$constructor<ZodMiniNull> = /*@__PURE__*/ core.$constructor(
  "ZodMiniNull",
  (inst, def) => {
    core.$ZodNull.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

function _null(params?: string | core.$ZodNullParams): ZodMiniNull {
  return core._null(ZodMiniNull, params) as any;
}
export { _null as null };

// ZodMiniAny
export interface ZodMiniAny extends _ZodMiniType<core.$ZodAnyInternals> {
  // _zod: core.$ZodAnyInternals;
}
export const ZodMiniAny: core.$constructor<ZodMiniAny> = /*@__PURE__*/ core.$constructor("ZodMiniAny", (inst, def) => {
  core.$ZodAny.init(inst, def);
  ZodMiniType.init(inst, def);
});

export function any(): ZodMiniAny {
  return core._any(ZodMiniAny) as any;
}

// ZodMiniUnknown
export interface ZodMiniUnknown extends _ZodMiniType<core.$ZodUnknownInternals> {
  // _zod: core.$ZodUnknownInternals;
}
export const ZodMiniUnknown: core.$constructor<ZodMiniUnknown> = /*@__PURE__*/ core.$constructor(
  "ZodMiniUnknown",
  (inst, def) => {
    core.$ZodUnknown.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function unknown(): ZodMiniUnknown {
  return core._unknown(ZodMiniUnknown) as any;
}

// ZodMiniNever
export interface ZodMiniNever extends _ZodMiniType<core.$ZodNeverInternals> {
  // _zod: core.$ZodNeverInternals;
}
export const ZodMiniNever: core.$constructor<ZodMiniNever> = /*@__PURE__*/ core.$constructor(
  "ZodMiniNever",
  (inst, def) => {
    core.$ZodNever.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function never(params?: string | core.$ZodNeverParams): ZodMiniNever {
  return core._never(ZodMiniNever, params) as any;
}

// ZodMiniVoid
export interface ZodMiniVoid extends _ZodMiniType<core.$ZodVoidInternals> {
  // _zod: core.$ZodVoidInternals;
}
export const ZodMiniVoid: core.$constructor<ZodMiniVoid> = /*@__PURE__*/ core.$constructor(
  "ZodMiniVoid",
  (inst, def) => {
    core.$ZodVoid.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

function _void(params?: string | core.$ZodVoidParams): ZodMiniVoid {
  return core._void(ZodMiniVoid, params) as any;
}
export { _void as void };

// ZodMiniDate
export interface ZodMiniDate<T = unknown> extends _ZodMiniType<core.$ZodDateInternals<T>> {
  // _zod: core.$ZodDateInternals<T>;
}

export const ZodMiniDate: core.$constructor<ZodMiniDate> = /*@__PURE__*/ core.$constructor(
  "ZodMiniDate",
  (inst, def) => {
    core.$ZodDate.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function date(params?: string | core.$ZodDateParams): ZodMiniDate<Date> {
  return core._date(ZodMiniDate, params) as any;
}

// ZodMiniArray
export interface ZodMiniArray<T extends SomeType = core.$ZodType>
  extends _ZodMiniType<core.$ZodArrayInternals<T>>,
    core.$ZodArray<T> {
  // _zod: core.$ZodArrayInternals<T>;
}
export const ZodMiniArray: core.$constructor<ZodMiniArray> = /*@__PURE__*/ core.$constructor(
  "ZodMiniArray",
  (inst, def) => {
    core.$ZodArray.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function array<T extends SomeType>(element: T, params?: string | core.$ZodArrayParams): ZodMiniArray<T>;
export function array<T extends SomeType>(element: SomeType, params?: any): ZodMiniArray<T> {
  return new ZodMiniArray({
    type: "array",
    element: element as core.$ZodType,
    ...util.normalizeParams(params),
  }) as any;
}

// .keyof
export function keyof<T extends ZodMiniObject>(schema: T): ZodMiniLiteral<Exclude<keyof T["shape"], symbol>> {
  const shape = schema._zod.def.shape;
  return literal(Object.keys(shape)) as any;
}

// ZodMiniObject
export interface ZodMiniObject<
  /** @ts-ignore Cast variance */
  out Shape extends core.$ZodShape = core.$ZodShape,
  out Config extends core.$ZodObjectConfig = core.$strip,
> extends ZodMiniType<any, any, core.$ZodObjectInternals<Shape, Config>>,
    core.$ZodObject<Shape, Config> {
  shape: Shape;
}
export const ZodMiniObject: core.$constructor<ZodMiniObject> = /*@__PURE__*/ core.$constructor(
  "ZodMiniObject",
  (inst, def) => {
    core.$ZodObject.init(inst, def);
    ZodMiniType.init(inst, def);
    util.defineLazy(inst, "shape", () => def.shape);
  }
);
export function object<T extends core.$ZodLooseShape = Record<never, SomeType>>(
  shape?: T,
  params?: string | core.$ZodObjectParams
): ZodMiniObject<T, core.$strip> {
  const def: core.$ZodObjectDef = {
    type: "object",
    get shape() {
      util.assignProp(this, "shape", { ...shape });
      return this.shape;
    },
    ...util.normalizeParams(params),
  };
  return new ZodMiniObject(def) as any;
}

// strictObject
export function strictObject<T extends core.$ZodLooseShape>(
  shape: T,
  params?: string | core.$ZodObjectParams
): ZodMiniObject<T, core.$strict> {
  return new ZodMiniObject({
    type: "object",
    // shape: shape as core.$ZodLooseShape,
    get shape() {
      util.assignProp(this, "shape", { ...shape });
      return this.shape;
    },
    catchall: never(),
    ...util.normalizeParams(params),
  }) as any;
}

// looseObject
export function looseObject<T extends core.$ZodLooseShape>(
  shape: T,
  params?: string | core.$ZodObjectParams
): ZodMiniObject<T, core.$loose> {
  return new ZodMiniObject({
    type: "object",
    // shape: shape as core.$ZodLooseShape,
    get shape() {
      util.assignProp(this, "shape", { ...shape });
      return this.shape;
    },
    // get optional() {
    //   return util.optionalKeys(shape);
    // },
    catchall: unknown(),
    ...util.normalizeParams(params),
  }) as any;
}

// object methods
export function extend<T extends ZodMiniObject, U extends core.$ZodLooseShape>(
  schema: T,
  shape: U
): ZodMiniObject<util.Extend<T["shape"], U>, T["_zod"]["config"]> {
  return util.extend(schema, shape);
}

/** @deprecated Identical to `z.extend(A, B)` */
export function merge<T extends ZodMiniObject, U extends ZodMiniObject>(
  a: T,
  b: U
): ZodMiniObject<util.Extend<T["shape"], U["shape"]>, T["_zod"]["config"]>;
export function merge(schema: ZodMiniObject, shape: any): ZodMiniObject {
  return util.extend(schema, shape);
}

export function pick<T extends ZodMiniObject, M extends util.Mask<keyof T["shape"]>>(
  schema: T,
  mask: M
): ZodMiniObject<util.Flatten<Pick<T["shape"], keyof T["shape"] & keyof M>>, T["_zod"]["config"]> {
  return util.pick(schema, mask as any);
}

// .omit

export function omit<T extends ZodMiniObject, const M extends util.Mask<keyof T["shape"]>>(
  schema: T,
  mask: M
): ZodMiniObject<util.Flatten<Omit<T["shape"], keyof M>>, T["_zod"]["config"]> {
  return util.omit(schema, mask);
}

export function partial<T extends ZodMiniObject>(
  schema: T
): ZodMiniObject<
  {
    [k in keyof T["shape"]]: ZodMiniOptional<T["shape"][k]>;
  },
  T["_zod"]["config"]
>;
export function partial<T extends ZodMiniObject, M extends util.Mask<keyof T["shape"]>>(
  schema: T,
  mask: M
): ZodMiniObject<
  {
    [k in keyof T["shape"]]: k extends keyof M ? ZodMiniOptional<T["shape"][k]> : T["shape"][k];
  },
  T["_zod"]["config"]
>;
export function partial(schema: ZodMiniObject, mask?: object) {
  return util.partial(ZodMiniOptional, schema, mask);
}

export type RequiredInterfaceShape<
  Shape extends core.$ZodLooseShape,
  Keys extends PropertyKey = keyof Shape,
> = util.Identity<
  {
    [k in keyof Shape as k extends Keys ? k : never]: ZodMiniNonOptional<Shape[k]>;
  } & {
    [k in keyof Shape as k extends Keys ? never : k]: Shape[k];
  }
>;

export function required<T extends ZodMiniObject>(
  schema: T
): ZodMiniObject<
  {
    [k in keyof T["shape"]]: ZodMiniNonOptional<T["shape"][k]>;
  },
  T["_zod"]["config"]
>;
export function required<T extends ZodMiniObject, M extends util.Mask<keyof T["shape"]>>(
  schema: T,
  mask: M
): ZodMiniObject<
  util.Extend<
    T["shape"],
    {
      [k in keyof M & keyof T["shape"]]: ZodMiniNonOptional<T["shape"][k]>;
    }
  >,
  T["_zod"]["config"]
>;
export function required(schema: ZodMiniObject, mask?: object) {
  return util.required(ZodMiniNonOptional, schema, mask);
}

export function catchall<T extends ZodMiniObject, U extends SomeType>(
  inst: T,
  catchall: U
): ZodMiniObject<T["shape"], core.$catchall<U>> {
  return inst.clone({ ...inst._zod.def, catchall: catchall as any }) as any;
}

// ZodMiniUnion
export interface ZodMiniUnion<T extends readonly SomeType[] = readonly core.$ZodType[]>
  extends _ZodMiniType<core.$ZodUnionInternals<T>> {
  // _zod: core.$ZodUnionInternals<T>;
}
export const ZodMiniUnion: core.$constructor<ZodMiniUnion> = /*@__PURE__*/ core.$constructor(
  "ZodMiniUnion",
  (inst, def) => {
    core.$ZodUnion.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function union<const T extends readonly SomeType[]>(
  options: T,
  params?: string | core.$ZodUnionParams
): ZodMiniUnion<T> {
  return new ZodMiniUnion({
    type: "union",
    options: options as any as core.$ZodType[],
    ...util.normalizeParams(params),
  }) as any;
}

// ZodMiniDiscriminatedUnion
export interface ZodMiniDiscriminatedUnion<Options extends readonly SomeType[] = readonly core.$ZodType[]>
  extends ZodMiniUnion<Options> {
  _zod: core.$ZodDiscriminatedUnionInternals<Options>;
}
export const ZodMiniDiscriminatedUnion: core.$constructor<ZodMiniDiscriminatedUnion> = /*@__PURE__*/ core.$constructor(
  "ZodMiniDiscriminatedUnion",
  (inst, def) => {
    core.$ZodDiscriminatedUnion.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function discriminatedUnion<
  Types extends readonly [core.$ZodTypeDiscriminable, ...core.$ZodTypeDiscriminable[]],
>(
  discriminator: string,
  options: Types,
  params?: string | core.$ZodDiscriminatedUnionParams
): ZodMiniDiscriminatedUnion<Types> {
  return new ZodMiniDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...util.normalizeParams(params),
  }) as ZodMiniDiscriminatedUnion<Types>;
}

// ZodMiniIntersection
export interface ZodMiniIntersection<A extends SomeType = core.$ZodType, B extends SomeType = core.$ZodType>
  extends _ZodMiniType<core.$ZodIntersectionInternals<A, B>> {
  // _zod: core.$ZodIntersectionInternals<A, B>;
}
export const ZodMiniIntersection: core.$constructor<ZodMiniIntersection> = /*@__PURE__*/ core.$constructor(
  "ZodMiniIntersection",
  (inst, def) => {
    core.$ZodIntersection.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function intersection<T extends SomeType, U extends SomeType>(left: T, right: U): ZodMiniIntersection<T, U> {
  return new ZodMiniIntersection({
    type: "intersection",
    left: left as any as core.$ZodType,
    right: right as any as core.$ZodType,
  }) as any;
}

// ZodMiniTuple
export interface ZodMiniTuple<
  T extends util.TupleItems = readonly core.$ZodType[],
  Rest extends SomeType | null = core.$ZodType | null,
> extends _ZodMiniType<core.$ZodTupleInternals<T, Rest>> {
  // _zod: core.$ZodTupleInternals<T, Rest>;
}
export const ZodMiniTuple: core.$constructor<ZodMiniTuple> = /*@__PURE__*/ core.$constructor(
  "ZodMiniTuple",
  (inst, def) => {
    core.$ZodTuple.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function tuple<const T extends readonly [SomeType, ...SomeType[]]>(
  items: T,
  params?: string | core.$ZodTupleParams
): ZodMiniTuple<T, null>;
export function tuple<const T extends readonly [SomeType, ...SomeType[]], Rest extends SomeType>(
  items: T,
  rest: Rest,
  params?: string | core.$ZodTupleParams
): ZodMiniTuple<T, Rest>;
export function tuple(items: [], params?: string | core.$ZodTupleParams): ZodMiniTuple<[], null>;
export function tuple(
  items: SomeType[],
  _paramsOrRest?: string | core.$ZodTupleParams | SomeType,
  _params?: string | core.$ZodTupleParams
) {
  const hasRest = _paramsOrRest instanceof core.$ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new ZodMiniTuple({
    type: "tuple",
    items: items as any as core.$ZodType[],
    rest,
    ...util.normalizeParams(params),
  });
}

// ZodMiniRecord
export interface ZodMiniRecord<
  Key extends core.$ZodRecordKey = core.$ZodRecordKey,
  Value extends SomeType = core.$ZodType,
> extends _ZodMiniType<core.$ZodRecordInternals<Key, Value>> {
  // _zod: core.$ZodRecordInternals<Key, Value>;
}
export const ZodMiniRecord: core.$constructor<ZodMiniRecord> = /*@__PURE__*/ core.$constructor(
  "ZodMiniRecord",
  (inst, def) => {
    core.$ZodRecord.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function record<Key extends core.$ZodRecordKey, Value extends SomeType>(
  keyType: Key,
  valueType: Value,
  params?: string | core.$ZodRecordParams
): ZodMiniRecord<Key, Value> {
  return new ZodMiniRecord({
    type: "record",
    keyType,
    valueType: valueType as any as core.$ZodType,
    ...util.normalizeParams(params),
  }) as any;
}
export function partialRecord<Key extends core.$ZodRecordKey, Value extends SomeType>(
  keyType: Key,
  valueType: Value,
  params?: string | core.$ZodRecordParams
): ZodMiniRecord<Key & core.$partial, Value> {
  return new ZodMiniRecord({
    type: "record",
    keyType: union([keyType, never()]),
    valueType: valueType as any,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodMiniMap
export interface ZodMiniMap<Key extends SomeType = core.$ZodType, Value extends SomeType = core.$ZodType>
  extends _ZodMiniType<core.$ZodMapInternals<Key, Value>> {
  // _zod: core.$ZodMapInternals<Key, Value>;
}
export const ZodMiniMap: core.$constructor<ZodMiniMap> = /*@__PURE__*/ core.$constructor("ZodMiniMap", (inst, def) => {
  core.$ZodMap.init(inst, def);
  ZodMiniType.init(inst, def);
});

export function map<Key extends SomeType, Value extends SomeType>(
  keyType: Key,
  valueType: Value,
  params?: string | core.$ZodMapParams
): ZodMiniMap<Key, Value> {
  return new ZodMiniMap({
    type: "map",
    keyType: keyType as any as core.$ZodType,
    valueType: valueType as any as core.$ZodType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodMiniSet
export interface ZodMiniSet<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodSetInternals<T>> {
  // _zod: core.$ZodSetInternals<T>;
}
export const ZodMiniSet: core.$constructor<ZodMiniSet> = /*@__PURE__*/ core.$constructor("ZodMiniSet", (inst, def) => {
  core.$ZodSet.init(inst, def);
  ZodMiniType.init(inst, def);
});

export function set<Value extends SomeType>(valueType: Value, params?: string | core.$ZodSetParams): ZodMiniSet<Value> {
  return new ZodMiniSet({
    type: "set",
    valueType: valueType as any as core.$ZodType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodMiniEnum
export interface ZodMiniEnum<T extends util.EnumLike = util.EnumLike> extends _ZodMiniType<core.$ZodEnumInternals<T>> {
  // _zod: core.$ZodEnumInternals<T>;
}
export const ZodMiniEnum: core.$constructor<ZodMiniEnum> = /*@__PURE__*/ core.$constructor(
  "ZodMiniEnum",
  (inst, def) => {
    core.$ZodEnum.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

function _enum<const T extends readonly string[]>(
  values: T,
  params?: string | core.$ZodEnumParams
): ZodMiniEnum<util.ToEnum<T[number]>>;
function _enum<T extends util.EnumLike>(entries: T, params?: string | core.$ZodEnumParams): ZodMiniEnum<T>;
function _enum(values: any, params?: string | core.$ZodEnumParams) {
  const entries: any = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;

  return new ZodMiniEnum({
    type: "enum",
    entries,
    ...util.normalizeParams(params),
  }) as any;
}
export { _enum as enum };

/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
export function nativeEnum<T extends util.EnumLike>(entries: T, params?: string | core.$ZodEnumParams): ZodMiniEnum<T> {
  return new ZodMiniEnum({
    type: "enum",
    entries,
    ...util.normalizeParams(params),
  }) as any as ZodMiniEnum<T>;
}

// ZodMiniLiteral
export interface ZodMiniLiteral<T extends util.Literal = util.Literal>
  extends _ZodMiniType<core.$ZodLiteralInternals<T>> {
  // _zod: core.$ZodLiteralInternals<T>;
}
export const ZodMiniLiteral: core.$constructor<ZodMiniLiteral> = /*@__PURE__*/ core.$constructor(
  "ZodMiniLiteral",
  (inst, def) => {
    core.$ZodLiteral.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function literal<const T extends ReadonlyArray<util.Literal>>(
  value: T,
  params?: string | core.$ZodLiteralParams
): ZodMiniLiteral<T[number]>;
export function literal<const T extends util.Literal>(
  value: T,
  params?: string | core.$ZodLiteralParams
): ZodMiniLiteral<T>;
export function literal(value: any, params: any) {
  return new ZodMiniLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util.normalizeParams(params),
  });
}

// ZodMiniFile
export interface ZodMiniFile extends _ZodMiniType<core.$ZodFileInternals> {
  // _zod: core.$ZodFileInternals;
}
export const ZodMiniFile: core.$constructor<ZodMiniFile> = /*@__PURE__*/ core.$constructor(
  "ZodMiniFile",
  (inst, def) => {
    core.$ZodFile.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function file(params?: string | core.$ZodFileParams): ZodMiniFile {
  return core._file(ZodMiniFile, params) as any;
}

// ZodMiniTransform
export interface ZodMiniTransform<O = unknown, I = unknown> extends _ZodMiniType<core.$ZodTransformInternals<O, I>> {
  // _zod: core.$ZodTransformInternals<O, I>;
}
export const ZodMiniTransform: core.$constructor<ZodMiniTransform> = /*@__PURE__*/ core.$constructor(
  "ZodMiniTransform",
  (inst, def) => {
    core.$ZodTransform.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function transform<I = unknown, O = I>(
  fn: (input: I, ctx: core.ParsePayload) => O
): ZodMiniTransform<Awaited<O>, I> {
  return new ZodMiniTransform({
    type: "transform",
    transform: fn as any,
  }) as any;
}

// ZodMiniOptional
export interface ZodMiniOptional<T extends SomeType = core.$ZodType>
  extends _ZodMiniType<core.$ZodOptionalInternals<T>>,
    core.$ZodOptional<T> {
  // _zod: core.$ZodOptionalInternals<T>;
}
export const ZodMiniOptional: core.$constructor<ZodMiniOptional> = /*@__PURE__*/ core.$constructor(
  "ZodMiniOptional",
  (inst, def) => {
    core.$ZodOptional.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function optional<T extends SomeType>(innerType: T): ZodMiniOptional<T> {
  return new ZodMiniOptional({
    type: "optional",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// ZodMiniNullable
export interface ZodMiniNullable<T extends SomeType = core.$ZodType>
  extends _ZodMiniType<core.$ZodNullableInternals<T>> {
  // _zod: core.$ZodNullableInternals<T>;
}
export const ZodMiniNullable: core.$constructor<ZodMiniNullable> = /*@__PURE__*/ core.$constructor(
  "ZodMiniNullable",
  (inst, def) => {
    core.$ZodNullable.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function nullable<T extends SomeType>(innerType: T): ZodMiniNullable<T> {
  return new ZodMiniNullable({
    type: "nullable",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// nullish
export function nullish<T extends SomeType>(innerType: T): ZodMiniOptional<ZodMiniNullable<T>> {
  return optional(nullable(innerType));
}

// ZodMiniDefault
export interface ZodMiniDefault<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodDefaultInternals<T>> {
  // _zod: core.$ZodDefaultInternals<T>;
}
export const ZodMiniDefault: core.$constructor<ZodMiniDefault> = /*@__PURE__*/ core.$constructor(
  "ZodMiniDefault",
  (inst, def) => {
    core.$ZodDefault.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function _default<T extends SomeType>(
  innerType: T,
  defaultValue: util.NoUndefined<core.output<T>> | (() => util.NoUndefined<core.output<T>>)
): ZodMiniDefault<T> {
  return new ZodMiniDefault({
    type: "default",
    innerType: innerType as any as core.$ZodType,
    get defaultValue() {
      return typeof defaultValue === "function" ? (defaultValue as Function)() : defaultValue;
    },
  }) as any;
}

// ZodMiniPrefault
export interface ZodMiniPrefault<T extends SomeType = core.$ZodType>
  extends _ZodMiniType<core.$ZodPrefaultInternals<T>> {
  // _zod: core.$ZodPrefaultInternals<T>;
}
export const ZodMiniPrefault: core.$constructor<ZodMiniPrefault> = /*@__PURE__*/ core.$constructor(
  "ZodMiniPrefault",
  (inst, def) => {
    core.$ZodPrefault.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);
export function prefault<T extends SomeType>(
  innerType: T,
  defaultValue: util.NoUndefined<core.input<T>> | (() => util.NoUndefined<core.input<T>>)
): ZodMiniPrefault<T> {
  return new ZodMiniPrefault({
    type: "prefault",
    innerType: innerType as any as core.$ZodType,
    get defaultValue() {
      return typeof defaultValue === "function" ? (defaultValue as Function)() : defaultValue;
    },
  }) as any;
}

// ZodMiniNonOptional
export interface ZodMiniNonOptional<T extends SomeType = core.$ZodType>
  extends _ZodMiniType<core.$ZodNonOptionalInternals<T>> {
  // _zod: core.$ZodNonOptionalInternals<T>;
}
export const ZodMiniNonOptional: core.$constructor<ZodMiniNonOptional> = /*@__PURE__*/ core.$constructor(
  "ZodMiniNonOptional",
  (inst, def) => {
    core.$ZodNonOptional.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function nonoptional<T extends SomeType>(
  innerType: T,
  params?: string | core.$ZodNonOptionalParams
): ZodMiniNonOptional<T> {
  return new ZodMiniNonOptional({
    type: "nonoptional",
    innerType: innerType as any as core.$ZodType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodMiniSuccess
export interface ZodMiniSuccess<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodSuccessInternals<T>> {
  // _zod: core.$ZodSuccessInternals<T>;
}
export const ZodMiniSuccess: core.$constructor<ZodMiniSuccess> = /*@__PURE__*/ core.$constructor(
  "ZodMiniSuccess",
  (inst, def) => {
    core.$ZodSuccess.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function success<T extends SomeType>(innerType: T): ZodMiniSuccess<T> {
  return new ZodMiniSuccess({
    type: "success",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// ZodMiniCatch
export interface ZodMiniCatch<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodCatchInternals<T>> {
  // _zod: core.$ZodCatchInternals<T>;
}
export const ZodMiniCatch: core.$constructor<ZodMiniCatch> = /*@__PURE__*/ core.$constructor(
  "ZodMiniCatch",
  (inst, def) => {
    core.$ZodCatch.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

function _catch<T extends SomeType>(
  innerType: T,
  catchValue: core.output<T> | ((ctx: core.$ZodCatchCtx) => core.output<T>)
): ZodMiniCatch<T> {
  return new ZodMiniCatch({
    type: "catch",
    innerType: innerType as any as core.$ZodType,
    catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue) as (
      ctx: core.$ZodCatchCtx
    ) => core.output<T>,
  }) as any;
}
export { _catch as catch };

// ZodMiniNaN
export interface ZodMiniNaN extends _ZodMiniType<core.$ZodNaNInternals> {
  // _zod: core.$ZodNaNInternals;
}
export const ZodMiniNaN: core.$constructor<ZodMiniNaN> = /*@__PURE__*/ core.$constructor("ZodMiniNaN", (inst, def) => {
  core.$ZodNaN.init(inst, def);
  ZodMiniType.init(inst, def);
});

export function nan(params?: string | core.$ZodNaNParams): ZodMiniNaN {
  return core._nan(ZodMiniNaN, params) as any;
}

// ZodMiniPipe
export interface ZodMiniPipe<A extends SomeType = core.$ZodType, B extends SomeType = core.$ZodType>
  extends _ZodMiniType<core.$ZodPipeInternals<A, B>> {
  // _zod: core.$ZodPipeInternals<A, B>;
}
export const ZodMiniPipe: core.$constructor<ZodMiniPipe> = /*@__PURE__*/ core.$constructor(
  "ZodMiniPipe",
  (inst, def) => {
    core.$ZodPipe.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function pipe<
  const A extends SomeType,
  B extends core.$ZodType<unknown, core.output<A>> = core.$ZodType<unknown, core.output<A>>,
>(in_: A, out: B | core.$ZodType<unknown, core.output<A>>): ZodMiniPipe<A, B> {
  return new ZodMiniPipe({
    type: "pipe",
    in: in_ as any as core.$ZodType,
    out: out as any as core.$ZodType,
  }) as any;
}

// /** @deprecated Use `z.pipe()` and `z.transform()` instead. */
// export function preprocess<A, U extends core.$ZodType>(
//   fn: (arg: unknown, ctx: core.ParsePayload) => A,
//   schema: U,
//   params?: ZodPreprocessParams
// ): ZodPipe<ZodTransform<A, unknown>, U> {
//   return pipe(transform(fn as any, params), schema as any, params);
// }

// ZodMiniReadonly
export interface ZodMiniReadonly<T extends SomeType = core.$ZodType>
  extends _ZodMiniType<core.$ZodReadonlyInternals<T>> {
  // _zod: core.$ZodReadonlyInternals<T>;
}
export const ZodMiniReadonly: core.$constructor<ZodMiniReadonly> = /*@__PURE__*/ core.$constructor(
  "ZodMiniReadonly",
  (inst, def) => {
    core.$ZodReadonly.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function readonly<T extends SomeType>(innerType: T): ZodMiniReadonly<T> {
  return new ZodMiniReadonly({
    type: "readonly",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// ZodMiniTemplateLiteral
export interface ZodMiniTemplateLiteral<Template extends string = string>
  extends _ZodMiniType<core.$ZodTemplateLiteralInternals<Template>> {
  // _zod: core.$ZodTemplateLiteralInternals<Template>;
}
export const ZodMiniTemplateLiteral: core.$constructor<ZodMiniTemplateLiteral> = /*@__PURE__*/ core.$constructor(
  "ZodMiniTemplateLiteral",
  (inst, def) => {
    core.$ZodTemplateLiteral.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function templateLiteral<const Parts extends core.$ZodTemplateLiteralPart[]>(
  parts: Parts,
  params?: string | core.$ZodTemplateLiteralParams
): ZodMiniTemplateLiteral<core.$PartsToTemplateLiteral<Parts>> {
  return new ZodMiniTemplateLiteral({
    type: "template_literal",
    parts,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodMiniLazy
export interface ZodMiniLazy<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodLazyInternals<T>> {
  // _zod: core.$ZodLazyInternals<T>;
}
export const ZodMiniLazy: core.$constructor<ZodMiniLazy> = /*@__PURE__*/ core.$constructor(
  "ZodMiniLazy",
  (inst, def) => {
    core.$ZodLazy.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

// export function lazy<T extends object>(getter: () => T): T {
//   return util.createTransparentProxy<T>(getter);
// }
function _lazy<T extends SomeType>(getter: () => T): ZodMiniLazy<T> {
  return new ZodMiniLazy({
    type: "lazy",
    getter: getter as any,
  }) as any;
}
export { _lazy as lazy };

// ZodMiniPromise
export interface ZodMiniPromise<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodPromiseInternals<T>> {
  // _zod: core.$ZodPromiseInternals<T>;
}
export const ZodMiniPromise: core.$constructor<ZodMiniPromise> = /*@__PURE__*/ core.$constructor(
  "ZodMiniPromise",
  (inst, def) => {
    core.$ZodPromise.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

export function promise<T extends SomeType>(innerType: T): ZodMiniPromise<T> {
  return new ZodMiniPromise({
    type: "promise",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// ZodMiniCustom
export interface ZodMiniCustom<O = unknown, I = unknown> extends _ZodMiniType<core.$ZodCustomInternals<O, I>> {
  // _zod: core.$ZodCustomInternals<O, I>;
}
export const ZodMiniCustom: core.$constructor<ZodMiniCustom> = /*@__PURE__*/ core.$constructor(
  "ZodMiniCustom",
  (inst, def) => {
    core.$ZodCustom.init(inst, def);
    ZodMiniType.init(inst, def);
  }
);

// custom checks
export function check<O = unknown>(fn: core.CheckFn<O>, params?: string | core.$ZodCustomParams): core.$ZodCheck<O> {
  const ch = new core.$ZodCheck({
    check: "custom",
    ...util.normalizeParams(params),
  });

  ch._zod.check = fn;
  return ch;
}

// ZodCustom
// custom schema
export function custom<O = unknown, I = O>(
  fn?: (data: O) => unknown,
  _params?: string | core.$ZodCustomParams | undefined
): ZodMiniCustom<O, I> {
  return core._custom(ZodMiniCustom, fn ?? (() => true), _params) as any;
}

// refine
export function refine<T>(
  fn: (arg: NoInfer<T>) => util.MaybeAsync<unknown>,
  _params: string | core.$ZodCustomParams = {}
): core.$ZodCheck<T> {
  return core._refine(ZodMiniCustom, fn, _params);
}

// instanceof
abstract class Class {
  constructor(..._args: any[]) {}
}
function _instanceof<T extends typeof Class>(
  cls: T,
  params: core.$ZodCustomParams = {
    error: `Input not instance of ${cls.name}`,
  }
): ZodMiniCustom<InstanceType<T>, InstanceType<T>> {
  const inst = custom((data) => data instanceof cls, params);
  inst._zod.bag.Class = cls;
  return inst as any;
}
export { _instanceof as instanceof };

// stringbool
export const stringbool: (
  _params?: string | core.$ZodStringBoolParams
) => ZodMiniPipe<ZodMiniPipe<ZodMiniString, ZodMiniTransform<boolean, string>>, ZodMiniBoolean> = (...args) =>
  core._stringbool(
    {
      Pipe: ZodMiniPipe,
      Boolean: ZodMiniBoolean,
      String: ZodMiniString,
      Transform: ZodMiniTransform,
    },
    ...args
  ) as any;

// json

// json
type _ZodMiniJSONSchema = ZodMiniUnion<
  [
    ZodMiniString,
    ZodMiniNumber,
    ZodMiniBoolean,
    ZodMiniNull,
    ZodMiniArray<ZodMiniJSONSchema>,
    ZodMiniRecord<ZodMiniString<string>, ZodMiniJSONSchema>,
  ]
>;
type _ZodMiniJSONSchemaInternals = _ZodMiniJSONSchema["_zod"];

export interface ZodMiniJSONSchemaInternals extends _ZodMiniJSONSchemaInternals {
  output: util.JSONType;
  input: util.JSONType;
}
export interface ZodMiniJSONSchema extends _ZodMiniJSONSchema {
  _zod: ZodMiniJSONSchemaInternals;
}

export function json(): ZodMiniJSONSchema {
  const jsonSchema: any = _lazy(() => {
    return union([string(), number(), boolean(), _null(), array(jsonSchema), record(string(), jsonSchema)]);
  });
  return jsonSchema;
}
