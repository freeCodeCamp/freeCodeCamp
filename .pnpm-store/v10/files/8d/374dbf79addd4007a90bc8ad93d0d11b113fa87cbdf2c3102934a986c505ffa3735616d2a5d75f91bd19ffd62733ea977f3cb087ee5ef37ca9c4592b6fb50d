import { EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

declare function ensurePromise<T>(value: any, options?: EnsureBaseOptions): Promise<T>;
declare function ensurePromise<T>(value: any, options?: EnsureBaseOptions & EnsureIsOptional): Promise<T> | null;
declare function ensurePromise<T>(value: any, options?: EnsureBaseOptions & EnsureIsOptional & EnsureDefault<Promise<T>>): Promise<T>;

export default ensurePromise;
