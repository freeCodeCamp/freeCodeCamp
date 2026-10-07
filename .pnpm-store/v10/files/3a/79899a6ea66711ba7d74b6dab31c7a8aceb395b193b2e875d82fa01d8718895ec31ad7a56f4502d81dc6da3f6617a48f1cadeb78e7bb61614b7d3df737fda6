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

const SchemaUtils = require('../../core/SchemaUtils');

const nullthrows = require('nullthrows');

const {createUserError} = require('../../core/CompilerError');
const {
  buildFragmentSpread,
  buildOperationArgumentDefinitions,
} = require('./utils');

import type {Fragment} from '../../core/IR';
import type {Schema} from '../../core/Schema';
import type {QueryGenerator, RefetchRoot} from '.';

const NODE_TYPE_NAME = 'Node';
const NODE_FIELD_NAME = 'node';

function buildRefetchOperation(
  schema: Schema,
  fragment: Fragment,
  queryName: string,
): ?RefetchRoot {
  const eligible =
    schema.getTypeString(fragment.type) === NODE_TYPE_NAME ||
    (schema.isObject(fragment.type) &&
      schema
        .getInterfaces(schema.assertCompositeType(fragment.type))
        .some(interfaceType =>
          schema.areEqualTypes(
            interfaceType,
            schema.expectTypeFromString(NODE_TYPE_NAME),
          ),
        )) ||
    (schema.isAbstractType(fragment.type) &&
      Array.from(
        schema.getPossibleTypes(schema.assertAbstractType(fragment.type)),
      ).every(possibleType =>
        schema.implementsInterface(
          schema.assertCompositeType(possibleType),
          schema.assertInterfaceType(
            schema.expectTypeFromString(NODE_TYPE_NAME),
          ),
        ),
      ));
  if (!eligible) {
    return null;
  }

  const queryType = schema.expectQueryType();
  const nodeType = schema.getTypeFromString(NODE_TYPE_NAME);
  const nodeField = schema.getFieldConfig(
    schema.expectField(queryType, NODE_FIELD_NAME),
  );
  if (
    !(
      nodeType &&
      schema.isInterface(nodeType) &&
      schema.isInterface(nodeField.type) &&
      schema.areEqualTypes(nodeField.type, nodeType) &&
      nodeField.args.length === 1 &&
      schema.areEqualTypes(
        schema.getNullableType(nodeField.args[0].type),
        schema.expectIdType(),
      ) &&
      // the fragment must be on Node or on a type that implements Node
      ((schema.isObject(fragment.type) &&
        schema
          .getInterfaces(schema.assertCompositeType(fragment.type))
          .some(interfaceType =>
            schema.areEqualTypes(interfaceType, nodeType),
          )) ||
        (schema.isAbstractType(fragment.type) &&
          Array.from(
            schema.getPossibleTypes(schema.assertAbstractType(fragment.type)),
          ).every(possibleType =>
            schema
              .getInterfaces(schema.assertCompositeType(possibleType))
              .some(interfaceType =>
                schema.areEqualTypes(interfaceType, nodeType),
              ),
          )))
    )
  ) {
    throw createUserError(
      `Invalid use of @refetchable on fragment '${fragment.name}', check ` +
        'that your schema defines a `Node { id: ID }` interface and has a ' +
        '`node(id: ID): Node` field on the query type (the id argument may ' +
        'also be non-null).',
      [fragment.loc],
    );
  }

  // name and type of the node(_: ID) field parameter
  const idArgName = nodeField.args[0].name;
  const idArgType = nodeField.args[0].type;
  // name and type of the query variable
  const idVariableType = SchemaUtils.getNonNullIdInput(schema);
  const idVariableName = 'id';

  const argumentDefinitions = buildOperationArgumentDefinitions(
    fragment.argumentDefinitions,
  );
  const idArgument = argumentDefinitions.find(
    argDef => argDef.name === idVariableName,
  );
  if (idArgument != null) {
    throw createUserError(
      `Invalid use of @refetchable on fragment \`${fragment.name}\`, this ` +
        'fragment already has an `$id` variable in scope.',
      [idArgument.loc],
    );
  }
  const argumentDefinitionsWithId = [
    ...argumentDefinitions,
    {
      defaultValue: null,
      kind: 'LocalArgumentDefinition',
      loc: {kind: 'Derived', source: fragment.loc},
      name: idVariableName,
      type: idVariableType,
    },
  ];
  return {
    identifierField: 'id',
    path: [NODE_FIELD_NAME],
    node: {
      argumentDefinitions: argumentDefinitionsWithId,
      directives: [],
      kind: 'Root',
      loc: {kind: 'Derived', source: fragment.loc},
      metadata: null,
      name: queryName,
      operation: 'query',
      selections: [
        {
          alias: NODE_FIELD_NAME,
          args: [
            {
              kind: 'Argument',
              loc: {kind: 'Derived', source: fragment.loc},
              name: idArgName,
              type: schema.assertInputType(idArgType),
              value: {
                kind: 'Variable',
                loc: {kind: 'Derived', source: fragment.loc},
                variableName: idVariableName,
                type: idVariableType,
              },
            },
          ],
          connection: false,
          directives: [],
          handles: null,
          kind: 'LinkedField',
          loc: {kind: 'Derived', source: fragment.loc},
          metadata: null,
          name: NODE_FIELD_NAME,
          selections: [buildFragmentSpread(fragment)],
          type: schema.assertLinkedFieldType(nodeType),
        },
      ],
      type: queryType,
    },
    transformedFragment: enforceIDField(schema, fragment),
  };
}

function enforceIDField(schema: Schema, fragment: Fragment): Fragment {
  const idSelection = fragment.selections.find(
    selection =>
      selection.kind === 'ScalarField' &&
      selection.name === 'id' &&
      selection.alias === 'id' &&
      schema.areEqualTypes(
        schema.getNullableType(selection.type),
        schema.expectIdType(),
      ),
  );
  if (idSelection) {
    return fragment;
  }
  const idField = schema.getFieldByName(fragment.type, 'id');
  const nodeType = schema.assertCompositeType(
    nullthrows(schema.getTypeFromString(NODE_TYPE_NAME)),
  );
  const generatedIDSelection = idField
    ? SchemaUtils.generateIDField(schema, fragment.type)
    : {
        kind: 'InlineFragment',
        directives: [],
        loc: {kind: 'Generated'},
        metadata: null,
        selections: [SchemaUtils.generateIDField(schema, nodeType)],
        typeCondition: nodeType,
      };
  return {
    ...fragment,
    selections: [...fragment.selections, generatedIDSelection],
  };
}

module.exports = ({
  description: 'the Node interface or types implementing the Node interface',
  buildRefetchOperation,
}: QueryGenerator);
