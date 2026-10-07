import * as core from "../core/index.cjs";
import { util } from "../core/index.cjs";
import * as parse from "./parse.cjs";
export interface RefinementCtx<T = unknown> extends core.ParsePayload<T> {
    addIssue(arg: string | core.$ZodRawIssue | Partial<core.$ZodIssueCustom>): void;
}
export interface ZodType<out Output = unknown, out Input = unknown, out Internals extends core.$ZodTypeInternals<Output, Input> = core.$ZodTypeInternals<Output, Input>> extends core.$ZodType<Output, Input, Internals> {
    def: Internals["def"];
    type: Internals["def"]["type"];
    /** @deprecated Use `.def` instead. */
    _def: Internals["def"];
    /** @deprecated Use `z.output<typeof schema>` instead. */
    _output: Internals["output"];
    /** @deprecated Use `z.input<typeof schema>` instead. */
    _input: Internals["input"];
    check(...checks: (core.CheckFn<core.output<this>> | core.$ZodCheck<core.output<this>>)[]): this;
    clone(def?: Internals["def"], params?: {
        parent: boolean;
    }): this;
    register<R extends core.$ZodRegistry>(registry: R, ...meta: this extends R["_schema"] ? undefined extends R["_meta"] ? [core.$replace<R["_meta"], this>?] : [core.$replace<R["_meta"], this>] : ["Incompatible schema"]): this;
    brand<T extends PropertyKey = PropertyKey>(value?: T): PropertyKey extends T ? this : core.$ZodBranded<this, T>;
    parse(data: unknown, params?: core.ParseContext<core.$ZodIssue>): core.output<this>;
    safeParse(data: unknown, params?: core.ParseContext<core.$ZodIssue>): parse.ZodSafeParseResult<core.output<this>>;
    parseAsync(data: unknown, params?: core.ParseContext<core.$ZodIssue>): Promise<core.output<this>>;
    safeParseAsync(data: unknown, params?: core.ParseContext<core.$ZodIssue>): Promise<parse.ZodSafeParseResult<core.output<this>>>;
    spa: (data: unknown, params?: core.ParseContext<core.$ZodIssue>) => Promise<parse.ZodSafeParseResult<core.output<this>>>;
    refine(check: (arg: core.output<this>) => unknown | Promise<unknown>, params?: string | core.$ZodCustomParams): this;
    /** @deprecated Use `.check()` instead. */
    superRefine(refinement: (arg: core.output<this>, ctx: RefinementCtx<core.output<this>>) => void | Promise<void>): this;
    overwrite(fn: (x: core.output<this>) => core.output<this>): this;
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
    transform<NewOut>(transform: (arg: core.output<this>, ctx: RefinementCtx<core.output<this>>) => NewOut | Promise<NewOut>): ZodPipe<this, ZodTransform<Awaited<NewOut>, core.output<this>>>;
    catch(def: core.output<this>): ZodCatch<this>;
    catch(def: (ctx: core.$ZodCatchCtx) => core.output<this>): ZodCatch<this>;
    pipe<T extends core.$ZodType<any, core.output<this>>>(target: T | core.$ZodType<any, core.output<this>>): ZodPipe<this, T>;
    readonly(): ZodReadonly<this>;
    /** Returns a new instance that has been registered in `z.globalRegistry` with the specified description */
    describe(description: string): this;
    description?: string;
    /** Returns the metadata associated with this instance in `z.globalRegistry` */
    meta(): core.$replace<core.GlobalMeta, this> | undefined;
    /** Returns a new instance that has been registered in `z.globalRegistry` with the specified metadata */
    meta(data: core.$replace<core.GlobalMeta, this>): this;
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
export interface _ZodType<out Internals extends core.$ZodTypeInternals = core.$ZodTypeInternals> extends ZodType<any, any, Internals> {
}
export declare const ZodType: core.$constructor<ZodType>;
export interface _ZodString<T extends core.$ZodStringInternals<unknown> = core.$ZodStringInternals<unknown>> extends _ZodType<T> {
    format: string | null;
    minLength: number | null;
    maxLength: number | null;
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
    trim(): this;
    normalize(form?: "NFC" | "NFD" | "NFKC" | "NFKD" | (string & {})): this;
    toLowerCase(): this;
    toUpperCase(): this;
}
/** @internal */
export declare const _ZodString: core.$constructor<_ZodString>;
export interface ZodString extends _ZodString<core.$ZodStringInternals<string>> {
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
    /** @deprecated Use `z.xid()` instead. */
    xid(params?: string | core.$ZodCheckXIDParams): this;
    /** @deprecated Use `z.ksuid()` instead. */
    ksuid(params?: string | core.$ZodCheckKSUIDParams): this;
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
    /** @deprecated Use `z.iso.datetime()` instead. */
    datetime(params?: string | core.$ZodCheckISODateTimeParams): this;
    /** @deprecated Use `z.iso.date()` instead. */
    date(params?: string | core.$ZodCheckISODateParams): this;
    /** @deprecated Use `z.iso.time()` instead. */
    time(params?: string | core.$ZodCheckISOTimeParams): this;
    /** @deprecated Use `z.iso.duration()` instead. */
    duration(params?: string | core.$ZodCheckISODurationParams): this;
}
export declare const ZodString: core.$constructor<ZodString>;
export declare function string(params?: string | core.$ZodStringParams): ZodString;
export declare function string<T extends string>(params?: string | core.$ZodStringParams): core.$ZodType<T, T>;
export interface ZodStringFormat<Format extends string = string> extends _ZodString<core.$ZodStringFormatInternals<Format>> {
}
export declare const ZodStringFormat: core.$constructor<ZodStringFormat>;
export interface ZodEmail extends ZodStringFormat<"email"> {
    _zod: core.$ZodEmailInternals;
}
export declare const ZodEmail: core.$constructor<ZodEmail>;
export declare function email(params?: string | core.$ZodEmailParams): ZodEmail;
export interface ZodGUID extends ZodStringFormat<"guid"> {
    _zod: core.$ZodGUIDInternals;
}
export declare const ZodGUID: core.$constructor<ZodGUID>;
export declare function guid(params?: string | core.$ZodGUIDParams): ZodGUID;
export interface ZodUUID extends ZodStringFormat<"uuid"> {
    _zod: core.$ZodUUIDInternals;
}
export declare const ZodUUID: core.$constructor<ZodUUID>;
export declare function uuid(params?: string | core.$ZodUUIDParams): ZodUUID;
export declare function uuidv4(params?: string | core.$ZodUUIDv4Params): ZodUUID;
export declare function uuidv6(params?: string | core.$ZodUUIDv6Params): ZodUUID;
export declare function uuidv7(params?: string | core.$ZodUUIDv7Params): ZodUUID;
export interface ZodURL extends ZodStringFormat<"url"> {
    _zod: core.$ZodURLInternals;
}
export declare const ZodURL: core.$constructor<ZodURL>;
export declare function url(params?: string | core.$ZodURLParams): ZodURL;
export interface ZodEmoji extends ZodStringFormat<"emoji"> {
    _zod: core.$ZodEmojiInternals;
}
export declare const ZodEmoji: core.$constructor<ZodEmoji>;
export declare function emoji(params?: string | core.$ZodEmojiParams): ZodEmoji;
export interface ZodNanoID extends ZodStringFormat<"nanoid"> {
    _zod: core.$ZodNanoIDInternals;
}
export declare const ZodNanoID: core.$constructor<ZodNanoID>;
export declare function nanoid(params?: string | core.$ZodNanoIDParams): ZodNanoID;
export interface ZodCUID extends ZodStringFormat<"cuid"> {
    _zod: core.$ZodCUIDInternals;
}
export declare const ZodCUID: core.$constructor<ZodCUID>;
export declare function cuid(params?: string | core.$ZodCUIDParams): ZodCUID;
export interface ZodCUID2 extends ZodStringFormat<"cuid2"> {
    _zod: core.$ZodCUID2Internals;
}
export declare const ZodCUID2: core.$constructor<ZodCUID2>;
export declare function cuid2(params?: string | core.$ZodCUID2Params): ZodCUID2;
export interface ZodULID extends ZodStringFormat<"ulid"> {
    _zod: core.$ZodULIDInternals;
}
export declare const ZodULID: core.$constructor<ZodULID>;
export declare function ulid(params?: string | core.$ZodULIDParams): ZodULID;
export interface ZodXID extends ZodStringFormat<"xid"> {
    _zod: core.$ZodXIDInternals;
}
export declare const ZodXID: core.$constructor<ZodXID>;
export declare function xid(params?: string | core.$ZodXIDParams): ZodXID;
export interface ZodKSUID extends ZodStringFormat<"ksuid"> {
    _zod: core.$ZodKSUIDInternals;
}
export declare const ZodKSUID: core.$constructor<ZodKSUID>;
export declare function ksuid(params?: string | core.$ZodKSUIDParams): ZodKSUID;
export interface ZodIPv4 extends ZodStringFormat<"ipv4"> {
    _zod: core.$ZodIPv4Internals;
}
export declare const ZodIPv4: core.$constructor<ZodIPv4>;
export declare function ipv4(params?: string | core.$ZodIPv4Params): ZodIPv4;
export interface ZodIPv6 extends ZodStringFormat<"ipv6"> {
    _zod: core.$ZodIPv6Internals;
}
export declare const ZodIPv6: core.$constructor<ZodIPv6>;
export declare function ipv6(params?: string | core.$ZodIPv6Params): ZodIPv6;
export interface ZodCIDRv4 extends ZodStringFormat<"cidrv4"> {
    _zod: core.$ZodCIDRv4Internals;
}
export declare const ZodCIDRv4: core.$constructor<ZodCIDRv4>;
export declare function cidrv4(params?: string | core.$ZodCIDRv4Params): ZodCIDRv4;
export interface ZodCIDRv6 extends ZodStringFormat<"cidrv6"> {
    _zod: core.$ZodCIDRv6Internals;
}
export declare const ZodCIDRv6: core.$constructor<ZodCIDRv6>;
export declare function cidrv6(params?: string | core.$ZodCIDRv6Params): ZodCIDRv6;
export interface ZodBase64 extends ZodStringFormat<"base64"> {
    _zod: core.$ZodBase64Internals;
}
export declare const ZodBase64: core.$constructor<ZodBase64>;
export declare function base64(params?: string | core.$ZodBase64Params): ZodBase64;
export interface ZodBase64URL extends ZodStringFormat<"base64url"> {
    _zod: core.$ZodBase64URLInternals;
}
export declare const ZodBase64URL: core.$constructor<ZodBase64URL>;
export declare function base64url(params?: string | core.$ZodBase64URLParams): ZodBase64URL;
export interface ZodE164 extends ZodStringFormat<"e164"> {
    _zod: core.$ZodE164Internals;
}
export declare const ZodE164: core.$constructor<ZodE164>;
export declare function e164(params?: string | core.$ZodE164Params): ZodE164;
export interface ZodJWT extends ZodStringFormat<"jwt"> {
    _zod: core.$ZodJWTInternals;
}
export declare const ZodJWT: core.$constructor<ZodJWT>;
export declare function jwt(params?: string | core.$ZodJWTParams): ZodJWT;
export interface ZodCustomStringFormat<Format extends string = string> extends ZodStringFormat<Format>, core.$ZodCustomStringFormat<Format> {
    _zod: core.$ZodCustomStringFormatInternals<Format>;
}
export declare const ZodCustomStringFormat: core.$constructor<ZodCustomStringFormat>;
export declare function stringFormat<Format extends string>(format: Format, fnOrRegex: ((arg: string) => util.MaybeAsync<unknown>) | RegExp, _params?: string | core.$ZodStringFormatParams): ZodCustomStringFormat<Format>;
export interface _ZodNumber<Internals extends core.$ZodNumberInternals = core.$ZodNumberInternals> extends _ZodType<Internals> {
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
export interface ZodNumber extends _ZodNumber<core.$ZodNumberInternals<number>> {
}
export declare const ZodNumber: core.$constructor<ZodNumber>;
export declare function number(params?: string | core.$ZodNumberParams): ZodNumber;
export interface ZodNumberFormat extends ZodNumber {
    _zod: core.$ZodNumberFormatInternals;
}
export declare const ZodNumberFormat: core.$constructor<ZodNumberFormat>;
export interface ZodInt extends ZodNumberFormat {
}
export declare function int(params?: string | core.$ZodCheckNumberFormatParams): ZodInt;
export interface ZodFloat32 extends ZodNumberFormat {
}
export declare function float32(params?: string | core.$ZodCheckNumberFormatParams): ZodFloat32;
export interface ZodFloat64 extends ZodNumberFormat {
}
export declare function float64(params?: string | core.$ZodCheckNumberFormatParams): ZodFloat64;
export interface ZodInt32 extends ZodNumberFormat {
}
export declare function int32(params?: string | core.$ZodCheckNumberFormatParams): ZodInt32;
export interface ZodUInt32 extends ZodNumberFormat {
}
export declare function uint32(params?: string | core.$ZodCheckNumberFormatParams): ZodUInt32;
export interface _ZodBoolean<T extends core.$ZodBooleanInternals = core.$ZodBooleanInternals> extends _ZodType<T> {
}
export interface ZodBoolean extends _ZodBoolean<core.$ZodBooleanInternals<boolean>> {
}
export declare const ZodBoolean: core.$constructor<ZodBoolean>;
export declare function boolean(params?: string | core.$ZodBooleanParams): ZodBoolean;
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
export interface ZodBigInt extends _ZodBigInt<core.$ZodBigIntInternals<bigint>> {
}
export declare const ZodBigInt: core.$constructor<ZodBigInt>;
export declare function bigint(params?: string | core.$ZodBigIntParams): ZodBigInt;
export interface ZodBigIntFormat extends ZodBigInt {
    _zod: core.$ZodBigIntFormatInternals;
}
export declare const ZodBigIntFormat: core.$constructor<ZodBigIntFormat>;
export declare function int64(params?: string | core.$ZodBigIntFormatParams): ZodBigIntFormat;
export declare function uint64(params?: string | core.$ZodBigIntFormatParams): ZodBigIntFormat;
export interface ZodSymbol extends _ZodType<core.$ZodSymbolInternals> {
}
export declare const ZodSymbol: core.$constructor<ZodSymbol>;
export declare function symbol(params?: string | core.$ZodSymbolParams): ZodSymbol;
export interface ZodUndefined extends _ZodType<core.$ZodUndefinedInternals> {
}
export declare const ZodUndefined: core.$constructor<ZodUndefined>;
declare function _undefined(params?: string | core.$ZodUndefinedParams): ZodUndefined;
export { _undefined as undefined };
export interface ZodNull extends _ZodType<core.$ZodNullInternals> {
}
export declare const ZodNull: core.$constructor<ZodNull>;
declare function _null(params?: string | core.$ZodNullParams): ZodNull;
export { _null as null };
export interface ZodAny extends _ZodType<core.$ZodAnyInternals> {
}
export declare const ZodAny: core.$constructor<ZodAny>;
export declare function any(): ZodAny;
export interface ZodUnknown extends _ZodType<core.$ZodUnknownInternals> {
}
export declare const ZodUnknown: core.$constructor<ZodUnknown>;
export declare function unknown(): ZodUnknown;
export interface ZodNever extends _ZodType<core.$ZodNeverInternals> {
}
export declare const ZodNever: core.$constructor<ZodNever>;
export declare function never(params?: string | core.$ZodNeverParams): ZodNever;
export interface ZodVoid extends _ZodType<core.$ZodVoidInternals> {
}
export declare const ZodVoid: core.$constructor<ZodVoid>;
declare function _void(params?: string | core.$ZodVoidParams): ZodVoid;
export { _void as void };
export interface _ZodDate<T extends core.$ZodDateInternals = core.$ZodDateInternals> extends _ZodType<T> {
    min(value: number | Date, params?: string | core.$ZodCheckGreaterThanParams): this;
    max(value: number | Date, params?: string | core.$ZodCheckLessThanParams): this;
    /** @deprecated Not recommended. */
    minDate: Date | null;
    /** @deprecated Not recommended. */
    maxDate: Date | null;
}
export interface ZodDate extends _ZodDate<core.$ZodDateInternals<Date>> {
}
export declare const ZodDate: core.$constructor<ZodDate>;
export declare function date(params?: string | core.$ZodDateParams): ZodDate;
export interface ZodArray<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodArrayInternals<T>>, core.$ZodArray<T> {
    element: T;
    min(minLength: number, params?: string | core.$ZodCheckMinLengthParams): this;
    nonempty(params?: string | core.$ZodCheckMinLengthParams): this;
    max(maxLength: number, params?: string | core.$ZodCheckMaxLengthParams): this;
    length(len: number, params?: string | core.$ZodCheckLengthEqualsParams): this;
    unwrap(): T;
}
export declare const ZodArray: core.$constructor<ZodArray>;
export declare function array<T extends core.SomeType>(element: T, params?: string | core.$ZodArrayParams): ZodArray<T>;
export declare function keyof<T extends ZodObject>(schema: T): ZodLiteral<Exclude<keyof T["_zod"]["output"], symbol>>;
export interface ZodObject<
/** @ts-ignore Cast variance */
out Shape extends core.$ZodShape = core.$ZodLooseShape, out Config extends core.$ZodObjectConfig = core.$strip> extends _ZodType<core.$ZodObjectInternals<Shape, Config>>, core.$ZodObject<Shape, Config> {
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
    extend<U extends core.$ZodLooseShape & Partial<Record<keyof Shape, core.SomeType>>>(shape: U): ZodObject<util.Extend<Shape, U>, Config>;
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
    pick<M extends util.Mask<keyof Shape>>(mask: M): ZodObject<util.Flatten<Pick<Shape, Extract<keyof Shape, keyof M>>>, Config>;
    omit<M extends util.Mask<keyof Shape>>(mask: M): ZodObject<util.Flatten<Omit<Shape, Extract<keyof Shape, keyof M>>>, Config>;
    partial(): ZodObject<{
        [k in keyof Shape]: ZodOptional<Shape[k]>;
    }, Config>;
    partial<M extends util.Mask<keyof Shape>>(mask: M): ZodObject<{
        [k in keyof Shape]: k extends keyof M ? ZodOptional<Shape[k]> : Shape[k];
    }, Config>;
    required(): ZodObject<{
        [k in keyof Shape]: ZodNonOptional<Shape[k]>;
    }, Config>;
    required<M extends util.Mask<keyof Shape>>(mask: M): ZodObject<{
        [k in keyof Shape]: k extends keyof M ? ZodNonOptional<Shape[k]> : Shape[k];
    }, Config>;
}
export declare const ZodObject: core.$constructor<ZodObject>;
export declare function object<T extends core.$ZodLooseShape = Partial<Record<never, core.SomeType>>>(shape?: T, params?: string | core.$ZodObjectParams): ZodObject<util.Writeable<T>, core.$strip>;
export declare function strictObject<T extends core.$ZodLooseShape>(shape: T, params?: string | core.$ZodObjectParams): ZodObject<T, core.$strict>;
export declare function looseObject<T extends core.$ZodLooseShape>(shape: T, params?: string | core.$ZodObjectParams): ZodObject<T, core.$loose>;
export interface ZodUnion<T extends readonly core.SomeType[] = readonly core.$ZodType[]> extends _ZodType<core.$ZodUnionInternals<T>>, core.$ZodUnion<T> {
    options: T;
}
export declare const ZodUnion: core.$constructor<ZodUnion>;
export declare function union<const T extends readonly core.SomeType[]>(options: T, params?: string | core.$ZodUnionParams): ZodUnion<T>;
export interface ZodDiscriminatedUnion<Options extends readonly core.SomeType[] = readonly core.$ZodType[]> extends ZodUnion<Options>, core.$ZodDiscriminatedUnion<Options> {
    _zod: core.$ZodDiscriminatedUnionInternals<Options>;
}
export declare const ZodDiscriminatedUnion: core.$constructor<ZodDiscriminatedUnion>;
export declare function discriminatedUnion<Types extends readonly [core.$ZodTypeDiscriminable, ...core.$ZodTypeDiscriminable[]]>(discriminator: string, options: Types, params?: string | core.$ZodDiscriminatedUnionParams): ZodDiscriminatedUnion<Types>;
export interface ZodIntersection<A extends core.SomeType = core.$ZodType, B extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodIntersectionInternals<A, B>>, core.$ZodIntersection<A, B> {
}
export declare const ZodIntersection: core.$constructor<ZodIntersection>;
export declare function intersection<T extends core.SomeType, U extends core.SomeType>(left: T, right: U): ZodIntersection<T, U>;
export interface ZodTuple<T extends util.TupleItems = readonly core.$ZodType[], Rest extends core.SomeType | null = core.$ZodType | null> extends _ZodType<core.$ZodTupleInternals<T, Rest>>, core.$ZodTuple<T, Rest> {
    rest<Rest extends core.SomeType = core.$ZodType>(rest: Rest): ZodTuple<T, Rest>;
}
export declare const ZodTuple: core.$constructor<ZodTuple>;
export declare function tuple<T extends readonly [core.SomeType, ...core.SomeType[]]>(items: T, params?: string | core.$ZodTupleParams): ZodTuple<T, null>;
export declare function tuple<T extends readonly [core.SomeType, ...core.SomeType[]], Rest extends core.SomeType>(items: T, rest: Rest, params?: string | core.$ZodTupleParams): ZodTuple<T, Rest>;
export declare function tuple(items: [], params?: string | core.$ZodTupleParams): ZodTuple<[], null>;
export interface ZodRecord<Key extends core.$ZodRecordKey = core.$ZodRecordKey, Value extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodRecordInternals<Key, Value>>, core.$ZodRecord<Key, Value> {
    keyType: Key;
    valueType: Value;
}
export declare const ZodRecord: core.$constructor<ZodRecord>;
export declare function record<Key extends core.$ZodRecordKey, Value extends core.SomeType>(keyType: Key, valueType: Value, params?: string | core.$ZodRecordParams): ZodRecord<Key, Value>;
export declare function partialRecord<Key extends core.$ZodRecordKey, Value extends core.SomeType>(keyType: Key, valueType: Value, params?: string | core.$ZodRecordParams): ZodRecord<Key & core.$partial, Value>;
export interface ZodMap<Key extends core.SomeType = core.$ZodType, Value extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodMapInternals<Key, Value>>, core.$ZodMap<Key, Value> {
    keyType: Key;
    valueType: Value;
}
export declare const ZodMap: core.$constructor<ZodMap>;
export declare function map<Key extends core.SomeType, Value extends core.SomeType>(keyType: Key, valueType: Value, params?: string | core.$ZodMapParams): ZodMap<Key, Value>;
export interface ZodSet<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodSetInternals<T>>, core.$ZodSet<T> {
    min(minSize: number, params?: string | core.$ZodCheckMinSizeParams): this;
    /** */
    nonempty(params?: string | core.$ZodCheckMinSizeParams): this;
    max(maxSize: number, params?: string | core.$ZodCheckMaxSizeParams): this;
    size(size: number, params?: string | core.$ZodCheckSizeEqualsParams): this;
}
export declare const ZodSet: core.$constructor<ZodSet>;
export declare function set<Value extends core.SomeType>(valueType: Value, params?: string | core.$ZodSetParams): ZodSet<Value>;
export interface ZodEnum<
/** @ts-ignore Cast variance */
out T extends util.EnumLike = util.EnumLike> extends _ZodType<core.$ZodEnumInternals<T>>, core.$ZodEnum<T> {
    enum: T;
    options: Array<T[keyof T]>;
    extract<const U extends readonly (keyof T)[]>(values: U, params?: string | core.$ZodEnumParams): ZodEnum<util.Flatten<Pick<T, U[number]>>>;
    exclude<const U extends readonly (keyof T)[]>(values: U, params?: string | core.$ZodEnumParams): ZodEnum<util.Flatten<Omit<T, U[number]>>>;
}
export declare const ZodEnum: core.$constructor<ZodEnum>;
declare function _enum<const T extends readonly string[]>(values: T, params?: string | core.$ZodEnumParams): ZodEnum<util.ToEnum<T[number]>>;
declare function _enum<const T extends util.EnumLike>(entries: T, params?: string | core.$ZodEnumParams): ZodEnum<T>;
export { _enum as enum };
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
export declare function nativeEnum<T extends util.EnumLike>(entries: T, params?: string | core.$ZodEnumParams): ZodEnum<T>;
export interface ZodLiteral<T extends util.Literal = util.Literal> extends _ZodType<core.$ZodLiteralInternals<T>>, core.$ZodLiteral<T> {
    values: Set<T>;
    /** @legacy Use `.values` instead. Accessing this property will throw an error if the literal accepts multiple values. */
    value: T;
}
export declare const ZodLiteral: core.$constructor<ZodLiteral>;
export declare function literal<const T extends ReadonlyArray<util.Literal>>(value: T, params?: string | core.$ZodLiteralParams): ZodLiteral<T[number]>;
export declare function literal<const T extends util.Literal>(value: T, params?: string | core.$ZodLiteralParams): ZodLiteral<T>;
export interface ZodFile extends _ZodType<core.$ZodFileInternals>, core.$ZodFile {
    min(size: number, params?: string | core.$ZodCheckMinSizeParams): this;
    max(size: number, params?: string | core.$ZodCheckMaxSizeParams): this;
    mime(types: util.MimeTypes | Array<util.MimeTypes>, params?: string | core.$ZodCheckMimeTypeParams): this;
}
export declare const ZodFile: core.$constructor<ZodFile>;
export declare function file(params?: string | core.$ZodFileParams): ZodFile;
export interface ZodTransform<O = unknown, I = unknown> extends _ZodType<core.$ZodTransformInternals<O, I>>, core.$ZodTransform<O, I> {
}
export declare const ZodTransform: core.$constructor<ZodTransform>;
export declare function transform<I = unknown, O = I>(fn: (input: I, ctx: core.ParsePayload) => O): ZodTransform<Awaited<O>, I>;
export interface ZodOptional<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodOptionalInternals<T>>, core.$ZodOptional<T> {
    unwrap(): T;
}
export declare const ZodOptional: core.$constructor<ZodOptional>;
export declare function optional<T extends core.SomeType>(innerType: T): ZodOptional<T>;
export interface ZodNullable<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodNullableInternals<T>>, core.$ZodNullable<T> {
    unwrap(): T;
}
export declare const ZodNullable: core.$constructor<ZodNullable>;
export declare function nullable<T extends core.SomeType>(innerType: T): ZodNullable<T>;
export declare function nullish<T extends core.SomeType>(innerType: T): ZodOptional<ZodNullable<T>>;
export interface ZodDefault<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodDefaultInternals<T>>, core.$ZodDefault<T> {
    unwrap(): T;
    /** @deprecated Use `.unwrap()` instead. */
    removeDefault(): T;
}
export declare const ZodDefault: core.$constructor<ZodDefault>;
export declare function _default<T extends core.SomeType>(innerType: T, defaultValue: util.NoUndefined<core.output<T>> | (() => util.NoUndefined<core.output<T>>)): ZodDefault<T>;
export interface ZodPrefault<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodPrefaultInternals<T>>, core.$ZodPrefault<T> {
    unwrap(): T;
}
export declare const ZodPrefault: core.$constructor<ZodPrefault>;
export declare function prefault<T extends core.SomeType>(innerType: T, defaultValue: core.input<T> | (() => core.input<T>)): ZodPrefault<T>;
export interface ZodNonOptional<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodNonOptionalInternals<T>>, core.$ZodNonOptional<T> {
    unwrap(): T;
}
export declare const ZodNonOptional: core.$constructor<ZodNonOptional>;
export declare function nonoptional<T extends core.SomeType>(innerType: T, params?: string | core.$ZodNonOptionalParams): ZodNonOptional<T>;
export interface ZodSuccess<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodSuccessInternals<T>>, core.$ZodSuccess<T> {
    unwrap(): T;
}
export declare const ZodSuccess: core.$constructor<ZodSuccess>;
export declare function success<T extends core.SomeType>(innerType: T): ZodSuccess<T>;
export interface ZodCatch<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodCatchInternals<T>>, core.$ZodCatch<T> {
    unwrap(): T;
    /** @deprecated Use `.unwrap()` instead. */
    removeCatch(): T;
}
export declare const ZodCatch: core.$constructor<ZodCatch>;
declare function _catch<T extends core.SomeType>(innerType: T, catchValue: core.output<T> | ((ctx: core.$ZodCatchCtx) => core.output<T>)): ZodCatch<T>;
export { _catch as catch };
export interface ZodNaN extends _ZodType<core.$ZodNaNInternals>, core.$ZodNaN {
}
export declare const ZodNaN: core.$constructor<ZodNaN>;
export declare function nan(params?: string | core.$ZodNaNParams): ZodNaN;
export interface ZodPipe<A extends core.SomeType = core.$ZodType, B extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodPipeInternals<A, B>>, core.$ZodPipe<A, B> {
    in: A;
    out: B;
}
export declare const ZodPipe: core.$constructor<ZodPipe>;
export declare function pipe<const A extends core.SomeType, B extends core.$ZodType<unknown, core.output<A>> = core.$ZodType<unknown, core.output<A>>>(in_: A, out: B | core.$ZodType<unknown, core.output<A>>): ZodPipe<A, B>;
export interface ZodReadonly<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodReadonlyInternals<T>>, core.$ZodReadonly<T> {
}
export declare const ZodReadonly: core.$constructor<ZodReadonly>;
export declare function readonly<T extends core.SomeType>(innerType: T): ZodReadonly<T>;
export interface ZodTemplateLiteral<Template extends string = string> extends _ZodType<core.$ZodTemplateLiteralInternals<Template>>, core.$ZodTemplateLiteral<Template> {
}
export declare const ZodTemplateLiteral: core.$constructor<ZodTemplateLiteral>;
export declare function templateLiteral<const Parts extends core.$ZodTemplateLiteralPart[]>(parts: Parts, params?: string | core.$ZodTemplateLiteralParams): ZodTemplateLiteral<core.$PartsToTemplateLiteral<Parts>>;
export interface ZodLazy<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodLazyInternals<T>>, core.$ZodLazy<T> {
    unwrap(): T;
}
export declare const ZodLazy: core.$constructor<ZodLazy>;
export declare function lazy<T extends core.SomeType>(getter: () => T): ZodLazy<T>;
export interface ZodPromise<T extends core.SomeType = core.$ZodType> extends _ZodType<core.$ZodPromiseInternals<T>>, core.$ZodPromise<T> {
    unwrap(): T;
}
export declare const ZodPromise: core.$constructor<ZodPromise>;
export declare function promise<T extends core.SomeType>(innerType: T): ZodPromise<T>;
export interface ZodCustom<O = unknown, I = unknown> extends _ZodType<core.$ZodCustomInternals<O, I>>, core.$ZodCustom<O, I> {
}
export declare const ZodCustom: core.$constructor<ZodCustom>;
export declare function check<O = unknown>(fn: core.CheckFn<O>): core.$ZodCheck<O>;
export declare function custom<O>(fn?: (data: unknown) => unknown, _params?: string | core.$ZodCustomParams | undefined): ZodCustom<O, O>;
export declare function refine<T>(fn: (arg: NoInfer<T>) => util.MaybeAsync<unknown>, _params?: string | core.$ZodCustomParams): core.$ZodCheck<T>;
export declare function superRefine<T>(fn: (arg: T, payload: RefinementCtx<T>) => void | Promise<void>): core.$ZodCheck<T>;
type ZodInstanceOfParams = core.Params<ZodCustom, core.$ZodIssueCustom, "type" | "check" | "checks" | "fn" | "abort" | "error" | "params" | "path">;
declare function _instanceof<T extends typeof util.Class>(cls: T, params?: ZodInstanceOfParams): ZodCustom<InstanceType<T>, InstanceType<T>>;
export { _instanceof as instanceof };
export declare const stringbool: (_params?: string | core.$ZodStringBoolParams) => ZodPipe<ZodPipe<ZodString, ZodTransform<boolean, string>>, ZodBoolean>;
type _ZodJSONSchema = ZodUnion<[
    ZodString,
    ZodNumber,
    ZodBoolean,
    ZodNull,
    ZodArray<ZodJSONSchema>,
    ZodRecord<ZodString, ZodJSONSchema>
]>;
type _ZodJSONSchemaInternals = _ZodJSONSchema["_zod"];
export interface ZodJSONSchemaInternals extends _ZodJSONSchemaInternals {
    output: util.JSONType;
    input: util.JSONType;
}
export interface ZodJSONSchema extends _ZodJSONSchema {
    _zod: ZodJSONSchemaInternals;
}
export declare function json(params?: string | core.$ZodCustomParams): ZodJSONSchema;
export declare function preprocess<A, U extends core.SomeType, B = unknown>(fn: (arg: B, ctx: RefinementCtx) => A, schema: U): ZodPipe<ZodTransform<A, B>, U>;
