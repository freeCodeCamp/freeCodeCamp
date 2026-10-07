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
const RelayParser = require('../core/RelayParser');
const SchemaUtils = require('../core/SchemaUtils');

const getLiteralArgumentValues = require('../core/getLiteralArgumentValues');

const {createCompilerError, createUserError} = require('../core/CompilerError');
const {parse} = require('graphql');
const {ConnectionInterface, RelayFeatureFlags} = require('relay-runtime');

import type CompilerContext from '../core/CompilerContext';
import type {
  Argument,
  Directive,
  Fragment,
  Handle,
  InlineFragment,
  LinkedField,
  Root,
  Selection,
  Variable,
  Location,
  Defer,
} from '../core/IR';
import type {Schema, CompositeTypeID} from '../core/Schema';
import type {ConnectionMetadata} from 'relay-runtime';

type Options = {
  documentName: string,
  // The current path
  path: Array<?string>,
  // Metadata recorded for @connection fields
  connectionMetadata: Array<ConnectionMetadata>,
  ...
};

type ConnectionArguments = {|
  handler: ?string,
  key: string,
  dynamicKey: Variable | null,
  filters: ?$ReadOnlyArray<string>,
  stream: ?{|
    if: ?Argument,
    initialCount: ?Argument,
    useCustomizedBatch: ?Argument,
    label: string,
  |},
|};

const AFTER = 'after';
const BEFORE = 'before';
const FIRST = 'first';
const KEY = 'key';
const LAST = 'last';

const CONNECTION = 'connection';
const STREAM_CONNECTION = 'stream_connection';
const HANDLER = 'handler';

/**
 * @public
 *
 * Transforms fields with the `@connection` directive:
 * - Verifies that the field type is connection-like.
 * - Adds a `handle` property to the field, either the user-provided `handle`
 *   argument or the default value "connection".
 * - Inserts a sub-fragment on the field to ensure that standard connection
 *   fields are fetched (e.g. cursors, node ids, page info).
 */
function connectionTransform(context: CompilerContext): CompilerContext {
  return IRTransformer.transform(
    context,
    {
      Fragment: visitFragmentOrRoot,
      LinkedField: visitLinkedField,
      Root: visitFragmentOrRoot,
    },
    node => ({
      documentName: node.name,
      path: [],
      connectionMetadata: [],
    }),
  );
}

const SCHEMA_EXTENSION = `
  directive @connection(
    key: String!
    filters: [String]
    handler: String
    dynamicKey_UNSTABLE: String
  ) on FIELD

  directive @stream_connection(
    key: String!
    filters: [String]
    handler: String
    initial_count: Int!
    if: Boolean = true
    use_customized_batch: Boolean = false
    dynamicKey_UNSTABLE: String
  ) on FIELD
`;

/**
 * @internal
 */
function visitFragmentOrRoot<N: Fragment | Root>(
  node: N,
  options: Options,
): ?N {
  // $FlowFixMe[incompatible-use]
  const transformedNode = this.traverse(node, options);
  const connectionMetadata = options.connectionMetadata;
  if (connectionMetadata.length) {
    return {
      ...transformedNode,
      metadata: {
        ...transformedNode.metadata,
        connection: connectionMetadata,
      },
    };
  }
  return transformedNode;
}

/**
 * @internal
 */
function visitLinkedField(field: LinkedField, options: Options): LinkedField {
  // $FlowFixMe[incompatible-use]
  const context: CompilerContext = this.getContext();
  const schema = context.getSchema();

  const nullableType = schema.getNullableType(field.type);

  const isPlural = schema.isList(nullableType);
  const path = options.path.concat(isPlural ? null : field.alias || field.name);
  // $FlowFixMe[incompatible-use]
  let transformedField: LinkedField = this.traverse(field, {
    ...options,
    path,
  });
  const connectionDirective = field.directives.find(
    directive =>
      directive.name === CONNECTION || directive.name === STREAM_CONNECTION,
  );
  if (!connectionDirective) {
    return transformedField;
  }
  if (!schema.isObject(nullableType) && !schema.isInterface(nullableType)) {
    throw new createUserError(
      `@${connectionDirective.name} used on invalid field '${field.name}'. ` +
        'Expected the return type to be a non-plural interface or object, ' +
        `got '${schema.getTypeString(field.type)}'.`,
      [transformedField.loc],
    );
  }

  validateConnectionSelection(transformedField);
  validateConnectionType(
    schema,
    transformedField,
    schema.assertCompositeType(nullableType),
    connectionDirective,
  );

  const connectionArguments = buildConnectionArguments(
    transformedField,
    connectionDirective,
  );

  const connectionMetadata = buildConnectionMetadata(
    transformedField,
    path,
    connectionArguments.stream != null,
  );
  options.connectionMetadata.push(connectionMetadata);

  const handle: Handle = {
    name: connectionArguments.handler ?? CONNECTION,
    key: connectionArguments.key,
    dynamicKey: connectionArguments.dynamicKey,
    filters: connectionArguments.filters,
  };

  const {direction} = connectionMetadata;
  if (direction != null) {
    const selections = transformConnectionSelections(
      // $FlowFixMe[incompatible-use]
      this.getContext(),
      transformedField,
      schema.assertCompositeType(nullableType),
      direction,
      connectionArguments,
      connectionDirective.loc,
      options.documentName,
    );
    transformedField = {
      ...transformedField,
      selections,
    };
  }
  return {
    ...transformedField,
    directives: transformedField.directives.filter(
      directive => directive !== connectionDirective,
    ),
    connection: true,
    handles: transformedField.handles
      ? [...transformedField.handles, handle]
      : [handle],
  };
}

function buildConnectionArguments(
  field: LinkedField,
  connectionDirective: Directive,
): ConnectionArguments {
  const {
    handler,
    key,
    label,
    filters: literalFilters,
  } = getLiteralArgumentValues(connectionDirective.args);
  if (handler != null && typeof handler !== 'string') {
    const handleArg = connectionDirective.args.find(
      arg => arg.name === 'handler',
    );
    throw createUserError(
      `Expected the ${HANDLER} argument to @${connectionDirective.name} to ` +
        `be a string literal for field ${field.name}.`,
      [handleArg?.value?.loc ?? connectionDirective.loc],
    );
  }
  if (typeof key !== 'string') {
    const keyArg = connectionDirective.args.find(arg => arg.name === 'key');
    throw createUserError(
      `Expected the ${KEY} argument to @${connectionDirective.name} to be a ` +
        `string literal for field ${field.name}.`,
      [keyArg?.value?.loc ?? connectionDirective.loc],
    );
  }
  const postfix = field.alias || field.name;
  if (!key.endsWith('_' + postfix)) {
    const keyArg = connectionDirective.args.find(arg => arg.name === 'key');
    throw createUserError(
      `Expected the ${KEY} argument to @${connectionDirective.name} to be of ` +
        `form <SomeName>_${postfix}, got '${key}'. ` +
        'For a detailed explanation, check out ' +
        'https://relay.dev/docs/en/pagination-container#connection',
      [keyArg?.value?.loc ?? connectionDirective.loc],
    );
  }
  if (
    literalFilters != null &&
    (!Array.isArray(literalFilters) ||
      literalFilters.some(filter => typeof filter !== 'string'))
  ) {
    const filtersArg = connectionDirective.args.find(
      arg => arg.name === 'filters',
    );
    throw createUserError(
      `Expected the 'filters' argument to @${connectionDirective.name} to be ` +
        'a string literal.',
      [filtersArg?.value?.loc ?? connectionDirective.loc],
    );
  }

  let filters = literalFilters;
  if (filters == null) {
    const generatedFilters = field.args
      .filter(
        arg =>
          !ConnectionInterface.isConnectionCall({
            name: arg.name,
            value: null,
          }),
      )
      .map(arg => arg.name);
    filters = generatedFilters.length !== 0 ? generatedFilters : null;
  }

  let stream = null;
  if (connectionDirective.name === STREAM_CONNECTION) {
    const initialCountArg = connectionDirective.args.find(
      arg => arg.name === 'initial_count',
    );
    const useCustomizedBatchArg = connectionDirective.args.find(
      arg => arg.name === 'use_customized_batch',
    );
    const ifArg = connectionDirective.args.find(arg => arg.name === 'if');
    stream = {
      if: ifArg,
      initialCount: initialCountArg,
      useCustomizedBatch: useCustomizedBatchArg,
      label: key,
    };
  }

  const dynamicKeyArg = connectionDirective.args.find(
    arg => arg.name === 'dynamicKey_UNSTABLE',
  );
  let dynamicKey: Variable | null = null;
  if (dynamicKeyArg != null) {
    if (
      RelayFeatureFlags.ENABLE_VARIABLE_CONNECTION_KEY &&
      dynamicKeyArg.value.kind === 'Variable'
    ) {
      dynamicKey = dynamicKeyArg.value;
    } else {
      throw createUserError(
        `Unsupported 'dynamicKey_UNSTABLE' argument to @${connectionDirective.name}. This argument is only valid when the feature flag is enabled and ` +
          'the variable must be a variable',
        [connectionDirective.loc],
      );
    }
  }

  return {
    handler,
    key,
    dynamicKey,
    filters: (filters: $FlowFixMe),
    stream,
  };
}

function buildConnectionMetadata(
  field: LinkedField,
  path: Array<?string>,
  stream: boolean,
): ConnectionMetadata {
  const pathHasPlural = path.includes(null);
  const firstArg = findArg(field, FIRST);
  const lastArg = findArg(field, LAST);
  let direction = null;
  let countArg = null;
  let cursorArg = null;
  if (firstArg && !lastArg) {
    direction = 'forward';
    countArg = firstArg;
    cursorArg = findArg(field, AFTER);
  } else if (lastArg && !firstArg) {
    direction = 'backward';
    countArg = lastArg;
    cursorArg = findArg(field, BEFORE);
  } else if (lastArg && firstArg) {
    direction = 'bidirectional';
    // TODO(T26511885) Maybe add connection metadata to this case
  }
  const countVariable =
    countArg && countArg.value.kind === 'Variable'
      ? countArg.value.variableName
      : null;
  const cursorVariable =
    cursorArg && cursorArg.value.kind === 'Variable'
      ? cursorArg.value.variableName
      : null;
  if (stream) {
    return {
      count: countVariable,
      cursor: cursorVariable,
      direction,
      path: pathHasPlural ? null : (path: $FlowFixMe),
      stream: true,
    };
  }
  return {
    count: countVariable,
    cursor: cursorVariable,
    direction,
    path: pathHasPlural ? null : (path: $FlowFixMe),
  };
}

/**
 * @internal
 *
 * Transforms the selections on a connection field, generating fields necessary
 * for pagination (edges.cursor, pageInfo, etc) and adding/merging them with
 * existing selections.
 */
function transformConnectionSelections(
  context: CompilerContext,
  field: LinkedField,
  nullableType: CompositeTypeID,
  direction: 'forward' | 'backward' | 'bidirectional',
  connectionArguments: ConnectionArguments,
  directiveLocation: Location,
  documentName: string,
): $ReadOnlyArray<Selection> {
  const schema = context.getSchema();
  const derivedFieldLocation = {kind: 'Derived', source: field.loc};
  const derivedDirectiveLocation = {
    kind: 'Derived',
    source: directiveLocation,
  };
  const {
    CURSOR,
    EDGES,
    END_CURSOR,
    HAS_NEXT_PAGE,
    HAS_PREV_PAGE,
    NODE,
    PAGE_INFO,
    START_CURSOR,
  } = ConnectionInterface.get();

  // Find existing edges/pageInfo selections
  let edgesSelection: ?LinkedField;
  let pageInfoSelection: ?LinkedField;
  field.selections.forEach(selection => {
    if (selection.kind === 'LinkedField') {
      if (selection.name === EDGES) {
        if (edgesSelection != null) {
          throw createCompilerError(
            `ConnectionTransform: Unexpected duplicate field '${EDGES}'.`,
            [edgesSelection.loc, selection.loc],
          );
        }
        edgesSelection = selection;
        return;
      } else if (selection.name === PAGE_INFO) {
        if (pageInfoSelection != null) {
          throw createCompilerError(
            `ConnectionTransform: Unexpected duplicate field '${PAGE_INFO}'.`,
            [pageInfoSelection.loc, selection.loc],
          );
        }
        pageInfoSelection = selection;
        return;
      }
    }
  });
  // If streaming is enabled, construct directives to apply to the edges/
  // pageInfo fields
  let streamDirective;
  const stream = connectionArguments.stream;
  if (stream != null) {
    streamDirective = {
      args: [
        stream.if,
        stream.initialCount,
        stream.useCustomizedBatch,
        {
          kind: 'Argument',
          loc: derivedDirectiveLocation,
          name: 'label',
          type: SchemaUtils.getNullableStringInput(schema),
          value: {
            kind: 'Literal',
            loc: derivedDirectiveLocation,
            value: stream.label,
          },
        },
      ].filter(Boolean),
      kind: 'Directive',
      loc: derivedDirectiveLocation,
      name: 'stream',
    };
  }
  // For backwards compatibility with earlier versions of this transform,
  // edges/pageInfo have to be generated as non-aliased fields (since product
  // code may be accessing the non-aliased response keys). But for streaming
  // mode we need to generate @stream/@defer directives on these fields *and*
  // we prefer to avoid generating extra selections (we want one payload per
  // item, not two as could happen with separate @stream directives on the
  // aliased and non-aliased edges fields). So we keep things simple by
  // disallowing aliases on edges/pageInfo in streaming mode.
  if (edgesSelection && edgesSelection.alias !== edgesSelection.name) {
    if (stream) {
      throw createUserError(
        `@stream_connection does not support aliasing the '${EDGES}' field.`,
        [edgesSelection.loc],
      );
    }
    edgesSelection = null;
  }
  if (pageInfoSelection && pageInfoSelection.alias !== pageInfoSelection.name) {
    if (stream) {
      throw createUserError(
        `@stream_connection does not support aliasing the '${PAGE_INFO}' field.`,
        [pageInfoSelection.loc],
      );
    }
    pageInfoSelection = null;
  }

  // Separately create transformed versions of edges/pageInfo so that we can
  // later replace the originals at the same point within the selection array
  let transformedEdgesSelection: ?LinkedField = edgesSelection;
  let transformedPageInfoSelection: ?(
    | Defer
    | InlineFragment
    | LinkedField
  ) = pageInfoSelection;
  const edgesType = schema.getFieldConfig(
    schema.expectField(nullableType, EDGES),
  ).type;

  const pageInfoType = schema.getFieldConfig(
    schema.expectField(nullableType, PAGE_INFO),
  ).type;

  if (transformedEdgesSelection == null) {
    transformedEdgesSelection = {
      alias: EDGES,
      args: [],
      connection: false,
      directives: [],
      handles: null,
      kind: 'LinkedField',
      loc: derivedFieldLocation,
      metadata: null,
      name: EDGES,
      selections: [],
      type: schema.assertLinkedFieldType(edgesType),
    };
  }
  if (transformedPageInfoSelection == null) {
    transformedPageInfoSelection = {
      alias: PAGE_INFO,
      args: [],
      connection: false,
      directives: [],
      handles: null,
      kind: 'LinkedField',
      loc: derivedFieldLocation,
      metadata: null,
      name: PAGE_INFO,
      selections: [],
      type: schema.assertLinkedFieldType(pageInfoType),
    };
  }

  // Generate (additional) fields on pageInfo and add to the transformed
  // pageInfo field
  const pageInfoRawType = schema.getRawType(pageInfoType);
  let pageInfoText;
  if (direction === 'forward') {
    pageInfoText = `fragment PageInfo on ${schema.getTypeString(
      pageInfoRawType,
    )} {
      ${END_CURSOR}
      ${HAS_NEXT_PAGE}
    }`;
  } else if (direction === 'backward') {
    pageInfoText = `fragment PageInfo on ${schema.getTypeString(
      pageInfoRawType,
    )}  {
      ${HAS_PREV_PAGE}
      ${START_CURSOR}
    }`;
  } else {
    pageInfoText = `fragment PageInfo on ${schema.getTypeString(
      pageInfoRawType,
    )}  {
      ${END_CURSOR}
      ${HAS_NEXT_PAGE}
      ${HAS_PREV_PAGE}
      ${START_CURSOR}
    }`;
  }
  const pageInfoAst = parse(pageInfoText);
  const pageInfoFragment = RelayParser.transform(schema, [
    pageInfoAst.definitions[0],
  ])[0];
  if (transformedPageInfoSelection.kind !== 'LinkedField') {
    throw createCompilerError(
      'ConnectionTransform: Expected generated pageInfo selection to be ' +
        'a LinkedField',
      [field.loc],
    );
  }
  transformedPageInfoSelection = {
    ...transformedPageInfoSelection,
    selections: [
      ...transformedPageInfoSelection.selections,
      {
        directives: [],
        kind: 'InlineFragment',
        loc: derivedFieldLocation,
        metadata: null,
        selections: pageInfoFragment.selections,
        typeCondition: pageInfoFragment.type,
      },
    ],
  };
  // When streaming the pageInfo field has to be deferred
  if (stream != null) {
    transformedPageInfoSelection = {
      if: stream.if?.value ?? null,
      label: `${documentName}$defer$${stream.label}$${PAGE_INFO}`,
      kind: 'Defer',
      loc: derivedFieldLocation,
      selections: [transformedPageInfoSelection],
    };
  }

  // Generate additional fields on edges and append to the transformed edges
  // selection
  const edgeText = `
    fragment Edges on ${schema.getTypeString(schema.getRawType(edgesType))} {
      ${CURSOR}
      ${NODE} {
        __typename # rely on GenerateRequisiteFieldTransform to add "id"
      }
    }
  `;
  const edgeAst = parse(edgeText);
  const edgeFragment = RelayParser.transform(schema, [
    edgeAst.definitions[0],
  ])[0];
  // When streaming the edges field needs @stream
  transformedEdgesSelection = {
    ...transformedEdgesSelection,
    directives:
      streamDirective != null
        ? [...transformedEdgesSelection.directives, streamDirective]
        : transformedEdgesSelection.directives,
    selections: [
      ...transformedEdgesSelection.selections,
      {
        directives: [],
        kind: 'InlineFragment',
        loc: derivedFieldLocation,
        metadata: null,
        selections: edgeFragment.selections,
        typeCondition: edgeFragment.type,
      },
    ],
  };
  // Copy the original selections, replacing edges/pageInfo (if present)
  // with the generated locations. This is to maintain the original field
  // ordering.
  const selections = field.selections.map(selection => {
    if (
      transformedEdgesSelection != null &&
      edgesSelection != null &&
      selection === edgesSelection
    ) {
      return transformedEdgesSelection;
    } else if (
      transformedPageInfoSelection != null &&
      pageInfoSelection != null &&
      selection === pageInfoSelection
    ) {
      return transformedPageInfoSelection;
    } else {
      return selection;
    }
  });
  // If edges/pageInfo were missing, append the generated versions instead.
  if (edgesSelection == null && transformedEdgesSelection != null) {
    selections.push(transformedEdgesSelection);
  }
  if (pageInfoSelection == null && transformedPageInfoSelection != null) {
    selections.push(transformedPageInfoSelection);
  }
  return selections;
}

function findArg(field: LinkedField, argName: string): ?Argument {
  return field.args && field.args.find(arg => arg.name === argName);
}

/**
 * @internal
 *
 * Validates that the selection is a valid connection:
 * - Specifies a first or last argument to prevent accidental, unconstrained
 *   data access.
 * - Has an `edges` selection, otherwise there is nothing to paginate.
 *
 * TODO: This implementation requires the edges field to be a direct selection
 * and not contained within an inline fragment or fragment spread. It's
 * technically possible to remove this restriction if this pattern becomes
 * common/necessary.
 */
function validateConnectionSelection(field: LinkedField): void {
  const {EDGES} = ConnectionInterface.get();

  if (!findArg(field, FIRST) && !findArg(field, LAST)) {
    throw createUserError(
      `Expected field '${field.name}' to have a '${FIRST}' or '${LAST}' ` +
        'argument.',
      [field.loc],
    );
  }
  if (
    !field.selections.some(
      selection => selection.kind === 'LinkedField' && selection.name === EDGES,
    )
  ) {
    throw createUserError(
      `Expected field '${field.name}' to have an '${EDGES}' selection.`,
      [field.loc],
    );
  }
}

/**
 * @internal
 *
 * Validates that the type satisfies the Connection specification:
 * - The type has an edges field, and edges have scalar `cursor` and object
 *   `node` fields.
 * - The type has a page info field which is an object with the correct
 *   subfields.
 */
function validateConnectionType(
  schema: Schema,
  field: LinkedField,
  nullableType: CompositeTypeID,
  connectionDirective: Directive,
): void {
  const directiveName = connectionDirective.name;
  const {
    CURSOR,
    EDGES,
    END_CURSOR,
    HAS_NEXT_PAGE,
    HAS_PREV_PAGE,
    NODE,
    PAGE_INFO,
    START_CURSOR,
  } = ConnectionInterface.get();

  const typeName = schema.getTypeString(nullableType);
  if (!schema.hasField(nullableType, EDGES)) {
    throw createUserError(
      `@${directiveName} used on invalid field '${field.name}'. Expected the ` +
        `field type '${typeName}' to have an '${EDGES}' field`,
      [field.loc],
    );
  }

  const edges = schema.getFieldConfig(schema.expectField(nullableType, EDGES));

  const edgesType = schema.getNullableType(edges.type);
  if (!schema.isList(edgesType)) {
    throw createUserError(
      `@${directiveName} used on invalid field '${field.name}'. Expected the ` +
        `field type '${typeName}' to have an '${EDGES}' field that returns ` +
        'a list of objects.',
      [field.loc],
    );
  }
  let edgeType = schema.getNullableType(schema.getListItemType(edgesType));
  if (!schema.isObject(edgeType) && !schema.isInterface(edgeType)) {
    throw createUserError(
      `@${directiveName} used on invalid field '${field.name}'. Expected the ` +
        `field type '${typeName}' to have an '${EDGES}' field that returns ` +
        'a list of objects.',
      [field.loc],
    );
  }
  edgeType = schema.assertCompositeType(edgeType);

  if (!schema.hasField(edgeType, NODE)) {
    throw createUserError(
      `@${directiveName} used on invalid field '${field.name}'. Expected the ` +
        `field type '${typeName}' to have an '${EDGES} { ${NODE} }' field ` +
        'that returns an object, interface, or union.',
      [field.loc],
    );
  }
  const node = schema.getFieldConfig(schema.expectField(edgeType, NODE));

  const nodeType = schema.getNullableType(node.type);
  if (!(schema.isAbstractType(nodeType) || schema.isObject(nodeType))) {
    throw createUserError(
      `@${directiveName} used on invalid field '${field.name}'. Expected the ` +
        `field type '${typeName}' to have an '${EDGES} { ${NODE} }' field ` +
        'that returns an object, interface, or union.',
      [field.loc],
    );
  }

  if (!schema.hasField(edgeType, CURSOR)) {
    throw createUserError(
      `@${directiveName} used on invalid field '${field.name}'. Expected the ` +
        `field type '${typeName}' to have an '${EDGES} { ${CURSOR} }' field ` +
        'that returns a scalar value.',
      [field.loc],
    );
  }
  const cursor = schema.getFieldConfig(schema.expectField(edgeType, CURSOR));

  if (!schema.isScalar(schema.getNullableType(cursor.type))) {
    throw createUserError(
      `@${directiveName} used on invalid field '${field.name}'. Expected the ` +
        `field type '${typeName}' to have an '${EDGES} { ${CURSOR} }' field ` +
        'that returns a scalar value.',
      [field.loc],
    );
  }

  if (!schema.hasField(nullableType, PAGE_INFO)) {
    throw createUserError(
      `@${directiveName} used on invalid field '${field.name}'. Expected the ` +
        `field type '${typeName}' to have a '${PAGE_INFO}' field that returns ` +
        'an object.',
      [field.loc],
    );
  }

  const pageInfo = schema.getFieldConfig(
    schema.expectField(nullableType, PAGE_INFO),
  );

  const pageInfoType = schema.getNullableType(pageInfo.type);
  if (!schema.isObject(pageInfoType)) {
    throw createUserError(
      `@${directiveName} used on invalid field '${field.name}'. Expected the ` +
        `field type '${typeName}' to have a '${PAGE_INFO}' field that ` +
        'returns an object.',
      [field.loc],
    );
  }

  [END_CURSOR, HAS_NEXT_PAGE, HAS_PREV_PAGE, START_CURSOR].forEach(
    fieldName => {
      const pageInfoField = schema.getFieldConfig(
        schema.expectField(schema.assertObjectType(pageInfoType), fieldName),
      );
      if (!schema.isScalar(schema.getNullableType(pageInfoField.type))) {
        throw createUserError(
          `@${directiveName} used on invalid field '${field.name}'. Expected ` +
            `the field type '${typeName}' to have a '${PAGE_INFO} { ${fieldName} }' ` +
            'field returns a scalar.',
          [field.loc],
        );
      }
    },
  );
}

module.exports = {
  buildConnectionMetadata,
  CONNECTION,
  SCHEMA_EXTENSION,
  transform: connectionTransform,
};
