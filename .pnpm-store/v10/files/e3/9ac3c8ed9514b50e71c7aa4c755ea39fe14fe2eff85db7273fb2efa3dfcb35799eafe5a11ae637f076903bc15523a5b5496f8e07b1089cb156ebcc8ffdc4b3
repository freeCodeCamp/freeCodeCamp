import { type IHasher } from "./WASMInterface";
import type { IDataType } from "./util";
/**
 * Calculates CRC-64 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param polynomial Input polynomial (defaults to 'c96c5795d7870f42' - ECMA)
 * @returns Computed hash as a hexadecimal string
 */
export declare function crc64(data: IDataType, polynomial?: string): Promise<string>;
/**
 * Creates a new CRC-64 hash instance
 * @param polynomial Input polynomial (defaults to 'c96c5795d7870f42' - ECMA)
 */
export declare function createCRC64(polynomial?: string): Promise<IHasher>;
