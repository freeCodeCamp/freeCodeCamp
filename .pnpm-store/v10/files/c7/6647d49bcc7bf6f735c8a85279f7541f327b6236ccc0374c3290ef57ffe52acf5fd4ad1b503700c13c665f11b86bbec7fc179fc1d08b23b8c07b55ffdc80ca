import { type IHasher } from "./WASMInterface";
import type { IDataType } from "./util";
/**
 * Calculates Adler-32 hash. The resulting 32-bit hash is stored in
 * network byte order (big-endian).
 *
 * @param data Input data (string, Buffer or TypedArray)
 * @returns Computed hash as a hexadecimal string
 */
export declare function adler32(data: IDataType): Promise<string>;
/**
 * Creates a new Adler-32 hash instance
 */
export declare function createAdler32(): Promise<IHasher>;
