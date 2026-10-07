import * as core from "./core.js";
import * as errors from "./errors.js";
import type * as schemas from "./schemas.js";
import * as util from "./util.js";

export type $ZodErrorClass = { new (issues: errors.$ZodIssue[]): errors.$ZodError };

///////////        METHODS       ///////////
export type $Parse = <T extends schemas.$ZodType>(
  schema: T,
  value: unknown,
  _ctx?: schemas.ParseContext<errors.$ZodIssue>,
  _params?: { callee?: util.AnyFunc; Err?: $ZodErrorClass }
) => core.output<T>;

export const _parse: (_Err: $ZodErrorClass) => $Parse = (_Err) => (schema, value, _ctx, _params) => {
  const ctx: schemas.ParseContextInternal = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new core.$ZodAsyncError();
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())));
    util.captureStackTrace(e, _params?.callee);
    throw e;
  }
  return result.value as core.output<typeof schema>;
};

export const parse: $Parse = /* @__PURE__*/ _parse(errors.$ZodRealError);

export type $ParseAsync = <T extends schemas.$ZodType>(
  schema: T,
  value: unknown,
  _ctx?: schemas.ParseContext<errors.$ZodIssue>,
  _params?: { callee?: util.AnyFunc; Err?: $ZodErrorClass }
) => Promise<core.output<T>>;

export const _parseAsync: (_Err: $ZodErrorClass) => $ParseAsync = (_Err) => async (schema, value, _ctx, params) => {
  const ctx: schemas.ParseContextInternal = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())));
    util.captureStackTrace(e, params?.callee);
    throw e;
  }
  return result.value as core.output<typeof schema>;
};

export const parseAsync: $ParseAsync = /* @__PURE__*/ _parseAsync(errors.$ZodRealError);

export type $SafeParse = <T extends schemas.$ZodType>(
  schema: T,
  value: unknown,
  _ctx?: schemas.ParseContext<errors.$ZodIssue>
) => util.SafeParseResult<core.output<T>>;

export const _safeParse: (_Err: $ZodErrorClass) => $SafeParse = (_Err) => (schema, value, _ctx) => {
  const ctx: schemas.ParseContextInternal = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new core.$ZodAsyncError();
  }

  return result.issues.length
    ? {
        success: false,
        error: new (_Err ?? errors.$ZodError)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))),
      }
    : ({ success: true, data: result.value } as any);
};
export const safeParse: $SafeParse = /* @__PURE__*/ _safeParse(errors.$ZodRealError);

export type $SafeParseAsync = <T extends schemas.$ZodType>(
  schema: T,
  value: unknown,
  _ctx?: schemas.ParseContext<errors.$ZodIssue>
) => Promise<util.SafeParseResult<core.output<T>>>;

export const _safeParseAsync: (_Err: $ZodErrorClass) => $SafeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx: schemas.ParseContextInternal = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) result = await result;

  return result.issues.length
    ? {
        success: false,
        error: new _Err(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))),
      }
    : ({ success: true, data: result.value } as any);
};

export const safeParseAsync: $SafeParseAsync = /* @__PURE__*/ _safeParseAsync(errors.$ZodRealError);
