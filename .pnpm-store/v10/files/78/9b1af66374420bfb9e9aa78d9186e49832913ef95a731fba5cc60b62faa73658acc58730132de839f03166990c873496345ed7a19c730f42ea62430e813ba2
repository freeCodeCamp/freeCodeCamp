import { type TSchema } from '../types/schema.mjs';
/** Represents a operation to apply Optional to a property */
export interface TOptionalAddAction<Type extends TSchema = TSchema> extends TSchema {
    '~kind': 'OptionalAddAction';
    type: Type;
}
/** Creates an OptionalAddAction. */
export declare function OptionalAddAction<Type extends TSchema>(type: Type): TOptionalAddAction<Type>;
/** Returns true if this value is a OptionalAddAction. */
export declare function IsOptionalAddAction(value: unknown): value is TOptionalAddAction;
/** Represents a operation to remove Optional from a property */
export interface TOptionalRemoveAction<Type extends TSchema = TSchema> extends TSchema {
    '~kind': 'OptionalRemoveAction';
    type: Type;
}
/** Creates a OptionalRemoveAction. */
export declare function OptionalRemoveAction<Type extends TSchema>(type: Type): TOptionalRemoveAction<Type>;
/** Returns true if this value is a OptionalRemoveAction. */
export declare function IsOptionalRemoveAction(value: unknown): value is TOptionalRemoveAction;
