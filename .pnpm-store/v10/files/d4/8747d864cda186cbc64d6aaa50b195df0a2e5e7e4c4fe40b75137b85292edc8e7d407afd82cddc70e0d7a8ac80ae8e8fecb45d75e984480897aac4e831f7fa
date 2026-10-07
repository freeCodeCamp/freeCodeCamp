/// <reference types="node" />
import objectSorter from './objectSorter';
import { BinaryToTextEncoding } from 'crypto';
declare namespace hasher {
    /**
     * Object hasher options
     */
    interface HasherOptions extends objectSorter.SorterOptions {
        /**
         * Hash algorithm to use
         * @default 'sha256'
         */
        alg?: string;
        /**
         * String encoding for hash
         * @default 'hex'
         */
        enc?: BinaryToTextEncoding;
    }
    /**
     * If object implements Hashable interface then value from toHash
     * will be used for hash function. It means that the different objects
     * with the function toHash that return the same value will have the same hash
     */
    interface Hashable {
        toHashableString: () => string;
    }
    interface Hasher {
        /**
         * Create hash of an object
         * @param object source object
         * @returns hash string of an object
         */
        hash(object: Hashable | any, opts?: hasher.HasherOptions): string;
        /**
         * Create sorted string from an object
         * @param object source object
         * @returns sorted string from an object
         */
        sort(object: any): string;
        /**
         * Create sorted string from an object
         * @param object source object
         * @returns sorted string from an object
         * @alias sort
         */
        sortObject(object: any): string;
    }
}
/**
 * Hasher constructor
 * @param options hasher options
 * @return hasher instance
 */
declare function hasher(options?: hasher.HasherOptions): hasher.Hasher;
export = hasher;
//# sourceMappingURL=hasher.d.ts.map