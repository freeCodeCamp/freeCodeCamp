import type { Span } from '@opentelemetry/api';
import type { InstrumentationConfig } from '@opentelemetry/instrumentation';
export interface FastifyRequestInfo {
    request: any;
}
/**
 * Function that can be used to add custom attributes to the current span
 * @param span - The Fastify handler span.
 * @param info - The Fastify request info object.
 */
export interface FastifyCustomAttributeFunction {
    (span: Span, info: FastifyRequestInfo): void;
}
/**
 * Options available for the Fastify Instrumentation
 */
export interface FastifyInstrumentationConfig extends InstrumentationConfig {
    /** Function for adding custom attributes to each handler span */
    requestHook?: FastifyCustomAttributeFunction;
}
//# sourceMappingURL=types.d.ts.map