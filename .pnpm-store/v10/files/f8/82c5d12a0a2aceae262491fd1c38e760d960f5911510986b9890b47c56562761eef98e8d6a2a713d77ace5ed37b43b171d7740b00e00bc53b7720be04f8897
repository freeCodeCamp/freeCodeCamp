// deno-fmt-ignore-file
import * as Schema from '../types/index.mjs';
import { BuildRefine, CheckRefine, ErrorRefine } from './_refine.mjs';
import { BuildGuard, CheckGuard, ErrorGuard } from './_guard.mjs';
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
import { BuildAdditionalItems, CheckAdditionalItems, ErrorAdditionalItems } from './additionalItems.mjs';
import { BuildAdditionalProperties, CheckAdditionalProperties, ErrorAdditionalProperties } from './additionalProperties.mjs';
import { BuildAllOf, CheckAllOf, ErrorAllOf } from './allOf.mjs';
import { BuildAnyOf, CheckAnyOf, ErrorAnyOf } from './anyOf.mjs';
import { BuildBooleanSchema, CheckBooleanSchema, ErrorBooleanSchema } from './boolean.mjs';
import { BuildConst, CheckConst, ErrorConst } from './const.mjs';
import { BuildContains, CheckContains, ErrorContains } from './contains.mjs';
import { BuildDependencies, CheckDependencies, ErrorDependencies } from './dependencies.mjs';
import { BuildDependentRequired, CheckDependentRequired, ErrorDependentRequired } from './dependentRequired.mjs';
import { BuildDependentSchemas, CheckDependentSchemas, ErrorDependentSchemas } from './dependentSchemas.mjs';
import { BuildDynamicRef, CheckDynamicRef, ErrorDynamicRef } from './dynamicRef.mjs';
import { BuildEnum, CheckEnum, ErrorEnum } from './enum.mjs';
import { BuildExclusiveMaximum, CheckExclusiveMaximum, ErrorExclusiveMaximum } from './exclusiveMaximum.mjs';
import { BuildExclusiveMinimum, CheckExclusiveMinimum, ErrorExclusiveMinimum } from './exclusiveMinimum.mjs';
import { BuildFormat, CheckFormat, ErrorFormat } from './format.mjs';
import { BuildIf, CheckIf, ErrorIf } from './if.mjs';
import { BuildItems, CheckItems, ErrorItems } from './items.mjs';
import { BuildMaxContains, CheckMaxContains, ErrorMaxContains } from './maxContains.mjs';
import { BuildMaximum, CheckMaximum, ErrorMaximum } from './maximum.mjs';
import { BuildMaxItems, CheckMaxItems, ErrorMaxItems } from './maxItems.mjs';
import { BuildMaxLength, CheckMaxLength, ErrorMaxLength } from './maxLength.mjs';
import { BuildMaxProperties, CheckMaxProperties, ErrorMaxProperties } from './maxProperties.mjs';
import { BuildMinContains, CheckMinContains, ErrorMinContains } from './minContains.mjs';
import { BuildMinimum, CheckMinimum, ErrorMinimum } from './minimum.mjs';
import { BuildMinItems, CheckMinItems, ErrorMinItems } from './minItems.mjs';
import { BuildMinLength, CheckMinLength, ErrorMinLength } from './minLength.mjs';
import { BuildMinProperties, CheckMinProperties, ErrorMinProperties } from './minProperties.mjs';
import { BuildMultipleOf, CheckMultipleOf, ErrorMultipleOf } from './multipleOf.mjs';
import { BuildNot, CheckNot, ErrorNot } from './not.mjs';
import { BuildOneOf, CheckOneOf, ErrorOneOf } from './oneOf.mjs';
import { BuildPattern, CheckPattern, ErrorPattern } from './pattern.mjs';
import { BuildPatternProperties, CheckPatternProperties, ErrorPatternProperties } from './patternProperties.mjs';
import { BuildPrefixItems, CheckPrefixItems, ErrorPrefixItems } from './prefixItems.mjs';
import { BuildProperties, CheckProperties, ErrorProperties } from './properties.mjs';
import { BuildPropertyNames, CheckPropertyNames, ErrorPropertyNames } from './propertyNames.mjs';
import { BuildRecursiveRef, CheckRecursiveRef, ErrorRecursiveRef } from './recursiveRef.mjs';
import { BuildRef, CheckRef, ErrorRef } from './ref.mjs';
import { BuildRequired, CheckRequired, ErrorRequired } from './required.mjs';
import { BuildType, CheckType, ErrorType } from './type.mjs';
import { BuildUnevaluatedItems, CheckUnevaluatedItems, ErrorUnevaluatedItems } from './unevaluatedItems.mjs';
import { BuildUnevaluatedProperties, CheckUnevaluatedProperties, ErrorUnevaluatedProperties } from './unevaluatedProperties.mjs';
import { BuildUniqueItems, CheckUniqueItems, ErrorUniqueItems } from './uniqueItems.mjs';
// ----------------------------------------------------------------
// HasTypeName
// ----------------------------------------------------------------
function HasTypeName(schema, typename) {
    return Schema.IsType(schema) &&
        (G.IsArray(schema.type) && schema.type.includes(typename) ||
            G.IsEqual(schema.type, typename));
}
// ----------------------------------------------------------------
// HasObject
// ----------------------------------------------------------------
function HasObjectType(schema) {
    return HasTypeName(schema, 'object');
}
function HasObjectKeywords(schema) {
    return Schema.IsSchemaObject(schema) && (Schema.IsAdditionalProperties(schema) ||
        Schema.IsDependencies(schema) ||
        Schema.IsDependentRequired(schema) ||
        Schema.IsDependentSchemas(schema) ||
        Schema.IsProperties(schema) ||
        Schema.IsPatternProperties(schema) ||
        Schema.IsPropertyNames(schema) ||
        Schema.IsMinProperties(schema) ||
        Schema.IsMaxProperties(schema) ||
        Schema.IsRequired(schema) ||
        Schema.IsUnevaluatedProperties(schema));
}
// ----------------------------------------------------------------
// HasArray
// ----------------------------------------------------------------
function HasArrayType(schema) {
    return HasTypeName(schema, 'array');
}
function HasArrayKeywords(schema) {
    return Schema.IsSchemaObject(schema) && (Schema.IsAdditionalItems(schema) ||
        Schema.IsItems(schema) ||
        Schema.IsContains(schema) ||
        Schema.IsMaxContains(schema) ||
        Schema.IsMaxItems(schema) ||
        Schema.IsMinContains(schema) ||
        Schema.IsMinItems(schema) ||
        Schema.IsPrefixItems(schema) ||
        Schema.IsUnevaluatedItems(schema) ||
        Schema.IsUniqueItems(schema));
}
// ----------------------------------------------------------------
// HasString
// ----------------------------------------------------------------
function HasStringType(schema) {
    return HasTypeName(schema, 'string');
}
function HasStringKeywords(schema) {
    return Schema.IsSchemaObject(schema) && (Schema.IsMinLength(schema) ||
        Schema.IsMaxLength(schema) ||
        Schema.IsFormat(schema) ||
        Schema.IsPattern(schema));
}
// ----------------------------------------------------------------
// HasNumber
// ----------------------------------------------------------------
function HasNumberType(schema) {
    return HasTypeName(schema, 'number') || HasTypeName(schema, 'bigint');
}
function HasNumberKeywords(schema) {
    return Schema.IsSchemaObject(schema) && (Schema.IsMinimum(schema) ||
        Schema.IsMaximum(schema) ||
        Schema.IsExclusiveMaximum(schema) ||
        Schema.IsExclusiveMinimum(schema) ||
        Schema.IsMultipleOf(schema));
}
// ----------------------------------------------------------------
// Build
// ----------------------------------------------------------------
export function BuildSchemaPushStack(stack, context, schema, value) {
    return context.UseUnevaluated()
        ? E.And(E.And(context.Push(), BuildSchema(stack, context, schema, value)), context.Pop())
        : BuildSchema(stack, context, schema, value);
}
export function BuildSchema(stack, context, schema, value) {
    stack.Push(schema);
    const conditions = [];
    if (Schema.IsBooleanSchema(schema))
        return BuildBooleanSchema(stack, context, schema, value);
    if (Schema.IsType(schema))
        conditions.push(BuildType(stack, context, schema, value));
    if (HasObjectKeywords(schema)) {
        const constraints = [];
        if (Schema.IsRequired(schema))
            constraints.push(BuildRequired(stack, context, schema, value));
        if (Schema.IsAdditionalProperties(schema))
            constraints.push(BuildAdditionalProperties(stack, context, schema, value));
        if (Schema.IsDependencies(schema))
            constraints.push(BuildDependencies(stack, context, schema, value));
        if (Schema.IsDependentRequired(schema))
            constraints.push(BuildDependentRequired(stack, context, schema, value));
        if (Schema.IsDependentSchemas(schema))
            constraints.push(BuildDependentSchemas(stack, context, schema, value));
        if (Schema.IsPatternProperties(schema))
            constraints.push(BuildPatternProperties(stack, context, schema, value));
        if (Schema.IsProperties(schema))
            constraints.push(BuildProperties(stack, context, schema, value));
        if (Schema.IsPropertyNames(schema))
            constraints.push(BuildPropertyNames(stack, context, schema, value));
        if (Schema.IsMinProperties(schema))
            constraints.push(BuildMinProperties(stack, context, schema, value));
        if (Schema.IsMaxProperties(schema))
            constraints.push(BuildMaxProperties(stack, context, schema, value));
        const reduced = E.ReduceAnd(constraints);
        const guarded = E.Or(E.Not(E.IsObjectNotArray(value)), reduced);
        conditions.push(HasObjectType(schema) ? reduced : guarded);
    }
    if (HasArrayKeywords(schema)) {
        const constraints = [];
        if (Schema.IsAdditionalItems(schema))
            constraints.push(BuildAdditionalItems(stack, context, schema, value));
        if (Schema.IsContains(schema))
            constraints.push(BuildContains(stack, context, schema, value));
        if (Schema.IsItems(schema))
            constraints.push(BuildItems(stack, context, schema, value));
        if (Schema.IsMaxContains(schema))
            constraints.push(BuildMaxContains(stack, context, schema, value));
        if (Schema.IsMaxItems(schema))
            constraints.push(BuildMaxItems(stack, context, schema, value));
        if (Schema.IsMinContains(schema))
            constraints.push(BuildMinContains(stack, context, schema, value));
        if (Schema.IsMinItems(schema))
            constraints.push(BuildMinItems(stack, context, schema, value));
        if (Schema.IsPrefixItems(schema))
            constraints.push(BuildPrefixItems(stack, context, schema, value));
        if (Schema.IsUniqueItems(schema))
            constraints.push(BuildUniqueItems(stack, context, schema, value));
        const reduced = E.ReduceAnd(constraints);
        const guarded = E.Or(E.Not(E.IsArray(value)), reduced);
        conditions.push(HasArrayType(schema) ? reduced : guarded);
    }
    if (HasStringKeywords(schema)) {
        const constraints = [];
        if (Schema.IsMaxLength(schema))
            constraints.push(BuildMaxLength(stack, context, schema, value));
        if (Schema.IsMinLength(schema))
            constraints.push(BuildMinLength(stack, context, schema, value));
        if (Schema.IsFormat(schema))
            constraints.push(BuildFormat(stack, context, schema, value));
        if (Schema.IsPattern(schema))
            constraints.push(BuildPattern(stack, context, schema, value));
        const reduced = E.ReduceAnd(constraints);
        const guarded = E.Or(E.Not(E.IsString(value)), reduced);
        conditions.push(HasStringType(schema) ? reduced : guarded);
    }
    if (HasNumberKeywords(schema)) {
        const constraints = [];
        if (Schema.IsExclusiveMaximum(schema))
            constraints.push(BuildExclusiveMaximum(stack, context, schema, value));
        if (Schema.IsExclusiveMinimum(schema))
            constraints.push(BuildExclusiveMinimum(stack, context, schema, value));
        if (Schema.IsMaximum(schema))
            constraints.push(BuildMaximum(stack, context, schema, value));
        if (Schema.IsMinimum(schema))
            constraints.push(BuildMinimum(stack, context, schema, value));
        if (Schema.IsMultipleOf(schema))
            constraints.push(BuildMultipleOf(stack, context, schema, value));
        const reduced = E.ReduceAnd(constraints);
        const guarded = E.Or(E.Not(E.Or(E.IsNumber(value), E.IsBigInt(value))), reduced);
        conditions.push(HasNumberType(schema) ? reduced : guarded);
    }
    if (Schema.IsRef(schema))
        conditions.push(BuildRef(stack, context, schema, value));
    if (Schema.IsRecursiveRef(schema))
        conditions.push(BuildRecursiveRef(stack, context, schema, value));
    if (Schema.IsDynamicRef(schema))
        conditions.push(BuildDynamicRef(stack, context, schema, value));
    if (Schema.IsGuard(schema))
        conditions.push(BuildGuard(stack, context, schema, value));
    if (Schema.IsConst(schema))
        conditions.push(BuildConst(stack, context, schema, value));
    if (Schema.IsEnum(schema))
        conditions.push(BuildEnum(stack, context, schema, value));
    if (Schema.IsIf(schema))
        conditions.push(BuildIf(stack, context, schema, value));
    if (Schema.IsNot(schema))
        conditions.push(BuildNot(stack, context, schema, value));
    if (Schema.IsAllOf(schema))
        conditions.push(BuildAllOf(stack, context, schema, value));
    if (Schema.IsAnyOf(schema))
        conditions.push(BuildAnyOf(stack, context, schema, value));
    if (Schema.IsOneOf(schema))
        conditions.push(BuildOneOf(stack, context, schema, value));
    if (Schema.IsUnevaluatedItems(schema))
        conditions.push(E.Or(E.Not(E.IsArray(value)), BuildUnevaluatedItems(stack, context, schema, value)));
    if (Schema.IsUnevaluatedProperties(schema))
        conditions.push(E.Or(E.Not(E.IsObject(value)), BuildUnevaluatedProperties(stack, context, schema, value)));
    if (Schema.IsRefine(schema))
        conditions.push(BuildRefine(stack, context, schema, value));
    const result = E.ReduceAnd(conditions);
    stack.Pop(schema);
    return result;
}
// ----------------------------------------------------------------
// Check
// ----------------------------------------------------------------
export function CheckSchemaPushStack(stack, context, schema, value) {
    return (context.Push() && CheckSchema(stack, context, schema, value)) && context.Pop();
}
export function CheckSchema(stack, context, schema, value) {
    stack.Push(schema);
    const result = Schema.IsBooleanSchema(schema) ? CheckBooleanSchema(stack, context, schema, value) : ((!Schema.IsType(schema) || CheckType(stack, context, schema, value)) &&
        (!(G.IsObject(value) && !G.IsArray(value)) || ((!Schema.IsRequired(schema) || CheckRequired(stack, context, schema, value)) &&
            (!Schema.IsAdditionalProperties(schema) || CheckAdditionalProperties(stack, context, schema, value)) &&
            (!Schema.IsDependencies(schema) || CheckDependencies(stack, context, schema, value)) &&
            (!Schema.IsDependentRequired(schema) || CheckDependentRequired(stack, context, schema, value)) &&
            (!Schema.IsDependentSchemas(schema) || CheckDependentSchemas(stack, context, schema, value)) &&
            (!Schema.IsPatternProperties(schema) || CheckPatternProperties(stack, context, schema, value)) &&
            (!Schema.IsProperties(schema) || CheckProperties(stack, context, schema, value)) &&
            (!Schema.IsPropertyNames(schema) || CheckPropertyNames(stack, context, schema, value)) &&
            (!Schema.IsMinProperties(schema) || CheckMinProperties(stack, context, schema, value)) &&
            (!Schema.IsMaxProperties(schema) || CheckMaxProperties(stack, context, schema, value)))) &&
        (!G.IsArray(value) || ((!Schema.IsAdditionalItems(schema) || CheckAdditionalItems(stack, context, schema, value)) &&
            (!Schema.IsContains(schema) || CheckContains(stack, context, schema, value)) &&
            (!Schema.IsItems(schema) || CheckItems(stack, context, schema, value)) &&
            (!Schema.IsMaxContains(schema) || CheckMaxContains(stack, context, schema, value)) &&
            (!Schema.IsMaxItems(schema) || CheckMaxItems(stack, context, schema, value)) &&
            (!Schema.IsMinContains(schema) || CheckMinContains(stack, context, schema, value)) &&
            (!Schema.IsMinItems(schema) || CheckMinItems(stack, context, schema, value)) &&
            (!Schema.IsPrefixItems(schema) || CheckPrefixItems(stack, context, schema, value)) &&
            (!Schema.IsUniqueItems(schema) || CheckUniqueItems(stack, context, schema, value)))) &&
        (!G.IsString(value) || ((!Schema.IsMaxLength(schema) || CheckMaxLength(stack, context, schema, value)) &&
            (!Schema.IsMinLength(schema) || CheckMinLength(stack, context, schema, value)) &&
            (!Schema.IsFormat(schema) || CheckFormat(stack, context, schema, value)) &&
            (!Schema.IsPattern(schema) || CheckPattern(stack, context, schema, value)))) &&
        (!(G.IsNumber(value) || G.IsBigInt(value)) || ((!Schema.IsExclusiveMaximum(schema) || CheckExclusiveMaximum(stack, context, schema, value)) &&
            (!Schema.IsExclusiveMinimum(schema) || CheckExclusiveMinimum(stack, context, schema, value)) &&
            (!Schema.IsMaximum(schema) || CheckMaximum(stack, context, schema, value)) &&
            (!Schema.IsMinimum(schema) || CheckMinimum(stack, context, schema, value)) &&
            (!Schema.IsMultipleOf(schema) || CheckMultipleOf(stack, context, schema, value)))) &&
        (!Schema.IsRef(schema) || CheckRef(stack, context, schema, value)) &&
        (!Schema.IsRecursiveRef(schema) || CheckRecursiveRef(stack, context, schema, value)) &&
        (!Schema.IsDynamicRef(schema) || CheckDynamicRef(stack, context, schema, value)) &&
        (!Schema.IsGuard(schema) || CheckGuard(stack, context, schema, value)) &&
        (!Schema.IsConst(schema) || CheckConst(stack, context, schema, value)) &&
        (!Schema.IsEnum(schema) || CheckEnum(stack, context, schema, value)) &&
        (!Schema.IsIf(schema) || CheckIf(stack, context, schema, value)) &&
        (!Schema.IsNot(schema) || CheckNot(stack, context, schema, value)) &&
        (!Schema.IsAllOf(schema) || CheckAllOf(stack, context, schema, value)) &&
        (!Schema.IsAnyOf(schema) || CheckAnyOf(stack, context, schema, value)) &&
        (!Schema.IsOneOf(schema) || CheckOneOf(stack, context, schema, value)) &&
        (!Schema.IsUnevaluatedItems(schema) || (!G.IsArray(value) || CheckUnevaluatedItems(stack, context, schema, value))) &&
        (!Schema.IsUnevaluatedProperties(schema) || (!G.IsObject(value) || CheckUnevaluatedProperties(stack, context, schema, value))) &&
        (!Schema.IsRefine(schema) || CheckRefine(stack, context, schema, value)));
    stack.Pop(schema);
    return result;
}
// ----------------------------------------------------------------
// Error
// ----------------------------------------------------------------
export function ErrorSchemaPushStack(stack, context, schemaPath, instancePath, schema, value) {
    return (context.Push() && ErrorSchema(stack, context, schemaPath, instancePath, schema, value)) && context.Pop();
}
export function ErrorSchema(stack, context, schemaPath, instancePath, schema, value) {
    stack.Push(schema);
    const result = (Schema.IsBooleanSchema(schema)) ? ErrorBooleanSchema(stack, context, schemaPath, instancePath, schema, value) : (!!(+(!Schema.IsType(schema) || ErrorType(stack, context, schemaPath, instancePath, schema, value)) &
        +(!(G.IsObject(value) && !G.IsArray(value)) || !!(+(!Schema.IsRequired(schema) || ErrorRequired(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsAdditionalProperties(schema) || ErrorAdditionalProperties(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsDependencies(schema) || ErrorDependencies(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsDependentRequired(schema) || ErrorDependentRequired(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsDependentSchemas(schema) || ErrorDependentSchemas(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsPatternProperties(schema) || ErrorPatternProperties(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsProperties(schema) || ErrorProperties(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsPropertyNames(schema) || ErrorPropertyNames(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMinProperties(schema) || ErrorMinProperties(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMaxProperties(schema) || ErrorMaxProperties(stack, context, schemaPath, instancePath, schema, value)))) &
        +(!G.IsArray(value) || !!(+(!Schema.IsAdditionalItems(schema) || ErrorAdditionalItems(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsContains(schema) || ErrorContains(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsItems(schema) || ErrorItems(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMaxContains(schema) || ErrorMaxContains(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMaxItems(schema) || ErrorMaxItems(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMinContains(schema) || ErrorMinContains(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMinItems(schema) || ErrorMinItems(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsPrefixItems(schema) || ErrorPrefixItems(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsUniqueItems(schema) || ErrorUniqueItems(stack, context, schemaPath, instancePath, schema, value)))) &
        +(!G.IsString(value) || !!(+(!Schema.IsMaxLength(schema) || ErrorMaxLength(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMinLength(schema) || ErrorMinLength(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsFormat(schema) || ErrorFormat(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsPattern(schema) || ErrorPattern(stack, context, schemaPath, instancePath, schema, value)))) &
        +(!(G.IsNumber(value) || G.IsBigInt(value)) || !!(+(!Schema.IsExclusiveMaximum(schema) || ErrorExclusiveMaximum(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsExclusiveMinimum(schema) || ErrorExclusiveMinimum(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMaximum(schema) || ErrorMaximum(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMinimum(schema) || ErrorMinimum(stack, context, schemaPath, instancePath, schema, value)) &
            +(!Schema.IsMultipleOf(schema) || ErrorMultipleOf(stack, context, schemaPath, instancePath, schema, value)))) &
        +(!Schema.IsRef(schema) || ErrorRef(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsRecursiveRef(schema) || ErrorRecursiveRef(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsDynamicRef(schema) || ErrorDynamicRef(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsGuard(schema) || ErrorGuard(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsConst(schema) || ErrorConst(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsEnum(schema) || ErrorEnum(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsIf(schema) || ErrorIf(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsNot(schema) || ErrorNot(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsAllOf(schema) || ErrorAllOf(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsAnyOf(schema) || ErrorAnyOf(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsOneOf(schema) || ErrorOneOf(stack, context, schemaPath, instancePath, schema, value)) &
        +(!Schema.IsUnevaluatedItems(schema) || (!G.IsArray(value) || ErrorUnevaluatedItems(stack, context, schemaPath, instancePath, schema, value))) &
        +(!Schema.IsUnevaluatedProperties(schema) || (!G.IsObject(value) || ErrorUnevaluatedProperties(stack, context, schemaPath, instancePath, schema, value)))) &&
        (!Schema.IsRefine(schema) || ErrorRefine(stack, context, schemaPath, instancePath, schema, value)));
    stack.Pop(schema);
    return result;
}
