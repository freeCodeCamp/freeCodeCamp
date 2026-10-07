/**
 * Returns the `sentry.timestamp.sequence` attribute entry for a serialized telemetry item.
 *
 * The sequence number starts at 0 and increments by 1 for each item captured.
 * It resets to 0 when the current item's integer millisecond timestamp differs
 * from the previous item's integer millisecond timestamp.
 *
 * @param timestampInSeconds - The timestamp of the telemetry item in seconds.
 */
export declare function getSequenceAttribute(timestampInSeconds: number): {
    key: string;
    value: {
        value: number;
        type: 'integer';
    };
};
/**
 * Resets the sequence number state. Only exported for testing purposes.
 */
export declare function _INTERNAL_resetSequenceNumber(): void;
//# sourceMappingURL=timestampSequence.d.ts.map