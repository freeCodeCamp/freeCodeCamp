/**
 * @since 3.10.0
 */
import type { StandardSchemaV1 } from "@standard-schema/spec";
import type { ArbitraryAnnotation, LazyArbitrary } from "./Arbitrary.js";
import * as array_ from "./Array.js";
import * as bigDecimal_ from "./BigDecimal.js";
import type { Brand } from "./Brand.js";
import * as cause_ from "./Cause.js";
import * as chunk_ from "./Chunk.js";
import * as config_ from "./Config.js";
import * as dateTime from "./DateTime.js";
import * as duration_ from "./Duration.js";
import * as Effect from "./Effect.js";
import * as either_ from "./Either.js";
import * as Equivalence from "./Equivalence.js";
import * as exit_ from "./Exit.js";
import * as fiberId_ from "./FiberId.js";
import type { LazyArg } from "./Function.js";
import * as hashMap_ from "./HashMap.js";
import * as hashSet_ from "./HashSet.js";
import * as list_ from "./List.js";
import * as option_ from "./Option.js";
import type * as Order from "./Order.js";
import * as ParseResult from "./ParseResult.js";
import type { Pipeable } from "./Pipeable.js";
import type * as pretty_ from "./Pretty.js";
import * as redacted_ from "./Redacted.js";
import * as Request from "./Request.js";
import type { ParseOptions } from "./SchemaAST.js";
import * as AST from "./SchemaAST.js";
import * as sortedSet_ from "./SortedSet.js";
import type * as Types from "./Types.js";
/**
 * @since 3.10.0
 */
export type Simplify<A> = {
    [K in keyof A]: A[K];
} & {};
/**
 * @since 3.10.0
 */
export type SimplifyMutable<A> = {
    -readonly [K in keyof A]: A[K];
} extends infer B ? B : never;
/**
 * @since 3.10.0
 * @category symbol
 */
export declare const TypeId: unique symbol;
/**
 * @since 3.10.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * @category model
 * @since 3.10.0
 */
export interface Schema<in out A, in out I = A, out R = never> extends Schema.Variance<A, I, R>, Pipeable {
    readonly Type: A;
    readonly Encoded: I;
    readonly Context: R;
    readonly ast: AST.AST;
    /**
     * Merges a set of new annotations with existing ones, potentially overwriting
     * any duplicates.
     */
    annotations(annotations: Annotations.GenericSchema<A>): Schema<A, I, R>;
}
/**
 * @category annotations
 * @since 3.10.0
 */
export interface Annotable<Self extends Schema<A, I, R>, A, I = A, R = never> extends Schema<A, I, R> {
    annotations(annotations: Annotations.GenericSchema<A>): Self;
}
/**
 * @category annotations
 * @since 3.10.0
 */
export interface AnnotableClass<Self extends Schema<A, I, R>, A, I = A, R = never> extends Annotable<Self, A, I, R> {
    new (_: never): Schema.Variance<A, I, R>;
}
/**
 * @category model
 * @since 3.10.0
 */
export interface SchemaClass<A, I = A, R = never> extends AnnotableClass<SchemaClass<A, I, R>, A, I, R> {
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare function make<A, I = A, R = never>(ast: AST.AST): SchemaClass<A, I, R>;
/**
 * Returns a "Standard Schema" object conforming to the [Standard Schema
 * v1](https://standardschema.dev/) specification.
 *
 * This function creates a schema whose `validate` method attempts to decode and
 * validate the provided input synchronously. If the underlying `Schema`
 * includes any asynchronous components (e.g., asynchronous message resolutions
 * or checks), then validation will necessarily return a `Promise` instead.
 *
 * Any detected defects will be reported via a single issue containing no
 * `path`.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * const schema = Schema.Struct({
 *   name: Schema.String
 * })
 *
 * //      ┌─── StandardSchemaV1<{ readonly name: string; }>
 * //      ▼
 * const standardSchema = Schema.standardSchemaV1(schema)
 * ```
 *
 * @category Standard Schema
 * @since 3.13.0
 */
export declare const standardSchemaV1: <A, I>(schema: Schema<A, I, never>, overrideOptions?: AST.ParseOptions) => StandardSchemaV1<I, A> & SchemaClass<A, I, never>;
/**
 * @category annotations
 * @since 3.10.0
 */
export declare namespace Annotable {
    /**
     * @since 3.10.0
     */
    type Self<S extends All> = ReturnType<S["annotations"]>;
    /**
     * @since 3.10.0
     */
    type Any = Annotable<any, any, any, unknown>;
    /**
     * @since 3.10.0
     */
    type All = Any | Annotable<any, any, never, unknown> | Annotable<any, never, any, unknown> | Annotable<any, never, never, unknown>;
}
/**
 * @since 3.10.0
 */
export declare function asSchema<S extends Schema.All>(schema: S): Schema<Schema.Type<S>, Schema.Encoded<S>, Schema.Context<S>>;
/**
 * @category formatting
 * @since 3.10.0
 */
export declare const format: <S extends Schema.All>(schema: S) => string;
/**
 * @since 3.10.0
 */
export declare namespace Schema {
    /**
     * @since 3.10.0
     */
    interface Variance<A, I, R> {
        readonly [TypeId]: {
            readonly _A: Types.Invariant<A>;
            readonly _I: Types.Invariant<I>;
            readonly _R: Types.Covariant<R>;
        };
    }
    /**
     * @since 3.10.0
     */
    type Type<S> = S extends Schema.Variance<infer A, infer _I, infer _R> ? A : never;
    /**
     * @since 3.10.0
     */
    type Encoded<S> = S extends Schema.Variance<infer _A, infer I, infer _R> ? I : never;
    /**
     * @since 3.10.0
     */
    type Context<S> = S extends Schema.Variance<infer _A, infer _I, infer R> ? R : never;
    /**
     * @since 3.10.0
     */
    type ToAsserts<S extends AnyNoContext> = (input: unknown, options?: AST.ParseOptions) => asserts input is Schema.Type<S>;
    /**
     * Any schema, except for `never`.
     *
     * @since 3.10.0
     */
    type Any = Schema<any, any, unknown>;
    /**
     * Any schema with `Context = never`, except for `never`.
     *
     * @since 3.10.0
     */
    type AnyNoContext = Schema<any, any, never>;
    /**
     * Any schema, including `never`.
     *
     * @since 3.10.0
     */
    type All = Any | Schema<any, never, unknown> | Schema<never, any, unknown> | Schema<never, never, unknown>;
    /**
     * Type-level counterpart of `Schema.asSchema` function.
     *
     * @since 3.10.0
     */
    type AsSchema<S extends All> = Schema<Type<S>, Encoded<S>, Context<S>>;
}
/**
 * The `encodedSchema` function allows you to extract the `Encoded` portion of a
 * schema, creating a new schema that conforms to the properties defined in the
 * original schema without retaining any refinements or transformations that
 * were applied previously.
 *
 * @since 3.10.0
 */
export declare const encodedSchema: <A, I, R>(schema: Schema<A, I, R>) => SchemaClass<I>;
/**
 * The `encodedBoundSchema` function is similar to `encodedSchema` but preserves
 * the refinements up to the first transformation point in the original schema.
 *
 * @since 3.10.0
 */
export declare const encodedBoundSchema: <A, I, R>(schema: Schema<A, I, R>) => SchemaClass<I>;
/**
 * The `typeSchema` function allows you to extract the `Type` portion of a
 * schema, creating a new schema that conforms to the properties defined in the
 * original schema without considering the initial encoding or transformation
 * processes.
 *
 * @since 3.10.0
 */
export declare const typeSchema: <A, I, R>(schema: Schema<A, I, R>) => SchemaClass<A>;
export { 
/**
 * By default the option `exact` is set to `true`.
 *
 * @throws `ParseError`
 * @category validation
 * @since 3.10.0
 */
asserts, 
/**
 * @category decoding
 * @since 3.10.0
 */
decodeOption, 
/**
 * @throws `ParseError`
 * @category decoding
 * @since 3.10.0
 */
decodeSync, 
/**
 * @category decoding
 * @since 3.10.0
 */
decodeUnknownOption, 
/**
 * @throws `ParseError`
 * @category decoding
 * @since 3.10.0
 */
decodeUnknownSync, 
/**
 * @category encoding
 * @since 3.10.0
 */
encodeOption, 
/**
 * @throws `ParseError`
 * @category encoding
 * @since 3.10.0
 */
encodeSync, 
/**
 * @category encoding
 * @since 3.10.0
 */
encodeUnknownOption, 
/**
 * @throws `ParseError`
 * @category encoding
 * @since 3.10.0
 */
encodeUnknownSync, 
/**
 * By default the option `exact` is set to `true`.
 *
 * @category validation
 * @since 3.10.0
 */
is, 
/**
 * @category validation
 * @since 3.10.0
 */
validateOption, 
/**
 * @throws `ParseError`
 * @category validation
 * @since 3.10.0
 */
validateSync } from "./ParseResult.js";
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeUnknown: <A, I, R>(schema: Schema<A, I, R>, options?: ParseOptions) => (u: unknown, overrideOptions?: ParseOptions) => Effect.Effect<I, ParseResult.ParseError, R>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeUnknownEither: <A, I>(schema: Schema<A, I, never>, options?: ParseOptions) => (u: unknown, overrideOptions?: ParseOptions) => either_.Either<I, ParseResult.ParseError>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeUnknownPromise: <A, I>(schema: Schema<A, I, never>, options?: ParseOptions) => (u: unknown, overrideOptions?: ParseOptions) => Promise<I>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encode: <A, I, R>(schema: Schema<A, I, R>, options?: ParseOptions) => (a: A, overrideOptions?: ParseOptions) => Effect.Effect<I, ParseResult.ParseError, R>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeEither: <A, I>(schema: Schema<A, I, never>, options?: ParseOptions) => (a: A, overrideOptions?: ParseOptions) => either_.Either<I, ParseResult.ParseError>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodePromise: <A, I>(schema: Schema<A, I, never>, options?: ParseOptions) => (a: A, overrideOptions?: ParseOptions) => Promise<I>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeUnknown: <A, I, R>(schema: Schema<A, I, R>, options?: ParseOptions) => (u: unknown, overrideOptions?: ParseOptions) => Effect.Effect<A, ParseResult.ParseError, R>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeUnknownEither: <A, I>(schema: Schema<A, I, never>, options?: ParseOptions) => (u: unknown, overrideOptions?: ParseOptions) => either_.Either<A, ParseResult.ParseError>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeUnknownPromise: <A, I>(schema: Schema<A, I, never>, options?: ParseOptions) => (u: unknown, overrideOptions?: ParseOptions) => Promise<A>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decode: <A, I, R>(schema: Schema<A, I, R>, options?: ParseOptions) => (i: I, overrideOptions?: ParseOptions) => Effect.Effect<A, ParseResult.ParseError, R>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeEither: <A, I>(schema: Schema<A, I, never>, options?: ParseOptions) => (i: I, overrideOptions?: ParseOptions) => either_.Either<A, ParseResult.ParseError>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodePromise: <A, I>(schema: Schema<A, I, never>, options?: ParseOptions) => (i: I, overrideOptions?: ParseOptions) => Promise<A>;
/**
 * @category validation
 * @since 3.10.0
 */
export declare const validate: <A, I, R>(schema: Schema<A, I, R>, options?: ParseOptions) => (u: unknown, overrideOptions?: ParseOptions) => Effect.Effect<A, ParseResult.ParseError, R>;
/**
 * @category validation
 * @since 3.10.0
 */
export declare const validateEither: <A, I, R>(schema: Schema<A, I, R>, options?: ParseOptions) => (u: unknown, overrideOptions?: ParseOptions) => either_.Either<A, ParseResult.ParseError>;
/**
 * @category validation
 * @since 3.10.0
 */
export declare const validatePromise: <A, I>(schema: Schema<A, I, never>, options?: ParseOptions) => (u: unknown, overrideOptions?: ParseOptions) => Promise<A>;
/**
 * Tests if a value is a `Schema`.
 *
 * @category guards
 * @since 3.10.0
 */
export declare const isSchema: (u: unknown) => u is Schema.Any;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Literal<Literals extends array_.NonEmptyReadonlyArray<AST.LiteralValue>> extends AnnotableClass<Literal<Literals>, Literals[number]> {
    readonly literals: Readonly<Literals>;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare function Literal<Literals extends array_.NonEmptyReadonlyArray<AST.LiteralValue>>(...literals: Literals): Literal<Literals>;
export declare function Literal(): Never;
export declare function Literal<Literals extends ReadonlyArray<AST.LiteralValue>>(...literals: Literals): SchemaClass<Literals[number]>;
/**
 * Creates a new `Schema` from a literal schema.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Either, Schema } from "effect"
 *
 * const schema = Schema.Literal("a", "b", "c").pipe(Schema.pickLiteral("a", "b"))
 *
 * assert.deepStrictEqual(Schema.decodeSync(schema)("a"), "a")
 * assert.deepStrictEqual(Schema.decodeSync(schema)("b"), "b")
 * assert.strictEqual(Either.isLeft(Schema.decodeUnknownEither(schema)("c")), true)
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
export declare const pickLiteral: <A extends AST.LiteralValue, L extends array_.NonEmptyReadonlyArray<A>>(...literals: L) => <I, R>(_schema: Schema<A, I, R>) => Literal<[...L]>;
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const UniqueSymbolFromSelf: <S extends symbol>(symbol: S) => SchemaClass<S>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Enums<A extends EnumsDefinition> extends AnnotableClass<Enums<A>, A[keyof A]> {
    readonly enums: A;
}
/**
 * @since 3.10.0
 */
export type EnumsDefinition = {
    [x: string]: string | number;
};
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const Enums: <A extends EnumsDefinition>(enums: A) => Enums<A>;
type AppendType<Template extends string, Next> = Next extends AST.LiteralValue ? `${Template}${Next}` : Next extends Schema<infer A extends AST.LiteralValue, infer _I, infer _R> ? `${Template}${A}` : never;
type GetTemplateLiteralType<Params> = Params extends [...infer Init, infer Last] ? AppendType<GetTemplateLiteralType<Init>, Last> : ``;
/**
 * @category API interface
 * @since 3.10.0
 */
export interface TemplateLiteral<A> extends SchemaClass<A> {
}
type TemplateLiteralParameter = Schema.AnyNoContext | AST.LiteralValue;
/**
 * @category template literal
 * @since 3.10.0
 */
export declare const TemplateLiteral: <Params extends array_.NonEmptyReadonlyArray<TemplateLiteralParameter>>(...[head, ...tail]: Params) => TemplateLiteral<GetTemplateLiteralType<Params>>;
type TemplateLiteralParserParameters = Schema.Any | AST.LiteralValue;
type GetTemplateLiteralParserType<Params> = Params extends [infer Head, ...infer Tail] ? readonly [
    Head extends Schema<infer A, infer _I, infer _R> ? A : Head,
    ...GetTemplateLiteralParserType<Tail>
] : [];
type AppendEncoded<Template extends string, Next> = Next extends AST.LiteralValue ? `${Template}${Next}` : Next extends Schema<infer _A, infer I extends AST.LiteralValue, infer _R> ? `${Template}${I}` : never;
type GetTemplateLiteralParserEncoded<Params> = Params extends [...infer Init, infer Last] ? AppendEncoded<GetTemplateLiteralParserEncoded<Init>, Last> : ``;
/**
 * @category API interface
 * @since 3.10.0
 */
export interface TemplateLiteralParser<Params extends array_.NonEmptyReadonlyArray<TemplateLiteralParserParameters>> extends Schema<GetTemplateLiteralParserType<Params>, GetTemplateLiteralParserEncoded<Params>, Schema.Context<Params[number]>> {
    readonly params: Params;
}
/**
 * @category template literal
 * @since 3.10.0
 */
export declare const TemplateLiteralParser: <Params extends array_.NonEmptyReadonlyArray<TemplateLiteralParserParameters>>(...params: Params) => TemplateLiteralParser<Params>;
/**
 * @category api interface
 * @since 3.13.3
 */
export interface declare<A, I = A, P extends ReadonlyArray<Schema.All> = readonly [], R = Schema.Context<P[number]>> extends AnnotableClass<declare<A, I, P, R>, A, I, R> {
    readonly typeParameters: Readonly<P>;
}
/**
 * @category api interface
 * @since 3.13.3
 */
export interface AnnotableDeclare<Self extends declare<A, I, P, R>, A, I = A, P extends ReadonlyArray<Schema.All> = readonly [], R = Schema.Context<P[number]>> extends declare<A, I, P, R> {
    annotations(annotations: Annotations.Schema<A>): Self;
}
/**
 * The constraint `R extends Schema.Context<P[number]>` enforces dependencies solely from `typeParameters`.
 * This ensures that when you call `Schema.to` or `Schema.from`, you receive a schema with a `never` context.
 *
 * @category constructors
 * @since 3.10.0
 */
export declare const declare: {
    /**
     * The constraint `R extends Schema.Context<P[number]>` enforces dependencies solely from `typeParameters`.
     * This ensures that when you call `Schema.to` or `Schema.from`, you receive a schema with a `never` context.
     *
     * @category constructors
     * @since 3.10.0
     */
    <A>(is: (input: unknown) => input is A, annotations?: Annotations.Schema<A>): declare<A>;
    /**
     * The constraint `R extends Schema.Context<P[number]>` enforces dependencies solely from `typeParameters`.
     * This ensures that when you call `Schema.to` or `Schema.from`, you receive a schema with a `never` context.
     *
     * @category constructors
     * @since 3.10.0
     */
    <A, I, const P extends ReadonlyArray<Schema.All>>(typeParameters: P, options: {
        readonly decode: (...typeParameters: {
            readonly [K in keyof P]: Schema<Schema.Type<P[K]>, Schema.Encoded<P[K]>, never>;
        }) => (input: unknown, options: ParseOptions, ast: AST.Declaration) => Effect.Effect<A, ParseResult.ParseIssue, never>;
        readonly encode: (...typeParameters: {
            readonly [K in keyof P]: Schema<Schema.Type<P[K]>, Schema.Encoded<P[K]>, never>;
        }) => (input: unknown, options: ParseOptions, ast: AST.Declaration) => Effect.Effect<I, ParseResult.ParseIssue, never>;
    }, annotations?: Annotations.Schema<A, {
        readonly [K in keyof P]: Schema.Type<P[K]>;
    }>): declare<A, I, P>;
};
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const BrandSchemaId: unique symbol;
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const fromBrand: <C extends Brand<string | symbol>, A extends Brand.Unbranded<C>>(constructor: Brand.Constructor<C>, annotations?: Annotations.Filter<C, A>) => <I, R>(self: Schema<A, I, R>) => BrandSchema<A & C, I, R>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const InstanceOfSchemaId: unique symbol;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface instanceOf<A> extends AnnotableDeclare<instanceOf<A>, A> {
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const instanceOf: <A extends abstract new (...args: any) => any>(constructor: A, annotations?: Annotations.Schema<InstanceType<A>>) => instanceOf<InstanceType<A>>;
declare const Undefined_base: SchemaClass<undefined, undefined, never>;
/**
 * @category primitives
 * @since 3.10.0
 */
export declare class Undefined extends Undefined_base {
}
declare const Void_base: SchemaClass<void, void, never>;
/**
 * @category primitives
 * @since 3.10.0
 */
export declare class Void extends Void_base {
}
declare const Null_base: SchemaClass<null, null, never>;
/**
 * @category primitives
 * @since 3.10.0
 */
export declare class Null extends Null_base {
}
declare const Never_base: SchemaClass<never, never, never>;
/**
 * @category primitives
 * @since 3.10.0
 */
export declare class Never extends Never_base {
}
declare const Unknown_base: SchemaClass<unknown, unknown, never>;
/**
 * @category primitives
 * @since 3.10.0
 */
export declare class Unknown extends Unknown_base {
}
declare const Any_base: SchemaClass<any, any, never>;
/**
 * @category primitives
 * @since 3.10.0
 */
export declare class Any extends Any_base {
}
declare const BigIntFromSelf_base: SchemaClass<bigint, bigint, never>;
/**
 * @category primitives
 * @since 3.10.0
 */
export declare class BigIntFromSelf extends BigIntFromSelf_base {
}
declare const SymbolFromSelf_base: SchemaClass<symbol, symbol, never>;
/**
 * @category primitives
 * @since 3.10.0
 */
export declare class SymbolFromSelf extends SymbolFromSelf_base {
}
declare const String$_base: SchemaClass<string, string, never>;
/** @ignore */
declare class String$ extends String$_base {
}
declare const Number$_base: SchemaClass<number, number, never>;
/** @ignore */
declare class Number$ extends Number$_base {
}
declare const Boolean$_base: SchemaClass<boolean, boolean, never>;
/** @ignore */
declare class Boolean$ extends Boolean$_base {
}
declare const Object$_base: SchemaClass<object, object, never>;
/** @ignore */
declare class Object$ extends Object$_base {
}
export { 
/**
 * @category primitives
 * @since 3.10.0
 */
Boolean$ as Boolean, 
/**
 * @category primitives
 * @since 3.10.0
 */
Number$ as Number, 
/**
 * @category primitives
 * @since 3.10.0
 */
Object$ as Object, 
/**
 * @category primitives
 * @since 3.10.0
 */
String$ as String };
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Union<Members extends ReadonlyArray<Schema.All>> extends AnnotableClass<Union<Members>, Schema.Type<Members[number]>, Schema.Encoded<Members[number]>, Schema.Context<Members[number]>> {
    readonly members: Readonly<Members>;
}
/**
 * @category combinators
 * @since 3.10.0
 */
export declare function Union<Members extends AST.Members<Schema.All>>(...members: Members): Union<Members>;
export declare function Union<Member extends Schema.All>(member: Member): Member;
export declare function Union(): typeof Never;
export declare function Union<Members extends ReadonlyArray<Schema.All>>(...members: Members): Schema<Schema.Type<Members[number]>, Schema.Encoded<Members[number]>, Schema.Context<Members[number]>>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface NullOr<S extends Schema.All> extends Union<[S, typeof Null]> {
    annotations(annotations: Annotations.Schema<Schema.Type<S> | null>): NullOr<S>;
}
/**
 * @category combinators
 * @since 3.10.0
 */
export declare const NullOr: <S extends Schema.All>(self: S) => NullOr<S>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface UndefinedOr<S extends Schema.All> extends Union<[S, typeof Undefined]> {
    annotations(annotations: Annotations.Schema<Schema.Type<S> | undefined>): UndefinedOr<S>;
}
/**
 * @category combinators
 * @since 3.10.0
 */
export declare const UndefinedOr: <S extends Schema.All>(self: S) => UndefinedOr<S>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface NullishOr<S extends Schema.All> extends Union<[S, typeof Null, typeof Undefined]> {
    annotations(annotations: Annotations.Schema<Schema.Type<S> | null | undefined>): NullishOr<S>;
}
/**
 * @category combinators
 * @since 3.10.0
 */
export declare const NullishOr: <S extends Schema.All>(self: S) => NullishOr<S>;
/**
 * @category combinators
 * @since 3.10.0
 */
export declare const keyof: <A, I, R>(self: Schema<A, I, R>) => SchemaClass<keyof A>;
/**
 * @since 3.10.0
 */
export declare namespace Element {
    /**
     * @since 3.10.0
     */
    interface Annotations<A> extends Annotations.Doc<A> {
        readonly missingMessage?: AST.MissingMessageAnnotation;
    }
    /**
     * @since 3.10.0
     */
    type Token = "" | "?";
}
/**
 * @category API interface
 * @since 3.10.0
 */
export interface Element<S extends Schema.Any, Token extends Element.Token> extends Schema.Variance<Schema.Type<S>, Schema.Encoded<S>, Schema.Context<S>> {
    readonly _Token: Token;
    readonly ast: AST.OptionalType;
    readonly from: S;
    annotations(annotations: Element.Annotations<Schema.Type<S>>): Element<S, Token>;
}
/**
 * @since 3.10.0
 */
export declare const element: <S extends Schema.Any>(self: S) => Element<S, "">;
/**
 * @since 3.10.0
 */
export declare const optionalElement: <S extends Schema.Any>(self: S) => Element<S, "?">;
/**
 * @since 3.10.0
 */
export declare namespace TupleType {
    type ElementsType<Elements, Out extends ReadonlyArray<any> = readonly []> = Elements extends readonly [infer Head, ...infer Tail] ? Head extends Element<infer T, "?"> ? ElementsType<Tail, readonly [...Out, Schema.Type<T>?]> : ElementsType<Tail, readonly [...Out, Schema.Type<Head>]> : Out;
    type ElementsEncoded<Elements, Out extends ReadonlyArray<any> = readonly []> = Elements extends readonly [infer Head, ...infer Tail] ? Head extends Element<infer T, "?"> ? ElementsEncoded<Tail, readonly [...Out, Schema.Encoded<T>?]> : ElementsEncoded<Tail, readonly [...Out, Schema.Encoded<Head>]> : Out;
    /**
     * @since 3.10.0
     */
    type Elements = ReadonlyArray<Schema.Any | Element<Schema.Any, Element.Token>>;
    /**
     * @since 3.10.0
     */
    type Rest = ReadonlyArray<Schema.Any | Element<Schema.Any, "">>;
    /**
     * @since 3.10.0
     */
    type Type<Elements extends TupleType.Elements, Rest extends TupleType.Rest> = Rest extends [
        infer Head,
        ...infer Tail
    ] ? Readonly<[
        ...ElementsType<Elements>,
        ...ReadonlyArray<Schema.Type<Head>>,
        ...{
            readonly [K in keyof Tail]: Schema.Type<Tail[K]>;
        }
    ]> : ElementsType<Elements>;
    /**
     * @since 3.10.0
     */
    type Encoded<Elements extends TupleType.Elements, Rest extends TupleType.Rest> = Rest extends [
        infer Head,
        ...infer Tail
    ] ? Readonly<[
        ...ElementsEncoded<Elements>,
        ...ReadonlyArray<Schema.Encoded<Head>>,
        ...{
            readonly [K in keyof Tail]: Schema.Encoded<Tail[K]>;
        }
    ]> : ElementsEncoded<Elements>;
}
/**
 * @category api interface
 * @since 3.10.0
 */
export interface TupleType<Elements extends TupleType.Elements, Rest extends TupleType.Rest> extends AnnotableClass<TupleType<Elements, Rest>, TupleType.Type<Elements, Rest>, TupleType.Encoded<Elements, Rest>, Schema.Context<Elements[number]> | Schema.Context<Rest[number]>> {
    readonly elements: Readonly<Elements>;
    readonly rest: Readonly<Rest>;
}
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Tuple<Elements extends TupleType.Elements> extends TupleType<Elements, []> {
    annotations(annotations: Annotations.Schema<TupleType.Type<Elements, []>>): Tuple<Elements>;
}
/**
 * @category api interface
 * @since 3.13.3
 */
export interface Tuple2<Fst extends Schema.Any, Snd extends Schema.Any> extends AnnotableClass<Tuple2<Fst, Snd>, readonly [Schema.Type<Fst>, Schema.Type<Snd>], readonly [Schema.Encoded<Fst>, Schema.Encoded<Snd>], Schema.Context<Fst> | Schema.Context<Snd>> {
    readonly elements: readonly [Fst, Snd];
    readonly rest: readonly [];
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare function Tuple<const Elements extends TupleType.Elements, Rest extends array_.NonEmptyReadonlyArray<TupleType.Rest[number]>>(elements: Elements, ...rest: Rest): TupleType<Elements, Rest>;
export declare function Tuple<Fst extends Schema.Any, Snd extends Schema.Any>(fst: Fst, snd: Snd): Tuple2<Fst, Snd>;
export declare function Tuple<Elements extends TupleType.Elements>(...elements: Elements): Tuple<Elements>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Array$<Value extends Schema.Any> extends TupleType<[], [Value]> {
    readonly value: Value;
    annotations(annotations: Annotations.Schema<TupleType.Type<[], [Value]>>): Array$<Value>;
}
declare const Array$: <Value extends Schema.Any>(value: Value) => Array$<Value>;
export { 
/**
 * @category constructors
 * @since 3.10.0
 */
Array$ as Array };
/**
 * @category api interface
 * @since 3.10.0
 */
export interface NonEmptyArray<Value extends Schema.Any> extends AnnotableClass<NonEmptyArray<Value>, array_.NonEmptyReadonlyArray<Schema.Type<Value>>, array_.NonEmptyReadonlyArray<Schema.Encoded<Value>>, Schema.Context<Value>> {
    readonly elements: readonly [Value];
    readonly rest: readonly [Value];
    readonly value: Value;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const NonEmptyArray: <Value extends Schema.Any>(value: Value) => NonEmptyArray<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface ArrayEnsure<Value extends Schema.Any> extends transform<Union<[Value, Array$<Value>]>, Array$<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare function ArrayEnsure<Value extends Schema.Any>(value: Value): ArrayEnsure<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface NonEmptyArrayEnsure<Value extends Schema.Any> extends transform<Union<[Value, NonEmptyArray<Value>]>, NonEmptyArray<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare function NonEmptyArrayEnsure<Value extends Schema.Any>(value: Value): NonEmptyArrayEnsure<Value>;
/**
 * @since 3.10.0
 */
export declare namespace PropertySignature {
    /**
     * @since 3.10.0
     */
    type Token = "?:" | ":";
    /**
     * @since 3.10.0
     */
    type Any<Key extends PropertyKey = PropertyKey> = PropertySignature<Token, any, Key, Token, any, boolean, unknown>;
    /**
     * @since 3.10.0
     */
    type All<Key extends PropertyKey = PropertyKey> = Any<Key> | PropertySignature<Token, never, Key, Token, any, boolean, unknown> | PropertySignature<Token, any, Key, Token, never, boolean, unknown> | PropertySignature<Token, never, Key, Token, never, boolean, unknown>;
    /**
     * @since 3.10.0
     */
    type AST = PropertySignatureDeclaration | PropertySignatureTransformation;
    /**
     * @since 3.10.0
     */
    interface Annotations<A> extends Annotations.Doc<A> {
        readonly missingMessage?: AST.MissingMessageAnnotation;
    }
}
/**
 * @category PropertySignature
 * @since 3.10.0
 */
export declare class PropertySignatureDeclaration extends AST.OptionalType {
    readonly isReadonly: boolean;
    readonly defaultValue: (() => unknown) | undefined;
    /**
     * @since 3.10.0
     */
    readonly _tag = "PropertySignatureDeclaration";
    constructor(type: AST.AST, isOptional: boolean, isReadonly: boolean, annotations: AST.Annotations, defaultValue: (() => unknown) | undefined);
    /**
     * @since 3.10.0
     */
    toString(): string;
}
/**
 * @category PropertySignature
 * @since 3.10.0
 */
export declare class FromPropertySignature extends AST.OptionalType {
    readonly isReadonly: boolean;
    readonly fromKey?: PropertyKey | undefined;
    constructor(type: AST.AST, isOptional: boolean, isReadonly: boolean, annotations: AST.Annotations, fromKey?: PropertyKey | undefined);
}
/**
 * @category PropertySignature
 * @since 3.10.0
 */
export declare class ToPropertySignature extends AST.OptionalType {
    readonly isReadonly: boolean;
    readonly defaultValue: (() => unknown) | undefined;
    constructor(type: AST.AST, isOptional: boolean, isReadonly: boolean, annotations: AST.Annotations, defaultValue: (() => unknown) | undefined);
}
/**
 * @category PropertySignature
 * @since 3.10.0
 */
export declare class PropertySignatureTransformation {
    readonly from: FromPropertySignature;
    readonly to: ToPropertySignature;
    readonly decode: AST.PropertySignatureTransformation["decode"];
    readonly encode: AST.PropertySignatureTransformation["encode"];
    /**
     * @since 3.10.0
     */
    readonly _tag = "PropertySignatureTransformation";
    constructor(from: FromPropertySignature, to: ToPropertySignature, decode: AST.PropertySignatureTransformation["decode"], encode: AST.PropertySignatureTransformation["encode"]);
    /**
     * @since 3.10.0
     */
    toString(): string;
}
/**
 * @since 3.10.0
 * @category symbol
 */
export declare const PropertySignatureTypeId: unique symbol;
/**
 * @since 3.10.0
 * @category symbol
 */
export type PropertySignatureTypeId = typeof PropertySignatureTypeId;
/**
 * @since 3.10.0
 * @category guards
 */
export declare const isPropertySignature: (u: unknown) => u is PropertySignature.All;
/**
 * @category PropertySignature
 * @since 3.10.0
 */
export interface PropertySignature<TypeToken extends PropertySignature.Token, Type, Key extends PropertyKey, EncodedToken extends PropertySignature.Token, Encoded, HasDefault extends boolean = false, R = never> extends Schema.Variance<Type, Encoded, R>, Pipeable {
    readonly [PropertySignatureTypeId]: null;
    readonly _TypeToken: TypeToken;
    readonly _EncodedToken: EncodedToken;
    readonly _HasDefault: HasDefault;
    readonly _Key: Key;
    readonly ast: PropertySignature.AST;
    annotations(annotations: PropertySignature.Annotations<Type>): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R>;
}
declare class PropertySignatureImpl<TypeToken extends PropertySignature.Token, Type, Key extends PropertyKey, EncodedToken extends PropertySignature.Token, Encoded, HasDefault extends boolean = false, R = never> implements PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R> {
    readonly ast: PropertySignature.AST;
    readonly [TypeId]: Schema.Variance<Type, Encoded, R>[TypeId];
    readonly [PropertySignatureTypeId]: null;
    readonly _TypeToken: TypeToken;
    readonly _Key: Key;
    readonly _EncodedToken: EncodedToken;
    readonly _HasDefault: HasDefault;
    constructor(ast: PropertySignature.AST);
    pipe(): unknown;
    annotations(annotations: PropertySignature.Annotations<Type>): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R>;
    toString(): string;
}
/**
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const makePropertySignature: <TypeToken extends PropertySignature.Token, Type, Key extends PropertyKey, EncodedToken extends PropertySignature.Token, Encoded, HasDefault extends boolean = false, R = never>(ast: PropertySignature.AST) => PropertySignatureImpl<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R>;
/**
 * @category API interface
 * @since 1.0.0
 */
export interface propertySignature<S extends Schema.All> extends PropertySignature<":", Schema.Type<S>, never, ":", Schema.Encoded<S>, false, Schema.Context<S>> {
    readonly from: S;
    annotations(annotations: PropertySignature.Annotations<Schema.Type<S>>): propertySignature<S>;
}
/**
 * Lifts a `Schema` into a `PropertySignature`.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const propertySignature: <S extends Schema.All>(self: S) => propertySignature<S>;
/**
 * Enhances a property signature with a default constructor value.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const withConstructorDefault: {
    /**
     * Enhances a property signature with a default constructor value.
     *
     * @category PropertySignature
     * @since 3.10.0
     */
    <Type>(defaultValue: () => Types.NoInfer<Type>): <TypeToken extends PropertySignature.Token, Key extends PropertyKey, EncodedToken extends PropertySignature.Token, Encoded, R>(self: PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, boolean, R>) => PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, true, R>;
    /**
     * Enhances a property signature with a default constructor value.
     *
     * @category PropertySignature
     * @since 3.10.0
     */
    <TypeToken extends PropertySignature.Token, Type, Key extends PropertyKey, EncodedToken extends PropertySignature.Token, Encoded, R>(self: PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, boolean, R>, defaultValue: () => Types.NoInfer<Type>): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, true, R>;
};
/**
 * Enhances a property signature with a default decoding value.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const withDecodingDefault: {
    /**
     * Enhances a property signature with a default decoding value.
     *
     * @category PropertySignature
     * @since 3.10.0
     */
    <Type>(defaultValue: () => Types.NoInfer<Exclude<Type, undefined>>): <Key extends PropertyKey, Encoded, R>(self: PropertySignature<"?:", Type, Key, "?:", Encoded, false, R>) => PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, false, R>;
    /**
     * Enhances a property signature with a default decoding value.
     *
     * @category PropertySignature
     * @since 3.10.0
     */
    <Type, Key extends PropertyKey, Encoded, R>(self: PropertySignature<"?:", Type, Key, "?:", Encoded, false, R>, defaultValue: () => Types.NoInfer<Exclude<Type, undefined>>): PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, false, R>;
};
/**
 * Enhances a property signature with a default decoding value and a default constructor value.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const withDefaults: {
    /**
     * Enhances a property signature with a default decoding value and a default constructor value.
     *
     * @category PropertySignature
     * @since 3.10.0
     */
    <Type>(defaults: {
        constructor: () => Types.NoInfer<Exclude<Type, undefined>>;
        decoding: () => Types.NoInfer<Exclude<Type, undefined>>;
    }): <Key extends PropertyKey, Encoded, R>(self: PropertySignature<"?:", Type, Key, "?:", Encoded, boolean, R>) => PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, true, R>;
    /**
     * Enhances a property signature with a default decoding value and a default constructor value.
     *
     * @category PropertySignature
     * @since 3.10.0
     */
    <Type, Key extends PropertyKey, Encoded, R>(self: PropertySignature<"?:", Type, Key, "?:", Encoded, boolean, R>, defaults: {
        constructor: () => Types.NoInfer<Exclude<Type, undefined>>;
        decoding: () => Types.NoInfer<Exclude<Type, undefined>>;
    }): PropertySignature<":", Exclude<Type, undefined>, Key, "?:", Encoded, true, R>;
};
/**
 * Enhances a property signature by specifying a different key for it in the Encoded type.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const fromKey: {
    /**
     * Enhances a property signature by specifying a different key for it in the Encoded type.
     *
     * @category PropertySignature
     * @since 3.10.0
     */
    <Key extends PropertyKey>(key: Key): <TypeToken extends PropertySignature.Token, Type, EncodedToken extends PropertySignature.Token, Encoded, HasDefault extends boolean, R>(self: PropertySignature<TypeToken, Type, PropertyKey, EncodedToken, Encoded, HasDefault, R>) => PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R>;
    /**
     * Enhances a property signature by specifying a different key for it in the Encoded type.
     *
     * @category PropertySignature
     * @since 3.10.0
     */
    <Type, TypeToken extends PropertySignature.Token, Encoded, EncodedToken extends PropertySignature.Token, HasDefault extends boolean, R, Key extends PropertyKey>(self: PropertySignature<TypeToken, Type, PropertyKey, EncodedToken, Encoded, HasDefault, R>, key: Key): PropertySignature<TypeToken, Type, Key, EncodedToken, Encoded, HasDefault, R>;
};
/**
 * Converts an optional property to a required one through a transformation `Option -> Type`.
 *
 * - `decode`: `none` as argument means the value is missing in the input.
 * - `encode`: `none` as return value means the value will be missing in the output.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const optionalToRequired: <FA, FI, FR, TA, TI, TR>(from: Schema<FA, FI, FR>, to: Schema<TA, TI, TR>, options: {
    readonly decode: (o: option_.Option<FA>) => TI;
    readonly encode: (ti: TI) => option_.Option<FA>;
}) => PropertySignature<":", TA, never, "?:", FI, false, FR | TR>;
/**
 * Converts an optional property to a required one through a transformation `Type -> Option`.
 *
 * - `decode`: `none` as return value means the value will be missing in the output.
 * - `encode`: `none` as argument means the value is missing in the input.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const requiredToOptional: <FA, FI, FR, TA, TI, TR>(from: Schema<FA, FI, FR>, to: Schema<TA, TI, TR>, options: {
    readonly decode: (fa: FA) => option_.Option<TI>;
    readonly encode: (o: option_.Option<TI>) => FA;
}) => PropertySignature<"?:", TA, never, ":", FI, false, FR | TR>;
/**
 * Converts an optional property to another optional property through a transformation `Option -> Option`.
 *
 * - `decode`:
 *   - `none` as argument means the value is missing in the input.
 *   - `none` as return value means the value will be missing in the output.
 * - `encode`:
 *   - `none` as argument means the value is missing in the input.
 *   - `none` as return value means the value will be missing in the output.
 *
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const optionalToOptional: <FA, FI, FR, TA, TI, TR>(from: Schema<FA, FI, FR>, to: Schema<TA, TI, TR>, options: {
    readonly decode: (o: option_.Option<FA>) => option_.Option<TI>;
    readonly encode: (o: option_.Option<TI>) => option_.Option<FA>;
}) => PropertySignature<"?:", TA, never, "?:", FI, false, FR | TR>;
/**
 * @since 3.10.0
 */
export type OptionalOptions<A> = {
    readonly default?: never;
    readonly as?: never;
    readonly exact?: true;
    readonly nullable?: true;
} | {
    readonly default: LazyArg<A>;
    readonly as?: never;
    readonly exact?: true;
    readonly nullable?: true;
} | {
    readonly as: "Option";
    readonly default?: never;
    readonly exact?: never;
    readonly nullable?: never;
    readonly onNoneEncoding?: LazyArg<option_.Option<undefined>>;
} | {
    readonly as: "Option";
    readonly default?: never;
    readonly exact?: never;
    readonly nullable: true;
    readonly onNoneEncoding?: LazyArg<option_.Option<null | undefined>>;
} | {
    readonly as: "Option";
    readonly default?: never;
    readonly exact: true;
    readonly nullable?: never;
    readonly onNoneEncoding?: never;
} | {
    readonly as: "Option";
    readonly default?: never;
    readonly exact: true;
    readonly nullable: true;
    readonly onNoneEncoding?: LazyArg<option_.Option<null>>;
} | undefined;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface optional<S extends Schema.All> extends PropertySignature<"?:", Schema.Type<S> | undefined, never, "?:", Schema.Encoded<S> | undefined, false, Schema.Context<S>> {
    readonly from: S;
    annotations(annotations: PropertySignature.Annotations<Schema.Type<S> | undefined>): optional<S>;
}
/**
 * @category api interface
 * @since 3.10.0
 */
export interface optionalWith<S extends Schema.All, Options> extends PropertySignature<Types.Has<Options, "as" | "default"> extends true ? ":" : "?:", (Types.Has<Options, "as"> extends true ? option_.Option<Schema.Type<S>> : Schema.Type<S>) | (Types.Has<Options, "as" | "default" | "exact"> extends true ? never : undefined), never, "?:", Schema.Encoded<S> | (Types.Has<Options, "nullable"> extends true ? null : never) | (Types.Has<Options, "exact"> extends true ? never : undefined), Types.Has<Options, "default">, Schema.Context<S>> {
    readonly from: S;
    annotations(annotations: PropertySignature.Annotations<(Types.Has<Options, "as"> extends true ? option_.Option<Schema.Type<S>> : Schema.Type<S>) | (Types.Has<Options, "as" | "default" | "exact"> extends true ? never : undefined)>): optionalWith<S, Options>;
}
/**
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const optional: <S extends Schema.All>(self: S) => optional<S>;
/**
 * @category PropertySignature
 * @since 3.10.0
 */
export declare const optionalWith: {
    /**
     * @category PropertySignature
     * @since 3.10.0
     */
    <S extends Schema.All, Options extends OptionalOptions<Schema.Type<S>>>(options: Options): (self: S) => optionalWith<S, Options>;
    /**
     * @category PropertySignature
     * @since 3.10.0
     */
    <S extends Schema.All, Options extends OptionalOptions<Schema.Type<S>>>(self: S, options: Options): optionalWith<S, Options>;
};
/**
 * @since 3.10.0
 */
export declare namespace Struct {
    /**
     * Useful for creating a type that can be used to add custom constraints to the fields of a struct.
     *
     * ```ts
     * import { Schema } from "effect"
     *
     * const f = <Fields extends Record<"a" | "b", Schema.Struct.Field>>(
     *   schema: Schema.Struct<Fields>
     * ) => {
     *   return schema.omit("a")
     * }
     *
     * //      ┌─── Schema.Struct<{ b: typeof Schema.Number; }>
     * //      ▼
     * const result = f(Schema.Struct({ a: Schema.String, b: Schema.Number }))
     * ```
     * @since 3.13.11
     */
    type Field = Schema.All | PropertySignature.All;
    /**
     * @since 3.10.0
     */
    type Fields = {
        readonly [x: PropertyKey]: Field;
    };
    type OptionalEncodedPropertySignature = PropertySignature<PropertySignature.Token, any, PropertyKey, "?:", any, boolean, unknown> | PropertySignature<PropertySignature.Token, any, PropertyKey, "?:", never, boolean, unknown> | PropertySignature<PropertySignature.Token, never, PropertyKey, "?:", any, boolean, unknown> | PropertySignature<PropertySignature.Token, never, PropertyKey, "?:", never, boolean, unknown>;
    type EncodedOptionalKeys<Fields extends Struct.Fields> = {
        [K in keyof Fields]: Fields[K] extends OptionalEncodedPropertySignature ? K : never;
    }[keyof Fields];
    type OptionalTypePropertySignature = PropertySignature<"?:", any, PropertyKey, PropertySignature.Token, any, boolean, unknown> | PropertySignature<"?:", any, PropertyKey, PropertySignature.Token, never, boolean, unknown> | PropertySignature<"?:", never, PropertyKey, PropertySignature.Token, any, boolean, unknown> | PropertySignature<"?:", never, PropertyKey, PropertySignature.Token, never, boolean, unknown>;
    /**
     * @since 3.10.0
     */
    type Type<F extends Fields> = Types.UnionToIntersection<{
        [K in keyof F]: F[K] extends OptionalTypePropertySignature ? {
            readonly [H in K]?: Schema.Type<F[H]>;
        } : {
            readonly [h in K]: Schema.Type<F[h]>;
        };
    }[keyof F]> extends infer Q ? Q : never;
    type Key<F extends Fields, K extends keyof F> = [K] extends [never] ? never : F[K] extends PropertySignature.All<infer Key> ? [Key] extends [never] ? K : Key : K;
    /**
     * @since 3.10.0
     */
    type Encoded<F extends Fields> = {
        readonly [K in Exclude<keyof F, EncodedOptionalKeys<F>> as Key<F, K>]: Schema.Encoded<F[K]>;
    } & {
        readonly [K in EncodedOptionalKeys<F> as Key<F, K>]?: Schema.Encoded<F[K]>;
    };
    /**
     * @since 3.10.0
     */
    type Context<F extends Fields> = Schema.Context<F[keyof F]>;
    type PropertySignatureWithDefault = PropertySignature<PropertySignature.Token, any, PropertyKey, PropertySignature.Token, any, true, unknown> | PropertySignature<PropertySignature.Token, any, PropertyKey, PropertySignature.Token, never, true, unknown> | PropertySignature<PropertySignature.Token, never, PropertyKey, PropertySignature.Token, any, true, unknown> | PropertySignature<PropertySignature.Token, never, PropertyKey, PropertySignature.Token, never, true, unknown>;
    /**
     * @since 3.10.0
     */
    type Constructor<F extends Fields> = Types.UnionToIntersection<{
        [K in keyof F]: F[K] extends OptionalTypePropertySignature ? {
            readonly [H in K]?: Schema.Type<F[H]>;
        } : F[K] extends PropertySignatureWithDefault ? {
            readonly [H in K]?: Schema.Type<F[H]>;
        } : {
            readonly [h in K]: Schema.Type<F[h]>;
        };
    }[keyof F]> extends infer Q ? Q : never;
}
/**
 * @since 3.10.0
 */
export declare namespace IndexSignature {
    /**
     * @since 3.10.0
     */
    type Record = {
        readonly key: Schema.All;
        readonly value: Schema.All;
    };
    /**
     * @since 3.10.0
     */
    type Records = ReadonlyArray<Record>;
    /**
     * @since 3.10.0
     */
    type NonEmptyRecords = array_.NonEmptyReadonlyArray<Record>;
    type MergeTuple<T extends ReadonlyArray<unknown>> = T extends readonly [infer Head, ...infer Tail] ? Head & MergeTuple<Tail> : {};
    /**
     * @since 3.10.0
     */
    type Type<Records extends IndexSignature.Records> = MergeTuple<{
        readonly [K in keyof Records]: {
            readonly [P in Schema.Type<Records[K]["key"]>]: Schema.Type<Records[K]["value"]>;
        };
    }>;
    /**
     * @since 3.10.0
     */
    type Encoded<Records extends IndexSignature.Records> = MergeTuple<{
        readonly [K in keyof Records]: {
            readonly [P in Schema.Encoded<Records[K]["key"]>]: Schema.Encoded<Records[K]["value"]>;
        };
    }>;
    /**
     * @since 3.10.0
     */
    type Context<Records extends IndexSignature.Records> = {
        [K in keyof Records]: Schema.Context<Records[K]["key"]> | Schema.Context<Records[K]["value"]>;
    }[number];
}
/**
 * @since 3.10.0
 */
export declare namespace TypeLiteral {
    /**
     * @since 3.10.0
     */
    type Type<Fields extends Struct.Fields, Records extends IndexSignature.Records> = Struct.Type<Fields> & IndexSignature.Type<Records>;
    /**
     * @since 3.10.0
     */
    type Encoded<Fields extends Struct.Fields, Records extends IndexSignature.Records> = Struct.Encoded<Fields> & IndexSignature.Encoded<Records>;
    /**
     * @since 3.10.0
     */
    type Constructor<Fields extends Struct.Fields, Records extends IndexSignature.Records> = Struct.Constructor<Fields> & IndexSignature.Type<Records>;
}
/**
 * @category api interface
 * @since 3.10.0
 */
export interface TypeLiteral<Fields extends Struct.Fields, Records extends IndexSignature.Records> extends AnnotableClass<TypeLiteral<Fields, Records>, Simplify<TypeLiteral.Type<Fields, Records>>, Simplify<TypeLiteral.Encoded<Fields, Records>>, Struct.Context<Fields> | IndexSignature.Context<Records>> {
    readonly fields: Readonly<Fields>;
    readonly records: Readonly<Records>;
    annotations(annotations: Annotations.Schema<Simplify<TypeLiteral.Type<Fields, Records>>>): TypeLiteral<Fields, Records>;
    make(props: RequiredKeys<TypeLiteral.Constructor<Fields, Records>> extends never ? void | Simplify<TypeLiteral.Constructor<Fields, Records>> : Simplify<TypeLiteral.Constructor<Fields, Records>>, options?: MakeOptions): Simplify<TypeLiteral.Type<Fields, Records>>;
}
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Struct<Fields extends Struct.Fields> extends AnnotableClass<Struct<Fields>, Simplify<Struct.Type<Fields>>, Simplify<Struct.Encoded<Fields>>, Struct.Context<Fields>> {
    readonly fields: Readonly<Fields>;
    readonly records: readonly [];
    make(props: RequiredKeys<Struct.Constructor<Fields>> extends never ? void | Simplify<Struct.Constructor<Fields>> : Simplify<Struct.Constructor<Fields>>, options?: MakeOptions): Simplify<Struct.Type<Fields>>;
    annotations(annotations: Annotations.Schema<Simplify<Struct.Type<Fields>>>): Struct<Fields>;
    pick<Keys extends ReadonlyArray<keyof Fields>>(...keys: Keys): Struct<Simplify<Pick<Fields, Keys[number]>>>;
    omit<Keys extends ReadonlyArray<keyof Fields>>(...keys: Keys): Struct<Simplify<Omit<Fields, Keys[number]>>>;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare function Struct<Fields extends Struct.Fields, const Records extends IndexSignature.NonEmptyRecords>(fields: Fields, ...records: Records): TypeLiteral<Fields, Records>;
export declare function Struct<Fields extends Struct.Fields>(fields: Fields): Struct<Fields>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface tag<Tag extends AST.LiteralValue> extends PropertySignature<":", Tag, never, ":", Tag, true, never> {
}
/**
 * Returns a property signature that represents a tag.
 * A tag is a literal value that is used to distinguish between different types of objects.
 * The tag is optional when using the `make` method.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Schema } from "effect"
 *
 * const User = Schema.Struct({
 *   _tag: Schema.tag("User"),
 *   name: Schema.String,
 *   age: Schema.Number
 * })
 *
 * assert.deepStrictEqual(User.make({ name: "John", age: 44 }), { _tag: "User", name: "John", age: 44 })
 * ```
 *
 * @see {@link TaggedStruct}
 *
 * @since 3.10.0
 */
export declare const tag: <Tag extends AST.LiteralValue>(tag: Tag) => tag<Tag>;
/**
 * @category api interface
 * @since 3.10.0
 */
export type TaggedStruct<Tag extends AST.LiteralValue, Fields extends Struct.Fields> = Struct<{
    _tag: tag<Tag>;
} & Fields>;
/**
 * A tagged struct is a struct that has a tag property that is used to distinguish between different types of objects.
 *
 * The tag is optional when using the `make` method.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Schema } from "effect"
 *
 * const User = Schema.TaggedStruct("User", {
 *   name: Schema.String,
 *   age: Schema.Number
 * })
 *
 * assert.deepStrictEqual(User.make({ name: "John", age: 44 }), { _tag: "User", name: "John", age: 44 })
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
export declare const TaggedStruct: <Tag extends AST.LiteralValue, Fields extends Struct.Fields>(value: Tag, fields: Fields) => TaggedStruct<Tag, Fields>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Record$<K extends Schema.All, V extends Schema.All> extends AnnotableClass<Record$<K, V>, {
    readonly [P in Schema.Type<K>]: Schema.Type<V>;
}, {
    readonly [P in Schema.Encoded<K>]: Schema.Encoded<V>;
}, Schema.Context<K> | Schema.Context<V>> {
    readonly fields: {};
    readonly records: readonly [{
        readonly key: K;
        readonly value: V;
    }];
    readonly key: K;
    readonly value: V;
    make(props: void | {
        readonly [P in Schema.Type<K>]: Schema.Type<V>;
    }, options?: MakeOptions): {
        readonly [P in Schema.Type<K>]: Schema.Type<V>;
    };
    annotations(annotations: Annotations.Schema<{
        readonly [P in Schema.Type<K>]: Schema.Type<V>;
    }>): Record$<K, V>;
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const Record: <K extends Schema.All, V extends Schema.All>(options: {
    readonly key: K;
    readonly value: V;
}) => Record$<K, V>;
/**
 * @category struct transformations
 * @since 3.10.0
 */
export declare const pick: <A, I, Keys extends ReadonlyArray<keyof A & keyof I>>(...keys: Keys) => <R>(self: Schema<A, I, R>) => SchemaClass<Simplify<Pick<A, Keys[number]>>, Simplify<Pick<I, Keys[number]>>, R>;
/**
 * @category struct transformations
 * @since 3.10.0
 */
export declare const omit: <A, I, Keys extends ReadonlyArray<keyof A & keyof I>>(...keys: Keys) => <R>(self: Schema<A, I, R>) => SchemaClass<Simplify<Omit<A, Keys[number]>>, Simplify<Omit<I, Keys[number]>>, R>;
/**
 * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
 * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
 *
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * // ---------------------------------------------
 * // use case: pull out a single field from a
 * // struct through a transformation
 * // ---------------------------------------------
 *
 * const mytable = Schema.Struct({
 *   column1: Schema.NumberFromString,
 *   column2: Schema.Number
 * })
 *
 * // const pullOutColumn: S.Schema<number, {
 * //     readonly column1: string;
 * // }, never>
 * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
 *
 * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
 * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
 * ```
 *
 * @category struct transformations
 * @since 3.10.0
 */
export declare const pluck: {
    /**
     * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
     * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
     *
     * @example
     * ```ts
     * import * as Schema from "effect/Schema"
     *
     * // ---------------------------------------------
     * // use case: pull out a single field from a
     * // struct through a transformation
     * // ---------------------------------------------
     *
     * const mytable = Schema.Struct({
     *   column1: Schema.NumberFromString,
     *   column2: Schema.Number
     * })
     *
     * // const pullOutColumn: S.Schema<number, {
     * //     readonly column1: string;
     * // }, never>
     * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
     *
     * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
     * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
     * ```
     *
     * @category struct transformations
     * @since 3.10.0
     */
    <A, I, K extends keyof A & keyof I>(key: K): <R>(schema: Schema<A, I, R>) => SchemaClass<A[K], Simplify<Pick<I, K>>, R>;
    /**
     * Given a schema `Schema<A, I, R>` and a key `key: K`, this function extracts a specific field from the `A` type,
     * producing a new schema that represents a transformation from the `{ readonly [key]: I[K] }` type to `A[K]`.
     *
     * @example
     * ```ts
     * import * as Schema from "effect/Schema"
     *
     * // ---------------------------------------------
     * // use case: pull out a single field from a
     * // struct through a transformation
     * // ---------------------------------------------
     *
     * const mytable = Schema.Struct({
     *   column1: Schema.NumberFromString,
     *   column2: Schema.Number
     * })
     *
     * // const pullOutColumn: S.Schema<number, {
     * //     readonly column1: string;
     * // }, never>
     * const pullOutColumn = mytable.pipe(Schema.pluck("column1"))
     *
     * console.log(Schema.decodeUnknownEither(Schema.Array(pullOutColumn))([{ column1: "1", column2: 100 }, { column1: "2", column2: 300 }]))
     * // Output: { _id: 'Either', _tag: 'Right', right: [ 1, 2 ] }
     * ```
     *
     * @category struct transformations
     * @since 3.10.0
     */
    <A, I, R, K extends keyof A & keyof I>(schema: Schema<A, I, R>, key: K): SchemaClass<A[K], Simplify<Pick<I, K>>, R>;
};
/**
 * @category branding
 * @since 3.10.0
 */
export interface BrandSchema<A extends Brand<any>, I = A, R = never> extends AnnotableClass<BrandSchema<A, I, R>, A, I, R> {
    make(a: Brand.Unbranded<A>, options?: MakeOptions): A;
}
/**
 * @category api interface
 * @since 3.10.0
 */
export interface brand<S extends Schema.Any, B extends string | symbol> extends BrandSchema<Schema.Type<S> & Brand<B>, Schema.Encoded<S>, Schema.Context<S>> {
    readonly from: S;
    annotations(annotations: Annotations.Schema<Schema.Type<S> & Brand<B>>): brand<S, B>;
}
/**
 * Returns a nominal branded schema by applying a brand to a given schema.
 *
 * ```
 * Schema<A> + B -> Schema<A & Brand<B>>
 * ```
 *
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * const Int = Schema.Number.pipe(Schema.int(), Schema.brand("Int"))
 * type Int = Schema.Schema.Type<typeof Int> // number & Brand<"Int">
 * ```
 *
 * @category branding
 * @since 3.10.0
 */
export declare const brand: <S extends Schema.Any, B extends string | symbol>(brand: B, annotations?: Annotations.Schema<Schema.Type<S> & Brand<B>>) => (self: S) => brand<S, B>;
/**
 * @category combinators
 * @since 3.10.0
 */
export declare const partial: <A, I, R>(self: Schema<A, I, R>) => SchemaClass<{ [K in keyof A]?: A[K] | undefined; }, { [K in keyof I]?: I[K] | undefined; }, R>;
/**
 * @category combinators
 * @since 3.10.0
 */
export declare const partialWith: {
    /**
     * @category combinators
     * @since 3.10.0
     */
    <const Options extends {
        readonly exact: true;
    }>(options: Options): <A, I, R>(self: Schema<A, I, R>) => SchemaClass<{
        [K in keyof A]?: A[K];
    }, {
        [K in keyof I]?: I[K];
    }, R>;
    /**
     * @category combinators
     * @since 3.10.0
     */
    <A, I, R, const Options extends {
        readonly exact: true;
    } | undefined>(self: Schema<A, I, R>, options: Options): SchemaClass<{
        [K in keyof A]?: A[K];
    }, {
        [K in keyof I]?: I[K];
    }, R>;
};
/**
 * @category combinators
 * @since 3.10.0
 */
export declare const required: <A, I, R>(self: Schema<A, I, R>) => SchemaClass<{ [K in keyof A]-?: A[K]; }, { [K in keyof I]-?: I[K]; }, R>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface mutable<S extends Schema.Any> extends AnnotableClass<mutable<S>, SimplifyMutable<Schema.Type<S>>, SimplifyMutable<Schema.Encoded<S>>, Schema.Context<S>> {
}
/**
 * Creates a new schema with shallow mutability applied to its properties.
 *
 * @category combinators
 * @since 3.10.0
 */
export declare const mutable: <S extends Schema.Any>(schema: S) => mutable<S>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface extend<Self extends Schema.Any, That extends Schema.Any> extends AnnotableClass<extend<Self, That>, Schema.Type<Self> & Schema.Type<That>, Schema.Encoded<Self> & Schema.Encoded<That>, Schema.Context<Self> | Schema.Context<That>> {
}
/**
 * Extends a schema with another schema.
 *
 * Not all extensions are supported, and their support depends on the nature of
 * the involved schemas.
 *
 * Possible extensions include:
 * - `Schema.String` with another `Schema.String` refinement or a string literal
 * - `Schema.Number` with another `Schema.Number` refinement or a number literal
 * - `Schema.Boolean` with another `Schema.Boolean` refinement or a boolean
 *   literal
 * - A struct with another struct where overlapping fields support extension
 * - A struct with in index signature
 * - A struct with a union of supported schemas
 * - A refinement of a struct with a supported schema
 * - A suspend of a struct with a supported schema
 * - A transformation between structs where the “from” and “to” sides have no
 *   overlapping fields with the target struct
 *
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * const schema = Schema.Struct({
 *   a: Schema.String,
 *   b: Schema.String
 * })
 *
 * // const extended: Schema<
 * //   {
 * //     readonly a: string
 * //     readonly b: string
 * //   } & {
 * //     readonly c: string
 * //   } & {
 * //     readonly [x: string]: string
 * //   }
 * // >
 * const extended = Schema.asSchema(schema.pipe(
 *   Schema.extend(Schema.Struct({ c: Schema.String })), // <= you can add more fields
 *   Schema.extend(Schema.Record({ key: Schema.String, value: Schema.String })) // <= you can add index signatures
 * ))
 * ```
 *
 * @category combinators
 * @since 3.10.0
 */
export declare const extend: {
    /**
     * Extends a schema with another schema.
     *
     * Not all extensions are supported, and their support depends on the nature of
     * the involved schemas.
     *
     * Possible extensions include:
     * - `Schema.String` with another `Schema.String` refinement or a string literal
     * - `Schema.Number` with another `Schema.Number` refinement or a number literal
     * - `Schema.Boolean` with another `Schema.Boolean` refinement or a boolean
     *   literal
     * - A struct with another struct where overlapping fields support extension
     * - A struct with in index signature
     * - A struct with a union of supported schemas
     * - A refinement of a struct with a supported schema
     * - A suspend of a struct with a supported schema
     * - A transformation between structs where the “from” and “to” sides have no
     *   overlapping fields with the target struct
     *
     * @example
     * ```ts
     * import * as Schema from "effect/Schema"
     *
     * const schema = Schema.Struct({
     *   a: Schema.String,
     *   b: Schema.String
     * })
     *
     * // const extended: Schema<
     * //   {
     * //     readonly a: string
     * //     readonly b: string
     * //   } & {
     * //     readonly c: string
     * //   } & {
     * //     readonly [x: string]: string
     * //   }
     * // >
     * const extended = Schema.asSchema(schema.pipe(
     *   Schema.extend(Schema.Struct({ c: Schema.String })), // <= you can add more fields
     *   Schema.extend(Schema.Record({ key: Schema.String, value: Schema.String })) // <= you can add index signatures
     * ))
     * ```
     *
     * @category combinators
     * @since 3.10.0
     */
    <That extends Schema.Any>(that: That): <Self extends Schema.Any>(self: Self) => extend<Self, That>;
    /**
     * Extends a schema with another schema.
     *
     * Not all extensions are supported, and their support depends on the nature of
     * the involved schemas.
     *
     * Possible extensions include:
     * - `Schema.String` with another `Schema.String` refinement or a string literal
     * - `Schema.Number` with another `Schema.Number` refinement or a number literal
     * - `Schema.Boolean` with another `Schema.Boolean` refinement or a boolean
     *   literal
     * - A struct with another struct where overlapping fields support extension
     * - A struct with in index signature
     * - A struct with a union of supported schemas
     * - A refinement of a struct with a supported schema
     * - A suspend of a struct with a supported schema
     * - A transformation between structs where the “from” and “to” sides have no
     *   overlapping fields with the target struct
     *
     * @example
     * ```ts
     * import * as Schema from "effect/Schema"
     *
     * const schema = Schema.Struct({
     *   a: Schema.String,
     *   b: Schema.String
     * })
     *
     * // const extended: Schema<
     * //   {
     * //     readonly a: string
     * //     readonly b: string
     * //   } & {
     * //     readonly c: string
     * //   } & {
     * //     readonly [x: string]: string
     * //   }
     * // >
     * const extended = Schema.asSchema(schema.pipe(
     *   Schema.extend(Schema.Struct({ c: Schema.String })), // <= you can add more fields
     *   Schema.extend(Schema.Record({ key: Schema.String, value: Schema.String })) // <= you can add index signatures
     * ))
     * ```
     *
     * @category combinators
     * @since 3.10.0
     */
    <Self extends Schema.Any, That extends Schema.Any>(self: Self, that: That): extend<Self, That>;
};
/**
 * @category combinators
 * @since 3.10.0
 */
export declare const compose: {
    /**
     * @category combinators
     * @since 3.10.0
     */
    <To extends Schema.Any, From extends Schema.Any, C extends Schema.Type<From>>(to: To & Schema<Schema.Type<To>, C, Schema.Context<To>>): (from: From) => transform<From, To>;
    /**
     * @category combinators
     * @since 3.10.0
     */
    <To extends Schema.Any>(to: To): <From extends Schema.Any, B extends Schema.Encoded<To>>(from: From & Schema<B, Schema.Encoded<From>, Schema.Context<From>>) => transform<From, To>;
    /**
     * @category combinators
     * @since 3.10.0
     */
    <To extends Schema.Any>(to: To, options?: {
        readonly strict: true;
    }): <From extends Schema.Any>(from: From & Schema<Schema.Encoded<To>, Schema.Encoded<From>, Schema.Context<From>>) => transform<From, To>;
    /**
     * @category combinators
     * @since 3.10.0
     */
    <To extends Schema.Any>(to: To, options: {
        readonly strict: false;
    }): <From extends Schema.Any>(from: From) => transform<From, To>;
    /**
     * @category combinators
     * @since 3.10.0
     */
    <From extends Schema.Any, To extends Schema.Any, C extends Schema.Type<From>>(from: From, to: To & Schema<Schema.Type<To>, C, Schema.Context<To>>): transform<From, To>;
    /**
     * @category combinators
     * @since 3.10.0
     */
    <From extends Schema.Any, B extends Schema.Encoded<To>, To extends Schema.Any>(from: From & Schema<B, Schema.Encoded<From>, Schema.Context<From>>, to: To): transform<From, To>;
    /**
     * @category combinators
     * @since 3.10.0
     */
    <From extends Schema.Any, To extends Schema.Any>(from: From & Schema<Schema.Encoded<To>, Schema.Encoded<From>, Schema.Context<From>>, to: To, options?: {
        readonly strict: true;
    }): transform<From, To>;
    /**
     * @category combinators
     * @since 3.10.0
     */
    <From extends Schema.Any, To extends Schema.Any>(from: From, to: To, options: {
        readonly strict: false;
    }): transform<From, To>;
};
/**
 * @category api interface
 * @since 3.10.0
 */
export interface suspend<A, I, R> extends AnnotableClass<suspend<A, I, R>, A, I, R> {
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const suspend: <A, I, R>(f: () => Schema<A, I, R>) => suspend<A, I, R>;
/**
 * @since 3.10.0
 * @category symbol
 */
export declare const RefineSchemaId: unique symbol;
/**
 * @since 3.10.0
 * @category symbol
 */
export type RefineSchemaId = typeof RefineSchemaId;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface refine<A, From extends Schema.Any> extends AnnotableClass<refine<A, From>, A, Schema.Encoded<From>, Schema.Context<From>> {
    /** The following is required for {@link HasFields} to work */
    readonly [RefineSchemaId]: From;
    readonly from: From;
    readonly filter: (a: Schema.Type<From>, options: ParseOptions, self: AST.Refinement) => option_.Option<ParseResult.ParseIssue>;
    make(a: Schema.Type<From>, options?: MakeOptions): A;
}
/**
 * @category api interface
 * @since 3.10.0
 */
export interface filter<From extends Schema.Any> extends refine<Schema.Type<From>, From> {
}
/**
 * @category filtering
 * @since 3.10.0
 */
export interface FilterIssue {
    readonly path: ReadonlyArray<PropertyKey>;
    readonly message: string;
}
/**
 * @category filtering
 * @since 3.10.0
 */
export type FilterOutput = undefined | boolean | string | ParseResult.ParseIssue | FilterIssue;
type FilterReturnType = FilterOutput | ReadonlyArray<FilterOutput>;
/**
 * @category filtering
 * @since 3.10.0
 */
export declare function filter<C extends A, B extends A, A = C>(refinement: (a: A, options: ParseOptions, self: AST.Refinement) => a is B, annotations?: Annotations.Filter<C & B, C>): <I, R>(self: Schema<C, I, R>) => refine<C & B, Schema<A, I, R>>;
export declare function filter<A, B extends A>(refinement: (a: A, options: ParseOptions, self: AST.Refinement) => a is B, annotations?: Annotations.Filter<B, A>): <I, R>(self: Schema<A, I, R>) => refine<B, Schema<A, I, R>>;
export declare function filter<S extends Schema.Any>(predicate: (a: Types.NoInfer<Schema.Type<S>>, options: ParseOptions, self: AST.Refinement) => FilterReturnType, annotations?: Annotations.Filter<Types.NoInfer<Schema.Type<S>>>): (self: S) => filter<S>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface filterEffect<S extends Schema.Any, FD = never> extends transformOrFail<S, SchemaClass<Schema.Type<S>>, FD> {
}
/**
 * @category transformations
 * @since 3.10.0
 */
export declare const filterEffect: {
    /**
     * @category transformations
     * @since 3.10.0
     */
    <S extends Schema.Any, FD>(f: (a: Types.NoInfer<Schema.Type<S>>, options: ParseOptions, self: AST.Transformation) => Effect.Effect<FilterReturnType, never, FD>): (self: S) => filterEffect<S, FD>;
    /**
     * @category transformations
     * @since 3.10.0
     */
    <S extends Schema.Any, RD>(self: S, f: (a: Types.NoInfer<Schema.Type<S>>, options: ParseOptions, self: AST.Transformation) => Effect.Effect<FilterReturnType, never, RD>): filterEffect<S, RD>;
};
/**
 * @category api interface
 * @since 3.10.0
 */
export interface transformOrFail<From extends Schema.All, To extends Schema.All, R = never> extends AnnotableClass<transformOrFail<From, To, R>, Schema.Type<To>, Schema.Encoded<From>, Schema.Context<From> | Schema.Context<To> | R> {
    readonly from: From;
    readonly to: To;
}
/**
 * Create a new `Schema` by transforming the input and output of an existing `Schema`
 * using the provided decoding functions.
 *
 * @category transformations
 * @since 3.10.0
 */
export declare const transformOrFail: {
    /**
     * Create a new `Schema` by transforming the input and output of an existing `Schema`
     * using the provided decoding functions.
     *
     * @category transformations
     * @since 3.10.0
     */
    <To extends Schema.Any, From extends Schema.Any, RD, RE>(to: To, options: {
        readonly decode: (fromA: Schema.Type<From>, options: ParseOptions, ast: AST.Transformation, fromI: Schema.Encoded<From>) => Effect.Effect<Schema.Encoded<To>, ParseResult.ParseIssue, RD>;
        readonly encode: (toI: Schema.Encoded<To>, options: ParseOptions, ast: AST.Transformation, toA: Schema.Type<To>) => Effect.Effect<Schema.Type<From>, ParseResult.ParseIssue, RE>;
        readonly strict?: true;
    } | {
        readonly decode: (fromA: Schema.Type<From>, options: ParseOptions, ast: AST.Transformation, fromI: Schema.Encoded<From>) => Effect.Effect<unknown, ParseResult.ParseIssue, RD>;
        readonly encode: (toI: Schema.Encoded<To>, options: ParseOptions, ast: AST.Transformation, toA: Schema.Type<To>) => Effect.Effect<unknown, ParseResult.ParseIssue, RE>;
        readonly strict: false;
    }): (from: From) => transformOrFail<From, To, RD | RE>;
    /**
     * Create a new `Schema` by transforming the input and output of an existing `Schema`
     * using the provided decoding functions.
     *
     * @category transformations
     * @since 3.10.0
     */
    <To extends Schema.Any, From extends Schema.Any, RD, RE>(from: From, to: To, options: {
        readonly decode: (fromA: Schema.Type<From>, options: ParseOptions, ast: AST.Transformation, fromI: Schema.Encoded<From>) => Effect.Effect<Schema.Encoded<To>, ParseResult.ParseIssue, RD>;
        readonly encode: (toI: Schema.Encoded<To>, options: ParseOptions, ast: AST.Transformation, toA: Schema.Type<To>) => Effect.Effect<Schema.Type<From>, ParseResult.ParseIssue, RE>;
        readonly strict?: true;
    } | {
        readonly decode: (fromA: Schema.Type<From>, options: ParseOptions, ast: AST.Transformation, fromI: Schema.Encoded<From>) => Effect.Effect<unknown, ParseResult.ParseIssue, RD>;
        readonly encode: (toI: Schema.Encoded<To>, options: ParseOptions, ast: AST.Transformation, toA: Schema.Type<To>) => Effect.Effect<unknown, ParseResult.ParseIssue, RE>;
        readonly strict: false;
    }): transformOrFail<From, To, RD | RE>;
};
/**
 * @category api interface
 * @since 3.10.0
 */
export interface transform<From extends Schema.All, To extends Schema.All> extends transformOrFail<From, To> {
    annotations(annotations: Annotations.Schema<Schema.Type<To>>): transform<From, To>;
}
/**
 * Create a new `Schema` by transforming the input and output of an existing `Schema`
 * using the provided mapping functions.
 *
 * @category transformations
 * @since 3.10.0
 */
export declare const transform: {
    /**
     * Create a new `Schema` by transforming the input and output of an existing `Schema`
     * using the provided mapping functions.
     *
     * @category transformations
     * @since 3.10.0
     */
    <To extends Schema.Any, From extends Schema.Any>(to: To, options: {
        readonly decode: (fromA: Schema.Type<From>, fromI: Schema.Encoded<From>) => Schema.Encoded<To>;
        readonly encode: (toI: Schema.Encoded<To>, toA: Schema.Type<To>) => Schema.Type<From>;
        readonly strict?: true;
    } | {
        readonly decode: (fromA: Schema.Type<From>, fromI: Schema.Encoded<From>) => unknown;
        readonly encode: (toI: Schema.Encoded<To>, toA: Schema.Type<To>) => unknown;
        readonly strict: false;
    }): (from: From) => transform<From, To>;
    /**
     * Create a new `Schema` by transforming the input and output of an existing `Schema`
     * using the provided mapping functions.
     *
     * @category transformations
     * @since 3.10.0
     */
    <To extends Schema.Any, From extends Schema.Any>(from: From, to: To, options: {
        readonly decode: (fromA: Schema.Type<From>, fromI: Schema.Encoded<From>) => Schema.Encoded<To>;
        readonly encode: (toI: Schema.Encoded<To>, toA: Schema.Type<To>) => Schema.Type<From>;
        readonly strict?: true;
    } | {
        readonly decode: (fromA: Schema.Type<From>, fromI: Schema.Encoded<From>) => unknown;
        readonly encode: (toI: Schema.Encoded<To>, toA: Schema.Type<To>) => unknown;
        readonly strict: false;
    }): transform<From, To>;
};
/**
 * @category api interface
 * @since 3.10.0
 */
export interface transformLiteral<Type extends AST.LiteralValue, Encoded extends AST.LiteralValue> extends transform<Literal<[Encoded]>, Literal<[Type]>> {
    annotations(annotations: Annotations.Schema<Type>): transformLiteral<Type, Encoded>;
}
/**
 * Creates a new `Schema` which transforms literal values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as S from "effect/Schema"
 *
 * const schema = S.transformLiteral(0, "a")
 *
 * assert.deepStrictEqual(S.decodeSync(schema)(0), "a")
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
export declare function transformLiteral<Encoded extends AST.LiteralValue, Type extends AST.LiteralValue>(from: Encoded, to: Type): transformLiteral<Type, Encoded>;
/**
 * Creates a new `Schema` which maps between corresponding literal values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as S from "effect/Schema"
 *
 * const Animal = S.transformLiterals(
 *   [0, "cat"],
 *   [1, "dog"],
 *   [2, "cow"]
 * )
 *
 * assert.deepStrictEqual(S.decodeSync(Animal)(1), "dog")
 * ```
 *
 * @category constructors
 * @since 3.10.0
 */
export declare function transformLiterals<const A extends AST.Members<readonly [from: AST.LiteralValue, to: AST.LiteralValue]>>(...pairs: A): Union<{
    -readonly [I in keyof A]: transformLiteral<A[I][1], A[I][0]>;
}>;
export declare function transformLiterals<Encoded extends AST.LiteralValue, Type extends AST.LiteralValue>(pairs: [Encoded, Type]): transformLiteral<Type, Encoded>;
export declare function transformLiterals<const A extends ReadonlyArray<readonly [from: AST.LiteralValue, to: AST.LiteralValue]>>(...pairs: A): Schema<A[number][1], A[number][0]>;
/**
 * Attaches a property signature with the specified key and value to the schema.
 * This API is useful when you want to add a property to your schema which doesn't describe the shape of the input,
 * but rather maps to another schema, for example when you want to add a discriminant to a simple union.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as S from "effect/Schema"
 * import { pipe } from "effect/Function"
 *
 * const Circle = S.Struct({ radius: S.Number })
 * const Square = S.Struct({ sideLength: S.Number })
 * const Shape = S.Union(
 *   Circle.pipe(S.attachPropertySignature("kind", "circle")),
 *   Square.pipe(S.attachPropertySignature("kind", "square"))
 * )
 *
 * assert.deepStrictEqual(S.decodeSync(Shape)({ radius: 10 }), {
 *   kind: "circle",
 *   radius: 10
 * })
 * ```
 *
 * @category combinators
 * @since 3.10.0
 */
export declare const attachPropertySignature: {
    /**
     * Attaches a property signature with the specified key and value to the schema.
     * This API is useful when you want to add a property to your schema which doesn't describe the shape of the input,
     * but rather maps to another schema, for example when you want to add a discriminant to a simple union.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import * as S from "effect/Schema"
     * import { pipe } from "effect/Function"
     *
     * const Circle = S.Struct({ radius: S.Number })
     * const Square = S.Struct({ sideLength: S.Number })
     * const Shape = S.Union(
     *   Circle.pipe(S.attachPropertySignature("kind", "circle")),
     *   Square.pipe(S.attachPropertySignature("kind", "square"))
     * )
     *
     * assert.deepStrictEqual(S.decodeSync(Shape)({ radius: 10 }), {
     *   kind: "circle",
     *   radius: 10
     * })
     * ```
     *
     * @category combinators
     * @since 3.10.0
     */
    <K extends PropertyKey, V extends AST.LiteralValue | symbol, A>(key: K, value: V, annotations?: Annotations.Schema<A & {
        readonly [k in K]: V;
    }>): <I, R>(schema: Schema<A, I, R>) => SchemaClass<A & {
        readonly [k in K]: V;
    }, I, R>;
    /**
     * Attaches a property signature with the specified key and value to the schema.
     * This API is useful when you want to add a property to your schema which doesn't describe the shape of the input,
     * but rather maps to another schema, for example when you want to add a discriminant to a simple union.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import * as S from "effect/Schema"
     * import { pipe } from "effect/Function"
     *
     * const Circle = S.Struct({ radius: S.Number })
     * const Square = S.Struct({ sideLength: S.Number })
     * const Shape = S.Union(
     *   Circle.pipe(S.attachPropertySignature("kind", "circle")),
     *   Square.pipe(S.attachPropertySignature("kind", "square"))
     * )
     *
     * assert.deepStrictEqual(S.decodeSync(Shape)({ radius: 10 }), {
     *   kind: "circle",
     *   radius: 10
     * })
     * ```
     *
     * @category combinators
     * @since 3.10.0
     */
    <A, I, R, K extends PropertyKey, V extends AST.LiteralValue | symbol>(schema: Schema<A, I, R>, key: K, value: V, annotations?: Annotations.Schema<A & {
        readonly [k in K]: V;
    }>): SchemaClass<A & {
        readonly [k in K]: V;
    }, I, R>;
};
/**
 * @category annotations
 * @since 3.10.0
 */
export declare namespace Annotations {
    /**
     * @category annotations
     * @since 3.10.0
     */
    interface Doc<A> extends AST.Annotations {
        readonly title?: AST.TitleAnnotation;
        readonly description?: AST.DescriptionAnnotation;
        readonly documentation?: AST.DocumentationAnnotation;
        readonly examples?: AST.ExamplesAnnotation<A>;
        readonly default?: AST.DefaultAnnotation<A>;
    }
    /**
     * @since 3.10.0
     */
    interface Schema<A, TypeParameters extends ReadonlyArray<any> = readonly []> extends Doc<A> {
        readonly typeConstructor?: AST.TypeConstructorAnnotation;
        readonly identifier?: AST.IdentifierAnnotation;
        readonly message?: AST.MessageAnnotation;
        readonly schemaId?: AST.SchemaIdAnnotation;
        readonly jsonSchema?: AST.JSONSchemaAnnotation;
        readonly arbitrary?: ArbitraryAnnotation<A, TypeParameters>;
        readonly pretty?: pretty_.PrettyAnnotation<A, TypeParameters>;
        readonly equivalence?: AST.EquivalenceAnnotation<A, TypeParameters>;
        readonly concurrency?: AST.ConcurrencyAnnotation;
        readonly batching?: AST.BatchingAnnotation;
        readonly parseIssueTitle?: AST.ParseIssueTitleAnnotation;
        readonly parseOptions?: AST.ParseOptions;
        readonly decodingFallback?: AST.DecodingFallbackAnnotation<A>;
    }
    /**
     * @since 3.11.6
     */
    interface GenericSchema<A> extends Schema<A> {
        readonly arbitrary?: (..._: any) => LazyArbitrary<A>;
        readonly pretty?: (..._: any) => pretty_.Pretty<A>;
        readonly equivalence?: (..._: any) => Equivalence.Equivalence<A>;
    }
    /**
     * @since 3.10.0
     */
    interface Filter<A, P = A> extends Schema<A, readonly [P]> {
    }
}
/**
 * Merges a set of new annotations with existing ones, potentially overwriting
 * any duplicates.
 *
 * @category annotations
 * @since 3.10.0
 */
export declare const annotations: {
    /**
     * Merges a set of new annotations with existing ones, potentially overwriting
     * any duplicates.
     *
     * @category annotations
     * @since 3.10.0
     */
    <S extends Annotable.All>(annotations: Annotations.GenericSchema<Schema.Type<S>>): (self: S) => Annotable.Self<S>;
    /**
     * Merges a set of new annotations with existing ones, potentially overwriting
     * any duplicates.
     *
     * @category annotations
     * @since 3.10.0
     */
    <S extends Annotable.All>(self: S, annotations: Annotations.GenericSchema<Schema.Type<S>>): Annotable.Self<S>;
};
type Rename<A, M> = {
    [K in keyof A as K extends keyof M ? M[K] extends PropertyKey ? M[K] : never : K]: A[K];
};
/**
 * @category renaming
 * @since 3.10.0
 */
export declare const rename: {
    /**
     * @category renaming
     * @since 3.10.0
     */
    <A, const M extends {
        readonly [K in keyof A]?: PropertyKey;
    } & {
        readonly [K in Exclude<keyof M, keyof A>]: never;
    }>(mapping: M): <I, R>(self: Schema<A, I, R>) => SchemaClass<Simplify<Rename<A, M>>, I, R>;
    /**
     * @category renaming
     * @since 3.10.0
     */
    <A, I, R, const M extends {
        readonly [K in keyof A]?: PropertyKey;
    } & {
        readonly [K in Exclude<keyof M, keyof A>]: never;
    }>(self: Schema<A, I, R>, mapping: M): SchemaClass<Simplify<Rename<A, M>>, I, R>;
};
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const TrimmedSchemaId: unique symbol;
/**
 * Verifies that a string contains no leading or trailing whitespaces.
 *
 * Note. This combinator does not make any transformations, it only validates.
 * If what you were looking for was a combinator to trim strings, then check out the `trim` combinator.
 *
 * @category string filters
 * @since 3.10.0
 */
export declare const trimmed: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const MaxLengthSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type MaxLengthSchemaId = typeof MaxLengthSchemaId;
/**
 * @category string filters
 * @since 3.10.0
 */
export declare const maxLength: <S extends Schema.Any>(maxLength: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const MinLengthSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type MinLengthSchemaId = typeof MinLengthSchemaId;
/**
 * @category string filters
 * @since 3.10.0
 */
export declare const minLength: <S extends Schema.Any>(minLength: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LengthSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type LengthSchemaId = typeof LengthSchemaId;
/**
 * @category string filters
 * @since 3.10.0
 */
export declare const length: <S extends Schema.Any>(length: number | {
    readonly min: number;
    readonly max: number;
}, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const PatternSchemaId: unique symbol;
/**
 * @category string filters
 * @since 3.10.0
 */
export declare const pattern: <S extends Schema.Any>(regex: RegExp, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const StartsWithSchemaId: unique symbol;
/**
 * @category string filters
 * @since 3.10.0
 */
export declare const startsWith: <S extends Schema.Any>(startsWith: string, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const EndsWithSchemaId: unique symbol;
/**
 * @category string filters
 * @since 3.10.0
 */
export declare const endsWith: <S extends Schema.Any>(endsWith: string, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const IncludesSchemaId: unique symbol;
/**
 * @category string filters
 * @since 3.10.0
 */
export declare const includes: <S extends Schema.Any>(searchString: string, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LowercasedSchemaId: unique symbol;
/**
 * Verifies that a string is lowercased.
 *
 * @category string filters
 * @since 3.10.0
 */
export declare const lowercased: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
declare const Lowercased_base: filter<typeof String$>;
/**
 * @category string constructors
 * @since 3.10.0
 */
export declare class Lowercased extends Lowercased_base {
}
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const UppercasedSchemaId: unique symbol;
/**
 * Verifies that a string is uppercased.
 *
 * @category string filters
 * @since 3.10.0
 */
export declare const uppercased: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
declare const Uppercased_base: filter<typeof String$>;
/**
 * @category string constructors
 * @since 3.10.0
 */
export declare class Uppercased extends Uppercased_base {
}
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const CapitalizedSchemaId: unique symbol;
/**
 * Verifies that a string is capitalized.
 *
 * @category string filters
 * @since 3.10.0
 */
export declare const capitalized: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
declare const Capitalized_base: filter<typeof String$>;
/**
 * @category string constructors
 * @since 3.10.0
 */
export declare class Capitalized extends Capitalized_base {
}
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const UncapitalizedSchemaId: unique symbol;
/**
 * Verifies that a string is uncapitalized.
 *
 * @category string filters
 * @since 3.10.0
 */
export declare const uncapitalized: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
declare const Uncapitalized_base: filter<typeof String$>;
/**
 * @category string constructors
 * @since 3.10.0
 */
export declare class Uncapitalized extends Uncapitalized_base {
}
declare const Char_base: filter<typeof String$>;
/**
 * A schema representing a single character.
 *
 * @category string constructors
 * @since 3.10.0
 */
export declare class Char extends Char_base {
}
/**
 * @category string filters
 * @since 3.10.0
 */
export declare const nonEmptyString: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
declare const Lowercase_base: transform<SchemaClass<string, string, never>, typeof Lowercased>;
/**
 * This schema converts a string to lowercase.
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare class Lowercase extends Lowercase_base {
}
declare const Uppercase_base: transform<SchemaClass<string, string, never>, typeof Uppercased>;
/**
 * This schema converts a string to uppercase.
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare class Uppercase extends Uppercase_base {
}
declare const Capitalize_base: transform<SchemaClass<string, string, never>, typeof Capitalized>;
/**
 * This schema converts a string to capitalized one.
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare class Capitalize extends Capitalize_base {
}
declare const Uncapitalize_base: transform<SchemaClass<string, string, never>, typeof Uncapitalized>;
/**
 * This schema converts a string to uncapitalized one.
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare class Uncapitalize extends Uncapitalize_base {
}
declare const Trimmed_base: filter<typeof String$>;
/**
 * @category string constructors
 * @since 3.10.0
 */
export declare class Trimmed extends Trimmed_base {
}
declare const NonEmptyTrimmedString_base: filter<typeof Trimmed>;
/**
 * Useful for validating strings that must contain meaningful characters without
 * leading or trailing whitespace.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * console.log(Schema.decodeOption(Schema.NonEmptyTrimmedString)("")) // Option.none()
 * console.log(Schema.decodeOption(Schema.NonEmptyTrimmedString)(" a ")) // Option.none()
 * console.log(Schema.decodeOption(Schema.NonEmptyTrimmedString)("a")) // Option.some("a")
 * ```
 *
 * @category string constructors
 * @since 3.10.0
 */
export declare class NonEmptyTrimmedString extends NonEmptyTrimmedString_base {
}
declare const Trim_base: transform<SchemaClass<string, string, never>, typeof Trimmed>;
/**
 * This schema allows removing whitespaces from the beginning and end of a string.
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare class Trim extends Trim_base {
}
/**
 * Returns a schema that allows splitting a string into an array of strings.
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare const split: (separator: string) => transform<SchemaClass<string>, Array$<typeof String$>>;
/**
 * @since 3.10.0
 */
export type ParseJsonOptions = {
    readonly reviver?: Parameters<typeof JSON.parse>[1];
    readonly replacer?: Parameters<typeof JSON.stringify>[1];
    readonly space?: Parameters<typeof JSON.stringify>[2];
};
/**
 * The `ParseJson` combinator provides a method to convert JSON strings into the `unknown` type using the underlying
 * functionality of `JSON.parse`. It also utilizes `JSON.stringify` for encoding.
 *
 * You can optionally provide a `ParseJsonOptions` to configure both `JSON.parse` and `JSON.stringify` executions.
 *
 * Optionally, you can pass a schema `Schema<A, I, R>` to obtain an `A` type instead of `unknown`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as Schema from "effect/Schema"
 *
 * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson())(`{"a":"1"}`), { a: "1" })
 * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson(Schema.Struct({ a: Schema.NumberFromString })))(`{"a":"1"}`), { a: 1 })
 * ```
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare const parseJson: {
    /**
     * The `ParseJson` combinator provides a method to convert JSON strings into the `unknown` type using the underlying
     * functionality of `JSON.parse`. It also utilizes `JSON.stringify` for encoding.
     *
     * You can optionally provide a `ParseJsonOptions` to configure both `JSON.parse` and `JSON.stringify` executions.
     *
     * Optionally, you can pass a schema `Schema<A, I, R>` to obtain an `A` type instead of `unknown`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import * as Schema from "effect/Schema"
     *
     * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson())(`{"a":"1"}`), { a: "1" })
     * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson(Schema.Struct({ a: Schema.NumberFromString })))(`{"a":"1"}`), { a: 1 })
     * ```
     *
     * @category string transformations
     * @since 3.10.0
     */
    <S extends Schema.Any>(schema: S, options?: ParseJsonOptions): transform<SchemaClass<unknown, string>, S>;
    /**
     * The `ParseJson` combinator provides a method to convert JSON strings into the `unknown` type using the underlying
     * functionality of `JSON.parse`. It also utilizes `JSON.stringify` for encoding.
     *
     * You can optionally provide a `ParseJsonOptions` to configure both `JSON.parse` and `JSON.stringify` executions.
     *
     * Optionally, you can pass a schema `Schema<A, I, R>` to obtain an `A` type instead of `unknown`.
     *
     * @example
     * ```ts
     * import * as assert from "node:assert"
     * import * as Schema from "effect/Schema"
     *
     * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson())(`{"a":"1"}`), { a: "1" })
     * assert.deepStrictEqual(Schema.decodeUnknownSync(Schema.parseJson(Schema.Struct({ a: Schema.NumberFromString })))(`{"a":"1"}`), { a: 1 })
     * ```
     *
     * @category string transformations
     * @since 3.10.0
     */
    (options?: ParseJsonOptions): SchemaClass<unknown, string>;
};
declare const NonEmptyString_base: filter<typeof String$>;
/**
 * @category string constructors
 * @since 3.10.0
 */
export declare class NonEmptyString extends NonEmptyString_base {
}
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const UUIDSchemaId: unique symbol;
declare const UUID_base: filter<typeof String$>;
/**
 * Represents a Universally Unique Identifier (UUID).
 *
 * This schema ensures that the provided string adheres to the standard UUID format.
 *
 * @category string constructors
 * @since 3.10.0
 */
export declare class UUID extends UUID_base {
}
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const ULIDSchemaId: unique symbol;
declare const ULID_base: filter<typeof String$>;
/**
 * Represents a Universally Unique Lexicographically Sortable Identifier (ULID).
 *
 * ULIDs are designed to be compact, URL-safe, and ordered, making them suitable for use as identifiers.
 * This schema ensures that the provided string adheres to the standard ULID format.
 *
 * @category string constructors
 * @since 3.10.0
 */
export declare class ULID extends ULID_base {
}
declare const URLFromSelf_base: instanceOf<URL>;
/**
 * Defines a schema that represents a `URL` object.
 *
 * @category URL constructors
 * @since 3.11.0
 */
export declare class URLFromSelf extends URLFromSelf_base {
}
declare const URL$_base: transformOrFail<SchemaClass<string, string, never>, typeof URLFromSelf, never>;
/** @ignore */
declare class URL$ extends URL$_base {
}
export { 
/**
 * Defines a schema that attempts to convert a `string` to a `URL` object using
 * the `new URL` constructor.
 *
 * @category URL transformations
 * @since 3.11.0
 */
URL$ as URL };
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const FiniteSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type FiniteSchemaId = typeof FiniteSchemaId;
/**
 * Ensures that the provided value is a finite number (excluding NaN, +Infinity, and -Infinity).
 *
 * @category number filters
 * @since 3.10.0
 */
export declare const finite: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type GreaterThanSchemaId = typeof GreaterThanSchemaId;
/**
 * This filter checks whether the provided number is greater than the specified minimum.
 *
 * @category number filters
 * @since 3.10.0
 */
export declare const greaterThan: <S extends Schema.Any>(exclusiveMinimum: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanOrEqualToSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type GreaterThanOrEqualToSchemaId = typeof GreaterThanOrEqualToSchemaId;
/**
 * This filter checks whether the provided number is greater than or equal to the specified minimum.
 *
 * @category number filters
 * @since 3.10.0
 */
export declare const greaterThanOrEqualTo: <S extends Schema.Any>(minimum: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const MultipleOfSchemaId: unique symbol;
/**
 * @category number filters
 * @since 3.10.0
 */
export declare const multipleOf: <S extends Schema.Any>(divisor: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const IntSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type IntSchemaId = typeof IntSchemaId;
/**
 * Ensures that the provided value is an integer number (excluding NaN, +Infinity, and -Infinity).
 *
 * @category number filters
 * @since 3.10.0
 */
export declare const int: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type LessThanSchemaId = typeof LessThanSchemaId;
/**
 * This filter checks whether the provided number is less than the specified maximum.
 *
 * @category number filters
 * @since 3.10.0
 */
export declare const lessThan: <S extends Schema.Any>(exclusiveMaximum: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanOrEqualToSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type LessThanOrEqualToSchemaId = typeof LessThanOrEqualToSchemaId;
/**
 * This schema checks whether the provided number is less than or equal to the specified maximum.
 *
 * @category number filters
 * @since 3.10.0
 */
export declare const lessThanOrEqualTo: <S extends Schema.Any>(maximum: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const BetweenSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type BetweenSchemaId = typeof BetweenSchemaId;
/**
 * This filter checks whether the provided number falls within the specified minimum and maximum values.
 *
 * @category number filters
 * @since 3.10.0
 */
export declare const between: <S extends Schema.Any>(minimum: number, maximum: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const NonNaNSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type NonNaNSchemaId = typeof NonNaNSchemaId;
/**
 * @category number filters
 * @since 3.10.0
 */
export declare const nonNaN: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category number filters
 * @since 3.10.0
 */
export declare const positive: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category number filters
 * @since 3.10.0
 */
export declare const negative: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category number filters
 * @since 3.10.0
 */
export declare const nonPositive: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category number filters
 * @since 3.10.0
 */
export declare const nonNegative: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * Clamps a number between a minimum and a maximum value.
 *
 * @category number transformations
 * @since 3.10.0
 */
export declare const clamp: (minimum: number, maximum: number) => <S extends Schema.Any, A extends number>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => transform<S, filter<SchemaClass<A>>>;
/**
 * Transforms a `string` into a `number` by parsing the string using the `parse`
 * function of the `effect/Number` module.
 *
 * It returns an error if the value can't be converted (for example when
 * non-numeric characters are provided).
 *
 * The following special string values are supported: "NaN", "Infinity",
 * "-Infinity".
 *
 * @category number transformations
 * @since 3.10.0
 */
export declare function parseNumber<S extends Schema.Any, A extends string>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): transformOrFail<S, typeof Number$>;
declare const NumberFromString_base: transformOrFail<SchemaClass<string, string, never>, typeof Number$, never>;
/**
 * This schema transforms a `string` into a `number` by parsing the string using the `parse` function of the `effect/Number` module.
 *
 * It returns an error if the value can't be converted (for example when non-numeric characters are provided).
 *
 * The following special string values are supported: "NaN", "Infinity", "-Infinity".
 *
 * @category number transformations
 * @since 3.10.0
 */
export declare class NumberFromString extends NumberFromString_base {
}
declare const Finite_base: filter<typeof Number$>;
/**
 * @category number constructors
 * @since 3.10.0
 */
export declare class Finite extends Finite_base {
}
declare const Int_base: filter<typeof Number$>;
/**
 * @category number constructors
 * @since 3.10.0
 */
export declare class Int extends Int_base {
}
declare const NonNaN_base: filter<typeof Number$>;
/**
 * @category number constructors
 * @since 3.10.0
 */
export declare class NonNaN extends NonNaN_base {
}
declare const Positive_base: filter<typeof Number$>;
/**
 * @category number constructors
 * @since 3.10.0
 */
export declare class Positive extends Positive_base {
}
declare const Negative_base: filter<typeof Number$>;
/**
 * @category number constructors
 * @since 3.10.0
 */
export declare class Negative extends Negative_base {
}
declare const NonPositive_base: filter<typeof Number$>;
/**
 * @category number constructors
 * @since 3.10.0
 */
export declare class NonPositive extends NonPositive_base {
}
declare const NonNegative_base: filter<typeof Number$>;
/**
 * @category number constructors
 * @since 3.10.0
 */
export declare class NonNegative extends NonNegative_base {
}
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const JsonNumberSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type JsonNumberSchemaId = typeof JsonNumberSchemaId;
declare const JsonNumber_base: filter<typeof Number$>;
/**
 * The `JsonNumber` is a schema for representing JSON numbers. It ensures that the provided value is a valid
 * number by filtering out `NaN` and `(+/-) Infinity`. This is useful when you want to validate and represent numbers in JSON
 * format.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import * as Schema from "effect/Schema"
 *
 * const is = Schema.is(Schema.JsonNumber)
 *
 * assert.deepStrictEqual(is(42), true)
 * assert.deepStrictEqual(is(Number.NaN), false)
 * assert.deepStrictEqual(is(Number.POSITIVE_INFINITY), false)
 * assert.deepStrictEqual(is(Number.NEGATIVE_INFINITY), false)
 * ```
 *
 * @category number constructors
 * @since 3.10.0
 */
export declare class JsonNumber extends JsonNumber_base {
}
declare const Not_base: transform<SchemaClass<boolean, boolean, never>, typeof Boolean$>;
/**
 * @category boolean transformations
 * @since 3.10.0
 */
export declare class Not extends Not_base {
}
declare const Symbol$_base: transformOrFail<SchemaClass<string, string, never>, typeof SymbolFromSelf, never>;
/** @ignore */
declare class Symbol$ extends Symbol$_base {
}
export { 
/**
 * Converts a string key into a globally shared symbol.
 *
 * @category symbol transformations
 * @since 3.10.0
 */
Symbol$ as Symbol };
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanBigIntSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type GreaterThanBigIntSchemaId = typeof GreaterThanBigIntSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
export declare const greaterThanBigInt: <S extends Schema.Any>(min: bigint, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanOrEqualToBigIntSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type GreaterThanOrEqualToBigIntSchemaId = typeof GreaterThanOrEqualToBigIntSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
export declare const greaterThanOrEqualToBigInt: <S extends Schema.Any>(min: bigint, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanBigIntSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type LessThanBigIntSchemaId = typeof LessThanBigIntSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
export declare const lessThanBigInt: <S extends Schema.Any>(max: bigint, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanOrEqualToBigIntSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type LessThanOrEqualToBigIntSchemaId = typeof LessThanOrEqualToBigIntSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
export declare const lessThanOrEqualToBigInt: <S extends Schema.Any>(max: bigint, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const BetweenBigIntSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type BetweenBigIntSchemaId = typeof BetweenBigIntSchemaId;
/**
 * @category bigint filters
 * @since 3.10.0
 */
export declare const betweenBigInt: <S extends Schema.Any>(min: bigint, max: bigint, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category bigint filters
 * @since 3.10.0
 */
export declare const positiveBigInt: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category bigint filters
 * @since 3.10.0
 */
export declare const negativeBigInt: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category bigint filters
 * @since 3.10.0
 */
export declare const nonNegativeBigInt: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category bigint filters
 * @since 3.10.0
 */
export declare const nonPositiveBigInt: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * Clamps a bigint between a minimum and a maximum value.
 *
 * @category bigint transformations
 * @since 3.10.0
 */
export declare const clampBigInt: (minimum: bigint, maximum: bigint) => <S extends Schema.Any, A extends bigint>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => transform<S, filter<SchemaClass<A>>>;
declare const BigInt$_base: transformOrFail<SchemaClass<string, string, never>, typeof BigIntFromSelf, never>;
/** @ignore */
declare class BigInt$ extends BigInt$_base {
}
export { 
/**
 * This schema transforms a `string` into a `bigint` by parsing the string using the `BigInt` function.
 *
 * It returns an error if the value can't be converted (for example when non-numeric characters are provided).
 *
 * @category bigint transformations
 * @since 3.10.0
 */
BigInt$ as BigInt };
/**
 * @category bigint constructors
 * @since 3.10.0
 */
export declare const PositiveBigIntFromSelf: filter<Schema<bigint>>;
/**
 * @category bigint constructors
 * @since 3.10.0
 */
export declare const PositiveBigInt: filter<Schema<bigint, string>>;
/**
 * @category bigint constructors
 * @since 3.10.0
 */
export declare const NegativeBigIntFromSelf: filter<Schema<bigint>>;
/**
 * @category bigint constructors
 * @since 3.10.0
 */
export declare const NegativeBigInt: filter<Schema<bigint, string>>;
/**
 * @category bigint constructors
 * @since 3.10.0
 */
export declare const NonPositiveBigIntFromSelf: filter<Schema<bigint>>;
/**
 * @category bigint constructors
 * @since 3.10.0
 */
export declare const NonPositiveBigInt: filter<Schema<bigint, string>>;
/**
 * @category bigint constructors
 * @since 3.10.0
 */
export declare const NonNegativeBigIntFromSelf: filter<Schema<bigint>>;
/**
 * @category bigint constructors
 * @since 3.10.0
 */
export declare const NonNegativeBigInt: filter<Schema<bigint, string>>;
declare const BigIntFromNumber_base: transformOrFail<SchemaClass<number, number, never>, filter<typeof BigIntFromSelf>, never>;
/**
 * This schema transforms a `number` into a `bigint` by parsing the number using the `BigInt` function.
 *
 * It returns an error if the value can't be safely encoded as a `number` due to being out of range.
 *
 * @category bigint transformations
 * @since 3.10.0
 */
export declare class BigIntFromNumber extends BigIntFromNumber_base {
}
/**
 * @category api interface
 * @since 3.10.0
 */
export interface RedactedFromSelf<Value extends Schema.Any> extends AnnotableDeclare<RedactedFromSelf<Value>, redacted_.Redacted<Schema.Type<Value>>, redacted_.Redacted<Schema.Encoded<Value>>, [
    Value
]> {
}
/**
 * @category Redacted constructors
 * @since 3.10.0
 */
export declare const RedactedFromSelf: <Value extends Schema.Any>(value: Value) => RedactedFromSelf<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Redacted<Value extends Schema.Any> extends transform<Value, RedactedFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * A transformation that transform a `Schema<A, I, R>` into a
 * `RedactedFromSelf<A>`.
 *
 * @category Redacted transformations
 * @since 3.10.0
 */
export declare function Redacted<Value extends Schema.Any>(value: Value): Redacted<Value>;
declare const DurationFromSelf_base: declare<duration_.Duration, duration_.Duration, readonly [], never>;
/**
 * @category Duration constructors
 * @since 3.10.0
 */
export declare class DurationFromSelf extends DurationFromSelf_base {
}
declare const DurationFromNanos_base: transformOrFail<refine<bigint, Schema<bigint, bigint, never>>, filter<typeof DurationFromSelf>, never>;
/**
 * A schema that transforms a non negative `bigint` into a `Duration`. Treats
 * the value as the number of nanoseconds.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
export declare class DurationFromNanos extends DurationFromNanos_base {
}
/**
 * A non-negative integer. +Infinity is excluded.
 *
 * @category number constructors
 * @since 3.11.10
 */
export declare const NonNegativeInt: refine<number, typeof NonNegative>;
declare const DurationFromMillis_base: transform<refine<number, typeof Number$>, typeof DurationFromSelf>;
/**
 * A schema that transforms a (possibly Infinite) non negative number into a
 * `Duration`. Treats the value as the number of milliseconds.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
export declare class DurationFromMillis extends DurationFromMillis_base {
}
/**
 * @category Duration utils
 * @since 3.12.8
 */
export type DurationEncoded = {
    readonly _tag: "Millis";
    readonly millis: number;
} | {
    readonly _tag: "Nanos";
    readonly nanos: string;
} | {
    readonly _tag: "Infinity";
};
declare const Duration_base: transform<Union<[Schema<duration_.DurationValue, DurationEncoded, never>, Schema<readonly [seconds: number, nanos: number], readonly [seconds: number, nanos: number], never>]>, typeof DurationFromSelf>;
/**
 * A schema that converts a JSON-compatible tagged union into a `Duration`.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
export declare class Duration extends Duration_base {
}
/**
 * Clamps a `Duration` between a minimum and a maximum value.
 *
 * @category Duration transformations
 * @since 3.10.0
 */
export declare const clampDuration: (minimum: duration_.DurationInput, maximum: duration_.DurationInput) => <S extends Schema.Any, A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => transform<S, filter<SchemaClass<A>>>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanDurationSchemaId: unique symbol;
/**
 * @category Duration filters
 * @since 3.10.0
 */
export declare const lessThanDuration: <S extends Schema.Any>(max: duration_.DurationInput, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanOrEqualToDurationSchemaId: unique symbol;
/**
 * @category Duration filters
 * @since 3.10.0
 */
export declare const lessThanOrEqualToDuration: <S extends Schema.Any>(max: duration_.DurationInput, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanDurationSchemaId: unique symbol;
/**
 * @category Duration filters
 * @since 3.10.0
 */
export declare const greaterThanDuration: <S extends Schema.Any>(min: duration_.DurationInput, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanOrEqualToDurationSchemaId: unique symbol;
/**
 * @category Duration filters
 * @since 3.10.0
 */
export declare const greaterThanOrEqualToDuration: <S extends Schema.Any>(min: duration_.DurationInput, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const BetweenDurationSchemaId: unique symbol;
/**
 * @category Duration filters
 * @since 3.10.0
 */
export declare const betweenDuration: <S extends Schema.Any>(minimum: duration_.DurationInput, maximum: duration_.DurationInput, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends duration_.Duration>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
declare const Uint8ArrayFromSelf_base: declare<Uint8Array<ArrayBufferLike>, Uint8Array<ArrayBufferLike>, readonly [], never>;
/**
 * @category Uint8Array constructors
 * @since 3.10.0
 */
export declare class Uint8ArrayFromSelf extends Uint8ArrayFromSelf_base {
}
declare const Uint8_base: filter<typeof Number$>;
/**
 * @category number constructors
 * @since 3.11.10
 */
export declare class Uint8 extends Uint8_base {
}
declare const Uint8Array$_base: transform<Array$<typeof Uint8>, typeof Uint8ArrayFromSelf>;
/** @ignore */
declare class Uint8Array$ extends Uint8Array$_base {
}
export { 
/**
 * A schema that transforms an array of numbers into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
Uint8Array$ as Uint8Array };
/**
 * Decodes a base64 (RFC4648) encoded string into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
export declare const Uint8ArrayFromBase64: Schema<Uint8Array, string>;
/**
 * Decodes a base64 (URL) encoded string into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
export declare const Uint8ArrayFromBase64Url: Schema<Uint8Array, string>;
/**
 * Decodes a hex encoded string into a `Uint8Array`.
 *
 * @category Uint8Array transformations
 * @since 3.10.0
 */
export declare const Uint8ArrayFromHex: Schema<Uint8Array, string>;
/**
 * Decodes a base64 (RFC4648) encoded string into a UTF-8 string.
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare const StringFromBase64: Schema<string>;
/**
 * Decodes a base64 (URL) encoded string into a UTF-8 string.
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare const StringFromBase64Url: Schema<string>;
/**
 * Decodes a hex encoded string into a UTF-8 string.
 *
 * @category string transformations
 * @since 3.10.0
 */
export declare const StringFromHex: Schema<string>;
/**
 * Decodes a URI component encoded string into a UTF-8 string.
 * Can be used to store data in a URL.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * const PaginationSchema = Schema.Struct({
 *   maxItemPerPage: Schema.Number,
 *   page: Schema.Number
 * })
 *
 * const UrlSchema = Schema.compose(Schema.StringFromUriComponent, Schema.parseJson(PaginationSchema))
 *
 * console.log(Schema.encodeSync(UrlSchema)({ maxItemPerPage: 10, page: 1 }))
 * // Output: %7B%22maxItemPerPage%22%3A10%2C%22page%22%3A1%7D
 * ```
 *
 * @category string transformations
 * @since 3.12.0
 */
export declare const StringFromUriComponent: transformOrFail<SchemaClass<string, string, never>, typeof String$, never>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const MinItemsSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type MinItemsSchemaId = typeof MinItemsSchemaId;
/**
 * @category ReadonlyArray filters
 * @since 3.10.0
 */
export declare const minItems: <S extends Schema.Any>(n: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends ReadonlyArray<any>>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const MaxItemsSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type MaxItemsSchemaId = typeof MaxItemsSchemaId;
/**
 * @category ReadonlyArray filters
 * @since 3.10.0
 */
export declare const maxItems: <S extends Schema.Any>(n: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends ReadonlyArray<any>>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const ItemsCountSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.10.0
 */
export type ItemsCountSchemaId = typeof ItemsCountSchemaId;
/**
 * @category ReadonlyArray filters
 * @since 3.10.0
 */
export declare const itemsCount: <S extends Schema.Any>(n: number, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends ReadonlyArray<any>>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category ReadonlyArray transformations
 * @since 3.10.0
 */
export declare const getNumberIndexedAccess: <A extends ReadonlyArray<any>, I extends ReadonlyArray<any>, R>(self: Schema<A, I, R>) => SchemaClass<A[number], I[number], R>;
/**
 * Get the first element of a `ReadonlyArray`, or `None` if the array is empty.
 *
 * @category ReadonlyArray transformations
 * @since 3.10.0
 */
export declare function head<S extends Schema.Any, A extends ReadonlyArray<unknown>>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): transform<S, OptionFromSelf<SchemaClass<A[number]>>>;
/**
 * Get the first element of a `NonEmptyReadonlyArray`.
 *
 * @category NonEmptyReadonlyArray transformations
 * @since 3.12.0
 */
export declare function headNonEmpty<S extends Schema.Any, A extends array_.NonEmptyReadonlyArray<unknown>>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>): transform<S, SchemaClass<A[number]>>;
/**
 * Retrieves the first element of a `ReadonlyArray`.
 *
 * If the array is empty, it returns the `fallback` argument if provided; otherwise, it fails.
 *
 * @category ReadonlyArray transformations
 * @since 3.10.0
 */
export declare const headOrElse: {
    /**
     * Retrieves the first element of a `ReadonlyArray`.
     *
     * If the array is empty, it returns the `fallback` argument if provided; otherwise, it fails.
     *
     * @category ReadonlyArray transformations
     * @since 3.10.0
     */
    <S extends Schema.Any, A extends ReadonlyArray<unknown>>(fallback?: LazyArg<A[number]>): (self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => transform<S, SchemaClass<A[number]>>;
    /**
     * Retrieves the first element of a `ReadonlyArray`.
     *
     * If the array is empty, it returns the `fallback` argument if provided; otherwise, it fails.
     *
     * @category ReadonlyArray transformations
     * @since 3.10.0
     */
    <S extends Schema.Any, A extends ReadonlyArray<unknown>>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>, fallback?: LazyArg<A[number]>): transform<S, SchemaClass<A[number]>>;
};
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const ValidDateSchemaId: unique symbol;
/**
 * Defines a filter that specifically rejects invalid dates, such as `new
 * Date("Invalid Date")`. This filter ensures that only properly formatted and
 * valid date objects are accepted, enhancing data integrity by preventing
 * erroneous date values from being processed.
 *
 * @category Date filters
 * @since 3.10.0
 */
export declare const validDate: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanDateSchemaId: unique symbol;
/**
 * @category Date filters
 * @since 3.10.0
 */
export declare const lessThanDate: <S extends Schema.Any>(max: Date, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanOrEqualToDateSchemaId: unique symbol;
/**
 * @category Date filters
 * @since 3.10.0
 */
export declare const lessThanOrEqualToDate: <S extends Schema.Any>(max: Date, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanDateSchemaId: unique symbol;
/**
 * @category Date filters
 * @since 3.10.0
 */
export declare const greaterThanDate: <S extends Schema.Any>(min: Date, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanOrEqualToDateSchemaId: unique symbol;
/**
 * @category Date filters
 * @since 3.10.0
 */
export declare const greaterThanOrEqualToDate: <S extends Schema.Any>(min: Date, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const BetweenDateSchemaId: unique symbol;
/**
 * @category Date filters
 * @since 3.10.0
 */
export declare const betweenDate: <S extends Schema.Any>(min: Date, max: Date, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends Date>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.11.8
 */
export declare const DateFromSelfSchemaId: unique symbol;
/**
 * @category schema id
 * @since 3.11.8
 */
export type DateFromSelfSchemaId = typeof DateFromSelfSchemaId;
declare const DateFromSelf_base: declare<Date, Date, readonly [], never>;
/**
 * Describes a schema that accommodates potentially invalid `Date` instances,
 * such as `new Date("Invalid Date")`, without rejection.
 *
 * @category Date constructors
 * @since 3.10.0
 */
export declare class DateFromSelf extends DateFromSelf_base {
}
declare const ValidDateFromSelf_base: filter<typeof DateFromSelf>;
/**
 * Defines a schema that ensures only valid dates are accepted. This schema
 * rejects values like `new Date("Invalid Date")`, which, despite being a `Date`
 * instance, represents an invalid date. Such stringent validation ensures that
 * all date objects processed through this schema are properly formed and
 * represent real dates.
 *
 * @category Date constructors
 * @since 3.10.0
 */
export declare class ValidDateFromSelf extends ValidDateFromSelf_base {
}
declare const DateFromString_base: transform<SchemaClass<string, string, never>, typeof DateFromSelf>;
/**
 * Defines a schema that attempts to convert a `string` to a `Date` object using
 * the `new Date` constructor. This conversion is lenient, meaning it does not
 * reject strings that do not form valid dates (e.g., using `new Date("Invalid
 * Date")` results in a `Date` object, despite being invalid).
 *
 * @category Date transformations
 * @since 3.10.0
 */
export declare class DateFromString extends DateFromString_base {
}
declare const Date$_base: filter<typeof DateFromString>;
/** @ignore */
declare class Date$ extends Date$_base {
}
export { 
/**
 * This schema converts a `string` into a `Date` object using the `new Date`
 * constructor. It ensures that only valid date strings are accepted,
 * rejecting any strings that would result in an invalid date, such as `new
 * Date("Invalid Date")`.
 *
 * @category Date transformations
 * @since 3.10.0
 */
Date$ as Date };
declare const DateFromNumber_base: transform<SchemaClass<number, number, never>, typeof DateFromSelf>;
/**
 * Defines a schema that converts a `number` into a `Date` object using the `new
 * Date` constructor. This schema does not validate the numerical input,
 * allowing potentially invalid values such as `NaN`, `Infinity`, and
 * `-Infinity` to be converted into `Date` objects. During the encoding process,
 * any invalid `Date` object will be encoded to `NaN`.
 *
 * @category Date transformations
 * @since 3.10.0
 */
export declare class DateFromNumber extends DateFromNumber_base {
}
declare const DateTimeUtcFromSelf_base: declare<dateTime.Utc, dateTime.Utc, readonly [], never>;
/**
 * Describes a schema that represents a `DateTime.Utc` instance.
 *
 * @category DateTime.Utc constructors
 * @since 3.10.0
 */
export declare class DateTimeUtcFromSelf extends DateTimeUtcFromSelf_base {
}
declare const DateTimeUtcFromNumber_base: transformOrFail<SchemaClass<number, number, never>, typeof DateTimeUtcFromSelf, never>;
/**
 * Defines a schema that attempts to convert a `number` to a `DateTime.Utc` instance using the `DateTime.unsafeMake` constructor.
 *
 * @category DateTime.Utc transformations
 * @since 3.10.0
 */
export declare class DateTimeUtcFromNumber extends DateTimeUtcFromNumber_base {
}
declare const DateTimeUtcFromDate_base: transformOrFail<declare<Date, Date, readonly [], never>, typeof DateTimeUtcFromSelf, never>;
/**
 * Defines a schema that attempts to convert a `Date` to a `DateTime.Utc` instance using the `DateTime.unsafeMake` constructor.
 *
 * @category DateTime.Utc transformations
 * @since 3.12.0
 */
export declare class DateTimeUtcFromDate extends DateTimeUtcFromDate_base {
}
declare const DateTimeUtc_base: transformOrFail<SchemaClass<string, string, never>, typeof DateTimeUtcFromSelf, never>;
/**
 * Defines a schema that attempts to convert a `string` to a `DateTime.Utc` instance using the `DateTime.unsafeMake` constructor.
 *
 * @category DateTime.Utc transformations
 * @since 3.10.0
 */
export declare class DateTimeUtc extends DateTimeUtc_base {
}
declare const TimeZoneOffsetFromSelf_base: declare<dateTime.TimeZone.Offset, dateTime.TimeZone.Offset, readonly [], never>;
/**
 * Describes a schema that represents a `TimeZone.Offset` instance.
 *
 * @category TimeZone constructors
 * @since 3.10.0
 */
export declare class TimeZoneOffsetFromSelf extends TimeZoneOffsetFromSelf_base {
}
declare const TimeZoneOffset_base: transform<SchemaClass<number, number, never>, typeof TimeZoneOffsetFromSelf>;
/**
 * Defines a schema that converts a `number` to a `TimeZone.Offset` instance using the `DateTime.zoneMakeOffset` constructor.
 *
 * @category TimeZone transformations
 * @since 3.10.0
 */
export declare class TimeZoneOffset extends TimeZoneOffset_base {
}
declare const TimeZoneNamedFromSelf_base: declare<dateTime.TimeZone.Named, dateTime.TimeZone.Named, readonly [], never>;
/**
 * Describes a schema that represents a `TimeZone.Named` instance.
 *
 * @category TimeZone constructors
 * @since 3.10.0
 */
export declare class TimeZoneNamedFromSelf extends TimeZoneNamedFromSelf_base {
}
declare const TimeZoneNamed_base: transformOrFail<SchemaClass<string, string, never>, typeof TimeZoneNamedFromSelf, never>;
/**
 * Defines a schema that attempts to convert a `string` to a `TimeZone.Named` instance using the `DateTime.zoneUnsafeMakeNamed` constructor.
 *
 * @category TimeZone transformations
 * @since 3.10.0
 */
export declare class TimeZoneNamed extends TimeZoneNamed_base {
}
declare const TimeZoneFromSelf_base: Union<[typeof TimeZoneOffsetFromSelf, typeof TimeZoneNamedFromSelf]>;
/**
 * @category TimeZone constructors
 * @since 3.10.0
 */
export declare class TimeZoneFromSelf extends TimeZoneFromSelf_base {
}
declare const TimeZone_base: transformOrFail<SchemaClass<string, string, never>, typeof TimeZoneFromSelf, never>;
/**
 * Defines a schema that attempts to convert a `string` to a `TimeZone` using the `DateTime.zoneFromString` constructor.
 *
 * @category TimeZone transformations
 * @since 3.10.0
 */
export declare class TimeZone extends TimeZone_base {
}
declare const DateTimeZonedFromSelf_base: declare<dateTime.Zoned, dateTime.Zoned, readonly [], never>;
/**
 * Describes a schema that represents a `DateTime.Zoned` instance.
 *
 * @category DateTime.Zoned constructors
 * @since 3.10.0
 */
export declare class DateTimeZonedFromSelf extends DateTimeZonedFromSelf_base {
}
declare const DateTimeZoned_base: transformOrFail<SchemaClass<string, string, never>, typeof DateTimeZonedFromSelf, never>;
/**
 * Defines a schema that attempts to convert a `string` to a `DateTime.Zoned` instance.
 *
 * @category DateTime.Zoned transformations
 * @since 3.10.0
 */
export declare class DateTimeZoned extends DateTimeZoned_base {
}
/**
 * @category Option utils
 * @since 3.10.0
 */
export type OptionEncoded<I> = {
    readonly _tag: "None";
} | {
    readonly _tag: "Some";
    readonly value: I;
};
/**
 * @category api interface
 * @since 3.10.0
 */
export interface OptionFromSelf<Value extends Schema.Any> extends AnnotableDeclare<OptionFromSelf<Value>, option_.Option<Schema.Type<Value>>, option_.Option<Schema.Encoded<Value>>, [
    Value
]> {
}
/**
 * @category Option transformations
 * @since 3.10.0
 */
export declare const OptionFromSelf: <Value extends Schema.Any>(value: Value) => OptionFromSelf<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Option<Value extends Schema.Any> extends transform<Union<[
    Struct<{
        _tag: Literal<["None"]>;
    }>,
    Struct<{
        _tag: Literal<["Some"]>;
        value: Value;
    }>
]>, OptionFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category Option transformations
 * @since 3.10.0
 */
export declare function Option<Value extends Schema.Any>(value: Value): Option<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface OptionFromNullOr<Value extends Schema.Any> extends transform<NullOr<Value>, OptionFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category Option transformations
 * @since 3.10.0
 */
export declare function OptionFromNullOr<Value extends Schema.Any>(value: Value): OptionFromNullOr<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface OptionFromNullishOr<Value extends Schema.Any> extends transform<NullishOr<Value>, OptionFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category Option transformations
 * @since 3.10.0
 */
export declare function OptionFromNullishOr<Value extends Schema.Any>(value: Value, onNoneEncoding: null | undefined): OptionFromNullishOr<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface OptionFromUndefinedOr<Value extends Schema.Any> extends transform<UndefinedOr<Value>, OptionFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category Option transformations
 * @since 3.10.0
 */
export declare function OptionFromUndefinedOr<Value extends Schema.Any>(value: Value): OptionFromUndefinedOr<Value>;
declare const OptionFromNonEmptyTrimmedString_base: transform<typeof String$, OptionFromSelf<typeof NonEmptyTrimmedString>>;
/**
 * Transforms strings into an Option type, effectively filtering out empty or
 * whitespace-only strings by trimming them and checking their length. Returns
 * `none` for invalid inputs and `some` for valid non-empty strings.
 *
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * console.log(Schema.decodeSync(Schema.OptionFromNonEmptyTrimmedString)("")) // Option.none()
 * console.log(Schema.decodeSync(Schema.OptionFromNonEmptyTrimmedString)(" a ")) // Option.some("a")
 * console.log(Schema.decodeSync(Schema.OptionFromNonEmptyTrimmedString)("a")) // Option.some("a")
 * ```
 *
 * @category Option transformations
 * @since 3.10.0
 */
export declare class OptionFromNonEmptyTrimmedString extends OptionFromNonEmptyTrimmedString_base {
}
/**
 * @category Either utils
 * @since 3.10.0
 */
export type RightEncoded<IA> = {
    readonly _tag: "Right";
    readonly right: IA;
};
/**
 * @category Either utils
 * @since 3.10.0
 */
export type LeftEncoded<IE> = {
    readonly _tag: "Left";
    readonly left: IE;
};
/**
 * @category Either utils
 * @since 3.10.0
 */
export type EitherEncoded<IR, IL> = RightEncoded<IR> | LeftEncoded<IL>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface EitherFromSelf<R extends Schema.All, L extends Schema.All> extends AnnotableDeclare<EitherFromSelf<R, L>, either_.Either<Schema.Type<R>, Schema.Type<L>>, either_.Either<Schema.Encoded<R>, Schema.Encoded<L>>, [
    R,
    L
]> {
}
/**
 * @category Either transformations
 * @since 3.10.0
 */
export declare const EitherFromSelf: <R extends Schema.All, L extends Schema.All>({ left, right }: {
    readonly left: L;
    readonly right: R;
}) => EitherFromSelf<R, L>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Either<Right extends Schema.All, Left extends Schema.All> extends transform<Union<[
    Struct<{
        _tag: Literal<["Right"]>;
        right: Right;
    }>,
    Struct<{
        _tag: Literal<["Left"]>;
        left: Left;
    }>
]>, EitherFromSelf<SchemaClass<Schema.Type<Right>>, SchemaClass<Schema.Type<Left>>>> {
}
/**
 * @category Either transformations
 * @since 3.10.0
 */
export declare const Either: <R extends Schema.All, L extends Schema.All>({ left, right }: {
    readonly left: L;
    readonly right: R;
}) => Either<R, L>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface EitherFromUnion<Right extends Schema.All, Left extends Schema.All> extends transform<Union<[
    transform<Right, Struct<{
        _tag: Literal<["Right"]>;
        right: SchemaClass<Schema.Type<Right>>;
    }>>,
    transform<Left, Struct<{
        _tag: Literal<["Left"]>;
        right: SchemaClass<Schema.Type<Left>>;
    }>>
]>, EitherFromSelf<SchemaClass<Schema.Type<Right>>, SchemaClass<Schema.Type<Left>>>> {
}
/**
 * @example
 * ```ts
 * import * as Schema from "effect/Schema"
 *
 * // Schema<string | number, Either<string, number>>
 * Schema.EitherFromUnion({ left: Schema.String, right: Schema.Number })
 * ```
 *
 * @category Either transformations
 * @since 3.10.0
 */
export declare const EitherFromUnion: <Right extends Schema.All, Left extends Schema.All>({ left, right }: {
    readonly left: Left;
    readonly right: Right;
}) => EitherFromUnion<Right, Left>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface ReadonlyMapFromSelf<K extends Schema.Any, V extends Schema.Any> extends AnnotableDeclare<ReadonlyMapFromSelf<K, V>, ReadonlyMap<Schema.Type<K>, Schema.Type<V>>, ReadonlyMap<Schema.Encoded<K>, Schema.Encoded<V>>, [
    K,
    V
]> {
}
/**
 * @category ReadonlyMap
 * @since 3.10.0
 */
export declare const ReadonlyMapFromSelf: <K extends Schema.Any, V extends Schema.Any>({ key, value }: {
    readonly key: K;
    readonly value: V;
}) => ReadonlyMapFromSelf<K, V>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface MapFromSelf<K extends Schema.Any, V extends Schema.Any> extends AnnotableDeclare<MapFromSelf<K, V>, Map<Schema.Type<K>, Schema.Type<V>>, ReadonlyMap<Schema.Encoded<K>, Schema.Encoded<V>>, [
    K,
    V
]> {
}
/**
 * @category Map
 * @since 3.10.0
 */
export declare const MapFromSelf: <K extends Schema.Any, V extends Schema.Any>({ key, value }: {
    readonly key: K;
    readonly value: V;
}) => MapFromSelf<K, V>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface ReadonlyMap$<K extends Schema.Any, V extends Schema.Any> extends transform<Array$<Tuple2<K, V>>, ReadonlyMapFromSelf<SchemaClass<Schema.Type<K>>, SchemaClass<Schema.Type<V>>>> {
}
/**
 * @category ReadonlyMap transformations
 * @since 3.10.0
 */
export declare function ReadonlyMap<K extends Schema.Any, V extends Schema.Any>({ key, value }: {
    readonly key: K;
    readonly value: V;
}): ReadonlyMap$<K, V>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Map$<K extends Schema.Any, V extends Schema.Any> extends transform<Array$<Tuple2<K, V>>, MapFromSelf<SchemaClass<Schema.Type<K>>, SchemaClass<Schema.Type<V>>>> {
}
/** @ignore */
declare function map<K extends Schema.Any, V extends Schema.Any>({ key, value }: {
    readonly key: K;
    readonly value: V;
}): Map$<K, V>;
export { 
/**
 * @category Map transformations
 * @since 3.10.0
 */
map as Map };
/**
 * @category ReadonlyMap transformations
 * @since 3.10.0
 */
export declare const ReadonlyMapFromRecord: <KA, KR, VA, VI, VR>({ key, value }: {
    key: Schema<KA, string, KR>;
    value: Schema<VA, VI, VR>;
}) => SchemaClass<ReadonlyMap<KA, VA>, {
    readonly [x: string]: VI;
}, KR | VR>;
/**
 * @category Map transformations
 * @since 3.10.0
 */
export declare const MapFromRecord: <KA, KR, VA, VI, VR>({ key, value }: {
    key: Schema<KA, string, KR>;
    value: Schema<VA, VI, VR>;
}) => SchemaClass<Map<KA, VA>, {
    readonly [x: string]: VI;
}, KR | VR>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface ReadonlySetFromSelf<Value extends Schema.Any> extends AnnotableDeclare<ReadonlySetFromSelf<Value>, ReadonlySet<Schema.Type<Value>>, ReadonlySet<Schema.Encoded<Value>>, [
    Value
]> {
}
/**
 * @category ReadonlySet
 * @since 3.10.0
 */
export declare const ReadonlySetFromSelf: <Value extends Schema.Any>(value: Value) => ReadonlySetFromSelf<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface SetFromSelf<Value extends Schema.Any> extends AnnotableDeclare<SetFromSelf<Value>, Set<Schema.Type<Value>>, ReadonlySet<Schema.Encoded<Value>>, [
    Value
]> {
}
/**
 * @category Set
 * @since 3.10.0
 */
export declare const SetFromSelf: <Value extends Schema.Any>(value: Value) => SetFromSelf<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface ReadonlySet$<Value extends Schema.Any> extends transform<Array$<Value>, ReadonlySetFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category ReadonlySet transformations
 * @since 3.10.0
 */
export declare function ReadonlySet<Value extends Schema.Any>(value: Value): ReadonlySet$<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Set$<Value extends Schema.Any> extends transform<Array$<Value>, SetFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/** @ignore */
declare function set<Value extends Schema.Any>(value: Value): Set$<Value>;
export { 
/**
 * @category Set transformations
 * @since 3.10.0
 */
set as Set };
declare const BigDecimalFromSelf_base: declare<bigDecimal_.BigDecimal, bigDecimal_.BigDecimal, readonly [], never>;
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export declare class BigDecimalFromSelf extends BigDecimalFromSelf_base {
}
declare const BigDecimal_base: transformOrFail<SchemaClass<string, string, never>, typeof BigDecimalFromSelf, never>;
/**
 * @category BigDecimal transformations
 * @since 3.10.0
 */
export declare class BigDecimal extends BigDecimal_base {
}
declare const BigDecimalFromNumber_base: transform<SchemaClass<number, number, never>, typeof BigDecimalFromSelf>;
/**
 * A schema that transforms a `number` into a `BigDecimal`.
 * When encoding, this Schema will produce incorrect results if the BigDecimal exceeds the 64-bit range of a number.
 *
 * @category BigDecimal transformations
 * @since 3.10.0
 */
export declare class BigDecimalFromNumber extends BigDecimalFromNumber_base {
}
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanBigDecimalSchemaId: unique symbol;
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export declare const greaterThanBigDecimal: <S extends Schema.Any>(min: bigDecimal_.BigDecimal, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const GreaterThanOrEqualToBigDecimalSchemaId: unique symbol;
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export declare const greaterThanOrEqualToBigDecimal: <S extends Schema.Any>(min: bigDecimal_.BigDecimal, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanBigDecimalSchemaId: unique symbol;
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export declare const lessThanBigDecimal: <S extends Schema.Any>(max: bigDecimal_.BigDecimal, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const LessThanOrEqualToBigDecimalSchemaId: unique symbol;
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export declare const lessThanOrEqualToBigDecimal: <S extends Schema.Any>(max: bigDecimal_.BigDecimal, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const PositiveBigDecimalSchemaId: unique symbol;
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export declare const positiveBigDecimal: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export declare const PositiveBigDecimalFromSelf: filter<Schema<bigDecimal_.BigDecimal>>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const NonNegativeBigDecimalSchemaId: unique symbol;
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export declare const nonNegativeBigDecimal: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export declare const NonNegativeBigDecimalFromSelf: filter<Schema<bigDecimal_.BigDecimal>>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const NegativeBigDecimalSchemaId: unique symbol;
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export declare const negativeBigDecimal: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export declare const NegativeBigDecimalFromSelf: filter<Schema<bigDecimal_.BigDecimal>>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const NonPositiveBigDecimalSchemaId: unique symbol;
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export declare const nonPositiveBigDecimal: <S extends Schema.Any>(annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * @category BigDecimal constructors
 * @since 3.10.0
 */
export declare const NonPositiveBigDecimalFromSelf: filter<Schema<bigDecimal_.BigDecimal>>;
/**
 * @category schema id
 * @since 3.10.0
 */
export declare const BetweenBigDecimalSchemaId: unique symbol;
/**
 * @category BigDecimal filters
 * @since 3.10.0
 */
export declare const betweenBigDecimal: <S extends Schema.Any>(minimum: bigDecimal_.BigDecimal, maximum: bigDecimal_.BigDecimal, annotations?: Annotations.Filter<Schema.Type<S>>) => <A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => filter<S>;
/**
 * Clamps a `BigDecimal` between a minimum and a maximum value.
 *
 * @category BigDecimal transformations
 * @since 3.10.0
 */
export declare const clampBigDecimal: (minimum: bigDecimal_.BigDecimal, maximum: bigDecimal_.BigDecimal) => <S extends Schema.Any, A extends bigDecimal_.BigDecimal>(self: S & Schema<A, Schema.Encoded<S>, Schema.Context<S>>) => transform<S, filter<SchemaClass<A>>>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface ChunkFromSelf<Value extends Schema.Any> extends AnnotableDeclare<ChunkFromSelf<Value>, chunk_.Chunk<Schema.Type<Value>>, chunk_.Chunk<Schema.Encoded<Value>>, [
    Value
]> {
}
/**
 * @category Chunk
 * @since 3.10.0
 */
export declare const ChunkFromSelf: <Value extends Schema.Any>(value: Value) => ChunkFromSelf<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Chunk<Value extends Schema.Any> extends transform<Array$<Value>, ChunkFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category Chunk transformations
 * @since 3.10.0
 */
export declare function Chunk<Value extends Schema.Any>(value: Value): Chunk<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface NonEmptyChunkFromSelf<Value extends Schema.Any> extends AnnotableDeclare<NonEmptyChunkFromSelf<Value>, chunk_.NonEmptyChunk<Schema.Type<Value>>, chunk_.NonEmptyChunk<Schema.Encoded<Value>>, [
    Value
]> {
}
/**
 * @category Chunk
 * @since 3.10.0
 */
export declare const NonEmptyChunkFromSelf: <Value extends Schema.Any>(value: Value) => NonEmptyChunkFromSelf<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface NonEmptyChunk<Value extends Schema.Any> extends transform<NonEmptyArray<Value>, NonEmptyChunkFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category Chunk transformations
 * @since 3.10.0
 */
export declare function NonEmptyChunk<Value extends Schema.Any>(value: Value): NonEmptyChunk<Value>;
/**
 * @category api interface
 * @since 3.13.3
 */
export interface DataFromSelf<Value extends Schema.Any> extends AnnotableDeclare<DataFromSelf<Value>, Schema.Type<Value>, Schema.Encoded<Value>, [
    Value
]> {
}
/**
 * Type and Encoded must extend `Readonly<Record<string, any>> |
 * ReadonlyArray<any>` to be compatible with this API.
 *
 * @category Data transformations
 * @since 3.10.0
 */
export declare const DataFromSelf: <S extends Schema.Any, A extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>, I extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>>(value: S & Schema<A & Schema.Type<S>, I & Schema.Encoded<S>, Schema.Context<S>>) => DataFromSelf<S>;
/**
 * @category api interface
 * @since 3.13.3
 */
export interface Data<Value extends Schema.Any> extends transform<Value, DataFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * Type and Encoded must extend `Readonly<Record<string, any>> |
 * ReadonlyArray<any>` to be compatible with this API.
 *
 * @category Data transformations
 * @since 3.10.0
 */
export declare const Data: <S extends Schema.Any, A extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>, I extends Readonly<Record<string, unknown>> | ReadonlyArray<unknown>>(value: S & Schema<A & Schema.Type<S>, I & Schema.Encoded<S>, Schema.Context<S>>) => Data<S>;
type MissingSelfGeneric<Usage extends string, Params extends string = ""> = `Missing \`Self\` generic - use \`class Self extends ${Usage}<Self>()(${Params}{ ... })\``;
type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];
type ClassAnnotations<Self, A> = Annotations.Schema<Self> | readonly [
    Annotations.Schema<Self> | undefined,
    (Annotations.Schema<Self> | undefined)?,
    Annotations.Schema<A>?
];
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Class<Self, Fields extends Struct.Fields, I, R, C, Inherited, Proto> extends Schema<Self, Simplify<I>, R> {
    new (props: RequiredKeys<C> extends never ? void | Simplify<C> : Simplify<C>, options?: MakeOptions): Struct.Type<Fields> & Inherited & Proto;
    /** @since 3.10.0 */
    readonly ast: AST.Transformation;
    make<C extends new (...args: Array<any>) => any>(this: C, ...args: ConstructorParameters<C>): InstanceType<C>;
    annotations(annotations: Annotations.Schema<Self>): SchemaClass<Self, Simplify<I>, R>;
    readonly fields: {
        readonly [K in keyof Fields]: Fields[K];
    };
    readonly identifier: string;
    /**
     * @example
     * ```ts
     * import { Schema } from "effect"
     *
     * class MyClass extends Schema.Class<MyClass>("MyClass")({
     *  myField: Schema.String
     * }) {
     *  myMethod() {
     *    return this.myField + "my"
     *  }
     * }
     *
     * class NextClass extends MyClass.extend<NextClass>("NextClass")({
     *  nextField: Schema.Number
     * }) {
     *  nextMethod() {
     *    return this.myMethod() + this.myField + this.nextField
     *  }
     * }
     * ```
     */
    extend<Extended = never>(identifier: string): <NewFields extends Struct.Fields>(fields: NewFields | HasFields<NewFields>, annotations?: ClassAnnotations<Extended, Simplify<Struct.Type<Fields & NewFields>>>) => [Extended] extends [never] ? MissingSelfGeneric<"Base.extend"> : Class<Extended, Fields & NewFields, I & Struct.Encoded<NewFields>, R | Struct.Context<NewFields>, C & Struct.Constructor<NewFields>, Self, Proto>;
    /**
     * @example
     * ```ts
     * import { Effect, Schema } from "effect"
     *
     * class MyClass extends Schema.Class<MyClass>("MyClass")({
     *   myField: Schema.String
     * }) {
     *   myMethod() {
     *     return this.myField + "my"
     *   }
     * }
     *
     * class NextClass extends MyClass.transformOrFail<NextClass>("NextClass")({
     *   nextField: Schema.Number
     * }, {
     *   decode: (i) =>
     *     Effect.succeed({
     *       myField: i.myField,
     *       nextField: i.myField.length
     *     }),
     *   encode: (a) => Effect.succeed({ myField: a.myField })
     * }) {
     *   nextMethod() {
     *     return this.myMethod() + this.myField + this.nextField
     *   }
     * }
     * ```
     */
    transformOrFail<Transformed = never>(identifier: string): <NewFields extends Struct.Fields, R2, R3>(fields: NewFields, options: {
        readonly decode: (input: Simplify<Struct.Type<Fields>>, options: ParseOptions, ast: AST.Transformation) => Effect.Effect<Simplify<Struct.Type<Fields & NewFields>>, ParseResult.ParseIssue, R2>;
        readonly encode: (input: Simplify<Struct.Type<Fields & NewFields>>, options: ParseOptions, ast: AST.Transformation) => Effect.Effect<Struct.Type<Fields>, ParseResult.ParseIssue, R3>;
    }, annotations?: ClassAnnotations<Transformed, Simplify<Struct.Type<Fields & NewFields>>>) => [Transformed] extends [never] ? MissingSelfGeneric<"Base.transformOrFail"> : Class<Transformed, Fields & NewFields, I, R | Struct.Context<NewFields> | R2 | R3, C & Struct.Constructor<NewFields>, Self, Proto>;
    /**
     * @example
     * ```ts
     * import { Effect, Schema } from "effect"
     *
     * class MyClass extends Schema.Class<MyClass>("MyClass")({
     *   myField: Schema.String
     * }) {
     *   myMethod() {
     *     return this.myField + "my"
     *   }
     * }
     *
     * class NextClass extends MyClass.transformOrFailFrom<NextClass>("NextClass")({
     *   nextField: Schema.Number
     * }, {
     *   decode: (i) =>
     *     Effect.succeed({
     *       myField: i.myField,
     *       nextField: i.myField.length
     *     }),
     *   encode: (a) => Effect.succeed({ myField: a.myField })
     * }) {
     *   nextMethod() {
     *     return this.myMethod() + this.myField + this.nextField
     *   }
     * }
     * ```
     */
    transformOrFailFrom<Transformed = never>(identifier: string): <NewFields extends Struct.Fields, R2, R3>(fields: NewFields, options: {
        readonly decode: (input: Simplify<I>, options: ParseOptions, ast: AST.Transformation) => Effect.Effect<Simplify<I & Struct.Encoded<NewFields>>, ParseResult.ParseIssue, R2>;
        readonly encode: (input: Simplify<I & Struct.Encoded<NewFields>>, options: ParseOptions, ast: AST.Transformation) => Effect.Effect<I, ParseResult.ParseIssue, R3>;
    }, annotations?: ClassAnnotations<Transformed, Simplify<Struct.Type<Fields & NewFields>>>) => [Transformed] extends [never] ? MissingSelfGeneric<"Base.transformOrFailFrom"> : Class<Transformed, Fields & NewFields, I, R | Struct.Context<NewFields> | R2 | R3, C & Struct.Constructor<NewFields>, Self, Proto>;
}
type HasFields<Fields extends Struct.Fields> = Struct<Fields> | {
    readonly [RefineSchemaId]: HasFields<Fields>;
};
/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyClass extends Schema.Class<MyClass>("MyClass")({
 *  someField: Schema.String
 * }) {
 *  someMethod() {
 *    return this.someField + "bar"
 *  }
 * }
 * ```
 *
 * @category classes
 * @since 3.10.0
 */
export declare const Class: <Self = never>(identifier: string) => <Fields extends Struct.Fields>(fieldsOr: Fields | HasFields<Fields>, annotations?: ClassAnnotations<Self, Simplify<Struct.Type<Fields>>>) => [Self] extends [never] ? MissingSelfGeneric<"Class"> : Class<Self, Fields, Struct.Encoded<Fields>, Struct.Context<Fields>, Struct.Constructor<Fields>, {}, {}>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface TaggedClass<Self, Tag extends string, Fields extends Struct.Fields> extends Class<Self, Fields, Struct.Encoded<Fields>, Struct.Context<Fields>, Struct.Constructor<Omit<Fields, "_tag">>, {}, {}> {
    readonly _tag: Tag;
}
/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyClass extends Schema.TaggedClass<MyClass>("MyClass")("MyClass", {
 *  a: Schema.String
 * }) {}
 * ```
 *
 * @category classes
 * @since 3.10.0
 */
export declare const TaggedClass: <Self = never>(identifier?: string) => <Tag extends string, Fields extends Struct.Fields>(tag: Tag, fieldsOr: Fields | HasFields<Fields>, annotations?: ClassAnnotations<Self, Simplify<Struct.Type<{
    readonly _tag: tag<Tag>;
} & Fields>>>) => [Self] extends [never] ? MissingSelfGeneric<"TaggedClass", `"Tag", `> : TaggedClass<Self, Tag, {
    readonly _tag: tag<Tag>;
} & Fields>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface TaggedErrorClass<Self, Tag extends string, Fields extends Struct.Fields> extends Class<Self, Fields, Struct.Encoded<Fields>, Struct.Context<Fields>, Struct.Constructor<Omit<Fields, "_tag">>, {}, cause_.YieldableError> {
    readonly _tag: Tag;
}
/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyError extends Schema.TaggedError<MyError>("MyError")(
 *   "MyError",
 *   {
 *     module: Schema.String,
 *     method: Schema.String,
 *     description: Schema.String
 *   }
 * ) {
 *   get message(): string {
 *     return `${this.module}.${this.method}: ${this.description}`
 *   }
 * }
 * ```
 * @category classes
 * @since 3.10.0
 */
export declare const TaggedError: <Self = never>(identifier?: string) => <Tag extends string, Fields extends Struct.Fields>(tag: Tag, fieldsOr: Fields | HasFields<Fields>, annotations?: ClassAnnotations<Self, Simplify<Struct.Type<{
    readonly _tag: tag<Tag>;
} & Fields>>>) => [Self] extends [never] ? MissingSelfGeneric<"TaggedError", `"Tag", `> : TaggedErrorClass<Self, Tag, {
    readonly _tag: tag<Tag>;
} & Fields>;
/**
 * @category Constructor utils
 * @since 3.13.4
 */
export type MakeOptions = boolean | {
    readonly disableValidation?: boolean | undefined;
};
/**
 * @category FiberId
 * @since 3.10.0
 */
export type FiberIdEncoded = {
    readonly _tag: "Composite";
    readonly left: FiberIdEncoded;
    readonly right: FiberIdEncoded;
} | {
    readonly _tag: "None";
} | {
    readonly _tag: "Runtime";
    readonly id: number;
    readonly startTimeMillis: number;
};
declare const FiberIdFromSelf_base: declare<fiberId_.FiberId, fiberId_.FiberId, readonly [], never>;
/**
 * @category FiberId constructors
 * @since 3.10.0
 */
export declare class FiberIdFromSelf extends FiberIdFromSelf_base {
}
declare const FiberId_base: transform<Schema<FiberIdEncoded, FiberIdEncoded, never>, typeof FiberIdFromSelf>;
/**
 * @category FiberId transformations
 * @since 3.10.0
 */
export declare class FiberId extends FiberId_base {
}
/**
 * @category Cause utils
 * @since 3.10.0
 */
export type CauseEncoded<E, D> = {
    readonly _tag: "Empty";
} | {
    readonly _tag: "Fail";
    readonly error: E;
} | {
    readonly _tag: "Die";
    readonly defect: D;
} | {
    readonly _tag: "Interrupt";
    readonly fiberId: FiberIdEncoded;
} | {
    readonly _tag: "Sequential";
    readonly left: CauseEncoded<E, D>;
    readonly right: CauseEncoded<E, D>;
} | {
    readonly _tag: "Parallel";
    readonly left: CauseEncoded<E, D>;
    readonly right: CauseEncoded<E, D>;
};
/**
 * @category api interface
 * @since 3.10.0
 */
export interface CauseFromSelf<E extends Schema.All, D extends Schema.All> extends AnnotableDeclare<CauseFromSelf<E, D>, cause_.Cause<Schema.Type<E>>, cause_.Cause<Schema.Encoded<E>>, [
    E,
    D
]> {
}
/**
 * @category Cause transformations
 * @since 3.10.0
 */
export declare const CauseFromSelf: <E extends Schema.All, D extends Schema.All>({ defect, error }: {
    readonly error: E;
    readonly defect: D;
}) => CauseFromSelf<E, D>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Cause<E extends Schema.All, D extends Schema.All> extends transform<SchemaClass<CauseEncoded<Schema.Type<E>, Schema.Type<Defect>>, CauseEncoded<Schema.Encoded<E>, Schema.Encoded<Defect>>, Schema.Context<E> | Schema.Context<D>>, CauseFromSelf<SchemaClass<Schema.Type<E>>, SchemaClass<Schema.Type<D>>>> {
}
/**
 * @category Cause transformations
 * @since 3.10.0
 */
export declare const Cause: <E extends Schema.All, D extends Schema.All>({ defect, error }: {
    readonly error: E;
    readonly defect: D;
}) => Cause<E, D>;
declare const Defect_base: transform<typeof Unknown, typeof Unknown>;
/**
 * Defines a schema for handling JavaScript errors (`Error` instances) and other types of defects.
 * It decodes objects into Error instances if they match the expected structure (i.e., have a `message` and optionally a `name` and `stack`),
 * or converts other values to their string representations.
 *
 * When encoding, it converts `Error` instances back into plain objects containing only the error's name and message,
 * or other values into their string forms.
 *
 * This is useful for serializing and deserializing errors across network boundaries where error objects do not natively serialize.
 *
 * @category defect
 * @since 3.10.0
 */
export declare class Defect extends Defect_base {
}
/**
 * @category Exit utils
 * @since 3.10.0
 */
export type ExitEncoded<A, E, D> = {
    readonly _tag: "Failure";
    readonly cause: CauseEncoded<E, D>;
} | {
    readonly _tag: "Success";
    readonly value: A;
};
/**
 * @category api interface
 * @since 3.10.0
 */
export interface ExitFromSelf<A extends Schema.All, E extends Schema.All, D extends Schema.All> extends AnnotableDeclare<ExitFromSelf<A, E, D>, exit_.Exit<Schema.Type<A>, Schema.Type<E>>, exit_.Exit<Schema.Encoded<A>, Schema.Encoded<E>>, [
    A,
    E,
    D
]> {
}
/**
 * @category Exit transformations
 * @since 3.10.0
 */
export declare const ExitFromSelf: <A extends Schema.All, E extends Schema.All, D extends Schema.All>({ defect, failure, success }: {
    readonly failure: E;
    readonly success: A;
    readonly defect: D;
}) => ExitFromSelf<A, E, D>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface Exit<A extends Schema.All, E extends Schema.All, D extends Schema.All> extends transform<Union<[
    Struct<{
        _tag: Literal<["Failure"]>;
        cause: SchemaClass<CauseEncoded<Schema.Type<E>, Schema.Type<D>>, CauseEncoded<Schema.Encoded<E>, Schema.Encoded<D>>, Schema.Context<E> | Schema.Context<D>>;
    }>,
    Struct<{
        _tag: Literal<["Success"]>;
        value: A;
    }>
]>, ExitFromSelf<SchemaClass<Schema.Type<A>>, SchemaClass<Schema.Type<E>>, SchemaClass<Schema.Type<D>>>> {
}
/**
 * @category Exit transformations
 * @since 3.10.0
 */
export declare const Exit: <A extends Schema.All, E extends Schema.All, D extends Schema.All>({ defect, failure, success }: {
    readonly failure: E;
    readonly success: A;
    readonly defect: D;
}) => Exit<A, E, D>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface HashSetFromSelf<Value extends Schema.Any> extends AnnotableDeclare<HashSetFromSelf<Value>, hashSet_.HashSet<Schema.Type<Value>>, hashSet_.HashSet<Schema.Encoded<Value>>, [
    Value
]> {
}
/**
 * @category HashSet transformations
 * @since 3.10.0
 */
export declare const HashSetFromSelf: <Value extends Schema.Any>(value: Value) => HashSetFromSelf<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface HashSet<Value extends Schema.Any> extends transform<Array$<Value>, HashSetFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category HashSet transformations
 * @since 3.10.0
 */
export declare function HashSet<Value extends Schema.Any>(value: Value): HashSet<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface HashMapFromSelf<K extends Schema.Any, V extends Schema.Any> extends AnnotableDeclare<HashMapFromSelf<K, V>, hashMap_.HashMap<Schema.Type<K>, Schema.Type<V>>, hashMap_.HashMap<Schema.Encoded<K>, Schema.Encoded<V>>, [
    K,
    V
]> {
}
/**
 * @category HashMap transformations
 * @since 3.10.0
 */
export declare const HashMapFromSelf: <K extends Schema.Any, V extends Schema.Any>({ key, value }: {
    readonly key: K;
    readonly value: V;
}) => HashMapFromSelf<K, V>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface HashMap<K extends Schema.Any, V extends Schema.Any> extends transform<Array$<Tuple2<K, V>>, HashMapFromSelf<SchemaClass<Schema.Type<K>>, SchemaClass<Schema.Type<V>>>> {
}
/**
 * @category HashMap transformations
 * @since 3.10.0
 */
export declare const HashMap: <K extends Schema.Any, V extends Schema.Any>({ key, value }: {
    readonly key: K;
    readonly value: V;
}) => HashMap<K, V>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface ListFromSelf<Value extends Schema.Any> extends AnnotableDeclare<ListFromSelf<Value>, list_.List<Schema.Type<Value>>, list_.List<Schema.Encoded<Value>>, [
    Value
]> {
}
/**
 * @category List transformations
 * @since 3.10.0
 */
export declare const ListFromSelf: <Value extends Schema.Any>(value: Value) => ListFromSelf<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface List<Value extends Schema.Any> extends transform<Array$<Value>, ListFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category List transformations
 * @since 3.10.0
 */
export declare function List<Value extends Schema.Any>(value: Value): List<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface SortedSetFromSelf<Value extends Schema.Any> extends AnnotableDeclare<SortedSetFromSelf<Value>, sortedSet_.SortedSet<Schema.Type<Value>>, sortedSet_.SortedSet<Schema.Encoded<Value>>, [
    Value
]> {
}
/**
 * @category SortedSet transformations
 * @since 3.10.0
 */
export declare const SortedSetFromSelf: <Value extends Schema.Any>(value: Value, ordA: Order.Order<Schema.Type<Value>>, ordI: Order.Order<Schema.Encoded<Value>>) => SortedSetFromSelf<Value>;
/**
 * @category api interface
 * @since 3.10.0
 */
export interface SortedSet<Value extends Schema.Any> extends transform<Array$<Value>, SortedSetFromSelf<SchemaClass<Schema.Type<Value>>>> {
}
/**
 * @category SortedSet transformations
 * @since 3.10.0
 */
export declare function SortedSet<Value extends Schema.Any>(value: Value, ordA: Order.Order<Schema.Type<Value>>): SortedSet<Value>;
declare const BooleanFromUnknown_base: transform<typeof Unknown, typeof Boolean$>;
/**
 * Converts an arbitrary value to a `boolean` by testing whether it is truthy.
 * Uses `!!val` to coerce the value to a `boolean`.
 *
 * @see https://developer.mozilla.org/docs/Glossary/Truthy
 *
 * @category boolean constructors
 * @since 3.10.0
 */
export declare class BooleanFromUnknown extends BooleanFromUnknown_base {
}
declare const BooleanFromString_base: transform<Literal<["true", "false"]>, typeof Boolean$>;
/**
 * Converts an `string` value into its corresponding `boolean`
 * ("true" as `true` and "false" as `false`).
 *
 * @category boolean transformations
 * @since 3.11.0
 */
export declare class BooleanFromString extends BooleanFromString_base {
}
/**
 * @category Config validations
 * @since 3.10.0
 */
export declare const Config: <A, I extends string>(name: string, schema: Schema<A, I>) => config_.Config<A>;
/**
 * @since 3.10.0
 * @category symbol
 */
export declare const symbolSerializable: unique symbol;
/**
 * The `Serializable` trait allows objects to define their own schema for
 * serialization.
 *
 * @since 3.10.0
 * @category model
 */
export interface Serializable<A, I, R> {
    readonly [symbolSerializable]: Schema<A, I, R>;
}
/**
 * @since 3.10.0
 * @category model
 */
export declare namespace Serializable {
    /**
     * @since 3.10.0
     */
    type Type<T> = T extends Serializable<infer A, infer _I, infer _R> ? A : never;
    /**
     * @since 3.10.0
     */
    type Encoded<T> = T extends Serializable<infer _A, infer I, infer _R> ? I : never;
    /**
     * @since 3.10.0
     */
    type Context<T> = T extends Serializable<infer _A, infer _I, infer R> ? R : never;
    /**
     * @since 3.10.0
     */
    type Any = Serializable<any, any, unknown>;
    /**
     * @since 3.10.0
     */
    type All = Any | Serializable<any, never, unknown> | Serializable<never, any, unknown> | Serializable<never, never, unknown>;
}
/**
 * @since 3.10.0
 */
export declare const asSerializable: <S extends Serializable.All>(serializable: S) => Serializable<Serializable.Type<S>, Serializable.Encoded<S>, Serializable.Context<S>>;
/**
 * @since 3.10.0
 * @category accessor
 */
export declare const serializableSchema: <A, I, R>(self: Serializable<A, I, R>) => Schema<A, I, R>;
/**
 * @since 3.10.0
 * @category encoding
 */
export declare const serialize: <A, I, R>(self: Serializable<A, I, R>) => Effect.Effect<I, ParseResult.ParseError, R>;
/**
 * @since 3.10.0
 * @category decoding
 */
export declare const deserialize: {
    /**
     * @since 3.10.0
     * @category decoding
     */
    (value: unknown): <A, I, R>(self: Serializable<A, I, R>) => Effect.Effect<A, ParseResult.ParseError, R>;
    /**
     * @since 3.10.0
     * @category decoding
     */
    <A, I, R>(self: Serializable<A, I, R>, value: unknown): Effect.Effect<A, ParseResult.ParseError, R>;
};
/**
 * @since 3.10.0
 * @category symbol
 */
export declare const symbolWithResult: unique symbol;
/**
 * The `WithResult` trait is designed to encapsulate the outcome of an
 * operation, distinguishing between success and failure cases. Each case is
 * associated with a schema that defines the structure and types of the success
 * or failure data.
 *
 * @since 3.10.0
 * @category model
 */
export interface WithResult<Success, SuccessEncoded, Failure, FailureEncoded, ResultR> {
    readonly [symbolWithResult]: {
        readonly success: Schema<Success, SuccessEncoded, ResultR>;
        readonly failure: Schema<Failure, FailureEncoded, ResultR>;
    };
}
/**
 * @since 3.10.0
 * @category model
 */
export declare namespace WithResult {
    /**
     * @since 3.10.0
     */
    type Success<T> = T extends WithResult<infer _A, infer _I, infer _E, infer _EI, infer _R> ? _A : never;
    /**
     * @since 3.10.0
     */
    type SuccessEncoded<T> = T extends WithResult<infer _A, infer _I, infer _E, infer _EI, infer _R> ? _I : never;
    /**
     * @since 3.10.0
     */
    type Failure<T> = T extends WithResult<infer _A, infer _I, infer _E, infer _EI, infer _R> ? _E : never;
    /**
     * @since 3.10.0
     */
    type FailureEncoded<T> = T extends WithResult<infer _A, infer _I, infer _E, infer _EI, infer _R> ? _EI : never;
    /**
     * @since 3.10.0
     */
    type Context<T> = T extends WithResult<infer _SA, infer _SI, infer _FA, infer _FI, infer R> ? R : never;
    /**
     * @since 3.10.0
     */
    type Any = WithResult<any, any, any, any, unknown>;
    /**
     * @since 3.10.0
     */
    type All = Any | WithResult<any, any, never, never, unknown>;
}
/**
 * @since 3.10.0
 */
export declare const asWithResult: <WR extends WithResult.All>(withExit: WR) => WithResult<WithResult.Success<WR>, WithResult.SuccessEncoded<WR>, WithResult.Failure<WR>, WithResult.FailureEncoded<WR>, WithResult.Context<WR>>;
/**
 * @since 3.10.0
 * @category accessor
 */
export declare const failureSchema: <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Schema<FA, FI, R>;
/**
 * @since 3.10.0
 * @category accessor
 */
export declare const successSchema: <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Schema<SA, SI, R>;
/**
 * @since 3.10.0
 * @category accessor
 */
export declare const exitSchema: <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Schema<exit_.Exit<SA, FA>, ExitEncoded<SI, FI, unknown>, R>;
/**
 * @since 3.10.0
 * @category encoding
 */
export declare const serializeFailure: {
    /**
     * @since 3.10.0
     * @category encoding
     */
    <FA>(value: FA): <SA, SI, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Effect.Effect<FI, ParseResult.ParseError, R>;
    /**
     * @since 3.10.0
     * @category encoding
     */
    <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: FA): Effect.Effect<FI, ParseResult.ParseError, R>;
};
/**
 * @since 3.10.0
 * @category decoding
 */
export declare const deserializeFailure: {
    /**
     * @since 3.10.0
     * @category decoding
     */
    (value: unknown): <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Effect.Effect<FA, ParseResult.ParseError, R>;
    /**
     * @since 3.10.0
     * @category decoding
     */
    <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: unknown): Effect.Effect<FA, ParseResult.ParseError, R>;
};
/**
 * @since 3.10.0
 * @category encoding
 */
export declare const serializeSuccess: {
    /**
     * @since 3.10.0
     * @category encoding
     */
    <SA>(value: SA): <SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Effect.Effect<SI, ParseResult.ParseError, R>;
    /**
     * @since 3.10.0
     * @category encoding
     */
    <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: SA): Effect.Effect<SI, ParseResult.ParseError, R>;
};
/**
 * @since 3.10.0
 * @category decoding
 */
export declare const deserializeSuccess: {
    /**
     * @since 3.10.0
     * @category decoding
     */
    (value: unknown): <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Effect.Effect<SA, ParseResult.ParseError, R>;
    /**
     * @since 3.10.0
     * @category decoding
     */
    <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: unknown): Effect.Effect<SA, ParseResult.ParseError, R>;
};
/**
 * @since 3.10.0
 * @category encoding
 */
export declare const serializeExit: {
    /**
     * @since 3.10.0
     * @category encoding
     */
    <SA, FA>(value: exit_.Exit<SA, FA>): <SI, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Effect.Effect<ExitEncoded<SI, FI, unknown>, ParseResult.ParseError, R>;
    /**
     * @since 3.10.0
     * @category encoding
     */
    <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: exit_.Exit<SA, FA>): Effect.Effect<ExitEncoded<SI, FI, unknown>, ParseResult.ParseError, R>;
};
/**
 * @since 3.10.0
 * @category decoding
 */
export declare const deserializeExit: {
    /**
     * @since 3.10.0
     * @category decoding
     */
    (value: unknown): <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>) => Effect.Effect<exit_.Exit<SA, FA>, ParseResult.ParseError, R>;
    /**
     * @since 3.10.0
     * @category decoding
     */
    <SA, SI, FA, FI, R>(self: WithResult<SA, SI, FA, FI, R>, value: unknown): Effect.Effect<exit_.Exit<SA, FA>, ParseResult.ParseError, R>;
};
/**
 * The `SerializableWithResult` trait is specifically designed to model remote
 * procedures that require serialization of their input and output, managing
 * both successful and failed outcomes.
 *
 * This trait combines functionality from both the `Serializable` and `WithResult`
 * traits to handle data serialization and the bifurcation of operation results
 * into success or failure categories.
 *
 * @since 3.10.0
 * @category model
 */
export interface SerializableWithResult<A, I, R, Success, SuccessEncoded, Failure, FailureEncoded, ResultR> extends Serializable<A, I, R>, WithResult<Success, SuccessEncoded, Failure, FailureEncoded, ResultR> {
}
/**
 * @since 3.10.0
 * @category model
 */
export declare namespace SerializableWithResult {
    /**
     * @since 3.10.0
     */
    type Context<P> = P extends SerializableWithResult<infer _S, infer _SI, infer SR, infer _A, infer _AI, infer _E, infer _EI, infer RR> ? SR | RR : never;
    /**
     * @since 3.10.0
     */
    type Any = SerializableWithResult<any, any, any, any, any, any, any, unknown>;
    /**
     * @since 3.10.0
     */
    type All = Any | SerializableWithResult<any, any, any, any, any, never, never, unknown>;
}
/**
 * @since 3.10.0
 */
export declare const asSerializableWithResult: <SWR extends SerializableWithResult.All>(procedure: SWR) => SerializableWithResult<Serializable.Type<SWR>, Serializable.Encoded<SWR>, Serializable.Context<SWR>, WithResult.Success<SWR>, WithResult.SuccessEncoded<SWR>, WithResult.Failure<SWR>, WithResult.FailureEncoded<SWR>, WithResult.Context<SWR>>;
/**
 * @since 3.10.0
 */
export interface TaggedRequest<Tag extends string, A, I, R, SuccessType, SuccessEncoded, FailureType, FailureEncoded, ResultR> extends Request.Request<SuccessType, FailureType>, SerializableWithResult<A, I, R, SuccessType, SuccessEncoded, FailureType, FailureEncoded, ResultR> {
    readonly _tag: Tag;
}
/**
 * @since 3.10.0
 */
export declare namespace TaggedRequest {
    /**
     * @since 3.10.0
     */
    type Any = TaggedRequest<string, any, any, any, any, any, any, any, unknown>;
    /**
     * @since 3.10.0
     */
    type All = Any | TaggedRequest<string, any, any, any, any, any, never, never, unknown>;
}
/**
 * @category api interface
 * @since 3.10.0
 */
export interface TaggedRequestClass<Self, Tag extends string, Payload extends Struct.Fields, Success extends Schema.All, Failure extends Schema.All> extends Class<Self, Payload, Struct.Encoded<Payload>, Struct.Context<Payload>, Struct.Constructor<Omit<Payload, "_tag">>, TaggedRequest<Tag, Self, Struct.Encoded<Payload>, Struct.Context<Payload>, Schema.Type<Success>, Schema.Encoded<Success>, Schema.Type<Failure>, Schema.Encoded<Failure>, Schema.Context<Success> | Schema.Context<Failure>>, {}> {
    readonly _tag: Tag;
    readonly success: Success;
    readonly failure: Failure;
}
/**
 * @example
 * ```ts
 * import { Schema } from "effect"
 *
 * class MyRequest extends Schema.TaggedRequest<MyRequest>("MyRequest")("MyRequest", {
 *  failure: Schema.String,
 *  success: Schema.Number,
 *  payload: { id: Schema.String }
 * }) {}
 * ```
 *
 * @category classes
 * @since 3.10.0
 */
export declare const TaggedRequest: <Self = never>(identifier?: string) => <Tag extends string, Payload extends Struct.Fields, Success extends Schema.All, Failure extends Schema.All>(tag: Tag, options: {
    failure: Failure;
    success: Success;
    payload: Payload;
}, annotations?: ClassAnnotations<Self, Simplify<Struct.Type<{
    readonly _tag: tag<Tag>;
} & Payload>>>) => [Self] extends [never] ? MissingSelfGeneric<"TaggedRequest", `"Tag", SuccessSchema, FailureSchema, `> : TaggedRequestClass<Self, Tag, {
    readonly _tag: tag<Tag>;
} & Payload, Success, Failure>;
/**
 * Given a schema `Schema<A, I, R>`, returns an `Equivalence` instance for `A`.
 *
 * @category Equivalence
 * @since 3.10.0
 */
export declare const equivalence: <A, I, R>(schema: Schema<A, I, R>) => Equivalence.Equivalence<A>;
declare const PropertyKey$_base: Union<[typeof String$, typeof Number$, transformOrFail<Struct<{
    _tag: tag<"symbol">;
} & {
    key: typeof String$;
}>, typeof SymbolFromSelf, never>]>;
/** @ignore */
declare class PropertyKey$ extends PropertyKey$_base {
}
export { 
/**
 * @since 3.12.5
 */
PropertyKey$ as PropertyKey };
declare const ArrayFormatterIssue_base: Struct<{
    _tag: propertySignature<Literal<["Pointer", "Unexpected", "Missing", "Composite", "Refinement", "Transformation", "Type", "Forbidden"]>>;
    path: propertySignature<Array$<typeof PropertyKey$>>;
    message: propertySignature<typeof String$>;
}>;
/**
 * @category ArrayFormatter
 * @since 3.12.5
 */
export declare class ArrayFormatterIssue extends ArrayFormatterIssue_base {
}
//# sourceMappingURL=Schema.d.ts.map