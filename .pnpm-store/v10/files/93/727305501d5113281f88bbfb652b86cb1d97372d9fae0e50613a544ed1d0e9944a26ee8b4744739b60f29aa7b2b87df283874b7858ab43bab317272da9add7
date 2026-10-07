import { EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

declare function ensureObject(value: any, options?: EnsureBaseOptions): object;
declare function ensureObject(value: any, options?: EnsureBaseOptions & EnsureIsOptional): object | null;
declare function ensureObject(value: any, options?: EnsureBaseOptions & EnsureIsOptional & EnsureDefault<object>): object;

export default ensureObject;
