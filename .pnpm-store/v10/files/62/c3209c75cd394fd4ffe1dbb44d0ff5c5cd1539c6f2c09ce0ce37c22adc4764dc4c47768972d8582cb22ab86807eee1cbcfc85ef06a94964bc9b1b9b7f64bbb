/**
 * @since 3.10.0
 */
import * as Arr from "./Array.js";
import * as Cause from "./Cause.js";
import * as Effect from "./Effect.js";
import * as Either from "./Either.js";
import type { LazyArg } from "./Function.js";
import * as Inspectable from "./Inspectable.js";
import * as Option from "./Option.js";
import type * as Schema from "./Schema.js";
import * as AST from "./SchemaAST.js";
/**
 * `ParseIssue` is a type that represents the different types of errors that can occur when decoding/encoding a value.
 *
 * @category model
 * @since 3.10.0
 */
export type ParseIssue = Type | Missing | Unexpected | Forbidden | Pointer | Refinement | Transformation | Composite;
/**
 * @category model
 * @since 3.10.0
 */
export type SingleOrNonEmpty<A> = A | Arr.NonEmptyReadonlyArray<A>;
/**
 * @category model
 * @since 3.10.0
 */
export type Path = SingleOrNonEmpty<PropertyKey>;
/**
 * @category model
 * @since 3.10.0
 */
export declare class Pointer {
    readonly path: Path;
    readonly actual: unknown;
    readonly issue: ParseIssue;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Pointer";
    constructor(path: Path, actual: unknown, issue: ParseIssue);
}
/**
 * Error that occurs when an unexpected key or index is present.
 *
 * @category model
 * @since 3.10.0
 */
export declare class Unexpected {
    readonly actual: unknown;
    /**
     * @since 3.10.0
     */
    readonly message?: string | undefined;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Unexpected";
    constructor(actual: unknown, 
    /**
     * @since 3.10.0
     */
    message?: string | undefined);
}
/**
 * Error that occurs when a required key or index is missing.
 *
 * @category model
 * @since 3.10.0
 */
export declare class Missing {
    /**
     * @since 3.10.0
     */
    readonly ast: AST.Type;
    /**
     * @since 3.10.0
     */
    readonly message?: string | undefined;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Missing";
    /**
     * @since 3.10.0
     */
    readonly actual: undefined;
    constructor(
    /**
     * @since 3.10.0
     */
    ast: AST.Type, 
    /**
     * @since 3.10.0
     */
    message?: string | undefined);
}
/**
 * Error that contains multiple issues.
 *
 * @category model
 * @since 3.10.0
 */
export declare class Composite {
    readonly ast: AST.AST;
    readonly actual: unknown;
    readonly issues: SingleOrNonEmpty<ParseIssue>;
    readonly output?: unknown | undefined;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Composite";
    constructor(ast: AST.AST, actual: unknown, issues: SingleOrNonEmpty<ParseIssue>, output?: unknown | undefined);
}
/**
 * Error that occurs when a refinement has an error.
 *
 * @category model
 * @since 3.10.0
 */
export declare class Refinement {
    readonly ast: AST.Refinement;
    readonly actual: unknown;
    readonly kind: "From" | "Predicate";
    readonly issue: ParseIssue;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Refinement";
    constructor(ast: AST.Refinement, actual: unknown, kind: "From" | "Predicate", issue: ParseIssue);
}
/**
 * Error that occurs when a transformation has an error.
 *
 * @category model
 * @since 3.10.0
 */
export declare class Transformation {
    readonly ast: AST.Transformation;
    readonly actual: unknown;
    readonly kind: "Encoded" | "Transformation" | "Type";
    readonly issue: ParseIssue;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Transformation";
    constructor(ast: AST.Transformation, actual: unknown, kind: "Encoded" | "Transformation" | "Type", issue: ParseIssue);
}
/**
 * The `Type` variant of the `ParseIssue` type represents an error that occurs when the `actual` value is not of the expected type.
 * The `ast` field specifies the expected type, and the `actual` field contains the value that caused the error.
 *
 * @category model
 * @since 3.10.0
 */
export declare class Type {
    readonly ast: AST.AST;
    readonly actual: unknown;
    readonly message?: string | undefined;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Type";
    constructor(ast: AST.AST, actual: unknown, message?: string | undefined);
}
/**
 * The `Forbidden` variant of the `ParseIssue` type represents a forbidden operation, such as when encountering an Effect that is not allowed to execute (e.g., using `runSync`).
 *
 * @category model
 * @since 3.10.0
 */
export declare class Forbidden {
    readonly ast: AST.AST;
    readonly actual: unknown;
    readonly message?: string | undefined;
    /**
     * @since 3.10.0
     */
    readonly _tag = "Forbidden";
    constructor(ast: AST.AST, actual: unknown, message?: string | undefined);
}
/**
 * @category type id
 * @since 3.10.0
 */
export declare const ParseErrorTypeId: unique symbol;
/**
 * @category type id
 * @since 3.10.0
 */
export type ParseErrorTypeId = typeof ParseErrorTypeId;
/**
 * @since 3.10.0
 */
export declare const isParseError: (u: unknown) => u is ParseError;
declare const ParseError_base: new <A extends Record<string, any> = {}>(args: import("./Types.js").VoidIfEmpty<{ readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }>) => Cause.YieldableError & {
    readonly _tag: "ParseError";
} & Readonly<A>;
/**
 * @since 3.10.0
 */
export declare class ParseError extends ParseError_base<{
    readonly issue: ParseIssue;
}> {
    /**
     * @since 3.10.0
     */
    readonly [ParseErrorTypeId]: symbol;
    get message(): string;
    /**
     * @since 3.10.0
     */
    toString(): string;
    /**
     * @since 3.10.0
     */
    toJSON(): {
        _id: string;
        message: string;
    };
    /**
     * @since 3.10.0
     */
    [Inspectable.NodeInspectSymbol](): {
        _id: string;
        message: string;
    };
}
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const parseError: (issue: ParseIssue) => ParseError;
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const succeed: <A>(a: A) => Either.Either<A, ParseIssue>;
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const fail: (issue: ParseIssue) => Either.Either<never, ParseIssue>;
declare const _try: <A>(options: {
    try: LazyArg<A>;
    catch: (e: unknown) => ParseIssue;
}) => Either.Either<A, ParseIssue>;
export { 
/**
 * @category constructors
 * @since 3.10.0
 */
_try as try };
/**
 * @category constructors
 * @since 3.10.0
 */
export declare const fromOption: {
    /**
     * @category constructors
     * @since 3.10.0
     */
    (onNone: () => ParseIssue): <A>(self: Option.Option<A>) => Either.Either<A, ParseIssue>;
    /**
     * @category constructors
     * @since 3.10.0
     */
    <A>(self: Option.Option<A>, onNone: () => ParseIssue): Either.Either<A, ParseIssue>;
};
/**
 * @category optimisation
 * @since 3.10.0
 */
export declare const flatMap: {
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <A, B, E1, R1>(f: (a: A) => Effect.Effect<B, E1, R1>): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E1 | E, R1 | R>;
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <A, E, R, B, E1, R1>(self: Effect.Effect<A, E, R>, f: (a: A) => Effect.Effect<B, E1, R1>): Effect.Effect<B, E | E1, R | R1>;
};
/**
 * @category optimisation
 * @since 3.10.0
 */
export declare const map: {
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <A, B>(f: (a: A) => B): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E, R>;
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <A, E, R, B>(self: Effect.Effect<A, E, R>, f: (a: A) => B): Effect.Effect<B, E, R>;
};
/**
 * @category optimisation
 * @since 3.10.0
 */
export declare const mapError: {
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <E, E2>(f: (e: E) => E2): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E2, R>;
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <A, E, R, E2>(self: Effect.Effect<A, E, R>, f: (e: E) => E2): Effect.Effect<A, E2, R>;
};
/**
 * @category optimisation
 * @since 3.10.0
 */
export declare const eitherOrUndefined: <A, E, R>(self: Effect.Effect<A, E, R>) => Either.Either<A, E> | undefined;
/**
 * @category optimisation
 * @since 3.10.0
 */
export declare const mapBoth: {
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <E, E2, A, A2>(options: {
        readonly onFailure: (e: E) => E2;
        readonly onSuccess: (a: A) => A2;
    }): <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2, R>;
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <A, E, R, E2, A2>(self: Effect.Effect<A, E, R>, options: {
        readonly onFailure: (e: E) => E2;
        readonly onSuccess: (a: A) => A2;
    }): Effect.Effect<A2, E2, R>;
};
/**
 * @category optimisation
 * @since 3.10.0
 */
export declare const orElse: {
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <E, A2, E2, R2>(f: (e: E) => Effect.Effect<A2, E2, R2>): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A, E2, R2 | R>;
    /**
     * @category optimisation
     * @since 3.10.0
     */
    <A, E, R, A2, E2, R2>(self: Effect.Effect<A, E, R>, f: (e: E) => Effect.Effect<A2, E2, R2>): Effect.Effect<A2 | A, E2, R2 | R>;
};
/**
 * @since 3.10.0
 */
export type DecodeUnknown<Out, R> = (u: unknown, options?: AST.ParseOptions) => Effect.Effect<Out, ParseIssue, R>;
/**
 * @since 3.10.0
 */
export type DeclarationDecodeUnknown<Out, R> = (u: unknown, options: AST.ParseOptions, ast: AST.Declaration) => Effect.Effect<Out, ParseIssue, R>;
/**
 * @throws `ParseError`
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeUnknownSync: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => A;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeUnknownOption: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Option.Option<A>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeUnknownEither: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Either.Either<A, ParseIssue>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeUnknownPromise: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Promise<A>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeUnknown: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Effect.Effect<A, ParseIssue, R>;
/**
 * @throws `ParseError`
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeUnknownSync: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => I;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeUnknownOption: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Option.Option<I>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeUnknownEither: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Either.Either<I, ParseIssue>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeUnknownPromise: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Promise<I>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeUnknown: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Effect.Effect<I, ParseIssue, R>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeSync: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (i: I, overrideOptions?: AST.ParseOptions) => A;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeOption: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (i: I, overrideOptions?: AST.ParseOptions) => Option.Option<A>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodeEither: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (i: I, overrideOptions?: AST.ParseOptions) => Either.Either<A, ParseIssue>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decodePromise: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (i: I, overrideOptions?: AST.ParseOptions) => Promise<A>;
/**
 * @category decoding
 * @since 3.10.0
 */
export declare const decode: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (i: I, overrideOptions?: AST.ParseOptions) => Effect.Effect<A, ParseIssue, R>;
/**
 * @throws `ParseError`
 * @category validation
 * @since 3.10.0
 */
export declare const validateSync: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => A;
/**
 * @category validation
 * @since 3.10.0
 */
export declare const validateOption: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Option.Option<A>;
/**
 * @category validation
 * @since 3.10.0
 */
export declare const validateEither: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Either.Either<A, ParseIssue>;
/**
 * @category validation
 * @since 3.10.0
 */
export declare const validatePromise: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => Promise<A>;
/**
 * @category validation
 * @since 3.10.0
 */
export declare const validate: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (a: unknown, overrideOptions?: AST.ParseOptions) => Effect.Effect<A, ParseIssue, R>;
/**
 * By default the option `exact` is set to `true`.
 *
 * @category validation
 * @since 3.10.0
 */
export declare const is: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions | number) => u is A;
/**
 * By default the option `exact` is set to `true`.
 *
 * @throws `ParseError`
 * @category validation
 * @since 3.10.0
 */
export declare const asserts: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (u: unknown, overrideOptions?: AST.ParseOptions) => asserts u is A;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeSync: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (a: A, overrideOptions?: AST.ParseOptions) => I;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeOption: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (input: A, overrideOptions?: AST.ParseOptions) => Option.Option<I>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodeEither: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (a: A, overrideOptions?: AST.ParseOptions) => Either.Either<I, ParseIssue>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encodePromise: <A, I>(schema: Schema.Schema<A, I, never>, options?: AST.ParseOptions) => (a: A, overrideOptions?: AST.ParseOptions) => Promise<I>;
/**
 * @category encoding
 * @since 3.10.0
 */
export declare const encode: <A, I, R>(schema: Schema.Schema<A, I, R>, options?: AST.ParseOptions) => (a: A, overrideOptions?: AST.ParseOptions) => Effect.Effect<I, ParseIssue, R>;
/**
 * @category formatting
 * @since 3.10.0
 */
export interface ParseResultFormatter<A> {
    readonly formatIssue: (issue: ParseIssue) => Effect.Effect<A>;
    readonly formatIssueSync: (issue: ParseIssue) => A;
    readonly formatError: (error: ParseError) => Effect.Effect<A>;
    readonly formatErrorSync: (error: ParseError) => A;
}
/**
 * @category formatting
 * @since 3.10.0
 */
export declare const TreeFormatter: ParseResultFormatter<string>;
/**
 * Returns `true` if the value is a `Composite`.
 *
 * @category guards
 * @since 3.10.0
 */
export declare const isComposite: (issue: ParseIssue) => issue is Composite;
/**
 * Represents an issue returned by the {@link ArrayFormatter} formatter.
 *
 * @category model
 * @since 3.10.0
 */
export interface ArrayFormatterIssue {
    /**
     * The tag identifying the type of parse issue.
     */
    readonly _tag: ParseIssue["_tag"];
    /**
     * The path to the property where the issue occurred.
     */
    readonly path: ReadonlyArray<PropertyKey>;
    /**
     * A descriptive message explaining the issue.
     */
    readonly message: string;
}
/**
 * @category formatting
 * @since 3.10.0
 */
export declare const ArrayFormatter: ParseResultFormatter<Array<ArrayFormatterIssue>>;
//# sourceMappingURL=ParseResult.d.ts.map