type Key = Key[] | string | symbol | number | boolean | Uint8Array;
/** Writes a key (a primitive value) to the target buffer, starting at the given position */
export function writeKey(key: Key, target: Uint8Array, position: number, inSequence?: boolean): number;
/** Reads a key from the provided buffer, from the given range */
export function readKey(buffer: Uint8Array, start: number, end?: number, inSequence?: boolean): Key;
/** Converts key to a Buffer. This is generally much slower than using writeKey since it involves a full buffer allocation, and should be avoided for performance sensitive code. */
export function toBufferKey(key: Key): Buffer;
/** Converts Buffer to Key */
export function fromBufferKey(source: Buffer): Key;
/** Compares two keys, returning -1 if `a` comes before `b` in the ordered binary representation of the keys, or 1 if `a` comes after `b`, or 0 if they are equivalent */
export function compareKeys(a: Key, b: Key): number;
/** The minimum key, with the "first" binary representation (one byte of zero) */
export const MINIMUM_KEY: null
/** A maximum key, with a binary representation after all other JS primitives (one byte of 0xff) */
export const MAXIMUM_KEY: Uint8Array
/** Enables null termination, ensuring that writing keys to buffers will end with a padding of zeros at the end to complete the following 32-bit word */
export function enableNullTermination(): void;
/** An object that holds the functions for encapsulation as a single encoder */
export const encoder: {
	writeKey: typeof writeKey,
	readKey: typeof readKey,
	enableNullTermination: typeof enableNullTermination,
}