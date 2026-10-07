import { type TLocalizedValidationError } from '../../error/errors.mjs';
import { type TProperties, type TSchema, type StaticParse } from '../../type/index.mjs';
import { AssertError } from '../assert/index.mjs';
export declare class ParseError extends AssertError {
    constructor(value: unknown, errors: TLocalizedValidationError[]);
}
export declare const Parser: import("../pipeline/pipeline.mjs").PipelineInterface;
/**  Parses a value with the given type. */
export declare function Parse<const Type extends TSchema>(type: Type, value: unknown): StaticParse<Type>;
/**  Parses a value with the given type. */
export declare function Parse<Context extends TProperties, const Type extends TSchema>(context: Context, type: Type, value: unknown): StaticParse<Type, Context>;
