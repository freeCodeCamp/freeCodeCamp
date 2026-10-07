import { type TProperties, type TSchema } from '../type/index.mjs';
import { Validator } from './validator.mjs';
/** Compiles a type into a high performance Validator */
export declare function Compile<const Type extends TSchema, Result extends Validator = Validator<{}, Type>>(type: Type): Result;
/** Compiles a type into a high performance Validator */
export declare function Compile<Context extends TProperties, const Type extends TSchema, Result extends Validator = Validator<Context, Type>>(context: Context, type: Type): Result;
