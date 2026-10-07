import { SpanContext } from '@opentelemetry/api';
/**
 * OpenTelemetry only knows about SAMPLED or NONE decision,
 * but for us it is important to differentiate between unset and unsampled.
 *
 * Both of these are identified as `traceFlags === TracegFlags.NONE`,
 * but we additionally look at a special trace state to differentiate between them.
 */
export declare function getSamplingDecision(spanContext: SpanContext): boolean | undefined;
//# sourceMappingURL=getSamplingDecision.d.ts.map
