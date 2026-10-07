/**
 * Adapter for conversions of the native Uint8Array type.
 * @public
 */
export declare class Uint8ArrayBlobAdapter extends Uint8Array {
    /**
     * @param source - such as a string or Stream.
     * @returns a new Uint8ArrayBlobAdapter extending Uint8Array.
     */
    static fromString(source: string, encoding?: string): Uint8ArrayBlobAdapter;
    /**
     * @param source - Uint8Array to be mutated.
     * @returns the same Uint8Array but with prototype switched to Uint8ArrayBlobAdapter.
     */
    static mutate(source: Uint8Array): Uint8ArrayBlobAdapter;
    /**
     * @param encoding - default 'utf-8'.
     * @returns the blob as string.
     */
    transformToString(encoding?: string): string;
}
