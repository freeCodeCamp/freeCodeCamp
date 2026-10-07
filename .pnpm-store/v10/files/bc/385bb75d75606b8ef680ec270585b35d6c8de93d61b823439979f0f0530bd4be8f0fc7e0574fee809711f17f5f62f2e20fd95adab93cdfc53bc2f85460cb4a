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

const IRTransformer = require('../core/IRTransformer');

const {generateIDField} = require('../core/SchemaUtils');
const {hasUnaliasedSelection} = require('./TransformUtils');

import type CompilerContext from '../core/CompilerContext';
import type {InlineFragment, LinkedField, ScalarField} from '../core/IR';
import type {CompositeTypeID} from '../core/Schema';

const ID = 'id';
const NODE_TYPE = 'Node';

type State = {|
  idFieldForType: CompositeTypeID => ScalarField,
  idFragmentForType: CompositeTypeID => InlineFragment,
|};

/**
 * A transform that adds an `id` field on any type that has an id field but
 * where there is no unaliased `id` selection.
 */
function generateIDFieldTransform(context: CompilerContext): CompilerContext {
  const schema = context.getSchema();

  const typeToIDField = new Map();
  function idFieldForType(type: CompositeTypeID): ScalarField {
    let idField = typeToIDField.get(type);
    if (idField == null) {
      idField = generateIDField(schema, type);
      typeToIDField.set(type, idField);
    }
    return idField;
  }

  const typeToIDFragment = new Map();
  function idFragmentForType(type: CompositeTypeID): InlineFragment {
    let fragment = typeToIDFragment.get(type);
    if (fragment == null) {
      fragment = {
        kind: 'InlineFragment',
        directives: [],
        loc: {kind: 'Generated'},
        metadata: null,
        selections: [idFieldForType(type)],
        typeCondition: type,
      };
      typeToIDFragment.set(type, fragment);
    }
    return fragment;
  }

  const state = {
    idFieldForType,
    idFragmentForType,
  };
  return IRTransformer.transform(
    context,
    {
      LinkedField: visitLinkedField,
    },
    () => state,
  );
}

function visitLinkedField(field: LinkedField, state: State): LinkedField {
  // $FlowFixMe[incompatible-use]
  const transformedNode = this.traverse(field, state);

  // If the field already has an unaliased `id` field, do nothing
  if (hasUnaliasedSelection(field, ID)) {
    return transformedNode;
  }

  // $FlowFixMe[incompatible-use]
  const context: CompilerContext = this.getContext();
  const schema = context.getSchema();
  const unmodifiedType = schema.assertCompositeType(
    schema.getRawType(field.type),
  );

  // If the field type has an `id` subfield add an `id` selection
  if (
    schema.canHaveSelections(unmodifiedType) &&
    schema.hasId(unmodifiedType)
  ) {
    return {
      ...transformedNode,
      selections: [
        ...transformedNode.selections,
        state.idFieldForType(unmodifiedType),
      ],
    };
  }

  // If the field type is abstract, then generate a `... on Node { id }`
  // fragment if *any* concrete type implements Node. Then generate a
  // `... on PossibleType { id }` for every concrete type that does *not*
  // implement `Node`
  const nodeType = schema.getTypeFromString(NODE_TYPE);
  if (!nodeType) {
    return transformedNode;
  }

  const nodeInterface = schema.assertInterfaceType(nodeType);

  if (schema.isAbstractType(unmodifiedType)) {
    const selections = [...transformedNode.selections];
    if (schema.mayImplement(unmodifiedType, nodeInterface)) {
      selections.push(state.idFragmentForType(nodeInterface));
    }
    Array.from(
      schema
        .getPossibleTypes(schema.assertAbstractType(unmodifiedType))
        .values(),
    )
      .filter(
        concreteType =>
          !schema.implementsInterface(
            schema.assertCompositeType(concreteType),
            nodeInterface,
          ) && schema.hasId(concreteType),
      )
      .sort((a, b) =>
        schema.getTypeString(a) < schema.getTypeString(b) ? -1 : 1,
      )
      .forEach(concreteType => {
        selections.push(state.idFragmentForType(concreteType));
      });
    return {
      ...transformedNode,
      selections,
    };
  }

  return transformedNode;
}

module.exports = {
  transform: generateIDFieldTransform,
};
