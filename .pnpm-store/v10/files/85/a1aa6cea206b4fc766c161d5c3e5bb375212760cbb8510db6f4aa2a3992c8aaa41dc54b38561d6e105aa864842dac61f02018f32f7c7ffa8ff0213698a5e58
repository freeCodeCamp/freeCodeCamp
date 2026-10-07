import { Span } from '../types/span';
import { StartSpanOptions } from '../types/startSpanOptions';
export declare const TRACING_DEFAULTS: {
    idleTimeout: number;
    finalTimeout: number;
    childSpanTimeout: number;
};
interface IdleSpanOptions {
    /**
     * The time that has to pass without any span being created.
     * If this time is exceeded, the idle span will finish.
     */
    idleTimeout: number;
    /**
     * The max. time an idle span may run.
     * If this time is exceeded, the idle span will finish no matter what.
     */
    finalTimeout: number;
    /**
     * The max. time a child span may run.
     * If the time since the last span was started exceeds this time, the idle span will finish.
     */
    childSpanTimeout?: number;
    /**
     * When set to `true`, will disable the idle timeout and child timeout
     * until the `idleSpanEnableAutoFinish` hook is emitted for the idle span.
     * The final timeout mechanism will not be affected by this option,
     * meaning the idle span will definitely be finished when the final timeout is
     * reached, no matter what this option is configured to.
     *
     * Defaults to `false`.
     */
    disableAutoFinish?: boolean;
    /** Allows to configure a hook that is called when the idle span is ended, before it is processed. */
    beforeSpanEnd?: (span: Span) => void;
    /**
     * If set to `true`, the idle span will be trimmed to the latest span end timestamp of its children.
     *
     * @default `true`.
     */
    trimIdleSpanEndTimestamp?: boolean;
}
/**
 * An idle span is a span that automatically finishes. It does this by tracking child spans as activities.
 * An idle span is always the active span.
 */
export declare function startIdleSpan(startSpanOptions: StartSpanOptions, options?: Partial<IdleSpanOptions>): Span;
export {};
//# sourceMappingURL=idleSpan.d.ts.map
