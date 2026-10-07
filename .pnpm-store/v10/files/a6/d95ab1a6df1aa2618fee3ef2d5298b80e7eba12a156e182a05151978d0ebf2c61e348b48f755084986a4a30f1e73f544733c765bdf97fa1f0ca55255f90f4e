import { type IDataType } from "./util";
export interface ScryptOptions {
    /**
     * Password (or message) to be hashed
     */
    password: IDataType;
    /**
     * Salt (usually containing random bytes)
     */
    salt: IDataType;
    /**
     * CPU / memory cost - must be a power of 2 (e.g. 1024)
     */
    costFactor: number;
    /**
     * Block size (8 is commonly used)
     */
    blockSize: number;
    /**
     * Degree of parallelism
     */
    parallelism: number;
    /**
     * Output size in bytes
     */
    hashLength: number;
    /**
     * Output data type. Defaults to hexadecimal string
     */
    outputType?: "hex" | "binary";
}
interface IScryptOptionsBinary {
    outputType: "binary";
}
type ScryptReturnType<T> = T extends IScryptOptionsBinary ? Uint8Array : string;
/**
 * Calculates hash using the scrypt password-based key derivation function
 * @returns Computed hash as a hexadecimal string or as
 *          Uint8Array depending on the outputType option
 */
export declare function scrypt<T extends ScryptOptions>(options: T): Promise<ScryptReturnType<T>>;
export {};
