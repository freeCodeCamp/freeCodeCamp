import { SourceData } from "./crypto";
/**
 * @public
 *
 * An object that provides a checksum of data provided in chunks to `update`.
 * The checksum may be performed incrementally as chunks are received or all
 * at once when the checksum is finalized, depending on the underlying
 * implementation.
 *
 * It's recommended to compute checksum incrementally to avoid reading the
 * entire payload in memory.
 *
 * A class that implements this interface may accept an optional secret key in its
 * constructor while computing checksum value, when using HMAC. If provided,
 * this secret key would be used when computing checksum.
 */
export interface Checksum {
    /**
     * Constant length of the digest created by the algorithm in bytes.
     */
    digestLength?: number;
    /**
     * Creates a new checksum object that contains a deep copy of the internal
     * state of the current `Checksum` object.
     */
    copy?(): Checksum;
    /**
     * Returns the digest of all of the data passed.
     */
    digest(): Promise<Uint8Array>;
    /**
     * Allows marking a checksum for checksums that support the ability
     * to mark and reset.
     *
     * @param readLimit - The maximum limit of bytes that can be read
     *   before the mark position becomes invalid.
     */
    mark?(readLimit: number): void;
    /**
     * Resets the checksum to its initial value.
     */
    reset(): void;
    /**
     * Adds a chunk of data for which checksum needs to be computed.
     * This can be called many times with new data as it is streamed.
     *
     * Implementations may override this method which passes second param
     * which makes Checksum object stateless.
     *
     * @param chunk - The buffer to update checksum with.
     */
    update(chunk: Uint8Array): void;
}
/**
 * @public
 *
 * A constructor for a Checksum that may be used to calculate an HMAC. Implementing
 * classes should not directly hold the provided key in memory beyond the
 * lexical scope of the constructor.
 */
export interface ChecksumConstructor {
    new (secret?: SourceData): Checksum;
}
