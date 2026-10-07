import { type TSchema } from './schema.mjs';
/** Removes Immutable from the given type. */
export type TImmutableRemove<Type extends TSchema, Result extends TSchema = Type extends TImmutable<infer Type extends TSchema> ? Type : Type> = Result;
/** Removes Immutable from the given type. */
export declare function ImmutableRemove<Type extends TSchema>(type: Type): TImmutableRemove<Type>;
/** Adds Immutable to the given type. */
export type TImmutableAdd<Type extends TSchema = TSchema> = ('~immutable' extends keyof Type ? Type : TImmutable<Type>);
/** Adds Immutable to the given type. */
export declare function ImmutableAdd<Type extends TSchema>(type: Type): TImmutableAdd<Type>;
export type TImmutable<Type extends TSchema = TSchema> = (Type & {
    '~immutable': true;
});
/** Applies an Immutable modifier to the given type. */
export declare function Immutable<Type extends TSchema>(type: Type): TImmutableAdd<Type>;
/** Returns true if the given value is a TImmutable */
export declare function IsImmutable(value: unknown): value is TImmutable<TSchema>;
