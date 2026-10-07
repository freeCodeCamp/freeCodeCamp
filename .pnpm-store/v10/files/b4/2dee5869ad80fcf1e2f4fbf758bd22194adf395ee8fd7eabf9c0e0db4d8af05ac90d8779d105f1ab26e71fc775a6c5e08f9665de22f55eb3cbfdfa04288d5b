import { type IDataType } from "./util";
export interface BcryptOptions {
    /**
     * Password to be hashed
     */
    password: IDataType;
    /**
     * Salt (16 bytes long - usually containing random bytes)
     */
    salt: IDataType;
    /**
     * Number of iterations to perform (4 - 31)
     */
    costFactor: number;
    /**
     * Desired output type. Defaults to 'encoded'
     */
    outputType?: "hex" | "binary" | "encoded";
}
interface IBcryptOptionsBinary {
    outputType: "binary";
}
type BcryptReturnType<T> = T extends IBcryptOptionsBinary ? Uint8Array : string;
/**
 * Calculates hash using the bcrypt password-hashing function
 * @returns Computed hash
 */
export declare function bcrypt<T extends BcryptOptions>(options: T): Promise<BcryptReturnType<T>>;
export interface BcryptVerifyOptions {
    /**
     * Password to be verified
     */
    password: IDataType;
    /**
     * A previously generated bcrypt hash in the 'encoded' output format
     */
    hash: string;
}
/**
 * Verifies password using bcrypt password-hashing function
 * @returns True if the encoded hash matches the password
 */
export declare function bcryptVerify(options: BcryptVerifyOptions): Promise<boolean>;
export {};
