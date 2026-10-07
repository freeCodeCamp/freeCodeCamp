import { type TSchema } from './schema.mjs';
/** Removes a Readonly property modifier from the given type. */
export type TReadonlyRemove<Type extends TSchema, Result extends TSchema = Type extends TReadonly<infer Type extends TSchema> ? Type : Type> = Result;
/** Removes a Readonly property modifier from the given type. */
export declare function ReadonlyRemove<Type extends TSchema>(type: Type): TReadonlyRemove<Type>;
/** Adds a Readonly property modifier to the given type. */
export type TReadonlyAdd<Type extends TSchema = TSchema> = ('~readonly' extends keyof Type ? Type : TReadonly<Type>);
/** Adds a Readonly property modifier to the given type. */
export declare function ReadonlyAdd<Type extends TSchema>(type: Type): TReadonlyAdd<Type>;
export type TReadonly<Type extends TSchema = TSchema> = (Type & {
    '~readonly': true;
});
/** Applies an Readonly property modifier to the given type. */
export declare function Readonly<Type extends TSchema>(type: Type): TReadonlyAdd<Type>;
/** Returns true if the given value is a TReadonly */
export declare function IsReadonly(value: unknown): value is TReadonly<TSchema>;
