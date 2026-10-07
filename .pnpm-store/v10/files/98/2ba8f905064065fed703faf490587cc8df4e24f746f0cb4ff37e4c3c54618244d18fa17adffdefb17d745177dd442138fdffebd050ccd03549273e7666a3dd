/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 * @emails oncall+relay
 */
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var IRTransformer = require('../core/IRTransformer');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError,
    createCompilerError = _require.createCompilerError;

var _require2 = require('relay-runtime'),
    RelayFeatureFlags = _require2.RelayFeatureFlags;

var FLIGHT_FIELD_COMPONENT_ARGUMENT_TYPE = 'String';
var FLIGHT_FIELD_COMPONENT_ARGUMENT_NAME = 'component';
var FLIGHT_FIELD_PROPS_ARGUMENT_NAME = 'props';
var FLIGHT_FIELD_PROPS_TYPE = 'ReactFlightProps';
var FLIGHT_FIELD_RETURN_TYPE = 'ReactFlightComponent';

/**
 * Experimental transform for React Flight.
 */
function reactFlightComponentTransform(context) {
  var schema = context.getSchema();
  var propsType = schema.getTypeFromString(FLIGHT_FIELD_PROPS_TYPE);
  propsType = propsType ? schema.asInputType(propsType) : null;
  var componentType = schema.getTypeFromString(FLIGHT_FIELD_RETURN_TYPE);
  componentType = componentType ? schema.asScalarFieldType(componentType) : null;

  if (!RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD || propsType == null || componentType == null) {
    return context;
  }

  var types = {
    propsType: propsType,
    componentType: componentType
  };
  return IRTransformer.transform(context, {
    ScalarField: visitScalarField,
    LinkedField: visitLinkedField,
    InlineFragment: visitInlineFragment
  }, function (node) {
    return {
      parentType: node.type,
      types: types
    };
  });
}

function visitInlineFragment(fragment, state) {
  var _fragment$typeConditi;

  // $FlowFixMe[incompatible-use]
  return this.traverse(fragment, {
    parentType: (_fragment$typeConditi = fragment.typeCondition) !== null && _fragment$typeConditi !== void 0 ? _fragment$typeConditi : state.parentType,
    types: state.types
  });
}

function visitLinkedField(field, state) {
  // $FlowFixMe[incompatible-use]
  return this.traverse(field, {
    parentType: field.type,
    types: state.types
  });
}

function visitScalarField(field, state) {
  // use the return type to quickly determine if this is a flight field
  // $FlowFixMe[incompatible-use]
  var schema = this.getContext().getSchema();

  if (schema.getRawType(field.type) !== state.types.componentType) {
    return field;
  } // get the name of the component that provides this field


  var clientField = schema.getFieldByName(state.parentType, field.name);

  if (clientField == null) {
    throw createCompilerError("Definition not found for field '".concat(schema.getTypeString(state.parentType), ".").concat(field.name, "'"), [field.loc]);
  }

  var componentDirective = clientField.directives.find(function (directive) {
    return directive.name === 'react_flight_component';
  });
  var componentNameArg = componentDirective === null || componentDirective === void 0 ? void 0 : componentDirective.args.find(function (arg) {
    return arg.name === 'name';
  });

  if (componentNameArg == null || componentNameArg.value.kind !== 'StringValue' || typeof componentNameArg.value.value !== 'string') {
    throw createUserError('Invalid Flight field, expected the schema extension to specify ' + "the component's module name with the '@react_flight_component' directive", [field.loc]);
  }

  var componentName = componentNameArg.value.value; // validate that the parent type has a `flight(component, props)` field

  var flightField = schema.getFieldByName(state.parentType, 'flight');

  if (flightField == null) {
    throw createUserError("Invalid Flight field, expected the parent type '".concat(schema.getTypeString(state.parentType), "' ") + "to define a 'flight(component: String, props: ReactFlightProps): ReactFlightComponent' field", [field.loc]);
  }

  var componentArg = flightField.args.get(FLIGHT_FIELD_COMPONENT_ARGUMENT_NAME);
  var propsArg = flightField.args.get(FLIGHT_FIELD_PROPS_ARGUMENT_NAME);

  if (componentArg == null || propsArg == null || schema.getRawType(componentArg.type) !== schema.getTypeFromString(FLIGHT_FIELD_COMPONENT_ARGUMENT_TYPE) || schema.getRawType(propsArg.type) !== state.types.propsType || schema.getRawType(flightField.type) !== state.types.componentType) {
    throw createUserError("Invalid Flight field, expected the parent type '".concat(schema.getTypeString(state.parentType), "' ") + "to define a 'flight(component: String, props: ReactFlightProps): ReactFlightComponent' field", [field.loc]);
  }

  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field), {}, {
    name: 'flight',
    args: [{
      kind: 'Argument',
      loc: field.loc,
      name: FLIGHT_FIELD_COMPONENT_ARGUMENT_NAME,
      type: schema.getTypeFromString(FLIGHT_FIELD_COMPONENT_ARGUMENT_TYPE),
      value: {
        kind: 'Literal',
        value: componentName,
        loc: field.loc
      }
    }, {
      kind: 'Argument',
      loc: field.loc,
      name: FLIGHT_FIELD_PROPS_ARGUMENT_NAME,
      type: state.types.propsType,
      value: {
        kind: 'ObjectValue',
        fields: field.args.map(function (arg) {
          return {
            kind: 'ObjectFieldValue',
            loc: arg.loc,
            name: arg.name,
            value: arg.value
          };
        }),
        loc: field.loc
      }
    }],
    metadata: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, field.metadata || {}), {}, {
      flight: true
    }),
    type: state.types.componentType
  });
}

module.exports = {
  transform: reactFlightComponentTransform
};