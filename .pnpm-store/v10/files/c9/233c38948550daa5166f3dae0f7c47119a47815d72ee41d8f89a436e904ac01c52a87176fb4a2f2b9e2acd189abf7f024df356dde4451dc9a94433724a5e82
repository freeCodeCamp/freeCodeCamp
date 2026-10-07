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

// flowlint ambiguous-object-type:error

'use strict';

const IRTransformer = require('../core/IRTransformer');

import type CompilerContext from '../core/CompilerContext';
import type {Root} from '../core/IR';
import type {Schema, TypeID} from '../core/Schema';

// The purpose of this directive is to add GraphQL type inform for fields in
// the operation selection in order to use in in RelayMockPayloadGenerator
// to generate better mock values, and expand the API of MockResolvers
const SCHEMA_EXTENSION =
  'directive @relay_test_operation on QUERY | MUTATION | SUBSCRIPTION';

function testOperationDirective(context: CompilerContext): CompilerContext {
  return IRTransformer.transform(context, {
    Fragment: node => node,
    Root: visitRoot,
    SplitOperation: node => node,
  });
}

type TypeDetails = {|
  +type: string,
  +plural: boolean,
  +nullable: boolean,
  +enumValues: null | $ReadOnlyArray<string>,
|};

function getTypeDetails(schema: Schema, fieldType: TypeID): TypeDetails {
  const nullableType = schema.getNullableType(fieldType);
  const isNullable = !schema.isNonNull(fieldType);
  const isPlural = schema.isList(nullableType);
  const type = schema.getRawType(nullableType);

  return {
    enumValues: schema.isEnum(type)
      ? schema.getEnumValues(schema.assertEnumType(type))
      : null,
    nullable: isNullable,
    plural: isPlural,
    type: schema.getTypeString(type),
  };
}

function visitRoot(node: Root) {
  // $FlowFixMe[incompatible-use]
  const schema: Schema = this.getContext().getSchema();
  const testDirective = node.directives.find(
    directive => directive.name === 'relay_test_operation',
  );
  if (testDirective == null) {
    return node;
  }
  const queue = [
    {
      selections: node.selections,
      path: null,
    },
  ];
  const selectionsTypeInfo = {};
  while (queue.length > 0) {
    const {selections: currentSelections, path} = queue.pop();
    currentSelections.forEach(selection => {
      switch (selection.kind) {
        case 'FragmentSpread':
          // We don't expect to have fragment spreads at this point (it's operations only transform step)
          break;
        case 'ScalarField': {
          const nextPath =
            path === null ? selection.alias : `${path}.${selection.alias}`;
          selectionsTypeInfo[nextPath] = getTypeDetails(schema, selection.type);
          break;
        }
        case 'LinkedField': {
          const nextPath =
            path === null ? selection.alias : `${path}.${selection.alias}`;
          selectionsTypeInfo[nextPath] = getTypeDetails(schema, selection.type);
          queue.push({
            selections: selection.selections,
            path: nextPath,
          });
          break;
        }
        case 'Condition':
        case 'Defer':
        case 'InlineDataFragmentSpread':
        case 'InlineFragment':
        case 'ModuleImport':
        case 'Stream':
          queue.push({
            selections: selection.selections,
            path,
          });
          break;
        case 'ClientExtension':
          // Clinet extensions are not part of the schema. We should not generate type info.
          break;
        default:
          (selection: empty);
          break;
      }
    });
  }

  // Sort selectionsTypeInfo
  const keys = Object.keys(selectionsTypeInfo).sort((a, b) =>
    a < b ? -1 : a > b ? 1 : 0,
  );
  const sortedSelectionsTypeInfo = {};
  keys.forEach(key => {
    sortedSelectionsTypeInfo[key] = selectionsTypeInfo[key];
  });

  return {
    ...node,
    directives: node.directives.filter(
      directive => directive !== testDirective,
    ),
    metadata: {
      ...(node.metadata || {}),
      relayTestingSelectionTypeInfo: sortedSelectionsTypeInfo,
    },
  };
}

module.exports = {
  SCHEMA_EXTENSION,
  transform: testOperationDirective,
};
