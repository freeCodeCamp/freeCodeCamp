import type { Client } from './client';
import type { SentrySpan } from './tracing/sentrySpan';
import type { LegacyCSPReport } from './types/csp';
import type { DsnComponents } from './types/dsn';
import type { EventEnvelope, RawSecurityEnvelope, SessionEnvelope, SpanEnvelope } from './types/envelope';
import type { Event } from './types/event';
import type { SdkInfo } from './types/sdkinfo';
import type { SdkMetadata } from './types/sdkmetadata';
import type { Session, SessionAggregates } from './types/session';
/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 *
 * @internal, exported only for testing
 **/
export declare function _enhanceEventWithSdkInfo(event: Event, newSdkInfo?: SdkInfo): Event;
/** Creates an envelope from a Session */
export declare function createSessionEnvelope(session: Session | SessionAggregates, dsn?: DsnComponents, metadata?: SdkMetadata, tunnel?: string): SessionEnvelope;
/**
 * Create an Envelope from an event.
 */
export declare function createEventEnvelope(event: Event, dsn?: DsnComponents, metadata?: SdkMetadata, tunnel?: string): EventEnvelope;
/**
 * Create envelope from Span item.
 *
 * Takes an optional client and runs spans through `beforeSendSpan` if available.
 */
export declare function createSpanEnvelope(spans: [SentrySpan, ...SentrySpan[]], client?: Client): SpanEnvelope;
/**
 * Create an Envelope from a CSP report.
 */
export declare function createRawSecurityEnvelope(report: LegacyCSPReport, dsn: DsnComponents, tunnel?: string, release?: string, environment?: string): RawSecurityEnvelope;
//# sourceMappingURL=envelope.d.ts.map