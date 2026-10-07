import { type IHasher } from "./WASMInterface";
import type { IDataType } from "./util";
/**
 * Calculates xxHash64 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param seedLow Lower 32 bits of the number used to
 *  initialize the internal state of the algorithm (defaults to 0)
 * @param seedHigh Higher 32 bits of the number used to
 *  initialize the internal state of the algorithm (defaults to 0)
 * @returns Computed hash as a hexadecimal string
 */
export declare function xxhash64(data: IDataType, seedLow?: number, seedHigh?: number): Promise<string>;
/**
 * Creates a new xxHash64 hash instance
 * @param seedLow Lower 32 bits of the number used to
 *  initialize the internal state of the algorithm (defaults to 0)
 * @param seedHigh Higher 32 bits of the number used to
 *  initialize the internal state of the algorithm (defaults to 0)
 */
export declare function createXXHash64(seedLow?: number, seedHigh?: number): Promise<IHasher>;
