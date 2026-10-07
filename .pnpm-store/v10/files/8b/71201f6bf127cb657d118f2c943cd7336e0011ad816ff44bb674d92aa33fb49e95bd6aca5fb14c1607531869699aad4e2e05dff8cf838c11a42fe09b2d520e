import { type IHasher } from "./WASMInterface";
import type { IDataType } from "./util";
/**
 * Calculates CRC-32 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param polynomial Input polynomial (defaults to 0xedb88320, for CRC32C use 0x82f63b78)
 * @returns Computed hash as a hexadecimal string
 */
export declare function crc32(data: IDataType, polynomial?: number): Promise<string>;
/**
 * Creates a new CRC-32 hash instance
 * @param polynomial Input polynomial (defaults to 0xedb88320, for CRC32C use 0x82f63b78)
 */
export declare function createCRC32(polynomial?: number): Promise<IHasher>;
