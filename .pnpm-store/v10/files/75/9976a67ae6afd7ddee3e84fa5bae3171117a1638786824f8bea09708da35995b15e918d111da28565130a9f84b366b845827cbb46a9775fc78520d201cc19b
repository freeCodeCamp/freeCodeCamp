import { EnsureFunction, EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

declare function ensureConstructor(value: any, options?: EnsureBaseOptions): EnsureFunction | object;
declare function ensureConstructor(value: any, options?: EnsureBaseOptions & EnsureIsOptional): EnsureFunction | object | null;
declare function ensureConstructor(value: any, options?: EnsureBaseOptions & EnsureIsOptional & EnsureDefault<EnsureFunction | object>): EnsureFunction | object;

export default ensureConstructor;
