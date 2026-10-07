/**
 * @public
 */
export type SourceData = string | ArrayBuffer | ArrayBufferView;
/**
 * @public
 *
 * An object that provides a hash of data provided in chunks to `update`. The
 * hash may be performed incrementally as chunks are received or all at once
 * when the hash is finalized, depending on the underlying implementation.
 *
 * @deprecated use {@link Checksum}
 */
export interface Hash {
    /**
     * Adds a chunk of data to the hash. If a buffer is provided, the `encoding`
     * argument will be ignored. If a string is provided without a specified
     * encoding, implementations must assume UTF-8 encoding.
     *
     * Not all encodings are supported on all platforms, though all must support
     * UTF-8.
     */
    update(toHash: SourceData, encoding?: "utf8" | "ascii" | "latin1"): void;
    /**
     * Finalizes the hash and provides a promise that will be fulfilled with the
     * raw bytes of the calculated hash.
     */
    digest(): Promise<Uint8Array>;
}
/**
 * @public
 *
 * A constructor for a hash that may be used to calculate an HMAC. Implementing
 * classes should not directly hold the provided key in memory beyond the
 * lexical scope of the constructor.
 *
 * @deprecated use {@link ChecksumConstructor}
 */
export interface HashConstructor {
    new (secret?: SourceData): Hash;
}
/**
 * @public
 *
 * A function that calculates the hash of a data stream. Determining the hash
 * will consume the stream, so only replayable streams should be provided to an
 * implementation of this interface.
 */
export interface StreamHasher<StreamType = any> {
    (hashCtor: HashConstructor, stream: StreamType): Promise<Uint8Array>;
}
/**
 * @public
 *
 * A function that returns a promise fulfilled with bytes from a
 * cryptographically secure pseudorandom number generator.
 */
export interface randomValues {
    (byteLength: number): Promise<Uint8Array>;
}
