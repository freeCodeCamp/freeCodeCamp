/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {ConcreteRequest} from './RelayConcreteNode';

/**
 * Represents a single operation used to processing and normalize runtime
 * request results.
 */
export type NormalizationOperation = {|
  +kind: 'Operation',
  +name: string,
  +argumentDefinitions: $ReadOnlyArray<NormalizationLocalArgumentDefinition>,
  +selections: $ReadOnlyArray<NormalizationSelection>,
|};

export type NormalizationHandle =
  | NormalizationScalarHandle
  | NormalizationLinkedHandle;

export type NormalizationLinkedHandle = {|
  +kind: 'LinkedHandle',
  +alias: ?string,
  +name: string,
  +args: ?$ReadOnlyArray<NormalizationArgument>,
  +handle: string,
  +key: string,
  // NOTE: this property is optional because it's expected to be rarely used
  +dynamicKey?: ?NormalizationArgument,
  +filters: ?$ReadOnlyArray<string>,
  +handleArgs?: $ReadOnlyArray<NormalizationArgument>,
|};

export type NormalizationScalarHandle = {|
  +kind: 'ScalarHandle',
  +alias: ?string,
  +name: string,
  +args: ?$ReadOnlyArray<NormalizationArgument>,
  +handle: string,
  +key: string,
  // NOTE: this property is optional because it's expected to be rarely used
  +dynamicKey?: ?NormalizationArgument,
  +filters: ?$ReadOnlyArray<string>,
  +handleArgs?: $ReadOnlyArray<NormalizationArgument>,
|};

export type NormalizationArgument =
  | NormalizationListValueArgument
  | NormalizationLiteralArgument
  | NormalizationObjectValueArgument
  | NormalizationVariableArgument;

export type NormalizationCondition = {|
  +kind: 'Condition',
  +passingValue: boolean,
  +condition: string,
  +selections: $ReadOnlyArray<NormalizationSelection>,
|};

export type NormalizationClientExtension = {|
  +kind: 'ClientExtension',
  +selections: $ReadOnlyArray<NormalizationSelection>,
|};

export type NormalizationField =
  | NormalizationFlightField
  | NormalizationScalarField
  | NormalizationLinkedField;

export type NormalizationInlineFragment = {|
  +kind: 'InlineFragment',
  +selections: $ReadOnlyArray<NormalizationSelection>,
  +type: string,
  +abstractKey: ?string,
|};

export type NormalizationFragmentSpread = {|
  +kind: 'FragmentSpread',
  +fragment: NormalizationSplitOperation,
  +args: ?$ReadOnlyArray<NormalizationArgument>,
|};

export type NormalizationLinkedField = {|
  +kind: 'LinkedField',
  +alias: ?string,
  +name: string,
  +storageKey: ?string,
  +args: ?$ReadOnlyArray<NormalizationArgument>,
  +concreteType: ?string,
  +plural: boolean,
  +selections: $ReadOnlyArray<NormalizationSelection>,
|};

export type NormalizationActorChange = {|
  +kind: 'ActorChange',
  +linkedField: NormalizationLinkedField,
|};

export type NormalizationModuleImport = {|
  +args: ?$ReadOnlyArray<NormalizationArgument>,
  +kind: 'ModuleImport',
  +documentName: string,
  +fragmentPropName: string,
  +fragmentName: string,
|};

export type NormalizationListValueArgument = {|
  +kind: 'ListValue',
  +name: string,
  +items: $ReadOnlyArray<NormalizationArgument | null>,
|};

export type NormalizationLiteralArgument = {|
  +kind: 'Literal',
  +name: string,
  +type?: ?string,
  +value: mixed,
|};

export type NormalizationLocalArgumentDefinition = {|
  +kind: 'LocalArgument',
  +name: string,
  +defaultValue: mixed,
|};

export type NormalizationNode =
  | NormalizationClientExtension
  | NormalizationCondition
  | NormalizationDefer
  | NormalizationInlineFragment
  | NormalizationLinkedField
  | NormalizationOperation
  | NormalizationSplitOperation
  | NormalizationStream;

export type NormalizationScalarField = {|
  +kind: 'ScalarField',
  +alias: ?string,
  +name: string,
  +args: ?$ReadOnlyArray<NormalizationArgument>,
  +storageKey: ?string,
|};

export type NormalizationFlightField = {|
  +kind: 'FlightField',
  +alias: ?string,
  +name: string,
  +args: ?$ReadOnlyArray<NormalizationArgument>,
  +storageKey: ?string,
|};

export type NormalizationClientComponent = {|
  +args?: ?$ReadOnlyArray<NormalizationArgument>,
  +kind: 'ClientComponent',
  +fragment: NormalizationNode,
|};

export type NormalizationTypeDiscriminator = {|
  +kind: 'TypeDiscriminator',
  +abstractKey: string,
|};

export type NormalizationSelection =
  | NormalizationCondition
  | NormalizationClientComponent
  | NormalizationClientExtension
  | NormalizationDefer
  | NormalizationField
  | NormalizationFlightField
  | NormalizationFragmentSpread
  | NormalizationHandle
  | NormalizationInlineFragment
  | NormalizationModuleImport
  | NormalizationStream
  | NormalizationActorChange
  | NormalizationTypeDiscriminator;

export type NormalizationSplitOperation = {|
  +argumentDefinitions?: $ReadOnlyArray<NormalizationLocalArgumentDefinition>,
  +kind: 'SplitOperation',
  +name: string,
  +metadata: ?{+[key: string]: mixed, ...},
  +selections: $ReadOnlyArray<NormalizationSelection>,
|};

export type NormalizationStream = {|
  +if: string | null,
  +kind: 'Stream',
  +label: string,
  +selections: $ReadOnlyArray<NormalizationSelection>,
|};

export type NormalizationDefer = {|
  +if: string | null,
  +kind: 'Defer',
  +label: string,
  +selections: $ReadOnlyArray<NormalizationSelection>,
|};

export type NormalizationVariableArgument = {|
  +kind: 'Variable',
  +name: string,
  +type?: ?string,
  +variableName: string,
|};

export type NormalizationObjectValueArgument = {|
  +kind: 'ObjectValue',
  +name: string,
  +fields: $ReadOnlyArray<NormalizationArgument>,
|};

export type NormalizationSelectableNode =
  | NormalizationDefer
  | NormalizationLinkedField
  | NormalizationOperation
  | NormalizationSplitOperation
  | NormalizationStream;

export type NormalizationRootNode =
  | ConcreteRequest
  | NormalizationSplitOperation;
