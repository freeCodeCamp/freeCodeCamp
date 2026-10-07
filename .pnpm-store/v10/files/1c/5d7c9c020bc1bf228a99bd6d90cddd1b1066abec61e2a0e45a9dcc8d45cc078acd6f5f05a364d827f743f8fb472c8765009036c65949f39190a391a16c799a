import { type IHasher } from "./WASMInterface";
import { type IDataType } from "./util";
/**
 * Calculates BLAKE2s hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param bits Number of output bits, which has to be a number
 *             divisible by 8, between 8 and 256. Defaults to 256.
 * @param key Optional key (string, Buffer or TypedArray). Maximum length is 32 bytes.
 * @returns Computed hash as a hexadecimal string
 */
export declare function blake2s(data: IDataType, bits?: number, key?: IDataType): Promise<string>;
/**
 * Creates a new BLAKE2s hash instance
 * @param bits Number of output bits, which has to be a number
 *             divisible by 8, between 8 and 256. Defaults to 256.
 * @param key Optional key (string, Buffer or TypedArray). Maximum length is 32 bytes.
 */
export declare function createBLAKE2s(bits?: number, key?: IDataType): Promise<IHasher>;
