import * as core from "../core/index.js";
import { type ZodError, ZodRealError } from "./errors.js";

export type ZodSafeParseResult<T> = ZodSafeParseSuccess<T> | ZodSafeParseError<T>;
export type ZodSafeParseSuccess<T> = { success: true; data: T; error?: never };
export type ZodSafeParseError<T> = { success: false; data?: never; error: ZodError<T> };

export const parse: <T extends core.$ZodType>(
  schema: T,
  value: unknown,
  _ctx?: core.ParseContext<core.$ZodIssue>,
  _params?: { callee?: core.util.AnyFunc; Err?: core.$ZodErrorClass }
) => core.output<T> = /* @__PURE__ */ core._parse(ZodRealError) as any;

export const parseAsync: <T extends core.$ZodType>(
  schema: T,
  value: unknown,
  _ctx?: core.ParseContext<core.$ZodIssue>,
  _params?: { callee?: core.util.AnyFunc; Err?: core.$ZodErrorClass }
) => Promise<core.output<T>> = /* @__PURE__ */ core._parseAsync(ZodRealError) as any;

export const safeParse: <T extends core.$ZodType>(
  schema: T,
  value: unknown,
  _ctx?: core.ParseContext<core.$ZodIssue>
  // _params?: { callee?: core.util.AnyFunc; Err?: core.$ZodErrorClass }
) => ZodSafeParseResult<core.output<T>> = /* @__PURE__ */ core._safeParse(ZodRealError) as any;

export const safeParseAsync: <T extends core.$ZodType>(
  schema: T,
  value: unknown,
  _ctx?: core.ParseContext<core.$ZodIssue>
) => Promise<ZodSafeParseResult<core.output<T>>> = /* @__PURE__ */ core._safeParseAsync(ZodRealError) as any;
