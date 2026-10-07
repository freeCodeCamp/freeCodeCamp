import { Client } from '../../client';
import { SpanContainerItem } from '../../types/envelope';
import { Event } from '../../types/event';
/**
 * Extracts gen_ai spans from a transaction event, converts them to span v2 format,
 * and returns them as a SpanContainerItem.
 *
 * Only applies to static mode (non-streaming) transactions.
 *
 * WARNING: This function mutates `event.spans` by removing the extracted gen_ai spans
 * from the array. Call this before creating the event envelope so the transaction
 * item does not include the extracted spans.
 */
export declare function extractGenAiSpansFromEvent(event: Event, client: Client): SpanContainerItem | undefined;
//# sourceMappingURL=extractGenAiSpans.d.ts.map
