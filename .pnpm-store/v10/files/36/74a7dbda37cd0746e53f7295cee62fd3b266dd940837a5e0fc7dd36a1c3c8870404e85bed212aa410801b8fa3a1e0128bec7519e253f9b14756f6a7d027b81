import type { Hash } from 'crypto';

declare function hashArray(value: Array<unknown>, hash?: Hash): Hash;

declare function hashObject<T extends object>(value: T, hash?: Hash): Hash;

declare function hashify(
    value: Array<unknown> | object | unknown,
    hash?: Hash,
): Hash;

export default hashify;

export { hashArray, hashObject };
