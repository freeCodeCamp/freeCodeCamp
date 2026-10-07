import { type TLocalizedValidationError } from '../../error/errors.mjs';
import { type TProperties, type TSchema, type StaticEncode } from '../../type/index.mjs';
import { AssertError } from '../assert/index.mjs';
export declare class EncodeError extends AssertError {
    constructor(value: unknown, errors: TLocalizedValidationError[]);
}
/** Executes Encode callbacks only */
export declare function EncodeUnsafe(context: TProperties, type: TSchema, value: unknown): unknown;
/** Encodes a value with the given type. */
export declare function Encode<const Type extends TSchema>(type: Type, value: unknown): StaticEncode<Type>;
/** Encodes a value with the given type. */
export declare function Encode<Context extends TProperties, const Type extends TSchema>(context: Context, type: Type, value: unknown): StaticEncode<Type, Context>;
