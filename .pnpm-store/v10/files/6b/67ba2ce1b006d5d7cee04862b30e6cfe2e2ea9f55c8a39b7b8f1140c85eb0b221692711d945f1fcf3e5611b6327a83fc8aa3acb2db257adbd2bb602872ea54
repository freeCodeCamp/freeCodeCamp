import { EnsureFunction,  EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

type EnsureArrayOptions = { ensureItem?: EnsureFunction };


declare function ensureArray<T>(value: any, options?: EnsureArrayOptions & EnsureBaseOptions): T[];
declare function ensureArray<T>(value: any, options?: EnsureArrayOptions & EnsureBaseOptions & EnsureIsOptional): T[] | null;
declare function ensureArray<T>(value: any, options?: EnsureArrayOptions & EnsureBaseOptions & EnsureIsOptional & EnsureDefault<T[]>): T[];

export default ensureArray;
