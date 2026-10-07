/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const RelayConcreteNode = require('../util/RelayConcreteNode');

const getRelayHandleKey = require('../util/getRelayHandleKey');
const invariant = require('invariant');
const stableCopy = require('../util/stableCopy');

import type {
  NormalizationHandle,
  NormalizationArgument,
  NormalizationField,
} from '../util/NormalizationNode';
import type {
  ReaderArgument,
  ReaderField,
  ReaderActorChange,
} from '../util/ReaderNode';
import type {Variables} from '../util/RelayRuntimeTypes';

export type Arguments = interface {+[string]: mixed};

const {VARIABLE, LITERAL, OBJECT_VALUE, LIST_VALUE} = RelayConcreteNode;

const MODULE_COMPONENT_KEY_PREFIX = '__module_component_';
const MODULE_OPERATION_KEY_PREFIX = '__module_operation_';

function getArgumentValue(
  arg: NormalizationArgument | ReaderArgument,
  variables: Variables,
): mixed {
  if (arg.kind === VARIABLE) {
    // Variables are provided at runtime and are not guaranteed to be stable.
    return getStableVariableValue(arg.variableName, variables);
  } else if (arg.kind === LITERAL) {
    // The Relay compiler generates stable ConcreteArgument values.
    return arg.value;
  } else if (arg.kind === OBJECT_VALUE) {
    const value = {};
    arg.fields.forEach(field => {
      value[field.name] = getArgumentValue(field, variables);
    });
    return value;
  } else if (arg.kind === LIST_VALUE) {
    const value = [];
    arg.items.forEach(item => {
      item != null ? value.push(getArgumentValue(item, variables)) : null;
    });
    return value;
  }
}

/**
 * Returns the values of field/fragment arguments as an object keyed by argument
 * names. Guaranteed to return a result with stable ordered nested values.
 */
function getArgumentValues(
  args: $ReadOnlyArray<NormalizationArgument | ReaderArgument>,
  variables: Variables,
): Arguments {
  const values = {};
  args.forEach(arg => {
    values[arg.name] = getArgumentValue(arg, variables);
  });
  return values;
}

/**
 * Given a handle field and variable values, returns a key that can be used to
 * uniquely identify the combination of the handle name and argument values.
 *
 * Note: the word "storage" here refers to the fact this key is primarily used
 * when writing the results of a key in a normalized graph or "store". This
 * name was used in previous implementations of Relay internals and is also
 * used here for consistency.
 */
function getHandleStorageKey(
  handleField: NormalizationHandle,
  variables: Variables,
): string {
  const {dynamicKey, handle, key, name, args, filters} = handleField;
  const handleName = getRelayHandleKey(handle, key, name);
  let filterArgs = null;
  if (args && filters && args.length !== 0 && filters.length !== 0) {
    filterArgs = args.filter(arg => filters.indexOf(arg.name) > -1);
  }
  if (dynamicKey) {
    // "Sort" the arguments by argument name: this is done by the compiler for
    // user-supplied arguments but the dynamic argument must also be in sorted
    // order.  Note that dynamic key argument name is double-underscore-
    // -prefixed, and a double-underscore prefix is disallowed for user-supplied
    // argument names, so there's no need to actually sort.
    filterArgs =
      filterArgs != null ? [dynamicKey, ...filterArgs] : [dynamicKey];
  }
  if (filterArgs === null) {
    return handleName;
  } else {
    return formatStorageKey(
      handleName,
      getArgumentValues(filterArgs, variables),
    );
  }
}

/**
 * Given a field and variable values, returns a key that can be used to
 * uniquely identify the combination of the field name and argument values.
 *
 * Note: the word "storage" here refers to the fact this key is primarily used
 * when writing the results of a key in a normalized graph or "store". This
 * name was used in previous implementations of Relay internals and is also
 * used here for consistency.
 */
function getStorageKey(
  field:
    | NormalizationField
    | NormalizationHandle
    | ReaderField
    | ReaderActorChange,
  variables: Variables,
): string {
  if (field.storageKey) {
    // TODO T23663664: Handle nodes do not yet define a static storageKey.
    return (field: $FlowFixMe).storageKey;
  }
  const args = typeof field.args === 'undefined' ? undefined : field.args;
  const name = field.name;
  return args && args.length !== 0
    ? formatStorageKey(name, getArgumentValues(args, variables))
    : name;
}

/**
 * Given a `name` (eg. "foo") and an object representing argument values
 * (eg. `{orberBy: "name", first: 10}`) returns a unique storage key
 * (ie. `foo{"first":10,"orderBy":"name"}`).
 *
 * This differs from getStorageKey which requires a ConcreteNode where arguments
 * are assumed to already be sorted into a stable order.
 */
function getStableStorageKey(name: string, args: ?Arguments): string {
  return formatStorageKey(name, stableCopy(args));
}

/**
 * Given a name and argument values, format a storage key.
 *
 * Arguments and the values within them are expected to be ordered in a stable
 * alphabetical ordering.
 */
function formatStorageKey(name: string, argValues: ?Arguments): string {
  if (!argValues) {
    return name;
  }
  const values = [];
  for (const argName in argValues) {
    if (argValues.hasOwnProperty(argName)) {
      const value = argValues[argName];
      if (value != null) {
        values.push(argName + ':' + (JSON.stringify(value) ?? 'undefined'));
      }
    }
  }
  return values.length === 0 ? name : name + `(${values.join(',')})`;
}

/**
 * Given Variables and a variable name, return a variable value with
 * all values in a stable order.
 */
function getStableVariableValue(name: string, variables: Variables): mixed {
  invariant(
    variables.hasOwnProperty(name),
    'getVariableValue(): Undefined variable `%s`.',
    name,
  );
  // $FlowFixMe[cannot-write]
  return stableCopy(variables[name]);
}

function getModuleComponentKey(documentName: string): string {
  return `${MODULE_COMPONENT_KEY_PREFIX}${documentName}`;
}

function getModuleOperationKey(documentName: string): string {
  return `${MODULE_OPERATION_KEY_PREFIX}${documentName}`;
}

/**
 * Constants shared by all implementations of RecordSource/MutableRecordSource/etc.
 */
const RelayStoreUtils = {
  ACTOR_IDENTIFIER_KEY: '__actorIdentifier',
  FRAGMENTS_KEY: '__fragments',
  FRAGMENT_OWNER_KEY: '__fragmentOwner',
  FRAGMENT_PROP_NAME_KEY: '__fragmentPropName',
  MODULE_COMPONENT_KEY: '__module_component', // alias returned by Reader
  ID_KEY: '__id',
  REF_KEY: '__ref',
  REFS_KEY: '__refs',
  ROOT_ID: 'client:root',
  ROOT_TYPE: '__Root',
  TYPENAME_KEY: '__typename',
  INVALIDATED_AT_KEY: '__invalidated_at',
  IS_WITHIN_UNMATCHED_TYPE_REFINEMENT: '__isWithinUnmatchedTypeRefinement',
  RELAY_RESOLVER_VALUE_KEY: '__resolverValue',
  RELAY_RESOLVER_INVALIDATION_KEY: '__resolverValueMayBeInvalid',
  RELAY_RESOLVER_INPUTS_KEY: '__resolverInputValues',
  RELAY_RESOLVER_READER_SELECTOR_KEY: '__resolverReaderSelector',

  formatStorageKey,
  getArgumentValue,
  getArgumentValues,
  getHandleStorageKey,
  getStorageKey,
  getStableStorageKey,
  getModuleComponentKey,
  getModuleOperationKey,
};

module.exports = RelayStoreUtils;
