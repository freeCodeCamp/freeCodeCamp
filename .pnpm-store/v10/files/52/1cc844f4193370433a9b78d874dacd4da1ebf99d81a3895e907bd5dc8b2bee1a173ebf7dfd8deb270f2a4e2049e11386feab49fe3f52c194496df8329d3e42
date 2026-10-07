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

var Profiler = require('../../core/GraphQLCompilerProfiler');

var babylon = require('@babel/parser');

var util = require('util');

// Attempt to be as inclusive as possible of source text.
var BABYLON_OPTIONS = {
  allowImportExportEverywhere: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  sourceType: 'module',
  plugins: ['asyncGenerators', 'classProperties', ['decorators', {
    decoratorsBeforeExport: true
  }], 'doExpressions', 'dynamicImport', 'exportExtensions', ['flow', {
    enums: true
  }], 'functionBind', 'functionSent', 'jsx', 'nullishCoalescingOperator', 'objectRestSpread', 'optionalChaining', 'optionalCatchBinding'],
  strictMode: false
};

function find(text) {
  var result = []; // $FlowFixMe Discovered when typing babel/parser

  var ast = babylon.parse(text, BABYLON_OPTIONS);
  var visitors = {
    TaggedTemplateExpression: function TaggedTemplateExpression(node) {
      if (isGraphQLTag(node.tag)) {
        result.push({
          keyName: null,
          template: node.quasi.quasis[0].value.raw,
          sourceLocationOffset: getSourceLocationOffset(node.quasi)
        });
      }
    }
  };
  visit(ast, visitors);
  return result;
}

var IGNORED_KEYS = {
  comments: true,
  end: true,
  leadingComments: true,
  loc: true,
  name: true,
  start: true,
  trailingComments: true,
  type: true
};

function isGraphQLTag(tag) {
  return tag.type === 'Identifier' && tag.name === 'graphql';
}

function getTemplateNode(quasi) {
  var quasis = quasi.quasis;
  !(quasis && quasis.length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'FindGraphQLTags: Substitutions are not allowed in graphql tags.') : invariant(false) : void 0;
  return quasis[0];
}

function getSourceLocationOffset(quasi) {
  var loc = getTemplateNode(quasi).loc.start;
  return {
    line: loc.line,
    column: loc.column + 1 // babylon is 0-indexed, graphql expects 1-indexed

  };
}

function invariant(condition, msg) {
  if (!condition) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    throw new Error(util.format.apply(util, [msg].concat(args)));
  }
}

function visit(node, visitors) {
  // $FlowFixMe Discovered when typing babel
  var fn = visitors[node.type];

  if (fn != null) {
    fn(node);
    return;
  }

  traverse(node, visitors);
}

function traverse(node, visitors) {
  for (var key in node) {
    if (IGNORED_KEYS[key]) {
      continue;
    }

    var prop = node[key];

    if (prop && typeof prop === 'object' && typeof prop.type === 'string') {
      visit(prop, visitors);
    } else if (Array.isArray(prop)) {
      prop.forEach(function (item) {
        if (item && typeof item === 'object' && typeof item.type === 'string') {
          visit(item, visitors);
        }
      });
    }
  }
}

module.exports = {
  find: Profiler.instrument(find, 'FindGraphQLTags.find')
};