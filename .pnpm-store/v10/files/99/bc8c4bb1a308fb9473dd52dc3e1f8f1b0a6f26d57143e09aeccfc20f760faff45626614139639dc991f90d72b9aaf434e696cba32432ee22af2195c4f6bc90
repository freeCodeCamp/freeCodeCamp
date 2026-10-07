import { EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

declare function ensureSet<T>(value: any, options?: EnsureBaseOptions): Set<T>;
declare function ensureSet<T>(value: any, options?: EnsureBaseOptions & EnsureIsOptional): Set<T> | null;
declare function ensureSet<T>(value: any, options?: EnsureBaseOptions & EnsureIsOptional & EnsureDefault<Set<T>>): Set<T>;

export default ensureSet;
