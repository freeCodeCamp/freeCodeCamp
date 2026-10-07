import { EnsureFunction, EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

type IterableEnsureOptions = { ensureItem?: EnsureFunction, allowString?: boolean, denyEmpty?: boolean};


declare function ensureIterable<T>(value: any, options?: IterableEnsureOptions & EnsureBaseOptions): T[];
declare function ensureIterable<T>(value: any, options?: IterableEnsureOptions & EnsureBaseOptions & EnsureIsOptional): T[] | null;
declare function ensureIterable<T>(value: any, options?: IterableEnsureOptions & EnsureBaseOptions & EnsureIsOptional & EnsureDefault<T[]>): T[];

export default ensureIterable;
