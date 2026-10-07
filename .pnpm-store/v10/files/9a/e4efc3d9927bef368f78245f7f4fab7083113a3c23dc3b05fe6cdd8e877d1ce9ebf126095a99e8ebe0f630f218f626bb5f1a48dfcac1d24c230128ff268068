import { Memory } from '../../system/memory/index.mjs';
import * as C from '../action/index.mjs';
import * as T from '../types/index.mjs';
type TIntrinsicOrCall<Target extends string, Parameters extends T.TSchema[]> = ([
    Target,
    Parameters
] extends ['Array', [infer Type extends T.TSchema]] ? T.TArray<Type> : [
    Target,
    Parameters
] extends ['AsyncIterator', [infer Type extends T.TSchema]] ? T.TAsyncIterator<Type> : [
    Target,
    Parameters
] extends ['Promise', [infer Type extends T.TSchema]] ? T.TPromise<Type> : [
    Target,
    Parameters
] extends ['Iterator', [infer Type extends T.TSchema]] ? T.TIterator<Type> : [
    Target,
    Parameters
] extends ['Awaited', [infer Type extends T.TSchema]] ? C.TAwaitedDeferred<Type> : [
    Target,
    Parameters
] extends ['Capitalize', [infer Type extends T.TSchema]] ? C.TCapitalizeDeferred<Type> : [
    Target,
    Parameters
] extends ['ConstructorParameters', [infer Type extends T.TSchema]] ? C.TConstructorParametersDeferred<Type> : [
    Target,
    Parameters
] extends ['Evaluate', [infer Type extends T.TSchema]] ? C.TEvaluateDeferred<Type> : [
    Target,
    Parameters
] extends ['Exclude', [infer Left extends T.TSchema, infer Right extends T.TSchema]] ? C.TExcludeDeferred<Left, Right> : [
    Target,
    Parameters
] extends ['Extract', [infer Left extends T.TSchema, infer Right extends T.TSchema]] ? C.TExtractDeferred<Left, Right> : [
    Target,
    Parameters
] extends ['Index', [infer Type extends T.TSchema, infer Indexer extends T.TSchema]] ? C.TIndexDeferred<Type, Indexer> : [
    Target,
    Parameters
] extends ['InstanceType', [infer Type extends T.TSchema]] ? C.TInstanceTypeDeferred<Type> : [
    Target,
    Parameters
] extends ['KeyOf', [infer Type extends T.TSchema]] ? C.TKeyOfDeferred<Type> : [
    Target,
    Parameters
] extends ['Lowercase', [infer Type extends T.TSchema]] ? C.TLowercaseDeferred<Type> : [
    Target,
    Parameters
] extends ['NonNullable', [infer Type extends T.TSchema]] ? C.TNonNullableDeferred<Type> : [
    Target,
    Parameters
] extends ['Omit', [infer Type extends T.TSchema, infer Indexer extends T.TSchema]] ? C.TOmitDeferred<Type, Indexer> : [
    Target,
    Parameters
] extends ['Options', [infer Type extends T.TSchema, infer Options extends T.TSchema]] ? C.TOptionsDeferred<Type, Options> : [
    Target,
    Parameters
] extends ['Parameters', [infer Type extends T.TSchema]] ? C.TParametersDeferred<Type> : [
    Target,
    Parameters
] extends ['Partial', [infer Type extends T.TSchema]] ? C.TPartialDeferred<Type> : [
    Target,
    Parameters
] extends ['Pick', [infer Type extends T.TSchema, infer Indexer extends T.TSchema]] ? C.TPickDeferred<Type, Indexer> : [
    Target,
    Parameters
] extends ['Readonly', [infer Type extends T.TSchema]] ? C.TReadonlyObjectDeferred<Type> : [
    Target,
    Parameters
] extends ['Record', [infer Key extends T.TSchema, infer Value extends T.TSchema]] ? T.TRecordDeferred<Key, Value> : [
    Target,
    Parameters
] extends ['Required', [infer Type extends T.TSchema]] ? C.TRequiredDeferred<Type> : [
    Target,
    Parameters
] extends ['ReturnType', [infer Type extends T.TSchema]] ? C.TReturnTypeDeferred<Type> : [
    Target,
    Parameters
] extends ['Uncapitalize', [infer Type extends T.TSchema]] ? C.TUncapitalizeDeferred<Type> : [
    Target,
    Parameters
] extends ['Uppercase', [infer Type extends T.TSchema]] ? C.TUppercaseDeferred<Type> : T.TCallConstruct<T.TRef<Target>, Parameters>);
type TDelimitedDecode<Input extends ([unknown, unknown] | unknown)[], Result extends unknown[] = []> = (Input extends [infer Left, ...infer Right] ? Left extends [infer Item, infer _] ? TDelimitedDecode<Right, [...Result, Item]> : TDelimitedDecode<Right, [...Result, Left]> : Result);
type TDelimited<Input extends [unknown, unknown]> = Input extends [infer Left extends unknown[], infer Right extends unknown[]] ? TDelimitedDecode<[...Left, ...Right]> : [];
export type TGenericParameterExtendsEqualsMapping<Input extends [unknown, unknown, unknown, unknown, unknown]> = (Input extends [infer Name extends string, 'extends', infer Extends extends T.TSchema, '=', infer Equals extends T.TSchema] ? T.TParameter<Name, Extends, Equals> : never);
export declare function GenericParameterExtendsEqualsMapping(input: [unknown, unknown, unknown, unknown, unknown]): unknown;
export type TGenericParameterExtendsMapping<Input extends [unknown, unknown, unknown]> = (Input extends [infer Name extends string, 'extends', infer Extends extends T.TSchema] ? T.TParameter<Name, Extends, Extends> : never);
export declare function GenericParameterExtendsMapping(input: [unknown, unknown, unknown]): unknown;
export type TGenericParameterEqualsMapping<Input extends [unknown, unknown, unknown]> = (Input extends [infer Name extends string, '=', infer Equals extends T.TSchema] ? T.TParameter<Name, T.TUnknown, Equals> : never);
export declare function GenericParameterEqualsMapping(input: [unknown, unknown, unknown]): unknown;
export type TGenericParameterIdentifierMapping<Input extends string, Result extends T.TSchema = T.TParameter<Input, T.TUnknown, T.TUnknown>> = Result;
export declare function GenericParameterIdentifierMapping(input: string): unknown;
export type TGenericParameterMapping<Input extends unknown> = (Input);
export declare function GenericParameterMapping(input: unknown): unknown;
export type TGenericParameterListMapping<Input extends [unknown, unknown]> = (TDelimited<Input>);
export declare function GenericParameterListMapping(input: [unknown, unknown]): unknown;
export type TGenericParametersMapping<Input extends [unknown, unknown, unknown]> = (Input extends ['<', infer Parameters extends T.TParameter[], '>'] ? Parameters : never);
export declare function GenericParametersMapping(input: [unknown, unknown, unknown]): unknown;
export type TGenericCallArgumentListMapping<Input extends [unknown, unknown]> = (TDelimited<Input>);
export declare function GenericCallArgumentListMapping(input: [unknown, unknown]): unknown;
export type TGenericCallArgumentsMapping<Input extends [unknown, unknown, unknown]> = (Input extends ['<', infer Arguments extends T.TSchema[], '>'] ? Arguments : never);
export declare function GenericCallArgumentsMapping(input: [unknown, unknown, unknown]): unknown;
export type TGenericCallMapping<Input extends [unknown, unknown], Result = Input extends [infer Ref extends string, infer Arguments extends T.TSchema[]] ? TIntrinsicOrCall<Ref, Arguments> : never> = Result;
export declare function GenericCallMapping(input: [unknown, unknown]): unknown;
export type TOptionalSemiColonMapping<Input extends [unknown] | []> = null;
export declare function OptionalSemiColonMapping(input: [unknown] | []): unknown;
export type TKeywordStringMapping<Input extends 'string'> = (T.TString);
export declare function KeywordStringMapping(input: 'string'): unknown;
export type TKeywordNumberMapping<Input extends 'number'> = (T.TNumber);
export declare function KeywordNumberMapping(input: 'number'): unknown;
export type TKeywordBooleanMapping<Input extends 'boolean'> = (T.TBoolean);
export declare function KeywordBooleanMapping(input: 'boolean'): unknown;
export type TKeywordUndefinedMapping<Input extends 'undefined'> = (T.TUndefined);
export declare function KeywordUndefinedMapping(input: 'undefined'): unknown;
export type TKeywordNullMapping<Input extends 'null'> = (T.TNull);
export declare function KeywordNullMapping(input: 'null'): unknown;
export type TKeywordIntegerMapping<Input extends 'integer'> = (T.TInteger);
export declare function KeywordIntegerMapping(input: 'integer'): unknown;
export type TKeywordBigIntMapping<Input extends 'bigint'> = (T.TBigInt);
export declare function KeywordBigIntMapping(input: 'bigint'): unknown;
export type TKeywordUnknownMapping<Input extends 'unknown'> = (T.TUnknown);
export declare function KeywordUnknownMapping(input: 'unknown'): unknown;
export type TKeywordAnyMapping<Input extends 'any'> = (T.TAny);
export declare function KeywordAnyMapping(input: 'any'): unknown;
export type TKeywordObjectMapping<Input extends 'object'> = (T.TObject<{}>);
export declare function KeywordObjectMapping(input: 'object'): unknown;
export type TKeywordNeverMapping<Input extends 'never'> = (T.TNever);
export declare function KeywordNeverMapping(input: 'never'): unknown;
export type TKeywordSymbolMapping<Input extends 'symbol'> = (T.TSymbol);
export declare function KeywordSymbolMapping(input: 'symbol'): unknown;
export type TKeywordVoidMapping<Input extends 'void'> = (T.TVoid);
export declare function KeywordVoidMapping(input: 'void'): unknown;
export type TKeywordThisMapping<Input extends 'this'> = (T.TThis);
export declare function KeywordThisMapping(input: 'this'): unknown;
export type TKeywordMapping<Input extends unknown> = Input;
export declare function KeywordMapping(input: unknown): unknown;
export type TTemplateInterpolateMapping<Input extends [unknown, unknown, unknown]> = Input extends ['${', infer Type extends T.TSchema, '}'] ? Type : never;
export declare function TemplateInterpolateMapping(input: [unknown, unknown, unknown]): unknown;
export type TTemplateSpanMapping<Input extends string, Result extends T.TSchema = T.TLiteral<Input>> = Result;
export declare function TemplateSpanMapping(input: string): unknown;
export type TTemplateBodyMapping<Input extends [unknown, unknown, unknown] | [unknown]> = (Input extends [infer Text extends T.TSchema, infer Type extends T.TSchema, infer Rest extends T.TSchema[]] ? [Text, Type, ...Rest] : Input extends [infer Text extends T.TSchema] ? [Text] : [
]);
export declare function TemplateBodyMapping(input: [unknown, unknown, unknown] | [unknown]): unknown;
export type TTemplateLiteralTypesMapping<Input extends [unknown, unknown, unknown], Result extends T.TSchema = Input extends ['`', infer Types extends T.TSchema[], '`'] ? Types : []> = Result;
export declare function TemplateLiteralTypesMapping(input: [unknown, unknown, unknown]): unknown;
export type TTemplateLiteralMapping<Input extends unknown> = (Input extends infer Types extends T.TSchema[] ? T.TTemplateLiteralDeferred<Types> : never);
export declare function TemplateLiteralMapping(input: unknown): unknown;
export type TLiteralBigIntMapping<Input extends string> = (Input extends `${infer Value extends bigint}` ? T.TLiteral<Value> : never);
export declare function LiteralBigIntMapping(input: string): unknown;
export type TLiteralBooleanMapping<Input extends 'true' | 'false'> = (Input extends 'true' ? T.TLiteral<true> : T.TLiteral<false>);
export declare function LiteralBooleanMapping(input: 'true' | 'false'): unknown;
export type TLiteralNumberMapping<Input extends string> = (Input extends `${infer Value extends number}` ? T.TLiteral<Value> : never);
export declare function LiteralNumberMapping(input: string): unknown;
export type TLiteralStringMapping<Input extends string> = (Input extends T.TLiteralValue ? T.TLiteral<Input> : never);
export declare function LiteralStringMapping(input: string): unknown;
export type TLiteralMapping<Input extends unknown> = (Input);
export declare function LiteralMapping(input: unknown): unknown;
export type TKeyOfMapping<Input extends [unknown] | []> = (Input extends [unknown] ? true : false);
export declare function KeyOfMapping(input: [unknown] | []): unknown;
type TIndexArrayMappingReduce<Input extends unknown[], Result extends unknown[] = []> = (Input extends [infer Left extends unknown, ...infer Right extends unknown[]] ? Left extends ['[', infer Type extends T.TSchema, ']'] ? TIndexArrayMappingReduce<Right, [...Result, [Type]]> : TIndexArrayMappingReduce<Right, [...Result, []]> : Result);
export type TIndexArrayMapping<Input extends ([unknown, unknown, unknown] | [unknown, unknown])[]> = (Input extends unknown[] ? TIndexArrayMappingReduce<Input> : []);
export declare function IndexArrayMapping(input: ([unknown, unknown, unknown] | [unknown, unknown])[]): unknown;
export type TExtendsMapping<Input extends [unknown, unknown, unknown, unknown, unknown, unknown] | []> = (Input extends ['extends', infer Type extends T.TSchema, '?', infer True extends T.TSchema, ':', infer False extends T.TSchema] ? [Type, True, False] : []);
export declare function ExtendsMapping(input: [unknown, unknown, unknown, unknown, unknown, unknown] | []): unknown;
export type TBaseMapping<Input extends [unknown, unknown, unknown] | unknown> = (Input extends ['(', infer Type extends T.TSchema, ')'] ? Type : Input extends infer Type extends T.TSchema ? Type : never);
export declare function BaseMapping(input: [unknown, unknown, unknown] | unknown): unknown;
type TFactorIndexArray<Type extends T.TSchema, IndexArray extends unknown[]> = (IndexArray extends [infer Left extends T.TSchema[], ...infer Right extends unknown[]] ? (Left extends [infer Indexer extends T.TSchema] ? TFactorIndexArray<C.TIndexDeferred<Type, Indexer>, Right> : Left extends [] ? TFactorIndexArray<T.TArray<Type>, Right> : T.TNever) : Type);
type TFactorExtends<Type extends T.TSchema, Extends extends unknown[]> = (Extends extends [infer Right extends T.TSchema, infer True extends T.TSchema, infer False extends T.TSchema] ? C.TConditionalDeferred<Type, Right, True, False> : Type);
export type TFactorMapping<Input extends [unknown, unknown, unknown, unknown]> = (Input extends [infer KeyOf extends boolean, infer Type extends T.TSchema, infer IndexArray extends unknown[], infer Extend extends unknown[]] ? KeyOf extends true ? TFactorExtends<C.TKeyOfDeferred<TFactorIndexArray<Type, IndexArray>>, Extend> : TFactorExtends<TFactorIndexArray<Type, IndexArray>, Extend> : never);
export declare function FactorMapping(input: [unknown, unknown, unknown, unknown]): unknown;
type TExprBinaryMapping<Left extends T.TSchema, Rest extends unknown[]> = (Rest extends [infer Operator extends unknown, infer Right extends T.TSchema, infer Next extends unknown[]] ? (TExprBinaryMapping<Right, Next> extends infer Schema extends T.TSchema ? (Operator extends '&' ? (Schema extends T.TIntersect<infer Types extends T.TSchema[]> ? T.TIntersect<[Left, ...Types]> : T.TIntersect<[Left, Schema]>) : Operator extends '|' ? (Schema extends T.TUnion<infer Types extends T.TSchema[]> ? T.TUnion<[Left, ...Types]> : T.TUnion<[Left, Schema]>) : never) : never) : Left);
export type TExprTermTailMapping<Input extends [unknown, unknown, unknown] | []> = (Input);
export declare function ExprTermTailMapping(input: [unknown, unknown, unknown] | []): unknown;
export type TExprTermMapping<Input extends [unknown, unknown]> = (Input extends [infer Left extends T.TSchema, infer Rest extends unknown[]] ? TExprBinaryMapping<Left, Rest> : []);
export declare function ExprTermMapping(input: [unknown, unknown]): unknown;
export type TExprTailMapping<Input extends [unknown, unknown, unknown] | []> = (Input);
export declare function ExprTailMapping(input: [unknown, unknown, unknown] | []): unknown;
export type TExprMapping<Input extends [unknown, unknown]> = (Input extends [infer Left extends T.TSchema, infer Rest extends unknown[]] ? TExprBinaryMapping<Left, Rest> : []);
export declare function ExprMapping(input: [unknown, unknown]): unknown;
export type TExprReadonlyMapping<Input extends [unknown, unknown]> = (Input extends ['readonly', infer Type extends T.TSchema] ? T.TImmutableAdd<Type> : never);
export declare function ExprReadonlyMapping(input: [unknown, unknown]): unknown;
export type TExprPipeMapping<Input extends [unknown, unknown]> = (Input extends ['|', infer Type extends T.TSchema] ? Type : never);
export declare function ExprPipeMapping(input: [unknown, unknown]): unknown;
export type TGenericTypeMapping<Input extends [unknown, unknown, unknown]> = (Input extends [infer Arguments extends T.TParameter[], '=', infer Type extends T.TSchema] ? T.TGeneric<Arguments, Type> : never);
export declare function GenericTypeMapping(input: [unknown, unknown, unknown]): unknown;
export type TInferTypeMapping<Input extends [unknown, unknown, unknown, unknown] | [unknown, unknown]> = (Input extends ['infer', infer Name extends string, 'extends', infer Type extends T.TSchema] ? T.TInfer<Name, Type> : Input extends ['infer', infer Name extends string] ? T.TInfer<Name, T.TUnknown> : never);
export declare function InferTypeMapping(input: [unknown, unknown, unknown, unknown] | [unknown, unknown]): unknown;
export type TTypeMapping<Input extends unknown> = (Input);
export declare function TypeMapping(input: unknown): unknown;
export type TPropertyKeyNumberMapping<Input extends string> = (`${Input}`);
export declare function PropertyKeyNumberMapping(input: string): unknown;
export type TPropertyKeyIdentMapping<Input extends string> = (Input);
export declare function PropertyKeyIdentMapping(input: string): unknown;
export type TPropertyKeyQuotedMapping<Input extends string> = (Input);
export declare function PropertyKeyQuotedMapping(input: string): unknown;
export type TPropertyKeyIndexMapping<Input extends [unknown, unknown, unknown, unknown, unknown]> = (Input extends ['[', string, ':', T.TInteger, ']'] ? T.TIntegerKey : Input extends ['[', string, ':', T.TNumber, ']'] ? T.TNumberKey : Input extends ['[', string, ':', T.TString, ']'] ? T.TStringKey : Input extends ['[', string, ':', T.TSymbol, ']'] ? T.TStringKey : never);
export declare function PropertyKeyIndexMapping(input: [unknown, unknown, unknown, unknown, unknown]): unknown;
export type TPropertyKeyMapping<Input extends unknown> = (Input);
export declare function PropertyKeyMapping(input: unknown): unknown;
export type TReadonlyMapping<Input extends [unknown] | []> = (Input extends [unknown] ? true : false);
export declare function ReadonlyMapping(input: [unknown] | []): unknown;
export type TOptionalMapping<Input extends [unknown] | []> = (Input extends [unknown] ? true : false);
export declare function OptionalMapping(input: [unknown] | []): unknown;
export type TPropertyMapping<Input extends [unknown, unknown, unknown, unknown, unknown]> = (Input extends [infer IsReadonly extends boolean, infer Key extends string, infer IsOptional extends boolean, string, infer Type extends T.TSchema] ? {
    [_ in Key]: ([
        IsReadonly,
        IsOptional
    ] extends [true, true] ? T.TReadonlyAdd<T.TOptionalAdd<Type>> : [
        IsReadonly,
        IsOptional
    ] extends [true, false] ? T.TReadonlyAdd<Type> : [
        IsReadonly,
        IsOptional
    ] extends [false, true] ? T.TOptionalAdd<Type> : Type);
} : never);
export declare function PropertyMapping(input: [unknown, unknown, unknown, unknown, unknown]): unknown;
export type TPropertyDelimiterMapping<Input extends [unknown, unknown] | [unknown]> = (Input);
export declare function PropertyDelimiterMapping(input: [unknown, unknown] | [unknown]): unknown;
export type TPropertyListMapping<Input extends [unknown, unknown]> = (TDelimited<Input>);
export declare function PropertyListMapping(input: [unknown, unknown]): unknown;
type TPropertiesReduce<PropertiesList extends T.TProperties[], Result extends [properties: T.TProperties, patternProperties: T.TProperties] = [{}, {}]> = (PropertiesList extends [infer Left extends T.TProperties, ...infer Right extends T.TProperties[]] ? (Left extends {
    [_ in T.TIntegerKey]: T.TSchema;
} ? TPropertiesReduce<Right, [Result[0], Memory.TAssign<Result[1], Left>]> : Left extends {
    [_ in T.TNumberKey]: T.TSchema;
} ? TPropertiesReduce<Right, [Result[0], Memory.TAssign<Result[1], Left>]> : Left extends {
    [_ in T.TStringKey]: T.TSchema;
} ? TPropertiesReduce<Right, [Result[0], Memory.TAssign<Result[1], Left>]> : TPropertiesReduce<Right, [Memory.TAssign<Result[0], Left>, Result[1]]>) : {
    [Key in keyof Result]: Result[Key];
});
export type TPropertiesMapping<Input extends [unknown, unknown, unknown], Result extends [T.TProperties, T.TProperties] = Input extends ['{', infer PropertyList extends T.TProperties[], '}'] ? TPropertiesReduce<PropertyList> : [{}, {}]> = Result;
export declare function PropertiesMapping(input: [unknown, unknown, unknown]): unknown;
export type T_Object_Mapping<Input extends unknown> = (Input extends [infer Properties extends T.TProperties, infer _PatternProperties extends T.TProperties] ? T.TObject<Properties> : never);
export declare function _Object_Mapping(input: unknown): unknown;
export type TElementNamedMapping<Input extends [unknown, unknown, unknown, unknown, unknown] | [unknown, unknown, unknown, unknown] | [unknown, unknown, unknown]> = (Input extends [string, '?', ':', 'readonly', infer Type extends T.TSchema] ? T.TReadonlyAdd<T.TOptionalAdd<Type>> : Input extends [string, /**/ ':', 'readonly', infer Type extends T.TSchema] ? T.TReadonlyAdd<Type> : Input extends [string, '?', ':', /*      */ infer Type extends T.TSchema] ? T.TOptionalAdd<Type> : Input extends [string, /**/ ':', /*      */ infer Type extends T.TSchema] ? Type : never);
export declare function ElementNamedMapping(input: [unknown, unknown, unknown, unknown, unknown] | [unknown, unknown, unknown, unknown] | [unknown, unknown, unknown]): unknown;
export type TElementReadonlyOptionalMapping<Input extends [unknown, unknown, unknown]> = (Input extends ['readonly', infer Type extends T.TSchema, '?'] ? T.TReadonlyAdd<T.TOptionalAdd<Type>> : never);
export declare function ElementReadonlyOptionalMapping(input: [unknown, unknown, unknown]): unknown;
export type TElementReadonlyMapping<Input extends [unknown, unknown]> = (Input extends ['readonly', infer Type extends T.TSchema] ? T.TReadonlyAdd<Type> : never);
export declare function ElementReadonlyMapping(input: [unknown, unknown]): unknown;
export type TElementOptionalMapping<Input extends [unknown, unknown]> = (Input extends [infer Type extends T.TSchema, '?'] ? T.TOptionalAdd<Type> : never);
export declare function ElementOptionalMapping(input: [unknown, unknown]): unknown;
export type TElementBaseMapping<Input extends unknown> = (Input);
export declare function ElementBaseMapping(input: unknown): unknown;
export type TElementMapping<Input extends [unknown, unknown] | [unknown]> = (Input extends ['...', infer Type extends T.TSchema] ? T.TRest<Type> : Input extends [infer Type extends T.TSchema] ? Type : never);
export declare function ElementMapping(input: [unknown, unknown] | [unknown]): unknown;
export type TElementListMapping<Input extends [unknown, unknown]> = (TDelimited<Input>);
export declare function ElementListMapping(input: [unknown, unknown]): unknown;
export type TTupleMapping<Input extends [unknown, unknown, unknown]> = (Input extends ['[', infer Types extends T.TSchema[], ']'] ? T.TTuple<Types> : never);
export declare function TupleMapping(input: [unknown, unknown, unknown]): unknown;
export type TParameterReadonlyOptionalMapping<Input extends [unknown, unknown, unknown, unknown, unknown]> = (Input extends [string, '?', ':', 'readonly', infer Type extends T.TSchema] ? T.TReadonlyAdd<T.TOptionalAdd<Type>> : never);
export declare function ParameterReadonlyOptionalMapping(input: [unknown, unknown, unknown, unknown, unknown]): unknown;
export type TParameterReadonlyMapping<Input extends [unknown, unknown, unknown, unknown]> = (Input extends [string, ':', 'readonly', infer Type extends T.TSchema] ? T.TReadonlyAdd<Type> : never);
export declare function ParameterReadonlyMapping(input: [unknown, unknown, unknown, unknown]): unknown;
export type TParameterOptionalMapping<Input extends [unknown, unknown, unknown, unknown]> = (Input extends [string, '?', ':', infer Type extends T.TSchema] ? T.TOptionalAdd<Type> : never);
export declare function ParameterOptionalMapping(input: [unknown, unknown, unknown, unknown]): unknown;
export type TParameterTypeMapping<Input extends [unknown, unknown, unknown]> = (Input extends [string, ':', infer Type extends T.TSchema] ? Type : never);
export declare function ParameterTypeMapping(input: [unknown, unknown, unknown]): unknown;
export type TParameterBaseMapping<Input extends unknown> = (Input);
export declare function ParameterBaseMapping(input: unknown): unknown;
export type TParameterMapping<Input extends [unknown, unknown] | [unknown]> = (Input extends ['...', infer Type extends T.TSchema] ? T.TRest<Type> : Input extends [infer Type extends T.TSchema] ? Type : never);
export declare function ParameterMapping(input: [unknown, unknown] | [unknown]): unknown;
export type TParameterListMapping<Input extends [unknown, unknown]> = (TDelimited<Input>);
export declare function ParameterListMapping(input: [unknown, unknown]): unknown;
export type T_Function_Mapping<Input extends [unknown, unknown, unknown, unknown, unknown]> = (Input extends ['(', infer ParameterList extends T.TSchema[], ')', '=>', infer ReturnType extends T.TSchema] ? T.TFunction<ParameterList, ReturnType> : never);
export declare function _Function_Mapping(input: [unknown, unknown, unknown, unknown, unknown]): unknown;
export type TConstructorMapping<Input extends [unknown, unknown, unknown, unknown, unknown, unknown]> = (Input extends ['new', '(', infer ParameterList extends T.TSchema[], ')', '=>', infer InstanceType extends T.TSchema] ? T.TConstructor<ParameterList, InstanceType> : never);
export declare function ConstructorMapping(input: [unknown, unknown, unknown, unknown, unknown, unknown]): unknown;
type TModifierOperation = 'add' | 'remove' | 'none';
type TApplyReadonly<Readonly extends TModifierOperation, Type extends T.TSchema> = (Readonly extends 'remove' ? C.TReadonlyRemoveAction<Type> : Readonly extends 'add' ? C.TReadonlyAddAction<Type> : Type);
export type TMappedReadonlyMapping<Input extends [unknown, unknown] | [unknown] | []> = (Input extends ['-', 'readonly'] ? 'remove' : Input extends ['+', 'readonly'] ? 'add' : Input extends ['readonly'] ? 'add' : 'none');
export declare function MappedReadonlyMapping(input: [unknown, unknown] | [unknown] | []): unknown;
type TApplyOptional<Optional extends TModifierOperation, Type extends T.TSchema> = (Optional extends 'remove' ? C.TOptionalRemoveAction<Type> : Optional extends 'add' ? C.TOptionalAddAction<Type> : Type);
export type TMappedOptionalMapping<Input extends [unknown, unknown] | [unknown] | []> = (Input extends ['-', '?'] ? 'remove' : Input extends ['+', '?'] ? 'add' : Input extends ['?'] ? 'add' : 'none');
export declare function MappedOptionalMapping(input: [unknown, unknown] | [unknown] | []): unknown;
export type TMappedAsMapping<Input extends [unknown, unknown] | []> = (Input extends ['as', infer Type extends T.TSchema] ? [Type] : []);
export declare function MappedAsMapping(input: [unknown, unknown] | []): unknown;
export type TMappedMapping<Input extends [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]> = (Input extends ['{', infer Readonly extends TModifierOperation, '[', infer Key extends string, 'in', infer Type extends T.TSchema, infer As extends T.TSchema[], ']', infer Optional extends TModifierOperation, ':', infer Property extends T.TSchema, null, '}'] ? (As extends [infer As extends T.TSchema] ? C.TMappedDeferred<T.TIdentifier<Key>, Type, As, TApplyReadonly<Readonly, TApplyOptional<Optional, Property>>> : C.TMappedDeferred<T.TIdentifier<Key>, Type, T.TRef<Key>, TApplyReadonly<Readonly, TApplyOptional<Optional, Property>>>) : never);
export declare function MappedMapping(input: [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]): unknown;
export type TReferenceMapping<Input extends string, Result extends T.TSchema = T.TRef<Input>> = Result;
export declare function ReferenceMapping(input: string): unknown;
export type TOptionsMapping<Input extends [unknown, unknown, unknown, unknown, unknown, unknown]> = (Input extends ['Options', '<', infer Type extends T.TSchema, ',', infer Options extends T.TSchemaOptions, '>'] ? C.TOptionsDeferred<Type, Options> : never);
export declare function OptionsMapping(input: [unknown, unknown, unknown, unknown, unknown, unknown]): unknown;
export type TJsonNumberMapping<Input extends string> = (Input extends `${infer Value extends number}` ? Value : never);
export declare function JsonNumberMapping(input: string): unknown;
export type TJsonBooleanMapping<Input extends 'true' | 'false'> = (Input extends 'true' ? true : false);
export declare function JsonBooleanMapping(input: 'true' | 'false'): unknown;
export type TJsonStringMapping<Input extends string> = (Input);
export declare function JsonStringMapping(input: string): unknown;
export type TJsonNullMapping<Input extends 'null'> = (null);
export declare function JsonNullMapping(input: 'null'): unknown;
export type TJsonPropertyMapping<Input extends [unknown, unknown, unknown]> = (Input extends [infer Key extends string, ':', infer Value extends unknown] ? {
    [_ in Key]: Value;
} : never);
export declare function JsonPropertyMapping(input: [unknown, unknown, unknown]): unknown;
export type TJsonPropertyListMapping<Input extends [unknown, unknown]> = (TDelimited<Input>);
export declare function JsonPropertyListMapping(input: [unknown, unknown]): unknown;
type TJsonObjectMappingReduce<PropertyList extends Record<PropertyKey, unknown>[], Result extends Record<PropertyKey, unknown> = {}> = (PropertyList extends [infer Left extends Record<PropertyKey, unknown>, ...infer Right extends Record<PropertyKey, unknown>[]] ? TJsonObjectMappingReduce<Right, Memory.TAssign<Result, Left>> : {
    [Key in keyof Result]: Result[Key];
});
export type TJsonObjectMapping<Input extends [unknown, unknown, unknown]> = (Input extends ['{', infer PropertyList extends Record<PropertyKey, unknown>[], '}'] ? TJsonObjectMappingReduce<PropertyList> : {});
export declare function JsonObjectMapping(input: [unknown, unknown, unknown]): unknown;
export type TJsonElementListMapping<Input extends [unknown, unknown]> = (TDelimited<Input>);
export declare function JsonElementListMapping(input: [unknown, unknown]): unknown;
export type TJsonArrayMapping<Input extends [unknown, unknown, unknown]> = (Input extends ['[', infer Elements extends unknown[], ']'] ? Elements : never);
export declare function JsonArrayMapping(input: [unknown, unknown, unknown]): unknown;
export type TJsonMapping<Input extends unknown> = (Input);
export declare function JsonMapping(input: unknown): unknown;
export type TPatternBigIntMapping<Input extends '-?(?:0|[1-9][0-9]*)n'> = (T.TBigInt);
export declare function PatternBigIntMapping(input: '-?(?:0|[1-9][0-9]*)n'): unknown;
export type TPatternStringMapping<Input extends '.*'> = (T.TString);
export declare function PatternStringMapping(input: '.*'): unknown;
export type TPatternNumberMapping<Input extends '-?(?:0|[1-9][0-9]*)(?:.[0-9]+)?'> = (T.TNumber);
export declare function PatternNumberMapping(input: '-?(?:0|[1-9][0-9]*)(?:.[0-9]+)?'): unknown;
export type TPatternIntegerMapping<Input extends '-?(?:0|[1-9][0-9]*)'> = (T.TInteger);
export declare function PatternIntegerMapping(input: '-?(?:0|[1-9][0-9]*)'): unknown;
export type TPatternNeverMapping<Input extends '(?!)'> = (T.TNever);
export declare function PatternNeverMapping(input: '(?!)'): unknown;
export type TPatternTextMapping<Input extends string, Result extends T.TSchema = T.TLiteral<Input>> = Result;
export declare function PatternTextMapping(input: string): unknown;
export type TPatternBaseMapping<Input extends unknown> = (Input);
export declare function PatternBaseMapping(input: unknown): unknown;
export type TPatternGroupMapping<Input extends [unknown, unknown, unknown]> = (Input extends ['(', infer Body extends T.TSchema[], ')'] ? T.TUnion<Body> : never);
export declare function PatternGroupMapping(input: [unknown, unknown, unknown]): unknown;
export type TPatternUnionMapping<Input extends [unknown, unknown, unknown] | [unknown] | []> = (Input extends [infer Term extends T.TSchema[], '|', infer Union extends T.TSchema[]] ? [...Term, ...Union] : Input extends [infer Term extends T.TSchema[]] ? [...Term] : [
]);
export declare function PatternUnionMapping(input: [unknown, unknown, unknown] | [unknown] | []): unknown;
export type TPatternTermMapping<Input extends [unknown, unknown]> = (Input extends [infer Left extends T.TSchema, infer Right extends T.TSchema[]] ? [Left, ...Right] : never);
export declare function PatternTermMapping(input: [unknown, unknown]): unknown;
export type TPatternBodyMapping<Input extends unknown> = (Input);
export declare function PatternBodyMapping(input: unknown): unknown;
export type TPatternMapping<Input extends [unknown, unknown, unknown]> = (Input extends ['^', infer Body extends T.TSchema[], '$'] ? Body : never);
export declare function PatternMapping(input: [unknown, unknown, unknown]): unknown;
export type TInterfaceDeclarationHeritageListMapping<Input extends [unknown, unknown]> = (TDelimited<Input>);
export declare function InterfaceDeclarationHeritageListMapping(input: [unknown, unknown]): unknown;
export type TInterfaceDeclarationHeritageMapping<Input extends [unknown, unknown] | []> = (Input extends ['extends', infer Heritage extends T.TSchema[]] ? Heritage : []);
export declare function InterfaceDeclarationHeritageMapping(input: [unknown, unknown] | []): unknown;
export type TInterfaceDeclarationGenericMapping<Input extends [unknown, unknown, unknown, unknown, unknown]> = (Input extends ['interface', infer Name extends string, infer Parameters extends T.TParameter[], infer Heritage extends T.TSchema[], infer Properties extends [T.TProperties, T.TProperties]] ? {
    [_ in Name]: T.TGeneric<Parameters, C.TInterfaceDeferred<Heritage, Properties[0]>>;
} : never);
export declare function InterfaceDeclarationGenericMapping(input: [unknown, unknown, unknown, unknown, unknown]): unknown;
export type TInterfaceDeclarationMapping<Input extends [unknown, unknown, unknown, unknown]> = (Input extends ['interface', infer Name extends string, infer Heritage extends T.TSchema[], infer Properties extends [T.TProperties, T.TProperties]] ? {
    [_ in Name]: C.TInterfaceDeferred<Heritage, Properties[0]>;
} : never);
export declare function InterfaceDeclarationMapping(input: [unknown, unknown, unknown, unknown]): unknown;
export type TTypeAliasDeclarationGenericMapping<Input extends [unknown, unknown, unknown, unknown, unknown]> = (Input extends ['type', infer Name extends string, infer Parameters extends T.TParameter[], '=', infer Type extends T.TSchema] ? {
    [_ in Name]: T.TGeneric<Parameters, Type>;
} : never);
export declare function TypeAliasDeclarationGenericMapping(input: [unknown, unknown, unknown, unknown, unknown]): unknown;
export type TTypeAliasDeclarationMapping<Input extends [unknown, unknown, unknown, unknown]> = (Input extends ['type', infer Name extends string, '=', infer Type extends T.TSchema] ? {
    [_ in Name]: Type;
} : never);
export declare function TypeAliasDeclarationMapping(input: [unknown, unknown, unknown, unknown]): unknown;
export type TExportKeywordMapping<Input extends [unknown] | []> = (null);
export declare function ExportKeywordMapping(input: [unknown] | []): unknown;
export type TModuleDeclarationDelimiterMapping<Input extends [unknown, unknown] | [unknown]> = (Input);
export declare function ModuleDeclarationDelimiterMapping(input: [unknown, unknown] | [unknown]): unknown;
export type TModuleDeclarationListMapping<Input extends [unknown, unknown]> = (TPropertiesReduce<TDelimited<Input>>);
export declare function ModuleDeclarationListMapping(input: [unknown, unknown]): unknown;
export type TModuleDeclarationMapping<Input extends [unknown, unknown, unknown]> = (Input extends [null, infer ModuleDeclaration extends T.TProperties, null] ? ModuleDeclaration : never);
export declare function ModuleDeclarationMapping(input: [unknown, unknown, unknown]): unknown;
export type TModuleMapping<Input extends [unknown, unknown]> = (Input extends [infer ModuleDeclaration extends T.TProperties, infer ModuleDeclarationList extends [T.TProperties, T.TProperties]] ? C.TModuleDeferred<Memory.TAssign<ModuleDeclaration, ModuleDeclarationList[0]>> : never);
export declare function ModuleMapping(input: [unknown, unknown]): unknown;
export type TScriptMapping<Input extends unknown> = (Input);
export declare function ScriptMapping(input: unknown): unknown;
export {};
