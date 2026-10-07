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

var Profiler = require('./GraphQLCompilerProfiler');

var invariant = require('invariant');

var _require = require('./CompilerError'),
    createUserError = _require.createUserError; // $FlowFixMe[untyped-import] - immutable.js is not flow-typed


var _require2 = require('immutable'),
    ImmutableOrderedMap = _require2.OrderedMap;

/**
 * An immutable representation of a corpus of documents being compiled together.
 * For each document, the context stores the IR and any validation errors.
 */
var CompilerContext = /*#__PURE__*/function () {
  // $FlowFixMe[value-as-type]
  function CompilerContext(schema) {
    this._isMutable = false;
    this._documents = new ImmutableOrderedMap();
    this._withTransform = new WeakMap();
    this._schema = schema;
  }
  /**
   * Returns the documents for the context in the order they were added.
   */


  var _proto = CompilerContext.prototype;

  _proto.documents = function documents() {
    return this._documents.toArray();
  };

  _proto.forEachDocument = function forEachDocument(fn) {
    this._documents.forEach(fn);
  };

  _proto.replace = function replace(node) {
    return this._update(this._documents.update(node.name, function (existing) {
      !existing ? process.env.NODE_ENV !== "production" ? invariant(false, 'CompilerContext: Expected to replace existing node %s, but ' + 'one was not found in the context.', node.name) : invariant(false) : void 0;
      return node;
    }));
  };

  _proto.add = function add(node) {
    return this._update(this._documents.update(node.name, function (existing) {
      !!existing ? process.env.NODE_ENV !== "production" ? invariant(false, 'CompilerContext: Duplicate document named `%s`. GraphQL ' + 'fragments and roots must have unique names.', node.name) : invariant(false) : void 0;
      return node;
    }));
  };

  _proto.addAll = function addAll(nodes) {
    return this.withMutations(function (mutable) {
      return nodes.reduce(function (ctx, definition) {
        return ctx.add(definition);
      }, mutable);
    });
  }
  /**
   * Apply a list of compiler transforms and return a new compiler context.
   */
  ;

  _proto.applyTransforms = function applyTransforms(transforms, reporter) {
    var _this = this;

    return Profiler.run('applyTransforms', function () {
      return transforms.reduce(function (ctx, transform) {
        return ctx.applyTransform(transform, reporter);
      }, _this);
    });
  }
  /**
   * Applies a transform to this context, returning a new context.
   *
   * This is memoized such that applying the same sequence of transforms will
   * not result in duplicated work.
   */
  ;

  _proto.applyTransform = function applyTransform(transform, reporter) {
    var transformed = this._withTransform.get(transform);

    if (!transformed) {
      var start = process.hrtime();
      transformed = Profiler.instrument(transform)(this);
      var delta = process.hrtime(start);
      var deltaMs = Math.round((delta[0] * 1e9 + delta[1]) / 1e6);
      reporter && reporter.reportTime(transform.name, deltaMs);

      this._withTransform.set(transform, transformed);
    }

    return transformed;
  };

  _proto.get = function get(name) {
    return this._documents.get(name);
  };

  _proto.getFragment = function getFragment(name, referencedFrom) {
    var node = this._documents.get(name);

    if (node == null) {
      throw createUserError("Cannot find fragment '".concat(name, "'."), referencedFrom != null ? [referencedFrom] : null);
    } else if (node.kind !== 'Fragment') {
      throw createUserError("Cannot find fragment '".concat(name, "', a document with this name exists ") + 'but is not a fragment.', [node.loc, referencedFrom].filter(Boolean));
    }

    return node;
  };

  _proto.getRoot = function getRoot(name) {
    var node = this._documents.get(name);

    if (node == null) {
      throw createUserError("Cannot find root '".concat(name, "'."));
    } else if (node.kind !== 'Root') {
      throw createUserError("Cannot find root '".concat(name, "', a document with this name exists but ") + 'is not a root.', [node.loc]);
    }

    return node;
  };

  _proto.remove = function remove(name) {
    return this._update(this._documents["delete"](name));
  };

  _proto.withMutations = function withMutations(fn) {
    var mutableCopy = this._update(this._documents.asMutable());

    mutableCopy._isMutable = true;
    var result = fn(mutableCopy);
    result._isMutable = false;
    result._documents = result._documents.asImmutable();
    return this._documents === result._documents ? this : result;
  };

  _proto._update = function _update(documents) {
    var context = this._isMutable ? this : new CompilerContext(this.getSchema());
    context._documents = documents;
    return context;
  };

  _proto.getSchema = function getSchema() {
    return this._schema;
  };

  return CompilerContext;
}();

module.exports = CompilerContext;