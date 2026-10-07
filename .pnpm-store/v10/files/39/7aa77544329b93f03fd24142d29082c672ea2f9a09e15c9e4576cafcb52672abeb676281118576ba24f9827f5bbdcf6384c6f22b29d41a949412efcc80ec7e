import { type TracingChannelContextWithSpan } from '@sentry/opentelemetry/tracing-channel';
import type { IORedisInstrumentationConfig } from './vendored/types';
/**
 * Subscribe Sentry handlers to node-redis diagnostics_channel events (>= 5.12.0).
 *
 * Uses `@sentry/opentelemetry/tracing-channel` so OTel AsyncLocalStorage context propagates
 * automatically via `bindStore` — without it, spans created in `start` would not become
 * the active context for subsequent operations.
 *
 * Safe on every runtime that exposes `node:diagnostics_channel` (Node, Bun, Deno, Workers).
 * In node-redis < 5.12.0 the channels are never published to, so subscribers are inert and
 * there is no double-instrumentation against the IITM-based patcher (gated to < 5.12.0).
 */
export declare function subscribeRedisDiagnosticChannels(responseHook?: IORedisInstrumentationConfig['responseHook']): void;
export declare function _resetRedisDiagnosticChannelsForTesting(): void;
export type { TracingChannelContextWithSpan };
//# sourceMappingURL=redis-dc-subscriber.d.ts.map