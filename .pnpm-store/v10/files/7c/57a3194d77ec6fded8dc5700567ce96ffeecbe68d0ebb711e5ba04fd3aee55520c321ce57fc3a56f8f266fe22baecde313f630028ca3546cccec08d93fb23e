import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TIdentifier } from '../types/identifier.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TMappedAction } from '../engine/mapped/instantiate.mjs';
/** Creates a deferred Mapped action. */
export type TMappedDeferred<Identifier extends TIdentifier, Type extends TSchema, As extends TSchema, Property extends TSchema> = (TDeferred<'Mapped', [Identifier, Type, As, Property]>);
/** Creates a deferred Mapped action. */
export declare function MappedDeferred<Identifier extends TIdentifier, Type extends TSchema, As extends TSchema, Property extends TSchema>(identifier: Identifier, type: Type, as: As, property: Property, options?: TSchemaOptions): TMappedDeferred<Identifier, Type, As, Property>;
/** Applies a Mapped action using the given types. */
export type TMapped<Identifier extends TIdentifier, Type extends TSchema, As extends TSchema, Property extends TSchema> = (TMappedAction<{}, {
    callstack: [];
}, Identifier, Type, As, Property>);
/** Applies a Mapped action using the given types. */
export declare function Mapped<Identifier extends TIdentifier, Type extends TSchema, As extends TSchema, Property extends TSchema>(identifier: Identifier, type: Type, as: As, property: Property, options?: TSchemaOptions): TMapped<Identifier, Type, As, Property>;
