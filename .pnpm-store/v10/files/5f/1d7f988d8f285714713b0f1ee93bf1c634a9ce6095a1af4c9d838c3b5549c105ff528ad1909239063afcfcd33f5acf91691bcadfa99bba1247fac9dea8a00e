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

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var Printer = require('../core/IRPrinter');

var Profiler = require('../core/GraphQLCompilerProfiler');

var RelayCodeGenerator = require('./RelayCodeGenerator');

var filterContextForNode = require('../core/filterContextForNode');

function createFragmentContext(context, transforms, reporter) {
  // The fragment is used for reading data from the normalized store.
  return context.applyTransforms([].concat((0, _toConsumableArray2["default"])(transforms.commonTransforms), (0, _toConsumableArray2["default"])(transforms.fragmentTransforms)), reporter);
}

function createPrintContext(context, transforms, reporter) {
  // The unflattened query is used for printing, since flattening creates an
  // invalid query.
  return context.applyTransforms([].concat((0, _toConsumableArray2["default"])(transforms.commonTransforms), (0, _toConsumableArray2["default"])(transforms.queryTransforms), (0, _toConsumableArray2["default"])(transforms.printTransforms)), reporter);
}

function createCodeGenContext(context, transforms, reporter) {
  // The flattened query is used for codegen in order to reduce the number of
  // duplicate fields that must be processed during response normalization.
  return context.applyTransforms([].concat((0, _toConsumableArray2["default"])(transforms.commonTransforms), (0, _toConsumableArray2["default"])(transforms.queryTransforms), (0, _toConsumableArray2["default"])(transforms.codegenTransforms)), reporter);
}

function compile(context, fragmentContext, printContext, codeGenContext) {
  var results = [];
  var schema = context.getSchema(); // Add everything from codeGenContext, these are the operations as well as
  // SplitOperations from @match.

  var _iterator = (0, _createForOfIteratorHelper2["default"])(codeGenContext.documents()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;

      if (node.kind === 'Root') {
        var fragment = fragmentContext.getRoot(node.name);
        var request = {
          kind: 'Request',
          fragment: {
            kind: 'Fragment',
            argumentDefinitions: fragment.argumentDefinitions,
            directives: fragment.directives,
            loc: {
              kind: 'Derived',
              source: node.loc
            },
            metadata: null,
            name: fragment.name,
            selections: fragment.selections,
            type: fragment.type
          },
          id: null,
          loc: node.loc,
          metadata: node.metadata || {},
          name: fragment.name,
          root: node,
          text: printOperation(printContext, fragment.name)
        };
        results.push([request, RelayCodeGenerator.generate(schema, request)]);
      } else {
        results.push([node, RelayCodeGenerator.generate(schema, node)]);
      }
    } // Add all the Fragments from the fragmentContext for the reader ASTs.

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = (0, _createForOfIteratorHelper2["default"])(fragmentContext.documents()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _node = _step2.value;

      if (_node.kind === 'Fragment') {
        results.push([_node, RelayCodeGenerator.generate(schema, _node)]);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return results;
}

var OPERATION_ORDER = {
  Root: 0,
  SplitOperation: 1,
  Fragment: 2
};

function printOperation(printContext, name) {
  var printableRoot = printContext.getRoot(name);
  return filterContextForNode(printableRoot, printContext).documents().sort(function (a, b) {
    if (a.kind !== b.kind) {
      return OPERATION_ORDER[a.kind] - OPERATION_ORDER[b.kind];
    }

    return a.name < b.name ? -1 : 1;
  }).map(function (doc) {
    return Printer.print(printContext.getSchema(), doc);
  }).join('\n');
}
/**
 * Transforms the provided compiler context
 *
 * compileRelayArtifacts generates artifacts for Relay's runtime as a result of
 * applying a series of transforms. Each kind of artifact is dependent on
 * transforms being applied in the following order:
 *
 *   - Fragment Readers: commonTransforms, fragmentTransforms
 *   - Operation Writers: commonTransforms, queryTransforms, codegenTransforms
 *   - GraphQL Text: commonTransforms, queryTransforms, printTransforms
 *
 * The order of the transforms applied for each artifact below is important.
 * CompilerContext will memoize applying each transform, so while
 * `commonTransforms` appears in each artifacts' application, it will not result
 * in repeated work as long as the order remains consistent across each context.
 */


function compileRelayArtifacts(context, transforms, reporter) {
  return Profiler.run('GraphQLCompiler.compile', function () {
    var fragmentContext = createFragmentContext(context, transforms, reporter);
    var printContext = createPrintContext(context, transforms, reporter);
    var codeGenContext = createCodeGenContext(context, transforms, reporter);
    return compile(context, fragmentContext, printContext, codeGenContext);
  });
}

module.exports = compileRelayArtifacts;