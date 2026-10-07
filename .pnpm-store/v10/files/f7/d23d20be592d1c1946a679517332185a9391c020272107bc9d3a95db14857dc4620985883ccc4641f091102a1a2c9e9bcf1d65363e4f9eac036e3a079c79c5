import { type TSchema } from '../types/schema.mjs';
/** Represents an operation to apply Readonly to a property. */
export interface TReadonlyAddAction<Type extends TSchema = TSchema> extends TSchema {
    '~kind': 'ReadonlyAddAction';
    type: Type;
}
/** Creates a ReadonlyAddAction. */
export declare function ReadonlyAddAction<Type extends TSchema>(type: Type): TReadonlyAddAction<Type>;
/** Returns true if this value is a ReadonlyAddAction. */
export declare function IsReadonlyAddAction(value: unknown): value is TReadonlyAddAction;
/** Represents an action to remove Readonly from a property. */
export interface TReadonlyRemoveAction<Type extends TSchema = TSchema> extends TSchema {
    '~kind': 'ReadonlyRemoveAction';
    type: Type;
}
/** Creates a ReadonlyRemoveAction. */
export declare function ReadonlyRemoveAction<Type extends TSchema>(type: Type): TReadonlyRemoveAction<Type>;
/** Returns true if this value is a ReadonlyRemoveAction. */
export declare function IsReadonlyRemoveAction(value: unknown): value is TReadonlyRemoveAction;
