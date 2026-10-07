import type { Baggage, BaggageEntry, BaggageEntryMetadata } from '@opentelemetry/api';
type ParsedBaggageKeyValue = {
    key: string;
    value: string;
    metadata: BaggageEntryMetadata | undefined;
};
export declare function serializeKeyPairs(keyPairs: string[]): string;
export declare function getKeyPairs(baggage: Baggage): string[];
export declare function parsePairKeyValue(entry: string): ParsedBaggageKeyValue | undefined;
/**
 * Parses a single baggage header string into the provided record, applying limits defined in this package.
 * Uses indexOf/substring in a while loop to avoid allocating a full array of split entries.
 * Returns the updated pair count so callers can track totals across multiple header values.
 */
export declare function parseBaggageHeaderString(value: string, baggage: Record<string, BaggageEntry>, count: number, totalSize: number): [count: number, totalSize: number];
/**
 * Parse a string serialized in the baggage HTTP Format (without metadata):
 * https://github.com/w3c/baggage/blob/master/baggage/HTTP_HEADER_FORMAT.md
 */
export declare function parseKeyPairsIntoRecord(value?: string): Record<string, string>;
export {};
//# sourceMappingURL=utils.d.ts.map