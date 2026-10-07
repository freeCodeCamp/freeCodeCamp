import { type IHasher } from "./WASMInterface";
import type { IDataType } from "./util";
type IValidBits = 224 | 256 | 384 | 512;
/**
 * Calculates Keccak hash
 * @param data Input data (string, Buffer or TypedArray)
 * @param bits Number of output bits. Valid values: 224, 256, 384, 512
 * @returns Computed hash as a hexadecimal string
 */
export declare function keccak(data: IDataType, bits?: IValidBits): Promise<string>;
/**
 * Creates a new Keccak hash instance
 * @param bits Number of output bits. Valid values: 224, 256, 384, 512
 */
export declare function createKeccak(bits?: IValidBits): Promise<IHasher>;
export {};
