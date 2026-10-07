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

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var IRTransformer = require('../core/IRTransformer');

var RelayParser = require('../core/RelayParser');

var SchemaUtils = require('../core/SchemaUtils');

var getLiteralArgumentValues = require('../core/getLiteralArgumentValues');

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError,
    createUserError = _require.createUserError;

var _require2 = require('graphql'),
    parse = _require2.parse;

var _require3 = require('relay-runtime'),
    ConnectionInterface = _require3.ConnectionInterface,
    RelayFeatureFlags = _require3.RelayFeatureFlags;

var AFTER = 'after';
var BEFORE = 'before';
var FIRST = 'first';
var KEY = 'key';
var LAST = 'last';
var CONNECTION = 'connection';
var STREAM_CONNECTION = 'stream_connection';
var HANDLER = 'handler';
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

function connectionTransform(context) {
  return IRTransformer.transform(context, {
    Fragment: visitFragmentOrRoot,
    LinkedField: visitLinkedField,
    Root: visitFragmentOrRoot
  }, function (node) {
    return {
      documentName: node.name,
      path: [],
      connectionMetadata: []
    };
  });
}

var SCHEMA_EXTENSION = "\n  directive @connection(\n    key: String!\n    filters: [String]\n    handler: String\n    dynamicKey_UNSTABLE: String\n  ) on FIELD\n\n  directive @stream_connection(\n    key: String!\n    filters: [String]\n    handler: String\n    initial_count: Int!\n    if: Boolean = true\n    use_customized_batch: Boolean = false\n    dynamicKey_UNSTABLE: String\n  ) on FIELD\n";
/**
 * @internal
 */

function visitFragmentOrRoot(node, options) {
  // $FlowFixMe[incompatible-use]
  var transformedNode = this.traverse(node, options);
  var connectionMetadata = options.connectionMetadata;

  if (connectionMetadata.length) {
    return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedNode), {}, {
      metadata: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedNode.metadata), {}, {
        connection: connectionMetadata
      })
    });
  }

  return transformedNode;
}
/**
 * @internal
 */


function visitLinkedField(field, options) {
  var _connectionArguments$;

  // $FlowFixMe[incompatible-use]
  var context = this.getContext();
  var schema = context.getSchema();
  var nullableType = schema.getNullableType(field.type);
  var isPlural = schema.isList(nullableType);
  var path = options.path.concat(isPlural ? null : field.alias || field.name); // $FlowFixMe[incompatible-use]

  var transformedField = this.traverse(field, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, options), {}, {
    path: path
  }));
  var connectionDirective = field.directives.find(function (directive) {
    return directive.name === CONNECTION || directive.name === STREAM_CONNECTION;
  });

  if (!connectionDirective) {
    return transformedField;
  }

  if (!schema.isObject(nullableType) && !schema.isInterface(nullableType)) {
    throw new createUserError("@".concat(connectionDirective.name, " used on invalid field '").concat(field.name, "'. ") + 'Expected the return type to be a non-plural interface or object, ' + "got '".concat(schema.getTypeString(field.type), "'."), [transformedField.loc]);
  }

  validateConnectionSelection(transformedField);
  validateConnectionType(schema, transformedField, schema.assertCompositeType(nullableType), connectionDirective);
  var connectionArguments = buildConnectionArguments(transformedField, connectionDirective);
  var connectionMetadata = buildConnectionMetadata(transformedField, path, connectionArguments.stream != null);
  options.connectionMetadata.push(connectionMetadata);
  var handle = {
    name: (_connectionArguments$ = connectionArguments.handler) !== null && _connectionArguments$ !== void 0 ? _connectionArguments$ : CONNECTION,
    key: connectionArguments.key,
    dynamicKey: connectionArguments.dynamicKey,
    filters: connectionArguments.filters
  };
  var direction = connectionMetadata.direction;

  if (direction != null) {
    var selections = transformConnectionSelections( // $FlowFixMe[incompatible-use]
    this.getContext(), transformedField, schema.assertCompositeType(nullableType), direction, connectionArguments, connectionDirective.loc, options.documentName);
    transformedField = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedField), {}, {
      selections: selections
    });
  }

  return (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedField), {}, {
    directives: transformedField.directives.filter(function (directive) {
      return directive !== connectionDirective;
    }),
    connection: true,
    handles: transformedField.handles ? [].concat((0, _toConsumableArray2["default"])(transformedField.handles), [handle]) : [handle]
  });
}

function buildConnectionArguments(field, connectionDirective) {
  var _getLiteralArgumentVa = getLiteralArgumentValues(connectionDirective.args),
      handler = _getLiteralArgumentVa.handler,
      key = _getLiteralArgumentVa.key,
      label = _getLiteralArgumentVa.label,
      literalFilters = _getLiteralArgumentVa.filters;

  if (handler != null && typeof handler !== 'string') {
    var _handleArg$value$loc, _handleArg$value;

    var handleArg = connectionDirective.args.find(function (arg) {
      return arg.name === 'handler';
    });
    throw createUserError("Expected the ".concat(HANDLER, " argument to @").concat(connectionDirective.name, " to ") + "be a string literal for field ".concat(field.name, "."), [(_handleArg$value$loc = handleArg === null || handleArg === void 0 ? void 0 : (_handleArg$value = handleArg.value) === null || _handleArg$value === void 0 ? void 0 : _handleArg$value.loc) !== null && _handleArg$value$loc !== void 0 ? _handleArg$value$loc : connectionDirective.loc]);
  }

  if (typeof key !== 'string') {
    var _keyArg$value$loc, _keyArg$value;

    var keyArg = connectionDirective.args.find(function (arg) {
      return arg.name === 'key';
    });
    throw createUserError("Expected the ".concat(KEY, " argument to @").concat(connectionDirective.name, " to be a ") + "string literal for field ".concat(field.name, "."), [(_keyArg$value$loc = keyArg === null || keyArg === void 0 ? void 0 : (_keyArg$value = keyArg.value) === null || _keyArg$value === void 0 ? void 0 : _keyArg$value.loc) !== null && _keyArg$value$loc !== void 0 ? _keyArg$value$loc : connectionDirective.loc]);
  }

  var postfix = field.alias || field.name;

  if (!key.endsWith('_' + postfix)) {
    var _keyArg$value$loc2, _keyArg$value2;

    var _keyArg = connectionDirective.args.find(function (arg) {
      return arg.name === 'key';
    });

    throw createUserError("Expected the ".concat(KEY, " argument to @").concat(connectionDirective.name, " to be of ") + "form <SomeName>_".concat(postfix, ", got '").concat(key, "'. ") + 'For a detailed explanation, check out ' + 'https://relay.dev/docs/en/pagination-container#connection', [(_keyArg$value$loc2 = _keyArg === null || _keyArg === void 0 ? void 0 : (_keyArg$value2 = _keyArg.value) === null || _keyArg$value2 === void 0 ? void 0 : _keyArg$value2.loc) !== null && _keyArg$value$loc2 !== void 0 ? _keyArg$value$loc2 : connectionDirective.loc]);
  }

  if (literalFilters != null && (!Array.isArray(literalFilters) || literalFilters.some(function (filter) {
    return typeof filter !== 'string';
  }))) {
    var _filtersArg$value$loc, _filtersArg$value;

    var filtersArg = connectionDirective.args.find(function (arg) {
      return arg.name === 'filters';
    });
    throw createUserError("Expected the 'filters' argument to @".concat(connectionDirective.name, " to be ") + 'a string literal.', [(_filtersArg$value$loc = filtersArg === null || filtersArg === void 0 ? void 0 : (_filtersArg$value = filtersArg.value) === null || _filtersArg$value === void 0 ? void 0 : _filtersArg$value.loc) !== null && _filtersArg$value$loc !== void 0 ? _filtersArg$value$loc : connectionDirective.loc]);
  }

  var filters = literalFilters;

  if (filters == null) {
    var generatedFilters = field.args.filter(function (arg) {
      return !ConnectionInterface.isConnectionCall({
        name: arg.name,
        value: null
      });
    }).map(function (arg) {
      return arg.name;
    });
    filters = generatedFilters.length !== 0 ? generatedFilters : null;
  }

  var stream = null;

  if (connectionDirective.name === STREAM_CONNECTION) {
    var initialCountArg = connectionDirective.args.find(function (arg) {
      return arg.name === 'initial_count';
    });
    var useCustomizedBatchArg = connectionDirective.args.find(function (arg) {
      return arg.name === 'use_customized_batch';
    });
    var ifArg = connectionDirective.args.find(function (arg) {
      return arg.name === 'if';
    });
    stream = {
      "if": ifArg,
      initialCount: initialCountArg,
      useCustomizedBatch: useCustomizedBatchArg,
      label: key
    };
  }

  var dynamicKeyArg = connectionDirective.args.find(function (arg) {
    return arg.name === 'dynamicKey_UNSTABLE';
  });
  var dynamicKey = null;

  if (dynamicKeyArg != null) {
    if (RelayFeatureFlags.ENABLE_VARIABLE_CONNECTION_KEY && dynamicKeyArg.value.kind === 'Variable') {
      dynamicKey = dynamicKeyArg.value;
    } else {
      throw createUserError("Unsupported 'dynamicKey_UNSTABLE' argument to @".concat(connectionDirective.name, ". This argument is only valid when the feature flag is enabled and ") + 'the variable must be a variable', [connectionDirective.loc]);
    }
  }

  return {
    handler: handler,
    key: key,
    dynamicKey: dynamicKey,
    filters: filters,
    stream: stream
  };
}

function buildConnectionMetadata(field, path, stream) {
  var pathHasPlural = path.includes(null);
  var firstArg = findArg(field, FIRST);
  var lastArg = findArg(field, LAST);
  var direction = null;
  var countArg = null;
  var cursorArg = null;

  if (firstArg && !lastArg) {
    direction = 'forward';
    countArg = firstArg;
    cursorArg = findArg(field, AFTER);
  } else if (lastArg && !firstArg) {
    direction = 'backward';
    countArg = lastArg;
    cursorArg = findArg(field, BEFORE);
  } else if (lastArg && firstArg) {
    direction = 'bidirectional'; // TODO(T26511885) Maybe add connection metadata to this case
  }

  var countVariable = countArg && countArg.value.kind === 'Variable' ? countArg.value.variableName : null;
  var cursorVariable = cursorArg && cursorArg.value.kind === 'Variable' ? cursorArg.value.variableName : null;

  if (stream) {
    return {
      count: countVariable,
      cursor: cursorVariable,
      direction: direction,
      path: pathHasPlural ? null : path,
      stream: true
    };
  }

  return {
    count: countVariable,
    cursor: cursorVariable,
    direction: direction,
    path: pathHasPlural ? null : path
  };
}
/**
 * @internal
 *
 * Transforms the selections on a connection field, generating fields necessary
 * for pagination (edges.cursor, pageInfo, etc) and adding/merging them with
 * existing selections.
 */


function transformConnectionSelections(context, field, nullableType, direction, connectionArguments, directiveLocation, documentName) {
  var schema = context.getSchema();
  var derivedFieldLocation = {
    kind: 'Derived',
    source: field.loc
  };
  var derivedDirectiveLocation = {
    kind: 'Derived',
    source: directiveLocation
  };

  var _ConnectionInterface$ = ConnectionInterface.get(),
      CURSOR = _ConnectionInterface$.CURSOR,
      EDGES = _ConnectionInterface$.EDGES,
      END_CURSOR = _ConnectionInterface$.END_CURSOR,
      HAS_NEXT_PAGE = _ConnectionInterface$.HAS_NEXT_PAGE,
      HAS_PREV_PAGE = _ConnectionInterface$.HAS_PREV_PAGE,
      NODE = _ConnectionInterface$.NODE,
      PAGE_INFO = _ConnectionInterface$.PAGE_INFO,
      START_CURSOR = _ConnectionInterface$.START_CURSOR; // Find existing edges/pageInfo selections


  var edgesSelection;
  var pageInfoSelection;
  field.selections.forEach(function (selection) {
    if (selection.kind === 'LinkedField') {
      if (selection.name === EDGES) {
        if (edgesSelection != null) {
          throw createCompilerError("ConnectionTransform: Unexpected duplicate field '".concat(EDGES, "'."), [edgesSelection.loc, selection.loc]);
        }

        edgesSelection = selection;
        return;
      } else if (selection.name === PAGE_INFO) {
        if (pageInfoSelection != null) {
          throw createCompilerError("ConnectionTransform: Unexpected duplicate field '".concat(PAGE_INFO, "'."), [pageInfoSelection.loc, selection.loc]);
        }

        pageInfoSelection = selection;
        return;
      }
    }
  }); // If streaming is enabled, construct directives to apply to the edges/
  // pageInfo fields

  var streamDirective;
  var stream = connectionArguments.stream;

  if (stream != null) {
    streamDirective = {
      args: [stream["if"], stream.initialCount, stream.useCustomizedBatch, {
        kind: 'Argument',
        loc: derivedDirectiveLocation,
        name: 'label',
        type: SchemaUtils.getNullableStringInput(schema),
        value: {
          kind: 'Literal',
          loc: derivedDirectiveLocation,
          value: stream.label
        }
      }].filter(Boolean),
      kind: 'Directive',
      loc: derivedDirectiveLocation,
      name: 'stream'
    };
  } // For backwards compatibility with earlier versions of this transform,
  // edges/pageInfo have to be generated as non-aliased fields (since product
  // code may be accessing the non-aliased response keys). But for streaming
  // mode we need to generate @stream/@defer directives on these fields *and*
  // we prefer to avoid generating extra selections (we want one payload per
  // item, not two as could happen with separate @stream directives on the
  // aliased and non-aliased edges fields). So we keep things simple by
  // disallowing aliases on edges/pageInfo in streaming mode.


  if (edgesSelection && edgesSelection.alias !== edgesSelection.name) {
    if (stream) {
      throw createUserError("@stream_connection does not support aliasing the '".concat(EDGES, "' field."), [edgesSelection.loc]);
    }

    edgesSelection = null;
  }

  if (pageInfoSelection && pageInfoSelection.alias !== pageInfoSelection.name) {
    if (stream) {
      throw createUserError("@stream_connection does not support aliasing the '".concat(PAGE_INFO, "' field."), [pageInfoSelection.loc]);
    }

    pageInfoSelection = null;
  } // Separately create transformed versions of edges/pageInfo so that we can
  // later replace the originals at the same point within the selection array


  var transformedEdgesSelection = edgesSelection;
  var transformedPageInfoSelection = pageInfoSelection;
  var edgesType = schema.getFieldConfig(schema.expectField(nullableType, EDGES)).type;
  var pageInfoType = schema.getFieldConfig(schema.expectField(nullableType, PAGE_INFO)).type;

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
      type: schema.assertLinkedFieldType(edgesType)
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
      type: schema.assertLinkedFieldType(pageInfoType)
    };
  } // Generate (additional) fields on pageInfo and add to the transformed
  // pageInfo field


  var pageInfoRawType = schema.getRawType(pageInfoType);
  var pageInfoText;

  if (direction === 'forward') {
    pageInfoText = "fragment PageInfo on ".concat(schema.getTypeString(pageInfoRawType), " {\n      ").concat(END_CURSOR, "\n      ").concat(HAS_NEXT_PAGE, "\n    }");
  } else if (direction === 'backward') {
    pageInfoText = "fragment PageInfo on ".concat(schema.getTypeString(pageInfoRawType), "  {\n      ").concat(HAS_PREV_PAGE, "\n      ").concat(START_CURSOR, "\n    }");
  } else {
    pageInfoText = "fragment PageInfo on ".concat(schema.getTypeString(pageInfoRawType), "  {\n      ").concat(END_CURSOR, "\n      ").concat(HAS_NEXT_PAGE, "\n      ").concat(HAS_PREV_PAGE, "\n      ").concat(START_CURSOR, "\n    }");
  }

  var pageInfoAst = parse(pageInfoText);
  var pageInfoFragment = RelayParser.transform(schema, [pageInfoAst.definitions[0]])[0];

  if (transformedPageInfoSelection.kind !== 'LinkedField') {
    throw createCompilerError('ConnectionTransform: Expected generated pageInfo selection to be ' + 'a LinkedField', [field.loc]);
  }

  transformedPageInfoSelection = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedPageInfoSelection), {}, {
    selections: [].concat((0, _toConsumableArray2["default"])(transformedPageInfoSelection.selections), [{
      directives: [],
      kind: 'InlineFragment',
      loc: derivedFieldLocation,
      metadata: null,
      selections: pageInfoFragment.selections,
      typeCondition: pageInfoFragment.type
    }])
  }); // When streaming the pageInfo field has to be deferred

  if (stream != null) {
    var _stream$if$value, _stream$if;

    transformedPageInfoSelection = {
      "if": (_stream$if$value = (_stream$if = stream["if"]) === null || _stream$if === void 0 ? void 0 : _stream$if.value) !== null && _stream$if$value !== void 0 ? _stream$if$value : null,
      label: "".concat(documentName, "$defer$").concat(stream.label, "$").concat(PAGE_INFO),
      kind: 'Defer',
      loc: derivedFieldLocation,
      selections: [transformedPageInfoSelection]
    };
  } // Generate additional fields on edges and append to the transformed edges
  // selection


  var edgeText = "\n    fragment Edges on ".concat(schema.getTypeString(schema.getRawType(edgesType)), " {\n      ").concat(CURSOR, "\n      ").concat(NODE, " {\n        __typename # rely on GenerateRequisiteFieldTransform to add \"id\"\n      }\n    }\n  ");
  var edgeAst = parse(edgeText);
  var edgeFragment = RelayParser.transform(schema, [edgeAst.definitions[0]])[0]; // When streaming the edges field needs @stream

  transformedEdgesSelection = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedEdgesSelection), {}, {
    directives: streamDirective != null ? [].concat((0, _toConsumableArray2["default"])(transformedEdgesSelection.directives), [streamDirective]) : transformedEdgesSelection.directives,
    selections: [].concat((0, _toConsumableArray2["default"])(transformedEdgesSelection.selections), [{
      directives: [],
      kind: 'InlineFragment',
      loc: derivedFieldLocation,
      metadata: null,
      selections: edgeFragment.selections,
      typeCondition: edgeFragment.type
    }])
  }); // Copy the original selections, replacing edges/pageInfo (if present)
  // with the generated locations. This is to maintain the original field
  // ordering.

  var selections = field.selections.map(function (selection) {
    if (transformedEdgesSelection != null && edgesSelection != null && selection === edgesSelection) {
      return transformedEdgesSelection;
    } else if (transformedPageInfoSelection != null && pageInfoSelection != null && selection === pageInfoSelection) {
      return transformedPageInfoSelection;
    } else {
      return selection;
    }
  }); // If edges/pageInfo were missing, append the generated versions instead.

  if (edgesSelection == null && transformedEdgesSelection != null) {
    selections.push(transformedEdgesSelection);
  }

  if (pageInfoSelection == null && transformedPageInfoSelection != null) {
    selections.push(transformedPageInfoSelection);
  }

  return selections;
}

function findArg(field, argName) {
  return field.args && field.args.find(function (arg) {
    return arg.name === argName;
  });
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


function validateConnectionSelection(field) {
  var _ConnectionInterface$2 = ConnectionInterface.get(),
      EDGES = _ConnectionInterface$2.EDGES;

  if (!findArg(field, FIRST) && !findArg(field, LAST)) {
    throw createUserError("Expected field '".concat(field.name, "' to have a '").concat(FIRST, "' or '").concat(LAST, "' ") + 'argument.', [field.loc]);
  }

  if (!field.selections.some(function (selection) {
    return selection.kind === 'LinkedField' && selection.name === EDGES;
  })) {
    throw createUserError("Expected field '".concat(field.name, "' to have an '").concat(EDGES, "' selection."), [field.loc]);
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


function validateConnectionType(schema, field, nullableType, connectionDirective) {
  var directiveName = connectionDirective.name;

  var _ConnectionInterface$3 = ConnectionInterface.get(),
      CURSOR = _ConnectionInterface$3.CURSOR,
      EDGES = _ConnectionInterface$3.EDGES,
      END_CURSOR = _ConnectionInterface$3.END_CURSOR,
      HAS_NEXT_PAGE = _ConnectionInterface$3.HAS_NEXT_PAGE,
      HAS_PREV_PAGE = _ConnectionInterface$3.HAS_PREV_PAGE,
      NODE = _ConnectionInterface$3.NODE,
      PAGE_INFO = _ConnectionInterface$3.PAGE_INFO,
      START_CURSOR = _ConnectionInterface$3.START_CURSOR;

  var typeName = schema.getTypeString(nullableType);

  if (!schema.hasField(nullableType, EDGES)) {
    throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected the ") + "field type '".concat(typeName, "' to have an '").concat(EDGES, "' field"), [field.loc]);
  }

  var edges = schema.getFieldConfig(schema.expectField(nullableType, EDGES));
  var edgesType = schema.getNullableType(edges.type);

  if (!schema.isList(edgesType)) {
    throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected the ") + "field type '".concat(typeName, "' to have an '").concat(EDGES, "' field that returns ") + 'a list of objects.', [field.loc]);
  }

  var edgeType = schema.getNullableType(schema.getListItemType(edgesType));

  if (!schema.isObject(edgeType) && !schema.isInterface(edgeType)) {
    throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected the ") + "field type '".concat(typeName, "' to have an '").concat(EDGES, "' field that returns ") + 'a list of objects.', [field.loc]);
  }

  edgeType = schema.assertCompositeType(edgeType);

  if (!schema.hasField(edgeType, NODE)) {
    throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected the ") + "field type '".concat(typeName, "' to have an '").concat(EDGES, " { ").concat(NODE, " }' field ") + 'that returns an object, interface, or union.', [field.loc]);
  }

  var node = schema.getFieldConfig(schema.expectField(edgeType, NODE));
  var nodeType = schema.getNullableType(node.type);

  if (!(schema.isAbstractType(nodeType) || schema.isObject(nodeType))) {
    throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected the ") + "field type '".concat(typeName, "' to have an '").concat(EDGES, " { ").concat(NODE, " }' field ") + 'that returns an object, interface, or union.', [field.loc]);
  }

  if (!schema.hasField(edgeType, CURSOR)) {
    throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected the ") + "field type '".concat(typeName, "' to have an '").concat(EDGES, " { ").concat(CURSOR, " }' field ") + 'that returns a scalar value.', [field.loc]);
  }

  var cursor = schema.getFieldConfig(schema.expectField(edgeType, CURSOR));

  if (!schema.isScalar(schema.getNullableType(cursor.type))) {
    throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected the ") + "field type '".concat(typeName, "' to have an '").concat(EDGES, " { ").concat(CURSOR, " }' field ") + 'that returns a scalar value.', [field.loc]);
  }

  if (!schema.hasField(nullableType, PAGE_INFO)) {
    throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected the ") + "field type '".concat(typeName, "' to have a '").concat(PAGE_INFO, "' field that returns ") + 'an object.', [field.loc]);
  }

  var pageInfo = schema.getFieldConfig(schema.expectField(nullableType, PAGE_INFO));
  var pageInfoType = schema.getNullableType(pageInfo.type);

  if (!schema.isObject(pageInfoType)) {
    throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected the ") + "field type '".concat(typeName, "' to have a '").concat(PAGE_INFO, "' field that ") + 'returns an object.', [field.loc]);
  }

  [END_CURSOR, HAS_NEXT_PAGE, HAS_PREV_PAGE, START_CURSOR].forEach(function (fieldName) {
    var pageInfoField = schema.getFieldConfig(schema.expectField(schema.assertObjectType(pageInfoType), fieldName));

    if (!schema.isScalar(schema.getNullableType(pageInfoField.type))) {
      throw createUserError("@".concat(directiveName, " used on invalid field '").concat(field.name, "'. Expected ") + "the field type '".concat(typeName, "' to have a '").concat(PAGE_INFO, " { ").concat(fieldName, " }' ") + 'field returns a scalar.', [field.loc]);
    }
  });
}

module.exports = {
  buildConnectionMetadata: buildConnectionMetadata,
  CONNECTION: CONNECTION,
  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
  transform: connectionTransform
};