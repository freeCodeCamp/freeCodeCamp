import { EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

declare function ensureError(value: any, options?: EnsureBaseOptions): Error;
declare function ensureError(value: any, options?: EnsureBaseOptions & EnsureIsOptional): Error | null;
declare function ensureError(value: any, options?: EnsureBaseOptions & EnsureIsOptional & EnsureDefault<Error>): Error;

export default ensureError;
