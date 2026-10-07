import { EnsureFunction, EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

type PlainObjectEnsureOptions = {allowedKeys?: string[], ensurePropertyValue?: EnsureFunction};


declare function ensurePlainObject(value: any, options?: PlainObjectEnsureOptions & EnsureBaseOptions): object;
declare function ensurePlainObject(value: any, options?: PlainObjectEnsureOptions & EnsureBaseOptions & EnsureIsOptional): object | null;
declare function ensurePlainObject(value: any, options?: PlainObjectEnsureOptions & EnsureBaseOptions & EnsureIsOptional & EnsureDefault<object>): object;

export default ensurePlainObject;
