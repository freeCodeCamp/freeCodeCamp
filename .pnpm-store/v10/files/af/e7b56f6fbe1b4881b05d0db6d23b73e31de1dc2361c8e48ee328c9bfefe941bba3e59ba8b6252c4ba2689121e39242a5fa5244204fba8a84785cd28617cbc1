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

var RelayCompilerCache = require('../util/RelayCompilerCache');

var getModuleName = require('../util/getModuleName');

var graphql = require('graphql');

var path = require('path');

var util = require('util');

var cache = new RelayCompilerCache('RelayFindGraphQLTags', 'v1');

function memoizedFind(tagFinder, text, baseDir, file) {
  !file.exists ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayFindGraphQLTags: Called with non-existent file `%s`', file.relPath) : invariant(false) : void 0;
  return cache.getOrCompute(file.hash, find.bind(null, tagFinder, text, path.join(baseDir, file.relPath)));
}

function find(tagFinder, text, absPath) {
  var tags = tagFinder(text, absPath);
  var moduleName = getModuleName(absPath);
  tags.forEach(function (tag) {
    return validateTemplate(tag, moduleName, absPath);
  });
  return tags.map(function (tag) {
    return tag.template;
  });
}

function validateTemplate(_ref, moduleName, filePath) {
  var template = _ref.template,
      keyName = _ref.keyName,
      sourceLocationOffset = _ref.sourceLocationOffset;
  var ast = graphql.parse(new graphql.Source(template, filePath, sourceLocationOffset));
  ast.definitions.forEach(function (def) {
    if (def.kind === 'OperationDefinition') {
      !(def.name != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayFindGraphQLTags: In module `%s`, an operation requires a name.', moduleName, def.kind) : invariant(false) : void 0;
      var definitionName = def.name.value;
      var operationNameParts = definitionName.match(/^(.*)(Mutation|Query|Subscription)$/);
      !(operationNameParts && definitionName.startsWith(moduleName)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayFindGraphQLTags: Operation names in graphql tags must be prefixed ' + 'with the module name and end in "Mutation", "Query", or ' + '"Subscription". Got `%s` in module `%s`.', definitionName, moduleName) : invariant(false) : void 0;
    } else if (def.kind === 'FragmentDefinition') {
      var _definitionName = def.name.value;

      if (keyName != null) {
        !(_definitionName === moduleName + '_' + keyName) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayFindGraphQLTags: Container fragment names must be ' + '`<ModuleName>_<propName>`. Got `%s`, expected `%s`.', _definitionName, moduleName + '_' + keyName) : invariant(false) : void 0;
      } else {
        !_definitionName.startsWith(moduleName) ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayFindGraphQLTags: Fragment names in graphql tags must be prefixed ' + 'with the module name. Got `%s` in module `%s`.', _definitionName, moduleName) : invariant(false) : void 0;
      }
    }
  });
} // TODO: Not sure why this is defined here rather than imported, is it so that it doesn’t get stripped in prod?


function invariant(condition, msg) {
  if (!condition) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    throw new Error(util.format.apply(util, [msg].concat(args)));
  }
}

module.exports = {
  find: find,
  // Exported for testing only.
  memoizedFind: memoizedFind
};