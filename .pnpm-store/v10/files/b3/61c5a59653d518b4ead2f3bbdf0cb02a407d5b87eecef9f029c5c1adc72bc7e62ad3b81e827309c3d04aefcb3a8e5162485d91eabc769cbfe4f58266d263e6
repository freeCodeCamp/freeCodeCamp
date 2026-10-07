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

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var ASTCache = require('./ASTCache');

var GraphQL = require('graphql');

var Profiler = require('./GraphQLCompilerProfiler');

var fs = require('fs');

var invariant = require('invariant');

var path = require('path');

var _require = require('./RelayFindGraphQLTags'),
    memoizedFind = _require.memoizedFind;

var parseGraphQL = Profiler.instrument(GraphQL.parse, 'GraphQL.parse');

module.exports = function (tagFinder, getFileFilter) {
  var memoizedTagFinder = memoizedFind.bind(null, tagFinder);

  function parseFile(baseDir, file) {
    var result = parseFileWithSources(baseDir, file);

    if (result) {
      return result.document;
    }
  } // Throws an error if parsing the file fails


  function parseFileWithSources(baseDir, file) {
    var filePath = path.join(baseDir, file.relPath);
    var text = '';

    try {
      text = fs.readFileSync(filePath, 'utf8');
    } catch (_unused) {
      !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelaySourceModuleParser: Files should be filtered before passed to the ' + 'parser, got unfiltered file `%s`.', file.relPath) : invariant(false) : void 0;
    }

    var astDefinitions = [];
    var sources = [];
    memoizedTagFinder(text, baseDir, file).forEach(function (template) {
      var source = new GraphQL.Source(template, file.relPath);
      var ast = parseGraphQL(source);
      !ast.definitions.length ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelaySourceModuleParser: Expected GraphQL text to contain at least one ' + 'definition (fragment, mutation, query, subscription), got `%s`.', template) : invariant(false) : void 0;
      sources.push(source.body);
      astDefinitions.push.apply(astDefinitions, (0, _toConsumableArray2["default"])(ast.definitions));
    });
    return {
      document: {
        kind: 'Document',
        definitions: astDefinitions
      },
      sources: sources
    };
  }

  function getParser(baseDir) {
    return new ASTCache({
      baseDir: baseDir,
      parse: parseFile
    });
  }

  function defaultGetFileFilter(baseDir) {
    return function (file) {
      var filePath = path.join(baseDir, file.relPath);
      var text = '';

      try {
        text = fs.readFileSync(filePath, 'utf8');
      } catch (_unused2) {
        // eslint-disable no-console
        console.warn("RelaySourceModuleParser: Unable to read the file \"".concat(filePath, "\". Looks like it was removed."));
        return false;
      }

      return text.indexOf('graphql') >= 0;
    };
  }

  return {
    getParser: getParser,
    getFileFilter: getFileFilter !== null && getFileFilter !== void 0 ? getFileFilter : defaultGetFileFilter,
    parseFile: parseFile,
    parseFileWithSources: parseFileWithSources
  };
};