import type { baggageEntryMetadataSymbol } from './internal/symbol';
/**
 * @since 1.0.0
 */
export interface BaggageEntry {
    /** `String` value of the `BaggageEntry`. */
    value: string;
    /**
     * Metadata is an optional string property defined by the W3C baggage specification.
     * It currently has no special meaning defined by the specification.
     */
    metadata?: BaggageEntryMetadata;
}
/**
 * Serializable Metadata defined by the W3C baggage specification.
 * It currently has no special meaning defined by the OpenTelemetry or W3C.
 *
 * @since 1.0.0
 */
export type BaggageEntryMetadata = {
    toString(): string;
} & {
    __TYPE__: typeof baggageEntryMetadataSymbol;
};
/**
 * Baggage represents collection of key-value pairs with optional metadata.
 * Each key of Baggage is associated with exactly one value.
 * Baggage may be used to annotate and enrich telemetry data.
 *
 * @since 1.0.0
 */
export interface Baggage {
    /**
     * Get an entry from Baggage if it exists
     *
     * @param key The key which identifies the BaggageEntry
     */
    getEntry(key: string): BaggageEntry | undefined;
    /**
     * Get a list of all entries in the Baggage
     */
    getAllEntries(): [string, BaggageEntry][];
    /**
     * Returns a new baggage with the entries from the current bag and the specified entry
     *
     * @param key string which identifies the baggage entry
     * @param entry BaggageEntry for the given key
     */
    setEntry(key: string, entry: BaggageEntry): Baggage;
    /**
     * Returns a new baggage with the entries from the current bag except the removed entry
     *
     * @param key key identifying the entry to be removed
     */
    removeEntry(key: string): Baggage;
    /**
     * Returns a new baggage with the entries from the current bag except the removed entries
     *
     * @param key keys identifying the entries to be removed
     */
    removeEntries(...key: string[]): Baggage;
    /**
     * Returns a new baggage with no entries
     */
    clear(): Baggage;
}
//# sourceMappingURL=types.d.ts.map