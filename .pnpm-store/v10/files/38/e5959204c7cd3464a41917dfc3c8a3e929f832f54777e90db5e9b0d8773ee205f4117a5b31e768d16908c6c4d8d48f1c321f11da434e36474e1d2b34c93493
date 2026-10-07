import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TGeneric } from '../../types/generic.mjs';
import { type TRef } from '../../types/ref.mjs';
import { type TParameter } from '../../types/parameter.mjs';
import { type TNever } from '../../types/never.mjs';
type TFromNotResolvable = ([
    '(not-resolvable)',
    TNever
]);
type TFromNotGeneric = ([
    '(not-generic)',
    TNever
]);
type TFromGeneric<Name extends string, Parameters extends TParameter[], Expression extends TSchema> = ([
    Name,
    TGeneric<Parameters, Expression>
]);
type TFromRef<Context extends TProperties, Ref extends string, Arguments extends TSchema[]> = (Ref extends keyof Context ? TFromType<Context, Ref, Context[Ref], Arguments> : TFromNotResolvable);
type TFromType<Context extends TProperties, Name extends string, Type extends TSchema, Arguments extends TSchema[]> = (Type extends TGeneric<infer Parameters extends TParameter[], infer Expression extends TSchema> ? TFromGeneric<Name, Parameters, Expression> : Type extends TRef<infer Ref extends string> ? TFromRef<Context, Ref, Arguments> : TFromNotGeneric);
/** Resolves a named generic target from the context, or returns TNever if it cannot be resolved or is not generic. */
export type TResolveTarget<Context extends TProperties, Target extends TSchema, Arguments extends TSchema[], Result extends [string, TSchema] = TFromType<Context, '(anonymous)', Target, Arguments>> = Result;
/** Resolves a named generic target from the context, or returns TNever if it cannot be resolved or is not generic. */
export declare function ResolveTarget<Context extends TProperties, Target extends TSchema, Arguments extends TSchema[]>(context: Context, target: Target, arguments_: [...Arguments]): TFromType<Context, '(anonymous)', Target, Arguments>;
export {};
