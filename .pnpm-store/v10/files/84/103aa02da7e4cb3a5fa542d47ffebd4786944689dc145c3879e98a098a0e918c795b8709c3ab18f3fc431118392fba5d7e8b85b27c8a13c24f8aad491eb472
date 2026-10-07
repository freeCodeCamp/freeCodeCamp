import type { Primitive } from "./helpers/typeAliases.js";
import { util, type ZodParsedType } from "./helpers/util.js";
import type { TypeOf, ZodType } from "./index.js";
type allKeys<T> = T extends any ? keyof T : never;
export type inferFlattenedErrors<T extends ZodType<any, any, any>, U = string> = typeToFlattenedError<TypeOf<T>, U>;
export type typeToFlattenedError<T, U = string> = {
    formErrors: U[];
    fieldErrors: {
        [P in allKeys<T>]?: U[];
    };
};
export declare const ZodIssueCode: {
    invalid_type: "invalid_type";
    invalid_literal: "invalid_literal";
    custom: "custom";
    invalid_union: "invalid_union";
    invalid_union_discriminator: "invalid_union_discriminator";
    invalid_enum_value: "invalid_enum_value";
    unrecognized_keys: "unrecognized_keys";
    invalid_arguments: "invalid_arguments";
    invalid_return_type: "invalid_return_type";
    invalid_date: "invalid_date";
    invalid_string: "invalid_string";
    too_small: "too_small";
    too_big: "too_big";
    invalid_intersection_types: "invalid_intersection_types";
    not_multiple_of: "not_multiple_of";
    not_finite: "not_finite";
};
export type ZodIssueCode = keyof typeof ZodIssueCode;
export type ZodIssueBase = {
    path: (string | number)[];
    message?: string | undefined;
};
export interface ZodInvalidTypeIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_type;
    expected: ZodParsedType;
    received: ZodParsedType;
}
export interface ZodInvalidLiteralIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_literal;
    expected: unknown;
    received: unknown;
}
export interface ZodUnrecognizedKeysIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.unrecognized_keys;
    keys: string[];
}
export interface ZodInvalidUnionIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_union;
    unionErrors: ZodError[];
}
export interface ZodInvalidUnionDiscriminatorIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_union_discriminator;
    options: Primitive[];
}
export interface ZodInvalidEnumValueIssue extends ZodIssueBase {
    received: string | number;
    code: typeof ZodIssueCode.invalid_enum_value;
    options: (string | number)[];
}
export interface ZodInvalidArgumentsIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_arguments;
    argumentsError: ZodError;
}
export interface ZodInvalidReturnTypeIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_return_type;
    returnTypeError: ZodError;
}
export interface ZodInvalidDateIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_date;
}
export type StringValidation = "email" | "url" | "emoji" | "uuid" | "nanoid" | "regex" | "cuid" | "cuid2" | "ulid" | "datetime" | "date" | "time" | "duration" | "ip" | "cidr" | "base64" | "jwt" | "base64url" | {
    includes: string;
    position?: number | undefined;
} | {
    startsWith: string;
} | {
    endsWith: string;
};
export interface ZodInvalidStringIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_string;
    validation: StringValidation;
}
export interface ZodTooSmallIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.too_small;
    minimum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
}
export interface ZodTooBigIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.too_big;
    maximum: number | bigint;
    inclusive: boolean;
    exact?: boolean;
    type: "array" | "string" | "number" | "set" | "date" | "bigint";
}
export interface ZodInvalidIntersectionTypesIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.invalid_intersection_types;
}
export interface ZodNotMultipleOfIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.not_multiple_of;
    multipleOf: number | bigint;
}
export interface ZodNotFiniteIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.not_finite;
}
export interface ZodCustomIssue extends ZodIssueBase {
    code: typeof ZodIssueCode.custom;
    params?: {
        [k: string]: any;
    };
}
export type DenormalizedError = {
    [k: string]: DenormalizedError | string[];
};
export type ZodIssueOptionalMessage = ZodInvalidTypeIssue | ZodInvalidLiteralIssue | ZodUnrecognizedKeysIssue | ZodInvalidUnionIssue | ZodInvalidUnionDiscriminatorIssue | ZodInvalidEnumValueIssue | ZodInvalidArgumentsIssue | ZodInvalidReturnTypeIssue | ZodInvalidDateIssue | ZodInvalidStringIssue | ZodTooSmallIssue | ZodTooBigIssue | ZodInvalidIntersectionTypesIssue | ZodNotMultipleOfIssue | ZodNotFiniteIssue | ZodCustomIssue;
export type ZodIssue = ZodIssueOptionalMessage & {
    fatal?: boolean | undefined;
    message: string;
};
export declare const quotelessJson: (obj: any) => string;
type recursiveZodFormattedError<T> = T extends [any, ...any[]] ? {
    [K in keyof T]?: ZodFormattedError<T[K]>;
} : T extends any[] ? {
    [k: number]: ZodFormattedError<T[number]>;
} : T extends object ? {
    [K in keyof T]?: ZodFormattedError<T[K]>;
} : unknown;
export type ZodFormattedError<T, U = string> = {
    _errors: U[];
} & recursiveZodFormattedError<NonNullable<T>>;
export type inferFormattedError<T extends ZodType<any, any, any>, U = string> = ZodFormattedError<TypeOf<T>, U>;
export declare class ZodError<T = any> extends Error {
    issues: ZodIssue[];
    get errors(): ZodIssue[];
    constructor(issues: ZodIssue[]);
    format(): ZodFormattedError<T>;
    format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>;
    static create: (issues: ZodIssue[]) => ZodError<any>;
    static assert(value: unknown): asserts value is ZodError;
    toString(): string;
    get message(): string;
    get isEmpty(): boolean;
    addIssue: (sub: ZodIssue) => void;
    addIssues: (subs?: ZodIssue[]) => void;
    flatten(): typeToFlattenedError<T>;
    flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>;
    get formErrors(): typeToFlattenedError<T, string>;
}
type stripPath<T extends object> = T extends any ? util.OmitKeys<T, "path"> : never;
export type IssueData = stripPath<ZodIssueOptionalMessage> & {
    path?: (string | number)[];
    fatal?: boolean | undefined;
};
export type ErrorMapCtx = {
    defaultError: string;
    data: any;
};
export type ZodErrorMap = (issue: ZodIssueOptionalMessage, _ctx: ErrorMapCtx) => {
    message: string;
};
export {};
