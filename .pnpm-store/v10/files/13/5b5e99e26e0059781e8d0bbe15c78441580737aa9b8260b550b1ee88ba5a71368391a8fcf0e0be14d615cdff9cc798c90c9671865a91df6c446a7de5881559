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

const IRVisitor = require('../core/IRVisitor');

const getLiteralArgumentValues = require('../core/getLiteralArgumentValues');
const inferRootArgumentDefinitions = require('../core/inferRootArgumentDefinitions');

const {
  createUserError,
  eachWithCombinedError,
} = require('../core/CompilerError');
const {buildRefetchOperation} = require('./query-generators');

import type CompilerContext from '../core/CompilerContext';
import type {Argument, Field, Fragment} from '../core/IR';
import type {Schema} from '../core/Schema';
import type {ReaderPaginationMetadata} from 'relay-runtime';

const SCHEMA_EXTENSION = `
  directive @refetchable(
    queryName: String!
  ) on FRAGMENT_DEFINITION
`;

/**
 * This transform synthesizes "refetch" queries for fragments that
 * are trivially refetchable. This is comprised of three main stages:
 *
 * 1. Validating that fragments marked with @refetchable qualify for
 *    refetch query generation; mainly this means that the fragment
 *    type is able to be refetched in some canonical way.
 * 2. Determining the variable definitions to use for each generated
 *    query. GraphQL does not have a notion of fragment-local variables
 *    at all, and although Relay adds this concept developers are still
 *    allowed to reference global variables. This necessitates a
 *    visiting all reachable fragments for each @refetchable fragment,
 *    and finding the union of all global variables expceted to be defined.
 * 3. Building the refetch queries, a straightforward copying transform from
 *    Fragment to Root IR nodes.
 */
function refetchableFragmentTransform(
  context: CompilerContext,
): CompilerContext {
  const schema = context.getSchema();

  const refetchOperations = buildRefetchMap(context);
  let nextContext = context;
  eachWithCombinedError(refetchOperations, ([refetchName, fragment]) => {
    const {
      identifierField,
      path,
      node,
      transformedFragment,
    } = buildRefetchOperation(schema, fragment, refetchName);
    const connectionMetadata = extractConnectionMetadata(
      context.getSchema(),
      transformedFragment,
    );
    nextContext = nextContext.replace({
      ...transformedFragment,
      metadata: {
        ...(transformedFragment.metadata || {}),
        refetch: {
          connection: connectionMetadata ?? null,
          operation: refetchName,
          fragmentPathInResult: path,
          identifierField,
        },
      },
    });
    nextContext = nextContext.add({
      ...node,
      metadata: {
        ...(node.metadata || {}),
        derivedFrom: transformedFragment.name,
        isRefetchableQuery: true,
      },
    });
  });
  return nextContext;
}

/**
 * Walk the documents of a compiler context and create a mapping of
 * refetch operation names to the source fragment from which the refetch
 * operation should be derived.
 */
function buildRefetchMap(context: CompilerContext): Map<string, Fragment> {
  const refetchOperations = new Map();
  eachWithCombinedError(context.documents(), node => {
    if (node.kind !== 'Fragment') {
      return;
    }
    const refetchName = getRefetchQueryName(node);
    if (refetchName === null) {
      return;
    }
    const previousOperation = refetchOperations.get(refetchName);
    if (previousOperation != null) {
      throw createUserError(
        `Duplicate definition for @refetchable operation '${refetchName}' from fragments '${node.name}' and '${previousOperation.name}'`,
        [node.loc, previousOperation.loc],
      );
    }
    refetchOperations.set(refetchName, node);
  });
  const transformed = inferRootArgumentDefinitions(context);
  return new Map(
    Array.from(refetchOperations.entries(), ([name, fragment]) => {
      return [name, transformed.getFragment(fragment.name)];
    }),
  );
}

/**
 * Validate that any @connection usage is valid for refetching:
 * - Variables are used for both the "count" and "cursor" arguments
 *   (after/first or before/last)
 * - Exactly one connection
 * - Has a stable path to the connection data
 *
 * Returns connection metadata to add to the transformed fragment or undefined
 * if there is no connection.
 */
function extractConnectionMetadata(
  schema: Schema,
  fragment: Fragment,
): ReaderPaginationMetadata | void {
  const fields = [];
  let connectionField = null;
  let path = null;
  IRVisitor.visit(fragment, {
    LinkedField: {
      enter(field) {
        fields.push(field);
        if (
          field.connection === true ||
          (field.handles &&
            field.handles.some(handle => handle.name === 'connection'))
        ) {
          // Disallow multiple @connections
          if (connectionField != null) {
            throw createUserError(
              `Invalid use of @refetchable with @connection in fragment '${fragment.name}', at most once @connection can appear in a refetchable fragment.`,
              [field.loc],
            );
          }
          // Disallow connections within plurals
          const pluralOnPath = fields.find(pathField =>
            schema.isList(schema.getNullableType(pathField.type)),
          );
          if (pluralOnPath) {
            throw createUserError(
              `Invalid use of @refetchable with @connection in fragment '${fragment.name}', refetchable connections cannot appear inside plural fields.`,
              [field.loc, pluralOnPath.loc],
            );
          }
          connectionField = field;
          path = fields.map(pathField => pathField.alias);
        }
      },
      leave() {
        fields.pop();
      },
    },
  });
  if (connectionField == null || path == null) {
    return;
  }
  // Validate arguments: if either of before/last appear they must both appear
  // and use variables (not scalar values)
  let backward = null;
  const before = findArgument(connectionField, 'before');
  const last = findArgument(connectionField, 'last');
  if (before || last) {
    if (
      !before ||
      !last ||
      before.value.kind !== 'Variable' ||
      last.value.kind !== 'Variable'
    ) {
      throw createUserError(
        `Invalid use of @refetchable with @connection in fragment '${fragment.name}', refetchable connections must use variables for the before and last arguments.`,
        [
          connectionField.loc,
          before && before.value.kind !== 'Variable' ? before.value.loc : null,
          last && last.value.kind !== 'Variable' ? last.value.loc : null,
        ].filter(Boolean),
      );
    }
    backward = {
      count: last.value.variableName,
      cursor: before.value.variableName,
    };
  }
  // Validate arguments: if either of after/first appear they must both appear
  // and use variables (not scalar values)
  let forward = null;
  const after = findArgument(connectionField, 'after');
  const first = findArgument(connectionField, 'first');
  if (after || first) {
    if (
      !after ||
      !first ||
      after.value.kind !== 'Variable' ||
      first.value.kind !== 'Variable'
    ) {
      throw createUserError(
        `Invalid use of @refetchable with @connection in fragment '${fragment.name}', refetchable connections must use variables for the after and first arguments.`,
        [
          connectionField.loc,
          after && after.value.kind !== 'Variable' ? after.value.loc : null,
          first && first.value.kind !== 'Variable' ? first.value.loc : null,
        ].filter(Boolean),
      );
    }
    forward = {
      count: first.value.variableName,
      cursor: after.value.variableName,
    };
  }
  return {forward, backward, path};
}

function getRefetchQueryName(fragment: Fragment): string | null {
  const refetchableDirective = fragment.directives.find(
    directive => directive.name === 'refetchable',
  );
  if (refetchableDirective == null) {
    return null;
  }
  const refetchArguments = getLiteralArgumentValues(refetchableDirective.args);
  const queryName = refetchArguments.queryName;
  if (queryName == null) {
    throw createUserError(
      "Expected the 'queryName' argument of @refetchable to be provided",
      [refetchableDirective.loc],
    );
  } else if (typeof queryName !== 'string') {
    const queryNameArg = refetchableDirective.args.find(
      arg => arg.name === 'queryName',
    );
    throw createUserError(
      `Expected the 'queryName' argument of @refetchable to be a string, got '${String(
        queryName,
      )}'.`,
      [queryNameArg?.loc ?? refetchableDirective.loc],
    );
  }
  return queryName;
}

function findArgument(field: Field, argumentName: string): Argument | null {
  return field.args.find(arg => arg.name === argumentName) ?? null;
}

module.exports = {
  SCHEMA_EXTENSION,
  transform: refetchableFragmentTransform,
};
