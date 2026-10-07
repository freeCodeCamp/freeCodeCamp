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

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var IRTransformer = require('../core/IRTransformer');

var SchemaUtils = require('../core/SchemaUtils');

var invariant = require('invariant');

var nullthrows = require('nullthrows');

var _require = require('relay-runtime'),
    getRelayHandleKey = _require.getRelayHandleKey;

function fieldHandleTransform(context) {
  return IRTransformer.transform(context, {
    LinkedField: visitField,
    ScalarField: visitField
  });
}
/**
 * @internal
 */


function visitField(field) {
  // $FlowFixMe[incompatible-use]
  var nextField = field.kind === 'LinkedField' ? this.traverse(field) : field;
  var handles = nextField.handles;

  if (!handles || !handles.length) {
    return nextField;
  } // ensure exactly one handle


  !(handles.length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'FieldHandleTransform: Expected fields to have at most one ' + '"handle" property, got `%s`.', handles.join(', ')) : invariant(false) : void 0; // $FlowFixMe[incompatible-use]

  var context = this.getContext();
  var schema = context.getSchema();
  var alias = nextField.alias;
  var handle = handles[0];
  var name = getRelayHandleKey(handle.name, handle.key, nextField.name);
  var filters = handle.filters;
  var args = filters ? nextField.args.filter(function (arg) {
    return filters.indexOf(arg.name) !== -1;
  }) : [];

  if (handle.dynamicKey != null) {
    args.push({
      kind: 'Argument',
      loc: handle.dynamicKey.loc,
      name: '__dynamicKey',
      type: SchemaUtils.getNullableStringInput(schema),
      value: nullthrows(handle.dynamicKey)
    });
  }

  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, nextField), {}, {
    args: args,
    alias: alias,
    name: name,
    handles: null
  });
}

module.exports = {
  transform: fieldHandleTransform
};