import { EnsureBaseOptions, EnsureIsOptional, EnsureDefault } from '../ensure';

type LengthwiseObject = { length: number } & object;
type ArrayLikeEnsureOptions = { allowString?: boolean };


declare function ensureArrayLike<T>(value: any, options?: ArrayLikeEnsureOptions & EnsureBaseOptions): T[] | string | LengthwiseObject;
declare function ensureArrayLike<T>(value: any, options?: ArrayLikeEnsureOptions & EnsureBaseOptions & EnsureIsOptional): T[] | string | LengthwiseObject | null;
declare function ensureArrayLike<T>(value: any, options?: ArrayLikeEnsureOptions & EnsureBaseOptions & EnsureIsOptional & EnsureDefault<T[] | string | LengthwiseObject>): T[] | string | LengthwiseObject;

export default ensureArrayLike;
