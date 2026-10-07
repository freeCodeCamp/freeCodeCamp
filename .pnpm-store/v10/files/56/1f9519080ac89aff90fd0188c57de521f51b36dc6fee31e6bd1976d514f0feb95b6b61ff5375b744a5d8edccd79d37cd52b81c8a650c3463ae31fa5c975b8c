import { type TSchema } from '../../types/schema.mjs';
import { type TAny } from '../../types/any.mjs';
import { type TArray } from '../../types/array.mjs';
import { type TAsyncIterator } from '../../types/async_iterator.mjs';
import { type TConstructor } from '../../types/constructor.mjs';
import { type TCyclic } from '../../types/cyclic.mjs';
import { type TFunction } from '../../types/function.mjs';
import { type TIntersect } from '../../types/intersect.mjs';
import { type TIterator } from '../../types/iterator.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TPromise } from '../../types/promise.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TRecord } from '../../types/record.mjs';
import { type TRef } from '../../types/ref.mjs';
import { type TTuple } from '../../types/tuple.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TUnknown } from '../../types/unknown.mjs';
type TFromRef<_Ref extends string> = (TAny);
type TFromProperties<Properties extends TProperties, Result extends TProperties = {
    [Key in keyof Properties]: TFromType<Properties[Key]>;
}> = {
    [Key in keyof Result]: Result[Key];
};
type TFromTypes<Types extends TSchema[], Result extends TSchema[] = []> = Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromTypes<Right, [...Result, TFromType<Left>]> : Result;
type TFromType<Type extends TSchema> = (Type extends TRef<infer Ref extends string> ? TFromRef<Ref> : Type extends TArray<infer Type extends TSchema> ? TArray<TFromType<Type>> : Type extends TAsyncIterator<infer Type extends TSchema> ? TAsyncIterator<TFromType<Type>> : Type extends TConstructor<infer Parameters extends TSchema[], infer InstanceType extends TSchema> ? TFunction<TFromTypes<Parameters>, TFromType<InstanceType>> : Type extends TFunction<infer Parameters extends TSchema[], infer ReturnType extends TSchema> ? TFunction<TFromTypes<Parameters>, TFromType<ReturnType>> : Type extends TIntersect<infer Types extends TSchema[]> ? TIntersect<TFromTypes<Types>> : Type extends TIterator<infer Type extends TSchema> ? TIterator<TFromType<Type>> : Type extends TObject<infer Properties extends TProperties> ? TObject<TFromProperties<Properties>> : Type extends TPromise<infer Type extends TSchema> ? TPromise<TFromType<Type>> : Type extends TRecord<infer Pattern extends string, infer Value extends TSchema> ? TRecord<Pattern, TFromType<Value>> : Type extends TUnion<infer Types extends TSchema[]> ? TUnion<TFromTypes<Types>> : Type extends TTuple<infer Types extends TSchema[]> ? TTuple<TFromTypes<Types>> : Type);
type TCyclicAnyFromParameters<Defs extends TProperties, Ref extends string> = (Ref extends keyof Defs ? TFromType<Defs[Ref]> : TUnknown);
/** Transforms TCyclic TRef's into TAny's. This function is used prior to TExtends checks to enable cyclics to be structurally checked and terminated (with TAny) at first point of recursion, what would otherwise be a recursive TRef.*/
export type TCyclicExtends<Type extends TCyclic, Result extends TSchema = TCyclicAnyFromParameters<Type['$defs'], Type['$ref']>> = Result;
/** Transforms TCyclic TRef's into TAny's. This function is used prior to TExtends checks to enable cyclics to be structurally checked and terminated (with TAny) at first point of recursion, what would otherwise be a recursive TRef.*/
export declare function CyclicExtends<Type extends TCyclic>(type: Type): TCyclicExtends<Type>;
export {};
