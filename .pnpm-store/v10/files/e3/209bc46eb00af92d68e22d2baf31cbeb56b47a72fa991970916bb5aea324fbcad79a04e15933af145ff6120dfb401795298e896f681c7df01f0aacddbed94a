import { type TSchema } from './schema.mjs';
/** Removes Optional from the given type. */
export type TOptionalRemove<Type extends TSchema, Result extends TSchema = Type extends TOptional<infer Type extends TSchema> ? Type : Type> = Result;
/** Removes Optional from the given type. */
export declare function OptionalRemove<Type extends TSchema>(type: Type): TOptionalRemove<Type>;
/** Adds Optional to the given type. */
export type TOptionalAdd<Type extends TSchema = TSchema, Result extends TSchema = '~optional' extends keyof Type ? Type : TOptional<Type>> = Result;
/** Adds Optional to the given type. */
export declare function OptionalAdd<Type extends TSchema>(type: Type): TOptionalAdd<Type>;
export type TOptional<Type extends TSchema = TSchema> = (Type & {
    '~optional': true;
});
/** Applies an Optional modifier to the given type. */
export declare function Optional<Type extends TSchema>(type: Type): TOptionalAdd<Type>;
/** Returns true if the given value is TOptional */
export declare function IsOptional(value: unknown): value is TOptional<TSchema>;
