import * as checks from "./checks.js";
import * as core from "./core.js";
import type * as errors from "./errors.js";
import type { StandardSchemaV1 } from "./standard-schema.js";
import * as util from "./util.js";
import { version } from "./versions.js";
export interface ParseContext<T extends errors.$ZodIssueBase = never> {
    /** Customize error messages. */
    readonly error?: errors.$ZodErrorMap<T>;
    /** Include the `input` field in issue objects. Default `false`. */
    readonly reportInput?: boolean;
    /** Skip eval-based fast path. Default `false`. */
    readonly jitless?: boolean;
}
/** @internal */
export interface ParseContextInternal<T extends errors.$ZodIssueBase = never> extends ParseContext<T> {
    readonly async?: boolean | undefined;
}
export interface ParsePayload<T = unknown> {
    value: T;
    issues: errors.$ZodRawIssue[];
}
export type CheckFn<T> = (input: ParsePayload<T>) => util.MaybeAsync<void>;
export interface $ZodTypeDef {
    type: "string" | "number" | "int" | "boolean" | "bigint" | "symbol" | "null" | "undefined" | "void" | "never" | "any" | "unknown" | "date" | "object" | "record" | "file" | "array" | "tuple" | "union" | "intersection" | "map" | "set" | "enum" | "literal" | "nullable" | "optional" | "nonoptional" | "success" | "transform" | "default" | "prefault" | "catch" | "nan" | "pipe" | "readonly" | "template_literal" | "promise" | "lazy" | "custom";
    error?: errors.$ZodErrorMap<never> | undefined;
    checks?: checks.$ZodCheck<never>[];
}
export interface _$ZodTypeInternals {
    /** The `@zod/core` version of this schema */
    version: typeof version;
    /** Schema definition. */
    def: $ZodTypeDef;
    /** @internal Randomly generated ID for this schema. */
    /** @internal List of deferred initializers. */
    deferred: util.AnyFunc[] | undefined;
    /** @internal Parses input and runs all checks (refinements). */
    run(payload: ParsePayload<any>, ctx: ParseContextInternal): util.MaybeAsync<ParsePayload>;
    /** @internal Parses input, doesn't run checks. */
    parse(payload: ParsePayload<any>, ctx: ParseContextInternal): util.MaybeAsync<ParsePayload>;
    /** @internal  Stores identifiers for the set of traits implemented by this schema. */
    traits: Set<string>;
    /** @internal Indicates that a schema output type should be considered optional inside objects.
     * @default Required
     */
    /** @internal */
    optin?: "optional" | undefined;
    /** @internal */
    optout?: "optional" | undefined;
    /** @internal The set of literal values that will pass validation. Must be an exhaustive set. Used to determine optionality in z.record().
     *
     * Defined on: enum, const, literal, null, undefined
     * Passthrough: optional, nullable, branded, default, catch, pipe
     * Todo: unions?
     */
    values?: util.PrimitiveSet | undefined;
    /** @internal A set of literal discriminators used for the fast path in discriminated unions. */
    propValues?: util.PropValues | undefined;
    /** @internal This flag indicates that a schema validation can be represented with a regular expression. Used to determine allowable schemas in z.templateLiteral(). */
    pattern: RegExp | undefined;
    /** @internal The constructor function of this schema. */
    constr: new (def: any) => $ZodType;
    /** @internal A catchall object for bag metadata related to this schema. Commonly modified by checks using `onattach`. */
    bag: Record<string, unknown>;
    /** @internal The set of issues this schema might throw during type checking. */
    isst: errors.$ZodIssueBase;
    /** An optional method used to override `toJSONSchema` logic. */
    toJSONSchema?: () => unknown;
    /** @internal The parent of this schema. Only set during certain clone operations. */
    parent?: $ZodType | undefined;
}
/** @internal */
export interface $ZodTypeInternals<out O = unknown, out I = unknown> extends _$ZodTypeInternals {
    /** @internal The inferred output type */
    output: O;
    /** @internal The inferred input type */
    input: I;
}
export type $ZodStandardSchema<T> = StandardSchemaV1.Props<core.input<T>, core.output<T>>;
export type SomeType = {
    _zod: _$ZodTypeInternals;
};
export interface $ZodType<O = unknown, I = unknown, Internals extends $ZodTypeInternals<O, I> = $ZodTypeInternals<O, I>> {
    _zod: Internals;
    "~standard": $ZodStandardSchema<this>;
}
export interface _$ZodType<T extends $ZodTypeInternals = $ZodTypeInternals> extends $ZodType<T["output"], T["input"], T> {
}
export declare const $ZodType: core.$constructor<$ZodType>;
export { clone } from "./util.js";
export interface $ZodStringDef extends $ZodTypeDef {
    type: "string";
    coerce?: boolean;
    checks?: checks.$ZodCheck<string>[];
}
export interface $ZodStringInternals<Input> extends $ZodTypeInternals<string, Input> {
    def: $ZodStringDef;
    /** @deprecated Internal API, use with caution (not deprecated) */
    pattern: RegExp;
    /** @deprecated Internal API, use with caution (not deprecated) */
    isst: errors.$ZodIssueInvalidType;
    bag: util.LoosePartial<{
        minimum: number;
        maximum: number;
        patterns: Set<RegExp>;
        format: string;
        contentEncoding: string;
    }>;
}
export interface $ZodString<Input = unknown> extends _$ZodType<$ZodStringInternals<Input>> {
}
export declare const $ZodString: core.$constructor<$ZodString>;
export interface $ZodStringFormatDef<Format extends string = string> extends $ZodStringDef, checks.$ZodCheckStringFormatDef<Format> {
}
export interface $ZodStringFormatInternals<Format extends string = string> extends $ZodStringInternals<string>, checks.$ZodCheckStringFormatInternals {
    def: $ZodStringFormatDef<Format>;
}
export interface $ZodStringFormat<Format extends string = string> extends $ZodType {
    _zod: $ZodStringFormatInternals<Format>;
}
export declare const $ZodStringFormat: core.$constructor<$ZodStringFormat>;
export interface $ZodGUIDDef extends $ZodStringFormatDef<"guid"> {
}
export interface $ZodGUIDInternals extends $ZodStringFormatInternals<"guid"> {
}
export interface $ZodGUID extends $ZodType {
    _zod: $ZodGUIDInternals;
}
export declare const $ZodGUID: core.$constructor<$ZodGUID>;
export interface $ZodUUIDDef extends $ZodStringFormatDef<"uuid"> {
    version?: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8";
}
export interface $ZodUUIDInternals extends $ZodStringFormatInternals<"uuid"> {
    def: $ZodUUIDDef;
}
export interface $ZodUUID extends $ZodType {
    _zod: $ZodUUIDInternals;
}
export declare const $ZodUUID: core.$constructor<$ZodUUID>;
export interface $ZodEmailDef extends $ZodStringFormatDef<"email"> {
}
export interface $ZodEmailInternals extends $ZodStringFormatInternals<"email"> {
}
export interface $ZodEmail extends $ZodType {
    _zod: $ZodEmailInternals;
}
export declare const $ZodEmail: core.$constructor<$ZodEmail>;
export interface $ZodURLDef extends $ZodStringFormatDef<"url"> {
    hostname?: RegExp | undefined;
    protocol?: RegExp | undefined;
}
export interface $ZodURLInternals extends $ZodStringFormatInternals<"url"> {
    def: $ZodURLDef;
}
export interface $ZodURL extends $ZodType {
    _zod: $ZodURLInternals;
}
export declare const $ZodURL: core.$constructor<$ZodURL>;
export interface $ZodEmojiDef extends $ZodStringFormatDef<"emoji"> {
}
export interface $ZodEmojiInternals extends $ZodStringFormatInternals<"emoji"> {
}
export interface $ZodEmoji extends $ZodType {
    _zod: $ZodEmojiInternals;
}
export declare const $ZodEmoji: core.$constructor<$ZodEmoji>;
export interface $ZodNanoIDDef extends $ZodStringFormatDef<"nanoid"> {
}
export interface $ZodNanoIDInternals extends $ZodStringFormatInternals<"nanoid"> {
}
export interface $ZodNanoID extends $ZodType {
    _zod: $ZodNanoIDInternals;
}
export declare const $ZodNanoID: core.$constructor<$ZodNanoID>;
export interface $ZodCUIDDef extends $ZodStringFormatDef<"cuid"> {
}
export interface $ZodCUIDInternals extends $ZodStringFormatInternals<"cuid"> {
}
export interface $ZodCUID extends $ZodType {
    _zod: $ZodCUIDInternals;
}
export declare const $ZodCUID: core.$constructor<$ZodCUID>;
export interface $ZodCUID2Def extends $ZodStringFormatDef<"cuid2"> {
}
export interface $ZodCUID2Internals extends $ZodStringFormatInternals<"cuid2"> {
}
export interface $ZodCUID2 extends $ZodType {
    _zod: $ZodCUID2Internals;
}
export declare const $ZodCUID2: core.$constructor<$ZodCUID2>;
export interface $ZodULIDDef extends $ZodStringFormatDef<"ulid"> {
}
export interface $ZodULIDInternals extends $ZodStringFormatInternals<"ulid"> {
}
export interface $ZodULID extends $ZodType {
    _zod: $ZodULIDInternals;
}
export declare const $ZodULID: core.$constructor<$ZodULID>;
export interface $ZodXIDDef extends $ZodStringFormatDef<"xid"> {
}
export interface $ZodXIDInternals extends $ZodStringFormatInternals<"xid"> {
}
export interface $ZodXID extends $ZodType {
    _zod: $ZodXIDInternals;
}
export declare const $ZodXID: core.$constructor<$ZodXID>;
export interface $ZodKSUIDDef extends $ZodStringFormatDef<"ksuid"> {
}
export interface $ZodKSUIDInternals extends $ZodStringFormatInternals<"ksuid"> {
}
export interface $ZodKSUID extends $ZodType {
    _zod: $ZodKSUIDInternals;
}
export declare const $ZodKSUID: core.$constructor<$ZodKSUID>;
export interface $ZodISODateTimeDef extends $ZodStringFormatDef<"datetime"> {
    precision: number | null;
    offset: boolean;
    local: boolean;
}
export interface $ZodISODateTimeInternals extends $ZodStringFormatInternals {
    def: $ZodISODateTimeDef;
}
export interface $ZodISODateTime extends $ZodType {
    _zod: $ZodISODateTimeInternals;
}
export declare const $ZodISODateTime: core.$constructor<$ZodISODateTime>;
export interface $ZodISODateDef extends $ZodStringFormatDef<"date"> {
}
export interface $ZodISODateInternals extends $ZodStringFormatInternals<"date"> {
}
export interface $ZodISODate extends $ZodType {
    _zod: $ZodISODateInternals;
}
export declare const $ZodISODate: core.$constructor<$ZodISODate>;
export interface $ZodISOTimeDef extends $ZodStringFormatDef<"time"> {
    precision?: number | null;
}
export interface $ZodISOTimeInternals extends $ZodStringFormatInternals<"time"> {
    def: $ZodISOTimeDef;
}
export interface $ZodISOTime extends $ZodType {
    _zod: $ZodISOTimeInternals;
}
export declare const $ZodISOTime: core.$constructor<$ZodISOTime>;
export interface $ZodISODurationDef extends $ZodStringFormatDef<"duration"> {
}
export interface $ZodISODurationInternals extends $ZodStringFormatInternals<"duration"> {
}
export interface $ZodISODuration extends $ZodType {
    _zod: $ZodISODurationInternals;
}
export declare const $ZodISODuration: core.$constructor<$ZodISODuration>;
export interface $ZodIPv4Def extends $ZodStringFormatDef<"ipv4"> {
    version?: "v4";
}
export interface $ZodIPv4Internals extends $ZodStringFormatInternals<"ipv4"> {
    def: $ZodIPv4Def;
}
export interface $ZodIPv4 extends $ZodType {
    _zod: $ZodIPv4Internals;
}
export declare const $ZodIPv4: core.$constructor<$ZodIPv4>;
export interface $ZodIPv6Def extends $ZodStringFormatDef<"ipv6"> {
    version?: "v6";
}
export interface $ZodIPv6Internals extends $ZodStringFormatInternals<"ipv6"> {
    def: $ZodIPv6Def;
}
export interface $ZodIPv6 extends $ZodType {
    _zod: $ZodIPv6Internals;
}
export declare const $ZodIPv6: core.$constructor<$ZodIPv6>;
export interface $ZodCIDRv4Def extends $ZodStringFormatDef<"cidrv4"> {
    version?: "v4";
}
export interface $ZodCIDRv4Internals extends $ZodStringFormatInternals<"cidrv4"> {
    def: $ZodCIDRv4Def;
}
export interface $ZodCIDRv4 extends $ZodType {
    _zod: $ZodCIDRv4Internals;
}
export declare const $ZodCIDRv4: core.$constructor<$ZodCIDRv4>;
export interface $ZodCIDRv6Def extends $ZodStringFormatDef<"cidrv6"> {
    version?: "v6";
}
export interface $ZodCIDRv6Internals extends $ZodStringFormatInternals<"cidrv6"> {
    def: $ZodCIDRv6Def;
}
export interface $ZodCIDRv6 extends $ZodType {
    _zod: $ZodCIDRv6Internals;
}
export declare const $ZodCIDRv6: core.$constructor<$ZodCIDRv6>;
export declare function isValidBase64(data: string): boolean;
export interface $ZodBase64Def extends $ZodStringFormatDef<"base64"> {
}
export interface $ZodBase64Internals extends $ZodStringFormatInternals<"base64"> {
}
export interface $ZodBase64 extends $ZodType {
    _zod: $ZodBase64Internals;
}
export declare const $ZodBase64: core.$constructor<$ZodBase64>;
export declare function isValidBase64URL(data: string): boolean;
export interface $ZodBase64URLDef extends $ZodStringFormatDef<"base64url"> {
}
export interface $ZodBase64URLInternals extends $ZodStringFormatInternals<"base64url"> {
}
export interface $ZodBase64URL extends $ZodType {
    _zod: $ZodBase64URLInternals;
}
export declare const $ZodBase64URL: core.$constructor<$ZodBase64URL>;
export interface $ZodE164Def extends $ZodStringFormatDef<"e164"> {
}
export interface $ZodE164Internals extends $ZodStringFormatInternals<"e164"> {
}
export interface $ZodE164 extends $ZodType {
    _zod: $ZodE164Internals;
}
export declare const $ZodE164: core.$constructor<$ZodE164>;
export declare function isValidJWT(token: string, algorithm?: util.JWTAlgorithm | null): boolean;
export interface $ZodJWTDef extends $ZodStringFormatDef<"jwt"> {
    alg?: util.JWTAlgorithm | undefined;
}
export interface $ZodJWTInternals extends $ZodStringFormatInternals<"jwt"> {
    def: $ZodJWTDef;
}
export interface $ZodJWT extends $ZodType {
    _zod: $ZodJWTInternals;
}
export declare const $ZodJWT: core.$constructor<$ZodJWT>;
export interface $ZodCustomStringFormatDef<Format extends string = string> extends $ZodStringFormatDef<Format> {
    fn: (val: string) => unknown;
}
export interface $ZodCustomStringFormatInternals<Format extends string = string> extends $ZodStringFormatInternals<Format> {
    def: $ZodCustomStringFormatDef<Format>;
}
export interface $ZodCustomStringFormat<Format extends string = string> extends $ZodStringFormat<Format> {
    _zod: $ZodCustomStringFormatInternals<Format>;
}
export declare const $ZodCustomStringFormat: core.$constructor<$ZodCustomStringFormat>;
export interface $ZodNumberDef extends $ZodTypeDef {
    type: "number";
    coerce?: boolean;
}
export interface $ZodNumberInternals<Input = unknown> extends $ZodTypeInternals<number, Input> {
    def: $ZodNumberDef;
    /** @deprecated Internal API, use with caution (not deprecated) */
    pattern: RegExp;
    /** @deprecated Internal API, use with caution (not deprecated) */
    isst: errors.$ZodIssueInvalidType;
    bag: util.LoosePartial<{
        minimum: number;
        maximum: number;
        exclusiveMinimum: number;
        exclusiveMaximum: number;
        format: string;
        pattern: RegExp;
    }>;
}
export interface $ZodNumber<Input = unknown> extends $ZodType {
    _zod: $ZodNumberInternals<Input>;
}
export declare const $ZodNumber: core.$constructor<$ZodNumber>;
export interface $ZodNumberFormatDef extends $ZodNumberDef, checks.$ZodCheckNumberFormatDef {
}
export interface $ZodNumberFormatInternals extends $ZodNumberInternals<number>, checks.$ZodCheckNumberFormatInternals {
    def: $ZodNumberFormatDef;
    isst: errors.$ZodIssueInvalidType;
}
export interface $ZodNumberFormat extends $ZodType {
    _zod: $ZodNumberFormatInternals;
}
export declare const $ZodNumberFormat: core.$constructor<$ZodNumberFormat>;
export interface $ZodBooleanDef extends $ZodTypeDef {
    type: "boolean";
    coerce?: boolean;
    checks?: checks.$ZodCheck<boolean>[];
}
export interface $ZodBooleanInternals<T = unknown> extends $ZodTypeInternals<boolean, T> {
    pattern: RegExp;
    def: $ZodBooleanDef;
    isst: errors.$ZodIssueInvalidType;
}
export interface $ZodBoolean<T = unknown> extends $ZodType {
    _zod: $ZodBooleanInternals<T>;
}
export declare const $ZodBoolean: core.$constructor<$ZodBoolean>;
export interface $ZodBigIntDef extends $ZodTypeDef {
    type: "bigint";
    coerce?: boolean;
}
export interface $ZodBigIntInternals<T = unknown> extends $ZodTypeInternals<bigint, T> {
    pattern: RegExp;
    /** @internal Internal API, use with caution */
    def: $ZodBigIntDef;
    isst: errors.$ZodIssueInvalidType;
    bag: util.LoosePartial<{
        minimum: bigint;
        maximum: bigint;
        format: string;
    }>;
}
export interface $ZodBigInt<T = unknown> extends $ZodType {
    _zod: $ZodBigIntInternals<T>;
}
export declare const $ZodBigInt: core.$constructor<$ZodBigInt>;
export interface $ZodBigIntFormatDef extends $ZodBigIntDef, checks.$ZodCheckBigIntFormatDef {
    check: "bigint_format";
}
export interface $ZodBigIntFormatInternals extends $ZodBigIntInternals<bigint>, checks.$ZodCheckBigIntFormatInternals {
    def: $ZodBigIntFormatDef;
}
export interface $ZodBigIntFormat extends $ZodType {
    _zod: $ZodBigIntFormatInternals;
}
export declare const $ZodBigIntFormat: core.$constructor<$ZodBigIntFormat>;
export interface $ZodSymbolDef extends $ZodTypeDef {
    type: "symbol";
}
export interface $ZodSymbolInternals extends $ZodTypeInternals<symbol, symbol> {
    def: $ZodSymbolDef;
    isst: errors.$ZodIssueInvalidType;
}
export interface $ZodSymbol extends $ZodType {
    _zod: $ZodSymbolInternals;
}
export declare const $ZodSymbol: core.$constructor<$ZodSymbol>;
export interface $ZodUndefinedDef extends $ZodTypeDef {
    type: "undefined";
}
export interface $ZodUndefinedInternals extends $ZodTypeInternals<undefined, undefined> {
    pattern: RegExp;
    def: $ZodUndefinedDef;
    values: util.PrimitiveSet;
    isst: errors.$ZodIssueInvalidType;
}
export interface $ZodUndefined extends $ZodType {
    _zod: $ZodUndefinedInternals;
}
export declare const $ZodUndefined: core.$constructor<$ZodUndefined>;
export interface $ZodNullDef extends $ZodTypeDef {
    type: "null";
}
export interface $ZodNullInternals extends $ZodTypeInternals<null, null> {
    pattern: RegExp;
    def: $ZodNullDef;
    values: util.PrimitiveSet;
    isst: errors.$ZodIssueInvalidType;
}
export interface $ZodNull extends $ZodType {
    _zod: $ZodNullInternals;
}
export declare const $ZodNull: core.$constructor<$ZodNull>;
export interface $ZodAnyDef extends $ZodTypeDef {
    type: "any";
}
export interface $ZodAnyInternals extends $ZodTypeInternals<any, any> {
    def: $ZodAnyDef;
    isst: never;
}
export interface $ZodAny extends $ZodType {
    _zod: $ZodAnyInternals;
}
export declare const $ZodAny: core.$constructor<$ZodAny>;
export interface $ZodUnknownDef extends $ZodTypeDef {
    type: "unknown";
}
export interface $ZodUnknownInternals extends $ZodTypeInternals<unknown, unknown> {
    def: $ZodUnknownDef;
    isst: never;
}
export interface $ZodUnknown extends $ZodType {
    _zod: $ZodUnknownInternals;
}
export declare const $ZodUnknown: core.$constructor<$ZodUnknown>;
export interface $ZodNeverDef extends $ZodTypeDef {
    type: "never";
}
export interface $ZodNeverInternals extends $ZodTypeInternals<never, never> {
    def: $ZodNeverDef;
    isst: errors.$ZodIssueInvalidType;
}
export interface $ZodNever extends $ZodType {
    _zod: $ZodNeverInternals;
}
export declare const $ZodNever: core.$constructor<$ZodNever>;
export interface $ZodVoidDef extends $ZodTypeDef {
    type: "void";
}
export interface $ZodVoidInternals extends $ZodTypeInternals<void, void> {
    def: $ZodVoidDef;
    isst: errors.$ZodIssueInvalidType;
}
export interface $ZodVoid extends $ZodType {
    _zod: $ZodVoidInternals;
}
export declare const $ZodVoid: core.$constructor<$ZodVoid>;
export interface $ZodDateDef extends $ZodTypeDef {
    type: "date";
    coerce?: boolean;
}
export interface $ZodDateInternals<T = unknown> extends $ZodTypeInternals<Date, T> {
    def: $ZodDateDef;
    isst: errors.$ZodIssueInvalidType;
    bag: util.LoosePartial<{
        minimum: Date;
        maximum: Date;
        format: string;
    }>;
}
export interface $ZodDate<T = unknown> extends $ZodType {
    _zod: $ZodDateInternals<T>;
}
export declare const $ZodDate: core.$constructor<$ZodDate>;
export interface $ZodArrayDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "array";
    element: T;
}
export interface $ZodArrayInternals<T extends SomeType = $ZodType> extends _$ZodTypeInternals {
    def: $ZodArrayDef<T>;
    isst: errors.$ZodIssueInvalidType;
    output: core.output<T>[];
    input: core.input<T>[];
}
export interface $ZodArray<T extends SomeType = $ZodType> extends $ZodType<any, any, $ZodArrayInternals<T>> {
}
export declare const $ZodArray: core.$constructor<$ZodArray>;
type OptionalOutSchema = {
    _zod: {
        optout: "optional";
    };
};
type OptionalInSchema = {
    _zod: {
        optin: "optional";
    };
};
export type $InferObjectOutput<T extends $ZodLooseShape, Extra extends Record<string, unknown>> = string extends keyof T ? util.IsAny<T[keyof T]> extends true ? Record<string, unknown> : Record<string, core.output<T[keyof T]>> : keyof (T & Extra) extends never ? Record<string, never> : util.Prettify<{
    -readonly [k in keyof T as T[k] extends OptionalOutSchema ? never : k]: T[k]["_zod"]["output"];
} & {
    -readonly [k in keyof T as T[k] extends OptionalOutSchema ? k : never]?: T[k]["_zod"]["output"];
} & Extra>;
export type $InferObjectInput<T extends $ZodLooseShape, Extra extends Record<string, unknown>> = string extends keyof T ? util.IsAny<T[keyof T]> extends true ? Record<string, unknown> : Record<string, core.input<T[keyof T]>> : keyof (T & Extra) extends never ? Record<string, never> : util.Prettify<{
    -readonly [k in keyof T as T[k] extends OptionalInSchema ? never : k]: T[k]["_zod"]["input"];
} & {
    -readonly [k in keyof T as T[k] extends OptionalInSchema ? k : never]?: T[k]["_zod"]["input"];
} & Extra>;
export type $ZodObjectConfig = {
    out: Record<string, unknown>;
    in: Record<string, unknown>;
};
export type $loose = {
    out: Record<string, unknown>;
    in: Record<string, unknown>;
};
export type $strict = {
    out: {};
    in: {};
};
export type $strip = {
    out: {};
    in: {};
};
export type $catchall<T extends SomeType> = {
    out: {
        [k: string]: core.output<T>;
    };
    in: {
        [k: string]: core.input<T>;
    };
};
export type $ZodShape = Readonly<{
    [k: string]: $ZodType;
}>;
export interface $ZodObjectDef<Shape extends $ZodShape = $ZodShape> extends $ZodTypeDef {
    type: "object";
    shape: Shape;
    catchall?: $ZodType | undefined;
}
export interface $ZodObjectInternals<
/** @ts-ignore Cast variance */
out Shape extends Readonly<$ZodShape> = Readonly<$ZodShape>, out Config extends $ZodObjectConfig = $ZodObjectConfig> extends _$ZodTypeInternals {
    def: $ZodObjectDef<Shape>;
    config: Config;
    isst: errors.$ZodIssueInvalidType | errors.$ZodIssueUnrecognizedKeys;
    propValues: util.PropValues;
    output: $InferObjectOutput<Shape, Config["out"]>;
    input: $InferObjectInput<Shape, Config["in"]>;
}
export type $ZodLooseShape = Record<string, any>;
export interface $ZodObject<
/** @ts-ignore Cast variance */
out Shape extends Readonly<$ZodShape> = Readonly<$ZodShape>, out Params extends $ZodObjectConfig = $ZodObjectConfig> extends $ZodType<any, any, $ZodObjectInternals<Shape, Params>> {
    "~standard": $ZodStandardSchema<this>;
}
export declare const $ZodObject: core.$constructor<$ZodObject>;
export type $InferUnionOutput<T extends SomeType> = T extends any ? core.output<T> : never;
export type $InferUnionInput<T extends SomeType> = T extends any ? core.input<T> : never;
export interface $ZodUnionDef<Options extends readonly SomeType[] = readonly $ZodType[]> extends $ZodTypeDef {
    type: "union";
    options: Options;
}
type IsOptionalIn<T extends SomeType> = T extends OptionalInSchema ? true : false;
type IsOptionalOut<T extends SomeType> = T extends OptionalOutSchema ? true : false;
export interface $ZodUnionInternals<T extends readonly SomeType[] = readonly $ZodType[]> extends _$ZodTypeInternals {
    def: $ZodUnionDef<T>;
    isst: errors.$ZodIssueInvalidUnion;
    pattern: T[number]["_zod"]["pattern"];
    values: T[number]["_zod"]["values"];
    output: $InferUnionOutput<T[number]>;
    input: $InferUnionInput<T[number]>;
    optin: IsOptionalIn<T[number]> extends false ? "optional" | undefined : "optional";
    optout: IsOptionalOut<T[number]> extends false ? "optional" | undefined : "optional";
}
export interface $ZodUnion<T extends readonly SomeType[] = readonly $ZodType[]> extends $ZodType<any, any, $ZodUnionInternals<T>> {
    _zod: $ZodUnionInternals<T>;
}
export declare const $ZodUnion: core.$constructor<$ZodUnion>;
export interface $ZodDiscriminatedUnionDef<Options extends readonly SomeType[] = readonly $ZodType[]> extends $ZodUnionDef<Options> {
    discriminator: string;
    unionFallback?: boolean;
}
export interface $ZodDiscriminatedUnionInternals<Options extends readonly SomeType[] = readonly $ZodType[]> extends $ZodUnionInternals<Options> {
    def: $ZodDiscriminatedUnionDef<Options>;
    propValues: util.PropValues;
}
export interface $ZodDiscriminatedUnion<T extends readonly SomeType[] = readonly $ZodType[]> extends $ZodType {
    _zod: $ZodDiscriminatedUnionInternals<T>;
}
export declare const $ZodDiscriminatedUnion: core.$constructor<$ZodDiscriminatedUnion>;
export interface $ZodIntersectionDef<Left extends SomeType = $ZodType, Right extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "intersection";
    left: Left;
    right: Right;
}
export interface $ZodIntersectionInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeInternals<core.output<A> & core.output<B>, core.input<A> & core.input<B>> {
    def: $ZodIntersectionDef<A, B>;
    isst: never;
    optin: A["_zod"]["optin"] | B["_zod"]["optin"];
    optout: A["_zod"]["optout"] | B["_zod"]["optout"];
}
export interface $ZodIntersection<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodIntersectionInternals<A, B>;
}
export declare const $ZodIntersection: core.$constructor<$ZodIntersection>;
export interface $ZodTupleDef<T extends util.TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends $ZodTypeDef {
    type: "tuple";
    items: T;
    rest: Rest;
}
export type $InferTupleInputType<T extends util.TupleItems, Rest extends SomeType | null> = [
    ...TupleInputTypeWithOptionals<T>,
    ...(Rest extends SomeType ? core.input<Rest>[] : [])
];
type TupleInputTypeNoOptionals<T extends util.TupleItems> = {
    [k in keyof T]: core.input<T[k]>;
};
type TupleInputTypeWithOptionals<T extends util.TupleItems> = T extends readonly [
    ...infer Prefix extends SomeType[],
    infer Tail extends SomeType
] ? Tail["_zod"]["optin"] extends "optional" ? [...TupleInputTypeWithOptionals<Prefix>, core.input<Tail>?] : TupleInputTypeNoOptionals<T> : [];
export type $InferTupleOutputType<T extends util.TupleItems, Rest extends SomeType | null> = [
    ...TupleOutputTypeWithOptionals<T>,
    ...(Rest extends SomeType ? core.output<Rest>[] : [])
];
type TupleOutputTypeNoOptionals<T extends util.TupleItems> = {
    [k in keyof T]: core.output<T[k]>;
};
type TupleOutputTypeWithOptionals<T extends util.TupleItems> = T extends readonly [
    ...infer Prefix extends SomeType[],
    infer Tail extends SomeType
] ? Tail["_zod"]["optout"] extends "optional" ? [...TupleOutputTypeWithOptionals<Prefix>, core.output<Tail>?] : TupleOutputTypeNoOptionals<T> : [];
export interface $ZodTupleInternals<T extends util.TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends $ZodTypeInternals<$InferTupleOutputType<T, Rest>, $InferTupleInputType<T, Rest>> {
    def: $ZodTupleDef<T, Rest>;
    isst: errors.$ZodIssueInvalidType | errors.$ZodIssueTooBig<unknown[]> | errors.$ZodIssueTooSmall<unknown[]>;
}
export interface $ZodTuple<T extends util.TupleItems = readonly $ZodType[], Rest extends SomeType | null = $ZodType | null> extends $ZodType {
    _zod: $ZodTupleInternals<T, Rest>;
}
export declare const $ZodTuple: core.$constructor<$ZodTuple>;
export type $ZodRecordKey = $ZodType<string | number | symbol, string | number | symbol>;
export interface $ZodRecordDef<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "record";
    keyType: Key;
    valueType: Value;
}
export type $InferZodRecordOutput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = Key extends $partial ? Partial<Record<core.output<Key>, core.output<Value>>> : Record<core.output<Key>, core.output<Value>>;
export type $InferZodRecordInput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = Key extends $partial ? Partial<Record<core.input<Key>, core.input<Value>>> : Record<core.input<Key>, core.input<Value>>;
export interface $ZodRecordInternals<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodTypeInternals<$InferZodRecordOutput<Key, Value>, $InferZodRecordInput<Key, Value>> {
    def: $ZodRecordDef<Key, Value>;
    isst: errors.$ZodIssueInvalidType | errors.$ZodIssueInvalidKey<Record<PropertyKey, unknown>>;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
export type $partial = {
    "~~partial": true;
};
export interface $ZodRecord<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodRecordInternals<Key, Value>;
}
export declare const $ZodRecord: core.$constructor<$ZodRecord>;
export interface $ZodMapDef<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "map";
    keyType: Key;
    valueType: Value;
}
export interface $ZodMapInternals<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodTypeInternals<Map<core.output<Key>, core.output<Value>>, Map<core.input<Key>, core.input<Value>>> {
    def: $ZodMapDef<Key, Value>;
    isst: errors.$ZodIssueInvalidType | errors.$ZodIssueInvalidKey | errors.$ZodIssueInvalidElement<unknown>;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
export interface $ZodMap<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodMapInternals<Key, Value>;
}
export declare const $ZodMap: core.$constructor<$ZodMap>;
export interface $ZodSetDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "set";
    valueType: T;
}
export interface $ZodSetInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<Set<core.output<T>>, Set<core.input<T>>> {
    def: $ZodSetDef<T>;
    isst: errors.$ZodIssueInvalidType;
    optin?: "optional" | undefined;
    optout?: "optional" | undefined;
}
export interface $ZodSet<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodSetInternals<T>;
}
export declare const $ZodSet: core.$constructor<$ZodSet>;
export type $InferEnumOutput<T extends util.EnumLike> = T[keyof T] & {};
export type $InferEnumInput<T extends util.EnumLike> = T[keyof T] & {};
export interface $ZodEnumDef<T extends util.EnumLike = util.EnumLike> extends $ZodTypeDef {
    type: "enum";
    entries: T;
}
export interface $ZodEnumInternals<
/** @ts-ignore Cast variance */
out T extends util.EnumLike = util.EnumLike> extends $ZodTypeInternals<$InferEnumOutput<T>, $InferEnumInput<T>> {
    def: $ZodEnumDef<T>;
    /** @deprecated Internal API, use with caution (not deprecated) */
    values: util.PrimitiveSet;
    /** @deprecated Internal API, use with caution (not deprecated) */
    pattern: RegExp;
    isst: errors.$ZodIssueInvalidValue;
}
export interface $ZodEnum<T extends util.EnumLike = util.EnumLike> extends $ZodType {
    _zod: $ZodEnumInternals<T>;
}
export declare const $ZodEnum: core.$constructor<$ZodEnum>;
export interface $ZodLiteralDef<T extends util.Literal> extends $ZodTypeDef {
    type: "literal";
    values: T[];
}
export interface $ZodLiteralInternals<T extends util.Literal = util.Literal> extends $ZodTypeInternals<T, T> {
    def: $ZodLiteralDef<T>;
    values: Set<T>;
    pattern: RegExp;
    isst: errors.$ZodIssueInvalidValue;
}
export interface $ZodLiteral<T extends util.Literal = util.Literal> extends $ZodType {
    _zod: $ZodLiteralInternals<T>;
}
export declare const $ZodLiteral: core.$constructor<$ZodLiteral>;
declare global {
    interface File {
    }
}
export interface $ZodFileDef extends $ZodTypeDef {
    type: "file";
}
export interface $ZodFileInternals extends $ZodTypeInternals<File, File> {
    def: $ZodFileDef;
    isst: errors.$ZodIssueInvalidType;
    bag: util.LoosePartial<{
        minimum: number;
        maximum: number;
        mime: util.MimeTypes[];
    }>;
}
export interface $ZodFile extends $ZodType {
    _zod: $ZodFileInternals;
}
export declare const $ZodFile: core.$constructor<$ZodFile>;
export interface $ZodTransformDef extends $ZodTypeDef {
    type: "transform";
    transform: (input: unknown, payload: ParsePayload<unknown>) => util.MaybeAsync<unknown>;
}
export interface $ZodTransformInternals<O = unknown, I = unknown> extends $ZodTypeInternals<O, I> {
    def: $ZodTransformDef;
    isst: never;
}
export interface $ZodTransform<O = unknown, I = unknown> extends $ZodType {
    _zod: $ZodTransformInternals<O, I>;
}
export declare const $ZodTransform: core.$constructor<$ZodTransform>;
export interface $ZodOptionalDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "optional";
    innerType: T;
}
export interface $ZodOptionalInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<core.output<T> | undefined, core.input<T> | undefined> {
    def: $ZodOptionalDef<T>;
    optin: "optional";
    optout: "optional";
    isst: never;
    values: T["_zod"]["values"];
    pattern: T["_zod"]["pattern"];
}
export interface $ZodOptional<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodOptionalInternals<T>;
}
export declare const $ZodOptional: core.$constructor<$ZodOptional>;
export interface $ZodNullableDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "nullable";
    innerType: T;
}
export interface $ZodNullableInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<core.output<T> | null, core.input<T> | null> {
    def: $ZodNullableDef<T>;
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
    isst: never;
    values: T["_zod"]["values"];
    pattern: T["_zod"]["pattern"];
}
export interface $ZodNullable<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodNullableInternals<T>;
}
export declare const $ZodNullable: core.$constructor<$ZodNullable>;
export interface $ZodDefaultDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "default";
    innerType: T;
    /** The default value. May be a getter. */
    defaultValue: util.NoUndefined<core.output<T>>;
}
export interface $ZodDefaultInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<util.NoUndefined<core.output<T>>, core.input<T> | undefined> {
    def: $ZodDefaultDef<T>;
    optin: "optional";
    optout?: "optional" | undefined;
    isst: never;
    values: T["_zod"]["values"];
}
export interface $ZodDefault<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodDefaultInternals<T>;
}
export declare const $ZodDefault: core.$constructor<$ZodDefault>;
export interface $ZodPrefaultDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "prefault";
    innerType: T;
    /** The default value. May be a getter. */
    defaultValue: core.input<T>;
}
export interface $ZodPrefaultInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<util.NoUndefined<core.output<T>>, core.input<T> | undefined> {
    def: $ZodPrefaultDef<T>;
    optin: "optional";
    optout?: "optional" | undefined;
    isst: never;
    values: T["_zod"]["values"];
}
export interface $ZodPrefault<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodPrefaultInternals<T>;
}
export declare const $ZodPrefault: core.$constructor<$ZodPrefault>;
export interface $ZodNonOptionalDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "nonoptional";
    innerType: T;
}
export interface $ZodNonOptionalInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<util.NoUndefined<core.output<T>>, util.NoUndefined<core.input<T>>> {
    def: $ZodNonOptionalDef<T>;
    isst: errors.$ZodIssueInvalidType;
    values: T["_zod"]["values"];
    optin: "optional" | undefined;
    optout: "optional" | undefined;
}
export interface $ZodNonOptional<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodNonOptionalInternals<T>;
}
export declare const $ZodNonOptional: core.$constructor<$ZodNonOptional>;
export interface $ZodSuccessDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "success";
    innerType: T;
}
export interface $ZodSuccessInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<boolean, core.input<T>> {
    def: $ZodSuccessDef<T>;
    isst: never;
    optin: T["_zod"]["optin"];
    optout: "optional" | undefined;
}
export interface $ZodSuccess<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodSuccessInternals<T>;
}
export declare const $ZodSuccess: core.$constructor<$ZodSuccess>;
export interface $ZodCatchCtx extends ParsePayload {
    /** @deprecated Use `ctx.issues` */
    error: {
        issues: errors.$ZodIssue[];
    };
    /** @deprecated Use `ctx.value` */
    input: unknown;
}
export interface $ZodCatchDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "catch";
    innerType: T;
    catchValue: (ctx: $ZodCatchCtx) => unknown;
}
export interface $ZodCatchInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<core.output<T>, core.input<T> | util.Whatever> {
    def: $ZodCatchDef<T>;
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
    isst: never;
    values: T["_zod"]["values"];
}
export interface $ZodCatch<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodCatchInternals<T>;
}
export declare const $ZodCatch: core.$constructor<$ZodCatch>;
export interface $ZodNaNDef extends $ZodTypeDef {
    type: "nan";
}
export interface $ZodNaNInternals extends $ZodTypeInternals<number, number> {
    def: $ZodNaNDef;
    isst: errors.$ZodIssueInvalidType;
}
export interface $ZodNaN extends $ZodType {
    _zod: $ZodNaNInternals;
}
export declare const $ZodNaN: core.$constructor<$ZodNaN>;
export interface $ZodPipeDef<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "pipe";
    in: A;
    out: B;
}
export interface $ZodPipeInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeInternals<core.output<B>, core.input<A>> {
    def: $ZodPipeDef<A, B>;
    isst: never;
    values: A["_zod"]["values"];
    optin: A["_zod"]["optin"];
    optout: B["_zod"]["optout"];
}
export interface $ZodPipe<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodPipeInternals<A, B>;
}
export declare const $ZodPipe: core.$constructor<$ZodPipe>;
export interface $ZodReadonlyDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "readonly";
    innerType: T;
}
export interface $ZodReadonlyInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<util.MakeReadonly<core.output<T>>, util.MakeReadonly<core.input<T>>> {
    def: $ZodReadonlyDef<T>;
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
    isst: never;
    propValues: T["_zod"]["propValues"];
    values: T["_zod"]["values"];
}
export interface $ZodReadonly<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodReadonlyInternals<T>;
}
export declare const $ZodReadonly: core.$constructor<$ZodReadonly>;
export interface $ZodTemplateLiteralDef extends $ZodTypeDef {
    type: "template_literal";
    parts: $ZodTemplateLiteralPart[];
}
export interface $ZodTemplateLiteralInternals<Template extends string = string> extends $ZodTypeInternals<Template, Template> {
    pattern: RegExp;
    def: $ZodTemplateLiteralDef;
    isst: errors.$ZodIssueInvalidType;
}
export interface $ZodTemplateLiteral<Template extends string = string> extends $ZodType {
    _zod: $ZodTemplateLiteralInternals<Template>;
}
type LiteralPart = Exclude<util.Literal, symbol>;
interface SchemaPartInternals extends $ZodTypeInternals<LiteralPart, LiteralPart> {
    pattern: RegExp;
}
interface SchemaPart extends $ZodType {
    _zod: SchemaPartInternals;
}
export type $ZodTemplateLiteralPart = LiteralPart | SchemaPart;
type UndefinedToEmptyString<T> = T extends undefined ? "" : T;
type AppendToTemplateLiteral<Template extends string, Suffix extends LiteralPart | $ZodType> = Suffix extends LiteralPart ? `${Template}${UndefinedToEmptyString<Suffix>}` : Suffix extends $ZodType ? `${Template}${core.output<Suffix> extends infer T extends LiteralPart ? UndefinedToEmptyString<T> : never}` : never;
export type ConcatenateTupleOfStrings<T extends string[]> = T extends [
    infer First extends string,
    ...infer Rest extends string[]
] ? Rest extends string[] ? First extends "" ? ConcatenateTupleOfStrings<Rest> : `${First}${ConcatenateTupleOfStrings<Rest>}` : never : "";
export type ConvertPartsToStringTuple<Parts extends $ZodTemplateLiteralPart[]> = {
    [K in keyof Parts]: Parts[K] extends LiteralPart ? `${UndefinedToEmptyString<Parts[K]>}` : Parts[K] extends $ZodType ? `${core.output<Parts[K]> extends infer T extends LiteralPart ? UndefinedToEmptyString<T> : never}` : never;
};
export type ToTemplateLiteral<Parts extends $ZodTemplateLiteralPart[]> = ConcatenateTupleOfStrings<ConvertPartsToStringTuple<Parts>>;
export type $PartsToTemplateLiteral<Parts extends $ZodTemplateLiteralPart[]> = [] extends Parts ? `` : Parts extends [...infer Rest, infer Last extends $ZodTemplateLiteralPart] ? Rest extends $ZodTemplateLiteralPart[] ? AppendToTemplateLiteral<$PartsToTemplateLiteral<Rest>, Last> : never : never;
export declare const $ZodTemplateLiteral: core.$constructor<$ZodTemplateLiteral>;
export interface $ZodPromiseDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "promise";
    innerType: T;
}
export interface $ZodPromiseInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<core.output<T>, util.MaybeAsync<core.input<T>>> {
    def: $ZodPromiseDef<T>;
    isst: never;
}
export interface $ZodPromise<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodPromiseInternals<T>;
}
export declare const $ZodPromise: core.$constructor<$ZodPromise>;
export interface $ZodLazyDef<T extends SomeType = $ZodType> extends $ZodTypeDef {
    type: "lazy";
    getter: () => T;
}
export interface $ZodLazyInternals<T extends SomeType = $ZodType> extends $ZodTypeInternals<core.output<T>, core.input<T>> {
    def: $ZodLazyDef<T>;
    isst: never;
    /** Auto-cached way to retrieve the inner schema */
    innerType: T;
    pattern: T["_zod"]["pattern"];
    propValues: T["_zod"]["propValues"];
    optin: T["_zod"]["optin"];
    optout: T["_zod"]["optout"];
}
export interface $ZodLazy<T extends SomeType = $ZodType> extends $ZodType {
    _zod: $ZodLazyInternals<T>;
}
export declare const $ZodLazy: core.$constructor<$ZodLazy>;
export interface $ZodCustomDef<O = unknown> extends $ZodTypeDef, checks.$ZodCheckDef {
    type: "custom";
    check: "custom";
    path?: PropertyKey[] | undefined;
    error?: errors.$ZodErrorMap | undefined;
    params?: Record<string, any> | undefined;
    fn: (arg: O) => unknown;
}
export interface $ZodCustomInternals<O = unknown, I = unknown> extends $ZodTypeInternals<O, I>, checks.$ZodCheckInternals<O> {
    def: $ZodCustomDef;
    issc: errors.$ZodIssue;
    isst: never;
    bag: util.LoosePartial<{
        Class: typeof util.Class;
    }>;
}
export interface $ZodCustom<O = unknown, I = unknown> extends $ZodType {
    _zod: $ZodCustomInternals<O, I>;
}
export declare const $ZodCustom: core.$constructor<$ZodCustom>;
export type $ZodTypes = $ZodString | $ZodNumber | $ZodBigInt | $ZodBoolean | $ZodDate | $ZodSymbol | $ZodUndefined | $ZodNullable | $ZodNull | $ZodAny | $ZodUnknown | $ZodNever | $ZodVoid | $ZodArray | $ZodObject | $ZodUnion | $ZodIntersection | $ZodTuple | $ZodRecord | $ZodMap | $ZodSet | $ZodLiteral | $ZodEnum | $ZodPromise | $ZodLazy | $ZodOptional | $ZodDefault | $ZodPrefault | $ZodTemplateLiteral | $ZodCustom | $ZodTransform | $ZodNonOptional | $ZodReadonly | $ZodNaN | $ZodPipe | $ZodSuccess | $ZodCatch | $ZodFile;
export type $ZodStringFormatTypes = $ZodGUID | $ZodUUID | $ZodEmail | $ZodURL | $ZodEmoji | $ZodNanoID | $ZodCUID | $ZodCUID2 | $ZodULID | $ZodXID | $ZodKSUID | $ZodISODateTime | $ZodISODate | $ZodISOTime | $ZodISODuration | $ZodIPv4 | $ZodIPv6 | $ZodCIDRv4 | $ZodCIDRv6 | $ZodBase64 | $ZodBase64URL | $ZodE164 | $ZodJWT;
