import type { Context } from '../context/types';
import type { Span } from './span';
import type { SpanOptions } from './SpanOptions';
import type { Tracer } from './tracer';
import type { TracerOptions } from './tracer_options';
/**
 * Proxy tracer provided by the proxy tracer provider
 *
 * @since 1.0.0
 */
export declare class ProxyTracer implements Tracer {
    private _delegate?;
    private _provider;
    readonly name: string;
    readonly version?: string;
    readonly options?: TracerOptions;
    constructor(provider: TracerDelegator, name: string, version?: string, options?: TracerOptions);
    startSpan(name: string, options?: SpanOptions, context?: Context): Span;
    startActiveSpan<F extends (span: Span) => unknown>(_name: string, _options: F | SpanOptions, _context?: F | Context, _fn?: F): ReturnType<F>;
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    private _getTracer;
}
/**
 * @since 1.0.3
 */
export interface TracerDelegator {
    getDelegateTracer(name: string, version?: string, options?: TracerOptions): Tracer | undefined;
}
//# sourceMappingURL=ProxyTracer.d.ts.map