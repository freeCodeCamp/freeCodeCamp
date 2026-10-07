import { type TUnreachable } from '../../../system/unreachable/index.mjs';
import { type TReadonly, type TReadonlyAdd, type TReadonlyRemove } from '../../types/_readonly.mjs';
import { type TOptional, type TOptionalAdd, type TOptionalRemove } from '../../types/_optional.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TNever } from '../../types/never.mjs';
import { type TTuple } from '../../types/tuple.mjs';
import { type TTupleElementsToProperties } from '../tuple/to_object.mjs';
import { type TEvaluateIntersect } from './evaluate.mjs';
type TIsReadonlyProperty<Left extends TSchema, Right extends TSchema> = (Left extends TReadonly<Left> ? Right extends TReadonly<Right> ? true : false : false);
type TIsOptionalProperty<Left extends TSchema, Right extends TSchema> = (Left extends TOptional<Left> ? Right extends TOptional<Right> ? true : false : false);
type TCompositeProperty<Left extends TSchema, Right extends TSchema, IsReadonly extends boolean = TIsReadonlyProperty<Left, Right>, IsOptional extends boolean = TIsOptionalProperty<Left, Right>, Evaluated extends TSchema = TEvaluateIntersect<[Left, Right]>, Property extends TSchema = TReadonlyRemove<TOptionalRemove<Evaluated>>> = ([
    IsReadonly,
    IsOptional
] extends [true, true] ? TReadonlyAdd<TOptionalAdd<Property>> : [
    IsReadonly,
    IsOptional
] extends [true, false] ? TReadonlyAdd<Property> : [
    IsReadonly,
    IsOptional
] extends [false, true] ? TOptionalAdd<Property> : Property);
type TCompositePropertyKey<Left extends TProperties, Right extends TProperties, Key extends PropertyKey, Result extends TSchema = (Key extends keyof Left ? Key extends keyof Right ? TCompositeProperty<Left[Key], Right[Key]> : Left[Key] : Key extends keyof Right ? Right[Key] : TNever)> = Result;
type TCompositeProperties<Left extends TProperties, Right extends TProperties, Result extends TProperties = {
    [Key in keyof (Right & Left)]: TCompositePropertyKey<Left, Right, Key>;
}> = Result;
type TGetProperties<Type extends TSchema, Result extends TProperties = (Type extends TObject<infer Properties extends TProperties> ? Properties : Type extends TTuple<infer Types extends TSchema[]> ? TTupleElementsToProperties<Types> : TUnreachable)> = Result;
export type TComposite<Left extends TSchema, Right extends TSchema, LeftProperties extends TProperties = TGetProperties<Left>, RightProperties extends TProperties = TGetProperties<Right>, Properties extends TProperties = TCompositeProperties<LeftProperties, RightProperties>, Result extends TSchema = TObject<Properties>> = Result;
export declare function Composite<Left extends TSchema, Right extends TSchema>(left: Left, right: Right): TComposite<Left, Right>;
export {};
