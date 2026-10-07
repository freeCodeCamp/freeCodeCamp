import * as core from "../core/index.js";
import { util } from "../core/index.js";
type SomeType = core.SomeType;
export interface ZodMiniType<out Output = unknown, out Input = unknown, out Internals extends core.$ZodTypeInternals<Output, Input> = core.$ZodTypeInternals<Output, Input>> extends core.$ZodType<Output, Input, Internals> {
    check(...checks: (core.CheckFn<core.output<this>> | core.$ZodCheck<core.output<this>>)[]): this;
    clone(def?: Internals["def"], params?: {
        parent: boolean;
    }): this;
    register<R extends core.$ZodRegistry>(registry: R, ...meta: this extends R["_schema"] ? undefined extends R["_meta"] ? [core.$replace<R["_meta"], this>?] : [core.$replace<R["_meta"], this>] : ["Incompatible schema"]): this;
    brand<T extends PropertyKey = PropertyKey>(value?: T): PropertyKey extends T ? this : this & Record<"_zod", Record<"output", core.output<this> & core.$brand<T>>>;
    def: Internals["def"];
    parse(data: unknown, params?: core.ParseContext<core.$ZodIssue>): core.output<this>;
    safeParse(data: unknown, params?: core.ParseContext<core.$ZodIssue>): util.SafeParseResult<core.output<this>>;
    parseAsync(data: unknown, params?: core.ParseContext<core.$ZodIssue>): Promise<core.output<this>>;
    safeParseAsync(data: unknown, params?: core.ParseContext<core.$ZodIssue>): Promise<util.SafeParseResult<core.output<this>>>;
}
interface _ZodMiniType<out Internals extends core.$ZodTypeInternals = core.$ZodTypeInternals> extends ZodMiniType<any, any, Internals> {
}
export declare const ZodMiniType: core.$constructor<ZodMiniType>;
export interface _ZodMiniString<T extends core.$ZodStringInternals<unknown> = core.$ZodStringInternals<unknown>> extends _ZodMiniType<T>, core.$ZodString<T["input"]> {
    _zod: T;
}
export interface ZodMiniString<Input = unknown> extends _ZodMiniString<core.$ZodStringInternals<Input>>, core.$ZodString<Input> {
}
export declare const ZodMiniString: core.$constructor<ZodMiniString>;
export declare function string(params?: string | core.$ZodStringParams): ZodMiniString<string>;
export interface ZodMiniStringFormat<Format extends string = string> extends _ZodMiniString<core.$ZodStringFormatInternals<Format>>, core.$ZodStringFormat<Format> {
}
export declare const ZodMiniStringFormat: core.$constructor<ZodMiniStringFormat>;
export interface ZodMiniEmail extends _ZodMiniString<core.$ZodEmailInternals> {
}
export declare const ZodMiniEmail: core.$constructor<ZodMiniEmail>;
export declare function email(params?: string | core.$ZodEmailParams): ZodMiniEmail;
export interface ZodMiniGUID extends _ZodMiniString<core.$ZodGUIDInternals> {
}
export declare const ZodMiniGUID: core.$constructor<ZodMiniGUID>;
export declare function guid(params?: string | core.$ZodGUIDParams): ZodMiniGUID;
export interface ZodMiniUUID extends _ZodMiniString<core.$ZodUUIDInternals> {
}
export declare const ZodMiniUUID: core.$constructor<ZodMiniUUID>;
export declare function uuid(params?: string | core.$ZodUUIDParams): ZodMiniUUID;
export declare function uuidv4(params?: string | core.$ZodUUIDv4Params): ZodMiniUUID;
export declare function uuidv6(params?: string | core.$ZodUUIDv6Params): ZodMiniUUID;
export declare function uuidv7(params?: string | core.$ZodUUIDv7Params): ZodMiniUUID;
export interface ZodMiniURL extends _ZodMiniString<core.$ZodURLInternals> {
}
export declare const ZodMiniURL: core.$constructor<ZodMiniURL>;
export declare function url(params?: string | core.$ZodURLParams): ZodMiniURL;
export interface ZodMiniEmoji extends _ZodMiniString<core.$ZodEmojiInternals> {
}
export declare const ZodMiniEmoji: core.$constructor<ZodMiniEmoji>;
export declare function emoji(params?: string | core.$ZodEmojiParams): ZodMiniEmoji;
export interface ZodMiniNanoID extends _ZodMiniString<core.$ZodNanoIDInternals> {
}
export declare const ZodMiniNanoID: core.$constructor<ZodMiniNanoID>;
export declare function nanoid(params?: string | core.$ZodNanoIDParams): ZodMiniNanoID;
export interface ZodMiniCUID extends _ZodMiniString<core.$ZodCUIDInternals> {
}
export declare const ZodMiniCUID: core.$constructor<ZodMiniCUID>;
export declare function cuid(params?: string | core.$ZodCUIDParams): ZodMiniCUID;
export interface ZodMiniCUID2 extends _ZodMiniString<core.$ZodCUID2Internals> {
}
export declare const ZodMiniCUID2: core.$constructor<ZodMiniCUID2>;
export declare function cuid2(params?: string | core.$ZodCUID2Params): ZodMiniCUID2;
export interface ZodMiniULID extends _ZodMiniString<core.$ZodULIDInternals> {
}
export declare const ZodMiniULID: core.$constructor<ZodMiniULID>;
export declare function ulid(params?: string | core.$ZodULIDParams): ZodMiniULID;
export interface ZodMiniXID extends _ZodMiniString<core.$ZodXIDInternals> {
}
export declare const ZodMiniXID: core.$constructor<ZodMiniXID>;
export declare function xid(params?: string | core.$ZodXIDParams): ZodMiniXID;
export interface ZodMiniKSUID extends _ZodMiniString<core.$ZodKSUIDInternals> {
}
export declare const ZodMiniKSUID: core.$constructor<ZodMiniKSUID>;
export declare function ksuid(params?: string | core.$ZodKSUIDParams): ZodMiniKSUID;
export interface ZodMiniIPv4 extends _ZodMiniString<core.$ZodIPv4Internals> {
}
export declare const ZodMiniIPv4: core.$constructor<ZodMiniIPv4>;
export declare function ipv4(params?: string | core.$ZodIPv4Params): ZodMiniIPv4;
export interface ZodMiniIPv6 extends _ZodMiniString<core.$ZodIPv6Internals> {
}
export declare const ZodMiniIPv6: core.$constructor<ZodMiniIPv6>;
export declare function ipv6(params?: string | core.$ZodIPv6Params): ZodMiniIPv6;
export interface ZodMiniCIDRv4 extends _ZodMiniString<core.$ZodCIDRv4Internals> {
}
export declare const ZodMiniCIDRv4: core.$constructor<ZodMiniCIDRv4>;
export declare function cidrv4(params?: string | core.$ZodCIDRv4Params): ZodMiniCIDRv4;
export interface ZodMiniCIDRv6 extends _ZodMiniString<core.$ZodCIDRv6Internals> {
}
export declare const ZodMiniCIDRv6: core.$constructor<ZodMiniCIDRv6>;
export declare function cidrv6(params?: string | core.$ZodCIDRv6Params): ZodMiniCIDRv6;
export interface ZodMiniBase64 extends _ZodMiniString<core.$ZodBase64Internals> {
}
export declare const ZodMiniBase64: core.$constructor<ZodMiniBase64>;
export declare function base64(params?: string | core.$ZodBase64Params): ZodMiniBase64;
export interface ZodMiniBase64URL extends _ZodMiniString<core.$ZodBase64URLInternals> {
}
export declare const ZodMiniBase64URL: core.$constructor<ZodMiniBase64URL>;
export declare function base64url(params?: string | core.$ZodBase64URLParams): ZodMiniBase64URL;
export interface ZodMiniE164 extends _ZodMiniString<core.$ZodE164Internals> {
}
export declare const ZodMiniE164: core.$constructor<ZodMiniE164>;
export declare function e164(params?: string | core.$ZodE164Params): ZodMiniE164;
export interface ZodMiniJWT extends _ZodMiniString<core.$ZodJWTInternals> {
}
export declare const ZodMiniJWT: core.$constructor<ZodMiniJWT>;
export declare function jwt(params?: string | core.$ZodJWTParams): ZodMiniJWT;
export interface ZodMiniCustomStringFormat<Format extends string = string> extends ZodMiniStringFormat<Format>, core.$ZodCustomStringFormat<Format> {
    _zod: core.$ZodCustomStringFormatInternals<Format>;
}
export declare const ZodMiniCustomStringFormat: core.$constructor<ZodMiniCustomStringFormat>;
export declare function stringFormat<Format extends string>(format: Format, fnOrRegex: ((arg: string) => util.MaybeAsync<unknown>) | RegExp, _params?: string | core.$ZodStringFormatParams): ZodMiniCustomStringFormat<Format>;
interface _ZodMiniNumber<T extends core.$ZodNumberInternals<unknown> = core.$ZodNumberInternals<unknown>> extends _ZodMiniType<T>, core.$ZodNumber<T["input"]> {
    _zod: T;
}
export interface ZodMiniNumber<Input = unknown> extends _ZodMiniNumber<core.$ZodNumberInternals<Input>>, core.$ZodNumber<Input> {
}
export declare const ZodMiniNumber: core.$constructor<ZodMiniNumber>;
export declare function number(params?: string | core.$ZodNumberParams): ZodMiniNumber<number>;
export interface ZodMiniNumberFormat extends _ZodMiniNumber<core.$ZodNumberFormatInternals>, core.$ZodNumberFormat {
}
export declare const ZodMiniNumberFormat: core.$constructor<ZodMiniNumberFormat>;
export declare function int(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat;
export declare function float32(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat;
export declare function float64(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat;
export declare function int32(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat;
export declare function uint32(params?: string | core.$ZodCheckNumberFormatParams): ZodMiniNumberFormat;
export interface ZodMiniBoolean<T = unknown> extends _ZodMiniType<core.$ZodBooleanInternals<T>> {
}
export declare const ZodMiniBoolean: core.$constructor<ZodMiniBoolean>;
export declare function boolean(params?: string | core.$ZodBooleanParams): ZodMiniBoolean<boolean>;
export interface ZodMiniBigInt<T = unknown> extends _ZodMiniType<core.$ZodBigIntInternals<T>>, core.$ZodBigInt<T> {
}
export declare const ZodMiniBigInt: core.$constructor<ZodMiniBigInt>;
export declare function bigint(params?: string | core.$ZodBigIntParams): ZodMiniBigInt<bigint>;
export interface ZodMiniBigIntFormat extends _ZodMiniType<core.$ZodBigIntFormatInternals> {
}
export declare const ZodMiniBigIntFormat: core.$constructor<ZodMiniBigIntFormat>;
export declare function int64(params?: string | core.$ZodBigIntFormatParams): ZodMiniBigIntFormat;
export declare function uint64(params?: string | core.$ZodBigIntFormatParams): ZodMiniBigIntFormat;
export interface ZodMiniSymbol extends _ZodMiniType<core.$ZodSymbolInternals> {
}
export declare const ZodMiniSymbol: core.$constructor<ZodMiniSymbol>;
export declare function symbol(params?: string | core.$ZodSymbolParams): ZodMiniSymbol;
export interface ZodMiniUndefined extends _ZodMiniType<core.$ZodUndefinedInternals> {
}
export declare const ZodMiniUndefined: core.$constructor<ZodMiniUndefined>;
declare function _undefined(params?: string | core.$ZodUndefinedParams): ZodMiniUndefined;
export { _undefined as undefined };
export interface ZodMiniNull extends _ZodMiniType<core.$ZodNullInternals> {
}
export declare const ZodMiniNull: core.$constructor<ZodMiniNull>;
declare function _null(params?: string | core.$ZodNullParams): ZodMiniNull;
export { _null as null };
export interface ZodMiniAny extends _ZodMiniType<core.$ZodAnyInternals> {
}
export declare const ZodMiniAny: core.$constructor<ZodMiniAny>;
export declare function any(): ZodMiniAny;
export interface ZodMiniUnknown extends _ZodMiniType<core.$ZodUnknownInternals> {
}
export declare const ZodMiniUnknown: core.$constructor<ZodMiniUnknown>;
export declare function unknown(): ZodMiniUnknown;
export interface ZodMiniNever extends _ZodMiniType<core.$ZodNeverInternals> {
}
export declare const ZodMiniNever: core.$constructor<ZodMiniNever>;
export declare function never(params?: string | core.$ZodNeverParams): ZodMiniNever;
export interface ZodMiniVoid extends _ZodMiniType<core.$ZodVoidInternals> {
}
export declare const ZodMiniVoid: core.$constructor<ZodMiniVoid>;
declare function _void(params?: string | core.$ZodVoidParams): ZodMiniVoid;
export { _void as void };
export interface ZodMiniDate<T = unknown> extends _ZodMiniType<core.$ZodDateInternals<T>> {
}
export declare const ZodMiniDate: core.$constructor<ZodMiniDate>;
export declare function date(params?: string | core.$ZodDateParams): ZodMiniDate<Date>;
export interface ZodMiniArray<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodArrayInternals<T>>, core.$ZodArray<T> {
}
export declare const ZodMiniArray: core.$constructor<ZodMiniArray>;
export declare function array<T extends SomeType>(element: T, params?: string | core.$ZodArrayParams): ZodMiniArray<T>;
export declare function keyof<T extends ZodMiniObject>(schema: T): ZodMiniLiteral<Exclude<keyof T["shape"], symbol>>;
export interface ZodMiniObject<
/** @ts-ignore Cast variance */
out Shape extends core.$ZodShape = core.$ZodShape, out Config extends core.$ZodObjectConfig = core.$strip> extends ZodMiniType<any, any, core.$ZodObjectInternals<Shape, Config>>, core.$ZodObject<Shape, Config> {
    shape: Shape;
}
export declare const ZodMiniObject: core.$constructor<ZodMiniObject>;
export declare function object<T extends core.$ZodLooseShape = Record<never, SomeType>>(shape?: T, params?: string | core.$ZodObjectParams): ZodMiniObject<T, core.$strip>;
export declare function strictObject<T extends core.$ZodLooseShape>(shape: T, params?: string | core.$ZodObjectParams): ZodMiniObject<T, core.$strict>;
export declare function looseObject<T extends core.$ZodLooseShape>(shape: T, params?: string | core.$ZodObjectParams): ZodMiniObject<T, core.$loose>;
export declare function extend<T extends ZodMiniObject, U extends core.$ZodLooseShape>(schema: T, shape: U): ZodMiniObject<util.Extend<T["shape"], U>, T["_zod"]["config"]>;
/** @deprecated Identical to `z.extend(A, B)` */
export declare function merge<T extends ZodMiniObject, U extends ZodMiniObject>(a: T, b: U): ZodMiniObject<util.Extend<T["shape"], U["shape"]>, T["_zod"]["config"]>;
export declare function pick<T extends ZodMiniObject, M extends util.Mask<keyof T["shape"]>>(schema: T, mask: M): ZodMiniObject<util.Flatten<Pick<T["shape"], keyof T["shape"] & keyof M>>, T["_zod"]["config"]>;
export declare function omit<T extends ZodMiniObject, const M extends util.Mask<keyof T["shape"]>>(schema: T, mask: M): ZodMiniObject<util.Flatten<Omit<T["shape"], keyof M>>, T["_zod"]["config"]>;
export declare function partial<T extends ZodMiniObject>(schema: T): ZodMiniObject<{
    [k in keyof T["shape"]]: ZodMiniOptional<T["shape"][k]>;
}, T["_zod"]["config"]>;
export declare function partial<T extends ZodMiniObject, M extends util.Mask<keyof T["shape"]>>(schema: T, mask: M): ZodMiniObject<{
    [k in keyof T["shape"]]: k extends keyof M ? ZodMiniOptional<T["shape"][k]> : T["shape"][k];
}, T["_zod"]["config"]>;
export type RequiredInterfaceShape<Shape extends core.$ZodLooseShape, Keys extends PropertyKey = keyof Shape> = util.Identity<{
    [k in keyof Shape as k extends Keys ? k : never]: ZodMiniNonOptional<Shape[k]>;
} & {
    [k in keyof Shape as k extends Keys ? never : k]: Shape[k];
}>;
export declare function required<T extends ZodMiniObject>(schema: T): ZodMiniObject<{
    [k in keyof T["shape"]]: ZodMiniNonOptional<T["shape"][k]>;
}, T["_zod"]["config"]>;
export declare function required<T extends ZodMiniObject, M extends util.Mask<keyof T["shape"]>>(schema: T, mask: M): ZodMiniObject<util.Extend<T["shape"], {
    [k in keyof M & keyof T["shape"]]: ZodMiniNonOptional<T["shape"][k]>;
}>, T["_zod"]["config"]>;
export declare function catchall<T extends ZodMiniObject, U extends SomeType>(inst: T, catchall: U): ZodMiniObject<T["shape"], core.$catchall<U>>;
export interface ZodMiniUnion<T extends readonly SomeType[] = readonly core.$ZodType[]> extends _ZodMiniType<core.$ZodUnionInternals<T>> {
}
export declare const ZodMiniUnion: core.$constructor<ZodMiniUnion>;
export declare function union<const T extends readonly SomeType[]>(options: T, params?: string | core.$ZodUnionParams): ZodMiniUnion<T>;
export interface ZodMiniDiscriminatedUnion<Options extends readonly SomeType[] = readonly core.$ZodType[]> extends ZodMiniUnion<Options> {
    _zod: core.$ZodDiscriminatedUnionInternals<Options>;
}
export declare const ZodMiniDiscriminatedUnion: core.$constructor<ZodMiniDiscriminatedUnion>;
export declare function discriminatedUnion<Types extends readonly [core.$ZodTypeDiscriminable, ...core.$ZodTypeDiscriminable[]]>(discriminator: string, options: Types, params?: string | core.$ZodDiscriminatedUnionParams): ZodMiniDiscriminatedUnion<Types>;
export interface ZodMiniIntersection<A extends SomeType = core.$ZodType, B extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodIntersectionInternals<A, B>> {
}
export declare const ZodMiniIntersection: core.$constructor<ZodMiniIntersection>;
export declare function intersection<T extends SomeType, U extends SomeType>(left: T, right: U): ZodMiniIntersection<T, U>;
export interface ZodMiniTuple<T extends util.TupleItems = readonly core.$ZodType[], Rest extends SomeType | null = core.$ZodType | null> extends _ZodMiniType<core.$ZodTupleInternals<T, Rest>> {
}
export declare const ZodMiniTuple: core.$constructor<ZodMiniTuple>;
export declare function tuple<const T extends readonly [SomeType, ...SomeType[]]>(items: T, params?: string | core.$ZodTupleParams): ZodMiniTuple<T, null>;
export declare function tuple<const T extends readonly [SomeType, ...SomeType[]], Rest extends SomeType>(items: T, rest: Rest, params?: string | core.$ZodTupleParams): ZodMiniTuple<T, Rest>;
export declare function tuple(items: [], params?: string | core.$ZodTupleParams): ZodMiniTuple<[], null>;
export interface ZodMiniRecord<Key extends core.$ZodRecordKey = core.$ZodRecordKey, Value extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodRecordInternals<Key, Value>> {
}
export declare const ZodMiniRecord: core.$constructor<ZodMiniRecord>;
export declare function record<Key extends core.$ZodRecordKey, Value extends SomeType>(keyType: Key, valueType: Value, params?: string | core.$ZodRecordParams): ZodMiniRecord<Key, Value>;
export declare function partialRecord<Key extends core.$ZodRecordKey, Value extends SomeType>(keyType: Key, valueType: Value, params?: string | core.$ZodRecordParams): ZodMiniRecord<Key & core.$partial, Value>;
export interface ZodMiniMap<Key extends SomeType = core.$ZodType, Value extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodMapInternals<Key, Value>> {
}
export declare const ZodMiniMap: core.$constructor<ZodMiniMap>;
export declare function map<Key extends SomeType, Value extends SomeType>(keyType: Key, valueType: Value, params?: string | core.$ZodMapParams): ZodMiniMap<Key, Value>;
export interface ZodMiniSet<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodSetInternals<T>> {
}
export declare const ZodMiniSet: core.$constructor<ZodMiniSet>;
export declare function set<Value extends SomeType>(valueType: Value, params?: string | core.$ZodSetParams): ZodMiniSet<Value>;
export interface ZodMiniEnum<T extends util.EnumLike = util.EnumLike> extends _ZodMiniType<core.$ZodEnumInternals<T>> {
}
export declare const ZodMiniEnum: core.$constructor<ZodMiniEnum>;
declare function _enum<const T extends readonly string[]>(values: T, params?: string | core.$ZodEnumParams): ZodMiniEnum<util.ToEnum<T[number]>>;
declare function _enum<T extends util.EnumLike>(entries: T, params?: string | core.$ZodEnumParams): ZodMiniEnum<T>;
export { _enum as enum };
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
 *
 * ```ts
 * enum Colors { red, green, blue }
 * z.enum(Colors);
 * ```
 */
export declare function nativeEnum<T extends util.EnumLike>(entries: T, params?: string | core.$ZodEnumParams): ZodMiniEnum<T>;
export interface ZodMiniLiteral<T extends util.Literal = util.Literal> extends _ZodMiniType<core.$ZodLiteralInternals<T>> {
}
export declare const ZodMiniLiteral: core.$constructor<ZodMiniLiteral>;
export declare function literal<const T extends ReadonlyArray<util.Literal>>(value: T, params?: string | core.$ZodLiteralParams): ZodMiniLiteral<T[number]>;
export declare function literal<const T extends util.Literal>(value: T, params?: string | core.$ZodLiteralParams): ZodMiniLiteral<T>;
export interface ZodMiniFile extends _ZodMiniType<core.$ZodFileInternals> {
}
export declare const ZodMiniFile: core.$constructor<ZodMiniFile>;
export declare function file(params?: string | core.$ZodFileParams): ZodMiniFile;
export interface ZodMiniTransform<O = unknown, I = unknown> extends _ZodMiniType<core.$ZodTransformInternals<O, I>> {
}
export declare const ZodMiniTransform: core.$constructor<ZodMiniTransform>;
export declare function transform<I = unknown, O = I>(fn: (input: I, ctx: core.ParsePayload) => O): ZodMiniTransform<Awaited<O>, I>;
export interface ZodMiniOptional<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodOptionalInternals<T>>, core.$ZodOptional<T> {
}
export declare const ZodMiniOptional: core.$constructor<ZodMiniOptional>;
export declare function optional<T extends SomeType>(innerType: T): ZodMiniOptional<T>;
export interface ZodMiniNullable<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodNullableInternals<T>> {
}
export declare const ZodMiniNullable: core.$constructor<ZodMiniNullable>;
export declare function nullable<T extends SomeType>(innerType: T): ZodMiniNullable<T>;
export declare function nullish<T extends SomeType>(innerType: T): ZodMiniOptional<ZodMiniNullable<T>>;
export interface ZodMiniDefault<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodDefaultInternals<T>> {
}
export declare const ZodMiniDefault: core.$constructor<ZodMiniDefault>;
export declare function _default<T extends SomeType>(innerType: T, defaultValue: util.NoUndefined<core.output<T>> | (() => util.NoUndefined<core.output<T>>)): ZodMiniDefault<T>;
export interface ZodMiniPrefault<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodPrefaultInternals<T>> {
}
export declare const ZodMiniPrefault: core.$constructor<ZodMiniPrefault>;
export declare function prefault<T extends SomeType>(innerType: T, defaultValue: util.NoUndefined<core.input<T>> | (() => util.NoUndefined<core.input<T>>)): ZodMiniPrefault<T>;
export interface ZodMiniNonOptional<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodNonOptionalInternals<T>> {
}
export declare const ZodMiniNonOptional: core.$constructor<ZodMiniNonOptional>;
export declare function nonoptional<T extends SomeType>(innerType: T, params?: string | core.$ZodNonOptionalParams): ZodMiniNonOptional<T>;
export interface ZodMiniSuccess<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodSuccessInternals<T>> {
}
export declare const ZodMiniSuccess: core.$constructor<ZodMiniSuccess>;
export declare function success<T extends SomeType>(innerType: T): ZodMiniSuccess<T>;
export interface ZodMiniCatch<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodCatchInternals<T>> {
}
export declare const ZodMiniCatch: core.$constructor<ZodMiniCatch>;
declare function _catch<T extends SomeType>(innerType: T, catchValue: core.output<T> | ((ctx: core.$ZodCatchCtx) => core.output<T>)): ZodMiniCatch<T>;
export { _catch as catch };
export interface ZodMiniNaN extends _ZodMiniType<core.$ZodNaNInternals> {
}
export declare const ZodMiniNaN: core.$constructor<ZodMiniNaN>;
export declare function nan(params?: string | core.$ZodNaNParams): ZodMiniNaN;
export interface ZodMiniPipe<A extends SomeType = core.$ZodType, B extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodPipeInternals<A, B>> {
}
export declare const ZodMiniPipe: core.$constructor<ZodMiniPipe>;
export declare function pipe<const A extends SomeType, B extends core.$ZodType<unknown, core.output<A>> = core.$ZodType<unknown, core.output<A>>>(in_: A, out: B | core.$ZodType<unknown, core.output<A>>): ZodMiniPipe<A, B>;
export interface ZodMiniReadonly<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodReadonlyInternals<T>> {
}
export declare const ZodMiniReadonly: core.$constructor<ZodMiniReadonly>;
export declare function readonly<T extends SomeType>(innerType: T): ZodMiniReadonly<T>;
export interface ZodMiniTemplateLiteral<Template extends string = string> extends _ZodMiniType<core.$ZodTemplateLiteralInternals<Template>> {
}
export declare const ZodMiniTemplateLiteral: core.$constructor<ZodMiniTemplateLiteral>;
export declare function templateLiteral<const Parts extends core.$ZodTemplateLiteralPart[]>(parts: Parts, params?: string | core.$ZodTemplateLiteralParams): ZodMiniTemplateLiteral<core.$PartsToTemplateLiteral<Parts>>;
export interface ZodMiniLazy<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodLazyInternals<T>> {
}
export declare const ZodMiniLazy: core.$constructor<ZodMiniLazy>;
declare function _lazy<T extends SomeType>(getter: () => T): ZodMiniLazy<T>;
export { _lazy as lazy };
export interface ZodMiniPromise<T extends SomeType = core.$ZodType> extends _ZodMiniType<core.$ZodPromiseInternals<T>> {
}
export declare const ZodMiniPromise: core.$constructor<ZodMiniPromise>;
export declare function promise<T extends SomeType>(innerType: T): ZodMiniPromise<T>;
export interface ZodMiniCustom<O = unknown, I = unknown> extends _ZodMiniType<core.$ZodCustomInternals<O, I>> {
}
export declare const ZodMiniCustom: core.$constructor<ZodMiniCustom>;
export declare function check<O = unknown>(fn: core.CheckFn<O>, params?: string | core.$ZodCustomParams): core.$ZodCheck<O>;
export declare function custom<O = unknown, I = O>(fn?: (data: O) => unknown, _params?: string | core.$ZodCustomParams | undefined): ZodMiniCustom<O, I>;
export declare function refine<T>(fn: (arg: NoInfer<T>) => util.MaybeAsync<unknown>, _params?: string | core.$ZodCustomParams): core.$ZodCheck<T>;
declare abstract class Class {
    constructor(..._args: any[]);
}
declare function _instanceof<T extends typeof Class>(cls: T, params?: core.$ZodCustomParams): ZodMiniCustom<InstanceType<T>, InstanceType<T>>;
export { _instanceof as instanceof };
export declare const stringbool: (_params?: string | core.$ZodStringBoolParams) => ZodMiniPipe<ZodMiniPipe<ZodMiniString, ZodMiniTransform<boolean, string>>, ZodMiniBoolean>;
type _ZodMiniJSONSchema = ZodMiniUnion<[
    ZodMiniString,
    ZodMiniNumber,
    ZodMiniBoolean,
    ZodMiniNull,
    ZodMiniArray<ZodMiniJSONSchema>,
    ZodMiniRecord<ZodMiniString<string>, ZodMiniJSONSchema>
]>;
type _ZodMiniJSONSchemaInternals = _ZodMiniJSONSchema["_zod"];
export interface ZodMiniJSONSchemaInternals extends _ZodMiniJSONSchemaInternals {
    output: util.JSONType;
    input: util.JSONType;
}
export interface ZodMiniJSONSchema extends _ZodMiniJSONSchema {
    _zod: ZodMiniJSONSchemaInternals;
}
export declare function json(): ZodMiniJSONSchema;
