import { type TLocalizedValidationError } from '../../error/errors.mjs';
import { type TProperties, type TSchema, type StaticDecode } from '../../type/index.mjs';
import { AssertError } from '../assert/index.mjs';
export declare class DecodeError extends AssertError {
    constructor(value: unknown, errors: TLocalizedValidationError[]);
}
/** Executes Decode callbacks only */
export declare function DecodeUnsafe(context: TProperties, type: TSchema, value: unknown): unknown;
/** Decodes a value with the given type. */
export declare function Decode<const Type extends TSchema>(type: Type, value: unknown): StaticDecode<Type>;
/** Decodes a value with the given type. */
export declare function Decode<Context extends TProperties, const Type extends TSchema>(context: Context, type: Type, value: unknown): StaticDecode<Type, Context>;
