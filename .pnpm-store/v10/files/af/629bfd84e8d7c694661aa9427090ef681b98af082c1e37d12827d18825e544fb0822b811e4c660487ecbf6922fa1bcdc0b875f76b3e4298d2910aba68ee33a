import type { TProperties, TSchema } from '../../type/index.mjs';
import type { TLocalizedValidationError } from '../../error/index.mjs';
/**
 * Performs an exhaustive Check on the specified value and reports any errors found.
 * If no errors are found, an empty array is returned. Unlike Check, this function
 * does not terminate at the first occurance of an error. For best performance, call
 * Check first and call Errors only if Check returns false.
 */
export declare function Errors<Type extends TSchema>(type: Type, value: unknown): TLocalizedValidationError[];
/**
 * Performs an exhaustive Check on the specified value and reports any errors found.
 * If no errors are found, an empty array is returned. Unlike Check, this function
 * does not terminate at the first occurance of an error. For best performance, call
 * Check first and call Errors only if Check returns false.
 */
export declare function Errors<Context extends TProperties, Type extends TSchema>(context: Context, type: Type, value: unknown): TLocalizedValidationError[];
