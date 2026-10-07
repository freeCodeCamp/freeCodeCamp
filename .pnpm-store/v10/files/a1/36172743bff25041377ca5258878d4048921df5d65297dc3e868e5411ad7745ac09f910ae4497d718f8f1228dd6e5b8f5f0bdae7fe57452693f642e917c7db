import { type IHasher } from "./WASMInterface";
import type { IDataType } from "./util";
/**
 * Calculates xxHash32 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param seed Number used to initialize the internal state of the algorithm (defaults to 0)
 * @returns Computed hash as a hexadecimal string
 */
export declare function xxhash32(data: IDataType, seed?: number): Promise<string>;
/**
 * Creates a new xxHash32 hash instance
 * @param data Input data (string, Buffer or TypedArray)
 * @param seed Number used to initialize the internal state of the algorithm (defaults to 0)
 */
export declare function createXXHash32(seed?: number): Promise<IHasher>;
