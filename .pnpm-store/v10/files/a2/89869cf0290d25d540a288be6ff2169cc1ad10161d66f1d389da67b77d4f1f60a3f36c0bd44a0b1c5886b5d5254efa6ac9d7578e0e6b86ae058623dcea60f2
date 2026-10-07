import * as core from "../core/index.cjs";
import { type ZodError } from "./errors.cjs";
export type ZodSafeParseResult<T> = ZodSafeParseSuccess<T> | ZodSafeParseError<T>;
export type ZodSafeParseSuccess<T> = {
    success: true;
    data: T;
    error?: never;
};
export type ZodSafeParseError<T> = {
    success: false;
    data?: never;
    error: ZodError<T>;
};
export declare const parse: <T extends core.$ZodType>(schema: T, value: unknown, _ctx?: core.ParseContext<core.$ZodIssue>, _params?: {
    callee?: core.util.AnyFunc;
    Err?: core.$ZodErrorClass;
}) => core.output<T>;
export declare const parseAsync: <T extends core.$ZodType>(schema: T, value: unknown, _ctx?: core.ParseContext<core.$ZodIssue>, _params?: {
    callee?: core.util.AnyFunc;
    Err?: core.$ZodErrorClass;
}) => Promise<core.output<T>>;
export declare const safeParse: <T extends core.$ZodType>(schema: T, value: unknown, _ctx?: core.ParseContext<core.$ZodIssue>) => ZodSafeParseResult<core.output<T>>;
export declare const safeParseAsync: <T extends core.$ZodType>(schema: T, value: unknown, _ctx?: core.ParseContext<core.$ZodIssue>) => Promise<ZodSafeParseResult<core.output<T>>>;
