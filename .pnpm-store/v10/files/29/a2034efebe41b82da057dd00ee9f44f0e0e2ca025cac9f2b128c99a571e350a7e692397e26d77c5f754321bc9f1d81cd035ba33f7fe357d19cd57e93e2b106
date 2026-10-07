"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SugaredTracer = exports.wrapTracer = void 0;
const __1 = require("../../");
const defaultOnException = (e, span) => {
    span.recordException(e);
    span.setStatus({
        code: __1.SpanStatusCode.ERROR,
    });
};
/**
 * return a new SugaredTracer created from the supplied one
 * @param tracer
 */
function wrapTracer(tracer) {
    return new SugaredTracer(tracer);
}
exports.wrapTracer = wrapTracer;
class SugaredTracer {
    constructor(tracer) {
        this._tracer = tracer;
        this.startSpan = tracer.startSpan.bind(this._tracer);
        this.startActiveSpan = tracer.startActiveSpan.bind(this._tracer);
    }
    withActiveSpan(name, arg2, arg3, arg4) {
        const { opts, ctx, fn } = massageParams(arg2, arg3, arg4);
        return this._tracer.startActiveSpan(name, opts, ctx, (span) => handleFn(span, opts, fn));
    }
    withSpan(name, arg2, arg3, arg4) {
        const { opts, ctx, fn } = massageParams(arg2, arg3, arg4);
        const span = this._tracer.startSpan(name, opts, ctx);
        return handleFn(span, opts, fn);
    }
}
exports.SugaredTracer = SugaredTracer;
/**
 * Massages parameters of withSpan and withActiveSpan to allow signature overwrites
 * @param arg
 * @param arg2
 * @param arg3
 */
function massageParams(arg, arg2, arg3) {
    let opts;
    let ctx;
    let fn;
    if (!arg2 && !arg3) {
        fn = arg;
    }
    else if (!arg3) {
        opts = arg;
        fn = arg2;
    }
    else {
        opts = arg;
        ctx = arg2;
        fn = arg3;
    }
    opts = opts !== null && opts !== void 0 ? opts : {};
    ctx = ctx !== null && ctx !== void 0 ? ctx : __1.context.active();
    return { opts, ctx, fn };
}
/**
 * Executes fn, returns results and runs onException in the case of exception to allow overwriting of error handling
 * @param span
 * @param opts
 * @param fn
 */
function handleFn(span, opts, fn) {
    var _a;
    const onException = (_a = opts.onException) !== null && _a !== void 0 ? _a : defaultOnException;
    const errorHandler = (e) => {
        onException(e, span);
        span.end();
        throw e;
    };
    try {
        const ret = fn(span);
        // if fn is an async function, attach a recordException and spanEnd callback to the promise
        if (typeof (ret === null || ret === void 0 ? void 0 : ret.then) === 'function') {
            return ret.then(val => {
                span.end();
                return val;
            }, errorHandler);
        }
        span.end();
        return ret;
    }
    catch (e) {
        // add throw to signal the compiler that this will throw in the inner scope
        throw errorHandler(e);
    }
}
//# sourceMappingURL=SugaredTracer.js.map