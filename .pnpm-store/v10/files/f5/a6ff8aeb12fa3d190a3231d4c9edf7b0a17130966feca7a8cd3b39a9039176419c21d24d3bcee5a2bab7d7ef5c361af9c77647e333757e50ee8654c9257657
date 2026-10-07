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

const {createUserError} = require('../../core/CompilerError');
const {
  buildFragmentSpread,
  buildOperationArgumentDefinitions,
} = require('./utils');

import type {Fragment} from '../../core/IR';
import type {Schema} from '../../core/Schema';
import type {QueryGenerator, RefetchRoot} from '.';

function buildRefetchOperation(
  schema: Schema,
  fragment: Fragment,
  queryName: string,
): ?RefetchRoot {
  let fetchableIdentifierField = null;
  if (schema.isObject(fragment.type)) {
    const objectType = schema.assertObjectType(fragment.type);
    fetchableIdentifierField = schema.getFetchableFieldName(objectType);
  }
  if (fetchableIdentifierField == null) {
    return null;
  }
  const identifierField = schema.getFieldConfig(
    schema.expectField(fragment.type, fetchableIdentifierField),
  );
  if (!schema.isId(schema.getRawType(identifierField.type))) {
    const typeName = schema.getTypeString(fragment.type);
    throw createUserError(
      `Invalid use of @refetchable on fragment '${fragment.name}', the type ` +
        `'${typeName}' is @fetchable but the identifying field '${fetchableIdentifierField}' ` +
        "does not have type 'ID'.",
      [fragment.loc],
    );
  }

  const queryType = schema.expectQueryType();
  const fetchFieldName = `fetch__${schema.getTypeString(fragment.type)}`;
  const fetchField = schema.getFieldConfig(
    schema.expectField(queryType, fetchFieldName),
  );
  if (
    !(
      fetchField != null &&
      schema.isObject(fetchField.type) &&
      schema.areEqualTypes(fetchField.type, fragment.type) &&
      schema.areEqualTypes(
        schema.getNullableType(fetchField.args[0].type),
        schema.expectIdType(),
      )
    )
  ) {
    const typeName = schema.getTypeString(fragment.type);
    throw createUserError(
      `Invalid use of @refetchable on fragment '${fragment.name}', the type ` +
        `'${typeName}' is @fetchable but there is no corresponding '${fetchFieldName}'` +
        `field or it is invalid (expected '${fetchFieldName}(id: ID!): ${typeName}').`,
      [fragment.loc],
    );
  }

  // name and type of the node(_: ID) field parameter
  const idArgName = fetchField.args[0].name;
  const idArgType = fetchField.args[0].type;
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
    identifierField: fetchableIdentifierField,
    path: [fetchFieldName],
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
          alias: fetchFieldName,
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
          name: fetchFieldName,
          selections: [buildFragmentSpread(fragment)],
          type: fragment.type,
        },
      ],
      type: queryType,
    },
    transformedFragment: enforceIDField(
      schema,
      fragment,
      fetchableIdentifierField,
    ),
  };
}

function enforceIDField(
  schema: Schema,
  fragment: Fragment,
  fetchableIdentifierField: string,
): Fragment {
  const idSelection = fragment.selections.find(
    selection =>
      selection.kind === 'ScalarField' &&
      selection.name === fetchableIdentifierField &&
      selection.alias === fetchableIdentifierField &&
      schema.areEqualTypes(
        schema.getNullableType(selection.type),
        schema.expectIdType(),
      ),
  );
  if (idSelection) {
    return fragment;
  }
  const idField = SchemaUtils.generateIDField(schema, fragment.type);
  // idField is uniquely owned here, safe to mutate
  (idField: $FlowFixMe).alias = fetchableIdentifierField;
  // idField is uniquely owned here, safe to mutate
  (idField: $FlowFixMe).name = fetchableIdentifierField;
  return {
    ...fragment,
    selections: [...fragment.selections, idField],
  };
}

module.exports = ({
  description: '@fetchable types',
  buildRefetchOperation,
}: QueryGenerator);
