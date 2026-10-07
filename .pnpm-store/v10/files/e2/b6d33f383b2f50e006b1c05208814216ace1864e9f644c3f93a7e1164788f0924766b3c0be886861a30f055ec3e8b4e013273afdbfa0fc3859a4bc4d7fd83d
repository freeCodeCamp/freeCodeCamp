/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var RelayConcreteNode = require('../util/RelayConcreteNode');

var getRelayHandleKey = require('../util/getRelayHandleKey');

var invariant = require('invariant');

var stableCopy = require('../util/stableCopy');

var VARIABLE = RelayConcreteNode.VARIABLE,
    LITERAL = RelayConcreteNode.LITERAL,
    OBJECT_VALUE = RelayConcreteNode.OBJECT_VALUE,
    LIST_VALUE = RelayConcreteNode.LIST_VALUE;
var MODULE_COMPONENT_KEY_PREFIX = '__module_component_';
var MODULE_OPERATION_KEY_PREFIX = '__module_operation_';

function getArgumentValue(arg, variables) {
  if (arg.kind === VARIABLE) {
    // Variables are provided at runtime and are not guaranteed to be stable.
    return getStableVariableValue(arg.variableName, variables);
  } else if (arg.kind === LITERAL) {
    // The Relay compiler generates stable ConcreteArgument values.
    return arg.value;
  } else if (arg.kind === OBJECT_VALUE) {
    var value = {};
    arg.fields.forEach(function (field) {
      value[field.name] = getArgumentValue(field, variables);
    });
    return value;
  } else if (arg.kind === LIST_VALUE) {
    var _value = [];
    arg.items.forEach(function (item) {
      item != null ? _value.push(getArgumentValue(item, variables)) : null;
    });
    return _value;
  }
}
/**
 * Returns the values of field/fragment arguments as an object keyed by argument
 * names. Guaranteed to return a result with stable ordered nested values.
 */


function getArgumentValues(args, variables) {
  var values = {};
  args.forEach(function (arg) {
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


function getHandleStorageKey(handleField, variables) {
  var dynamicKey = handleField.dynamicKey,
      handle = handleField.handle,
      key = handleField.key,
      name = handleField.name,
      args = handleField.args,
      filters = handleField.filters;
  var handleName = getRelayHandleKey(handle, key, name);
  var filterArgs = null;

  if (args && filters && args.length !== 0 && filters.length !== 0) {
    filterArgs = args.filter(function (arg) {
      return filters.indexOf(arg.name) > -1;
    });
  }

  if (dynamicKey) {
    // "Sort" the arguments by argument name: this is done by the compiler for
    // user-supplied arguments but the dynamic argument must also be in sorted
    // order.  Note that dynamic key argument name is double-underscore-
    // -prefixed, and a double-underscore prefix is disallowed for user-supplied
    // argument names, so there's no need to actually sort.
    filterArgs = filterArgs != null ? [dynamicKey].concat((0, _toConsumableArray2["default"])(filterArgs)) : [dynamicKey];
  }

  if (filterArgs === null) {
    return handleName;
  } else {
    return formatStorageKey(handleName, getArgumentValues(filterArgs, variables));
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


function getStorageKey(field, variables) {
  if (field.storageKey) {
    // TODO T23663664: Handle nodes do not yet define a static storageKey.
    return field.storageKey;
  }

  var args = typeof field.args === 'undefined' ? undefined : field.args;
  var name = field.name;
  return args && args.length !== 0 ? formatStorageKey(name, getArgumentValues(args, variables)) : name;
}
/**
 * Given a `name` (eg. "foo") and an object representing argument values
 * (eg. `{orberBy: "name", first: 10}`) returns a unique storage key
 * (ie. `foo{"first":10,"orderBy":"name"}`).
 *
 * This differs from getStorageKey which requires a ConcreteNode where arguments
 * are assumed to already be sorted into a stable order.
 */


function getStableStorageKey(name, args) {
  return formatStorageKey(name, stableCopy(args));
}
/**
 * Given a name and argument values, format a storage key.
 *
 * Arguments and the values within them are expected to be ordered in a stable
 * alphabetical ordering.
 */


function formatStorageKey(name, argValues) {
  if (!argValues) {
    return name;
  }

  var values = [];

  for (var argName in argValues) {
    if (argValues.hasOwnProperty(argName)) {
      var value = argValues[argName];

      if (value != null) {
        var _JSON$stringify;

        values.push(argName + ':' + ((_JSON$stringify = JSON.stringify(value)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : 'undefined'));
      }
    }
  }

  return values.length === 0 ? name : name + "(".concat(values.join(','), ")");
}
/**
 * Given Variables and a variable name, return a variable value with
 * all values in a stable order.
 */


function getStableVariableValue(name, variables) {
  !variables.hasOwnProperty(name) ? process.env.NODE_ENV !== "production" ? invariant(false, 'getVariableValue(): Undefined variable `%s`.', name) : invariant(false) : void 0; // $FlowFixMe[cannot-write]

  return stableCopy(variables[name]);
}

function getModuleComponentKey(documentName) {
  return "".concat(MODULE_COMPONENT_KEY_PREFIX).concat(documentName);
}

function getModuleOperationKey(documentName) {
  return "".concat(MODULE_OPERATION_KEY_PREFIX).concat(documentName);
}
/**
 * Constants shared by all implementations of RecordSource/MutableRecordSource/etc.
 */


var RelayStoreUtils = {
  ACTOR_IDENTIFIER_KEY: '__actorIdentifier',
  FRAGMENTS_KEY: '__fragments',
  FRAGMENT_OWNER_KEY: '__fragmentOwner',
  FRAGMENT_PROP_NAME_KEY: '__fragmentPropName',
  MODULE_COMPONENT_KEY: '__module_component',
  // alias returned by Reader
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
  formatStorageKey: formatStorageKey,
  getArgumentValue: getArgumentValue,
  getArgumentValues: getArgumentValues,
  getHandleStorageKey: getHandleStorageKey,
  getStorageKey: getStorageKey,
  getStableStorageKey: getStableStorageKey,
  getModuleComponentKey: getModuleComponentKey,
  getModuleOperationKey: getModuleOperationKey
};
module.exports = RelayStoreUtils;