import type * as Cause from "../Cause.js";
import type * as Effect from "../Effect.js";
import * as Option from "../Option.js";
import * as Tracer from "../Tracer.js";
import type { Unify } from "../Unify.js";
export declare const currentPropagatedSpan: Effect.Effect<Tracer.Span, Cause.NoSuchElementException>;
export declare const filterDisablePropagation: (self: Option.Option<Tracer.AnySpan>) => Option.Option<Tracer.AnySpan>;
export declare const functionWithSpan: <Args extends Array<any>, Ret extends Effect.Effect<any, any, any>>(options: {
    readonly body: (...args: Args) => Ret;
    readonly options: Effect.FunctionWithSpanOptions | ((...args: Args) => Effect.FunctionWithSpanOptions);
    readonly captureStackTrace?: boolean | undefined;
}) => (...args: Args) => Unify<Ret>;
//# sourceMappingURL=core-effect.d.ts.map