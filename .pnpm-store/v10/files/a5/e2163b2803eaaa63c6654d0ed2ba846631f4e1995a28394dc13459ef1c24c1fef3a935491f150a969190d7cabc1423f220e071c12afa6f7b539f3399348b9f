export { digest } from 'ohash/crypto';
export { i as isEqual } from './shared/ohash.CMR0vuBX.mjs';

/**
 * Serializes any input value into a string for hashing.
 *
 * This method uses best efforts to generate stable serialized values.
 * However, it is not designed for security purposes.
 * Keep in mind that there is always a chance of intentional collisions caused by user input.
 *
 * @param input any value to serialize
 * @return {string} serialized string value
 */
declare function serialize(input: any): string;

/**
 * Hashes any JS value into a string.
 *
 * The input is first serialized and then hashed.
 *
 * @param input any value to serialize
 * @return {string} hash value
 */
declare function hash(input: any): string;

export { hash, serialize };
