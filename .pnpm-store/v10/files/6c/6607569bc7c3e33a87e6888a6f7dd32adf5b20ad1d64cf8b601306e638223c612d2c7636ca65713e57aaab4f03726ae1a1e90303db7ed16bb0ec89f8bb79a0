/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @emails oncall+relay
 */

'use strict';

const IRTransformer = require('../core/IRTransformer');

const {createUserError, createCompilerError} = require('../core/CompilerError');
const {RelayFeatureFlags} = require('relay-runtime');

import type CompilerContext from '../core/CompilerContext';
import type {ScalarField} from '../core/IR';
import type {TypeID, InputTypeID, ScalarFieldTypeID} from '../core/Schema';

const FLIGHT_FIELD_COMPONENT_ARGUMENT_TYPE = 'String';
const FLIGHT_FIELD_COMPONENT_ARGUMENT_NAME = 'component';
const FLIGHT_FIELD_PROPS_ARGUMENT_NAME = 'props';
const FLIGHT_FIELD_PROPS_TYPE = 'ReactFlightProps';
const FLIGHT_FIELD_RETURN_TYPE = 'ReactFlightComponent';

type State = {
  parentType: TypeID,
  types: {
    propsType: InputTypeID,
    componentType: ScalarFieldTypeID,
  },
};

/**
 * Experimental transform for React Flight.
 */
function reactFlightComponentTransform(
  context: CompilerContext,
): CompilerContext {
  const schema = context.getSchema();
  let propsType = schema.getTypeFromString(FLIGHT_FIELD_PROPS_TYPE);
  propsType = propsType ? schema.asInputType(propsType) : null;
  let componentType = schema.getTypeFromString(FLIGHT_FIELD_RETURN_TYPE);
  componentType = componentType
    ? schema.asScalarFieldType(componentType)
    : null;
  if (
    !RelayFeatureFlags.ENABLE_REACT_FLIGHT_COMPONENT_FIELD ||
    propsType == null ||
    componentType == null
  ) {
    return context;
  }
  const types = {propsType, componentType};
  return IRTransformer.transform(
    context,
    {
      ScalarField: visitScalarField,
      LinkedField: visitLinkedField,
      InlineFragment: visitInlineFragment,
    },
    node => ({
      parentType: node.type,
      types,
    }),
  );
}

function visitInlineFragment(fragment, state) {
  // $FlowFixMe[incompatible-use]
  return this.traverse(fragment, {
    parentType: fragment.typeCondition ?? state.parentType,
    types: state.types,
  });
}

function visitLinkedField(field, state) {
  // $FlowFixMe[incompatible-use]
  return this.traverse(field, {parentType: field.type, types: state.types});
}

function visitScalarField(field: ScalarField, state: State): ScalarField {
  // use the return type to quickly determine if this is a flight field
  // $FlowFixMe[incompatible-use]
  const schema = this.getContext().getSchema();
  if (schema.getRawType(field.type) !== state.types.componentType) {
    return field;
  }

  // get the name of the component that provides this field
  const clientField = schema.getFieldByName(state.parentType, field.name);
  if (clientField == null) {
    throw createCompilerError(
      `Definition not found for field '${schema.getTypeString(
        state.parentType,
      )}.${field.name}'`,
      [field.loc],
    );
  }
  const componentDirective = clientField.directives.find(
    directive => directive.name === 'react_flight_component',
  );
  const componentNameArg = componentDirective?.args.find(
    arg => arg.name === 'name',
  );
  if (
    componentNameArg == null ||
    componentNameArg.value.kind !== 'StringValue' ||
    typeof componentNameArg.value.value !== 'string'
  ) {
    throw createUserError(
      'Invalid Flight field, expected the schema extension to specify ' +
        "the component's module name with the '@react_flight_component' directive",
      [field.loc],
    );
  }
  const componentName = componentNameArg.value.value;

  // validate that the parent type has a `flight(component, props)` field
  const flightField = schema.getFieldByName(state.parentType, 'flight');
  if (flightField == null) {
    throw createUserError(
      `Invalid Flight field, expected the parent type '${schema.getTypeString(
        state.parentType,
      )}' ` +
        "to define a 'flight(component: String, props: ReactFlightProps): ReactFlightComponent' field",
      [field.loc],
    );
  }
  const componentArg = flightField.args.get(
    FLIGHT_FIELD_COMPONENT_ARGUMENT_NAME,
  );
  const propsArg = flightField.args.get(FLIGHT_FIELD_PROPS_ARGUMENT_NAME);
  if (
    componentArg == null ||
    propsArg == null ||
    schema.getRawType(componentArg.type) !==
      schema.getTypeFromString(FLIGHT_FIELD_COMPONENT_ARGUMENT_TYPE) ||
    schema.getRawType(propsArg.type) !== state.types.propsType ||
    schema.getRawType(flightField.type) !== state.types.componentType
  ) {
    throw createUserError(
      `Invalid Flight field, expected the parent type '${schema.getTypeString(
        state.parentType,
      )}' ` +
        "to define a 'flight(component: String, props: ReactFlightProps): ReactFlightComponent' field",
      [field.loc],
    );
  }

  return {
    ...field,
    name: 'flight',
    args: [
      {
        kind: 'Argument',
        loc: field.loc,
        name: FLIGHT_FIELD_COMPONENT_ARGUMENT_NAME,
        type: schema.getTypeFromString(FLIGHT_FIELD_COMPONENT_ARGUMENT_TYPE),
        value: {
          kind: 'Literal',
          value: componentName,
          loc: field.loc,
        },
      },
      {
        kind: 'Argument',
        loc: field.loc,
        name: FLIGHT_FIELD_PROPS_ARGUMENT_NAME,
        type: state.types.propsType,
        value: {
          kind: 'ObjectValue',
          fields: field.args.map(arg => {
            return {
              kind: 'ObjectFieldValue',
              loc: arg.loc,
              name: arg.name,
              value: arg.value,
            };
          }),
          loc: field.loc,
        },
      },
    ],
    metadata: {
      ...(field.metadata || {}),
      flight: true,
    },
    type: state.types.componentType,
  };
}

module.exports = {
  transform: reactFlightComponentTransform,
};
