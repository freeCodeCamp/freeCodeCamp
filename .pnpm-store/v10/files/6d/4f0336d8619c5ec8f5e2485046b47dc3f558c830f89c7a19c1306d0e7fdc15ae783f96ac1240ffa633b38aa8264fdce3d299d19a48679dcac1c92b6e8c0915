import * as core from "../core/index.js";
import { util } from "../core/index.js";

import * as checks from "./checks.js";
import * as iso from "./iso.js";
import * as parse from "./parse.js";

///////////////////////////////////////////
///////////////////////////////////////////
////////////                   ////////////
////////////      ZodType      ////////////
////////////                   ////////////
///////////////////////////////////////////
///////////////////////////////////////////

export interface RefinementCtx<T = unknown> extends core.ParsePayload<T> {
  addIssue(arg: string | core.$ZodRawIssue | Partial<core.$ZodIssueCustom>): void;
}

export interface ZodType<
  out Output = unknown,
  out Input = unknown,
  out Internals extends core.$ZodTypeInternals<Output, Input> = core.$ZodTypeInternals<Output, Input>,
> extends core.$ZodType<Output, Input, Internals> {
  def: Internals["def"];
  type: Internals["def"]["type"];

  /** @deprecated Use `.def` instead. */
  _def: Internals["def"];
  /** @deprecated Use `z.output<typeof schema>` instead. */
  _output: Internals["output"];
  /** @deprecated Use `z.input<typeof schema>` instead. */
  _input: Internals["input"];

  // base methods
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

  brand<T extends PropertyKey = PropertyKey>(value?: T): PropertyKey extends T ? this : core.$ZodBranded<this, T>;

  // parsing
  parse(data: unknown, params?: core.ParseContext<core.$ZodIssue>): core.output<this>;
  safeParse(data: unknown, params?: core.ParseContext<core.$ZodIssue>): parse.ZodSafeParseResult<core.output<this>>;
  parseAsync(data: unknown, params?: core.ParseContext<core.$ZodIssue>): Promise<core.output<this>>;
  safeParseAsync(
    data: unknown,
    params?: core.ParseContext<core.$ZodIssue>
  ): Promise<parse.ZodSafeParseResult<core.output<this>>>;
  spa: (
    data: unknown,
    params?: core.ParseContext<core.$ZodIssue>
  ) => Promise<parse.ZodSafeParseResult<core.output<this>>>;

  // refinements
  refine(check: (arg: core.output<this>) => unknown | Promise<unknown>, params?: string | core.$ZodCustomParams): this;
  /** @deprecated Use `.check()` instead. */
  superRefine(
    refinement: (arg: core.output<this>, ctx: RefinementCtx<core.output<this>>) => void | Promise<void>
  ): this;
  overwrite(fn: (x: core.output<this>) => core.output<this>): this;

  // wrappers
  optional(): ZodOptional<this>;
  nonoptional(params?: string | core.$ZodNonOptionalParams): ZodNonOptional<this>;
  nullable(): ZodNullable<this>;
  nullish(): ZodOptional<ZodNullable<this>>;
  default(def: core.output<this>): ZodDefault<this>;
  default(def: () => util.NoUndefined<core.output<this>>): ZodDefault<this>;
  prefault(def: () => core.input<this>): ZodPrefault<this>;
  prefault(def: core.input<this>): ZodPrefault<this>;
  array(): ZodArray<this>;
  or<T extends core.SomeType>(option: T): ZodUnion<[this, T]>;
  and<T extends core.SomeType>(incoming: T): ZodIntersection<this, T>;
  transform<NewOut>(
    transform: (arg: core.output<this>, ctx: RefinementCtx<core.output<this>>) => NewOut | Promise<NewOut>
  ): ZodPipe<this, ZodTransform<Awaited<NewOut>, core.output<this>>>;
  catch(def: core.output<this>): ZodCatch<this>;
  catch(def: (ctx: core.$ZodCatchCtx) => core.output<this>): ZodCatch<this>;
  pipe<T extends core.$ZodType<any, core.output<this>>>(
    target: T | core.$ZodType<any, core.output<this>>
  ): ZodPipe<this, T>;
  readonly(): ZodReadonly<this>;

  /** Returns a new instance that has been registered in `z.globalRegistry` with the specified description */
  describe(description: string): this;
  description?: string;
  /** Returns the metadata associated with this instance in `z.globalRegistry` */
  meta(): core.$replace<core.GlobalMeta, this> | undefined;
  /** Returns a new instance that has been registered in `z.globalRegistry` with the specified metadata */
  meta(data: core.$replace<core.GlobalMeta, this>): this;

  // helpers
  /** @deprecated Try safe-parsing `undefined` (this is what `isOptional` does internally):
   *
   * ```ts
   * const schema = z.string().optional();
   * const isOptional = schema.safeParse(undefined).success; // true
   * ```
   */
  isOptional(): boolean;
  /**
   * @deprecated Try safe-parsing `null` (this is what `isNullable` does internally):
   *
   * ```ts
   * const schema = z.string().nullable();
   * const isNullable = schema.safeParse(null).success; // true
   * ```
   */
  isNullable(): boolean;
}

export interface _ZodType<out Internals extends core.$ZodTypeInternals = core.$ZodTypeInternals>
  extends ZodType<any, any, Internals> {}

export const ZodType: core.$constructor<ZodType> = /*@__PURE__*/ core.$constructor("ZodType", (inst, def) => {
  core.$ZodType.init(inst, def);
  inst.def = def;
  Object.defineProperty(inst, "_def", { value: def });

  // base methods
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
  inst.clone = (def, params) => core.clone(inst, def, params);
  inst.brand = () => inst as any;
  inst.register = ((reg: any, meta: any) => {
    reg.add(inst, meta);
    return inst;
  }) as any;

  // parsing
  inst.parse = (data, params) => parse.parse(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => parse.safeParse(inst, data, params);
  inst.parseAsync = async (data, params) => parse.parseAsync(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => parse.safeParseAsync(inst, data, params);
  inst.spa = inst.safeParseAsync;

  // refinements
  inst.refine = (check, params) => inst.check(refine(check, params));
  inst.superRefine = (refinement) => inst.check(superRefine(refinement));
  inst.overwrite = (fn) => inst.check(checks.overwrite(fn));

  // wrappers
  inst.optional = () => optional(inst);
  inst.nullable = () => nullable(inst);
  inst.nullish = () => optional(nullable(inst));
  inst.nonoptional = (params) => nonoptional(inst, params);
  inst.array = () => array(inst);
  inst.or = (arg) => union([inst, arg]);
  inst.and = (arg) => intersection(inst, arg);
  inst.transform = (tx) => pipe(inst, transform(tx as any)) as never;
  inst.default = (def) => _default(inst, def);
  inst.prefault = (def) => prefault(inst, def);
  // inst.coalesce = (def, params) => coalesce(inst, def, params);
  inst.catch = (params) => _catch(inst, params);
  inst.pipe = (target) => pipe(inst, target);
  inst.readonly = () => readonly(inst);

  // meta
  inst.describe = (description) => {
    const cl = inst.clone();
    core.globalRegistry.add(cl, { description });
    return cl;
  };
  Object.defineProperty(inst, "description", {
    get() {
      return core.globalRegistry.get(inst)?.description;
    },
    configurable: true,
  });
  inst.meta = (...args: any) => {
    if (args.length === 0) {
      return core.globalRegistry.get(inst);
    }
    const cl = inst.clone();
    core.globalRegistry.add(cl, args[0]);
    return cl as any;
  };

  // helpers
  inst.isOptional = () => inst.safeParse(undefined).success;
  inst.isNullable = () => inst.safeParse(null).success;
  return inst;
});

// ZodString
export interface _ZodString<T extends core.$ZodStringInternals<unknown> = core.$ZodStringInternals<unknown>>
  extends _ZodType<T> {
  format: string | null;
  minLength: number | null;
  maxLength: number | null;

  // miscellaneous checks
  regex(regex: RegExp, params?: string | core.$ZodCheckRegexParams): this;
  includes(value: string, params?: core.$ZodCheckIncludesParams): this;
  startsWith(value: string, params?: string | core.$ZodCheckStartsWithParams): this;
  endsWith(value: string, params?: string | core.$ZodCheckEndsWithParams): this;
  min(minLength: number, params?: string | core.$ZodCheckMinLengthParams): this;
  max(maxLength: number, params?: string | core.$ZodCheckMaxLengthParams): this;
  length(len: number, params?: string | core.$ZodCheckLengthEqualsParams): this;
  nonempty(params?: string | core.$ZodCheckMinLengthParams): this;
  lowercase(params?: string | core.$ZodCheckLowerCaseParams): this;
  uppercase(params?: string | core.$ZodCheckUpperCaseParams): this;

  // transforms
  trim(): this;
  normalize(form?: "NFC" | "NFD" | "NFKC" | "NFKD" | (string & {})): this;
  toLowerCase(): this;
  toUpperCase(): this;
}

/** @internal */
export const _ZodString: core.$constructor<_ZodString> = /*@__PURE__*/ core.$constructor("_ZodString", (inst, def) => {
  core.$ZodString.init(inst, def);
  ZodType.init(inst, def);

  const bag = inst._zod.bag;
  inst.format = bag.format ?? null;
  inst.minLength = bag.minimum ?? null;
  inst.maxLength = bag.maximum ?? null;

  // validations
  inst.regex = (...args) => inst.check(checks.regex(...args));
  inst.includes = (...args) => inst.check(checks.includes(...args));
  inst.startsWith = (...args) => inst.check(checks.startsWith(...args));
  inst.endsWith = (...args) => inst.check(checks.endsWith(...args));
  inst.min = (...args) => inst.check(checks.minLength(...args));
  inst.max = (...args) => inst.check(checks.maxLength(...args));
  inst.length = (...args) => inst.check(checks.length(...args));
  inst.nonempty = (...args) => inst.check(checks.minLength(1, ...args));
  inst.lowercase = (params) => inst.check(checks.lowercase(params));
  inst.uppercase = (params) => inst.check(checks.uppercase(params));

  // transforms
  inst.trim = () => inst.check(checks.trim());
  inst.normalize = (...args) => inst.check(checks.normalize(...args));
  inst.toLowerCase = () => inst.check(checks.toLowerCase());
  inst.toUpperCase = () => inst.check(checks.toUpperCase());
});

export interface ZodString extends _ZodString<core.$ZodStringInternals<string>> {
  // string format checks

  /** @deprecated Use `z.email()` instead. */
  email(params?: string | core.$ZodCheckEmailParams): this;
  /** @deprecated Use `z.url()` instead. */
  url(params?: string | core.$ZodCheckURLParams): this;
  /** @deprecated Use `z.jwt()` instead. */
  jwt(params?: string | core.$ZodCheckJWTParams): this;
  /** @deprecated Use `z.emoji()` instead. */
  emoji(params?: string | core.$ZodCheckEmojiParams): this;
  /** @deprecated Use `z.guid()` instead. */
  guid(params?: string | core.$ZodCheckGUIDParams): this;
  /** @deprecated Use `z.uuid()` instead. */
  uuid(params?: string | core.$ZodCheckUUIDParams): this;
  /** @deprecated Use `z.uuid()` instead. */
  uuidv4(params?: string | core.$ZodCheckUUIDParams): this;
  /** @deprecated Use `z.uuid()` instead. */
  uuidv6(params?: string | core.$ZodCheckUUIDParams): this;
  /** @deprecated Use `z.uuid()` instead. */
  uuidv7(params?: string | core.$ZodCheckUUIDParams): this;
  /** @deprecated Use `z.nanoid()` instead. */
  nanoid(params?: string | core.$ZodCheckNanoIDParams): this;
  /** @deprecated Use `z.guid()` instead. */
  guid(params?: string | core.$ZodCheckGUIDParams): this;
  /** @deprecated Use `z.cuid()` instead. */
  cuid(params?: string | core.$ZodCheckCUIDParams): this;
  /** @deprecated Use `z.cuid2()` instead. */
  cuid2(params?: string | core.$ZodCheckCUID2Params): this;
  /** @deprecated Use `z.ulid()` instead. */
  ulid(params?: string | core.$ZodCheckULIDParams): this;
  /** @deprecated Use `z.base64()` instead. */
  base64(params?: string | core.$ZodCheckBase64Params): this;
  /** @deprecated Use `z.base64url()` instead. */
  base64url(params?: string | core.$ZodCheckBase64URLParams): this;
  // /** @deprecated Use `z.jsonString()` instead. */
  // jsonString(params?: string | core.$ZodCheckJSONStringParams): this;
  /** @deprecated Use `z.xid()` instead. */
  xid(params?: string | core.$ZodCheckXIDParams): this;
  /** @deprecated Use `z.ksuid()` instead. */
  ksuid(params?: string | core.$ZodCheckKSUIDParams): this;
  // /** @deprecated Use `z.ipv4()` or `z.ipv6()` instead. */
  // ip(params?: string | (core.$ZodCheckIPv4Params & { version?: "v4" | "v6" })): ZodUnion<[this, this]>;
  /** @deprecated Use `z.ipv4()` instead. */
  ipv4(params?: string | core.$ZodCheckIPv4Params): this;
  /** @deprecated Use `z.ipv6()` instead. */
  ipv6(params?: string | core.$ZodCheckIPv6Params): this;
  /** @deprecated Use `z.cidrv4()` instead. */
  cidrv4(params?: string | core.$ZodCheckCIDRv4Params): this;
  /** @deprecated Use `z.cidrv6()` instead. */
  cidrv6(params?: string | core.$ZodCheckCIDRv6Params): this;
  /** @deprecated Use `z.e164()` instead. */
  e164(params?: string | core.$ZodCheckE164Params): this;

  // ISO 8601 checks
  /** @deprecated Use `z.iso.datetime()` instead. */
  datetime(params?: string | core.$ZodCheckISODateTimeParams): this;
  /** @deprecated Use `z.iso.date()` instead. */
  date(params?: string | core.$ZodCheckISODateParams): this;
  /** @deprecated Use `z.iso.time()` instead. */
  time(
    params?:
      | string
      // | {
      //     message?: string | undefined;
      //     precision?: number | null;
      //   }
      | core.$ZodCheckISOTimeParams
  ): this;
  /** @deprecated Use `z.iso.duration()` instead. */
  duration(params?: string | core.$ZodCheckISODurationParams): this;
}

export const ZodString: core.$constructor<ZodString> = /*@__PURE__*/ core.$constructor("ZodString", (inst, def) => {
  core.$ZodString.init(inst, def);
  _ZodString.init(inst, def);

  inst.email = (params) => inst.check(core._email(ZodEmail, params));
  inst.url = (params) => inst.check(core._url(ZodURL, params));
  inst.jwt = (params) => inst.check(core._jwt(ZodJWT, params));
  inst.emoji = (params) => inst.check(core._emoji(ZodEmoji, params));
  inst.guid = (params) => inst.check(core._guid(ZodGUID, params));
  inst.uuid = (params) => inst.check(core._uuid(ZodUUID, params));
  inst.uuidv4 = (params) => inst.check(core._uuidv4(ZodUUID, params));
  inst.uuidv6 = (params) => inst.check(core._uuidv6(ZodUUID, params));
  inst.uuidv7 = (params) => inst.check(core._uuidv7(ZodUUID, params));
  inst.nanoid = (params) => inst.check(core._nanoid(ZodNanoID, params));
  inst.guid = (params) => inst.check(core._guid(ZodGUID, params));
  inst.cuid = (params) => inst.check(core._cuid(ZodCUID, params));
  inst.cuid2 = (params) => inst.check(core._cuid2(ZodCUID2, params));
  inst.ulid = (params) => inst.check(core._ulid(ZodULID, params));
  inst.base64 = (params) => inst.check(core._base64(ZodBase64, params));
  inst.base64url = (params) => inst.check(core._base64url(ZodBase64URL, params));
  inst.xid = (params) => inst.check(core._xid(ZodXID, params));
  inst.ksuid = (params) => inst.check(core._ksuid(ZodKSUID, params));
  inst.ipv4 = (params) => inst.check(core._ipv4(ZodIPv4, params));
  inst.ipv6 = (params) => inst.check(core._ipv6(ZodIPv6, params));
  inst.cidrv4 = (params) => inst.check(core._cidrv4(ZodCIDRv4, params));
  inst.cidrv6 = (params) => inst.check(core._cidrv6(ZodCIDRv6, params));
  inst.e164 = (params) => inst.check(core._e164(ZodE164, params));

  // iso
  inst.datetime = (params) => inst.check(iso.datetime(params as any));
  inst.date = (params) => inst.check(iso.date(params as any));
  inst.time = (params) => inst.check(iso.time(params as any));
  inst.duration = (params) => inst.check(iso.duration(params as any));
});

export function string(params?: string | core.$ZodStringParams): ZodString;
export function string<T extends string>(params?: string | core.$ZodStringParams): core.$ZodType<T, T>;
export function string(params?: string | core.$ZodStringParams): ZodString {
  return core._string(ZodString, params) as any;
}

// ZodStringFormat
export interface ZodStringFormat<Format extends string = string>
  extends _ZodString<core.$ZodStringFormatInternals<Format>> {}
export const ZodStringFormat: core.$constructor<ZodStringFormat> = /*@__PURE__*/ core.$constructor(
  "ZodStringFormat",
  (inst, def) => {
    core.$ZodStringFormat.init(inst, def);
    _ZodString.init(inst, def);
  }
);

// ZodEmail
export interface ZodEmail extends ZodStringFormat<"email"> {
  _zod: core.$ZodEmailInternals;
}
export const ZodEmail: core.$constructor<ZodEmail> = /*@__PURE__*/ core.$constructor("ZodEmail", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function email(params?: string | core.$ZodEmailParams): ZodEmail {
  return core._email(ZodEmail, params);
}

// ZodGUID
export interface ZodGUID extends ZodStringFormat<"guid"> {
  _zod: core.$ZodGUIDInternals;
}
export const ZodGUID: core.$constructor<ZodGUID> = /*@__PURE__*/ core.$constructor("ZodGUID", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function guid(params?: string | core.$ZodGUIDParams): ZodGUID {
  return core._guid(ZodGUID, params);
}

// ZodUUID
export interface ZodUUID extends ZodStringFormat<"uuid"> {
  _zod: core.$ZodUUIDInternals;
}
export const ZodUUID: core.$constructor<ZodUUID> = /*@__PURE__*/ core.$constructor("ZodUUID", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function uuid(params?: string | core.$ZodUUIDParams): ZodUUID {
  return core._uuid(ZodUUID, params);
}

export function uuidv4(params?: string | core.$ZodUUIDv4Params): ZodUUID {
  return core._uuidv4(ZodUUID, params);
}

// ZodUUIDv6

export function uuidv6(params?: string | core.$ZodUUIDv6Params): ZodUUID {
  return core._uuidv6(ZodUUID, params);
}

// ZodUUIDv7

export function uuidv7(params?: string | core.$ZodUUIDv7Params): ZodUUID {
  return core._uuidv7(ZodUUID, params);
}

// ZodURL
export interface ZodURL extends ZodStringFormat<"url"> {
  _zod: core.$ZodURLInternals;
}
export const ZodURL: core.$constructor<ZodURL> = /*@__PURE__*/ core.$constructor("ZodURL", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function url(params?: string | core.$ZodURLParams): ZodURL {
  return core._url(ZodURL, params);
}

// ZodEmoji
export interface ZodEmoji extends ZodStringFormat<"emoji"> {
  _zod: core.$ZodEmojiInternals;
}
export const ZodEmoji: core.$constructor<ZodEmoji> = /*@__PURE__*/ core.$constructor("ZodEmoji", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function emoji(params?: string | core.$ZodEmojiParams): ZodEmoji {
  return core._emoji(ZodEmoji, params);
}

// ZodNanoID
export interface ZodNanoID extends ZodStringFormat<"nanoid"> {
  _zod: core.$ZodNanoIDInternals;
}
export const ZodNanoID: core.$constructor<ZodNanoID> = /*@__PURE__*/ core.$constructor("ZodNanoID", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function nanoid(params?: string | core.$ZodNanoIDParams): ZodNanoID {
  return core._nanoid(ZodNanoID, params);
}

// ZodCUID
export interface ZodCUID extends ZodStringFormat<"cuid"> {
  _zod: core.$ZodCUIDInternals;
}
export const ZodCUID: core.$constructor<ZodCUID> = /*@__PURE__*/ core.$constructor("ZodCUID", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function cuid(params?: string | core.$ZodCUIDParams): ZodCUID {
  return core._cuid(ZodCUID, params);
}

// ZodCUID2
export interface ZodCUID2 extends ZodStringFormat<"cuid2"> {
  _zod: core.$ZodCUID2Internals;
}
export const ZodCUID2: core.$constructor<ZodCUID2> = /*@__PURE__*/ core.$constructor("ZodCUID2", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function cuid2(params?: string | core.$ZodCUID2Params): ZodCUID2 {
  return core._cuid2(ZodCUID2, params);
}

// ZodULID
export interface ZodULID extends ZodStringFormat<"ulid"> {
  _zod: core.$ZodULIDInternals;
}
export const ZodULID: core.$constructor<ZodULID> = /*@__PURE__*/ core.$constructor("ZodULID", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function ulid(params?: string | core.$ZodULIDParams): ZodULID {
  return core._ulid(ZodULID, params);
}

// ZodXID
export interface ZodXID extends ZodStringFormat<"xid"> {
  _zod: core.$ZodXIDInternals;
}
export const ZodXID: core.$constructor<ZodXID> = /*@__PURE__*/ core.$constructor("ZodXID", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function xid(params?: string | core.$ZodXIDParams): ZodXID {
  return core._xid(ZodXID, params);
}

// ZodKSUID
export interface ZodKSUID extends ZodStringFormat<"ksuid"> {
  _zod: core.$ZodKSUIDInternals;
}
export const ZodKSUID: core.$constructor<ZodKSUID> = /*@__PURE__*/ core.$constructor("ZodKSUID", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function ksuid(params?: string | core.$ZodKSUIDParams): ZodKSUID {
  return core._ksuid(ZodKSUID, params);
}

// ZodIP
// export interface ZodIP extends ZodStringFormat<"ip"> {
//   _zod: core.$ZodIPInternals;
// }
// export const ZodIP: core.$constructor<ZodIP> = /*@__PURE__*/ core.$constructor("ZodIP", (inst, def) => {
//   // ZodStringFormat.init(inst, def);
//   core.$ZodIP.init(inst, def);
//   ZodStringFormat.init(inst, def);
// });

// export function ip(params?: string | core.$ZodIPParams): ZodIP {
//   return core._ip(ZodIP, params);
// }

// ZodIPv4
export interface ZodIPv4 extends ZodStringFormat<"ipv4"> {
  _zod: core.$ZodIPv4Internals;
}
export const ZodIPv4: core.$constructor<ZodIPv4> = /*@__PURE__*/ core.$constructor("ZodIPv4", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function ipv4(params?: string | core.$ZodIPv4Params): ZodIPv4 {
  return core._ipv4(ZodIPv4, params);
}

// ZodIPv6
export interface ZodIPv6 extends ZodStringFormat<"ipv6"> {
  _zod: core.$ZodIPv6Internals;
}
export const ZodIPv6: core.$constructor<ZodIPv6> = /*@__PURE__*/ core.$constructor("ZodIPv6", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
export function ipv6(params?: string | core.$ZodIPv6Params): ZodIPv6 {
  return core._ipv6(ZodIPv6, params);
}

// ZodCIDRv4
export interface ZodCIDRv4 extends ZodStringFormat<"cidrv4"> {
  _zod: core.$ZodCIDRv4Internals;
}
export const ZodCIDRv4: core.$constructor<ZodCIDRv4> = /*@__PURE__*/ core.$constructor("ZodCIDRv4", (inst, def) => {
  core.$ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function cidrv4(params?: string | core.$ZodCIDRv4Params): ZodCIDRv4 {
  return core._cidrv4(ZodCIDRv4, params);
}

// ZodCIDRv6
export interface ZodCIDRv6 extends ZodStringFormat<"cidrv6"> {
  _zod: core.$ZodCIDRv6Internals;
}
export const ZodCIDRv6: core.$constructor<ZodCIDRv6> = /*@__PURE__*/ core.$constructor("ZodCIDRv6", (inst, def) => {
  core.$ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function cidrv6(params?: string | core.$ZodCIDRv6Params): ZodCIDRv6 {
  return core._cidrv6(ZodCIDRv6, params);
}

// ZodBase64
export interface ZodBase64 extends ZodStringFormat<"base64"> {
  _zod: core.$ZodBase64Internals;
}
export const ZodBase64: core.$constructor<ZodBase64> = /*@__PURE__*/ core.$constructor("ZodBase64", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
export function base64(params?: string | core.$ZodBase64Params): ZodBase64 {
  return core._base64(ZodBase64, params);
}

// ZodBase64URL
export interface ZodBase64URL extends ZodStringFormat<"base64url"> {
  _zod: core.$ZodBase64URLInternals;
}
export const ZodBase64URL: core.$constructor<ZodBase64URL> = /*@__PURE__*/ core.$constructor(
  "ZodBase64URL",
  (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodBase64URL.init(inst, def);
    ZodStringFormat.init(inst, def);
  }
);
export function base64url(params?: string | core.$ZodBase64URLParams): ZodBase64URL {
  return core._base64url(ZodBase64URL, params);
}

// ZodE164
export interface ZodE164 extends ZodStringFormat<"e164"> {
  _zod: core.$ZodE164Internals;
}
export const ZodE164: core.$constructor<ZodE164> = /*@__PURE__*/ core.$constructor("ZodE164", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function e164(params?: string | core.$ZodE164Params): ZodE164 {
  return core._e164(ZodE164, params);
}

// ZodJWT
export interface ZodJWT extends ZodStringFormat<"jwt"> {
  _zod: core.$ZodJWTInternals;
}
export const ZodJWT: core.$constructor<ZodJWT> = /*@__PURE__*/ core.$constructor("ZodJWT", (inst, def) => {
  // ZodStringFormat.init(inst, def);
  core.$ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});

export function jwt(params?: string | core.$ZodJWTParams): ZodJWT {
  return core._jwt(ZodJWT, params);
}

// ZodCustomStringFormat
export interface ZodCustomStringFormat<Format extends string = string>
  extends ZodStringFormat<Format>,
    core.$ZodCustomStringFormat<Format> {
  _zod: core.$ZodCustomStringFormatInternals<Format>;
}
export const ZodCustomStringFormat: core.$constructor<ZodCustomStringFormat> = /*@__PURE__*/ core.$constructor(
  "ZodCustomStringFormat",
  (inst, def) => {
    // ZodStringFormat.init(inst, def);
    core.$ZodCustomStringFormat.init(inst, def);
    ZodStringFormat.init(inst, def);
  }
);
export function stringFormat<Format extends string>(
  format: Format,
  fnOrRegex: ((arg: string) => util.MaybeAsync<unknown>) | RegExp,
  _params: string | core.$ZodStringFormatParams = {}
): ZodCustomStringFormat<Format> {
  return core._stringFormat(ZodCustomStringFormat, format, fnOrRegex, _params) as any;
}

// ZodNumber
export interface _ZodNumber<Internals extends core.$ZodNumberInternals = core.$ZodNumberInternals>
  extends _ZodType<Internals> {
  gt(value: number, params?: string | core.$ZodCheckGreaterThanParams): this;
  /** Identical to .min() */
  gte(value: number, params?: string | core.$ZodCheckGreaterThanParams): this;
  min(value: number, params?: string | core.$ZodCheckGreaterThanParams): this;
  lt(value: number, params?: string | core.$ZodCheckLessThanParams): this;
  /** Identical to .max() */
  lte(value: number, params?: string | core.$ZodCheckLessThanParams): this;
  max(value: number, params?: string | core.$ZodCheckLessThanParams): this;
  /** Consider `z.int()` instead. This API is considered *legacy*; it will never be removed but a better alternative exists. */
  int(params?: string | core.$ZodCheckNumberFormatParams): this;
  /** @deprecated This is now identical to `.int()`. Only numbers in the safe integer range are accepted. */
  safe(params?: string | core.$ZodCheckNumberFormatParams): this;
  positive(params?: string | core.$ZodCheckGreaterThanParams): this;
  nonnegative(params?: string | core.$ZodCheckGreaterThanParams): this;
  negative(params?: string | core.$ZodCheckLessThanParams): this;
  nonpositive(params?: string | core.$ZodCheckLessThanParams): this;
  multipleOf(value: number, params?: string | core.$ZodCheckMultipleOfParams): this;
  /** @deprecated Use `.multipleOf()` instead. */
  step(value: number, params?: string | core.$ZodCheckMultipleOfParams): this;

  /** @deprecated In v4 and later, z.number() does not allow infinite values by default. This is a no-op. */
  finite(params?: unknown): this;

  minValue: number | null;
  maxValue: number | null;
  /** @deprecated Check the `format` property instead.  */
  isInt: boolean;
  /** @deprecated Number schemas no longer accept infinite values, so this always returns `true`. */
  isFinite: boolean;
  format: string | null;
}

export interface ZodNumber extends _ZodNumber<core.$ZodNumberInternals<number>> {}

export const ZodNumber: core.$constructor<ZodNumber> = /*@__PURE__*/ core.$constructor("ZodNumber", (inst, def) => {
  core.$ZodNumber.init(inst, def);
  ZodType.init(inst, def);

  inst.gt = (value, params) => inst.check(checks.gt(value, params));
  inst.gte = (value, params) => inst.check(checks.gte(value, params));
  inst.min = (value, params) => inst.check(checks.gte(value, params));
  inst.lt = (value, params) => inst.check(checks.lt(value, params));
  inst.lte = (value, params) => inst.check(checks.lte(value, params));
  inst.max = (value, params) => inst.check(checks.lte(value, params));
  inst.int = (params) => inst.check(int(params));
  inst.safe = (params) => inst.check(int(params));
  inst.positive = (params) => inst.check(checks.gt(0, params));
  inst.nonnegative = (params) => inst.check(checks.gte(0, params));
  inst.negative = (params) => inst.check(checks.lt(0, params));
  inst.nonpositive = (params) => inst.check(checks.lte(0, params));
  inst.multipleOf = (value, params) => inst.check(checks.multipleOf(value, params));
  inst.step = (value, params) => inst.check(checks.multipleOf(value, params));

  // inst.finite = (params) => inst.check(core.finite(params));
  inst.finite = () => inst;

  const bag = inst._zod.bag;
  inst.minValue =
    Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue =
    Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
});

export function number(params?: string | core.$ZodNumberParams): ZodNumber {
  return core._number(ZodNumber, params) as any;
}

// ZodNumberFormat
export interface ZodNumberFormat extends ZodNumber {
  _zod: core.$ZodNumberFormatInternals;
}
export const ZodNumberFormat: core.$constructor<ZodNumberFormat> = /*@__PURE__*/ core.$constructor(
  "ZodNumberFormat",
  (inst, def) => {
    core.$ZodNumberFormat.init(inst, def);
    ZodNumber.init(inst, def);
  }
);

// int
export interface ZodInt extends ZodNumberFormat {}
export function int(params?: string | core.$ZodCheckNumberFormatParams): ZodInt {
  return core._int(ZodNumberFormat, params);
}

// float32
export interface ZodFloat32 extends ZodNumberFormat {}
export function float32(params?: string | core.$ZodCheckNumberFormatParams): ZodFloat32 {
  return core._float32(ZodNumberFormat, params);
}

// float64
export interface ZodFloat64 extends ZodNumberFormat {}
export function float64(params?: string | core.$ZodCheckNumberFormatParams): ZodFloat64 {
  return core._float64(ZodNumberFormat, params);
}

// int32
export interface ZodInt32 extends ZodNumberFormat {}
export function int32(params?: string | core.$ZodCheckNumberFormatParams): ZodInt32 {
  return core._int32(ZodNumberFormat, params);
}

// uint32
export interface ZodUInt32 extends ZodNumberFormat {}
export function uint32(params?: string | core.$ZodCheckNumberFormatParams): ZodUInt32 {
  return core._uint32(ZodNumberFormat, params);
}

// boolean
export interface _ZodBoolean<T extends core.$ZodBooleanInternals = core.$ZodBooleanInternals> extends _ZodType<T> {}
export interface ZodBoolean extends _ZodBoolean<core.$ZodBooleanInternals<boolean>> {}
export const ZodBoolean: core.$constructor<ZodBoolean> = /*@__PURE__*/ core.$constructor("ZodBoolean", (inst, def) => {
  core.$ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
});

export function boolean(params?: string | core.$ZodBooleanParams): ZodBoolean {
  return core._boolean(ZodBoolean, params) as any;
}

// bigint
export interface _ZodBigInt<T extends core.$ZodBigIntInternals = core.$ZodBigIntInternals> extends _ZodType<T> {
  gte(value: bigint, params?: string | core.$ZodCheckGreaterThanParams): this;
  /** Alias of `.gte()` */
  min(value: bigint, params?: string | core.$ZodCheckGreaterThanParams): this;
  gt(value: bigint, params?: string | core.$ZodCheckGreaterThanParams): this;
  /** Alias of `.lte()` */
  lte(value: bigint, params?: string | core.$ZodCheckLessThanParams): this;
  max(value: bigint, params?: string | core.$ZodCheckLessThanParams): this;
  lt(value: bigint, params?: string | core.$ZodCheckLessThanParams): this;
  positive(params?: string | core.$ZodCheckGreaterThanParams): this;
  negative(params?: string | core.$ZodCheckLessThanParams): this;
  nonpositive(params?: string | core.$ZodCheckLessThanParams): this;
  nonnegative(params?: string | core.$ZodCheckGreaterThanParams): this;
  multipleOf(value: bigint, params?: string | core.$ZodCheckMultipleOfParams): this;

  minValue: bigint | null;
  maxValue: bigint | null;
  format: string | null;
}

export interface ZodBigInt extends _ZodBigInt<core.$ZodBigIntInternals<bigint>> {}
export const ZodBigInt: core.$constructor<ZodBigInt> = /*@__PURE__*/ core.$constructor("ZodBigInt", (inst, def) => {
  core.$ZodBigInt.init(inst, def);
  ZodType.init(inst, def);

  inst.gte = (value, params) => inst.check(checks.gte(value, params));
  inst.min = (value, params) => inst.check(checks.gte(value, params));
  inst.gt = (value, params) => inst.check(checks.gt(value, params));
  inst.gte = (value, params) => inst.check(checks.gte(value, params));
  inst.min = (value, params) => inst.check(checks.gte(value, params));
  inst.lt = (value, params) => inst.check(checks.lt(value, params));
  inst.lte = (value, params) => inst.check(checks.lte(value, params));
  inst.max = (value, params) => inst.check(checks.lte(value, params));
  inst.positive = (params) => inst.check(checks.gt(BigInt(0), params));
  inst.negative = (params) => inst.check(checks.lt(BigInt(0), params));
  inst.nonpositive = (params) => inst.check(checks.lte(BigInt(0), params));
  inst.nonnegative = (params) => inst.check(checks.gte(BigInt(0), params));
  inst.multipleOf = (value, params) => inst.check(checks.multipleOf(value, params));

  const bag = inst._zod.bag;
  inst.minValue = bag.minimum ?? null;
  inst.maxValue = bag.maximum ?? null;
  inst.format = bag.format ?? null;
});

export function bigint(params?: string | core.$ZodBigIntParams): ZodBigInt {
  return core._bigint(ZodBigInt, params) as any;
}
// bigint formats

// ZodBigIntFormat
export interface ZodBigIntFormat extends ZodBigInt {
  _zod: core.$ZodBigIntFormatInternals;
}
export const ZodBigIntFormat: core.$constructor<ZodBigIntFormat> = /*@__PURE__*/ core.$constructor(
  "ZodBigIntFormat",
  (inst, def) => {
    core.$ZodBigIntFormat.init(inst, def);
    ZodBigInt.init(inst, def);
  }
);

// int64
export function int64(params?: string | core.$ZodBigIntFormatParams): ZodBigIntFormat {
  return core._int64(ZodBigIntFormat, params);
}

// uint64
export function uint64(params?: string | core.$ZodBigIntFormatParams): ZodBigIntFormat {
  return core._uint64(ZodBigIntFormat, params);
}

// symbol
export interface ZodSymbol extends _ZodType<core.$ZodSymbolInternals> {}
export const ZodSymbol: core.$constructor<ZodSymbol> = /*@__PURE__*/ core.$constructor("ZodSymbol", (inst, def) => {
  core.$ZodSymbol.init(inst, def);
  ZodType.init(inst, def);
});

export function symbol(params?: string | core.$ZodSymbolParams): ZodSymbol {
  return core._symbol(ZodSymbol, params);
}

// ZodUndefined
export interface ZodUndefined extends _ZodType<core.$ZodUndefinedInternals> {}
export const ZodUndefined: core.$constructor<ZodUndefined> = /*@__PURE__*/ core.$constructor(
  "ZodUndefined",
  (inst, def) => {
    core.$ZodUndefined.init(inst, def);
    ZodType.init(inst, def);
  }
);

function _undefined(params?: string | core.$ZodUndefinedParams): ZodUndefined {
  return core._undefined(ZodUndefined, params);
}
export { _undefined as undefined };

// ZodNull
export interface ZodNull extends _ZodType<core.$ZodNullInternals> {}
export const ZodNull: core.$constructor<ZodNull> = /*@__PURE__*/ core.$constructor("ZodNull", (inst, def) => {
  core.$ZodNull.init(inst, def);
  ZodType.init(inst, def);
});

function _null(params?: string | core.$ZodNullParams): ZodNull {
  return core._null(ZodNull, params);
}
export { _null as null };

// ZodAny
export interface ZodAny extends _ZodType<core.$ZodAnyInternals> {}
export const ZodAny: core.$constructor<ZodAny> = /*@__PURE__*/ core.$constructor("ZodAny", (inst, def) => {
  core.$ZodAny.init(inst, def);
  ZodType.init(inst, def);
});

export function any(): ZodAny {
  return core._any(ZodAny);
}

// ZodUnknown
export interface ZodUnknown extends _ZodType<core.$ZodUnknownInternals> {}
export const ZodUnknown: core.$constructor<ZodUnknown> = /*@__PURE__*/ core.$constructor("ZodUnknown", (inst, def) => {
  core.$ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
});

export function unknown(): ZodUnknown {
  return core._unknown(ZodUnknown);
}

// ZodNever
export interface ZodNever extends _ZodType<core.$ZodNeverInternals> {}
export const ZodNever: core.$constructor<ZodNever> = /*@__PURE__*/ core.$constructor("ZodNever", (inst, def) => {
  core.$ZodNever.init(inst, def);
  ZodType.init(inst, def);
});

export function never(params?: string | core.$ZodNeverParams): ZodNever {
  return core._never(ZodNever, params);
}

// ZodVoid
export interface ZodVoid extends _ZodType<core.$ZodVoidInternals> {}
export const ZodVoid: core.$constructor<ZodVoid> = /*@__PURE__*/ core.$constructor("ZodVoid", (inst, def) => {
  core.$ZodVoid.init(inst, def);
  ZodType.init(inst, def);
});

function _void(params?: string | core.$ZodVoidParams): ZodVoid {
  return core._void(ZodVoid, params);
}
export { _void as void };

// ZodDate
export interface _ZodDate<T extends core.$ZodDateInternals = core.$ZodDateInternals> extends _ZodType<T> {
  min(value: number | Date, params?: string | core.$ZodCheckGreaterThanParams): this;
  max(value: number | Date, params?: string | core.$ZodCheckLessThanParams): this;

  /** @deprecated Not recommended. */
  minDate: Date | null;
  /** @deprecated Not recommended. */
  maxDate: Date | null;
}

export interface ZodDate extends _ZodDate<core.$ZodDateInternals<Date>> {}
export const ZodDate: core.$constructor<ZodDate> = /*@__PURE__*/ core.$constructor("ZodDate", (inst, def) => {
  core.$ZodDate.init(inst, def);
  ZodType.init(inst, def);

  inst.min = (value, params) => inst.check(checks.gte(value, params));
  inst.max = (value, params) => inst.check(checks.lte(value, params));

  const c = inst._zod.bag;
  inst.minDate = c.minimum ? new Date(c.minimum) : null;
  inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});

export function date(params?: string | core.$ZodDateParams): ZodDate {
  return core._date(ZodDate, params);
}

// ZodArray
export interface ZodArray<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodArrayInternals<T>>,
    core.$ZodArray<T> {
  element: T;
  min(minLength: number, params?: string | core.$ZodCheckMinLengthParams): this;
  nonempty(params?: string | core.$ZodCheckMinLengthParams): this;
  max(maxLength: number, params?: string | core.$ZodCheckMaxLengthParams): this;
  length(len: number, params?: string | core.$ZodCheckLengthEqualsParams): this;

  unwrap(): T;
}
export const ZodArray: core.$constructor<ZodArray> = /*@__PURE__*/ core.$constructor("ZodArray", (inst, def) => {
  core.$ZodArray.init(inst, def);
  ZodType.init(inst, def);

  inst.element = def.element as any;
  inst.min = (minLength, params) => inst.check(checks.minLength(minLength, params));
  inst.nonempty = (params) => inst.check(checks.minLength(1, params));
  inst.max = (maxLength, params) => inst.check(checks.maxLength(maxLength, params));
  inst.length = (len, params) => inst.check(checks.length(len, params));

  inst.unwrap = () => inst.element;
});

export function array<T extends core.SomeType>(element: T, params?: string | core.$ZodArrayParams): ZodArray<T> {
  return core._array(ZodArray, element as any, params) as any;
}

// .keyof
export function keyof<T extends ZodObject>(schema: T): ZodLiteral<Exclude<keyof T["_zod"]["output"], symbol>> {
  const shape = schema._zod.def.shape;
  return literal(Object.keys(shape)) as any;
}

// ZodObject

export interface ZodObject<
  /** @ts-ignore Cast variance */
  out Shape extends core.$ZodShape = core.$ZodLooseShape,
  out Config extends core.$ZodObjectConfig = core.$strip,
> extends _ZodType<core.$ZodObjectInternals<Shape, Config>>,
    core.$ZodObject<Shape, Config> {
  shape: Shape;

  keyof(): ZodEnum<util.ToEnum<keyof Shape & string>>;
  /** Define a schema to validate all unrecognized keys. This overrides the existing strict/loose behavior. */
  catchall<T extends core.SomeType>(schema: T): ZodObject<Shape, core.$catchall<T>>;

  /** @deprecated Use `z.looseObject()` or `.loose()` instead. */
  passthrough(): ZodObject<Shape, core.$loose>;
  /** Consider `z.looseObject(A.shape)` instead */
  loose(): ZodObject<Shape, core.$loose>;

  /** Consider `z.strictObject(A.shape)` instead */
  strict(): ZodObject<Shape, core.$strict>;

  /** This is the default behavior. This method call is likely unnecessary. */
  strip(): ZodObject<Shape, core.$strip>;

  extend<U extends core.$ZodLooseShape & Partial<Record<keyof Shape, core.SomeType>>>(
    shape: U
  ): ZodObject<util.Extend<Shape, U>, Config>;

  /**
   * @deprecated Use spread syntax and the `.shape` property to combine two object schemas:
   *
   * ```ts
   * const A = z.object({ a: z.string() });
   * const B = z.object({ b: z.number() });
   *
   * const C = z.object({
   *    ...A.shape,
   *    ...B.shape
   * });
   * ```
   */
  merge<U extends ZodObject>(other: U): ZodObject<util.Extend<Shape, U["shape"]>, U["_zod"]["config"]>;

  pick<M extends util.Mask<keyof Shape>>(
    mask: M
  ): ZodObject<util.Flatten<Pick<Shape, Extract<keyof Shape, keyof M>>>, Config>;

  omit<M extends util.Mask<keyof Shape>>(
    mask: M
  ): ZodObject<util.Flatten<Omit<Shape, Extract<keyof Shape, keyof M>>>, Config>;

  partial(): ZodObject<
    {
      [k in keyof Shape]: ZodOptional<Shape[k]>;
    },
    Config
  >;
  partial<M extends util.Mask<keyof Shape>>(
    mask: M
  ): ZodObject<
    {
      [k in keyof Shape]: k extends keyof M
        ? // Shape[k] extends OptionalInSchema
          //   ? Shape[k]
          //   :
          ZodOptional<Shape[k]>
        : Shape[k];
    },
    Config
  >;

  // required
  required(): ZodObject<
    {
      [k in keyof Shape]: ZodNonOptional<Shape[k]>;
    },
    Config
  >;
  required<M extends util.Mask<keyof Shape>>(
    mask: M
  ): ZodObject<
    {
      [k in keyof Shape]: k extends keyof M ? ZodNonOptional<Shape[k]> : Shape[k];
    },
    Config
  >;
}

export const ZodObject: core.$constructor<ZodObject> = /*@__PURE__*/ core.$constructor("ZodObject", (inst, def) => {
  core.$ZodObject.init(inst, def);
  ZodType.init(inst, def);

  util.defineLazy(inst, "shape", () => def.shape);
  inst.keyof = () => _enum(Object.keys(inst._zod.def.shape)) as any;
  inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall: catchall as any as core.$ZodType }) as any;
  inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  // inst.nonstrict = () => inst.clone({ ...inst._zod.def, catchall: api.unknown() });
  inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown() });
  inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never() });
  inst.strip = () => inst.clone({ ...inst._zod.def, catchall: undefined });

  inst.extend = (incoming: any) => {
    return util.extend(inst, incoming);
  };
  inst.merge = (other) => util.merge(inst, other);
  inst.pick = (mask) => util.pick(inst, mask);
  inst.omit = (mask) => util.omit(inst, mask);
  inst.partial = (...args: any[]) => util.partial(ZodOptional, inst, args[0] as object);
  inst.required = (...args: any[]) => util.required(ZodNonOptional, inst, args[0] as object);
});

export function object<T extends core.$ZodLooseShape = Partial<Record<never, core.SomeType>>>(
  shape?: T,
  params?: string | core.$ZodObjectParams
): ZodObject<util.Writeable<T>, core.$strip> {
  const def: core.$ZodObjectDef = {
    type: "object",
    get shape() {
      util.assignProp(this, "shape", { ...shape });
      return this.shape;
    },
    ...util.normalizeParams(params),
  };
  return new ZodObject(def) as any;
}

// strictObject

export function strictObject<T extends core.$ZodLooseShape>(
  shape: T,
  params?: string | core.$ZodObjectParams
): ZodObject<T, core.$strict> {
  return new ZodObject({
    type: "object",
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
): ZodObject<T, core.$loose> {
  return new ZodObject({
    type: "object",
    get shape() {
      util.assignProp(this, "shape", { ...shape });
      return this.shape;
    },
    catchall: unknown(),
    ...util.normalizeParams(params),
  }) as any;
}

// ZodUnion
export interface ZodUnion<T extends readonly core.SomeType[] = readonly core.$ZodType[]>
  extends _ZodType<core.$ZodUnionInternals<T>>,
    core.$ZodUnion<T> {
  options: T;
}
export const ZodUnion: core.$constructor<ZodUnion> = /*@__PURE__*/ core.$constructor("ZodUnion", (inst, def) => {
  core.$ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst.options = def.options;
});

export function union<const T extends readonly core.SomeType[]>(
  options: T,
  params?: string | core.$ZodUnionParams
): ZodUnion<T> {
  return new ZodUnion({
    type: "union",
    options: options as any as core.$ZodType[],
    ...util.normalizeParams(params),
  }) as any;
}

// ZodDiscriminatedUnion
export interface ZodDiscriminatedUnion<Options extends readonly core.SomeType[] = readonly core.$ZodType[]>
  extends ZodUnion<Options>,
    core.$ZodDiscriminatedUnion<Options> {
  _zod: core.$ZodDiscriminatedUnionInternals<Options>;
}
export const ZodDiscriminatedUnion: core.$constructor<ZodDiscriminatedUnion> = /*@__PURE__*/ core.$constructor(
  "ZodDiscriminatedUnion",
  (inst, def) => {
    ZodUnion.init(inst, def);
    core.$ZodDiscriminatedUnion.init(inst, def);
  }
);

export function discriminatedUnion<
  Types extends readonly [core.$ZodTypeDiscriminable, ...core.$ZodTypeDiscriminable[]],
>(
  discriminator: string,
  options: Types,
  params?: string | core.$ZodDiscriminatedUnionParams
): ZodDiscriminatedUnion<Types> {
  // const [options, params] = args;
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodIntersection
export interface ZodIntersection<A extends core.SomeType = core.$ZodType, B extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodIntersectionInternals<A, B>>,
    core.$ZodIntersection<A, B> {}
export const ZodIntersection: core.$constructor<ZodIntersection> = /*@__PURE__*/ core.$constructor(
  "ZodIntersection",
  (inst, def) => {
    core.$ZodIntersection.init(inst, def);
    ZodType.init(inst, def);
  }
);

export function intersection<T extends core.SomeType, U extends core.SomeType>(
  left: T,
  right: U
): ZodIntersection<T, U> {
  return new ZodIntersection({
    type: "intersection",
    left: left as any as core.$ZodType,
    right: right as any as core.$ZodType,
  }) as any;
}

// ZodTuple
export interface ZodTuple<
  T extends util.TupleItems = readonly core.$ZodType[],
  Rest extends core.SomeType | null = core.$ZodType | null,
> extends _ZodType<core.$ZodTupleInternals<T, Rest>>,
    core.$ZodTuple<T, Rest> {
  rest<Rest extends core.SomeType = core.$ZodType>(rest: Rest): ZodTuple<T, Rest>;
}
export const ZodTuple: core.$constructor<ZodTuple> = /*@__PURE__*/ core.$constructor("ZodTuple", (inst, def) => {
  core.$ZodTuple.init(inst, def);
  ZodType.init(inst, def);
  inst.rest = (rest) =>
    inst.clone({
      ...inst._zod.def,
      rest: rest as any as core.$ZodType,
    }) as any;
});

export function tuple<T extends readonly [core.SomeType, ...core.SomeType[]]>(
  items: T,
  params?: string | core.$ZodTupleParams
): ZodTuple<T, null>;
export function tuple<T extends readonly [core.SomeType, ...core.SomeType[]], Rest extends core.SomeType>(
  items: T,
  rest: Rest,
  params?: string | core.$ZodTupleParams
): ZodTuple<T, Rest>;
export function tuple(items: [], params?: string | core.$ZodTupleParams): ZodTuple<[], null>;
export function tuple(
  items: core.SomeType[],
  _paramsOrRest?: string | core.$ZodTupleParams | core.SomeType,
  _params?: string | core.$ZodTupleParams
) {
  const hasRest = _paramsOrRest instanceof core.$ZodType;
  const params = hasRest ? _params : _paramsOrRest;
  const rest = hasRest ? _paramsOrRest : null;
  return new ZodTuple({
    type: "tuple",
    items: items as any as core.$ZodType[],
    rest,
    ...util.normalizeParams(params),
  });
}

// ZodRecord
export interface ZodRecord<
  Key extends core.$ZodRecordKey = core.$ZodRecordKey,
  Value extends core.SomeType = core.$ZodType,
> extends _ZodType<core.$ZodRecordInternals<Key, Value>>,
    core.$ZodRecord<Key, Value> {
  keyType: Key;
  valueType: Value;
}
export const ZodRecord: core.$constructor<ZodRecord> = /*@__PURE__*/ core.$constructor("ZodRecord", (inst, def) => {
  core.$ZodRecord.init(inst, def);
  ZodType.init(inst, def);

  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});

export function record<Key extends core.$ZodRecordKey, Value extends core.SomeType>(
  keyType: Key,
  valueType: Value,
  params?: string | core.$ZodRecordParams
): ZodRecord<Key, Value> {
  return new ZodRecord({
    type: "record",
    keyType,
    valueType: valueType as any as core.$ZodType,
    ...util.normalizeParams(params),
  }) as any;
}
// type alksjf = core.output<core.$ZodRecordKey>;
export function partialRecord<Key extends core.$ZodRecordKey, Value extends core.SomeType>(
  keyType: Key,
  valueType: Value,
  params?: string | core.$ZodRecordParams
): ZodRecord<Key & core.$partial, Value> {
  return new ZodRecord({
    type: "record",
    keyType: union([keyType, never()]),
    valueType: valueType as any,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodMap
export interface ZodMap<Key extends core.SomeType = core.$ZodType, Value extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodMapInternals<Key, Value>>,
    core.$ZodMap<Key, Value> {
  keyType: Key;
  valueType: Value;
}
export const ZodMap: core.$constructor<ZodMap> = /*@__PURE__*/ core.$constructor("ZodMap", (inst, def) => {
  core.$ZodMap.init(inst, def);
  ZodType.init(inst, def);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});

export function map<Key extends core.SomeType, Value extends core.SomeType>(
  keyType: Key,
  valueType: Value,
  params?: string | core.$ZodMapParams
): ZodMap<Key, Value> {
  return new ZodMap({
    type: "map",
    keyType: keyType as any as core.$ZodType,
    valueType: valueType as any as core.$ZodType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodSet
export interface ZodSet<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodSetInternals<T>>,
    core.$ZodSet<T> {
  min(minSize: number, params?: string | core.$ZodCheckMinSizeParams): this;
  /** */
  nonempty(params?: string | core.$ZodCheckMinSizeParams): this;
  max(maxSize: number, params?: string | core.$ZodCheckMaxSizeParams): this;
  size(size: number, params?: string | core.$ZodCheckSizeEqualsParams): this;
}
export const ZodSet: core.$constructor<ZodSet> = /*@__PURE__*/ core.$constructor("ZodSet", (inst, def) => {
  core.$ZodSet.init(inst, def);
  ZodType.init(inst, def);

  inst.min = (...args) => inst.check(core._minSize(...args));
  inst.nonempty = (params) => inst.check(core._minSize(1, params));
  inst.max = (...args) => inst.check(core._maxSize(...args));
  inst.size = (...args) => inst.check(core._size(...args));
});

export function set<Value extends core.SomeType>(
  valueType: Value,
  params?: string | core.$ZodSetParams
): ZodSet<Value> {
  return new ZodSet({
    type: "set",
    valueType: valueType as any as core.$ZodType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodEnum
export interface ZodEnum<
  /** @ts-ignore Cast variance */
  out T extends util.EnumLike = util.EnumLike,
> extends _ZodType<core.$ZodEnumInternals<T>>,
    core.$ZodEnum<T> {
  enum: T;
  options: Array<T[keyof T]>;

  extract<const U extends readonly (keyof T)[]>(
    values: U,
    params?: string | core.$ZodEnumParams
  ): ZodEnum<util.Flatten<Pick<T, U[number]>>>;
  exclude<const U extends readonly (keyof T)[]>(
    values: U,
    params?: string | core.$ZodEnumParams
  ): ZodEnum<util.Flatten<Omit<T, U[number]>>>;
}
export const ZodEnum: core.$constructor<ZodEnum> = /*@__PURE__*/ core.$constructor("ZodEnum", (inst, def) => {
  core.$ZodEnum.init(inst, def);
  ZodType.init(inst, def);

  inst.enum = def.entries;
  inst.options = Object.values(def.entries);

  const keys = new Set(Object.keys(def.entries));

  inst.extract = (values, params) => {
    const newEntries: Record<string, any> = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util.normalizeParams(params),
      entries: newEntries,
    }) as any;
  };

  inst.exclude = (values, params) => {
    const newEntries: Record<string, any> = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util.normalizeParams(params),
      entries: newEntries,
    }) as any;
  };
});

function _enum<const T extends readonly string[]>(
  values: T,
  params?: string | core.$ZodEnumParams
): ZodEnum<util.ToEnum<T[number]>>;
function _enum<const T extends util.EnumLike>(entries: T, params?: string | core.$ZodEnumParams): ZodEnum<T>;
function _enum(values: any, params?: string | core.$ZodEnumParams) {
  const entries: any = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;

  return new ZodEnum({
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
export function nativeEnum<T extends util.EnumLike>(entries: T, params?: string | core.$ZodEnumParams): ZodEnum<T> {
  return new ZodEnum({
    type: "enum",
    entries,
    ...util.normalizeParams(params),
  }) as any as ZodEnum<T>;
}

// ZodLiteral
export interface ZodLiteral<T extends util.Literal = util.Literal>
  extends _ZodType<core.$ZodLiteralInternals<T>>,
    core.$ZodLiteral<T> {
  values: Set<T>;
  /** @legacy Use `.values` instead. Accessing this property will throw an error if the literal accepts multiple values. */
  value: T;
}
export const ZodLiteral: core.$constructor<ZodLiteral> = /*@__PURE__*/ core.$constructor("ZodLiteral", (inst, def) => {
  core.$ZodLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return def.values[0];
    },
  });
});

export function literal<const T extends ReadonlyArray<util.Literal>>(
  value: T,
  params?: string | core.$ZodLiteralParams
): ZodLiteral<T[number]>;
export function literal<const T extends util.Literal>(
  value: T,
  params?: string | core.$ZodLiteralParams
): ZodLiteral<T>;
export function literal(value: any, params: any) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util.normalizeParams(params),
  });
}

// ZodFile
export interface ZodFile extends _ZodType<core.$ZodFileInternals>, core.$ZodFile {
  min(size: number, params?: string | core.$ZodCheckMinSizeParams): this;
  max(size: number, params?: string | core.$ZodCheckMaxSizeParams): this;
  mime(types: util.MimeTypes | Array<util.MimeTypes>, params?: string | core.$ZodCheckMimeTypeParams): this;
}
export const ZodFile: core.$constructor<ZodFile> = /*@__PURE__*/ core.$constructor("ZodFile", (inst, def) => {
  core.$ZodFile.init(inst, def);
  ZodType.init(inst, def);

  inst.min = (size, params) => inst.check(core._minSize(size, params));
  inst.max = (size, params) => inst.check(core._maxSize(size, params));
  inst.mime = (types, params) => inst.check(core._mime(Array.isArray(types) ? types : [types], params));
});

export function file(params?: string | core.$ZodFileParams): ZodFile {
  return core._file(ZodFile, params) as any;
}

// ZodTransform
export interface ZodTransform<O = unknown, I = unknown>
  extends _ZodType<core.$ZodTransformInternals<O, I>>,
    core.$ZodTransform<O, I> {}
export const ZodTransform: core.$constructor<ZodTransform> = /*@__PURE__*/ core.$constructor(
  "ZodTransform",
  (inst, def) => {
    core.$ZodTransform.init(inst, def);
    ZodType.init(inst, def);

    inst._zod.parse = (payload, _ctx) => {
      (payload as RefinementCtx).addIssue = (issue) => {
        if (typeof issue === "string") {
          payload.issues.push(util.issue(issue, payload.value, def));
        } else {
          // for Zod 3 backwards compatibility
          const _issue = issue as any;

          if (_issue.fatal) _issue.continue = false;
          _issue.code ??= "custom";
          _issue.input ??= payload.value;
          _issue.inst ??= inst;
          _issue.continue ??= true;
          payload.issues.push(util.issue(_issue));
        }
      };

      const output = def.transform(payload.value, payload);
      if (output instanceof Promise) {
        return output.then((output) => {
          payload.value = output;
          return payload;
        });
      }
      payload.value = output;
      return payload;
    };
  }
);

export function transform<I = unknown, O = I>(
  fn: (input: I, ctx: core.ParsePayload) => O
): ZodTransform<Awaited<O>, I> {
  return new ZodTransform({
    type: "transform",
    transform: fn as any,
  }) as any;
}

// ZodOptional
export interface ZodOptional<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodOptionalInternals<T>>,
    core.$ZodOptional<T> {
  unwrap(): T;
}
export const ZodOptional: core.$constructor<ZodOptional> = /*@__PURE__*/ core.$constructor(
  "ZodOptional",
  (inst, def) => {
    core.$ZodOptional.init(inst, def);
    ZodType.init(inst, def);

    inst.unwrap = () => inst._zod.def.innerType;
  }
);

export function optional<T extends core.SomeType>(innerType: T): ZodOptional<T> {
  return new ZodOptional({
    type: "optional",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// ZodNullable
export interface ZodNullable<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodNullableInternals<T>>,
    core.$ZodNullable<T> {
  unwrap(): T;
}
export const ZodNullable: core.$constructor<ZodNullable> = /*@__PURE__*/ core.$constructor(
  "ZodNullable",
  (inst, def) => {
    core.$ZodNullable.init(inst, def);
    ZodType.init(inst, def);

    inst.unwrap = () => inst._zod.def.innerType;
  }
);

export function nullable<T extends core.SomeType>(innerType: T): ZodNullable<T> {
  return new ZodNullable({
    type: "nullable",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// nullish
export function nullish<T extends core.SomeType>(innerType: T): ZodOptional<ZodNullable<T>> {
  return optional(nullable(innerType));
}

// ZodDefault
export interface ZodDefault<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodDefaultInternals<T>>,
    core.$ZodDefault<T> {
  unwrap(): T;
  /** @deprecated Use `.unwrap()` instead. */
  removeDefault(): T;
}
export const ZodDefault: core.$constructor<ZodDefault> = /*@__PURE__*/ core.$constructor("ZodDefault", (inst, def) => {
  core.$ZodDefault.init(inst, def);
  ZodType.init(inst, def);

  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});

export function _default<T extends core.SomeType>(
  innerType: T,
  defaultValue: util.NoUndefined<core.output<T>> | (() => util.NoUndefined<core.output<T>>)
): ZodDefault<T> {
  return new ZodDefault({
    type: "default",
    innerType: innerType as any as core.$ZodType,
    get defaultValue() {
      return typeof defaultValue === "function" ? (defaultValue as Function)() : defaultValue;
    },
  }) as any;
}

// ZodPrefault
export interface ZodPrefault<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodPrefaultInternals<T>>,
    core.$ZodPrefault<T> {
  unwrap(): T;
}
export const ZodPrefault: core.$constructor<ZodPrefault> = /*@__PURE__*/ core.$constructor(
  "ZodPrefault",
  (inst, def) => {
    core.$ZodPrefault.init(inst, def);
    ZodType.init(inst, def);
    inst.unwrap = () => inst._zod.def.innerType;
  }
);

export function prefault<T extends core.SomeType>(
  innerType: T,
  defaultValue: core.input<T> | (() => core.input<T>)
): ZodPrefault<T> {
  return new ZodPrefault({
    type: "prefault",
    innerType: innerType as any as core.$ZodType,
    get defaultValue() {
      return typeof defaultValue === "function" ? (defaultValue as Function)() : defaultValue;
    },
  }) as any;
}

// ZodNonOptional
export interface ZodNonOptional<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodNonOptionalInternals<T>>,
    core.$ZodNonOptional<T> {
  unwrap(): T;
}
export const ZodNonOptional: core.$constructor<ZodNonOptional> = /*@__PURE__*/ core.$constructor(
  "ZodNonOptional",
  (inst, def) => {
    core.$ZodNonOptional.init(inst, def);
    ZodType.init(inst, def);

    inst.unwrap = () => inst._zod.def.innerType;
  }
);

export function nonoptional<T extends core.SomeType>(
  innerType: T,
  params?: string | core.$ZodNonOptionalParams
): ZodNonOptional<T> {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType: innerType as any as core.$ZodType,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodSuccess
export interface ZodSuccess<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodSuccessInternals<T>>,
    core.$ZodSuccess<T> {
  unwrap(): T;
}
export const ZodSuccess: core.$constructor<ZodSuccess> = /*@__PURE__*/ core.$constructor("ZodSuccess", (inst, def) => {
  core.$ZodSuccess.init(inst, def);
  ZodType.init(inst, def);

  inst.unwrap = () => inst._zod.def.innerType;
});

export function success<T extends core.SomeType>(innerType: T): ZodSuccess<T> {
  return new ZodSuccess({
    type: "success",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// ZodCatch
export interface ZodCatch<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodCatchInternals<T>>,
    core.$ZodCatch<T> {
  unwrap(): T;
  /** @deprecated Use `.unwrap()` instead. */
  removeCatch(): T;
}
export const ZodCatch: core.$constructor<ZodCatch> = /*@__PURE__*/ core.$constructor("ZodCatch", (inst, def) => {
  core.$ZodCatch.init(inst, def);
  ZodType.init(inst, def);

  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});

function _catch<T extends core.SomeType>(
  innerType: T,
  catchValue: core.output<T> | ((ctx: core.$ZodCatchCtx) => core.output<T>)
): ZodCatch<T> {
  return new ZodCatch({
    type: "catch",
    innerType: innerType as any as core.$ZodType,
    catchValue: (typeof catchValue === "function" ? catchValue : () => catchValue) as (
      ctx: core.$ZodCatchCtx
    ) => core.output<T>,
  }) as any;
}
export { _catch as catch };

// ZodNaN
export interface ZodNaN extends _ZodType<core.$ZodNaNInternals>, core.$ZodNaN {}
export const ZodNaN: core.$constructor<ZodNaN> = /*@__PURE__*/ core.$constructor("ZodNaN", (inst, def) => {
  core.$ZodNaN.init(inst, def);
  ZodType.init(inst, def);
});

export function nan(params?: string | core.$ZodNaNParams): ZodNaN {
  return core._nan(ZodNaN, params);
}

// ZodPipe
export interface ZodPipe<A extends core.SomeType = core.$ZodType, B extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodPipeInternals<A, B>>,
    core.$ZodPipe<A, B> {
  in: A;
  out: B;
}
export const ZodPipe: core.$constructor<ZodPipe> = /*@__PURE__*/ core.$constructor("ZodPipe", (inst, def) => {
  core.$ZodPipe.init(inst, def);
  ZodType.init(inst, def);

  inst.in = def.in;
  inst.out = def.out;
});

export function pipe<
  const A extends core.SomeType,
  B extends core.$ZodType<unknown, core.output<A>> = core.$ZodType<unknown, core.output<A>>,
>(in_: A, out: B | core.$ZodType<unknown, core.output<A>>): ZodPipe<A, B>;
export function pipe(in_: core.SomeType, out: core.SomeType) {
  return new ZodPipe({
    type: "pipe",
    in: in_ as unknown as core.$ZodType,
    out: out as unknown as core.$ZodType,
    // ...util.normalizeParams(params),
  });
}

// ZodReadonly
export interface ZodReadonly<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodReadonlyInternals<T>>,
    core.$ZodReadonly<T> {}
export const ZodReadonly: core.$constructor<ZodReadonly> = /*@__PURE__*/ core.$constructor(
  "ZodReadonly",
  (inst, def) => {
    core.$ZodReadonly.init(inst, def);
    ZodType.init(inst, def);
  }
);

export function readonly<T extends core.SomeType>(innerType: T): ZodReadonly<T> {
  return new ZodReadonly({
    type: "readonly",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// ZodTemplateLiteral
export interface ZodTemplateLiteral<Template extends string = string>
  extends _ZodType<core.$ZodTemplateLiteralInternals<Template>>,
    core.$ZodTemplateLiteral<Template> {}
export const ZodTemplateLiteral: core.$constructor<ZodTemplateLiteral> = /*@__PURE__*/ core.$constructor(
  "ZodTemplateLiteral",
  (inst, def) => {
    core.$ZodTemplateLiteral.init(inst, def);
    ZodType.init(inst, def);
  }
);

export function templateLiteral<const Parts extends core.$ZodTemplateLiteralPart[]>(
  parts: Parts,
  params?: string | core.$ZodTemplateLiteralParams
): ZodTemplateLiteral<core.$PartsToTemplateLiteral<Parts>> {
  return new ZodTemplateLiteral({
    type: "template_literal",
    parts,
    ...util.normalizeParams(params),
  }) as any;
}

// ZodLazy
export interface ZodLazy<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodLazyInternals<T>>,
    core.$ZodLazy<T> {
  unwrap(): T;
}
export const ZodLazy: core.$constructor<ZodLazy> = /*@__PURE__*/ core.$constructor("ZodLazy", (inst, def) => {
  core.$ZodLazy.init(inst, def);
  ZodType.init(inst, def);

  inst.unwrap = () => inst._zod.def.getter();
});

export function lazy<T extends core.SomeType>(getter: () => T): ZodLazy<T> {
  return new ZodLazy({
    type: "lazy",
    getter: getter as any,
  }) as any;
}

// ZodPromise
export interface ZodPromise<T extends core.SomeType = core.$ZodType>
  extends _ZodType<core.$ZodPromiseInternals<T>>,
    core.$ZodPromise<T> {
  unwrap(): T;
}
export const ZodPromise: core.$constructor<ZodPromise> = /*@__PURE__*/ core.$constructor("ZodPromise", (inst, def) => {
  core.$ZodPromise.init(inst, def);
  ZodType.init(inst, def);

  inst.unwrap = () => inst._zod.def.innerType;
});

export function promise<T extends core.SomeType>(innerType: T): ZodPromise<T> {
  return new ZodPromise({
    type: "promise",
    innerType: innerType as any as core.$ZodType,
  }) as any;
}

// ZodCustom
export interface ZodCustom<O = unknown, I = unknown>
  extends _ZodType<core.$ZodCustomInternals<O, I>>,
    core.$ZodCustom<O, I> {}
export const ZodCustom: core.$constructor<ZodCustom> = /*@__PURE__*/ core.$constructor("ZodCustom", (inst, def) => {
  core.$ZodCustom.init(inst, def);
  ZodType.init(inst, def);
});

// custom checks
export function check<O = unknown>(fn: core.CheckFn<O>): core.$ZodCheck<O> {
  const ch = new core.$ZodCheck({
    check: "custom",
    // ...util.normalizeParams(params),
  });

  ch._zod.check = fn;
  return ch;
}

export function custom<O>(
  fn?: (data: unknown) => unknown,
  _params?: string | core.$ZodCustomParams | undefined
): ZodCustom<O, O> {
  return core._custom(ZodCustom, fn ?? (() => true), _params) as any;
}

export function refine<T>(
  fn: (arg: NoInfer<T>) => util.MaybeAsync<unknown>,
  _params: string | core.$ZodCustomParams = {}
): core.$ZodCheck<T> {
  return core._refine(ZodCustom, fn, _params);
}

// superRefine
export function superRefine<T>(fn: (arg: T, payload: RefinementCtx<T>) => void | Promise<void>): core.$ZodCheck<T> {
  const ch = check<T>((payload) => {
    (payload as RefinementCtx).addIssue = (issue) => {
      if (typeof issue === "string") {
        payload.issues.push(util.issue(issue, payload.value, ch._zod.def));
      } else {
        // for Zod 3 backwards compatibility
        const _issue: any = issue;
        if (_issue.fatal) _issue.continue = false;
        _issue.code ??= "custom";
        _issue.input ??= payload.value;
        _issue.inst ??= ch;
        _issue.continue ??= !ch._zod.def.abort;
        payload.issues.push(util.issue(_issue));
      }
    };

    return fn(payload.value, payload as RefinementCtx<T>);
  });
  return ch;
}

type ZodInstanceOfParams = core.Params<
  ZodCustom,
  core.$ZodIssueCustom,
  "type" | "check" | "checks" | "fn" | "abort" | "error" | "params" | "path"
>;
function _instanceof<T extends typeof util.Class>(
  cls: T,
  params: ZodInstanceOfParams = {
    error: `Input not instance of ${cls.name}`,
  }
): ZodCustom<InstanceType<T>, InstanceType<T>> {
  const inst = new ZodCustom({
    type: "custom",
    check: "custom",
    fn: (data) => data instanceof cls,
    abort: true,
    ...(util.normalizeParams(params) as any),
  });
  inst._zod.bag.Class = cls;
  return inst as any;
}
export { _instanceof as instanceof };

// stringbool
export const stringbool: (
  _params?: string | core.$ZodStringBoolParams
) => ZodPipe<ZodPipe<ZodString, ZodTransform<boolean, string>>, ZodBoolean> = (...args) =>
  core._stringbool(
    {
      Pipe: ZodPipe,
      Boolean: ZodBoolean,
      String: ZodString,
      Transform: ZodTransform,
    },
    ...args
  ) as any;

// json
type _ZodJSONSchema = ZodUnion<
  [ZodString, ZodNumber, ZodBoolean, ZodNull, ZodArray<ZodJSONSchema>, ZodRecord<ZodString, ZodJSONSchema>]
>;
type _ZodJSONSchemaInternals = _ZodJSONSchema["_zod"];

export interface ZodJSONSchemaInternals extends _ZodJSONSchemaInternals {
  output: util.JSONType;
  input: util.JSONType;
}
export interface ZodJSONSchema extends _ZodJSONSchema {
  _zod: ZodJSONSchemaInternals;
}

export function json(params?: string | core.$ZodCustomParams): ZodJSONSchema {
  const jsonSchema: any = lazy(() => {
    return union([string(params), number(), boolean(), _null(), array(jsonSchema), record(string(), jsonSchema)]);
  });

  return jsonSchema;
}

// preprocess

// /** @deprecated Use `z.pipe()` and `z.transform()` instead. */
export function preprocess<A, U extends core.SomeType, B = unknown>(
  fn: (arg: B, ctx: RefinementCtx) => A,
  schema: U
): ZodPipe<ZodTransform<A, B>, U> {
  return pipe(transform(fn as any), schema as any) as any;
}
