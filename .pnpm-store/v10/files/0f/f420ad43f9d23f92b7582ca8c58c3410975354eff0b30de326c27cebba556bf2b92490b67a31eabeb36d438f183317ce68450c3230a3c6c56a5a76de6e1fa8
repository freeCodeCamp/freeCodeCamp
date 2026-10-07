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

var IRVisitor = require('../core/IRVisitor');

var getLiteralArgumentValues = require('../core/getLiteralArgumentValues');

var inferRootArgumentDefinitions = require('../core/inferRootArgumentDefinitions');

var _require = require('../core/CompilerError'),
    createUserError = _require.createUserError,
    eachWithCombinedError = _require.eachWithCombinedError;

var _require2 = require('./query-generators'),
    buildRefetchOperation = _require2.buildRefetchOperation;

var SCHEMA_EXTENSION = "\n  directive @refetchable(\n    queryName: String!\n  ) on FRAGMENT_DEFINITION\n";
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

function refetchableFragmentTransform(context) {
  var schema = context.getSchema();
  var refetchOperations = buildRefetchMap(context);
  var nextContext = context;
  eachWithCombinedError(refetchOperations, function (_ref) {
    var refetchName = _ref[0],
        fragment = _ref[1];

    var _buildRefetchOperatio = buildRefetchOperation(schema, fragment, refetchName),
        identifierField = _buildRefetchOperatio.identifierField,
        path = _buildRefetchOperatio.path,
        node = _buildRefetchOperatio.node,
        transformedFragment = _buildRefetchOperatio.transformedFragment;

    var connectionMetadata = extractConnectionMetadata(context.getSchema(), transformedFragment);
    nextContext = nextContext.replace((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedFragment), {}, {
      metadata: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, transformedFragment.metadata || {}), {}, {
        refetch: {
          connection: connectionMetadata !== null && connectionMetadata !== void 0 ? connectionMetadata : null,
          operation: refetchName,
          fragmentPathInResult: path,
          identifierField: identifierField
        }
      })
    }));
    nextContext = nextContext.add((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node), {}, {
      metadata: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, node.metadata || {}), {}, {
        derivedFrom: transformedFragment.name,
        isRefetchableQuery: true
      })
    }));
  });
  return nextContext;
}
/**
 * Walk the documents of a compiler context and create a mapping of
 * refetch operation names to the source fragment from which the refetch
 * operation should be derived.
 */


function buildRefetchMap(context) {
  var refetchOperations = new Map();
  eachWithCombinedError(context.documents(), function (node) {
    if (node.kind !== 'Fragment') {
      return;
    }

    var refetchName = getRefetchQueryName(node);

    if (refetchName === null) {
      return;
    }

    var previousOperation = refetchOperations.get(refetchName);

    if (previousOperation != null) {
      throw createUserError("Duplicate definition for @refetchable operation '".concat(refetchName, "' from fragments '").concat(node.name, "' and '").concat(previousOperation.name, "'"), [node.loc, previousOperation.loc]);
    }

    refetchOperations.set(refetchName, node);
  });
  var transformed = inferRootArgumentDefinitions(context);
  return new Map(Array.from(refetchOperations.entries(), function (_ref2) {
    var name = _ref2[0],
        fragment = _ref2[1];
    return [name, transformed.getFragment(fragment.name)];
  }));
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


function extractConnectionMetadata(schema, fragment) {
  var fields = [];
  var connectionField = null;
  var path = null;
  IRVisitor.visit(fragment, {
    LinkedField: {
      enter: function enter(field) {
        fields.push(field);

        if (field.connection === true || field.handles && field.handles.some(function (handle) {
          return handle.name === 'connection';
        })) {
          // Disallow multiple @connections
          if (connectionField != null) {
            throw createUserError("Invalid use of @refetchable with @connection in fragment '".concat(fragment.name, "', at most once @connection can appear in a refetchable fragment."), [field.loc]);
          } // Disallow connections within plurals


          var pluralOnPath = fields.find(function (pathField) {
            return schema.isList(schema.getNullableType(pathField.type));
          });

          if (pluralOnPath) {
            throw createUserError("Invalid use of @refetchable with @connection in fragment '".concat(fragment.name, "', refetchable connections cannot appear inside plural fields."), [field.loc, pluralOnPath.loc]);
          }

          connectionField = field;
          path = fields.map(function (pathField) {
            return pathField.alias;
          });
        }
      },
      leave: function leave() {
        fields.pop();
      }
    }
  });

  if (connectionField == null || path == null) {
    return;
  } // Validate arguments: if either of before/last appear they must both appear
  // and use variables (not scalar values)


  var backward = null;
  var before = findArgument(connectionField, 'before');
  var last = findArgument(connectionField, 'last');

  if (before || last) {
    if (!before || !last || before.value.kind !== 'Variable' || last.value.kind !== 'Variable') {
      throw createUserError("Invalid use of @refetchable with @connection in fragment '".concat(fragment.name, "', refetchable connections must use variables for the before and last arguments."), [connectionField.loc, before && before.value.kind !== 'Variable' ? before.value.loc : null, last && last.value.kind !== 'Variable' ? last.value.loc : null].filter(Boolean));
    }

    backward = {
      count: last.value.variableName,
      cursor: before.value.variableName
    };
  } // Validate arguments: if either of after/first appear they must both appear
  // and use variables (not scalar values)


  var forward = null;
  var after = findArgument(connectionField, 'after');
  var first = findArgument(connectionField, 'first');

  if (after || first) {
    if (!after || !first || after.value.kind !== 'Variable' || first.value.kind !== 'Variable') {
      throw createUserError("Invalid use of @refetchable with @connection in fragment '".concat(fragment.name, "', refetchable connections must use variables for the after and first arguments."), [connectionField.loc, after && after.value.kind !== 'Variable' ? after.value.loc : null, first && first.value.kind !== 'Variable' ? first.value.loc : null].filter(Boolean));
    }

    forward = {
      count: first.value.variableName,
      cursor: after.value.variableName
    };
  }

  return {
    forward: forward,
    backward: backward,
    path: path
  };
}

function getRefetchQueryName(fragment) {
  var refetchableDirective = fragment.directives.find(function (directive) {
    return directive.name === 'refetchable';
  });

  if (refetchableDirective == null) {
    return null;
  }

  var refetchArguments = getLiteralArgumentValues(refetchableDirective.args);
  var queryName = refetchArguments.queryName;

  if (queryName == null) {
    throw createUserError("Expected the 'queryName' argument of @refetchable to be provided", [refetchableDirective.loc]);
  } else if (typeof queryName !== 'string') {
    var _queryNameArg$loc;

    var queryNameArg = refetchableDirective.args.find(function (arg) {
      return arg.name === 'queryName';
    });
    throw createUserError("Expected the 'queryName' argument of @refetchable to be a string, got '".concat(String(queryName), "'."), [(_queryNameArg$loc = queryNameArg === null || queryNameArg === void 0 ? void 0 : queryNameArg.loc) !== null && _queryNameArg$loc !== void 0 ? _queryNameArg$loc : refetchableDirective.loc]);
  }

  return queryName;
}

function findArgument(field, argumentName) {
  var _field$args$find;

  return (_field$args$find = field.args.find(function (arg) {
    return arg.name === argumentName;
  })) !== null && _field$args$find !== void 0 ? _field$args$find : null;
}

module.exports = {
  SCHEMA_EXTENSION: SCHEMA_EXTENSION,
  transform: refetchableFragmentTransform
};