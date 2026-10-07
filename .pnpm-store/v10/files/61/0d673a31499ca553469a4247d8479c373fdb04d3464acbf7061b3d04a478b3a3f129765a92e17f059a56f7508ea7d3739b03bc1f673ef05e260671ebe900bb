import type { $ZodCheck, $ZodStringFormats } from "./checks.js";
import { $constructor } from "./core.js";
import type { $ZodType } from "./schemas.js";
import * as util from "./util.js";
export interface $ZodIssueBase {
    readonly code?: string;
    readonly input?: unknown;
    readonly path: PropertyKey[];
    readonly message: string;
}
export interface $ZodIssueInvalidType<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_type";
    readonly expected: $ZodType["_zod"]["def"]["type"];
    readonly input: Input;
}
export interface $ZodIssueTooBig<Input = unknown> extends $ZodIssueBase {
    readonly code: "too_big";
    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
    readonly maximum: number | bigint;
    readonly inclusive?: boolean;
    readonly exact?: boolean;
    readonly input: Input;
}
export interface $ZodIssueTooSmall<Input = unknown> extends $ZodIssueBase {
    readonly code: "too_small";
    readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
    readonly minimum: number | bigint;
    /** True if the allowable range includes the minimum */
    readonly inclusive?: boolean;
    /** True if the allowed value is fixed (e.g.` z.length(5)`), not a range (`z.minLength(5)`) */
    readonly exact?: boolean;
    readonly input: Input;
}
export interface $ZodIssueInvalidStringFormat extends $ZodIssueBase {
    readonly code: "invalid_format";
    readonly format: $ZodStringFormats | (string & {});
    readonly pattern?: string;
    readonly input: string;
}
export interface $ZodIssueNotMultipleOf<Input extends number | bigint = number | bigint> extends $ZodIssueBase {
    readonly code: "not_multiple_of";
    readonly divisor: number;
    readonly input: Input;
}
export interface $ZodIssueUnrecognizedKeys extends $ZodIssueBase {
    readonly code: "unrecognized_keys";
    readonly keys: string[];
    readonly input: Record<string, unknown>;
}
export interface $ZodIssueInvalidUnion extends $ZodIssueBase {
    readonly code: "invalid_union";
    readonly errors: $ZodIssue[][];
    readonly input: unknown;
}
export interface $ZodIssueInvalidKey<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_key";
    readonly origin: "map" | "record";
    readonly issues: $ZodIssue[];
    readonly input: Input;
}
export interface $ZodIssueInvalidElement<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_element";
    readonly origin: "map" | "set";
    readonly key: unknown;
    readonly issues: $ZodIssue[];
    readonly input: Input;
}
export interface $ZodIssueInvalidValue<Input = unknown> extends $ZodIssueBase {
    readonly code: "invalid_value";
    readonly values: util.Primitive[];
    readonly input: Input;
}
export interface $ZodIssueCustom extends $ZodIssueBase {
    readonly code: "custom";
    readonly params?: Record<string, any> | undefined;
    readonly input: unknown;
}
export interface $ZodIssueStringCommonFormats extends $ZodIssueInvalidStringFormat {
    format: Exclude<$ZodStringFormats, "regex" | "jwt" | "starts_with" | "ends_with" | "includes">;
}
export interface $ZodIssueStringInvalidRegex extends $ZodIssueInvalidStringFormat {
    format: "regex";
    pattern: string;
}
export interface $ZodIssueStringInvalidJWT extends $ZodIssueInvalidStringFormat {
    format: "jwt";
    algorithm?: string;
}
export interface $ZodIssueStringStartsWith extends $ZodIssueInvalidStringFormat {
    format: "starts_with";
    prefix: string;
}
export interface $ZodIssueStringEndsWith extends $ZodIssueInvalidStringFormat {
    format: "ends_with";
    suffix: string;
}
export interface $ZodIssueStringIncludes extends $ZodIssueInvalidStringFormat {
    format: "includes";
    includes: string;
}
export type $ZodStringFormatIssues = $ZodIssueStringCommonFormats | $ZodIssueStringInvalidRegex | $ZodIssueStringInvalidJWT | $ZodIssueStringStartsWith | $ZodIssueStringEndsWith | $ZodIssueStringIncludes;
export type $ZodIssue = $ZodIssueInvalidType | $ZodIssueTooBig | $ZodIssueTooSmall | $ZodIssueInvalidStringFormat | $ZodIssueNotMultipleOf | $ZodIssueUnrecognizedKeys | $ZodIssueInvalidUnion | $ZodIssueInvalidKey | $ZodIssueInvalidElement | $ZodIssueInvalidValue | $ZodIssueCustom;
export type $ZodIssueCode = $ZodIssue["code"];
export type $ZodRawIssue<T extends $ZodIssueBase = $ZodIssue> = T extends any ? RawIssue<T> : never;
type RawIssue<T extends $ZodIssueBase> = util.Flatten<util.MakePartial<T, "message" | "path"> & {
    /** The input data */
    readonly input?: unknown;
    /** The schema or check that originated this issue. */
    readonly inst?: $ZodType | $ZodCheck;
    /** @deprecated Internal use only. If `true`, Zod will continue executing validation despite this issue. */
    readonly continue?: boolean | undefined;
} & Record<string, any>>;
export interface $ZodErrorMap<T extends $ZodIssueBase = $ZodIssue> {
    (issue: $ZodRawIssue<T>): {
        message: string;
    } | string | undefined | null;
}
export interface $ZodError<T = unknown> extends Error {
    type: T;
    issues: $ZodIssue[];
    _zod: {
        output: T;
        def: $ZodIssue[];
    };
    stack?: string;
    name: string;
}
export declare const $ZodError: $constructor<$ZodError>;
interface $ZodRealError<T = any> extends $ZodError<T> {
}
export declare const $ZodRealError: $constructor<$ZodRealError>;
export type $ZodFlattenedError<T, U = string> = _FlattenedError<T, U>;
type _FlattenedError<T, U = string> = {
    formErrors: U[];
    fieldErrors: {
        [P in keyof T]?: U[];
    };
};
export declare function flattenError<T>(error: $ZodError<T>): _FlattenedError<T>;
export declare function flattenError<T, U>(error: $ZodError<T>, mapper?: (issue: $ZodIssue) => U): _FlattenedError<T, U>;
type _ZodFormattedError<T, U = string> = T extends [any, ...any[]] ? {
    [K in keyof T]?: $ZodFormattedError<T[K], U>;
} : T extends any[] ? {
    [k: number]: $ZodFormattedError<T[number], U>;
} : T extends object ? util.Flatten<{
    [K in keyof T]?: $ZodFormattedError<T[K], U>;
}> : any;
export type $ZodFormattedError<T, U = string> = {
    _errors: U[];
} & util.Flatten<_ZodFormattedError<T, U>>;
export declare function formatError<T>(error: $ZodError<T>): $ZodFormattedError<T>;
export declare function formatError<T, U>(error: $ZodError<T>, mapper?: (issue: $ZodIssue) => U): $ZodFormattedError<T, U>;
export type $ZodErrorTree<T, U = string> = T extends [any, ...any[]] ? {
    errors: U[];
    items?: {
        [K in keyof T]?: $ZodErrorTree<T[K], U>;
    };
} : T extends any[] ? {
    errors: U[];
    items?: Array<$ZodErrorTree<T[number], U>>;
} : T extends object ? {
    errors: U[];
    properties?: {
        [K in keyof T]?: $ZodErrorTree<T[K], U>;
    };
} : {
    errors: U[];
};
export declare function treeifyError<T>(error: $ZodError<T>): $ZodErrorTree<T>;
export declare function treeifyError<T, U>(error: $ZodError<T>, mapper?: (issue: $ZodIssue) => U): $ZodErrorTree<T, U>;
/** Format a ZodError as a human-readable string in the following form.
 *
 * From
 *
 * ```ts
 * ZodError {
 *   issues: [
 *     {
 *       expected: 'string',
 *       code: 'invalid_type',
 *       path: [ 'username' ],
 *       message: 'Invalid input: expected string'
 *     },
 *     {
 *       expected: 'number',
 *       code: 'invalid_type',
 *       path: [ 'favoriteNumbers', 1 ],
 *       message: 'Invalid input: expected number'
 *     }
 *   ];
 * }
 * ```
 *
 * to
 *
 * ```
 * username
 *   ✖ Expected number, received string at "username
 * favoriteNumbers[0]
 *   ✖ Invalid input: expected number
 * ```
 */
export declare function toDotPath(path: (string | number | symbol)[]): string;
interface BaseError {
    issues: $ZodIssueBase[];
}
export declare function prettifyError(error: BaseError): string;
export {};
