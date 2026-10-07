import { type TSchema } from '../types/schema.mjs';
import { type TParameter } from './parameter.mjs';
/** Represents a callable Generic type. */
export interface TGeneric<Parameters extends TParameter[] = TParameter[], Expression extends TSchema = TSchema> extends TSchema {
    '~kind': 'Generic';
    type: 'generic';
    parameters: Parameters;
    expression: Expression;
}
/** Creates a Generic type. */
export declare function Generic<Parameters extends TParameter[], Expression extends TSchema>(parameters: [...Parameters], expression: Expression): TGeneric<Parameters, Expression>;
/** Returns true if the given value is a TGeneric. */
export declare function IsGeneric(value: unknown): value is TGeneric;
