import { type IHasher } from "./WASMInterface";
import { type IDataType } from "./util";
/**
 * Calculates BLAKE2b hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param bits Number of output bits, which has to be a number
 *             divisible by 8, between 8 and 512. Defaults to 512.
 * @param key Optional key (string, Buffer or TypedArray). Maximum length is 64 bytes.
 * @returns Computed hash as a hexadecimal string
 */
export declare function blake2b(data: IDataType, bits?: number, key?: IDataType): Promise<string>;
/**
 * Creates a new BLAKE2b hash instance
 * @param bits Number of output bits, which has to be a number
 *             divisible by 8, between 8 and 512. Defaults to 512.
 * @param key Optional key (string, Buffer or TypedArray). Maximum length is 64 bytes.
 */
export declare function createBLAKE2b(bits?: number, key?: IDataType): Promise<IHasher>;
