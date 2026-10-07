import type { IHasher } from "./WASMInterface";
import { type IDataType } from "./util";
export interface IPBKDF2Options {
    /**
     * Password (or message) to be hashed
     */
    password: IDataType;
    /**
     * Salt (usually containing random bytes)
     */
    salt: IDataType;
    /**
     * Number of iterations to perform
     */
    iterations: number;
    /**
     * Output size in bytes
     */
    hashLength: number;
    /**
     * Hash algorithm to use. It has to be the return value of a function like createSHA1()
     */
    hashFunction: Promise<IHasher>;
    /**
     * Desired output type. Defaults to 'hex'
     */
    outputType?: "hex" | "binary";
}
interface IPBKDF2OptionsBinary {
    outputType: "binary";
}
type PBKDF2ReturnType<T> = T extends IPBKDF2OptionsBinary ? Uint8Array : string;
/**
 * Generates a new PBKDF2 hash for the supplied password
 */
export declare function pbkdf2<T extends IPBKDF2Options>(options: T): Promise<PBKDF2ReturnType<T>>;
export {};
