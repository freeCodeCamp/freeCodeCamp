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

const {createUserError} = require('../core/CompilerError');
const {ConnectionInterface} = require('relay-runtime');

const DELETE_RECORD = 'deleteRecord';
const DELETE_EDGE = 'deleteEdge';
const APPEND_EDGE = 'appendEdge';
const PREPEND_EDGE = 'prependEdge';
const APPEND_NODE = 'appendNode';
const PREPEND_NODE = 'prependNode';
const EDGE_LINKED_FIELD_DIRECTIVES = [APPEND_EDGE, PREPEND_EDGE];
const NODE_LINKED_FIELD_DIRECTIVES = [APPEND_NODE, PREPEND_NODE];
const LINKED_FIELD_DIRECTIVES = [
  ...EDGE_LINKED_FIELD_DIRECTIVES,
  ...NODE_LINKED_FIELD_DIRECTIVES,
];

const SCHEMA_EXTENSION = `
  directive @${DELETE_RECORD} on FIELD
  directive @${DELETE_EDGE}(
    connections: [ID!]!
  ) on FIELD
  directive @${APPEND_EDGE}(
    connections: [ID!]!
  ) on FIELD
  directive @${PREPEND_EDGE}(
    connections: [ID!]!
  ) on FIELD
  directive @${APPEND_NODE}(
    connections: [ID!]!
    edgeTypeName: String!
  ) on FIELD
  directive @${PREPEND_NODE}(
    connections: [ID!]!
    edgeTypeName: String!
  ) on FIELD
`;

import type CompilerContext from '../core/CompilerContext';
import type {ScalarField, LinkedField, Root, Handle} from '../core/IR';

function transform(context: CompilerContext): CompilerContext {
  return IRTransformer.transform(context, {
    ScalarField: visitScalarField,
    LinkedField: visitLinkedField,
    SplitOperation: skip,
    Fragment: skip,
  });
}

function skip<T>(node: T): T {
  return node;
}

function visitScalarField(field: ScalarField): ScalarField {
  const linkedFieldDirective = field.directives.find(
    directive => LINKED_FIELD_DIRECTIVES.indexOf(directive.name) > -1,
  );
  if (linkedFieldDirective != null) {
    throw createUserError(
      `Invalid use of @${linkedFieldDirective.name} on scalar field '${field.name}'`,
      [linkedFieldDirective.loc],
    );
  }
  const deleteNodeDirective = field.directives.find(
    directive => directive.name === DELETE_RECORD,
  );
  const deleteEdgeDirective = field.directives.find(
    directive => directive.name === DELETE_EDGE,
  );
  if (deleteNodeDirective != null && deleteEdgeDirective != null) {
    throw createUserError(
      `Both @deleteNode and @deleteEdge are used on field '${field.name}'. Only one directive is supported for now.`,
      [deleteNodeDirective.loc, deleteEdgeDirective.loc],
    );
  }
  const targetDirective = deleteNodeDirective ?? deleteEdgeDirective;
  if (targetDirective == null) {
    return field;
  }

  // $FlowFixMe[incompatible-use]
  const schema = this.getContext().getSchema();

  if (!schema.isId(schema.getRawType(field.type))) {
    throw createUserError(
      `Invalid use of @${targetDirective.name} on field '${
        field.name
      }'. Expected field to return an ID or list of ID values, got ${schema.getTypeString(
        field.type,
      )}.`,
      [targetDirective.loc],
    );
  }
  const connectionsArg = targetDirective.args.find(
    arg => arg.name === 'connections',
  );
  const handle: Handle = {
    name: targetDirective.name,
    key: '',
    dynamicKey: null,
    filters: null,
    handleArgs: connectionsArg ? [connectionsArg] : undefined,
  };
  return {
    ...field,
    directives: field.directives.filter(
      directive => directive !== targetDirective,
    ),
    handles: field.handles ? [...field.handles, handle] : [handle],
  };
}

function visitLinkedField(field: LinkedField): LinkedField {
  // $FlowFixMe[incompatible-use]
  const transformedField = this.traverse(field);
  const deleteDirective = transformedField.directives.find(
    directive => directive.name === DELETE_RECORD,
  );
  if (deleteDirective != null) {
    throw createUserError(
      `Invalid use of @${deleteDirective.name} on scalar field '${transformedField.name}'.`,
      [deleteDirective.loc],
    );
  }
  const edgeDirective = transformedField.directives.find(
    directive => EDGE_LINKED_FIELD_DIRECTIVES.indexOf(directive.name) > -1,
  );
  const nodeDirective = transformedField.directives.find(
    directive => NODE_LINKED_FIELD_DIRECTIVES.indexOf(directive.name) > -1,
  );

  if (edgeDirective == null && nodeDirective == null) {
    return transformedField;
  }
  if (edgeDirective != null && nodeDirective != null) {
    throw createUserError(
      `Invalid use of @${edgeDirective.name} and @${nodeDirective.name} on field '${transformedField.name}' - these directives cannot be used together.`,
      [edgeDirective.loc],
    );
  }
  const targetDirective = edgeDirective ?? nodeDirective;
  const connectionsArg = targetDirective.args.find(
    arg => arg.name === 'connections',
  );
  if (connectionsArg == null) {
    throw createUserError(
      `Expected the 'connections' argument to be defined on @${targetDirective.name}.`,
      [targetDirective.loc],
    );
  }
  // $FlowFixMe[incompatible-use]
  const schema = this.getContext().getSchema();
  if (edgeDirective) {
    const fieldType = schema.getRawType(transformedField.type);
    const fields = schema.getFields(fieldType);
    let cursorFieldID;
    let nodeFieldID;
    for (const fieldID of fields) {
      const fieldName = schema.getFieldName(fieldID);
      if (fieldName === ConnectionInterface.get().CURSOR) {
        cursorFieldID = fieldID;
      } else if (fieldName === ConnectionInterface.get().NODE) {
        nodeFieldID = fieldID;
      }
    }

    // Edge
    if (cursorFieldID != null && nodeFieldID != null) {
      const handle: Handle = {
        name: edgeDirective.name,
        key: '',
        dynamicKey: null,
        filters: null,
        handleArgs: [connectionsArg],
      };
      return {
        ...transformedField,
        directives: transformedField.directives.filter(
          directive => directive !== edgeDirective,
        ),
        handles: transformedField.handles
          ? [...transformedField.handles, handle]
          : [handle],
      };
    }
    throw createUserError(
      `Unsupported use of @${edgeDirective.name} on field '${transformedField.name}', expected an edge field (a field with 'cursor' and 'node' selection).`,
      [targetDirective.loc],
    );
  } else {
    // Node
    const edgeTypeNameArg = nodeDirective.args.find(
      arg => arg.name === 'edgeTypeName',
    );
    if (!edgeTypeNameArg) {
      throw createUserError(
        `Unsupported use of @${nodeDirective.name} on field '${transformedField.name}', 'edgeTypeName' argument must be provided.`,
        [targetDirective.loc],
      );
    }
    const rawType = schema.getRawType(transformedField.type);
    if (schema.canHaveSelections(rawType)) {
      const handle: Handle = {
        name: nodeDirective.name,
        key: '',
        dynamicKey: null,
        filters: null,
        handleArgs: [connectionsArg, edgeTypeNameArg],
      };
      return {
        ...transformedField,
        directives: transformedField.directives.filter(
          directive => directive !== nodeDirective,
        ),
        handles: transformedField.handles
          ? [...transformedField.handles, handle]
          : [handle],
      };
    }
    throw createUserError(
      `Unsupported use of @${nodeDirective.name} on field '${
        transformedField.name
      }'. Expected an object, union or interface, but got '${schema.getTypeString(
        transformedField.type,
      )}'.`,
      [nodeDirective.loc],
    );
  }
}

module.exports = {
  SCHEMA_EXTENSION,
  transform,
};
