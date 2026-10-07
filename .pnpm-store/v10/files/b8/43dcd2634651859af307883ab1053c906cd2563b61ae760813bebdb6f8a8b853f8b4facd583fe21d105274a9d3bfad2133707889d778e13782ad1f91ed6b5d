import type { IssueData, ZodErrorMap, ZodIssue } from "../ZodError.js";
import type { ZodParsedType } from "./util.js";
export declare const makeIssue: (params: {
    data: any;
    path: (string | number)[];
    errorMaps: ZodErrorMap[];
    issueData: IssueData;
}) => ZodIssue;
export type ParseParams = {
    path: (string | number)[];
    errorMap: ZodErrorMap;
    async: boolean;
};
export type ParsePathComponent = string | number;
export type ParsePath = ParsePathComponent[];
export declare const EMPTY_PATH: ParsePath;
export interface ParseContext {
    readonly common: {
        readonly issues: ZodIssue[];
        readonly contextualErrorMap?: ZodErrorMap | undefined;
        readonly async: boolean;
    };
    readonly path: ParsePath;
    readonly schemaErrorMap?: ZodErrorMap | undefined;
    readonly parent: ParseContext | null;
    readonly data: any;
    readonly parsedType: ZodParsedType;
}
export type ParseInput = {
    data: any;
    path: (string | number)[];
    parent: ParseContext;
};
export declare function addIssueToContext(ctx: ParseContext, issueData: IssueData): void;
export type ObjectPair = {
    key: SyncParseReturnType<any>;
    value: SyncParseReturnType<any>;
};
export declare class ParseStatus {
    value: "aborted" | "dirty" | "valid";
    dirty(): void;
    abort(): void;
    static mergeArray(status: ParseStatus, results: SyncParseReturnType<any>[]): SyncParseReturnType;
    static mergeObjectAsync(status: ParseStatus, pairs: {
        key: ParseReturnType<any>;
        value: ParseReturnType<any>;
    }[]): Promise<SyncParseReturnType<any>>;
    static mergeObjectSync(status: ParseStatus, pairs: {
        key: SyncParseReturnType<any>;
        value: SyncParseReturnType<any>;
        alwaysSet?: boolean;
    }[]): SyncParseReturnType;
}
export interface ParseResult {
    status: "aborted" | "dirty" | "valid";
    data: any;
}
export type INVALID = {
    status: "aborted";
};
export declare const INVALID: INVALID;
export type DIRTY<T> = {
    status: "dirty";
    value: T;
};
export declare const DIRTY: <T>(value: T) => DIRTY<T>;
export type OK<T> = {
    status: "valid";
    value: T;
};
export declare const OK: <T>(value: T) => OK<T>;
export type SyncParseReturnType<T = any> = OK<T> | DIRTY<T> | INVALID;
export type AsyncParseReturnType<T> = Promise<SyncParseReturnType<T>>;
export type ParseReturnType<T> = SyncParseReturnType<T> | AsyncParseReturnType<T>;
export declare const isAborted: (x: ParseReturnType<any>) => x is INVALID;
export declare const isDirty: <T>(x: ParseReturnType<T>) => x is OK<T> | DIRTY<T>;
export declare const isValid: <T>(x: ParseReturnType<T>) => x is OK<T>;
export declare const isAsync: <T>(x: ParseReturnType<T>) => x is AsyncParseReturnType<T>;
