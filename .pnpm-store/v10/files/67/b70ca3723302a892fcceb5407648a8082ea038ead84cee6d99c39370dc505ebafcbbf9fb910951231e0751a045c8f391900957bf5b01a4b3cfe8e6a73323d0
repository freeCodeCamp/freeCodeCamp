// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import * as C from '../action/index.mjs';
import * as T from '../types/index.mjs';
function IntrinsicOrCall(ref, parameters) {
    // deno-coverage-ignore-start
    //
    // Have extensively tested but reports show no Omit coverage (review)
    return (Guard.IsEqual(ref, 'Array') ? T.Array(parameters[0]) :
        Guard.IsEqual(ref, 'AsyncIterator') ? T.AsyncIterator(parameters[0]) :
            Guard.IsEqual(ref, 'Iterator') ? T.Iterator(parameters[0]) :
                Guard.IsEqual(ref, 'Promise') ? T.Promise(parameters[0]) :
                    Guard.IsEqual(ref, 'Awaited') ? C.AwaitedDeferred(parameters[0]) :
                        Guard.IsEqual(ref, 'Capitalize') ? C.CapitalizeDeferred(parameters[0]) :
                            Guard.IsEqual(ref, 'ConstructorParameters') ? C.ConstructorParametersDeferred(parameters[0]) :
                                Guard.IsEqual(ref, 'Evaluate') ? C.EvaluateDeferred(parameters[0]) :
                                    Guard.IsEqual(ref, 'Exclude') ? C.ExcludeDeferred(parameters[0], parameters[1]) :
                                        Guard.IsEqual(ref, 'Extract') ? C.ExtractDeferred(parameters[0], parameters[1]) :
                                            Guard.IsEqual(ref, 'Index') ? C.IndexDeferred(parameters[0], parameters[1]) :
                                                Guard.IsEqual(ref, 'InstanceType') ? C.InstanceTypeDeferred(parameters[0]) :
                                                    Guard.IsEqual(ref, 'Lowercase') ? C.LowercaseDeferred(parameters[0]) :
                                                        Guard.IsEqual(ref, 'NonNullable') ? C.NonNullableDeferred(parameters[0]) :
                                                            Guard.IsEqual(ref, 'Omit') ? C.OmitDeferred(parameters[0], parameters[1]) :
                                                                Guard.IsEqual(ref, 'Options') ? C.OptionsDeferred(parameters[0], parameters[1]) :
                                                                    Guard.IsEqual(ref, 'Parameters') ? C.ParametersDeferred(parameters[0]) :
                                                                        Guard.IsEqual(ref, 'Partial') ? C.PartialDeferred(parameters[0]) :
                                                                            Guard.IsEqual(ref, 'Pick') ? C.PickDeferred(parameters[0], parameters[1]) :
                                                                                Guard.IsEqual(ref, 'Readonly') ? C.ReadonlyObjectDeferred(parameters[0]) :
                                                                                    Guard.IsEqual(ref, 'KeyOf') ? C.KeyOfDeferred(parameters[0]) :
                                                                                        Guard.IsEqual(ref, 'Record') ? T.RecordDeferred(parameters[0], parameters[1]) :
                                                                                            Guard.IsEqual(ref, 'Required') ? C.RequiredDeferred(parameters[0]) :
                                                                                                Guard.IsEqual(ref, 'ReturnType') ? C.ReturnTypeDeferred(parameters[0]) :
                                                                                                    Guard.IsEqual(ref, 'Uncapitalize') ? C.UncapitalizeDeferred(parameters[0]) :
                                                                                                        Guard.IsEqual(ref, 'Uppercase') ? C.UppercaseDeferred(parameters[0]) :
                                                                                                            T.CallConstruct(T.Ref(ref), parameters));
    // deno-coverage-ignore-stop
}
// ------------------------------------------------------------------
// Unreachable
// ------------------------------------------------------------------
// deno-coverage-ignore-start
function Unreachable() {
    throw Error('Unreachable');
}
const DelimitedDecode = (input, result = []) => {
    return input.reduce((result, left) => {
        return Guard.IsArray(left) && Guard.IsEqual(left.length, 2)
            ? [...result, left[0]]
            : [...result, left];
    }, []);
};
const Delimited = (input) => {
    const [left, right] = input;
    return DelimitedDecode([...left, ...right]);
};
export function GenericParameterExtendsEqualsMapping(input) {
    return T.Parameter(input[0], input[2], input[4]);
}
export function GenericParameterExtendsMapping(input) {
    return T.Parameter(input[0], input[2], input[2]);
}
export function GenericParameterEqualsMapping(input) {
    return T.Parameter(input[0], T.Unknown(), input[2]);
}
export function GenericParameterIdentifierMapping(input) {
    return T.Parameter(input, T.Unknown(), T.Unknown());
}
export function GenericParameterMapping(input) {
    return input;
}
export function GenericParameterListMapping(input) {
    return Delimited(input);
}
export function GenericParametersMapping(input) {
    return input[1];
}
export function GenericCallArgumentListMapping(input) {
    return Delimited(input);
}
export function GenericCallArgumentsMapping(input) {
    return input[1];
}
export function GenericCallMapping(input) {
    return IntrinsicOrCall(input[0], input[1]);
}
export function OptionalSemiColonMapping(input) {
    return null;
}
export function KeywordStringMapping(input) {
    return T.String();
}
export function KeywordNumberMapping(input) {
    return T.Number();
}
export function KeywordBooleanMapping(input) {
    return T.Boolean();
}
export function KeywordUndefinedMapping(input) {
    return T.Undefined();
}
export function KeywordNullMapping(input) {
    return T.Null();
}
export function KeywordIntegerMapping(input) {
    return T.Integer();
}
export function KeywordBigIntMapping(input) {
    return T.BigInt();
}
export function KeywordUnknownMapping(input) {
    return T.Unknown();
}
export function KeywordAnyMapping(input) {
    return T.Any();
}
export function KeywordObjectMapping(input) {
    return T.Object({});
}
export function KeywordNeverMapping(input) {
    return T.Never();
}
export function KeywordSymbolMapping(input) {
    return T.Symbol();
}
export function KeywordVoidMapping(input) {
    return T.Void();
}
export function KeywordThisMapping(input) {
    return T.This();
}
export function KeywordMapping(input) {
    return input;
}
export function TemplateInterpolateMapping(input) {
    return input[1];
}
export function TemplateSpanMapping(input) {
    return T.Literal(input);
}
export function TemplateBodyMapping(input) {
    return (Guard.IsEqual(input.length, 3)
        ? [input[0], input[1], ...input[2]]
        : [input[0]]);
}
export function TemplateLiteralTypesMapping(input) {
    return input[1];
}
export function TemplateLiteralMapping(input) {
    return T.TemplateLiteralDeferred(input);
}
export function LiteralBigIntMapping(input) {
    return T.Literal(BigInt(input));
}
export function LiteralBooleanMapping(input) {
    return T.Literal(Guard.IsEqual(input, 'true'));
}
export function LiteralNumberMapping(input) {
    return T.Literal(parseFloat(input));
}
export function LiteralStringMapping(input) {
    return T.Literal(input);
}
export function LiteralMapping(input) {
    return input;
}
export function KeyOfMapping(input) {
    return input.length > 0;
}
export function IndexArrayMapping(input) {
    return input.reduce((result, current) => {
        return Guard.IsEqual(current.length, 3)
            ? [...result, [current[1]]]
            : [...result, []];
    }, []);
}
export function ExtendsMapping(input) {
    return Guard.IsEqual(input.length, 6)
        ? [input[1], input[3], input[5]]
        : [];
}
export function BaseMapping(input) {
    return Guard.IsArray(input) && Guard.IsEqual(input.length, 3)
        ? input[1]
        : input;
}
// deno-coverage-ignore-start
// ...
const FactorIndexArray = (Type, indexArray) => {
    return indexArray.reduce((result, left) => {
        const _left = left;
        return (Guard.IsEqual(_left.length, 1) ? C.IndexDeferred(result, _left[0]) :
            Guard.IsEqual(_left.length, 0) ? T.Array(result) :
                Unreachable());
    }, Type);
};
// deno-coverage-ignore-stop
const FactorExtends = (type, extend) => {
    return Guard.IsEqual(extend.length, 3)
        ? C.ConditionalDeferred(type, extend[0], extend[1], extend[2])
        : type;
};
export function FactorMapping(input) {
    const [keyOf, type, indexArray, extend] = input;
    return keyOf
        ? FactorExtends(C.KeyOfDeferred(FactorIndexArray(type, indexArray)), extend)
        : FactorExtends(FactorIndexArray(type, indexArray), extend);
}
// deno-coverage-ignore-start
function ExprBinaryMapping(left, rest) {
    return (Guard.IsEqual(rest.length, 3) ? (() => {
        const [operator, right, next] = rest;
        const Schema = ExprBinaryMapping(right, next);
        if (Guard.IsEqual(operator, '&')) {
            return T.IsIntersect(Schema)
                ? T.Intersect([left, ...Schema.allOf])
                : T.Intersect([left, Schema]);
        }
        if (Guard.IsEqual(operator, '|')) {
            return T.IsUnion(Schema)
                ? T.Union([left, ...Schema.anyOf])
                : T.Union([left, Schema]);
        }
        Unreachable();
    })() : left);
}
export function ExprTermTailMapping(input) {
    return input;
}
export function ExprTermMapping(input) {
    const [left, rest] = input;
    return ExprBinaryMapping(left, rest);
}
export function ExprTailMapping(input) {
    return input;
}
export function ExprMapping(input) {
    const [left, rest] = input;
    return ExprBinaryMapping(left, rest);
}
export function ExprReadonlyMapping(input) {
    return T.ImmutableAdd(input[1]);
}
export function ExprPipeMapping(input) {
    return input[1];
}
export function GenericTypeMapping(input) {
    return T.Generic(input[0], input[2]);
}
// deno-coverage-ignore-start
export function InferTypeMapping(input) {
    return (Guard.IsEqual(input.length, 4) ? T.Infer(input[1], input[3]) :
        Guard.IsEqual(input.length, 2) ? T.Infer(input[1], T.Unknown()) :
            Unreachable());
}
export function TypeMapping(input) {
    return input;
}
export function PropertyKeyNumberMapping(input) {
    return `${input}`;
}
export function PropertyKeyIdentMapping(input) {
    return input;
}
export function PropertyKeyQuotedMapping(input) {
    return input;
}
// deno-coverage-ignore-start
export function PropertyKeyIndexMapping(input) {
    return (T.IsInteger(input[3]) ? T.IntegerKey :
        T.IsNumber(input[3]) ? T.NumberKey :
            T.IsSymbol(input[3]) ? T.StringKey :
                T.IsString(input[3]) ? T.StringKey :
                    Unreachable());
}
export function PropertyKeyMapping(input) {
    return input;
}
export function ReadonlyMapping(input) {
    return input.length > 0;
}
export function OptionalMapping(input) {
    return input.length > 0;
}
export function PropertyMapping(input) {
    const [isReadonly, key, isOptional, _colon, type] = input;
    return {
        [key]: (isReadonly && isOptional ? T.ReadonlyAdd(T.OptionalAdd(type)) :
            isReadonly && !isOptional ? T.ReadonlyAdd(type) :
                !isReadonly && isOptional ? T.OptionalAdd(type) :
                    type)
    };
}
export function PropertyDelimiterMapping(input) {
    return input;
}
export function PropertyListMapping(input) {
    return Delimited(input);
}
function PropertiesReduce(propertyList) {
    return propertyList.reduce((result, left) => {
        const isPatternProperties = (Guard.HasPropertyKey(left, T.IntegerKey) || Guard.HasPropertyKey(left, T.NumberKey) || Guard.HasPropertyKey(left, T.StringKey));
        // @ts-ignore 5.0.4 - unable to observe ...left on right arm
        return (isPatternProperties
            ? [result[0], Memory.Assign(result[1], left)]
            : [Memory.Assign(result[0], left), result[1]]);
    }, [{}, {}]);
}
export function PropertiesMapping(input) {
    return PropertiesReduce(input[1]);
}
export function _Object_Mapping(input) {
    const [properties, patternProperties] = input;
    const options = Guard.IsEqual(Guard.Keys(patternProperties).length, 0) ? {} : { patternProperties };
    return T.Object(properties, options);
}
// deno-coverage-ignore-start
export function ElementNamedMapping(input) {
    return (Guard.IsEqual(input.length, 5) ? T.ReadonlyAdd(T.OptionalAdd(input[4])) :
        Guard.IsEqual(input.length, 3) ? input[2] :
            Guard.IsEqual(input.length, 4) ? (Guard.IsEqual(input[2], 'readonly') ? T.ReadonlyAdd(input[3]) : T.OptionalAdd(input[3])) :
                Unreachable());
}
export function ElementReadonlyOptionalMapping(input) {
    return T.ReadonlyAdd(T.OptionalAdd(input[1]));
}
export function ElementReadonlyMapping(input) {
    return T.ReadonlyAdd(input[1]);
}
export function ElementOptionalMapping(input) {
    return T.OptionalAdd(input[0]);
}
export function ElementBaseMapping(input) {
    return input;
}
// deno-coverage-ignore-start
export function ElementMapping(input) {
    return (Guard.IsEqual(input.length, 2) ? T.Rest(input[1]) :
        Guard.IsEqual(input.length, 1) ? input[0] :
            Unreachable());
}
export function ElementListMapping(input) {
    return Delimited(input);
}
export function TupleMapping(input) {
    return T.Tuple(input[1]);
}
export function ParameterReadonlyOptionalMapping(input) {
    return T.ReadonlyAdd(T.OptionalAdd(input[4]));
}
export function ParameterReadonlyMapping(input) {
    return T.ReadonlyAdd(input[3]);
}
export function ParameterOptionalMapping(input) {
    return T.OptionalAdd(input[3]);
}
export function ParameterTypeMapping(input) {
    return input[2];
}
export function ParameterBaseMapping(input) {
    return input;
}
// deno-coverage-ignore-start
export function ParameterMapping(input) {
    return (Guard.IsEqual(input.length, 2) ? T.Rest(input[1]) :
        Guard.IsEqual(input.length, 1) ? input[0] :
            Unreachable());
}
export function ParameterListMapping(input) {
    return Delimited(input);
}
export function _Function_Mapping(input) {
    return T._Function_(input[1], input[4]);
}
export function ConstructorMapping(input) {
    return T.Constructor(input[2], input[5]);
}
function ApplyReadonly(state, type) {
    return (Guard.IsEqual(state, 'remove') ? C.ReadonlyRemoveAction(type) :
        Guard.IsEqual(state, 'add') ? C.ReadonlyAddAction(type) :
            type);
}
export function MappedReadonlyMapping(input) {
    return (Guard.IsEqual(input.length, 2) && Guard.IsEqual(input[0], '-') ? 'remove' :
        Guard.IsEqual(input.length, 2) && Guard.IsEqual(input[0], '+') ? 'add' :
            Guard.IsEqual(input.length, 1) ? 'add' :
                'none');
}
function ApplyOptional(state, type) {
    return (Guard.IsEqual(state, 'remove') ? C.OptionalRemoveAction(type) :
        Guard.IsEqual(state, 'add') ? C.OptionalAddAction(type) :
            type);
}
export function MappedOptionalMapping(input) {
    return (Guard.IsEqual(input.length, 2) && Guard.IsEqual(input[0], '-') ? 'remove' :
        Guard.IsEqual(input.length, 2) && Guard.IsEqual(input[0], '+') ? 'add' :
            Guard.IsEqual(input.length, 1) ? 'add' :
                'none');
}
export function MappedAsMapping(input) {
    return Guard.IsEqual(input.length, 2) ? [input[1]] : [];
}
export function MappedMapping(input) {
    return (Guard.IsArray(input[6]) && Guard.IsEqual(input[6].length, 1)
        ? C.MappedDeferred(T.Identifier(input[3]), input[5], input[6][0], ApplyReadonly(input[1], ApplyOptional(input[8], input[10])))
        : C.MappedDeferred(T.Identifier(input[3]), input[5], T.Ref(input[3]), ApplyReadonly(input[1], ApplyOptional(input[8], input[10]))));
}
export function ReferenceMapping(input) {
    return T.Ref(input);
}
export function OptionsMapping(input) {
    return C.OptionsDeferred(input[2], input[4]);
}
export function JsonNumberMapping(input) {
    return parseFloat(input);
}
export function JsonBooleanMapping(input) {
    return Guard.IsEqual(input, 'true');
}
export function JsonStringMapping(input) {
    return input;
}
export function JsonNullMapping(input) {
    return null;
}
export function JsonPropertyMapping(input) {
    return { [input[0]]: input[2] };
}
export function JsonPropertyListMapping(input) {
    return Delimited(input);
}
function JsonObjectMappingReduce(propertyList) {
    return propertyList.reduce((result, left) => {
        return Memory.Assign(result, left);
    }, {});
}
export function JsonObjectMapping(input) {
    return JsonObjectMappingReduce(input[1]);
}
export function JsonElementListMapping(input) {
    return Delimited(input);
}
export function JsonArrayMapping(input) {
    return input[1];
}
export function JsonMapping(input) {
    return input;
}
export function PatternBigIntMapping(input) {
    return T.BigInt();
}
export function PatternStringMapping(input) {
    return T.String();
}
export function PatternNumberMapping(input) {
    return T.Number();
}
export function PatternIntegerMapping(input) {
    return T.Integer();
}
export function PatternNeverMapping(input) {
    return T.Never();
}
export function PatternTextMapping(input) {
    return T.Literal(input);
}
export function PatternBaseMapping(input) {
    return input;
}
export function PatternGroupMapping(input) {
    return T.Union(input[1]);
}
export function PatternUnionMapping(input) {
    return (input.length === 3 ? [...input[0], ...input[2]] :
        input.length === 1 ? [...input[0]] :
            []);
}
export function PatternTermMapping(input) {
    return [input[0], ...input[1]];
}
export function PatternBodyMapping(input) {
    return input;
}
export function PatternMapping(input) {
    return input[1];
}
export function InterfaceDeclarationHeritageListMapping(input) {
    return Delimited(input);
}
export function InterfaceDeclarationHeritageMapping(input) {
    return Guard.IsEqual(input.length, 2) ? input[1] : [];
}
export function InterfaceDeclarationGenericMapping(input) {
    const parameters = input[2];
    const heritage = input[3];
    const [properties, patternProperties] = input[4];
    const options = Guard.IsEqual(Guard.Keys(patternProperties).length, 0) ? {} : { patternProperties };
    return { [input[1]]: T.Generic(parameters, C.InterfaceDeferred(heritage, properties, options)) };
}
export function InterfaceDeclarationMapping(input) {
    const heritage = input[2];
    const [properties, patternProperties] = input[3];
    const options = Guard.IsEqual(Guard.Keys(patternProperties).length, 0) ? {} : { patternProperties };
    return { [input[1]]: C.InterfaceDeferred(heritage, properties, options) };
}
export function TypeAliasDeclarationGenericMapping(input) {
    return { [input[1]]: T.Generic(input[2], input[4]) };
}
export function TypeAliasDeclarationMapping(input) {
    return { [input[1]]: input[3] };
}
export function ExportKeywordMapping(input) {
    return null; // ignored-dont-care
}
export function ModuleDeclarationDelimiterMapping(input) {
    return input;
}
export function ModuleDeclarationListMapping(input) {
    return PropertiesReduce(Delimited(input));
}
export function ModuleDeclarationMapping(input) {
    return input[1];
}
export function ModuleMapping(input) {
    const moduleDeclaration = input[0];
    const moduleDeclarationList = input[1];
    return C.ModuleDeferred(Memory.Assign(moduleDeclaration, moduleDeclarationList[0]));
}
export function ScriptMapping(input) {
    return input;
}
