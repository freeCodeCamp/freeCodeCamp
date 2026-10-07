import { type IHasher } from "./WASMInterface";
import { type IDataType } from "./util";
/**
 * Calculates BLAKE3 hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param bits Number of output bits, which has to be a number
 *             divisible by 8. Defaults to 256.
 * @param key Optional key (string, Buffer or TypedArray). Length should be 32 bytes.
 * @returns Computed hash as a hexadecimal string
 */
export declare function blake3(data: IDataType, bits?: number, key?: IDataType): Promise<string>;
/**
 * Creates a new BLAKE3 hash instance
 * @param bits Number of output bits, which has to be a number
 *             divisible by 8. Defaults to 256.
 * @param key Optional key (string, Buffer or TypedArray). Length should be 32 bytes.
 */
export declare function createBLAKE3(bits?: number, key?: IDataType): Promise<IHasher>;
