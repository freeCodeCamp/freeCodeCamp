import { Attachment } from '../types/attachment';
import { DataCategory } from '../types/datacategory';
import { DsnComponents } from '../types/dsn';
import { AttachmentItem, Envelope, EnvelopeItemType, EventEnvelopeHeaders, SpanItem } from '../types/envelope';
import { Event } from '../types/event';
import { SdkInfo } from '../types/sdkinfo';
import { SdkMetadata } from '../types/sdkmetadata';
import { SpanJSON } from '../types/span';
/**
 * Creates an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
export declare function createEnvelope<E extends Envelope>(headers: E[0], items?: E[1]): E;
/**
 * Add an item to an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
export declare function addItemToEnvelope<E extends Envelope>(envelope: E, newItem: E[1][number]): E;
/**
 * Convenience function to loop through the items and item types of an envelope.
 * (This function was mostly created because working with envelope types is painful at the moment)
 *
 * If the callback returns true, the rest of the items will be skipped.
 */
export declare function forEachEnvelopeItem<E extends Envelope>(envelope: Envelope, callback: (envelopeItem: E[1][number], envelopeItemType: E[1][number][0]['type']) => boolean | void): boolean;
/**
 * Returns true if the envelope contains any of the given envelope item types
 */
export declare function envelopeContainsItemType(envelope: Envelope, types: EnvelopeItemType[]): boolean;
/**
 * Serializes an envelope.
 */
export declare function serializeEnvelope(envelope: Envelope): string | Uint8Array;
/**
 * Parses an envelope
 */
export declare function parseEnvelope(env: string | Uint8Array): Envelope;
/**
 * Creates envelope item for a single span
 */
export declare function createSpanEnvelopeItem(spanJson: Partial<SpanJSON>): SpanItem;
/**
 * Creates attachment envelope items
 */
export declare function createAttachmentEnvelopeItem(attachment: Attachment): AttachmentItem;
/**
 * Maps the type of an envelope item to a data category.
 */
export declare function envelopeItemTypeToDataCategory(type: EnvelopeItemType): DataCategory;
/** Extracts the minimal SDK info from the metadata or an events */
export declare function getSdkMetadataForEnvelopeHeader(metadataOrEvent?: SdkMetadata | Event): SdkInfo | undefined;
/**
 * Creates event envelope headers, based on event, sdk info and tunnel
 * Note: This function was extracted from the core package to make it available in Replay
 */
export declare function createEventEnvelopeHeaders(event: Event, sdkInfo: SdkInfo | undefined, tunnel: string | undefined, dsn?: DsnComponents): EventEnvelopeHeaders;
//# sourceMappingURL=envelope.d.ts.map
