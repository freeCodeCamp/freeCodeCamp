import * as core from "./core.js";
import * as errors from "./errors.js";
import * as util from "./util.js";
export const _parse = (_Err) => (schema, value, _ctx, _params) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
        throw new core.$ZodAsyncError();
    }
    if (result.issues.length) {
        const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())));
        util.captureStackTrace(e, _params?.callee);
        throw e;
    }
    return result.value;
};
export const parse = /* @__PURE__*/ _parse(errors.$ZodRealError);
export const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
        result = await result;
    if (result.issues.length) {
        const e = new (params?.Err ?? _Err)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config())));
        util.captureStackTrace(e, params?.callee);
        throw e;
    }
    return result.value;
};
export const parseAsync = /* @__PURE__*/ _parseAsync(errors.$ZodRealError);
export const _safeParse = (_Err) => (schema, value, _ctx) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
        throw new core.$ZodAsyncError();
    }
    return result.issues.length
        ? {
            success: false,
            error: new (_Err ?? errors.$ZodError)(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))),
        }
        : { success: true, data: result.value };
};
export const safeParse = /* @__PURE__*/ _safeParse(errors.$ZodRealError);
export const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
    const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
        result = await result;
    return result.issues.length
        ? {
            success: false,
            error: new _Err(result.issues.map((iss) => util.finalizeIssue(iss, ctx, core.config()))),
        }
        : { success: true, data: result.value };
};
export const safeParseAsync = /* @__PURE__*/ _safeParseAsync(errors.$ZodRealError);
