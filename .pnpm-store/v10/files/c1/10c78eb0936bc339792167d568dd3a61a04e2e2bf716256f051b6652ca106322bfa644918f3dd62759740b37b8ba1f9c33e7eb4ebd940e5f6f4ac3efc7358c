import { type TSchema } from './schema.mjs';
export type StaticUnsafe<Type extends unknown> = Type;
/** Represents an Unsafe type. */
export interface TUnsafe<Type extends unknown = unknown> extends TSchema {
    '~unsafe': Type;
}
/** Creates a Unsafe type. */
export declare function Unsafe<Type extends unknown>(schema: TSchema): TUnsafe<Type>;
/** Returns true if the given value is TUnsafe. */
export declare function IsUnsafe(value: unknown): value is TUnsafe;
