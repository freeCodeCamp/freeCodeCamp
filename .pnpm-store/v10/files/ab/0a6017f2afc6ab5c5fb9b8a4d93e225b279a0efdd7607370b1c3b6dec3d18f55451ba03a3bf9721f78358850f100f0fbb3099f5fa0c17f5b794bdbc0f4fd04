// Spec Section: "Executable Definitions"
import { ExecutableDefinitionsRule } from './rules/ExecutableDefinitionsRule.mjs'; // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

import { FieldsOnCorrectTypeRule } from './rules/FieldsOnCorrectTypeRule.mjs'; // Spec Section: "Fragments on Composite Types"

import { FragmentsOnCompositeTypesRule } from './rules/FragmentsOnCompositeTypesRule.mjs'; // Spec Section: "Argument Names"

import {
  KnownArgumentNamesOnDirectivesRule,
  KnownArgumentNamesRule,
} from './rules/KnownArgumentNamesRule.mjs'; // Spec Section: "Directives Are Defined"

import { KnownDirectivesRule } from './rules/KnownDirectivesRule.mjs'; // Spec Section: "Fragment spread target defined"

import { KnownFragmentNamesRule } from './rules/KnownFragmentNamesRule.mjs'; // Spec Section: "Fragment Spread Type Existence"

import { KnownTypeNamesRule } from './rules/KnownTypeNamesRule.mjs'; // Spec Section: "Lone Anonymous Operation"

import { LoneAnonymousOperationRule } from './rules/LoneAnonymousOperationRule.mjs'; // SDL-specific validation rules

import { LoneSchemaDefinitionRule } from './rules/LoneSchemaDefinitionRule.mjs'; // TODO: Spec Section

import { MaxIntrospectionDepthRule } from './rules/MaxIntrospectionDepthRule.mjs'; // Spec Section: "Fragments must not form cycles"

import { NoFragmentCyclesRule } from './rules/NoFragmentCyclesRule.mjs'; // Spec Section: "All Variable Used Defined"

import { NoUndefinedVariablesRule } from './rules/NoUndefinedVariablesRule.mjs'; // Spec Section: "Fragments must be used"

import { NoUnusedFragmentsRule } from './rules/NoUnusedFragmentsRule.mjs'; // Spec Section: "All Variables Used"

import { NoUnusedVariablesRule } from './rules/NoUnusedVariablesRule.mjs'; // Spec Section: "Field Selection Merging"

import { OverlappingFieldsCanBeMergedRule } from './rules/OverlappingFieldsCanBeMergedRule.mjs'; // Spec Section: "Fragment spread is possible"

import { PossibleFragmentSpreadsRule } from './rules/PossibleFragmentSpreadsRule.mjs';
import { PossibleTypeExtensionsRule } from './rules/PossibleTypeExtensionsRule.mjs'; // Spec Section: "Argument Optionality"

import {
  ProvidedRequiredArgumentsOnDirectivesRule,
  ProvidedRequiredArgumentsRule,
} from './rules/ProvidedRequiredArgumentsRule.mjs'; // Spec Section: "Leaf Field Selections"

import { ScalarLeafsRule } from './rules/ScalarLeafsRule.mjs'; // Spec Section: "Subscriptions with Single Root Field"

import { SingleFieldSubscriptionsRule } from './rules/SingleFieldSubscriptionsRule.mjs';
import { UniqueArgumentDefinitionNamesRule } from './rules/UniqueArgumentDefinitionNamesRule.mjs'; // Spec Section: "Argument Uniqueness"

import { UniqueArgumentNamesRule } from './rules/UniqueArgumentNamesRule.mjs';
import { UniqueDirectiveNamesRule } from './rules/UniqueDirectiveNamesRule.mjs'; // Spec Section: "Directives Are Unique Per Location"

import { UniqueDirectivesPerLocationRule } from './rules/UniqueDirectivesPerLocationRule.mjs';
import { UniqueEnumValueNamesRule } from './rules/UniqueEnumValueNamesRule.mjs';
import { UniqueFieldDefinitionNamesRule } from './rules/UniqueFieldDefinitionNamesRule.mjs'; // Spec Section: "Fragment Name Uniqueness"

import { UniqueFragmentNamesRule } from './rules/UniqueFragmentNamesRule.mjs'; // Spec Section: "Input Object Field Uniqueness"

import { UniqueInputFieldNamesRule } from './rules/UniqueInputFieldNamesRule.mjs'; // Spec Section: "Operation Name Uniqueness"

import { UniqueOperationNamesRule } from './rules/UniqueOperationNamesRule.mjs';
import { UniqueOperationTypesRule } from './rules/UniqueOperationTypesRule.mjs';
import { UniqueTypeNamesRule } from './rules/UniqueTypeNamesRule.mjs'; // Spec Section: "Variable Uniqueness"

import { UniqueVariableNamesRule } from './rules/UniqueVariableNamesRule.mjs'; // Spec Section: "Value Type Correctness"

import { ValuesOfCorrectTypeRule } from './rules/ValuesOfCorrectTypeRule.mjs'; // Spec Section: "Variables are Input Types"

import { VariablesAreInputTypesRule } from './rules/VariablesAreInputTypesRule.mjs'; // Spec Section: "All Variable Usages Are Allowed"

import { VariablesInAllowedPositionRule } from './rules/VariablesInAllowedPositionRule.mjs';

/**
 * Technically these aren't part of the spec but they are strongly encouraged
 * validation rules.
 */
export const recommendedRules = Object.freeze([MaxIntrospectionDepthRule]);
/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */

export const specifiedRules = Object.freeze([
  ExecutableDefinitionsRule,
  UniqueOperationNamesRule,
  LoneAnonymousOperationRule,
  SingleFieldSubscriptionsRule,
  KnownTypeNamesRule,
  FragmentsOnCompositeTypesRule,
  VariablesAreInputTypesRule,
  ScalarLeafsRule,
  FieldsOnCorrectTypeRule,
  UniqueFragmentNamesRule,
  KnownFragmentNamesRule,
  NoUnusedFragmentsRule,
  PossibleFragmentSpreadsRule,
  NoFragmentCyclesRule,
  UniqueVariableNamesRule,
  NoUndefinedVariablesRule,
  NoUnusedVariablesRule,
  KnownDirectivesRule,
  UniqueDirectivesPerLocationRule,
  KnownArgumentNamesRule,
  UniqueArgumentNamesRule,
  ValuesOfCorrectTypeRule,
  ProvidedRequiredArgumentsRule,
  VariablesInAllowedPositionRule,
  OverlappingFieldsCanBeMergedRule,
  UniqueInputFieldNamesRule,
  ...recommendedRules,
]);
/**
 * @internal
 */

export const specifiedSDLRules = Object.freeze([
  LoneSchemaDefinitionRule,
  UniqueOperationTypesRule,
  UniqueTypeNamesRule,
  UniqueEnumValueNamesRule,
  UniqueFieldDefinitionNamesRule,
  UniqueArgumentDefinitionNamesRule,
  UniqueDirectiveNamesRule,
  KnownTypeNamesRule,
  KnownDirectivesRule,
  UniqueDirectivesPerLocationRule,
  PossibleTypeExtensionsRule,
  KnownArgumentNamesOnDirectivesRule,
  UniqueArgumentNamesRule,
  UniqueInputFieldNamesRule,
  ProvidedRequiredArgumentsOnDirectivesRule,
]);
