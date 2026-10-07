import { Memory } from '../../../system/memory/index.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TLiteral } from '../../types/literal.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TIdentifier } from '../../types/identifier.mjs';
import { type TTemplateLiteral } from '../../types/template_literal.mjs';
import { type TTemplateLiteralDecode } from '../template_literal/decode.mjs';
import { type TState, type TInstantiateType } from '../instantiate.mjs';
import { type TEvaluateIntersect } from '../evaluate/index.mjs';
import { type TMappedVariants } from './mapped_variants.mjs';
type TCanonicalAs<InstantiatedAs extends TSchema, Result extends TSchema = InstantiatedAs extends TTemplateLiteral<infer Pattern extends string> ? TTemplateLiteralDecode<Pattern> : InstantiatedAs> = Result;
type TMappedVariant<Context extends TProperties, State extends TState, Identifier extends TIdentifier, Variant extends TSchema, As extends TSchema, Property extends TSchema, VariantContext extends TProperties = Memory.TAssign<Context, {
    [_ in Identifier['name']]: Variant;
}>, InstantiatedAs extends TSchema = TInstantiateType<VariantContext, State, As>, CanonicalAs extends TSchema = TCanonicalAs<InstantiatedAs>, InstantiatedProperty extends TSchema = TInstantiateType<VariantContext, State, Property>, Result extends TProperties = CanonicalAs extends TLiteral<string | number> ? {
    [_ in CanonicalAs['const']]: InstantiatedProperty;
} : {}> = Result;
type TMappedProperties<Context extends TProperties, State extends TState, Identifier extends TIdentifier, Variants extends TSchema[], As extends TSchema, Property extends TSchema, Result extends TProperties[] = []> = (Variants extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TMappedProperties<Context, State, Identifier, Right, As, Property, [...Result, TMappedVariant<Context, State, Identifier, Left, As, Property>]> : Result);
type TReduceProperties<Properties extends TProperties[], Result extends TSchema[] = []> = (Properties extends [infer Left extends TProperties, ...infer Right extends TProperties[]] ? TReduceProperties<Right, [...Result, TObject<Left>]> : Result);
export type TMappedOperation<Context extends TProperties, State extends TState, Identifier extends TIdentifier, Type extends TSchema, As extends TSchema, Property extends TSchema, Variants extends TSchema[] = TMappedVariants<Type>, MappedProperties extends TProperties[] = TMappedProperties<Context, State, Identifier, Variants, As, Property>, MappedObjects extends TSchema[] = TReduceProperties<MappedProperties>, Result extends TSchema = TEvaluateIntersect<MappedObjects>> = Result;
export declare function MappedOperation<Context extends TProperties, State extends TState, Identifier extends TIdentifier, Type extends TSchema, As extends TSchema, Property extends TSchema>(context: Context, state: State, identifier: Identifier, type: Type, as: As, property: Property): TMappedOperation<Context, State, Identifier, Type, As, Property>;
export {};
