"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeParseAsync = exports._safeParseAsync = exports.safeParse = exports._safeParse = exports.parseAsync = exports._parseAsync = exports.parse = exports._parse = void 0;
const core = __importStar(require("./core.cjs"));
const errors = __importStar(require("./errors.cjs"));
const util = __importStar(require("./util.cjs"));
const _parse = (_Err) => (schema, value, _ctx, _params) => {
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
exports._parse = _parse;
exports.parse = (0, exports._parse)(errors.$ZodRealError);
const _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
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
exports._parseAsync = _parseAsync;
exports.parseAsync = (0, exports._parseAsync)(errors.$ZodRealError);
const _safeParse = (_Err) => (schema, value, _ctx) => {
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
exports._safeParse = _safeParse;
exports.safeParse = (0, exports._safeParse)(errors.$ZodRealError);
const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
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
exports._safeParseAsync = _safeParseAsync;
exports.safeParseAsync = (0, exports._safeParseAsync)(errors.$ZodRealError);
