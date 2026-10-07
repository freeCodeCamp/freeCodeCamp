import { type TSchema } from '../types/schema.mjs';
/** Represents a Rest instruction. */
export interface TRest<Type extends TSchema = TSchema> extends TSchema {
    '~kind': 'Rest';
    type: 'rest';
    items: Type;
}
/** Creates a Rest instruction type. */
export declare function Rest<Type extends TSchema>(type: Type): TRest<Type>;
/** Returns true if the given value is TRest. */
export declare function IsRest(value: unknown): value is TRest;
