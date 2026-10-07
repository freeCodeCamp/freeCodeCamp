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

var Profiler = require('./GraphQLCompilerProfiler'); // $FlowFixMe[untyped-import] : Immutable is not typed


var _require = require('immutable'),
    ImmutableMap = _require.Map;

var ASTCache = /*#__PURE__*/function () {
  function ASTCache(config) {
    this._documents = new Map();
    this._baseDir = config.baseDir;
    this._parse = Profiler.instrument(config.parse, 'ASTCache.parseFn');
  } // Short-term: we don't do subscriptions/delta updates, instead always use all definitions
  // $FlowFixMe[value-as-type]


  var _proto = ASTCache.prototype;

  _proto.documents = function documents() {
    return ImmutableMap(this._documents);
  } // parse should return the set of changes
  ;

  _proto.parseFiles = function parseFiles(files) {
    var _this = this;

    var documents = ImmutableMap();
    files.forEach(function (file) {
      if (!file.exists) {
        _this._documents["delete"](file.relPath);

        return;
      }

      var doc = function () {
        try {
          return _this._parse(_this._baseDir, file);
        } catch (error) {
          throw new Error("Parse error: ".concat(error, " in \"").concat(file.relPath, "\""));
        }
      }();

      if (!doc) {
        _this._documents["delete"](file.relPath);

        return;
      }

      documents = documents.set(file.relPath, doc);

      _this._documents.set(file.relPath, doc);
    });
    return documents;
  };

  return ASTCache;
}();

module.exports = ASTCache;