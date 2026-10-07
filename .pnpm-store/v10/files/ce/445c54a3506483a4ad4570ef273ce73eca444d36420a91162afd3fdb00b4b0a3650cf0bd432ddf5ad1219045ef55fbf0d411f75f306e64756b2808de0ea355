import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TProperties } from './properties.mjs';
import { type TObject } from './object.mjs';
import { type TUnknown } from './unknown.mjs';
type CyclicStackLength<Stack extends unknown[], MaxLength extends number, Buffer extends unknown[] = []> = (Stack extends [infer Left, ...infer Right] ? Buffer['length'] extends MaxLength ? false : CyclicStackLength<Right, MaxLength, [...Buffer, Left]> : true);
type CyclicGuard<Stack extends unknown[], Ref extends string> = (Ref extends Stack[number] ? CyclicStackLength<Stack, 2> : true);
type StaticGuardedRef<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Ref extends string, Type extends TSchema> = (CyclicGuard<Stack, Ref> extends true ? StaticType<[...Stack, Ref], Direction, Context, This, Type> : any);
export type StaticRef<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Ref extends string, Target extends TSchema = Ref extends keyof Context ? Context[Ref] : TUnknown, Result extends unknown = Target extends TObject ? StaticType<[], Direction, Context, This, Target> : StaticGuardedRef<Stack, Direction, Context, This, Ref, Target>> = Result;
/** Represents a type reference. */
export interface TRef<Ref extends string = string> extends TSchema {
    '~kind': 'Ref';
    $ref: Ref;
}
/** Creates a Ref type. */
export declare function Ref<Ref extends string>(ref: Ref, options?: TSchemaOptions): TRef<Ref>;
/** Returns true if the given value is TRef. */
export declare function IsRef(value: unknown): value is TRef;
export {};
