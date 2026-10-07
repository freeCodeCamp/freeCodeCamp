import { EnsureFunction, EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

type ThenableObject = { then: EnsureFunction } & object;


declare function ensureThenable<T>(value: any, options?: EnsureBaseOptions): Promise<T> | ThenableObject;
declare function ensureThenable<T>(value: any, options?: EnsureBaseOptions & EnsureIsOptional): Promise<T> | ThenableObject | null;
declare function ensureThenable<T>(value: any, options?: EnsureBaseOptions & EnsureIsOptional & EnsureDefault<Promise<T> | ThenableObject>): Promise<T> | ThenableObject;

export default ensureThenable;
