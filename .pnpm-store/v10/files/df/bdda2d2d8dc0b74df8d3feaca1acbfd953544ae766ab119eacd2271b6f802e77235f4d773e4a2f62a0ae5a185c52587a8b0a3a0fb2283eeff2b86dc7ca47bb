import { type IDataType } from "./util";
export interface IArgon2Options {
    /**
     * Password (or message) to be hashed
     */
    password: IDataType;
    /**
     * Salt (usually containing random bytes)
     */
    salt: IDataType;
    /**
     * Secret for keyed hashing
     */
    secret?: IDataType;
    /**
     * Number of iterations to perform
     */
    iterations: number;
    /**
     * Degree of parallelism
     */
    parallelism: number;
    /**
     * Amount of memory to be used in kibibytes (1024 bytes)
     */
    memorySize: number;
    /**
     * Output size in bytes
     */
    hashLength: number;
    /**
     * Desired output type. Defaults to 'hex'
     */
    outputType?: "hex" | "binary" | "encoded";
}
interface IArgon2OptionsBinary {
    outputType: "binary";
}
type Argon2ReturnType<T> = T extends IArgon2OptionsBinary ? Uint8Array : string;
/**
 * Calculates hash using the argon2i password-hashing function
 * @returns Computed hash
 */
export declare function argon2i<T extends IArgon2Options>(options: T): Promise<Argon2ReturnType<T>>;
/**
 * Calculates hash using the argon2id password-hashing function
 * @returns Computed hash
 */
export declare function argon2id<T extends IArgon2Options>(options: T): Promise<Argon2ReturnType<T>>;
/**
 * Calculates hash using the argon2d password-hashing function
 * @returns Computed hash
 */
export declare function argon2d<T extends IArgon2Options>(options: T): Promise<Argon2ReturnType<T>>;
export interface Argon2VerifyOptions {
    /**
     * Password to be verified
     */
    password: IDataType;
    /**
     * Secret used on hash creation
     */
    secret?: IDataType;
    /**
     * A previously generated argon2 hash in the 'encoded' output format
     */
    hash: string;
}
/**
 * Verifies password using the argon2 password-hashing function
 * @returns True if the encoded hash matches the password
 */
export declare function argon2Verify(options: Argon2VerifyOptions): Promise<boolean>;
export {};
